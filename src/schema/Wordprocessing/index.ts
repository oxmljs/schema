import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../framework/OxmlLeafTextElement';
import { OxmlPartRootElement } from '../../framework/OxmlPartRootElement';
import { OxmlAttr } from '../../framework/OxmlAttr';
import { OxmlType } from '../../framework/OxmlType';
import { Int32Value } from '../../framework/types/Int32Value';
import { StringValue } from '../../framework/types/StringValue';
import { OnOffValue } from '../../framework/types/OnOffValue';
import { HexBinaryValue } from '../../framework/types/HexBinaryValue';
import { UInt32Value } from '../../framework/types/UInt32Value';
import { UInt16Value } from '../../framework/types/UInt16Value';
import { Int16Value } from '../../framework/types/Int16Value';
import { Base64BinaryValue } from '../../framework/types/Base64BinaryValue';
import { DateTimeValue } from '../../framework/types/DateTimeValue';
import { IntegerValue } from '../../framework/types/IntegerValue';
import { ByteValue } from '../../framework/types/ByteValue';
import { SpaceProcessingModeValues, SpaceProcessingModeValuesArray } from '..';import { Group as VGroup } from '../Vml';
import { ImageFile as VImageFile } from '../Vml';
import { Line as VLine } from '../Vml';
import { Oval as VOval } from '../Vml';
import { PolyLine as VPolyLine } from '../Vml';
import { Rectangle as VRectangle } from '../Vml';
import { RoundRectangle as VRoundRectangle } from '../Vml';
import { Shape as VShape } from '../Vml';
import { Shapetype as VShapetype } from '../Vml';
import { ShapeDefaults as OShapeDefaults } from '../Vml/Office';
import { ShapeLayout as OShapeLayout } from '../Vml/Office';
import { ConflictInsertion as W14ConflictInsertion } from '../Office2010/Word';
import { ConflictDeletion as W14ConflictDeletion } from '../Office2010/Word';
import { CustomXmlConflictInsertionRangeStart as W14CustomXmlConflictInsertionRangeStart } from '../Office2010/Word';
import { CustomXmlConflictInsertionRangeEnd as W14CustomXmlConflictInsertionRangeEnd } from '../Office2010/Word';
import { CustomXmlConflictDeletionRangeStart as W14CustomXmlConflictDeletionRangeStart } from '../Office2010/Word';
import { CustomXmlConflictDeletionRangeEnd as W14CustomXmlConflictDeletionRangeEnd } from '../Office2010/Word';
import { RunConflictInsertion as W14RunConflictInsertion } from '../Office2010/Word';
import { RunConflictDeletion as W14RunConflictDeletion } from '../Office2010/Word';
import { Background as VBackground } from '../Vml';
import { Paragraph as MParagraph } from '../Math';
import { OfficeMath as MOfficeMath } from '../Math';
import { Accent as MAccent } from '../Math';
import { Bar as MBar } from '../Math';
import { Box as MBox } from '../Math';
import { BorderBox as MBorderBox } from '../Math';
import { Delimiter as MDelimiter } from '../Math';
import { EquationArray as MEquationArray } from '../Math';
import { Fraction as MFraction } from '../Math';
import { MathFunction as MMathFunction } from '../Math';
import { GroupChar as MGroupChar } from '../Math';
import { LimitLower as MLimitLower } from '../Math';
import { LimitUpper as MLimitUpper } from '../Math';
import { Matrix as MMatrix } from '../Math';
import { Nary as MNary } from '../Math';
import { Phantom as MPhantom } from '../Math';
import { Radical as MRadical } from '../Math';
import { PreSubSuper as MPreSubSuper } from '../Math';
import { Subscript as MSubscript } from '../Math';
import { SubSuperscript as MSubSuperscript } from '../Math';
import { Superscript as MSuperscript } from '../Math';
import { Run as MRun } from '../Math';
import { DataBinding as W15DataBinding } from '../Office2013/Word';
import { Color as W15Color } from '../Office2013/Word';
import { Appearance as W15Appearance } from '../Office2013/Word';
import { WebExtensionLinked as W15WebExtensionLinked } from '../Office2013/Word';
import { WebExtensionCreated as W15WebExtensionCreated } from '../Office2013/Word';
import { EntityPickerEmpty as W14EntityPickerEmpty } from '../Office2010/Word';
import { SdtContentCheckBox as W14SdtContentCheckBox } from '../Office2010/Word';
import { SdtRepeatedSection as W15SdtRepeatedSection } from '../Office2013/Word';
import { SdtRepeatedSectionItem as W15SdtRepeatedSectionItem } from '../Office2013/Word';
import { FootnoteColumns as W15FootnoteColumns } from '../Office2013/Word';
import { Glow as W14Glow } from '../Office2010/Word';
import { Shadow as W14Shadow } from '../Office2010/Word';
import { Reflection as W14Reflection } from '../Office2010/Word';
import { TextOutlineEffect as W14TextOutlineEffect } from '../Office2010/Word';
import { FillTextEffect as W14FillTextEffect } from '../Office2010/Word';
import { Scene3D as W14Scene3D } from '../Office2010/Word';
import { Properties3D as W14Properties3D } from '../Office2010/Word';
import { Ligatures as W14Ligatures } from '../Office2010/Word';
import { NumberingFormat as W14NumberingFormat } from '../Office2010/Word';
import { NumberSpacing as W14NumberSpacing } from '../Office2010/Word';
import { StylisticSets as W14StylisticSets } from '../Office2010/Word';
import { ContextualAlternatives as W14ContextualAlternatives } from '../Office2010/Word';
import { MathProperties as MMathProperties } from '../Math';
import { SchemaLibrary as SlSchemaLibrary } from '../CustomXmlSchemaReferences';
import { DocumentId as W14DocumentId } from '../Office2010/Word';
import { DiscardImageEditingData as W14DiscardImageEditingData } from '../Office2010/Word';
import { DefaultImageDpi as W14DefaultImageDpi } from '../Office2010/Word';
import { ConflictMode as W14ConflictMode } from '../Office2010/Word';
import { ChartTrackingRefBased as W15ChartTrackingRefBased } from '../Office2013/Word';
import { PersistentDocumentId as W15PersistentDocumentId } from '../Office2013/Word';
import { Anchor as WpAnchor } from '../Drawing/Wordprocessing';
import { Inline as WpInline } from '../Drawing/Wordprocessing';
import { Arc as VArc } from '../Vml';
import { Curve as VCurve } from '../Vml';
import { OleObject as OOleObject } from '../Vml/Office';


export enum OnOffOnlyValues {
    /** undefined. Serialized value: `on` */
    On = 'on',
    /** undefined. Serialized value: `off` */
    Off = 'off',
}

export const OnOffOnlyValuesArray = [
    OnOffOnlyValues.On,
    OnOffOnlyValues.Off,
] as const;

export enum HighlightColorValues {
    /** Black Highlighting Color. Serialized value: `black` */
    Black = 'black',
    /** Blue Highlighting Color. Serialized value: `blue` */
    Blue = 'blue',
    /** Cyan Highlighting Color. Serialized value: `cyan` */
    Cyan = 'cyan',
    /** Green Highlighting Color. Serialized value: `green` */
    Green = 'green',
    /** Magenta Highlighting Color. Serialized value: `magenta` */
    Magenta = 'magenta',
    /** Red Highlighting Color. Serialized value: `red` */
    Red = 'red',
    /** Yellow Highlighting Color. Serialized value: `yellow` */
    Yellow = 'yellow',
    /** White Highlighting Color. Serialized value: `white` */
    White = 'white',
    /** Dark Blue Highlighting Color. Serialized value: `darkBlue` */
    DarkBlue = 'darkBlue',
    /** Dark Cyan Highlighting Color. Serialized value: `darkCyan` */
    DarkCyan = 'darkCyan',
    /** Dark Green Highlighting Color. Serialized value: `darkGreen` */
    DarkGreen = 'darkGreen',
    /** Dark Magenta Highlighting Color. Serialized value: `darkMagenta` */
    DarkMagenta = 'darkMagenta',
    /** Dark Red Highlighting Color. Serialized value: `darkRed` */
    DarkRed = 'darkRed',
    /** Dark Yellow Highlighting Color. Serialized value: `darkYellow` */
    DarkYellow = 'darkYellow',
    /** Dark Gray Highlighting Color. Serialized value: `darkGray` */
    DarkGray = 'darkGray',
    /** Light Gray Highlighting Color. Serialized value: `lightGray` */
    LightGray = 'lightGray',
    /** No Text Highlighting. Serialized value: `none` */
    None = 'none',
}

export const HighlightColorValuesArray = [
    HighlightColorValues.Black,
    HighlightColorValues.Blue,
    HighlightColorValues.Cyan,
    HighlightColorValues.Green,
    HighlightColorValues.Magenta,
    HighlightColorValues.Red,
    HighlightColorValues.Yellow,
    HighlightColorValues.White,
    HighlightColorValues.DarkBlue,
    HighlightColorValues.DarkCyan,
    HighlightColorValues.DarkGreen,
    HighlightColorValues.DarkMagenta,
    HighlightColorValues.DarkRed,
    HighlightColorValues.DarkYellow,
    HighlightColorValues.DarkGray,
    HighlightColorValues.LightGray,
    HighlightColorValues.None,
] as const;

export enum AutomaticColorValues {
    /** Automatically Determined Color. Serialized value: `auto` */
    Auto = 'auto',
}

export const AutomaticColorValuesArray = [
    AutomaticColorValues.Auto,
] as const;

export enum UnderlineValues {
    /** Single Underline. Serialized value: `single` */
    Single = 'single',
    /** Underline Non-Space Characters Only. Serialized value: `words` */
    Words = 'words',
    /** Double Underline. Serialized value: `double` */
    Double = 'double',
    /** Thick Underline. Serialized value: `thick` */
    Thick = 'thick',
    /** Dotted Underline. Serialized value: `dotted` */
    Dotted = 'dotted',
    /** Thick Dotted Underline. Serialized value: `dottedHeavy` */
    DottedHeavy = 'dottedHeavy',
    /** Dashed Underline. Serialized value: `dash` */
    Dash = 'dash',
    /** Thick Dashed Underline. Serialized value: `dashedHeavy` */
    DashedHeavy = 'dashedHeavy',
    /** Long Dashed Underline. Serialized value: `dashLong` */
    DashLong = 'dashLong',
    /** Thick Long Dashed Underline. Serialized value: `dashLongHeavy` */
    DashLongHeavy = 'dashLongHeavy',
    /** Dash-Dot Underline. Serialized value: `dotDash` */
    DotDash = 'dotDash',
    /** Thick Dash-Dot Underline. Serialized value: `dashDotHeavy` */
    DashDotHeavy = 'dashDotHeavy',
    /** Dash-Dot-Dot Underline. Serialized value: `dotDotDash` */
    DotDotDash = 'dotDotDash',
    /** Thick Dash-Dot-Dot Underline. Serialized value: `dashDotDotHeavy` */
    DashDotDotHeavy = 'dashDotDotHeavy',
    /** Wave Underline. Serialized value: `wave` */
    Wave = 'wave',
    /** Heavy Wave Underline. Serialized value: `wavyHeavy` */
    WavyHeavy = 'wavyHeavy',
    /** Double Wave Underline. Serialized value: `wavyDouble` */
    WavyDouble = 'wavyDouble',
    /** No Underline. Serialized value: `none` */
    None = 'none',
}

export const UnderlineValuesArray = [
    UnderlineValues.Single,
    UnderlineValues.Words,
    UnderlineValues.Double,
    UnderlineValues.Thick,
    UnderlineValues.Dotted,
    UnderlineValues.DottedHeavy,
    UnderlineValues.Dash,
    UnderlineValues.DashedHeavy,
    UnderlineValues.DashLong,
    UnderlineValues.DashLongHeavy,
    UnderlineValues.DotDash,
    UnderlineValues.DashDotHeavy,
    UnderlineValues.DotDotDash,
    UnderlineValues.DashDotDotHeavy,
    UnderlineValues.Wave,
    UnderlineValues.WavyHeavy,
    UnderlineValues.WavyDouble,
    UnderlineValues.None,
] as const;

export enum TextEffectValues {
    /** Blinking Background Animation. Serialized value: `blinkBackground` */
    BlinkBackground = 'blinkBackground',
    /** Colored Lights Animation. Serialized value: `lights` */
    Lights = 'lights',
    /** Black Dashed Line Animation. Serialized value: `antsBlack` */
    AntsBlack = 'antsBlack',
    /** Marching Red Ants. Serialized value: `antsRed` */
    AntsRed = 'antsRed',
    /** Shimmer Animation. Serialized value: `shimmer` */
    Shimmer = 'shimmer',
    /** Sparkling Lights Animation. Serialized value: `sparkle` */
    Sparkle = 'sparkle',
    /** No Animation. Serialized value: `none` */
    None = 'none',
}

export const TextEffectValuesArray = [
    TextEffectValues.BlinkBackground,
    TextEffectValues.Lights,
    TextEffectValues.AntsBlack,
    TextEffectValues.AntsRed,
    TextEffectValues.Shimmer,
    TextEffectValues.Sparkle,
    TextEffectValues.None,
] as const;

export enum VerticalPositionValues {
    /** Regular Vertical Positioning. Serialized value: `baseline` */
    Baseline = 'baseline',
    /** Superscript. Serialized value: `superscript` */
    Superscript = 'superscript',
    /** Subscript. Serialized value: `subscript` */
    Subscript = 'subscript',
}

export const VerticalPositionValuesArray = [
    VerticalPositionValues.Baseline,
    VerticalPositionValues.Superscript,
    VerticalPositionValues.Subscript,
] as const;

export enum EmphasisMarkValues {
    /** No Emphasis Mark. Serialized value: `none` */
    None = 'none',
    /** Dot Emphasis Mark Above Characters. Serialized value: `dot` */
    Dot = 'dot',
    /** Comma Emphasis Mark Above Characters. Serialized value: `comma` */
    Comma = 'comma',
    /** Circle Emphasis Mark Above Characters. Serialized value: `circle` */
    Circle = 'circle',
    /** Dot Emphasis Mark Below Characters. Serialized value: `underDot` */
    UnderDot = 'underDot',
}

export const EmphasisMarkValuesArray = [
    EmphasisMarkValues.None,
    EmphasisMarkValues.Dot,
    EmphasisMarkValues.Comma,
    EmphasisMarkValues.Circle,
    EmphasisMarkValues.UnderDot,
] as const;

export enum CombineBracketValues {
    /** No Enclosing Brackets. Serialized value: `none` */
    None = 'none',
    /** Round Brackets. Serialized value: `round` */
    Round = 'round',
    /** Square Brackets. Serialized value: `square` */
    Square = 'square',
    /** Angle Brackets. Serialized value: `angle` */
    Angle = 'angle',
    /** Curly Brackets. Serialized value: `curly` */
    Curly = 'curly',
}

export const CombineBracketValuesArray = [
    CombineBracketValues.None,
    CombineBracketValues.Round,
    CombineBracketValues.Square,
    CombineBracketValues.Angle,
    CombineBracketValues.Curly,
] as const;

export enum HorizontalAlignmentValues {
    /** Left Aligned Horizontally. Serialized value: `left` */
    Left = 'left',
    /** Centered Horizontally. Serialized value: `center` */
    Center = 'center',
    /** Right Aligned Horizontally. Serialized value: `right` */
    Right = 'right',
    /** Inside. Serialized value: `inside` */
    Inside = 'inside',
    /** Outside. Serialized value: `outside` */
    Outside = 'outside',
}

export const HorizontalAlignmentValuesArray = [
    HorizontalAlignmentValues.Left,
    HorizontalAlignmentValues.Center,
    HorizontalAlignmentValues.Right,
    HorizontalAlignmentValues.Inside,
    HorizontalAlignmentValues.Outside,
] as const;

export enum VerticalAlignmentValues {
    /** In line With Text. Serialized value: `inline` */
    Inline = 'inline',
    /** Top. Serialized value: `top` */
    Top = 'top',
    /** Centered Vertically. Serialized value: `center` */
    Center = 'center',
    /** Bottom. Serialized value: `bottom` */
    Bottom = 'bottom',
    /** Inside Anchor Extents. Serialized value: `inside` */
    Inside = 'inside',
    /** Outside Anchor Extents. Serialized value: `outside` */
    Outside = 'outside',
}

export const VerticalAlignmentValuesArray = [
    VerticalAlignmentValues.Inline,
    VerticalAlignmentValues.Top,
    VerticalAlignmentValues.Center,
    VerticalAlignmentValues.Bottom,
    VerticalAlignmentValues.Inside,
    VerticalAlignmentValues.Outside,
] as const;

export enum HeightRuleValues {
    /** Determine Height Based On Contents. Serialized value: `auto` */
    Auto = 'auto',
    /** Exact Height. Serialized value: `exact` */
    Exact = 'exact',
    /** Minimum Height. Serialized value: `atLeast` */
    AtLeast = 'atLeast',
}

export const HeightRuleValuesArray = [
    HeightRuleValues.Auto,
    HeightRuleValues.Exact,
    HeightRuleValues.AtLeast,
] as const;

export enum TextWrappingValues {
    /** Default Text Wrapping Around Frame. Serialized value: `auto` */
    Auto = 'auto',
    /** No Text Wrapping Beside Frame. Serialized value: `notBeside` */
    NotBeside = 'notBeside',
    /** Allow Text Wrapping Around Frame. Serialized value: `around` */
    Around = 'around',
    /** Tight Text Wrapping Around Frame. Serialized value: `tight` */
    Tight = 'tight',
    /** Through Text Wrapping Around Frame. Serialized value: `through` */
    Through = 'through',
    /** No Text Wrapping Around Frame. Serialized value: `none` */
    None = 'none',
}

export const TextWrappingValuesArray = [
    TextWrappingValues.Auto,
    TextWrappingValues.NotBeside,
    TextWrappingValues.Around,
    TextWrappingValues.Tight,
    TextWrappingValues.Through,
    TextWrappingValues.None,
] as const;

export enum VerticalAnchorValues {
    /** Relative To Vertical Text Extents. Serialized value: `text` */
    Text = 'text',
    /** Relative To Margin. Serialized value: `margin` */
    Margin = 'margin',
    /** Relative To Page. Serialized value: `page` */
    Page = 'page',
}

export const VerticalAnchorValuesArray = [
    VerticalAnchorValues.Text,
    VerticalAnchorValues.Margin,
    VerticalAnchorValues.Page,
] as const;

export enum HorizontalAnchorValues {
    /** Relative to Text Extents. Serialized value: `text` */
    Text = 'text',
    /** Relative To Margin. Serialized value: `margin` */
    Margin = 'margin',
    /** Relative to Page. Serialized value: `page` */
    Page = 'page',
}

export const HorizontalAnchorValuesArray = [
    HorizontalAnchorValues.Text,
    HorizontalAnchorValues.Margin,
    HorizontalAnchorValues.Page,
] as const;

export enum DropCapLocationValues {
    /** Not Drop Cap. Serialized value: `none` */
    None = 'none',
    /** Drop Cap Inside Margin. Serialized value: `drop` */
    Drop = 'drop',
    /** Drop Cap Outside Margin. Serialized value: `margin` */
    Margin = 'margin',
}

export const DropCapLocationValuesArray = [
    DropCapLocationValues.None,
    DropCapLocationValues.Drop,
    DropCapLocationValues.Margin,
] as const;

export enum TabStopLeaderCharValues {
    /** No tab stop leader. Serialized value: `none` */
    None = 'none',
    /** Dotted leader line. Serialized value: `dot` */
    Dot = 'dot',
    /** Dashed tab stop leader line. Serialized value: `hyphen` */
    Hyphen = 'hyphen',
    /** Solid leader line. Serialized value: `underscore` */
    Underscore = 'underscore',
    /** Heavy solid leader line. Serialized value: `heavy` */
    Heavy = 'heavy',
    /** Middle dot leader line. Serialized value: `middleDot` */
    MiddleDot = 'middleDot',
}

export const TabStopLeaderCharValuesArray = [
    TabStopLeaderCharValues.None,
    TabStopLeaderCharValues.Dot,
    TabStopLeaderCharValues.Hyphen,
    TabStopLeaderCharValues.Underscore,
    TabStopLeaderCharValues.Heavy,
    TabStopLeaderCharValues.MiddleDot,
] as const;

export enum LineSpacingRuleValues {
    /** Automatically Determined Line Height. Serialized value: `auto` */
    Auto = 'auto',
    /** Exact Line Height. Serialized value: `exact` */
    Exact = 'exact',
    /** Minimum Line Height. Serialized value: `atLeast` */
    AtLeast = 'atLeast',
}

export const LineSpacingRuleValuesArray = [
    LineSpacingRuleValues.Auto,
    LineSpacingRuleValues.Exact,
    LineSpacingRuleValues.AtLeast,
] as const;

export enum TableRowAlignmentValues {
    /** undefined. Serialized value: `left` */
    Left = 'left',
    /** undefined. Serialized value: `center` */
    Center = 'center',
    /** undefined. Serialized value: `right` */
    Right = 'right',
}

export const TableRowAlignmentValuesArray = [
    TableRowAlignmentValues.Left,
    TableRowAlignmentValues.Center,
    TableRowAlignmentValues.Right,
] as const;

export enum ViewValues {
    /** Default View. Serialized value: `none` */
    None = 'none',
    /** Print Layout View. Serialized value: `print` */
    Print = 'print',
    /** Outline View. Serialized value: `outline` */
    Outline = 'outline',
    /** Master Document View. Serialized value: `masterPages` */
    MasterPages = 'masterPages',
    /** Draft View. Serialized value: `normal` */
    Normal = 'normal',
    /** Web Page View. Serialized value: `web` */
    Web = 'web',
}

export const ViewValuesArray = [
    ViewValues.None,
    ViewValues.Print,
    ViewValues.Outline,
    ViewValues.MasterPages,
    ViewValues.Normal,
    ViewValues.Web,
] as const;

export enum PresetZoomValues {
    /** No Preset Magnification. Serialized value: `none` */
    None = 'none',
    /** Display One Full Page. Serialized value: `fullPage` */
    FullPage = 'fullPage',
    /** Display Page Width. Serialized value: `bestFit` */
    BestFit = 'bestFit',
    /** Display Text Width. Serialized value: `textFit` */
    TextFit = 'textFit',
}

export const PresetZoomValuesArray = [
    PresetZoomValues.None,
    PresetZoomValues.FullPage,
    PresetZoomValues.BestFit,
    PresetZoomValues.TextFit,
] as const;

export enum ProofingStateValues {
    /** Check Completed. Serialized value: `clean` */
    Clean = 'clean',
    /** Check Not Completed. Serialized value: `dirty` */
    Dirty = 'dirty',
}

export const ProofingStateValuesArray = [
    ProofingStateValues.Clean,
    ProofingStateValues.Dirty,
] as const;

export enum DocumentTypeValues {
    /** Default Document. Serialized value: `notSpecified` */
    NotSpecified = 'notSpecified',
    /** Letter. Serialized value: `letter` */
    Letter = 'letter',
    /** E-Mail Message. Serialized value: `eMail` */
    Email = 'eMail',
}

export const DocumentTypeValuesArray = [
    DocumentTypeValues.NotSpecified,
    DocumentTypeValues.Letter,
    DocumentTypeValues.Email,
] as const;

export enum DocumentProtectionValues {
    /** No Editing Restrictions. Serialized value: `none` */
    None = 'none',
    /** Allow No Editing. Serialized value: `readOnly` */
    ReadOnly = 'readOnly',
    /** Allow Editing of Comments. Serialized value: `comments` */
    Comments = 'comments',
    /** Allow Editing With Revision Tracking. Serialized value: `trackedChanges` */
    TrackedChanges = 'trackedChanges',
    /** Allow Editing of Form Fields. Serialized value: `forms` */
    Forms = 'forms',
}

export const DocumentProtectionValuesArray = [
    DocumentProtectionValues.None,
    DocumentProtectionValues.ReadOnly,
    DocumentProtectionValues.Comments,
    DocumentProtectionValues.TrackedChanges,
    DocumentProtectionValues.Forms,
] as const;

export enum MailMergeDocumentValues {
    /** Catalog Source Document. Serialized value: `catalog` */
    Catalog = 'catalog',
    /** Envelope Source Document. Serialized value: `envelopes` */
    Envelope = 'envelopes',
    /** Mailing Label Source Document. Serialized value: `mailingLabels` */
    MailingLabel = 'mailingLabels',
    /** Form Letter Source Document. Serialized value: `formLetters` */
    FormLetter = 'formLetters',
    /** E-Mail Source Document. Serialized value: `email` */
    Email = 'email',
    /** Fax Source Document. Serialized value: `fax` */
    Fax = 'fax',
}

export const MailMergeDocumentValuesArray = [
    MailMergeDocumentValues.Catalog,
    MailMergeDocumentValues.Envelope,
    MailMergeDocumentValues.MailingLabel,
    MailMergeDocumentValues.FormLetter,
    MailMergeDocumentValues.Email,
    MailMergeDocumentValues.Fax,
] as const;

export enum MailMergeDataValues {
    /** Text File Data Source. Serialized value: `textFile` */
    TextFile = 'textFile',
    /** Database Data Source. Serialized value: `database` */
    Database = 'database',
    /** Spreadsheet Data Source. Serialized value: `spreadsheet` */
    Spreadsheet = 'spreadsheet',
    /** Query Data Source. Serialized value: `query` */
    Query = 'query',
    /** Open Database Connectivity Data Source. Serialized value: `odbc` */
    Odbc = 'odbc',
    /** Office Data Source Object Data Source. Serialized value: `native` */
    Native = 'native',
}

export const MailMergeDataValuesArray = [
    MailMergeDataValues.TextFile,
    MailMergeDataValues.Database,
    MailMergeDataValues.Spreadsheet,
    MailMergeDataValues.Query,
    MailMergeDataValues.Odbc,
    MailMergeDataValues.Native,
] as const;

export enum MailMergeDestinationValues {
    /** Send Merged Documents to New Documents. Serialized value: `newDocument` */
    NewDocument = 'newDocument',
    /** Send Merged Documents to Printer. Serialized value: `printer` */
    Printer = 'printer',
    /** Send Merged Documents as E-mail Messages. Serialized value: `email` */
    Email = 'email',
    /** Send Merged Documents as Faxes. Serialized value: `fax` */
    Fax = 'fax',
}

export const MailMergeDestinationValuesArray = [
    MailMergeDestinationValues.NewDocument,
    MailMergeDestinationValues.Printer,
    MailMergeDestinationValues.Email,
    MailMergeDestinationValues.Fax,
] as const;

export enum MailMergeOdsoFieldValues {
    /** Field Not Mapped. Serialized value: `null` */
    Null = 'null',
    /** Field Mapping to Data Source Column. Serialized value: `dbColumn` */
    DbColumn = 'dbColumn',
}

export const MailMergeOdsoFieldValuesArray = [
    MailMergeOdsoFieldValues.Null,
    MailMergeOdsoFieldValues.DbColumn,
] as const;

export enum VerticalTextAlignmentValues {
    /** Align Text at Top. Serialized value: `top` */
    Top = 'top',
    /** Align Text at Center. Serialized value: `center` */
    Center = 'center',
    /** Align Text at Baseline. Serialized value: `baseline` */
    Baseline = 'baseline',
    /** Align Text at Bottom. Serialized value: `bottom` */
    Bottom = 'bottom',
    /** Automatically Determine Alignment. Serialized value: `auto` */
    Auto = 'auto',
}

export const VerticalTextAlignmentValuesArray = [
    VerticalTextAlignmentValues.Top,
    VerticalTextAlignmentValues.Center,
    VerticalTextAlignmentValues.Baseline,
    VerticalTextAlignmentValues.Bottom,
    VerticalTextAlignmentValues.Auto,
] as const;

export enum DisplacedByCustomXmlValues {
    /** Displaced by Next Custom XML Markup Tag. Serialized value: `next` */
    Next = 'next',
    /** Displaced by Previous Custom XML Markup Tag. Serialized value: `prev` */
    Previous = 'prev',
}

export const DisplacedByCustomXmlValuesArray = [
    DisplacedByCustomXmlValues.Next,
    DisplacedByCustomXmlValues.Previous,
] as const;

export enum VerticalMergeRevisionValues {
    /** Vertically Merged Cell. Serialized value: `cont` */
    Continue = 'cont',
    /** Vertically Split Cell. Serialized value: `rest` */
    Restart = 'rest',
}

export const VerticalMergeRevisionValuesArray = [
    VerticalMergeRevisionValues.Continue,
    VerticalMergeRevisionValues.Restart,
] as const;

export enum TextBoxTightWrapValues {
    /** Do Not Tight Wrap. Serialized value: `none` */
    None = 'none',
    /** Tight Wrap All Lines. Serialized value: `allLines` */
    AllLines = 'allLines',
    /** Tight Wrap First and Last Lines. Serialized value: `firstAndLastLine` */
    FirstAndLastLine = 'firstAndLastLine',
    /** Tight Wrap First Line. Serialized value: `firstLineOnly` */
    FirstLineOnly = 'firstLineOnly',
    /** Tight Wrap Last Line. Serialized value: `lastLineOnly` */
    LastLineOnly = 'lastLineOnly',
}

export const TextBoxTightWrapValuesArray = [
    TextBoxTightWrapValues.None,
    TextBoxTightWrapValues.AllLines,
    TextBoxTightWrapValues.FirstAndLastLine,
    TextBoxTightWrapValues.FirstLineOnly,
    TextBoxTightWrapValues.LastLineOnly,
] as const;

export enum FieldCharValues {
    /** Start Character. Serialized value: `begin` */
    Begin = 'begin',
    /** Separator Character. Serialized value: `separate` */
    Separate = 'separate',
    /** End Character. Serialized value: `end` */
    End = 'end',
}

export const FieldCharValuesArray = [
    FieldCharValues.Begin,
    FieldCharValues.Separate,
    FieldCharValues.End,
] as const;

export enum InfoTextValues {
    /** Literal Text. Serialized value: `text` */
    Text = 'text',
    /** Glossary Document Entry. Serialized value: `autoText` */
    AutoText = 'autoText',
}

export const InfoTextValuesArray = [
    InfoTextValues.Text,
    InfoTextValues.AutoText,
] as const;

export enum TextBoxFormFieldValues {
    /** Text Box. Serialized value: `regular` */
    Regular = 'regular',
    /** Number. Serialized value: `number` */
    Number = 'number',
    /** Date. Serialized value: `date` */
    Date = 'date',
    /** Current Time Display. Serialized value: `currentTime` */
    CurrentTime = 'currentTime',
    /** Current Date Display. Serialized value: `currentDate` */
    CurrentDate = 'currentDate',
    /** Field Calculation. Serialized value: `calculated` */
    Calculated = 'calculated',
}

export const TextBoxFormFieldValuesArray = [
    TextBoxFormFieldValues.Regular,
    TextBoxFormFieldValues.Number,
    TextBoxFormFieldValues.Date,
    TextBoxFormFieldValues.CurrentTime,
    TextBoxFormFieldValues.CurrentDate,
    TextBoxFormFieldValues.Calculated,
] as const;

export enum SectionMarkValues {
    /** Next Page Section Break. Serialized value: `nextPage` */
    NextPage = 'nextPage',
    /** Column Section Break. Serialized value: `nextColumn` */
    NextColumn = 'nextColumn',
    /** Continuous Section Break. Serialized value: `continuous` */
    Continuous = 'continuous',
    /** Even Page Section Break. Serialized value: `evenPage` */
    EvenPage = 'evenPage',
    /** Odd Page Section Break. Serialized value: `oddPage` */
    OddPage = 'oddPage',
}

export const SectionMarkValuesArray = [
    SectionMarkValues.NextPage,
    SectionMarkValues.NextColumn,
    SectionMarkValues.Continuous,
    SectionMarkValues.EvenPage,
    SectionMarkValues.OddPage,
] as const;

export enum PageOrientationValues {
    /** Portrait Mode. Serialized value: `portrait` */
    Portrait = 'portrait',
    /** Landscape Mode. Serialized value: `landscape` */
    Landscape = 'landscape',
}

export const PageOrientationValuesArray = [
    PageOrientationValues.Portrait,
    PageOrientationValues.Landscape,
] as const;

export enum PageBorderZOrderValues {
    /** Page Border Ahead of Text. Serialized value: `front` */
    Front = 'front',
    /** Page Border Behind Text. Serialized value: `back` */
    Back = 'back',
}

export const PageBorderZOrderValuesArray = [
    PageBorderZOrderValues.Front,
    PageBorderZOrderValues.Back,
] as const;

export enum PageBorderDisplayValues {
    /** Display Page Border on All Pages. Serialized value: `allPages` */
    AllPages = 'allPages',
    /** Display Page Border on First Page. Serialized value: `firstPage` */
    FirstPage = 'firstPage',
    /** Display Page Border on All Pages Except First. Serialized value: `notFirstPage` */
    NotFirstPage = 'notFirstPage',
}

export const PageBorderDisplayValuesArray = [
    PageBorderDisplayValues.AllPages,
    PageBorderDisplayValues.FirstPage,
    PageBorderDisplayValues.NotFirstPage,
] as const;

export enum PageBorderOffsetValues {
    /** Page Border Is Positioned Relative to Page Edges. Serialized value: `page` */
    Page = 'page',
    /** Page Border Is Positioned Relative to Text Extents. Serialized value: `text` */
    Text = 'text',
}

export const PageBorderOffsetValuesArray = [
    PageBorderOffsetValues.Page,
    PageBorderOffsetValues.Text,
] as const;

export enum ChapterSeparatorValues {
    /** Hyphen Chapter Separator. Serialized value: `hyphen` */
    Hyphen = 'hyphen',
    /** Period Chapter Separator. Serialized value: `period` */
    Period = 'period',
    /** Colon Chapter Separator. Serialized value: `colon` */
    Colon = 'colon',
    /** Em Dash Chapter Separator. Serialized value: `emDash` */
    EmDash = 'emDash',
    /** En Dash Chapter Separator. Serialized value: `enDash` */
    EnDash = 'enDash',
}

export const ChapterSeparatorValuesArray = [
    ChapterSeparatorValues.Hyphen,
    ChapterSeparatorValues.Period,
    ChapterSeparatorValues.Colon,
    ChapterSeparatorValues.EmDash,
    ChapterSeparatorValues.EnDash,
] as const;

export enum LineNumberRestartValues {
    /** Restart Line Numbering on Each Page. Serialized value: `newPage` */
    NewPage = 'newPage',
    /** Restart Line Numbering for Each Section. Serialized value: `newSection` */
    NewSection = 'newSection',
    /** Continue Line Numbering From Previous Section. Serialized value: `continuous` */
    Continuous = 'continuous',
}

export const LineNumberRestartValuesArray = [
    LineNumberRestartValues.NewPage,
    LineNumberRestartValues.NewSection,
    LineNumberRestartValues.Continuous,
] as const;

export enum VerticalJustificationValues {
    /** Align Top. Serialized value: `top` */
    Top = 'top',
    /** Align Center. Serialized value: `center` */
    Center = 'center',
    /** Vertical Justification. Serialized value: `both` */
    Both = 'both',
    /** Align Bottom. Serialized value: `bottom` */
    Bottom = 'bottom',
}

export const VerticalJustificationValuesArray = [
    VerticalJustificationValues.Top,
    VerticalJustificationValues.Center,
    VerticalJustificationValues.Both,
    VerticalJustificationValues.Bottom,
] as const;

export enum TableVerticalAlignmentValues {
    /** undefined. Serialized value: `top` */
    Top = 'top',
    /** undefined. Serialized value: `center` */
    Center = 'center',
    /** undefined. Serialized value: `bottom` */
    Bottom = 'bottom',
}

export const TableVerticalAlignmentValuesArray = [
    TableVerticalAlignmentValues.Top,
    TableVerticalAlignmentValues.Center,
    TableVerticalAlignmentValues.Bottom,
] as const;

export enum DocGridValues {
    /** No Document Grid. Serialized value: `default` */
    Default = 'default',
    /** Line Grid Only. Serialized value: `lines` */
    Lines = 'lines',
    /** Line and Character Grid. Serialized value: `linesAndChars` */
    LinesAndChars = 'linesAndChars',
    /** Character Grid Only. Serialized value: `snapToChars` */
    SnapToChars = 'snapToChars',
}

export const DocGridValuesArray = [
    DocGridValues.Default,
    DocGridValues.Lines,
    DocGridValues.LinesAndChars,
    DocGridValues.SnapToChars,
] as const;

export enum HeaderFooterValues {
    /** Even Numbered Pages Only. Serialized value: `even` */
    Even = 'even',
    /** Default Header or Footer. Serialized value: `default` */
    Default = 'default',
    /** First Page Only. Serialized value: `first` */
    First = 'first',
}

export const HeaderFooterValuesArray = [
    HeaderFooterValues.Even,
    HeaderFooterValues.Default,
    HeaderFooterValues.First,
] as const;

export enum FootnoteEndnoteValues {
    /** Normal Footnote/Endnote. Serialized value: `normal` */
    Normal = 'normal',
    /** Separator. Serialized value: `separator` */
    Separator = 'separator',
    /** Continuation Separator. Serialized value: `continuationSeparator` */
    ContinuationSeparator = 'continuationSeparator',
    /** Continuation Notice Separator. Serialized value: `continuationNotice` */
    ContinuationNotice = 'continuationNotice',
}

export const FootnoteEndnoteValuesArray = [
    FootnoteEndnoteValues.Normal,
    FootnoteEndnoteValues.Separator,
    FootnoteEndnoteValues.ContinuationSeparator,
    FootnoteEndnoteValues.ContinuationNotice,
] as const;

export enum BreakValues {
    /** Page Break. Serialized value: `page` */
    Page = 'page',
    /** Column Break. Serialized value: `column` */
    Column = 'column',
    /** Line Break. Serialized value: `textWrapping` */
    TextWrapping = 'textWrapping',
}

export const BreakValuesArray = [
    BreakValues.Page,
    BreakValues.Column,
    BreakValues.TextWrapping,
] as const;

export enum BreakTextRestartLocationValues {
    /** Restart On Next Line. Serialized value: `none` */
    None = 'none',
    /** Restart In Next Text Region When In Leftmost Position. Serialized value: `left` */
    Left = 'left',
    /** Restart In Next Text Region When In Rightmost Position. Serialized value: `right` */
    Right = 'right',
    /** Restart On Next Full Line. Serialized value: `all` */
    All = 'all',
}

export const BreakTextRestartLocationValuesArray = [
    BreakTextRestartLocationValues.None,
    BreakTextRestartLocationValues.Left,
    BreakTextRestartLocationValues.Right,
    BreakTextRestartLocationValues.All,
] as const;

export enum AbsolutePositionTabAlignmentValues {
    /** Left. Serialized value: `left` */
    Left = 'left',
    /** Center. Serialized value: `center` */
    Center = 'center',
    /** Right. Serialized value: `right` */
    Right = 'right',
}

export const AbsolutePositionTabAlignmentValuesArray = [
    AbsolutePositionTabAlignmentValues.Left,
    AbsolutePositionTabAlignmentValues.Center,
    AbsolutePositionTabAlignmentValues.Right,
] as const;

export enum AbsolutePositionTabPositioningBaseValues {
    /** Relative To Text Margins. Serialized value: `margin` */
    Margin = 'margin',
    /** Relative To Indents. Serialized value: `indent` */
    Indent = 'indent',
}

export const AbsolutePositionTabPositioningBaseValuesArray = [
    AbsolutePositionTabPositioningBaseValues.Margin,
    AbsolutePositionTabPositioningBaseValues.Indent,
] as const;

export enum AbsolutePositionTabLeaderCharValues {
    /** No Leader Character. Serialized value: `none` */
    None = 'none',
    /** Dot Leader Character. Serialized value: `dot` */
    Dot = 'dot',
    /** Hyphen Leader Character. Serialized value: `hyphen` */
    Hyphen = 'hyphen',
    /** Underscore Leader Character. Serialized value: `underscore` */
    Underscore = 'underscore',
    /** Centered Dot Leader Character. Serialized value: `middleDot` */
    MiddleDot = 'middleDot',
}

export const AbsolutePositionTabLeaderCharValuesArray = [
    AbsolutePositionTabLeaderCharValues.None,
    AbsolutePositionTabLeaderCharValues.Dot,
    AbsolutePositionTabLeaderCharValues.Hyphen,
    AbsolutePositionTabLeaderCharValues.Underscore,
    AbsolutePositionTabLeaderCharValues.MiddleDot,
] as const;

export enum ProofingErrorValues {
    /** Start of Region Marked as Spelling Error. Serialized value: `spellStart` */
    SpellStart = 'spellStart',
    /** End of Region Marked as Spelling Error. Serialized value: `spellEnd` */
    SpellEnd = 'spellEnd',
    /** Start of Region Marked as Grammatical Error. Serialized value: `gramStart` */
    GrammarStart = 'gramStart',
    /** End of Region Marked as Grammatical Error. Serialized value: `gramEnd` */
    GrammarEnd = 'gramEnd',
}

export const ProofingErrorValuesArray = [
    ProofingErrorValues.SpellStart,
    ProofingErrorValues.SpellEnd,
    ProofingErrorValues.GrammarStart,
    ProofingErrorValues.GrammarEnd,
] as const;

export enum RangePermissionEditingGroupValues {
    /** No Users Have Editing Permissions. Serialized value: `none` */
    None = 'none',
    /** All Users Have Editing Permissions. Serialized value: `everyone` */
    Everyone = 'everyone',
    /** Administrator Group. Serialized value: `administrators` */
    Administrators = 'administrators',
    /** Contributors Group. Serialized value: `contributors` */
    Contributors = 'contributors',
    /** Editors Group. Serialized value: `editors` */
    Editors = 'editors',
    /** Owners Group. Serialized value: `owners` */
    Owners = 'owners',
    /** Current Group. Serialized value: `current` */
    Current = 'current',
}

export const RangePermissionEditingGroupValuesArray = [
    RangePermissionEditingGroupValues.None,
    RangePermissionEditingGroupValues.Everyone,
    RangePermissionEditingGroupValues.Administrators,
    RangePermissionEditingGroupValues.Contributors,
    RangePermissionEditingGroupValues.Editors,
    RangePermissionEditingGroupValues.Owners,
    RangePermissionEditingGroupValues.Current,
] as const;

export enum FontTypeHintValues {
    /** High ANSI Font. Serialized value: `default` */
    Default = 'default',
    /** East Asian Font. Serialized value: `eastAsia` */
    EastAsia = 'eastAsia',
    /** Complex Script Font. Serialized value: `cs` */
    ComplexScript = 'cs',
}

export const FontTypeHintValuesArray = [
    FontTypeHintValues.Default,
    FontTypeHintValues.EastAsia,
    FontTypeHintValues.ComplexScript,
] as const;

export enum ThemeFontValues {
    /** Major East Asian Theme Font. Serialized value: `majorEastAsia` */
    MajorEastAsia = 'majorEastAsia',
    /** Major Complex Script Theme Font. Serialized value: `majorBidi` */
    MajorBidi = 'majorBidi',
    /** Major ASCII Theme Font. Serialized value: `majorAscii` */
    MajorAscii = 'majorAscii',
    /** Major High ANSI Theme Font. Serialized value: `majorHAnsi` */
    MajorHighAnsi = 'majorHAnsi',
    /** Minor East Asian Theme Font. Serialized value: `minorEastAsia` */
    MinorEastAsia = 'minorEastAsia',
    /** Minor Complex Script Theme Font. Serialized value: `minorBidi` */
    MinorBidi = 'minorBidi',
    /** Minor ASCII Theme Font. Serialized value: `minorAscii` */
    MinorAscii = 'minorAscii',
    /** Minor High ANSI Theme Font. Serialized value: `minorHAnsi` */
    MinorHighAnsi = 'minorHAnsi',
}

export const ThemeFontValuesArray = [
    ThemeFontValues.MajorEastAsia,
    ThemeFontValues.MajorBidi,
    ThemeFontValues.MajorAscii,
    ThemeFontValues.MajorHighAnsi,
    ThemeFontValues.MinorEastAsia,
    ThemeFontValues.MinorBidi,
    ThemeFontValues.MinorAscii,
    ThemeFontValues.MinorHighAnsi,
] as const;

export enum RubyAlignValues {
    /** Center. Serialized value: `center` */
    Center = 'center',
    /** Distribute All Characters. Serialized value: `distributeLetter` */
    DistributeLetter = 'distributeLetter',
    /** Distribute all Characters w/ Additional Space On Either Side. Serialized value: `distributeSpace` */
    DistributeSpace = 'distributeSpace',
    /** Left Aligned. Serialized value: `left` */
    Left = 'left',
    /** Right Aligned. Serialized value: `right` */
    Right = 'right',
    /** Vertically Aligned to Right of Base Text. Serialized value: `rightVertical` */
    RightVertical = 'rightVertical',
}

export const RubyAlignValuesArray = [
    RubyAlignValues.Center,
    RubyAlignValues.DistributeLetter,
    RubyAlignValues.DistributeSpace,
    RubyAlignValues.Left,
    RubyAlignValues.Right,
    RubyAlignValues.RightVertical,
] as const;

export enum LockingValues {
    /** SDT Cannot Be Deleted. Serialized value: `sdtLocked` */
    SdtLocked = 'sdtLocked',
    /** Contents Cannot Be Edited At Runtime. Serialized value: `contentLocked` */
    ContentLocked = 'contentLocked',
    /** No Locking. Serialized value: `unlocked` */
    Unlocked = 'unlocked',
    /** Contents Cannot Be Edited At Runtime And SDT Cannot Be Deleted. Serialized value: `sdtContentLocked` */
    SdtContentLocked = 'sdtContentLocked',
}

export const LockingValuesArray = [
    LockingValues.SdtLocked,
    LockingValues.ContentLocked,
    LockingValues.Unlocked,
    LockingValues.SdtContentLocked,
] as const;

export enum DateFormatValues {
    /** Same As Display. Serialized value: `text` */
    Text = 'text',
    /** XML Schema Date Format. Serialized value: `date` */
    Date = 'date',
    /** XML Schema DateTime Format. Serialized value: `dateTime` */
    DateTime = 'dateTime',
}

export const DateFormatValuesArray = [
    DateFormatValues.Text,
    DateFormatValues.Date,
    DateFormatValues.DateTime,
] as const;

export enum TableWidthUnitValues {
    /** No Width. Serialized value: `nil` */
    Nil = 'nil',
    /** Width in Fiftieths of a Percent. Serialized value: `pct` */
    Pct = 'pct',
    /** Width in Twentieths of a Point. Serialized value: `dxa` */
    Dxa = 'dxa',
    /** Automatically Determined Width. Serialized value: `auto` */
    Auto = 'auto',
}

export const TableWidthUnitValuesArray = [
    TableWidthUnitValues.Nil,
    TableWidthUnitValues.Pct,
    TableWidthUnitValues.Dxa,
    TableWidthUnitValues.Auto,
] as const;

export enum TableWidthValues {
    /** undefined. Serialized value: `nil` */
    Nil = 'nil',
    /** undefined. Serialized value: `dxa` */
    Dxa = 'dxa',
}

export const TableWidthValuesArray = [
    TableWidthValues.Nil,
    TableWidthValues.Dxa,
] as const;

export enum MergedCellValues {
    /** Continue Merged Region. Serialized value: `continue` */
    Continue = 'continue',
    /** Start/Restart Merged Region. Serialized value: `restart` */
    Restart = 'restart',
}

export const MergedCellValuesArray = [
    MergedCellValues.Continue,
    MergedCellValues.Restart,
] as const;

export enum TableLayoutValues {
    /** Fixed Width Table Layout. Serialized value: `fixed` */
    Fixed = 'fixed',
    /** AutoFit Table Layout. Serialized value: `autofit` */
    Autofit = 'autofit',
}

export const TableLayoutValuesArray = [
    TableLayoutValues.Fixed,
    TableLayoutValues.Autofit,
] as const;

export enum TableOverlapValues {
    /** Floating Table Cannot Overlap. Serialized value: `never` */
    Never = 'never',
    /** Floating Table Can Overlap. Serialized value: `overlap` */
    Overlap = 'overlap',
}

export const TableOverlapValuesArray = [
    TableOverlapValues.Never,
    TableOverlapValues.Overlap,
] as const;

export enum FootnotePositionValues {
    /** Footnotes Positioned at Page Bottom. Serialized value: `pageBottom` */
    PageBottom = 'pageBottom',
    /** Footnotes Positioned Beneath Text. Serialized value: `beneathText` */
    BeneathText = 'beneathText',
    /** Footnotes Positioned At End of Section. Serialized value: `sectEnd` */
    SectionEnd = 'sectEnd',
}

export const FootnotePositionValuesArray = [
    FootnotePositionValues.PageBottom,
    FootnotePositionValues.BeneathText,
    FootnotePositionValues.SectionEnd,
] as const;

export enum EndnotePositionValues {
    /** Endnotes Positioned at End of Section. Serialized value: `sectEnd` */
    SectionEnd = 'sectEnd',
    /** Endnotes Positioned at End of Document. Serialized value: `docEnd` */
    DocumentEnd = 'docEnd',
}

export const EndnotePositionValuesArray = [
    EndnotePositionValues.SectionEnd,
    EndnotePositionValues.DocumentEnd,
] as const;

export enum RestartNumberValues {
    /** Continue Numbering From Previous Section. Serialized value: `continuous` */
    Continuous = 'continuous',
    /** Restart Numbering For Each Section. Serialized value: `eachSect` */
    EachSection = 'eachSect',
    /** Restart Numbering On Each Page. Serialized value: `eachPage` */
    EachPage = 'eachPage',
}

export const RestartNumberValuesArray = [
    RestartNumberValues.Continuous,
    RestartNumberValues.EachSection,
    RestartNumberValues.EachPage,
] as const;

export enum MailMergeSourceValues {
    /** Database Data Source. Serialized value: `database` */
    Database = 'database',
    /** Address Book Data Source. Serialized value: `addressBook` */
    AddressBook = 'addressBook',
    /** Alternate Document Format Data Source. Serialized value: `document1` */
    Document1 = 'document1',
    /** Alternate Document Format Data Source Two. Serialized value: `document2` */
    Document2 = 'document2',
    /** Text File Data Source. Serialized value: `text` */
    Text = 'text',
    /** E-Mail Program Data Source. Serialized value: `email` */
    Email = 'email',
    /** Native Data Source. Serialized value: `native` */
    Native = 'native',
    /** Legacy Document Format Data Source. Serialized value: `legacy` */
    Legacy = 'legacy',
    /** Aggregate Data Source. Serialized value: `master` */
    Master = 'master',
}

export const MailMergeSourceValuesArray = [
    MailMergeSourceValues.Database,
    MailMergeSourceValues.AddressBook,
    MailMergeSourceValues.Document1,
    MailMergeSourceValues.Document2,
    MailMergeSourceValues.Text,
    MailMergeSourceValues.Email,
    MailMergeSourceValues.Native,
    MailMergeSourceValues.Legacy,
    MailMergeSourceValues.Master,
] as const;

export enum TargetScreenSizeValues {
    /** Optimize for 544x376. Serialized value: `544x376` */
    Sz544x376 = '544x376',
    /** Optimize for 640x480. Serialized value: `640x480` */
    Sz640x480 = '640x480',
    /** Optimize for 720x512. Serialized value: `720x512` */
    Sz720x512 = '720x512',
    /** Optimize for 800x600. Serialized value: `800x600` */
    Sz800x600 = '800x600',
    /** Optimize for 1024x768. Serialized value: `1024x768` */
    Sz1024x768 = '1024x768',
    /** Optimize for 1152x882. Serialized value: `1152x882` */
    Sz1152x882 = '1152x882',
    /** Optimize for 1152x900. Serialized value: `1152x900` */
    Sz1152x900 = '1152x900',
    /** Optimize for 1280x1024. Serialized value: `1280x1024` */
    Sz1280x1024 = '1280x1024',
    /** Optimize for 1600x1200. Serialized value: `1600x1200` */
    Sz1600x1200 = '1600x1200',
    /** Optimize for 1800x1440. Serialized value: `1800x1440` */
    Sz1800x1440 = '1800x1440',
    /** Optimize for 1920x1200. Serialized value: `1920x1200` */
    Sz1920x1200 = '1920x1200',
}

export const TargetScreenSizeValuesArray = [
    TargetScreenSizeValues.Sz544x376,
    TargetScreenSizeValues.Sz640x480,
    TargetScreenSizeValues.Sz720x512,
    TargetScreenSizeValues.Sz800x600,
    TargetScreenSizeValues.Sz1024x768,
    TargetScreenSizeValues.Sz1152x882,
    TargetScreenSizeValues.Sz1152x900,
    TargetScreenSizeValues.Sz1280x1024,
    TargetScreenSizeValues.Sz1600x1200,
    TargetScreenSizeValues.Sz1800x1440,
    TargetScreenSizeValues.Sz1920x1200,
] as const;

export enum CharacterSpacingValues {
    /** Do Not Compress Whitespace. Serialized value: `doNotCompress` */
    DoNotCompress = 'doNotCompress',
    /** Compress Whitespace From Punctuation Characters. Serialized value: `compressPunctuation` */
    CompressPunctuation = 'compressPunctuation',
    /** Compress Whitespace From Both Japanese Kana And Punctuation Characters. Serialized value: `compressPunctuationAndJapaneseKana` */
    CompressPunctuationAndJapaneseKana = 'compressPunctuationAndJapaneseKana',
}

export const CharacterSpacingValuesArray = [
    CharacterSpacingValues.DoNotCompress,
    CharacterSpacingValues.CompressPunctuation,
    CharacterSpacingValues.CompressPunctuationAndJapaneseKana,
] as const;

export enum ColorSchemeIndexValues {
    /** Dark 1 Theme Color Reference. Serialized value: `dark1` */
    Dark1 = 'dark1',
    /** Light 1 Theme Color Reference. Serialized value: `light1` */
    Light1 = 'light1',
    /** Dark 2 Theme Color Reference. Serialized value: `dark2` */
    Dark2 = 'dark2',
    /** Light 2 Theme Color Reference. Serialized value: `light2` */
    Light2 = 'light2',
    /** Accent 1 Theme Color Reference. Serialized value: `accent1` */
    Accent1 = 'accent1',
    /** Accent 2 Theme Color Reference. Serialized value: `accent2` */
    Accent2 = 'accent2',
    /** Accent 3 Theme Color Reference. Serialized value: `accent3` */
    Accent3 = 'accent3',
    /** Accent4 Theme Color Reference. Serialized value: `accent4` */
    Accent4 = 'accent4',
    /** Accent5 Theme Color Reference. Serialized value: `accent5` */
    Accent5 = 'accent5',
    /** Accent 6 Theme Color Reference. Serialized value: `accent6` */
    Accent6 = 'accent6',
    /** Hyperlink Theme Color Reference. Serialized value: `hyperlink` */
    Hyperlink = 'hyperlink',
    /** Followed Hyperlink Theme Color Reference. Serialized value: `followedHyperlink` */
    FollowedHyperlink = 'followedHyperlink',
}

export const ColorSchemeIndexValuesArray = [
    ColorSchemeIndexValues.Dark1,
    ColorSchemeIndexValues.Light1,
    ColorSchemeIndexValues.Dark2,
    ColorSchemeIndexValues.Light2,
    ColorSchemeIndexValues.Accent1,
    ColorSchemeIndexValues.Accent2,
    ColorSchemeIndexValues.Accent3,
    ColorSchemeIndexValues.Accent4,
    ColorSchemeIndexValues.Accent5,
    ColorSchemeIndexValues.Accent6,
    ColorSchemeIndexValues.Hyperlink,
    ColorSchemeIndexValues.FollowedHyperlink,
] as const;

export enum FrameScrollbarVisibilityValues {
    /** Always Show Scrollbar. Serialized value: `on` */
    On = 'on',
    /** Never Show Scrollbar. Serialized value: `off` */
    Off = 'off',
    /** Automatically Show Scrollbar As Needed. Serialized value: `auto` */
    Auto = 'auto',
}

export const FrameScrollbarVisibilityValuesArray = [
    FrameScrollbarVisibilityValues.On,
    FrameScrollbarVisibilityValues.Off,
    FrameScrollbarVisibilityValues.Auto,
] as const;

export enum FrameLayoutValues {
    /** Stack Frames Vertically. Serialized value: `rows` */
    Rows = 'rows',
    /** Stack Frames Horizontally. Serialized value: `cols` */
    Columns = 'cols',
    /** Do Not Stack Frames. Serialized value: `none` */
    None = 'none',
}

export const FrameLayoutValuesArray = [
    FrameLayoutValues.Rows,
    FrameLayoutValues.Columns,
    FrameLayoutValues.None,
] as const;

export enum LevelSuffixValues {
    /** Tab Between Numbering and Text. Serialized value: `tab` */
    Tab = 'tab',
    /** Space Between Numbering and Text. Serialized value: `space` */
    Space = 'space',
    /** Nothing Between Numbering and Text. Serialized value: `nothing` */
    Nothing = 'nothing',
}

export const LevelSuffixValuesArray = [
    LevelSuffixValues.Tab,
    LevelSuffixValues.Space,
    LevelSuffixValues.Nothing,
] as const;

export enum MultiLevelValues {
    /** Single Level Numbering Definition. Serialized value: `singleLevel` */
    SingleLevel = 'singleLevel',
    /** Multilevel Numbering Definition. Serialized value: `multilevel` */
    Multilevel = 'multilevel',
    /** Hybrid Multilevel Numbering Definition. Serialized value: `hybridMultilevel` */
    HybridMultilevel = 'hybridMultilevel',
}

export const MultiLevelValuesArray = [
    MultiLevelValues.SingleLevel,
    MultiLevelValues.Multilevel,
    MultiLevelValues.HybridMultilevel,
] as const;

export enum TableStyleOverrideValues {
    /** Whole table formatting. Serialized value: `wholeTable` */
    WholeTable = 'wholeTable',
    /** First Row Conditional Formatting. Serialized value: `firstRow` */
    FirstRow = 'firstRow',
    /** Last table row formatting. Serialized value: `lastRow` */
    LastRow = 'lastRow',
    /** First Column Conditional Formatting. Serialized value: `firstCol` */
    FirstColumn = 'firstCol',
    /** Last table column formatting. Serialized value: `lastCol` */
    LastColumn = 'lastCol',
    /** Banded Column Conditional Formatting. Serialized value: `band1Vert` */
    Band1Vertical = 'band1Vert',
    /** Even Column Stripe Conditional Formatting. Serialized value: `band2Vert` */
    Band2Vertical = 'band2Vert',
    /** Banded Row Conditional Formatting. Serialized value: `band1Horz` */
    Band1Horizontal = 'band1Horz',
    /** Even Row Stripe Conditional Formatting. Serialized value: `band2Horz` */
    Band2Horizontal = 'band2Horz',
    /** Top right table cell formatting. Serialized value: `neCell` */
    NorthEastCell = 'neCell',
    /** Top left table cell formatting. Serialized value: `nwCell` */
    NorthWestCell = 'nwCell',
    /** Bottom right table cell formatting. Serialized value: `seCell` */
    SouthEastCell = 'seCell',
    /** Bottom left table cell formatting. Serialized value: `swCell` */
    SouthWestCell = 'swCell',
}

export const TableStyleOverrideValuesArray = [
    TableStyleOverrideValues.WholeTable,
    TableStyleOverrideValues.FirstRow,
    TableStyleOverrideValues.LastRow,
    TableStyleOverrideValues.FirstColumn,
    TableStyleOverrideValues.LastColumn,
    TableStyleOverrideValues.Band1Vertical,
    TableStyleOverrideValues.Band2Vertical,
    TableStyleOverrideValues.Band1Horizontal,
    TableStyleOverrideValues.Band2Horizontal,
    TableStyleOverrideValues.NorthEastCell,
    TableStyleOverrideValues.NorthWestCell,
    TableStyleOverrideValues.SouthEastCell,
    TableStyleOverrideValues.SouthWestCell,
] as const;

export enum StyleValues {
    /** Paragraph Style. Serialized value: `paragraph` */
    Paragraph = 'paragraph',
    /** Character Style. Serialized value: `character` */
    Character = 'character',
    /** Table Style. Serialized value: `table` */
    Table = 'table',
    /** Numbering Style. Serialized value: `numbering` */
    Numbering = 'numbering',
}

export const StyleValuesArray = [
    StyleValues.Paragraph,
    StyleValues.Character,
    StyleValues.Table,
    StyleValues.Numbering,
] as const;

export enum FontFamilyValues {
    /** Novelty Font. Serialized value: `decorative` */
    Decorative = 'decorative',
    /** Monospace Font. Serialized value: `modern` */
    Modern = 'modern',
    /** Proportional Font With Serifs. Serialized value: `roman` */
    Roman = 'roman',
    /** Script Font. Serialized value: `script` */
    Script = 'script',
    /** Proportional Font Without Serifs. Serialized value: `swiss` */
    Swiss = 'swiss',
    /** No Font Family. Serialized value: `auto` */
    Auto = 'auto',
}

export const FontFamilyValuesArray = [
    FontFamilyValues.Decorative,
    FontFamilyValues.Modern,
    FontFamilyValues.Roman,
    FontFamilyValues.Script,
    FontFamilyValues.Swiss,
    FontFamilyValues.Auto,
] as const;

export enum FontPitchValues {
    /** Fixed Width. Serialized value: `fixed` */
    Fixed = 'fixed',
    /** Proportional Width. Serialized value: `variable` */
    Variable = 'variable',
    /** Default. Serialized value: `default` */
    Default = 'default',
}

export const FontPitchValuesArray = [
    FontPitchValues.Fixed,
    FontPitchValues.Variable,
    FontPitchValues.Default,
] as const;

export enum ThemeColorValues {
    /** Dark 1 Theme Color. Serialized value: `dark1` */
    Dark1 = 'dark1',
    /** Light 1 Theme Color. Serialized value: `light1` */
    Light1 = 'light1',
    /** Dark 2 Theme Color. Serialized value: `dark2` */
    Dark2 = 'dark2',
    /** Light 2 Theme Color. Serialized value: `light2` */
    Light2 = 'light2',
    /** Accent 1 Theme Color. Serialized value: `accent1` */
    Accent1 = 'accent1',
    /** Accent 2 Theme Color. Serialized value: `accent2` */
    Accent2 = 'accent2',
    /** Accent 3 Theme Color. Serialized value: `accent3` */
    Accent3 = 'accent3',
    /** Accent 4 Theme Color. Serialized value: `accent4` */
    Accent4 = 'accent4',
    /** Accent 5 Theme Color. Serialized value: `accent5` */
    Accent5 = 'accent5',
    /** Accent 6 Theme Color. Serialized value: `accent6` */
    Accent6 = 'accent6',
    /** Hyperlink Theme Color. Serialized value: `hyperlink` */
    Hyperlink = 'hyperlink',
    /** Followed Hyperlink Theme Color. Serialized value: `followedHyperlink` */
    FollowedHyperlink = 'followedHyperlink',
    /** No Theme Color. Serialized value: `none` */
    None = 'none',
    /** Background 1 Theme Color. Serialized value: `background1` */
    Background1 = 'background1',
    /** Text 1 Theme Color. Serialized value: `text1` */
    Text1 = 'text1',
    /** Background 2 Theme Color. Serialized value: `background2` */
    Background2 = 'background2',
    /** Text 2 Theme Color. Serialized value: `text2` */
    Text2 = 'text2',
}

export const ThemeColorValuesArray = [
    ThemeColorValues.Dark1,
    ThemeColorValues.Light1,
    ThemeColorValues.Dark2,
    ThemeColorValues.Light2,
    ThemeColorValues.Accent1,
    ThemeColorValues.Accent2,
    ThemeColorValues.Accent3,
    ThemeColorValues.Accent4,
    ThemeColorValues.Accent5,
    ThemeColorValues.Accent6,
    ThemeColorValues.Hyperlink,
    ThemeColorValues.FollowedHyperlink,
    ThemeColorValues.None,
    ThemeColorValues.Background1,
    ThemeColorValues.Text1,
    ThemeColorValues.Background2,
    ThemeColorValues.Text2,
] as const;

export enum DocPartBehaviorValues {
    /** Insert Content At Specified Location. Serialized value: `content` */
    Content = 'content',
    /** Ensure Entry Is In New Paragraph. Serialized value: `p` */
    Paragraph = 'p',
    /** Ensure Entry Is On New Page. Serialized value: `pg` */
    Page = 'pg',
}

export const DocPartBehaviorValuesArray = [
    DocPartBehaviorValues.Content,
    DocPartBehaviorValues.Paragraph,
    DocPartBehaviorValues.Page,
] as const;

export enum DocPartValues {
    /** No Type. Serialized value: `none` */
    None = 'none',
    /** Normal. Serialized value: `normal` */
    Normal = 'normal',
    /** Automatically Replace Name With Content. Serialized value: `autoExp` */
    AutoExp = 'autoExp',
    /** AutoText User Interface Entry. Serialized value: `toolbar` */
    Toolbar = 'toolbar',
    /** AutoCorrect Entry. Serialized value: `speller` */
    Speller = 'speller',
    /** Form Field Help Text. Serialized value: `formFld` */
    FormField = 'formFld',
    /** Structured Document Tag Placeholder Text. Serialized value: `bbPlcHdr` */
    SdtPlaceholder = 'bbPlcHdr',
}

export const DocPartValuesArray = [
    DocPartValues.None,
    DocPartValues.Normal,
    DocPartValues.AutoExp,
    DocPartValues.Toolbar,
    DocPartValues.Speller,
    DocPartValues.FormField,
    DocPartValues.SdtPlaceholder,
] as const;

export enum DocPartGalleryValues {
    /** Structured Document Tag Placeholder Text Gallery. Serialized value: `placeholder` */
    Placeholder = 'placeholder',
    /** All Galleries. Serialized value: `any` */
    Any = 'any',
    /** No Gallery Classification. Serialized value: `default` */
    Default = 'default',
    /** Document Parts Gallery. Serialized value: `docParts` */
    DocumentPart = 'docParts',
    /** Cover Page Gallery. Serialized value: `coverPg` */
    CoverPage = 'coverPg',
    /** Equations Gallery. Serialized value: `eq` */
    Equation = 'eq',
    /** Footers Gallery. Serialized value: `ftrs` */
    Footer = 'ftrs',
    /** Headers Gallery. Serialized value: `hdrs` */
    Header = 'hdrs',
    /** Page Numbers Gallery. Serialized value: `pgNum` */
    PageNumber = 'pgNum',
    /** Table Gallery. Serialized value: `tbls` */
    Table = 'tbls',
    /** Watermark Gallery. Serialized value: `watermarks` */
    WaterMark = 'watermarks',
    /** AutoText Gallery. Serialized value: `autoTxt` */
    AutoText = 'autoTxt',
    /** Text Box Gallery. Serialized value: `txtBox` */
    TextBox = 'txtBox',
    /** Page Numbers At Top Gallery. Serialized value: `pgNumT` */
    PageNumberTop = 'pgNumT',
    /** Page Numbers At Bottom Gallery. Serialized value: `pgNumB` */
    PageNumberBottom = 'pgNumB',
    /** Page Numbers At Margins Gallery. Serialized value: `pgNumMargins` */
    PageNumberMargins = 'pgNumMargins',
    /** Table of Contents Gallery. Serialized value: `tblOfContents` */
    TableOfContents = 'tblOfContents',
    /** Bibliography Gallery. Serialized value: `bib` */
    Bibliography = 'bib',
    /** Custom Quick Parts Gallery. Serialized value: `custQuickParts` */
    CustomQuickParts = 'custQuickParts',
    /** Custom Cover Page Gallery. Serialized value: `custCoverPg` */
    CustomCoverPage = 'custCoverPg',
    /** Custom Equation Gallery. Serialized value: `custEq` */
    CustomEquation = 'custEq',
    /** Custom Footer Gallery. Serialized value: `custFtrs` */
    CustomFooter = 'custFtrs',
    /** Custom Header Gallery. Serialized value: `custHdrs` */
    CustomHeaders = 'custHdrs',
    /** Custom Page Number Gallery. Serialized value: `custPgNum` */
    CustomPageNumber = 'custPgNum',
    /** Custom Table Gallery. Serialized value: `custTbls` */
    CustomTable = 'custTbls',
    /** Custom Watermark Gallery. Serialized value: `custWatermarks` */
    CustomWatermark = 'custWatermarks',
    /** Custom AutoText Gallery. Serialized value: `custAutoTxt` */
    CustomAutoText = 'custAutoTxt',
    /** Custom Text Box Gallery. Serialized value: `custTxtBox` */
    CustomTextBox = 'custTxtBox',
    /** Custom Page Number At Top Gallery. Serialized value: `custPgNumT` */
    CustomPageNumberTop = 'custPgNumT',
    /** Custom Page Number At Bottom Gallery. Serialized value: `custPgNumB` */
    CustomPageNumberBottom = 'custPgNumB',
    /** Custom Page Number At Margins Gallery. Serialized value: `custPgNumMargins` */
    CustomPageNumberMargin = 'custPgNumMargins',
    /** Custom Table of Contents Gallery. Serialized value: `custTblOfContents` */
    CustomTableOfContents = 'custTblOfContents',
    /** Custom Bibliography Gallery. Serialized value: `custBib` */
    CustomBibliography = 'custBib',
    /** Custom 1 Gallery. Serialized value: `custom1` */
    Custom1 = 'custom1',
    /** Custom 2 Gallery. Serialized value: `custom2` */
    Custom2 = 'custom2',
    /** Custom 3 Gallery. Serialized value: `custom3` */
    Custom3 = 'custom3',
    /** Custom 4 Gallery. Serialized value: `custom4` */
    Custom4 = 'custom4',
    /** Custom 5 Gallery. Serialized value: `custom5` */
    Custom5 = 'custom5',
}

export const DocPartGalleryValuesArray = [
    DocPartGalleryValues.Placeholder,
    DocPartGalleryValues.Any,
    DocPartGalleryValues.Default,
    DocPartGalleryValues.DocumentPart,
    DocPartGalleryValues.CoverPage,
    DocPartGalleryValues.Equation,
    DocPartGalleryValues.Footer,
    DocPartGalleryValues.Header,
    DocPartGalleryValues.PageNumber,
    DocPartGalleryValues.Table,
    DocPartGalleryValues.WaterMark,
    DocPartGalleryValues.AutoText,
    DocPartGalleryValues.TextBox,
    DocPartGalleryValues.PageNumberTop,
    DocPartGalleryValues.PageNumberBottom,
    DocPartGalleryValues.PageNumberMargins,
    DocPartGalleryValues.TableOfContents,
    DocPartGalleryValues.Bibliography,
    DocPartGalleryValues.CustomQuickParts,
    DocPartGalleryValues.CustomCoverPage,
    DocPartGalleryValues.CustomEquation,
    DocPartGalleryValues.CustomFooter,
    DocPartGalleryValues.CustomHeaders,
    DocPartGalleryValues.CustomPageNumber,
    DocPartGalleryValues.CustomTable,
    DocPartGalleryValues.CustomWatermark,
    DocPartGalleryValues.CustomAutoText,
    DocPartGalleryValues.CustomTextBox,
    DocPartGalleryValues.CustomPageNumberTop,
    DocPartGalleryValues.CustomPageNumberBottom,
    DocPartGalleryValues.CustomPageNumberMargin,
    DocPartGalleryValues.CustomTableOfContents,
    DocPartGalleryValues.CustomBibliography,
    DocPartGalleryValues.Custom1,
    DocPartGalleryValues.Custom2,
    DocPartGalleryValues.Custom3,
    DocPartGalleryValues.Custom4,
    DocPartGalleryValues.Custom5,
] as const;

export enum CaptionPositionValues {
    /** Position Caption Above Object. Serialized value: `above` */
    Above = 'above',
    /** Position Caption Below Object. Serialized value: `below` */
    Below = 'below',
}

export const CaptionPositionValuesArray = [
    CaptionPositionValues.Above,
    CaptionPositionValues.Below,
] as const;

export enum LevelJustificationValues {
    /** Align Left. Serialized value: `left` */
    Left = 'left',
    /** Align Center. Serialized value: `center` */
    Center = 'center',
    /** Align Right. Serialized value: `right` */
    Right = 'right',
}

export const LevelJustificationValuesArray = [
    LevelJustificationValues.Left,
    LevelJustificationValues.Center,
    LevelJustificationValues.Right,
] as const;

export enum ShadingPatternValues {
    /** No Pattern. Serialized value: `nil` */
    Nil = 'nil',
    /** No Pattern. Serialized value: `clear` */
    Clear = 'clear',
    /** 100% Fill Pattern. Serialized value: `solid` */
    Solid = 'solid',
    /** Horizontal Stripe Pattern. Serialized value: `horzStripe` */
    HorizontalStripe = 'horzStripe',
    /** Vertical Stripe Pattern. Serialized value: `vertStripe` */
    VerticalStripe = 'vertStripe',
    /** Reverse Diagonal Stripe Pattern. Serialized value: `reverseDiagStripe` */
    ReverseDiagonalStripe = 'reverseDiagStripe',
    /** Diagonal Stripe Pattern. Serialized value: `diagStripe` */
    DiagonalStripe = 'diagStripe',
    /** Horizontal Cross Pattern. Serialized value: `horzCross` */
    HorizontalCross = 'horzCross',
    /** Diagonal Cross Pattern. Serialized value: `diagCross` */
    DiagonalCross = 'diagCross',
    /** Thin Horizontal Stripe Pattern. Serialized value: `thinHorzStripe` */
    ThinHorizontalStripe = 'thinHorzStripe',
    /** Thin Vertical Stripe Pattern. Serialized value: `thinVertStripe` */
    ThinVerticalStripe = 'thinVertStripe',
    /** Thin Reverse Diagonal Stripe Pattern. Serialized value: `thinReverseDiagStripe` */
    ThinReverseDiagonalStripe = 'thinReverseDiagStripe',
    /** Thin Diagonal Stripe Pattern. Serialized value: `thinDiagStripe` */
    ThinDiagonalStripe = 'thinDiagStripe',
    /** Thin Horizontal Cross Pattern. Serialized value: `thinHorzCross` */
    ThinHorizontalCross = 'thinHorzCross',
    /** Thin Diagonal Cross Pattern. Serialized value: `thinDiagCross` */
    ThinDiagonalCross = 'thinDiagCross',
    /** 5% Fill Pattern. Serialized value: `pct5` */
    Percent5 = 'pct5',
    /** 10% Fill Pattern. Serialized value: `pct10` */
    Percent10 = 'pct10',
    /** 12.5% Fill Pattern. Serialized value: `pct12` */
    Percent12 = 'pct12',
    /** 15% Fill Pattern. Serialized value: `pct15` */
    Percent15 = 'pct15',
    /** 20% Fill Pattern. Serialized value: `pct20` */
    Percent20 = 'pct20',
    /** 25% Fill Pattern. Serialized value: `pct25` */
    Percent25 = 'pct25',
    /** 30% Fill Pattern. Serialized value: `pct30` */
    Percent30 = 'pct30',
    /** 35% Fill Pattern. Serialized value: `pct35` */
    Percent35 = 'pct35',
    /** 37.5% Fill Pattern. Serialized value: `pct37` */
    Percent37 = 'pct37',
    /** 40% Fill Pattern. Serialized value: `pct40` */
    Percent40 = 'pct40',
    /** 45% Fill Pattern. Serialized value: `pct45` */
    Percent45 = 'pct45',
    /** 50% Fill Pattern. Serialized value: `pct50` */
    Percent50 = 'pct50',
    /** 55% Fill Pattern. Serialized value: `pct55` */
    Percent55 = 'pct55',
    /** 60% Fill Pattern. Serialized value: `pct60` */
    Percent60 = 'pct60',
    /** 62.5% Fill Pattern. Serialized value: `pct62` */
    Percent62 = 'pct62',
    /** 65% Fill Pattern. Serialized value: `pct65` */
    Percent65 = 'pct65',
    /** 70% Fill Pattern. Serialized value: `pct70` */
    Percent70 = 'pct70',
    /** 75% Fill Pattern. Serialized value: `pct75` */
    Percent75 = 'pct75',
    /** 80% Fill Pattern. Serialized value: `pct80` */
    Percent80 = 'pct80',
    /** 85% Fill Pattern. Serialized value: `pct85` */
    Percent85 = 'pct85',
    /** 87.5% Fill Pattern. Serialized value: `pct87` */
    Percent87 = 'pct87',
    /** 90% Fill Pattern. Serialized value: `pct90` */
    Percent90 = 'pct90',
    /** 95% Fill Pattern. Serialized value: `pct95` */
    Percent95 = 'pct95',
}

export const ShadingPatternValuesArray = [
    ShadingPatternValues.Nil,
    ShadingPatternValues.Clear,
    ShadingPatternValues.Solid,
    ShadingPatternValues.HorizontalStripe,
    ShadingPatternValues.VerticalStripe,
    ShadingPatternValues.ReverseDiagonalStripe,
    ShadingPatternValues.DiagonalStripe,
    ShadingPatternValues.HorizontalCross,
    ShadingPatternValues.DiagonalCross,
    ShadingPatternValues.ThinHorizontalStripe,
    ShadingPatternValues.ThinVerticalStripe,
    ShadingPatternValues.ThinReverseDiagonalStripe,
    ShadingPatternValues.ThinDiagonalStripe,
    ShadingPatternValues.ThinHorizontalCross,
    ShadingPatternValues.ThinDiagonalCross,
    ShadingPatternValues.Percent5,
    ShadingPatternValues.Percent10,
    ShadingPatternValues.Percent12,
    ShadingPatternValues.Percent15,
    ShadingPatternValues.Percent20,
    ShadingPatternValues.Percent25,
    ShadingPatternValues.Percent30,
    ShadingPatternValues.Percent35,
    ShadingPatternValues.Percent37,
    ShadingPatternValues.Percent40,
    ShadingPatternValues.Percent45,
    ShadingPatternValues.Percent50,
    ShadingPatternValues.Percent55,
    ShadingPatternValues.Percent60,
    ShadingPatternValues.Percent62,
    ShadingPatternValues.Percent65,
    ShadingPatternValues.Percent70,
    ShadingPatternValues.Percent75,
    ShadingPatternValues.Percent80,
    ShadingPatternValues.Percent85,
    ShadingPatternValues.Percent87,
    ShadingPatternValues.Percent90,
    ShadingPatternValues.Percent95,
] as const;

export enum StylePaneSortMethodsValues {
    /** undefined. Serialized value: `0000` */
    Zero = '0000',
    /** undefined. Serialized value: `name` */
    Name = 'name',
    /** undefined. Serialized value: `0001` */
    One = '0001',
    /** undefined. Serialized value: `priority` */
    Priority = 'priority',
    /** undefined. Serialized value: `0002` */
    Two = '0002',
    /** undefined. Serialized value: `font` */
    Font = 'font',
    /** undefined. Serialized value: `0003` */
    Three = '0003',
    /** undefined. Serialized value: `basedOn` */
    BasedOn = 'basedOn',
    /** undefined. Serialized value: `0004` */
    Four = '0004',
    /** undefined. Serialized value: `type` */
    Type = 'type',
    /** undefined. Serialized value: `0005` */
    Five = '0005',
    /** undefined. Serialized value: `default` */
    Default = 'default',
}

export const StylePaneSortMethodsValuesArray = [
    StylePaneSortMethodsValues.Zero,
    StylePaneSortMethodsValues.Name,
    StylePaneSortMethodsValues.One,
    StylePaneSortMethodsValues.Priority,
    StylePaneSortMethodsValues.Two,
    StylePaneSortMethodsValues.Font,
    StylePaneSortMethodsValues.Three,
    StylePaneSortMethodsValues.BasedOn,
    StylePaneSortMethodsValues.Four,
    StylePaneSortMethodsValues.Type,
    StylePaneSortMethodsValues.Five,
    StylePaneSortMethodsValues.Default,
] as const;

export enum DirectionValues {
    /** undefined. Serialized value: `ltr` */
    Ltr = 'ltr',
    /** undefined. Serialized value: `rtl` */
    Rtl = 'rtl',
}

export const DirectionValuesArray = [
    DirectionValues.Ltr,
    DirectionValues.Rtl,
] as const;

export enum CalendarValues {
    /** Gregorian. Serialized value: `gregorian` */
    Gregorian = 'gregorian',
    /** Hijri. Serialized value: `hijri` */
    Hijri = 'hijri',
    /** undefined. Serialized value: `umalqura` */
    Umalqura = 'umalqura',
    /** Hebrew. Serialized value: `hebrew` */
    Hebrew = 'hebrew',
    /** Taiwan. Serialized value: `taiwan` */
    Taiwan = 'taiwan',
    /** Japanese Emperor Era. Serialized value: `japan` */
    Japan = 'japan',
    /** Thai. Serialized value: `thai` */
    Thai = 'thai',
    /** Korean Tangun Era. Serialized value: `korea` */
    Korea = 'korea',
    /** Saka Era. Serialized value: `saka` */
    Saka = 'saka',
    /** Gregorian transliterated English. Serialized value: `gregorianXlitEnglish` */
    GregorianTransliteratedEnglish = 'gregorianXlitEnglish',
    /** Gregorian transliterated French. Serialized value: `gregorianXlitFrench` */
    GregorianTransliteratedFrench = 'gregorianXlitFrench',
    /** undefined. Serialized value: `gregorianUs` */
    GregorianUs = 'gregorianUs',
    /** undefined. Serialized value: `gregorianMeFrench` */
    GregorianMeFrench = 'gregorianMeFrench',
    /** undefined. Serialized value: `gregorianArabic` */
    GregorianArabic = 'gregorianArabic',
    /** undefined. Serialized value: `none` */
    None = 'none',
}

export const CalendarValuesArray = [
    CalendarValues.Gregorian,
    CalendarValues.Hijri,
    CalendarValues.Umalqura,
    CalendarValues.Hebrew,
    CalendarValues.Taiwan,
    CalendarValues.Japan,
    CalendarValues.Thai,
    CalendarValues.Korea,
    CalendarValues.Saka,
    CalendarValues.GregorianTransliteratedEnglish,
    CalendarValues.GregorianTransliteratedFrench,
    CalendarValues.GregorianUs,
    CalendarValues.GregorianMeFrench,
    CalendarValues.GregorianArabic,
    CalendarValues.None,
] as const;

export enum NumberFormatValues {
    /** Decimal Numbers. Serialized value: `decimal` */
    Decimal = 'decimal',
    /** Uppercase Roman Numerals. Serialized value: `upperRoman` */
    UpperRoman = 'upperRoman',
    /** Lowercase Roman Numerals. Serialized value: `lowerRoman` */
    LowerRoman = 'lowerRoman',
    /** Uppercase Latin Alphabet. Serialized value: `upperLetter` */
    UpperLetter = 'upperLetter',
    /** Lowercase Latin Alphabet. Serialized value: `lowerLetter` */
    LowerLetter = 'lowerLetter',
    /** Ordinal. Serialized value: `ordinal` */
    Ordinal = 'ordinal',
    /** Cardinal Text. Serialized value: `cardinalText` */
    CardinalText = 'cardinalText',
    /** Ordinal Text. Serialized value: `ordinalText` */
    OrdinalText = 'ordinalText',
    /** Hexadecimal Numbering. Serialized value: `hex` */
    Hex = 'hex',
    /** Chicago Manual of Style. Serialized value: `chicago` */
    Chicago = 'chicago',
    /** Ideographs. Serialized value: `ideographDigital` */
    IdeographDigital = 'ideographDigital',
    /** Japanese Counting System. Serialized value: `japaneseCounting` */
    JapaneseCounting = 'japaneseCounting',
    /** AIUEO Order Hiragana. Serialized value: `aiueo` */
    Aiueo = 'aiueo',
    /** Iroha Ordered Katakana. Serialized value: `iroha` */
    Iroha = 'iroha',
    /** Double Byte Arabic Numerals. Serialized value: `decimalFullWidth` */
    DecimalFullWidth = 'decimalFullWidth',
    /** Single Byte Arabic Numerals. Serialized value: `decimalHalfWidth` */
    DecimalHalfWidth = 'decimalHalfWidth',
    /** Japanese Legal Numbering. Serialized value: `japaneseLegal` */
    JapaneseLegal = 'japaneseLegal',
    /** Japanese Digital Ten Thousand Counting System. Serialized value: `japaneseDigitalTenThousand` */
    JapaneseDigitalTenThousand = 'japaneseDigitalTenThousand',
    /** Decimal Numbers Enclosed in a Circle. Serialized value: `decimalEnclosedCircle` */
    DecimalEnclosedCircle = 'decimalEnclosedCircle',
    /** Double Byte Arabic Numerals Alternate. Serialized value: `decimalFullWidth2` */
    DecimalFullWidth2 = 'decimalFullWidth2',
    /** Full-Width AIUEO Order Hiragana. Serialized value: `aiueoFullWidth` */
    AiueoFullWidth = 'aiueoFullWidth',
    /** Full-Width Iroha Ordered Katakana. Serialized value: `irohaFullWidth` */
    IrohaFullWidth = 'irohaFullWidth',
    /** Initial Zero Arabic Numerals. Serialized value: `decimalZero` */
    DecimalZero = 'decimalZero',
    /** Bullet. Serialized value: `bullet` */
    Bullet = 'bullet',
    /** Korean Ganada Numbering. Serialized value: `ganada` */
    Ganada = 'ganada',
    /** Korean Chosung Numbering. Serialized value: `chosung` */
    Chosung = 'chosung',
    /** Decimal Numbers Followed by a Period. Serialized value: `decimalEnclosedFullstop` */
    DecimalEnclosedFullstop = 'decimalEnclosedFullstop',
    /** Decimal Numbers Enclosed in Parenthesis. Serialized value: `decimalEnclosedParen` */
    DecimalEnclosedParen = 'decimalEnclosedParen',
    /** Decimal Numbers Enclosed in a Circle. Serialized value: `decimalEnclosedCircleChinese` */
    DecimalEnclosedCircleChinese = 'decimalEnclosedCircleChinese',
    /** Ideographs Enclosed in a Circle. Serialized value: `ideographEnclosedCircle` */
    IdeographEnclosedCircle = 'ideographEnclosedCircle',
    /** Traditional Ideograph Format. Serialized value: `ideographTraditional` */
    IdeographTraditional = 'ideographTraditional',
    /** Zodiac Ideograph Format. Serialized value: `ideographZodiac` */
    IdeographZodiac = 'ideographZodiac',
    /** Traditional Zodiac Ideograph Format. Serialized value: `ideographZodiacTraditional` */
    IdeographZodiacTraditional = 'ideographZodiacTraditional',
    /** Taiwanese Counting System. Serialized value: `taiwaneseCounting` */
    TaiwaneseCounting = 'taiwaneseCounting',
    /** Traditional Legal Ideograph Format. Serialized value: `ideographLegalTraditional` */
    IdeographLegalTraditional = 'ideographLegalTraditional',
    /** Taiwanese Counting Thousand System. Serialized value: `taiwaneseCountingThousand` */
    TaiwaneseCountingThousand = 'taiwaneseCountingThousand',
    /** Taiwanese Digital Counting System. Serialized value: `taiwaneseDigital` */
    TaiwaneseDigital = 'taiwaneseDigital',
    /** Chinese Counting System. Serialized value: `chineseCounting` */
    ChineseCounting = 'chineseCounting',
    /** Chinese Legal Simplified Format. Serialized value: `chineseLegalSimplified` */
    ChineseLegalSimplified = 'chineseLegalSimplified',
    /** Chinese Counting Thousand System. Serialized value: `chineseCountingThousand` */
    ChineseCountingThousand = 'chineseCountingThousand',
    /** Korean Digital Counting System. Serialized value: `koreanDigital` */
    KoreanDigital = 'koreanDigital',
    /** Korean Counting System. Serialized value: `koreanCounting` */
    KoreanCounting = 'koreanCounting',
    /** Korean Legal Numbering. Serialized value: `koreanLegal` */
    KoreanLegal = 'koreanLegal',
    /** Korean Digital Counting System Alternate. Serialized value: `koreanDigital2` */
    KoreanDigital2 = 'koreanDigital2',
    /** Vietnamese Numerals. Serialized value: `vietnameseCounting` */
    VietnameseCounting = 'vietnameseCounting',
    /** Lowercase Russian Alphabet. Serialized value: `russianLower` */
    RussianLower = 'russianLower',
    /** Uppercase Russian Alphabet. Serialized value: `russianUpper` */
    RussianUpper = 'russianUpper',
    /** No Numbering. Serialized value: `none` */
    None = 'none',
    /** Number With Dashes. Serialized value: `numberInDash` */
    NumberInDash = 'numberInDash',
    /** Hebrew Numerals. Serialized value: `hebrew1` */
    Hebrew1 = 'hebrew1',
    /** Hebrew Alphabet. Serialized value: `hebrew2` */
    Hebrew2 = 'hebrew2',
    /** Arabic Alphabet. Serialized value: `arabicAlpha` */
    ArabicAlpha = 'arabicAlpha',
    /** Arabic Abjad Numerals. Serialized value: `arabicAbjad` */
    ArabicAbjad = 'arabicAbjad',
    /** Hindi Vowels. Serialized value: `hindiVowels` */
    HindiVowels = 'hindiVowels',
    /** Hindi Consonants. Serialized value: `hindiConsonants` */
    HindiConsonants = 'hindiConsonants',
    /** Hindi Numbers. Serialized value: `hindiNumbers` */
    HindiNumbers = 'hindiNumbers',
    /** Hindi Counting System. Serialized value: `hindiCounting` */
    HindiCounting = 'hindiCounting',
    /** Thai Letters. Serialized value: `thaiLetters` */
    ThaiLetters = 'thaiLetters',
    /** Thai Numerals. Serialized value: `thaiNumbers` */
    ThaiNumbers = 'thaiNumbers',
    /** Thai Counting System. Serialized value: `thaiCounting` */
    ThaiCounting = 'thaiCounting',
    /** undefined. Serialized value: `bahtText` */
    BahtText = 'bahtText',
    /** undefined. Serialized value: `dollarText` */
    DollarText = 'dollarText',
    /** undefined. Serialized value: `custom` */
    Custom = 'custom',
}

export const NumberFormatValuesArray = [
    NumberFormatValues.Decimal,
    NumberFormatValues.UpperRoman,
    NumberFormatValues.LowerRoman,
    NumberFormatValues.UpperLetter,
    NumberFormatValues.LowerLetter,
    NumberFormatValues.Ordinal,
    NumberFormatValues.CardinalText,
    NumberFormatValues.OrdinalText,
    NumberFormatValues.Hex,
    NumberFormatValues.Chicago,
    NumberFormatValues.IdeographDigital,
    NumberFormatValues.JapaneseCounting,
    NumberFormatValues.Aiueo,
    NumberFormatValues.Iroha,
    NumberFormatValues.DecimalFullWidth,
    NumberFormatValues.DecimalHalfWidth,
    NumberFormatValues.JapaneseLegal,
    NumberFormatValues.JapaneseDigitalTenThousand,
    NumberFormatValues.DecimalEnclosedCircle,
    NumberFormatValues.DecimalFullWidth2,
    NumberFormatValues.AiueoFullWidth,
    NumberFormatValues.IrohaFullWidth,
    NumberFormatValues.DecimalZero,
    NumberFormatValues.Bullet,
    NumberFormatValues.Ganada,
    NumberFormatValues.Chosung,
    NumberFormatValues.DecimalEnclosedFullstop,
    NumberFormatValues.DecimalEnclosedParen,
    NumberFormatValues.DecimalEnclosedCircleChinese,
    NumberFormatValues.IdeographEnclosedCircle,
    NumberFormatValues.IdeographTraditional,
    NumberFormatValues.IdeographZodiac,
    NumberFormatValues.IdeographZodiacTraditional,
    NumberFormatValues.TaiwaneseCounting,
    NumberFormatValues.IdeographLegalTraditional,
    NumberFormatValues.TaiwaneseCountingThousand,
    NumberFormatValues.TaiwaneseDigital,
    NumberFormatValues.ChineseCounting,
    NumberFormatValues.ChineseLegalSimplified,
    NumberFormatValues.ChineseCountingThousand,
    NumberFormatValues.KoreanDigital,
    NumberFormatValues.KoreanCounting,
    NumberFormatValues.KoreanLegal,
    NumberFormatValues.KoreanDigital2,
    NumberFormatValues.VietnameseCounting,
    NumberFormatValues.RussianLower,
    NumberFormatValues.RussianUpper,
    NumberFormatValues.None,
    NumberFormatValues.NumberInDash,
    NumberFormatValues.Hebrew1,
    NumberFormatValues.Hebrew2,
    NumberFormatValues.ArabicAlpha,
    NumberFormatValues.ArabicAbjad,
    NumberFormatValues.HindiVowels,
    NumberFormatValues.HindiConsonants,
    NumberFormatValues.HindiNumbers,
    NumberFormatValues.HindiCounting,
    NumberFormatValues.ThaiLetters,
    NumberFormatValues.ThaiNumbers,
    NumberFormatValues.ThaiCounting,
    NumberFormatValues.BahtText,
    NumberFormatValues.DollarText,
    NumberFormatValues.Custom,
] as const;

export enum TextDirectionValues {
    /** Left to Right, Top to Bottom. Serialized value: `lrTb` */
    LefToRightTopToBottom = 'lrTb',
    /** undefined. Serialized value: `tb` */
    LeftToRightTopToBottom2010 = 'tb',
    /** Top to Bottom, Right to Left. Serialized value: `tbRl` */
    TopToBottomRightToLeft = 'tbRl',
    /** undefined. Serialized value: `rl` */
    TopToBottomRightToLeft2010 = 'rl',
    /** Bottom to Top, Left to Right. Serialized value: `btLr` */
    BottomToTopLeftToRight = 'btLr',
    /** undefined. Serialized value: `lr` */
    BottomToTopLeftToRight2010 = 'lr',
    /** Left to Right, Top to Bottom Rotated. Serialized value: `lrTbV` */
    LefttoRightTopToBottomRotated = 'lrTbV',
    /** undefined. Serialized value: `tbV` */
    LeftToRightTopToBottomRotated2010 = 'tbV',
    /** Top to Bottom, Right to Left Rotated. Serialized value: `tbRlV` */
    TopToBottomRightToLeftRotated = 'tbRlV',
    /** undefined. Serialized value: `rlV` */
    TopToBottomRightToLeftRotated2010 = 'rlV',
    /** Top to Bottom, Left to Right Rotated. Serialized value: `tbLrV` */
    TopToBottomLeftToRightRotated = 'tbLrV',
    /** undefined. Serialized value: `lrV` */
    TopToBottomLeftToRightRotated2010 = 'lrV',
}

export const TextDirectionValuesArray = [
    TextDirectionValues.LefToRightTopToBottom,
    TextDirectionValues.LeftToRightTopToBottom2010,
    TextDirectionValues.TopToBottomRightToLeft,
    TextDirectionValues.TopToBottomRightToLeft2010,
    TextDirectionValues.BottomToTopLeftToRight,
    TextDirectionValues.BottomToTopLeftToRight2010,
    TextDirectionValues.LefttoRightTopToBottomRotated,
    TextDirectionValues.LeftToRightTopToBottomRotated2010,
    TextDirectionValues.TopToBottomRightToLeftRotated,
    TextDirectionValues.TopToBottomRightToLeftRotated2010,
    TextDirectionValues.TopToBottomLeftToRightRotated,
    TextDirectionValues.TopToBottomLeftToRightRotated2010,
] as const;

export enum CryptAlgorithmValues {
    /** Any Type. Serialized value: `typeAny` */
    TypeAny = 'typeAny',
    /** undefined. Serialized value: `custom` */
    Custom = 'custom',
}

export const CryptAlgorithmValuesArray = [
    CryptAlgorithmValues.TypeAny,
    CryptAlgorithmValues.Custom,
] as const;

export enum CryptAlgorithmClassValues {
    /** Hashing. Serialized value: `hash` */
    Hash = 'hash',
    /** undefined. Serialized value: `custom` */
    Custom = 'custom',
}

export const CryptAlgorithmClassValuesArray = [
    CryptAlgorithmClassValues.Hash,
    CryptAlgorithmClassValues.Custom,
] as const;

export enum CryptProviderValues {
    /** AES Provider. Serialized value: `rsaAES` */
    RsaAdvancedEncryptionStandard = 'rsaAES',
    /** Any Provider. Serialized value: `rsaFull` */
    RsaFull = 'rsaFull',
    /** undefined. Serialized value: `custom` */
    Custom = 'custom',
}

export const CryptProviderValuesArray = [
    CryptProviderValues.RsaAdvancedEncryptionStandard,
    CryptProviderValues.RsaFull,
    CryptProviderValues.Custom,
] as const;

export enum JustificationValues {
    /** Align Left. Serialized value: `left` */
    Left = 'left',
    /** undefined. Serialized value: `start` */
    Start = 'start',
    /** Align Center. Serialized value: `center` */
    Center = 'center',
    /** Align Right. Serialized value: `right` */
    Right = 'right',
    /** undefined. Serialized value: `end` */
    End = 'end',
    /** Justified. Serialized value: `both` */
    Both = 'both',
    /** Medium Kashida Length. Serialized value: `mediumKashida` */
    MediumKashida = 'mediumKashida',
    /** Distribute All Characters Equally. Serialized value: `distribute` */
    Distribute = 'distribute',
    /** Align to List Tab. Serialized value: `numTab` */
    NumTab = 'numTab',
    /** Widest Kashida Length. Serialized value: `highKashida` */
    HighKashida = 'highKashida',
    /** Low Kashida Length. Serialized value: `lowKashida` */
    LowKashida = 'lowKashida',
    /** Thai Language Justification. Serialized value: `thaiDistribute` */
    ThaiDistribute = 'thaiDistribute',
}

export const JustificationValuesArray = [
    JustificationValues.Left,
    JustificationValues.Start,
    JustificationValues.Center,
    JustificationValues.Right,
    JustificationValues.End,
    JustificationValues.Both,
    JustificationValues.MediumKashida,
    JustificationValues.Distribute,
    JustificationValues.NumTab,
    JustificationValues.HighKashida,
    JustificationValues.LowKashida,
    JustificationValues.ThaiDistribute,
] as const;

export enum TabStopValues {
    /** No Tab Stop. Serialized value: `clear` */
    Clear = 'clear',
    /** Left Tab. Serialized value: `left` */
    Left = 'left',
    /** undefined. Serialized value: `start` */
    Start = 'start',
    /** Centered Tab. Serialized value: `center` */
    Center = 'center',
    /** Right Tab. Serialized value: `right` */
    Right = 'right',
    /** undefined. Serialized value: `end` */
    End = 'end',
    /** Decimal Tab. Serialized value: `decimal` */
    Decimal = 'decimal',
    /** Bar Tab. Serialized value: `bar` */
    Bar = 'bar',
    /** List Tab. Serialized value: `num` */
    Number = 'num',
}

export const TabStopValuesArray = [
    TabStopValues.Clear,
    TabStopValues.Left,
    TabStopValues.Start,
    TabStopValues.Center,
    TabStopValues.Right,
    TabStopValues.End,
    TabStopValues.Decimal,
    TabStopValues.Bar,
    TabStopValues.Number,
] as const;

export enum BorderValues {
    /** No Border. Serialized value: `nil` */
    Nil = 'nil',
    /** No Border. Serialized value: `none` */
    None = 'none',
    /** Single Line Border. Serialized value: `single` */
    Single = 'single',
    /** Single Line Border. Serialized value: `thick` */
    Thick = 'thick',
    /** Double Line Border. Serialized value: `double` */
    Double = 'double',
    /** Dotted Line Border. Serialized value: `dotted` */
    Dotted = 'dotted',
    /** Dashed Line Border. Serialized value: `dashed` */
    Dashed = 'dashed',
    /** Dot Dash Line Border. Serialized value: `dotDash` */
    DotDash = 'dotDash',
    /** Dot Dot Dash Line Border. Serialized value: `dotDotDash` */
    DotDotDash = 'dotDotDash',
    /** Triple Line Border. Serialized value: `triple` */
    Triple = 'triple',
    /** Thin, Thick Line Border. Serialized value: `thinThickSmallGap` */
    ThinThickSmallGap = 'thinThickSmallGap',
    /** Thick, Thin Line Border. Serialized value: `thickThinSmallGap` */
    ThickThinSmallGap = 'thickThinSmallGap',
    /** Thin, Thick, Thin Line Border. Serialized value: `thinThickThinSmallGap` */
    ThinThickThinSmallGap = 'thinThickThinSmallGap',
    /** Thin, Thick Line Border. Serialized value: `thinThickMediumGap` */
    ThinThickMediumGap = 'thinThickMediumGap',
    /** Thick, Thin Line Border. Serialized value: `thickThinMediumGap` */
    ThickThinMediumGap = 'thickThinMediumGap',
    /** Thin, Thick, Thin Line Border. Serialized value: `thinThickThinMediumGap` */
    ThinThickThinMediumGap = 'thinThickThinMediumGap',
    /** Thin, Thick Line Border. Serialized value: `thinThickLargeGap` */
    ThinThickLargeGap = 'thinThickLargeGap',
    /** Thick, Thin Line Border. Serialized value: `thickThinLargeGap` */
    ThickThinLargeGap = 'thickThinLargeGap',
    /** Thin, Thick, Thin Line Border. Serialized value: `thinThickThinLargeGap` */
    ThinThickThinLargeGap = 'thinThickThinLargeGap',
    /** Wavy Line Border. Serialized value: `wave` */
    Wave = 'wave',
    /** Double Wave Line Border. Serialized value: `doubleWave` */
    DoubleWave = 'doubleWave',
    /** Dashed Line Border. Serialized value: `dashSmallGap` */
    DashSmallGap = 'dashSmallGap',
    /** Dash Dot Strokes Line Border. Serialized value: `dashDotStroked` */
    DashDotStroked = 'dashDotStroked',
    /** 3D Embossed Line Border. Serialized value: `threeDEmboss` */
    ThreeDEmboss = 'threeDEmboss',
    /** 3D Engraved Line Border. Serialized value: `threeDEngrave` */
    ThreeDEngrave = 'threeDEngrave',
    /** Outset Line Border. Serialized value: `outset` */
    Outset = 'outset',
    /** Inset Line Border. Serialized value: `inset` */
    Inset = 'inset',
    /** Apples Art Border. Serialized value: `apples` */
    Apples = 'apples',
    /** Arched Scallops Art Border. Serialized value: `archedScallops` */
    ArchedScallops = 'archedScallops',
    /** Baby Pacifier Art Border. Serialized value: `babyPacifier` */
    BabyPacifier = 'babyPacifier',
    /** Baby Rattle Art Border. Serialized value: `babyRattle` */
    BabyRattle = 'babyRattle',
    /** Three Color Balloons Art Border. Serialized value: `balloons3Colors` */
    Balloons3Colors = 'balloons3Colors',
    /** Hot Air Balloons Art Border. Serialized value: `balloonsHotAir` */
    BalloonsHotAir = 'balloonsHotAir',
    /** Black Dash Art Border. Serialized value: `basicBlackDashes` */
    BasicBlackDashes = 'basicBlackDashes',
    /** Black Dot Art Border. Serialized value: `basicBlackDots` */
    BasicBlackDots = 'basicBlackDots',
    /** Black Square Art Border. Serialized value: `basicBlackSquares` */
    BasicBlackSquares = 'basicBlackSquares',
    /** Thin Line Art Border. Serialized value: `basicThinLines` */
    BasicThinLines = 'basicThinLines',
    /** White Dash Art Border. Serialized value: `basicWhiteDashes` */
    BasicWhiteDashes = 'basicWhiteDashes',
    /** White Dot Art Border. Serialized value: `basicWhiteDots` */
    BasicWhiteDots = 'basicWhiteDots',
    /** White Square Art Border. Serialized value: `basicWhiteSquares` */
    BasicWhiteSquares = 'basicWhiteSquares',
    /** Wide Inline Art Border. Serialized value: `basicWideInline` */
    BasicWideInline = 'basicWideInline',
    /** Wide Midline Art Border. Serialized value: `basicWideMidline` */
    BasicWideMidline = 'basicWideMidline',
    /** Wide Outline Art Border. Serialized value: `basicWideOutline` */
    BasicWideOutline = 'basicWideOutline',
    /** Bats Art Border. Serialized value: `bats` */
    Bats = 'bats',
    /** Birds Art Border. Serialized value: `birds` */
    Birds = 'birds',
    /** Birds Flying Art Border. Serialized value: `birdsFlight` */
    BirdsFlight = 'birdsFlight',
    /** Cabin Art Border. Serialized value: `cabins` */
    Cabins = 'cabins',
    /** Cake Art Border. Serialized value: `cakeSlice` */
    CakeSlice = 'cakeSlice',
    /** Candy Corn Art Border. Serialized value: `candyCorn` */
    CandyCorn = 'candyCorn',
    /** Knot Work Art Border. Serialized value: `celticKnotwork` */
    CelticKnotwork = 'celticKnotwork',
    /** Certificate Banner Art Border. Serialized value: `certificateBanner` */
    CertificateBanner = 'certificateBanner',
    /** Chain Link Art Border. Serialized value: `chainLink` */
    ChainLink = 'chainLink',
    /** Champagne Bottle Art Border. Serialized value: `champagneBottle` */
    ChampagneBottle = 'champagneBottle',
    /** Black and White Bar Art Border. Serialized value: `checkedBarBlack` */
    CheckedBarBlack = 'checkedBarBlack',
    /** Color Checked Bar Art Border. Serialized value: `checkedBarColor` */
    CheckedBarColor = 'checkedBarColor',
    /** Checkerboard Art Border. Serialized value: `checkered` */
    Checkered = 'checkered',
    /** Christmas Tree Art Border. Serialized value: `christmasTree` */
    ChristmasTree = 'christmasTree',
    /** Circles And Lines Art Border. Serialized value: `circlesLines` */
    CirclesLines = 'circlesLines',
    /** Circles and Rectangles Art Border. Serialized value: `circlesRectangles` */
    CirclesRectangles = 'circlesRectangles',
    /** Wave Art Border. Serialized value: `classicalWave` */
    ClassicalWave = 'classicalWave',
    /** Clocks Art Border. Serialized value: `clocks` */
    Clocks = 'clocks',
    /** Compass Art Border. Serialized value: `compass` */
    Compass = 'compass',
    /** Confetti Art Border. Serialized value: `confetti` */
    Confetti = 'confetti',
    /** Confetti Art Border. Serialized value: `confettiGrays` */
    ConfettiGrays = 'confettiGrays',
    /** Confetti Art Border. Serialized value: `confettiOutline` */
    ConfettiOutline = 'confettiOutline',
    /** Confetti Streamers Art Border. Serialized value: `confettiStreamers` */
    ConfettiStreamers = 'confettiStreamers',
    /** Confetti Art Border. Serialized value: `confettiWhite` */
    ConfettiWhite = 'confettiWhite',
    /** Corner Triangle Art Border. Serialized value: `cornerTriangles` */
    CornerTriangles = 'cornerTriangles',
    /** Dashed Line Art Border. Serialized value: `couponCutoutDashes` */
    CouponCutoutDashes = 'couponCutoutDashes',
    /** Dotted Line Art Border. Serialized value: `couponCutoutDots` */
    CouponCutoutDots = 'couponCutoutDots',
    /** Maze Art Border. Serialized value: `crazyMaze` */
    CrazyMaze = 'crazyMaze',
    /** Butterfly Art Border. Serialized value: `creaturesButterfly` */
    CreaturesButterfly = 'creaturesButterfly',
    /** Fish Art Border. Serialized value: `creaturesFish` */
    CreaturesFish = 'creaturesFish',
    /** Insects Art Border. Serialized value: `creaturesInsects` */
    CreaturesInsects = 'creaturesInsects',
    /** Ladybug Art Border. Serialized value: `creaturesLadyBug` */
    CreaturesLadyBug = 'creaturesLadyBug',
    /** Cross-stitch Art Border. Serialized value: `crossStitch` */
    CrossStitch = 'crossStitch',
    /** Cupid Art Border. Serialized value: `cup` */
    Cup = 'cup',
    /** Archway Art Border. Serialized value: `decoArch` */
    DecoArch = 'decoArch',
    /** Color Archway Art Border. Serialized value: `decoArchColor` */
    DecoArchColor = 'decoArchColor',
    /** Blocks Art Border. Serialized value: `decoBlocks` */
    DecoBlocks = 'decoBlocks',
    /** Gray Diamond Art Border. Serialized value: `diamondsGray` */
    DiamondsGray = 'diamondsGray',
    /** Double D Art Border. Serialized value: `doubleD` */
    DoubleD = 'doubleD',
    /** Diamond Art Border. Serialized value: `doubleDiamonds` */
    DoubleDiamonds = 'doubleDiamonds',
    /** Earth Art Border. Serialized value: `earth1` */
    Earth1 = 'earth1',
    /** Earth Art Border. Serialized value: `earth2` */
    Earth2 = 'earth2',
    /** Shadowed Square Art Border. Serialized value: `eclipsingSquares1` */
    EclipsingSquares1 = 'eclipsingSquares1',
    /** Shadowed Square Art Border. Serialized value: `eclipsingSquares2` */
    EclipsingSquares2 = 'eclipsingSquares2',
    /** Painted Egg Art Border. Serialized value: `eggsBlack` */
    EggsBlack = 'eggsBlack',
    /** Fans Art Border. Serialized value: `fans` */
    Fans = 'fans',
    /** Film Reel Art Border. Serialized value: `film` */
    Film = 'film',
    /** Firecracker Art Border. Serialized value: `firecrackers` */
    Firecrackers = 'firecrackers',
    /** Flowers Art Border. Serialized value: `flowersBlockPrint` */
    FlowersBlockPrint = 'flowersBlockPrint',
    /** Daisy Art Border. Serialized value: `flowersDaisies` */
    FlowersDaisies = 'flowersDaisies',
    /** Flowers Art Border. Serialized value: `flowersModern1` */
    FlowersModern1 = 'flowersModern1',
    /** Flowers Art Border. Serialized value: `flowersModern2` */
    FlowersModern2 = 'flowersModern2',
    /** Pansy Art Border. Serialized value: `flowersPansy` */
    FlowersPansy = 'flowersPansy',
    /** Red Rose Art Border. Serialized value: `flowersRedRose` */
    FlowersRedRose = 'flowersRedRose',
    /** Roses Art Border. Serialized value: `flowersRoses` */
    FlowersRoses = 'flowersRoses',
    /** Flowers in a Teacup Art Border. Serialized value: `flowersTeacup` */
    FlowersTeacup = 'flowersTeacup',
    /** Small Flower Art Border. Serialized value: `flowersTiny` */
    FlowersTiny = 'flowersTiny',
    /** Gems Art Border. Serialized value: `gems` */
    Gems = 'gems',
    /** Gingerbread Man Art Border. Serialized value: `gingerbreadMan` */
    GingerbreadMan = 'gingerbreadMan',
    /** Triangle Gradient Art Border. Serialized value: `gradient` */
    Gradient = 'gradient',
    /** Handmade Art Border. Serialized value: `handmade1` */
    Handmade1 = 'handmade1',
    /** Handmade Art Border. Serialized value: `handmade2` */
    Handmade2 = 'handmade2',
    /** Heart-Shaped Balloon Art Border. Serialized value: `heartBalloon` */
    HeartBalloon = 'heartBalloon',
    /** Gray Heart Art Border. Serialized value: `heartGray` */
    HeartGray = 'heartGray',
    /** Hearts Art Border. Serialized value: `hearts` */
    Hearts = 'hearts',
    /** Pattern Art Border. Serialized value: `heebieJeebies` */
    HeebieJeebies = 'heebieJeebies',
    /** Holly Art Border. Serialized value: `holly` */
    Holly = 'holly',
    /** House Art Border. Serialized value: `houseFunky` */
    HouseFunky = 'houseFunky',
    /** Circular Art Border. Serialized value: `hypnotic` */
    Hypnotic = 'hypnotic',
    /** Ice Cream Cone Art Border. Serialized value: `iceCreamCones` */
    IceCreamCones = 'iceCreamCones',
    /** Light Bulb Art Border. Serialized value: `lightBulb` */
    LightBulb = 'lightBulb',
    /** Lightning Art Border. Serialized value: `lightning1` */
    Lightning1 = 'lightning1',
    /** Lightning Art Border. Serialized value: `lightning2` */
    Lightning2 = 'lightning2',
    /** Map Pins Art Border. Serialized value: `mapPins` */
    MapPins = 'mapPins',
    /** Maple Leaf Art Border. Serialized value: `mapleLeaf` */
    MapleLeaf = 'mapleLeaf',
    /** Muffin Art Border. Serialized value: `mapleMuffins` */
    MapleMuffins = 'mapleMuffins',
    /** Marquee Art Border. Serialized value: `marquee` */
    Marquee = 'marquee',
    /** Marquee Art Border. Serialized value: `marqueeToothed` */
    MarqueeToothed = 'marqueeToothed',
    /** Moon Art Border. Serialized value: `moons` */
    Moons = 'moons',
    /** Mosaic Art Border. Serialized value: `mosaic` */
    Mosaic = 'mosaic',
    /** Musical Note Art Border. Serialized value: `musicNotes` */
    MusicNotes = 'musicNotes',
    /** Patterned Art Border. Serialized value: `northwest` */
    Northwest = 'northwest',
    /** Oval Art Border. Serialized value: `ovals` */
    Ovals = 'ovals',
    /** Package Art Border. Serialized value: `packages` */
    Packages = 'packages',
    /** Black Palm Tree Art Border. Serialized value: `palmsBlack` */
    PalmsBlack = 'palmsBlack',
    /** Color Palm Tree Art Border. Serialized value: `palmsColor` */
    PalmsColor = 'palmsColor',
    /** Paper Clip Art Border. Serialized value: `paperClips` */
    PaperClips = 'paperClips',
    /** Papyrus Art Border. Serialized value: `papyrus` */
    Papyrus = 'papyrus',
    /** Party Favor Art Border. Serialized value: `partyFavor` */
    PartyFavor = 'partyFavor',
    /** Party Glass Art Border. Serialized value: `partyGlass` */
    PartyGlass = 'partyGlass',
    /** Pencils Art Border. Serialized value: `pencils` */
    Pencils = 'pencils',
    /** Character Art Border. Serialized value: `people` */
    People = 'people',
    /** Waving Character Border. Serialized value: `peopleWaving` */
    PeopleWaving = 'peopleWaving',
    /** Character With Hat Art Border. Serialized value: `peopleHats` */
    PeopleHats = 'peopleHats',
    /** Poinsettia Art Border. Serialized value: `poinsettias` */
    Poinsettias = 'poinsettias',
    /** Postage Stamp Art Border. Serialized value: `postageStamp` */
    PostageStamp = 'postageStamp',
    /** Pumpkin Art Border. Serialized value: `pumpkin1` */
    Pumpkin1 = 'pumpkin1',
    /** Push Pin Art Border. Serialized value: `pushPinNote2` */
    PushPinNote2 = 'pushPinNote2',
    /** Push Pin Art Border. Serialized value: `pushPinNote1` */
    PushPinNote1 = 'pushPinNote1',
    /** Pyramid Art Border. Serialized value: `pyramids` */
    Pyramids = 'pyramids',
    /** Pyramid Art Border. Serialized value: `pyramidsAbove` */
    PyramidsAbove = 'pyramidsAbove',
    /** Quadrants Art Border. Serialized value: `quadrants` */
    Quadrants = 'quadrants',
    /** Rings Art Border. Serialized value: `rings` */
    Rings = 'rings',
    /** Safari Art Border. Serialized value: `safari` */
    Safari = 'safari',
    /** Saw tooth Art Border. Serialized value: `sawtooth` */
    Sawtooth = 'sawtooth',
    /** Gray Saw tooth Art Border. Serialized value: `sawtoothGray` */
    SawtoothGray = 'sawtoothGray',
    /** Scared Cat Art Border. Serialized value: `scaredCat` */
    ScaredCat = 'scaredCat',
    /** Umbrella Art Border. Serialized value: `seattle` */
    Seattle = 'seattle',
    /** Shadowed Squares Art Border. Serialized value: `shadowedSquares` */
    ShadowedSquares = 'shadowedSquares',
    /** Shark Tooth Art Border. Serialized value: `sharksTeeth` */
    SharksTeeth = 'sharksTeeth',
    /** Bird Tracks Art Border. Serialized value: `shorebirdTracks` */
    ShorebirdTracks = 'shorebirdTracks',
    /** Rocket Art Border. Serialized value: `skyrocket` */
    Skyrocket = 'skyrocket',
    /** Snowflake Art Border. Serialized value: `snowflakeFancy` */
    SnowflakeFancy = 'snowflakeFancy',
    /** Snowflake Art Border. Serialized value: `snowflakes` */
    Snowflakes = 'snowflakes',
    /** Sombrero Art Border. Serialized value: `sombrero` */
    Sombrero = 'sombrero',
    /** Southwest-themed Art Border. Serialized value: `southwest` */
    Southwest = 'southwest',
    /** Stars Art Border. Serialized value: `stars` */
    Stars = 'stars',
    /** Stars On Top Art Border. Serialized value: `starsTop` */
    StarsTop = 'starsTop',
    /** 3-D Stars Art Border. Serialized value: `stars3d` */
    Stars3d = 'stars3d',
    /** Stars Art Border. Serialized value: `starsBlack` */
    StarsBlack = 'starsBlack',
    /** Stars With Shadows Art Border. Serialized value: `starsShadowed` */
    StarsShadowed = 'starsShadowed',
    /** Sun Art Border. Serialized value: `sun` */
    Sun = 'sun',
    /** Whirligig Art Border. Serialized value: `swirligig` */
    Swirligig = 'swirligig',
    /** Torn Paper Art Border. Serialized value: `tornPaper` */
    TornPaper = 'tornPaper',
    /** Black Torn Paper Art Border. Serialized value: `tornPaperBlack` */
    TornPaperBlack = 'tornPaperBlack',
    /** Tree Art Border. Serialized value: `trees` */
    Trees = 'trees',
    /** Triangle Art Border. Serialized value: `triangleParty` */
    TriangleParty = 'triangleParty',
    /** Triangles Art Border. Serialized value: `triangles` */
    Triangles = 'triangles',
    /** Tribal Art Border One. Serialized value: `tribal1` */
    Tribal1 = 'tribal1',
    /** Tribal Art Border Two. Serialized value: `tribal2` */
    Tribal2 = 'tribal2',
    /** Tribal Art Border Three. Serialized value: `tribal3` */
    Tribal3 = 'tribal3',
    /** Tribal Art Border Four. Serialized value: `tribal4` */
    Tribal4 = 'tribal4',
    /** Tribal Art Border Five. Serialized value: `tribal5` */
    Tribal5 = 'tribal5',
    /** Tribal Art Border Six. Serialized value: `tribal6` */
    Tribal6 = 'tribal6',
    /** undefined. Serialized value: `triangle1` */
    Triangle1 = 'triangle1',
    /** undefined. Serialized value: `triangle2` */
    Triangle2 = 'triangle2',
    /** undefined. Serialized value: `triangleCircle1` */
    TriangleCircle1 = 'triangleCircle1',
    /** undefined. Serialized value: `triangleCircle2` */
    TriangleCircle2 = 'triangleCircle2',
    /** undefined. Serialized value: `shapes1` */
    Shapes1 = 'shapes1',
    /** undefined. Serialized value: `shapes2` */
    Shapes2 = 'shapes2',
    /** Twisted Lines Art Border. Serialized value: `twistedLines1` */
    TwistedLines1 = 'twistedLines1',
    /** Twisted Lines Art Border. Serialized value: `twistedLines2` */
    TwistedLines2 = 'twistedLines2',
    /** Vine Art Border. Serialized value: `vine` */
    Vine = 'vine',
    /** Wavy Line Art Border. Serialized value: `waveline` */
    Waveline = 'waveline',
    /** Weaving Angles Art Border. Serialized value: `weavingAngles` */
    WeavingAngles = 'weavingAngles',
    /** Weaving Braid Art Border. Serialized value: `weavingBraid` */
    WeavingBraid = 'weavingBraid',
    /** Weaving Ribbon Art Border. Serialized value: `weavingRibbon` */
    WeavingRibbon = 'weavingRibbon',
    /** Weaving Strips Art Border. Serialized value: `weavingStrips` */
    WeavingStrips = 'weavingStrips',
    /** White Flowers Art Border. Serialized value: `whiteFlowers` */
    WhiteFlowers = 'whiteFlowers',
    /** Woodwork Art Border. Serialized value: `woodwork` */
    Woodwork = 'woodwork',
    /** Crisscross Art Border. Serialized value: `xIllusions` */
    XIllusions = 'xIllusions',
    /** Triangle Art Border. Serialized value: `zanyTriangles` */
    ZanyTriangles = 'zanyTriangles',
    /** Zigzag Art Border. Serialized value: `zigZag` */
    ZigZag = 'zigZag',
    /** Zigzag stitch. Serialized value: `zigZagStitch` */
    ZigZagStitch = 'zigZagStitch',
}

export const BorderValuesArray = [
    BorderValues.Nil,
    BorderValues.None,
    BorderValues.Single,
    BorderValues.Thick,
    BorderValues.Double,
    BorderValues.Dotted,
    BorderValues.Dashed,
    BorderValues.DotDash,
    BorderValues.DotDotDash,
    BorderValues.Triple,
    BorderValues.ThinThickSmallGap,
    BorderValues.ThickThinSmallGap,
    BorderValues.ThinThickThinSmallGap,
    BorderValues.ThinThickMediumGap,
    BorderValues.ThickThinMediumGap,
    BorderValues.ThinThickThinMediumGap,
    BorderValues.ThinThickLargeGap,
    BorderValues.ThickThinLargeGap,
    BorderValues.ThinThickThinLargeGap,
    BorderValues.Wave,
    BorderValues.DoubleWave,
    BorderValues.DashSmallGap,
    BorderValues.DashDotStroked,
    BorderValues.ThreeDEmboss,
    BorderValues.ThreeDEngrave,
    BorderValues.Outset,
    BorderValues.Inset,
    BorderValues.Apples,
    BorderValues.ArchedScallops,
    BorderValues.BabyPacifier,
    BorderValues.BabyRattle,
    BorderValues.Balloons3Colors,
    BorderValues.BalloonsHotAir,
    BorderValues.BasicBlackDashes,
    BorderValues.BasicBlackDots,
    BorderValues.BasicBlackSquares,
    BorderValues.BasicThinLines,
    BorderValues.BasicWhiteDashes,
    BorderValues.BasicWhiteDots,
    BorderValues.BasicWhiteSquares,
    BorderValues.BasicWideInline,
    BorderValues.BasicWideMidline,
    BorderValues.BasicWideOutline,
    BorderValues.Bats,
    BorderValues.Birds,
    BorderValues.BirdsFlight,
    BorderValues.Cabins,
    BorderValues.CakeSlice,
    BorderValues.CandyCorn,
    BorderValues.CelticKnotwork,
    BorderValues.CertificateBanner,
    BorderValues.ChainLink,
    BorderValues.ChampagneBottle,
    BorderValues.CheckedBarBlack,
    BorderValues.CheckedBarColor,
    BorderValues.Checkered,
    BorderValues.ChristmasTree,
    BorderValues.CirclesLines,
    BorderValues.CirclesRectangles,
    BorderValues.ClassicalWave,
    BorderValues.Clocks,
    BorderValues.Compass,
    BorderValues.Confetti,
    BorderValues.ConfettiGrays,
    BorderValues.ConfettiOutline,
    BorderValues.ConfettiStreamers,
    BorderValues.ConfettiWhite,
    BorderValues.CornerTriangles,
    BorderValues.CouponCutoutDashes,
    BorderValues.CouponCutoutDots,
    BorderValues.CrazyMaze,
    BorderValues.CreaturesButterfly,
    BorderValues.CreaturesFish,
    BorderValues.CreaturesInsects,
    BorderValues.CreaturesLadyBug,
    BorderValues.CrossStitch,
    BorderValues.Cup,
    BorderValues.DecoArch,
    BorderValues.DecoArchColor,
    BorderValues.DecoBlocks,
    BorderValues.DiamondsGray,
    BorderValues.DoubleD,
    BorderValues.DoubleDiamonds,
    BorderValues.Earth1,
    BorderValues.Earth2,
    BorderValues.EclipsingSquares1,
    BorderValues.EclipsingSquares2,
    BorderValues.EggsBlack,
    BorderValues.Fans,
    BorderValues.Film,
    BorderValues.Firecrackers,
    BorderValues.FlowersBlockPrint,
    BorderValues.FlowersDaisies,
    BorderValues.FlowersModern1,
    BorderValues.FlowersModern2,
    BorderValues.FlowersPansy,
    BorderValues.FlowersRedRose,
    BorderValues.FlowersRoses,
    BorderValues.FlowersTeacup,
    BorderValues.FlowersTiny,
    BorderValues.Gems,
    BorderValues.GingerbreadMan,
    BorderValues.Gradient,
    BorderValues.Handmade1,
    BorderValues.Handmade2,
    BorderValues.HeartBalloon,
    BorderValues.HeartGray,
    BorderValues.Hearts,
    BorderValues.HeebieJeebies,
    BorderValues.Holly,
    BorderValues.HouseFunky,
    BorderValues.Hypnotic,
    BorderValues.IceCreamCones,
    BorderValues.LightBulb,
    BorderValues.Lightning1,
    BorderValues.Lightning2,
    BorderValues.MapPins,
    BorderValues.MapleLeaf,
    BorderValues.MapleMuffins,
    BorderValues.Marquee,
    BorderValues.MarqueeToothed,
    BorderValues.Moons,
    BorderValues.Mosaic,
    BorderValues.MusicNotes,
    BorderValues.Northwest,
    BorderValues.Ovals,
    BorderValues.Packages,
    BorderValues.PalmsBlack,
    BorderValues.PalmsColor,
    BorderValues.PaperClips,
    BorderValues.Papyrus,
    BorderValues.PartyFavor,
    BorderValues.PartyGlass,
    BorderValues.Pencils,
    BorderValues.People,
    BorderValues.PeopleWaving,
    BorderValues.PeopleHats,
    BorderValues.Poinsettias,
    BorderValues.PostageStamp,
    BorderValues.Pumpkin1,
    BorderValues.PushPinNote2,
    BorderValues.PushPinNote1,
    BorderValues.Pyramids,
    BorderValues.PyramidsAbove,
    BorderValues.Quadrants,
    BorderValues.Rings,
    BorderValues.Safari,
    BorderValues.Sawtooth,
    BorderValues.SawtoothGray,
    BorderValues.ScaredCat,
    BorderValues.Seattle,
    BorderValues.ShadowedSquares,
    BorderValues.SharksTeeth,
    BorderValues.ShorebirdTracks,
    BorderValues.Skyrocket,
    BorderValues.SnowflakeFancy,
    BorderValues.Snowflakes,
    BorderValues.Sombrero,
    BorderValues.Southwest,
    BorderValues.Stars,
    BorderValues.StarsTop,
    BorderValues.Stars3d,
    BorderValues.StarsBlack,
    BorderValues.StarsShadowed,
    BorderValues.Sun,
    BorderValues.Swirligig,
    BorderValues.TornPaper,
    BorderValues.TornPaperBlack,
    BorderValues.Trees,
    BorderValues.TriangleParty,
    BorderValues.Triangles,
    BorderValues.Tribal1,
    BorderValues.Tribal2,
    BorderValues.Tribal3,
    BorderValues.Tribal4,
    BorderValues.Tribal5,
    BorderValues.Tribal6,
    BorderValues.Triangle1,
    BorderValues.Triangle2,
    BorderValues.TriangleCircle1,
    BorderValues.TriangleCircle2,
    BorderValues.Shapes1,
    BorderValues.Shapes2,
    BorderValues.TwistedLines1,
    BorderValues.TwistedLines2,
    BorderValues.Vine,
    BorderValues.Waveline,
    BorderValues.WeavingAngles,
    BorderValues.WeavingBraid,
    BorderValues.WeavingRibbon,
    BorderValues.WeavingStrips,
    BorderValues.WhiteFlowers,
    BorderValues.Woodwork,
    BorderValues.XIllusions,
    BorderValues.ZanyTriangles,
    BorderValues.ZigZag,
    BorderValues.ZigZagStitch,
] as const;

export enum DocumentConformance {
    /** undefined. Serialized value: `transitional` */
    transitional = 'transitional',
    /** undefined. Serialized value: `strict` */
    strict = 'strict',
}

export const DocumentConformanceArray = [
    DocumentConformance.transitional,
    DocumentConformance.strict,
] as const;

export enum StrictCharacterSet {
    /** undefined. Serialized value: `iso-8859-1` */
    chsAnsi = 'iso-8859-1',
    /** undefined. Serialized value: `macintosh` */
    chsMacFfn = 'macintosh',
    /** undefined. Serialized value: `shift_jis` */
    chsShiftJIS = 'shift_jis',
    /** undefined. Serialized value: `ks_c-5601-1987` */
    chsHangeul = 'ks_c-5601-1987',
    /** undefined. Serialized value: `KS_C-5601-1992` */
    chsJohab = 'KS_C-5601-1992',
    /** undefined. Serialized value: `GBK` */
    chsGB2312 = 'GBK',
    /** undefined. Serialized value: `Big5` */
    chsChinese5 = 'Big5',
    /** undefined. Serialized value: `windows-1253` */
    chsGreek = 'windows-1253',
    /** undefined. Serialized value: `iso-8859-9` */
    chsTurkish = 'iso-8859-9',
    /** undefined. Serialized value: `windows-1258` */
    chsVietnamese = 'windows-1258',
    /** undefined. Serialized value: `windows-1255` */
    chsHebrew = 'windows-1255',
    /** undefined. Serialized value: `windows-1256` */
    chsArabic = 'windows-1256',
    /** undefined. Serialized value: `windows-1257` */
    chsBaltic = 'windows-1257',
    /** undefined. Serialized value: `windows-1251` */
    chsRussian = 'windows-1251',
    /** undefined. Serialized value: `windows-874` */
    chsThai = 'windows-874',
    /** undefined. Serialized value: `windows-1250` */
    chsEastEurope = 'windows-1250',
}

export const StrictCharacterSetArray = [
    StrictCharacterSet.chsAnsi,
    StrictCharacterSet.chsMacFfn,
    StrictCharacterSet.chsShiftJIS,
    StrictCharacterSet.chsHangeul,
    StrictCharacterSet.chsJohab,
    StrictCharacterSet.chsGB2312,
    StrictCharacterSet.chsChinese5,
    StrictCharacterSet.chsGreek,
    StrictCharacterSet.chsTurkish,
    StrictCharacterSet.chsVietnamese,
    StrictCharacterSet.chsHebrew,
    StrictCharacterSet.chsArabic,
    StrictCharacterSet.chsBaltic,
    StrictCharacterSet.chsRussian,
    StrictCharacterSet.chsThai,
    StrictCharacterSet.chsEastEurope,
] as const;

export enum ObjectDrawAspect {
    /** undefined. Serialized value: `content` */
    content = 'content',
    /** undefined. Serialized value: `icon` */
    icon = 'icon',
}

export const ObjectDrawAspectArray = [
    ObjectDrawAspect.content,
    ObjectDrawAspect.icon,
] as const;

export enum ObjectUpdateMode {
    /** undefined. Serialized value: `always` */
    always = 'always',
    /** undefined. Serialized value: `onCall` */
    onCall = 'onCall',
}

export const ObjectUpdateModeArray = [
    ObjectUpdateMode.always,
    ObjectUpdateMode.onCall,
] as const;

export enum CompatSettingNameValues {
    /** undefined. Serialized value: `compatibilityMode` */
    CompatibilityMode = 'compatibilityMode',
    /** undefined. Serialized value: `overrideTableStyleFontSizeAndJustification` */
    OverrideTableStyleFontSizeAndJustification = 'overrideTableStyleFontSizeAndJustification',
    /** undefined. Serialized value: `enableOpenTypeFeatures` */
    EnableOpenTypeFeatures = 'enableOpenTypeFeatures',
    /** undefined. Serialized value: `doNotFlipMirrorIndents` */
    DoNotFlipMirrorIndents = 'doNotFlipMirrorIndents',
    /** undefined. Serialized value: `differentiateMultirowTableHeaders` */
    DifferentiateMultirowTableHeaders = 'differentiateMultirowTableHeaders',
    /** undefined. Serialized value: `useWord2013TrackBottomHyphenation` */
    UseWord2013TrackBottomHyphenation = 'useWord2013TrackBottomHyphenation',
    /** undefined. Serialized value: `allowHyphenationAtTrackBottom` */
    AllowHyphenationAtTrackBottom = 'allowHyphenationAtTrackBottom',
    /** undefined. Serialized value: `allowTextAfterFloatingTableBreak` */
    AllowTextAfterFloatingTableBreak = 'allowTextAfterFloatingTableBreak',
}

export const CompatSettingNameValuesArray = [
    CompatSettingNameValues.CompatibilityMode,
    CompatSettingNameValues.OverrideTableStyleFontSizeAndJustification,
    CompatSettingNameValues.EnableOpenTypeFeatures,
    CompatSettingNameValues.DoNotFlipMirrorIndents,
    CompatSettingNameValues.DifferentiateMultirowTableHeaders,
    CompatSettingNameValues.UseWord2013TrackBottomHyphenation,
    CompatSettingNameValues.AllowHyphenationAtTrackBottom,
    CompatSettingNameValues.AllowTextAfterFloatingTableBreak,
] as const;

/** Defines the LevelOverride Class. Serialized as `w:lvlOverride` */
export class LevelOverride extends OxmlCompositeElement<StartOverrideNumberingValue | Level> {

    public static override _Q = 'w:lvlOverride';
    public static override _A = ['w:ilvl',];
    /** Numbering Level ID. Serialized as `w:ilvl` */
    public get levelIndex(): Int32Value | undefined { return this._g('w:ilvl'); }
    public set levelIndex(v: Int32Value | undefined) { this._s('w:ilvl', v); }
    /** Numbering Level Starting Value Override. */
    public get startOverrideNumberingValue(): StartOverrideNumberingValue | undefined { return this._f(StartOverrideNumberingValue); }
    /** Numbering Level Override Definition. */
    public get level(): Level | undefined { return this._f(Level); }

}
/** Defines the FontRelationshipType Class. */
export abstract class FontRelationshipType extends OxmlLeafElement {

    public static override _A = ['w:fontKey','w:subsetted','r:id',];
    /** fontKey. Serialized as `w:fontKey` */
    public get fontKey(): StringValue | undefined { return this._g('w:fontKey'); }
    public set fontKey(v: StringValue | undefined) { this._s('w:fontKey', v); }
    /** subsetted. Serialized as `w:subsetted` */
    public get subsetted(): OnOffValue | undefined { return this._g('w:subsetted'); }
    public set subsetted(v: OnOffValue | undefined) { this._s('w:subsetted', v); }
    /** Relationship to Part. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the EmbedBoldItalicFont Class. Serialized as `w:embedBoldItalic` */
export class EmbedBoldItalicFont extends FontRelationshipType {

    public static override _Q = 'w:embedBoldItalic';

}
/** Defines the EmbedItalicFont Class. Serialized as `w:embedItalic` */
export class EmbedItalicFont extends FontRelationshipType {

    public static override _Q = 'w:embedItalic';

}
/** Defines the EmbedBoldFont Class. Serialized as `w:embedBold` */
export class EmbedBoldFont extends FontRelationshipType {

    public static override _Q = 'w:embedBold';

}
/** Defines the EmbedRegularFont Class. Serialized as `w:embedRegular` */
export class EmbedRegularFont extends FontRelationshipType {

    public static override _Q = 'w:embedRegular';

}
/** Defines the FontSignature Class. Serialized as `w:sig` */
export class FontSignature extends OxmlLeafElement {

    public static override _Q = 'w:sig';
    public static override _A = ['w:usb0','w:usb1','w:usb2','w:usb3','w:csb0','w:csb1',];
    /** First 32 Bits of Unicode Subset Bitfield. Serialized as `w:usb0` */
    public get unicodeSignature0(): HexBinaryValue | undefined { return this._g('w:usb0'); }
    public set unicodeSignature0(v: HexBinaryValue | undefined) { this._s('w:usb0', v); }
    /** Second 32 Bits of Unicode Subset Bitfield. Serialized as `w:usb1` */
    public get unicodeSignature1(): HexBinaryValue | undefined { return this._g('w:usb1'); }
    public set unicodeSignature1(v: HexBinaryValue | undefined) { this._s('w:usb1', v); }
    /** Third 32 Bits of Unicode Subset Bitfield. Serialized as `w:usb2` */
    public get unicodeSignature2(): HexBinaryValue | undefined { return this._g('w:usb2'); }
    public set unicodeSignature2(v: HexBinaryValue | undefined) { this._s('w:usb2', v); }
    /** Fourth 32 Bits of Unicode Subset Bitfield. Serialized as `w:usb3` */
    public get unicodeSignature3(): HexBinaryValue | undefined { return this._g('w:usb3'); }
    public set unicodeSignature3(v: HexBinaryValue | undefined) { this._s('w:usb3', v); }
    /** Lower 32 Bits of Code Page Bit Field. Serialized as `w:csb0` */
    public get codePageSignature0(): HexBinaryValue | undefined { return this._g('w:csb0'); }
    public set codePageSignature0(v: HexBinaryValue | undefined) { this._s('w:csb0', v); }
    /** Upper 32 Bits of Code Page Bit Field. Serialized as `w:csb1` */
    public get codePageSignature1(): HexBinaryValue | undefined { return this._g('w:csb1'); }
    public set codePageSignature1(v: HexBinaryValue | undefined) { this._s('w:csb1', v); }

}
/** Defines the Pitch Class. Serialized as `w:pitch` */
export class Pitch extends OxmlLeafElement {

    public static override _Q = 'w:pitch';
    public static override _A = ['w:val',];
    /** Value. Serialized as `w:val` */
    public get val(): FontPitchValues | undefined { return this._g('w:val'); }
    public set val(v: FontPitchValues | undefined) { this._s('w:val', v); }

}
/** Defines the FontFamily Class. Serialized as `w:family` */
export class FontFamily extends OxmlLeafElement {

    public static override _Q = 'w:family';
    public static override _A = ['w:val',];
    /** Font Family Value. Serialized as `w:val` */
    public get val(): FontFamilyValues | undefined { return this._g('w:val'); }
    public set val(v: FontFamilyValues | undefined) { this._s('w:val', v); }

}
/** Defines the FontCharSet Class. Serialized as `w:charset` */
export class FontCharSet extends OxmlLeafElement {

    public static override _Q = 'w:charset';
    public static override _A = ['w:val','w:characterSet',];
    /** val. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }
    /** characterSet. Serialized as `w:characterSet` */
    public get strictCharacterSet(): StrictCharacterSet | undefined { return this._g('w:characterSet'); }
    public set strictCharacterSet(v: StrictCharacterSet | undefined) { this._s('w:characterSet', v); }

}
/** Defines the Panose1Number Class. Serialized as `w:panose1` */
export class Panose1Number extends OxmlLeafElement {

    public static override _Q = 'w:panose1';
    public static override _A = ['w:val',];
    /** Value. Serialized as `w:val` */
    public get val(): HexBinaryValue | undefined { return this._g('w:val'); }
    public set val(v: HexBinaryValue | undefined) { this._s('w:val', v); }

}
/** Defines the PictureBulletBase Class. Serialized as `w:pict` */
export class PictureBulletBase extends OxmlCompositeElement<VGroup | VImageFile | VLine | VOval | VPolyLine | VRectangle | VRoundRectangle | VShape | VShapetype> {

    public static override _Q = 'w:pict';

}
/** Defines the TargetScreenSize Class. Serialized as `w:targetScreenSz` */
export class TargetScreenSize extends OxmlLeafElement {

    public static override _Q = 'w:targetScreenSz';
    public static override _A = ['w:val',];
    /** Target Screen Size Value. Serialized as `w:val` */
    public get val(): TargetScreenSizeValues | undefined { return this._g('w:val'); }
    public set val(v: TargetScreenSizeValues | undefined) { this._s('w:val', v); }

}
/** Freeze Document Layout. Serialized as `w:readModeInkLockDown` */
export class ReadModeInkLockDown extends OxmlLeafElement {

    public static override _Q = 'w:readModeInkLockDown';
    public static override _A = ['w:actualPg','w:w','w:h','w:fontSz',];
    /** Use Actual Pages, Not Virtual Pages. Serialized as `w:actualPg` */
    public get useActualPages(): OnOffValue | undefined { return this._g('w:actualPg'); }
    public set useActualPages(v: OnOffValue | undefined) { this._s('w:actualPg', v); }
    /** Virtual Page Width. Serialized as `w:w` */
    public get width(): UInt32Value | undefined { return this._g('w:w'); }
    public set width(v: UInt32Value | undefined) { this._s('w:w', v); }
    /** Virtual Page Height. Serialized as `w:h` */
    public get height(): UInt32Value | undefined { return this._g('w:h'); }
    public set height(v: UInt32Value | undefined) { this._s('w:h', v); }
    /** Font Size Scaling. Serialized as `w:fontSz` */
    public get fontSize(): StringValue | undefined { return this._g('w:fontSz'); }
    public set fontSize(v: StringValue | undefined) { this._s('w:fontSz', v); }

}
/** Caption Settings. Serialized as `w:captions` */
export class Captions extends OxmlCompositeElement<Caption | AutoCaptions> {

    public static override _Q = 'w:captions';

}
/** Theme Color Mappings. Serialized as `w:clrSchemeMapping` */
export class ColorSchemeMapping extends OxmlLeafElement {

    public static override _Q = 'w:clrSchemeMapping';
    public static override _A = ['w:bg1','w:t1','w:bg2','w:t2','w:accent1','w:accent2','w:accent3','w:accent4','w:accent5','w:accent6','w:hyperlink','w:followedHyperlink',];
    /** Background 1 Theme Color Mapping. Serialized as `w:bg1` */
    public get background1(): ColorSchemeIndexValues | undefined { return this._g('w:bg1'); }
    public set background1(v: ColorSchemeIndexValues | undefined) { this._s('w:bg1', v); }
    /** Text 1 Theme Color Mapping. Serialized as `w:t1` */
    public get text1(): ColorSchemeIndexValues | undefined { return this._g('w:t1'); }
    public set text1(v: ColorSchemeIndexValues | undefined) { this._s('w:t1', v); }
    /** Background 2 Theme Color Mapping. Serialized as `w:bg2` */
    public get background2(): ColorSchemeIndexValues | undefined { return this._g('w:bg2'); }
    public set background2(v: ColorSchemeIndexValues | undefined) { this._s('w:bg2', v); }
    /** Text 2 Theme Color Mapping. Serialized as `w:t2` */
    public get text2(): ColorSchemeIndexValues | undefined { return this._g('w:t2'); }
    public set text2(v: ColorSchemeIndexValues | undefined) { this._s('w:t2', v); }
    /** Accent 1 Theme Color Mapping. Serialized as `w:accent1` */
    public get accent1(): ColorSchemeIndexValues | undefined { return this._g('w:accent1'); }
    public set accent1(v: ColorSchemeIndexValues | undefined) { this._s('w:accent1', v); }
    /** Accent 2 Theme Color Mapping. Serialized as `w:accent2` */
    public get accent2(): ColorSchemeIndexValues | undefined { return this._g('w:accent2'); }
    public set accent2(v: ColorSchemeIndexValues | undefined) { this._s('w:accent2', v); }
    /** Accent3 Theme Color Mapping. Serialized as `w:accent3` */
    public get accent3(): ColorSchemeIndexValues | undefined { return this._g('w:accent3'); }
    public set accent3(v: ColorSchemeIndexValues | undefined) { this._s('w:accent3', v); }
    /** Accent4 Theme Color Mapping. Serialized as `w:accent4` */
    public get accent4(): ColorSchemeIndexValues | undefined { return this._g('w:accent4'); }
    public set accent4(v: ColorSchemeIndexValues | undefined) { this._s('w:accent4', v); }
    /** Accent5 Theme Color Mapping. Serialized as `w:accent5` */
    public get accent5(): ColorSchemeIndexValues | undefined { return this._g('w:accent5'); }
    public set accent5(v: ColorSchemeIndexValues | undefined) { this._s('w:accent5', v); }
    /** Accent6 Theme Color Mapping. Serialized as `w:accent6` */
    public get accent6(): ColorSchemeIndexValues | undefined { return this._g('w:accent6'); }
    public set accent6(v: ColorSchemeIndexValues | undefined) { this._s('w:accent6', v); }
    /** Hyperlink Theme Color Mapping. Serialized as `w:hyperlink` */
    public get hyperlink(): ColorSchemeIndexValues | undefined { return this._g('w:hyperlink'); }
    public set hyperlink(v: ColorSchemeIndexValues | undefined) { this._s('w:hyperlink', v); }
    /** Followed Hyperlink Theme Color Mapping. Serialized as `w:followedHyperlink` */
    public get followedHyperlink(): ColorSchemeIndexValues | undefined { return this._g('w:followedHyperlink'); }
    public set followedHyperlink(v: ColorSchemeIndexValues | undefined) { this._s('w:followedHyperlink', v); }

}
/** Listing of All Revision Save ID Values. Serialized as `w:rsids` */
export class Rsids extends OxmlCompositeElement<RsidRoot | Rsid> {

    public static override _Q = 'w:rsids';
    /** Original Document Revision Save ID. */
    public get rsidRoot(): RsidRoot | undefined { return this._f(RsidRoot); }

}
/** Document Variables. Serialized as `w:docVars` */
export class DocumentVariables extends OxmlCompositeElement<DocumentVariable> {

    public static override _Q = 'w:docVars';

}
/** Compatibility Settings. Serialized as `w:compat` */
export class Compatibility extends OxmlCompositeElement<UseSingleBorderForContiguousCells | WordPerfectJustification | NoTabHangIndent | NoLeading | SpaceForUnderline | NoColumnBalance | BalanceSingleByteDoubleByteWidth | NoExtraLineSpacing | DoNotLeaveBackslashAlone | UnderlineTrailingSpaces | DoNotExpandShiftReturn | SpacingInWholePoints | LineWrapLikeWord6 | PrintBodyTextBeforeHeader | PrintColorBlackWhite | WordPerfectSpaceWidth | ShowBreaksInFrames | SubFontBySize | SuppressBottomSpacing | SuppressTopSpacing | SuppressSpacingAtTopOfPage | SuppressTopSpacingWordPerfect | SuppressSpacingBeforeAfterPageBreak | SwapBordersFacingPages | ConvertMailMergeEscape | TruncateFontHeightsLikeWordPerfect | MacWordSmallCaps | UsePrinterMetrics | DoNotSuppressParagraphBorders | WrapTrailSpaces | FootnoteLayoutLikeWord8 | ShapeLayoutLikeWord8 | AlignTablesRowByRow | ForgetLastTabAlignment | AdjustLineHeightInTable | AutoSpaceLikeWord95 | NoSpaceRaiseLower | DoNotUseHTMLParagraphAutoSpacing | LayoutRawTableWidth | LayoutTableRowsApart | UseWord97LineBreakRules | DoNotBreakWrappedTables | DoNotSnapToGridInCell | SelectFieldWithFirstOrLastChar | ApplyBreakingRules | DoNotWrapTextWithPunctuation | DoNotUseEastAsianBreakRules | UseWord2002TableStyleRules | GrowAutofit | UseFarEastLayout | UseNormalStyleForList | DoNotUseIndentAsNumberingTabStop | UseAltKinsokuLineBreakRules | AllowSpaceOfSameStyleInTable | DoNotSuppressIndentation | DoNotAutofitConstrainedTables | AutofitToFirstFixedWidthCell | UnderlineTabInNumberingList | DisplayHangulFixedWidth | SplitPageBreakAndParagraphMark | DoNotVerticallyAlignCellWithShape | DoNotBreakConstrainedForcedTable | DoNotVerticallyAlignInTextBox | UseAnsiKerningPairs | CachedColumnBalance | CompatibilitySetting> {

    public static override _Q = 'w:compat';
    /** Use Simplified Rules For Table Border Conflicts. */
    public get useSingleBorderForContiguousCells(): UseSingleBorderForContiguousCells | undefined { return this._f(UseSingleBorderForContiguousCells); }
    /** Emulate WordPerfect 6.x Paragraph Justification. */
    public get wordPerfectJustification(): WordPerfectJustification | undefined { return this._f(WordPerfectJustification); }
    /** Do Not Create Custom Tab Stop for Hanging Indent. */
    public get noTabHangIndent(): NoTabHangIndent | undefined { return this._f(NoTabHangIndent); }
    /** Do Not Add Leading Between Lines of Text. */
    public get noLeading(): NoLeading | undefined { return this._f(NoLeading); }
    /** Add Additional Space Below Baseline For Underlined East Asian Text. */
    public get spaceForUnderline(): SpaceForUnderline | undefined { return this._f(SpaceForUnderline); }
    /** Do Not Balance Text Columns within a Section. */
    public get noColumnBalance(): NoColumnBalance | undefined { return this._f(NoColumnBalance); }
    /** Balance Single Byte and Double Byte Characters. */
    public get balanceSingleByteDoubleByteWidth(): BalanceSingleByteDoubleByteWidth | undefined { return this._f(BalanceSingleByteDoubleByteWidth); }
    /** Do Not Center Content on Lines With Exact Line Height. */
    public get noExtraLineSpacing(): NoExtraLineSpacing | undefined { return this._f(NoExtraLineSpacing); }
    /** Convert Backslash To Yen Sign When Entered. */
    public get doNotLeaveBackslashAlone(): DoNotLeaveBackslashAlone | undefined { return this._f(DoNotLeaveBackslashAlone); }
    /** Underline All Trailing Spaces. */
    public get underlineTrailingSpaces(): UnderlineTrailingSpaces | undefined { return this._f(UnderlineTrailingSpaces); }
    /** Don't Justify Lines Ending in Soft Line Break. */
    public get doNotExpandShiftReturn(): DoNotExpandShiftReturn | undefined { return this._f(DoNotExpandShiftReturn); }
    /** Only Expand/Condense Text By Whole Points. */
    public get spacingInWholePoints(): SpacingInWholePoints | undefined { return this._f(SpacingInWholePoints); }
    /** Emulate Word 6.0 Line Wrapping for East Asian Text. */
    public get lineWrapLikeWord6(): LineWrapLikeWord6 | undefined { return this._f(LineWrapLikeWord6); }
    /** Print Body Text before Header/Footer Contents. */
    public get printBodyTextBeforeHeader(): PrintBodyTextBeforeHeader | undefined { return this._f(PrintBodyTextBeforeHeader); }
    /** Print Colors as Black And White without Dithering. */
    public get printColorBlackWhite(): PrintColorBlackWhite | undefined { return this._f(PrintColorBlackWhite); }
    /** Space width. */
    public get wordPerfectSpaceWidth(): WordPerfectSpaceWidth | undefined { return this._f(WordPerfectSpaceWidth); }
    /** Display Page/Column Breaks Present in Frames. */
    public get showBreaksInFrames(): ShowBreaksInFrames | undefined { return this._f(ShowBreaksInFrames); }
    /** Increase Priority Of Font Size During Font Substitution. */
    public get subFontBySize(): SubFontBySize | undefined { return this._f(SubFontBySize); }
    /** Ignore Exact Line Height for Last Line on Page. */
    public get suppressBottomSpacing(): SuppressBottomSpacing | undefined { return this._f(SuppressBottomSpacing); }
    /** Ignore Minimum and Exact Line Height for First Line on Page. */
    public get suppressTopSpacing(): SuppressTopSpacing | undefined { return this._f(SuppressTopSpacing); }
    /** Ignore Minimum Line Height for First Line on Page. */
    public get suppressSpacingAtTopOfPage(): SuppressSpacingAtTopOfPage | undefined { return this._f(SuppressSpacingAtTopOfPage); }
    /** Emulate WordPerfect 5.x Line Spacing. */
    public get suppressTopSpacingWordPerfect(): SuppressTopSpacingWordPerfect | undefined { return this._f(SuppressTopSpacingWordPerfect); }
    /** Do Not Use Space Before On First Line After a Page Break. */
    public get suppressSpacingBeforeAfterPageBreak(): SuppressSpacingBeforeAfterPageBreak | undefined { return this._f(SuppressSpacingBeforeAfterPageBreak); }
    /** Swap Paragraph Borders on Odd Numbered Pages. */
    public get swapBordersFacingPages(): SwapBordersFacingPages | undefined { return this._f(SwapBordersFacingPages); }
    /** Treat Backslash Quotation Delimiter as Two Quotation Marks. */
    public get convertMailMergeEscape(): ConvertMailMergeEscape | undefined { return this._f(ConvertMailMergeEscape); }
    /** Emulate WordPerfect 6.x Font Height Calculation. */
    public get truncateFontHeightsLikeWordPerfect(): TruncateFontHeightsLikeWordPerfect | undefined { return this._f(TruncateFontHeightsLikeWordPerfect); }
    /** Emulate Word 5.x for the Macintosh Small Caps Formatting. */
    public get macWordSmallCaps(): MacWordSmallCaps | undefined { return this._f(MacWordSmallCaps); }
    /** Use Printer Metrics To Display Documents. */
    public get usePrinterMetrics(): UsePrinterMetrics | undefined { return this._f(UsePrinterMetrics); }
    /** Do Not Suppress Paragraph Borders Next To Frames. */
    public get doNotSuppressParagraphBorders(): DoNotSuppressParagraphBorders | undefined { return this._f(DoNotSuppressParagraphBorders); }
    /** Line Wrap Trailing Spaces. */
    public get wrapTrailSpaces(): WrapTrailSpaces | undefined { return this._f(WrapTrailSpaces); }
    /** Emulate Word 6.x/95/97 Footnote Placement. */
    public get footnoteLayoutLikeWord8(): FootnoteLayoutLikeWord8 | undefined { return this._f(FootnoteLayoutLikeWord8); }
    /** Emulate Word 97 Text Wrapping Around Floating Objects. */
    public get shapeLayoutLikeWord8(): ShapeLayoutLikeWord8 | undefined { return this._f(ShapeLayoutLikeWord8); }
    /** Align Table Rows Independently. */
    public get alignTablesRowByRow(): AlignTablesRowByRow | undefined { return this._f(AlignTablesRowByRow); }
    /** Ignore Width of Last Tab Stop When Aligning Paragraph If It Is Not Left Aligned. */
    public get forgetLastTabAlignment(): ForgetLastTabAlignment | undefined { return this._f(ForgetLastTabAlignment); }
    /** Add Document Grid Line Pitch To Lines in Table Cells. */
    public get adjustLineHeightInTable(): AdjustLineHeightInTable | undefined { return this._f(AdjustLineHeightInTable); }
    /** Emulate Word 95 Full-Width Character Spacing. */
    public get autoSpaceLikeWord95(): AutoSpaceLikeWord95 | undefined { return this._f(AutoSpaceLikeWord95); }
    /** Do Not Increase Line Height for Raised/Lowered Text. */
    public get noSpaceRaiseLower(): NoSpaceRaiseLower | undefined { return this._f(NoSpaceRaiseLower); }
    /** Use Fixed Paragraph Spacing for HTML Auto Setting. */
    public get doNotUseHTMLParagraphAutoSpacing(): DoNotUseHTMLParagraphAutoSpacing | undefined { return this._f(DoNotUseHTMLParagraphAutoSpacing); }
    /** Ignore Space Before Table When Deciding If Table Should Wrap Floating Object. */
    public get layoutRawTableWidth(): LayoutRawTableWidth | undefined { return this._f(LayoutRawTableWidth); }
    /** Allow Table Rows to Wrap Inline Objects Independently. */
    public get layoutTableRowsApart(): LayoutTableRowsApart | undefined { return this._f(LayoutTableRowsApart); }
    /** Emulate Word 97 East Asian Line Breaking. */
    public get useWord97LineBreakRules(): UseWord97LineBreakRules | undefined { return this._f(UseWord97LineBreakRules); }
    /** Do Not Allow Floating Tables To Break Across Pages. */
    public get doNotBreakWrappedTables(): DoNotBreakWrappedTables | undefined { return this._f(DoNotBreakWrappedTables); }
    /** Do Not Snap to Document Grid in Table Cells with Objects. */
    public get doNotSnapToGridInCell(): DoNotSnapToGridInCell | undefined { return this._f(DoNotSnapToGridInCell); }
    /** Select Field When First or Last Character Is Selected. */
    public get selectFieldWithFirstOrLastChar(): SelectFieldWithFirstOrLastChar | undefined { return this._f(SelectFieldWithFirstOrLastChar); }
    /** Use Legacy Ethiopic and Amharic Line Breaking Rules. */
    public get applyBreakingRules(): ApplyBreakingRules | undefined { return this._f(ApplyBreakingRules); }
    /** Do Not Allow Hanging Punctuation With Character Grid. */
    public get doNotWrapTextWithPunctuation(): DoNotWrapTextWithPunctuation | undefined { return this._f(DoNotWrapTextWithPunctuation); }
    /** Do Not Compress Compressible Characters When Using Document Grid. */
    public get doNotUseEastAsianBreakRules(): DoNotUseEastAsianBreakRules | undefined { return this._f(DoNotUseEastAsianBreakRules); }
    /** Emulate Word 2002 Table Style Rules. */
    public get useWord2002TableStyleRules(): UseWord2002TableStyleRules | undefined { return this._f(UseWord2002TableStyleRules); }
    /** Allow Tables to AutoFit Into Page Margins. */
    public get growAutofit(): GrowAutofit | undefined { return this._f(GrowAutofit); }
    /** Do Not Bypass East Asian/Complex Script Layout Code. */
    public get useFarEastLayout(): UseFarEastLayout | undefined { return this._f(UseFarEastLayout); }
    /** Do Not Automatically Apply List Paragraph Style To Bulleted/Numbered Text. */
    public get useNormalStyleForList(): UseNormalStyleForList | undefined { return this._f(UseNormalStyleForList); }
    /** Ignore Hanging Indent When Creating Tab Stop After Numbering. */
    public get doNotUseIndentAsNumberingTabStop(): DoNotUseIndentAsNumberingTabStop | undefined { return this._f(DoNotUseIndentAsNumberingTabStop); }
    /** Use Alternate Set of East Asian Line Breaking Rules. */
    public get useAltKinsokuLineBreakRules(): UseAltKinsokuLineBreakRules | undefined { return this._f(UseAltKinsokuLineBreakRules); }
    /** Allow Contextual Spacing of Paragraphs in Tables. */
    public get allowSpaceOfSameStyleInTable(): AllowSpaceOfSameStyleInTable | undefined { return this._f(AllowSpaceOfSameStyleInTable); }
    /** Do Not Ignore Floating Objects When Calculating Paragraph Indentation. */
    public get doNotSuppressIndentation(): DoNotSuppressIndentation | undefined { return this._f(DoNotSuppressIndentation); }
    /** Do Not AutoFit Tables To Fit Next To Wrapped Objects. */
    public get doNotAutofitConstrainedTables(): DoNotAutofitConstrainedTables | undefined { return this._f(DoNotAutofitConstrainedTables); }
    /** Allow Table Columns To Exceed Preferred Widths of Constituent Cells. */
    public get autofitToFirstFixedWidthCell(): AutofitToFirstFixedWidthCell | undefined { return this._f(AutofitToFirstFixedWidthCell); }
    /** Underline Following Character Following Numbering. */
    public get underlineTabInNumberingList(): UnderlineTabInNumberingList | undefined { return this._f(UnderlineTabInNumberingList); }
    /** Always Use Fixed Width for Hangul Characters. */
    public get displayHangulFixedWidth(): DisplayHangulFixedWidth | undefined { return this._f(DisplayHangulFixedWidth); }
    /** Always Move Paragraph Mark to Page after a Page Break. */
    public get splitPageBreakAndParagraphMark(): SplitPageBreakAndParagraphMark | undefined { return this._f(SplitPageBreakAndParagraphMark); }
    /** Don't Vertically Align Cells Containing Floating Objects. */
    public get doNotVerticallyAlignCellWithShape(): DoNotVerticallyAlignCellWithShape | undefined { return this._f(DoNotVerticallyAlignCellWithShape); }
    /** Don't Break Table Rows Around Floating Tables. */
    public get doNotBreakConstrainedForcedTable(): DoNotBreakConstrainedForcedTable | undefined { return this._f(DoNotBreakConstrainedForcedTable); }
    /** Ignore Vertical Alignment in Textboxes. */
    public get doNotVerticallyAlignInTextBox(): DoNotVerticallyAlignInTextBox | undefined { return this._f(DoNotVerticallyAlignInTextBox); }
    /** Use ANSI Kerning Pairs from Fonts. */
    public get useAnsiKerningPairs(): UseAnsiKerningPairs | undefined { return this._f(UseAnsiKerningPairs); }
    /** Use Cached Paragraph Information for Column Balancing. */
    public get cachedColumnBalance(): CachedColumnBalance | undefined { return this._f(CachedColumnBalance); }

}
/** Document-Wide Endnote Properties. Serialized as `w:endnotePr` */
export class EndnoteDocumentWideProperties extends OxmlCompositeElement<EndnotePosition | NumberingFormat | NumberingStart | NumberingRestart | EndnoteSpecialReference> {

    public static override _Q = 'w:endnotePr';
    /** Endnote Placement. */
    public get endnotePosition(): EndnotePosition | undefined { return this._f(EndnotePosition); }
    /** Endnote Numbering Format. */
    public get numberingFormat(): NumberingFormat | undefined { return this._f(NumberingFormat); }
    /** Footnote and Endnote Numbering Starting Value. */
    public get numberingStart(): NumberingStart | undefined { return this._f(NumberingStart); }
    /** Footnote and Endnote Numbering Restart Location. */
    public get numberingRestart(): NumberingRestart | undefined { return this._f(NumberingRestart); }

}
/** Document-Wide Footnote Properties. Serialized as `w:footnotePr` */
export class FootnoteDocumentWideProperties extends OxmlCompositeElement<FootnotePosition | NumberingFormat | NumberingStart | NumberingRestart | FootnoteSpecialReference> {

    public static override _Q = 'w:footnotePr';
    /** Footnote Placement. */
    public get footnotePosition(): FootnotePosition | undefined { return this._f(FootnotePosition); }
    /** Footnote Numbering Format. */
    public get numberingFormat(): NumberingFormat | undefined { return this._f(NumberingFormat); }
    /** Footnote and Endnote Numbering Starting Value. */
    public get numberingStart(): NumberingStart | undefined { return this._f(NumberingStart); }
    /** Footnote and Endnote Numbering Restart Location. */
    public get numberingRestart(): NumberingRestart | undefined { return this._f(NumberingRestart); }

}
/** Defines the ShapeDefaultsType Class. */
export abstract class ShapeDefaultsType extends OxmlCompositeElement<OShapeDefaults | OShapeLayout> {


}
/** Default Properties for VML Objects in Main Document. Serialized as `w:shapeDefaults` */
export class ShapeDefaults extends ShapeDefaultsType {

    public static override _Q = 'w:shapeDefaults';

}
/** Default Properties for VML Objects in Header and Footer. Serialized as `w:hdrShapeDefaults` */
export class HeaderShapeDefaults extends ShapeDefaultsType {

    public static override _Q = 'w:hdrShapeDefaults';

}
/** Custom XSL Transform To Use When Saving As XML File. Serialized as `w:saveThroughXslt` */
export class SaveThroughXslt extends OxmlLeafElement {

    public static override _Q = 'w:saveThroughXslt';
    public static override _A = ['r:id','w:solutionID',];
    /** XSL Transformation Location. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** Local Identifier for XSL Transform. Serialized as `w:solutionID` */
    public get solutionId(): StringValue | undefined { return this._g('w:solutionID'); }
    public set solutionId(v: StringValue | undefined) { this._s('w:solutionID', v); }

}
/** Custom Set Of Characters Which Cannot Begin A Line. Serialized as `w:noLineBreaksBefore` */
export class NoLineBreaksBeforeKinsoku extends OxmlLeafElement {

    public static override _Q = 'w:noLineBreaksBefore';
    public static override _A = ['w:lang','w:val',];
    /** lang. Serialized as `w:lang` */
    public get language(): StringValue | undefined { return this._g('w:lang'); }
    public set language(v: StringValue | undefined) { this._s('w:lang', v); }
    /** val. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Custom Set of Characters Which Cannot End a Line. Serialized as `w:noLineBreaksAfter` */
export class NoLineBreaksAfterKinsoku extends OxmlLeafElement {

    public static override _Q = 'w:noLineBreaksAfter';
    public static override _A = ['w:lang','w:val',];
    /** lang. Serialized as `w:lang` */
    public get language(): StringValue | undefined { return this._g('w:lang'); }
    public set language(v: StringValue | undefined) { this._s('w:lang', v); }
    /** val. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Character-Level Whitespace Compression. Serialized as `w:characterSpacingControl` */
export class CharacterSpacingControl extends OxmlLeafElement {

    public static override _Q = 'w:characterSpacingControl';
    public static override _A = ['w:val',];
    /** Value. Serialized as `w:val` */
    public get val(): CharacterSpacingValues | undefined { return this._g('w:val'); }
    public set val(v: CharacterSpacingValues | undefined) { this._s('w:val', v); }

}
/** Defines the UnsignedInt7Type Class. */
export abstract class UnsignedInt7Type extends OxmlLeafElement {

    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): Int32Value | undefined { return this._g('w:val'); }
    public set val(v: Int32Value | undefined) { this._s('w:val', v); }

}
/** Distance between Vertical Gridlines. Serialized as `w:displayVerticalDrawingGridEvery` */
export class DisplayVerticalDrawingGrid extends UnsignedInt7Type {

    public static override _Q = 'w:displayVerticalDrawingGridEvery';

}
/** Distance between Horizontal Gridlines. Serialized as `w:displayHorizontalDrawingGridEvery` */
export class DisplayHorizontalDrawingGrid extends UnsignedInt7Type {

    public static override _Q = 'w:displayHorizontalDrawingGridEvery';

}
/** Percentage of Document to Use When Generating Summary. Serialized as `w:summaryLength` */
export class SummaryLength extends OxmlLeafElement {

    public static override _Q = 'w:summaryLength';
    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): Int32Value | undefined { return this._g('w:val'); }
    public set val(v: Int32Value | undefined) { this._s('w:val', v); }

}
/** Maximum Number of Consecutively Hyphenated Lines. Serialized as `w:consecutiveHyphenLimit` */
export class ConsecutiveHyphenLimit extends OxmlLeafElement {

    public static override _Q = 'w:consecutiveHyphenLimit';
    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): UInt16Value | undefined { return this._g('w:val'); }
    public set val(v: UInt16Value | undefined) { this._s('w:val', v); }

}
/** Defines the NonNegativeShortType Class. */
export abstract class NonNegativeShortType extends OxmlLeafElement {

    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): Int16Value | undefined { return this._g('w:val'); }
    public set val(v: Int16Value | undefined) { this._s('w:val', v); }

}
/** Number of Pages Per Booklet. Serialized as `w:bookFoldPrintingSheets` */
export class BookFoldPrintingSheets extends NonNegativeShortType {

    public static override _Q = 'w:bookFoldPrintingSheets';

}
/** Distance Between Automatic Tab Stops. Serialized as `w:defaultTabStop` */
export class DefaultTabStop extends NonNegativeShortType {

    public static override _Q = 'w:defaultTabStop';

}
/** Document Editing Restrictions. Serialized as `w:documentProtection` */
export class DocumentProtection extends OxmlLeafElement {

    public static override _Q = 'w:documentProtection';
    public static override _A = ['w:edit','w:formatting','w:enforcement','w:cryptProviderType','w:cryptAlgorithmClass','w:cryptAlgorithmType','w:cryptAlgorithmSid','w:cryptSpinCount','w:cryptProvider','w:algIdExt','w:algIdExtSource','w:cryptProviderTypeExt','w:cryptProviderTypeExtSource','w:hash','w:salt','w:algorithmName','w:hashValue','w:saltValue','w:spinCount',];
    /** Document Editing Restrictions. Serialized as `w:edit` */
    public get edit(): DocumentProtectionValues | undefined { return this._g('w:edit'); }
    public set edit(v: DocumentProtectionValues | undefined) { this._s('w:edit', v); }
    /** Only Allow Formatting With Unlocked Styles. Serialized as `w:formatting` */
    public get formatting(): OnOffValue | undefined { return this._g('w:formatting'); }
    public set formatting(v: OnOffValue | undefined) { this._s('w:formatting', v); }
    /** Enforce Document Protection Settings. Serialized as `w:enforcement` */
    public get enforcement(): OnOffValue | undefined { return this._g('w:enforcement'); }
    public set enforcement(v: OnOffValue | undefined) { this._s('w:enforcement', v); }
    /** Cryptographic Provider Type. Serialized as `w:cryptProviderType` */
    public get cryptographicProviderType(): CryptProviderValues | undefined { return this._g('w:cryptProviderType'); }
    public set cryptographicProviderType(v: CryptProviderValues | undefined) { this._s('w:cryptProviderType', v); }
    /** Cryptographic Algorithm Class. Serialized as `w:cryptAlgorithmClass` */
    public get cryptographicAlgorithmClass(): CryptAlgorithmClassValues | undefined { return this._g('w:cryptAlgorithmClass'); }
    public set cryptographicAlgorithmClass(v: CryptAlgorithmClassValues | undefined) { this._s('w:cryptAlgorithmClass', v); }
    /** Cryptographic Algorithm Type. Serialized as `w:cryptAlgorithmType` */
    public get cryptographicAlgorithmType(): CryptAlgorithmValues | undefined { return this._g('w:cryptAlgorithmType'); }
    public set cryptographicAlgorithmType(v: CryptAlgorithmValues | undefined) { this._s('w:cryptAlgorithmType', v); }
    /** Cryptographic Hashing Algorithm. Serialized as `w:cryptAlgorithmSid` */
    public get cryptographicAlgorithmSid(): Int32Value | undefined { return this._g('w:cryptAlgorithmSid'); }
    public set cryptographicAlgorithmSid(v: Int32Value | undefined) { this._s('w:cryptAlgorithmSid', v); }
    /** Iterations to Run Hashing Algorithm. Serialized as `w:cryptSpinCount` */
    public get cryptographicSpinCount(): UInt32Value | undefined { return this._g('w:cryptSpinCount'); }
    public set cryptographicSpinCount(v: UInt32Value | undefined) { this._s('w:cryptSpinCount', v); }
    /** Cryptographic Provider. Serialized as `w:cryptProvider` */
    public get cryptographicProvider(): StringValue | undefined { return this._g('w:cryptProvider'); }
    public set cryptographicProvider(v: StringValue | undefined) { this._s('w:cryptProvider', v); }
    /** Cryptographic Algorithm Extensibility. Serialized as `w:algIdExt` */
    public get algorithmIdExtensibility(): HexBinaryValue | undefined { return this._g('w:algIdExt'); }
    public set algorithmIdExtensibility(v: HexBinaryValue | undefined) { this._s('w:algIdExt', v); }
    /** Algorithm Extensibility Source. Serialized as `w:algIdExtSource` */
    public get algorithmIdExtensibilitySource(): StringValue | undefined { return this._g('w:algIdExtSource'); }
    public set algorithmIdExtensibilitySource(v: StringValue | undefined) { this._s('w:algIdExtSource', v); }
    /** Cryptographic Provider Type Extensibility. Serialized as `w:cryptProviderTypeExt` */
    public get cryptographicProviderTypeExtensibility(): HexBinaryValue | undefined { return this._g('w:cryptProviderTypeExt'); }
    public set cryptographicProviderTypeExtensibility(v: HexBinaryValue | undefined) { this._s('w:cryptProviderTypeExt', v); }
    /** Provider Type Extensibility Source. Serialized as `w:cryptProviderTypeExtSource` */
    public get cryptographicProviderTypeExtSource(): StringValue | undefined { return this._g('w:cryptProviderTypeExtSource'); }
    public set cryptographicProviderTypeExtSource(v: StringValue | undefined) { this._s('w:cryptProviderTypeExtSource', v); }
    /** Password Hash. Serialized as `w:hash` */
    public get hash(): Base64BinaryValue | undefined { return this._g('w:hash'); }
    public set hash(v: Base64BinaryValue | undefined) { this._s('w:hash', v); }
    /** Salt for Password Verifier. Serialized as `w:salt` */
    public get salt(): Base64BinaryValue | undefined { return this._g('w:salt'); }
    public set salt(v: Base64BinaryValue | undefined) { this._s('w:salt', v); }
    /** algorithmName. Serialized as `w:algorithmName` */
    public get algorithmName(): StringValue | undefined { return this._g('w:algorithmName'); }
    public set algorithmName(v: StringValue | undefined) { this._s('w:algorithmName', v); }
    /** hashValue. Serialized as `w:hashValue` */
    public get hashValue(): Base64BinaryValue | undefined { return this._g('w:hashValue'); }
    public set hashValue(v: Base64BinaryValue | undefined) { this._s('w:hashValue', v); }
    /** saltValue. Serialized as `w:saltValue` */
    public get saltValue(): Base64BinaryValue | undefined { return this._g('w:saltValue'); }
    public set saltValue(v: Base64BinaryValue | undefined) { this._s('w:saltValue', v); }
    /** spinCount. Serialized as `w:spinCount` */
    public get spinCount(): Int32Value | undefined { return this._g('w:spinCount'); }
    public set spinCount(v: Int32Value | undefined) { this._s('w:spinCount', v); }

}
/** Visibility of Annotation Types. Serialized as `w:revisionView` */
export class RevisionView extends OxmlLeafElement {

    public static override _Q = 'w:revisionView';
    public static override _A = ['w:markup','w:comments','w:insDel','w:formatting','w:inkAnnotations',];
    /** Display Visual Indicator Of Markup Area. Serialized as `w:markup` */
    public get markup(): OnOffValue | undefined { return this._g('w:markup'); }
    public set markup(v: OnOffValue | undefined) { this._s('w:markup', v); }
    /** Display Comments. Serialized as `w:comments` */
    public get comments(): OnOffValue | undefined { return this._g('w:comments'); }
    public set comments(v: OnOffValue | undefined) { this._s('w:comments', v); }
    /** Display Content Revisions. Serialized as `w:insDel` */
    public get displayRevision(): OnOffValue | undefined { return this._g('w:insDel'); }
    public set displayRevision(v: OnOffValue | undefined) { this._s('w:insDel', v); }
    /** Display Formatting Revisions. Serialized as `w:formatting` */
    public get formatting(): OnOffValue | undefined { return this._g('w:formatting'); }
    public set formatting(v: OnOffValue | undefined) { this._s('w:formatting', v); }
    /** Display Ink Annotations. Serialized as `w:inkAnnotations` */
    public get inkAnnotations(): OnOffValue | undefined { return this._g('w:inkAnnotations'); }
    public set inkAnnotations(v: OnOffValue | undefined) { this._s('w:inkAnnotations', v); }

}
/** Mail Merge Settings. Serialized as `w:mailMerge` */
export class MailMerge extends OxmlCompositeElement<MainDocumentType | LinkToQuery | DataType | ConnectString | Query | DataSourceReference | HeaderSource | DoNotSuppressBlankLines | Destination | AddressFieldName | MailSubject | MailAsAttachment | ViewMergedData | ActiveRecord | CheckErrors | DataSourceObject> {

    public static override _Q = 'w:mailMerge';
    /** Source Document Type. */
    public get mainDocumentType(): MainDocumentType | undefined { return this._f(MainDocumentType); }
    /** Query Contains Link to External Query File. */
    public get linkToQuery(): LinkToQuery | undefined { return this._f(LinkToQuery); }
    /** Data Source Type. */
    public get dataType(): DataType | undefined { return this._f(DataType); }
    /** Data Source Connection String. */
    public get connectString(): ConnectString | undefined { return this._f(ConnectString); }
    /** Query For Data Source Records To Merge. */
    public get query(): Query | undefined { return this._f(Query); }
    /** Data Source File Path. */
    public get dataSourceReference(): DataSourceReference | undefined { return this._f(DataSourceReference); }
    /** Header Definition File Path. */
    public get headerSource(): HeaderSource | undefined { return this._f(HeaderSource); }
    /** Remove Blank Lines from Merged Documents. */
    public get doNotSuppressBlankLines(): DoNotSuppressBlankLines | undefined { return this._f(DoNotSuppressBlankLines); }
    /** Merged Document Destination. */
    public get destination(): Destination | undefined { return this._f(Destination); }
    /** Column Containing E-mail Address. */
    public get addressFieldName(): AddressFieldName | undefined { return this._f(AddressFieldName); }
    /** Merged E-mail or Fax Subject Line. */
    public get mailSubject(): MailSubject | undefined { return this._f(MailSubject); }
    /** Merged Document To E-Mail Attachment. */
    public get mailAsAttachment(): MailAsAttachment | undefined { return this._f(MailAsAttachment); }
    /** View Merged Data Within Document. */
    public get viewMergedData(): ViewMergedData | undefined { return this._f(ViewMergedData); }
    /** Record Currently Displayed In Merged Document. */
    public get activeRecord(): ActiveRecord | undefined { return this._f(ActiveRecord); }
    /** Mail Merge Error Reporting Setting. */
    public get checkErrors(): CheckErrors | undefined { return this._f(CheckErrors); }
    /** Office Data Source Object Settings. */
    public get dataSourceObject(): DataSourceObject | undefined { return this._f(DataSourceObject); }

}
/** Document Classification. Serialized as `w:documentType` */
export class DocumentType extends OxmlLeafElement {

    public static override _Q = 'w:documentType';
    public static override _A = ['w:val',];
    /** Document Classification Value. Serialized as `w:val` */
    public get val(): DocumentTypeValues | undefined { return this._g('w:val'); }
    public set val(v: DocumentTypeValues | undefined) { this._s('w:val', v); }

}
/** Suggested Sorting for List of Document Styles. Serialized as `w:stylePaneSortMethod` */
export class StylePaneSortMethods extends OxmlLeafElement {

    public static override _Q = 'w:stylePaneSortMethod';
    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get value(): StringValue | undefined { return this._g('w:val'); }
    public set value(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Suggested Filtering for List of Document Styles. Serialized as `w:stylePaneFormatFilter` */
export class StylePaneFormatFilter extends OxmlLeafElement {

    public static override _Q = 'w:stylePaneFormatFilter';
    public static override _A = ['w:val','w:allStyles','w:customStyles','w:latentStyles','w:stylesInUse','w:headingStyles','w:numberingStyles','w:tableStyles','w:directFormattingOnRuns','w:directFormattingOnParagraphs','w:directFormattingOnNumbering','w:directFormattingOnTables','w:clearFormatting','w:top3HeadingStyles','w:visibleStyles','w:alternateStyleNames',];
    /** val. Serialized as `w:val` */
    public get value(): HexBinaryValue | undefined { return this._g('w:val'); }
    public set value(v: HexBinaryValue | undefined) { this._s('w:val', v); }
    /** allStyles. Serialized as `w:allStyles` */
    public get allStyles(): OnOffValue | undefined { return this._g('w:allStyles'); }
    public set allStyles(v: OnOffValue | undefined) { this._s('w:allStyles', v); }
    /** customStyles. Serialized as `w:customStyles` */
    public get customStyles(): OnOffValue | undefined { return this._g('w:customStyles'); }
    public set customStyles(v: OnOffValue | undefined) { this._s('w:customStyles', v); }
    /** latentStyles. Serialized as `w:latentStyles` */
    public get latentStyles(): OnOffValue | undefined { return this._g('w:latentStyles'); }
    public set latentStyles(v: OnOffValue | undefined) { this._s('w:latentStyles', v); }
    /** stylesInUse. Serialized as `w:stylesInUse` */
    public get stylesInUse(): OnOffValue | undefined { return this._g('w:stylesInUse'); }
    public set stylesInUse(v: OnOffValue | undefined) { this._s('w:stylesInUse', v); }
    /** headingStyles. Serialized as `w:headingStyles` */
    public get headingStyles(): OnOffValue | undefined { return this._g('w:headingStyles'); }
    public set headingStyles(v: OnOffValue | undefined) { this._s('w:headingStyles', v); }
    /** numberingStyles. Serialized as `w:numberingStyles` */
    public get numberingStyles(): OnOffValue | undefined { return this._g('w:numberingStyles'); }
    public set numberingStyles(v: OnOffValue | undefined) { this._s('w:numberingStyles', v); }
    /** tableStyles. Serialized as `w:tableStyles` */
    public get tableStyles(): OnOffValue | undefined { return this._g('w:tableStyles'); }
    public set tableStyles(v: OnOffValue | undefined) { this._s('w:tableStyles', v); }
    /** directFormattingOnRuns. Serialized as `w:directFormattingOnRuns` */
    public get directFormattingOnRuns(): OnOffValue | undefined { return this._g('w:directFormattingOnRuns'); }
    public set directFormattingOnRuns(v: OnOffValue | undefined) { this._s('w:directFormattingOnRuns', v); }
    /** directFormattingOnParagraphs. Serialized as `w:directFormattingOnParagraphs` */
    public get directFormattingOnParagraphs(): OnOffValue | undefined { return this._g('w:directFormattingOnParagraphs'); }
    public set directFormattingOnParagraphs(v: OnOffValue | undefined) { this._s('w:directFormattingOnParagraphs', v); }
    /** directFormattingOnNumbering. Serialized as `w:directFormattingOnNumbering` */
    public get directFormattingOnNumbering(): OnOffValue | undefined { return this._g('w:directFormattingOnNumbering'); }
    public set directFormattingOnNumbering(v: OnOffValue | undefined) { this._s('w:directFormattingOnNumbering', v); }
    /** directFormattingOnTables. Serialized as `w:directFormattingOnTables` */
    public get directFormattingOnTables(): OnOffValue | undefined { return this._g('w:directFormattingOnTables'); }
    public set directFormattingOnTables(v: OnOffValue | undefined) { this._s('w:directFormattingOnTables', v); }
    /** clearFormatting. Serialized as `w:clearFormatting` */
    public get clearFormatting(): OnOffValue | undefined { return this._g('w:clearFormatting'); }
    public set clearFormatting(v: OnOffValue | undefined) { this._s('w:clearFormatting', v); }
    /** top3HeadingStyles. Serialized as `w:top3HeadingStyles` */
    public get top3HeadingStyles(): OnOffValue | undefined { return this._g('w:top3HeadingStyles'); }
    public set top3HeadingStyles(v: OnOffValue | undefined) { this._s('w:top3HeadingStyles', v); }
    /** visibleStyles. Serialized as `w:visibleStyles` */
    public get visibleStyles(): OnOffValue | undefined { return this._g('w:visibleStyles'); }
    public set visibleStyles(v: OnOffValue | undefined) { this._s('w:visibleStyles', v); }
    /** alternateStyleNames. Serialized as `w:alternateStyleNames` */
    public get alternateStyleNames(): OnOffValue | undefined { return this._g('w:alternateStyleNames'); }
    public set alternateStyleNames(v: OnOffValue | undefined) { this._s('w:alternateStyleNames', v); }

}
/** Spelling and Grammatical Checking State. Serialized as `w:proofState` */
export class ProofState extends OxmlLeafElement {

    public static override _Q = 'w:proofState';
    public static override _A = ['w:spelling','w:grammar',];
    /** Spell Checking State. Serialized as `w:spelling` */
    public get spelling(): ProofingStateValues | undefined { return this._g('w:spelling'); }
    public set spelling(v: ProofingStateValues | undefined) { this._s('w:spelling', v); }
    /** Grammatical Checking State. Serialized as `w:grammar` */
    public get grammar(): ProofingStateValues | undefined { return this._g('w:grammar'); }
    public set grammar(v: ProofingStateValues | undefined) { this._s('w:grammar', v); }

}
/** Grammar Checking Settings. Serialized as `w:activeWritingStyle` */
export class ActiveWritingStyle extends OxmlLeafElement {

    public static override _Q = 'w:activeWritingStyle';
    public static override _A = ['w:lang','w:vendorID','w:dllVersion','w:nlCheck','w:checkStyle','w:appName',];
    /** Writing Style Language. Serialized as `w:lang` */
    public get language(): StringValue | undefined { return this._g('w:lang'); }
    public set language(v: StringValue | undefined) { this._s('w:lang', v); }
    /** Grammatical Engine ID. Serialized as `w:vendorID` */
    public get vendorID(): UInt16Value | undefined { return this._g('w:vendorID'); }
    public set vendorID(v: UInt16Value | undefined) { this._s('w:vendorID', v); }
    /** Grammatical Check Engine Version. Serialized as `w:dllVersion` */
    public get dllVersion(): Int32Value | undefined { return this._g('w:dllVersion'); }
    public set dllVersion(v: Int32Value | undefined) { this._s('w:dllVersion', v); }
    /** Natural Language Grammar Check. Serialized as `w:nlCheck` */
    public get naturalLanguageGrammarCheck(): OnOffValue | undefined { return this._g('w:nlCheck'); }
    public set naturalLanguageGrammarCheck(v: OnOffValue | undefined) { this._s('w:nlCheck', v); }
    /** Check Stylistic Rules With Grammar. Serialized as `w:checkStyle` */
    public get checkStyle(): OnOffValue | undefined { return this._g('w:checkStyle'); }
    public set checkStyle(v: OnOffValue | undefined) { this._s('w:checkStyle', v); }
    /** Application Name. Serialized as `w:appName` */
    public get applicationName(): StringValue | undefined { return this._g('w:appName'); }
    public set applicationName(v: StringValue | undefined) { this._s('w:appName', v); }

}
/** Magnification Setting. Serialized as `w:zoom` */
export class Zoom extends OxmlLeafElement {

    public static override _Q = 'w:zoom';
    public static override _A = ['w:val','w:percent',];
    /** Zoom Type. Serialized as `w:val` */
    public get val(): PresetZoomValues | undefined { return this._g('w:val'); }
    public set val(v: PresetZoomValues | undefined) { this._s('w:val', v); }
    /** Zoom Percentage. Serialized as `w:percent` */
    public get percent(): StringValue | undefined { return this._g('w:percent'); }
    public set percent(v: StringValue | undefined) { this._s('w:percent', v); }

}
/** Document View Setting. Serialized as `w:view` */
export class View extends OxmlLeafElement {

    public static override _Q = 'w:view';
    public static override _A = ['w:val',];
    /** Document View Setting  Value. Serialized as `w:val` */
    public get val(): ViewValues | undefined { return this._g('w:val'); }
    public set val(v: ViewValues | undefined) { this._s('w:val', v); }

}
/** Write Protection. Serialized as `w:writeProtection` */
export class WriteProtection extends OxmlLeafElement {

    public static override _Q = 'w:writeProtection';
    public static override _A = ['w:recommended','w:cryptProviderType','w:cryptAlgorithmClass','w:cryptAlgorithmType','w:cryptAlgorithmSid','w:cryptSpinCount','w:cryptProvider','w:algIdExt','w:algIdExtSource','w:cryptProviderTypeExt','w:cryptProviderTypeExtSource','w:hash','w:salt','w:algorithmName','w:hashValue','w:saltValue','w:spinCount',];
    /** Recommend Write Protection in User Interface. Serialized as `w:recommended` */
    public get recommended(): OnOffValue | undefined { return this._g('w:recommended'); }
    public set recommended(v: OnOffValue | undefined) { this._s('w:recommended', v); }
    /** Cryptographic Provider Type. Serialized as `w:cryptProviderType` */
    public get cryptographicProviderType(): CryptProviderValues | undefined { return this._g('w:cryptProviderType'); }
    public set cryptographicProviderType(v: CryptProviderValues | undefined) { this._s('w:cryptProviderType', v); }
    /** Cryptographic Algorithm Class. Serialized as `w:cryptAlgorithmClass` */
    public get cryptographicAlgorithmClass(): CryptAlgorithmClassValues | undefined { return this._g('w:cryptAlgorithmClass'); }
    public set cryptographicAlgorithmClass(v: CryptAlgorithmClassValues | undefined) { this._s('w:cryptAlgorithmClass', v); }
    /** Cryptographic Algorithm Type. Serialized as `w:cryptAlgorithmType` */
    public get cryptographicAlgorithmType(): CryptAlgorithmValues | undefined { return this._g('w:cryptAlgorithmType'); }
    public set cryptographicAlgorithmType(v: CryptAlgorithmValues | undefined) { this._s('w:cryptAlgorithmType', v); }
    /** Cryptographic Hashing Algorithm. Serialized as `w:cryptAlgorithmSid` */
    public get cryptographicAlgorithmSid(): Int32Value | undefined { return this._g('w:cryptAlgorithmSid'); }
    public set cryptographicAlgorithmSid(v: Int32Value | undefined) { this._s('w:cryptAlgorithmSid', v); }
    /** Iterations to Run Hashing Algorithm. Serialized as `w:cryptSpinCount` */
    public get cryptographicSpinCount(): UInt32Value | undefined { return this._g('w:cryptSpinCount'); }
    public set cryptographicSpinCount(v: UInt32Value | undefined) { this._s('w:cryptSpinCount', v); }
    /** Cryptographic Provider. Serialized as `w:cryptProvider` */
    public get cryptographicProvider(): StringValue | undefined { return this._g('w:cryptProvider'); }
    public set cryptographicProvider(v: StringValue | undefined) { this._s('w:cryptProvider', v); }
    /** Cryptographic Algorithm Extensibility. Serialized as `w:algIdExt` */
    public get algorithmIdExtensibility(): HexBinaryValue | undefined { return this._g('w:algIdExt'); }
    public set algorithmIdExtensibility(v: HexBinaryValue | undefined) { this._s('w:algIdExt', v); }
    /** Algorithm Extensibility Source. Serialized as `w:algIdExtSource` */
    public get algorithmIdExtensibilitySource(): StringValue | undefined { return this._g('w:algIdExtSource'); }
    public set algorithmIdExtensibilitySource(v: StringValue | undefined) { this._s('w:algIdExtSource', v); }
    /** Cryptographic Provider Type Extensibility. Serialized as `w:cryptProviderTypeExt` */
    public get cryptographicProviderTypeExtensibility(): HexBinaryValue | undefined { return this._g('w:cryptProviderTypeExt'); }
    public set cryptographicProviderTypeExtensibility(v: HexBinaryValue | undefined) { this._s('w:cryptProviderTypeExt', v); }
    /** Provider Type Extensibility Source. Serialized as `w:cryptProviderTypeExtSource` */
    public get cryptographicProviderTypeExtSource(): StringValue | undefined { return this._g('w:cryptProviderTypeExtSource'); }
    public set cryptographicProviderTypeExtSource(v: StringValue | undefined) { this._s('w:cryptProviderTypeExtSource', v); }
    /** Password Hash. Serialized as `w:hash` */
    public get hash(): Base64BinaryValue | undefined { return this._g('w:hash'); }
    public set hash(v: Base64BinaryValue | undefined) { this._s('w:hash', v); }
    /** Salt for Password Verifier. Serialized as `w:salt` */
    public get salt(): Base64BinaryValue | undefined { return this._g('w:salt'); }
    public set salt(v: Base64BinaryValue | undefined) { this._s('w:salt', v); }
    /** algorithmName. Serialized as `w:algorithmName` */
    public get algorithmName(): StringValue | undefined { return this._g('w:algorithmName'); }
    public set algorithmName(v: StringValue | undefined) { this._s('w:algorithmName', v); }
    /** hashValue. Serialized as `w:hashValue` */
    public get hashValue(): Base64BinaryValue | undefined { return this._g('w:hashValue'); }
    public set hashValue(v: Base64BinaryValue | undefined) { this._s('w:hashValue', v); }
    /** saltValue. Serialized as `w:saltValue` */
    public get saltValue(): Base64BinaryValue | undefined { return this._g('w:saltValue'); }
    public set saltValue(v: Base64BinaryValue | undefined) { this._s('w:saltValue', v); }
    /** spinCount. Serialized as `w:spinCount` */
    public get spinCount(): Int32Value | undefined { return this._g('w:spinCount'); }
    public set spinCount(v: Int32Value | undefined) { this._s('w:spinCount', v); }

}
/** Defines the SdtContentText Class. Serialized as `w:text` */
export class SdtContentText extends OxmlLeafElement {

    public static override _Q = 'w:text';
    public static override _A = ['w:multiLine',];
    /** Allow Soft Line Breaks. Serialized as `w:multiLine` */
    public get multiLine(): OnOffValue | undefined { return this._g('w:multiLine'); }
    public set multiLine(v: OnOffValue | undefined) { this._s('w:multiLine', v); }

}
/** Defines the SdtContentDropDownList Class. Serialized as `w:dropDownList` */
export class SdtContentDropDownList extends OxmlCompositeElement<ListItem> {

    public static override _Q = 'w:dropDownList';
    public static override _A = ['w:lastValue',];
    /** Drop-down List Last Saved Value. Serialized as `w:lastValue` */
    public get lastValue(): StringValue | undefined { return this._g('w:lastValue'); }
    public set lastValue(v: StringValue | undefined) { this._s('w:lastValue', v); }

}
/** Defines the SdtDocPartType Class. */
export abstract class SdtDocPartType extends OxmlCompositeElement<DocPartGallery | DocPartCategory | DocPartUnique> {

    /** Document Part Gallery Filter. */
    public get docPartGallery(): DocPartGallery | undefined { return this._f(DocPartGallery); }
    /** Document Part Category Filter. */
    public get docPartCategory(): DocPartCategory | undefined { return this._f(DocPartCategory); }
    /** Built-In Document Part. */
    public get docPartUnique(): DocPartUnique | undefined { return this._f(DocPartUnique); }

}
/** Defines the SdtContentDocPartList Class. Serialized as `w:docPartList` */
export class SdtContentDocPartList extends SdtDocPartType {

    public static override _Q = 'w:docPartList';

}
/** Defines the SdtContentDocPartObject Class. Serialized as `w:docPartObj` */
export class SdtContentDocPartObject extends SdtDocPartType {

    public static override _Q = 'w:docPartObj';

}
/** Defines the SdtContentDate Class. Serialized as `w:date` */
export class SdtContentDate extends OxmlCompositeElement<DateFormat | LanguageId | SdtDateMappingType | Calendar> {

    public static override _Q = 'w:date';
    public static override _A = ['w:fullDate',];
    /** Last Known Date in XML Schema DateTime Format. Serialized as `w:fullDate` */
    public get fullDate(): DateTimeValue | undefined { return this._g('w:fullDate'); }
    public set fullDate(v: DateTimeValue | undefined) { this._s('w:fullDate', v); }
    /** Date Display Mask. */
    public get dateFormat(): DateFormat | undefined { return this._f(DateFormat); }
    /** Date Picker Language ID. */
    public get languageId(): LanguageId | undefined { return this._f(LanguageId); }
    /** Custom XML Data Date Storage Format. */
    public get sdtDateMappingType(): SdtDateMappingType | undefined { return this._f(SdtDateMappingType); }
    /** Date Picker Calendar Type. */
    public get calendar(): Calendar | undefined { return this._f(Calendar); }

}
/** Defines the SdtContentComboBox Class. Serialized as `w:comboBox` */
export class SdtContentComboBox extends OxmlCompositeElement<ListItem> {

    public static override _Q = 'w:comboBox';
    public static override _A = ['w:lastValue',];
    /** Combo Box Last Saved Value. Serialized as `w:lastValue` */
    public get lastValue(): StringValue | undefined { return this._g('w:lastValue'); }
    public set lastValue(v: StringValue | undefined) { this._s('w:lastValue', v); }

}
/** Defines the DataBinding Class. Serialized as `w:dataBinding` */
export class DataBinding extends OxmlLeafElement {

    public static override _Q = 'w:dataBinding';
    public static override _A = ['w:prefixMappings','w:xpath','w:storeItemID',];
    /** XML Namespace Prefix Mappings. Serialized as `w:prefixMappings` */
    public get prefixMappings(): StringValue | undefined { return this._g('w:prefixMappings'); }
    public set prefixMappings(v: StringValue | undefined) { this._s('w:prefixMappings', v); }
    /** XPath. Serialized as `w:xpath` */
    public get xPath(): StringValue | undefined { return this._g('w:xpath'); }
    public set xPath(v: StringValue | undefined) { this._s('w:xpath', v); }
    /** Custom XML Data Storage ID. Serialized as `w:storeItemID` */
    public get storeItemId(): StringValue | undefined { return this._g('w:storeItemID'); }
    public set storeItemId(v: StringValue | undefined) { this._s('w:storeItemID', v); }

}
/** Defines the SdtPlaceholder Class. Serialized as `w:placeholder` */
export class SdtPlaceholder extends OxmlCompositeElement<DocPartReference> {

    public static override _Q = 'w:placeholder';
    /** Document Part Reference. */
    public get docPartReference(): DocPartReference | undefined { return this._f(DocPartReference); }

}
/** Defines the Lock Class. Serialized as `w:lock` */
export class Lock extends OxmlLeafElement {

    public static override _Q = 'w:lock';
    public static override _A = ['w:val',];
    /** Locking Type. Serialized as `w:val` */
    public get val(): LockingValues | undefined { return this._g('w:val'); }
    public set val(v: LockingValues | undefined) { this._s('w:val', v); }

}
/** Defines the ObjectLink Class. Serialized as `w:objectLink` */
export class ObjectLink extends OxmlLeafElement {

    public static override _Q = 'w:objectLink';
    public static override _A = ['w:updateMode','w:lockedField','w:drawAspect','r:id','w:progId','w:shapeId','w:fieldCodes',];
    /** updateMode. Serialized as `w:updateMode` */
    public get updateMode(): ObjectUpdateMode | undefined { return this._g('w:updateMode'); }
    public set updateMode(v: ObjectUpdateMode | undefined) { this._s('w:updateMode', v); }
    /** lockedField. Serialized as `w:lockedField` */
    public get lockedField(): OnOffValue | undefined { return this._g('w:lockedField'); }
    public set lockedField(v: OnOffValue | undefined) { this._s('w:lockedField', v); }
    /** drawAspect. Serialized as `w:drawAspect` */
    public get drawAspect(): ObjectDrawAspect | undefined { return this._g('w:drawAspect'); }
    public set drawAspect(v: ObjectDrawAspect | undefined) { this._s('w:drawAspect', v); }
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** progId. Serialized as `w:progId` */
    public get progId(): StringValue | undefined { return this._g('w:progId'); }
    public set progId(v: StringValue | undefined) { this._s('w:progId', v); }
    /** shapeId. Serialized as `w:shapeId` */
    public get shapeId(): StringValue | undefined { return this._g('w:shapeId'); }
    public set shapeId(v: StringValue | undefined) { this._s('w:shapeId', v); }
    /** fieldCodes. Serialized as `w:fieldCodes` */
    public get fieldCodes(): StringValue | undefined { return this._g('w:fieldCodes'); }
    public set fieldCodes(v: StringValue | undefined) { this._s('w:fieldCodes', v); }

}
/** Defines the ObjectEmbed Class. Serialized as `w:objectEmbed` */
export class ObjectEmbed extends OxmlLeafElement {

    public static override _Q = 'w:objectEmbed';
    public static override _A = ['w:drawAspect','r:id','w:progId','w:shapeId','w:fieldCodes',];
    /** drawAspect. Serialized as `w:drawAspect` */
    public get drawAspect(): ObjectDrawAspect | undefined { return this._g('w:drawAspect'); }
    public set drawAspect(v: ObjectDrawAspect | undefined) { this._s('w:drawAspect', v); }
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** progId. Serialized as `w:progId` */
    public get progId(): StringValue | undefined { return this._g('w:progId'); }
    public set progId(v: StringValue | undefined) { this._s('w:progId', v); }
    /** shapeId. Serialized as `w:shapeId` */
    public get shapeId(): StringValue | undefined { return this._g('w:shapeId'); }
    public set shapeId(v: StringValue | undefined) { this._s('w:shapeId', v); }
    /** fieldCodes. Serialized as `w:fieldCodes` */
    public get fieldCodes(): StringValue | undefined { return this._g('w:fieldCodes'); }
    public set fieldCodes(v: StringValue | undefined) { this._s('w:fieldCodes', v); }

}
/** Previous Table Grid. Serialized as `w:tblGrid` */
export class PreviousTableGrid extends OxmlCompositeElement<GridColumn> {

    public static override _Q = 'w:tblGrid';

}
/** Defines the Control Class. Serialized as `w:control` */
export class Control extends OxmlLeafElement {

    public static override _Q = 'w:control';
    public static override _A = ['w:name','w:shapeid','r:id',];
    /** Unique Name for Embedded Control. Serialized as `w:name` */
    public get name(): StringValue | undefined { return this._g('w:name'); }
    public set name(v: StringValue | undefined) { this._s('w:name', v); }
    /** Associated VML Data Reference. Serialized as `w:shapeid` */
    public get shapeId(): StringValue | undefined { return this._g('w:shapeid'); }
    public set shapeId(v: StringValue | undefined) { this._s('w:shapeid', v); }
    /** Embedded Control Properties Relationship Reference. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Paragraph Properties. Serialized as `w:pPr` */
export class ParagraphProperties extends OxmlCompositeElement<ParagraphStyleId | KeepNext | KeepLines | PageBreakBefore | FrameProperties | WidowControl | NumberingProperties | SuppressLineNumbers | ParagraphBorders | Shading | Tabs | SuppressAutoHyphens | Kinsoku | WordWrap | OverflowPunctuation | TopLinePunctuation | AutoSpaceDE | AutoSpaceDN | BiDi | AdjustRightIndent | SnapToGrid | SpacingBetweenLines | Indentation | ContextualSpacing | MirrorIndents | SuppressOverlap | Justification | TextDirection | TextAlignment | TextBoxTightWrap | OutlineLevel | DivId | ConditionalFormatStyle | ParagraphMarkRunProperties | SectionProperties | ParagraphPropertiesChange> {

    public static override _Q = 'w:pPr';
    /** Returns ParagraphStyleId. */
    public get paragraphStyleId(): ParagraphStyleId | undefined { return this._f(ParagraphStyleId); }
    /** Returns KeepNext. */
    public get keepNext(): KeepNext | undefined { return this._f(KeepNext); }
    /** Returns KeepLines. */
    public get keepLines(): KeepLines | undefined { return this._f(KeepLines); }
    /** Returns PageBreakBefore. */
    public get pageBreakBefore(): PageBreakBefore | undefined { return this._f(PageBreakBefore); }
    /** Returns FrameProperties. */
    public get frameProperties(): FrameProperties | undefined { return this._f(FrameProperties); }
    /** Returns WidowControl. */
    public get widowControl(): WidowControl | undefined { return this._f(WidowControl); }
    /** Returns NumberingProperties. */
    public get numberingProperties(): NumberingProperties | undefined { return this._f(NumberingProperties); }
    /** Returns SuppressLineNumbers. */
    public get suppressLineNumbers(): SuppressLineNumbers | undefined { return this._f(SuppressLineNumbers); }
    /** Returns ParagraphBorders. */
    public get paragraphBorders(): ParagraphBorders | undefined { return this._f(ParagraphBorders); }
    /** Returns Shading. */
    public get shading(): Shading | undefined { return this._f(Shading); }
    /** Returns Tabs. */
    public get tabs(): Tabs | undefined { return this._f(Tabs); }
    /** Returns SuppressAutoHyphens. */
    public get suppressAutoHyphens(): SuppressAutoHyphens | undefined { return this._f(SuppressAutoHyphens); }
    /** Returns Kinsoku. */
    public get kinsoku(): Kinsoku | undefined { return this._f(Kinsoku); }
    /** Returns WordWrap. */
    public get wordWrap(): WordWrap | undefined { return this._f(WordWrap); }
    /** Returns OverflowPunctuation. */
    public get overflowPunctuation(): OverflowPunctuation | undefined { return this._f(OverflowPunctuation); }
    /** Returns TopLinePunctuation. */
    public get topLinePunctuation(): TopLinePunctuation | undefined { return this._f(TopLinePunctuation); }
    /** Returns AutoSpaceDE. */
    public get autoSpaceDE(): AutoSpaceDE | undefined { return this._f(AutoSpaceDE); }
    /** Returns AutoSpaceDN. */
    public get autoSpaceDN(): AutoSpaceDN | undefined { return this._f(AutoSpaceDN); }
    /** Returns BiDi. */
    public get biDi(): BiDi | undefined { return this._f(BiDi); }
    /** Returns AdjustRightIndent. */
    public get adjustRightIndent(): AdjustRightIndent | undefined { return this._f(AdjustRightIndent); }
    /** Returns SnapToGrid. */
    public get snapToGrid(): SnapToGrid | undefined { return this._f(SnapToGrid); }
    /** Returns SpacingBetweenLines. */
    public get spacingBetweenLines(): SpacingBetweenLines | undefined { return this._f(SpacingBetweenLines); }
    /** Returns Indentation. */
    public get indentation(): Indentation | undefined { return this._f(Indentation); }
    /** Returns ContextualSpacing. */
    public get contextualSpacing(): ContextualSpacing | undefined { return this._f(ContextualSpacing); }
    /** Returns MirrorIndents. */
    public get mirrorIndents(): MirrorIndents | undefined { return this._f(MirrorIndents); }
    /** Returns SuppressOverlap. */
    public get suppressOverlap(): SuppressOverlap | undefined { return this._f(SuppressOverlap); }
    /** Returns Justification. */
    public get justification(): Justification | undefined { return this._f(Justification); }
    /** Returns TextDirection. */
    public get textDirection(): TextDirection | undefined { return this._f(TextDirection); }
    /** Returns TextAlignment. */
    public get textAlignment(): TextAlignment | undefined { return this._f(TextAlignment); }
    /** Returns TextBoxTightWrap. */
    public get textBoxTightWrap(): TextBoxTightWrap | undefined { return this._f(TextBoxTightWrap); }
    /** Returns OutlineLevel. */
    public get outlineLevel(): OutlineLevel | undefined { return this._f(OutlineLevel); }
    /** Returns DivId. */
    public get divId(): DivId | undefined { return this._f(DivId); }
    /** Returns ConditionalFormatStyle. */
    public get conditionalFormatStyle(): ConditionalFormatStyle | undefined { return this._f(ConditionalFormatStyle); }
    /** Run Properties for the Paragraph Mark. */
    public get paragraphMarkRunProperties(): ParagraphMarkRunProperties | undefined { return this._f(ParagraphMarkRunProperties); }
    /** Section Properties. */
    public get sectionProperties(): SectionProperties | undefined { return this._f(SectionProperties); }
    /** Returns ParagraphPropertiesChange. */
    public get paragraphPropertiesChange(): ParagraphPropertiesChange | undefined { return this._f(ParagraphPropertiesChange); }

}
/** Revision Information for Table Row Properties. Serialized as `w:trPrChange` */
export class TableRowPropertiesChange extends OxmlCompositeElement<PreviousTableRowProperties> {

    public static override _Q = 'w:trPrChange';
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
    /** Previous Table Row Properties. */
    public get previousTableRowProperties(): PreviousTableRowProperties | undefined { return this._f(PreviousTableRowProperties); }

}
/** Table Row Properties. Serialized as `w:trPr` */
export class TableRowProperties extends OxmlCompositeElement<ConditionalFormatStyle | DivId | GridBefore | GridAfter | WidthBeforeTableRow | WidthAfterTableRow | TableRowHeight | Hidden | CantSplit | TableHeader | TableCellSpacing | TableJustification | Inserted | Deleted | TableRowPropertiesChange | W14ConflictInsertion | W14ConflictDeletion> {

    public static override _Q = 'w:trPr';

}
/** Table-Level Property Exceptions. Serialized as `w:tblPrEx` */
export class TablePropertyExceptions extends OxmlCompositeElement<TableWidth | TableJustification | TableCellSpacing | TableIndentation | TableBorders | Shading | TableLayout | TableCellMarginDefault | TableLook | TablePropertyExceptionsChange> {

    public static override _Q = 'w:tblPrEx';
    /** Preferred Table Width Exception. */
    public get tableWidth(): TableWidth | undefined { return this._f(TableWidth); }
    /** Table Alignment Exception. */
    public get tableJustification(): TableJustification | undefined { return this._f(TableJustification); }
    /** Table Cell Spacing Exception. */
    public get tableCellSpacing(): TableCellSpacing | undefined { return this._f(TableCellSpacing); }
    /** Table Indent from Leading Margin Exception. */
    public get tableIndentation(): TableIndentation | undefined { return this._f(TableIndentation); }
    /** Table Borders Exceptions. */
    public get tableBorders(): TableBorders | undefined { return this._f(TableBorders); }
    /** Table Shading Exception. */
    public get shading(): Shading | undefined { return this._f(Shading); }
    /** Table Layout Exception. */
    public get tableLayout(): TableLayout | undefined { return this._f(TableLayout); }
    /** Table Cell Margin Exceptions. */
    public get tableCellMarginDefault(): TableCellMarginDefault | undefined { return this._f(TableCellMarginDefault); }
    /** Table Style Conditional Formatting Settings Exception. */
    public get tableLook(): TableLook | undefined { return this._f(TableLook); }
    /** Revision Information for Table-Level Property Exceptions. */
    public get tablePropertyExceptionsChange(): TablePropertyExceptionsChange | undefined { return this._f(TablePropertyExceptionsChange); }

}
/** Defines the TableWidthDxaNilType Class. */
export abstract class TableWidthDxaNilType extends OxmlLeafElement {

    public static override _A = ['w:w','w:type',];
    /** w. Serialized as `w:w` */
    public get width(): Int16Value | undefined { return this._g('w:w'); }
    public set width(v: Int16Value | undefined) { this._s('w:w', v); }
    /** type. Serialized as `w:type` */
    public get type(): TableWidthValues | undefined { return this._g('w:type'); }
    public set type(v: TableWidthValues | undefined) { this._s('w:type', v); }

}
/** Table Cell Right Margin Default. Serialized as `w:right` */
export class TableCellRightMargin extends TableWidthDxaNilType {

    public static override _Q = 'w:right';

}
/** Table Cell Left Margin Default. Serialized as `w:left` */
export class TableCellLeftMargin extends TableWidthDxaNilType {

    public static override _Q = 'w:left';

}
/** Defines the CompatibilitySetting Class. Serialized as `w:compatSetting` */
export class CompatibilitySetting extends OxmlLeafElement {

    public static override _Q = 'w:compatSetting';
    public static override _A = ['w:name','w:uri','w:val',];
    /** name. Serialized as `w:name` */
    public get name(): CompatSettingNameValues | undefined { return this._g('w:name'); }
    public set name(v: CompatSettingNameValues | undefined) { this._s('w:name', v); }
    /** uri. Serialized as `w:uri` */
    public get uri(): StringValue | undefined { return this._g('w:uri'); }
    public set uri(v: StringValue | undefined) { this._s('w:uri', v); }
    /** val. Serialized as `w:val` */
    public get value(): StringValue | undefined { return this._g('w:val'); }
    public set value(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Glossary Document Entry. Serialized as `w:docPart` */
export class DocPart extends OxmlCompositeElement<DocPartProperties | DocPartBody> {

    public static override _Q = 'w:docPart';
    /** Glossary Document Entry Properties. */
    public get docPartProperties(): DocPartProperties | undefined { return this._f(DocPartProperties); }
    /** Contents of Glossary Document Entry. */
    public get docPartBody(): DocPartBody | undefined { return this._f(DocPartBody); }

}
/** Defines the BodyType Class. */
export abstract class BodyType extends OxmlCompositeElement<AltChunk | CustomXmlBlock | SdtBlock | Paragraph | Table | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | SectionProperties> {


}
/** Defines the Body Class. Serialized as `w:body` */
export class Body extends BodyType {

    public static override _Q = 'w:body';

}
/** Contents of Glossary Document Entry. Serialized as `w:docPartBody` */
export class DocPartBody extends BodyType {

    public static override _Q = 'w:docPartBody';

}
/** Glossary Document Entry Properties. Serialized as `w:docPartPr` */
export class DocPartProperties extends OxmlCompositeElement<DocPartName | StyleId | Category | DocPartTypes | Behaviors | Description | DocPartId> {

    public static override _Q = 'w:docPartPr';
    /** Entry Name. */
    public get docPartName(): DocPartName | undefined { return this._f(DocPartName); }
    /** Associated Paragraph Style Name. */
    public get styleId(): StyleId | undefined { return this._f(StyleId); }
    /** Entry Categorization. */
    public get category(): Category | undefined { return this._f(Category); }
    /** Entry Types. */
    public get docPartTypes(): DocPartTypes | undefined { return this._f(DocPartTypes); }
    /** Entry Insertion Behaviors. */
    public get behaviors(): Behaviors | undefined { return this._f(Behaviors); }
    /** Description for Entry. */
    public get description(): Description | undefined { return this._f(Description); }
    /** Entry ID. */
    public get docPartId(): DocPartId | undefined { return this._f(DocPartId); }

}
/** Entry ID. Serialized as `w:guid` */
export class DocPartId extends OxmlLeafElement {

    public static override _Q = 'w:guid';
    public static override _A = ['w:val',];
    /** GUID Value. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Entry Insertion Behaviors. Serialized as `w:behaviors` */
export class Behaviors extends OxmlCompositeElement<Behavior> {

    public static override _Q = 'w:behaviors';

}
/** Entry Types. Serialized as `w:types` */
export class DocPartTypes extends OxmlCompositeElement<DocPartType> {

    public static override _Q = 'w:types';
    public static override _A = ['w:all',];
    /** Entry Is Of All Types. Serialized as `w:all` */
    public get all(): OnOffValue | undefined { return this._g('w:all'); }
    public set all(v: OnOffValue | undefined) { this._s('w:all', v); }

}
/** Entry Categorization. Serialized as `w:category` */
export class Category extends OxmlCompositeElement<Name | Gallery> {

    public static override _Q = 'w:category';
    /** Category Associated With Entry. */
    public get name(): Name | undefined { return this._f(Name); }
    /** Gallery Associated With Entry. */
    public get gallery(): Gallery | undefined { return this._f(Gallery); }

}
/** Entry Name. Serialized as `w:name` */
export class DocPartName extends OxmlLeafElement {

    public static override _Q = 'w:name';
    public static override _A = ['w:val','w:decorated',];
    /** Name Value. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }
    /** Built-In Entry. Serialized as `w:decorated` */
    public get decorated(): OnOffValue | undefined { return this._g('w:decorated'); }
    public set decorated(v: OnOffValue | undefined) { this._s('w:decorated', v); }

}
/** List of Glossary Document Entries. Serialized as `w:docParts` */
export class DocParts extends OxmlCompositeElement<DocPart> {

    public static override _Q = 'w:docParts';

}
/** Document Background. Serialized as `w:background` */
export class DocumentBackground extends OxmlCompositeElement<VBackground> {

    public static override _Q = 'w:background';
    public static override _A = ['w:color','w:themeColor','w:themeTint','w:themeShade',];
    /** color. Serialized as `w:color` */
    public get color(): StringValue | undefined { return this._g('w:color'); }
    public set color(v: StringValue | undefined) { this._s('w:color', v); }
    /** themeColor. Serialized as `w:themeColor` */
    public get themeColor(): ThemeColorValues | undefined { return this._g('w:themeColor'); }
    public set themeColor(v: ThemeColorValues | undefined) { this._s('w:themeColor', v); }
    /** themeTint. Serialized as `w:themeTint` */
    public get themeTint(): StringValue | undefined { return this._g('w:themeTint'); }
    public set themeTint(v: StringValue | undefined) { this._s('w:themeTint', v); }
    /** themeShade. Serialized as `w:themeShade` */
    public get themeShade(): StringValue | undefined { return this._g('w:themeShade'); }
    public set themeShade(v: StringValue | undefined) { this._s('w:themeShade', v); }
    /** Returns VBackground. */
    public get background(): VBackground | undefined { return this._f(VBackground); }

}
/** Automatic Captioning Settings. Serialized as `w:autoCaptions` */
export class AutoCaptions extends OxmlCompositeElement<AutoCaption> {

    public static override _Q = 'w:autoCaptions';

}
/** Single Caption Type Definition. Serialized as `w:caption` */
export class Caption extends OxmlLeafElement {

    public static override _Q = 'w:caption';
    public static override _A = ['w:name','w:pos','w:chapNum','w:heading','w:noLabel','w:numFmt','w:sep',];
    /** Caption Type Name. Serialized as `w:name` */
    public get name(): StringValue | undefined { return this._g('w:name'); }
    public set name(v: StringValue | undefined) { this._s('w:name', v); }
    /** Automatic Caption Placement. Serialized as `w:pos` */
    public get position(): CaptionPositionValues | undefined { return this._g('w:pos'); }
    public set position(v: CaptionPositionValues | undefined) { this._s('w:pos', v); }
    /** Include Chapter Number in Field for Caption. Serialized as `w:chapNum` */
    public get chapterNumber(): OnOffValue | undefined { return this._g('w:chapNum'); }
    public set chapterNumber(v: OnOffValue | undefined) { this._s('w:chapNum', v); }
    /** Style for Chapter Headings. Serialized as `w:heading` */
    public get heading(): Int32Value | undefined { return this._g('w:heading'); }
    public set heading(v: Int32Value | undefined) { this._s('w:heading', v); }
    /** Do Not Include Name In Caption. Serialized as `w:noLabel` */
    public get noLabel(): OnOffValue | undefined { return this._g('w:noLabel'); }
    public set noLabel(v: OnOffValue | undefined) { this._s('w:noLabel', v); }
    /** Caption Numbering Format. Serialized as `w:numFmt` */
    public get numberFormat(): NumberFormatValues | undefined { return this._g('w:numFmt'); }
    public set numberFormat(v: NumberFormatValues | undefined) { this._s('w:numFmt', v); }
    /** Chapter Number/Item Index Separator. Serialized as `w:sep` */
    public get separator(): ChapterSeparatorValues | undefined { return this._g('w:sep'); }
    public set separator(v: ChapterSeparatorValues | undefined) { this._s('w:sep', v); }

}
/** Single Automatic Captioning Setting. Serialized as `w:autoCaption` */
export class AutoCaption extends OxmlLeafElement {

    public static override _Q = 'w:autoCaption';
    public static override _A = ['w:name','w:caption',];
    /** Identifier of Object to be Automatically Captioned. Serialized as `w:name` */
    public get name(): StringValue | undefined { return this._g('w:name'); }
    public set name(v: StringValue | undefined) { this._s('w:name', v); }
    /** Caption Used for Automatic Captioning. Serialized as `w:caption` */
    public get caption(): StringValue | undefined { return this._g('w:caption'); }
    public set caption(v: StringValue | undefined) { this._s('w:caption', v); }

}
/** Gallery Associated With Entry. Serialized as `w:gallery` */
export class Gallery extends OxmlLeafElement {

    public static override _Q = 'w:gallery';
    public static override _A = ['w:val',];
    /** Gallery Value. Serialized as `w:val` */
    public get val(): DocPartGalleryValues | undefined { return this._g('w:val'); }
    public set val(v: DocPartGalleryValues | undefined) { this._s('w:val', v); }

}
/** Entry Type. Serialized as `w:type` */
export class DocPartType extends OxmlLeafElement {

    public static override _Q = 'w:type';
    public static override _A = ['w:val',];
    /** Type Value. Serialized as `w:val` */
    public get val(): DocPartValues | undefined { return this._g('w:val'); }
    public set val(v: DocPartValues | undefined) { this._s('w:val', v); }

}
/** Entry Insertion Behavior. Serialized as `w:behavior` */
export class Behavior extends OxmlLeafElement {

    public static override _Q = 'w:behavior';
    public static override _A = ['w:val',];
    /** Insertion Behavior Value. Serialized as `w:val` */
    public get val(): DocPartBehaviorValues | undefined { return this._g('w:val'); }
    public set val(v: DocPartBehaviorValues | undefined) { this._s('w:val', v); }

}
/** Defines the FootnoteEndnoteType Class. */
export abstract class FootnoteEndnoteType extends OxmlCompositeElement<AltChunk | CustomXmlBlock | SdtBlock | Paragraph | Table | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {

    public static override _A = ['w:type','w:id',];
    /** Footnote/Endnote Type. Serialized as `w:type` */
    public get type(): FootnoteEndnoteValues | undefined { return this._g('w:type'); }
    public set type(v: FootnoteEndnoteValues | undefined) { this._s('w:type', v); }
    /** Footnote/Endnote ID. Serialized as `w:id` */
    public get id(): IntegerValue | undefined { return this._g('w:id'); }
    public set id(v: IntegerValue | undefined) { this._s('w:id', v); }

}
/** Endnote Content. Serialized as `w:endnote` */
export class Endnote extends FootnoteEndnoteType {

    public static override _Q = 'w:endnote';

}
/** Footnote Content. Serialized as `w:footnote` */
export class Footnote extends FootnoteEndnoteType {

    public static override _Q = 'w:footnote';

}
/** Comment Content. Serialized as `w:comment` */
export class Comment extends OxmlCompositeElement<AltChunk | CustomXmlBlock | SdtBlock | Paragraph | Table | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd> {

    public static override _Q = 'w:comment';
    public static override _A = ['w:initials','w:author','w:date','w16du:dateUtc','w:id',];
    /** initials. Serialized as `w:initials` */
    public get initials(): StringValue | undefined { return this._g('w:initials'); }
    public set initials(v: StringValue | undefined) { this._s('w:initials', v); }
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
/** Information About Single HTML div Element. Serialized as `w:div` */
export class Div extends OxmlCompositeElement<BlockQuote | BodyDiv | LeftMarginDiv | RightMarginDiv | TopMarginDiv | BottomMarginDiv | DivBorder | DivsChild> {

    public static override _Q = 'w:div';
    public static override _A = ['w:id',];
    /** div Data ID. Serialized as `w:id` */
    public get id(): StringValue | undefined { return this._g('w:id'); }
    public set id(v: StringValue | undefined) { this._s('w:id', v); }
    /** Data for HTML blockquote Element. */
    public get blockQuote(): BlockQuote | undefined { return this._f(BlockQuote); }
    /** Data for HTML body Element. */
    public get bodyDiv(): BodyDiv | undefined { return this._f(BodyDiv); }
    /** Left Margin for HTML div. */
    public get leftMarginDiv(): LeftMarginDiv | undefined { return this._f(LeftMarginDiv); }
    /** Right Margin for HTML div. */
    public get rightMarginDiv(): RightMarginDiv | undefined { return this._f(RightMarginDiv); }
    /** Top Margin for HTML div. */
    public get topMarginDiv(): TopMarginDiv | undefined { return this._f(TopMarginDiv); }
    /** Bottom Margin for HTML div. */
    public get bottomMarginDiv(): BottomMarginDiv | undefined { return this._f(BottomMarginDiv); }
    /** Set of Borders for HTML div. */
    public get divBorder(): DivBorder | undefined { return this._f(DivBorder); }

}
/** Defines the DivsType Class. */
export abstract class DivsType extends OxmlCompositeElement<Div> {


}
/** Defines the Divs Class. Serialized as `w:divs` */
export class Divs extends DivsType {

    public static override _Q = 'w:divs';

}
/** Child div Elements Contained within Current div. Serialized as `w:divsChild` */
export class DivsChild extends DivsType {

    public static override _Q = 'w:divsChild';

}
/** Set of Borders for HTML div. Serialized as `w:divBdr` */
export class DivBorder extends OxmlCompositeElement<TopBorder | LeftBorder | BottomBorder | RightBorder> {

    public static override _Q = 'w:divBdr';
    /** Top Border for HTML div. */
    public get topBorder(): TopBorder | undefined { return this._f(TopBorder); }
    /** Left Border for HTML div. */
    public get leftBorder(): LeftBorder | undefined { return this._f(LeftBorder); }
    /** Bottom Border for HTML div. */
    public get bottomBorder(): BottomBorder | undefined { return this._f(BottomBorder); }
    /** Right Border for HTML div. */
    public get rightBorder(): RightBorder | undefined { return this._f(RightBorder); }

}
/** Defines the SignedTwipsMeasureType Class. */
export abstract class SignedTwipsMeasureType extends OxmlLeafElement {

    public static override _A = ['w:val',];
    /** Positive or Negative Value in Twentieths of a Point. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Bottom Margin for HTML div. Serialized as `w:marBottom` */
export class BottomMarginDiv extends SignedTwipsMeasureType {

    public static override _Q = 'w:marBottom';

}
/** Top Margin for HTML div. Serialized as `w:marTop` */
export class TopMarginDiv extends SignedTwipsMeasureType {

    public static override _Q = 'w:marTop';

}
/** Right Margin for HTML div. Serialized as `w:marRight` */
export class RightMarginDiv extends SignedTwipsMeasureType {

    public static override _Q = 'w:marRight';

}
/** Left Margin for HTML div. Serialized as `w:marLeft` */
export class LeftMarginDiv extends SignedTwipsMeasureType {

    public static override _Q = 'w:marLeft';

}
/** Properties for a Single Font. Serialized as `w:font` */
export class Font extends OxmlCompositeElement<AltName | Panose1Number | FontCharSet | FontFamily | NotTrueType | Pitch | FontSignature | EmbedRegularFont | EmbedBoldFont | EmbedItalicFont | EmbedBoldItalicFont> {

    public static override _Q = 'w:font';
    public static override _A = ['w:name',];
    /** name. Serialized as `w:name` */
    public get name(): StringValue | undefined { return this._g('w:name'); }
    public set name(v: StringValue | undefined) { this._s('w:name', v); }
    /** Returns AltName. */
    public get altName(): AltName | undefined { return this._f(AltName); }
    /** Returns Panose1Number. */
    public get panose1Number(): Panose1Number | undefined { return this._f(Panose1Number); }
    /** Returns FontCharSet. */
    public get fontCharSet(): FontCharSet | undefined { return this._f(FontCharSet); }
    /** Returns FontFamily. */
    public get fontFamily(): FontFamily | undefined { return this._f(FontFamily); }
    /** Returns NotTrueType. */
    public get notTrueType(): NotTrueType | undefined { return this._f(NotTrueType); }
    /** Returns Pitch. */
    public get pitch(): Pitch | undefined { return this._f(Pitch); }
    /** Returns FontSignature. */
    public get fontSignature(): FontSignature | undefined { return this._f(FontSignature); }
    /** Returns EmbedRegularFont. */
    public get embedRegularFont(): EmbedRegularFont | undefined { return this._f(EmbedRegularFont); }
    /** Returns EmbedBoldFont. */
    public get embedBoldFont(): EmbedBoldFont | undefined { return this._f(EmbedBoldFont); }
    /** Returns EmbedItalicFont. */
    public get embedItalicFont(): EmbedItalicFont | undefined { return this._f(EmbedItalicFont); }
    /** Returns EmbedBoldItalicFont. */
    public get embedBoldItalicFont(): EmbedBoldItalicFont | undefined { return this._f(EmbedBoldItalicFont); }

}
/** Style Definition. Serialized as `w:style` */
export class Style extends OxmlCompositeElement<StyleName | Aliases | BasedOn | NextParagraphStyle | LinkedStyle | AutoRedefine | StyleHidden | UIPriority | SemiHidden | UnhideWhenUsed | PrimaryStyle | Locked | Personal | PersonalCompose | PersonalReply | Rsid | StyleParagraphProperties | StyleRunProperties | StyleTableProperties | TableStyleConditionalFormattingTableRowProperties | StyleTableCellProperties | TableStyleProperties> {

    public static override _Q = 'w:style';
    public static override _A = ['w:type','w:styleId','w:default','w:customStyle',];
    /** Style Type. Serialized as `w:type` */
    public get type(): StyleValues | undefined { return this._g('w:type'); }
    public set type(v: StyleValues | undefined) { this._s('w:type', v); }
    /** Style ID. Serialized as `w:styleId` */
    public get styleId(): StringValue | undefined { return this._g('w:styleId'); }
    public set styleId(v: StringValue | undefined) { this._s('w:styleId', v); }
    /** Default Style. Serialized as `w:default` */
    public get default(): OnOffValue | undefined { return this._g('w:default'); }
    public set default(v: OnOffValue | undefined) { this._s('w:default', v); }
    /** User-Defined Style. Serialized as `w:customStyle` */
    public get customStyle(): OnOffValue | undefined { return this._g('w:customStyle'); }
    public set customStyle(v: OnOffValue | undefined) { this._s('w:customStyle', v); }
    /** Primary Style Name. */
    public get styleName(): StyleName | undefined { return this._f(StyleName); }
    /** Alternate Style Names. */
    public get aliases(): Aliases | undefined { return this._f(Aliases); }
    /** Parent Style ID. */
    public get basedOn(): BasedOn | undefined { return this._f(BasedOn); }
    /** Style For Next Paragraph. */
    public get nextParagraphStyle(): NextParagraphStyle | undefined { return this._f(NextParagraphStyle); }
    /** Linked Style Reference. */
    public get linkedStyle(): LinkedStyle | undefined { return this._f(LinkedStyle); }
    /** Automatically Merge User Formatting Into Style Definition. */
    public get autoRedefine(): AutoRedefine | undefined { return this._f(AutoRedefine); }
    /** Hide Style From User Interface. */
    public get styleHidden(): StyleHidden | undefined { return this._f(StyleHidden); }
    /** Optional User Interface Sorting Order. */
    public get uIPriority(): UIPriority | undefined { return this._f(UIPriority); }
    /** Hide Style From Main User Interface. */
    public get semiHidden(): SemiHidden | undefined { return this._f(SemiHidden); }
    /** Remove Semi-Hidden Property When Style Is Used. */
    public get unhideWhenUsed(): UnhideWhenUsed | undefined { return this._f(UnhideWhenUsed); }
    /** Primary Style. */
    public get primaryStyle(): PrimaryStyle | undefined { return this._f(PrimaryStyle); }
    /** Style Cannot Be Applied. */
    public get locked(): Locked | undefined { return this._f(Locked); }
    /** E-Mail Message Text Style. */
    public get personal(): Personal | undefined { return this._f(Personal); }
    /** E-Mail Message Composition Style. */
    public get personalCompose(): PersonalCompose | undefined { return this._f(PersonalCompose); }
    /** E-Mail Message Reply Style. */
    public get personalReply(): PersonalReply | undefined { return this._f(PersonalReply); }
    /** Revision Identifier for Style Definition. */
    public get rsid(): Rsid | undefined { return this._f(Rsid); }
    /** Style Paragraph Properties. */
    public get styleParagraphProperties(): StyleParagraphProperties | undefined { return this._f(StyleParagraphProperties); }
    /** Run Properties. */
    public get styleRunProperties(): StyleRunProperties | undefined { return this._f(StyleRunProperties); }
    /** Style Table Properties. */
    public get styleTableProperties(): StyleTableProperties | undefined { return this._f(StyleTableProperties); }
    /** Style Table Row Properties. */
    public get tableStyleConditionalFormattingTableRowProperties(): TableStyleConditionalFormattingTableRowProperties | undefined { return this._f(TableStyleConditionalFormattingTableRowProperties); }
    /** Style Table Cell Properties. */
    public get styleTableCellProperties(): StyleTableCellProperties | undefined { return this._f(StyleTableCellProperties); }

}
/** Latent Style Information. Serialized as `w:latentStyles` */
export class LatentStyles extends OxmlCompositeElement<LatentStyleExceptionInfo> {

    public static override _Q = 'w:latentStyles';
    public static override _A = ['w:defLockedState','w:defUIPriority','w:defSemiHidden','w:defUnhideWhenUsed','w:defQFormat','w:count',];
    /** Default Style Locking Setting. Serialized as `w:defLockedState` */
    public get defaultLockedState(): OnOffValue | undefined { return this._g('w:defLockedState'); }
    public set defaultLockedState(v: OnOffValue | undefined) { this._s('w:defLockedState', v); }
    /** Default User Interface Priority Setting. Serialized as `w:defUIPriority` */
    public get defaultUiPriority(): Int32Value | undefined { return this._g('w:defUIPriority'); }
    public set defaultUiPriority(v: Int32Value | undefined) { this._s('w:defUIPriority', v); }
    /** Default Semi-Hidden Setting. Serialized as `w:defSemiHidden` */
    public get defaultSemiHidden(): OnOffValue | undefined { return this._g('w:defSemiHidden'); }
    public set defaultSemiHidden(v: OnOffValue | undefined) { this._s('w:defSemiHidden', v); }
    /** Default Hidden Until Used Setting. Serialized as `w:defUnhideWhenUsed` */
    public get defaultUnhideWhenUsed(): OnOffValue | undefined { return this._g('w:defUnhideWhenUsed'); }
    public set defaultUnhideWhenUsed(v: OnOffValue | undefined) { this._s('w:defUnhideWhenUsed', v); }
    /** Default Primary Style Setting. Serialized as `w:defQFormat` */
    public get defaultPrimaryStyle(): OnOffValue | undefined { return this._g('w:defQFormat'); }
    public set defaultPrimaryStyle(v: OnOffValue | undefined) { this._s('w:defQFormat', v); }
    /** Latent Style Count. Serialized as `w:count` */
    public get count(): Int32Value | undefined { return this._g('w:count'); }
    public set count(v: Int32Value | undefined) { this._s('w:count', v); }

}
/** Document Default Paragraph and Run Properties. Serialized as `w:docDefaults` */
export class DocDefaults extends OxmlCompositeElement<RunPropertiesDefault | ParagraphPropertiesDefault> {

    public static override _Q = 'w:docDefaults';
    /** Default Run Properties. */
    public get runPropertiesDefault(): RunPropertiesDefault | undefined { return this._f(RunPropertiesDefault); }
    /** Default Paragraph Properties. */
    public get paragraphPropertiesDefault(): ParagraphPropertiesDefault | undefined { return this._f(ParagraphPropertiesDefault); }

}
/** Latent Style Exception. Serialized as `w:lsdException` */
export class LatentStyleExceptionInfo extends OxmlLeafElement {

    public static override _Q = 'w:lsdException';
    public static override _A = ['w:name','w:locked','w:uiPriority','w:semiHidden','w:unhideWhenUsed','w:qFormat',];
    /** Primary Style Name. Serialized as `w:name` */
    public get name(): StringValue | undefined { return this._g('w:name'); }
    public set name(v: StringValue | undefined) { this._s('w:name', v); }
    /** Latent Style Locking Setting. Serialized as `w:locked` */
    public get locked(): OnOffValue | undefined { return this._g('w:locked'); }
    public set locked(v: OnOffValue | undefined) { this._s('w:locked', v); }
    /** Override default sorting order. Serialized as `w:uiPriority` */
    public get uiPriority(): Int32Value | undefined { return this._g('w:uiPriority'); }
    public set uiPriority(v: Int32Value | undefined) { this._s('w:uiPriority', v); }
    /** Semi hidden text override. Serialized as `w:semiHidden` */
    public get semiHidden(): OnOffValue | undefined { return this._g('w:semiHidden'); }
    public set semiHidden(v: OnOffValue | undefined) { this._s('w:semiHidden', v); }
    /** Unhide when used. Serialized as `w:unhideWhenUsed` */
    public get unhideWhenUsed(): OnOffValue | undefined { return this._g('w:unhideWhenUsed'); }
    public set unhideWhenUsed(v: OnOffValue | undefined) { this._s('w:unhideWhenUsed', v); }
    /** Latent Style Primary Style Setting. Serialized as `w:qFormat` */
    public get primaryStyle(): OnOffValue | undefined { return this._g('w:qFormat'); }
    public set primaryStyle(v: OnOffValue | undefined) { this._s('w:qFormat', v); }

}
/** Style Conditional Table Formatting Properties. Serialized as `w:tblStylePr` */
export class TableStyleProperties extends OxmlCompositeElement<StyleParagraphProperties | RunPropertiesBaseStyle | TableStyleConditionalFormattingTableProperties | TableStyleConditionalFormattingTableRowProperties | TableStyleConditionalFormattingTableCellProperties> {

    public static override _Q = 'w:tblStylePr';
    public static override _A = ['w:type',];
    /** Table Style Conditional Formatting Type. Serialized as `w:type` */
    public get type(): TableStyleOverrideValues | undefined { return this._g('w:type'); }
    public set type(v: TableStyleOverrideValues | undefined) { this._s('w:type', v); }
    /** Table Style Conditional Formatting Paragraph Properties. */
    public get styleParagraphProperties(): StyleParagraphProperties | undefined { return this._f(StyleParagraphProperties); }
    /** Table Style Conditional Formatting Run Properties. */
    public get runPropertiesBaseStyle(): RunPropertiesBaseStyle | undefined { return this._f(RunPropertiesBaseStyle); }
    /** Table Style Conditional Formatting Table Properties. */
    public get tableStyleConditionalFormattingTableProperties(): TableStyleConditionalFormattingTableProperties | undefined { return this._f(TableStyleConditionalFormattingTableProperties); }
    /** Table Style Conditional Formatting Table Row Properties. */
    public get tableStyleConditionalFormattingTableRowProperties(): TableStyleConditionalFormattingTableRowProperties | undefined { return this._f(TableStyleConditionalFormattingTableRowProperties); }
    /** Table Style Conditional Formatting Table Cell Properties. */
    public get tableStyleConditionalFormattingTableCellProperties(): TableStyleConditionalFormattingTableCellProperties | undefined { return this._f(TableStyleConditionalFormattingTableCellProperties); }

}
/** Style Table Cell Properties. Serialized as `w:tcPr` */
export class StyleTableCellProperties extends OxmlCompositeElement<Shading | NoWrap | TableCellMargin | TableCellVerticalAlignment> {

    public static override _Q = 'w:tcPr';
    /** Returns Shading. */
    public get shading(): Shading | undefined { return this._f(Shading); }
    /** Returns NoWrap. */
    public get noWrap(): NoWrap | undefined { return this._f(NoWrap); }
    /** Returns TableCellMargin. */
    public get tableCellMargin(): TableCellMargin | undefined { return this._f(TableCellMargin); }
    /** Returns TableCellVerticalAlignment. */
    public get tableCellVerticalAlignment(): TableCellVerticalAlignment | undefined { return this._f(TableCellVerticalAlignment); }

}
/** Style Table Properties. Serialized as `w:tblPr` */
export class StyleTableProperties extends OxmlCompositeElement<TableStyleRowBandSize | TableStyleColumnBandSize | TableJustification | TableCellSpacing | TableIndentation | TableBorders | Shading | TableCellMarginDefault> {

    public static override _Q = 'w:tblPr';
    /** Returns TableStyleRowBandSize. */
    public get tableStyleRowBandSize(): TableStyleRowBandSize | undefined { return this._f(TableStyleRowBandSize); }
    /** Returns TableStyleColumnBandSize. */
    public get tableStyleColumnBandSize(): TableStyleColumnBandSize | undefined { return this._f(TableStyleColumnBandSize); }
    /** Returns TableJustification. */
    public get tableJustification(): TableJustification | undefined { return this._f(TableJustification); }
    /** Returns TableCellSpacing. */
    public get tableCellSpacing(): TableCellSpacing | undefined { return this._f(TableCellSpacing); }
    /** Returns TableIndentation. */
    public get tableIndentation(): TableIndentation | undefined { return this._f(TableIndentation); }
    /** Returns TableBorders. */
    public get tableBorders(): TableBorders | undefined { return this._f(TableBorders); }
    /** Returns Shading. */
    public get shading(): Shading | undefined { return this._f(Shading); }
    /** Returns TableCellMarginDefault. */
    public get tableCellMarginDefault(): TableCellMarginDefault | undefined { return this._f(TableCellMarginDefault); }

}
/** Run Properties. Serialized as `w:rPr` */
export class StyleRunProperties extends OxmlCompositeElement<RunFonts | Bold | BoldComplexScript | Italic | ItalicComplexScript | Caps | SmallCaps | Strike | DoubleStrike | Outline | Shadow | Emboss | Imprint | NoProof | SnapToGrid | Vanish | WebHidden | Color | Spacing | CharacterScale | Kern | Position | FontSize | FontSizeComplexScript | Underline | TextEffect | Border | Shading | FitText | VerticalTextAlignment | Emphasis | Languages | EastAsianLayout | SpecVanish | RunPropertiesChange> {

    public static override _Q = 'w:rPr';
    /** Returns RunFonts. */
    public get runFonts(): RunFonts | undefined { return this._f(RunFonts); }
    /** Returns Bold. */
    public get bold(): Bold | undefined { return this._f(Bold); }
    /** Returns BoldComplexScript. */
    public get boldComplexScript(): BoldComplexScript | undefined { return this._f(BoldComplexScript); }
    /** Returns Italic. */
    public get italic(): Italic | undefined { return this._f(Italic); }
    /** Returns ItalicComplexScript. */
    public get italicComplexScript(): ItalicComplexScript | undefined { return this._f(ItalicComplexScript); }
    /** Returns Caps. */
    public get caps(): Caps | undefined { return this._f(Caps); }
    /** Returns SmallCaps. */
    public get smallCaps(): SmallCaps | undefined { return this._f(SmallCaps); }
    /** Returns Strike. */
    public get strike(): Strike | undefined { return this._f(Strike); }
    /** Returns DoubleStrike. */
    public get doubleStrike(): DoubleStrike | undefined { return this._f(DoubleStrike); }
    /** Returns Outline. */
    public get outline(): Outline | undefined { return this._f(Outline); }
    /** Returns Shadow. */
    public get shadow(): Shadow | undefined { return this._f(Shadow); }
    /** Returns Emboss. */
    public get emboss(): Emboss | undefined { return this._f(Emboss); }
    /** Returns Imprint. */
    public get imprint(): Imprint | undefined { return this._f(Imprint); }
    /** Returns NoProof. */
    public get noProof(): NoProof | undefined { return this._f(NoProof); }
    /** Returns SnapToGrid. */
    public get snapToGrid(): SnapToGrid | undefined { return this._f(SnapToGrid); }
    /** Returns Vanish. */
    public get vanish(): Vanish | undefined { return this._f(Vanish); }
    /** Returns WebHidden. */
    public get webHidden(): WebHidden | undefined { return this._f(WebHidden); }
    /** Returns Color. */
    public get color(): Color | undefined { return this._f(Color); }
    /** Returns Spacing. */
    public get spacing(): Spacing | undefined { return this._f(Spacing); }
    /** Returns CharacterScale. */
    public get characterScale(): CharacterScale | undefined { return this._f(CharacterScale); }
    /** Returns Kern. */
    public get kern(): Kern | undefined { return this._f(Kern); }
    /** Returns Position. */
    public get position(): Position | undefined { return this._f(Position); }
    /** Returns FontSize. */
    public get fontSize(): FontSize | undefined { return this._f(FontSize); }
    /** Returns FontSizeComplexScript. */
    public get fontSizeComplexScript(): FontSizeComplexScript | undefined { return this._f(FontSizeComplexScript); }
    /** Returns Underline. */
    public get underline(): Underline | undefined { return this._f(Underline); }
    /** Returns TextEffect. */
    public get textEffect(): TextEffect | undefined { return this._f(TextEffect); }
    /** Returns Border. */
    public get border(): Border | undefined { return this._f(Border); }
    /** Returns Shading. */
    public get shading(): Shading | undefined { return this._f(Shading); }
    /** Returns FitText. */
    public get fitText(): FitText | undefined { return this._f(FitText); }
    /** Returns VerticalTextAlignment. */
    public get verticalTextAlignment(): VerticalTextAlignment | undefined { return this._f(VerticalTextAlignment); }
    /** Returns Emphasis. */
    public get emphasis(): Emphasis | undefined { return this._f(Emphasis); }
    /** Returns Languages. */
    public get languages(): Languages | undefined { return this._f(Languages); }
    /** Returns EastAsianLayout. */
    public get eastAsianLayout(): EastAsianLayout | undefined { return this._f(EastAsianLayout); }
    /** Returns SpecVanish. */
    public get specVanish(): SpecVanish | undefined { return this._f(SpecVanish); }
    /** Returns RunPropertiesChange. */
    public get runPropertiesChange(): RunPropertiesChange | undefined { return this._f(RunPropertiesChange); }

}
/** Optional User Interface Sorting Order. Serialized as `w:uiPriority` */
export class UIPriority extends OxmlLeafElement {

    public static override _Q = 'w:uiPriority';
    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): Int32Value | undefined { return this._g('w:val'); }
    public set val(v: Int32Value | undefined) { this._s('w:val', v); }

}
/** Primary Style Name. Serialized as `w:name` */
export class StyleName extends OxmlLeafElement {

    public static override _Q = 'w:name';
    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Table Style Conditional Formatting Table Cell Properties. Serialized as `w:tcPr` */
export class TableStyleConditionalFormattingTableCellProperties extends OxmlCompositeElement<TableCellBorders | Shading | NoWrap | TableCellMargin | TableCellVerticalAlignment> {

    public static override _Q = 'w:tcPr';
    /** Returns TableCellBorders. */
    public get tableCellBorders(): TableCellBorders | undefined { return this._f(TableCellBorders); }
    /** Returns Shading. */
    public get shading(): Shading | undefined { return this._f(Shading); }
    /** Returns NoWrap. */
    public get noWrap(): NoWrap | undefined { return this._f(NoWrap); }
    /** Returns TableCellMargin. */
    public get tableCellMargin(): TableCellMargin | undefined { return this._f(TableCellMargin); }
    /** Returns TableCellVerticalAlignment. */
    public get tableCellVerticalAlignment(): TableCellVerticalAlignment | undefined { return this._f(TableCellVerticalAlignment); }

}
/** Table Style Conditional Formatting Table Row Properties. Serialized as `w:trPr` */
export class TableStyleConditionalFormattingTableRowProperties extends OxmlCompositeElement<Hidden | CantSplit | TableHeader | TableCellSpacing | TableJustification> {

    public static override _Q = 'w:trPr';

}
/** Table Style Conditional Formatting Table Properties. Serialized as `w:tblPr` */
export class TableStyleConditionalFormattingTableProperties extends OxmlCompositeElement<TableJustification | TableCellSpacing | TableIndentation | TableBorders | Shading | TableCellMarginDefault> {

    public static override _Q = 'w:tblPr';
    /** Returns TableJustification. */
    public get tableJustification(): TableJustification | undefined { return this._f(TableJustification); }
    /** Returns TableCellSpacing. */
    public get tableCellSpacing(): TableCellSpacing | undefined { return this._f(TableCellSpacing); }
    /** Returns TableIndentation. */
    public get tableIndentation(): TableIndentation | undefined { return this._f(TableIndentation); }
    /** Returns TableBorders. */
    public get tableBorders(): TableBorders | undefined { return this._f(TableBorders); }
    /** Returns Shading. */
    public get shading(): Shading | undefined { return this._f(Shading); }
    /** Returns TableCellMarginDefault. */
    public get tableCellMarginDefault(): TableCellMarginDefault | undefined { return this._f(TableCellMarginDefault); }

}
/** Table Style Conditional Formatting Paragraph Properties. Serialized as `w:pPr` */
export class StyleParagraphProperties extends OxmlCompositeElement<KeepNext | KeepLines | PageBreakBefore | FrameProperties | WidowControl | NumberingProperties | SuppressLineNumbers | ParagraphBorders | Shading | Tabs | SuppressAutoHyphens | Kinsoku | WordWrap | OverflowPunctuation | TopLinePunctuation | AutoSpaceDE | AutoSpaceDN | BiDi | AdjustRightIndent | SnapToGrid | SpacingBetweenLines | Indentation | ContextualSpacing | MirrorIndents | SuppressOverlap | Justification | TextDirection | TextAlignment | TextBoxTightWrap | OutlineLevel | ParagraphPropertiesChange> {

    public static override _Q = 'w:pPr';
    /** Returns KeepNext. */
    public get keepNext(): KeepNext | undefined { return this._f(KeepNext); }
    /** Returns KeepLines. */
    public get keepLines(): KeepLines | undefined { return this._f(KeepLines); }
    /** Returns PageBreakBefore. */
    public get pageBreakBefore(): PageBreakBefore | undefined { return this._f(PageBreakBefore); }
    /** Returns FrameProperties. */
    public get frameProperties(): FrameProperties | undefined { return this._f(FrameProperties); }
    /** Returns WidowControl. */
    public get widowControl(): WidowControl | undefined { return this._f(WidowControl); }
    /** Returns NumberingProperties. */
    public get numberingProperties(): NumberingProperties | undefined { return this._f(NumberingProperties); }
    /** Returns SuppressLineNumbers. */
    public get suppressLineNumbers(): SuppressLineNumbers | undefined { return this._f(SuppressLineNumbers); }
    /** Returns ParagraphBorders. */
    public get paragraphBorders(): ParagraphBorders | undefined { return this._f(ParagraphBorders); }
    /** Returns Shading. */
    public get shading(): Shading | undefined { return this._f(Shading); }
    /** Returns Tabs. */
    public get tabs(): Tabs | undefined { return this._f(Tabs); }
    /** Returns SuppressAutoHyphens. */
    public get suppressAutoHyphens(): SuppressAutoHyphens | undefined { return this._f(SuppressAutoHyphens); }
    /** Returns Kinsoku. */
    public get kinsoku(): Kinsoku | undefined { return this._f(Kinsoku); }
    /** Returns WordWrap. */
    public get wordWrap(): WordWrap | undefined { return this._f(WordWrap); }
    /** Returns OverflowPunctuation. */
    public get overflowPunctuation(): OverflowPunctuation | undefined { return this._f(OverflowPunctuation); }
    /** Returns TopLinePunctuation. */
    public get topLinePunctuation(): TopLinePunctuation | undefined { return this._f(TopLinePunctuation); }
    /** Returns AutoSpaceDE. */
    public get autoSpaceDE(): AutoSpaceDE | undefined { return this._f(AutoSpaceDE); }
    /** Returns AutoSpaceDN. */
    public get autoSpaceDN(): AutoSpaceDN | undefined { return this._f(AutoSpaceDN); }
    /** Returns BiDi. */
    public get biDi(): BiDi | undefined { return this._f(BiDi); }
    /** Returns AdjustRightIndent. */
    public get adjustRightIndent(): AdjustRightIndent | undefined { return this._f(AdjustRightIndent); }
    /** Returns SnapToGrid. */
    public get snapToGrid(): SnapToGrid | undefined { return this._f(SnapToGrid); }
    /** Returns SpacingBetweenLines. */
    public get spacingBetweenLines(): SpacingBetweenLines | undefined { return this._f(SpacingBetweenLines); }
    /** Returns Indentation. */
    public get indentation(): Indentation | undefined { return this._f(Indentation); }
    /** Returns ContextualSpacing. */
    public get contextualSpacing(): ContextualSpacing | undefined { return this._f(ContextualSpacing); }
    /** Returns MirrorIndents. */
    public get mirrorIndents(): MirrorIndents | undefined { return this._f(MirrorIndents); }
    /** Returns SuppressOverlap. */
    public get suppressOverlap(): SuppressOverlap | undefined { return this._f(SuppressOverlap); }
    /** Returns Justification. */
    public get justification(): Justification | undefined { return this._f(Justification); }
    /** Returns TextDirection. */
    public get textDirection(): TextDirection | undefined { return this._f(TextDirection); }
    /** Returns TextAlignment. */
    public get textAlignment(): TextAlignment | undefined { return this._f(TextAlignment); }
    /** Returns TextBoxTightWrap. */
    public get textBoxTightWrap(): TextBoxTightWrap | undefined { return this._f(TextBoxTightWrap); }
    /** Returns OutlineLevel. */
    public get outlineLevel(): OutlineLevel | undefined { return this._f(OutlineLevel); }
    /** Returns ParagraphPropertiesChange. */
    public get paragraphPropertiesChange(): ParagraphPropertiesChange | undefined { return this._f(ParagraphPropertiesChange); }

}
/** Numbering Definition Instance. Serialized as `w:num` */
export class NumberingInstance extends OxmlCompositeElement<AbstractNumId | LevelOverride> {

    public static override _Q = 'w:num';
    public static override _A = ['w:numId','w:durableId',];
    /** numId. Serialized as `w:numId` */
    public get numberID(): Int32Value | undefined { return this._g('w:numId'); }
    public set numberID(v: Int32Value | undefined) { this._s('w:numId', v); }
    /** durableId. Serialized as `w:durableId` */
    public get durableId(): Int32Value | undefined { return this._g('w:durableId'); }
    public set durableId(v: Int32Value | undefined) { this._s('w:durableId', v); }
    /** Returns AbstractNumId. */
    public get abstractNumId(): AbstractNumId | undefined { return this._f(AbstractNumId); }

}
/** Abstract Numbering Definition. Serialized as `w:abstractNum` */
export class AbstractNum extends OxmlCompositeElement<Nsid | MultiLevelType | TemplateCode | AbstractNumDefinitionName | StyleLink | NumberingStyleLink | Level> {

    public static override _Q = 'w:abstractNum';
    public static override _A = ['w:abstractNumId',];
    /** Abstract Numbering Definition ID. Serialized as `w:abstractNumId` */
    public get abstractNumberId(): Int32Value | undefined { return this._g('w:abstractNumId'); }
    public set abstractNumberId(v: Int32Value | undefined) { this._s('w:abstractNumId', v); }
    /** Abstract Numbering Definition Identifier. */
    public get nsid(): Nsid | undefined { return this._f(Nsid); }
    /** Abstract Numbering Definition Type. */
    public get multiLevelType(): MultiLevelType | undefined { return this._f(MultiLevelType); }
    /** Numbering Template Code. */
    public get templateCode(): TemplateCode | undefined { return this._f(TemplateCode); }
    /** Abstract Numbering Definition Name. */
    public get abstractNumDefinitionName(): AbstractNumDefinitionName | undefined { return this._f(AbstractNumDefinitionName); }
    /** Numbering Style Definition. */
    public get styleLink(): StyleLink | undefined { return this._f(StyleLink); }
    /** Numbering Style Reference. */
    public get numberingStyleLink(): NumberingStyleLink | undefined { return this._f(NumberingStyleLink); }

}
/** Picture Numbering Symbol Definition. Serialized as `w:numPicBullet` */
export class NumberingPictureBullet extends OxmlCompositeElement<PictureBulletBase | Drawing> {

    public static override _Q = 'w:numPicBullet';
    public static override _A = ['w:numPicBulletId',];
    /** numPicBulletId. Serialized as `w:numPicBulletId` */
    public get numberingPictureBulletId(): Int32Value | undefined { return this._g('w:numPicBulletId'); }
    public set numberingPictureBulletId(v: Int32Value | undefined) { this._s('w:numPicBulletId', v); }
    /** Returns PictureBulletBase. */
    public get pictureBulletBase(): PictureBulletBase | undefined { return this._f(PictureBulletBase); }
    /** Returns Drawing. */
    public get drawing(): Drawing | undefined { return this._f(Drawing); }

}
/** Numbering Level Definition. Serialized as `w:lvl` */
export class Level extends OxmlCompositeElement<StartNumberingValue | NumberingFormat | LevelRestart | ParagraphStyleIdInLevel | IsLegalNumberingStyle | LevelSuffix | LevelText | LevelPictureBulletId | LegacyNumbering | LevelJustification | PreviousParagraphProperties | NumberingSymbolRunProperties> {

    public static override _Q = 'w:lvl';
    public static override _A = ['w:ilvl','w:tplc','w:tentative',];
    /** Numbering Level. Serialized as `w:ilvl` */
    public get levelIndex(): Int32Value | undefined { return this._g('w:ilvl'); }
    public set levelIndex(v: Int32Value | undefined) { this._s('w:ilvl', v); }
    /** Template Code. Serialized as `w:tplc` */
    public get templateCode(): HexBinaryValue | undefined { return this._g('w:tplc'); }
    public set templateCode(v: HexBinaryValue | undefined) { this._s('w:tplc', v); }
    /** Tentative Numbering. Serialized as `w:tentative` */
    public get tentative(): OnOffValue | undefined { return this._g('w:tentative'); }
    public set tentative(v: OnOffValue | undefined) { this._s('w:tentative', v); }
    /** Starting Value. */
    public get startNumberingValue(): StartNumberingValue | undefined { return this._f(StartNumberingValue); }
    /** Numbering Format. */
    public get numberingFormat(): NumberingFormat | undefined { return this._f(NumberingFormat); }
    /** Restart Numbering Level Symbol. */
    public get levelRestart(): LevelRestart | undefined { return this._f(LevelRestart); }
    /** Paragraph Style's Associated Numbering Level. */
    public get paragraphStyleIdInLevel(): ParagraphStyleIdInLevel | undefined { return this._f(ParagraphStyleIdInLevel); }
    /** Display All Levels Using Arabic Numerals. */
    public get isLegalNumberingStyle(): IsLegalNumberingStyle | undefined { return this._f(IsLegalNumberingStyle); }
    /** Content Between Numbering Symbol and Paragraph Text. */
    public get levelSuffix(): LevelSuffix | undefined { return this._f(LevelSuffix); }
    /** Numbering Level Text. */
    public get levelText(): LevelText | undefined { return this._f(LevelText); }
    /** Picture Numbering Symbol Definition Reference. */
    public get levelPictureBulletId(): LevelPictureBulletId | undefined { return this._f(LevelPictureBulletId); }
    /** Legacy Numbering Level Properties. */
    public get legacyNumbering(): LegacyNumbering | undefined { return this._f(LegacyNumbering); }
    /** Justification. */
    public get levelJustification(): LevelJustification | undefined { return this._f(LevelJustification); }
    /** Numbering Level Associated Paragraph Properties. */
    public get previousParagraphProperties(): PreviousParagraphProperties | undefined { return this._f(PreviousParagraphProperties); }
    /** Numbering Symbol Run Properties. */
    public get numberingSymbolRunProperties(): NumberingSymbolRunProperties | undefined { return this._f(NumberingSymbolRunProperties); }

}
/** Abstract Numbering Definition Type. Serialized as `w:multiLevelType` */
export class MultiLevelType extends OxmlLeafElement {

    public static override _Q = 'w:multiLevelType';
    public static override _A = ['w:val',];
    /** Abstract Numbering Definition Type. Serialized as `w:val` */
    public get val(): MultiLevelValues | undefined { return this._g('w:val'); }
    public set val(v: MultiLevelValues | undefined) { this._s('w:val', v); }

}
/** Numbering Symbol Run Properties. Serialized as `w:rPr` */
export class NumberingSymbolRunProperties extends OxmlCompositeElement<RunFonts | Bold | BoldComplexScript | Italic | ItalicComplexScript | Caps | SmallCaps | Strike | DoubleStrike | Outline | Shadow | Emboss | Imprint | NoProof | SnapToGrid | Vanish | WebHidden | Color | Spacing | CharacterScale | Kern | Position | FontSize | FontSizeComplexScript | Underline | TextEffect | Border | Shading | FitText | VerticalTextAlignment | RightToLeftText | ComplexScript | Emphasis | Languages | EastAsianLayout | SpecVanish> {

    public static override _Q = 'w:rPr';
    /** Returns RunFonts. */
    public get runFonts(): RunFonts | undefined { return this._f(RunFonts); }
    /** Returns Bold. */
    public get bold(): Bold | undefined { return this._f(Bold); }
    /** Returns BoldComplexScript. */
    public get boldComplexScript(): BoldComplexScript | undefined { return this._f(BoldComplexScript); }
    /** Returns Italic. */
    public get italic(): Italic | undefined { return this._f(Italic); }
    /** Returns ItalicComplexScript. */
    public get italicComplexScript(): ItalicComplexScript | undefined { return this._f(ItalicComplexScript); }
    /** Returns Caps. */
    public get caps(): Caps | undefined { return this._f(Caps); }
    /** Returns SmallCaps. */
    public get smallCaps(): SmallCaps | undefined { return this._f(SmallCaps); }
    /** Returns Strike. */
    public get strike(): Strike | undefined { return this._f(Strike); }
    /** Returns DoubleStrike. */
    public get doubleStrike(): DoubleStrike | undefined { return this._f(DoubleStrike); }
    /** Returns Outline. */
    public get outline(): Outline | undefined { return this._f(Outline); }
    /** Returns Shadow. */
    public get shadow(): Shadow | undefined { return this._f(Shadow); }
    /** Returns Emboss. */
    public get emboss(): Emboss | undefined { return this._f(Emboss); }
    /** Returns Imprint. */
    public get imprint(): Imprint | undefined { return this._f(Imprint); }
    /** Returns NoProof. */
    public get noProof(): NoProof | undefined { return this._f(NoProof); }
    /** Returns SnapToGrid. */
    public get snapToGrid(): SnapToGrid | undefined { return this._f(SnapToGrid); }
    /** Returns Vanish. */
    public get vanish(): Vanish | undefined { return this._f(Vanish); }
    /** Returns WebHidden. */
    public get webHidden(): WebHidden | undefined { return this._f(WebHidden); }
    /** Returns Color. */
    public get color(): Color | undefined { return this._f(Color); }
    /** Returns Spacing. */
    public get spacing(): Spacing | undefined { return this._f(Spacing); }
    /** Returns CharacterScale. */
    public get characterScale(): CharacterScale | undefined { return this._f(CharacterScale); }
    /** Returns Kern. */
    public get kern(): Kern | undefined { return this._f(Kern); }
    /** Returns Position. */
    public get position(): Position | undefined { return this._f(Position); }
    /** Returns FontSize. */
    public get fontSize(): FontSize | undefined { return this._f(FontSize); }
    /** Returns FontSizeComplexScript. */
    public get fontSizeComplexScript(): FontSizeComplexScript | undefined { return this._f(FontSizeComplexScript); }
    /** Returns Underline. */
    public get underline(): Underline | undefined { return this._f(Underline); }
    /** Returns TextEffect. */
    public get textEffect(): TextEffect | undefined { return this._f(TextEffect); }
    /** Returns Border. */
    public get border(): Border | undefined { return this._f(Border); }
    /** Returns Shading. */
    public get shading(): Shading | undefined { return this._f(Shading); }
    /** Returns FitText. */
    public get fitText(): FitText | undefined { return this._f(FitText); }
    /** Returns VerticalTextAlignment. */
    public get verticalTextAlignment(): VerticalTextAlignment | undefined { return this._f(VerticalTextAlignment); }
    /** Returns RightToLeftText. */
    public get rightToLeftText(): RightToLeftText | undefined { return this._f(RightToLeftText); }
    /** Returns ComplexScript. */
    public get complexScript(): ComplexScript | undefined { return this._f(ComplexScript); }
    /** Returns Emphasis. */
    public get emphasis(): Emphasis | undefined { return this._f(Emphasis); }
    /** Returns Languages. */
    public get languages(): Languages | undefined { return this._f(Languages); }
    /** Returns EastAsianLayout. */
    public get eastAsianLayout(): EastAsianLayout | undefined { return this._f(EastAsianLayout); }
    /** Returns SpecVanish. */
    public get specVanish(): SpecVanish | undefined { return this._f(SpecVanish); }

}
/** Numbering Level Associated Paragraph Properties. Serialized as `w:pPr` */
export class PreviousParagraphProperties extends OxmlCompositeElement<ParagraphStyleId | KeepNext | KeepLines | PageBreakBefore | FrameProperties | WidowControl | NumberingProperties | SuppressLineNumbers | ParagraphBorders | Shading | Tabs | SuppressAutoHyphens | Kinsoku | WordWrap | OverflowPunctuation | TopLinePunctuation | AutoSpaceDE | AutoSpaceDN | BiDi | AdjustRightIndent | SnapToGrid | SpacingBetweenLines | Indentation | ContextualSpacing | MirrorIndents | SuppressOverlap | Justification | TextDirection | TextAlignment | TextBoxTightWrap | OutlineLevel> {

    public static override _Q = 'w:pPr';
    /** Returns ParagraphStyleId. */
    public get paragraphStyleId(): ParagraphStyleId | undefined { return this._f(ParagraphStyleId); }
    /** Returns KeepNext. */
    public get keepNext(): KeepNext | undefined { return this._f(KeepNext); }
    /** Returns KeepLines. */
    public get keepLines(): KeepLines | undefined { return this._f(KeepLines); }
    /** Returns PageBreakBefore. */
    public get pageBreakBefore(): PageBreakBefore | undefined { return this._f(PageBreakBefore); }
    /** Returns FrameProperties. */
    public get frameProperties(): FrameProperties | undefined { return this._f(FrameProperties); }
    /** Returns WidowControl. */
    public get widowControl(): WidowControl | undefined { return this._f(WidowControl); }
    /** Returns NumberingProperties. */
    public get numberingProperties(): NumberingProperties | undefined { return this._f(NumberingProperties); }
    /** Returns SuppressLineNumbers. */
    public get suppressLineNumbers(): SuppressLineNumbers | undefined { return this._f(SuppressLineNumbers); }
    /** Returns ParagraphBorders. */
    public get paragraphBorders(): ParagraphBorders | undefined { return this._f(ParagraphBorders); }
    /** Returns Shading. */
    public get shading(): Shading | undefined { return this._f(Shading); }
    /** Returns Tabs. */
    public get tabs(): Tabs | undefined { return this._f(Tabs); }
    /** Returns SuppressAutoHyphens. */
    public get suppressAutoHyphens(): SuppressAutoHyphens | undefined { return this._f(SuppressAutoHyphens); }
    /** Returns Kinsoku. */
    public get kinsoku(): Kinsoku | undefined { return this._f(Kinsoku); }
    /** Returns WordWrap. */
    public get wordWrap(): WordWrap | undefined { return this._f(WordWrap); }
    /** Returns OverflowPunctuation. */
    public get overflowPunctuation(): OverflowPunctuation | undefined { return this._f(OverflowPunctuation); }
    /** Returns TopLinePunctuation. */
    public get topLinePunctuation(): TopLinePunctuation | undefined { return this._f(TopLinePunctuation); }
    /** Returns AutoSpaceDE. */
    public get autoSpaceDE(): AutoSpaceDE | undefined { return this._f(AutoSpaceDE); }
    /** Returns AutoSpaceDN. */
    public get autoSpaceDN(): AutoSpaceDN | undefined { return this._f(AutoSpaceDN); }
    /** Returns BiDi. */
    public get biDi(): BiDi | undefined { return this._f(BiDi); }
    /** Returns AdjustRightIndent. */
    public get adjustRightIndent(): AdjustRightIndent | undefined { return this._f(AdjustRightIndent); }
    /** Returns SnapToGrid. */
    public get snapToGrid(): SnapToGrid | undefined { return this._f(SnapToGrid); }
    /** Returns SpacingBetweenLines. */
    public get spacingBetweenLines(): SpacingBetweenLines | undefined { return this._f(SpacingBetweenLines); }
    /** Returns Indentation. */
    public get indentation(): Indentation | undefined { return this._f(Indentation); }
    /** Returns ContextualSpacing. */
    public get contextualSpacing(): ContextualSpacing | undefined { return this._f(ContextualSpacing); }
    /** Returns MirrorIndents. */
    public get mirrorIndents(): MirrorIndents | undefined { return this._f(MirrorIndents); }
    /** Returns SuppressOverlap. */
    public get suppressOverlap(): SuppressOverlap | undefined { return this._f(SuppressOverlap); }
    /** Returns Justification. */
    public get justification(): Justification | undefined { return this._f(Justification); }
    /** Returns TextDirection. */
    public get textDirection(): TextDirection | undefined { return this._f(TextDirection); }
    /** Returns TextAlignment. */
    public get textAlignment(): TextAlignment | undefined { return this._f(TextAlignment); }
    /** Returns TextBoxTightWrap. */
    public get textBoxTightWrap(): TextBoxTightWrap | undefined { return this._f(TextBoxTightWrap); }
    /** Returns OutlineLevel. */
    public get outlineLevel(): OutlineLevel | undefined { return this._f(OutlineLevel); }

}
/** Justification. Serialized as `w:lvlJc` */
export class LevelJustification extends OxmlLeafElement {

    public static override _Q = 'w:lvlJc';
    public static override _A = ['w:val',];
    /** Alignment Type. Serialized as `w:val` */
    public get value(): LevelJustificationValues | undefined { return this._g('w:val'); }
    public set value(v: LevelJustificationValues | undefined) { this._s('w:val', v); }

}
/** Legacy Numbering Level Properties. Serialized as `w:legacy` */
export class LegacyNumbering extends OxmlLeafElement {

    public static override _Q = 'w:legacy';
    public static override _A = ['w:legacy','w:legacySpace','w:legacyIndent',];
    /** Use Legacy Numbering Properties. Serialized as `w:legacy` */
    public get legacy(): OnOffValue | undefined { return this._g('w:legacy'); }
    public set legacy(v: OnOffValue | undefined) { this._s('w:legacy', v); }
    /** Legacy Spacing. Serialized as `w:legacySpace` */
    public get legacySpace(): StringValue | undefined { return this._g('w:legacySpace'); }
    public set legacySpace(v: StringValue | undefined) { this._s('w:legacySpace', v); }
    /** Legacy Indent. Serialized as `w:legacyIndent` */
    public get legacyIndent(): StringValue | undefined { return this._g('w:legacyIndent'); }
    public set legacyIndent(v: StringValue | undefined) { this._s('w:legacyIndent', v); }

}
/** Numbering Level Text. Serialized as `w:lvlText` */
export class LevelText extends OxmlLeafElement {

    public static override _Q = 'w:lvlText';
    public static override _A = ['w:val','w:null',];
    /** Level Text. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }
    /** Level Text Is Null Character. Serialized as `w:null` */
    public get null(): OnOffValue | undefined { return this._g('w:null'); }
    public set null(v: OnOffValue | undefined) { this._s('w:null', v); }

}
/** Content Between Numbering Symbol and Paragraph Text. Serialized as `w:suff` */
export class LevelSuffix extends OxmlLeafElement {

    public static override _Q = 'w:suff';
    public static override _A = ['w:val',];
    /** Character Type Between Numbering and Text. Serialized as `w:val` */
    public get val(): LevelSuffixValues | undefined { return this._g('w:val'); }
    public set val(v: LevelSuffixValues | undefined) { this._s('w:val', v); }

}
/** Single Frame Properties. Serialized as `w:frame` */
export class Frame extends OxmlCompositeElement<FrameSize | FrameName | SourceFileReference | MarginWidth | MarginHeight | ScrollbarVisibility | NoResizeAllowed | LinkedToFile> {

    public static override _Q = 'w:frame';
    /** Frame Size. */
    public get frameSize(): FrameSize | undefined { return this._f(FrameSize); }
    /** Frame Name. */
    public get frameName(): FrameName | undefined { return this._f(FrameName); }
    /** Source File for Frame. */
    public get sourceFileReference(): SourceFileReference | undefined { return this._f(SourceFileReference); }
    /** Left and Right Margin for Frame. */
    public get marginWidth(): MarginWidth | undefined { return this._f(MarginWidth); }
    /** Top and Bottom Margin for Frame. */
    public get marginHeight(): MarginHeight | undefined { return this._f(MarginHeight); }
    /** Scrollbar Display Option. */
    public get scrollbarVisibility(): ScrollbarVisibility | undefined { return this._f(ScrollbarVisibility); }
    /** Frame Cannot Be Resized. */
    public get noResizeAllowed(): NoResizeAllowed | undefined { return this._f(NoResizeAllowed); }
    /** Maintain Link to Existing File. */
    public get linkedToFile(): LinkedToFile | undefined { return this._f(LinkedToFile); }

}
/** Nested Frameset Definition. Serialized as `w:frameset` */
export class Frameset extends OxmlCompositeElement<FrameSize | FramesetSplitbar | FrameLayout | Frameset | Frame> {

    public static override _Q = 'w:frameset';
    /** Nested Frameset Size. */
    public get frameSize(): FrameSize | undefined { return this._f(FrameSize); }
    /** Frameset Splitter Properties. */
    public get framesetSplitbar(): FramesetSplitbar | undefined { return this._f(FramesetSplitbar); }
    /** Frameset Layout. */
    public get frameLayout(): FrameLayout | undefined { return this._f(FrameLayout); }

}
/** Frameset Layout. Serialized as `w:frameLayout` */
export class FrameLayout extends OxmlLeafElement {

    public static override _Q = 'w:frameLayout';
    public static override _A = ['w:val',];
    /** Frameset Layout Value. Serialized as `w:val` */
    public get val(): FrameLayoutValues | undefined { return this._g('w:val'); }
    public set val(v: FrameLayoutValues | undefined) { this._s('w:val', v); }

}
/** Frameset Splitter Properties. Serialized as `w:framesetSplitbar` */
export class FramesetSplitbar extends OxmlCompositeElement<Width | Color | NoBorder | FlatBorders> {

    public static override _Q = 'w:framesetSplitbar';
    /** Frameset Splitter Width. */
    public get width(): Width | undefined { return this._f(Width); }
    /** Frameset Splitter Color. */
    public get color(): Color | undefined { return this._f(Color); }
    /** Do Not Display Frameset Splitters. */
    public get noBorder(): NoBorder | undefined { return this._f(NoBorder); }
    /** Frameset Splitter Border Style. */
    public get flatBorders(): FlatBorders | undefined { return this._f(FlatBorders); }

}
/** Defines the TwipsMeasureType Class. */
export abstract class TwipsMeasureType extends OxmlLeafElement {

    public static override _A = ['w:val',];
    /** Measurement in Twentieths of a Point. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Drawing Grid Vertical Origin Point. Serialized as `w:drawingGridVerticalOrigin` */
export class DrawingGridVerticalOrigin extends TwipsMeasureType {

    public static override _Q = 'w:drawingGridVerticalOrigin';

}
/** Drawing Grid Horizontal Origin Point. Serialized as `w:drawingGridHorizontalOrigin` */
export class DrawingGridHorizontalOrigin extends TwipsMeasureType {

    public static override _Q = 'w:drawingGridHorizontalOrigin';

}
/** Drawing Grid Vertical Grid Unit Size. Serialized as `w:drawingGridVerticalSpacing` */
export class DrawingGridVerticalSpacing extends TwipsMeasureType {

    public static override _Q = 'w:drawingGridVerticalSpacing';

}
/** Drawing Grid Horizontal Grid Unit Size. Serialized as `w:drawingGridHorizontalSpacing` */
export class DrawingGridHorizontalSpacing extends TwipsMeasureType {

    public static override _Q = 'w:drawingGridHorizontalSpacing';

}
/** Hyphenation Zone. Serialized as `w:hyphenationZone` */
export class HyphenationZone extends TwipsMeasureType {

    public static override _Q = 'w:hyphenationZone';

}
/** Frameset Splitter Width. Serialized as `w:w` */
export class Width extends TwipsMeasureType {

    public static override _Q = 'w:w';

}
/** Scrollbar Display Option. Serialized as `w:scrollbar` */
export class ScrollbarVisibility extends OxmlLeafElement {

    public static override _Q = 'w:scrollbar';
    public static override _A = ['w:val',];
    /** Scrollbar Display Option Value. Serialized as `w:val` */
    public get val(): FrameScrollbarVisibilityValues | undefined { return this._g('w:val'); }
    public set val(v: FrameScrollbarVisibilityValues | undefined) { this._s('w:val', v); }

}
/** Defines the PixelsMeasureType Class. */
export abstract class PixelsMeasureType extends OxmlLeafElement {

    public static override _A = ['w:val',];
    /** Measurement in Pixels. Serialized as `w:val` */
    public get val(): UInt32Value | undefined { return this._g('w:val'); }
    public set val(v: UInt32Value | undefined) { this._s('w:val', v); }

}
/** Top and Bottom Margin for Frame. Serialized as `w:marH` */
export class MarginHeight extends PixelsMeasureType {

    public static override _Q = 'w:marH';

}
/** Left and Right Margin for Frame. Serialized as `w:marW` */
export class MarginWidth extends PixelsMeasureType {

    public static override _Q = 'w:marW';

}
/** Default Paragraph Properties. Serialized as `w:pPrDefault` */
export class ParagraphPropertiesDefault extends OxmlCompositeElement<ParagraphPropertiesBaseStyle> {

    public static override _Q = 'w:pPrDefault';
    /** Paragraph Properties. */
    public get paragraphPropertiesBaseStyle(): ParagraphPropertiesBaseStyle | undefined { return this._f(ParagraphPropertiesBaseStyle); }

}
/** Default Run Properties. Serialized as `w:rPrDefault` */
export class RunPropertiesDefault extends OxmlCompositeElement<RunPropertiesBaseStyle> {

    public static override _Q = 'w:rPrDefault';
    /** Run Properties. */
    public get runPropertiesBaseStyle(): RunPropertiesBaseStyle | undefined { return this._f(RunPropertiesBaseStyle); }

}
/** Paragraph Properties. Serialized as `w:pPr` */
export class ParagraphPropertiesBaseStyle extends OxmlCompositeElement<KeepNext | KeepLines | PageBreakBefore | FrameProperties | WidowControl | NumberingProperties | SuppressLineNumbers | ParagraphBorders | Shading | Tabs | SuppressAutoHyphens | Kinsoku | WordWrap | OverflowPunctuation | TopLinePunctuation | AutoSpaceDE | AutoSpaceDN | BiDi | AdjustRightIndent | SnapToGrid | SpacingBetweenLines | Indentation | ContextualSpacing | MirrorIndents | SuppressOverlap | Justification | TextDirection | TextAlignment | TextBoxTightWrap | OutlineLevel> {

    public static override _Q = 'w:pPr';
    /** Returns KeepNext. */
    public get keepNext(): KeepNext | undefined { return this._f(KeepNext); }
    /** Returns KeepLines. */
    public get keepLines(): KeepLines | undefined { return this._f(KeepLines); }
    /** Returns PageBreakBefore. */
    public get pageBreakBefore(): PageBreakBefore | undefined { return this._f(PageBreakBefore); }
    /** Returns FrameProperties. */
    public get frameProperties(): FrameProperties | undefined { return this._f(FrameProperties); }
    /** Returns WidowControl. */
    public get widowControl(): WidowControl | undefined { return this._f(WidowControl); }
    /** Returns NumberingProperties. */
    public get numberingProperties(): NumberingProperties | undefined { return this._f(NumberingProperties); }
    /** Returns SuppressLineNumbers. */
    public get suppressLineNumbers(): SuppressLineNumbers | undefined { return this._f(SuppressLineNumbers); }
    /** Returns ParagraphBorders. */
    public get paragraphBorders(): ParagraphBorders | undefined { return this._f(ParagraphBorders); }
    /** Returns Shading. */
    public get shading(): Shading | undefined { return this._f(Shading); }
    /** Returns Tabs. */
    public get tabs(): Tabs | undefined { return this._f(Tabs); }
    /** Returns SuppressAutoHyphens. */
    public get suppressAutoHyphens(): SuppressAutoHyphens | undefined { return this._f(SuppressAutoHyphens); }
    /** Returns Kinsoku. */
    public get kinsoku(): Kinsoku | undefined { return this._f(Kinsoku); }
    /** Returns WordWrap. */
    public get wordWrap(): WordWrap | undefined { return this._f(WordWrap); }
    /** Returns OverflowPunctuation. */
    public get overflowPunctuation(): OverflowPunctuation | undefined { return this._f(OverflowPunctuation); }
    /** Returns TopLinePunctuation. */
    public get topLinePunctuation(): TopLinePunctuation | undefined { return this._f(TopLinePunctuation); }
    /** Returns AutoSpaceDE. */
    public get autoSpaceDE(): AutoSpaceDE | undefined { return this._f(AutoSpaceDE); }
    /** Returns AutoSpaceDN. */
    public get autoSpaceDN(): AutoSpaceDN | undefined { return this._f(AutoSpaceDN); }
    /** Returns BiDi. */
    public get biDi(): BiDi | undefined { return this._f(BiDi); }
    /** Returns AdjustRightIndent. */
    public get adjustRightIndent(): AdjustRightIndent | undefined { return this._f(AdjustRightIndent); }
    /** Returns SnapToGrid. */
    public get snapToGrid(): SnapToGrid | undefined { return this._f(SnapToGrid); }
    /** Returns SpacingBetweenLines. */
    public get spacingBetweenLines(): SpacingBetweenLines | undefined { return this._f(SpacingBetweenLines); }
    /** Returns Indentation. */
    public get indentation(): Indentation | undefined { return this._f(Indentation); }
    /** Returns ContextualSpacing. */
    public get contextualSpacing(): ContextualSpacing | undefined { return this._f(ContextualSpacing); }
    /** Returns MirrorIndents. */
    public get mirrorIndents(): MirrorIndents | undefined { return this._f(MirrorIndents); }
    /** Returns SuppressOverlap. */
    public get suppressOverlap(): SuppressOverlap | undefined { return this._f(SuppressOverlap); }
    /** Returns Justification. */
    public get justification(): Justification | undefined { return this._f(Justification); }
    /** Returns TextDirection. */
    public get textDirection(): TextDirection | undefined { return this._f(TextDirection); }
    /** Returns TextAlignment. */
    public get textAlignment(): TextAlignment | undefined { return this._f(TextAlignment); }
    /** Returns TextBoxTightWrap. */
    public get textBoxTightWrap(): TextBoxTightWrap | undefined { return this._f(TextBoxTightWrap); }
    /** Returns OutlineLevel. */
    public get outlineLevel(): OutlineLevel | undefined { return this._f(OutlineLevel); }

}
/** Run Properties. Serialized as `w:rPr` */
export class RunPropertiesBaseStyle extends OxmlCompositeElement<RunFonts | Bold | BoldComplexScript | Italic | ItalicComplexScript | Caps | SmallCaps | Strike | DoubleStrike | Outline | Shadow | Emboss | Imprint | NoProof | SnapToGrid | Vanish | WebHidden | Color | Spacing | CharacterScale | Kern | Position | FontSize | FontSizeComplexScript | Underline | TextEffect | Border | Shading | FitText | VerticalTextAlignment | Emphasis | Languages | EastAsianLayout | SpecVanish> {

    public static override _Q = 'w:rPr';
    /** Returns RunFonts. */
    public get runFonts(): RunFonts | undefined { return this._f(RunFonts); }
    /** Returns Bold. */
    public get bold(): Bold | undefined { return this._f(Bold); }
    /** Returns BoldComplexScript. */
    public get boldComplexScript(): BoldComplexScript | undefined { return this._f(BoldComplexScript); }
    /** Returns Italic. */
    public get italic(): Italic | undefined { return this._f(Italic); }
    /** Returns ItalicComplexScript. */
    public get italicComplexScript(): ItalicComplexScript | undefined { return this._f(ItalicComplexScript); }
    /** Returns Caps. */
    public get caps(): Caps | undefined { return this._f(Caps); }
    /** Returns SmallCaps. */
    public get smallCaps(): SmallCaps | undefined { return this._f(SmallCaps); }
    /** Returns Strike. */
    public get strike(): Strike | undefined { return this._f(Strike); }
    /** Returns DoubleStrike. */
    public get doubleStrike(): DoubleStrike | undefined { return this._f(DoubleStrike); }
    /** Returns Outline. */
    public get outline(): Outline | undefined { return this._f(Outline); }
    /** Returns Shadow. */
    public get shadow(): Shadow | undefined { return this._f(Shadow); }
    /** Returns Emboss. */
    public get emboss(): Emboss | undefined { return this._f(Emboss); }
    /** Returns Imprint. */
    public get imprint(): Imprint | undefined { return this._f(Imprint); }
    /** Returns NoProof. */
    public get noProof(): NoProof | undefined { return this._f(NoProof); }
    /** Returns SnapToGrid. */
    public get snapToGrid(): SnapToGrid | undefined { return this._f(SnapToGrid); }
    /** Returns Vanish. */
    public get vanish(): Vanish | undefined { return this._f(Vanish); }
    /** Returns WebHidden. */
    public get webHidden(): WebHidden | undefined { return this._f(WebHidden); }
    /** Returns Color. */
    public get color(): Color | undefined { return this._f(Color); }
    /** Returns Spacing. */
    public get spacing(): Spacing | undefined { return this._f(Spacing); }
    /** Returns CharacterScale. */
    public get characterScale(): CharacterScale | undefined { return this._f(CharacterScale); }
    /** Returns Kern. */
    public get kern(): Kern | undefined { return this._f(Kern); }
    /** Returns Position. */
    public get position(): Position | undefined { return this._f(Position); }
    /** Returns FontSize. */
    public get fontSize(): FontSize | undefined { return this._f(FontSize); }
    /** Returns FontSizeComplexScript. */
    public get fontSizeComplexScript(): FontSizeComplexScript | undefined { return this._f(FontSizeComplexScript); }
    /** Returns Underline. */
    public get underline(): Underline | undefined { return this._f(Underline); }
    /** Returns TextEffect. */
    public get textEffect(): TextEffect | undefined { return this._f(TextEffect); }
    /** Returns Border. */
    public get border(): Border | undefined { return this._f(Border); }
    /** Returns Shading. */
    public get shading(): Shading | undefined { return this._f(Shading); }
    /** Returns FitText. */
    public get fitText(): FitText | undefined { return this._f(FitText); }
    /** Returns VerticalTextAlignment. */
    public get verticalTextAlignment(): VerticalTextAlignment | undefined { return this._f(VerticalTextAlignment); }
    /** Returns Emphasis. */
    public get emphasis(): Emphasis | undefined { return this._f(Emphasis); }
    /** Returns Languages. */
    public get languages(): Languages | undefined { return this._f(Languages); }
    /** Returns EastAsianLayout. */
    public get eastAsianLayout(): EastAsianLayout | undefined { return this._f(EastAsianLayout); }
    /** Returns SpecVanish. */
    public get specVanish(): SpecVanish | undefined { return this._f(SpecVanish); }

}
/** Defines the LongHexNumberType Class. */
export abstract class LongHexNumberType extends OxmlLeafElement {

    public static override _A = ['w:val',];
    /** Long Hexadecimal Number Value. Serialized as `w:val` */
    public get val(): HexBinaryValue | undefined { return this._g('w:val'); }
    public set val(v: HexBinaryValue | undefined) { this._s('w:val', v); }

}
/** Numbering Template Code. Serialized as `w:tmpl` */
export class TemplateCode extends LongHexNumberType {

    public static override _Q = 'w:tmpl';

}
/** Abstract Numbering Definition Identifier. Serialized as `w:nsid` */
export class Nsid extends LongHexNumberType {

    public static override _Q = 'w:nsid';

}
/** Single Session Revision Save ID. Serialized as `w:rsid` */
export class Rsid extends LongHexNumberType {

    public static override _Q = 'w:rsid';

}
/** Original Document Revision Save ID. Serialized as `w:rsidRoot` */
export class RsidRoot extends LongHexNumberType {

    public static override _Q = 'w:rsidRoot';

}
/** Single Document Variable. Serialized as `w:docVar` */
export class DocumentVariable extends OxmlLeafElement {

    public static override _Q = 'w:docVar';
    public static override _A = ['w:name','w:val',];
    /** Document Variable Name. Serialized as `w:name` */
    public get name(): StringValue | undefined { return this._g('w:name'); }
    public set name(v: StringValue | undefined) { this._s('w:name', v); }
    /** Document Variable Value. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Office Data Source Object Settings. Serialized as `w:odso` */
export class DataSourceObject extends OxmlCompositeElement<UdlConnectionString | DataSourceTableName | SourceReference | ColumnDelimiter | MailMergeSource | FirstRowHeader | FieldMapData | RecipientDataReference> {

    public static override _Q = 'w:odso';
    /** UDL Connection String. */
    public get udlConnectionString(): UdlConnectionString | undefined { return this._f(UdlConnectionString); }
    /** Data Source Table Name. */
    public get dataSourceTableName(): DataSourceTableName | undefined { return this._f(DataSourceTableName); }
    /** ODSO Data Source File Path. */
    public get sourceReference(): SourceReference | undefined { return this._f(SourceReference); }
    /** Column Delimiter for Data Source. */
    public get columnDelimiter(): ColumnDelimiter | undefined { return this._f(ColumnDelimiter); }
    /** ODSO Data Source Type. */
    public get mailMergeSource(): MailMergeSource | undefined { return this._f(MailMergeSource); }
    /** First Row of Data Source Contains Column Names. */
    public get firstRowHeader(): FirstRowHeader | undefined { return this._f(FirstRowHeader); }

}
/** Merged Document Destination. Serialized as `w:destination` */
export class Destination extends OxmlLeafElement {

    public static override _Q = 'w:destination';
    public static override _A = ['w:val',];
    /** Mail Merge Merged Document Type. Serialized as `w:val` */
    public get val(): MailMergeDestinationValues | undefined { return this._g('w:val'); }
    public set val(v: MailMergeDestinationValues | undefined) { this._s('w:val', v); }

}
/** Data Source Type. Serialized as `w:dataType` */
export class DataType extends OxmlLeafElement {

    public static override _Q = 'w:dataType';
    public static override _A = ['w:val',];
    /** Value. Serialized as `w:val` */
    public get val(): MailMergeDataValues | undefined { return this._g('w:val'); }
    public set val(v: MailMergeDataValues | undefined) { this._s('w:val', v); }

}
/** Source Document Type. Serialized as `w:mainDocumentType` */
export class MainDocumentType extends OxmlLeafElement {

    public static override _Q = 'w:mainDocumentType';
    public static override _A = ['w:val',];
    /** Mail Merge Source Document Type. Serialized as `w:val` */
    public get val(): MailMergeDocumentValues | undefined { return this._g('w:val'); }
    public set val(v: MailMergeDocumentValues | undefined) { this._s('w:val', v); }

}
/** External Data Source to Merge Field Mapping. Serialized as `w:fieldMapData` */
export class FieldMapData extends OxmlCompositeElement<MailMergeFieldType | Name | MappedName | ColumnIndex | LanguageId | DynamicAddress> {

    public static override _Q = 'w:fieldMapData';
    /** Merge Field Mapping. */
    public get mailMergeFieldType(): MailMergeFieldType | undefined { return this._f(MailMergeFieldType); }
    /** Data Source Name for Column. */
    public get name(): Name | undefined { return this._f(Name); }
    /** Predefined Merge Field Name. */
    public get mappedName(): MappedName | undefined { return this._f(MappedName); }
    /** Index of Column Being Mapped. */
    public get columnIndex(): ColumnIndex | undefined { return this._f(ColumnIndex); }
    /** Merge Field Name Language ID. */
    public get languageId(): LanguageId | undefined { return this._f(LanguageId); }
    /** Use Country/Region-Based Address Field Ordering. */
    public get dynamicAddress(): DynamicAddress | undefined { return this._f(DynamicAddress); }

}
/** ODSO Data Source Type. Serialized as `w:type` */
export class MailMergeSource extends OxmlLeafElement {

    public static override _Q = 'w:type';
    public static override _A = ['w:val',];
    /** Data Source Type Value. Serialized as `w:val` */
    public get val(): MailMergeSourceValues | undefined { return this._g('w:val'); }
    public set val(v: MailMergeSourceValues | undefined) { this._s('w:val', v); }

}
/** Merge Field Mapping. Serialized as `w:type` */
export class MailMergeFieldType extends OxmlLeafElement {

    public static override _Q = 'w:type';
    public static override _A = ['w:val',];
    /** Merge Field Mapping Type. Serialized as `w:val` */
    public get val(): MailMergeOdsoFieldValues | undefined { return this._g('w:val'); }
    public set val(v: MailMergeOdsoFieldValues | undefined) { this._s('w:val', v); }

}
/** Data About Single Data Source Record. Serialized as `w:recipientData` */
export class RecipientData extends OxmlCompositeElement<Active | ColumnIndex | UniqueTag> {

    public static override _Q = 'w:recipientData';
    /** Record Is Included in Mail Merge. */
    public get active(): Active | undefined { return this._f(Active); }
    /** Index of Column Containing Unique Values for Record. */
    public get columnIndex(): ColumnIndex | undefined { return this._f(ColumnIndex); }
    /** Unique Value for Record. */
    public get uniqueTag(): UniqueTag | undefined { return this._f(UniqueTag); }

}
/** Unique Value for Record. Serialized as `w:uniqueTag` */
export class UniqueTag extends OxmlLeafElement {

    public static override _Q = 'w:uniqueTag';
    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): Base64BinaryValue | undefined { return this._g('w:val'); }
    public set val(v: Base64BinaryValue | undefined) { this._s('w:val', v); }

}
/** Defines the UnsignedDecimalNumberType Class. */
export abstract class UnsignedDecimalNumberType extends OxmlLeafElement {

    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): UInt32Value | undefined { return this._g('w:val'); }
    public set val(v: UInt32Value | undefined) { this._s('w:val', v); }

}
/** Column Delimiter for Data Source. Serialized as `w:colDelim` */
export class ColumnDelimiter extends UnsignedDecimalNumberType {

    public static override _Q = 'w:colDelim';

}
/** Index of Column Containing Unique Values for Record. Serialized as `w:column` */
export class ColumnIndex extends UnsignedDecimalNumberType {

    public static override _Q = 'w:column';

}
/** Defines the FootnoteEndnoteSeparatorReferenceType Class. */
export abstract class FootnoteEndnoteSeparatorReferenceType extends OxmlLeafElement {

    public static override _A = ['w:id',];
    /** Footnote/Endnote ID. Serialized as `w:id` */
    public get id(): IntegerValue | undefined { return this._g('w:id'); }
    public set id(v: IntegerValue | undefined) { this._s('w:id', v); }

}
/** Special Endnote List. Serialized as `w:endnote` */
export class EndnoteSpecialReference extends FootnoteEndnoteSeparatorReferenceType {

    public static override _Q = 'w:endnote';

}
/** Special Footnote List. Serialized as `w:footnote` */
export class FootnoteSpecialReference extends FootnoteEndnoteSeparatorReferenceType {

    public static override _Q = 'w:footnote';

}
/** Endnote Placement. Serialized as `w:pos` */
export class EndnotePosition extends OxmlLeafElement {

    public static override _Q = 'w:pos';
    public static override _A = ['w:val',];
    /** Endnote Position Type. Serialized as `w:val` */
    public get val(): EndnotePositionValues | undefined { return this._g('w:val'); }
    public set val(v: EndnotePositionValues | undefined) { this._s('w:val', v); }

}
/** Footnote Numbering Format. Serialized as `w:numFmt` */
export class NumberingFormat extends OxmlLeafElement {

    public static override _Q = 'w:numFmt';
    public static override _A = ['w:val','w:format',];
    /** Numbering Format Type. Serialized as `w:val` */
    public get val(): NumberFormatValues | undefined { return this._g('w:val'); }
    public set val(v: NumberFormatValues | undefined) { this._s('w:val', v); }
    /** format. Serialized as `w:format` */
    public get format(): StringValue | undefined { return this._g('w:format'); }
    public set format(v: StringValue | undefined) { this._s('w:format', v); }

}
/** Footnote Placement. Serialized as `w:pos` */
export class FootnotePosition extends OxmlLeafElement {

    public static override _Q = 'w:pos';
    public static override _A = ['w:val',];
    /** Footnote Position Type. Serialized as `w:val` */
    public get val(): FootnotePositionValues | undefined { return this._g('w:val'); }
    public set val(v: FootnotePositionValues | undefined) { this._s('w:val', v); }

}
/** Table Grid. Serialized as `w:tblGrid` */
export class TableGrid extends OxmlCompositeElement<GridColumn | TableGridChange> {

    public static override _Q = 'w:tblGrid';

}
/** Table Properties. Serialized as `w:tblPr` */
export class TableProperties extends OxmlCompositeElement<TableStyle | TablePositionProperties | TableOverlap | BiDiVisual | TableWidth | TableJustification | TableCellSpacing | TableIndentation | TableBorders | Shading | TableLayout | TableCellMarginDefault | TableLook | TableCaption | TableDescription | TablePropertiesChange> {

    public static override _Q = 'w:tblPr';
    /** Returns TableStyle. */
    public get tableStyle(): TableStyle | undefined { return this._f(TableStyle); }
    /** Returns TablePositionProperties. */
    public get tablePositionProperties(): TablePositionProperties | undefined { return this._f(TablePositionProperties); }
    /** Returns TableOverlap. */
    public get tableOverlap(): TableOverlap | undefined { return this._f(TableOverlap); }
    /** Returns BiDiVisual. */
    public get biDiVisual(): BiDiVisual | undefined { return this._f(BiDiVisual); }
    /** Returns TableWidth. */
    public get tableWidth(): TableWidth | undefined { return this._f(TableWidth); }
    /** Returns TableJustification. */
    public get tableJustification(): TableJustification | undefined { return this._f(TableJustification); }
    /** Returns TableCellSpacing. */
    public get tableCellSpacing(): TableCellSpacing | undefined { return this._f(TableCellSpacing); }
    /** Returns TableIndentation. */
    public get tableIndentation(): TableIndentation | undefined { return this._f(TableIndentation); }
    /** Returns TableBorders. */
    public get tableBorders(): TableBorders | undefined { return this._f(TableBorders); }
    /** Returns Shading. */
    public get shading(): Shading | undefined { return this._f(Shading); }
    /** Returns TableLayout. */
    public get tableLayout(): TableLayout | undefined { return this._f(TableLayout); }
    /** Returns TableCellMarginDefault. */
    public get tableCellMarginDefault(): TableCellMarginDefault | undefined { return this._f(TableCellMarginDefault); }
    /** Returns TableLook. */
    public get tableLook(): TableLook | undefined { return this._f(TableLook); }
    /** Returns TableCaption. */
    public get tableCaption(): TableCaption | undefined { return this._f(TableCaption); }
    /** Returns TableDescription. */
    public get tableDescription(): TableDescription | undefined { return this._f(TableDescription); }
    /** Revision Information for Table Properties. */
    public get tablePropertiesChange(): TablePropertiesChange | undefined { return this._f(TablePropertiesChange); }

}
/** Revision Information for Table-Level Property Exceptions. Serialized as `w:tblPrExChange` */
export class TablePropertyExceptionsChange extends OxmlCompositeElement<PreviousTablePropertyExceptions> {

    public static override _Q = 'w:tblPrExChange';
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
    /** Previous Table-Level Property Exceptions. */
    public get previousTablePropertyExceptions(): PreviousTablePropertyExceptions | undefined { return this._f(PreviousTablePropertyExceptions); }

}
/** Revision Information for Table Properties. Serialized as `w:tblPrChange` */
export class TablePropertiesChange extends OxmlCompositeElement<PreviousTableProperties> {

    public static override _Q = 'w:tblPrChange';
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
    /** Previous Table Properties. */
    public get previousTableProperties(): PreviousTableProperties | undefined { return this._f(PreviousTableProperties); }

}
/** Table Cell Properties. Serialized as `w:tcPr` */
export class TableCellProperties extends OxmlCompositeElement<ConditionalFormatStyle | TableCellWidth | GridSpan | HorizontalMerge | VerticalMerge | TableCellBorders | Shading | NoWrap | TableCellMargin | TextDirection | TableCellFitText | TableCellVerticalAlignment | HideMark | CellInsertion | CellDeletion | CellMerge | TableCellPropertiesChange> {

    public static override _Q = 'w:tcPr';
    /** Returns ConditionalFormatStyle. */
    public get conditionalFormatStyle(): ConditionalFormatStyle | undefined { return this._f(ConditionalFormatStyle); }
    /** Returns TableCellWidth. */
    public get tableCellWidth(): TableCellWidth | undefined { return this._f(TableCellWidth); }
    /** Returns GridSpan. */
    public get gridSpan(): GridSpan | undefined { return this._f(GridSpan); }
    /** Returns HorizontalMerge. */
    public get horizontalMerge(): HorizontalMerge | undefined { return this._f(HorizontalMerge); }
    /** Returns VerticalMerge. */
    public get verticalMerge(): VerticalMerge | undefined { return this._f(VerticalMerge); }
    /** Returns TableCellBorders. */
    public get tableCellBorders(): TableCellBorders | undefined { return this._f(TableCellBorders); }
    /** Returns Shading. */
    public get shading(): Shading | undefined { return this._f(Shading); }
    /** Returns NoWrap. */
    public get noWrap(): NoWrap | undefined { return this._f(NoWrap); }
    /** Returns TableCellMargin. */
    public get tableCellMargin(): TableCellMargin | undefined { return this._f(TableCellMargin); }
    /** Returns TextDirection. */
    public get textDirection(): TextDirection | undefined { return this._f(TextDirection); }
    /** Returns TableCellFitText. */
    public get tableCellFitText(): TableCellFitText | undefined { return this._f(TableCellFitText); }
    /** Returns TableCellVerticalAlignment. */
    public get tableCellVerticalAlignment(): TableCellVerticalAlignment | undefined { return this._f(TableCellVerticalAlignment); }
    /** Returns HideMark. */
    public get hideMark(): HideMark | undefined { return this._f(HideMark); }

}
/** Revision Information for Table Cell Properties. Serialized as `w:tcPrChange` */
export class TableCellPropertiesChange extends OxmlCompositeElement<PreviousTableCellProperties> {

    public static override _Q = 'w:tcPrChange';
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
    /** Previous Table Cell Properties. */
    public get previousTableCellProperties(): PreviousTableCellProperties | undefined { return this._f(PreviousTableCellProperties); }

}
/** Revision Information for Table Grid Column Definitions. Serialized as `w:tblGridChange` */
export class TableGridChange extends OxmlCompositeElement<PreviousTableGrid> {

    public static override _Q = 'w:tblGridChange';
    public static override _A = ['w:id',];
    /** Annotation Identifier. Serialized as `w:id` */
    public get id(): StringValue | undefined { return this._g('w:id'); }
    public set id(v: StringValue | undefined) { this._s('w:id', v); }
    /** Previous Table Grid. */
    public get previousTableGrid(): PreviousTableGrid | undefined { return this._f(PreviousTableGrid); }

}
/** Grid Column Definition. Serialized as `w:gridCol` */
export class GridColumn extends OxmlLeafElement {

    public static override _Q = 'w:gridCol';
    public static override _A = ['w:w',];
    /** Grid Column Width. Serialized as `w:w` */
    public get width(): StringValue | undefined { return this._g('w:w'); }
    public set width(v: StringValue | undefined) { this._s('w:w', v); }

}
/** Custom XML Attribute. Serialized as `w:attr` */
export class CustomXmlAttribute extends OxmlLeafElement {

    public static override _Q = 'w:attr';
    public static override _A = ['w:uri','w:name','w:val',];
    /** uri. Serialized as `w:uri` */
    public get uri(): StringValue | undefined { return this._g('w:uri'); }
    public set uri(v: StringValue | undefined) { this._s('w:uri', v); }
    /** name. Serialized as `w:name` */
    public get name(): StringValue | undefined { return this._g('w:name'); }
    public set name(v: StringValue | undefined) { this._s('w:name', v); }
    /** val. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Custom XML Element Properties. Serialized as `w:customXmlPr` */
export class CustomXmlProperties extends OxmlCompositeElement<CustomXmlPlaceholder | CustomXmlAttribute> {

    public static override _Q = 'w:customXmlPr';
    /** Custom XML Element Placeholder Text. */
    public get customXmlPlaceholder(): CustomXmlPlaceholder | undefined { return this._f(CustomXmlPlaceholder); }

}
/** Row-Level Structured Document Tag Content. Serialized as `w:sdtContent` */
export class SdtContentRow extends OxmlCompositeElement<TableRow | CustomXmlRow | SdtRow | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {

    public static override _Q = 'w:sdtContent';

}
/** Cell-Level Structured Document Tag Content. Serialized as `w:sdtContent` */
export class SdtContentCell extends OxmlCompositeElement<TableCell | CustomXmlCell | SdtCell | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {

    public static override _Q = 'w:sdtContent';

}
/** Defines the SdtContentRunRuby Class. Serialized as `w:sdtContent` */
export class SdtContentRunRuby extends OxmlCompositeElement<CustomXmlRuby | SimpleFieldRuby | HyperlinkRuby | Run | SdtRunRuby | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun> {

    public static override _Q = 'w:sdtContent';

}
/** Inline-Level Structured Document Tag Content. Serialized as `w:sdtContent` */
export class SdtContentRun extends OxmlCompositeElement<MRun | CustomXmlRun | SimpleField | Hyperlink | SdtRun | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | Run | BidirectionalOverride | BidirectionalEmbedding | SubDocumentReference> {

    public static override _Q = 'w:sdtContent';

}
/** Block-Level Structured Document Tag Content. Serialized as `w:sdtContent` */
export class SdtContentBlock extends OxmlCompositeElement<CustomXmlBlock | SdtBlock | Paragraph | Table | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {

    public static override _Q = 'w:sdtContent';

}
/** Structured Document Tag End Character Properties. Serialized as `w:sdtEndPr` */
export class SdtEndCharProperties extends OxmlCompositeElement<RunProperties> {

    public static override _Q = 'w:sdtEndPr';

}
/** Structured Document Tag Properties. Serialized as `w:sdtPr` */
export class SdtProperties extends OxmlCompositeElement<RunProperties | SdtAlias | Lock | SdtPlaceholder | ShowingPlaceholder | DataBinding | W15DataBinding | TemporarySdt | SdtId | Tag | W15Color | W15Appearance | W15WebExtensionLinked | W15WebExtensionCreated | SdtContentEquation | SdtContentComboBox | SdtContentDate | SdtContentDocPartObject | SdtContentDocPartList | SdtContentDropDownList | SdtContentPicture | SdtContentRichText | SdtContentText | SdtContentCitation | SdtContentGroup | SdtContentBibliography | W14EntityPickerEmpty | W14SdtContentCheckBox | W15SdtRepeatedSection | W15SdtRepeatedSectionItem> {

    public static override _Q = 'w:sdtPr';

}
/** Combo Box List Item. Serialized as `w:listItem` */
export class ListItem extends OxmlLeafElement {

    public static override _Q = 'w:listItem';
    public static override _A = ['w:displayText','w:value',];
    /** List Entry Display Text. Serialized as `w:displayText` */
    public get displayText(): StringValue | undefined { return this._g('w:displayText'); }
    public set displayText(v: StringValue | undefined) { this._s('w:displayText', v); }
    /** List Entry Value. Serialized as `w:value` */
    public get value(): StringValue | undefined { return this._g('w:value'); }
    public set value(v: StringValue | undefined) { this._s('w:value', v); }

}
/** Date Picker Calendar Type. Serialized as `w:calendar` */
export class Calendar extends OxmlLeafElement {

    public static override _Q = 'w:calendar';
    public static override _A = ['w:val',];
    /** Calendar Type Value. Serialized as `w:val` */
    public get val(): CalendarValues | undefined { return this._g('w:val'); }
    public set val(v: CalendarValues | undefined) { this._s('w:val', v); }

}
/** Custom XML Data Date Storage Format. Serialized as `w:storeMappedDataAs` */
export class SdtDateMappingType extends OxmlLeafElement {

    public static override _Q = 'w:storeMappedDataAs';
    public static override _A = ['w:val',];
    /** Date Storage Type. Serialized as `w:val` */
    public get val(): DateFormatValues | undefined { return this._g('w:val'); }
    public set val(v: DateFormatValues | undefined) { this._s('w:val', v); }

}
/** Defines the RubyContentType Class. */
export abstract class RubyContentType extends OxmlCompositeElement<CustomXmlRuby | SimpleFieldRuby | HyperlinkRuby | Run | SdtRunRuby | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun> {


}
/** Phonetic Guide Base Text. Serialized as `w:rubyBase` */
export class RubyBase extends RubyContentType {

    public static override _Q = 'w:rubyBase';

}
/** Phonetic Guide Text. Serialized as `w:rt` */
export class RubyContent extends RubyContentType {

    public static override _Q = 'w:rt';

}
/** Phonetic Guide Properties. Serialized as `w:rubyPr` */
export class RubyProperties extends OxmlCompositeElement<RubyAlign | PhoneticGuideTextFontSize | PhoneticGuideRaise | PhoneticGuideBaseTextSize | LanguageId | Dirty> {

    public static override _Q = 'w:rubyPr';
    /** Phonetic Guide Text Alignment. */
    public get rubyAlign(): RubyAlign | undefined { return this._f(RubyAlign); }
    /** Phonetic Guide Text Font Size. */
    public get phoneticGuideTextFontSize(): PhoneticGuideTextFontSize | undefined { return this._f(PhoneticGuideTextFontSize); }
    /** Distance Between Phonetic Guide Text and Phonetic Guide Base Text. */
    public get phoneticGuideRaise(): PhoneticGuideRaise | undefined { return this._f(PhoneticGuideRaise); }
    /** Phonetic Guide Base Text Font Size. */
    public get phoneticGuideBaseTextSize(): PhoneticGuideBaseTextSize | undefined { return this._f(PhoneticGuideBaseTextSize); }
    /** Language ID for Phonetic Guide. */
    public get languageId(): LanguageId | undefined { return this._f(LanguageId); }
    /** Invalidated Field Cache. */
    public get dirty(): Dirty | undefined { return this._f(Dirty); }

}
/** Language ID for Phonetic Guide. Serialized as `w:lid` */
export class LanguageId extends OxmlLeafElement {

    public static override _Q = 'w:lid';
    public static override _A = ['w:val',];
    /** Language Code. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Distance Between Phonetic Guide Text and Phonetic Guide Base Text. Serialized as `w:hpsRaise` */
export class PhoneticGuideRaise extends OxmlLeafElement {

    public static override _Q = 'w:hpsRaise';
    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): Int16Value | undefined { return this._g('w:val'); }
    public set val(v: Int16Value | undefined) { this._s('w:val', v); }

}
/** Phonetic Guide Text Alignment. Serialized as `w:rubyAlign` */
export class RubyAlign extends OxmlLeafElement {

    public static override _Q = 'w:rubyAlign';
    public static override _A = ['w:val',];
    /** Phonetic Guide Text Alignment Value. Serialized as `w:val` */
    public get val(): RubyAlignValues | undefined { return this._g('w:val'); }
    public set val(v: RubyAlignValues | undefined) { this._s('w:val', v); }

}
/** External Content Import Properties. Serialized as `w:altChunkPr` */
export class AltChunkProperties extends OxmlCompositeElement<MatchSource> {

    public static override _Q = 'w:altChunkPr';
    /** Keep Source Formatting on Import. */
    public get matchSource(): MatchSource | undefined { return this._f(MatchSource); }

}
/** Revision Information for Run Properties on the Paragraph Mark. Serialized as `w:rPrChange` */
export class ParagraphMarkRunPropertiesChange extends OxmlCompositeElement<PreviousParagraphMarkRunProperties> {

    public static override _Q = 'w:rPrChange';
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
    /** Previous Run Properties for the Paragraph Mark. */
    public get previousParagraphMarkRunProperties(): PreviousParagraphMarkRunProperties | undefined { return this._f(PreviousParagraphMarkRunProperties); }

}
/** Revision Information for Section Properties. Serialized as `w:sectPrChange` */
export class SectionPropertiesChange extends OxmlCompositeElement<PreviousSectionProperties> {

    public static override _Q = 'w:sectPrChange';
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
    /** Previous Section Properties. */
    public get previousSectionProperties(): PreviousSectionProperties | undefined { return this._f(PreviousSectionProperties); }

}
/** Single Column Definition. Serialized as `w:col` */
export class Column extends OxmlLeafElement {

    public static override _Q = 'w:col';
    public static override _A = ['w:w','w:space',];
    /** Column Width. Serialized as `w:w` */
    public get width(): StringValue | undefined { return this._g('w:w'); }
    public set width(v: StringValue | undefined) { this._s('w:w', v); }
    /** Space Before Following Column. Serialized as `w:space` */
    public get space(): StringValue | undefined { return this._g('w:space'); }
    public set space(v: StringValue | undefined) { this._s('w:space', v); }

}
/** Text Box Form Field Formatting. Serialized as `w:format` */
export class Format extends OxmlLeafElement {

    public static override _Q = 'w:format';
    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Text Box Form Field Maximum Length. Serialized as `w:maxLength` */
export class MaxLength extends OxmlLeafElement {

    public static override _Q = 'w:maxLength';
    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): Int16Value | undefined { return this._g('w:val'); }
    public set val(v: Int16Value | undefined) { this._s('w:val', v); }

}
/** Text Box Form Field Type. Serialized as `w:type` */
export class TextBoxFormFieldType extends OxmlLeafElement {

    public static override _Q = 'w:type';
    public static override _A = ['w:val',];
    /** Text Box Form Field Type Values. Serialized as `w:val` */
    public get val(): TextBoxFormFieldValues | undefined { return this._g('w:val'); }
    public set val(v: TextBoxFormFieldValues | undefined) { this._s('w:val', v); }

}
/** Defines the String255Type Class. */
export abstract class String255Type extends OxmlLeafElement {

    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Frame Name. Serialized as `w:name` */
export class FrameName extends String255Type {

    public static override _Q = 'w:name';

}
/** Default Text Box Form Field String. Serialized as `w:default` */
export class DefaultTextBoxFormFieldString extends String255Type {

    public static override _Q = 'w:default';

}
/** Drop-Down List Entry. Serialized as `w:listEntry` */
export class ListEntryFormField extends String255Type {

    public static override _Q = 'w:listEntry';

}
/** Default Drop-Down List Item Index. Serialized as `w:default` */
export class DefaultDropDownListItemIndex extends OxmlLeafElement {

    public static override _Q = 'w:default';
    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): Int32Value | undefined { return this._g('w:val'); }
    public set val(v: Int32Value | undefined) { this._s('w:val', v); }

}
/** Text Box Form Field Properties. Serialized as `w:textInput` */
export class TextInput extends OxmlCompositeElement<TextBoxFormFieldType | DefaultTextBoxFormFieldString | MaxLength | Format> {

    public static override _Q = 'w:textInput';
    /** Text Box Form Field Type. */
    public get textBoxFormFieldType(): TextBoxFormFieldType | undefined { return this._f(TextBoxFormFieldType); }
    /** Default Text Box Form Field String. */
    public get defaultTextBoxFormFieldString(): DefaultTextBoxFormFieldString | undefined { return this._f(DefaultTextBoxFormFieldString); }
    /** Text Box Form Field Maximum Length. */
    public get maxLength(): MaxLength | undefined { return this._f(MaxLength); }
    /** Text Box Form Field Formatting. */
    public get format(): Format | undefined { return this._f(Format); }

}
/** Drop-Down List Form Field Properties. Serialized as `w:ddList` */
export class DropDownListFormField extends OxmlCompositeElement<DropDownListSelection | DefaultDropDownListItemIndex | ListEntryFormField> {

    public static override _Q = 'w:ddList';
    /** Drop-Down List Selection. */
    public get dropDownListSelection(): DropDownListSelection | undefined { return this._f(DropDownListSelection); }
    /** Default Drop-Down List Item Index. */
    public get defaultDropDownListItemIndex(): DefaultDropDownListItemIndex | undefined { return this._f(DefaultDropDownListItemIndex); }

}
/** Checkbox Form Field Properties. Serialized as `w:checkBox` */
export class CheckBox extends OxmlCompositeElement<FormFieldSize | AutomaticallySizeFormField | DefaultCheckBoxFormFieldState | Checked> {

    public static override _Q = 'w:checkBox';

}
/** Associated Status Text. Serialized as `w:statusText` */
export class StatusText extends OxmlLeafElement {

    public static override _Q = 'w:statusText';
    public static override _A = ['w:type','w:val',];
    /** Status Text Type. Serialized as `w:type` */
    public get type(): InfoTextValues | undefined { return this._g('w:type'); }
    public set type(v: InfoTextValues | undefined) { this._s('w:type', v); }
    /** Status Text Value. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Associated Help Text. Serialized as `w:helpText` */
export class HelpText extends OxmlLeafElement {

    public static override _Q = 'w:helpText';
    public static override _A = ['w:type','w:val',];
    /** Help Text Type. Serialized as `w:type` */
    public get type(): InfoTextValues | undefined { return this._g('w:type'); }
    public set type(v: InfoTextValues | undefined) { this._s('w:type', v); }
    /** Help Text Value. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Defines the MacroNameType Class. */
export abstract class MacroNameType extends OxmlLeafElement {

    public static override _A = ['w:val',];
    /** Name of Script Function. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Script Function to Execute on Form Field Exit. Serialized as `w:exitMacro` */
export class ExitMacro extends MacroNameType {

    public static override _Q = 'w:exitMacro';

}
/** Script Function to Execute on Form Field Entry. Serialized as `w:entryMacro` */
export class EntryMacro extends MacroNameType {

    public static override _Q = 'w:entryMacro';

}
/** Form Field Name. Serialized as `w:name` */
export class FormFieldName extends OxmlLeafElement {

    public static override _Q = 'w:name';
    public static override _A = ['w:val',];
    /** Form Field Name Value. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Form Field Properties. Serialized as `w:ffData` */
export class FormFieldData extends OxmlCompositeElement<FormFieldName | Enabled | CalculateOnExit | EntryMacro | ExitMacro | HelpText | StatusText | CheckBox | DropDownListFormField | TextInput> {

    public static override _Q = 'w:ffData';

}
/** Custom Field Data. Serialized as `w:fldData` */
export class FieldData extends OxmlLeafTextElement {

    public static override _Q = 'w:fldData';

}
/** Section Properties. Serialized as `w:sectPr` */
export class SectionProperties extends OxmlCompositeElement<HeaderReference | FooterReference | FootnoteProperties | EndnoteProperties | SectionType | PageSize | PageMargin | PaperSource | PageBorders | LineNumberType | PageNumberType | Columns | FormProtection | VerticalTextAlignmentOnPage | NoEndnote | TitlePage | TextDirection | BiDi | GutterOnRight | DocGrid | PrinterSettingsReference | W15FootnoteColumns | SectionPropertiesChange> {

    public static override _Q = 'w:sectPr';
    public static override _A = ['w:rsidRPr','w:rsidDel','w:rsidR','w:rsidSect',];
    /** Physical Section Mark Character Revision ID. Serialized as `w:rsidRPr` */
    public get rsidRPr(): HexBinaryValue | undefined { return this._g('w:rsidRPr'); }
    public set rsidRPr(v: HexBinaryValue | undefined) { this._s('w:rsidRPr', v); }
    /** Section Deletion Revision ID. Serialized as `w:rsidDel` */
    public get rsidDel(): HexBinaryValue | undefined { return this._g('w:rsidDel'); }
    public set rsidDel(v: HexBinaryValue | undefined) { this._s('w:rsidDel', v); }
    /** Section Addition Revision ID. Serialized as `w:rsidR` */
    public get rsidR(): HexBinaryValue | undefined { return this._g('w:rsidR'); }
    public set rsidR(v: HexBinaryValue | undefined) { this._s('w:rsidR', v); }
    /** Section Properties Revision ID. Serialized as `w:rsidSect` */
    public get rsidSect(): HexBinaryValue | undefined { return this._g('w:rsidSect'); }
    public set rsidSect(v: HexBinaryValue | undefined) { this._s('w:rsidSect', v); }

}
/** Run Properties for the Paragraph Mark. Serialized as `w:rPr` */
export class ParagraphMarkRunProperties extends OxmlCompositeElement<Inserted | Deleted | MoveFrom | MoveTo | W14ConflictInsertion | W14ConflictDeletion | RunStyle | RunFonts | Bold | BoldComplexScript | Italic | ItalicComplexScript | Caps | SmallCaps | Strike | DoubleStrike | Outline | Shadow | Emboss | Imprint | NoProof | SnapToGrid | Vanish | WebHidden | Color | Spacing | CharacterScale | Kern | Position | FontSize | FontSizeComplexScript | Highlight | Underline | TextEffect | Border | Shading | FitText | VerticalTextAlignment | RightToLeftText | ComplexScript | Emphasis | Languages | EastAsianLayout | SpecVanish | W14Glow | W14Shadow | W14Reflection | W14TextOutlineEffect | W14FillTextEffect | W14Scene3D | W14Properties3D | W14Ligatures | W14NumberingFormat | W14NumberSpacing | W14StylisticSets | W14ContextualAlternatives | OfficeMath | ParagraphMarkRunPropertiesChange> {

    public static override _Q = 'w:rPr';
    /** Inserted Paragraph. */
    public get inserted(): Inserted | undefined { return this._f(Inserted); }
    /** Deleted Paragraph. */
    public get deleted(): Deleted | undefined { return this._f(Deleted); }
    /** Move Source Paragraph. */
    public get moveFrom(): MoveFrom | undefined { return this._f(MoveFrom); }
    /** Move Destination Paragraph. */
    public get moveTo(): MoveTo | undefined { return this._f(MoveTo); }

}
/** Custom Tab Stop. Serialized as `w:tab` */
export class TabStop extends OxmlLeafElement {

    public static override _Q = 'w:tab';
    public static override _A = ['w:val','w:leader','w:pos',];
    /** Tab Stop Type. Serialized as `w:val` */
    public get val(): TabStopValues | undefined { return this._g('w:val'); }
    public set val(v: TabStopValues | undefined) { this._s('w:val', v); }
    /** Tab Leader Character. Serialized as `w:leader` */
    public get leader(): TabStopLeaderCharValues | undefined { return this._g('w:leader'); }
    public set leader(v: TabStopLeaderCharValues | undefined) { this._s('w:leader', v); }
    /** Tab Stop Position. Serialized as `w:pos` */
    public get position(): Int32Value | undefined { return this._g('w:pos'); }
    public set position(v: Int32Value | undefined) { this._s('w:pos', v); }

}
/** Previous Paragraph Numbering Properties. Serialized as `w:numberingChange` */
export class NumberingChange extends OxmlLeafElement {

    public static override _Q = 'w:numberingChange';
    public static override _A = ['w:original','w:author','w:date','w16du:dateUtc','w:id',];
    /** original. Serialized as `w:original` */
    public get original(): StringValue | undefined { return this._g('w:original'); }
    public set original(v: StringValue | undefined) { this._s('w:original', v); }
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
/** Defines the NonNegativeDecimalNumberType Class. */
export abstract class NonNegativeDecimalNumberType extends OxmlLeafElement {

    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): Int32Value | undefined { return this._g('w:val'); }
    public set val(v: Int32Value | undefined) { this._s('w:val', v); }

}
/** Defines the AbstractNumId Class. Serialized as `w:abstractNumId` */
export class AbstractNumId extends NonNegativeDecimalNumberType {

    public static override _Q = 'w:abstractNumId';

}
/** Starting Value. Serialized as `w:start` */
export class StartNumberingValue extends NonNegativeDecimalNumberType {

    public static override _Q = 'w:start';

}
/** Numbering Definition Instance Reference. Serialized as `w:numId` */
export class NumberingId extends NonNegativeDecimalNumberType {

    public static override _Q = 'w:numId';

}
/** Numbering Level Reference. Serialized as `w:ilvl` */
export class NumberingLevelReference extends OxmlLeafElement {

    public static override _Q = 'w:ilvl';
    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): Int32Value | undefined { return this._g('w:val'); }
    public set val(v: Int32Value | undefined) { this._s('w:val', v); }

}
/** Previous Run Properties for the Paragraph Mark. Serialized as `w:rPr` */
export class PreviousParagraphMarkRunProperties extends OxmlCompositeElement<Inserted | Deleted | MoveFrom | MoveTo | W14ConflictInsertion | W14ConflictDeletion | RunStyle | RunFonts | Bold | BoldComplexScript | Italic | ItalicComplexScript | Caps | SmallCaps | Strike | DoubleStrike | Outline | Shadow | Emboss | Imprint | NoProof | SnapToGrid | Vanish | WebHidden | Color | Spacing | CharacterScale | Kern | Position | FontSize | FontSizeComplexScript | Highlight | Underline | TextEffect | Border | Shading | FitText | VerticalTextAlignment | RightToLeftText | ComplexScript | Emphasis | Languages | EastAsianLayout | SpecVanish | W14Glow | W14Shadow | W14Reflection | W14TextOutlineEffect | W14FillTextEffect | W14Scene3D | W14Properties3D | W14Ligatures | W14NumberingFormat | W14NumberSpacing | W14StylisticSets | W14ContextualAlternatives | OfficeMath> {

    public static override _Q = 'w:rPr';
    /** Inserted Paragraph. */
    public get inserted(): Inserted | undefined { return this._f(Inserted); }
    /** Deleted Paragraph. */
    public get deleted(): Deleted | undefined { return this._f(Deleted); }
    /** Move Source Paragraph. */
    public get moveFrom(): MoveFrom | undefined { return this._f(MoveFrom); }
    /** Move Destination Paragraph. */
    public get moveTo(): MoveTo | undefined { return this._f(MoveTo); }

}
/** Previous Run Properties. Serialized as `w:rPr` */
export class PreviousRunProperties extends OxmlCompositeElement<RunStyle | RunFonts | Bold | BoldComplexScript | Italic | ItalicComplexScript | Caps | SmallCaps | Strike | DoubleStrike | Outline | Shadow | Emboss | Imprint | NoProof | SnapToGrid | Vanish | WebHidden | Color | Spacing | CharacterScale | Kern | Position | FontSize | FontSizeComplexScript | Highlight | Underline | TextEffect | Border | Shading | FitText | VerticalTextAlignment | RightToLeftText | ComplexScript | Emphasis | Languages | EastAsianLayout | SpecVanish | W14Glow | W14Shadow | W14Reflection | W14TextOutlineEffect | W14FillTextEffect | W14Scene3D | W14Properties3D | W14Ligatures | W14NumberingFormat | W14NumberSpacing | W14StylisticSets | W14ContextualAlternatives> {

    public static override _Q = 'w:rPr';

}
/** Previous Paragraph Properties. Serialized as `w:pPr` */
export class ParagraphPropertiesExtended extends OxmlCompositeElement<ParagraphStyleId | KeepNext | KeepLines | PageBreakBefore | FrameProperties | WidowControl | NumberingProperties | SuppressLineNumbers | ParagraphBorders | Shading | Tabs | SuppressAutoHyphens | Kinsoku | WordWrap | OverflowPunctuation | TopLinePunctuation | AutoSpaceDE | AutoSpaceDN | BiDi | AdjustRightIndent | SnapToGrid | SpacingBetweenLines | Indentation | ContextualSpacing | MirrorIndents | SuppressOverlap | Justification | TextDirection | TextAlignment | TextBoxTightWrap | OutlineLevel | DivId | ConditionalFormatStyle> {

    public static override _Q = 'w:pPr';
    /** Returns ParagraphStyleId. */
    public get paragraphStyleId(): ParagraphStyleId | undefined { return this._f(ParagraphStyleId); }
    /** Returns KeepNext. */
    public get keepNext(): KeepNext | undefined { return this._f(KeepNext); }
    /** Returns KeepLines. */
    public get keepLines(): KeepLines | undefined { return this._f(KeepLines); }
    /** Returns PageBreakBefore. */
    public get pageBreakBefore(): PageBreakBefore | undefined { return this._f(PageBreakBefore); }
    /** Returns FrameProperties. */
    public get frameProperties(): FrameProperties | undefined { return this._f(FrameProperties); }
    /** Returns WidowControl. */
    public get widowControl(): WidowControl | undefined { return this._f(WidowControl); }
    /** Returns NumberingProperties. */
    public get numberingProperties(): NumberingProperties | undefined { return this._f(NumberingProperties); }
    /** Returns SuppressLineNumbers. */
    public get suppressLineNumbers(): SuppressLineNumbers | undefined { return this._f(SuppressLineNumbers); }
    /** Returns ParagraphBorders. */
    public get paragraphBorders(): ParagraphBorders | undefined { return this._f(ParagraphBorders); }
    /** Returns Shading. */
    public get shading(): Shading | undefined { return this._f(Shading); }
    /** Returns Tabs. */
    public get tabs(): Tabs | undefined { return this._f(Tabs); }
    /** Returns SuppressAutoHyphens. */
    public get suppressAutoHyphens(): SuppressAutoHyphens | undefined { return this._f(SuppressAutoHyphens); }
    /** Returns Kinsoku. */
    public get kinsoku(): Kinsoku | undefined { return this._f(Kinsoku); }
    /** Returns WordWrap. */
    public get wordWrap(): WordWrap | undefined { return this._f(WordWrap); }
    /** Returns OverflowPunctuation. */
    public get overflowPunctuation(): OverflowPunctuation | undefined { return this._f(OverflowPunctuation); }
    /** Returns TopLinePunctuation. */
    public get topLinePunctuation(): TopLinePunctuation | undefined { return this._f(TopLinePunctuation); }
    /** Returns AutoSpaceDE. */
    public get autoSpaceDE(): AutoSpaceDE | undefined { return this._f(AutoSpaceDE); }
    /** Returns AutoSpaceDN. */
    public get autoSpaceDN(): AutoSpaceDN | undefined { return this._f(AutoSpaceDN); }
    /** Returns BiDi. */
    public get biDi(): BiDi | undefined { return this._f(BiDi); }
    /** Returns AdjustRightIndent. */
    public get adjustRightIndent(): AdjustRightIndent | undefined { return this._f(AdjustRightIndent); }
    /** Returns SnapToGrid. */
    public get snapToGrid(): SnapToGrid | undefined { return this._f(SnapToGrid); }
    /** Returns SpacingBetweenLines. */
    public get spacingBetweenLines(): SpacingBetweenLines | undefined { return this._f(SpacingBetweenLines); }
    /** Returns Indentation. */
    public get indentation(): Indentation | undefined { return this._f(Indentation); }
    /** Returns ContextualSpacing. */
    public get contextualSpacing(): ContextualSpacing | undefined { return this._f(ContextualSpacing); }
    /** Returns MirrorIndents. */
    public get mirrorIndents(): MirrorIndents | undefined { return this._f(MirrorIndents); }
    /** Returns SuppressOverlap. */
    public get suppressOverlap(): SuppressOverlap | undefined { return this._f(SuppressOverlap); }
    /** Returns Justification. */
    public get justification(): Justification | undefined { return this._f(Justification); }
    /** Returns TextDirection. */
    public get textDirection(): TextDirection | undefined { return this._f(TextDirection); }
    /** Returns TextAlignment. */
    public get textAlignment(): TextAlignment | undefined { return this._f(TextAlignment); }
    /** Returns TextBoxTightWrap. */
    public get textBoxTightWrap(): TextBoxTightWrap | undefined { return this._f(TextBoxTightWrap); }
    /** Returns OutlineLevel. */
    public get outlineLevel(): OutlineLevel | undefined { return this._f(OutlineLevel); }
    /** Returns DivId. */
    public get divId(): DivId | undefined { return this._f(DivId); }
    /** Returns ConditionalFormatStyle. */
    public get conditionalFormatStyle(): ConditionalFormatStyle | undefined { return this._f(ConditionalFormatStyle); }

}
/** Previous Section Properties. Serialized as `w:sectPr` */
export class PreviousSectionProperties extends OxmlCompositeElement<FootnoteProperties | EndnoteProperties | SectionType | PageSize | PageMargin | PaperSource | PageBorders | LineNumberType | PageNumberType | Columns | FormProtection | VerticalTextAlignmentOnPage | NoEndnote | TitlePage | TextDirection | BiDi | GutterOnRight | DocGrid | PrinterSettingsReference | W15FootnoteColumns> {

    public static override _Q = 'w:sectPr';
    public static override _A = ['w:rsidRPr','w:rsidDel','w:rsidR','w:rsidSect',];
    /** Physical Section Mark Character Revision ID. Serialized as `w:rsidRPr` */
    public get rsidRPr(): HexBinaryValue | undefined { return this._g('w:rsidRPr'); }
    public set rsidRPr(v: HexBinaryValue | undefined) { this._s('w:rsidRPr', v); }
    /** Section Deletion Revision ID. Serialized as `w:rsidDel` */
    public get rsidDel(): HexBinaryValue | undefined { return this._g('w:rsidDel'); }
    public set rsidDel(v: HexBinaryValue | undefined) { this._s('w:rsidDel', v); }
    /** Section Addition Revision ID. Serialized as `w:rsidR` */
    public get rsidR(): HexBinaryValue | undefined { return this._g('w:rsidR'); }
    public set rsidR(v: HexBinaryValue | undefined) { this._s('w:rsidR', v); }
    /** Section Properties Revision ID. Serialized as `w:rsidSect` */
    public get rsidSect(): HexBinaryValue | undefined { return this._g('w:rsidSect'); }
    public set rsidSect(v: HexBinaryValue | undefined) { this._s('w:rsidSect', v); }
    /** Returns FootnoteProperties. */
    public get footnoteProperties(): FootnoteProperties | undefined { return this._f(FootnoteProperties); }
    /** Returns EndnoteProperties. */
    public get endnoteProperties(): EndnoteProperties | undefined { return this._f(EndnoteProperties); }
    /** Returns SectionType. */
    public get sectionType(): SectionType | undefined { return this._f(SectionType); }
    /** Returns PageSize. */
    public get pageSize(): PageSize | undefined { return this._f(PageSize); }
    /** Returns PageMargin. */
    public get pageMargin(): PageMargin | undefined { return this._f(PageMargin); }
    /** Returns PaperSource. */
    public get paperSource(): PaperSource | undefined { return this._f(PaperSource); }
    /** Returns PageBorders. */
    public get pageBorders(): PageBorders | undefined { return this._f(PageBorders); }
    /** Returns LineNumberType. */
    public get lineNumberType(): LineNumberType | undefined { return this._f(LineNumberType); }
    /** Returns PageNumberType. */
    public get pageNumberType(): PageNumberType | undefined { return this._f(PageNumberType); }
    /** Returns Columns. */
    public get columns(): Columns | undefined { return this._f(Columns); }
    /** Returns FormProtection. */
    public get formProtection(): FormProtection | undefined { return this._f(FormProtection); }
    /** Returns VerticalTextAlignmentOnPage. */
    public get verticalTextAlignmentOnPage(): VerticalTextAlignmentOnPage | undefined { return this._f(VerticalTextAlignmentOnPage); }
    /** Returns NoEndnote. */
    public get noEndnote(): NoEndnote | undefined { return this._f(NoEndnote); }
    /** Returns TitlePage. */
    public get titlePage(): TitlePage | undefined { return this._f(TitlePage); }
    /** Returns TextDirection. */
    public get textDirection(): TextDirection | undefined { return this._f(TextDirection); }
    /** Returns BiDi. */
    public get biDi(): BiDi | undefined { return this._f(BiDi); }
    /** Returns GutterOnRight. */
    public get gutterOnRight(): GutterOnRight | undefined { return this._f(GutterOnRight); }
    /** Returns DocGrid. */
    public get docGrid(): DocGrid | undefined { return this._f(DocGrid); }
    /** Returns PrinterSettingsReference. */
    public get printerSettingsReference(): PrinterSettingsReference | undefined { return this._f(PrinterSettingsReference); }
    /** Returns W15FootnoteColumns. */
    public get footnoteColumns(): W15FootnoteColumns | undefined { return this._f(W15FootnoteColumns); }

}
/** Previous Table Properties. Serialized as `w:tblPr` */
export class PreviousTableProperties extends OxmlCompositeElement<TableStyle | TablePositionProperties | TableOverlap | BiDiVisual | TableWidth | TableJustification | TableCellSpacing | TableIndentation | TableBorders | Shading | TableLayout | TableCellMarginDefault | TableLook | TableCaption | TableDescription> {

    public static override _Q = 'w:tblPr';
    /** Returns TableStyle. */
    public get tableStyle(): TableStyle | undefined { return this._f(TableStyle); }
    /** Returns TablePositionProperties. */
    public get tablePositionProperties(): TablePositionProperties | undefined { return this._f(TablePositionProperties); }
    /** Returns TableOverlap. */
    public get tableOverlap(): TableOverlap | undefined { return this._f(TableOverlap); }
    /** Returns BiDiVisual. */
    public get biDiVisual(): BiDiVisual | undefined { return this._f(BiDiVisual); }
    /** Returns TableWidth. */
    public get tableWidth(): TableWidth | undefined { return this._f(TableWidth); }
    /** Returns TableJustification. */
    public get tableJustification(): TableJustification | undefined { return this._f(TableJustification); }
    /** Returns TableCellSpacing. */
    public get tableCellSpacing(): TableCellSpacing | undefined { return this._f(TableCellSpacing); }
    /** Returns TableIndentation. */
    public get tableIndentation(): TableIndentation | undefined { return this._f(TableIndentation); }
    /** Returns TableBorders. */
    public get tableBorders(): TableBorders | undefined { return this._f(TableBorders); }
    /** Returns Shading. */
    public get shading(): Shading | undefined { return this._f(Shading); }
    /** Returns TableLayout. */
    public get tableLayout(): TableLayout | undefined { return this._f(TableLayout); }
    /** Returns TableCellMarginDefault. */
    public get tableCellMarginDefault(): TableCellMarginDefault | undefined { return this._f(TableCellMarginDefault); }
    /** Returns TableLook. */
    public get tableLook(): TableLook | undefined { return this._f(TableLook); }
    /** Returns TableCaption. */
    public get tableCaption(): TableCaption | undefined { return this._f(TableCaption); }
    /** Returns TableDescription. */
    public get tableDescription(): TableDescription | undefined { return this._f(TableDescription); }

}
/** Previous Table Row Properties. Serialized as `w:trPr` */
export class PreviousTableRowProperties extends OxmlCompositeElement<ConditionalFormatStyle | DivId | GridBefore | GridAfter | WidthBeforeTableRow | WidthAfterTableRow | TableRowHeight | Hidden | CantSplit | TableHeader | TableCellSpacing | TableJustification> {

    public static override _Q = 'w:trPr';

}
/** Previous Table Cell Properties. Serialized as `w:tcPr` */
export class PreviousTableCellProperties extends OxmlCompositeElement<ConditionalFormatStyle | TableCellWidth | GridSpan | HorizontalMerge | VerticalMerge | TableCellBorders | Shading | NoWrap | TableCellMargin | TextDirection | TableCellFitText | TableCellVerticalAlignment | HideMark | CellInsertion | CellDeletion | CellMerge> {

    public static override _Q = 'w:tcPr';
    /** Returns ConditionalFormatStyle. */
    public get conditionalFormatStyle(): ConditionalFormatStyle | undefined { return this._f(ConditionalFormatStyle); }
    /** Returns TableCellWidth. */
    public get tableCellWidth(): TableCellWidth | undefined { return this._f(TableCellWidth); }
    /** Returns GridSpan. */
    public get gridSpan(): GridSpan | undefined { return this._f(GridSpan); }
    /** Returns HorizontalMerge. */
    public get horizontalMerge(): HorizontalMerge | undefined { return this._f(HorizontalMerge); }
    /** Returns VerticalMerge. */
    public get verticalMerge(): VerticalMerge | undefined { return this._f(VerticalMerge); }
    /** Returns TableCellBorders. */
    public get tableCellBorders(): TableCellBorders | undefined { return this._f(TableCellBorders); }
    /** Returns Shading. */
    public get shading(): Shading | undefined { return this._f(Shading); }
    /** Returns NoWrap. */
    public get noWrap(): NoWrap | undefined { return this._f(NoWrap); }
    /** Returns TableCellMargin. */
    public get tableCellMargin(): TableCellMargin | undefined { return this._f(TableCellMargin); }
    /** Returns TextDirection. */
    public get textDirection(): TextDirection | undefined { return this._f(TextDirection); }
    /** Returns TableCellFitText. */
    public get tableCellFitText(): TableCellFitText | undefined { return this._f(TableCellFitText); }
    /** Returns TableCellVerticalAlignment. */
    public get tableCellVerticalAlignment(): TableCellVerticalAlignment | undefined { return this._f(TableCellVerticalAlignment); }
    /** Returns HideMark. */
    public get hideMark(): HideMark | undefined { return this._f(HideMark); }

}
/** Previous Table-Level Property Exceptions. Serialized as `w:tblPrEx` */
export class PreviousTablePropertyExceptions extends OxmlCompositeElement<TableWidth | TableJustification | TableCellSpacing | TableIndentation | TableBorders | Shading | TableLayout | TableCellMarginDefault | TableLook> {

    public static override _Q = 'w:tblPrEx';
    /** Preferred Table Width Exception. */
    public get tableWidth(): TableWidth | undefined { return this._f(TableWidth); }
    /** Table Alignment Exception. */
    public get tableJustification(): TableJustification | undefined { return this._f(TableJustification); }
    /** Table Cell Spacing Exception. */
    public get tableCellSpacing(): TableCellSpacing | undefined { return this._f(TableCellSpacing); }
    /** Table Indent from Leading Margin Exception. */
    public get tableIndentation(): TableIndentation | undefined { return this._f(TableIndentation); }
    /** Table Borders Exceptions. */
    public get tableBorders(): TableBorders | undefined { return this._f(TableBorders); }
    /** Table Shading Exception. */
    public get shading(): Shading | undefined { return this._f(Shading); }
    /** Table Layout Exception. */
    public get tableLayout(): TableLayout | undefined { return this._f(TableLayout); }
    /** Table Cell Margin Exceptions. */
    public get tableCellMarginDefault(): TableCellMarginDefault | undefined { return this._f(TableCellMarginDefault); }
    /** Table Style Conditional Formatting Settings Exception. */
    public get tableLook(): TableLook | undefined { return this._f(TableLook); }

}
/** Glossary Document Root Element. Serialized as `w:glossaryDocument` */
export class GlossaryDocument extends OxmlPartRootElement<DocumentBackground | DocParts> {

    public static override _Q = 'w:glossaryDocument';
    /** Document Background. */
    public get documentBackground(): DocumentBackground | undefined { return this._f(DocumentBackground); }
    /** List of Glossary Document Entries. */
    public get docParts(): DocParts | undefined { return this._f(DocParts); }

}
/** Document. Serialized as `w:document` */
export class Document extends OxmlPartRootElement<DocumentBackground | Body> {

    public static override _Q = 'w:document';
    public static override _A = ['w:conformance',];
    /** conformance. Serialized as `w:conformance` */
    public get conformance(): DocumentConformance | undefined { return this._g('w:conformance'); }
    public set conformance(v: DocumentConformance | undefined) { this._s('w:conformance', v); }
    /** Document Background. */
    public get documentBackground(): DocumentBackground | undefined { return this._f(DocumentBackground); }
    /** Returns Body. */
    public get body(): Body | undefined { return this._f(Body); }

}
/** Style Definitions. Serialized as `w:styles` */
export class Styles extends OxmlPartRootElement<DocDefaults | LatentStyles | Style> {

    public static override _Q = 'w:styles';
    /** Document Default Paragraph and Run Properties. */
    public get docDefaults(): DocDefaults | undefined { return this._f(DocDefaults); }
    /** Latent Style Information. */
    public get latentStyles(): LatentStyles | undefined { return this._f(LatentStyles); }

}
/** Numbering Definitions. Serialized as `w:numbering` */
export class Numbering extends OxmlPartRootElement<NumberingPictureBullet | AbstractNum | NumberingInstance | NumberingIdMacAtCleanup> {

    public static override _Q = 'w:numbering';

}
/** Font Table Root Element. Serialized as `w:fonts` */
export class Fonts extends OxmlPartRootElement<Font> {

    public static override _Q = 'w:fonts';

}
/** Web Page Settings. Serialized as `w:webSettings` */
export class WebSettings extends OxmlPartRootElement<Frameset | Divs | WebPageEncoding | OptimizeForBrowser | RelyOnVML | AllowPNG | DoNotRelyOnCSS | DoNotSaveAsSingleFile | DoNotOrganizeInFolder | DoNotUseLongFileNames | PixelsPerInch | TargetScreenSize> {

    public static override _Q = 'w:webSettings';
    /** Returns Frameset. */
    public get frameset(): Frameset | undefined { return this._f(Frameset); }
    /** Returns Divs. */
    public get divs(): Divs | undefined { return this._f(Divs); }
    /** Returns WebPageEncoding. */
    public get webPageEncoding(): WebPageEncoding | undefined { return this._f(WebPageEncoding); }
    /** Returns OptimizeForBrowser. */
    public get optimizeForBrowser(): OptimizeForBrowser | undefined { return this._f(OptimizeForBrowser); }
    /** Returns RelyOnVML. */
    public get relyOnVML(): RelyOnVML | undefined { return this._f(RelyOnVML); }
    /** Returns AllowPNG. */
    public get allowPNG(): AllowPNG | undefined { return this._f(AllowPNG); }
    /** Returns DoNotRelyOnCSS. */
    public get doNotRelyOnCSS(): DoNotRelyOnCSS | undefined { return this._f(DoNotRelyOnCSS); }
    /** Returns DoNotSaveAsSingleFile. */
    public get doNotSaveAsSingleFile(): DoNotSaveAsSingleFile | undefined { return this._f(DoNotSaveAsSingleFile); }
    /** Returns DoNotOrganizeInFolder. */
    public get doNotOrganizeInFolder(): DoNotOrganizeInFolder | undefined { return this._f(DoNotOrganizeInFolder); }
    /** Returns DoNotUseLongFileNames. */
    public get doNotUseLongFileNames(): DoNotUseLongFileNames | undefined { return this._f(DoNotUseLongFileNames); }
    /** Returns PixelsPerInch. */
    public get pixelsPerInch(): PixelsPerInch | undefined { return this._f(PixelsPerInch); }
    /** Returns TargetScreenSize. */
    public get targetScreenSize(): TargetScreenSize | undefined { return this._f(TargetScreenSize); }

}
/** Document Settings. Serialized as `w:settings` */
export class Settings extends OxmlPartRootElement<WriteProtection | View | Zoom | RemovePersonalInformation | RemoveDateAndTime | DoNotDisplayPageBoundaries | DisplayBackgroundShape | PrintPostScriptOverText | PrintFractionalCharacterWidth | PrintFormsData | EmbedTrueTypeFonts | EmbedSystemFonts | SaveSubsetFonts | SaveFormsData | MirrorMargins | AlignBorderAndEdges | BordersDoNotSurroundHeader | BordersDoNotSurroundFooter | GutterAtTop | HideSpellingErrors | HideGrammaticalErrors | ActiveWritingStyle | ProofState | FormsDesign | AttachedTemplate | LinkStyles | StylePaneFormatFilter | StylePaneSortMethods | DocumentType | MailMerge | RevisionView | TrackRevisions | DoNotTrackMoves | DoNotTrackFormatting | DocumentProtection | AutoFormatOverride | StyleLockThemesPart | StyleLockStylesPart | DefaultTabStop | AutoHyphenation | ConsecutiveHyphenLimit | HyphenationZone | DoNotHyphenateCaps | ShowEnvelope | SummaryLength | ClickAndTypeStyle | DefaultTableStyle | EvenAndOddHeaders | BookFoldReversePrinting | BookFoldPrinting | BookFoldPrintingSheets | DrawingGridHorizontalSpacing | DrawingGridVerticalSpacing | DisplayHorizontalDrawingGrid | DisplayVerticalDrawingGrid | DoNotUseMarginsForDrawingGridOrigin | DrawingGridHorizontalOrigin | DrawingGridVerticalOrigin | DoNotShadeFormData | NoPunctuationKerning | CharacterSpacingControl | PrintTwoOnOne | StrictFirstAndLastChars | NoLineBreaksAfterKinsoku | NoLineBreaksBeforeKinsoku | SavePreviewPicture | DoNotValidateAgainstSchema | SaveInvalidXml | IgnoreMixedContent | AlwaysShowPlaceholderText | DoNotDemarcateInvalidXml | SaveXmlDataOnly | UseXsltWhenSaving | SaveThroughXslt | ShowXmlTags | AlwaysMergeEmptyNamespace | UpdateFieldsOnOpen | HeaderShapeDefaults | FootnoteDocumentWideProperties | EndnoteDocumentWideProperties | Compatibility | DocumentVariables | Rsids | MMathProperties | UICompatibleWith97To2003 | AttachedSchema | ThemeFontLanguages | ColorSchemeMapping | DoNotIncludeSubdocsInStats | DoNotAutoCompressPictures | ForceUpgrade | Captions | ReadModeInkLockDown | SlSchemaLibrary | ShapeDefaults | DecimalSymbol | ListSeparator | W14DocumentId | W14DiscardImageEditingData | W14DefaultImageDpi | W14ConflictMode | W15ChartTrackingRefBased | W15PersistentDocumentId> {

    public static override _Q = 'w:settings';
    /** Write Protection. */
    public get writeProtection(): WriteProtection | undefined { return this._f(WriteProtection); }
    /** Document View Setting. */
    public get view(): View | undefined { return this._f(View); }
    /** Magnification Setting. */
    public get zoom(): Zoom | undefined { return this._f(Zoom); }
    /** Remove Personal Information from Document Properties. */
    public get removePersonalInformation(): RemovePersonalInformation | undefined { return this._f(RemovePersonalInformation); }
    /** Remove Date and Time from Annotations. */
    public get removeDateAndTime(): RemoveDateAndTime | undefined { return this._f(RemoveDateAndTime); }
    /** Do Not Display Visual Boundary For Header/Footer or Between Pages. */
    public get doNotDisplayPageBoundaries(): DoNotDisplayPageBoundaries | undefined { return this._f(DoNotDisplayPageBoundaries); }
    /** Display Background Objects When Displaying Document. */
    public get displayBackgroundShape(): DisplayBackgroundShape | undefined { return this._f(DisplayBackgroundShape); }
    /** Print PostScript Codes With Document Text. */
    public get printPostScriptOverText(): PrintPostScriptOverText | undefined { return this._f(PrintPostScriptOverText); }
    /** Print Fractional Character Widths. */
    public get printFractionalCharacterWidth(): PrintFractionalCharacterWidth | undefined { return this._f(PrintFractionalCharacterWidth); }
    /** Only Print Form Field Content. */
    public get printFormsData(): PrintFormsData | undefined { return this._f(PrintFormsData); }
    /** Embed TrueType Fonts. */
    public get embedTrueTypeFonts(): EmbedTrueTypeFonts | undefined { return this._f(EmbedTrueTypeFonts); }
    /** Embed Common System Fonts. */
    public get embedSystemFonts(): EmbedSystemFonts | undefined { return this._f(EmbedSystemFonts); }
    /** Subset Fonts When Embedding. */
    public get saveSubsetFonts(): SaveSubsetFonts | undefined { return this._f(SaveSubsetFonts); }
    /** Only Save Form Field Content. */
    public get saveFormsData(): SaveFormsData | undefined { return this._f(SaveFormsData); }
    /** Mirror Page Margins. */
    public get mirrorMargins(): MirrorMargins | undefined { return this._f(MirrorMargins); }
    /** Align Paragraph and Table Borders with Page Border. */
    public get alignBorderAndEdges(): AlignBorderAndEdges | undefined { return this._f(AlignBorderAndEdges); }
    /** Page Border Excludes Header. */
    public get bordersDoNotSurroundHeader(): BordersDoNotSurroundHeader | undefined { return this._f(BordersDoNotSurroundHeader); }
    /** Page Border Excludes Footer. */
    public get bordersDoNotSurroundFooter(): BordersDoNotSurroundFooter | undefined { return this._f(BordersDoNotSurroundFooter); }
    /** Position Gutter At Top of Page. */
    public get gutterAtTop(): GutterAtTop | undefined { return this._f(GutterAtTop); }
    /** Do Not Display Visual Indication of Spelling Errors. */
    public get hideSpellingErrors(): HideSpellingErrors | undefined { return this._f(HideSpellingErrors); }
    /** Do Not Display Visual Indication of Grammatical Errors. */
    public get hideGrammaticalErrors(): HideGrammaticalErrors | undefined { return this._f(HideGrammaticalErrors); }

}
/** Defines the HeaderFooterType Class. */
export abstract class HeaderFooterType extends OxmlCompositeElement<AltChunk | CustomXmlBlock | SdtBlock | Paragraph | Table | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {


}
/** Footer. Serialized as `w:ftr` */
export class Footer extends OxmlPartRootElement<AltChunk | CustomXmlBlock | SdtBlock | Paragraph | Table | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {

    public static override _Q = 'w:ftr';

}
/** Header. Serialized as `w:hdr` */
export class Header extends OxmlPartRootElement<AltChunk | CustomXmlBlock | SdtBlock | Paragraph | Table | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {

    public static override _Q = 'w:hdr';

}
/** Document Endnotes. Serialized as `w:endnotes` */
export class Endnotes extends OxmlPartRootElement<Endnote> {

    public static override _Q = 'w:endnotes';

}
/** Document Footnotes. Serialized as `w:footnotes` */
export class Footnotes extends OxmlPartRootElement<Footnote> {

    public static override _Q = 'w:footnotes';

}
/** Comments Collection. Serialized as `w:comments` */
export class Comments extends OxmlPartRootElement<Comment> {

    public static override _Q = 'w:comments';

}
/** Rich Text Box Content Container. Serialized as `w:txbxContent` */
export class TextBoxContent extends OxmlCompositeElement<AltChunk | CustomXmlBlock | SdtBlock | Paragraph | Table | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {

    public static override _Q = 'w:txbxContent';

}
/** Inclusion/Exclusion Data for Data Source. Serialized as `w:recipients` */
export class Recipients extends OxmlPartRootElement<RecipientData> {

    public static override _Q = 'w:recipients';

}
/** Defines the DocGrid Class. Serialized as `w:docGrid` */
export class DocGrid extends OxmlLeafElement {

    public static override _Q = 'w:docGrid';
    public static override _A = ['w:type','w:linePitch','w:charSpace',];
    /** Document Grid Type. Serialized as `w:type` */
    public get type(): DocGridValues | undefined { return this._g('w:type'); }
    public set type(v: DocGridValues | undefined) { this._s('w:type', v); }
    /** Document Grid Line Pitch. Serialized as `w:linePitch` */
    public get linePitch(): Int32Value | undefined { return this._g('w:linePitch'); }
    public set linePitch(v: Int32Value | undefined) { this._s('w:linePitch', v); }
    /** Document Grid Character Pitch. Serialized as `w:charSpace` */
    public get characterSpace(): Int32Value | undefined { return this._g('w:charSpace'); }
    public set characterSpace(v: Int32Value | undefined) { this._s('w:charSpace', v); }

}
/** Defines the VerticalTextAlignmentOnPage Class. Serialized as `w:vAlign` */
export class VerticalTextAlignmentOnPage extends OxmlLeafElement {

    public static override _Q = 'w:vAlign';
    public static override _A = ['w:val',];
    /** Vertical Alignment Setting. Serialized as `w:val` */
    public get val(): VerticalJustificationValues | undefined { return this._g('w:val'); }
    public set val(v: VerticalJustificationValues | undefined) { this._s('w:val', v); }

}
/** Defines the Columns Class. Serialized as `w:cols` */
export class Columns extends OxmlCompositeElement<Column> {

    public static override _Q = 'w:cols';
    public static override _A = ['w:equalWidth','w:space','w:num','w:sep',];
    /** Equal Column Widths. Serialized as `w:equalWidth` */
    public get equalWidth(): OnOffValue | undefined { return this._g('w:equalWidth'); }
    public set equalWidth(v: OnOffValue | undefined) { this._s('w:equalWidth', v); }
    /** Spacing Between Equal Width Columns. Serialized as `w:space` */
    public get space(): StringValue | undefined { return this._g('w:space'); }
    public set space(v: StringValue | undefined) { this._s('w:space', v); }
    /** Number of Equal Width Columns. Serialized as `w:num` */
    public get columnCount(): Int16Value | undefined { return this._g('w:num'); }
    public set columnCount(v: Int16Value | undefined) { this._s('w:num', v); }
    /** Draw Line Between Columns. Serialized as `w:sep` */
    public get separator(): OnOffValue | undefined { return this._g('w:sep'); }
    public set separator(v: OnOffValue | undefined) { this._s('w:sep', v); }

}
/** Defines the PageNumberType Class. Serialized as `w:pgNumType` */
export class PageNumberType extends OxmlLeafElement {

    public static override _Q = 'w:pgNumType';
    public static override _A = ['w:fmt','w:start','w:chapStyle','w:chapSep',];
    /** Page Number Format. Serialized as `w:fmt` */
    public get format(): NumberFormatValues | undefined { return this._g('w:fmt'); }
    public set format(v: NumberFormatValues | undefined) { this._s('w:fmt', v); }
    /** Starting Page Number. Serialized as `w:start` */
    public get start(): Int32Value | undefined { return this._g('w:start'); }
    public set start(v: Int32Value | undefined) { this._s('w:start', v); }
    /** Chapter Heading Style. Serialized as `w:chapStyle` */
    public get chapterStyle(): ByteValue | undefined { return this._g('w:chapStyle'); }
    public set chapterStyle(v: ByteValue | undefined) { this._s('w:chapStyle', v); }
    /** Chapter Separator Character. Serialized as `w:chapSep` */
    public get chapterSeparator(): ChapterSeparatorValues | undefined { return this._g('w:chapSep'); }
    public set chapterSeparator(v: ChapterSeparatorValues | undefined) { this._s('w:chapSep', v); }

}
/** Defines the LineNumberType Class. Serialized as `w:lnNumType` */
export class LineNumberType extends OxmlLeafElement {

    public static override _Q = 'w:lnNumType';
    public static override _A = ['w:countBy','w:start','w:distance','w:restart',];
    /** Line Number Increments to Display. Serialized as `w:countBy` */
    public get countBy(): Int16Value | undefined { return this._g('w:countBy'); }
    public set countBy(v: Int16Value | undefined) { this._s('w:countBy', v); }
    /** Line Numbering Starting Value. Serialized as `w:start` */
    public get start(): Int16Value | undefined { return this._g('w:start'); }
    public set start(v: Int16Value | undefined) { this._s('w:start', v); }
    /** Distance Between Text and Line Numbering. Serialized as `w:distance` */
    public get distance(): StringValue | undefined { return this._g('w:distance'); }
    public set distance(v: StringValue | undefined) { this._s('w:distance', v); }
    /** Line Numbering Restart Setting. Serialized as `w:restart` */
    public get restart(): LineNumberRestartValues | undefined { return this._g('w:restart'); }
    public set restart(v: LineNumberRestartValues | undefined) { this._s('w:restart', v); }

}
/** Defines the PageBorders Class. Serialized as `w:pgBorders` */
export class PageBorders extends OxmlCompositeElement<TopBorder | LeftBorder | BottomBorder | RightBorder> {

    public static override _Q = 'w:pgBorders';
    public static override _A = ['w:zOrder','w:display','w:offsetFrom',];
    /** Z-Ordering of Page Border. Serialized as `w:zOrder` */
    public get zOrder(): PageBorderZOrderValues | undefined { return this._g('w:zOrder'); }
    public set zOrder(v: PageBorderZOrderValues | undefined) { this._s('w:zOrder', v); }
    /** Pages to Display Page Borders. Serialized as `w:display` */
    public get display(): PageBorderDisplayValues | undefined { return this._g('w:display'); }
    public set display(v: PageBorderDisplayValues | undefined) { this._s('w:display', v); }
    /** Page Border Positioning. Serialized as `w:offsetFrom` */
    public get offsetFrom(): PageBorderOffsetValues | undefined { return this._g('w:offsetFrom'); }
    public set offsetFrom(v: PageBorderOffsetValues | undefined) { this._s('w:offsetFrom', v); }
    /** Top Border. */
    public get topBorder(): TopBorder | undefined { return this._f(TopBorder); }
    /** Left Border. */
    public get leftBorder(): LeftBorder | undefined { return this._f(LeftBorder); }
    /** Bottom Border. */
    public get bottomBorder(): BottomBorder | undefined { return this._f(BottomBorder); }
    /** Right Border. */
    public get rightBorder(): RightBorder | undefined { return this._f(RightBorder); }

}
/** Defines the PaperSource Class. Serialized as `w:paperSrc` */
export class PaperSource extends OxmlLeafElement {

    public static override _Q = 'w:paperSrc';
    public static override _A = ['w:first','w:other',];
    /** First Page Printer Tray Code. Serialized as `w:first` */
    public get first(): UInt16Value | undefined { return this._g('w:first'); }
    public set first(v: UInt16Value | undefined) { this._s('w:first', v); }
    /** Non-First Page Printer Tray Code. Serialized as `w:other` */
    public get other(): UInt16Value | undefined { return this._g('w:other'); }
    public set other(v: UInt16Value | undefined) { this._s('w:other', v); }

}
/** Defines the PageMargin Class. Serialized as `w:pgMar` */
export class PageMargin extends OxmlLeafElement {

    public static override _Q = 'w:pgMar';
    public static override _A = ['w:top','w:right','w:bottom','w:left','w:header','w:footer','w:gutter',];
    /** Top Margin Spacing. Serialized as `w:top` */
    public get top(): Int32Value | undefined { return this._g('w:top'); }
    public set top(v: Int32Value | undefined) { this._s('w:top', v); }
    /** Right Margin Spacing. Serialized as `w:right` */
    public get right(): UInt32Value | undefined { return this._g('w:right'); }
    public set right(v: UInt32Value | undefined) { this._s('w:right', v); }
    /** Page Bottom Spacing. Serialized as `w:bottom` */
    public get bottom(): Int32Value | undefined { return this._g('w:bottom'); }
    public set bottom(v: Int32Value | undefined) { this._s('w:bottom', v); }
    /** Left Margin Spacing. Serialized as `w:left` */
    public get left(): UInt32Value | undefined { return this._g('w:left'); }
    public set left(v: UInt32Value | undefined) { this._s('w:left', v); }
    /** Spacing to Top of Header. Serialized as `w:header` */
    public get header(): UInt32Value | undefined { return this._g('w:header'); }
    public set header(v: UInt32Value | undefined) { this._s('w:header', v); }
    /** Spacing to Bottom of Footer. Serialized as `w:footer` */
    public get footer(): UInt32Value | undefined { return this._g('w:footer'); }
    public set footer(v: UInt32Value | undefined) { this._s('w:footer', v); }
    /** Page Gutter Spacing. Serialized as `w:gutter` */
    public get gutter(): UInt32Value | undefined { return this._g('w:gutter'); }
    public set gutter(v: UInt32Value | undefined) { this._s('w:gutter', v); }

}
/** Defines the PageSize Class. Serialized as `w:pgSz` */
export class PageSize extends OxmlLeafElement {

    public static override _Q = 'w:pgSz';
    public static override _A = ['w:w','w:h','w:orient','w:code',];
    /** Page Width. Serialized as `w:w` */
    public get width(): UInt32Value | undefined { return this._g('w:w'); }
    public set width(v: UInt32Value | undefined) { this._s('w:w', v); }
    /** Page Height. Serialized as `w:h` */
    public get height(): UInt32Value | undefined { return this._g('w:h'); }
    public set height(v: UInt32Value | undefined) { this._s('w:h', v); }
    /** Page Orientation. Serialized as `w:orient` */
    public get orient(): PageOrientationValues | undefined { return this._g('w:orient'); }
    public set orient(v: PageOrientationValues | undefined) { this._s('w:orient', v); }
    /** Printer Paper Code. Serialized as `w:code` */
    public get code(): UInt16Value | undefined { return this._g('w:code'); }
    public set code(v: UInt16Value | undefined) { this._s('w:code', v); }

}
/** Defines the SectionType Class. Serialized as `w:type` */
export class SectionType extends OxmlLeafElement {

    public static override _Q = 'w:type';
    public static override _A = ['w:val',];
    /** Section Type Setting. Serialized as `w:val` */
    public get val(): SectionMarkValues | undefined { return this._g('w:val'); }
    public set val(v: SectionMarkValues | undefined) { this._s('w:val', v); }

}
/** Defines the EndnoteProperties Class. Serialized as `w:endnotePr` */
export class EndnoteProperties extends OxmlCompositeElement<EndnotePosition | NumberingFormat | NumberingStart | NumberingRestart> {

    public static override _Q = 'w:endnotePr';
    /** Endnote Placement. */
    public get endnotePosition(): EndnotePosition | undefined { return this._f(EndnotePosition); }
    /** Endnote Numbering Format. */
    public get numberingFormat(): NumberingFormat | undefined { return this._f(NumberingFormat); }
    /** Footnote and Endnote Numbering Starting Value. */
    public get numberingStart(): NumberingStart | undefined { return this._f(NumberingStart); }
    /** Footnote and Endnote Numbering Restart Location. */
    public get numberingRestart(): NumberingRestart | undefined { return this._f(NumberingRestart); }

}
/** Defines the FootnoteProperties Class. Serialized as `w:footnotePr` */
export class FootnoteProperties extends OxmlCompositeElement<FootnotePosition | NumberingFormat | NumberingStart | NumberingRestart> {

    public static override _Q = 'w:footnotePr';
    /** Footnote Placement. */
    public get footnotePosition(): FootnotePosition | undefined { return this._f(FootnotePosition); }
    /** Footnote Numbering Format. */
    public get numberingFormat(): NumberingFormat | undefined { return this._f(NumberingFormat); }
    /** Footnote and Endnote Numbering Starting Value. */
    public get numberingStart(): NumberingStart | undefined { return this._f(NumberingStart); }
    /** Footnote and Endnote Numbering Restart Location. */
    public get numberingRestart(): NumberingRestart | undefined { return this._f(NumberingRestart); }

}
/** Defines the TableLook Class. Serialized as `w:tblLook` */
export class TableLook extends OxmlLeafElement {

    public static override _Q = 'w:tblLook';
    public static override _A = ['w:val','w:firstRow','w:lastRow','w:firstColumn','w:lastColumn','w:noHBand','w:noVBand',];
    /** val. Serialized as `w:val` */
    public get value(): HexBinaryValue | undefined { return this._g('w:val'); }
    public set value(v: HexBinaryValue | undefined) { this._s('w:val', v); }
    /** firstRow. Serialized as `w:firstRow` */
    public get firstRow(): OnOffValue | undefined { return this._g('w:firstRow'); }
    public set firstRow(v: OnOffValue | undefined) { this._s('w:firstRow', v); }
    /** lastRow. Serialized as `w:lastRow` */
    public get lastRow(): OnOffValue | undefined { return this._g('w:lastRow'); }
    public set lastRow(v: OnOffValue | undefined) { this._s('w:lastRow', v); }
    /** firstColumn. Serialized as `w:firstColumn` */
    public get firstColumn(): OnOffValue | undefined { return this._g('w:firstColumn'); }
    public set firstColumn(v: OnOffValue | undefined) { this._s('w:firstColumn', v); }
    /** lastColumn. Serialized as `w:lastColumn` */
    public get lastColumn(): OnOffValue | undefined { return this._g('w:lastColumn'); }
    public set lastColumn(v: OnOffValue | undefined) { this._s('w:lastColumn', v); }
    /** noHBand. Serialized as `w:noHBand` */
    public get noHorizontalBand(): OnOffValue | undefined { return this._g('w:noHBand'); }
    public set noHorizontalBand(v: OnOffValue | undefined) { this._s('w:noHBand', v); }
    /** noVBand. Serialized as `w:noVBand` */
    public get noVerticalBand(): OnOffValue | undefined { return this._g('w:noVBand'); }
    public set noVerticalBand(v: OnOffValue | undefined) { this._s('w:noVBand', v); }

}
/** Defines the AltChunk Class. Serialized as `w:altChunk` */
export class AltChunk extends OxmlCompositeElement<AltChunkProperties> {

    public static override _Q = 'w:altChunk';
    public static override _A = ['r:id',];
    /** Relationship to Part. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** External Content Import Properties. */
    public get altChunkProperties(): AltChunkProperties | undefined { return this._f(AltChunkProperties); }

}
/** Footnote and Endnote Numbering Restart Location. Serialized as `w:numRestart` */
export class NumberingRestart extends OxmlLeafElement {

    public static override _Q = 'w:numRestart';
    public static override _A = ['w:val',];
    /** Automatic Numbering Restart Value. Serialized as `w:val` */
    public get val(): RestartNumberValues | undefined { return this._g('w:val'); }
    public set val(v: RestartNumberValues | undefined) { this._s('w:val', v); }

}
/** Footnote and Endnote Numbering Starting Value. Serialized as `w:numStart` */
export class NumberingStart extends OxmlLeafElement {

    public static override _Q = 'w:numStart';
    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): UInt16Value | undefined { return this._g('w:val'); }
    public set val(v: UInt16Value | undefined) { this._s('w:val', v); }

}
/** Defines the TableCellMarginDefault Class. Serialized as `w:tblCellMar` */
export class TableCellMarginDefault extends OxmlCompositeElement<TopMargin | TableCellLeftMargin | StartMargin | BottomMargin | TableCellRightMargin | EndMargin> {

    public static override _Q = 'w:tblCellMar';
    /** Table Cell Top Margin Default. */
    public get topMargin(): TopMargin | undefined { return this._f(TopMargin); }
    /** Table Cell Left Margin Default. */
    public get tableCellLeftMargin(): TableCellLeftMargin | undefined { return this._f(TableCellLeftMargin); }
    /** Returns StartMargin. */
    public get startMargin(): StartMargin | undefined { return this._f(StartMargin); }
    /** Table Cell Bottom Margin Default. */
    public get bottomMargin(): BottomMargin | undefined { return this._f(BottomMargin); }
    /** Table Cell Right Margin Default. */
    public get tableCellRightMargin(): TableCellRightMargin | undefined { return this._f(TableCellRightMargin); }
    /** Returns EndMargin. */
    public get endMargin(): EndMargin | undefined { return this._f(EndMargin); }

}
/** Defines the TableLayout Class. Serialized as `w:tblLayout` */
export class TableLayout extends OxmlLeafElement {

    public static override _Q = 'w:tblLayout';
    public static override _A = ['w:type',];
    /** Table Layout Setting. Serialized as `w:type` */
    public get type(): TableLayoutValues | undefined { return this._g('w:type'); }
    public set type(v: TableLayoutValues | undefined) { this._s('w:type', v); }

}
/** Defines the TableBorders Class. Serialized as `w:tblBorders` */
export class TableBorders extends OxmlCompositeElement<TopBorder | LeftBorder | StartBorder | BottomBorder | RightBorder | EndBorder | InsideHorizontalBorder | InsideVerticalBorder> {

    public static override _Q = 'w:tblBorders';
    /** Table Top Border. */
    public get topBorder(): TopBorder | undefined { return this._f(TopBorder); }
    /** Table Left Border. */
    public get leftBorder(): LeftBorder | undefined { return this._f(LeftBorder); }
    /** Returns StartBorder. */
    public get startBorder(): StartBorder | undefined { return this._f(StartBorder); }
    /** Table Bottom Border. */
    public get bottomBorder(): BottomBorder | undefined { return this._f(BottomBorder); }
    /** Table Right Border. */
    public get rightBorder(): RightBorder | undefined { return this._f(RightBorder); }
    /** Returns EndBorder. */
    public get endBorder(): EndBorder | undefined { return this._f(EndBorder); }
    /** Table Inside Horizontal Edges Border. */
    public get insideHorizontalBorder(): InsideHorizontalBorder | undefined { return this._f(InsideHorizontalBorder); }
    /** Table Inside Vertical Edges Border. */
    public get insideVerticalBorder(): InsideVerticalBorder | undefined { return this._f(InsideVerticalBorder); }

}
/** Defines the TableIndentation Class. Serialized as `w:tblInd` */
export class TableIndentation extends OxmlLeafElement {

    public static override _Q = 'w:tblInd';
    public static override _A = ['w:w','w:type',];
    /** w. Serialized as `w:w` */
    public get width(): Int32Value | undefined { return this._g('w:w'); }
    public set width(v: Int32Value | undefined) { this._s('w:w', v); }
    /** type. Serialized as `w:type` */
    public get type(): TableWidthUnitValues | undefined { return this._g('w:type'); }
    public set type(v: TableWidthUnitValues | undefined) { this._s('w:type', v); }

}
/** Defines the UnsignedDecimalNumberMax3Type Class. */
export abstract class UnsignedDecimalNumberMax3Type extends OxmlLeafElement {

    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): Int32Value | undefined { return this._g('w:val'); }
    public set val(v: Int32Value | undefined) { this._s('w:val', v); }

}
/** Defines the TableStyleColumnBandSize Class. Serialized as `w:tblStyleColBandSize` */
export class TableStyleColumnBandSize extends UnsignedDecimalNumberMax3Type {

    public static override _Q = 'w:tblStyleColBandSize';

}
/** Defines the TableStyleRowBandSize Class. Serialized as `w:tblStyleRowBandSize` */
export class TableStyleRowBandSize extends UnsignedDecimalNumberMax3Type {

    public static override _Q = 'w:tblStyleRowBandSize';

}
/** Defines the TableOverlap Class. Serialized as `w:tblOverlap` */
export class TableOverlap extends OxmlLeafElement {

    public static override _Q = 'w:tblOverlap';
    public static override _A = ['w:val',];
    /** Floating Table Overlap Setting. Serialized as `w:val` */
    public get val(): TableOverlapValues | undefined { return this._g('w:val'); }
    public set val(v: TableOverlapValues | undefined) { this._s('w:val', v); }

}
/** Defines the TablePositionProperties Class. Serialized as `w:tblpPr` */
export class TablePositionProperties extends OxmlLeafElement {

    public static override _Q = 'w:tblpPr';
    public static override _A = ['w:leftFromText','w:rightFromText','w:topFromText','w:bottomFromText','w:vertAnchor','w:horzAnchor','w:tblpXSpec','w:tblpX','w:tblpYSpec','w:tblpY',];
    /** Distance From Left of Table to Text. Serialized as `w:leftFromText` */
    public get leftFromText(): Int16Value | undefined { return this._g('w:leftFromText'); }
    public set leftFromText(v: Int16Value | undefined) { this._s('w:leftFromText', v); }
    /** (Distance From Right of Table to Text. Serialized as `w:rightFromText` */
    public get rightFromText(): Int16Value | undefined { return this._g('w:rightFromText'); }
    public set rightFromText(v: Int16Value | undefined) { this._s('w:rightFromText', v); }
    /** Distance From Top of Table to Text. Serialized as `w:topFromText` */
    public get topFromText(): Int16Value | undefined { return this._g('w:topFromText'); }
    public set topFromText(v: Int16Value | undefined) { this._s('w:topFromText', v); }
    /** Distance From Bottom of Table to Text. Serialized as `w:bottomFromText` */
    public get bottomFromText(): Int16Value | undefined { return this._g('w:bottomFromText'); }
    public set bottomFromText(v: Int16Value | undefined) { this._s('w:bottomFromText', v); }
    /** Table Vertical Anchor. Serialized as `w:vertAnchor` */
    public get verticalAnchor(): VerticalAnchorValues | undefined { return this._g('w:vertAnchor'); }
    public set verticalAnchor(v: VerticalAnchorValues | undefined) { this._s('w:vertAnchor', v); }
    /** Table Horizontal Anchor. Serialized as `w:horzAnchor` */
    public get horizontalAnchor(): HorizontalAnchorValues | undefined { return this._g('w:horzAnchor'); }
    public set horizontalAnchor(v: HorizontalAnchorValues | undefined) { this._s('w:horzAnchor', v); }
    /** Relative Horizontal Alignment From Anchor. Serialized as `w:tblpXSpec` */
    public get tablePositionXAlignment(): HorizontalAlignmentValues | undefined { return this._g('w:tblpXSpec'); }
    public set tablePositionXAlignment(v: HorizontalAlignmentValues | undefined) { this._s('w:tblpXSpec', v); }
    /** Absolute Horizontal Distance From Anchor. Serialized as `w:tblpX` */
    public get tablePositionX(): Int32Value | undefined { return this._g('w:tblpX'); }
    public set tablePositionX(v: Int32Value | undefined) { this._s('w:tblpX', v); }
    /** Relative Vertical Alignment from Anchor. Serialized as `w:tblpYSpec` */
    public get tablePositionYAlignment(): VerticalAlignmentValues | undefined { return this._g('w:tblpYSpec'); }
    public set tablePositionYAlignment(v: VerticalAlignmentValues | undefined) { this._s('w:tblpYSpec', v); }
    /** Absolute Vertical Distance From Anchor. Serialized as `w:tblpY` */
    public get tablePositionY(): Int32Value | undefined { return this._g('w:tblpY'); }
    public set tablePositionY(v: Int32Value | undefined) { this._s('w:tblpY', v); }

}
/** Defines the TableJustification Class. Serialized as `w:jc` */
export class TableJustification extends OxmlLeafElement {

    public static override _Q = 'w:jc';
    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): TableRowAlignmentValues | undefined { return this._g('w:val'); }
    public set val(v: TableRowAlignmentValues | undefined) { this._s('w:val', v); }

}
/** Defines the TableRowHeight Class. Serialized as `w:trHeight` */
export class TableRowHeight extends OxmlLeafElement {

    public static override _Q = 'w:trHeight';
    public static override _A = ['w:val','w:hRule',];
    /** Table Row Height. Serialized as `w:val` */
    public get val(): UInt32Value | undefined { return this._g('w:val'); }
    public set val(v: UInt32Value | undefined) { this._s('w:val', v); }
    /** Table Row Height Type. Serialized as `w:hRule` */
    public get heightType(): HeightRuleValues | undefined { return this._g('w:hRule'); }
    public set heightType(v: HeightRuleValues | undefined) { this._s('w:hRule', v); }

}
/** Defines the DivId Class. Serialized as `w:divId` */
export class DivId extends OxmlLeafElement {

    public static override _Q = 'w:divId';
    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Defines the TableCellVerticalAlignment Class. Serialized as `w:vAlign` */
export class TableCellVerticalAlignment extends OxmlLeafElement {

    public static override _Q = 'w:vAlign';
    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): TableVerticalAlignmentValues | undefined { return this._g('w:val'); }
    public set val(v: TableVerticalAlignmentValues | undefined) { this._s('w:val', v); }

}
/** Defines the TableCellMargin Class. Serialized as `w:tcMar` */
export class TableCellMargin extends OxmlCompositeElement<TopMargin | LeftMargin | StartMargin | BottomMargin | RightMargin | EndMargin> {

    public static override _Q = 'w:tcMar';
    /** Table Cell Top Margin Exception. */
    public get topMargin(): TopMargin | undefined { return this._f(TopMargin); }
    /** Table Cell Left Margin Exception. */
    public get leftMargin(): LeftMargin | undefined { return this._f(LeftMargin); }
    /** Returns StartMargin. */
    public get startMargin(): StartMargin | undefined { return this._f(StartMargin); }
    /** Table Cell Bottom Margin Exception. */
    public get bottomMargin(): BottomMargin | undefined { return this._f(BottomMargin); }
    /** Table Cell Right Margin Exception. */
    public get rightMargin(): RightMargin | undefined { return this._f(RightMargin); }
    /** Returns EndMargin. */
    public get endMargin(): EndMargin | undefined { return this._f(EndMargin); }

}
/** Defines the OnOffOnlyType Class. */
export abstract class OnOffOnlyType extends OxmlLeafElement {

    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): OnOffOnlyValues | undefined { return this._g('w:val'); }
    public set val(v: OnOffOnlyValues | undefined) { this._s('w:val', v); }

}
/** E-Mail Message Reply Style. Serialized as `w:personalReply` */
export class PersonalReply extends OnOffOnlyType {

    public static override _Q = 'w:personalReply';

}
/** E-Mail Message Composition Style. Serialized as `w:personalCompose` */
export class PersonalCompose extends OnOffOnlyType {

    public static override _Q = 'w:personalCompose';

}
/** E-Mail Message Text Style. Serialized as `w:personal` */
export class Personal extends OnOffOnlyType {

    public static override _Q = 'w:personal';

}
/** Style Cannot Be Applied. Serialized as `w:locked` */
export class Locked extends OnOffOnlyType {

    public static override _Q = 'w:locked';

}
/** Primary Style. Serialized as `w:qFormat` */
export class PrimaryStyle extends OnOffOnlyType {

    public static override _Q = 'w:qFormat';

}
/** Remove Semi-Hidden Property When Style Is Used. Serialized as `w:unhideWhenUsed` */
export class UnhideWhenUsed extends OnOffOnlyType {

    public static override _Q = 'w:unhideWhenUsed';

}
/** Hide Style From Main User Interface. Serialized as `w:semiHidden` */
export class SemiHidden extends OnOffOnlyType {

    public static override _Q = 'w:semiHidden';

}
/** Hide Style From User Interface. Serialized as `w:hidden` */
export class StyleHidden extends OnOffOnlyType {

    public static override _Q = 'w:hidden';

}
/** Automatically Merge User Formatting Into Style Definition. Serialized as `w:autoRedefine` */
export class AutoRedefine extends OnOffOnlyType {

    public static override _Q = 'w:autoRedefine';

}
/** Frameset Splitter Border Style. Serialized as `w:flatBorders` */
export class FlatBorders extends OnOffOnlyType {

    public static override _Q = 'w:flatBorders';

}
/** Do Not Display Frameset Splitters. Serialized as `w:noBorder` */
export class NoBorder extends OnOffOnlyType {

    public static override _Q = 'w:noBorder';

}
/** Maintain Link to Existing File. Serialized as `w:linkedToFile` */
export class LinkedToFile extends OnOffOnlyType {

    public static override _Q = 'w:linkedToFile';

}
/** Frame Cannot Be Resized. Serialized as `w:noResizeAllowed` */
export class NoResizeAllowed extends OnOffOnlyType {

    public static override _Q = 'w:noResizeAllowed';

}
/** Defines the BiDiVisual Class. Serialized as `w:bidiVisual` */
export class BiDiVisual extends OnOffOnlyType {

    public static override _Q = 'w:bidiVisual';

}
/** Defines the TableHeader Class. Serialized as `w:tblHeader` */
export class TableHeader extends OnOffOnlyType {

    public static override _Q = 'w:tblHeader';

}
/** Defines the CantSplit Class. Serialized as `w:cantSplit` */
export class CantSplit extends OnOffOnlyType {

    public static override _Q = 'w:cantSplit';

}
/** Defines the HideMark Class. Serialized as `w:hideMark` */
export class HideMark extends OnOffOnlyType {

    public static override _Q = 'w:hideMark';

}
/** Defines the TableCellFitText Class. Serialized as `w:tcFitText` */
export class TableCellFitText extends OnOffOnlyType {

    public static override _Q = 'w:tcFitText';

}
/** Defines the NoWrap Class. Serialized as `w:noWrap` */
export class NoWrap extends OnOffOnlyType {

    public static override _Q = 'w:noWrap';

}
/** Defines the TableCellBorders Class. Serialized as `w:tcBorders` */
export class TableCellBorders extends OxmlCompositeElement<TopBorder | LeftBorder | StartBorder | BottomBorder | RightBorder | EndBorder | InsideHorizontalBorder | InsideVerticalBorder | TopLeftToBottomRightCellBorder | TopRightToBottomLeftCellBorder> {

    public static override _Q = 'w:tcBorders';
    /** Table Cell Top Border. */
    public get topBorder(): TopBorder | undefined { return this._f(TopBorder); }
    /** Table Cell Left Border. */
    public get leftBorder(): LeftBorder | undefined { return this._f(LeftBorder); }
    /** Returns StartBorder. */
    public get startBorder(): StartBorder | undefined { return this._f(StartBorder); }
    /** Table Cell Bottom Border. */
    public get bottomBorder(): BottomBorder | undefined { return this._f(BottomBorder); }
    /** Table Cell Right Border. */
    public get rightBorder(): RightBorder | undefined { return this._f(RightBorder); }
    /** Returns EndBorder. */
    public get endBorder(): EndBorder | undefined { return this._f(EndBorder); }
    /** Table Cell Inside Horizontal Edges Border. */
    public get insideHorizontalBorder(): InsideHorizontalBorder | undefined { return this._f(InsideHorizontalBorder); }
    /** Table Cell Inside Vertical Edges Border. */
    public get insideVerticalBorder(): InsideVerticalBorder | undefined { return this._f(InsideVerticalBorder); }
    /** Table Cell Top Left to Bottom Right Diagonal Border. */
    public get topLeftToBottomRightCellBorder(): TopLeftToBottomRightCellBorder | undefined { return this._f(TopLeftToBottomRightCellBorder); }
    /** Table Cell Top Right to Bottom Left Diagonal Border. */
    public get topRightToBottomLeftCellBorder(): TopRightToBottomLeftCellBorder | undefined { return this._f(TopRightToBottomLeftCellBorder); }

}
/** Defines the VerticalMerge Class. Serialized as `w:vMerge` */
export class VerticalMerge extends OxmlLeafElement {

    public static override _Q = 'w:vMerge';
    public static override _A = ['w:val',];
    /** Vertical Merge Type. Serialized as `w:val` */
    public get val(): MergedCellValues | undefined { return this._g('w:val'); }
    public set val(v: MergedCellValues | undefined) { this._s('w:val', v); }

}
/** Defines the HorizontalMerge Class. Serialized as `w:hMerge` */
export class HorizontalMerge extends OxmlLeafElement {

    public static override _Q = 'w:hMerge';
    public static override _A = ['w:val',];
    /** Horizontal Merge Type. Serialized as `w:val` */
    public get val(): MergedCellValues | undefined { return this._g('w:val'); }
    public set val(v: MergedCellValues | undefined) { this._s('w:val', v); }

}
/** Defines the TableWidthType Class. */
export abstract class TableWidthType extends OxmlLeafElement {

    public static override _A = ['w:w','w:type',];
    /** Table Width Value. Serialized as `w:w` */
    public get width(): StringValue | undefined { return this._g('w:w'); }
    public set width(v: StringValue | undefined) { this._s('w:w', v); }
    /** Table Width Type. Serialized as `w:type` */
    public get type(): TableWidthUnitValues | undefined { return this._g('w:type'); }
    public set type(v: TableWidthUnitValues | undefined) { this._s('w:type', v); }

}
/** Table Cell Right Margin Exception. Serialized as `w:right` */
export class RightMargin extends TableWidthType {

    public static override _Q = 'w:right';

}
/** Table Cell Left Margin Exception. Serialized as `w:left` */
export class LeftMargin extends TableWidthType {

    public static override _Q = 'w:left';

}
/** Defines the EndMargin Class. Serialized as `w:end` */
export class EndMargin extends TableWidthType {

    public static override _Q = 'w:end';

}
/** Table Cell Bottom Margin Default. Serialized as `w:bottom` */
export class BottomMargin extends TableWidthType {

    public static override _Q = 'w:bottom';

}
/** Defines the StartMargin Class. Serialized as `w:start` */
export class StartMargin extends TableWidthType {

    public static override _Q = 'w:start';

}
/** Table Cell Top Margin Default. Serialized as `w:top` */
export class TopMargin extends TableWidthType {

    public static override _Q = 'w:top';

}
/** Defines the TableWidth Class. Serialized as `w:tblW` */
export class TableWidth extends TableWidthType {

    public static override _Q = 'w:tblW';

}
/** Defines the TableCellSpacing Class. Serialized as `w:tblCellSpacing` */
export class TableCellSpacing extends TableWidthType {

    public static override _Q = 'w:tblCellSpacing';

}
/** Defines the WidthAfterTableRow Class. Serialized as `w:wAfter` */
export class WidthAfterTableRow extends TableWidthType {

    public static override _Q = 'w:wAfter';

}
/** Defines the WidthBeforeTableRow Class. Serialized as `w:wBefore` */
export class WidthBeforeTableRow extends TableWidthType {

    public static override _Q = 'w:wBefore';

}
/** Defines the TableCellWidth Class. Serialized as `w:tcW` */
export class TableCellWidth extends TableWidthType {

    public static override _Q = 'w:tcW';

}
/** Defines the ConditionalFormatStyle Class. Serialized as `w:cnfStyle` */
export class ConditionalFormatStyle extends OxmlLeafElement {

    public static override _Q = 'w:cnfStyle';
    public static override _A = ['w:val','w:firstRow','w:lastRow','w:firstColumn','w:lastColumn','w:oddVBand','w:evenVBand','w:oddHBand','w:evenHBand','w:firstRowFirstColumn','w:firstRowLastColumn','w:lastRowFirstColumn','w:lastRowLastColumn',];
    /** Conditional Formatting Bit Mask. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }
    /** firstRow. Serialized as `w:firstRow` */
    public get firstRow(): OnOffValue | undefined { return this._g('w:firstRow'); }
    public set firstRow(v: OnOffValue | undefined) { this._s('w:firstRow', v); }
    /** lastRow. Serialized as `w:lastRow` */
    public get lastRow(): OnOffValue | undefined { return this._g('w:lastRow'); }
    public set lastRow(v: OnOffValue | undefined) { this._s('w:lastRow', v); }
    /** firstColumn. Serialized as `w:firstColumn` */
    public get firstColumn(): OnOffValue | undefined { return this._g('w:firstColumn'); }
    public set firstColumn(v: OnOffValue | undefined) { this._s('w:firstColumn', v); }
    /** lastColumn. Serialized as `w:lastColumn` */
    public get lastColumn(): OnOffValue | undefined { return this._g('w:lastColumn'); }
    public set lastColumn(v: OnOffValue | undefined) { this._s('w:lastColumn', v); }
    /** oddVBand. Serialized as `w:oddVBand` */
    public get oddVerticalBand(): OnOffValue | undefined { return this._g('w:oddVBand'); }
    public set oddVerticalBand(v: OnOffValue | undefined) { this._s('w:oddVBand', v); }
    /** evenVBand. Serialized as `w:evenVBand` */
    public get evenVerticalBand(): OnOffValue | undefined { return this._g('w:evenVBand'); }
    public set evenVerticalBand(v: OnOffValue | undefined) { this._s('w:evenVBand', v); }
    /** oddHBand. Serialized as `w:oddHBand` */
    public get oddHorizontalBand(): OnOffValue | undefined { return this._g('w:oddHBand'); }
    public set oddHorizontalBand(v: OnOffValue | undefined) { this._s('w:oddHBand', v); }
    /** evenHBand. Serialized as `w:evenHBand` */
    public get evenHorizontalBand(): OnOffValue | undefined { return this._g('w:evenHBand'); }
    public set evenHorizontalBand(v: OnOffValue | undefined) { this._s('w:evenHBand', v); }
    /** firstRowFirstColumn. Serialized as `w:firstRowFirstColumn` */
    public get firstRowFirstColumn(): OnOffValue | undefined { return this._g('w:firstRowFirstColumn'); }
    public set firstRowFirstColumn(v: OnOffValue | undefined) { this._s('w:firstRowFirstColumn', v); }
    /** firstRowLastColumn. Serialized as `w:firstRowLastColumn` */
    public get firstRowLastColumn(): OnOffValue | undefined { return this._g('w:firstRowLastColumn'); }
    public set firstRowLastColumn(v: OnOffValue | undefined) { this._s('w:firstRowLastColumn', v); }
    /** lastRowFirstColumn. Serialized as `w:lastRowFirstColumn` */
    public get lastRowFirstColumn(): OnOffValue | undefined { return this._g('w:lastRowFirstColumn'); }
    public set lastRowFirstColumn(v: OnOffValue | undefined) { this._s('w:lastRowFirstColumn', v); }
    /** lastRowLastColumn. Serialized as `w:lastRowLastColumn` */
    public get lastRowLastColumn(): OnOffValue | undefined { return this._g('w:lastRowLastColumn'); }
    public set lastRowLastColumn(v: OnOffValue | undefined) { this._s('w:lastRowLastColumn', v); }

}
/** Defines the RelationshipType Class. */
export abstract class RelationshipType extends OxmlLeafElement {

    public static override _A = ['r:id',];
    /** Relationship to Part. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Attached Document Template. Serialized as `w:attachedTemplate` */
export class AttachedTemplate extends RelationshipType {

    public static override _Q = 'w:attachedTemplate';

}
/** Defines the MovieReference Class. Serialized as `w:movie` */
export class MovieReference extends RelationshipType {

    public static override _Q = 'w:movie';

}
/** Source File for Frame. Serialized as `w:sourceFileName` */
export class SourceFileReference extends RelationshipType {

    public static override _Q = 'w:sourceFileName';

}
/** Header Definition File Path. Serialized as `w:headerSource` */
export class HeaderSource extends RelationshipType {

    public static override _Q = 'w:headerSource';

}
/** Data Source File Path. Serialized as `w:dataSource` */
export class DataSourceReference extends RelationshipType {

    public static override _Q = 'w:dataSource';

}
/** Reference to Inclusion/Exclusion Data for Data Source. Serialized as `w:recipientData` */
export class RecipientDataReference extends RelationshipType {

    public static override _Q = 'w:recipientData';

}
/** ODSO Data Source File Path. Serialized as `w:src` */
export class SourceReference extends RelationshipType {

    public static override _Q = 'w:src';

}
/** Defines the PrinterSettingsReference Class. Serialized as `w:printerSettings` */
export class PrinterSettingsReference extends RelationshipType {

    public static override _Q = 'w:printerSettings';

}
/** Anchor for Subdocument Location. Serialized as `w:subDoc` */
export class SubDocumentReference extends RelationshipType {

    public static override _Q = 'w:subDoc';

}
/** Defines the BidirectionalEmbedding Class. Serialized as `w:dir` */
export class BidirectionalEmbedding extends OxmlCompositeElement<CustomXmlRun | SimpleField | Hyperlink | SdtRun | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun | Run | BidirectionalOverride | BidirectionalEmbedding | SubDocumentReference> {

    public static override _Q = 'w:dir';
    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get value(): DirectionValues | undefined { return this._g('w:val'); }
    public set value(v: DirectionValues | undefined) { this._s('w:val', v); }

}
/** Defines the BidirectionalOverride Class. Serialized as `w:bdo` */
export class BidirectionalOverride extends OxmlCompositeElement<CustomXmlRun | SimpleField | Hyperlink | SdtRun | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun | Run | BidirectionalOverride | BidirectionalEmbedding | SubDocumentReference> {

    public static override _Q = 'w:bdo';
    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get value(): DirectionValues | undefined { return this._g('w:val'); }
    public set value(v: DirectionValues | undefined) { this._s('w:val', v); }

}
/** Defines the Hyperlink Class. Serialized as `w:hyperlink` */
export class Hyperlink extends OxmlCompositeElement<CustomXmlRun | SimpleField | Hyperlink | SdtRun | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun | Run | BidirectionalOverride | BidirectionalEmbedding | SubDocumentReference> {

    public static override _Q = 'w:hyperlink';
    public static override _A = ['w:tgtFrame','w:tooltip','w:docLocation','w:history','w:anchor','r:id',];
    /** Hyperlink Target Frame. Serialized as `w:tgtFrame` */
    public get targetFrame(): StringValue | undefined { return this._g('w:tgtFrame'); }
    public set targetFrame(v: StringValue | undefined) { this._s('w:tgtFrame', v); }
    /** Associated String. Serialized as `w:tooltip` */
    public get tooltip(): StringValue | undefined { return this._g('w:tooltip'); }
    public set tooltip(v: StringValue | undefined) { this._s('w:tooltip', v); }
    /** Location in Target Document. Serialized as `w:docLocation` */
    public get docLocation(): StringValue | undefined { return this._g('w:docLocation'); }
    public set docLocation(v: StringValue | undefined) { this._s('w:docLocation', v); }
    /** Add To Viewed Hyperlinks. Serialized as `w:history` */
    public get history(): OnOffValue | undefined { return this._g('w:history'); }
    public set history(v: OnOffValue | undefined) { this._s('w:history', v); }
    /** Hyperlink Anchor. Serialized as `w:anchor` */
    public get anchor(): StringValue | undefined { return this._g('w:anchor'); }
    public set anchor(v: StringValue | undefined) { this._s('w:anchor', v); }
    /** Hyperlink Target. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the SimpleField Class. Serialized as `w:fldSimple` */
export class SimpleField extends OxmlCompositeElement<FieldData | CustomXmlRun | SimpleField | Hyperlink | SdtRun | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun | Run | BidirectionalOverride | BidirectionalEmbedding | SubDocumentReference> {

    public static override _Q = 'w:fldSimple';
    public static override _A = ['w:instr','w:fldLock','w:dirty',];
    /** Field Codes. Serialized as `w:instr` */
    public get instruction(): StringValue | undefined { return this._g('w:instr'); }
    public set instruction(v: StringValue | undefined) { this._s('w:instr', v); }
    /** Field Should Not Be Recalculated. Serialized as `w:fldLock` */
    public get fieldLock(): OnOffValue | undefined { return this._g('w:fldLock'); }
    public set fieldLock(v: OnOffValue | undefined) { this._s('w:fldLock', v); }
    /** Field Result Invalidated. Serialized as `w:dirty` */
    public get dirty(): OnOffValue | undefined { return this._g('w:dirty'); }
    public set dirty(v: OnOffValue | undefined) { this._s('w:dirty', v); }
    /** Custom Field Data. */
    public get fieldData(): FieldData | undefined { return this._f(FieldData); }

}
/** Defines the CustomXmlRun Class. Serialized as `w:customXml` */
export class CustomXmlRun extends OxmlCompositeElement<CustomXmlRun | SimpleField | Hyperlink | SdtRun | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun | Run | BidirectionalOverride | BidirectionalEmbedding | SubDocumentReference> {

    public static override _Q = 'w:customXml';

}
/** Cell-Level Structured Document Tag. Serialized as `w:sdt` */
export class SdtCell extends OxmlCompositeElement<SdtContentCell | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd> {

    public static override _Q = 'w:sdt';
    /** Cell-Level Structured Document Tag Content. */
    public get sdtContentCell(): SdtContentCell | undefined { return this._f(SdtContentCell); }

}
/** Cell-Level Custom XML Element. Serialized as `w:customXml` */
export class CustomXmlCell extends OxmlCompositeElement<TableCell | CustomXmlCell | SdtCell | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {

    public static override _Q = 'w:customXml';

}
/** Table Cell. Serialized as `w:tc` */
export class TableCell extends OxmlCompositeElement<TableCellProperties | AltChunk | CustomXmlBlock | SdtBlock | Paragraph | Table | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {

    public static override _Q = 'w:tc';
    /** Table Cell Properties. */
    public get tableCellProperties(): TableCellProperties | undefined { return this._f(TableCellProperties); }

}
/** Row-Level Structured Document Tag. Serialized as `w:sdt` */
export class SdtRow extends OxmlCompositeElement<SdtContentRow | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd> {

    public static override _Q = 'w:sdt';
    /** Row-Level Structured Document Tag Content. */
    public get sdtContentRow(): SdtContentRow | undefined { return this._f(SdtContentRow); }

}
/** Row-Level Custom XML Element. Serialized as `w:customXml` */
export class CustomXmlRow extends OxmlCompositeElement<TableRow | CustomXmlRow | SdtRow | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {

    public static override _Q = 'w:customXml';

}
/** Table Row. Serialized as `w:tr` */
export class TableRow extends OxmlCompositeElement<TablePropertyExceptions | TableRowProperties | TableCell | CustomXmlCell | SdtCell | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {

    public static override _Q = 'w:tr';
    public static override _A = ['w:rsidRPr','w:rsidR','w:rsidDel','w:rsidTr','w14:paraId','w14:textId',];
    /** Revision Identifier for Table Row Glyph Formatting. Serialized as `w:rsidRPr` */
    public get rsidTableRowMarkRevision(): HexBinaryValue | undefined { return this._g('w:rsidRPr'); }
    public set rsidTableRowMarkRevision(v: HexBinaryValue | undefined) { this._s('w:rsidRPr', v); }
    /** Revision Identifier for Table Row. Serialized as `w:rsidR` */
    public get rsidTableRowAddition(): HexBinaryValue | undefined { return this._g('w:rsidR'); }
    public set rsidTableRowAddition(v: HexBinaryValue | undefined) { this._s('w:rsidR', v); }
    /** Revision Identifier for Table Row Deletion. Serialized as `w:rsidDel` */
    public get rsidTableRowDeletion(): HexBinaryValue | undefined { return this._g('w:rsidDel'); }
    public set rsidTableRowDeletion(v: HexBinaryValue | undefined) { this._s('w:rsidDel', v); }
    /** Revision Identifier for Table Row Properties. Serialized as `w:rsidTr` */
    public get rsidTableRowProperties(): HexBinaryValue | undefined { return this._g('w:rsidTr'); }
    public set rsidTableRowProperties(v: HexBinaryValue | undefined) { this._s('w:rsidTr', v); }
    /** paraId. Serialized as `w14:paraId` */
    public get paragraphId(): HexBinaryValue | undefined { return this._g('w14:paraId'); }
    public set paragraphId(v: HexBinaryValue | undefined) { this._s('w14:paraId', v); }
    /** textId. Serialized as `w14:textId` */
    public get textId(): HexBinaryValue | undefined { return this._g('w14:textId'); }
    public set textId(v: HexBinaryValue | undefined) { this._s('w14:textId', v); }
    /** Table-Level Property Exceptions. */
    public get tablePropertyExceptions(): TablePropertyExceptions | undefined { return this._f(TablePropertyExceptions); }
    /** Table Row Properties. */
    public get tableRowProperties(): TableRowProperties | undefined { return this._f(TableRowProperties); }

}
/** Defines the Table Class. Serialized as `w:tbl` */
export class Table extends OxmlCompositeElement<BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | TableProperties | TableGrid | TableRow | CustomXmlRow | SdtRow | ProofError | PermStart | PermEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {

    public static override _Q = 'w:tbl';

}
/** Defines the Paragraph Class. Serialized as `w:p` */
export class Paragraph extends OxmlCompositeElement<ParagraphProperties | CustomXmlRun | SimpleField | Hyperlink | SdtRun | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun | Run | BidirectionalOverride | BidirectionalEmbedding | SubDocumentReference> {

    public static override _Q = 'w:p';
    public static override _A = ['w:rsidRPr','w:rsidR','w:rsidDel','w:rsidP','w:rsidRDefault','w14:paraId','w14:textId','w14:noSpellErr',];
    /** Revision Identifier for Paragraph Glyph Formatting. Serialized as `w:rsidRPr` */
    public get rsidParagraphMarkRevision(): HexBinaryValue | undefined { return this._g('w:rsidRPr'); }
    public set rsidParagraphMarkRevision(v: HexBinaryValue | undefined) { this._s('w:rsidRPr', v); }
    /** Revision Identifier for Paragraph. Serialized as `w:rsidR` */
    public get rsidParagraphAddition(): HexBinaryValue | undefined { return this._g('w:rsidR'); }
    public set rsidParagraphAddition(v: HexBinaryValue | undefined) { this._s('w:rsidR', v); }
    /** Revision Identifier for Paragraph Deletion. Serialized as `w:rsidDel` */
    public get rsidParagraphDeletion(): HexBinaryValue | undefined { return this._g('w:rsidDel'); }
    public set rsidParagraphDeletion(v: HexBinaryValue | undefined) { this._s('w:rsidDel', v); }
    /** Revision Identifier for Paragraph Properties. Serialized as `w:rsidP` */
    public get rsidParagraphProperties(): HexBinaryValue | undefined { return this._g('w:rsidP'); }
    public set rsidParagraphProperties(v: HexBinaryValue | undefined) { this._s('w:rsidP', v); }
    /** Default Revision Identifier for Runs. Serialized as `w:rsidRDefault` */
    public get rsidRunAdditionDefault(): HexBinaryValue | undefined { return this._g('w:rsidRDefault'); }
    public set rsidRunAdditionDefault(v: HexBinaryValue | undefined) { this._s('w:rsidRDefault', v); }
    /** paraId. Serialized as `w14:paraId` */
    public get paragraphId(): HexBinaryValue | undefined { return this._g('w14:paraId'); }
    public set paragraphId(v: HexBinaryValue | undefined) { this._s('w14:paraId', v); }
    /** textId. Serialized as `w14:textId` */
    public get textId(): HexBinaryValue | undefined { return this._g('w14:textId'); }
    public set textId(v: HexBinaryValue | undefined) { this._s('w14:textId', v); }
    /** noSpellErr. Serialized as `w14:noSpellErr` */
    public get noSpellError(): OnOffValue | undefined { return this._g('w14:noSpellErr'); }
    public set noSpellError(v: OnOffValue | undefined) { this._s('w14:noSpellErr', v); }
    /** Paragraph Properties. */
    public get paragraphProperties(): ParagraphProperties | undefined { return this._f(ParagraphProperties); }

}
/** Defines the SdtBlock Class. Serialized as `w:sdt` */
export class SdtBlock extends OxmlCompositeElement<SdtContentBlock | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd> {

    public static override _Q = 'w:sdt';
    /** Block-Level Structured Document Tag Content. */
    public get sdtContentBlock(): SdtContentBlock | undefined { return this._f(SdtContentBlock); }

}
/** Defines the CustomXmlBlock Class. Serialized as `w:customXml` */
export class CustomXmlBlock extends OxmlCompositeElement<CustomXmlBlock | SdtBlock | Paragraph | Table | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {

    public static override _Q = 'w:customXml';

}
/** Defines the SdtRun Class. Serialized as `w:sdt` */
export class SdtRun extends OxmlCompositeElement<SdtContentRun | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd> {

    public static override _Q = 'w:sdt';
    /** Inline-Level Structured Document Tag Content. */
    public get sdtContentRun(): SdtContentRun | undefined { return this._f(SdtContentRun); }

}
/** Defines the ContentPart Class. Serialized as `w:contentPart` */
export class ContentPart extends OxmlLeafElement {

    public static override _Q = 'w:contentPart';
    public static override _A = ['r:id',];
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the RunTrackChangeType Class. */
export abstract class RunTrackChangeType extends OxmlCompositeElement<SdtRun | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun | Run | BidirectionalOverride | BidirectionalEmbedding> {

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
/** Move Destination Run Content. Serialized as `w:moveTo` */
export class MoveToRun extends RunTrackChangeType {

    public static override _Q = 'w:moveTo';

}
/** Move Source Run Content. Serialized as `w:moveFrom` */
export class MoveFromRun extends RunTrackChangeType {

    public static override _Q = 'w:moveFrom';

}
/** Deleted Run Content. Serialized as `w:del` */
export class DeletedRun extends RunTrackChangeType {

    public static override _Q = 'w:del';

}
/** Inserted Run Content. Serialized as `w:ins` */
export class InsertedRun extends RunTrackChangeType {

    public static override _Q = 'w:ins';

}
/** Defines the PermEnd Class. Serialized as `w:permEnd` */
export class PermEnd extends OxmlLeafElement {

    public static override _Q = 'w:permEnd';
    public static override _A = ['w:id','w:displacedByCustomXml',];
    /** Annotation ID. Serialized as `w:id` */
    public get id(): Int32Value | undefined { return this._g('w:id'); }
    public set id(v: Int32Value | undefined) { this._s('w:id', v); }
    /** Annotation Displaced By Custom XML Markup. Serialized as `w:displacedByCustomXml` */
    public get displacedByCustomXml(): DisplacedByCustomXmlValues | undefined { return this._g('w:displacedByCustomXml'); }
    public set displacedByCustomXml(v: DisplacedByCustomXmlValues | undefined) { this._s('w:displacedByCustomXml', v); }

}
/** Defines the PermStart Class. Serialized as `w:permStart` */
export class PermStart extends OxmlLeafElement {

    public static override _Q = 'w:permStart';
    public static override _A = ['w:edGrp','w:ed','w:colFirst','w:colLast','w:id','w:displacedByCustomXml',];
    /** edGrp. Serialized as `w:edGrp` */
    public get editorGroup(): RangePermissionEditingGroupValues | undefined { return this._g('w:edGrp'); }
    public set editorGroup(v: RangePermissionEditingGroupValues | undefined) { this._s('w:edGrp', v); }
    /** ed. Serialized as `w:ed` */
    public get ed(): StringValue | undefined { return this._g('w:ed'); }
    public set ed(v: StringValue | undefined) { this._s('w:ed', v); }
    /** colFirst. Serialized as `w:colFirst` */
    public get columnFirst(): Int32Value | undefined { return this._g('w:colFirst'); }
    public set columnFirst(v: Int32Value | undefined) { this._s('w:colFirst', v); }
    /** colLast. Serialized as `w:colLast` */
    public get columnLast(): Int32Value | undefined { return this._g('w:colLast'); }
    public set columnLast(v: Int32Value | undefined) { this._s('w:colLast', v); }
    /** Annotation ID. Serialized as `w:id` */
    public get id(): Int32Value | undefined { return this._g('w:id'); }
    public set id(v: Int32Value | undefined) { this._s('w:id', v); }
    /** Annotation Displaced By Custom XML Markup. Serialized as `w:displacedByCustomXml` */
    public get displacedByCustomXml(): DisplacedByCustomXmlValues | undefined { return this._g('w:displacedByCustomXml'); }
    public set displacedByCustomXml(v: DisplacedByCustomXmlValues | undefined) { this._s('w:displacedByCustomXml', v); }

}
/** Defines the ProofError Class. Serialized as `w:proofErr` */
export class ProofError extends OxmlLeafElement {

    public static override _Q = 'w:proofErr';
    public static override _A = ['w:type',];
    /** Proofing Error Anchor Type. Serialized as `w:type` */
    public get type(): ProofingErrorValues | undefined { return this._g('w:type'); }
    public set type(v: ProofingErrorValues | undefined) { this._s('w:type', v); }

}
/** Defines the SdtRunRuby Class. Serialized as `w:sdt` */
export class SdtRunRuby extends OxmlCompositeElement<SdtContentRunRuby | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd> {

    public static override _Q = 'w:sdt';
    /** Returns SdtContentRunRuby. */
    public get sdtContentRunRuby(): SdtContentRunRuby | undefined { return this._f(SdtContentRunRuby); }

}
/** Phonetic Guide Text Run. Serialized as `w:r` */
export class Run extends OxmlCompositeElement<RunProperties | Break | Text | DeletedText | FieldCode | DeletedFieldCode | NoBreakHyphen | SoftHyphen | DayShort | MonthShort | YearShort | DayLong | MonthLong | YearLong | AnnotationReferenceMark | FootnoteReferenceMark | EndnoteReferenceMark | SeparatorMark | ContinuationSeparatorMark | SymbolChar | PageNumber | CarriageReturn | TabChar | EmbeddedObject | Picture | FieldChar | Ruby | FootnoteReference | EndnoteReference | CommentReference | Drawing | PositionalTab | LastRenderedPageBreak> {

    public static override _Q = 'w:r';
    public static override _A = ['w:rsidRPr','w:rsidDel','w:rsidR',];
    /** Revision Identifier for Run Properties. Serialized as `w:rsidRPr` */
    public get rsidRunProperties(): HexBinaryValue | undefined { return this._g('w:rsidRPr'); }
    public set rsidRunProperties(v: HexBinaryValue | undefined) { this._s('w:rsidRPr', v); }
    /** Revision Identifier for Run Deletion. Serialized as `w:rsidDel` */
    public get rsidRunDeletion(): HexBinaryValue | undefined { return this._g('w:rsidDel'); }
    public set rsidRunDeletion(v: HexBinaryValue | undefined) { this._s('w:rsidDel', v); }
    /** Revision Identifier for Run. Serialized as `w:rsidR` */
    public get rsidRunAddition(): HexBinaryValue | undefined { return this._g('w:rsidR'); }
    public set rsidRunAddition(v: HexBinaryValue | undefined) { this._s('w:rsidR', v); }
    /** Run Properties. */
    public get runProperties(): RunProperties | undefined { return this._f(RunProperties); }

}
/** Defines the HyperlinkRuby Class. Serialized as `w:hyperlink` */
export class HyperlinkRuby extends OxmlCompositeElement<CustomXmlRuby | SimpleFieldRuby | HyperlinkRuby | Run | SdtRunRuby | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun> {

    public static override _Q = 'w:hyperlink';
    public static override _A = ['w:tgtFrame','w:tooltip','w:docLocation','w:history','w:anchor','r:id',];
    /** tgtFrame. Serialized as `w:tgtFrame` */
    public get targetFrame(): StringValue | undefined { return this._g('w:tgtFrame'); }
    public set targetFrame(v: StringValue | undefined) { this._s('w:tgtFrame', v); }
    /** tooltip. Serialized as `w:tooltip` */
    public get tooltip(): StringValue | undefined { return this._g('w:tooltip'); }
    public set tooltip(v: StringValue | undefined) { this._s('w:tooltip', v); }
    /** docLocation. Serialized as `w:docLocation` */
    public get docLocation(): StringValue | undefined { return this._g('w:docLocation'); }
    public set docLocation(v: StringValue | undefined) { this._s('w:docLocation', v); }
    /** history. Serialized as `w:history` */
    public get history(): OnOffValue | undefined { return this._g('w:history'); }
    public set history(v: OnOffValue | undefined) { this._s('w:history', v); }
    /** anchor. Serialized as `w:anchor` */
    public get anchor(): StringValue | undefined { return this._g('w:anchor'); }
    public set anchor(v: StringValue | undefined) { this._s('w:anchor', v); }
    /** id. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Defines the SimpleFieldRuby Class. Serialized as `w:fldSimple` */
export class SimpleFieldRuby extends OxmlCompositeElement<FieldData | CustomXmlRuby | SimpleFieldRuby | HyperlinkRuby | Run | SdtRunRuby | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun> {

    public static override _Q = 'w:fldSimple';
    public static override _A = ['w:instr','w:fldLock','w:dirty',];
    /** instr. Serialized as `w:instr` */
    public get instruction(): StringValue | undefined { return this._g('w:instr'); }
    public set instruction(v: StringValue | undefined) { this._s('w:instr', v); }
    /** fldLock. Serialized as `w:fldLock` */
    public get fieldLock(): OnOffValue | undefined { return this._g('w:fldLock'); }
    public set fieldLock(v: OnOffValue | undefined) { this._s('w:fldLock', v); }
    /** dirty. Serialized as `w:dirty` */
    public get dirty(): OnOffValue | undefined { return this._g('w:dirty'); }
    public set dirty(v: OnOffValue | undefined) { this._s('w:dirty', v); }
    /** Returns FieldData. */
    public get fieldData(): FieldData | undefined { return this._f(FieldData); }

}
/** Defines the CustomXmlRuby Class. Serialized as `w:customXml` */
export class CustomXmlRuby extends OxmlCompositeElement<CustomXmlRuby | SimpleFieldRuby | HyperlinkRuby | Run | SdtRunRuby | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun> {

    public static override _Q = 'w:customXml';

}
/** Defines the MathControlMoveType Class. */
export abstract class MathControlMoveType extends OxmlCompositeElement<RunProperties | InsertedMathControl | DeletedMathControl> {

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
/** Defines the MoveToMathControl Class. Serialized as `w:moveTo` */
export class MoveToMathControl extends MathControlMoveType {

    public static override _Q = 'w:moveTo';

}
/** Defines the MoveFromMathControl Class. Serialized as `w:moveFrom` */
export class MoveFromMathControl extends MathControlMoveType {

    public static override _Q = 'w:moveFrom';

}
/** Defines the DeletedMathControl Class. Serialized as `w:del` */
export class DeletedMathControl extends OxmlCompositeElement<RunProperties> {

    public static override _Q = 'w:del';
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
/** Defines the InsertedMathControl Class. Serialized as `w:ins` */
export class InsertedMathControl extends OxmlCompositeElement<RunProperties | DeletedMathControl> {

    public static override _Q = 'w:ins';
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
/** Run Properties. Serialized as `w:rPr` */
export class RunProperties extends OxmlCompositeElement<RunStyle | RunFonts | Bold | BoldComplexScript | Italic | ItalicComplexScript | Caps | SmallCaps | Strike | DoubleStrike | Outline | Shadow | Emboss | Imprint | NoProof | SnapToGrid | Vanish | WebHidden | Color | Spacing | CharacterScale | Kern | Position | FontSize | FontSizeComplexScript | Highlight | Underline | TextEffect | Border | Shading | FitText | VerticalTextAlignment | RightToLeftText | ComplexScript | Emphasis | Languages | EastAsianLayout | SpecVanish | W14Glow | W14Shadow | W14Reflection | W14TextOutlineEffect | W14FillTextEffect | W14Scene3D | W14Properties3D | W14Ligatures | W14NumberingFormat | W14NumberSpacing | W14StylisticSets | W14ContextualAlternatives | RunPropertiesChange> {

    public static override _Q = 'w:rPr';
    /** Returns RunStyle. */
    public get runStyle(): RunStyle | undefined { return this._f(RunStyle); }
    /** Returns RunFonts. */
    public get runFonts(): RunFonts | undefined { return this._f(RunFonts); }
    /** Returns Bold. */
    public get bold(): Bold | undefined { return this._f(Bold); }
    /** Returns BoldComplexScript. */
    public get boldComplexScript(): BoldComplexScript | undefined { return this._f(BoldComplexScript); }
    /** Returns Italic. */
    public get italic(): Italic | undefined { return this._f(Italic); }
    /** Returns ItalicComplexScript. */
    public get italicComplexScript(): ItalicComplexScript | undefined { return this._f(ItalicComplexScript); }
    /** Returns Caps. */
    public get caps(): Caps | undefined { return this._f(Caps); }
    /** Returns SmallCaps. */
    public get smallCaps(): SmallCaps | undefined { return this._f(SmallCaps); }
    /** Returns Strike. */
    public get strike(): Strike | undefined { return this._f(Strike); }
    /** Returns DoubleStrike. */
    public get doubleStrike(): DoubleStrike | undefined { return this._f(DoubleStrike); }
    /** Returns Outline. */
    public get outline(): Outline | undefined { return this._f(Outline); }
    /** Returns Shadow. */
    public get shadow(): Shadow | undefined { return this._f(Shadow); }
    /** Returns Emboss. */
    public get emboss(): Emboss | undefined { return this._f(Emboss); }
    /** Returns Imprint. */
    public get imprint(): Imprint | undefined { return this._f(Imprint); }
    /** Returns NoProof. */
    public get noProof(): NoProof | undefined { return this._f(NoProof); }
    /** Returns SnapToGrid. */
    public get snapToGrid(): SnapToGrid | undefined { return this._f(SnapToGrid); }
    /** Returns Vanish. */
    public get vanish(): Vanish | undefined { return this._f(Vanish); }
    /** Returns WebHidden. */
    public get webHidden(): WebHidden | undefined { return this._f(WebHidden); }
    /** Returns Color. */
    public get color(): Color | undefined { return this._f(Color); }
    /** Returns Spacing. */
    public get spacing(): Spacing | undefined { return this._f(Spacing); }
    /** Returns CharacterScale. */
    public get characterScale(): CharacterScale | undefined { return this._f(CharacterScale); }
    /** Returns Kern. */
    public get kern(): Kern | undefined { return this._f(Kern); }
    /** Returns Position. */
    public get position(): Position | undefined { return this._f(Position); }
    /** Returns FontSize. */
    public get fontSize(): FontSize | undefined { return this._f(FontSize); }
    /** Returns FontSizeComplexScript. */
    public get fontSizeComplexScript(): FontSizeComplexScript | undefined { return this._f(FontSizeComplexScript); }
    /** Returns Highlight. */
    public get highlight(): Highlight | undefined { return this._f(Highlight); }
    /** Returns Underline. */
    public get underline(): Underline | undefined { return this._f(Underline); }
    /** Returns TextEffect. */
    public get textEffect(): TextEffect | undefined { return this._f(TextEffect); }
    /** Returns Border. */
    public get border(): Border | undefined { return this._f(Border); }
    /** Returns Shading. */
    public get shading(): Shading | undefined { return this._f(Shading); }
    /** Returns FitText. */
    public get fitText(): FitText | undefined { return this._f(FitText); }
    /** Returns VerticalTextAlignment. */
    public get verticalTextAlignment(): VerticalTextAlignment | undefined { return this._f(VerticalTextAlignment); }
    /** Returns RightToLeftText. */
    public get rightToLeftText(): RightToLeftText | undefined { return this._f(RightToLeftText); }
    /** Returns ComplexScript. */
    public get complexScript(): ComplexScript | undefined { return this._f(ComplexScript); }
    /** Returns Emphasis. */
    public get emphasis(): Emphasis | undefined { return this._f(Emphasis); }
    /** Returns Languages. */
    public get languages(): Languages | undefined { return this._f(Languages); }
    /** Returns EastAsianLayout. */
    public get eastAsianLayout(): EastAsianLayout | undefined { return this._f(EastAsianLayout); }
    /** Returns SpecVanish. */
    public get specVanish(): SpecVanish | undefined { return this._f(SpecVanish); }
    /** Returns W14Glow. */
    public get glow(): W14Glow | undefined { return this._f(W14Glow); }
    /** Returns W14Shadow. */
    public get shadow14(): W14Shadow | undefined { return this._f(W14Shadow); }
    /** Returns W14Reflection. */
    public get reflection(): W14Reflection | undefined { return this._f(W14Reflection); }
    /** Returns W14TextOutlineEffect. */
    public get textOutlineEffect(): W14TextOutlineEffect | undefined { return this._f(W14TextOutlineEffect); }
    /** Returns W14FillTextEffect. */
    public get fillTextEffect(): W14FillTextEffect | undefined { return this._f(W14FillTextEffect); }
    /** Returns W14Scene3D. */
    public get scene3D(): W14Scene3D | undefined { return this._f(W14Scene3D); }
    /** Returns W14Properties3D. */
    public get properties3D(): W14Properties3D | undefined { return this._f(W14Properties3D); }
    /** Returns W14Ligatures. */
    public get ligatures(): W14Ligatures | undefined { return this._f(W14Ligatures); }
    /** Returns W14NumberingFormat. */
    public get numberingFormat(): W14NumberingFormat | undefined { return this._f(W14NumberingFormat); }
    /** Returns W14NumberSpacing. */
    public get numberSpacing(): W14NumberSpacing | undefined { return this._f(W14NumberSpacing); }
    /** Returns W14StylisticSets. */
    public get stylisticSets(): W14StylisticSets | undefined { return this._f(W14StylisticSets); }
    /** Returns W14ContextualAlternatives. */
    public get contextualAlternatives(): W14ContextualAlternatives | undefined { return this._f(W14ContextualAlternatives); }
    /** Returns RunPropertiesChange. */
    public get runPropertiesChange(): RunPropertiesChange | undefined { return this._f(RunPropertiesChange); }

}
/** Defines the RunPropertiesChange Class. Serialized as `w:rPrChange` */
export class RunPropertiesChange extends OxmlCompositeElement<PreviousRunProperties> {

    public static override _Q = 'w:rPrChange';
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
    /** Previous Run Properties. */
    public get previousRunProperties(): PreviousRunProperties | undefined { return this._f(PreviousRunProperties); }

}
/** Defines the EastAsianLayout Class. Serialized as `w:eastAsianLayout` */
export class EastAsianLayout extends OxmlLeafElement {

    public static override _Q = 'w:eastAsianLayout';
    public static override _A = ['w:id','w:combine','w:combineBrackets','w:vert','w:vertCompress',];
    /** East Asian Typography Run ID. Serialized as `w:id` */
    public get id(): Int32Value | undefined { return this._g('w:id'); }
    public set id(v: Int32Value | undefined) { this._s('w:id', v); }
    /** Two Lines in One. Serialized as `w:combine` */
    public get combine(): OnOffValue | undefined { return this._g('w:combine'); }
    public set combine(v: OnOffValue | undefined) { this._s('w:combine', v); }
    /** Display Brackets Around Two Lines in One. Serialized as `w:combineBrackets` */
    public get combineBrackets(): CombineBracketValues | undefined { return this._g('w:combineBrackets'); }
    public set combineBrackets(v: CombineBracketValues | undefined) { this._s('w:combineBrackets', v); }
    /** Horizontal in Vertical (Rotate Text). Serialized as `w:vert` */
    public get vertical(): OnOffValue | undefined { return this._g('w:vert'); }
    public set vertical(v: OnOffValue | undefined) { this._s('w:vert', v); }
    /** Compress Rotated Text to Line Height. Serialized as `w:vertCompress` */
    public get verticalCompress(): OnOffValue | undefined { return this._g('w:vertCompress'); }
    public set verticalCompress(v: OnOffValue | undefined) { this._s('w:vertCompress', v); }

}
/** Defines the LanguageType Class. */
export abstract class LanguageType extends OxmlLeafElement {

    public static override _A = ['w:val','w:eastAsia','w:bidi',];
    /** Latin Language. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }
    /** East Asian Language. Serialized as `w:eastAsia` */
    public get eastAsia(): StringValue | undefined { return this._g('w:eastAsia'); }
    public set eastAsia(v: StringValue | undefined) { this._s('w:eastAsia', v); }
    /** Complex Script Language. Serialized as `w:bidi` */
    public get bidi(): StringValue | undefined { return this._g('w:bidi'); }
    public set bidi(v: StringValue | undefined) { this._s('w:bidi', v); }

}
/** Theme Font Languages. Serialized as `w:themeFontLang` */
export class ThemeFontLanguages extends LanguageType {

    public static override _Q = 'w:themeFontLang';

}
/** Defines the Languages Class. Serialized as `w:lang` */
export class Languages extends LanguageType {

    public static override _Q = 'w:lang';

}
/** Defines the Emphasis Class. Serialized as `w:em` */
export class Emphasis extends OxmlLeafElement {

    public static override _Q = 'w:em';
    public static override _A = ['w:val',];
    /** Emphasis Mark Type. Serialized as `w:val` */
    public get val(): EmphasisMarkValues | undefined { return this._g('w:val'); }
    public set val(v: EmphasisMarkValues | undefined) { this._s('w:val', v); }

}
/** Defines the VerticalTextAlignment Class. Serialized as `w:vertAlign` */
export class VerticalTextAlignment extends OxmlLeafElement {

    public static override _Q = 'w:vertAlign';
    public static override _A = ['w:val',];
    /** Subscript/Superscript Value. Serialized as `w:val` */
    public get val(): VerticalPositionValues | undefined { return this._g('w:val'); }
    public set val(v: VerticalPositionValues | undefined) { this._s('w:val', v); }

}
/** Defines the FitText Class. Serialized as `w:fitText` */
export class FitText extends OxmlLeafElement {

    public static override _Q = 'w:fitText';
    public static override _A = ['w:val','w:id',];
    /** Value. Serialized as `w:val` */
    public get val(): UInt32Value | undefined { return this._g('w:val'); }
    public set val(v: UInt32Value | undefined) { this._s('w:val', v); }
    /** Fit Text Run ID. Serialized as `w:id` */
    public get id(): Int32Value | undefined { return this._g('w:id'); }
    public set id(v: Int32Value | undefined) { this._s('w:id', v); }

}
/** Defines the BorderType Class. */
export abstract class BorderType extends OxmlLeafElement {

    public static override _A = ['w:val','w:color','w:themeColor','w:themeTint','w:themeShade','w:sz','w:space','w:shadow','w:frame',];
    /** Border Style. Serialized as `w:val` */
    public get val(): BorderValues | undefined { return this._g('w:val'); }
    public set val(v: BorderValues | undefined) { this._s('w:val', v); }
    /** Border Color. Serialized as `w:color` */
    public get color(): StringValue | undefined { return this._g('w:color'); }
    public set color(v: StringValue | undefined) { this._s('w:color', v); }
    /** Border Theme Color. Serialized as `w:themeColor` */
    public get themeColor(): ThemeColorValues | undefined { return this._g('w:themeColor'); }
    public set themeColor(v: ThemeColorValues | undefined) { this._s('w:themeColor', v); }
    /** Border Theme Color Tint. Serialized as `w:themeTint` */
    public get themeTint(): StringValue | undefined { return this._g('w:themeTint'); }
    public set themeTint(v: StringValue | undefined) { this._s('w:themeTint', v); }
    /** Border Theme Color Shade. Serialized as `w:themeShade` */
    public get themeShade(): StringValue | undefined { return this._g('w:themeShade'); }
    public set themeShade(v: StringValue | undefined) { this._s('w:themeShade', v); }
    /** Border Width. Serialized as `w:sz` */
    public get size(): UInt32Value | undefined { return this._g('w:sz'); }
    public set size(v: UInt32Value | undefined) { this._s('w:sz', v); }
    /** Border Spacing Measurement. Serialized as `w:space` */
    public get space(): UInt32Value | undefined { return this._g('w:space'); }
    public set space(v: UInt32Value | undefined) { this._s('w:space', v); }
    /** Border Shadow. Serialized as `w:shadow` */
    public get shadow(): OnOffValue | undefined { return this._g('w:shadow'); }
    public set shadow(v: OnOffValue | undefined) { this._s('w:shadow', v); }
    /** Create Frame Effect. Serialized as `w:frame` */
    public get frame(): OnOffValue | undefined { return this._g('w:frame'); }
    public set frame(v: OnOffValue | undefined) { this._s('w:frame', v); }

}
/** Table Cell Top Right to Bottom Left Diagonal Border. Serialized as `w:tr2bl` */
export class TopRightToBottomLeftCellBorder extends BorderType {

    public static override _Q = 'w:tr2bl';

}
/** Table Cell Top Left to Bottom Right Diagonal Border. Serialized as `w:tl2br` */
export class TopLeftToBottomRightCellBorder extends BorderType {

    public static override _Q = 'w:tl2br';

}
/** Table Inside Vertical Edges Border. Serialized as `w:insideV` */
export class InsideVerticalBorder extends BorderType {

    public static override _Q = 'w:insideV';

}
/** Table Inside Horizontal Edges Border. Serialized as `w:insideH` */
export class InsideHorizontalBorder extends BorderType {

    public static override _Q = 'w:insideH';

}
/** Defines the EndBorder Class. Serialized as `w:end` */
export class EndBorder extends BorderType {

    public static override _Q = 'w:end';

}
/** Defines the StartBorder Class. Serialized as `w:start` */
export class StartBorder extends BorderType {

    public static override _Q = 'w:start';

}
/** Paragraph Border Between Facing Pages. Serialized as `w:bar` */
export class BarBorder extends BorderType {

    public static override _Q = 'w:bar';

}
/** Paragraph Border Between Identical Paragraphs. Serialized as `w:between` */
export class BetweenBorder extends BorderType {

    public static override _Q = 'w:between';

}
/** Right Paragraph Border. Serialized as `w:right` */
export class RightBorder extends BorderType {

    public static override _Q = 'w:right';

}
/** Paragraph Border Between Identical Paragraphs. Serialized as `w:bottom` */
export class BottomBorder extends BorderType {

    public static override _Q = 'w:bottom';

}
/** Left Paragraph Border. Serialized as `w:left` */
export class LeftBorder extends BorderType {

    public static override _Q = 'w:left';

}
/** Paragraph Border Above Identical Paragraphs. Serialized as `w:top` */
export class TopBorder extends BorderType {

    public static override _Q = 'w:top';

}
/** Defines the Border Class. Serialized as `w:bdr` */
export class Border extends BorderType {

    public static override _Q = 'w:bdr';

}
/** Defines the TextEffect Class. Serialized as `w:effect` */
export class TextEffect extends OxmlLeafElement {

    public static override _Q = 'w:effect';
    public static override _A = ['w:val',];
    /** Animated Text Effect Type. Serialized as `w:val` */
    public get val(): TextEffectValues | undefined { return this._g('w:val'); }
    public set val(v: TextEffectValues | undefined) { this._s('w:val', v); }

}
/** Defines the Underline Class. Serialized as `w:u` */
export class Underline extends OxmlLeafElement {

    public static override _Q = 'w:u';
    public static override _A = ['w:val','w:color','w:themeColor','w:themeTint','w:themeShade',];
    /** Underline Style. Serialized as `w:val` */
    public get val(): UnderlineValues | undefined { return this._g('w:val'); }
    public set val(v: UnderlineValues | undefined) { this._s('w:val', v); }
    /** Underline Color. Serialized as `w:color` */
    public get color(): StringValue | undefined { return this._g('w:color'); }
    public set color(v: StringValue | undefined) { this._s('w:color', v); }
    /** Underline Theme Color. Serialized as `w:themeColor` */
    public get themeColor(): ThemeColorValues | undefined { return this._g('w:themeColor'); }
    public set themeColor(v: ThemeColorValues | undefined) { this._s('w:themeColor', v); }
    /** Underline Theme Color Tint. Serialized as `w:themeTint` */
    public get themeTint(): StringValue | undefined { return this._g('w:themeTint'); }
    public set themeTint(v: StringValue | undefined) { this._s('w:themeTint', v); }
    /** Underline Theme Color Shade. Serialized as `w:themeShade` */
    public get themeShade(): StringValue | undefined { return this._g('w:themeShade'); }
    public set themeShade(v: StringValue | undefined) { this._s('w:themeShade', v); }

}
/** Defines the Highlight Class. Serialized as `w:highlight` */
export class Highlight extends OxmlLeafElement {

    public static override _Q = 'w:highlight';
    public static override _A = ['w:val',];
    /** Highlighting Color. Serialized as `w:val` */
    public get val(): HighlightColorValues | undefined { return this._g('w:val'); }
    public set val(v: HighlightColorValues | undefined) { this._s('w:val', v); }

}
/** Defines the HpsMeasureType Class. */
export abstract class HpsMeasureType extends OxmlLeafElement {

    public static override _A = ['w:val',];
    /** Half Point Measurement. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Phonetic Guide Base Text Font Size. Serialized as `w:hpsBaseText` */
export class PhoneticGuideBaseTextSize extends HpsMeasureType {

    public static override _Q = 'w:hpsBaseText';

}
/** Phonetic Guide Text Font Size. Serialized as `w:hps` */
export class PhoneticGuideTextFontSize extends HpsMeasureType {

    public static override _Q = 'w:hps';

}
/** Checkbox Form Field Size. Serialized as `w:size` */
export class FormFieldSize extends HpsMeasureType {

    public static override _Q = 'w:size';

}
/** Defines the FontSizeComplexScript Class. Serialized as `w:szCs` */
export class FontSizeComplexScript extends HpsMeasureType {

    public static override _Q = 'w:szCs';

}
/** Defines the FontSize Class. Serialized as `w:sz` */
export class FontSize extends HpsMeasureType {

    public static override _Q = 'w:sz';

}
/** Defines the Position Class. Serialized as `w:position` */
export class Position extends OxmlLeafElement {

    public static override _Q = 'w:position';
    public static override _A = ['w:val',];
    /** Signed Half-Point Measurement. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Defines the Kern Class. Serialized as `w:kern` */
export class Kern extends OxmlLeafElement {

    public static override _Q = 'w:kern';
    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): UInt32Value | undefined { return this._g('w:val'); }
    public set val(v: UInt32Value | undefined) { this._s('w:val', v); }

}
/** Defines the CharacterScale Class. Serialized as `w:w` */
export class CharacterScale extends OxmlLeafElement {

    public static override _Q = 'w:w';
    public static override _A = ['w:val',];
    /** Text Expansion/Compression Value. Serialized as `w:val` */
    public get val(): IntegerValue | undefined { return this._g('w:val'); }
    public set val(v: IntegerValue | undefined) { this._s('w:val', v); }

}
/** Defines the Spacing Class. Serialized as `w:spacing` */
export class Spacing extends OxmlLeafElement {

    public static override _Q = 'w:spacing';
    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): Int32Value | undefined { return this._g('w:val'); }
    public set val(v: Int32Value | undefined) { this._s('w:val', v); }

}
/** Defines the Color Class. Serialized as `w:color` */
export class Color extends OxmlLeafElement {

    public static override _Q = 'w:color';
    public static override _A = ['w:val','w:themeColor','w:themeTint','w:themeShade',];
    /** Run Content Color. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }
    /** Run Content Theme Color. Serialized as `w:themeColor` */
    public get themeColor(): ThemeColorValues | undefined { return this._g('w:themeColor'); }
    public set themeColor(v: ThemeColorValues | undefined) { this._s('w:themeColor', v); }
    /** Run Content Theme Color Tint. Serialized as `w:themeTint` */
    public get themeTint(): StringValue | undefined { return this._g('w:themeTint'); }
    public set themeTint(v: StringValue | undefined) { this._s('w:themeTint', v); }
    /** Run Content Theme Color Shade. Serialized as `w:themeShade` */
    public get themeShade(): StringValue | undefined { return this._g('w:themeShade'); }
    public set themeShade(v: StringValue | undefined) { this._s('w:themeShade', v); }

}
/** Defines the RunFonts Class. Serialized as `w:rFonts` */
export class RunFonts extends OxmlLeafElement {

    public static override _Q = 'w:rFonts';
    public static override _A = ['w:hint','w:ascii','w:hAnsi','w:eastAsia','w:cs','w:asciiTheme','w:hAnsiTheme','w:eastAsiaTheme','w:cstheme',];
    /** Font Content Type. Serialized as `w:hint` */
    public get hint(): FontTypeHintValues | undefined { return this._g('w:hint'); }
    public set hint(v: FontTypeHintValues | undefined) { this._s('w:hint', v); }
    /** ASCII Font. Serialized as `w:ascii` */
    public get ascii(): StringValue | undefined { return this._g('w:ascii'); }
    public set ascii(v: StringValue | undefined) { this._s('w:ascii', v); }
    /** High ANSI Font. Serialized as `w:hAnsi` */
    public get highAnsi(): StringValue | undefined { return this._g('w:hAnsi'); }
    public set highAnsi(v: StringValue | undefined) { this._s('w:hAnsi', v); }
    /** East Asian Font. Serialized as `w:eastAsia` */
    public get eastAsia(): StringValue | undefined { return this._g('w:eastAsia'); }
    public set eastAsia(v: StringValue | undefined) { this._s('w:eastAsia', v); }
    /** Complex Script Font. Serialized as `w:cs` */
    public get complexScript(): StringValue | undefined { return this._g('w:cs'); }
    public set complexScript(v: StringValue | undefined) { this._s('w:cs', v); }
    /** ASCII Theme Font. Serialized as `w:asciiTheme` */
    public get asciiTheme(): ThemeFontValues | undefined { return this._g('w:asciiTheme'); }
    public set asciiTheme(v: ThemeFontValues | undefined) { this._s('w:asciiTheme', v); }
    /** High ANSI Theme Font. Serialized as `w:hAnsiTheme` */
    public get highAnsiTheme(): ThemeFontValues | undefined { return this._g('w:hAnsiTheme'); }
    public set highAnsiTheme(v: ThemeFontValues | undefined) { this._s('w:hAnsiTheme', v); }
    /** East Asian Theme Font. Serialized as `w:eastAsiaTheme` */
    public get eastAsiaTheme(): ThemeFontValues | undefined { return this._g('w:eastAsiaTheme'); }
    public set eastAsiaTheme(v: ThemeFontValues | undefined) { this._s('w:eastAsiaTheme', v); }
    /** Complex Script Theme Font. Serialized as `w:cstheme` */
    public get complexScriptTheme(): ThemeFontValues | undefined { return this._g('w:cstheme'); }
    public set complexScriptTheme(v: ThemeFontValues | undefined) { this._s('w:cstheme', v); }

}
/** Defines the String253Type Class. */
export abstract class String253Type extends OxmlLeafElement {

    public static override _A = ['w:val',];
    /** val. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Default Table Style for Newly Inserted Tables. Serialized as `w:defaultTableStyle` */
export class DefaultTableStyle extends String253Type {

    public static override _Q = 'w:defaultTableStyle';

}
/** Paragraph Style Applied to Automatically Generated Paragraphs. Serialized as `w:clickAndTypeStyle` */
export class ClickAndTypeStyle extends String253Type {

    public static override _Q = 'w:clickAndTypeStyle';

}
/** Linked Style Reference. Serialized as `w:link` */
export class LinkedStyle extends String253Type {

    public static override _Q = 'w:link';

}
/** Style For Next Paragraph. Serialized as `w:next` */
export class NextParagraphStyle extends String253Type {

    public static override _Q = 'w:next';

}
/** Parent Style ID. Serialized as `w:basedOn` */
export class BasedOn extends String253Type {

    public static override _Q = 'w:basedOn';

}
/** Alternate Style Names. Serialized as `w:aliases` */
export class Aliases extends String253Type {

    public static override _Q = 'w:aliases';

}
/** Numbering Style Reference. Serialized as `w:numStyleLink` */
export class NumberingStyleLink extends String253Type {

    public static override _Q = 'w:numStyleLink';

}
/** Numbering Style Definition. Serialized as `w:styleLink` */
export class StyleLink extends String253Type {

    public static override _Q = 'w:styleLink';

}
/** Abstract Numbering Definition Name. Serialized as `w:name` */
export class AbstractNumDefinitionName extends String253Type {

    public static override _Q = 'w:name';

}
/** Paragraph Style's Associated Numbering Level. Serialized as `w:pStyle` */
export class ParagraphStyleIdInLevel extends String253Type {

    public static override _Q = 'w:pStyle';

}
/** Defines the TableStyle Class. Serialized as `w:tblStyle` */
export class TableStyle extends String253Type {

    public static override _Q = 'w:tblStyle';

}
/** Defines the RunStyle Class. Serialized as `w:rStyle` */
export class RunStyle extends String253Type {

    public static override _Q = 'w:rStyle';

}
/** Absolute Position Tab Character. Serialized as `w:ptab` */
export class PositionalTab extends OxmlLeafElement {

    public static override _Q = 'w:ptab';
    public static override _A = ['w:alignment','w:relativeTo','w:leader',];
    /** Positional Tab Stop Alignment. Serialized as `w:alignment` */
    public get alignment(): AbsolutePositionTabAlignmentValues | undefined { return this._g('w:alignment'); }
    public set alignment(v: AbsolutePositionTabAlignmentValues | undefined) { this._s('w:alignment', v); }
    /** Positional Tab Base. Serialized as `w:relativeTo` */
    public get relativeTo(): AbsolutePositionTabPositioningBaseValues | undefined { return this._g('w:relativeTo'); }
    public set relativeTo(v: AbsolutePositionTabPositioningBaseValues | undefined) { this._s('w:relativeTo', v); }
    /** Tab Leader Character. Serialized as `w:leader` */
    public get leader(): AbsolutePositionTabLeaderCharValues | undefined { return this._g('w:leader'); }
    public set leader(v: AbsolutePositionTabLeaderCharValues | undefined) { this._s('w:leader', v); }

}
/** DrawingML Object. Serialized as `w:drawing` */
export class Drawing extends OxmlCompositeElement<WpAnchor | WpInline> {

    public static override _Q = 'w:drawing';
    /** Drawing Element Anchor. */
    public get anchor(): WpAnchor | undefined { return this._f(WpAnchor); }
    /** Inline Drawing Object. */
    public get inline(): WpInline | undefined { return this._f(WpInline); }

}
/** Defines the FootnoteEndnoteReferenceType Class. */
export abstract class FootnoteEndnoteReferenceType extends OxmlLeafElement {

    public static override _A = ['w:customMarkFollows','w:id',];
    /** Suppress Footnote/Endnote Reference Mark. Serialized as `w:customMarkFollows` */
    public get customMarkFollows(): OnOffValue | undefined { return this._g('w:customMarkFollows'); }
    public set customMarkFollows(v: OnOffValue | undefined) { this._s('w:customMarkFollows', v); }
    /** Footnote/Endnote ID Reference. Serialized as `w:id` */
    public get id(): IntegerValue | undefined { return this._g('w:id'); }
    public set id(v: IntegerValue | undefined) { this._s('w:id', v); }

}
/** Endnote Reference. Serialized as `w:endnoteReference` */
export class EndnoteReference extends FootnoteEndnoteReferenceType {

    public static override _Q = 'w:endnoteReference';

}
/** Footnote Reference. Serialized as `w:footnoteReference` */
export class FootnoteReference extends FootnoteEndnoteReferenceType {

    public static override _Q = 'w:footnoteReference';

}
/** Phonetic Guide. Serialized as `w:ruby` */
export class Ruby extends OxmlCompositeElement<RubyProperties | RubyContent | RubyBase> {

    public static override _Q = 'w:ruby';
    /** Phonetic Guide Properties. */
    public get rubyProperties(): RubyProperties | undefined { return this._f(RubyProperties); }
    /** Phonetic Guide Text. */
    public get rubyContent(): RubyContent | undefined { return this._f(RubyContent); }
    /** Phonetic Guide Base Text. */
    public get rubyBase(): RubyBase | undefined { return this._f(RubyBase); }

}
/** Complex Field Character. Serialized as `w:fldChar` */
export class FieldChar extends OxmlCompositeElement<FieldData | FormFieldData | NumberingChange> {

    public static override _Q = 'w:fldChar';
    public static override _A = ['w:fldCharType','w:fldLock','w:dirty',];
    /** Field Character Type. Serialized as `w:fldCharType` */
    public get fieldCharType(): FieldCharValues | undefined { return this._g('w:fldCharType'); }
    public set fieldCharType(v: FieldCharValues | undefined) { this._s('w:fldCharType', v); }
    /** Field Should Not Be Recalculated. Serialized as `w:fldLock` */
    public get fieldLock(): OnOffValue | undefined { return this._g('w:fldLock'); }
    public set fieldLock(v: OnOffValue | undefined) { this._s('w:fldLock', v); }
    /** Field Result Invalidated. Serialized as `w:dirty` */
    public get dirty(): OnOffValue | undefined { return this._g('w:dirty'); }
    public set dirty(v: OnOffValue | undefined) { this._s('w:dirty', v); }
    /** Custom Field Data. */
    public get fieldData(): FieldData | undefined { return this._f(FieldData); }
    /** Form Field Properties. */
    public get formFieldData(): FormFieldData | undefined { return this._f(FormFieldData); }
    /** Previous Numbering Field Properties. */
    public get numberingChange(): NumberingChange | undefined { return this._f(NumberingChange); }

}
/** VML Object. Serialized as `w:pict` */
export class Picture extends OxmlCompositeElement<VGroup | VImageFile | VLine | VOval | VPolyLine | VRectangle | VRoundRectangle | VShape | VShapetype | VArc | VCurve | OOleObject | MovieReference | Control> {

    public static override _Q = 'w:pict';
    public static override _A = ['w14:anchorId',];
    /** anchorId. Serialized as `w14:anchorId` */
    public get anchorId(): HexBinaryValue | undefined { return this._g('w14:anchorId'); }
    public set anchorId(v: HexBinaryValue | undefined) { this._s('w14:anchorId', v); }

}
/** Inline Embedded Object. Serialized as `w:object` */
export class EmbeddedObject extends OxmlCompositeElement<VGroup | VImageFile | VLine | VOval | VPolyLine | VRectangle | VRoundRectangle | VShape | VShapetype | VArc | VCurve | OOleObject | Drawing | Control | ObjectEmbed | ObjectLink> {

    public static override _Q = 'w:object';
    public static override _A = ['w:dxaOrig','w:dyaOrig','w14:anchorId',];
    /** dxaOrig. Serialized as `w:dxaOrig` */
    public get dxaOriginal(): StringValue | undefined { return this._g('w:dxaOrig'); }
    public set dxaOriginal(v: StringValue | undefined) { this._s('w:dxaOrig', v); }
    /** dyaOrig. Serialized as `w:dyaOrig` */
    public get dyaOriginal(): StringValue | undefined { return this._g('w:dyaOrig'); }
    public set dyaOriginal(v: StringValue | undefined) { this._s('w:dyaOrig', v); }
    /** anchorId. Serialized as `w14:anchorId` */
    public get anchorId(): HexBinaryValue | undefined { return this._g('w14:anchorId'); }
    public set anchorId(v: HexBinaryValue | undefined) { this._s('w14:anchorId', v); }

}
/** Symbol Character. Serialized as `w:sym` */
export class SymbolChar extends OxmlLeafElement {

    public static override _Q = 'w:sym';
    public static override _A = ['w:font','w:char',];
    /** Symbol Character Font. Serialized as `w:font` */
    public get font(): StringValue | undefined { return this._g('w:font'); }
    public set font(v: StringValue | undefined) { this._s('w:font', v); }
    /** Symbol Character Code. Serialized as `w:char` */
    public get char(): HexBinaryValue | undefined { return this._g('w:char'); }
    public set char(v: HexBinaryValue | undefined) { this._s('w:char', v); }

}
/** Defines the EmptyType Class. */
export abstract class EmptyType extends OxmlLeafElement {


}
/** Upgrade Document on Open. Serialized as `w:forceUpgrade` */
export class ForceUpgrade extends EmptyType {

    public static override _Q = 'w:forceUpgrade';

}
/** Defines the SdtContentBibliography Class. Serialized as `w:bibliography` */
export class SdtContentBibliography extends EmptyType {

    public static override _Q = 'w:bibliography';

}
/** Defines the SdtContentGroup Class. Serialized as `w:group` */
export class SdtContentGroup extends EmptyType {

    public static override _Q = 'w:group';

}
/** Defines the SdtContentCitation Class. Serialized as `w:citation` */
export class SdtContentCitation extends EmptyType {

    public static override _Q = 'w:citation';

}
/** Defines the SdtContentRichText Class. Serialized as `w:richText` */
export class SdtContentRichText extends EmptyType {

    public static override _Q = 'w:richText';

}
/** Defines the SdtContentPicture Class. Serialized as `w:picture` */
export class SdtContentPicture extends EmptyType {

    public static override _Q = 'w:picture';

}
/** Defines the SdtContentEquation Class. Serialized as `w:equation` */
export class SdtContentEquation extends EmptyType {

    public static override _Q = 'w:equation';

}
/** Position of Last Calculated Page Break. Serialized as `w:lastRenderedPageBreak` */
export class LastRenderedPageBreak extends EmptyType {

    public static override _Q = 'w:lastRenderedPageBreak';

}
/** Tab Character. Serialized as `w:tab` */
export class TabChar extends EmptyType {

    public static override _Q = 'w:tab';

}
/** Carriage Return. Serialized as `w:cr` */
export class CarriageReturn extends EmptyType {

    public static override _Q = 'w:cr';

}
/** Page Number Block. Serialized as `w:pgNum` */
export class PageNumber extends EmptyType {

    public static override _Q = 'w:pgNum';

}
/** Continuation Separator Mark. Serialized as `w:continuationSeparator` */
export class ContinuationSeparatorMark extends EmptyType {

    public static override _Q = 'w:continuationSeparator';

}
/** Footnote/Endnote Separator Mark. Serialized as `w:separator` */
export class SeparatorMark extends EmptyType {

    public static override _Q = 'w:separator';

}
/** Endnote Reference Mark. Serialized as `w:endnoteRef` */
export class EndnoteReferenceMark extends EmptyType {

    public static override _Q = 'w:endnoteRef';

}
/** Footnote Reference Mark. Serialized as `w:footnoteRef` */
export class FootnoteReferenceMark extends EmptyType {

    public static override _Q = 'w:footnoteRef';

}
/** Comment Information Block. Serialized as `w:annotationRef` */
export class AnnotationReferenceMark extends EmptyType {

    public static override _Q = 'w:annotationRef';

}
/** Date Block - Long Year Format. Serialized as `w:yearLong` */
export class YearLong extends EmptyType {

    public static override _Q = 'w:yearLong';

}
/** Date Block - Long Month Format. Serialized as `w:monthLong` */
export class MonthLong extends EmptyType {

    public static override _Q = 'w:monthLong';

}
/** Date Block - Long Day Format. Serialized as `w:dayLong` */
export class DayLong extends EmptyType {

    public static override _Q = 'w:dayLong';

}
/** Date Block - Short Year Format. Serialized as `w:yearShort` */
export class YearShort extends EmptyType {

    public static override _Q = 'w:yearShort';

}
/** Date Block - Short Month Format. Serialized as `w:monthShort` */
export class MonthShort extends EmptyType {

    public static override _Q = 'w:monthShort';

}
/** Date Block - Short Day Format. Serialized as `w:dayShort` */
export class DayShort extends EmptyType {

    public static override _Q = 'w:dayShort';

}
/** Optional Hyphen Character. Serialized as `w:softHyphen` */
export class SoftHyphen extends EmptyType {

    public static override _Q = 'w:softHyphen';

}
/** Non Breaking Hyphen Character. Serialized as `w:noBreakHyphen` */
export class NoBreakHyphen extends EmptyType {

    public static override _Q = 'w:noBreakHyphen';

}
/** Defines the TextType Class. */
export abstract class TextType extends OxmlLeafTextElement {

    public static override _A = ['xml:space',];
    /** space. Serialized as `xml:space` */
    public get space(): SpaceProcessingModeValues | undefined { return this._g('xml:space'); }
    public set space(v: SpaceProcessingModeValues | undefined) { this._s('xml:space', v); }

}
/** Deleted Field Code. Serialized as `w:delInstrText` */
export class DeletedFieldCode extends TextType {

    public static override _Q = 'w:delInstrText';

}
/** Field Code. Serialized as `w:instrText` */
export class FieldCode extends TextType {

    public static override _Q = 'w:instrText';

}
/** Deleted Text. Serialized as `w:delText` */
export class DeletedText extends TextType {

    public static override _Q = 'w:delText';

}
/** Text. Serialized as `w:t` */
export class Text extends TextType {

    public static override _Q = 'w:t';

}
/** Break. Serialized as `w:br` */
export class Break extends OxmlLeafElement {

    public static override _Q = 'w:br';
    public static override _A = ['w:type','w:clear',];
    /** Break Type. Serialized as `w:type` */
    public get type(): BreakValues | undefined { return this._g('w:type'); }
    public set type(v: BreakValues | undefined) { this._s('w:type', v); }
    /** Restart Location For Text Wrapping Break. Serialized as `w:clear` */
    public get clear(): BreakTextRestartLocationValues | undefined { return this._g('w:clear'); }
    public set clear(v: BreakTextRestartLocationValues | undefined) { this._s('w:clear', v); }

}
/** Defines the HeaderFooterReferenceType Class. */
export abstract class HeaderFooterReferenceType extends OxmlLeafElement {

    public static override _A = ['w:type','r:id',];
    /** type. Serialized as `w:type` */
    public get type(): HeaderFooterValues | undefined { return this._g('w:type'); }
    public set type(v: HeaderFooterValues | undefined) { this._s('w:type', v); }
    /** Relationship to Part. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }

}
/** Footer Reference. Serialized as `w:footerReference` */
export class FooterReference extends HeaderFooterReferenceType {

    public static override _Q = 'w:footerReference';

}
/** Header Reference. Serialized as `w:headerReference` */
export class HeaderReference extends HeaderFooterReferenceType {

    public static override _Q = 'w:headerReference';

}
/** Defines the ParagraphPropertiesChange Class. Serialized as `w:pPrChange` */
export class ParagraphPropertiesChange extends OxmlCompositeElement<ParagraphPropertiesExtended> {

    public static override _Q = 'w:pPrChange';
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
    /** Previous Paragraph Properties. */
    public get paragraphPropertiesExtended(): ParagraphPropertiesExtended | undefined { return this._f(ParagraphPropertiesExtended); }

}
/** Defines the DecimalNumberType Class. */
export abstract class DecimalNumberType extends OxmlLeafElement {

    public static override _A = ['w:val',];
    /** Decimal Number Value. Serialized as `w:val` */
    public get val(): Int32Value | undefined { return this._g('w:val'); }
    public set val(v: Int32Value | undefined) { this._s('w:val', v); }

}
/** Defines the PixelsPerInch Class. Serialized as `w:pixelsPerInch` */
export class PixelsPerInch extends DecimalNumberType {

    public static override _Q = 'w:pixelsPerInch';

}
/** Defines the SdtId Class. Serialized as `w:id` */
export class SdtId extends DecimalNumberType {

    public static override _Q = 'w:id';

}
/** Last Reviewed Abstract Numbering Definition. Serialized as `w:numIdMacAtCleanup` */
export class NumberingIdMacAtCleanup extends DecimalNumberType {

    public static override _Q = 'w:numIdMacAtCleanup';

}
/** Numbering Level Starting Value Override. Serialized as `w:startOverride` */
export class StartOverrideNumberingValue extends DecimalNumberType {

    public static override _Q = 'w:startOverride';

}
/** Picture Numbering Symbol Definition Reference. Serialized as `w:lvlPicBulletId` */
export class LevelPictureBulletId extends DecimalNumberType {

    public static override _Q = 'w:lvlPicBulletId';

}
/** Restart Numbering Level Symbol. Serialized as `w:lvlRestart` */
export class LevelRestart extends DecimalNumberType {

    public static override _Q = 'w:lvlRestart';

}
/** Mail Merge Error Reporting Setting. Serialized as `w:checkErrors` */
export class CheckErrors extends DecimalNumberType {

    public static override _Q = 'w:checkErrors';

}
/** Record Currently Displayed In Merged Document. Serialized as `w:activeRecord` */
export class ActiveRecord extends DecimalNumberType {

    public static override _Q = 'w:activeRecord';

}
/** Drop-Down List Selection. Serialized as `w:result` */
export class DropDownListSelection extends DecimalNumberType {

    public static override _Q = 'w:result';

}
/** Defines the GridAfter Class. Serialized as `w:gridAfter` */
export class GridAfter extends DecimalNumberType {

    public static override _Q = 'w:gridAfter';

}
/** Defines the GridBefore Class. Serialized as `w:gridBefore` */
export class GridBefore extends DecimalNumberType {

    public static override _Q = 'w:gridBefore';

}
/** Defines the GridSpan Class. Serialized as `w:gridSpan` */
export class GridSpan extends DecimalNumberType {

    public static override _Q = 'w:gridSpan';

}
/** Defines the OutlineLevel Class. Serialized as `w:outlineLvl` */
export class OutlineLevel extends DecimalNumberType {

    public static override _Q = 'w:outlineLvl';

}
/** Defines the TextBoxTightWrap Class. Serialized as `w:textboxTightWrap` */
export class TextBoxTightWrap extends OxmlLeafElement {

    public static override _Q = 'w:textboxTightWrap';
    public static override _A = ['w:val',];
    /** Lines to Tight Wrap to Paragraph Extents. Serialized as `w:val` */
    public get val(): TextBoxTightWrapValues | undefined { return this._g('w:val'); }
    public set val(v: TextBoxTightWrapValues | undefined) { this._s('w:val', v); }

}
/** Defines the TextAlignment Class. Serialized as `w:textAlignment` */
export class TextAlignment extends OxmlLeafElement {

    public static override _Q = 'w:textAlignment';
    public static override _A = ['w:val',];
    /** Vertical Character Alignment Position. Serialized as `w:val` */
    public get val(): VerticalTextAlignmentValues | undefined { return this._g('w:val'); }
    public set val(v: VerticalTextAlignmentValues | undefined) { this._s('w:val', v); }

}
/** Defines the TextDirection Class. Serialized as `w:textDirection` */
export class TextDirection extends OxmlLeafElement {

    public static override _Q = 'w:textDirection';
    public static override _A = ['w:val',];
    /** Direction of Text Flow. Serialized as `w:val` */
    public get val(): TextDirectionValues | undefined { return this._g('w:val'); }
    public set val(v: TextDirectionValues | undefined) { this._s('w:val', v); }

}
/** Defines the Justification Class. Serialized as `w:jc` */
export class Justification extends OxmlLeafElement {

    public static override _Q = 'w:jc';
    public static override _A = ['w:val',];
    /** Alignment Type. Serialized as `w:val` */
    public get val(): JustificationValues | undefined { return this._g('w:val'); }
    public set val(v: JustificationValues | undefined) { this._s('w:val', v); }

}
/** Defines the Indentation Class. Serialized as `w:ind` */
export class Indentation extends OxmlLeafElement {

    public static override _Q = 'w:ind';
    public static override _A = ['w:left','w:start','w:leftChars','w:startChars','w:right','w:end','w:rightChars','w:endChars','w:hanging','w:hangingChars','w:firstLine','w:firstLineChars',];
    /** Left Indentation. Serialized as `w:left` */
    public get left(): StringValue | undefined { return this._g('w:left'); }
    public set left(v: StringValue | undefined) { this._s('w:left', v); }
    /** start. Serialized as `w:start` */
    public get start(): StringValue | undefined { return this._g('w:start'); }
    public set start(v: StringValue | undefined) { this._s('w:start', v); }
    /** Left Indentation in Character Units. Serialized as `w:leftChars` */
    public get leftChars(): Int32Value | undefined { return this._g('w:leftChars'); }
    public set leftChars(v: Int32Value | undefined) { this._s('w:leftChars', v); }
    /** startChars. Serialized as `w:startChars` */
    public get startCharacters(): Int32Value | undefined { return this._g('w:startChars'); }
    public set startCharacters(v: Int32Value | undefined) { this._s('w:startChars', v); }
    /** Right Indentation. Serialized as `w:right` */
    public get right(): StringValue | undefined { return this._g('w:right'); }
    public set right(v: StringValue | undefined) { this._s('w:right', v); }
    /** end. Serialized as `w:end` */
    public get end(): StringValue | undefined { return this._g('w:end'); }
    public set end(v: StringValue | undefined) { this._s('w:end', v); }
    /** Right Indentation in Character Units. Serialized as `w:rightChars` */
    public get rightChars(): Int32Value | undefined { return this._g('w:rightChars'); }
    public set rightChars(v: Int32Value | undefined) { this._s('w:rightChars', v); }
    /** endChars. Serialized as `w:endChars` */
    public get endCharacters(): Int32Value | undefined { return this._g('w:endChars'); }
    public set endCharacters(v: Int32Value | undefined) { this._s('w:endChars', v); }
    /** Indentation Removed from First Line. Serialized as `w:hanging` */
    public get hanging(): StringValue | undefined { return this._g('w:hanging'); }
    public set hanging(v: StringValue | undefined) { this._s('w:hanging', v); }
    /** Indentation Removed From First Line in Character Units. Serialized as `w:hangingChars` */
    public get hangingChars(): Int32Value | undefined { return this._g('w:hangingChars'); }
    public set hangingChars(v: Int32Value | undefined) { this._s('w:hangingChars', v); }
    /** Additional First Line Indentation. Serialized as `w:firstLine` */
    public get firstLine(): StringValue | undefined { return this._g('w:firstLine'); }
    public set firstLine(v: StringValue | undefined) { this._s('w:firstLine', v); }
    /** Additional First Line Indentation in Character Units. Serialized as `w:firstLineChars` */
    public get firstLineChars(): Int32Value | undefined { return this._g('w:firstLineChars'); }
    public set firstLineChars(v: Int32Value | undefined) { this._s('w:firstLineChars', v); }

}
/** Defines the SpacingBetweenLines Class. Serialized as `w:spacing` */
export class SpacingBetweenLines extends OxmlLeafElement {

    public static override _Q = 'w:spacing';
    public static override _A = ['w:before','w:beforeLines','w:beforeAutospacing','w:after','w:afterLines','w:afterAutospacing','w:line','w:lineRule',];
    /** Spacing Above Paragraph. Serialized as `w:before` */
    public get before(): StringValue | undefined { return this._g('w:before'); }
    public set before(v: StringValue | undefined) { this._s('w:before', v); }
    /** Spacing Above Paragraph IN Line Units. Serialized as `w:beforeLines` */
    public get beforeLines(): Int32Value | undefined { return this._g('w:beforeLines'); }
    public set beforeLines(v: Int32Value | undefined) { this._s('w:beforeLines', v); }
    /** Automatically Determine Spacing Above Paragraph. Serialized as `w:beforeAutospacing` */
    public get beforeAutoSpacing(): OnOffValue | undefined { return this._g('w:beforeAutospacing'); }
    public set beforeAutoSpacing(v: OnOffValue | undefined) { this._s('w:beforeAutospacing', v); }
    /** Spacing Below Paragraph. Serialized as `w:after` */
    public get after(): StringValue | undefined { return this._g('w:after'); }
    public set after(v: StringValue | undefined) { this._s('w:after', v); }
    /** Spacing Below Paragraph in Line Units. Serialized as `w:afterLines` */
    public get afterLines(): Int32Value | undefined { return this._g('w:afterLines'); }
    public set afterLines(v: Int32Value | undefined) { this._s('w:afterLines', v); }
    /** Automatically Determine Spacing Below Paragraph. Serialized as `w:afterAutospacing` */
    public get afterAutoSpacing(): OnOffValue | undefined { return this._g('w:afterAutospacing'); }
    public set afterAutoSpacing(v: OnOffValue | undefined) { this._s('w:afterAutospacing', v); }
    /** Spacing Between Lines in Paragraph. Serialized as `w:line` */
    public get line(): StringValue | undefined { return this._g('w:line'); }
    public set line(v: StringValue | undefined) { this._s('w:line', v); }
    /** Type of Spacing Between Lines. Serialized as `w:lineRule` */
    public get lineRule(): LineSpacingRuleValues | undefined { return this._g('w:lineRule'); }
    public set lineRule(v: LineSpacingRuleValues | undefined) { this._s('w:lineRule', v); }

}
/** Defines the Tabs Class. Serialized as `w:tabs` */
export class Tabs extends OxmlCompositeElement<TabStop> {

    public static override _Q = 'w:tabs';

}
/** Defines the Shading Class. Serialized as `w:shd` */
export class Shading extends OxmlLeafElement {

    public static override _Q = 'w:shd';
    public static override _A = ['w:val','w:color','w:themeColor','w:themeTint','w:themeShade','w:fill','w:themeFill','w:themeFillTint','w:themeFillShade',];
    /** Shading Pattern. Serialized as `w:val` */
    public get val(): ShadingPatternValues | undefined { return this._g('w:val'); }
    public set val(v: ShadingPatternValues | undefined) { this._s('w:val', v); }
    /** Shading Pattern Color. Serialized as `w:color` */
    public get color(): StringValue | undefined { return this._g('w:color'); }
    public set color(v: StringValue | undefined) { this._s('w:color', v); }
    /** Shading Pattern Theme Color. Serialized as `w:themeColor` */
    public get themeColor(): ThemeColorValues | undefined { return this._g('w:themeColor'); }
    public set themeColor(v: ThemeColorValues | undefined) { this._s('w:themeColor', v); }
    /** Shading Pattern Theme Color Tint. Serialized as `w:themeTint` */
    public get themeTint(): StringValue | undefined { return this._g('w:themeTint'); }
    public set themeTint(v: StringValue | undefined) { this._s('w:themeTint', v); }
    /** Shading Pattern Theme Color Shade. Serialized as `w:themeShade` */
    public get themeShade(): StringValue | undefined { return this._g('w:themeShade'); }
    public set themeShade(v: StringValue | undefined) { this._s('w:themeShade', v); }
    /** Shading Background Color. Serialized as `w:fill` */
    public get fill(): StringValue | undefined { return this._g('w:fill'); }
    public set fill(v: StringValue | undefined) { this._s('w:fill', v); }
    /** Shading Background Theme Color. Serialized as `w:themeFill` */
    public get themeFill(): ThemeColorValues | undefined { return this._g('w:themeFill'); }
    public set themeFill(v: ThemeColorValues | undefined) { this._s('w:themeFill', v); }
    /** Shading Background Theme Color Tint. Serialized as `w:themeFillTint` */
    public get themeFillTint(): StringValue | undefined { return this._g('w:themeFillTint'); }
    public set themeFillTint(v: StringValue | undefined) { this._s('w:themeFillTint', v); }
    /** Shading Background Theme Color Shade. Serialized as `w:themeFillShade` */
    public get themeFillShade(): StringValue | undefined { return this._g('w:themeFillShade'); }
    public set themeFillShade(v: StringValue | undefined) { this._s('w:themeFillShade', v); }

}
/** Defines the ParagraphBorders Class. Serialized as `w:pBdr` */
export class ParagraphBorders extends OxmlCompositeElement<TopBorder | LeftBorder | BottomBorder | RightBorder | BetweenBorder | BarBorder> {

    public static override _Q = 'w:pBdr';
    /** Paragraph Border Above Identical Paragraphs. */
    public get topBorder(): TopBorder | undefined { return this._f(TopBorder); }
    /** Left Paragraph Border. */
    public get leftBorder(): LeftBorder | undefined { return this._f(LeftBorder); }
    /** Paragraph Border Between Identical Paragraphs. */
    public get bottomBorder(): BottomBorder | undefined { return this._f(BottomBorder); }
    /** Right Paragraph Border. */
    public get rightBorder(): RightBorder | undefined { return this._f(RightBorder); }
    /** Paragraph Border Between Identical Paragraphs. */
    public get betweenBorder(): BetweenBorder | undefined { return this._f(BetweenBorder); }
    /** Paragraph Border Between Facing Pages. */
    public get barBorder(): BarBorder | undefined { return this._f(BarBorder); }

}
/** Defines the NumberingProperties Class. Serialized as `w:numPr` */
export class NumberingProperties extends OxmlCompositeElement<NumberingLevelReference | NumberingId | NumberingChange | Inserted> {

    public static override _Q = 'w:numPr';
    /** Numbering Level Reference. */
    public get numberingLevelReference(): NumberingLevelReference | undefined { return this._f(NumberingLevelReference); }
    /** Numbering Definition Instance Reference. */
    public get numberingId(): NumberingId | undefined { return this._f(NumberingId); }
    /** Previous Paragraph Numbering Properties. */
    public get numberingChange(): NumberingChange | undefined { return this._f(NumberingChange); }
    /** Inserted Numbering Properties. */
    public get inserted(): Inserted | undefined { return this._f(Inserted); }

}
/** Defines the FrameProperties Class. Serialized as `w:framePr` */
export class FrameProperties extends OxmlLeafElement {

    public static override _Q = 'w:framePr';
    public static override _A = ['w:dropCap','w:lines','w:w','w:h','w:vSpace','w:hSpace','w:wrap','w:hAnchor','w:vAnchor','w:x','w:xAlign','w:y','w:yAlign','w:hRule','w:anchorLock',];
    /** Drop Cap Frame. Serialized as `w:dropCap` */
    public get dropCap(): DropCapLocationValues | undefined { return this._g('w:dropCap'); }
    public set dropCap(v: DropCapLocationValues | undefined) { this._s('w:dropCap', v); }
    /** Drop Cap Vertical Height in Lines. Serialized as `w:lines` */
    public get lines(): Int32Value | undefined { return this._g('w:lines'); }
    public set lines(v: Int32Value | undefined) { this._s('w:lines', v); }
    /** Frame Width. Serialized as `w:w` */
    public get width(): StringValue | undefined { return this._g('w:w'); }
    public set width(v: StringValue | undefined) { this._s('w:w', v); }
    /** Frame Height. Serialized as `w:h` */
    public get height(): UInt32Value | undefined { return this._g('w:h'); }
    public set height(v: UInt32Value | undefined) { this._s('w:h', v); }
    /** Vertical Frame Padding. Serialized as `w:vSpace` */
    public get verticalSpace(): StringValue | undefined { return this._g('w:vSpace'); }
    public set verticalSpace(v: StringValue | undefined) { this._s('w:vSpace', v); }
    /** Horizontal Frame Padding. Serialized as `w:hSpace` */
    public get horizontalSpace(): StringValue | undefined { return this._g('w:hSpace'); }
    public set horizontalSpace(v: StringValue | undefined) { this._s('w:hSpace', v); }
    /** Text Wrapping Around Frame. Serialized as `w:wrap` */
    public get wrap(): TextWrappingValues | undefined { return this._g('w:wrap'); }
    public set wrap(v: TextWrappingValues | undefined) { this._s('w:wrap', v); }
    /** Frame Horizontal Positioning Base. Serialized as `w:hAnchor` */
    public get horizontalPosition(): HorizontalAnchorValues | undefined { return this._g('w:hAnchor'); }
    public set horizontalPosition(v: HorizontalAnchorValues | undefined) { this._s('w:hAnchor', v); }
    /** Frame Vertical Positioning Base. Serialized as `w:vAnchor` */
    public get verticalPosition(): VerticalAnchorValues | undefined { return this._g('w:vAnchor'); }
    public set verticalPosition(v: VerticalAnchorValues | undefined) { this._s('w:vAnchor', v); }
    /** Absolute Horizontal Position. Serialized as `w:x` */
    public get x(): StringValue | undefined { return this._g('w:x'); }
    public set x(v: StringValue | undefined) { this._s('w:x', v); }
    /** Relative Horizontal Position. Serialized as `w:xAlign` */
    public get xAlign(): HorizontalAlignmentValues | undefined { return this._g('w:xAlign'); }
    public set xAlign(v: HorizontalAlignmentValues | undefined) { this._s('w:xAlign', v); }
    /** Absolute Vertical Position. Serialized as `w:y` */
    public get y(): StringValue | undefined { return this._g('w:y'); }
    public set y(v: StringValue | undefined) { this._s('w:y', v); }
    /** Relative Vertical Position. Serialized as `w:yAlign` */
    public get yAlign(): VerticalAlignmentValues | undefined { return this._g('w:yAlign'); }
    public set yAlign(v: VerticalAlignmentValues | undefined) { this._s('w:yAlign', v); }
    /** Frame Height Type. Serialized as `w:hRule` */
    public get heightType(): HeightRuleValues | undefined { return this._g('w:hRule'); }
    public set heightType(v: HeightRuleValues | undefined) { this._s('w:hRule', v); }
    /** Lock Frame Anchor to Paragraph. Serialized as `w:anchorLock` */
    public get anchorLock(): OnOffValue | undefined { return this._g('w:anchorLock'); }
    public set anchorLock(v: OnOffValue | undefined) { this._s('w:anchorLock', v); }

}
/** Defines the OnOffType Class. */
export abstract class OnOffType extends OxmlLeafElement {

    public static override _A = ['w:val',];
    /** On/Off Value. Serialized as `w:val` */
    public get val(): OnOffValue | undefined { return this._g('w:val'); }
    public set val(v: OnOffValue | undefined) { this._s('w:val', v); }

}
/** Defines the NotTrueType Class. Serialized as `w:notTrueType` */
export class NotTrueType extends OnOffType {

    public static override _Q = 'w:notTrueType';

}
/** Defines the DoNotUseLongFileNames Class. Serialized as `w:doNotUseLongFileNames` */
export class DoNotUseLongFileNames extends OnOffType {

    public static override _Q = 'w:doNotUseLongFileNames';

}
/** Defines the DoNotOrganizeInFolder Class. Serialized as `w:doNotOrganizeInFolder` */
export class DoNotOrganizeInFolder extends OnOffType {

    public static override _Q = 'w:doNotOrganizeInFolder';

}
/** Defines the DoNotSaveAsSingleFile Class. Serialized as `w:doNotSaveAsSingleFile` */
export class DoNotSaveAsSingleFile extends OnOffType {

    public static override _Q = 'w:doNotSaveAsSingleFile';

}
/** Defines the DoNotRelyOnCSS Class. Serialized as `w:doNotRelyOnCSS` */
export class DoNotRelyOnCSS extends OnOffType {

    public static override _Q = 'w:doNotRelyOnCSS';

}
/** Defines the AllowPNG Class. Serialized as `w:allowPNG` */
export class AllowPNG extends OnOffType {

    public static override _Q = 'w:allowPNG';

}
/** Defines the RelyOnVML Class. Serialized as `w:relyOnVML` */
export class RelyOnVML extends OnOffType {

    public static override _Q = 'w:relyOnVML';

}
/** Defines the OptimizeForBrowser Class. Serialized as `w:optimizeForBrowser` */
export class OptimizeForBrowser extends OnOffType {

    public static override _Q = 'w:optimizeForBrowser';

}
/** Do Not Automatically Compress Images. Serialized as `w:doNotAutoCompressPictures` */
export class DoNotAutoCompressPictures extends OnOffType {

    public static override _Q = 'w:doNotAutoCompressPictures';

}
/** Do Not Include Content in Text Boxes, Footnotes, and Endnotes in Document Statistics. Serialized as `w:doNotIncludeSubdocsInStats` */
export class DoNotIncludeSubdocsInStats extends OnOffType {

    public static override _Q = 'w:doNotIncludeSubdocsInStats';

}
/** Disable Features Incompatible With Earlier Word Processing Formats. Serialized as `w:uiCompat97To2003` */
export class UICompatibleWith97To2003 extends OnOffType {

    public static override _Q = 'w:uiCompat97To2003';

}
/** Automatically Recalculate Fields on Open. Serialized as `w:updateFields` */
export class UpdateFieldsOnOpen extends OnOffType {

    public static override _Q = 'w:updateFields';

}
/** Do Not Mark Custom XML Elements With No Namespace As Invalid. Serialized as `w:alwaysMergeEmptyNamespace` */
export class AlwaysMergeEmptyNamespace extends OnOffType {

    public static override _Q = 'w:alwaysMergeEmptyNamespace';

}
/** Show Visual Indicators for Custom XML Markup Start/End Locations. Serialized as `w:showXMLTags` */
export class ShowXmlTags extends OnOffType {

    public static override _Q = 'w:showXMLTags';

}
/** Save Document as XML File through Custom XSL Transform. Serialized as `w:useXSLTWhenSaving` */
export class UseXsltWhenSaving extends OnOffType {

    public static override _Q = 'w:useXSLTWhenSaving';

}
/** Only Save Custom XML Markup. Serialized as `w:saveXmlDataOnly` */
export class SaveXmlDataOnly extends OnOffType {

    public static override _Q = 'w:saveXmlDataOnly';

}
/** Do Not Show Visual Indicator For Invalid Custom XML Markup. Serialized as `w:doNotDemarcateInvalidXml` */
export class DoNotDemarcateInvalidXml extends OnOffType {

    public static override _Q = 'w:doNotDemarcateInvalidXml';

}
/** Use Custom XML Element Names as Default Placeholder Text. Serialized as `w:alwaysShowPlaceholderText` */
export class AlwaysShowPlaceholderText extends OnOffType {

    public static override _Q = 'w:alwaysShowPlaceholderText';

}
/** Ignore Mixed Content When Validating Custom XML Markup. Serialized as `w:ignoreMixedContent` */
export class IgnoreMixedContent extends OnOffType {

    public static override _Q = 'w:ignoreMixedContent';

}
/** Allow Saving Document As XML File When Custom XML Markup Is Invalid. Serialized as `w:saveInvalidXml` */
export class SaveInvalidXml extends OnOffType {

    public static override _Q = 'w:saveInvalidXml';

}
/** Do Not Validate Custom XML Markup Against Schemas. Serialized as `w:doNotValidateAgainstSchema` */
export class DoNotValidateAgainstSchema extends OnOffType {

    public static override _Q = 'w:doNotValidateAgainstSchema';

}
/** Generate Thumbnail For Document On Save. Serialized as `w:savePreviewPicture` */
export class SavePreviewPicture extends OnOffType {

    public static override _Q = 'w:savePreviewPicture';

}
/** Use Strict Kinsoku Rules for Japanese Text. Serialized as `w:strictFirstAndLastChars` */
export class StrictFirstAndLastChars extends OnOffType {

    public static override _Q = 'w:strictFirstAndLastChars';

}
/** Print Two Pages Per Sheet. Serialized as `w:printTwoOnOne` */
export class PrintTwoOnOne extends OnOffType {

    public static override _Q = 'w:printTwoOnOne';

}
/** Never Kern Punctuation Characters. Serialized as `w:noPunctuationKerning` */
export class NoPunctuationKerning extends OnOffType {

    public static override _Q = 'w:noPunctuationKerning';

}
/** Do Not Show Visual Indicator For Form Fields. Serialized as `w:doNotShadeFormData` */
export class DoNotShadeFormData extends OnOffType {

    public static override _Q = 'w:doNotShadeFormData';

}
/** Do Not Use Margins for Drawing Grid Origin. Serialized as `w:doNotUseMarginsForDrawingGridOrigin` */
export class DoNotUseMarginsForDrawingGridOrigin extends OnOffType {

    public static override _Q = 'w:doNotUseMarginsForDrawingGridOrigin';

}
/** Book Fold Printing. Serialized as `w:bookFoldPrinting` */
export class BookFoldPrinting extends OnOffType {

    public static override _Q = 'w:bookFoldPrinting';

}
/** Reverse Book Fold Printing. Serialized as `w:bookFoldRevPrinting` */
export class BookFoldReversePrinting extends OnOffType {

    public static override _Q = 'w:bookFoldRevPrinting';

}
/** Different Even/Odd Page Headers and Footers. Serialized as `w:evenAndOddHeaders` */
export class EvenAndOddHeaders extends OnOffType {

    public static override _Q = 'w:evenAndOddHeaders';

}
/** Show E-Mail Message Header. Serialized as `w:showEnvelope` */
export class ShowEnvelope extends OnOffType {

    public static override _Q = 'w:showEnvelope';

}
/** Do Not Hyphenate Words in ALL CAPITAL LETTERS. Serialized as `w:doNotHyphenateCaps` */
export class DoNotHyphenateCaps extends OnOffType {

    public static override _Q = 'w:doNotHyphenateCaps';

}
/** Automatically Hyphenate Document Contents When Displayed. Serialized as `w:autoHyphenation` */
export class AutoHyphenation extends OnOffType {

    public static override _Q = 'w:autoHyphenation';

}
/** Prevent Replacement of Styles Part. Serialized as `w:styleLockQFSet` */
export class StyleLockStylesPart extends OnOffType {

    public static override _Q = 'w:styleLockQFSet';

}
/** Prevent Modification of Themes Part. Serialized as `w:styleLockTheme` */
export class StyleLockThemesPart extends OnOffType {

    public static override _Q = 'w:styleLockTheme';

}
/** Allow Automatic Formatting to Override Formatting Protection Settings. Serialized as `w:autoFormatOverride` */
export class AutoFormatOverride extends OnOffType {

    public static override _Q = 'w:autoFormatOverride';

}
/** Do Not Track Formatting Revisions When Tracking Revisions. Serialized as `w:doNotTrackFormatting` */
export class DoNotTrackFormatting extends OnOffType {

    public static override _Q = 'w:doNotTrackFormatting';

}
/** Do Not Use Move Syntax When Tracking Revisions. Serialized as `w:doNotTrackMoves` */
export class DoNotTrackMoves extends OnOffType {

    public static override _Q = 'w:doNotTrackMoves';

}
/** Track Revisions to Document. Serialized as `w:trackRevisions` */
export class TrackRevisions extends OnOffType {

    public static override _Q = 'w:trackRevisions';

}
/** Automatically Update Styles From Document Template. Serialized as `w:linkStyles` */
export class LinkStyles extends OnOffType {

    public static override _Q = 'w:linkStyles';

}
/** Structured Document Tag Placeholder Text Should be Resaved. Serialized as `w:formsDesign` */
export class FormsDesign extends OnOffType {

    public static override _Q = 'w:formsDesign';

}
/** Do Not Display Visual Indication of Grammatical Errors. Serialized as `w:hideGrammaticalErrors` */
export class HideGrammaticalErrors extends OnOffType {

    public static override _Q = 'w:hideGrammaticalErrors';

}
/** Do Not Display Visual Indication of Spelling Errors. Serialized as `w:hideSpellingErrors` */
export class HideSpellingErrors extends OnOffType {

    public static override _Q = 'w:hideSpellingErrors';

}
/** Position Gutter At Top of Page. Serialized as `w:gutterAtTop` */
export class GutterAtTop extends OnOffType {

    public static override _Q = 'w:gutterAtTop';

}
/** Page Border Excludes Footer. Serialized as `w:bordersDoNotSurroundFooter` */
export class BordersDoNotSurroundFooter extends OnOffType {

    public static override _Q = 'w:bordersDoNotSurroundFooter';

}
/** Page Border Excludes Header. Serialized as `w:bordersDoNotSurroundHeader` */
export class BordersDoNotSurroundHeader extends OnOffType {

    public static override _Q = 'w:bordersDoNotSurroundHeader';

}
/** Align Paragraph and Table Borders with Page Border. Serialized as `w:alignBordersAndEdges` */
export class AlignBorderAndEdges extends OnOffType {

    public static override _Q = 'w:alignBordersAndEdges';

}
/** Mirror Page Margins. Serialized as `w:mirrorMargins` */
export class MirrorMargins extends OnOffType {

    public static override _Q = 'w:mirrorMargins';

}
/** Only Save Form Field Content. Serialized as `w:saveFormsData` */
export class SaveFormsData extends OnOffType {

    public static override _Q = 'w:saveFormsData';

}
/** Subset Fonts When Embedding. Serialized as `w:saveSubsetFonts` */
export class SaveSubsetFonts extends OnOffType {

    public static override _Q = 'w:saveSubsetFonts';

}
/** Embed Common System Fonts. Serialized as `w:embedSystemFonts` */
export class EmbedSystemFonts extends OnOffType {

    public static override _Q = 'w:embedSystemFonts';

}
/** Embed TrueType Fonts. Serialized as `w:embedTrueTypeFonts` */
export class EmbedTrueTypeFonts extends OnOffType {

    public static override _Q = 'w:embedTrueTypeFonts';

}
/** Only Print Form Field Content. Serialized as `w:printFormsData` */
export class PrintFormsData extends OnOffType {

    public static override _Q = 'w:printFormsData';

}
/** Print Fractional Character Widths. Serialized as `w:printFractionalCharacterWidth` */
export class PrintFractionalCharacterWidth extends OnOffType {

    public static override _Q = 'w:printFractionalCharacterWidth';

}
/** Print PostScript Codes With Document Text. Serialized as `w:printPostScriptOverText` */
export class PrintPostScriptOverText extends OnOffType {

    public static override _Q = 'w:printPostScriptOverText';

}
/** Display Background Objects When Displaying Document. Serialized as `w:displayBackgroundShape` */
export class DisplayBackgroundShape extends OnOffType {

    public static override _Q = 'w:displayBackgroundShape';

}
/** Do Not Display Visual Boundary For Header/Footer or Between Pages. Serialized as `w:doNotDisplayPageBoundaries` */
export class DoNotDisplayPageBoundaries extends OnOffType {

    public static override _Q = 'w:doNotDisplayPageBoundaries';

}
/** Remove Date and Time from Annotations. Serialized as `w:removeDateAndTime` */
export class RemoveDateAndTime extends OnOffType {

    public static override _Q = 'w:removeDateAndTime';

}
/** Remove Personal Information from Document Properties. Serialized as `w:removePersonalInformation` */
export class RemovePersonalInformation extends OnOffType {

    public static override _Q = 'w:removePersonalInformation';

}
/** Defines the TemporarySdt Class. Serialized as `w:temporary` */
export class TemporarySdt extends OnOffType {

    public static override _Q = 'w:temporary';

}
/** Defines the ShowingPlaceholder Class. Serialized as `w:showingPlcHdr` */
export class ShowingPlaceholder extends OnOffType {

    public static override _Q = 'w:showingPlcHdr';

}
/** Use Cached Paragraph Information for Column Balancing. Serialized as `w:cachedColBalance` */
export class CachedColumnBalance extends OnOffType {

    public static override _Q = 'w:cachedColBalance';

}
/** Use ANSI Kerning Pairs from Fonts. Serialized as `w:useAnsiKerningPairs` */
export class UseAnsiKerningPairs extends OnOffType {

    public static override _Q = 'w:useAnsiKerningPairs';

}
/** Ignore Vertical Alignment in Textboxes. Serialized as `w:doNotVertAlignInTxbx` */
export class DoNotVerticallyAlignInTextBox extends OnOffType {

    public static override _Q = 'w:doNotVertAlignInTxbx';

}
/** Don't Break Table Rows Around Floating Tables. Serialized as `w:doNotBreakConstrainedForcedTable` */
export class DoNotBreakConstrainedForcedTable extends OnOffType {

    public static override _Q = 'w:doNotBreakConstrainedForcedTable';

}
/** Don't Vertically Align Cells Containing Floating Objects. Serialized as `w:doNotVertAlignCellWithSp` */
export class DoNotVerticallyAlignCellWithShape extends OnOffType {

    public static override _Q = 'w:doNotVertAlignCellWithSp';

}
/** Always Move Paragraph Mark to Page after a Page Break. Serialized as `w:splitPgBreakAndParaMark` */
export class SplitPageBreakAndParagraphMark extends OnOffType {

    public static override _Q = 'w:splitPgBreakAndParaMark';

}
/** Always Use Fixed Width for Hangul Characters. Serialized as `w:displayHangulFixedWidth` */
export class DisplayHangulFixedWidth extends OnOffType {

    public static override _Q = 'w:displayHangulFixedWidth';

}
/** Underline Following Character Following Numbering. Serialized as `w:underlineTabInNumList` */
export class UnderlineTabInNumberingList extends OnOffType {

    public static override _Q = 'w:underlineTabInNumList';

}
/** Allow Table Columns To Exceed Preferred Widths of Constituent Cells. Serialized as `w:autofitToFirstFixedWidthCell` */
export class AutofitToFirstFixedWidthCell extends OnOffType {

    public static override _Q = 'w:autofitToFirstFixedWidthCell';

}
/** Do Not AutoFit Tables To Fit Next To Wrapped Objects. Serialized as `w:doNotAutofitConstrainedTables` */
export class DoNotAutofitConstrainedTables extends OnOffType {

    public static override _Q = 'w:doNotAutofitConstrainedTables';

}
/** Do Not Ignore Floating Objects When Calculating Paragraph Indentation. Serialized as `w:doNotSuppressIndentation` */
export class DoNotSuppressIndentation extends OnOffType {

    public static override _Q = 'w:doNotSuppressIndentation';

}
/** Allow Contextual Spacing of Paragraphs in Tables. Serialized as `w:allowSpaceOfSameStyleInTable` */
export class AllowSpaceOfSameStyleInTable extends OnOffType {

    public static override _Q = 'w:allowSpaceOfSameStyleInTable';

}
/** Use Alternate Set of East Asian Line Breaking Rules. Serialized as `w:useAltKinsokuLineBreakRules` */
export class UseAltKinsokuLineBreakRules extends OnOffType {

    public static override _Q = 'w:useAltKinsokuLineBreakRules';

}
/** Ignore Hanging Indent When Creating Tab Stop After Numbering. Serialized as `w:doNotUseIndentAsNumberingTabStop` */
export class DoNotUseIndentAsNumberingTabStop extends OnOffType {

    public static override _Q = 'w:doNotUseIndentAsNumberingTabStop';

}
/** Do Not Automatically Apply List Paragraph Style To Bulleted/Numbered Text. Serialized as `w:useNormalStyleForList` */
export class UseNormalStyleForList extends OnOffType {

    public static override _Q = 'w:useNormalStyleForList';

}
/** Do Not Bypass East Asian/Complex Script Layout Code. Serialized as `w:useFELayout` */
export class UseFarEastLayout extends OnOffType {

    public static override _Q = 'w:useFELayout';

}
/** Allow Tables to AutoFit Into Page Margins. Serialized as `w:growAutofit` */
export class GrowAutofit extends OnOffType {

    public static override _Q = 'w:growAutofit';

}
/** Emulate Word 2002 Table Style Rules. Serialized as `w:useWord2002TableStyleRules` */
export class UseWord2002TableStyleRules extends OnOffType {

    public static override _Q = 'w:useWord2002TableStyleRules';

}
/** Do Not Compress Compressible Characters When Using Document Grid. Serialized as `w:doNotUseEastAsianBreakRules` */
export class DoNotUseEastAsianBreakRules extends OnOffType {

    public static override _Q = 'w:doNotUseEastAsianBreakRules';

}
/** Do Not Allow Hanging Punctuation With Character Grid. Serialized as `w:doNotWrapTextWithPunct` */
export class DoNotWrapTextWithPunctuation extends OnOffType {

    public static override _Q = 'w:doNotWrapTextWithPunct';

}
/** Use Legacy Ethiopic and Amharic Line Breaking Rules. Serialized as `w:applyBreakingRules` */
export class ApplyBreakingRules extends OnOffType {

    public static override _Q = 'w:applyBreakingRules';

}
/** Select Field When First or Last Character Is Selected. Serialized as `w:selectFldWithFirstOrLastChar` */
export class SelectFieldWithFirstOrLastChar extends OnOffType {

    public static override _Q = 'w:selectFldWithFirstOrLastChar';

}
/** Do Not Snap to Document Grid in Table Cells with Objects. Serialized as `w:doNotSnapToGridInCell` */
export class DoNotSnapToGridInCell extends OnOffType {

    public static override _Q = 'w:doNotSnapToGridInCell';

}
/** Do Not Allow Floating Tables To Break Across Pages. Serialized as `w:doNotBreakWrappedTables` */
export class DoNotBreakWrappedTables extends OnOffType {

    public static override _Q = 'w:doNotBreakWrappedTables';

}
/** Emulate Word 97 East Asian Line Breaking. Serialized as `w:useWord97LineBreakRules` */
export class UseWord97LineBreakRules extends OnOffType {

    public static override _Q = 'w:useWord97LineBreakRules';

}
/** Allow Table Rows to Wrap Inline Objects Independently. Serialized as `w:layoutTableRowsApart` */
export class LayoutTableRowsApart extends OnOffType {

    public static override _Q = 'w:layoutTableRowsApart';

}
/** Ignore Space Before Table When Deciding If Table Should Wrap Floating Object. Serialized as `w:layoutRawTableWidth` */
export class LayoutRawTableWidth extends OnOffType {

    public static override _Q = 'w:layoutRawTableWidth';

}
/** Use Fixed Paragraph Spacing for HTML Auto Setting. Serialized as `w:doNotUseHTMLParagraphAutoSpacing` */
export class DoNotUseHTMLParagraphAutoSpacing extends OnOffType {

    public static override _Q = 'w:doNotUseHTMLParagraphAutoSpacing';

}
/** Do Not Increase Line Height for Raised/Lowered Text. Serialized as `w:noSpaceRaiseLower` */
export class NoSpaceRaiseLower extends OnOffType {

    public static override _Q = 'w:noSpaceRaiseLower';

}
/** Emulate Word 95 Full-Width Character Spacing. Serialized as `w:autoSpaceLikeWord95` */
export class AutoSpaceLikeWord95 extends OnOffType {

    public static override _Q = 'w:autoSpaceLikeWord95';

}
/** Add Document Grid Line Pitch To Lines in Table Cells. Serialized as `w:adjustLineHeightInTable` */
export class AdjustLineHeightInTable extends OnOffType {

    public static override _Q = 'w:adjustLineHeightInTable';

}
/** Ignore Width of Last Tab Stop When Aligning Paragraph If It Is Not Left Aligned. Serialized as `w:forgetLastTabAlignment` */
export class ForgetLastTabAlignment extends OnOffType {

    public static override _Q = 'w:forgetLastTabAlignment';

}
/** Align Table Rows Independently. Serialized as `w:alignTablesRowByRow` */
export class AlignTablesRowByRow extends OnOffType {

    public static override _Q = 'w:alignTablesRowByRow';

}
/** Emulate Word 97 Text Wrapping Around Floating Objects. Serialized as `w:shapeLayoutLikeWW8` */
export class ShapeLayoutLikeWord8 extends OnOffType {

    public static override _Q = 'w:shapeLayoutLikeWW8';

}
/** Emulate Word 6.x/95/97 Footnote Placement. Serialized as `w:footnoteLayoutLikeWW8` */
export class FootnoteLayoutLikeWord8 extends OnOffType {

    public static override _Q = 'w:footnoteLayoutLikeWW8';

}
/** Line Wrap Trailing Spaces. Serialized as `w:wrapTrailSpaces` */
export class WrapTrailSpaces extends OnOffType {

    public static override _Q = 'w:wrapTrailSpaces';

}
/** Do Not Suppress Paragraph Borders Next To Frames. Serialized as `w:doNotSuppressParagraphBorders` */
export class DoNotSuppressParagraphBorders extends OnOffType {

    public static override _Q = 'w:doNotSuppressParagraphBorders';

}
/** Use Printer Metrics To Display Documents. Serialized as `w:usePrinterMetrics` */
export class UsePrinterMetrics extends OnOffType {

    public static override _Q = 'w:usePrinterMetrics';

}
/** Emulate Word 5.x for the Macintosh Small Caps Formatting. Serialized as `w:mwSmallCaps` */
export class MacWordSmallCaps extends OnOffType {

    public static override _Q = 'w:mwSmallCaps';

}
/** Emulate WordPerfect 6.x Font Height Calculation. Serialized as `w:truncateFontHeightsLikeWP6` */
export class TruncateFontHeightsLikeWordPerfect extends OnOffType {

    public static override _Q = 'w:truncateFontHeightsLikeWP6';

}
/** Treat Backslash Quotation Delimiter as Two Quotation Marks. Serialized as `w:convMailMergeEsc` */
export class ConvertMailMergeEscape extends OnOffType {

    public static override _Q = 'w:convMailMergeEsc';

}
/** Swap Paragraph Borders on Odd Numbered Pages. Serialized as `w:swapBordersFacingPages` */
export class SwapBordersFacingPages extends OnOffType {

    public static override _Q = 'w:swapBordersFacingPages';

}
/** Do Not Use Space Before On First Line After a Page Break. Serialized as `w:suppressSpBfAfterPgBrk` */
export class SuppressSpacingBeforeAfterPageBreak extends OnOffType {

    public static override _Q = 'w:suppressSpBfAfterPgBrk';

}
/** Emulate WordPerfect 5.x Line Spacing. Serialized as `w:suppressTopSpacingWP` */
export class SuppressTopSpacingWordPerfect extends OnOffType {

    public static override _Q = 'w:suppressTopSpacingWP';

}
/** Ignore Minimum Line Height for First Line on Page. Serialized as `w:suppressSpacingAtTopOfPage` */
export class SuppressSpacingAtTopOfPage extends OnOffType {

    public static override _Q = 'w:suppressSpacingAtTopOfPage';

}
/** Ignore Minimum and Exact Line Height for First Line on Page. Serialized as `w:suppressTopSpacing` */
export class SuppressTopSpacing extends OnOffType {

    public static override _Q = 'w:suppressTopSpacing';

}
/** Ignore Exact Line Height for Last Line on Page. Serialized as `w:suppressBottomSpacing` */
export class SuppressBottomSpacing extends OnOffType {

    public static override _Q = 'w:suppressBottomSpacing';

}
/** Increase Priority Of Font Size During Font Substitution. Serialized as `w:subFontBySize` */
export class SubFontBySize extends OnOffType {

    public static override _Q = 'w:subFontBySize';

}
/** Display Page/Column Breaks Present in Frames. Serialized as `w:showBreaksInFrames` */
export class ShowBreaksInFrames extends OnOffType {

    public static override _Q = 'w:showBreaksInFrames';

}
/** Space width. Serialized as `w:wpSpaceWidth` */
export class WordPerfectSpaceWidth extends OnOffType {

    public static override _Q = 'w:wpSpaceWidth';

}
/** Print Colors as Black And White without Dithering. Serialized as `w:printColBlack` */
export class PrintColorBlackWhite extends OnOffType {

    public static override _Q = 'w:printColBlack';

}
/** Print Body Text before Header/Footer Contents. Serialized as `w:printBodyTextBeforeHeader` */
export class PrintBodyTextBeforeHeader extends OnOffType {

    public static override _Q = 'w:printBodyTextBeforeHeader';

}
/** Emulate Word 6.0 Line Wrapping for East Asian Text. Serialized as `w:lineWrapLikeWord6` */
export class LineWrapLikeWord6 extends OnOffType {

    public static override _Q = 'w:lineWrapLikeWord6';

}
/** Only Expand/Condense Text By Whole Points. Serialized as `w:spacingInWholePoints` */
export class SpacingInWholePoints extends OnOffType {

    public static override _Q = 'w:spacingInWholePoints';

}
/** Don't Justify Lines Ending in Soft Line Break. Serialized as `w:doNotExpandShiftReturn` */
export class DoNotExpandShiftReturn extends OnOffType {

    public static override _Q = 'w:doNotExpandShiftReturn';

}
/** Underline All Trailing Spaces. Serialized as `w:ulTrailSpace` */
export class UnderlineTrailingSpaces extends OnOffType {

    public static override _Q = 'w:ulTrailSpace';

}
/** Convert Backslash To Yen Sign When Entered. Serialized as `w:doNotLeaveBackslashAlone` */
export class DoNotLeaveBackslashAlone extends OnOffType {

    public static override _Q = 'w:doNotLeaveBackslashAlone';

}
/** Do Not Center Content on Lines With Exact Line Height. Serialized as `w:noExtraLineSpacing` */
export class NoExtraLineSpacing extends OnOffType {

    public static override _Q = 'w:noExtraLineSpacing';

}
/** Balance Single Byte and Double Byte Characters. Serialized as `w:balanceSingleByteDoubleByteWidth` */
export class BalanceSingleByteDoubleByteWidth extends OnOffType {

    public static override _Q = 'w:balanceSingleByteDoubleByteWidth';

}
/** Do Not Balance Text Columns within a Section. Serialized as `w:noColumnBalance` */
export class NoColumnBalance extends OnOffType {

    public static override _Q = 'w:noColumnBalance';

}
/** Add Additional Space Below Baseline For Underlined East Asian Text. Serialized as `w:spaceForUL` */
export class SpaceForUnderline extends OnOffType {

    public static override _Q = 'w:spaceForUL';

}
/** Do Not Add Leading Between Lines of Text. Serialized as `w:noLeading` */
export class NoLeading extends OnOffType {

    public static override _Q = 'w:noLeading';

}
/** Do Not Create Custom Tab Stop for Hanging Indent. Serialized as `w:noTabHangInd` */
export class NoTabHangIndent extends OnOffType {

    public static override _Q = 'w:noTabHangInd';

}
/** Emulate WordPerfect 6.x Paragraph Justification. Serialized as `w:wpJustification` */
export class WordPerfectJustification extends OnOffType {

    public static override _Q = 'w:wpJustification';

}
/** Use Simplified Rules For Table Border Conflicts. Serialized as `w:useSingleBorderforContiguousCells` */
export class UseSingleBorderForContiguousCells extends OnOffType {

    public static override _Q = 'w:useSingleBorderforContiguousCells';

}
/** Data for HTML body Element. Serialized as `w:bodyDiv` */
export class BodyDiv extends OnOffType {

    public static override _Q = 'w:bodyDiv';

}
/** Data for HTML blockquote Element. Serialized as `w:blockQuote` */
export class BlockQuote extends OnOffType {

    public static override _Q = 'w:blockQuote';

}
/** Display All Levels Using Arabic Numerals. Serialized as `w:isLgl` */
export class IsLegalNumberingStyle extends OnOffType {

    public static override _Q = 'w:isLgl';

}
/** View Merged Data Within Document. Serialized as `w:viewMergedData` */
export class ViewMergedData extends OnOffType {

    public static override _Q = 'w:viewMergedData';

}
/** Merged Document To E-Mail Attachment. Serialized as `w:mailAsAttachment` */
export class MailAsAttachment extends OnOffType {

    public static override _Q = 'w:mailAsAttachment';

}
/** Remove Blank Lines from Merged Documents. Serialized as `w:doNotSuppressBlankLines` */
export class DoNotSuppressBlankLines extends OnOffType {

    public static override _Q = 'w:doNotSuppressBlankLines';

}
/** Query Contains Link to External Query File. Serialized as `w:linkToQuery` */
export class LinkToQuery extends OnOffType {

    public static override _Q = 'w:linkToQuery';

}
/** First Row of Data Source Contains Column Names. Serialized as `w:fHdr` */
export class FirstRowHeader extends OnOffType {

    public static override _Q = 'w:fHdr';

}
/** Use Country/Region-Based Address Field Ordering. Serialized as `w:dynamicAddress` */
export class DynamicAddress extends OnOffType {

    public static override _Q = 'w:dynamicAddress';

}
/** Record Is Included in Mail Merge. Serialized as `w:active` */
export class Active extends OnOffType {

    public static override _Q = 'w:active';

}
/** Built-In Document Part. Serialized as `w:docPartUnique` */
export class DocPartUnique extends OnOffType {

    public static override _Q = 'w:docPartUnique';

}
/** Invalidated Field Cache. Serialized as `w:dirty` */
export class Dirty extends OnOffType {

    public static override _Q = 'w:dirty';

}
/** Keep Source Formatting on Import. Serialized as `w:matchSrc` */
export class MatchSource extends OnOffType {

    public static override _Q = 'w:matchSrc';

}
/** Checkbox Form Field State. Serialized as `w:checked` */
export class Checked extends OnOffType {

    public static override _Q = 'w:checked';

}
/** Default Checkbox Form Field State. Serialized as `w:default` */
export class DefaultCheckBoxFormFieldState extends OnOffType {

    public static override _Q = 'w:default';

}
/** Automatically Size Form Field. Serialized as `w:sizeAuto` */
export class AutomaticallySizeFormField extends OnOffType {

    public static override _Q = 'w:sizeAuto';

}
/** Recalculate Fields When Current Field Is Modified. Serialized as `w:calcOnExit` */
export class CalculateOnExit extends OnOffType {

    public static override _Q = 'w:calcOnExit';

}
/** Form Field Enabled. Serialized as `w:enabled` */
export class Enabled extends OnOffType {

    public static override _Q = 'w:enabled';

}
/** Defines the GutterOnRight Class. Serialized as `w:rtlGutter` */
export class GutterOnRight extends OnOffType {

    public static override _Q = 'w:rtlGutter';

}
/** Defines the TitlePage Class. Serialized as `w:titlePg` */
export class TitlePage extends OnOffType {

    public static override _Q = 'w:titlePg';

}
/** Defines the NoEndnote Class. Serialized as `w:noEndnote` */
export class NoEndnote extends OnOffType {

    public static override _Q = 'w:noEndnote';

}
/** Defines the FormProtection Class. Serialized as `w:formProt` */
export class FormProtection extends OnOffType {

    public static override _Q = 'w:formProt';

}
/** Defines the Hidden Class. Serialized as `w:hidden` */
export class Hidden extends OnOffType {

    public static override _Q = 'w:hidden';

}
/** Defines the OfficeMath Class. Serialized as `w:oMath` */
export class OfficeMath extends OnOffType {

    public static override _Q = 'w:oMath';

}
/** Defines the SpecVanish Class. Serialized as `w:specVanish` */
export class SpecVanish extends OnOffType {

    public static override _Q = 'w:specVanish';

}
/** Defines the ComplexScript Class. Serialized as `w:cs` */
export class ComplexScript extends OnOffType {

    public static override _Q = 'w:cs';

}
/** Defines the RightToLeftText Class. Serialized as `w:rtl` */
export class RightToLeftText extends OnOffType {

    public static override _Q = 'w:rtl';

}
/** Defines the WebHidden Class. Serialized as `w:webHidden` */
export class WebHidden extends OnOffType {

    public static override _Q = 'w:webHidden';

}
/** Defines the Vanish Class. Serialized as `w:vanish` */
export class Vanish extends OnOffType {

    public static override _Q = 'w:vanish';

}
/** Defines the NoProof Class. Serialized as `w:noProof` */
export class NoProof extends OnOffType {

    public static override _Q = 'w:noProof';

}
/** Defines the Imprint Class. Serialized as `w:imprint` */
export class Imprint extends OnOffType {

    public static override _Q = 'w:imprint';

}
/** Defines the Emboss Class. Serialized as `w:emboss` */
export class Emboss extends OnOffType {

    public static override _Q = 'w:emboss';

}
/** Defines the Shadow Class. Serialized as `w:shadow` */
export class Shadow extends OnOffType {

    public static override _Q = 'w:shadow';

}
/** Defines the Outline Class. Serialized as `w:outline` */
export class Outline extends OnOffType {

    public static override _Q = 'w:outline';

}
/** Defines the DoubleStrike Class. Serialized as `w:dstrike` */
export class DoubleStrike extends OnOffType {

    public static override _Q = 'w:dstrike';

}
/** Defines the Strike Class. Serialized as `w:strike` */
export class Strike extends OnOffType {

    public static override _Q = 'w:strike';

}
/** Defines the SmallCaps Class. Serialized as `w:smallCaps` */
export class SmallCaps extends OnOffType {

    public static override _Q = 'w:smallCaps';

}
/** Defines the Caps Class. Serialized as `w:caps` */
export class Caps extends OnOffType {

    public static override _Q = 'w:caps';

}
/** Defines the ItalicComplexScript Class. Serialized as `w:iCs` */
export class ItalicComplexScript extends OnOffType {

    public static override _Q = 'w:iCs';

}
/** Defines the Italic Class. Serialized as `w:i` */
export class Italic extends OnOffType {

    public static override _Q = 'w:i';

}
/** Defines the BoldComplexScript Class. Serialized as `w:bCs` */
export class BoldComplexScript extends OnOffType {

    public static override _Q = 'w:bCs';

}
/** Defines the Bold Class. Serialized as `w:b` */
export class Bold extends OnOffType {

    public static override _Q = 'w:b';

}
/** Defines the SuppressOverlap Class. Serialized as `w:suppressOverlap` */
export class SuppressOverlap extends OnOffType {

    public static override _Q = 'w:suppressOverlap';

}
/** Defines the MirrorIndents Class. Serialized as `w:mirrorIndents` */
export class MirrorIndents extends OnOffType {

    public static override _Q = 'w:mirrorIndents';

}
/** Defines the ContextualSpacing Class. Serialized as `w:contextualSpacing` */
export class ContextualSpacing extends OnOffType {

    public static override _Q = 'w:contextualSpacing';

}
/** Defines the SnapToGrid Class. Serialized as `w:snapToGrid` */
export class SnapToGrid extends OnOffType {

    public static override _Q = 'w:snapToGrid';

}
/** Defines the AdjustRightIndent Class. Serialized as `w:adjustRightInd` */
export class AdjustRightIndent extends OnOffType {

    public static override _Q = 'w:adjustRightInd';

}
/** Defines the BiDi Class. Serialized as `w:bidi` */
export class BiDi extends OnOffType {

    public static override _Q = 'w:bidi';

}
/** Defines the AutoSpaceDN Class. Serialized as `w:autoSpaceDN` */
export class AutoSpaceDN extends OnOffType {

    public static override _Q = 'w:autoSpaceDN';

}
/** Defines the AutoSpaceDE Class. Serialized as `w:autoSpaceDE` */
export class AutoSpaceDE extends OnOffType {

    public static override _Q = 'w:autoSpaceDE';

}
/** Defines the TopLinePunctuation Class. Serialized as `w:topLinePunct` */
export class TopLinePunctuation extends OnOffType {

    public static override _Q = 'w:topLinePunct';

}
/** Defines the OverflowPunctuation Class. Serialized as `w:overflowPunct` */
export class OverflowPunctuation extends OnOffType {

    public static override _Q = 'w:overflowPunct';

}
/** Defines the WordWrap Class. Serialized as `w:wordWrap` */
export class WordWrap extends OnOffType {

    public static override _Q = 'w:wordWrap';

}
/** Defines the Kinsoku Class. Serialized as `w:kinsoku` */
export class Kinsoku extends OnOffType {

    public static override _Q = 'w:kinsoku';

}
/** Defines the SuppressAutoHyphens Class. Serialized as `w:suppressAutoHyphens` */
export class SuppressAutoHyphens extends OnOffType {

    public static override _Q = 'w:suppressAutoHyphens';

}
/** Defines the SuppressLineNumbers Class. Serialized as `w:suppressLineNumbers` */
export class SuppressLineNumbers extends OnOffType {

    public static override _Q = 'w:suppressLineNumbers';

}
/** Defines the WidowControl Class. Serialized as `w:widowControl` */
export class WidowControl extends OnOffType {

    public static override _Q = 'w:widowControl';

}
/** Defines the PageBreakBefore Class. Serialized as `w:pageBreakBefore` */
export class PageBreakBefore extends OnOffType {

    public static override _Q = 'w:pageBreakBefore';

}
/** Defines the KeepLines Class. Serialized as `w:keepLines` */
export class KeepLines extends OnOffType {

    public static override _Q = 'w:keepLines';

}
/** Defines the KeepNext Class. Serialized as `w:keepNext` */
export class KeepNext extends OnOffType {

    public static override _Q = 'w:keepNext';

}
/** Defines the StringType Class. */
export abstract class StringType extends OxmlLeafElement {

    public static override _A = ['w:val',];
    /** String Value. Serialized as `w:val` */
    public get val(): StringValue | undefined { return this._g('w:val'); }
    public set val(v: StringValue | undefined) { this._s('w:val', v); }

}
/** Defines the AltName Class. Serialized as `w:altName` */
export class AltName extends StringType {

    public static override _Q = 'w:altName';

}
/** Defines the WebPageEncoding Class. Serialized as `w:encoding` */
export class WebPageEncoding extends StringType {

    public static override _Q = 'w:encoding';

}
/** List Separator for Field Code Evaluation. Serialized as `w:listSeparator` */
export class ListSeparator extends StringType {

    public static override _Q = 'w:listSeparator';

}
/** Radix Point for Field Code Evaluation. Serialized as `w:decimalSymbol` */
export class DecimalSymbol extends StringType {

    public static override _Q = 'w:decimalSymbol';

}
/** Attached Custom XML Schema. Serialized as `w:attachedSchema` */
export class AttachedSchema extends StringType {

    public static override _Q = 'w:attachedSchema';

}
/** Defines the Tag Class. Serialized as `w:tag` */
export class Tag extends StringType {

    public static override _Q = 'w:tag';

}
/** Defines the SdtAlias Class. Serialized as `w:alias` */
export class SdtAlias extends StringType {

    public static override _Q = 'w:alias';

}
/** Description for Entry. Serialized as `w:description` */
export class Description extends StringType {

    public static override _Q = 'w:description';

}
/** Associated Paragraph Style Name. Serialized as `w:style` */
export class StyleId extends StringType {

    public static override _Q = 'w:style';

}
/** Frame Size. Serialized as `w:sz` */
export class FrameSize extends StringType {

    public static override _Q = 'w:sz';

}
/** Merged E-mail or Fax Subject Line. Serialized as `w:mailSubject` */
export class MailSubject extends StringType {

    public static override _Q = 'w:mailSubject';

}
/** Column Containing E-mail Address. Serialized as `w:addressFieldName` */
export class AddressFieldName extends StringType {

    public static override _Q = 'w:addressFieldName';

}
/** Query For Data Source Records To Merge. Serialized as `w:query` */
export class Query extends StringType {

    public static override _Q = 'w:query';

}
/** Data Source Connection String. Serialized as `w:connectString` */
export class ConnectString extends StringType {

    public static override _Q = 'w:connectString';

}
/** Data Source Table Name. Serialized as `w:table` */
export class DataSourceTableName extends StringType {

    public static override _Q = 'w:table';

}
/** UDL Connection String. Serialized as `w:udl` */
export class UdlConnectionString extends StringType {

    public static override _Q = 'w:udl';

}
/** Predefined Merge Field Name. Serialized as `w:mappedName` */
export class MappedName extends StringType {

    public static override _Q = 'w:mappedName';

}
/** Data Source Name for Column. Serialized as `w:name` */
export class Name extends StringType {

    public static override _Q = 'w:name';

}
/** Defines the TableDescription Class. Serialized as `w:tblDescription` */
export class TableDescription extends StringType {

    public static override _Q = 'w:tblDescription';

}
/** Defines the TableCaption Class. Serialized as `w:tblCaption` */
export class TableCaption extends StringType {

    public static override _Q = 'w:tblCaption';

}
/** Custom XML Element Placeholder Text. Serialized as `w:placeholder` */
export class CustomXmlPlaceholder extends StringType {

    public static override _Q = 'w:placeholder';

}
/** Document Part Reference. Serialized as `w:docPart` */
export class DocPartReference extends StringType {

    public static override _Q = 'w:docPart';

}
/** Document Part Category Filter. Serialized as `w:docPartCategory` */
export class DocPartCategory extends StringType {

    public static override _Q = 'w:docPartCategory';

}
/** Document Part Gallery Filter. Serialized as `w:docPartGallery` */
export class DocPartGallery extends StringType {

    public static override _Q = 'w:docPartGallery';

}
/** Date Display Mask. Serialized as `w:dateFormat` */
export class DateFormat extends StringType {

    public static override _Q = 'w:dateFormat';

}
/** Defines the ParagraphStyleId Class. Serialized as `w:pStyle` */
export class ParagraphStyleId extends StringType {

    public static override _Q = 'w:pStyle';

}
/** Defines the MarkupType Class. */
export abstract class MarkupType extends OxmlLeafElement {

    public static override _A = ['w:id',];
    /** Annotation Identifier. Serialized as `w:id` */
    public get id(): StringValue | undefined { return this._g('w:id'); }
    public set id(v: StringValue | undefined) { this._s('w:id', v); }

}
/** Comment Content Reference Mark. Serialized as `w:commentReference` */
export class CommentReference extends MarkupType {

    public static override _Q = 'w:commentReference';

}
/** Defines the CustomXmlMoveToRangeEnd Class. Serialized as `w:customXmlMoveToRangeEnd` */
export class CustomXmlMoveToRangeEnd extends MarkupType {

    public static override _Q = 'w:customXmlMoveToRangeEnd';

}
/** Defines the CustomXmlMoveFromRangeEnd Class. Serialized as `w:customXmlMoveFromRangeEnd` */
export class CustomXmlMoveFromRangeEnd extends MarkupType {

    public static override _Q = 'w:customXmlMoveFromRangeEnd';

}
/** Defines the CustomXmlDelRangeEnd Class. Serialized as `w:customXmlDelRangeEnd` */
export class CustomXmlDelRangeEnd extends MarkupType {

    public static override _Q = 'w:customXmlDelRangeEnd';

}
/** Defines the CustomXmlInsRangeEnd Class. Serialized as `w:customXmlInsRangeEnd` */
export class CustomXmlInsRangeEnd extends MarkupType {

    public static override _Q = 'w:customXmlInsRangeEnd';

}
/** Defines the MoveBookmarkType Class. */
export abstract class MoveBookmarkType extends OxmlLeafElement {

    public static override _A = ['w:author','w:date','w:name','w:colFirst','w:colLast','w:displacedByCustomXml','w:id',];
    /** author. Serialized as `w:author` */
    public get author(): StringValue | undefined { return this._g('w:author'); }
    public set author(v: StringValue | undefined) { this._s('w:author', v); }
    /** date. Serialized as `w:date` */
    public get date(): DateTimeValue | undefined { return this._g('w:date'); }
    public set date(v: DateTimeValue | undefined) { this._s('w:date', v); }
    /** name. Serialized as `w:name` */
    public get name(): StringValue | undefined { return this._g('w:name'); }
    public set name(v: StringValue | undefined) { this._s('w:name', v); }
    /** colFirst. Serialized as `w:colFirst` */
    public get columnFirst(): Int32Value | undefined { return this._g('w:colFirst'); }
    public set columnFirst(v: Int32Value | undefined) { this._s('w:colFirst', v); }
    /** colLast. Serialized as `w:colLast` */
    public get columnLast(): Int32Value | undefined { return this._g('w:colLast'); }
    public set columnLast(v: Int32Value | undefined) { this._s('w:colLast', v); }
    /** displacedByCustomXml. Serialized as `w:displacedByCustomXml` */
    public get displacedByCustomXml(): DisplacedByCustomXmlValues | undefined { return this._g('w:displacedByCustomXml'); }
    public set displacedByCustomXml(v: DisplacedByCustomXmlValues | undefined) { this._s('w:displacedByCustomXml', v); }
    /** Annotation Identifier. Serialized as `w:id` */
    public get id(): StringValue | undefined { return this._g('w:id'); }
    public set id(v: StringValue | undefined) { this._s('w:id', v); }

}
/** Defines the MoveToRangeStart Class. Serialized as `w:moveToRangeStart` */
export class MoveToRangeStart extends MoveBookmarkType {

    public static override _Q = 'w:moveToRangeStart';

}
/** Defines the MoveFromRangeStart Class. Serialized as `w:moveFromRangeStart` */
export class MoveFromRangeStart extends MoveBookmarkType {

    public static override _Q = 'w:moveFromRangeStart';

}
/** Defines the MarkupRangeType Class. */
export abstract class MarkupRangeType extends OxmlLeafElement {

    public static override _A = ['w:displacedByCustomXml','w:id',];
    /** displacedByCustomXml. Serialized as `w:displacedByCustomXml` */
    public get displacedByCustomXml(): DisplacedByCustomXmlValues | undefined { return this._g('w:displacedByCustomXml'); }
    public set displacedByCustomXml(v: DisplacedByCustomXmlValues | undefined) { this._s('w:displacedByCustomXml', v); }
    /** Annotation Identifier. Serialized as `w:id` */
    public get id(): StringValue | undefined { return this._g('w:id'); }
    public set id(v: StringValue | undefined) { this._s('w:id', v); }

}
/** Defines the MoveToRangeEnd Class. Serialized as `w:moveToRangeEnd` */
export class MoveToRangeEnd extends MarkupRangeType {

    public static override _Q = 'w:moveToRangeEnd';

}
/** Defines the MoveFromRangeEnd Class. Serialized as `w:moveFromRangeEnd` */
export class MoveFromRangeEnd extends MarkupRangeType {

    public static override _Q = 'w:moveFromRangeEnd';

}
/** Defines the CommentRangeEnd Class. Serialized as `w:commentRangeEnd` */
export class CommentRangeEnd extends MarkupRangeType {

    public static override _Q = 'w:commentRangeEnd';

}
/** Defines the CommentRangeStart Class. Serialized as `w:commentRangeStart` */
export class CommentRangeStart extends MarkupRangeType {

    public static override _Q = 'w:commentRangeStart';

}
/** Defines the BookmarkEnd Class. Serialized as `w:bookmarkEnd` */
export class BookmarkEnd extends MarkupRangeType {

    public static override _Q = 'w:bookmarkEnd';

}
/** Defines the BookmarkStart Class. Serialized as `w:bookmarkStart` */
export class BookmarkStart extends OxmlLeafElement {

    public static override _Q = 'w:bookmarkStart';
    public static override _A = ['w:name','w:colFirst','w:colLast','w:displacedByCustomXml','w:id',];
    /** name. Serialized as `w:name` */
    public get name(): StringValue | undefined { return this._g('w:name'); }
    public set name(v: StringValue | undefined) { this._s('w:name', v); }
    /** colFirst. Serialized as `w:colFirst` */
    public get columnFirst(): Int32Value | undefined { return this._g('w:colFirst'); }
    public set columnFirst(v: Int32Value | undefined) { this._s('w:colFirst', v); }
    /** colLast. Serialized as `w:colLast` */
    public get columnLast(): Int32Value | undefined { return this._g('w:colLast'); }
    public set columnLast(v: Int32Value | undefined) { this._s('w:colLast', v); }
    /** displacedByCustomXml. Serialized as `w:displacedByCustomXml` */
    public get displacedByCustomXml(): DisplacedByCustomXmlValues | undefined { return this._g('w:displacedByCustomXml'); }
    public set displacedByCustomXml(v: DisplacedByCustomXmlValues | undefined) { this._s('w:displacedByCustomXml', v); }
    /** Annotation Identifier. Serialized as `w:id` */
    public get id(): StringValue | undefined { return this._g('w:id'); }
    public set id(v: StringValue | undefined) { this._s('w:id', v); }

}
/** Vertically Merged/Split Table Cells. Serialized as `w:cellMerge` */
export class CellMerge extends OxmlLeafElement {

    public static override _Q = 'w:cellMerge';
    public static override _A = ['w:vMerge','w:vMergeOrig','w:author','w:date','w16du:dateUtc','w:id',];
    /** vMerge. Serialized as `w:vMerge` */
    public get verticalMerge(): VerticalMergeRevisionValues | undefined { return this._g('w:vMerge'); }
    public set verticalMerge(v: VerticalMergeRevisionValues | undefined) { this._s('w:vMerge', v); }
    /** vMergeOrig. Serialized as `w:vMergeOrig` */
    public get verticalMergeOriginal(): VerticalMergeRevisionValues | undefined { return this._g('w:vMergeOrig'); }
    public set verticalMergeOriginal(v: VerticalMergeRevisionValues | undefined) { this._s('w:vMergeOrig', v); }
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
/** Move Destination Paragraph. Serialized as `w:moveTo` */
export class MoveTo extends TrackChangeType {

    public static override _Q = 'w:moveTo';

}
/** Move Source Paragraph. Serialized as `w:moveFrom` */
export class MoveFrom extends TrackChangeType {

    public static override _Q = 'w:moveFrom';

}
/** Deleted Paragraph. Serialized as `w:del` */
export class Deleted extends TrackChangeType {

    public static override _Q = 'w:del';

}
/** Inserted Paragraph. Serialized as `w:ins` */
export class Inserted extends TrackChangeType {

    public static override _Q = 'w:ins';

}
/** Defines the CustomXmlMoveToRangeStart Class. Serialized as `w:customXmlMoveToRangeStart` */
export class CustomXmlMoveToRangeStart extends TrackChangeType {

    public static override _Q = 'w:customXmlMoveToRangeStart';

}
/** Defines the CustomXmlMoveFromRangeStart Class. Serialized as `w:customXmlMoveFromRangeStart` */
export class CustomXmlMoveFromRangeStart extends TrackChangeType {

    public static override _Q = 'w:customXmlMoveFromRangeStart';

}
/** Defines the CustomXmlDelRangeStart Class. Serialized as `w:customXmlDelRangeStart` */
export class CustomXmlDelRangeStart extends TrackChangeType {

    public static override _Q = 'w:customXmlDelRangeStart';

}
/** Defines the CustomXmlInsRangeStart Class. Serialized as `w:customXmlInsRangeStart` */
export class CustomXmlInsRangeStart extends TrackChangeType {

    public static override _Q = 'w:customXmlInsRangeStart';

}
/** Table Cell Deletion. Serialized as `w:cellDel` */
export class CellDeletion extends TrackChangeType {

    public static override _Q = 'w:cellDel';

}
/** Table Cell Insertion. Serialized as `w:cellIns` */
export class CellInsertion extends TrackChangeType {

    public static override _Q = 'w:cellIns';

}

export function initWordprocessingNamespace() {
    LevelOverride._C = {
        'w:startOverride': StartOverrideNumberingValue,
        'w:lvl': Level,
    };
    LevelOverride._D = {
        'w:ilvl': new OxmlAttr('w:ilvl', OxmlType.Int32Value),
    };
    FontRelationshipType._D = {
        'w:fontKey': new OxmlAttr('w:fontKey', OxmlType.StringValue),
        'w:subsetted': new OxmlAttr('w:subsetted', OxmlType.OnOffValue),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    FontSignature._D = {
        'w:usb0': new OxmlAttr('w:usb0', OxmlType.HexBinaryValue),
        'w:usb1': new OxmlAttr('w:usb1', OxmlType.HexBinaryValue),
        'w:usb2': new OxmlAttr('w:usb2', OxmlType.HexBinaryValue),
        'w:usb3': new OxmlAttr('w:usb3', OxmlType.HexBinaryValue),
        'w:csb0': new OxmlAttr('w:csb0', OxmlType.HexBinaryValue),
        'w:csb1': new OxmlAttr('w:csb1', OxmlType.HexBinaryValue),
    };
    Pitch._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, FontPitchValuesArray),
    };
    FontFamily._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, FontFamilyValuesArray),
    };
    FontCharSet._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
        'w:characterSet': new OxmlAttr('w:characterSet', OxmlType.EnumValue, StrictCharacterSetArray),
    };
    Panose1Number._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.HexBinaryValue),
    };
    PictureBulletBase._C = {
        'v:group': VGroup,
        'v:image': VImageFile,
        'v:line': VLine,
        'v:oval': VOval,
        'v:polyline': VPolyLine,
        'v:rect': VRectangle,
        'v:roundrect': VRoundRectangle,
        'v:shape': VShape,
        'v:shapetype': VShapetype,
    };
    TargetScreenSize._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, TargetScreenSizeValuesArray),
    };
    ReadModeInkLockDown._D = {
        'w:actualPg': new OxmlAttr('w:actualPg', OxmlType.OnOffValue),
        'w:w': new OxmlAttr('w:w', OxmlType.UInt32Value),
        'w:h': new OxmlAttr('w:h', OxmlType.UInt32Value),
        'w:fontSz': new OxmlAttr('w:fontSz', OxmlType.StringValue),
    };
    Captions._C = {
        'w:caption': Caption,
        'w:autoCaptions': AutoCaptions,
    };
    ColorSchemeMapping._D = {
        'w:bg1': new OxmlAttr('w:bg1', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        'w:t1': new OxmlAttr('w:t1', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        'w:bg2': new OxmlAttr('w:bg2', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        'w:t2': new OxmlAttr('w:t2', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        'w:accent1': new OxmlAttr('w:accent1', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        'w:accent2': new OxmlAttr('w:accent2', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        'w:accent3': new OxmlAttr('w:accent3', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        'w:accent4': new OxmlAttr('w:accent4', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        'w:accent5': new OxmlAttr('w:accent5', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        'w:accent6': new OxmlAttr('w:accent6', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        'w:hyperlink': new OxmlAttr('w:hyperlink', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
        'w:followedHyperlink': new OxmlAttr('w:followedHyperlink', OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    };
    Rsids._C = {
        'w:rsidRoot': RsidRoot,
        'w:rsid': Rsid,
    };
    DocumentVariables._C = {
        'w:docVar': DocumentVariable,
    };
    Compatibility._C = {
        'w:useSingleBorderforContiguousCells': UseSingleBorderForContiguousCells,
        'w:wpJustification': WordPerfectJustification,
        'w:noTabHangInd': NoTabHangIndent,
        'w:noLeading': NoLeading,
        'w:spaceForUL': SpaceForUnderline,
        'w:noColumnBalance': NoColumnBalance,
        'w:balanceSingleByteDoubleByteWidth': BalanceSingleByteDoubleByteWidth,
        'w:noExtraLineSpacing': NoExtraLineSpacing,
        'w:doNotLeaveBackslashAlone': DoNotLeaveBackslashAlone,
        'w:ulTrailSpace': UnderlineTrailingSpaces,
        'w:doNotExpandShiftReturn': DoNotExpandShiftReturn,
        'w:spacingInWholePoints': SpacingInWholePoints,
        'w:lineWrapLikeWord6': LineWrapLikeWord6,
        'w:printBodyTextBeforeHeader': PrintBodyTextBeforeHeader,
        'w:printColBlack': PrintColorBlackWhite,
        'w:wpSpaceWidth': WordPerfectSpaceWidth,
        'w:showBreaksInFrames': ShowBreaksInFrames,
        'w:subFontBySize': SubFontBySize,
        'w:suppressBottomSpacing': SuppressBottomSpacing,
        'w:suppressTopSpacing': SuppressTopSpacing,
        'w:suppressSpacingAtTopOfPage': SuppressSpacingAtTopOfPage,
        'w:suppressTopSpacingWP': SuppressTopSpacingWordPerfect,
        'w:suppressSpBfAfterPgBrk': SuppressSpacingBeforeAfterPageBreak,
        'w:swapBordersFacingPages': SwapBordersFacingPages,
        'w:convMailMergeEsc': ConvertMailMergeEscape,
        'w:truncateFontHeightsLikeWP6': TruncateFontHeightsLikeWordPerfect,
        'w:mwSmallCaps': MacWordSmallCaps,
        'w:usePrinterMetrics': UsePrinterMetrics,
        'w:doNotSuppressParagraphBorders': DoNotSuppressParagraphBorders,
        'w:wrapTrailSpaces': WrapTrailSpaces,
        'w:footnoteLayoutLikeWW8': FootnoteLayoutLikeWord8,
        'w:shapeLayoutLikeWW8': ShapeLayoutLikeWord8,
        'w:alignTablesRowByRow': AlignTablesRowByRow,
        'w:forgetLastTabAlignment': ForgetLastTabAlignment,
        'w:adjustLineHeightInTable': AdjustLineHeightInTable,
        'w:autoSpaceLikeWord95': AutoSpaceLikeWord95,
        'w:noSpaceRaiseLower': NoSpaceRaiseLower,
        'w:doNotUseHTMLParagraphAutoSpacing': DoNotUseHTMLParagraphAutoSpacing,
        'w:layoutRawTableWidth': LayoutRawTableWidth,
        'w:layoutTableRowsApart': LayoutTableRowsApart,
        'w:useWord97LineBreakRules': UseWord97LineBreakRules,
        'w:doNotBreakWrappedTables': DoNotBreakWrappedTables,
        'w:doNotSnapToGridInCell': DoNotSnapToGridInCell,
        'w:selectFldWithFirstOrLastChar': SelectFieldWithFirstOrLastChar,
        'w:applyBreakingRules': ApplyBreakingRules,
        'w:doNotWrapTextWithPunct': DoNotWrapTextWithPunctuation,
        'w:doNotUseEastAsianBreakRules': DoNotUseEastAsianBreakRules,
        'w:useWord2002TableStyleRules': UseWord2002TableStyleRules,
        'w:growAutofit': GrowAutofit,
        'w:useFELayout': UseFarEastLayout,
        'w:useNormalStyleForList': UseNormalStyleForList,
        'w:doNotUseIndentAsNumberingTabStop': DoNotUseIndentAsNumberingTabStop,
        'w:useAltKinsokuLineBreakRules': UseAltKinsokuLineBreakRules,
        'w:allowSpaceOfSameStyleInTable': AllowSpaceOfSameStyleInTable,
        'w:doNotSuppressIndentation': DoNotSuppressIndentation,
        'w:doNotAutofitConstrainedTables': DoNotAutofitConstrainedTables,
        'w:autofitToFirstFixedWidthCell': AutofitToFirstFixedWidthCell,
        'w:underlineTabInNumList': UnderlineTabInNumberingList,
        'w:displayHangulFixedWidth': DisplayHangulFixedWidth,
        'w:splitPgBreakAndParaMark': SplitPageBreakAndParagraphMark,
        'w:doNotVertAlignCellWithSp': DoNotVerticallyAlignCellWithShape,
        'w:doNotBreakConstrainedForcedTable': DoNotBreakConstrainedForcedTable,
        'w:doNotVertAlignInTxbx': DoNotVerticallyAlignInTextBox,
        'w:useAnsiKerningPairs': UseAnsiKerningPairs,
        'w:cachedColBalance': CachedColumnBalance,
        'w:compatSetting': CompatibilitySetting,
    };
    EndnoteDocumentWideProperties._C = {
        'w:pos': EndnotePosition,
        'w:numFmt': NumberingFormat,
        'w:numStart': NumberingStart,
        'w:numRestart': NumberingRestart,
        'w:endnote': EndnoteSpecialReference,
    };
    FootnoteDocumentWideProperties._C = {
        'w:pos': FootnotePosition,
        'w:numFmt': NumberingFormat,
        'w:numStart': NumberingStart,
        'w:numRestart': NumberingRestart,
        'w:footnote': FootnoteSpecialReference,
    };
    ShapeDefaultsType._C = {
        'o:shapedefaults': OShapeDefaults,
        'o:shapelayout': OShapeLayout,
    };
    ShapeDefaults._C = {
        'o:shapedefaults': OShapeDefaults,
        'o:shapelayout': OShapeLayout,
    };
    HeaderShapeDefaults._C = {
        'o:shapedefaults': OShapeDefaults,
        'o:shapelayout': OShapeLayout,
    };
    SaveThroughXslt._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        'w:solutionID': new OxmlAttr('w:solutionID', OxmlType.StringValue),
    };
    NoLineBreaksBeforeKinsoku._D = {
        'w:lang': new OxmlAttr('w:lang', OxmlType.StringValue),
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    NoLineBreaksAfterKinsoku._D = {
        'w:lang': new OxmlAttr('w:lang', OxmlType.StringValue),
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    CharacterSpacingControl._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, CharacterSpacingValuesArray),
    };
    UnsignedInt7Type._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.Int32Value),
    };
    SummaryLength._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.Int32Value),
    };
    ConsecutiveHyphenLimit._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.UInt16Value),
    };
    NonNegativeShortType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.Int16Value),
    };
    DocumentProtection._D = {
        'w:edit': new OxmlAttr('w:edit', OxmlType.EnumValue, DocumentProtectionValuesArray),
        'w:formatting': new OxmlAttr('w:formatting', OxmlType.OnOffValue),
        'w:enforcement': new OxmlAttr('w:enforcement', OxmlType.OnOffValue),
        'w:cryptProviderType': new OxmlAttr('w:cryptProviderType', OxmlType.EnumValue, CryptProviderValuesArray),
        'w:cryptAlgorithmClass': new OxmlAttr('w:cryptAlgorithmClass', OxmlType.EnumValue, CryptAlgorithmClassValuesArray),
        'w:cryptAlgorithmType': new OxmlAttr('w:cryptAlgorithmType', OxmlType.EnumValue, CryptAlgorithmValuesArray),
        'w:cryptAlgorithmSid': new OxmlAttr('w:cryptAlgorithmSid', OxmlType.Int32Value),
        'w:cryptSpinCount': new OxmlAttr('w:cryptSpinCount', OxmlType.UInt32Value),
        'w:cryptProvider': new OxmlAttr('w:cryptProvider', OxmlType.StringValue),
        'w:algIdExt': new OxmlAttr('w:algIdExt', OxmlType.HexBinaryValue),
        'w:algIdExtSource': new OxmlAttr('w:algIdExtSource', OxmlType.StringValue),
        'w:cryptProviderTypeExt': new OxmlAttr('w:cryptProviderTypeExt', OxmlType.HexBinaryValue),
        'w:cryptProviderTypeExtSource': new OxmlAttr('w:cryptProviderTypeExtSource', OxmlType.StringValue),
        'w:hash': new OxmlAttr('w:hash', OxmlType.Base64BinaryValue),
        'w:salt': new OxmlAttr('w:salt', OxmlType.Base64BinaryValue),
        'w:algorithmName': new OxmlAttr('w:algorithmName', OxmlType.StringValue),
        'w:hashValue': new OxmlAttr('w:hashValue', OxmlType.Base64BinaryValue),
        'w:saltValue': new OxmlAttr('w:saltValue', OxmlType.Base64BinaryValue),
        'w:spinCount': new OxmlAttr('w:spinCount', OxmlType.Int32Value),
    };
    RevisionView._D = {
        'w:markup': new OxmlAttr('w:markup', OxmlType.OnOffValue),
        'w:comments': new OxmlAttr('w:comments', OxmlType.OnOffValue),
        'w:insDel': new OxmlAttr('w:insDel', OxmlType.OnOffValue),
        'w:formatting': new OxmlAttr('w:formatting', OxmlType.OnOffValue),
        'w:inkAnnotations': new OxmlAttr('w:inkAnnotations', OxmlType.OnOffValue),
    };
    MailMerge._C = {
        'w:mainDocumentType': MainDocumentType,
        'w:linkToQuery': LinkToQuery,
        'w:dataType': DataType,
        'w:connectString': ConnectString,
        'w:query': Query,
        'w:dataSource': DataSourceReference,
        'w:headerSource': HeaderSource,
        'w:doNotSuppressBlankLines': DoNotSuppressBlankLines,
        'w:destination': Destination,
        'w:addressFieldName': AddressFieldName,
        'w:mailSubject': MailSubject,
        'w:mailAsAttachment': MailAsAttachment,
        'w:viewMergedData': ViewMergedData,
        'w:activeRecord': ActiveRecord,
        'w:checkErrors': CheckErrors,
        'w:odso': DataSourceObject,
    };
    DocumentType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, DocumentTypeValuesArray),
    };
    StylePaneSortMethods._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    StylePaneFormatFilter._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.HexBinaryValue),
        'w:allStyles': new OxmlAttr('w:allStyles', OxmlType.OnOffValue),
        'w:customStyles': new OxmlAttr('w:customStyles', OxmlType.OnOffValue),
        'w:latentStyles': new OxmlAttr('w:latentStyles', OxmlType.OnOffValue),
        'w:stylesInUse': new OxmlAttr('w:stylesInUse', OxmlType.OnOffValue),
        'w:headingStyles': new OxmlAttr('w:headingStyles', OxmlType.OnOffValue),
        'w:numberingStyles': new OxmlAttr('w:numberingStyles', OxmlType.OnOffValue),
        'w:tableStyles': new OxmlAttr('w:tableStyles', OxmlType.OnOffValue),
        'w:directFormattingOnRuns': new OxmlAttr('w:directFormattingOnRuns', OxmlType.OnOffValue),
        'w:directFormattingOnParagraphs': new OxmlAttr('w:directFormattingOnParagraphs', OxmlType.OnOffValue),
        'w:directFormattingOnNumbering': new OxmlAttr('w:directFormattingOnNumbering', OxmlType.OnOffValue),
        'w:directFormattingOnTables': new OxmlAttr('w:directFormattingOnTables', OxmlType.OnOffValue),
        'w:clearFormatting': new OxmlAttr('w:clearFormatting', OxmlType.OnOffValue),
        'w:top3HeadingStyles': new OxmlAttr('w:top3HeadingStyles', OxmlType.OnOffValue),
        'w:visibleStyles': new OxmlAttr('w:visibleStyles', OxmlType.OnOffValue),
        'w:alternateStyleNames': new OxmlAttr('w:alternateStyleNames', OxmlType.OnOffValue),
    };
    ProofState._D = {
        'w:spelling': new OxmlAttr('w:spelling', OxmlType.EnumValue, ProofingStateValuesArray),
        'w:grammar': new OxmlAttr('w:grammar', OxmlType.EnumValue, ProofingStateValuesArray),
    };
    ActiveWritingStyle._D = {
        'w:lang': new OxmlAttr('w:lang', OxmlType.StringValue),
        'w:vendorID': new OxmlAttr('w:vendorID', OxmlType.UInt16Value),
        'w:dllVersion': new OxmlAttr('w:dllVersion', OxmlType.Int32Value),
        'w:nlCheck': new OxmlAttr('w:nlCheck', OxmlType.OnOffValue),
        'w:checkStyle': new OxmlAttr('w:checkStyle', OxmlType.OnOffValue),
        'w:appName': new OxmlAttr('w:appName', OxmlType.StringValue),
    };
    Zoom._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, PresetZoomValuesArray),
        'w:percent': new OxmlAttr('w:percent', OxmlType.StringValue),
    };
    View._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, ViewValuesArray),
    };
    WriteProtection._D = {
        'w:recommended': new OxmlAttr('w:recommended', OxmlType.OnOffValue),
        'w:cryptProviderType': new OxmlAttr('w:cryptProviderType', OxmlType.EnumValue, CryptProviderValuesArray),
        'w:cryptAlgorithmClass': new OxmlAttr('w:cryptAlgorithmClass', OxmlType.EnumValue, CryptAlgorithmClassValuesArray),
        'w:cryptAlgorithmType': new OxmlAttr('w:cryptAlgorithmType', OxmlType.EnumValue, CryptAlgorithmValuesArray),
        'w:cryptAlgorithmSid': new OxmlAttr('w:cryptAlgorithmSid', OxmlType.Int32Value),
        'w:cryptSpinCount': new OxmlAttr('w:cryptSpinCount', OxmlType.UInt32Value),
        'w:cryptProvider': new OxmlAttr('w:cryptProvider', OxmlType.StringValue),
        'w:algIdExt': new OxmlAttr('w:algIdExt', OxmlType.HexBinaryValue),
        'w:algIdExtSource': new OxmlAttr('w:algIdExtSource', OxmlType.StringValue),
        'w:cryptProviderTypeExt': new OxmlAttr('w:cryptProviderTypeExt', OxmlType.HexBinaryValue),
        'w:cryptProviderTypeExtSource': new OxmlAttr('w:cryptProviderTypeExtSource', OxmlType.StringValue),
        'w:hash': new OxmlAttr('w:hash', OxmlType.Base64BinaryValue),
        'w:salt': new OxmlAttr('w:salt', OxmlType.Base64BinaryValue),
        'w:algorithmName': new OxmlAttr('w:algorithmName', OxmlType.StringValue),
        'w:hashValue': new OxmlAttr('w:hashValue', OxmlType.Base64BinaryValue),
        'w:saltValue': new OxmlAttr('w:saltValue', OxmlType.Base64BinaryValue),
        'w:spinCount': new OxmlAttr('w:spinCount', OxmlType.Int32Value),
    };
    SdtContentText._D = {
        'w:multiLine': new OxmlAttr('w:multiLine', OxmlType.OnOffValue),
    };
    SdtContentDropDownList._C = {
        'w:listItem': ListItem,
    };
    SdtContentDropDownList._D = {
        'w:lastValue': new OxmlAttr('w:lastValue', OxmlType.StringValue),
    };
    SdtDocPartType._C = {
        'w:docPartGallery': DocPartGallery,
        'w:docPartCategory': DocPartCategory,
        'w:docPartUnique': DocPartUnique,
    };
    SdtContentDocPartList._C = {
        'w:docPartGallery': DocPartGallery,
        'w:docPartCategory': DocPartCategory,
        'w:docPartUnique': DocPartUnique,
    };
    SdtContentDocPartObject._C = {
        'w:docPartGallery': DocPartGallery,
        'w:docPartCategory': DocPartCategory,
        'w:docPartUnique': DocPartUnique,
    };
    SdtContentDate._C = {
        'w:dateFormat': DateFormat,
        'w:lid': LanguageId,
        'w:storeMappedDataAs': SdtDateMappingType,
        'w:calendar': Calendar,
    };
    SdtContentDate._D = {
        'w:fullDate': new OxmlAttr('w:fullDate', OxmlType.DateTimeValue),
    };
    SdtContentComboBox._C = {
        'w:listItem': ListItem,
    };
    SdtContentComboBox._D = {
        'w:lastValue': new OxmlAttr('w:lastValue', OxmlType.StringValue),
    };
    DataBinding._D = {
        'w:prefixMappings': new OxmlAttr('w:prefixMappings', OxmlType.StringValue),
        'w:xpath': new OxmlAttr('w:xpath', OxmlType.StringValue),
        'w:storeItemID': new OxmlAttr('w:storeItemID', OxmlType.StringValue),
    };
    SdtPlaceholder._C = {
        'w:docPart': DocPartReference,
    };
    Lock._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, LockingValuesArray),
    };
    ObjectLink._D = {
        'w:updateMode': new OxmlAttr('w:updateMode', OxmlType.EnumValue, ObjectUpdateModeArray),
        'w:lockedField': new OxmlAttr('w:lockedField', OxmlType.OnOffValue),
        'w:drawAspect': new OxmlAttr('w:drawAspect', OxmlType.EnumValue, ObjectDrawAspectArray),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        'w:progId': new OxmlAttr('w:progId', OxmlType.StringValue),
        'w:shapeId': new OxmlAttr('w:shapeId', OxmlType.StringValue),
        'w:fieldCodes': new OxmlAttr('w:fieldCodes', OxmlType.StringValue),
    };
    ObjectEmbed._D = {
        'w:drawAspect': new OxmlAttr('w:drawAspect', OxmlType.EnumValue, ObjectDrawAspectArray),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        'w:progId': new OxmlAttr('w:progId', OxmlType.StringValue),
        'w:shapeId': new OxmlAttr('w:shapeId', OxmlType.StringValue),
        'w:fieldCodes': new OxmlAttr('w:fieldCodes', OxmlType.StringValue),
    };
    PreviousTableGrid._C = {
        'w:gridCol': GridColumn,
    };
    Control._D = {
        'w:name': new OxmlAttr('w:name', OxmlType.StringValue),
        'w:shapeid': new OxmlAttr('w:shapeid', OxmlType.StringValue),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    ParagraphProperties._C = {
        'w:pStyle': ParagraphStyleId,
        'w:keepNext': KeepNext,
        'w:keepLines': KeepLines,
        'w:pageBreakBefore': PageBreakBefore,
        'w:framePr': FrameProperties,
        'w:widowControl': WidowControl,
        'w:numPr': NumberingProperties,
        'w:suppressLineNumbers': SuppressLineNumbers,
        'w:pBdr': ParagraphBorders,
        'w:shd': Shading,
        'w:tabs': Tabs,
        'w:suppressAutoHyphens': SuppressAutoHyphens,
        'w:kinsoku': Kinsoku,
        'w:wordWrap': WordWrap,
        'w:overflowPunct': OverflowPunctuation,
        'w:topLinePunct': TopLinePunctuation,
        'w:autoSpaceDE': AutoSpaceDE,
        'w:autoSpaceDN': AutoSpaceDN,
        'w:bidi': BiDi,
        'w:adjustRightInd': AdjustRightIndent,
        'w:snapToGrid': SnapToGrid,
        'w:spacing': SpacingBetweenLines,
        'w:ind': Indentation,
        'w:contextualSpacing': ContextualSpacing,
        'w:mirrorIndents': MirrorIndents,
        'w:suppressOverlap': SuppressOverlap,
        'w:jc': Justification,
        'w:textDirection': TextDirection,
        'w:textAlignment': TextAlignment,
        'w:textboxTightWrap': TextBoxTightWrap,
        'w:outlineLvl': OutlineLevel,
        'w:divId': DivId,
        'w:cnfStyle': ConditionalFormatStyle,
        'w:rPr': ParagraphMarkRunProperties,
        'w:sectPr': SectionProperties,
        'w:pPrChange': ParagraphPropertiesChange,
    };
    TableRowPropertiesChange._C = {
        'w:trPr': PreviousTableRowProperties,
    };
    TableRowPropertiesChange._D = {
        'w:author': new OxmlAttr('w:author', OxmlType.StringValue),
        'w:date': new OxmlAttr('w:date', OxmlType.DateTimeValue),
        'w16du:dateUtc': new OxmlAttr('w16du:dateUtc', OxmlType.DateTimeValue),
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    TableRowProperties._C = {
        'w:cnfStyle': ConditionalFormatStyle,
        'w:divId': DivId,
        'w:gridBefore': GridBefore,
        'w:gridAfter': GridAfter,
        'w:wBefore': WidthBeforeTableRow,
        'w:wAfter': WidthAfterTableRow,
        'w:trHeight': TableRowHeight,
        'w:hidden': Hidden,
        'w:cantSplit': CantSplit,
        'w:tblHeader': TableHeader,
        'w:tblCellSpacing': TableCellSpacing,
        'w:jc': TableJustification,
        'w:ins': Inserted,
        'w:del': Deleted,
        'w:trPrChange': TableRowPropertiesChange,
        'w14:conflictIns': W14ConflictInsertion,
        'w14:conflictDel': W14ConflictDeletion,
    };
    TablePropertyExceptions._C = {
        'w:tblW': TableWidth,
        'w:jc': TableJustification,
        'w:tblCellSpacing': TableCellSpacing,
        'w:tblInd': TableIndentation,
        'w:tblBorders': TableBorders,
        'w:shd': Shading,
        'w:tblLayout': TableLayout,
        'w:tblCellMar': TableCellMarginDefault,
        'w:tblLook': TableLook,
        'w:tblPrExChange': TablePropertyExceptionsChange,
    };
    TableWidthDxaNilType._D = {
        'w:w': new OxmlAttr('w:w', OxmlType.Int16Value),
        'w:type': new OxmlAttr('w:type', OxmlType.EnumValue, TableWidthValuesArray),
    };
    CompatibilitySetting._D = {
        'w:name': new OxmlAttr('w:name', OxmlType.EnumValue, CompatSettingNameValuesArray),
        'w:uri': new OxmlAttr('w:uri', OxmlType.StringValue),
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    DocPart._C = {
        'w:docPartPr': DocPartProperties,
        'w:docPartBody': DocPartBody,
    };
    BodyType._C = {
        'w:altChunk': AltChunk,
        'w:customXml': CustomXmlBlock,
        'w:sdt': SdtBlock,
        'w:p': Paragraph,
        'w:tbl': Table,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
        'w:sectPr': SectionProperties,
    };
    Body._C = {
        'w:altChunk': AltChunk,
        'w:customXml': CustomXmlBlock,
        'w:sdt': SdtBlock,
        'w:p': Paragraph,
        'w:tbl': Table,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
        'w:sectPr': SectionProperties,
    };
    DocPartBody._C = {
        'w:altChunk': AltChunk,
        'w:customXml': CustomXmlBlock,
        'w:sdt': SdtBlock,
        'w:p': Paragraph,
        'w:tbl': Table,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
        'w:sectPr': SectionProperties,
    };
    DocPartProperties._C = {
        'w:name': DocPartName,
        'w:style': StyleId,
        'w:category': Category,
        'w:types': DocPartTypes,
        'w:behaviors': Behaviors,
        'w:description': Description,
        'w:guid': DocPartId,
    };
    DocPartId._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    Behaviors._C = {
        'w:behavior': Behavior,
    };
    DocPartTypes._C = {
        'w:type': DocPartType,
    };
    DocPartTypes._D = {
        'w:all': new OxmlAttr('w:all', OxmlType.OnOffValue),
    };
    Category._C = {
        'w:name': Name,
        'w:gallery': Gallery,
    };
    DocPartName._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
        'w:decorated': new OxmlAttr('w:decorated', OxmlType.OnOffValue),
    };
    DocParts._C = {
        'w:docPart': DocPart,
    };
    DocumentBackground._C = {
        'v:background': VBackground,
    };
    DocumentBackground._D = {
        'w:color': new OxmlAttr('w:color', OxmlType.StringValue),
        'w:themeColor': new OxmlAttr('w:themeColor', OxmlType.EnumValue, ThemeColorValuesArray),
        'w:themeTint': new OxmlAttr('w:themeTint', OxmlType.StringValue),
        'w:themeShade': new OxmlAttr('w:themeShade', OxmlType.StringValue),
    };
    AutoCaptions._C = {
        'w:autoCaption': AutoCaption,
    };
    Caption._D = {
        'w:name': new OxmlAttr('w:name', OxmlType.StringValue),
        'w:pos': new OxmlAttr('w:pos', OxmlType.EnumValue, CaptionPositionValuesArray),
        'w:chapNum': new OxmlAttr('w:chapNum', OxmlType.OnOffValue),
        'w:heading': new OxmlAttr('w:heading', OxmlType.Int32Value),
        'w:noLabel': new OxmlAttr('w:noLabel', OxmlType.OnOffValue),
        'w:numFmt': new OxmlAttr('w:numFmt', OxmlType.EnumValue, NumberFormatValuesArray),
        'w:sep': new OxmlAttr('w:sep', OxmlType.EnumValue, ChapterSeparatorValuesArray),
    };
    AutoCaption._D = {
        'w:name': new OxmlAttr('w:name', OxmlType.StringValue),
        'w:caption': new OxmlAttr('w:caption', OxmlType.StringValue),
    };
    Gallery._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, DocPartGalleryValuesArray),
    };
    DocPartType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, DocPartValuesArray),
    };
    Behavior._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, DocPartBehaviorValuesArray),
    };
    FootnoteEndnoteType._C = {
        'w:altChunk': AltChunk,
        'w:customXml': CustomXmlBlock,
        'w:sdt': SdtBlock,
        'w:p': Paragraph,
        'w:tbl': Table,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
    };
    FootnoteEndnoteType._D = {
        'w:type': new OxmlAttr('w:type', OxmlType.EnumValue, FootnoteEndnoteValuesArray),
        'w:id': new OxmlAttr('w:id', OxmlType.IntegerValue),
    };
    Endnote._C = {
        'w:altChunk': AltChunk,
        'w:customXml': CustomXmlBlock,
        'w:sdt': SdtBlock,
        'w:p': Paragraph,
        'w:tbl': Table,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
    };
    Footnote._C = {
        'w:altChunk': AltChunk,
        'w:customXml': CustomXmlBlock,
        'w:sdt': SdtBlock,
        'w:p': Paragraph,
        'w:tbl': Table,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
    };
    Comment._C = {
        'w:altChunk': AltChunk,
        'w:customXml': CustomXmlBlock,
        'w:sdt': SdtBlock,
        'w:p': Paragraph,
        'w:tbl': Table,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
    };
    Comment._D = {
        'w:initials': new OxmlAttr('w:initials', OxmlType.StringValue),
        'w:author': new OxmlAttr('w:author', OxmlType.StringValue),
        'w:date': new OxmlAttr('w:date', OxmlType.DateTimeValue),
        'w16du:dateUtc': new OxmlAttr('w16du:dateUtc', OxmlType.DateTimeValue),
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    Div._C = {
        'w:blockQuote': BlockQuote,
        'w:bodyDiv': BodyDiv,
        'w:marLeft': LeftMarginDiv,
        'w:marRight': RightMarginDiv,
        'w:marTop': TopMarginDiv,
        'w:marBottom': BottomMarginDiv,
        'w:divBdr': DivBorder,
        'w:divsChild': DivsChild,
    };
    Div._D = {
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    DivsType._C = {
        'w:div': Div,
    };
    Divs._C = {
        'w:div': Div,
    };
    DivsChild._C = {
        'w:div': Div,
    };
    DivBorder._C = {
        'w:top': TopBorder,
        'w:left': LeftBorder,
        'w:bottom': BottomBorder,
        'w:right': RightBorder,
    };
    SignedTwipsMeasureType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    Font._C = {
        'w:altName': AltName,
        'w:panose1': Panose1Number,
        'w:charset': FontCharSet,
        'w:family': FontFamily,
        'w:notTrueType': NotTrueType,
        'w:pitch': Pitch,
        'w:sig': FontSignature,
        'w:embedRegular': EmbedRegularFont,
        'w:embedBold': EmbedBoldFont,
        'w:embedItalic': EmbedItalicFont,
        'w:embedBoldItalic': EmbedBoldItalicFont,
    };
    Font._D = {
        'w:name': new OxmlAttr('w:name', OxmlType.StringValue),
    };
    Style._C = {
        'w:name': StyleName,
        'w:aliases': Aliases,
        'w:basedOn': BasedOn,
        'w:next': NextParagraphStyle,
        'w:link': LinkedStyle,
        'w:autoRedefine': AutoRedefine,
        'w:hidden': StyleHidden,
        'w:uiPriority': UIPriority,
        'w:semiHidden': SemiHidden,
        'w:unhideWhenUsed': UnhideWhenUsed,
        'w:qFormat': PrimaryStyle,
        'w:locked': Locked,
        'w:personal': Personal,
        'w:personalCompose': PersonalCompose,
        'w:personalReply': PersonalReply,
        'w:rsid': Rsid,
        'w:pPr': StyleParagraphProperties,
        'w:rPr': StyleRunProperties,
        'w:tblPr': StyleTableProperties,
        'w:trPr': TableStyleConditionalFormattingTableRowProperties,
        'w:tcPr': StyleTableCellProperties,
        'w:tblStylePr': TableStyleProperties,
    };
    Style._D = {
        'w:type': new OxmlAttr('w:type', OxmlType.EnumValue, StyleValuesArray),
        'w:styleId': new OxmlAttr('w:styleId', OxmlType.StringValue),
        'w:default': new OxmlAttr('w:default', OxmlType.OnOffValue),
        'w:customStyle': new OxmlAttr('w:customStyle', OxmlType.OnOffValue),
    };
    LatentStyles._C = {
        'w:lsdException': LatentStyleExceptionInfo,
    };
    LatentStyles._D = {
        'w:defLockedState': new OxmlAttr('w:defLockedState', OxmlType.OnOffValue),
        'w:defUIPriority': new OxmlAttr('w:defUIPriority', OxmlType.Int32Value),
        'w:defSemiHidden': new OxmlAttr('w:defSemiHidden', OxmlType.OnOffValue),
        'w:defUnhideWhenUsed': new OxmlAttr('w:defUnhideWhenUsed', OxmlType.OnOffValue),
        'w:defQFormat': new OxmlAttr('w:defQFormat', OxmlType.OnOffValue),
        'w:count': new OxmlAttr('w:count', OxmlType.Int32Value),
    };
    DocDefaults._C = {
        'w:rPrDefault': RunPropertiesDefault,
        'w:pPrDefault': ParagraphPropertiesDefault,
    };
    LatentStyleExceptionInfo._D = {
        'w:name': new OxmlAttr('w:name', OxmlType.StringValue),
        'w:locked': new OxmlAttr('w:locked', OxmlType.OnOffValue),
        'w:uiPriority': new OxmlAttr('w:uiPriority', OxmlType.Int32Value),
        'w:semiHidden': new OxmlAttr('w:semiHidden', OxmlType.OnOffValue),
        'w:unhideWhenUsed': new OxmlAttr('w:unhideWhenUsed', OxmlType.OnOffValue),
        'w:qFormat': new OxmlAttr('w:qFormat', OxmlType.OnOffValue),
    };
    TableStyleProperties._C = {
        'w:pPr': StyleParagraphProperties,
        'w:rPr': RunPropertiesBaseStyle,
        'w:tblPr': TableStyleConditionalFormattingTableProperties,
        'w:trPr': TableStyleConditionalFormattingTableRowProperties,
        'w:tcPr': TableStyleConditionalFormattingTableCellProperties,
    };
    TableStyleProperties._D = {
        'w:type': new OxmlAttr('w:type', OxmlType.EnumValue, TableStyleOverrideValuesArray),
    };
    StyleTableCellProperties._C = {
        'w:shd': Shading,
        'w:noWrap': NoWrap,
        'w:tcMar': TableCellMargin,
        'w:vAlign': TableCellVerticalAlignment,
    };
    StyleTableProperties._C = {
        'w:tblStyleRowBandSize': TableStyleRowBandSize,
        'w:tblStyleColBandSize': TableStyleColumnBandSize,
        'w:jc': TableJustification,
        'w:tblCellSpacing': TableCellSpacing,
        'w:tblInd': TableIndentation,
        'w:tblBorders': TableBorders,
        'w:shd': Shading,
        'w:tblCellMar': TableCellMarginDefault,
    };
    StyleRunProperties._C = {
        'w:rFonts': RunFonts,
        'w:b': Bold,
        'w:bCs': BoldComplexScript,
        'w:i': Italic,
        'w:iCs': ItalicComplexScript,
        'w:caps': Caps,
        'w:smallCaps': SmallCaps,
        'w:strike': Strike,
        'w:dstrike': DoubleStrike,
        'w:outline': Outline,
        'w:shadow': Shadow,
        'w:emboss': Emboss,
        'w:imprint': Imprint,
        'w:noProof': NoProof,
        'w:snapToGrid': SnapToGrid,
        'w:vanish': Vanish,
        'w:webHidden': WebHidden,
        'w:color': Color,
        'w:spacing': Spacing,
        'w:w': CharacterScale,
        'w:kern': Kern,
        'w:position': Position,
        'w:sz': FontSize,
        'w:szCs': FontSizeComplexScript,
        'w:u': Underline,
        'w:effect': TextEffect,
        'w:bdr': Border,
        'w:shd': Shading,
        'w:fitText': FitText,
        'w:vertAlign': VerticalTextAlignment,
        'w:em': Emphasis,
        'w:lang': Languages,
        'w:eastAsianLayout': EastAsianLayout,
        'w:specVanish': SpecVanish,
        'w:rPrChange': RunPropertiesChange,
    };
    UIPriority._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.Int32Value),
    };
    StyleName._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    TableStyleConditionalFormattingTableCellProperties._C = {
        'w:tcBorders': TableCellBorders,
        'w:shd': Shading,
        'w:noWrap': NoWrap,
        'w:tcMar': TableCellMargin,
        'w:vAlign': TableCellVerticalAlignment,
    };
    TableStyleConditionalFormattingTableRowProperties._C = {
        'w:hidden': Hidden,
        'w:cantSplit': CantSplit,
        'w:tblHeader': TableHeader,
        'w:tblCellSpacing': TableCellSpacing,
        'w:jc': TableJustification,
    };
    TableStyleConditionalFormattingTableProperties._C = {
        'w:jc': TableJustification,
        'w:tblCellSpacing': TableCellSpacing,
        'w:tblInd': TableIndentation,
        'w:tblBorders': TableBorders,
        'w:shd': Shading,
        'w:tblCellMar': TableCellMarginDefault,
    };
    StyleParagraphProperties._C = {
        'w:keepNext': KeepNext,
        'w:keepLines': KeepLines,
        'w:pageBreakBefore': PageBreakBefore,
        'w:framePr': FrameProperties,
        'w:widowControl': WidowControl,
        'w:numPr': NumberingProperties,
        'w:suppressLineNumbers': SuppressLineNumbers,
        'w:pBdr': ParagraphBorders,
        'w:shd': Shading,
        'w:tabs': Tabs,
        'w:suppressAutoHyphens': SuppressAutoHyphens,
        'w:kinsoku': Kinsoku,
        'w:wordWrap': WordWrap,
        'w:overflowPunct': OverflowPunctuation,
        'w:topLinePunct': TopLinePunctuation,
        'w:autoSpaceDE': AutoSpaceDE,
        'w:autoSpaceDN': AutoSpaceDN,
        'w:bidi': BiDi,
        'w:adjustRightInd': AdjustRightIndent,
        'w:snapToGrid': SnapToGrid,
        'w:spacing': SpacingBetweenLines,
        'w:ind': Indentation,
        'w:contextualSpacing': ContextualSpacing,
        'w:mirrorIndents': MirrorIndents,
        'w:suppressOverlap': SuppressOverlap,
        'w:jc': Justification,
        'w:textDirection': TextDirection,
        'w:textAlignment': TextAlignment,
        'w:textboxTightWrap': TextBoxTightWrap,
        'w:outlineLvl': OutlineLevel,
        'w:pPrChange': ParagraphPropertiesChange,
    };
    NumberingInstance._C = {
        'w:abstractNumId': AbstractNumId,
        'w:lvlOverride': LevelOverride,
    };
    NumberingInstance._D = {
        'w:numId': new OxmlAttr('w:numId', OxmlType.Int32Value),
        'w:durableId': new OxmlAttr('w:durableId', OxmlType.Int32Value),
    };
    AbstractNum._C = {
        'w:nsid': Nsid,
        'w:multiLevelType': MultiLevelType,
        'w:tmpl': TemplateCode,
        'w:name': AbstractNumDefinitionName,
        'w:styleLink': StyleLink,
        'w:numStyleLink': NumberingStyleLink,
        'w:lvl': Level,
    };
    AbstractNum._D = {
        'w:abstractNumId': new OxmlAttr('w:abstractNumId', OxmlType.Int32Value),
    };
    NumberingPictureBullet._C = {
        'w:pict': PictureBulletBase,
        'w:drawing': Drawing,
    };
    NumberingPictureBullet._D = {
        'w:numPicBulletId': new OxmlAttr('w:numPicBulletId', OxmlType.Int32Value),
    };
    Level._C = {
        'w:start': StartNumberingValue,
        'w:numFmt': NumberingFormat,
        'w:lvlRestart': LevelRestart,
        'w:pStyle': ParagraphStyleIdInLevel,
        'w:isLgl': IsLegalNumberingStyle,
        'w:suff': LevelSuffix,
        'w:lvlText': LevelText,
        'w:lvlPicBulletId': LevelPictureBulletId,
        'w:legacy': LegacyNumbering,
        'w:lvlJc': LevelJustification,
        'w:pPr': PreviousParagraphProperties,
        'w:rPr': NumberingSymbolRunProperties,
    };
    Level._D = {
        'w:ilvl': new OxmlAttr('w:ilvl', OxmlType.Int32Value),
        'w:tplc': new OxmlAttr('w:tplc', OxmlType.HexBinaryValue),
        'w:tentative': new OxmlAttr('w:tentative', OxmlType.OnOffValue),
    };
    MultiLevelType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, MultiLevelValuesArray),
    };
    NumberingSymbolRunProperties._C = {
        'w:rFonts': RunFonts,
        'w:b': Bold,
        'w:bCs': BoldComplexScript,
        'w:i': Italic,
        'w:iCs': ItalicComplexScript,
        'w:caps': Caps,
        'w:smallCaps': SmallCaps,
        'w:strike': Strike,
        'w:dstrike': DoubleStrike,
        'w:outline': Outline,
        'w:shadow': Shadow,
        'w:emboss': Emboss,
        'w:imprint': Imprint,
        'w:noProof': NoProof,
        'w:snapToGrid': SnapToGrid,
        'w:vanish': Vanish,
        'w:webHidden': WebHidden,
        'w:color': Color,
        'w:spacing': Spacing,
        'w:w': CharacterScale,
        'w:kern': Kern,
        'w:position': Position,
        'w:sz': FontSize,
        'w:szCs': FontSizeComplexScript,
        'w:u': Underline,
        'w:effect': TextEffect,
        'w:bdr': Border,
        'w:shd': Shading,
        'w:fitText': FitText,
        'w:vertAlign': VerticalTextAlignment,
        'w:rtl': RightToLeftText,
        'w:cs': ComplexScript,
        'w:em': Emphasis,
        'w:lang': Languages,
        'w:eastAsianLayout': EastAsianLayout,
        'w:specVanish': SpecVanish,
    };
    PreviousParagraphProperties._C = {
        'w:pStyle': ParagraphStyleId,
        'w:keepNext': KeepNext,
        'w:keepLines': KeepLines,
        'w:pageBreakBefore': PageBreakBefore,
        'w:framePr': FrameProperties,
        'w:widowControl': WidowControl,
        'w:numPr': NumberingProperties,
        'w:suppressLineNumbers': SuppressLineNumbers,
        'w:pBdr': ParagraphBorders,
        'w:shd': Shading,
        'w:tabs': Tabs,
        'w:suppressAutoHyphens': SuppressAutoHyphens,
        'w:kinsoku': Kinsoku,
        'w:wordWrap': WordWrap,
        'w:overflowPunct': OverflowPunctuation,
        'w:topLinePunct': TopLinePunctuation,
        'w:autoSpaceDE': AutoSpaceDE,
        'w:autoSpaceDN': AutoSpaceDN,
        'w:bidi': BiDi,
        'w:adjustRightInd': AdjustRightIndent,
        'w:snapToGrid': SnapToGrid,
        'w:spacing': SpacingBetweenLines,
        'w:ind': Indentation,
        'w:contextualSpacing': ContextualSpacing,
        'w:mirrorIndents': MirrorIndents,
        'w:suppressOverlap': SuppressOverlap,
        'w:jc': Justification,
        'w:textDirection': TextDirection,
        'w:textAlignment': TextAlignment,
        'w:textboxTightWrap': TextBoxTightWrap,
        'w:outlineLvl': OutlineLevel,
    };
    LevelJustification._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, LevelJustificationValuesArray),
    };
    LegacyNumbering._D = {
        'w:legacy': new OxmlAttr('w:legacy', OxmlType.OnOffValue),
        'w:legacySpace': new OxmlAttr('w:legacySpace', OxmlType.StringValue),
        'w:legacyIndent': new OxmlAttr('w:legacyIndent', OxmlType.StringValue),
    };
    LevelText._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
        'w:null': new OxmlAttr('w:null', OxmlType.OnOffValue),
    };
    LevelSuffix._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, LevelSuffixValuesArray),
    };
    Frame._C = {
        'w:sz': FrameSize,
        'w:name': FrameName,
        'w:sourceFileName': SourceFileReference,
        'w:marW': MarginWidth,
        'w:marH': MarginHeight,
        'w:scrollbar': ScrollbarVisibility,
        'w:noResizeAllowed': NoResizeAllowed,
        'w:linkedToFile': LinkedToFile,
    };
    Frameset._C = {
        'w:sz': FrameSize,
        'w:framesetSplitbar': FramesetSplitbar,
        'w:frameLayout': FrameLayout,
        'w:frameset': Frameset,
        'w:frame': Frame,
    };
    FrameLayout._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, FrameLayoutValuesArray),
    };
    FramesetSplitbar._C = {
        'w:w': Width,
        'w:color': Color,
        'w:noBorder': NoBorder,
        'w:flatBorders': FlatBorders,
    };
    TwipsMeasureType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    ScrollbarVisibility._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, FrameScrollbarVisibilityValuesArray),
    };
    PixelsMeasureType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.UInt32Value),
    };
    ParagraphPropertiesDefault._C = {
        'w:pPr': ParagraphPropertiesBaseStyle,
    };
    RunPropertiesDefault._C = {
        'w:rPr': RunPropertiesBaseStyle,
    };
    ParagraphPropertiesBaseStyle._C = {
        'w:keepNext': KeepNext,
        'w:keepLines': KeepLines,
        'w:pageBreakBefore': PageBreakBefore,
        'w:framePr': FrameProperties,
        'w:widowControl': WidowControl,
        'w:numPr': NumberingProperties,
        'w:suppressLineNumbers': SuppressLineNumbers,
        'w:pBdr': ParagraphBorders,
        'w:shd': Shading,
        'w:tabs': Tabs,
        'w:suppressAutoHyphens': SuppressAutoHyphens,
        'w:kinsoku': Kinsoku,
        'w:wordWrap': WordWrap,
        'w:overflowPunct': OverflowPunctuation,
        'w:topLinePunct': TopLinePunctuation,
        'w:autoSpaceDE': AutoSpaceDE,
        'w:autoSpaceDN': AutoSpaceDN,
        'w:bidi': BiDi,
        'w:adjustRightInd': AdjustRightIndent,
        'w:snapToGrid': SnapToGrid,
        'w:spacing': SpacingBetweenLines,
        'w:ind': Indentation,
        'w:contextualSpacing': ContextualSpacing,
        'w:mirrorIndents': MirrorIndents,
        'w:suppressOverlap': SuppressOverlap,
        'w:jc': Justification,
        'w:textDirection': TextDirection,
        'w:textAlignment': TextAlignment,
        'w:textboxTightWrap': TextBoxTightWrap,
        'w:outlineLvl': OutlineLevel,
    };
    RunPropertiesBaseStyle._C = {
        'w:rFonts': RunFonts,
        'w:b': Bold,
        'w:bCs': BoldComplexScript,
        'w:i': Italic,
        'w:iCs': ItalicComplexScript,
        'w:caps': Caps,
        'w:smallCaps': SmallCaps,
        'w:strike': Strike,
        'w:dstrike': DoubleStrike,
        'w:outline': Outline,
        'w:shadow': Shadow,
        'w:emboss': Emboss,
        'w:imprint': Imprint,
        'w:noProof': NoProof,
        'w:snapToGrid': SnapToGrid,
        'w:vanish': Vanish,
        'w:webHidden': WebHidden,
        'w:color': Color,
        'w:spacing': Spacing,
        'w:w': CharacterScale,
        'w:kern': Kern,
        'w:position': Position,
        'w:sz': FontSize,
        'w:szCs': FontSizeComplexScript,
        'w:u': Underline,
        'w:effect': TextEffect,
        'w:bdr': Border,
        'w:shd': Shading,
        'w:fitText': FitText,
        'w:vertAlign': VerticalTextAlignment,
        'w:em': Emphasis,
        'w:lang': Languages,
        'w:eastAsianLayout': EastAsianLayout,
        'w:specVanish': SpecVanish,
    };
    LongHexNumberType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.HexBinaryValue),
    };
    DocumentVariable._D = {
        'w:name': new OxmlAttr('w:name', OxmlType.StringValue),
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    DataSourceObject._C = {
        'w:udl': UdlConnectionString,
        'w:table': DataSourceTableName,
        'w:src': SourceReference,
        'w:colDelim': ColumnDelimiter,
        'w:type': MailMergeSource,
        'w:fHdr': FirstRowHeader,
        'w:fieldMapData': FieldMapData,
        'w:recipientData': RecipientDataReference,
    };
    Destination._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, MailMergeDestinationValuesArray),
    };
    DataType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, MailMergeDataValuesArray),
    };
    MainDocumentType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, MailMergeDocumentValuesArray),
    };
    FieldMapData._C = {
        'w:type': MailMergeFieldType,
        'w:name': Name,
        'w:mappedName': MappedName,
        'w:column': ColumnIndex,
        'w:lid': LanguageId,
        'w:dynamicAddress': DynamicAddress,
    };
    MailMergeSource._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, MailMergeSourceValuesArray),
    };
    MailMergeFieldType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, MailMergeOdsoFieldValuesArray),
    };
    RecipientData._C = {
        'w:active': Active,
        'w:column': ColumnIndex,
        'w:uniqueTag': UniqueTag,
    };
    UniqueTag._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.Base64BinaryValue),
    };
    UnsignedDecimalNumberType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.UInt32Value),
    };
    FootnoteEndnoteSeparatorReferenceType._D = {
        'w:id': new OxmlAttr('w:id', OxmlType.IntegerValue),
    };
    EndnotePosition._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, EndnotePositionValuesArray),
    };
    NumberingFormat._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, NumberFormatValuesArray),
        'w:format': new OxmlAttr('w:format', OxmlType.StringValue),
    };
    FootnotePosition._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, FootnotePositionValuesArray),
    };
    TableGrid._C = {
        'w:gridCol': GridColumn,
        'w:tblGridChange': TableGridChange,
    };
    TableProperties._C = {
        'w:tblStyle': TableStyle,
        'w:tblpPr': TablePositionProperties,
        'w:tblOverlap': TableOverlap,
        'w:bidiVisual': BiDiVisual,
        'w:tblW': TableWidth,
        'w:jc': TableJustification,
        'w:tblCellSpacing': TableCellSpacing,
        'w:tblInd': TableIndentation,
        'w:tblBorders': TableBorders,
        'w:shd': Shading,
        'w:tblLayout': TableLayout,
        'w:tblCellMar': TableCellMarginDefault,
        'w:tblLook': TableLook,
        'w:tblCaption': TableCaption,
        'w:tblDescription': TableDescription,
        'w:tblPrChange': TablePropertiesChange,
    };
    TablePropertyExceptionsChange._C = {
        'w:tblPrEx': PreviousTablePropertyExceptions,
    };
    TablePropertyExceptionsChange._D = {
        'w:author': new OxmlAttr('w:author', OxmlType.StringValue),
        'w:date': new OxmlAttr('w:date', OxmlType.DateTimeValue),
        'w16du:dateUtc': new OxmlAttr('w16du:dateUtc', OxmlType.DateTimeValue),
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    TablePropertiesChange._C = {
        'w:tblPr': PreviousTableProperties,
    };
    TablePropertiesChange._D = {
        'w:author': new OxmlAttr('w:author', OxmlType.StringValue),
        'w:date': new OxmlAttr('w:date', OxmlType.DateTimeValue),
        'w16du:dateUtc': new OxmlAttr('w16du:dateUtc', OxmlType.DateTimeValue),
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    TableCellProperties._C = {
        'w:cnfStyle': ConditionalFormatStyle,
        'w:tcW': TableCellWidth,
        'w:gridSpan': GridSpan,
        'w:hMerge': HorizontalMerge,
        'w:vMerge': VerticalMerge,
        'w:tcBorders': TableCellBorders,
        'w:shd': Shading,
        'w:noWrap': NoWrap,
        'w:tcMar': TableCellMargin,
        'w:textDirection': TextDirection,
        'w:tcFitText': TableCellFitText,
        'w:vAlign': TableCellVerticalAlignment,
        'w:hideMark': HideMark,
        'w:cellIns': CellInsertion,
        'w:cellDel': CellDeletion,
        'w:cellMerge': CellMerge,
        'w:tcPrChange': TableCellPropertiesChange,
    };
    TableCellPropertiesChange._C = {
        'w:tcPr': PreviousTableCellProperties,
    };
    TableCellPropertiesChange._D = {
        'w:author': new OxmlAttr('w:author', OxmlType.StringValue),
        'w:date': new OxmlAttr('w:date', OxmlType.DateTimeValue),
        'w16du:dateUtc': new OxmlAttr('w16du:dateUtc', OxmlType.DateTimeValue),
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    TableGridChange._C = {
        'w:tblGrid': PreviousTableGrid,
    };
    TableGridChange._D = {
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    GridColumn._D = {
        'w:w': new OxmlAttr('w:w', OxmlType.StringValue),
    };
    CustomXmlAttribute._D = {
        'w:uri': new OxmlAttr('w:uri', OxmlType.StringValue),
        'w:name': new OxmlAttr('w:name', OxmlType.StringValue),
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    CustomXmlProperties._C = {
        'w:placeholder': CustomXmlPlaceholder,
        'w:attr': CustomXmlAttribute,
    };
    SdtContentRow._C = {
        'w:tr': TableRow,
        'w:customXml': CustomXmlRow,
        'w:sdt': SdtRow,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
    };
    SdtContentCell._C = {
        'w:tc': TableCell,
        'w:customXml': CustomXmlCell,
        'w:sdt': SdtCell,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
    };
    SdtContentRunRuby._C = {
        'w:customXml': CustomXmlRuby,
        'w:fldSimple': SimpleFieldRuby,
        'w:hyperlink': HyperlinkRuby,
        'w:r': Run,
        'w:sdt': SdtRunRuby,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
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
    };
    SdtContentRun._C = {
        'm:r': MRun,
        'w:customXml': CustomXmlRun,
        'w:fldSimple': SimpleField,
        'w:hyperlink': Hyperlink,
        'w:sdt': SdtRun,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
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
        'w:r': Run,
        'w:bdo': BidirectionalOverride,
        'w:dir': BidirectionalEmbedding,
        'w:subDoc': SubDocumentReference,
    };
    SdtContentBlock._C = {
        'w:customXml': CustomXmlBlock,
        'w:sdt': SdtBlock,
        'w:p': Paragraph,
        'w:tbl': Table,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
    };
    SdtEndCharProperties._C = {
        'w:rPr': RunProperties,
    };
    SdtProperties._C = {
        'w:rPr': RunProperties,
        'w:alias': SdtAlias,
        'w:lock': Lock,
        'w:placeholder': SdtPlaceholder,
        'w:showingPlcHdr': ShowingPlaceholder,
        'w:dataBinding': DataBinding,
        'w15:dataBinding': W15DataBinding,
        'w:temporary': TemporarySdt,
        'w:id': SdtId,
        'w:tag': Tag,
        'w15:color': W15Color,
        'w15:appearance': W15Appearance,
        'w15:webExtensionLinked': W15WebExtensionLinked,
        'w15:webExtensionCreated': W15WebExtensionCreated,
        'w:equation': SdtContentEquation,
        'w:comboBox': SdtContentComboBox,
        'w:date': SdtContentDate,
        'w:docPartObj': SdtContentDocPartObject,
        'w:docPartList': SdtContentDocPartList,
        'w:dropDownList': SdtContentDropDownList,
        'w:picture': SdtContentPicture,
        'w:richText': SdtContentRichText,
        'w:text': SdtContentText,
        'w:citation': SdtContentCitation,
        'w:group': SdtContentGroup,
        'w:bibliography': SdtContentBibliography,
        'w14:entityPicker': W14EntityPickerEmpty,
        'w14:checkbox': W14SdtContentCheckBox,
        'w15:repeatingSection': W15SdtRepeatedSection,
        'w15:repeatingSectionItem': W15SdtRepeatedSectionItem,
    };
    ListItem._D = {
        'w:displayText': new OxmlAttr('w:displayText', OxmlType.StringValue),
        'w:value': new OxmlAttr('w:value', OxmlType.StringValue),
    };
    Calendar._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, CalendarValuesArray),
    };
    SdtDateMappingType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, DateFormatValuesArray),
    };
    RubyContentType._C = {
        'w:customXml': CustomXmlRuby,
        'w:fldSimple': SimpleFieldRuby,
        'w:hyperlink': HyperlinkRuby,
        'w:r': Run,
        'w:sdt': SdtRunRuby,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
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
    };
    RubyBase._C = {
        'w:customXml': CustomXmlRuby,
        'w:fldSimple': SimpleFieldRuby,
        'w:hyperlink': HyperlinkRuby,
        'w:r': Run,
        'w:sdt': SdtRunRuby,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
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
    };
    RubyContent._C = {
        'w:customXml': CustomXmlRuby,
        'w:fldSimple': SimpleFieldRuby,
        'w:hyperlink': HyperlinkRuby,
        'w:r': Run,
        'w:sdt': SdtRunRuby,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
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
    };
    RubyProperties._C = {
        'w:rubyAlign': RubyAlign,
        'w:hps': PhoneticGuideTextFontSize,
        'w:hpsRaise': PhoneticGuideRaise,
        'w:hpsBaseText': PhoneticGuideBaseTextSize,
        'w:lid': LanguageId,
        'w:dirty': Dirty,
    };
    LanguageId._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    PhoneticGuideRaise._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.Int16Value),
    };
    RubyAlign._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, RubyAlignValuesArray),
    };
    AltChunkProperties._C = {
        'w:matchSrc': MatchSource,
    };
    ParagraphMarkRunPropertiesChange._C = {
        'w:rPr': PreviousParagraphMarkRunProperties,
    };
    ParagraphMarkRunPropertiesChange._D = {
        'w:author': new OxmlAttr('w:author', OxmlType.StringValue),
        'w:date': new OxmlAttr('w:date', OxmlType.DateTimeValue),
        'w16du:dateUtc': new OxmlAttr('w16du:dateUtc', OxmlType.DateTimeValue),
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    SectionPropertiesChange._C = {
        'w:sectPr': PreviousSectionProperties,
    };
    SectionPropertiesChange._D = {
        'w:author': new OxmlAttr('w:author', OxmlType.StringValue),
        'w:date': new OxmlAttr('w:date', OxmlType.DateTimeValue),
        'w16du:dateUtc': new OxmlAttr('w16du:dateUtc', OxmlType.DateTimeValue),
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    Column._D = {
        'w:w': new OxmlAttr('w:w', OxmlType.StringValue),
        'w:space': new OxmlAttr('w:space', OxmlType.StringValue),
    };
    Format._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    MaxLength._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.Int16Value),
    };
    TextBoxFormFieldType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, TextBoxFormFieldValuesArray),
    };
    String255Type._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    DefaultDropDownListItemIndex._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.Int32Value),
    };
    TextInput._C = {
        'w:type': TextBoxFormFieldType,
        'w:default': DefaultTextBoxFormFieldString,
        'w:maxLength': MaxLength,
        'w:format': Format,
    };
    DropDownListFormField._C = {
        'w:result': DropDownListSelection,
        'w:default': DefaultDropDownListItemIndex,
        'w:listEntry': ListEntryFormField,
    };
    CheckBox._C = {
        'w:size': FormFieldSize,
        'w:sizeAuto': AutomaticallySizeFormField,
        'w:default': DefaultCheckBoxFormFieldState,
        'w:checked': Checked,
    };
    StatusText._D = {
        'w:type': new OxmlAttr('w:type', OxmlType.EnumValue, InfoTextValuesArray),
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    HelpText._D = {
        'w:type': new OxmlAttr('w:type', OxmlType.EnumValue, InfoTextValuesArray),
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    MacroNameType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    FormFieldName._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    FormFieldData._C = {
        'w:name': FormFieldName,
        'w:enabled': Enabled,
        'w:calcOnExit': CalculateOnExit,
        'w:entryMacro': EntryMacro,
        'w:exitMacro': ExitMacro,
        'w:helpText': HelpText,
        'w:statusText': StatusText,
        'w:checkBox': CheckBox,
        'w:ddList': DropDownListFormField,
        'w:textInput': TextInput,
    };
    SectionProperties._C = {
        'w:headerReference': HeaderReference,
        'w:footerReference': FooterReference,
        'w:footnotePr': FootnoteProperties,
        'w:endnotePr': EndnoteProperties,
        'w:type': SectionType,
        'w:pgSz': PageSize,
        'w:pgMar': PageMargin,
        'w:paperSrc': PaperSource,
        'w:pgBorders': PageBorders,
        'w:lnNumType': LineNumberType,
        'w:pgNumType': PageNumberType,
        'w:cols': Columns,
        'w:formProt': FormProtection,
        'w:vAlign': VerticalTextAlignmentOnPage,
        'w:noEndnote': NoEndnote,
        'w:titlePg': TitlePage,
        'w:textDirection': TextDirection,
        'w:bidi': BiDi,
        'w:rtlGutter': GutterOnRight,
        'w:docGrid': DocGrid,
        'w:printerSettings': PrinterSettingsReference,
        'w15:footnoteColumns': W15FootnoteColumns,
        'w:sectPrChange': SectionPropertiesChange,
    };
    SectionProperties._D = {
        'w:rsidRPr': new OxmlAttr('w:rsidRPr', OxmlType.HexBinaryValue),
        'w:rsidDel': new OxmlAttr('w:rsidDel', OxmlType.HexBinaryValue),
        'w:rsidR': new OxmlAttr('w:rsidR', OxmlType.HexBinaryValue),
        'w:rsidSect': new OxmlAttr('w:rsidSect', OxmlType.HexBinaryValue),
    };
    ParagraphMarkRunProperties._C = {
        'w:ins': Inserted,
        'w:del': Deleted,
        'w:moveFrom': MoveFrom,
        'w:moveTo': MoveTo,
        'w14:conflictIns': W14ConflictInsertion,
        'w14:conflictDel': W14ConflictDeletion,
        'w:rStyle': RunStyle,
        'w:rFonts': RunFonts,
        'w:b': Bold,
        'w:bCs': BoldComplexScript,
        'w:i': Italic,
        'w:iCs': ItalicComplexScript,
        'w:caps': Caps,
        'w:smallCaps': SmallCaps,
        'w:strike': Strike,
        'w:dstrike': DoubleStrike,
        'w:outline': Outline,
        'w:shadow': Shadow,
        'w:emboss': Emboss,
        'w:imprint': Imprint,
        'w:noProof': NoProof,
        'w:snapToGrid': SnapToGrid,
        'w:vanish': Vanish,
        'w:webHidden': WebHidden,
        'w:color': Color,
        'w:spacing': Spacing,
        'w:w': CharacterScale,
        'w:kern': Kern,
        'w:position': Position,
        'w:sz': FontSize,
        'w:szCs': FontSizeComplexScript,
        'w:highlight': Highlight,
        'w:u': Underline,
        'w:effect': TextEffect,
        'w:bdr': Border,
        'w:shd': Shading,
        'w:fitText': FitText,
        'w:vertAlign': VerticalTextAlignment,
        'w:rtl': RightToLeftText,
        'w:cs': ComplexScript,
        'w:em': Emphasis,
        'w:lang': Languages,
        'w:eastAsianLayout': EastAsianLayout,
        'w:specVanish': SpecVanish,
        'w14:glow': W14Glow,
        'w14:shadow': W14Shadow,
        'w14:reflection': W14Reflection,
        'w14:textOutline': W14TextOutlineEffect,
        'w14:textFill': W14FillTextEffect,
        'w14:scene3d': W14Scene3D,
        'w14:props3d': W14Properties3D,
        'w14:ligatures': W14Ligatures,
        'w14:numForm': W14NumberingFormat,
        'w14:numSpacing': W14NumberSpacing,
        'w14:stylisticSets': W14StylisticSets,
        'w14:cntxtAlts': W14ContextualAlternatives,
        'w:oMath': OfficeMath,
        'w:rPrChange': ParagraphMarkRunPropertiesChange,
    };
    TabStop._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, TabStopValuesArray),
        'w:leader': new OxmlAttr('w:leader', OxmlType.EnumValue, TabStopLeaderCharValuesArray),
        'w:pos': new OxmlAttr('w:pos', OxmlType.Int32Value),
    };
    NumberingChange._D = {
        'w:original': new OxmlAttr('w:original', OxmlType.StringValue),
        'w:author': new OxmlAttr('w:author', OxmlType.StringValue),
        'w:date': new OxmlAttr('w:date', OxmlType.DateTimeValue),
        'w16du:dateUtc': new OxmlAttr('w16du:dateUtc', OxmlType.DateTimeValue),
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    NonNegativeDecimalNumberType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.Int32Value),
    };
    NumberingLevelReference._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.Int32Value),
    };
    PreviousParagraphMarkRunProperties._C = {
        'w:ins': Inserted,
        'w:del': Deleted,
        'w:moveFrom': MoveFrom,
        'w:moveTo': MoveTo,
        'w14:conflictIns': W14ConflictInsertion,
        'w14:conflictDel': W14ConflictDeletion,
        'w:rStyle': RunStyle,
        'w:rFonts': RunFonts,
        'w:b': Bold,
        'w:bCs': BoldComplexScript,
        'w:i': Italic,
        'w:iCs': ItalicComplexScript,
        'w:caps': Caps,
        'w:smallCaps': SmallCaps,
        'w:strike': Strike,
        'w:dstrike': DoubleStrike,
        'w:outline': Outline,
        'w:shadow': Shadow,
        'w:emboss': Emboss,
        'w:imprint': Imprint,
        'w:noProof': NoProof,
        'w:snapToGrid': SnapToGrid,
        'w:vanish': Vanish,
        'w:webHidden': WebHidden,
        'w:color': Color,
        'w:spacing': Spacing,
        'w:w': CharacterScale,
        'w:kern': Kern,
        'w:position': Position,
        'w:sz': FontSize,
        'w:szCs': FontSizeComplexScript,
        'w:highlight': Highlight,
        'w:u': Underline,
        'w:effect': TextEffect,
        'w:bdr': Border,
        'w:shd': Shading,
        'w:fitText': FitText,
        'w:vertAlign': VerticalTextAlignment,
        'w:rtl': RightToLeftText,
        'w:cs': ComplexScript,
        'w:em': Emphasis,
        'w:lang': Languages,
        'w:eastAsianLayout': EastAsianLayout,
        'w:specVanish': SpecVanish,
        'w14:glow': W14Glow,
        'w14:shadow': W14Shadow,
        'w14:reflection': W14Reflection,
        'w14:textOutline': W14TextOutlineEffect,
        'w14:textFill': W14FillTextEffect,
        'w14:scene3d': W14Scene3D,
        'w14:props3d': W14Properties3D,
        'w14:ligatures': W14Ligatures,
        'w14:numForm': W14NumberingFormat,
        'w14:numSpacing': W14NumberSpacing,
        'w14:stylisticSets': W14StylisticSets,
        'w14:cntxtAlts': W14ContextualAlternatives,
        'w:oMath': OfficeMath,
    };
    PreviousRunProperties._C = {
        'w:rStyle': RunStyle,
        'w:rFonts': RunFonts,
        'w:b': Bold,
        'w:bCs': BoldComplexScript,
        'w:i': Italic,
        'w:iCs': ItalicComplexScript,
        'w:caps': Caps,
        'w:smallCaps': SmallCaps,
        'w:strike': Strike,
        'w:dstrike': DoubleStrike,
        'w:outline': Outline,
        'w:shadow': Shadow,
        'w:emboss': Emboss,
        'w:imprint': Imprint,
        'w:noProof': NoProof,
        'w:snapToGrid': SnapToGrid,
        'w:vanish': Vanish,
        'w:webHidden': WebHidden,
        'w:color': Color,
        'w:spacing': Spacing,
        'w:w': CharacterScale,
        'w:kern': Kern,
        'w:position': Position,
        'w:sz': FontSize,
        'w:szCs': FontSizeComplexScript,
        'w:highlight': Highlight,
        'w:u': Underline,
        'w:effect': TextEffect,
        'w:bdr': Border,
        'w:shd': Shading,
        'w:fitText': FitText,
        'w:vertAlign': VerticalTextAlignment,
        'w:rtl': RightToLeftText,
        'w:cs': ComplexScript,
        'w:em': Emphasis,
        'w:lang': Languages,
        'w:eastAsianLayout': EastAsianLayout,
        'w:specVanish': SpecVanish,
        'w14:glow': W14Glow,
        'w14:shadow': W14Shadow,
        'w14:reflection': W14Reflection,
        'w14:textOutline': W14TextOutlineEffect,
        'w14:textFill': W14FillTextEffect,
        'w14:scene3d': W14Scene3D,
        'w14:props3d': W14Properties3D,
        'w14:ligatures': W14Ligatures,
        'w14:numForm': W14NumberingFormat,
        'w14:numSpacing': W14NumberSpacing,
        'w14:stylisticSets': W14StylisticSets,
        'w14:cntxtAlts': W14ContextualAlternatives,
    };
    ParagraphPropertiesExtended._C = {
        'w:pStyle': ParagraphStyleId,
        'w:keepNext': KeepNext,
        'w:keepLines': KeepLines,
        'w:pageBreakBefore': PageBreakBefore,
        'w:framePr': FrameProperties,
        'w:widowControl': WidowControl,
        'w:numPr': NumberingProperties,
        'w:suppressLineNumbers': SuppressLineNumbers,
        'w:pBdr': ParagraphBorders,
        'w:shd': Shading,
        'w:tabs': Tabs,
        'w:suppressAutoHyphens': SuppressAutoHyphens,
        'w:kinsoku': Kinsoku,
        'w:wordWrap': WordWrap,
        'w:overflowPunct': OverflowPunctuation,
        'w:topLinePunct': TopLinePunctuation,
        'w:autoSpaceDE': AutoSpaceDE,
        'w:autoSpaceDN': AutoSpaceDN,
        'w:bidi': BiDi,
        'w:adjustRightInd': AdjustRightIndent,
        'w:snapToGrid': SnapToGrid,
        'w:spacing': SpacingBetweenLines,
        'w:ind': Indentation,
        'w:contextualSpacing': ContextualSpacing,
        'w:mirrorIndents': MirrorIndents,
        'w:suppressOverlap': SuppressOverlap,
        'w:jc': Justification,
        'w:textDirection': TextDirection,
        'w:textAlignment': TextAlignment,
        'w:textboxTightWrap': TextBoxTightWrap,
        'w:outlineLvl': OutlineLevel,
        'w:divId': DivId,
        'w:cnfStyle': ConditionalFormatStyle,
    };
    PreviousSectionProperties._C = {
        'w:footnotePr': FootnoteProperties,
        'w:endnotePr': EndnoteProperties,
        'w:type': SectionType,
        'w:pgSz': PageSize,
        'w:pgMar': PageMargin,
        'w:paperSrc': PaperSource,
        'w:pgBorders': PageBorders,
        'w:lnNumType': LineNumberType,
        'w:pgNumType': PageNumberType,
        'w:cols': Columns,
        'w:formProt': FormProtection,
        'w:vAlign': VerticalTextAlignmentOnPage,
        'w:noEndnote': NoEndnote,
        'w:titlePg': TitlePage,
        'w:textDirection': TextDirection,
        'w:bidi': BiDi,
        'w:rtlGutter': GutterOnRight,
        'w:docGrid': DocGrid,
        'w:printerSettings': PrinterSettingsReference,
        'w15:footnoteColumns': W15FootnoteColumns,
    };
    PreviousSectionProperties._D = {
        'w:rsidRPr': new OxmlAttr('w:rsidRPr', OxmlType.HexBinaryValue),
        'w:rsidDel': new OxmlAttr('w:rsidDel', OxmlType.HexBinaryValue),
        'w:rsidR': new OxmlAttr('w:rsidR', OxmlType.HexBinaryValue),
        'w:rsidSect': new OxmlAttr('w:rsidSect', OxmlType.HexBinaryValue),
    };
    PreviousTableProperties._C = {
        'w:tblStyle': TableStyle,
        'w:tblpPr': TablePositionProperties,
        'w:tblOverlap': TableOverlap,
        'w:bidiVisual': BiDiVisual,
        'w:tblW': TableWidth,
        'w:jc': TableJustification,
        'w:tblCellSpacing': TableCellSpacing,
        'w:tblInd': TableIndentation,
        'w:tblBorders': TableBorders,
        'w:shd': Shading,
        'w:tblLayout': TableLayout,
        'w:tblCellMar': TableCellMarginDefault,
        'w:tblLook': TableLook,
        'w:tblCaption': TableCaption,
        'w:tblDescription': TableDescription,
    };
    PreviousTableRowProperties._C = {
        'w:cnfStyle': ConditionalFormatStyle,
        'w:divId': DivId,
        'w:gridBefore': GridBefore,
        'w:gridAfter': GridAfter,
        'w:wBefore': WidthBeforeTableRow,
        'w:wAfter': WidthAfterTableRow,
        'w:trHeight': TableRowHeight,
        'w:hidden': Hidden,
        'w:cantSplit': CantSplit,
        'w:tblHeader': TableHeader,
        'w:tblCellSpacing': TableCellSpacing,
        'w:jc': TableJustification,
    };
    PreviousTableCellProperties._C = {
        'w:cnfStyle': ConditionalFormatStyle,
        'w:tcW': TableCellWidth,
        'w:gridSpan': GridSpan,
        'w:hMerge': HorizontalMerge,
        'w:vMerge': VerticalMerge,
        'w:tcBorders': TableCellBorders,
        'w:shd': Shading,
        'w:noWrap': NoWrap,
        'w:tcMar': TableCellMargin,
        'w:textDirection': TextDirection,
        'w:tcFitText': TableCellFitText,
        'w:vAlign': TableCellVerticalAlignment,
        'w:hideMark': HideMark,
        'w:cellIns': CellInsertion,
        'w:cellDel': CellDeletion,
        'w:cellMerge': CellMerge,
    };
    PreviousTablePropertyExceptions._C = {
        'w:tblW': TableWidth,
        'w:jc': TableJustification,
        'w:tblCellSpacing': TableCellSpacing,
        'w:tblInd': TableIndentation,
        'w:tblBorders': TableBorders,
        'w:shd': Shading,
        'w:tblLayout': TableLayout,
        'w:tblCellMar': TableCellMarginDefault,
        'w:tblLook': TableLook,
    };
    GlossaryDocument._C = {
        'w:background': DocumentBackground,
        'w:docParts': DocParts,
    };
    Document._C = {
        'w:background': DocumentBackground,
        'w:body': Body,
    };
    Document._D = {
        'w:conformance': new OxmlAttr('w:conformance', OxmlType.EnumValue, DocumentConformanceArray),
    };
    Styles._C = {
        'w:docDefaults': DocDefaults,
        'w:latentStyles': LatentStyles,
        'w:style': Style,
    };
    Numbering._C = {
        'w:numPicBullet': NumberingPictureBullet,
        'w:abstractNum': AbstractNum,
        'w:num': NumberingInstance,
        'w:numIdMacAtCleanup': NumberingIdMacAtCleanup,
    };
    Fonts._C = {
        'w:font': Font,
    };
    WebSettings._C = {
        'w:frameset': Frameset,
        'w:divs': Divs,
        'w:encoding': WebPageEncoding,
        'w:optimizeForBrowser': OptimizeForBrowser,
        'w:relyOnVML': RelyOnVML,
        'w:allowPNG': AllowPNG,
        'w:doNotRelyOnCSS': DoNotRelyOnCSS,
        'w:doNotSaveAsSingleFile': DoNotSaveAsSingleFile,
        'w:doNotOrganizeInFolder': DoNotOrganizeInFolder,
        'w:doNotUseLongFileNames': DoNotUseLongFileNames,
        'w:pixelsPerInch': PixelsPerInch,
        'w:targetScreenSz': TargetScreenSize,
    };
    Settings._C = {
        'w:writeProtection': WriteProtection,
        'w:view': View,
        'w:zoom': Zoom,
        'w:removePersonalInformation': RemovePersonalInformation,
        'w:removeDateAndTime': RemoveDateAndTime,
        'w:doNotDisplayPageBoundaries': DoNotDisplayPageBoundaries,
        'w:displayBackgroundShape': DisplayBackgroundShape,
        'w:printPostScriptOverText': PrintPostScriptOverText,
        'w:printFractionalCharacterWidth': PrintFractionalCharacterWidth,
        'w:printFormsData': PrintFormsData,
        'w:embedTrueTypeFonts': EmbedTrueTypeFonts,
        'w:embedSystemFonts': EmbedSystemFonts,
        'w:saveSubsetFonts': SaveSubsetFonts,
        'w:saveFormsData': SaveFormsData,
        'w:mirrorMargins': MirrorMargins,
        'w:alignBordersAndEdges': AlignBorderAndEdges,
        'w:bordersDoNotSurroundHeader': BordersDoNotSurroundHeader,
        'w:bordersDoNotSurroundFooter': BordersDoNotSurroundFooter,
        'w:gutterAtTop': GutterAtTop,
        'w:hideSpellingErrors': HideSpellingErrors,
        'w:hideGrammaticalErrors': HideGrammaticalErrors,
        'w:activeWritingStyle': ActiveWritingStyle,
        'w:proofState': ProofState,
        'w:formsDesign': FormsDesign,
        'w:attachedTemplate': AttachedTemplate,
        'w:linkStyles': LinkStyles,
        'w:stylePaneFormatFilter': StylePaneFormatFilter,
        'w:stylePaneSortMethod': StylePaneSortMethods,
        'w:documentType': DocumentType,
        'w:mailMerge': MailMerge,
        'w:revisionView': RevisionView,
        'w:trackRevisions': TrackRevisions,
        'w:doNotTrackMoves': DoNotTrackMoves,
        'w:doNotTrackFormatting': DoNotTrackFormatting,
        'w:documentProtection': DocumentProtection,
        'w:autoFormatOverride': AutoFormatOverride,
        'w:styleLockTheme': StyleLockThemesPart,
        'w:styleLockQFSet': StyleLockStylesPart,
        'w:defaultTabStop': DefaultTabStop,
        'w:autoHyphenation': AutoHyphenation,
        'w:consecutiveHyphenLimit': ConsecutiveHyphenLimit,
        'w:hyphenationZone': HyphenationZone,
        'w:doNotHyphenateCaps': DoNotHyphenateCaps,
        'w:showEnvelope': ShowEnvelope,
        'w:summaryLength': SummaryLength,
        'w:clickAndTypeStyle': ClickAndTypeStyle,
        'w:defaultTableStyle': DefaultTableStyle,
        'w:evenAndOddHeaders': EvenAndOddHeaders,
        'w:bookFoldRevPrinting': BookFoldReversePrinting,
        'w:bookFoldPrinting': BookFoldPrinting,
        'w:bookFoldPrintingSheets': BookFoldPrintingSheets,
        'w:drawingGridHorizontalSpacing': DrawingGridHorizontalSpacing,
        'w:drawingGridVerticalSpacing': DrawingGridVerticalSpacing,
        'w:displayHorizontalDrawingGridEvery': DisplayHorizontalDrawingGrid,
        'w:displayVerticalDrawingGridEvery': DisplayVerticalDrawingGrid,
        'w:doNotUseMarginsForDrawingGridOrigin': DoNotUseMarginsForDrawingGridOrigin,
        'w:drawingGridHorizontalOrigin': DrawingGridHorizontalOrigin,
        'w:drawingGridVerticalOrigin': DrawingGridVerticalOrigin,
        'w:doNotShadeFormData': DoNotShadeFormData,
        'w:noPunctuationKerning': NoPunctuationKerning,
        'w:characterSpacingControl': CharacterSpacingControl,
        'w:printTwoOnOne': PrintTwoOnOne,
        'w:strictFirstAndLastChars': StrictFirstAndLastChars,
        'w:noLineBreaksAfter': NoLineBreaksAfterKinsoku,
        'w:noLineBreaksBefore': NoLineBreaksBeforeKinsoku,
        'w:savePreviewPicture': SavePreviewPicture,
        'w:doNotValidateAgainstSchema': DoNotValidateAgainstSchema,
        'w:saveInvalidXml': SaveInvalidXml,
        'w:ignoreMixedContent': IgnoreMixedContent,
        'w:alwaysShowPlaceholderText': AlwaysShowPlaceholderText,
        'w:doNotDemarcateInvalidXml': DoNotDemarcateInvalidXml,
        'w:saveXmlDataOnly': SaveXmlDataOnly,
        'w:useXSLTWhenSaving': UseXsltWhenSaving,
        'w:saveThroughXslt': SaveThroughXslt,
        'w:showXMLTags': ShowXmlTags,
        'w:alwaysMergeEmptyNamespace': AlwaysMergeEmptyNamespace,
        'w:updateFields': UpdateFieldsOnOpen,
        'w:hdrShapeDefaults': HeaderShapeDefaults,
        'w:footnotePr': FootnoteDocumentWideProperties,
        'w:endnotePr': EndnoteDocumentWideProperties,
        'w:compat': Compatibility,
        'w:docVars': DocumentVariables,
        'w:rsids': Rsids,
        'm:mathPr': MMathProperties,
        'w:uiCompat97To2003': UICompatibleWith97To2003,
        'w:attachedSchema': AttachedSchema,
        'w:themeFontLang': ThemeFontLanguages,
        'w:clrSchemeMapping': ColorSchemeMapping,
        'w:doNotIncludeSubdocsInStats': DoNotIncludeSubdocsInStats,
        'w:doNotAutoCompressPictures': DoNotAutoCompressPictures,
        'w:forceUpgrade': ForceUpgrade,
        'w:captions': Captions,
        'w:readModeInkLockDown': ReadModeInkLockDown,
        'sl:schemaLibrary': SlSchemaLibrary,
        'w:shapeDefaults': ShapeDefaults,
        'w:decimalSymbol': DecimalSymbol,
        'w:listSeparator': ListSeparator,
        'w14:docId': W14DocumentId,
        'w14:discardImageEditingData': W14DiscardImageEditingData,
        'w14:defaultImageDpi': W14DefaultImageDpi,
        'w14:conflictMode': W14ConflictMode,
        'w15:chartTrackingRefBased': W15ChartTrackingRefBased,
        'w15:docId': W15PersistentDocumentId,
    };
    HeaderFooterType._C = {
        'w:altChunk': AltChunk,
        'w:customXml': CustomXmlBlock,
        'w:sdt': SdtBlock,
        'w:p': Paragraph,
        'w:tbl': Table,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
    };
    Footer._C = {
        'w:altChunk': AltChunk,
        'w:customXml': CustomXmlBlock,
        'w:sdt': SdtBlock,
        'w:p': Paragraph,
        'w:tbl': Table,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
    };
    Header._C = {
        'w:altChunk': AltChunk,
        'w:customXml': CustomXmlBlock,
        'w:sdt': SdtBlock,
        'w:p': Paragraph,
        'w:tbl': Table,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
    };
    Endnotes._C = {
        'w:endnote': Endnote,
    };
    Footnotes._C = {
        'w:footnote': Footnote,
    };
    Comments._C = {
        'w:comment': Comment,
    };
    TextBoxContent._C = {
        'w:altChunk': AltChunk,
        'w:customXml': CustomXmlBlock,
        'w:sdt': SdtBlock,
        'w:p': Paragraph,
        'w:tbl': Table,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
    };
    Recipients._C = {
        'w:recipientData': RecipientData,
    };
    DocGrid._D = {
        'w:type': new OxmlAttr('w:type', OxmlType.EnumValue, DocGridValuesArray),
        'w:linePitch': new OxmlAttr('w:linePitch', OxmlType.Int32Value),
        'w:charSpace': new OxmlAttr('w:charSpace', OxmlType.Int32Value),
    };
    VerticalTextAlignmentOnPage._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, VerticalJustificationValuesArray),
    };
    Columns._C = {
        'w:col': Column,
    };
    Columns._D = {
        'w:equalWidth': new OxmlAttr('w:equalWidth', OxmlType.OnOffValue),
        'w:space': new OxmlAttr('w:space', OxmlType.StringValue),
        'w:num': new OxmlAttr('w:num', OxmlType.Int16Value),
        'w:sep': new OxmlAttr('w:sep', OxmlType.OnOffValue),
    };
    PageNumberType._D = {
        'w:fmt': new OxmlAttr('w:fmt', OxmlType.EnumValue, NumberFormatValuesArray),
        'w:start': new OxmlAttr('w:start', OxmlType.Int32Value),
        'w:chapStyle': new OxmlAttr('w:chapStyle', OxmlType.ByteValue),
        'w:chapSep': new OxmlAttr('w:chapSep', OxmlType.EnumValue, ChapterSeparatorValuesArray),
    };
    LineNumberType._D = {
        'w:countBy': new OxmlAttr('w:countBy', OxmlType.Int16Value),
        'w:start': new OxmlAttr('w:start', OxmlType.Int16Value),
        'w:distance': new OxmlAttr('w:distance', OxmlType.StringValue),
        'w:restart': new OxmlAttr('w:restart', OxmlType.EnumValue, LineNumberRestartValuesArray),
    };
    PageBorders._C = {
        'w:top': TopBorder,
        'w:left': LeftBorder,
        'w:bottom': BottomBorder,
        'w:right': RightBorder,
    };
    PageBorders._D = {
        'w:zOrder': new OxmlAttr('w:zOrder', OxmlType.EnumValue, PageBorderZOrderValuesArray),
        'w:display': new OxmlAttr('w:display', OxmlType.EnumValue, PageBorderDisplayValuesArray),
        'w:offsetFrom': new OxmlAttr('w:offsetFrom', OxmlType.EnumValue, PageBorderOffsetValuesArray),
    };
    PaperSource._D = {
        'w:first': new OxmlAttr('w:first', OxmlType.UInt16Value),
        'w:other': new OxmlAttr('w:other', OxmlType.UInt16Value),
    };
    PageMargin._D = {
        'w:top': new OxmlAttr('w:top', OxmlType.Int32Value),
        'w:right': new OxmlAttr('w:right', OxmlType.UInt32Value),
        'w:bottom': new OxmlAttr('w:bottom', OxmlType.Int32Value),
        'w:left': new OxmlAttr('w:left', OxmlType.UInt32Value),
        'w:header': new OxmlAttr('w:header', OxmlType.UInt32Value),
        'w:footer': new OxmlAttr('w:footer', OxmlType.UInt32Value),
        'w:gutter': new OxmlAttr('w:gutter', OxmlType.UInt32Value),
    };
    PageSize._D = {
        'w:w': new OxmlAttr('w:w', OxmlType.UInt32Value),
        'w:h': new OxmlAttr('w:h', OxmlType.UInt32Value),
        'w:orient': new OxmlAttr('w:orient', OxmlType.EnumValue, PageOrientationValuesArray),
        'w:code': new OxmlAttr('w:code', OxmlType.UInt16Value),
    };
    SectionType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, SectionMarkValuesArray),
    };
    EndnoteProperties._C = {
        'w:pos': EndnotePosition,
        'w:numFmt': NumberingFormat,
        'w:numStart': NumberingStart,
        'w:numRestart': NumberingRestart,
    };
    FootnoteProperties._C = {
        'w:pos': FootnotePosition,
        'w:numFmt': NumberingFormat,
        'w:numStart': NumberingStart,
        'w:numRestart': NumberingRestart,
    };
    TableLook._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.HexBinaryValue),
        'w:firstRow': new OxmlAttr('w:firstRow', OxmlType.OnOffValue),
        'w:lastRow': new OxmlAttr('w:lastRow', OxmlType.OnOffValue),
        'w:firstColumn': new OxmlAttr('w:firstColumn', OxmlType.OnOffValue),
        'w:lastColumn': new OxmlAttr('w:lastColumn', OxmlType.OnOffValue),
        'w:noHBand': new OxmlAttr('w:noHBand', OxmlType.OnOffValue),
        'w:noVBand': new OxmlAttr('w:noVBand', OxmlType.OnOffValue),
    };
    AltChunk._C = {
        'w:altChunkPr': AltChunkProperties,
    };
    AltChunk._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    NumberingRestart._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, RestartNumberValuesArray),
    };
    NumberingStart._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.UInt16Value),
    };
    TableCellMarginDefault._C = {
        'w:top': TopMargin,
        'w:left': TableCellLeftMargin,
        'w:start': StartMargin,
        'w:bottom': BottomMargin,
        'w:right': TableCellRightMargin,
        'w:end': EndMargin,
    };
    TableLayout._D = {
        'w:type': new OxmlAttr('w:type', OxmlType.EnumValue, TableLayoutValuesArray),
    };
    TableBorders._C = {
        'w:top': TopBorder,
        'w:left': LeftBorder,
        'w:start': StartBorder,
        'w:bottom': BottomBorder,
        'w:right': RightBorder,
        'w:end': EndBorder,
        'w:insideH': InsideHorizontalBorder,
        'w:insideV': InsideVerticalBorder,
    };
    TableIndentation._D = {
        'w:w': new OxmlAttr('w:w', OxmlType.Int32Value),
        'w:type': new OxmlAttr('w:type', OxmlType.EnumValue, TableWidthUnitValuesArray),
    };
    UnsignedDecimalNumberMax3Type._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.Int32Value),
    };
    TableOverlap._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, TableOverlapValuesArray),
    };
    TablePositionProperties._D = {
        'w:leftFromText': new OxmlAttr('w:leftFromText', OxmlType.Int16Value),
        'w:rightFromText': new OxmlAttr('w:rightFromText', OxmlType.Int16Value),
        'w:topFromText': new OxmlAttr('w:topFromText', OxmlType.Int16Value),
        'w:bottomFromText': new OxmlAttr('w:bottomFromText', OxmlType.Int16Value),
        'w:vertAnchor': new OxmlAttr('w:vertAnchor', OxmlType.EnumValue, VerticalAnchorValuesArray),
        'w:horzAnchor': new OxmlAttr('w:horzAnchor', OxmlType.EnumValue, HorizontalAnchorValuesArray),
        'w:tblpXSpec': new OxmlAttr('w:tblpXSpec', OxmlType.EnumValue, HorizontalAlignmentValuesArray),
        'w:tblpX': new OxmlAttr('w:tblpX', OxmlType.Int32Value),
        'w:tblpYSpec': new OxmlAttr('w:tblpYSpec', OxmlType.EnumValue, VerticalAlignmentValuesArray),
        'w:tblpY': new OxmlAttr('w:tblpY', OxmlType.Int32Value),
    };
    TableJustification._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, TableRowAlignmentValuesArray),
    };
    TableRowHeight._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.UInt32Value),
        'w:hRule': new OxmlAttr('w:hRule', OxmlType.EnumValue, HeightRuleValuesArray),
    };
    DivId._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    TableCellVerticalAlignment._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, TableVerticalAlignmentValuesArray),
    };
    TableCellMargin._C = {
        'w:top': TopMargin,
        'w:left': LeftMargin,
        'w:start': StartMargin,
        'w:bottom': BottomMargin,
        'w:right': RightMargin,
        'w:end': EndMargin,
    };
    OnOffOnlyType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, OnOffOnlyValuesArray),
    };
    TableCellBorders._C = {
        'w:top': TopBorder,
        'w:left': LeftBorder,
        'w:start': StartBorder,
        'w:bottom': BottomBorder,
        'w:right': RightBorder,
        'w:end': EndBorder,
        'w:insideH': InsideHorizontalBorder,
        'w:insideV': InsideVerticalBorder,
        'w:tl2br': TopLeftToBottomRightCellBorder,
        'w:tr2bl': TopRightToBottomLeftCellBorder,
    };
    VerticalMerge._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, MergedCellValuesArray),
    };
    HorizontalMerge._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, MergedCellValuesArray),
    };
    TableWidthType._D = {
        'w:w': new OxmlAttr('w:w', OxmlType.StringValue),
        'w:type': new OxmlAttr('w:type', OxmlType.EnumValue, TableWidthUnitValuesArray),
    };
    ConditionalFormatStyle._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
        'w:firstRow': new OxmlAttr('w:firstRow', OxmlType.OnOffValue),
        'w:lastRow': new OxmlAttr('w:lastRow', OxmlType.OnOffValue),
        'w:firstColumn': new OxmlAttr('w:firstColumn', OxmlType.OnOffValue),
        'w:lastColumn': new OxmlAttr('w:lastColumn', OxmlType.OnOffValue),
        'w:oddVBand': new OxmlAttr('w:oddVBand', OxmlType.OnOffValue),
        'w:evenVBand': new OxmlAttr('w:evenVBand', OxmlType.OnOffValue),
        'w:oddHBand': new OxmlAttr('w:oddHBand', OxmlType.OnOffValue),
        'w:evenHBand': new OxmlAttr('w:evenHBand', OxmlType.OnOffValue),
        'w:firstRowFirstColumn': new OxmlAttr('w:firstRowFirstColumn', OxmlType.OnOffValue),
        'w:firstRowLastColumn': new OxmlAttr('w:firstRowLastColumn', OxmlType.OnOffValue),
        'w:lastRowFirstColumn': new OxmlAttr('w:lastRowFirstColumn', OxmlType.OnOffValue),
        'w:lastRowLastColumn': new OxmlAttr('w:lastRowLastColumn', OxmlType.OnOffValue),
    };
    RelationshipType._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    BidirectionalEmbedding._C = {
        'w:customXml': CustomXmlRun,
        'w:fldSimple': SimpleField,
        'w:hyperlink': Hyperlink,
        'w:sdt': SdtRun,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
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
        'w:r': Run,
        'w:bdo': BidirectionalOverride,
        'w:dir': BidirectionalEmbedding,
        'w:subDoc': SubDocumentReference,
    };
    BidirectionalEmbedding._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, DirectionValuesArray),
    };
    BidirectionalOverride._C = {
        'w:customXml': CustomXmlRun,
        'w:fldSimple': SimpleField,
        'w:hyperlink': Hyperlink,
        'w:sdt': SdtRun,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
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
        'w:r': Run,
        'w:bdo': BidirectionalOverride,
        'w:dir': BidirectionalEmbedding,
        'w:subDoc': SubDocumentReference,
    };
    BidirectionalOverride._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, DirectionValuesArray),
    };
    Hyperlink._C = {
        'w:customXml': CustomXmlRun,
        'w:fldSimple': SimpleField,
        'w:hyperlink': Hyperlink,
        'w:sdt': SdtRun,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
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
        'w:r': Run,
        'w:bdo': BidirectionalOverride,
        'w:dir': BidirectionalEmbedding,
        'w:subDoc': SubDocumentReference,
    };
    Hyperlink._D = {
        'w:tgtFrame': new OxmlAttr('w:tgtFrame', OxmlType.StringValue),
        'w:tooltip': new OxmlAttr('w:tooltip', OxmlType.StringValue),
        'w:docLocation': new OxmlAttr('w:docLocation', OxmlType.StringValue),
        'w:history': new OxmlAttr('w:history', OxmlType.OnOffValue),
        'w:anchor': new OxmlAttr('w:anchor', OxmlType.StringValue),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    SimpleField._C = {
        'w:fldData': FieldData,
        'w:customXml': CustomXmlRun,
        'w:fldSimple': SimpleField,
        'w:hyperlink': Hyperlink,
        'w:sdt': SdtRun,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
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
        'w:r': Run,
        'w:bdo': BidirectionalOverride,
        'w:dir': BidirectionalEmbedding,
        'w:subDoc': SubDocumentReference,
    };
    SimpleField._D = {
        'w:instr': new OxmlAttr('w:instr', OxmlType.StringValue),
        'w:fldLock': new OxmlAttr('w:fldLock', OxmlType.OnOffValue),
        'w:dirty': new OxmlAttr('w:dirty', OxmlType.OnOffValue),
    };
    CustomXmlRun._C = {
        'w:customXml': CustomXmlRun,
        'w:fldSimple': SimpleField,
        'w:hyperlink': Hyperlink,
        'w:sdt': SdtRun,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
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
        'w:r': Run,
        'w:bdo': BidirectionalOverride,
        'w:dir': BidirectionalEmbedding,
        'w:subDoc': SubDocumentReference,
    };
    SdtCell._C = {
        'w:sdtContent': SdtContentCell,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
    };
    CustomXmlCell._C = {
        'w:tc': TableCell,
        'w:customXml': CustomXmlCell,
        'w:sdt': SdtCell,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
    };
    TableCell._C = {
        'w:tcPr': TableCellProperties,
        'w:altChunk': AltChunk,
        'w:customXml': CustomXmlBlock,
        'w:sdt': SdtBlock,
        'w:p': Paragraph,
        'w:tbl': Table,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
    };
    SdtRow._C = {
        'w:sdtContent': SdtContentRow,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
    };
    CustomXmlRow._C = {
        'w:tr': TableRow,
        'w:customXml': CustomXmlRow,
        'w:sdt': SdtRow,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
    };
    TableRow._C = {
        'w:tblPrEx': TablePropertyExceptions,
        'w:trPr': TableRowProperties,
        'w:tc': TableCell,
        'w:customXml': CustomXmlCell,
        'w:sdt': SdtCell,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
    };
    TableRow._D = {
        'w:rsidRPr': new OxmlAttr('w:rsidRPr', OxmlType.HexBinaryValue),
        'w:rsidR': new OxmlAttr('w:rsidR', OxmlType.HexBinaryValue),
        'w:rsidDel': new OxmlAttr('w:rsidDel', OxmlType.HexBinaryValue),
        'w:rsidTr': new OxmlAttr('w:rsidTr', OxmlType.HexBinaryValue),
        'w14:paraId': new OxmlAttr('w14:paraId', OxmlType.HexBinaryValue),
        'w14:textId': new OxmlAttr('w14:textId', OxmlType.HexBinaryValue),
    };
    Table._C = {
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:tblPr': TableProperties,
        'w:tblGrid': TableGrid,
        'w:tr': TableRow,
        'w:customXml': CustomXmlRow,
        'w:sdt': SdtRow,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
    };
    Paragraph._C = {
        'w:pPr': ParagraphProperties,
        'w:customXml': CustomXmlRun,
        'w:fldSimple': SimpleField,
        'w:hyperlink': Hyperlink,
        'w:sdt': SdtRun,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
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
        'w:r': Run,
        'w:bdo': BidirectionalOverride,
        'w:dir': BidirectionalEmbedding,
        'w:subDoc': SubDocumentReference,
    };
    Paragraph._D = {
        'w:rsidRPr': new OxmlAttr('w:rsidRPr', OxmlType.HexBinaryValue),
        'w:rsidR': new OxmlAttr('w:rsidR', OxmlType.HexBinaryValue),
        'w:rsidDel': new OxmlAttr('w:rsidDel', OxmlType.HexBinaryValue),
        'w:rsidP': new OxmlAttr('w:rsidP', OxmlType.HexBinaryValue),
        'w:rsidRDefault': new OxmlAttr('w:rsidRDefault', OxmlType.HexBinaryValue),
        'w14:paraId': new OxmlAttr('w14:paraId', OxmlType.HexBinaryValue),
        'w14:textId': new OxmlAttr('w14:textId', OxmlType.HexBinaryValue),
        'w14:noSpellErr': new OxmlAttr('w14:noSpellErr', OxmlType.OnOffValue),
    };
    SdtBlock._C = {
        'w:sdtContent': SdtContentBlock,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
    };
    CustomXmlBlock._C = {
        'w:customXml': CustomXmlBlock,
        'w:sdt': SdtBlock,
        'w:p': Paragraph,
        'w:tbl': Table,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
    };
    SdtRun._C = {
        'w:sdtContent': SdtContentRun,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
    };
    ContentPart._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    RunTrackChangeType._C = {
        'w:sdt': SdtRun,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
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
        'w:r': Run,
        'w:bdo': BidirectionalOverride,
        'w:dir': BidirectionalEmbedding,
    };
    RunTrackChangeType._D = {
        'w:author': new OxmlAttr('w:author', OxmlType.StringValue),
        'w:date': new OxmlAttr('w:date', OxmlType.DateTimeValue),
        'w16du:dateUtc': new OxmlAttr('w16du:dateUtc', OxmlType.DateTimeValue),
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    MoveToRun._C = {
        'w:sdt': SdtRun,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
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
        'w:r': Run,
        'w:bdo': BidirectionalOverride,
        'w:dir': BidirectionalEmbedding,
    };
    MoveFromRun._C = {
        'w:sdt': SdtRun,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
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
        'w:r': Run,
        'w:bdo': BidirectionalOverride,
        'w:dir': BidirectionalEmbedding,
    };
    DeletedRun._C = {
        'w:sdt': SdtRun,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
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
        'w:r': Run,
        'w:bdo': BidirectionalOverride,
        'w:dir': BidirectionalEmbedding,
    };
    InsertedRun._C = {
        'w:sdt': SdtRun,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
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
        'w:r': Run,
        'w:bdo': BidirectionalOverride,
        'w:dir': BidirectionalEmbedding,
    };
    PermEnd._D = {
        'w:id': new OxmlAttr('w:id', OxmlType.Int32Value),
        'w:displacedByCustomXml': new OxmlAttr('w:displacedByCustomXml', OxmlType.EnumValue, DisplacedByCustomXmlValuesArray),
    };
    PermStart._D = {
        'w:edGrp': new OxmlAttr('w:edGrp', OxmlType.EnumValue, RangePermissionEditingGroupValuesArray),
        'w:ed': new OxmlAttr('w:ed', OxmlType.StringValue),
        'w:colFirst': new OxmlAttr('w:colFirst', OxmlType.Int32Value),
        'w:colLast': new OxmlAttr('w:colLast', OxmlType.Int32Value),
        'w:id': new OxmlAttr('w:id', OxmlType.Int32Value),
        'w:displacedByCustomXml': new OxmlAttr('w:displacedByCustomXml', OxmlType.EnumValue, DisplacedByCustomXmlValuesArray),
    };
    ProofError._D = {
        'w:type': new OxmlAttr('w:type', OxmlType.EnumValue, ProofingErrorValuesArray),
    };
    SdtRunRuby._C = {
        'w:sdtContent': SdtContentRunRuby,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
    };
    Run._C = {
        'w:rPr': RunProperties,
        'w:br': Break,
        'w:t': Text,
        'w:delText': DeletedText,
        'w:instrText': FieldCode,
        'w:delInstrText': DeletedFieldCode,
        'w:noBreakHyphen': NoBreakHyphen,
        'w:softHyphen': SoftHyphen,
        'w:dayShort': DayShort,
        'w:monthShort': MonthShort,
        'w:yearShort': YearShort,
        'w:dayLong': DayLong,
        'w:monthLong': MonthLong,
        'w:yearLong': YearLong,
        'w:annotationRef': AnnotationReferenceMark,
        'w:footnoteRef': FootnoteReferenceMark,
        'w:endnoteRef': EndnoteReferenceMark,
        'w:separator': SeparatorMark,
        'w:continuationSeparator': ContinuationSeparatorMark,
        'w:sym': SymbolChar,
        'w:pgNum': PageNumber,
        'w:cr': CarriageReturn,
        'w:tab': TabChar,
        'w:object': EmbeddedObject,
        'w:pict': Picture,
        'w:fldChar': FieldChar,
        'w:ruby': Ruby,
        'w:footnoteReference': FootnoteReference,
        'w:endnoteReference': EndnoteReference,
        'w:commentReference': CommentReference,
        'w:drawing': Drawing,
        'w:ptab': PositionalTab,
        'w:lastRenderedPageBreak': LastRenderedPageBreak,
    };
    Run._D = {
        'w:rsidRPr': new OxmlAttr('w:rsidRPr', OxmlType.HexBinaryValue),
        'w:rsidDel': new OxmlAttr('w:rsidDel', OxmlType.HexBinaryValue),
        'w:rsidR': new OxmlAttr('w:rsidR', OxmlType.HexBinaryValue),
    };
    HyperlinkRuby._C = {
        'w:customXml': CustomXmlRuby,
        'w:fldSimple': SimpleFieldRuby,
        'w:hyperlink': HyperlinkRuby,
        'w:r': Run,
        'w:sdt': SdtRunRuby,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
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
    };
    HyperlinkRuby._D = {
        'w:tgtFrame': new OxmlAttr('w:tgtFrame', OxmlType.StringValue),
        'w:tooltip': new OxmlAttr('w:tooltip', OxmlType.StringValue),
        'w:docLocation': new OxmlAttr('w:docLocation', OxmlType.StringValue),
        'w:history': new OxmlAttr('w:history', OxmlType.OnOffValue),
        'w:anchor': new OxmlAttr('w:anchor', OxmlType.StringValue),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    SimpleFieldRuby._C = {
        'w:fldData': FieldData,
        'w:customXml': CustomXmlRuby,
        'w:fldSimple': SimpleFieldRuby,
        'w:hyperlink': HyperlinkRuby,
        'w:r': Run,
        'w:sdt': SdtRunRuby,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
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
    };
    SimpleFieldRuby._D = {
        'w:instr': new OxmlAttr('w:instr', OxmlType.StringValue),
        'w:fldLock': new OxmlAttr('w:fldLock', OxmlType.OnOffValue),
        'w:dirty': new OxmlAttr('w:dirty', OxmlType.OnOffValue),
    };
    CustomXmlRuby._C = {
        'w:customXml': CustomXmlRuby,
        'w:fldSimple': SimpleFieldRuby,
        'w:hyperlink': HyperlinkRuby,
        'w:r': Run,
        'w:sdt': SdtRunRuby,
        'w:proofErr': ProofError,
        'w:permStart': PermStart,
        'w:permEnd': PermEnd,
        'w:bookmarkStart': BookmarkStart,
        'w:bookmarkEnd': BookmarkEnd,
        'w:commentRangeStart': CommentRangeStart,
        'w:commentRangeEnd': CommentRangeEnd,
        'w:moveFromRangeStart': MoveFromRangeStart,
        'w:moveFromRangeEnd': MoveFromRangeEnd,
        'w:moveToRangeStart': MoveToRangeStart,
        'w:moveToRangeEnd': MoveToRangeEnd,
        'w:customXmlInsRangeStart': CustomXmlInsRangeStart,
        'w:customXmlInsRangeEnd': CustomXmlInsRangeEnd,
        'w:customXmlDelRangeStart': CustomXmlDelRangeStart,
        'w:customXmlDelRangeEnd': CustomXmlDelRangeEnd,
        'w:customXmlMoveFromRangeStart': CustomXmlMoveFromRangeStart,
        'w:customXmlMoveFromRangeEnd': CustomXmlMoveFromRangeEnd,
        'w:customXmlMoveToRangeStart': CustomXmlMoveToRangeStart,
        'w:customXmlMoveToRangeEnd': CustomXmlMoveToRangeEnd,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w:ins': InsertedRun,
        'w:del': DeletedRun,
        'w:moveFrom': MoveFromRun,
        'w:moveTo': MoveToRun,
        'w:contentPart': ContentPart,
        'w14:conflictIns': W14RunConflictInsertion,
        'w14:conflictDel': W14RunConflictDeletion,
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
    };
    MathControlMoveType._C = {
        'w:rPr': RunProperties,
        'w:ins': InsertedMathControl,
        'w:del': DeletedMathControl,
    };
    MathControlMoveType._D = {
        'w:author': new OxmlAttr('w:author', OxmlType.StringValue),
        'w:date': new OxmlAttr('w:date', OxmlType.DateTimeValue),
        'w16du:dateUtc': new OxmlAttr('w16du:dateUtc', OxmlType.DateTimeValue),
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    MoveToMathControl._C = {
        'w:rPr': RunProperties,
        'w:ins': InsertedMathControl,
        'w:del': DeletedMathControl,
    };
    MoveFromMathControl._C = {
        'w:rPr': RunProperties,
        'w:ins': InsertedMathControl,
        'w:del': DeletedMathControl,
    };
    DeletedMathControl._C = {
        'w:rPr': RunProperties,
    };
    DeletedMathControl._D = {
        'w:author': new OxmlAttr('w:author', OxmlType.StringValue),
        'w:date': new OxmlAttr('w:date', OxmlType.DateTimeValue),
        'w16du:dateUtc': new OxmlAttr('w16du:dateUtc', OxmlType.DateTimeValue),
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    InsertedMathControl._C = {
        'w:rPr': RunProperties,
        'w:del': DeletedMathControl,
    };
    InsertedMathControl._D = {
        'w:author': new OxmlAttr('w:author', OxmlType.StringValue),
        'w:date': new OxmlAttr('w:date', OxmlType.DateTimeValue),
        'w16du:dateUtc': new OxmlAttr('w16du:dateUtc', OxmlType.DateTimeValue),
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    RunProperties._C = {
        'w:rStyle': RunStyle,
        'w:rFonts': RunFonts,
        'w:b': Bold,
        'w:bCs': BoldComplexScript,
        'w:i': Italic,
        'w:iCs': ItalicComplexScript,
        'w:caps': Caps,
        'w:smallCaps': SmallCaps,
        'w:strike': Strike,
        'w:dstrike': DoubleStrike,
        'w:outline': Outline,
        'w:shadow': Shadow,
        'w:emboss': Emboss,
        'w:imprint': Imprint,
        'w:noProof': NoProof,
        'w:snapToGrid': SnapToGrid,
        'w:vanish': Vanish,
        'w:webHidden': WebHidden,
        'w:color': Color,
        'w:spacing': Spacing,
        'w:w': CharacterScale,
        'w:kern': Kern,
        'w:position': Position,
        'w:sz': FontSize,
        'w:szCs': FontSizeComplexScript,
        'w:highlight': Highlight,
        'w:u': Underline,
        'w:effect': TextEffect,
        'w:bdr': Border,
        'w:shd': Shading,
        'w:fitText': FitText,
        'w:vertAlign': VerticalTextAlignment,
        'w:rtl': RightToLeftText,
        'w:cs': ComplexScript,
        'w:em': Emphasis,
        'w:lang': Languages,
        'w:eastAsianLayout': EastAsianLayout,
        'w:specVanish': SpecVanish,
        'w14:glow': W14Glow,
        'w14:shadow': W14Shadow,
        'w14:reflection': W14Reflection,
        'w14:textOutline': W14TextOutlineEffect,
        'w14:textFill': W14FillTextEffect,
        'w14:scene3d': W14Scene3D,
        'w14:props3d': W14Properties3D,
        'w14:ligatures': W14Ligatures,
        'w14:numForm': W14NumberingFormat,
        'w14:numSpacing': W14NumberSpacing,
        'w14:stylisticSets': W14StylisticSets,
        'w14:cntxtAlts': W14ContextualAlternatives,
        'w:rPrChange': RunPropertiesChange,
    };
    RunPropertiesChange._C = {
        'w:rPr': PreviousRunProperties,
    };
    RunPropertiesChange._D = {
        'w:author': new OxmlAttr('w:author', OxmlType.StringValue),
        'w:date': new OxmlAttr('w:date', OxmlType.DateTimeValue),
        'w16du:dateUtc': new OxmlAttr('w16du:dateUtc', OxmlType.DateTimeValue),
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    EastAsianLayout._D = {
        'w:id': new OxmlAttr('w:id', OxmlType.Int32Value),
        'w:combine': new OxmlAttr('w:combine', OxmlType.OnOffValue),
        'w:combineBrackets': new OxmlAttr('w:combineBrackets', OxmlType.EnumValue, CombineBracketValuesArray),
        'w:vert': new OxmlAttr('w:vert', OxmlType.OnOffValue),
        'w:vertCompress': new OxmlAttr('w:vertCompress', OxmlType.OnOffValue),
    };
    LanguageType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
        'w:eastAsia': new OxmlAttr('w:eastAsia', OxmlType.StringValue),
        'w:bidi': new OxmlAttr('w:bidi', OxmlType.StringValue),
    };
    Emphasis._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, EmphasisMarkValuesArray),
    };
    VerticalTextAlignment._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, VerticalPositionValuesArray),
    };
    FitText._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.UInt32Value),
        'w:id': new OxmlAttr('w:id', OxmlType.Int32Value),
    };
    BorderType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, BorderValuesArray),
        'w:color': new OxmlAttr('w:color', OxmlType.StringValue),
        'w:themeColor': new OxmlAttr('w:themeColor', OxmlType.EnumValue, ThemeColorValuesArray),
        'w:themeTint': new OxmlAttr('w:themeTint', OxmlType.StringValue),
        'w:themeShade': new OxmlAttr('w:themeShade', OxmlType.StringValue),
        'w:sz': new OxmlAttr('w:sz', OxmlType.UInt32Value),
        'w:space': new OxmlAttr('w:space', OxmlType.UInt32Value),
        'w:shadow': new OxmlAttr('w:shadow', OxmlType.OnOffValue),
        'w:frame': new OxmlAttr('w:frame', OxmlType.OnOffValue),
    };
    TextEffect._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, TextEffectValuesArray),
    };
    Underline._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, UnderlineValuesArray),
        'w:color': new OxmlAttr('w:color', OxmlType.StringValue),
        'w:themeColor': new OxmlAttr('w:themeColor', OxmlType.EnumValue, ThemeColorValuesArray),
        'w:themeTint': new OxmlAttr('w:themeTint', OxmlType.StringValue),
        'w:themeShade': new OxmlAttr('w:themeShade', OxmlType.StringValue),
    };
    Highlight._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, HighlightColorValuesArray),
    };
    HpsMeasureType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    Position._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    Kern._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.UInt32Value),
    };
    CharacterScale._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.IntegerValue),
    };
    Spacing._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.Int32Value),
    };
    Color._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
        'w:themeColor': new OxmlAttr('w:themeColor', OxmlType.EnumValue, ThemeColorValuesArray),
        'w:themeTint': new OxmlAttr('w:themeTint', OxmlType.StringValue),
        'w:themeShade': new OxmlAttr('w:themeShade', OxmlType.StringValue),
    };
    RunFonts._D = {
        'w:hint': new OxmlAttr('w:hint', OxmlType.EnumValue, FontTypeHintValuesArray),
        'w:ascii': new OxmlAttr('w:ascii', OxmlType.StringValue),
        'w:hAnsi': new OxmlAttr('w:hAnsi', OxmlType.StringValue),
        'w:eastAsia': new OxmlAttr('w:eastAsia', OxmlType.StringValue),
        'w:cs': new OxmlAttr('w:cs', OxmlType.StringValue),
        'w:asciiTheme': new OxmlAttr('w:asciiTheme', OxmlType.EnumValue, ThemeFontValuesArray),
        'w:hAnsiTheme': new OxmlAttr('w:hAnsiTheme', OxmlType.EnumValue, ThemeFontValuesArray),
        'w:eastAsiaTheme': new OxmlAttr('w:eastAsiaTheme', OxmlType.EnumValue, ThemeFontValuesArray),
        'w:cstheme': new OxmlAttr('w:cstheme', OxmlType.EnumValue, ThemeFontValuesArray),
    };
    String253Type._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    PositionalTab._D = {
        'w:alignment': new OxmlAttr('w:alignment', OxmlType.EnumValue, AbsolutePositionTabAlignmentValuesArray),
        'w:relativeTo': new OxmlAttr('w:relativeTo', OxmlType.EnumValue, AbsolutePositionTabPositioningBaseValuesArray),
        'w:leader': new OxmlAttr('w:leader', OxmlType.EnumValue, AbsolutePositionTabLeaderCharValuesArray),
    };
    Drawing._C = {
        'wp:anchor': WpAnchor,
        'wp:inline': WpInline,
    };
    FootnoteEndnoteReferenceType._D = {
        'w:customMarkFollows': new OxmlAttr('w:customMarkFollows', OxmlType.OnOffValue),
        'w:id': new OxmlAttr('w:id', OxmlType.IntegerValue),
    };
    Ruby._C = {
        'w:rubyPr': RubyProperties,
        'w:rt': RubyContent,
        'w:rubyBase': RubyBase,
    };
    FieldChar._C = {
        'w:fldData': FieldData,
        'w:ffData': FormFieldData,
        'w:numberingChange': NumberingChange,
    };
    FieldChar._D = {
        'w:fldCharType': new OxmlAttr('w:fldCharType', OxmlType.EnumValue, FieldCharValuesArray),
        'w:fldLock': new OxmlAttr('w:fldLock', OxmlType.OnOffValue),
        'w:dirty': new OxmlAttr('w:dirty', OxmlType.OnOffValue),
    };
    Picture._C = {
        'v:group': VGroup,
        'v:image': VImageFile,
        'v:line': VLine,
        'v:oval': VOval,
        'v:polyline': VPolyLine,
        'v:rect': VRectangle,
        'v:roundrect': VRoundRectangle,
        'v:shape': VShape,
        'v:shapetype': VShapetype,
        'v:arc': VArc,
        'v:curve': VCurve,
        'o:OLEObject': OOleObject,
        'w:movie': MovieReference,
        'w:control': Control,
    };
    Picture._D = {
        'w14:anchorId': new OxmlAttr('w14:anchorId', OxmlType.HexBinaryValue),
    };
    EmbeddedObject._C = {
        'v:group': VGroup,
        'v:image': VImageFile,
        'v:line': VLine,
        'v:oval': VOval,
        'v:polyline': VPolyLine,
        'v:rect': VRectangle,
        'v:roundrect': VRoundRectangle,
        'v:shape': VShape,
        'v:shapetype': VShapetype,
        'v:arc': VArc,
        'v:curve': VCurve,
        'o:OLEObject': OOleObject,
        'w:drawing': Drawing,
        'w:control': Control,
        'w:objectEmbed': ObjectEmbed,
        'w:objectLink': ObjectLink,
    };
    EmbeddedObject._D = {
        'w:dxaOrig': new OxmlAttr('w:dxaOrig', OxmlType.StringValue),
        'w:dyaOrig': new OxmlAttr('w:dyaOrig', OxmlType.StringValue),
        'w14:anchorId': new OxmlAttr('w14:anchorId', OxmlType.HexBinaryValue),
    };
    SymbolChar._D = {
        'w:font': new OxmlAttr('w:font', OxmlType.StringValue),
        'w:char': new OxmlAttr('w:char', OxmlType.HexBinaryValue),
    };
    TextType._D = {
        'xml:space': new OxmlAttr('xml:space', OxmlType.EnumValue, SpaceProcessingModeValuesArray),
    };
    Break._D = {
        'w:type': new OxmlAttr('w:type', OxmlType.EnumValue, BreakValuesArray),
        'w:clear': new OxmlAttr('w:clear', OxmlType.EnumValue, BreakTextRestartLocationValuesArray),
    };
    HeaderFooterReferenceType._D = {
        'w:type': new OxmlAttr('w:type', OxmlType.EnumValue, HeaderFooterValuesArray),
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
    };
    ParagraphPropertiesChange._C = {
        'w:pPr': ParagraphPropertiesExtended,
    };
    ParagraphPropertiesChange._D = {
        'w:author': new OxmlAttr('w:author', OxmlType.StringValue),
        'w:date': new OxmlAttr('w:date', OxmlType.DateTimeValue),
        'w16du:dateUtc': new OxmlAttr('w16du:dateUtc', OxmlType.DateTimeValue),
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    DecimalNumberType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.Int32Value),
    };
    TextBoxTightWrap._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, TextBoxTightWrapValuesArray),
    };
    TextAlignment._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, VerticalTextAlignmentValuesArray),
    };
    TextDirection._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, TextDirectionValuesArray),
    };
    Justification._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, JustificationValuesArray),
    };
    Indentation._D = {
        'w:left': new OxmlAttr('w:left', OxmlType.StringValue),
        'w:start': new OxmlAttr('w:start', OxmlType.StringValue),
        'w:leftChars': new OxmlAttr('w:leftChars', OxmlType.Int32Value),
        'w:startChars': new OxmlAttr('w:startChars', OxmlType.Int32Value),
        'w:right': new OxmlAttr('w:right', OxmlType.StringValue),
        'w:end': new OxmlAttr('w:end', OxmlType.StringValue),
        'w:rightChars': new OxmlAttr('w:rightChars', OxmlType.Int32Value),
        'w:endChars': new OxmlAttr('w:endChars', OxmlType.Int32Value),
        'w:hanging': new OxmlAttr('w:hanging', OxmlType.StringValue),
        'w:hangingChars': new OxmlAttr('w:hangingChars', OxmlType.Int32Value),
        'w:firstLine': new OxmlAttr('w:firstLine', OxmlType.StringValue),
        'w:firstLineChars': new OxmlAttr('w:firstLineChars', OxmlType.Int32Value),
    };
    SpacingBetweenLines._D = {
        'w:before': new OxmlAttr('w:before', OxmlType.StringValue),
        'w:beforeLines': new OxmlAttr('w:beforeLines', OxmlType.Int32Value),
        'w:beforeAutospacing': new OxmlAttr('w:beforeAutospacing', OxmlType.OnOffValue),
        'w:after': new OxmlAttr('w:after', OxmlType.StringValue),
        'w:afterLines': new OxmlAttr('w:afterLines', OxmlType.Int32Value),
        'w:afterAutospacing': new OxmlAttr('w:afterAutospacing', OxmlType.OnOffValue),
        'w:line': new OxmlAttr('w:line', OxmlType.StringValue),
        'w:lineRule': new OxmlAttr('w:lineRule', OxmlType.EnumValue, LineSpacingRuleValuesArray),
    };
    Tabs._C = {
        'w:tab': TabStop,
    };
    Shading._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.EnumValue, ShadingPatternValuesArray),
        'w:color': new OxmlAttr('w:color', OxmlType.StringValue),
        'w:themeColor': new OxmlAttr('w:themeColor', OxmlType.EnumValue, ThemeColorValuesArray),
        'w:themeTint': new OxmlAttr('w:themeTint', OxmlType.StringValue),
        'w:themeShade': new OxmlAttr('w:themeShade', OxmlType.StringValue),
        'w:fill': new OxmlAttr('w:fill', OxmlType.StringValue),
        'w:themeFill': new OxmlAttr('w:themeFill', OxmlType.EnumValue, ThemeColorValuesArray),
        'w:themeFillTint': new OxmlAttr('w:themeFillTint', OxmlType.StringValue),
        'w:themeFillShade': new OxmlAttr('w:themeFillShade', OxmlType.StringValue),
    };
    ParagraphBorders._C = {
        'w:top': TopBorder,
        'w:left': LeftBorder,
        'w:bottom': BottomBorder,
        'w:right': RightBorder,
        'w:between': BetweenBorder,
        'w:bar': BarBorder,
    };
    NumberingProperties._C = {
        'w:ilvl': NumberingLevelReference,
        'w:numId': NumberingId,
        'w:numberingChange': NumberingChange,
        'w:ins': Inserted,
    };
    FrameProperties._D = {
        'w:dropCap': new OxmlAttr('w:dropCap', OxmlType.EnumValue, DropCapLocationValuesArray),
        'w:lines': new OxmlAttr('w:lines', OxmlType.Int32Value),
        'w:w': new OxmlAttr('w:w', OxmlType.StringValue),
        'w:h': new OxmlAttr('w:h', OxmlType.UInt32Value),
        'w:vSpace': new OxmlAttr('w:vSpace', OxmlType.StringValue),
        'w:hSpace': new OxmlAttr('w:hSpace', OxmlType.StringValue),
        'w:wrap': new OxmlAttr('w:wrap', OxmlType.EnumValue, TextWrappingValuesArray),
        'w:hAnchor': new OxmlAttr('w:hAnchor', OxmlType.EnumValue, HorizontalAnchorValuesArray),
        'w:vAnchor': new OxmlAttr('w:vAnchor', OxmlType.EnumValue, VerticalAnchorValuesArray),
        'w:x': new OxmlAttr('w:x', OxmlType.StringValue),
        'w:xAlign': new OxmlAttr('w:xAlign', OxmlType.EnumValue, HorizontalAlignmentValuesArray),
        'w:y': new OxmlAttr('w:y', OxmlType.StringValue),
        'w:yAlign': new OxmlAttr('w:yAlign', OxmlType.EnumValue, VerticalAlignmentValuesArray),
        'w:hRule': new OxmlAttr('w:hRule', OxmlType.EnumValue, HeightRuleValuesArray),
        'w:anchorLock': new OxmlAttr('w:anchorLock', OxmlType.OnOffValue),
    };
    OnOffType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.OnOffValue),
    };
    StringType._D = {
        'w:val': new OxmlAttr('w:val', OxmlType.StringValue),
    };
    MarkupType._D = {
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    MoveBookmarkType._D = {
        'w:author': new OxmlAttr('w:author', OxmlType.StringValue),
        'w:date': new OxmlAttr('w:date', OxmlType.DateTimeValue),
        'w:name': new OxmlAttr('w:name', OxmlType.StringValue),
        'w:colFirst': new OxmlAttr('w:colFirst', OxmlType.Int32Value),
        'w:colLast': new OxmlAttr('w:colLast', OxmlType.Int32Value),
        'w:displacedByCustomXml': new OxmlAttr('w:displacedByCustomXml', OxmlType.EnumValue, DisplacedByCustomXmlValuesArray),
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    MarkupRangeType._D = {
        'w:displacedByCustomXml': new OxmlAttr('w:displacedByCustomXml', OxmlType.EnumValue, DisplacedByCustomXmlValuesArray),
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    BookmarkStart._D = {
        'w:name': new OxmlAttr('w:name', OxmlType.StringValue),
        'w:colFirst': new OxmlAttr('w:colFirst', OxmlType.Int32Value),
        'w:colLast': new OxmlAttr('w:colLast', OxmlType.Int32Value),
        'w:displacedByCustomXml': new OxmlAttr('w:displacedByCustomXml', OxmlType.EnumValue, DisplacedByCustomXmlValuesArray),
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    CellMerge._D = {
        'w:vMerge': new OxmlAttr('w:vMerge', OxmlType.EnumValue, VerticalMergeRevisionValuesArray),
        'w:vMergeOrig': new OxmlAttr('w:vMergeOrig', OxmlType.EnumValue, VerticalMergeRevisionValuesArray),
        'w:author': new OxmlAttr('w:author', OxmlType.StringValue),
        'w:date': new OxmlAttr('w:date', OxmlType.DateTimeValue),
        'w16du:dateUtc': new OxmlAttr('w16du:dateUtc', OxmlType.DateTimeValue),
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    TrackChangeType._D = {
        'w:author': new OxmlAttr('w:author', OxmlType.StringValue),
        'w:date': new OxmlAttr('w:date', OxmlType.DateTimeValue),
        'w16du:dateUtc': new OxmlAttr('w16du:dateUtc', OxmlType.DateTimeValue),
        'w:id': new OxmlAttr('w:id', OxmlType.StringValue),
    };
    return {
        prefix: 'w',
        xmlns: 'http://schemas.openxmlformats.org/wordprocessingml/2006/main',
    };
}
