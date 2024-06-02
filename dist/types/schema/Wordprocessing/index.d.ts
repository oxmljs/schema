import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlLeafTextElement } from '../../framework/OxmlLeafTextElement';
import { OxmlPartRootElement } from '../../framework/OxmlPartRootElement';
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
import { SpaceProcessingModeValues } from '..';
import { Group as VGroup } from '../Vml';
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
export declare enum OnOffOnlyValues {
    /** undefined. Serialized value: `on` */
    On = "on",
    /** undefined. Serialized value: `off` */
    Off = "off"
}
export declare const OnOffOnlyValuesArray: readonly [OnOffOnlyValues.On, OnOffOnlyValues.Off];
export declare enum HighlightColorValues {
    /** Black Highlighting Color. Serialized value: `black` */
    Black = "black",
    /** Blue Highlighting Color. Serialized value: `blue` */
    Blue = "blue",
    /** Cyan Highlighting Color. Serialized value: `cyan` */
    Cyan = "cyan",
    /** Green Highlighting Color. Serialized value: `green` */
    Green = "green",
    /** Magenta Highlighting Color. Serialized value: `magenta` */
    Magenta = "magenta",
    /** Red Highlighting Color. Serialized value: `red` */
    Red = "red",
    /** Yellow Highlighting Color. Serialized value: `yellow` */
    Yellow = "yellow",
    /** White Highlighting Color. Serialized value: `white` */
    White = "white",
    /** Dark Blue Highlighting Color. Serialized value: `darkBlue` */
    DarkBlue = "darkBlue",
    /** Dark Cyan Highlighting Color. Serialized value: `darkCyan` */
    DarkCyan = "darkCyan",
    /** Dark Green Highlighting Color. Serialized value: `darkGreen` */
    DarkGreen = "darkGreen",
    /** Dark Magenta Highlighting Color. Serialized value: `darkMagenta` */
    DarkMagenta = "darkMagenta",
    /** Dark Red Highlighting Color. Serialized value: `darkRed` */
    DarkRed = "darkRed",
    /** Dark Yellow Highlighting Color. Serialized value: `darkYellow` */
    DarkYellow = "darkYellow",
    /** Dark Gray Highlighting Color. Serialized value: `darkGray` */
    DarkGray = "darkGray",
    /** Light Gray Highlighting Color. Serialized value: `lightGray` */
    LightGray = "lightGray",
    /** No Text Highlighting. Serialized value: `none` */
    None = "none"
}
export declare const HighlightColorValuesArray: readonly [HighlightColorValues.Black, HighlightColorValues.Blue, HighlightColorValues.Cyan, HighlightColorValues.Green, HighlightColorValues.Magenta, HighlightColorValues.Red, HighlightColorValues.Yellow, HighlightColorValues.White, HighlightColorValues.DarkBlue, HighlightColorValues.DarkCyan, HighlightColorValues.DarkGreen, HighlightColorValues.DarkMagenta, HighlightColorValues.DarkRed, HighlightColorValues.DarkYellow, HighlightColorValues.DarkGray, HighlightColorValues.LightGray, HighlightColorValues.None];
export declare enum AutomaticColorValues {
    /** Automatically Determined Color. Serialized value: `auto` */
    Auto = "auto"
}
export declare const AutomaticColorValuesArray: readonly [AutomaticColorValues];
export declare enum UnderlineValues {
    /** Single Underline. Serialized value: `single` */
    Single = "single",
    /** Underline Non-Space Characters Only. Serialized value: `words` */
    Words = "words",
    /** Double Underline. Serialized value: `double` */
    Double = "double",
    /** Thick Underline. Serialized value: `thick` */
    Thick = "thick",
    /** Dotted Underline. Serialized value: `dotted` */
    Dotted = "dotted",
    /** Thick Dotted Underline. Serialized value: `dottedHeavy` */
    DottedHeavy = "dottedHeavy",
    /** Dashed Underline. Serialized value: `dash` */
    Dash = "dash",
    /** Thick Dashed Underline. Serialized value: `dashedHeavy` */
    DashedHeavy = "dashedHeavy",
    /** Long Dashed Underline. Serialized value: `dashLong` */
    DashLong = "dashLong",
    /** Thick Long Dashed Underline. Serialized value: `dashLongHeavy` */
    DashLongHeavy = "dashLongHeavy",
    /** Dash-Dot Underline. Serialized value: `dotDash` */
    DotDash = "dotDash",
    /** Thick Dash-Dot Underline. Serialized value: `dashDotHeavy` */
    DashDotHeavy = "dashDotHeavy",
    /** Dash-Dot-Dot Underline. Serialized value: `dotDotDash` */
    DotDotDash = "dotDotDash",
    /** Thick Dash-Dot-Dot Underline. Serialized value: `dashDotDotHeavy` */
    DashDotDotHeavy = "dashDotDotHeavy",
    /** Wave Underline. Serialized value: `wave` */
    Wave = "wave",
    /** Heavy Wave Underline. Serialized value: `wavyHeavy` */
    WavyHeavy = "wavyHeavy",
    /** Double Wave Underline. Serialized value: `wavyDouble` */
    WavyDouble = "wavyDouble",
    /** No Underline. Serialized value: `none` */
    None = "none"
}
export declare const UnderlineValuesArray: readonly [UnderlineValues.Single, UnderlineValues.Words, UnderlineValues.Double, UnderlineValues.Thick, UnderlineValues.Dotted, UnderlineValues.DottedHeavy, UnderlineValues.Dash, UnderlineValues.DashedHeavy, UnderlineValues.DashLong, UnderlineValues.DashLongHeavy, UnderlineValues.DotDash, UnderlineValues.DashDotHeavy, UnderlineValues.DotDotDash, UnderlineValues.DashDotDotHeavy, UnderlineValues.Wave, UnderlineValues.WavyHeavy, UnderlineValues.WavyDouble, UnderlineValues.None];
export declare enum TextEffectValues {
    /** Blinking Background Animation. Serialized value: `blinkBackground` */
    BlinkBackground = "blinkBackground",
    /** Colored Lights Animation. Serialized value: `lights` */
    Lights = "lights",
    /** Black Dashed Line Animation. Serialized value: `antsBlack` */
    AntsBlack = "antsBlack",
    /** Marching Red Ants. Serialized value: `antsRed` */
    AntsRed = "antsRed",
    /** Shimmer Animation. Serialized value: `shimmer` */
    Shimmer = "shimmer",
    /** Sparkling Lights Animation. Serialized value: `sparkle` */
    Sparkle = "sparkle",
    /** No Animation. Serialized value: `none` */
    None = "none"
}
export declare const TextEffectValuesArray: readonly [TextEffectValues.BlinkBackground, TextEffectValues.Lights, TextEffectValues.AntsBlack, TextEffectValues.AntsRed, TextEffectValues.Shimmer, TextEffectValues.Sparkle, TextEffectValues.None];
export declare enum VerticalPositionValues {
    /** Regular Vertical Positioning. Serialized value: `baseline` */
    Baseline = "baseline",
    /** Superscript. Serialized value: `superscript` */
    Superscript = "superscript",
    /** Subscript. Serialized value: `subscript` */
    Subscript = "subscript"
}
export declare const VerticalPositionValuesArray: readonly [VerticalPositionValues.Baseline, VerticalPositionValues.Superscript, VerticalPositionValues.Subscript];
export declare enum EmphasisMarkValues {
    /** No Emphasis Mark. Serialized value: `none` */
    None = "none",
    /** Dot Emphasis Mark Above Characters. Serialized value: `dot` */
    Dot = "dot",
    /** Comma Emphasis Mark Above Characters. Serialized value: `comma` */
    Comma = "comma",
    /** Circle Emphasis Mark Above Characters. Serialized value: `circle` */
    Circle = "circle",
    /** Dot Emphasis Mark Below Characters. Serialized value: `underDot` */
    UnderDot = "underDot"
}
export declare const EmphasisMarkValuesArray: readonly [EmphasisMarkValues.None, EmphasisMarkValues.Dot, EmphasisMarkValues.Comma, EmphasisMarkValues.Circle, EmphasisMarkValues.UnderDot];
export declare enum CombineBracketValues {
    /** No Enclosing Brackets. Serialized value: `none` */
    None = "none",
    /** Round Brackets. Serialized value: `round` */
    Round = "round",
    /** Square Brackets. Serialized value: `square` */
    Square = "square",
    /** Angle Brackets. Serialized value: `angle` */
    Angle = "angle",
    /** Curly Brackets. Serialized value: `curly` */
    Curly = "curly"
}
export declare const CombineBracketValuesArray: readonly [CombineBracketValues.None, CombineBracketValues.Round, CombineBracketValues.Square, CombineBracketValues.Angle, CombineBracketValues.Curly];
export declare enum HorizontalAlignmentValues {
    /** Left Aligned Horizontally. Serialized value: `left` */
    Left = "left",
    /** Centered Horizontally. Serialized value: `center` */
    Center = "center",
    /** Right Aligned Horizontally. Serialized value: `right` */
    Right = "right",
    /** Inside. Serialized value: `inside` */
    Inside = "inside",
    /** Outside. Serialized value: `outside` */
    Outside = "outside"
}
export declare const HorizontalAlignmentValuesArray: readonly [HorizontalAlignmentValues.Left, HorizontalAlignmentValues.Center, HorizontalAlignmentValues.Right, HorizontalAlignmentValues.Inside, HorizontalAlignmentValues.Outside];
export declare enum VerticalAlignmentValues {
    /** In line With Text. Serialized value: `inline` */
    Inline = "inline",
    /** Top. Serialized value: `top` */
    Top = "top",
    /** Centered Vertically. Serialized value: `center` */
    Center = "center",
    /** Bottom. Serialized value: `bottom` */
    Bottom = "bottom",
    /** Inside Anchor Extents. Serialized value: `inside` */
    Inside = "inside",
    /** Outside Anchor Extents. Serialized value: `outside` */
    Outside = "outside"
}
export declare const VerticalAlignmentValuesArray: readonly [VerticalAlignmentValues.Inline, VerticalAlignmentValues.Top, VerticalAlignmentValues.Center, VerticalAlignmentValues.Bottom, VerticalAlignmentValues.Inside, VerticalAlignmentValues.Outside];
export declare enum HeightRuleValues {
    /** Determine Height Based On Contents. Serialized value: `auto` */
    Auto = "auto",
    /** Exact Height. Serialized value: `exact` */
    Exact = "exact",
    /** Minimum Height. Serialized value: `atLeast` */
    AtLeast = "atLeast"
}
export declare const HeightRuleValuesArray: readonly [HeightRuleValues.Auto, HeightRuleValues.Exact, HeightRuleValues.AtLeast];
export declare enum TextWrappingValues {
    /** Default Text Wrapping Around Frame. Serialized value: `auto` */
    Auto = "auto",
    /** No Text Wrapping Beside Frame. Serialized value: `notBeside` */
    NotBeside = "notBeside",
    /** Allow Text Wrapping Around Frame. Serialized value: `around` */
    Around = "around",
    /** Tight Text Wrapping Around Frame. Serialized value: `tight` */
    Tight = "tight",
    /** Through Text Wrapping Around Frame. Serialized value: `through` */
    Through = "through",
    /** No Text Wrapping Around Frame. Serialized value: `none` */
    None = "none"
}
export declare const TextWrappingValuesArray: readonly [TextWrappingValues.Auto, TextWrappingValues.NotBeside, TextWrappingValues.Around, TextWrappingValues.Tight, TextWrappingValues.Through, TextWrappingValues.None];
export declare enum VerticalAnchorValues {
    /** Relative To Vertical Text Extents. Serialized value: `text` */
    Text = "text",
    /** Relative To Margin. Serialized value: `margin` */
    Margin = "margin",
    /** Relative To Page. Serialized value: `page` */
    Page = "page"
}
export declare const VerticalAnchorValuesArray: readonly [VerticalAnchorValues.Text, VerticalAnchorValues.Margin, VerticalAnchorValues.Page];
export declare enum HorizontalAnchorValues {
    /** Relative to Text Extents. Serialized value: `text` */
    Text = "text",
    /** Relative To Margin. Serialized value: `margin` */
    Margin = "margin",
    /** Relative to Page. Serialized value: `page` */
    Page = "page"
}
export declare const HorizontalAnchorValuesArray: readonly [HorizontalAnchorValues.Text, HorizontalAnchorValues.Margin, HorizontalAnchorValues.Page];
export declare enum DropCapLocationValues {
    /** Not Drop Cap. Serialized value: `none` */
    None = "none",
    /** Drop Cap Inside Margin. Serialized value: `drop` */
    Drop = "drop",
    /** Drop Cap Outside Margin. Serialized value: `margin` */
    Margin = "margin"
}
export declare const DropCapLocationValuesArray: readonly [DropCapLocationValues.None, DropCapLocationValues.Drop, DropCapLocationValues.Margin];
export declare enum TabStopLeaderCharValues {
    /** No tab stop leader. Serialized value: `none` */
    None = "none",
    /** Dotted leader line. Serialized value: `dot` */
    Dot = "dot",
    /** Dashed tab stop leader line. Serialized value: `hyphen` */
    Hyphen = "hyphen",
    /** Solid leader line. Serialized value: `underscore` */
    Underscore = "underscore",
    /** Heavy solid leader line. Serialized value: `heavy` */
    Heavy = "heavy",
    /** Middle dot leader line. Serialized value: `middleDot` */
    MiddleDot = "middleDot"
}
export declare const TabStopLeaderCharValuesArray: readonly [TabStopLeaderCharValues.None, TabStopLeaderCharValues.Dot, TabStopLeaderCharValues.Hyphen, TabStopLeaderCharValues.Underscore, TabStopLeaderCharValues.Heavy, TabStopLeaderCharValues.MiddleDot];
export declare enum LineSpacingRuleValues {
    /** Automatically Determined Line Height. Serialized value: `auto` */
    Auto = "auto",
    /** Exact Line Height. Serialized value: `exact` */
    Exact = "exact",
    /** Minimum Line Height. Serialized value: `atLeast` */
    AtLeast = "atLeast"
}
export declare const LineSpacingRuleValuesArray: readonly [LineSpacingRuleValues.Auto, LineSpacingRuleValues.Exact, LineSpacingRuleValues.AtLeast];
export declare enum TableRowAlignmentValues {
    /** undefined. Serialized value: `left` */
    Left = "left",
    /** undefined. Serialized value: `center` */
    Center = "center",
    /** undefined. Serialized value: `right` */
    Right = "right"
}
export declare const TableRowAlignmentValuesArray: readonly [TableRowAlignmentValues.Left, TableRowAlignmentValues.Center, TableRowAlignmentValues.Right];
export declare enum ViewValues {
    /** Default View. Serialized value: `none` */
    None = "none",
    /** Print Layout View. Serialized value: `print` */
    Print = "print",
    /** Outline View. Serialized value: `outline` */
    Outline = "outline",
    /** Master Document View. Serialized value: `masterPages` */
    MasterPages = "masterPages",
    /** Draft View. Serialized value: `normal` */
    Normal = "normal",
    /** Web Page View. Serialized value: `web` */
    Web = "web"
}
export declare const ViewValuesArray: readonly [ViewValues.None, ViewValues.Print, ViewValues.Outline, ViewValues.MasterPages, ViewValues.Normal, ViewValues.Web];
export declare enum PresetZoomValues {
    /** No Preset Magnification. Serialized value: `none` */
    None = "none",
    /** Display One Full Page. Serialized value: `fullPage` */
    FullPage = "fullPage",
    /** Display Page Width. Serialized value: `bestFit` */
    BestFit = "bestFit",
    /** Display Text Width. Serialized value: `textFit` */
    TextFit = "textFit"
}
export declare const PresetZoomValuesArray: readonly [PresetZoomValues.None, PresetZoomValues.FullPage, PresetZoomValues.BestFit, PresetZoomValues.TextFit];
export declare enum ProofingStateValues {
    /** Check Completed. Serialized value: `clean` */
    Clean = "clean",
    /** Check Not Completed. Serialized value: `dirty` */
    Dirty = "dirty"
}
export declare const ProofingStateValuesArray: readonly [ProofingStateValues.Clean, ProofingStateValues.Dirty];
export declare enum DocumentTypeValues {
    /** Default Document. Serialized value: `notSpecified` */
    NotSpecified = "notSpecified",
    /** Letter. Serialized value: `letter` */
    Letter = "letter",
    /** E-Mail Message. Serialized value: `eMail` */
    Email = "eMail"
}
export declare const DocumentTypeValuesArray: readonly [DocumentTypeValues.NotSpecified, DocumentTypeValues.Letter, DocumentTypeValues.Email];
export declare enum DocumentProtectionValues {
    /** No Editing Restrictions. Serialized value: `none` */
    None = "none",
    /** Allow No Editing. Serialized value: `readOnly` */
    ReadOnly = "readOnly",
    /** Allow Editing of Comments. Serialized value: `comments` */
    Comments = "comments",
    /** Allow Editing With Revision Tracking. Serialized value: `trackedChanges` */
    TrackedChanges = "trackedChanges",
    /** Allow Editing of Form Fields. Serialized value: `forms` */
    Forms = "forms"
}
export declare const DocumentProtectionValuesArray: readonly [DocumentProtectionValues.None, DocumentProtectionValues.ReadOnly, DocumentProtectionValues.Comments, DocumentProtectionValues.TrackedChanges, DocumentProtectionValues.Forms];
export declare enum MailMergeDocumentValues {
    /** Catalog Source Document. Serialized value: `catalog` */
    Catalog = "catalog",
    /** Envelope Source Document. Serialized value: `envelopes` */
    Envelope = "envelopes",
    /** Mailing Label Source Document. Serialized value: `mailingLabels` */
    MailingLabel = "mailingLabels",
    /** Form Letter Source Document. Serialized value: `formLetters` */
    FormLetter = "formLetters",
    /** E-Mail Source Document. Serialized value: `email` */
    Email = "email",
    /** Fax Source Document. Serialized value: `fax` */
    Fax = "fax"
}
export declare const MailMergeDocumentValuesArray: readonly [MailMergeDocumentValues.Catalog, MailMergeDocumentValues.Envelope, MailMergeDocumentValues.MailingLabel, MailMergeDocumentValues.FormLetter, MailMergeDocumentValues.Email, MailMergeDocumentValues.Fax];
export declare enum MailMergeDataValues {
    /** Text File Data Source. Serialized value: `textFile` */
    TextFile = "textFile",
    /** Database Data Source. Serialized value: `database` */
    Database = "database",
    /** Spreadsheet Data Source. Serialized value: `spreadsheet` */
    Spreadsheet = "spreadsheet",
    /** Query Data Source. Serialized value: `query` */
    Query = "query",
    /** Open Database Connectivity Data Source. Serialized value: `odbc` */
    Odbc = "odbc",
    /** Office Data Source Object Data Source. Serialized value: `native` */
    Native = "native"
}
export declare const MailMergeDataValuesArray: readonly [MailMergeDataValues.TextFile, MailMergeDataValues.Database, MailMergeDataValues.Spreadsheet, MailMergeDataValues.Query, MailMergeDataValues.Odbc, MailMergeDataValues.Native];
export declare enum MailMergeDestinationValues {
    /** Send Merged Documents to New Documents. Serialized value: `newDocument` */
    NewDocument = "newDocument",
    /** Send Merged Documents to Printer. Serialized value: `printer` */
    Printer = "printer",
    /** Send Merged Documents as E-mail Messages. Serialized value: `email` */
    Email = "email",
    /** Send Merged Documents as Faxes. Serialized value: `fax` */
    Fax = "fax"
}
export declare const MailMergeDestinationValuesArray: readonly [MailMergeDestinationValues.NewDocument, MailMergeDestinationValues.Printer, MailMergeDestinationValues.Email, MailMergeDestinationValues.Fax];
export declare enum MailMergeOdsoFieldValues {
    /** Field Not Mapped. Serialized value: `null` */
    Null = "null",
    /** Field Mapping to Data Source Column. Serialized value: `dbColumn` */
    DbColumn = "dbColumn"
}
export declare const MailMergeOdsoFieldValuesArray: readonly [MailMergeOdsoFieldValues.Null, MailMergeOdsoFieldValues.DbColumn];
export declare enum VerticalTextAlignmentValues {
    /** Align Text at Top. Serialized value: `top` */
    Top = "top",
    /** Align Text at Center. Serialized value: `center` */
    Center = "center",
    /** Align Text at Baseline. Serialized value: `baseline` */
    Baseline = "baseline",
    /** Align Text at Bottom. Serialized value: `bottom` */
    Bottom = "bottom",
    /** Automatically Determine Alignment. Serialized value: `auto` */
    Auto = "auto"
}
export declare const VerticalTextAlignmentValuesArray: readonly [VerticalTextAlignmentValues.Top, VerticalTextAlignmentValues.Center, VerticalTextAlignmentValues.Baseline, VerticalTextAlignmentValues.Bottom, VerticalTextAlignmentValues.Auto];
export declare enum DisplacedByCustomXmlValues {
    /** Displaced by Next Custom XML Markup Tag. Serialized value: `next` */
    Next = "next",
    /** Displaced by Previous Custom XML Markup Tag. Serialized value: `prev` */
    Previous = "prev"
}
export declare const DisplacedByCustomXmlValuesArray: readonly [DisplacedByCustomXmlValues.Next, DisplacedByCustomXmlValues.Previous];
export declare enum VerticalMergeRevisionValues {
    /** Vertically Merged Cell. Serialized value: `cont` */
    Continue = "cont",
    /** Vertically Split Cell. Serialized value: `rest` */
    Restart = "rest"
}
export declare const VerticalMergeRevisionValuesArray: readonly [VerticalMergeRevisionValues.Continue, VerticalMergeRevisionValues.Restart];
export declare enum TextBoxTightWrapValues {
    /** Do Not Tight Wrap. Serialized value: `none` */
    None = "none",
    /** Tight Wrap All Lines. Serialized value: `allLines` */
    AllLines = "allLines",
    /** Tight Wrap First and Last Lines. Serialized value: `firstAndLastLine` */
    FirstAndLastLine = "firstAndLastLine",
    /** Tight Wrap First Line. Serialized value: `firstLineOnly` */
    FirstLineOnly = "firstLineOnly",
    /** Tight Wrap Last Line. Serialized value: `lastLineOnly` */
    LastLineOnly = "lastLineOnly"
}
export declare const TextBoxTightWrapValuesArray: readonly [TextBoxTightWrapValues.None, TextBoxTightWrapValues.AllLines, TextBoxTightWrapValues.FirstAndLastLine, TextBoxTightWrapValues.FirstLineOnly, TextBoxTightWrapValues.LastLineOnly];
export declare enum FieldCharValues {
    /** Start Character. Serialized value: `begin` */
    Begin = "begin",
    /** Separator Character. Serialized value: `separate` */
    Separate = "separate",
    /** End Character. Serialized value: `end` */
    End = "end"
}
export declare const FieldCharValuesArray: readonly [FieldCharValues.Begin, FieldCharValues.Separate, FieldCharValues.End];
export declare enum InfoTextValues {
    /** Literal Text. Serialized value: `text` */
    Text = "text",
    /** Glossary Document Entry. Serialized value: `autoText` */
    AutoText = "autoText"
}
export declare const InfoTextValuesArray: readonly [InfoTextValues.Text, InfoTextValues.AutoText];
export declare enum TextBoxFormFieldValues {
    /** Text Box. Serialized value: `regular` */
    Regular = "regular",
    /** Number. Serialized value: `number` */
    Number = "number",
    /** Date. Serialized value: `date` */
    Date = "date",
    /** Current Time Display. Serialized value: `currentTime` */
    CurrentTime = "currentTime",
    /** Current Date Display. Serialized value: `currentDate` */
    CurrentDate = "currentDate",
    /** Field Calculation. Serialized value: `calculated` */
    Calculated = "calculated"
}
export declare const TextBoxFormFieldValuesArray: readonly [TextBoxFormFieldValues.Regular, TextBoxFormFieldValues.Number, TextBoxFormFieldValues.Date, TextBoxFormFieldValues.CurrentTime, TextBoxFormFieldValues.CurrentDate, TextBoxFormFieldValues.Calculated];
export declare enum SectionMarkValues {
    /** Next Page Section Break. Serialized value: `nextPage` */
    NextPage = "nextPage",
    /** Column Section Break. Serialized value: `nextColumn` */
    NextColumn = "nextColumn",
    /** Continuous Section Break. Serialized value: `continuous` */
    Continuous = "continuous",
    /** Even Page Section Break. Serialized value: `evenPage` */
    EvenPage = "evenPage",
    /** Odd Page Section Break. Serialized value: `oddPage` */
    OddPage = "oddPage"
}
export declare const SectionMarkValuesArray: readonly [SectionMarkValues.NextPage, SectionMarkValues.NextColumn, SectionMarkValues.Continuous, SectionMarkValues.EvenPage, SectionMarkValues.OddPage];
export declare enum PageOrientationValues {
    /** Portrait Mode. Serialized value: `portrait` */
    Portrait = "portrait",
    /** Landscape Mode. Serialized value: `landscape` */
    Landscape = "landscape"
}
export declare const PageOrientationValuesArray: readonly [PageOrientationValues.Portrait, PageOrientationValues.Landscape];
export declare enum PageBorderZOrderValues {
    /** Page Border Ahead of Text. Serialized value: `front` */
    Front = "front",
    /** Page Border Behind Text. Serialized value: `back` */
    Back = "back"
}
export declare const PageBorderZOrderValuesArray: readonly [PageBorderZOrderValues.Front, PageBorderZOrderValues.Back];
export declare enum PageBorderDisplayValues {
    /** Display Page Border on All Pages. Serialized value: `allPages` */
    AllPages = "allPages",
    /** Display Page Border on First Page. Serialized value: `firstPage` */
    FirstPage = "firstPage",
    /** Display Page Border on All Pages Except First. Serialized value: `notFirstPage` */
    NotFirstPage = "notFirstPage"
}
export declare const PageBorderDisplayValuesArray: readonly [PageBorderDisplayValues.AllPages, PageBorderDisplayValues.FirstPage, PageBorderDisplayValues.NotFirstPage];
export declare enum PageBorderOffsetValues {
    /** Page Border Is Positioned Relative to Page Edges. Serialized value: `page` */
    Page = "page",
    /** Page Border Is Positioned Relative to Text Extents. Serialized value: `text` */
    Text = "text"
}
export declare const PageBorderOffsetValuesArray: readonly [PageBorderOffsetValues.Page, PageBorderOffsetValues.Text];
export declare enum ChapterSeparatorValues {
    /** Hyphen Chapter Separator. Serialized value: `hyphen` */
    Hyphen = "hyphen",
    /** Period Chapter Separator. Serialized value: `period` */
    Period = "period",
    /** Colon Chapter Separator. Serialized value: `colon` */
    Colon = "colon",
    /** Em Dash Chapter Separator. Serialized value: `emDash` */
    EmDash = "emDash",
    /** En Dash Chapter Separator. Serialized value: `enDash` */
    EnDash = "enDash"
}
export declare const ChapterSeparatorValuesArray: readonly [ChapterSeparatorValues.Hyphen, ChapterSeparatorValues.Period, ChapterSeparatorValues.Colon, ChapterSeparatorValues.EmDash, ChapterSeparatorValues.EnDash];
export declare enum LineNumberRestartValues {
    /** Restart Line Numbering on Each Page. Serialized value: `newPage` */
    NewPage = "newPage",
    /** Restart Line Numbering for Each Section. Serialized value: `newSection` */
    NewSection = "newSection",
    /** Continue Line Numbering From Previous Section. Serialized value: `continuous` */
    Continuous = "continuous"
}
export declare const LineNumberRestartValuesArray: readonly [LineNumberRestartValues.NewPage, LineNumberRestartValues.NewSection, LineNumberRestartValues.Continuous];
export declare enum VerticalJustificationValues {
    /** Align Top. Serialized value: `top` */
    Top = "top",
    /** Align Center. Serialized value: `center` */
    Center = "center",
    /** Vertical Justification. Serialized value: `both` */
    Both = "both",
    /** Align Bottom. Serialized value: `bottom` */
    Bottom = "bottom"
}
export declare const VerticalJustificationValuesArray: readonly [VerticalJustificationValues.Top, VerticalJustificationValues.Center, VerticalJustificationValues.Both, VerticalJustificationValues.Bottom];
export declare enum TableVerticalAlignmentValues {
    /** undefined. Serialized value: `top` */
    Top = "top",
    /** undefined. Serialized value: `center` */
    Center = "center",
    /** undefined. Serialized value: `bottom` */
    Bottom = "bottom"
}
export declare const TableVerticalAlignmentValuesArray: readonly [TableVerticalAlignmentValues.Top, TableVerticalAlignmentValues.Center, TableVerticalAlignmentValues.Bottom];
export declare enum DocGridValues {
    /** No Document Grid. Serialized value: `default` */
    Default = "default",
    /** Line Grid Only. Serialized value: `lines` */
    Lines = "lines",
    /** Line and Character Grid. Serialized value: `linesAndChars` */
    LinesAndChars = "linesAndChars",
    /** Character Grid Only. Serialized value: `snapToChars` */
    SnapToChars = "snapToChars"
}
export declare const DocGridValuesArray: readonly [DocGridValues.Default, DocGridValues.Lines, DocGridValues.LinesAndChars, DocGridValues.SnapToChars];
export declare enum HeaderFooterValues {
    /** Even Numbered Pages Only. Serialized value: `even` */
    Even = "even",
    /** Default Header or Footer. Serialized value: `default` */
    Default = "default",
    /** First Page Only. Serialized value: `first` */
    First = "first"
}
export declare const HeaderFooterValuesArray: readonly [HeaderFooterValues.Even, HeaderFooterValues.Default, HeaderFooterValues.First];
export declare enum FootnoteEndnoteValues {
    /** Normal Footnote/Endnote. Serialized value: `normal` */
    Normal = "normal",
    /** Separator. Serialized value: `separator` */
    Separator = "separator",
    /** Continuation Separator. Serialized value: `continuationSeparator` */
    ContinuationSeparator = "continuationSeparator",
    /** Continuation Notice Separator. Serialized value: `continuationNotice` */
    ContinuationNotice = "continuationNotice"
}
export declare const FootnoteEndnoteValuesArray: readonly [FootnoteEndnoteValues.Normal, FootnoteEndnoteValues.Separator, FootnoteEndnoteValues.ContinuationSeparator, FootnoteEndnoteValues.ContinuationNotice];
export declare enum BreakValues {
    /** Page Break. Serialized value: `page` */
    Page = "page",
    /** Column Break. Serialized value: `column` */
    Column = "column",
    /** Line Break. Serialized value: `textWrapping` */
    TextWrapping = "textWrapping"
}
export declare const BreakValuesArray: readonly [BreakValues.Page, BreakValues.Column, BreakValues.TextWrapping];
export declare enum BreakTextRestartLocationValues {
    /** Restart On Next Line. Serialized value: `none` */
    None = "none",
    /** Restart In Next Text Region When In Leftmost Position. Serialized value: `left` */
    Left = "left",
    /** Restart In Next Text Region When In Rightmost Position. Serialized value: `right` */
    Right = "right",
    /** Restart On Next Full Line. Serialized value: `all` */
    All = "all"
}
export declare const BreakTextRestartLocationValuesArray: readonly [BreakTextRestartLocationValues.None, BreakTextRestartLocationValues.Left, BreakTextRestartLocationValues.Right, BreakTextRestartLocationValues.All];
export declare enum AbsolutePositionTabAlignmentValues {
    /** Left. Serialized value: `left` */
    Left = "left",
    /** Center. Serialized value: `center` */
    Center = "center",
    /** Right. Serialized value: `right` */
    Right = "right"
}
export declare const AbsolutePositionTabAlignmentValuesArray: readonly [AbsolutePositionTabAlignmentValues.Left, AbsolutePositionTabAlignmentValues.Center, AbsolutePositionTabAlignmentValues.Right];
export declare enum AbsolutePositionTabPositioningBaseValues {
    /** Relative To Text Margins. Serialized value: `margin` */
    Margin = "margin",
    /** Relative To Indents. Serialized value: `indent` */
    Indent = "indent"
}
export declare const AbsolutePositionTabPositioningBaseValuesArray: readonly [AbsolutePositionTabPositioningBaseValues.Margin, AbsolutePositionTabPositioningBaseValues.Indent];
export declare enum AbsolutePositionTabLeaderCharValues {
    /** No Leader Character. Serialized value: `none` */
    None = "none",
    /** Dot Leader Character. Serialized value: `dot` */
    Dot = "dot",
    /** Hyphen Leader Character. Serialized value: `hyphen` */
    Hyphen = "hyphen",
    /** Underscore Leader Character. Serialized value: `underscore` */
    Underscore = "underscore",
    /** Centered Dot Leader Character. Serialized value: `middleDot` */
    MiddleDot = "middleDot"
}
export declare const AbsolutePositionTabLeaderCharValuesArray: readonly [AbsolutePositionTabLeaderCharValues.None, AbsolutePositionTabLeaderCharValues.Dot, AbsolutePositionTabLeaderCharValues.Hyphen, AbsolutePositionTabLeaderCharValues.Underscore, AbsolutePositionTabLeaderCharValues.MiddleDot];
export declare enum ProofingErrorValues {
    /** Start of Region Marked as Spelling Error. Serialized value: `spellStart` */
    SpellStart = "spellStart",
    /** End of Region Marked as Spelling Error. Serialized value: `spellEnd` */
    SpellEnd = "spellEnd",
    /** Start of Region Marked as Grammatical Error. Serialized value: `gramStart` */
    GrammarStart = "gramStart",
    /** End of Region Marked as Grammatical Error. Serialized value: `gramEnd` */
    GrammarEnd = "gramEnd"
}
export declare const ProofingErrorValuesArray: readonly [ProofingErrorValues.SpellStart, ProofingErrorValues.SpellEnd, ProofingErrorValues.GrammarStart, ProofingErrorValues.GrammarEnd];
export declare enum RangePermissionEditingGroupValues {
    /** No Users Have Editing Permissions. Serialized value: `none` */
    None = "none",
    /** All Users Have Editing Permissions. Serialized value: `everyone` */
    Everyone = "everyone",
    /** Administrator Group. Serialized value: `administrators` */
    Administrators = "administrators",
    /** Contributors Group. Serialized value: `contributors` */
    Contributors = "contributors",
    /** Editors Group. Serialized value: `editors` */
    Editors = "editors",
    /** Owners Group. Serialized value: `owners` */
    Owners = "owners",
    /** Current Group. Serialized value: `current` */
    Current = "current"
}
export declare const RangePermissionEditingGroupValuesArray: readonly [RangePermissionEditingGroupValues.None, RangePermissionEditingGroupValues.Everyone, RangePermissionEditingGroupValues.Administrators, RangePermissionEditingGroupValues.Contributors, RangePermissionEditingGroupValues.Editors, RangePermissionEditingGroupValues.Owners, RangePermissionEditingGroupValues.Current];
export declare enum FontTypeHintValues {
    /** High ANSI Font. Serialized value: `default` */
    Default = "default",
    /** East Asian Font. Serialized value: `eastAsia` */
    EastAsia = "eastAsia",
    /** Complex Script Font. Serialized value: `cs` */
    ComplexScript = "cs"
}
export declare const FontTypeHintValuesArray: readonly [FontTypeHintValues.Default, FontTypeHintValues.EastAsia, FontTypeHintValues.ComplexScript];
export declare enum ThemeFontValues {
    /** Major East Asian Theme Font. Serialized value: `majorEastAsia` */
    MajorEastAsia = "majorEastAsia",
    /** Major Complex Script Theme Font. Serialized value: `majorBidi` */
    MajorBidi = "majorBidi",
    /** Major ASCII Theme Font. Serialized value: `majorAscii` */
    MajorAscii = "majorAscii",
    /** Major High ANSI Theme Font. Serialized value: `majorHAnsi` */
    MajorHighAnsi = "majorHAnsi",
    /** Minor East Asian Theme Font. Serialized value: `minorEastAsia` */
    MinorEastAsia = "minorEastAsia",
    /** Minor Complex Script Theme Font. Serialized value: `minorBidi` */
    MinorBidi = "minorBidi",
    /** Minor ASCII Theme Font. Serialized value: `minorAscii` */
    MinorAscii = "minorAscii",
    /** Minor High ANSI Theme Font. Serialized value: `minorHAnsi` */
    MinorHighAnsi = "minorHAnsi"
}
export declare const ThemeFontValuesArray: readonly [ThemeFontValues.MajorEastAsia, ThemeFontValues.MajorBidi, ThemeFontValues.MajorAscii, ThemeFontValues.MajorHighAnsi, ThemeFontValues.MinorEastAsia, ThemeFontValues.MinorBidi, ThemeFontValues.MinorAscii, ThemeFontValues.MinorHighAnsi];
export declare enum RubyAlignValues {
    /** Center. Serialized value: `center` */
    Center = "center",
    /** Distribute All Characters. Serialized value: `distributeLetter` */
    DistributeLetter = "distributeLetter",
    /** Distribute all Characters w/ Additional Space On Either Side. Serialized value: `distributeSpace` */
    DistributeSpace = "distributeSpace",
    /** Left Aligned. Serialized value: `left` */
    Left = "left",
    /** Right Aligned. Serialized value: `right` */
    Right = "right",
    /** Vertically Aligned to Right of Base Text. Serialized value: `rightVertical` */
    RightVertical = "rightVertical"
}
export declare const RubyAlignValuesArray: readonly [RubyAlignValues.Center, RubyAlignValues.DistributeLetter, RubyAlignValues.DistributeSpace, RubyAlignValues.Left, RubyAlignValues.Right, RubyAlignValues.RightVertical];
export declare enum LockingValues {
    /** SDT Cannot Be Deleted. Serialized value: `sdtLocked` */
    SdtLocked = "sdtLocked",
    /** Contents Cannot Be Edited At Runtime. Serialized value: `contentLocked` */
    ContentLocked = "contentLocked",
    /** No Locking. Serialized value: `unlocked` */
    Unlocked = "unlocked",
    /** Contents Cannot Be Edited At Runtime And SDT Cannot Be Deleted. Serialized value: `sdtContentLocked` */
    SdtContentLocked = "sdtContentLocked"
}
export declare const LockingValuesArray: readonly [LockingValues.SdtLocked, LockingValues.ContentLocked, LockingValues.Unlocked, LockingValues.SdtContentLocked];
export declare enum DateFormatValues {
    /** Same As Display. Serialized value: `text` */
    Text = "text",
    /** XML Schema Date Format. Serialized value: `date` */
    Date = "date",
    /** XML Schema DateTime Format. Serialized value: `dateTime` */
    DateTime = "dateTime"
}
export declare const DateFormatValuesArray: readonly [DateFormatValues.Text, DateFormatValues.Date, DateFormatValues.DateTime];
export declare enum TableWidthUnitValues {
    /** No Width. Serialized value: `nil` */
    Nil = "nil",
    /** Width in Fiftieths of a Percent. Serialized value: `pct` */
    Pct = "pct",
    /** Width in Twentieths of a Point. Serialized value: `dxa` */
    Dxa = "dxa",
    /** Automatically Determined Width. Serialized value: `auto` */
    Auto = "auto"
}
export declare const TableWidthUnitValuesArray: readonly [TableWidthUnitValues.Nil, TableWidthUnitValues.Pct, TableWidthUnitValues.Dxa, TableWidthUnitValues.Auto];
export declare enum TableWidthValues {
    /** undefined. Serialized value: `nil` */
    Nil = "nil",
    /** undefined. Serialized value: `dxa` */
    Dxa = "dxa"
}
export declare const TableWidthValuesArray: readonly [TableWidthValues.Nil, TableWidthValues.Dxa];
export declare enum MergedCellValues {
    /** Continue Merged Region. Serialized value: `continue` */
    Continue = "continue",
    /** Start/Restart Merged Region. Serialized value: `restart` */
    Restart = "restart"
}
export declare const MergedCellValuesArray: readonly [MergedCellValues.Continue, MergedCellValues.Restart];
export declare enum TableLayoutValues {
    /** Fixed Width Table Layout. Serialized value: `fixed` */
    Fixed = "fixed",
    /** AutoFit Table Layout. Serialized value: `autofit` */
    Autofit = "autofit"
}
export declare const TableLayoutValuesArray: readonly [TableLayoutValues.Fixed, TableLayoutValues.Autofit];
export declare enum TableOverlapValues {
    /** Floating Table Cannot Overlap. Serialized value: `never` */
    Never = "never",
    /** Floating Table Can Overlap. Serialized value: `overlap` */
    Overlap = "overlap"
}
export declare const TableOverlapValuesArray: readonly [TableOverlapValues.Never, TableOverlapValues.Overlap];
export declare enum FootnotePositionValues {
    /** Footnotes Positioned at Page Bottom. Serialized value: `pageBottom` */
    PageBottom = "pageBottom",
    /** Footnotes Positioned Beneath Text. Serialized value: `beneathText` */
    BeneathText = "beneathText",
    /** Footnotes Positioned At End of Section. Serialized value: `sectEnd` */
    SectionEnd = "sectEnd"
}
export declare const FootnotePositionValuesArray: readonly [FootnotePositionValues.PageBottom, FootnotePositionValues.BeneathText, FootnotePositionValues.SectionEnd];
export declare enum EndnotePositionValues {
    /** Endnotes Positioned at End of Section. Serialized value: `sectEnd` */
    SectionEnd = "sectEnd",
    /** Endnotes Positioned at End of Document. Serialized value: `docEnd` */
    DocumentEnd = "docEnd"
}
export declare const EndnotePositionValuesArray: readonly [EndnotePositionValues.SectionEnd, EndnotePositionValues.DocumentEnd];
export declare enum RestartNumberValues {
    /** Continue Numbering From Previous Section. Serialized value: `continuous` */
    Continuous = "continuous",
    /** Restart Numbering For Each Section. Serialized value: `eachSect` */
    EachSection = "eachSect",
    /** Restart Numbering On Each Page. Serialized value: `eachPage` */
    EachPage = "eachPage"
}
export declare const RestartNumberValuesArray: readonly [RestartNumberValues.Continuous, RestartNumberValues.EachSection, RestartNumberValues.EachPage];
export declare enum MailMergeSourceValues {
    /** Database Data Source. Serialized value: `database` */
    Database = "database",
    /** Address Book Data Source. Serialized value: `addressBook` */
    AddressBook = "addressBook",
    /** Alternate Document Format Data Source. Serialized value: `document1` */
    Document1 = "document1",
    /** Alternate Document Format Data Source Two. Serialized value: `document2` */
    Document2 = "document2",
    /** Text File Data Source. Serialized value: `text` */
    Text = "text",
    /** E-Mail Program Data Source. Serialized value: `email` */
    Email = "email",
    /** Native Data Source. Serialized value: `native` */
    Native = "native",
    /** Legacy Document Format Data Source. Serialized value: `legacy` */
    Legacy = "legacy",
    /** Aggregate Data Source. Serialized value: `master` */
    Master = "master"
}
export declare const MailMergeSourceValuesArray: readonly [MailMergeSourceValues.Database, MailMergeSourceValues.AddressBook, MailMergeSourceValues.Document1, MailMergeSourceValues.Document2, MailMergeSourceValues.Text, MailMergeSourceValues.Email, MailMergeSourceValues.Native, MailMergeSourceValues.Legacy, MailMergeSourceValues.Master];
export declare enum TargetScreenSizeValues {
    /** Optimize for 544x376. Serialized value: `544x376` */
    Sz544x376 = "544x376",
    /** Optimize for 640x480. Serialized value: `640x480` */
    Sz640x480 = "640x480",
    /** Optimize for 720x512. Serialized value: `720x512` */
    Sz720x512 = "720x512",
    /** Optimize for 800x600. Serialized value: `800x600` */
    Sz800x600 = "800x600",
    /** Optimize for 1024x768. Serialized value: `1024x768` */
    Sz1024x768 = "1024x768",
    /** Optimize for 1152x882. Serialized value: `1152x882` */
    Sz1152x882 = "1152x882",
    /** Optimize for 1152x900. Serialized value: `1152x900` */
    Sz1152x900 = "1152x900",
    /** Optimize for 1280x1024. Serialized value: `1280x1024` */
    Sz1280x1024 = "1280x1024",
    /** Optimize for 1600x1200. Serialized value: `1600x1200` */
    Sz1600x1200 = "1600x1200",
    /** Optimize for 1800x1440. Serialized value: `1800x1440` */
    Sz1800x1440 = "1800x1440",
    /** Optimize for 1920x1200. Serialized value: `1920x1200` */
    Sz1920x1200 = "1920x1200"
}
export declare const TargetScreenSizeValuesArray: readonly [TargetScreenSizeValues.Sz544x376, TargetScreenSizeValues.Sz640x480, TargetScreenSizeValues.Sz720x512, TargetScreenSizeValues.Sz800x600, TargetScreenSizeValues.Sz1024x768, TargetScreenSizeValues.Sz1152x882, TargetScreenSizeValues.Sz1152x900, TargetScreenSizeValues.Sz1280x1024, TargetScreenSizeValues.Sz1600x1200, TargetScreenSizeValues.Sz1800x1440, TargetScreenSizeValues.Sz1920x1200];
export declare enum CharacterSpacingValues {
    /** Do Not Compress Whitespace. Serialized value: `doNotCompress` */
    DoNotCompress = "doNotCompress",
    /** Compress Whitespace From Punctuation Characters. Serialized value: `compressPunctuation` */
    CompressPunctuation = "compressPunctuation",
    /** Compress Whitespace From Both Japanese Kana And Punctuation Characters. Serialized value: `compressPunctuationAndJapaneseKana` */
    CompressPunctuationAndJapaneseKana = "compressPunctuationAndJapaneseKana"
}
export declare const CharacterSpacingValuesArray: readonly [CharacterSpacingValues.DoNotCompress, CharacterSpacingValues.CompressPunctuation, CharacterSpacingValues.CompressPunctuationAndJapaneseKana];
export declare enum ColorSchemeIndexValues {
    /** Dark 1 Theme Color Reference. Serialized value: `dark1` */
    Dark1 = "dark1",
    /** Light 1 Theme Color Reference. Serialized value: `light1` */
    Light1 = "light1",
    /** Dark 2 Theme Color Reference. Serialized value: `dark2` */
    Dark2 = "dark2",
    /** Light 2 Theme Color Reference. Serialized value: `light2` */
    Light2 = "light2",
    /** Accent 1 Theme Color Reference. Serialized value: `accent1` */
    Accent1 = "accent1",
    /** Accent 2 Theme Color Reference. Serialized value: `accent2` */
    Accent2 = "accent2",
    /** Accent 3 Theme Color Reference. Serialized value: `accent3` */
    Accent3 = "accent3",
    /** Accent4 Theme Color Reference. Serialized value: `accent4` */
    Accent4 = "accent4",
    /** Accent5 Theme Color Reference. Serialized value: `accent5` */
    Accent5 = "accent5",
    /** Accent 6 Theme Color Reference. Serialized value: `accent6` */
    Accent6 = "accent6",
    /** Hyperlink Theme Color Reference. Serialized value: `hyperlink` */
    Hyperlink = "hyperlink",
    /** Followed Hyperlink Theme Color Reference. Serialized value: `followedHyperlink` */
    FollowedHyperlink = "followedHyperlink"
}
export declare const ColorSchemeIndexValuesArray: readonly [ColorSchemeIndexValues.Dark1, ColorSchemeIndexValues.Light1, ColorSchemeIndexValues.Dark2, ColorSchemeIndexValues.Light2, ColorSchemeIndexValues.Accent1, ColorSchemeIndexValues.Accent2, ColorSchemeIndexValues.Accent3, ColorSchemeIndexValues.Accent4, ColorSchemeIndexValues.Accent5, ColorSchemeIndexValues.Accent6, ColorSchemeIndexValues.Hyperlink, ColorSchemeIndexValues.FollowedHyperlink];
export declare enum FrameScrollbarVisibilityValues {
    /** Always Show Scrollbar. Serialized value: `on` */
    On = "on",
    /** Never Show Scrollbar. Serialized value: `off` */
    Off = "off",
    /** Automatically Show Scrollbar As Needed. Serialized value: `auto` */
    Auto = "auto"
}
export declare const FrameScrollbarVisibilityValuesArray: readonly [FrameScrollbarVisibilityValues.On, FrameScrollbarVisibilityValues.Off, FrameScrollbarVisibilityValues.Auto];
export declare enum FrameLayoutValues {
    /** Stack Frames Vertically. Serialized value: `rows` */
    Rows = "rows",
    /** Stack Frames Horizontally. Serialized value: `cols` */
    Columns = "cols",
    /** Do Not Stack Frames. Serialized value: `none` */
    None = "none"
}
export declare const FrameLayoutValuesArray: readonly [FrameLayoutValues.Rows, FrameLayoutValues.Columns, FrameLayoutValues.None];
export declare enum LevelSuffixValues {
    /** Tab Between Numbering and Text. Serialized value: `tab` */
    Tab = "tab",
    /** Space Between Numbering and Text. Serialized value: `space` */
    Space = "space",
    /** Nothing Between Numbering and Text. Serialized value: `nothing` */
    Nothing = "nothing"
}
export declare const LevelSuffixValuesArray: readonly [LevelSuffixValues.Tab, LevelSuffixValues.Space, LevelSuffixValues.Nothing];
export declare enum MultiLevelValues {
    /** Single Level Numbering Definition. Serialized value: `singleLevel` */
    SingleLevel = "singleLevel",
    /** Multilevel Numbering Definition. Serialized value: `multilevel` */
    Multilevel = "multilevel",
    /** Hybrid Multilevel Numbering Definition. Serialized value: `hybridMultilevel` */
    HybridMultilevel = "hybridMultilevel"
}
export declare const MultiLevelValuesArray: readonly [MultiLevelValues.SingleLevel, MultiLevelValues.Multilevel, MultiLevelValues.HybridMultilevel];
export declare enum TableStyleOverrideValues {
    /** Whole table formatting. Serialized value: `wholeTable` */
    WholeTable = "wholeTable",
    /** First Row Conditional Formatting. Serialized value: `firstRow` */
    FirstRow = "firstRow",
    /** Last table row formatting. Serialized value: `lastRow` */
    LastRow = "lastRow",
    /** First Column Conditional Formatting. Serialized value: `firstCol` */
    FirstColumn = "firstCol",
    /** Last table column formatting. Serialized value: `lastCol` */
    LastColumn = "lastCol",
    /** Banded Column Conditional Formatting. Serialized value: `band1Vert` */
    Band1Vertical = "band1Vert",
    /** Even Column Stripe Conditional Formatting. Serialized value: `band2Vert` */
    Band2Vertical = "band2Vert",
    /** Banded Row Conditional Formatting. Serialized value: `band1Horz` */
    Band1Horizontal = "band1Horz",
    /** Even Row Stripe Conditional Formatting. Serialized value: `band2Horz` */
    Band2Horizontal = "band2Horz",
    /** Top right table cell formatting. Serialized value: `neCell` */
    NorthEastCell = "neCell",
    /** Top left table cell formatting. Serialized value: `nwCell` */
    NorthWestCell = "nwCell",
    /** Bottom right table cell formatting. Serialized value: `seCell` */
    SouthEastCell = "seCell",
    /** Bottom left table cell formatting. Serialized value: `swCell` */
    SouthWestCell = "swCell"
}
export declare const TableStyleOverrideValuesArray: readonly [TableStyleOverrideValues.WholeTable, TableStyleOverrideValues.FirstRow, TableStyleOverrideValues.LastRow, TableStyleOverrideValues.FirstColumn, TableStyleOverrideValues.LastColumn, TableStyleOverrideValues.Band1Vertical, TableStyleOverrideValues.Band2Vertical, TableStyleOverrideValues.Band1Horizontal, TableStyleOverrideValues.Band2Horizontal, TableStyleOverrideValues.NorthEastCell, TableStyleOverrideValues.NorthWestCell, TableStyleOverrideValues.SouthEastCell, TableStyleOverrideValues.SouthWestCell];
export declare enum StyleValues {
    /** Paragraph Style. Serialized value: `paragraph` */
    Paragraph = "paragraph",
    /** Character Style. Serialized value: `character` */
    Character = "character",
    /** Table Style. Serialized value: `table` */
    Table = "table",
    /** Numbering Style. Serialized value: `numbering` */
    Numbering = "numbering"
}
export declare const StyleValuesArray: readonly [StyleValues.Paragraph, StyleValues.Character, StyleValues.Table, StyleValues.Numbering];
export declare enum FontFamilyValues {
    /** Novelty Font. Serialized value: `decorative` */
    Decorative = "decorative",
    /** Monospace Font. Serialized value: `modern` */
    Modern = "modern",
    /** Proportional Font With Serifs. Serialized value: `roman` */
    Roman = "roman",
    /** Script Font. Serialized value: `script` */
    Script = "script",
    /** Proportional Font Without Serifs. Serialized value: `swiss` */
    Swiss = "swiss",
    /** No Font Family. Serialized value: `auto` */
    Auto = "auto"
}
export declare const FontFamilyValuesArray: readonly [FontFamilyValues.Decorative, FontFamilyValues.Modern, FontFamilyValues.Roman, FontFamilyValues.Script, FontFamilyValues.Swiss, FontFamilyValues.Auto];
export declare enum FontPitchValues {
    /** Fixed Width. Serialized value: `fixed` */
    Fixed = "fixed",
    /** Proportional Width. Serialized value: `variable` */
    Variable = "variable",
    /** Default. Serialized value: `default` */
    Default = "default"
}
export declare const FontPitchValuesArray: readonly [FontPitchValues.Fixed, FontPitchValues.Variable, FontPitchValues.Default];
export declare enum ThemeColorValues {
    /** Dark 1 Theme Color. Serialized value: `dark1` */
    Dark1 = "dark1",
    /** Light 1 Theme Color. Serialized value: `light1` */
    Light1 = "light1",
    /** Dark 2 Theme Color. Serialized value: `dark2` */
    Dark2 = "dark2",
    /** Light 2 Theme Color. Serialized value: `light2` */
    Light2 = "light2",
    /** Accent 1 Theme Color. Serialized value: `accent1` */
    Accent1 = "accent1",
    /** Accent 2 Theme Color. Serialized value: `accent2` */
    Accent2 = "accent2",
    /** Accent 3 Theme Color. Serialized value: `accent3` */
    Accent3 = "accent3",
    /** Accent 4 Theme Color. Serialized value: `accent4` */
    Accent4 = "accent4",
    /** Accent 5 Theme Color. Serialized value: `accent5` */
    Accent5 = "accent5",
    /** Accent 6 Theme Color. Serialized value: `accent6` */
    Accent6 = "accent6",
    /** Hyperlink Theme Color. Serialized value: `hyperlink` */
    Hyperlink = "hyperlink",
    /** Followed Hyperlink Theme Color. Serialized value: `followedHyperlink` */
    FollowedHyperlink = "followedHyperlink",
    /** No Theme Color. Serialized value: `none` */
    None = "none",
    /** Background 1 Theme Color. Serialized value: `background1` */
    Background1 = "background1",
    /** Text 1 Theme Color. Serialized value: `text1` */
    Text1 = "text1",
    /** Background 2 Theme Color. Serialized value: `background2` */
    Background2 = "background2",
    /** Text 2 Theme Color. Serialized value: `text2` */
    Text2 = "text2"
}
export declare const ThemeColorValuesArray: readonly [ThemeColorValues.Dark1, ThemeColorValues.Light1, ThemeColorValues.Dark2, ThemeColorValues.Light2, ThemeColorValues.Accent1, ThemeColorValues.Accent2, ThemeColorValues.Accent3, ThemeColorValues.Accent4, ThemeColorValues.Accent5, ThemeColorValues.Accent6, ThemeColorValues.Hyperlink, ThemeColorValues.FollowedHyperlink, ThemeColorValues.None, ThemeColorValues.Background1, ThemeColorValues.Text1, ThemeColorValues.Background2, ThemeColorValues.Text2];
export declare enum DocPartBehaviorValues {
    /** Insert Content At Specified Location. Serialized value: `content` */
    Content = "content",
    /** Ensure Entry Is In New Paragraph. Serialized value: `p` */
    Paragraph = "p",
    /** Ensure Entry Is On New Page. Serialized value: `pg` */
    Page = "pg"
}
export declare const DocPartBehaviorValuesArray: readonly [DocPartBehaviorValues.Content, DocPartBehaviorValues.Paragraph, DocPartBehaviorValues.Page];
export declare enum DocPartValues {
    /** No Type. Serialized value: `none` */
    None = "none",
    /** Normal. Serialized value: `normal` */
    Normal = "normal",
    /** Automatically Replace Name With Content. Serialized value: `autoExp` */
    AutoExp = "autoExp",
    /** AutoText User Interface Entry. Serialized value: `toolbar` */
    Toolbar = "toolbar",
    /** AutoCorrect Entry. Serialized value: `speller` */
    Speller = "speller",
    /** Form Field Help Text. Serialized value: `formFld` */
    FormField = "formFld",
    /** Structured Document Tag Placeholder Text. Serialized value: `bbPlcHdr` */
    SdtPlaceholder = "bbPlcHdr"
}
export declare const DocPartValuesArray: readonly [DocPartValues.None, DocPartValues.Normal, DocPartValues.AutoExp, DocPartValues.Toolbar, DocPartValues.Speller, DocPartValues.FormField, DocPartValues.SdtPlaceholder];
export declare enum DocPartGalleryValues {
    /** Structured Document Tag Placeholder Text Gallery. Serialized value: `placeholder` */
    Placeholder = "placeholder",
    /** All Galleries. Serialized value: `any` */
    Any = "any",
    /** No Gallery Classification. Serialized value: `default` */
    Default = "default",
    /** Document Parts Gallery. Serialized value: `docParts` */
    DocumentPart = "docParts",
    /** Cover Page Gallery. Serialized value: `coverPg` */
    CoverPage = "coverPg",
    /** Equations Gallery. Serialized value: `eq` */
    Equation = "eq",
    /** Footers Gallery. Serialized value: `ftrs` */
    Footer = "ftrs",
    /** Headers Gallery. Serialized value: `hdrs` */
    Header = "hdrs",
    /** Page Numbers Gallery. Serialized value: `pgNum` */
    PageNumber = "pgNum",
    /** Table Gallery. Serialized value: `tbls` */
    Table = "tbls",
    /** Watermark Gallery. Serialized value: `watermarks` */
    WaterMark = "watermarks",
    /** AutoText Gallery. Serialized value: `autoTxt` */
    AutoText = "autoTxt",
    /** Text Box Gallery. Serialized value: `txtBox` */
    TextBox = "txtBox",
    /** Page Numbers At Top Gallery. Serialized value: `pgNumT` */
    PageNumberTop = "pgNumT",
    /** Page Numbers At Bottom Gallery. Serialized value: `pgNumB` */
    PageNumberBottom = "pgNumB",
    /** Page Numbers At Margins Gallery. Serialized value: `pgNumMargins` */
    PageNumberMargins = "pgNumMargins",
    /** Table of Contents Gallery. Serialized value: `tblOfContents` */
    TableOfContents = "tblOfContents",
    /** Bibliography Gallery. Serialized value: `bib` */
    Bibliography = "bib",
    /** Custom Quick Parts Gallery. Serialized value: `custQuickParts` */
    CustomQuickParts = "custQuickParts",
    /** Custom Cover Page Gallery. Serialized value: `custCoverPg` */
    CustomCoverPage = "custCoverPg",
    /** Custom Equation Gallery. Serialized value: `custEq` */
    CustomEquation = "custEq",
    /** Custom Footer Gallery. Serialized value: `custFtrs` */
    CustomFooter = "custFtrs",
    /** Custom Header Gallery. Serialized value: `custHdrs` */
    CustomHeaders = "custHdrs",
    /** Custom Page Number Gallery. Serialized value: `custPgNum` */
    CustomPageNumber = "custPgNum",
    /** Custom Table Gallery. Serialized value: `custTbls` */
    CustomTable = "custTbls",
    /** Custom Watermark Gallery. Serialized value: `custWatermarks` */
    CustomWatermark = "custWatermarks",
    /** Custom AutoText Gallery. Serialized value: `custAutoTxt` */
    CustomAutoText = "custAutoTxt",
    /** Custom Text Box Gallery. Serialized value: `custTxtBox` */
    CustomTextBox = "custTxtBox",
    /** Custom Page Number At Top Gallery. Serialized value: `custPgNumT` */
    CustomPageNumberTop = "custPgNumT",
    /** Custom Page Number At Bottom Gallery. Serialized value: `custPgNumB` */
    CustomPageNumberBottom = "custPgNumB",
    /** Custom Page Number At Margins Gallery. Serialized value: `custPgNumMargins` */
    CustomPageNumberMargin = "custPgNumMargins",
    /** Custom Table of Contents Gallery. Serialized value: `custTblOfContents` */
    CustomTableOfContents = "custTblOfContents",
    /** Custom Bibliography Gallery. Serialized value: `custBib` */
    CustomBibliography = "custBib",
    /** Custom 1 Gallery. Serialized value: `custom1` */
    Custom1 = "custom1",
    /** Custom 2 Gallery. Serialized value: `custom2` */
    Custom2 = "custom2",
    /** Custom 3 Gallery. Serialized value: `custom3` */
    Custom3 = "custom3",
    /** Custom 4 Gallery. Serialized value: `custom4` */
    Custom4 = "custom4",
    /** Custom 5 Gallery. Serialized value: `custom5` */
    Custom5 = "custom5"
}
export declare const DocPartGalleryValuesArray: readonly [DocPartGalleryValues.Placeholder, DocPartGalleryValues.Any, DocPartGalleryValues.Default, DocPartGalleryValues.DocumentPart, DocPartGalleryValues.CoverPage, DocPartGalleryValues.Equation, DocPartGalleryValues.Footer, DocPartGalleryValues.Header, DocPartGalleryValues.PageNumber, DocPartGalleryValues.Table, DocPartGalleryValues.WaterMark, DocPartGalleryValues.AutoText, DocPartGalleryValues.TextBox, DocPartGalleryValues.PageNumberTop, DocPartGalleryValues.PageNumberBottom, DocPartGalleryValues.PageNumberMargins, DocPartGalleryValues.TableOfContents, DocPartGalleryValues.Bibliography, DocPartGalleryValues.CustomQuickParts, DocPartGalleryValues.CustomCoverPage, DocPartGalleryValues.CustomEquation, DocPartGalleryValues.CustomFooter, DocPartGalleryValues.CustomHeaders, DocPartGalleryValues.CustomPageNumber, DocPartGalleryValues.CustomTable, DocPartGalleryValues.CustomWatermark, DocPartGalleryValues.CustomAutoText, DocPartGalleryValues.CustomTextBox, DocPartGalleryValues.CustomPageNumberTop, DocPartGalleryValues.CustomPageNumberBottom, DocPartGalleryValues.CustomPageNumberMargin, DocPartGalleryValues.CustomTableOfContents, DocPartGalleryValues.CustomBibliography, DocPartGalleryValues.Custom1, DocPartGalleryValues.Custom2, DocPartGalleryValues.Custom3, DocPartGalleryValues.Custom4, DocPartGalleryValues.Custom5];
export declare enum CaptionPositionValues {
    /** Position Caption Above Object. Serialized value: `above` */
    Above = "above",
    /** Position Caption Below Object. Serialized value: `below` */
    Below = "below"
}
export declare const CaptionPositionValuesArray: readonly [CaptionPositionValues.Above, CaptionPositionValues.Below];
export declare enum LevelJustificationValues {
    /** Align Left. Serialized value: `left` */
    Left = "left",
    /** Align Center. Serialized value: `center` */
    Center = "center",
    /** Align Right. Serialized value: `right` */
    Right = "right"
}
export declare const LevelJustificationValuesArray: readonly [LevelJustificationValues.Left, LevelJustificationValues.Center, LevelJustificationValues.Right];
export declare enum ShadingPatternValues {
    /** No Pattern. Serialized value: `nil` */
    Nil = "nil",
    /** No Pattern. Serialized value: `clear` */
    Clear = "clear",
    /** 100% Fill Pattern. Serialized value: `solid` */
    Solid = "solid",
    /** Horizontal Stripe Pattern. Serialized value: `horzStripe` */
    HorizontalStripe = "horzStripe",
    /** Vertical Stripe Pattern. Serialized value: `vertStripe` */
    VerticalStripe = "vertStripe",
    /** Reverse Diagonal Stripe Pattern. Serialized value: `reverseDiagStripe` */
    ReverseDiagonalStripe = "reverseDiagStripe",
    /** Diagonal Stripe Pattern. Serialized value: `diagStripe` */
    DiagonalStripe = "diagStripe",
    /** Horizontal Cross Pattern. Serialized value: `horzCross` */
    HorizontalCross = "horzCross",
    /** Diagonal Cross Pattern. Serialized value: `diagCross` */
    DiagonalCross = "diagCross",
    /** Thin Horizontal Stripe Pattern. Serialized value: `thinHorzStripe` */
    ThinHorizontalStripe = "thinHorzStripe",
    /** Thin Vertical Stripe Pattern. Serialized value: `thinVertStripe` */
    ThinVerticalStripe = "thinVertStripe",
    /** Thin Reverse Diagonal Stripe Pattern. Serialized value: `thinReverseDiagStripe` */
    ThinReverseDiagonalStripe = "thinReverseDiagStripe",
    /** Thin Diagonal Stripe Pattern. Serialized value: `thinDiagStripe` */
    ThinDiagonalStripe = "thinDiagStripe",
    /** Thin Horizontal Cross Pattern. Serialized value: `thinHorzCross` */
    ThinHorizontalCross = "thinHorzCross",
    /** Thin Diagonal Cross Pattern. Serialized value: `thinDiagCross` */
    ThinDiagonalCross = "thinDiagCross",
    /** 5% Fill Pattern. Serialized value: `pct5` */
    Percent5 = "pct5",
    /** 10% Fill Pattern. Serialized value: `pct10` */
    Percent10 = "pct10",
    /** 12.5% Fill Pattern. Serialized value: `pct12` */
    Percent12 = "pct12",
    /** 15% Fill Pattern. Serialized value: `pct15` */
    Percent15 = "pct15",
    /** 20% Fill Pattern. Serialized value: `pct20` */
    Percent20 = "pct20",
    /** 25% Fill Pattern. Serialized value: `pct25` */
    Percent25 = "pct25",
    /** 30% Fill Pattern. Serialized value: `pct30` */
    Percent30 = "pct30",
    /** 35% Fill Pattern. Serialized value: `pct35` */
    Percent35 = "pct35",
    /** 37.5% Fill Pattern. Serialized value: `pct37` */
    Percent37 = "pct37",
    /** 40% Fill Pattern. Serialized value: `pct40` */
    Percent40 = "pct40",
    /** 45% Fill Pattern. Serialized value: `pct45` */
    Percent45 = "pct45",
    /** 50% Fill Pattern. Serialized value: `pct50` */
    Percent50 = "pct50",
    /** 55% Fill Pattern. Serialized value: `pct55` */
    Percent55 = "pct55",
    /** 60% Fill Pattern. Serialized value: `pct60` */
    Percent60 = "pct60",
    /** 62.5% Fill Pattern. Serialized value: `pct62` */
    Percent62 = "pct62",
    /** 65% Fill Pattern. Serialized value: `pct65` */
    Percent65 = "pct65",
    /** 70% Fill Pattern. Serialized value: `pct70` */
    Percent70 = "pct70",
    /** 75% Fill Pattern. Serialized value: `pct75` */
    Percent75 = "pct75",
    /** 80% Fill Pattern. Serialized value: `pct80` */
    Percent80 = "pct80",
    /** 85% Fill Pattern. Serialized value: `pct85` */
    Percent85 = "pct85",
    /** 87.5% Fill Pattern. Serialized value: `pct87` */
    Percent87 = "pct87",
    /** 90% Fill Pattern. Serialized value: `pct90` */
    Percent90 = "pct90",
    /** 95% Fill Pattern. Serialized value: `pct95` */
    Percent95 = "pct95"
}
export declare const ShadingPatternValuesArray: readonly [ShadingPatternValues.Nil, ShadingPatternValues.Clear, ShadingPatternValues.Solid, ShadingPatternValues.HorizontalStripe, ShadingPatternValues.VerticalStripe, ShadingPatternValues.ReverseDiagonalStripe, ShadingPatternValues.DiagonalStripe, ShadingPatternValues.HorizontalCross, ShadingPatternValues.DiagonalCross, ShadingPatternValues.ThinHorizontalStripe, ShadingPatternValues.ThinVerticalStripe, ShadingPatternValues.ThinReverseDiagonalStripe, ShadingPatternValues.ThinDiagonalStripe, ShadingPatternValues.ThinHorizontalCross, ShadingPatternValues.ThinDiagonalCross, ShadingPatternValues.Percent5, ShadingPatternValues.Percent10, ShadingPatternValues.Percent12, ShadingPatternValues.Percent15, ShadingPatternValues.Percent20, ShadingPatternValues.Percent25, ShadingPatternValues.Percent30, ShadingPatternValues.Percent35, ShadingPatternValues.Percent37, ShadingPatternValues.Percent40, ShadingPatternValues.Percent45, ShadingPatternValues.Percent50, ShadingPatternValues.Percent55, ShadingPatternValues.Percent60, ShadingPatternValues.Percent62, ShadingPatternValues.Percent65, ShadingPatternValues.Percent70, ShadingPatternValues.Percent75, ShadingPatternValues.Percent80, ShadingPatternValues.Percent85, ShadingPatternValues.Percent87, ShadingPatternValues.Percent90, ShadingPatternValues.Percent95];
export declare enum StylePaneSortMethodsValues {
    /** undefined. Serialized value: `0000` */
    Zero = "0000",
    /** undefined. Serialized value: `name` */
    Name = "name",
    /** undefined. Serialized value: `0001` */
    One = "0001",
    /** undefined. Serialized value: `priority` */
    Priority = "priority",
    /** undefined. Serialized value: `0002` */
    Two = "0002",
    /** undefined. Serialized value: `font` */
    Font = "font",
    /** undefined. Serialized value: `0003` */
    Three = "0003",
    /** undefined. Serialized value: `basedOn` */
    BasedOn = "basedOn",
    /** undefined. Serialized value: `0004` */
    Four = "0004",
    /** undefined. Serialized value: `type` */
    Type = "type",
    /** undefined. Serialized value: `0005` */
    Five = "0005",
    /** undefined. Serialized value: `default` */
    Default = "default"
}
export declare const StylePaneSortMethodsValuesArray: readonly [StylePaneSortMethodsValues.Zero, StylePaneSortMethodsValues.Name, StylePaneSortMethodsValues.One, StylePaneSortMethodsValues.Priority, StylePaneSortMethodsValues.Two, StylePaneSortMethodsValues.Font, StylePaneSortMethodsValues.Three, StylePaneSortMethodsValues.BasedOn, StylePaneSortMethodsValues.Four, StylePaneSortMethodsValues.Type, StylePaneSortMethodsValues.Five, StylePaneSortMethodsValues.Default];
export declare enum DirectionValues {
    /** undefined. Serialized value: `ltr` */
    Ltr = "ltr",
    /** undefined. Serialized value: `rtl` */
    Rtl = "rtl"
}
export declare const DirectionValuesArray: readonly [DirectionValues.Ltr, DirectionValues.Rtl];
export declare enum CalendarValues {
    /** Gregorian. Serialized value: `gregorian` */
    Gregorian = "gregorian",
    /** Hijri. Serialized value: `hijri` */
    Hijri = "hijri",
    /** undefined. Serialized value: `umalqura` */
    Umalqura = "umalqura",
    /** Hebrew. Serialized value: `hebrew` */
    Hebrew = "hebrew",
    /** Taiwan. Serialized value: `taiwan` */
    Taiwan = "taiwan",
    /** Japanese Emperor Era. Serialized value: `japan` */
    Japan = "japan",
    /** Thai. Serialized value: `thai` */
    Thai = "thai",
    /** Korean Tangun Era. Serialized value: `korea` */
    Korea = "korea",
    /** Saka Era. Serialized value: `saka` */
    Saka = "saka",
    /** Gregorian transliterated English. Serialized value: `gregorianXlitEnglish` */
    GregorianTransliteratedEnglish = "gregorianXlitEnglish",
    /** Gregorian transliterated French. Serialized value: `gregorianXlitFrench` */
    GregorianTransliteratedFrench = "gregorianXlitFrench",
    /** undefined. Serialized value: `gregorianUs` */
    GregorianUs = "gregorianUs",
    /** undefined. Serialized value: `gregorianMeFrench` */
    GregorianMeFrench = "gregorianMeFrench",
    /** undefined. Serialized value: `gregorianArabic` */
    GregorianArabic = "gregorianArabic",
    /** undefined. Serialized value: `none` */
    None = "none"
}
export declare const CalendarValuesArray: readonly [CalendarValues.Gregorian, CalendarValues.Hijri, CalendarValues.Umalqura, CalendarValues.Hebrew, CalendarValues.Taiwan, CalendarValues.Japan, CalendarValues.Thai, CalendarValues.Korea, CalendarValues.Saka, CalendarValues.GregorianTransliteratedEnglish, CalendarValues.GregorianTransliteratedFrench, CalendarValues.GregorianUs, CalendarValues.GregorianMeFrench, CalendarValues.GregorianArabic, CalendarValues.None];
export declare enum NumberFormatValues {
    /** Decimal Numbers. Serialized value: `decimal` */
    Decimal = "decimal",
    /** Uppercase Roman Numerals. Serialized value: `upperRoman` */
    UpperRoman = "upperRoman",
    /** Lowercase Roman Numerals. Serialized value: `lowerRoman` */
    LowerRoman = "lowerRoman",
    /** Uppercase Latin Alphabet. Serialized value: `upperLetter` */
    UpperLetter = "upperLetter",
    /** Lowercase Latin Alphabet. Serialized value: `lowerLetter` */
    LowerLetter = "lowerLetter",
    /** Ordinal. Serialized value: `ordinal` */
    Ordinal = "ordinal",
    /** Cardinal Text. Serialized value: `cardinalText` */
    CardinalText = "cardinalText",
    /** Ordinal Text. Serialized value: `ordinalText` */
    OrdinalText = "ordinalText",
    /** Hexadecimal Numbering. Serialized value: `hex` */
    Hex = "hex",
    /** Chicago Manual of Style. Serialized value: `chicago` */
    Chicago = "chicago",
    /** Ideographs. Serialized value: `ideographDigital` */
    IdeographDigital = "ideographDigital",
    /** Japanese Counting System. Serialized value: `japaneseCounting` */
    JapaneseCounting = "japaneseCounting",
    /** AIUEO Order Hiragana. Serialized value: `aiueo` */
    Aiueo = "aiueo",
    /** Iroha Ordered Katakana. Serialized value: `iroha` */
    Iroha = "iroha",
    /** Double Byte Arabic Numerals. Serialized value: `decimalFullWidth` */
    DecimalFullWidth = "decimalFullWidth",
    /** Single Byte Arabic Numerals. Serialized value: `decimalHalfWidth` */
    DecimalHalfWidth = "decimalHalfWidth",
    /** Japanese Legal Numbering. Serialized value: `japaneseLegal` */
    JapaneseLegal = "japaneseLegal",
    /** Japanese Digital Ten Thousand Counting System. Serialized value: `japaneseDigitalTenThousand` */
    JapaneseDigitalTenThousand = "japaneseDigitalTenThousand",
    /** Decimal Numbers Enclosed in a Circle. Serialized value: `decimalEnclosedCircle` */
    DecimalEnclosedCircle = "decimalEnclosedCircle",
    /** Double Byte Arabic Numerals Alternate. Serialized value: `decimalFullWidth2` */
    DecimalFullWidth2 = "decimalFullWidth2",
    /** Full-Width AIUEO Order Hiragana. Serialized value: `aiueoFullWidth` */
    AiueoFullWidth = "aiueoFullWidth",
    /** Full-Width Iroha Ordered Katakana. Serialized value: `irohaFullWidth` */
    IrohaFullWidth = "irohaFullWidth",
    /** Initial Zero Arabic Numerals. Serialized value: `decimalZero` */
    DecimalZero = "decimalZero",
    /** Bullet. Serialized value: `bullet` */
    Bullet = "bullet",
    /** Korean Ganada Numbering. Serialized value: `ganada` */
    Ganada = "ganada",
    /** Korean Chosung Numbering. Serialized value: `chosung` */
    Chosung = "chosung",
    /** Decimal Numbers Followed by a Period. Serialized value: `decimalEnclosedFullstop` */
    DecimalEnclosedFullstop = "decimalEnclosedFullstop",
    /** Decimal Numbers Enclosed in Parenthesis. Serialized value: `decimalEnclosedParen` */
    DecimalEnclosedParen = "decimalEnclosedParen",
    /** Decimal Numbers Enclosed in a Circle. Serialized value: `decimalEnclosedCircleChinese` */
    DecimalEnclosedCircleChinese = "decimalEnclosedCircleChinese",
    /** Ideographs Enclosed in a Circle. Serialized value: `ideographEnclosedCircle` */
    IdeographEnclosedCircle = "ideographEnclosedCircle",
    /** Traditional Ideograph Format. Serialized value: `ideographTraditional` */
    IdeographTraditional = "ideographTraditional",
    /** Zodiac Ideograph Format. Serialized value: `ideographZodiac` */
    IdeographZodiac = "ideographZodiac",
    /** Traditional Zodiac Ideograph Format. Serialized value: `ideographZodiacTraditional` */
    IdeographZodiacTraditional = "ideographZodiacTraditional",
    /** Taiwanese Counting System. Serialized value: `taiwaneseCounting` */
    TaiwaneseCounting = "taiwaneseCounting",
    /** Traditional Legal Ideograph Format. Serialized value: `ideographLegalTraditional` */
    IdeographLegalTraditional = "ideographLegalTraditional",
    /** Taiwanese Counting Thousand System. Serialized value: `taiwaneseCountingThousand` */
    TaiwaneseCountingThousand = "taiwaneseCountingThousand",
    /** Taiwanese Digital Counting System. Serialized value: `taiwaneseDigital` */
    TaiwaneseDigital = "taiwaneseDigital",
    /** Chinese Counting System. Serialized value: `chineseCounting` */
    ChineseCounting = "chineseCounting",
    /** Chinese Legal Simplified Format. Serialized value: `chineseLegalSimplified` */
    ChineseLegalSimplified = "chineseLegalSimplified",
    /** Chinese Counting Thousand System. Serialized value: `chineseCountingThousand` */
    ChineseCountingThousand = "chineseCountingThousand",
    /** Korean Digital Counting System. Serialized value: `koreanDigital` */
    KoreanDigital = "koreanDigital",
    /** Korean Counting System. Serialized value: `koreanCounting` */
    KoreanCounting = "koreanCounting",
    /** Korean Legal Numbering. Serialized value: `koreanLegal` */
    KoreanLegal = "koreanLegal",
    /** Korean Digital Counting System Alternate. Serialized value: `koreanDigital2` */
    KoreanDigital2 = "koreanDigital2",
    /** Vietnamese Numerals. Serialized value: `vietnameseCounting` */
    VietnameseCounting = "vietnameseCounting",
    /** Lowercase Russian Alphabet. Serialized value: `russianLower` */
    RussianLower = "russianLower",
    /** Uppercase Russian Alphabet. Serialized value: `russianUpper` */
    RussianUpper = "russianUpper",
    /** No Numbering. Serialized value: `none` */
    None = "none",
    /** Number With Dashes. Serialized value: `numberInDash` */
    NumberInDash = "numberInDash",
    /** Hebrew Numerals. Serialized value: `hebrew1` */
    Hebrew1 = "hebrew1",
    /** Hebrew Alphabet. Serialized value: `hebrew2` */
    Hebrew2 = "hebrew2",
    /** Arabic Alphabet. Serialized value: `arabicAlpha` */
    ArabicAlpha = "arabicAlpha",
    /** Arabic Abjad Numerals. Serialized value: `arabicAbjad` */
    ArabicAbjad = "arabicAbjad",
    /** Hindi Vowels. Serialized value: `hindiVowels` */
    HindiVowels = "hindiVowels",
    /** Hindi Consonants. Serialized value: `hindiConsonants` */
    HindiConsonants = "hindiConsonants",
    /** Hindi Numbers. Serialized value: `hindiNumbers` */
    HindiNumbers = "hindiNumbers",
    /** Hindi Counting System. Serialized value: `hindiCounting` */
    HindiCounting = "hindiCounting",
    /** Thai Letters. Serialized value: `thaiLetters` */
    ThaiLetters = "thaiLetters",
    /** Thai Numerals. Serialized value: `thaiNumbers` */
    ThaiNumbers = "thaiNumbers",
    /** Thai Counting System. Serialized value: `thaiCounting` */
    ThaiCounting = "thaiCounting",
    /** undefined. Serialized value: `bahtText` */
    BahtText = "bahtText",
    /** undefined. Serialized value: `dollarText` */
    DollarText = "dollarText",
    /** undefined. Serialized value: `custom` */
    Custom = "custom"
}
export declare const NumberFormatValuesArray: readonly [NumberFormatValues.Decimal, NumberFormatValues.UpperRoman, NumberFormatValues.LowerRoman, NumberFormatValues.UpperLetter, NumberFormatValues.LowerLetter, NumberFormatValues.Ordinal, NumberFormatValues.CardinalText, NumberFormatValues.OrdinalText, NumberFormatValues.Hex, NumberFormatValues.Chicago, NumberFormatValues.IdeographDigital, NumberFormatValues.JapaneseCounting, NumberFormatValues.Aiueo, NumberFormatValues.Iroha, NumberFormatValues.DecimalFullWidth, NumberFormatValues.DecimalHalfWidth, NumberFormatValues.JapaneseLegal, NumberFormatValues.JapaneseDigitalTenThousand, NumberFormatValues.DecimalEnclosedCircle, NumberFormatValues.DecimalFullWidth2, NumberFormatValues.AiueoFullWidth, NumberFormatValues.IrohaFullWidth, NumberFormatValues.DecimalZero, NumberFormatValues.Bullet, NumberFormatValues.Ganada, NumberFormatValues.Chosung, NumberFormatValues.DecimalEnclosedFullstop, NumberFormatValues.DecimalEnclosedParen, NumberFormatValues.DecimalEnclosedCircleChinese, NumberFormatValues.IdeographEnclosedCircle, NumberFormatValues.IdeographTraditional, NumberFormatValues.IdeographZodiac, NumberFormatValues.IdeographZodiacTraditional, NumberFormatValues.TaiwaneseCounting, NumberFormatValues.IdeographLegalTraditional, NumberFormatValues.TaiwaneseCountingThousand, NumberFormatValues.TaiwaneseDigital, NumberFormatValues.ChineseCounting, NumberFormatValues.ChineseLegalSimplified, NumberFormatValues.ChineseCountingThousand, NumberFormatValues.KoreanDigital, NumberFormatValues.KoreanCounting, NumberFormatValues.KoreanLegal, NumberFormatValues.KoreanDigital2, NumberFormatValues.VietnameseCounting, NumberFormatValues.RussianLower, NumberFormatValues.RussianUpper, NumberFormatValues.None, NumberFormatValues.NumberInDash, NumberFormatValues.Hebrew1, NumberFormatValues.Hebrew2, NumberFormatValues.ArabicAlpha, NumberFormatValues.ArabicAbjad, NumberFormatValues.HindiVowels, NumberFormatValues.HindiConsonants, NumberFormatValues.HindiNumbers, NumberFormatValues.HindiCounting, NumberFormatValues.ThaiLetters, NumberFormatValues.ThaiNumbers, NumberFormatValues.ThaiCounting, NumberFormatValues.BahtText, NumberFormatValues.DollarText, NumberFormatValues.Custom];
export declare enum TextDirectionValues {
    /** Left to Right, Top to Bottom. Serialized value: `lrTb` */
    LefToRightTopToBottom = "lrTb",
    /** undefined. Serialized value: `tb` */
    LeftToRightTopToBottom2010 = "tb",
    /** Top to Bottom, Right to Left. Serialized value: `tbRl` */
    TopToBottomRightToLeft = "tbRl",
    /** undefined. Serialized value: `rl` */
    TopToBottomRightToLeft2010 = "rl",
    /** Bottom to Top, Left to Right. Serialized value: `btLr` */
    BottomToTopLeftToRight = "btLr",
    /** undefined. Serialized value: `lr` */
    BottomToTopLeftToRight2010 = "lr",
    /** Left to Right, Top to Bottom Rotated. Serialized value: `lrTbV` */
    LefttoRightTopToBottomRotated = "lrTbV",
    /** undefined. Serialized value: `tbV` */
    LeftToRightTopToBottomRotated2010 = "tbV",
    /** Top to Bottom, Right to Left Rotated. Serialized value: `tbRlV` */
    TopToBottomRightToLeftRotated = "tbRlV",
    /** undefined. Serialized value: `rlV` */
    TopToBottomRightToLeftRotated2010 = "rlV",
    /** Top to Bottom, Left to Right Rotated. Serialized value: `tbLrV` */
    TopToBottomLeftToRightRotated = "tbLrV",
    /** undefined. Serialized value: `lrV` */
    TopToBottomLeftToRightRotated2010 = "lrV"
}
export declare const TextDirectionValuesArray: readonly [TextDirectionValues.LefToRightTopToBottom, TextDirectionValues.LeftToRightTopToBottom2010, TextDirectionValues.TopToBottomRightToLeft, TextDirectionValues.TopToBottomRightToLeft2010, TextDirectionValues.BottomToTopLeftToRight, TextDirectionValues.BottomToTopLeftToRight2010, TextDirectionValues.LefttoRightTopToBottomRotated, TextDirectionValues.LeftToRightTopToBottomRotated2010, TextDirectionValues.TopToBottomRightToLeftRotated, TextDirectionValues.TopToBottomRightToLeftRotated2010, TextDirectionValues.TopToBottomLeftToRightRotated, TextDirectionValues.TopToBottomLeftToRightRotated2010];
export declare enum CryptAlgorithmValues {
    /** Any Type. Serialized value: `typeAny` */
    TypeAny = "typeAny",
    /** undefined. Serialized value: `custom` */
    Custom = "custom"
}
export declare const CryptAlgorithmValuesArray: readonly [CryptAlgorithmValues.TypeAny, CryptAlgorithmValues.Custom];
export declare enum CryptAlgorithmClassValues {
    /** Hashing. Serialized value: `hash` */
    Hash = "hash",
    /** undefined. Serialized value: `custom` */
    Custom = "custom"
}
export declare const CryptAlgorithmClassValuesArray: readonly [CryptAlgorithmClassValues.Hash, CryptAlgorithmClassValues.Custom];
export declare enum CryptProviderValues {
    /** AES Provider. Serialized value: `rsaAES` */
    RsaAdvancedEncryptionStandard = "rsaAES",
    /** Any Provider. Serialized value: `rsaFull` */
    RsaFull = "rsaFull",
    /** undefined. Serialized value: `custom` */
    Custom = "custom"
}
export declare const CryptProviderValuesArray: readonly [CryptProviderValues.RsaAdvancedEncryptionStandard, CryptProviderValues.RsaFull, CryptProviderValues.Custom];
export declare enum JustificationValues {
    /** Align Left. Serialized value: `left` */
    Left = "left",
    /** undefined. Serialized value: `start` */
    Start = "start",
    /** Align Center. Serialized value: `center` */
    Center = "center",
    /** Align Right. Serialized value: `right` */
    Right = "right",
    /** undefined. Serialized value: `end` */
    End = "end",
    /** Justified. Serialized value: `both` */
    Both = "both",
    /** Medium Kashida Length. Serialized value: `mediumKashida` */
    MediumKashida = "mediumKashida",
    /** Distribute All Characters Equally. Serialized value: `distribute` */
    Distribute = "distribute",
    /** Align to List Tab. Serialized value: `numTab` */
    NumTab = "numTab",
    /** Widest Kashida Length. Serialized value: `highKashida` */
    HighKashida = "highKashida",
    /** Low Kashida Length. Serialized value: `lowKashida` */
    LowKashida = "lowKashida",
    /** Thai Language Justification. Serialized value: `thaiDistribute` */
    ThaiDistribute = "thaiDistribute"
}
export declare const JustificationValuesArray: readonly [JustificationValues.Left, JustificationValues.Start, JustificationValues.Center, JustificationValues.Right, JustificationValues.End, JustificationValues.Both, JustificationValues.MediumKashida, JustificationValues.Distribute, JustificationValues.NumTab, JustificationValues.HighKashida, JustificationValues.LowKashida, JustificationValues.ThaiDistribute];
export declare enum TabStopValues {
    /** No Tab Stop. Serialized value: `clear` */
    Clear = "clear",
    /** Left Tab. Serialized value: `left` */
    Left = "left",
    /** undefined. Serialized value: `start` */
    Start = "start",
    /** Centered Tab. Serialized value: `center` */
    Center = "center",
    /** Right Tab. Serialized value: `right` */
    Right = "right",
    /** undefined. Serialized value: `end` */
    End = "end",
    /** Decimal Tab. Serialized value: `decimal` */
    Decimal = "decimal",
    /** Bar Tab. Serialized value: `bar` */
    Bar = "bar",
    /** List Tab. Serialized value: `num` */
    Number = "num"
}
export declare const TabStopValuesArray: readonly [TabStopValues.Clear, TabStopValues.Left, TabStopValues.Start, TabStopValues.Center, TabStopValues.Right, TabStopValues.End, TabStopValues.Decimal, TabStopValues.Bar, TabStopValues.Number];
export declare enum BorderValues {
    /** No Border. Serialized value: `nil` */
    Nil = "nil",
    /** No Border. Serialized value: `none` */
    None = "none",
    /** Single Line Border. Serialized value: `single` */
    Single = "single",
    /** Single Line Border. Serialized value: `thick` */
    Thick = "thick",
    /** Double Line Border. Serialized value: `double` */
    Double = "double",
    /** Dotted Line Border. Serialized value: `dotted` */
    Dotted = "dotted",
    /** Dashed Line Border. Serialized value: `dashed` */
    Dashed = "dashed",
    /** Dot Dash Line Border. Serialized value: `dotDash` */
    DotDash = "dotDash",
    /** Dot Dot Dash Line Border. Serialized value: `dotDotDash` */
    DotDotDash = "dotDotDash",
    /** Triple Line Border. Serialized value: `triple` */
    Triple = "triple",
    /** Thin, Thick Line Border. Serialized value: `thinThickSmallGap` */
    ThinThickSmallGap = "thinThickSmallGap",
    /** Thick, Thin Line Border. Serialized value: `thickThinSmallGap` */
    ThickThinSmallGap = "thickThinSmallGap",
    /** Thin, Thick, Thin Line Border. Serialized value: `thinThickThinSmallGap` */
    ThinThickThinSmallGap = "thinThickThinSmallGap",
    /** Thin, Thick Line Border. Serialized value: `thinThickMediumGap` */
    ThinThickMediumGap = "thinThickMediumGap",
    /** Thick, Thin Line Border. Serialized value: `thickThinMediumGap` */
    ThickThinMediumGap = "thickThinMediumGap",
    /** Thin, Thick, Thin Line Border. Serialized value: `thinThickThinMediumGap` */
    ThinThickThinMediumGap = "thinThickThinMediumGap",
    /** Thin, Thick Line Border. Serialized value: `thinThickLargeGap` */
    ThinThickLargeGap = "thinThickLargeGap",
    /** Thick, Thin Line Border. Serialized value: `thickThinLargeGap` */
    ThickThinLargeGap = "thickThinLargeGap",
    /** Thin, Thick, Thin Line Border. Serialized value: `thinThickThinLargeGap` */
    ThinThickThinLargeGap = "thinThickThinLargeGap",
    /** Wavy Line Border. Serialized value: `wave` */
    Wave = "wave",
    /** Double Wave Line Border. Serialized value: `doubleWave` */
    DoubleWave = "doubleWave",
    /** Dashed Line Border. Serialized value: `dashSmallGap` */
    DashSmallGap = "dashSmallGap",
    /** Dash Dot Strokes Line Border. Serialized value: `dashDotStroked` */
    DashDotStroked = "dashDotStroked",
    /** 3D Embossed Line Border. Serialized value: `threeDEmboss` */
    ThreeDEmboss = "threeDEmboss",
    /** 3D Engraved Line Border. Serialized value: `threeDEngrave` */
    ThreeDEngrave = "threeDEngrave",
    /** Outset Line Border. Serialized value: `outset` */
    Outset = "outset",
    /** Inset Line Border. Serialized value: `inset` */
    Inset = "inset",
    /** Apples Art Border. Serialized value: `apples` */
    Apples = "apples",
    /** Arched Scallops Art Border. Serialized value: `archedScallops` */
    ArchedScallops = "archedScallops",
    /** Baby Pacifier Art Border. Serialized value: `babyPacifier` */
    BabyPacifier = "babyPacifier",
    /** Baby Rattle Art Border. Serialized value: `babyRattle` */
    BabyRattle = "babyRattle",
    /** Three Color Balloons Art Border. Serialized value: `balloons3Colors` */
    Balloons3Colors = "balloons3Colors",
    /** Hot Air Balloons Art Border. Serialized value: `balloonsHotAir` */
    BalloonsHotAir = "balloonsHotAir",
    /** Black Dash Art Border. Serialized value: `basicBlackDashes` */
    BasicBlackDashes = "basicBlackDashes",
    /** Black Dot Art Border. Serialized value: `basicBlackDots` */
    BasicBlackDots = "basicBlackDots",
    /** Black Square Art Border. Serialized value: `basicBlackSquares` */
    BasicBlackSquares = "basicBlackSquares",
    /** Thin Line Art Border. Serialized value: `basicThinLines` */
    BasicThinLines = "basicThinLines",
    /** White Dash Art Border. Serialized value: `basicWhiteDashes` */
    BasicWhiteDashes = "basicWhiteDashes",
    /** White Dot Art Border. Serialized value: `basicWhiteDots` */
    BasicWhiteDots = "basicWhiteDots",
    /** White Square Art Border. Serialized value: `basicWhiteSquares` */
    BasicWhiteSquares = "basicWhiteSquares",
    /** Wide Inline Art Border. Serialized value: `basicWideInline` */
    BasicWideInline = "basicWideInline",
    /** Wide Midline Art Border. Serialized value: `basicWideMidline` */
    BasicWideMidline = "basicWideMidline",
    /** Wide Outline Art Border. Serialized value: `basicWideOutline` */
    BasicWideOutline = "basicWideOutline",
    /** Bats Art Border. Serialized value: `bats` */
    Bats = "bats",
    /** Birds Art Border. Serialized value: `birds` */
    Birds = "birds",
    /** Birds Flying Art Border. Serialized value: `birdsFlight` */
    BirdsFlight = "birdsFlight",
    /** Cabin Art Border. Serialized value: `cabins` */
    Cabins = "cabins",
    /** Cake Art Border. Serialized value: `cakeSlice` */
    CakeSlice = "cakeSlice",
    /** Candy Corn Art Border. Serialized value: `candyCorn` */
    CandyCorn = "candyCorn",
    /** Knot Work Art Border. Serialized value: `celticKnotwork` */
    CelticKnotwork = "celticKnotwork",
    /** Certificate Banner Art Border. Serialized value: `certificateBanner` */
    CertificateBanner = "certificateBanner",
    /** Chain Link Art Border. Serialized value: `chainLink` */
    ChainLink = "chainLink",
    /** Champagne Bottle Art Border. Serialized value: `champagneBottle` */
    ChampagneBottle = "champagneBottle",
    /** Black and White Bar Art Border. Serialized value: `checkedBarBlack` */
    CheckedBarBlack = "checkedBarBlack",
    /** Color Checked Bar Art Border. Serialized value: `checkedBarColor` */
    CheckedBarColor = "checkedBarColor",
    /** Checkerboard Art Border. Serialized value: `checkered` */
    Checkered = "checkered",
    /** Christmas Tree Art Border. Serialized value: `christmasTree` */
    ChristmasTree = "christmasTree",
    /** Circles And Lines Art Border. Serialized value: `circlesLines` */
    CirclesLines = "circlesLines",
    /** Circles and Rectangles Art Border. Serialized value: `circlesRectangles` */
    CirclesRectangles = "circlesRectangles",
    /** Wave Art Border. Serialized value: `classicalWave` */
    ClassicalWave = "classicalWave",
    /** Clocks Art Border. Serialized value: `clocks` */
    Clocks = "clocks",
    /** Compass Art Border. Serialized value: `compass` */
    Compass = "compass",
    /** Confetti Art Border. Serialized value: `confetti` */
    Confetti = "confetti",
    /** Confetti Art Border. Serialized value: `confettiGrays` */
    ConfettiGrays = "confettiGrays",
    /** Confetti Art Border. Serialized value: `confettiOutline` */
    ConfettiOutline = "confettiOutline",
    /** Confetti Streamers Art Border. Serialized value: `confettiStreamers` */
    ConfettiStreamers = "confettiStreamers",
    /** Confetti Art Border. Serialized value: `confettiWhite` */
    ConfettiWhite = "confettiWhite",
    /** Corner Triangle Art Border. Serialized value: `cornerTriangles` */
    CornerTriangles = "cornerTriangles",
    /** Dashed Line Art Border. Serialized value: `couponCutoutDashes` */
    CouponCutoutDashes = "couponCutoutDashes",
    /** Dotted Line Art Border. Serialized value: `couponCutoutDots` */
    CouponCutoutDots = "couponCutoutDots",
    /** Maze Art Border. Serialized value: `crazyMaze` */
    CrazyMaze = "crazyMaze",
    /** Butterfly Art Border. Serialized value: `creaturesButterfly` */
    CreaturesButterfly = "creaturesButterfly",
    /** Fish Art Border. Serialized value: `creaturesFish` */
    CreaturesFish = "creaturesFish",
    /** Insects Art Border. Serialized value: `creaturesInsects` */
    CreaturesInsects = "creaturesInsects",
    /** Ladybug Art Border. Serialized value: `creaturesLadyBug` */
    CreaturesLadyBug = "creaturesLadyBug",
    /** Cross-stitch Art Border. Serialized value: `crossStitch` */
    CrossStitch = "crossStitch",
    /** Cupid Art Border. Serialized value: `cup` */
    Cup = "cup",
    /** Archway Art Border. Serialized value: `decoArch` */
    DecoArch = "decoArch",
    /** Color Archway Art Border. Serialized value: `decoArchColor` */
    DecoArchColor = "decoArchColor",
    /** Blocks Art Border. Serialized value: `decoBlocks` */
    DecoBlocks = "decoBlocks",
    /** Gray Diamond Art Border. Serialized value: `diamondsGray` */
    DiamondsGray = "diamondsGray",
    /** Double D Art Border. Serialized value: `doubleD` */
    DoubleD = "doubleD",
    /** Diamond Art Border. Serialized value: `doubleDiamonds` */
    DoubleDiamonds = "doubleDiamonds",
    /** Earth Art Border. Serialized value: `earth1` */
    Earth1 = "earth1",
    /** Earth Art Border. Serialized value: `earth2` */
    Earth2 = "earth2",
    /** Shadowed Square Art Border. Serialized value: `eclipsingSquares1` */
    EclipsingSquares1 = "eclipsingSquares1",
    /** Shadowed Square Art Border. Serialized value: `eclipsingSquares2` */
    EclipsingSquares2 = "eclipsingSquares2",
    /** Painted Egg Art Border. Serialized value: `eggsBlack` */
    EggsBlack = "eggsBlack",
    /** Fans Art Border. Serialized value: `fans` */
    Fans = "fans",
    /** Film Reel Art Border. Serialized value: `film` */
    Film = "film",
    /** Firecracker Art Border. Serialized value: `firecrackers` */
    Firecrackers = "firecrackers",
    /** Flowers Art Border. Serialized value: `flowersBlockPrint` */
    FlowersBlockPrint = "flowersBlockPrint",
    /** Daisy Art Border. Serialized value: `flowersDaisies` */
    FlowersDaisies = "flowersDaisies",
    /** Flowers Art Border. Serialized value: `flowersModern1` */
    FlowersModern1 = "flowersModern1",
    /** Flowers Art Border. Serialized value: `flowersModern2` */
    FlowersModern2 = "flowersModern2",
    /** Pansy Art Border. Serialized value: `flowersPansy` */
    FlowersPansy = "flowersPansy",
    /** Red Rose Art Border. Serialized value: `flowersRedRose` */
    FlowersRedRose = "flowersRedRose",
    /** Roses Art Border. Serialized value: `flowersRoses` */
    FlowersRoses = "flowersRoses",
    /** Flowers in a Teacup Art Border. Serialized value: `flowersTeacup` */
    FlowersTeacup = "flowersTeacup",
    /** Small Flower Art Border. Serialized value: `flowersTiny` */
    FlowersTiny = "flowersTiny",
    /** Gems Art Border. Serialized value: `gems` */
    Gems = "gems",
    /** Gingerbread Man Art Border. Serialized value: `gingerbreadMan` */
    GingerbreadMan = "gingerbreadMan",
    /** Triangle Gradient Art Border. Serialized value: `gradient` */
    Gradient = "gradient",
    /** Handmade Art Border. Serialized value: `handmade1` */
    Handmade1 = "handmade1",
    /** Handmade Art Border. Serialized value: `handmade2` */
    Handmade2 = "handmade2",
    /** Heart-Shaped Balloon Art Border. Serialized value: `heartBalloon` */
    HeartBalloon = "heartBalloon",
    /** Gray Heart Art Border. Serialized value: `heartGray` */
    HeartGray = "heartGray",
    /** Hearts Art Border. Serialized value: `hearts` */
    Hearts = "hearts",
    /** Pattern Art Border. Serialized value: `heebieJeebies` */
    HeebieJeebies = "heebieJeebies",
    /** Holly Art Border. Serialized value: `holly` */
    Holly = "holly",
    /** House Art Border. Serialized value: `houseFunky` */
    HouseFunky = "houseFunky",
    /** Circular Art Border. Serialized value: `hypnotic` */
    Hypnotic = "hypnotic",
    /** Ice Cream Cone Art Border. Serialized value: `iceCreamCones` */
    IceCreamCones = "iceCreamCones",
    /** Light Bulb Art Border. Serialized value: `lightBulb` */
    LightBulb = "lightBulb",
    /** Lightning Art Border. Serialized value: `lightning1` */
    Lightning1 = "lightning1",
    /** Lightning Art Border. Serialized value: `lightning2` */
    Lightning2 = "lightning2",
    /** Map Pins Art Border. Serialized value: `mapPins` */
    MapPins = "mapPins",
    /** Maple Leaf Art Border. Serialized value: `mapleLeaf` */
    MapleLeaf = "mapleLeaf",
    /** Muffin Art Border. Serialized value: `mapleMuffins` */
    MapleMuffins = "mapleMuffins",
    /** Marquee Art Border. Serialized value: `marquee` */
    Marquee = "marquee",
    /** Marquee Art Border. Serialized value: `marqueeToothed` */
    MarqueeToothed = "marqueeToothed",
    /** Moon Art Border. Serialized value: `moons` */
    Moons = "moons",
    /** Mosaic Art Border. Serialized value: `mosaic` */
    Mosaic = "mosaic",
    /** Musical Note Art Border. Serialized value: `musicNotes` */
    MusicNotes = "musicNotes",
    /** Patterned Art Border. Serialized value: `northwest` */
    Northwest = "northwest",
    /** Oval Art Border. Serialized value: `ovals` */
    Ovals = "ovals",
    /** Package Art Border. Serialized value: `packages` */
    Packages = "packages",
    /** Black Palm Tree Art Border. Serialized value: `palmsBlack` */
    PalmsBlack = "palmsBlack",
    /** Color Palm Tree Art Border. Serialized value: `palmsColor` */
    PalmsColor = "palmsColor",
    /** Paper Clip Art Border. Serialized value: `paperClips` */
    PaperClips = "paperClips",
    /** Papyrus Art Border. Serialized value: `papyrus` */
    Papyrus = "papyrus",
    /** Party Favor Art Border. Serialized value: `partyFavor` */
    PartyFavor = "partyFavor",
    /** Party Glass Art Border. Serialized value: `partyGlass` */
    PartyGlass = "partyGlass",
    /** Pencils Art Border. Serialized value: `pencils` */
    Pencils = "pencils",
    /** Character Art Border. Serialized value: `people` */
    People = "people",
    /** Waving Character Border. Serialized value: `peopleWaving` */
    PeopleWaving = "peopleWaving",
    /** Character With Hat Art Border. Serialized value: `peopleHats` */
    PeopleHats = "peopleHats",
    /** Poinsettia Art Border. Serialized value: `poinsettias` */
    Poinsettias = "poinsettias",
    /** Postage Stamp Art Border. Serialized value: `postageStamp` */
    PostageStamp = "postageStamp",
    /** Pumpkin Art Border. Serialized value: `pumpkin1` */
    Pumpkin1 = "pumpkin1",
    /** Push Pin Art Border. Serialized value: `pushPinNote2` */
    PushPinNote2 = "pushPinNote2",
    /** Push Pin Art Border. Serialized value: `pushPinNote1` */
    PushPinNote1 = "pushPinNote1",
    /** Pyramid Art Border. Serialized value: `pyramids` */
    Pyramids = "pyramids",
    /** Pyramid Art Border. Serialized value: `pyramidsAbove` */
    PyramidsAbove = "pyramidsAbove",
    /** Quadrants Art Border. Serialized value: `quadrants` */
    Quadrants = "quadrants",
    /** Rings Art Border. Serialized value: `rings` */
    Rings = "rings",
    /** Safari Art Border. Serialized value: `safari` */
    Safari = "safari",
    /** Saw tooth Art Border. Serialized value: `sawtooth` */
    Sawtooth = "sawtooth",
    /** Gray Saw tooth Art Border. Serialized value: `sawtoothGray` */
    SawtoothGray = "sawtoothGray",
    /** Scared Cat Art Border. Serialized value: `scaredCat` */
    ScaredCat = "scaredCat",
    /** Umbrella Art Border. Serialized value: `seattle` */
    Seattle = "seattle",
    /** Shadowed Squares Art Border. Serialized value: `shadowedSquares` */
    ShadowedSquares = "shadowedSquares",
    /** Shark Tooth Art Border. Serialized value: `sharksTeeth` */
    SharksTeeth = "sharksTeeth",
    /** Bird Tracks Art Border. Serialized value: `shorebirdTracks` */
    ShorebirdTracks = "shorebirdTracks",
    /** Rocket Art Border. Serialized value: `skyrocket` */
    Skyrocket = "skyrocket",
    /** Snowflake Art Border. Serialized value: `snowflakeFancy` */
    SnowflakeFancy = "snowflakeFancy",
    /** Snowflake Art Border. Serialized value: `snowflakes` */
    Snowflakes = "snowflakes",
    /** Sombrero Art Border. Serialized value: `sombrero` */
    Sombrero = "sombrero",
    /** Southwest-themed Art Border. Serialized value: `southwest` */
    Southwest = "southwest",
    /** Stars Art Border. Serialized value: `stars` */
    Stars = "stars",
    /** Stars On Top Art Border. Serialized value: `starsTop` */
    StarsTop = "starsTop",
    /** 3-D Stars Art Border. Serialized value: `stars3d` */
    Stars3d = "stars3d",
    /** Stars Art Border. Serialized value: `starsBlack` */
    StarsBlack = "starsBlack",
    /** Stars With Shadows Art Border. Serialized value: `starsShadowed` */
    StarsShadowed = "starsShadowed",
    /** Sun Art Border. Serialized value: `sun` */
    Sun = "sun",
    /** Whirligig Art Border. Serialized value: `swirligig` */
    Swirligig = "swirligig",
    /** Torn Paper Art Border. Serialized value: `tornPaper` */
    TornPaper = "tornPaper",
    /** Black Torn Paper Art Border. Serialized value: `tornPaperBlack` */
    TornPaperBlack = "tornPaperBlack",
    /** Tree Art Border. Serialized value: `trees` */
    Trees = "trees",
    /** Triangle Art Border. Serialized value: `triangleParty` */
    TriangleParty = "triangleParty",
    /** Triangles Art Border. Serialized value: `triangles` */
    Triangles = "triangles",
    /** Tribal Art Border One. Serialized value: `tribal1` */
    Tribal1 = "tribal1",
    /** Tribal Art Border Two. Serialized value: `tribal2` */
    Tribal2 = "tribal2",
    /** Tribal Art Border Three. Serialized value: `tribal3` */
    Tribal3 = "tribal3",
    /** Tribal Art Border Four. Serialized value: `tribal4` */
    Tribal4 = "tribal4",
    /** Tribal Art Border Five. Serialized value: `tribal5` */
    Tribal5 = "tribal5",
    /** Tribal Art Border Six. Serialized value: `tribal6` */
    Tribal6 = "tribal6",
    /** undefined. Serialized value: `triangle1` */
    Triangle1 = "triangle1",
    /** undefined. Serialized value: `triangle2` */
    Triangle2 = "triangle2",
    /** undefined. Serialized value: `triangleCircle1` */
    TriangleCircle1 = "triangleCircle1",
    /** undefined. Serialized value: `triangleCircle2` */
    TriangleCircle2 = "triangleCircle2",
    /** undefined. Serialized value: `shapes1` */
    Shapes1 = "shapes1",
    /** undefined. Serialized value: `shapes2` */
    Shapes2 = "shapes2",
    /** Twisted Lines Art Border. Serialized value: `twistedLines1` */
    TwistedLines1 = "twistedLines1",
    /** Twisted Lines Art Border. Serialized value: `twistedLines2` */
    TwistedLines2 = "twistedLines2",
    /** Vine Art Border. Serialized value: `vine` */
    Vine = "vine",
    /** Wavy Line Art Border. Serialized value: `waveline` */
    Waveline = "waveline",
    /** Weaving Angles Art Border. Serialized value: `weavingAngles` */
    WeavingAngles = "weavingAngles",
    /** Weaving Braid Art Border. Serialized value: `weavingBraid` */
    WeavingBraid = "weavingBraid",
    /** Weaving Ribbon Art Border. Serialized value: `weavingRibbon` */
    WeavingRibbon = "weavingRibbon",
    /** Weaving Strips Art Border. Serialized value: `weavingStrips` */
    WeavingStrips = "weavingStrips",
    /** White Flowers Art Border. Serialized value: `whiteFlowers` */
    WhiteFlowers = "whiteFlowers",
    /** Woodwork Art Border. Serialized value: `woodwork` */
    Woodwork = "woodwork",
    /** Crisscross Art Border. Serialized value: `xIllusions` */
    XIllusions = "xIllusions",
    /** Triangle Art Border. Serialized value: `zanyTriangles` */
    ZanyTriangles = "zanyTriangles",
    /** Zigzag Art Border. Serialized value: `zigZag` */
    ZigZag = "zigZag",
    /** Zigzag stitch. Serialized value: `zigZagStitch` */
    ZigZagStitch = "zigZagStitch"
}
export declare const BorderValuesArray: readonly [BorderValues.Nil, BorderValues.None, BorderValues.Single, BorderValues.Thick, BorderValues.Double, BorderValues.Dotted, BorderValues.Dashed, BorderValues.DotDash, BorderValues.DotDotDash, BorderValues.Triple, BorderValues.ThinThickSmallGap, BorderValues.ThickThinSmallGap, BorderValues.ThinThickThinSmallGap, BorderValues.ThinThickMediumGap, BorderValues.ThickThinMediumGap, BorderValues.ThinThickThinMediumGap, BorderValues.ThinThickLargeGap, BorderValues.ThickThinLargeGap, BorderValues.ThinThickThinLargeGap, BorderValues.Wave, BorderValues.DoubleWave, BorderValues.DashSmallGap, BorderValues.DashDotStroked, BorderValues.ThreeDEmboss, BorderValues.ThreeDEngrave, BorderValues.Outset, BorderValues.Inset, BorderValues.Apples, BorderValues.ArchedScallops, BorderValues.BabyPacifier, BorderValues.BabyRattle, BorderValues.Balloons3Colors, BorderValues.BalloonsHotAir, BorderValues.BasicBlackDashes, BorderValues.BasicBlackDots, BorderValues.BasicBlackSquares, BorderValues.BasicThinLines, BorderValues.BasicWhiteDashes, BorderValues.BasicWhiteDots, BorderValues.BasicWhiteSquares, BorderValues.BasicWideInline, BorderValues.BasicWideMidline, BorderValues.BasicWideOutline, BorderValues.Bats, BorderValues.Birds, BorderValues.BirdsFlight, BorderValues.Cabins, BorderValues.CakeSlice, BorderValues.CandyCorn, BorderValues.CelticKnotwork, BorderValues.CertificateBanner, BorderValues.ChainLink, BorderValues.ChampagneBottle, BorderValues.CheckedBarBlack, BorderValues.CheckedBarColor, BorderValues.Checkered, BorderValues.ChristmasTree, BorderValues.CirclesLines, BorderValues.CirclesRectangles, BorderValues.ClassicalWave, BorderValues.Clocks, BorderValues.Compass, BorderValues.Confetti, BorderValues.ConfettiGrays, BorderValues.ConfettiOutline, BorderValues.ConfettiStreamers, BorderValues.ConfettiWhite, BorderValues.CornerTriangles, BorderValues.CouponCutoutDashes, BorderValues.CouponCutoutDots, BorderValues.CrazyMaze, BorderValues.CreaturesButterfly, BorderValues.CreaturesFish, BorderValues.CreaturesInsects, BorderValues.CreaturesLadyBug, BorderValues.CrossStitch, BorderValues.Cup, BorderValues.DecoArch, BorderValues.DecoArchColor, BorderValues.DecoBlocks, BorderValues.DiamondsGray, BorderValues.DoubleD, BorderValues.DoubleDiamonds, BorderValues.Earth1, BorderValues.Earth2, BorderValues.EclipsingSquares1, BorderValues.EclipsingSquares2, BorderValues.EggsBlack, BorderValues.Fans, BorderValues.Film, BorderValues.Firecrackers, BorderValues.FlowersBlockPrint, BorderValues.FlowersDaisies, BorderValues.FlowersModern1, BorderValues.FlowersModern2, BorderValues.FlowersPansy, BorderValues.FlowersRedRose, BorderValues.FlowersRoses, BorderValues.FlowersTeacup, BorderValues.FlowersTiny, BorderValues.Gems, BorderValues.GingerbreadMan, BorderValues.Gradient, BorderValues.Handmade1, BorderValues.Handmade2, BorderValues.HeartBalloon, BorderValues.HeartGray, BorderValues.Hearts, BorderValues.HeebieJeebies, BorderValues.Holly, BorderValues.HouseFunky, BorderValues.Hypnotic, BorderValues.IceCreamCones, BorderValues.LightBulb, BorderValues.Lightning1, BorderValues.Lightning2, BorderValues.MapPins, BorderValues.MapleLeaf, BorderValues.MapleMuffins, BorderValues.Marquee, BorderValues.MarqueeToothed, BorderValues.Moons, BorderValues.Mosaic, BorderValues.MusicNotes, BorderValues.Northwest, BorderValues.Ovals, BorderValues.Packages, BorderValues.PalmsBlack, BorderValues.PalmsColor, BorderValues.PaperClips, BorderValues.Papyrus, BorderValues.PartyFavor, BorderValues.PartyGlass, BorderValues.Pencils, BorderValues.People, BorderValues.PeopleWaving, BorderValues.PeopleHats, BorderValues.Poinsettias, BorderValues.PostageStamp, BorderValues.Pumpkin1, BorderValues.PushPinNote2, BorderValues.PushPinNote1, BorderValues.Pyramids, BorderValues.PyramidsAbove, BorderValues.Quadrants, BorderValues.Rings, BorderValues.Safari, BorderValues.Sawtooth, BorderValues.SawtoothGray, BorderValues.ScaredCat, BorderValues.Seattle, BorderValues.ShadowedSquares, BorderValues.SharksTeeth, BorderValues.ShorebirdTracks, BorderValues.Skyrocket, BorderValues.SnowflakeFancy, BorderValues.Snowflakes, BorderValues.Sombrero, BorderValues.Southwest, BorderValues.Stars, BorderValues.StarsTop, BorderValues.Stars3d, BorderValues.StarsBlack, BorderValues.StarsShadowed, BorderValues.Sun, BorderValues.Swirligig, BorderValues.TornPaper, BorderValues.TornPaperBlack, BorderValues.Trees, BorderValues.TriangleParty, BorderValues.Triangles, BorderValues.Tribal1, BorderValues.Tribal2, BorderValues.Tribal3, BorderValues.Tribal4, BorderValues.Tribal5, BorderValues.Tribal6, BorderValues.Triangle1, BorderValues.Triangle2, BorderValues.TriangleCircle1, BorderValues.TriangleCircle2, BorderValues.Shapes1, BorderValues.Shapes2, BorderValues.TwistedLines1, BorderValues.TwistedLines2, BorderValues.Vine, BorderValues.Waveline, BorderValues.WeavingAngles, BorderValues.WeavingBraid, BorderValues.WeavingRibbon, BorderValues.WeavingStrips, BorderValues.WhiteFlowers, BorderValues.Woodwork, BorderValues.XIllusions, BorderValues.ZanyTriangles, BorderValues.ZigZag, BorderValues.ZigZagStitch];
export declare enum DocumentConformance {
    /** undefined. Serialized value: `transitional` */
    transitional = "transitional",
    /** undefined. Serialized value: `strict` */
    strict = "strict"
}
export declare const DocumentConformanceArray: readonly [DocumentConformance.transitional, DocumentConformance.strict];
export declare enum StrictCharacterSet {
    /** undefined. Serialized value: `iso-8859-1` */
    chsAnsi = "iso-8859-1",
    /** undefined. Serialized value: `macintosh` */
    chsMacFfn = "macintosh",
    /** undefined. Serialized value: `shift_jis` */
    chsShiftJIS = "shift_jis",
    /** undefined. Serialized value: `ks_c-5601-1987` */
    chsHangeul = "ks_c-5601-1987",
    /** undefined. Serialized value: `KS_C-5601-1992` */
    chsJohab = "KS_C-5601-1992",
    /** undefined. Serialized value: `GBK` */
    chsGB2312 = "GBK",
    /** undefined. Serialized value: `Big5` */
    chsChinese5 = "Big5",
    /** undefined. Serialized value: `windows-1253` */
    chsGreek = "windows-1253",
    /** undefined. Serialized value: `iso-8859-9` */
    chsTurkish = "iso-8859-9",
    /** undefined. Serialized value: `windows-1258` */
    chsVietnamese = "windows-1258",
    /** undefined. Serialized value: `windows-1255` */
    chsHebrew = "windows-1255",
    /** undefined. Serialized value: `windows-1256` */
    chsArabic = "windows-1256",
    /** undefined. Serialized value: `windows-1257` */
    chsBaltic = "windows-1257",
    /** undefined. Serialized value: `windows-1251` */
    chsRussian = "windows-1251",
    /** undefined. Serialized value: `windows-874` */
    chsThai = "windows-874",
    /** undefined. Serialized value: `windows-1250` */
    chsEastEurope = "windows-1250"
}
export declare const StrictCharacterSetArray: readonly [StrictCharacterSet.chsAnsi, StrictCharacterSet.chsMacFfn, StrictCharacterSet.chsShiftJIS, StrictCharacterSet.chsHangeul, StrictCharacterSet.chsJohab, StrictCharacterSet.chsGB2312, StrictCharacterSet.chsChinese5, StrictCharacterSet.chsGreek, StrictCharacterSet.chsTurkish, StrictCharacterSet.chsVietnamese, StrictCharacterSet.chsHebrew, StrictCharacterSet.chsArabic, StrictCharacterSet.chsBaltic, StrictCharacterSet.chsRussian, StrictCharacterSet.chsThai, StrictCharacterSet.chsEastEurope];
export declare enum ObjectDrawAspect {
    /** undefined. Serialized value: `content` */
    content = "content",
    /** undefined. Serialized value: `icon` */
    icon = "icon"
}
export declare const ObjectDrawAspectArray: readonly [ObjectDrawAspect.content, ObjectDrawAspect.icon];
export declare enum ObjectUpdateMode {
    /** undefined. Serialized value: `always` */
    always = "always",
    /** undefined. Serialized value: `onCall` */
    onCall = "onCall"
}
export declare const ObjectUpdateModeArray: readonly [ObjectUpdateMode.always, ObjectUpdateMode.onCall];
export declare enum CompatSettingNameValues {
    /** undefined. Serialized value: `compatibilityMode` */
    CompatibilityMode = "compatibilityMode",
    /** undefined. Serialized value: `overrideTableStyleFontSizeAndJustification` */
    OverrideTableStyleFontSizeAndJustification = "overrideTableStyleFontSizeAndJustification",
    /** undefined. Serialized value: `enableOpenTypeFeatures` */
    EnableOpenTypeFeatures = "enableOpenTypeFeatures",
    /** undefined. Serialized value: `doNotFlipMirrorIndents` */
    DoNotFlipMirrorIndents = "doNotFlipMirrorIndents",
    /** undefined. Serialized value: `differentiateMultirowTableHeaders` */
    DifferentiateMultirowTableHeaders = "differentiateMultirowTableHeaders",
    /** undefined. Serialized value: `useWord2013TrackBottomHyphenation` */
    UseWord2013TrackBottomHyphenation = "useWord2013TrackBottomHyphenation",
    /** undefined. Serialized value: `allowHyphenationAtTrackBottom` */
    AllowHyphenationAtTrackBottom = "allowHyphenationAtTrackBottom",
    /** undefined. Serialized value: `allowTextAfterFloatingTableBreak` */
    AllowTextAfterFloatingTableBreak = "allowTextAfterFloatingTableBreak"
}
export declare const CompatSettingNameValuesArray: readonly [CompatSettingNameValues.CompatibilityMode, CompatSettingNameValues.OverrideTableStyleFontSizeAndJustification, CompatSettingNameValues.EnableOpenTypeFeatures, CompatSettingNameValues.DoNotFlipMirrorIndents, CompatSettingNameValues.DifferentiateMultirowTableHeaders, CompatSettingNameValues.UseWord2013TrackBottomHyphenation, CompatSettingNameValues.AllowHyphenationAtTrackBottom, CompatSettingNameValues.AllowTextAfterFloatingTableBreak];
/** Defines the LevelOverride Class. Serialized as `w:lvlOverride` */
export declare class LevelOverride extends OxmlCompositeElement<StartOverrideNumberingValue | Level> {
    static _Q: string;
    static _A: string[];
    /** Numbering Level ID. Serialized as `w:ilvl` */
    get levelIndex(): Int32Value | undefined;
    set levelIndex(v: Int32Value | undefined);
    /** Numbering Level Starting Value Override. */
    get startOverrideNumberingValue(): StartOverrideNumberingValue | undefined;
    /** Numbering Level Override Definition. */
    get level(): Level | undefined;
}
/** Defines the FontRelationshipType Class. */
export declare abstract class FontRelationshipType extends OxmlLeafElement {
    static _A: string[];
    /** fontKey. Serialized as `w:fontKey` */
    get fontKey(): StringValue | undefined;
    set fontKey(v: StringValue | undefined);
    /** subsetted. Serialized as `w:subsetted` */
    get subsetted(): OnOffValue | undefined;
    set subsetted(v: OnOffValue | undefined);
    /** Relationship to Part. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the EmbedBoldItalicFont Class. Serialized as `w:embedBoldItalic` */
export declare class EmbedBoldItalicFont extends FontRelationshipType {
    static _Q: string;
}
/** Defines the EmbedItalicFont Class. Serialized as `w:embedItalic` */
export declare class EmbedItalicFont extends FontRelationshipType {
    static _Q: string;
}
/** Defines the EmbedBoldFont Class. Serialized as `w:embedBold` */
export declare class EmbedBoldFont extends FontRelationshipType {
    static _Q: string;
}
/** Defines the EmbedRegularFont Class. Serialized as `w:embedRegular` */
export declare class EmbedRegularFont extends FontRelationshipType {
    static _Q: string;
}
/** Defines the FontSignature Class. Serialized as `w:sig` */
export declare class FontSignature extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** First 32 Bits of Unicode Subset Bitfield. Serialized as `w:usb0` */
    get unicodeSignature0(): HexBinaryValue | undefined;
    set unicodeSignature0(v: HexBinaryValue | undefined);
    /** Second 32 Bits of Unicode Subset Bitfield. Serialized as `w:usb1` */
    get unicodeSignature1(): HexBinaryValue | undefined;
    set unicodeSignature1(v: HexBinaryValue | undefined);
    /** Third 32 Bits of Unicode Subset Bitfield. Serialized as `w:usb2` */
    get unicodeSignature2(): HexBinaryValue | undefined;
    set unicodeSignature2(v: HexBinaryValue | undefined);
    /** Fourth 32 Bits of Unicode Subset Bitfield. Serialized as `w:usb3` */
    get unicodeSignature3(): HexBinaryValue | undefined;
    set unicodeSignature3(v: HexBinaryValue | undefined);
    /** Lower 32 Bits of Code Page Bit Field. Serialized as `w:csb0` */
    get codePageSignature0(): HexBinaryValue | undefined;
    set codePageSignature0(v: HexBinaryValue | undefined);
    /** Upper 32 Bits of Code Page Bit Field. Serialized as `w:csb1` */
    get codePageSignature1(): HexBinaryValue | undefined;
    set codePageSignature1(v: HexBinaryValue | undefined);
}
/** Defines the Pitch Class. Serialized as `w:pitch` */
export declare class Pitch extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `w:val` */
    get val(): FontPitchValues | undefined;
    set val(v: FontPitchValues | undefined);
}
/** Defines the FontFamily Class. Serialized as `w:family` */
export declare class FontFamily extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Font Family Value. Serialized as `w:val` */
    get val(): FontFamilyValues | undefined;
    set val(v: FontFamilyValues | undefined);
}
/** Defines the FontCharSet Class. Serialized as `w:charset` */
export declare class FontCharSet extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
    /** characterSet. Serialized as `w:characterSet` */
    get strictCharacterSet(): StrictCharacterSet | undefined;
    set strictCharacterSet(v: StrictCharacterSet | undefined);
}
/** Defines the Panose1Number Class. Serialized as `w:panose1` */
export declare class Panose1Number extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `w:val` */
    get val(): HexBinaryValue | undefined;
    set val(v: HexBinaryValue | undefined);
}
/** Defines the PictureBulletBase Class. Serialized as `w:pict` */
export declare class PictureBulletBase extends OxmlCompositeElement<VGroup | VImageFile | VLine | VOval | VPolyLine | VRectangle | VRoundRectangle | VShape | VShapetype> {
    static _Q: string;
}
/** Defines the TargetScreenSize Class. Serialized as `w:targetScreenSz` */
export declare class TargetScreenSize extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Target Screen Size Value. Serialized as `w:val` */
    get val(): TargetScreenSizeValues | undefined;
    set val(v: TargetScreenSizeValues | undefined);
}
/** Freeze Document Layout. Serialized as `w:readModeInkLockDown` */
export declare class ReadModeInkLockDown extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Use Actual Pages, Not Virtual Pages. Serialized as `w:actualPg` */
    get useActualPages(): OnOffValue | undefined;
    set useActualPages(v: OnOffValue | undefined);
    /** Virtual Page Width. Serialized as `w:w` */
    get width(): UInt32Value | undefined;
    set width(v: UInt32Value | undefined);
    /** Virtual Page Height. Serialized as `w:h` */
    get height(): UInt32Value | undefined;
    set height(v: UInt32Value | undefined);
    /** Font Size Scaling. Serialized as `w:fontSz` */
    get fontSize(): StringValue | undefined;
    set fontSize(v: StringValue | undefined);
}
/** Caption Settings. Serialized as `w:captions` */
export declare class Captions extends OxmlCompositeElement<Caption | AutoCaptions> {
    static _Q: string;
}
/** Theme Color Mappings. Serialized as `w:clrSchemeMapping` */
export declare class ColorSchemeMapping extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Background 1 Theme Color Mapping. Serialized as `w:bg1` */
    get background1(): ColorSchemeIndexValues | undefined;
    set background1(v: ColorSchemeIndexValues | undefined);
    /** Text 1 Theme Color Mapping. Serialized as `w:t1` */
    get text1(): ColorSchemeIndexValues | undefined;
    set text1(v: ColorSchemeIndexValues | undefined);
    /** Background 2 Theme Color Mapping. Serialized as `w:bg2` */
    get background2(): ColorSchemeIndexValues | undefined;
    set background2(v: ColorSchemeIndexValues | undefined);
    /** Text 2 Theme Color Mapping. Serialized as `w:t2` */
    get text2(): ColorSchemeIndexValues | undefined;
    set text2(v: ColorSchemeIndexValues | undefined);
    /** Accent 1 Theme Color Mapping. Serialized as `w:accent1` */
    get accent1(): ColorSchemeIndexValues | undefined;
    set accent1(v: ColorSchemeIndexValues | undefined);
    /** Accent 2 Theme Color Mapping. Serialized as `w:accent2` */
    get accent2(): ColorSchemeIndexValues | undefined;
    set accent2(v: ColorSchemeIndexValues | undefined);
    /** Accent3 Theme Color Mapping. Serialized as `w:accent3` */
    get accent3(): ColorSchemeIndexValues | undefined;
    set accent3(v: ColorSchemeIndexValues | undefined);
    /** Accent4 Theme Color Mapping. Serialized as `w:accent4` */
    get accent4(): ColorSchemeIndexValues | undefined;
    set accent4(v: ColorSchemeIndexValues | undefined);
    /** Accent5 Theme Color Mapping. Serialized as `w:accent5` */
    get accent5(): ColorSchemeIndexValues | undefined;
    set accent5(v: ColorSchemeIndexValues | undefined);
    /** Accent6 Theme Color Mapping. Serialized as `w:accent6` */
    get accent6(): ColorSchemeIndexValues | undefined;
    set accent6(v: ColorSchemeIndexValues | undefined);
    /** Hyperlink Theme Color Mapping. Serialized as `w:hyperlink` */
    get hyperlink(): ColorSchemeIndexValues | undefined;
    set hyperlink(v: ColorSchemeIndexValues | undefined);
    /** Followed Hyperlink Theme Color Mapping. Serialized as `w:followedHyperlink` */
    get followedHyperlink(): ColorSchemeIndexValues | undefined;
    set followedHyperlink(v: ColorSchemeIndexValues | undefined);
}
/** Listing of All Revision Save ID Values. Serialized as `w:rsids` */
export declare class Rsids extends OxmlCompositeElement<RsidRoot | Rsid> {
    static _Q: string;
    /** Original Document Revision Save ID. */
    get rsidRoot(): RsidRoot | undefined;
}
/** Document Variables. Serialized as `w:docVars` */
export declare class DocumentVariables extends OxmlCompositeElement<DocumentVariable> {
    static _Q: string;
}
/** Compatibility Settings. Serialized as `w:compat` */
export declare class Compatibility extends OxmlCompositeElement<UseSingleBorderForContiguousCells | WordPerfectJustification | NoTabHangIndent | NoLeading | SpaceForUnderline | NoColumnBalance | BalanceSingleByteDoubleByteWidth | NoExtraLineSpacing | DoNotLeaveBackslashAlone | UnderlineTrailingSpaces | DoNotExpandShiftReturn | SpacingInWholePoints | LineWrapLikeWord6 | PrintBodyTextBeforeHeader | PrintColorBlackWhite | WordPerfectSpaceWidth | ShowBreaksInFrames | SubFontBySize | SuppressBottomSpacing | SuppressTopSpacing | SuppressSpacingAtTopOfPage | SuppressTopSpacingWordPerfect | SuppressSpacingBeforeAfterPageBreak | SwapBordersFacingPages | ConvertMailMergeEscape | TruncateFontHeightsLikeWordPerfect | MacWordSmallCaps | UsePrinterMetrics | DoNotSuppressParagraphBorders | WrapTrailSpaces | FootnoteLayoutLikeWord8 | ShapeLayoutLikeWord8 | AlignTablesRowByRow | ForgetLastTabAlignment | AdjustLineHeightInTable | AutoSpaceLikeWord95 | NoSpaceRaiseLower | DoNotUseHTMLParagraphAutoSpacing | LayoutRawTableWidth | LayoutTableRowsApart | UseWord97LineBreakRules | DoNotBreakWrappedTables | DoNotSnapToGridInCell | SelectFieldWithFirstOrLastChar | ApplyBreakingRules | DoNotWrapTextWithPunctuation | DoNotUseEastAsianBreakRules | UseWord2002TableStyleRules | GrowAutofit | UseFarEastLayout | UseNormalStyleForList | DoNotUseIndentAsNumberingTabStop | UseAltKinsokuLineBreakRules | AllowSpaceOfSameStyleInTable | DoNotSuppressIndentation | DoNotAutofitConstrainedTables | AutofitToFirstFixedWidthCell | UnderlineTabInNumberingList | DisplayHangulFixedWidth | SplitPageBreakAndParagraphMark | DoNotVerticallyAlignCellWithShape | DoNotBreakConstrainedForcedTable | DoNotVerticallyAlignInTextBox | UseAnsiKerningPairs | CachedColumnBalance | CompatibilitySetting> {
    static _Q: string;
    /** Use Simplified Rules For Table Border Conflicts. */
    get useSingleBorderForContiguousCells(): UseSingleBorderForContiguousCells | undefined;
    /** Emulate WordPerfect 6.x Paragraph Justification. */
    get wordPerfectJustification(): WordPerfectJustification | undefined;
    /** Do Not Create Custom Tab Stop for Hanging Indent. */
    get noTabHangIndent(): NoTabHangIndent | undefined;
    /** Do Not Add Leading Between Lines of Text. */
    get noLeading(): NoLeading | undefined;
    /** Add Additional Space Below Baseline For Underlined East Asian Text. */
    get spaceForUnderline(): SpaceForUnderline | undefined;
    /** Do Not Balance Text Columns within a Section. */
    get noColumnBalance(): NoColumnBalance | undefined;
    /** Balance Single Byte and Double Byte Characters. */
    get balanceSingleByteDoubleByteWidth(): BalanceSingleByteDoubleByteWidth | undefined;
    /** Do Not Center Content on Lines With Exact Line Height. */
    get noExtraLineSpacing(): NoExtraLineSpacing | undefined;
    /** Convert Backslash To Yen Sign When Entered. */
    get doNotLeaveBackslashAlone(): DoNotLeaveBackslashAlone | undefined;
    /** Underline All Trailing Spaces. */
    get underlineTrailingSpaces(): UnderlineTrailingSpaces | undefined;
    /** Don't Justify Lines Ending in Soft Line Break. */
    get doNotExpandShiftReturn(): DoNotExpandShiftReturn | undefined;
    /** Only Expand/Condense Text By Whole Points. */
    get spacingInWholePoints(): SpacingInWholePoints | undefined;
    /** Emulate Word 6.0 Line Wrapping for East Asian Text. */
    get lineWrapLikeWord6(): LineWrapLikeWord6 | undefined;
    /** Print Body Text before Header/Footer Contents. */
    get printBodyTextBeforeHeader(): PrintBodyTextBeforeHeader | undefined;
    /** Print Colors as Black And White without Dithering. */
    get printColorBlackWhite(): PrintColorBlackWhite | undefined;
    /** Space width. */
    get wordPerfectSpaceWidth(): WordPerfectSpaceWidth | undefined;
    /** Display Page/Column Breaks Present in Frames. */
    get showBreaksInFrames(): ShowBreaksInFrames | undefined;
    /** Increase Priority Of Font Size During Font Substitution. */
    get subFontBySize(): SubFontBySize | undefined;
    /** Ignore Exact Line Height for Last Line on Page. */
    get suppressBottomSpacing(): SuppressBottomSpacing | undefined;
    /** Ignore Minimum and Exact Line Height for First Line on Page. */
    get suppressTopSpacing(): SuppressTopSpacing | undefined;
    /** Ignore Minimum Line Height for First Line on Page. */
    get suppressSpacingAtTopOfPage(): SuppressSpacingAtTopOfPage | undefined;
    /** Emulate WordPerfect 5.x Line Spacing. */
    get suppressTopSpacingWordPerfect(): SuppressTopSpacingWordPerfect | undefined;
    /** Do Not Use Space Before On First Line After a Page Break. */
    get suppressSpacingBeforeAfterPageBreak(): SuppressSpacingBeforeAfterPageBreak | undefined;
    /** Swap Paragraph Borders on Odd Numbered Pages. */
    get swapBordersFacingPages(): SwapBordersFacingPages | undefined;
    /** Treat Backslash Quotation Delimiter as Two Quotation Marks. */
    get convertMailMergeEscape(): ConvertMailMergeEscape | undefined;
    /** Emulate WordPerfect 6.x Font Height Calculation. */
    get truncateFontHeightsLikeWordPerfect(): TruncateFontHeightsLikeWordPerfect | undefined;
    /** Emulate Word 5.x for the Macintosh Small Caps Formatting. */
    get macWordSmallCaps(): MacWordSmallCaps | undefined;
    /** Use Printer Metrics To Display Documents. */
    get usePrinterMetrics(): UsePrinterMetrics | undefined;
    /** Do Not Suppress Paragraph Borders Next To Frames. */
    get doNotSuppressParagraphBorders(): DoNotSuppressParagraphBorders | undefined;
    /** Line Wrap Trailing Spaces. */
    get wrapTrailSpaces(): WrapTrailSpaces | undefined;
    /** Emulate Word 6.x/95/97 Footnote Placement. */
    get footnoteLayoutLikeWord8(): FootnoteLayoutLikeWord8 | undefined;
    /** Emulate Word 97 Text Wrapping Around Floating Objects. */
    get shapeLayoutLikeWord8(): ShapeLayoutLikeWord8 | undefined;
    /** Align Table Rows Independently. */
    get alignTablesRowByRow(): AlignTablesRowByRow | undefined;
    /** Ignore Width of Last Tab Stop When Aligning Paragraph If It Is Not Left Aligned. */
    get forgetLastTabAlignment(): ForgetLastTabAlignment | undefined;
    /** Add Document Grid Line Pitch To Lines in Table Cells. */
    get adjustLineHeightInTable(): AdjustLineHeightInTable | undefined;
    /** Emulate Word 95 Full-Width Character Spacing. */
    get autoSpaceLikeWord95(): AutoSpaceLikeWord95 | undefined;
    /** Do Not Increase Line Height for Raised/Lowered Text. */
    get noSpaceRaiseLower(): NoSpaceRaiseLower | undefined;
    /** Use Fixed Paragraph Spacing for HTML Auto Setting. */
    get doNotUseHTMLParagraphAutoSpacing(): DoNotUseHTMLParagraphAutoSpacing | undefined;
    /** Ignore Space Before Table When Deciding If Table Should Wrap Floating Object. */
    get layoutRawTableWidth(): LayoutRawTableWidth | undefined;
    /** Allow Table Rows to Wrap Inline Objects Independently. */
    get layoutTableRowsApart(): LayoutTableRowsApart | undefined;
    /** Emulate Word 97 East Asian Line Breaking. */
    get useWord97LineBreakRules(): UseWord97LineBreakRules | undefined;
    /** Do Not Allow Floating Tables To Break Across Pages. */
    get doNotBreakWrappedTables(): DoNotBreakWrappedTables | undefined;
    /** Do Not Snap to Document Grid in Table Cells with Objects. */
    get doNotSnapToGridInCell(): DoNotSnapToGridInCell | undefined;
    /** Select Field When First or Last Character Is Selected. */
    get selectFieldWithFirstOrLastChar(): SelectFieldWithFirstOrLastChar | undefined;
    /** Use Legacy Ethiopic and Amharic Line Breaking Rules. */
    get applyBreakingRules(): ApplyBreakingRules | undefined;
    /** Do Not Allow Hanging Punctuation With Character Grid. */
    get doNotWrapTextWithPunctuation(): DoNotWrapTextWithPunctuation | undefined;
    /** Do Not Compress Compressible Characters When Using Document Grid. */
    get doNotUseEastAsianBreakRules(): DoNotUseEastAsianBreakRules | undefined;
    /** Emulate Word 2002 Table Style Rules. */
    get useWord2002TableStyleRules(): UseWord2002TableStyleRules | undefined;
    /** Allow Tables to AutoFit Into Page Margins. */
    get growAutofit(): GrowAutofit | undefined;
    /** Do Not Bypass East Asian/Complex Script Layout Code. */
    get useFarEastLayout(): UseFarEastLayout | undefined;
    /** Do Not Automatically Apply List Paragraph Style To Bulleted/Numbered Text. */
    get useNormalStyleForList(): UseNormalStyleForList | undefined;
    /** Ignore Hanging Indent When Creating Tab Stop After Numbering. */
    get doNotUseIndentAsNumberingTabStop(): DoNotUseIndentAsNumberingTabStop | undefined;
    /** Use Alternate Set of East Asian Line Breaking Rules. */
    get useAltKinsokuLineBreakRules(): UseAltKinsokuLineBreakRules | undefined;
    /** Allow Contextual Spacing of Paragraphs in Tables. */
    get allowSpaceOfSameStyleInTable(): AllowSpaceOfSameStyleInTable | undefined;
    /** Do Not Ignore Floating Objects When Calculating Paragraph Indentation. */
    get doNotSuppressIndentation(): DoNotSuppressIndentation | undefined;
    /** Do Not AutoFit Tables To Fit Next To Wrapped Objects. */
    get doNotAutofitConstrainedTables(): DoNotAutofitConstrainedTables | undefined;
    /** Allow Table Columns To Exceed Preferred Widths of Constituent Cells. */
    get autofitToFirstFixedWidthCell(): AutofitToFirstFixedWidthCell | undefined;
    /** Underline Following Character Following Numbering. */
    get underlineTabInNumberingList(): UnderlineTabInNumberingList | undefined;
    /** Always Use Fixed Width for Hangul Characters. */
    get displayHangulFixedWidth(): DisplayHangulFixedWidth | undefined;
    /** Always Move Paragraph Mark to Page after a Page Break. */
    get splitPageBreakAndParagraphMark(): SplitPageBreakAndParagraphMark | undefined;
    /** Don't Vertically Align Cells Containing Floating Objects. */
    get doNotVerticallyAlignCellWithShape(): DoNotVerticallyAlignCellWithShape | undefined;
    /** Don't Break Table Rows Around Floating Tables. */
    get doNotBreakConstrainedForcedTable(): DoNotBreakConstrainedForcedTable | undefined;
    /** Ignore Vertical Alignment in Textboxes. */
    get doNotVerticallyAlignInTextBox(): DoNotVerticallyAlignInTextBox | undefined;
    /** Use ANSI Kerning Pairs from Fonts. */
    get useAnsiKerningPairs(): UseAnsiKerningPairs | undefined;
    /** Use Cached Paragraph Information for Column Balancing. */
    get cachedColumnBalance(): CachedColumnBalance | undefined;
}
/** Document-Wide Endnote Properties. Serialized as `w:endnotePr` */
export declare class EndnoteDocumentWideProperties extends OxmlCompositeElement<EndnotePosition | NumberingFormat | NumberingStart | NumberingRestart | EndnoteSpecialReference> {
    static _Q: string;
    /** Endnote Placement. */
    get endnotePosition(): EndnotePosition | undefined;
    /** Endnote Numbering Format. */
    get numberingFormat(): NumberingFormat | undefined;
    /** Footnote and Endnote Numbering Starting Value. */
    get numberingStart(): NumberingStart | undefined;
    /** Footnote and Endnote Numbering Restart Location. */
    get numberingRestart(): NumberingRestart | undefined;
}
/** Document-Wide Footnote Properties. Serialized as `w:footnotePr` */
export declare class FootnoteDocumentWideProperties extends OxmlCompositeElement<FootnotePosition | NumberingFormat | NumberingStart | NumberingRestart | FootnoteSpecialReference> {
    static _Q: string;
    /** Footnote Placement. */
    get footnotePosition(): FootnotePosition | undefined;
    /** Footnote Numbering Format. */
    get numberingFormat(): NumberingFormat | undefined;
    /** Footnote and Endnote Numbering Starting Value. */
    get numberingStart(): NumberingStart | undefined;
    /** Footnote and Endnote Numbering Restart Location. */
    get numberingRestart(): NumberingRestart | undefined;
}
/** Defines the ShapeDefaultsType Class. */
export declare abstract class ShapeDefaultsType extends OxmlCompositeElement<OShapeDefaults | OShapeLayout> {
}
/** Default Properties for VML Objects in Main Document. Serialized as `w:shapeDefaults` */
export declare class ShapeDefaults extends ShapeDefaultsType {
    static _Q: string;
}
/** Default Properties for VML Objects in Header and Footer. Serialized as `w:hdrShapeDefaults` */
export declare class HeaderShapeDefaults extends ShapeDefaultsType {
    static _Q: string;
}
/** Custom XSL Transform To Use When Saving As XML File. Serialized as `w:saveThroughXslt` */
export declare class SaveThroughXslt extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** XSL Transformation Location. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Local Identifier for XSL Transform. Serialized as `w:solutionID` */
    get solutionId(): StringValue | undefined;
    set solutionId(v: StringValue | undefined);
}
/** Custom Set Of Characters Which Cannot Begin A Line. Serialized as `w:noLineBreaksBefore` */
export declare class NoLineBreaksBeforeKinsoku extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** lang. Serialized as `w:lang` */
    get language(): StringValue | undefined;
    set language(v: StringValue | undefined);
    /** val. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Custom Set of Characters Which Cannot End a Line. Serialized as `w:noLineBreaksAfter` */
export declare class NoLineBreaksAfterKinsoku extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** lang. Serialized as `w:lang` */
    get language(): StringValue | undefined;
    set language(v: StringValue | undefined);
    /** val. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Character-Level Whitespace Compression. Serialized as `w:characterSpacingControl` */
export declare class CharacterSpacingControl extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `w:val` */
    get val(): CharacterSpacingValues | undefined;
    set val(v: CharacterSpacingValues | undefined);
}
/** Defines the UnsignedInt7Type Class. */
export declare abstract class UnsignedInt7Type extends OxmlLeafElement {
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Distance between Vertical Gridlines. Serialized as `w:displayVerticalDrawingGridEvery` */
export declare class DisplayVerticalDrawingGrid extends UnsignedInt7Type {
    static _Q: string;
}
/** Distance between Horizontal Gridlines. Serialized as `w:displayHorizontalDrawingGridEvery` */
export declare class DisplayHorizontalDrawingGrid extends UnsignedInt7Type {
    static _Q: string;
}
/** Percentage of Document to Use When Generating Summary. Serialized as `w:summaryLength` */
export declare class SummaryLength extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Maximum Number of Consecutively Hyphenated Lines. Serialized as `w:consecutiveHyphenLimit` */
export declare class ConsecutiveHyphenLimit extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): UInt16Value | undefined;
    set val(v: UInt16Value | undefined);
}
/** Defines the NonNegativeShortType Class. */
export declare abstract class NonNegativeShortType extends OxmlLeafElement {
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): Int16Value | undefined;
    set val(v: Int16Value | undefined);
}
/** Number of Pages Per Booklet. Serialized as `w:bookFoldPrintingSheets` */
export declare class BookFoldPrintingSheets extends NonNegativeShortType {
    static _Q: string;
}
/** Distance Between Automatic Tab Stops. Serialized as `w:defaultTabStop` */
export declare class DefaultTabStop extends NonNegativeShortType {
    static _Q: string;
}
/** Document Editing Restrictions. Serialized as `w:documentProtection` */
export declare class DocumentProtection extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Document Editing Restrictions. Serialized as `w:edit` */
    get edit(): DocumentProtectionValues | undefined;
    set edit(v: DocumentProtectionValues | undefined);
    /** Only Allow Formatting With Unlocked Styles. Serialized as `w:formatting` */
    get formatting(): OnOffValue | undefined;
    set formatting(v: OnOffValue | undefined);
    /** Enforce Document Protection Settings. Serialized as `w:enforcement` */
    get enforcement(): OnOffValue | undefined;
    set enforcement(v: OnOffValue | undefined);
    /** Cryptographic Provider Type. Serialized as `w:cryptProviderType` */
    get cryptographicProviderType(): CryptProviderValues | undefined;
    set cryptographicProviderType(v: CryptProviderValues | undefined);
    /** Cryptographic Algorithm Class. Serialized as `w:cryptAlgorithmClass` */
    get cryptographicAlgorithmClass(): CryptAlgorithmClassValues | undefined;
    set cryptographicAlgorithmClass(v: CryptAlgorithmClassValues | undefined);
    /** Cryptographic Algorithm Type. Serialized as `w:cryptAlgorithmType` */
    get cryptographicAlgorithmType(): CryptAlgorithmValues | undefined;
    set cryptographicAlgorithmType(v: CryptAlgorithmValues | undefined);
    /** Cryptographic Hashing Algorithm. Serialized as `w:cryptAlgorithmSid` */
    get cryptographicAlgorithmSid(): Int32Value | undefined;
    set cryptographicAlgorithmSid(v: Int32Value | undefined);
    /** Iterations to Run Hashing Algorithm. Serialized as `w:cryptSpinCount` */
    get cryptographicSpinCount(): UInt32Value | undefined;
    set cryptographicSpinCount(v: UInt32Value | undefined);
    /** Cryptographic Provider. Serialized as `w:cryptProvider` */
    get cryptographicProvider(): StringValue | undefined;
    set cryptographicProvider(v: StringValue | undefined);
    /** Cryptographic Algorithm Extensibility. Serialized as `w:algIdExt` */
    get algorithmIdExtensibility(): HexBinaryValue | undefined;
    set algorithmIdExtensibility(v: HexBinaryValue | undefined);
    /** Algorithm Extensibility Source. Serialized as `w:algIdExtSource` */
    get algorithmIdExtensibilitySource(): StringValue | undefined;
    set algorithmIdExtensibilitySource(v: StringValue | undefined);
    /** Cryptographic Provider Type Extensibility. Serialized as `w:cryptProviderTypeExt` */
    get cryptographicProviderTypeExtensibility(): HexBinaryValue | undefined;
    set cryptographicProviderTypeExtensibility(v: HexBinaryValue | undefined);
    /** Provider Type Extensibility Source. Serialized as `w:cryptProviderTypeExtSource` */
    get cryptographicProviderTypeExtSource(): StringValue | undefined;
    set cryptographicProviderTypeExtSource(v: StringValue | undefined);
    /** Password Hash. Serialized as `w:hash` */
    get hash(): Base64BinaryValue | undefined;
    set hash(v: Base64BinaryValue | undefined);
    /** Salt for Password Verifier. Serialized as `w:salt` */
    get salt(): Base64BinaryValue | undefined;
    set salt(v: Base64BinaryValue | undefined);
    /** algorithmName. Serialized as `w:algorithmName` */
    get algorithmName(): StringValue | undefined;
    set algorithmName(v: StringValue | undefined);
    /** hashValue. Serialized as `w:hashValue` */
    get hashValue(): Base64BinaryValue | undefined;
    set hashValue(v: Base64BinaryValue | undefined);
    /** saltValue. Serialized as `w:saltValue` */
    get saltValue(): Base64BinaryValue | undefined;
    set saltValue(v: Base64BinaryValue | undefined);
    /** spinCount. Serialized as `w:spinCount` */
    get spinCount(): Int32Value | undefined;
    set spinCount(v: Int32Value | undefined);
}
/** Visibility of Annotation Types. Serialized as `w:revisionView` */
export declare class RevisionView extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Display Visual Indicator Of Markup Area. Serialized as `w:markup` */
    get markup(): OnOffValue | undefined;
    set markup(v: OnOffValue | undefined);
    /** Display Comments. Serialized as `w:comments` */
    get comments(): OnOffValue | undefined;
    set comments(v: OnOffValue | undefined);
    /** Display Content Revisions. Serialized as `w:insDel` */
    get displayRevision(): OnOffValue | undefined;
    set displayRevision(v: OnOffValue | undefined);
    /** Display Formatting Revisions. Serialized as `w:formatting` */
    get formatting(): OnOffValue | undefined;
    set formatting(v: OnOffValue | undefined);
    /** Display Ink Annotations. Serialized as `w:inkAnnotations` */
    get inkAnnotations(): OnOffValue | undefined;
    set inkAnnotations(v: OnOffValue | undefined);
}
/** Mail Merge Settings. Serialized as `w:mailMerge` */
export declare class MailMerge extends OxmlCompositeElement<MainDocumentType | LinkToQuery | DataType | ConnectString | Query | DataSourceReference | HeaderSource | DoNotSuppressBlankLines | Destination | AddressFieldName | MailSubject | MailAsAttachment | ViewMergedData | ActiveRecord | CheckErrors | DataSourceObject> {
    static _Q: string;
    /** Source Document Type. */
    get mainDocumentType(): MainDocumentType | undefined;
    /** Query Contains Link to External Query File. */
    get linkToQuery(): LinkToQuery | undefined;
    /** Data Source Type. */
    get dataType(): DataType | undefined;
    /** Data Source Connection String. */
    get connectString(): ConnectString | undefined;
    /** Query For Data Source Records To Merge. */
    get query(): Query | undefined;
    /** Data Source File Path. */
    get dataSourceReference(): DataSourceReference | undefined;
    /** Header Definition File Path. */
    get headerSource(): HeaderSource | undefined;
    /** Remove Blank Lines from Merged Documents. */
    get doNotSuppressBlankLines(): DoNotSuppressBlankLines | undefined;
    /** Merged Document Destination. */
    get destination(): Destination | undefined;
    /** Column Containing E-mail Address. */
    get addressFieldName(): AddressFieldName | undefined;
    /** Merged E-mail or Fax Subject Line. */
    get mailSubject(): MailSubject | undefined;
    /** Merged Document To E-Mail Attachment. */
    get mailAsAttachment(): MailAsAttachment | undefined;
    /** View Merged Data Within Document. */
    get viewMergedData(): ViewMergedData | undefined;
    /** Record Currently Displayed In Merged Document. */
    get activeRecord(): ActiveRecord | undefined;
    /** Mail Merge Error Reporting Setting. */
    get checkErrors(): CheckErrors | undefined;
    /** Office Data Source Object Settings. */
    get dataSourceObject(): DataSourceObject | undefined;
}
/** Document Classification. Serialized as `w:documentType` */
export declare class DocumentType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Document Classification Value. Serialized as `w:val` */
    get val(): DocumentTypeValues | undefined;
    set val(v: DocumentTypeValues | undefined);
}
/** Suggested Sorting for List of Document Styles. Serialized as `w:stylePaneSortMethod` */
export declare class StylePaneSortMethods extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get value(): StringValue | undefined;
    set value(v: StringValue | undefined);
}
/** Suggested Filtering for List of Document Styles. Serialized as `w:stylePaneFormatFilter` */
export declare class StylePaneFormatFilter extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get value(): HexBinaryValue | undefined;
    set value(v: HexBinaryValue | undefined);
    /** allStyles. Serialized as `w:allStyles` */
    get allStyles(): OnOffValue | undefined;
    set allStyles(v: OnOffValue | undefined);
    /** customStyles. Serialized as `w:customStyles` */
    get customStyles(): OnOffValue | undefined;
    set customStyles(v: OnOffValue | undefined);
    /** latentStyles. Serialized as `w:latentStyles` */
    get latentStyles(): OnOffValue | undefined;
    set latentStyles(v: OnOffValue | undefined);
    /** stylesInUse. Serialized as `w:stylesInUse` */
    get stylesInUse(): OnOffValue | undefined;
    set stylesInUse(v: OnOffValue | undefined);
    /** headingStyles. Serialized as `w:headingStyles` */
    get headingStyles(): OnOffValue | undefined;
    set headingStyles(v: OnOffValue | undefined);
    /** numberingStyles. Serialized as `w:numberingStyles` */
    get numberingStyles(): OnOffValue | undefined;
    set numberingStyles(v: OnOffValue | undefined);
    /** tableStyles. Serialized as `w:tableStyles` */
    get tableStyles(): OnOffValue | undefined;
    set tableStyles(v: OnOffValue | undefined);
    /** directFormattingOnRuns. Serialized as `w:directFormattingOnRuns` */
    get directFormattingOnRuns(): OnOffValue | undefined;
    set directFormattingOnRuns(v: OnOffValue | undefined);
    /** directFormattingOnParagraphs. Serialized as `w:directFormattingOnParagraphs` */
    get directFormattingOnParagraphs(): OnOffValue | undefined;
    set directFormattingOnParagraphs(v: OnOffValue | undefined);
    /** directFormattingOnNumbering. Serialized as `w:directFormattingOnNumbering` */
    get directFormattingOnNumbering(): OnOffValue | undefined;
    set directFormattingOnNumbering(v: OnOffValue | undefined);
    /** directFormattingOnTables. Serialized as `w:directFormattingOnTables` */
    get directFormattingOnTables(): OnOffValue | undefined;
    set directFormattingOnTables(v: OnOffValue | undefined);
    /** clearFormatting. Serialized as `w:clearFormatting` */
    get clearFormatting(): OnOffValue | undefined;
    set clearFormatting(v: OnOffValue | undefined);
    /** top3HeadingStyles. Serialized as `w:top3HeadingStyles` */
    get top3HeadingStyles(): OnOffValue | undefined;
    set top3HeadingStyles(v: OnOffValue | undefined);
    /** visibleStyles. Serialized as `w:visibleStyles` */
    get visibleStyles(): OnOffValue | undefined;
    set visibleStyles(v: OnOffValue | undefined);
    /** alternateStyleNames. Serialized as `w:alternateStyleNames` */
    get alternateStyleNames(): OnOffValue | undefined;
    set alternateStyleNames(v: OnOffValue | undefined);
}
/** Spelling and Grammatical Checking State. Serialized as `w:proofState` */
export declare class ProofState extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Spell Checking State. Serialized as `w:spelling` */
    get spelling(): ProofingStateValues | undefined;
    set spelling(v: ProofingStateValues | undefined);
    /** Grammatical Checking State. Serialized as `w:grammar` */
    get grammar(): ProofingStateValues | undefined;
    set grammar(v: ProofingStateValues | undefined);
}
/** Grammar Checking Settings. Serialized as `w:activeWritingStyle` */
export declare class ActiveWritingStyle extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Writing Style Language. Serialized as `w:lang` */
    get language(): StringValue | undefined;
    set language(v: StringValue | undefined);
    /** Grammatical Engine ID. Serialized as `w:vendorID` */
    get vendorID(): UInt16Value | undefined;
    set vendorID(v: UInt16Value | undefined);
    /** Grammatical Check Engine Version. Serialized as `w:dllVersion` */
    get dllVersion(): Int32Value | undefined;
    set dllVersion(v: Int32Value | undefined);
    /** Natural Language Grammar Check. Serialized as `w:nlCheck` */
    get naturalLanguageGrammarCheck(): OnOffValue | undefined;
    set naturalLanguageGrammarCheck(v: OnOffValue | undefined);
    /** Check Stylistic Rules With Grammar. Serialized as `w:checkStyle` */
    get checkStyle(): OnOffValue | undefined;
    set checkStyle(v: OnOffValue | undefined);
    /** Application Name. Serialized as `w:appName` */
    get applicationName(): StringValue | undefined;
    set applicationName(v: StringValue | undefined);
}
/** Magnification Setting. Serialized as `w:zoom` */
export declare class Zoom extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Zoom Type. Serialized as `w:val` */
    get val(): PresetZoomValues | undefined;
    set val(v: PresetZoomValues | undefined);
    /** Zoom Percentage. Serialized as `w:percent` */
    get percent(): StringValue | undefined;
    set percent(v: StringValue | undefined);
}
/** Document View Setting. Serialized as `w:view` */
export declare class View extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Document View Setting  Value. Serialized as `w:val` */
    get val(): ViewValues | undefined;
    set val(v: ViewValues | undefined);
}
/** Write Protection. Serialized as `w:writeProtection` */
export declare class WriteProtection extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Recommend Write Protection in User Interface. Serialized as `w:recommended` */
    get recommended(): OnOffValue | undefined;
    set recommended(v: OnOffValue | undefined);
    /** Cryptographic Provider Type. Serialized as `w:cryptProviderType` */
    get cryptographicProviderType(): CryptProviderValues | undefined;
    set cryptographicProviderType(v: CryptProviderValues | undefined);
    /** Cryptographic Algorithm Class. Serialized as `w:cryptAlgorithmClass` */
    get cryptographicAlgorithmClass(): CryptAlgorithmClassValues | undefined;
    set cryptographicAlgorithmClass(v: CryptAlgorithmClassValues | undefined);
    /** Cryptographic Algorithm Type. Serialized as `w:cryptAlgorithmType` */
    get cryptographicAlgorithmType(): CryptAlgorithmValues | undefined;
    set cryptographicAlgorithmType(v: CryptAlgorithmValues | undefined);
    /** Cryptographic Hashing Algorithm. Serialized as `w:cryptAlgorithmSid` */
    get cryptographicAlgorithmSid(): Int32Value | undefined;
    set cryptographicAlgorithmSid(v: Int32Value | undefined);
    /** Iterations to Run Hashing Algorithm. Serialized as `w:cryptSpinCount` */
    get cryptographicSpinCount(): UInt32Value | undefined;
    set cryptographicSpinCount(v: UInt32Value | undefined);
    /** Cryptographic Provider. Serialized as `w:cryptProvider` */
    get cryptographicProvider(): StringValue | undefined;
    set cryptographicProvider(v: StringValue | undefined);
    /** Cryptographic Algorithm Extensibility. Serialized as `w:algIdExt` */
    get algorithmIdExtensibility(): HexBinaryValue | undefined;
    set algorithmIdExtensibility(v: HexBinaryValue | undefined);
    /** Algorithm Extensibility Source. Serialized as `w:algIdExtSource` */
    get algorithmIdExtensibilitySource(): StringValue | undefined;
    set algorithmIdExtensibilitySource(v: StringValue | undefined);
    /** Cryptographic Provider Type Extensibility. Serialized as `w:cryptProviderTypeExt` */
    get cryptographicProviderTypeExtensibility(): HexBinaryValue | undefined;
    set cryptographicProviderTypeExtensibility(v: HexBinaryValue | undefined);
    /** Provider Type Extensibility Source. Serialized as `w:cryptProviderTypeExtSource` */
    get cryptographicProviderTypeExtSource(): StringValue | undefined;
    set cryptographicProviderTypeExtSource(v: StringValue | undefined);
    /** Password Hash. Serialized as `w:hash` */
    get hash(): Base64BinaryValue | undefined;
    set hash(v: Base64BinaryValue | undefined);
    /** Salt for Password Verifier. Serialized as `w:salt` */
    get salt(): Base64BinaryValue | undefined;
    set salt(v: Base64BinaryValue | undefined);
    /** algorithmName. Serialized as `w:algorithmName` */
    get algorithmName(): StringValue | undefined;
    set algorithmName(v: StringValue | undefined);
    /** hashValue. Serialized as `w:hashValue` */
    get hashValue(): Base64BinaryValue | undefined;
    set hashValue(v: Base64BinaryValue | undefined);
    /** saltValue. Serialized as `w:saltValue` */
    get saltValue(): Base64BinaryValue | undefined;
    set saltValue(v: Base64BinaryValue | undefined);
    /** spinCount. Serialized as `w:spinCount` */
    get spinCount(): Int32Value | undefined;
    set spinCount(v: Int32Value | undefined);
}
/** Defines the SdtContentText Class. Serialized as `w:text` */
export declare class SdtContentText extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Allow Soft Line Breaks. Serialized as `w:multiLine` */
    get multiLine(): OnOffValue | undefined;
    set multiLine(v: OnOffValue | undefined);
}
/** Defines the SdtContentDropDownList Class. Serialized as `w:dropDownList` */
export declare class SdtContentDropDownList extends OxmlCompositeElement<ListItem> {
    static _Q: string;
    static _A: string[];
    /** Drop-down List Last Saved Value. Serialized as `w:lastValue` */
    get lastValue(): StringValue | undefined;
    set lastValue(v: StringValue | undefined);
}
/** Defines the SdtDocPartType Class. */
export declare abstract class SdtDocPartType extends OxmlCompositeElement<DocPartGallery | DocPartCategory | DocPartUnique> {
    /** Document Part Gallery Filter. */
    get docPartGallery(): DocPartGallery | undefined;
    /** Document Part Category Filter. */
    get docPartCategory(): DocPartCategory | undefined;
    /** Built-In Document Part. */
    get docPartUnique(): DocPartUnique | undefined;
}
/** Defines the SdtContentDocPartList Class. Serialized as `w:docPartList` */
export declare class SdtContentDocPartList extends SdtDocPartType {
    static _Q: string;
}
/** Defines the SdtContentDocPartObject Class. Serialized as `w:docPartObj` */
export declare class SdtContentDocPartObject extends SdtDocPartType {
    static _Q: string;
}
/** Defines the SdtContentDate Class. Serialized as `w:date` */
export declare class SdtContentDate extends OxmlCompositeElement<DateFormat | LanguageId | SdtDateMappingType | Calendar> {
    static _Q: string;
    static _A: string[];
    /** Last Known Date in XML Schema DateTime Format. Serialized as `w:fullDate` */
    get fullDate(): DateTimeValue | undefined;
    set fullDate(v: DateTimeValue | undefined);
    /** Date Display Mask. */
    get dateFormat(): DateFormat | undefined;
    /** Date Picker Language ID. */
    get languageId(): LanguageId | undefined;
    /** Custom XML Data Date Storage Format. */
    get sdtDateMappingType(): SdtDateMappingType | undefined;
    /** Date Picker Calendar Type. */
    get calendar(): Calendar | undefined;
}
/** Defines the SdtContentComboBox Class. Serialized as `w:comboBox` */
export declare class SdtContentComboBox extends OxmlCompositeElement<ListItem> {
    static _Q: string;
    static _A: string[];
    /** Combo Box Last Saved Value. Serialized as `w:lastValue` */
    get lastValue(): StringValue | undefined;
    set lastValue(v: StringValue | undefined);
}
/** Defines the DataBinding Class. Serialized as `w:dataBinding` */
export declare class DataBinding extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** XML Namespace Prefix Mappings. Serialized as `w:prefixMappings` */
    get prefixMappings(): StringValue | undefined;
    set prefixMappings(v: StringValue | undefined);
    /** XPath. Serialized as `w:xpath` */
    get xPath(): StringValue | undefined;
    set xPath(v: StringValue | undefined);
    /** Custom XML Data Storage ID. Serialized as `w:storeItemID` */
    get storeItemId(): StringValue | undefined;
    set storeItemId(v: StringValue | undefined);
}
/** Defines the SdtPlaceholder Class. Serialized as `w:placeholder` */
export declare class SdtPlaceholder extends OxmlCompositeElement<DocPartReference> {
    static _Q: string;
    /** Document Part Reference. */
    get docPartReference(): DocPartReference | undefined;
}
/** Defines the Lock Class. Serialized as `w:lock` */
export declare class Lock extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Locking Type. Serialized as `w:val` */
    get val(): LockingValues | undefined;
    set val(v: LockingValues | undefined);
}
/** Defines the ObjectLink Class. Serialized as `w:objectLink` */
export declare class ObjectLink extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** updateMode. Serialized as `w:updateMode` */
    get updateMode(): ObjectUpdateMode | undefined;
    set updateMode(v: ObjectUpdateMode | undefined);
    /** lockedField. Serialized as `w:lockedField` */
    get lockedField(): OnOffValue | undefined;
    set lockedField(v: OnOffValue | undefined);
    /** drawAspect. Serialized as `w:drawAspect` */
    get drawAspect(): ObjectDrawAspect | undefined;
    set drawAspect(v: ObjectDrawAspect | undefined);
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** progId. Serialized as `w:progId` */
    get progId(): StringValue | undefined;
    set progId(v: StringValue | undefined);
    /** shapeId. Serialized as `w:shapeId` */
    get shapeId(): StringValue | undefined;
    set shapeId(v: StringValue | undefined);
    /** fieldCodes. Serialized as `w:fieldCodes` */
    get fieldCodes(): StringValue | undefined;
    set fieldCodes(v: StringValue | undefined);
}
/** Defines the ObjectEmbed Class. Serialized as `w:objectEmbed` */
export declare class ObjectEmbed extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** drawAspect. Serialized as `w:drawAspect` */
    get drawAspect(): ObjectDrawAspect | undefined;
    set drawAspect(v: ObjectDrawAspect | undefined);
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** progId. Serialized as `w:progId` */
    get progId(): StringValue | undefined;
    set progId(v: StringValue | undefined);
    /** shapeId. Serialized as `w:shapeId` */
    get shapeId(): StringValue | undefined;
    set shapeId(v: StringValue | undefined);
    /** fieldCodes. Serialized as `w:fieldCodes` */
    get fieldCodes(): StringValue | undefined;
    set fieldCodes(v: StringValue | undefined);
}
/** Previous Table Grid. Serialized as `w:tblGrid` */
export declare class PreviousTableGrid extends OxmlCompositeElement<GridColumn> {
    static _Q: string;
}
/** Defines the Control Class. Serialized as `w:control` */
export declare class Control extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Unique Name for Embedded Control. Serialized as `w:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Associated VML Data Reference. Serialized as `w:shapeid` */
    get shapeId(): StringValue | undefined;
    set shapeId(v: StringValue | undefined);
    /** Embedded Control Properties Relationship Reference. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Paragraph Properties. Serialized as `w:pPr` */
export declare class ParagraphProperties extends OxmlCompositeElement<ParagraphStyleId | KeepNext | KeepLines | PageBreakBefore | FrameProperties | WidowControl | NumberingProperties | SuppressLineNumbers | ParagraphBorders | Shading | Tabs | SuppressAutoHyphens | Kinsoku | WordWrap | OverflowPunctuation | TopLinePunctuation | AutoSpaceDE | AutoSpaceDN | BiDi | AdjustRightIndent | SnapToGrid | SpacingBetweenLines | Indentation | ContextualSpacing | MirrorIndents | SuppressOverlap | Justification | TextDirection | TextAlignment | TextBoxTightWrap | OutlineLevel | DivId | ConditionalFormatStyle | ParagraphMarkRunProperties | SectionProperties | ParagraphPropertiesChange> {
    static _Q: string;
    /** Returns ParagraphStyleId. */
    get paragraphStyleId(): ParagraphStyleId | undefined;
    /** Returns KeepNext. */
    get keepNext(): KeepNext | undefined;
    /** Returns KeepLines. */
    get keepLines(): KeepLines | undefined;
    /** Returns PageBreakBefore. */
    get pageBreakBefore(): PageBreakBefore | undefined;
    /** Returns FrameProperties. */
    get frameProperties(): FrameProperties | undefined;
    /** Returns WidowControl. */
    get widowControl(): WidowControl | undefined;
    /** Returns NumberingProperties. */
    get numberingProperties(): NumberingProperties | undefined;
    /** Returns SuppressLineNumbers. */
    get suppressLineNumbers(): SuppressLineNumbers | undefined;
    /** Returns ParagraphBorders. */
    get paragraphBorders(): ParagraphBorders | undefined;
    /** Returns Shading. */
    get shading(): Shading | undefined;
    /** Returns Tabs. */
    get tabs(): Tabs | undefined;
    /** Returns SuppressAutoHyphens. */
    get suppressAutoHyphens(): SuppressAutoHyphens | undefined;
    /** Returns Kinsoku. */
    get kinsoku(): Kinsoku | undefined;
    /** Returns WordWrap. */
    get wordWrap(): WordWrap | undefined;
    /** Returns OverflowPunctuation. */
    get overflowPunctuation(): OverflowPunctuation | undefined;
    /** Returns TopLinePunctuation. */
    get topLinePunctuation(): TopLinePunctuation | undefined;
    /** Returns AutoSpaceDE. */
    get autoSpaceDE(): AutoSpaceDE | undefined;
    /** Returns AutoSpaceDN. */
    get autoSpaceDN(): AutoSpaceDN | undefined;
    /** Returns BiDi. */
    get biDi(): BiDi | undefined;
    /** Returns AdjustRightIndent. */
    get adjustRightIndent(): AdjustRightIndent | undefined;
    /** Returns SnapToGrid. */
    get snapToGrid(): SnapToGrid | undefined;
    /** Returns SpacingBetweenLines. */
    get spacingBetweenLines(): SpacingBetweenLines | undefined;
    /** Returns Indentation. */
    get indentation(): Indentation | undefined;
    /** Returns ContextualSpacing. */
    get contextualSpacing(): ContextualSpacing | undefined;
    /** Returns MirrorIndents. */
    get mirrorIndents(): MirrorIndents | undefined;
    /** Returns SuppressOverlap. */
    get suppressOverlap(): SuppressOverlap | undefined;
    /** Returns Justification. */
    get justification(): Justification | undefined;
    /** Returns TextDirection. */
    get textDirection(): TextDirection | undefined;
    /** Returns TextAlignment. */
    get textAlignment(): TextAlignment | undefined;
    /** Returns TextBoxTightWrap. */
    get textBoxTightWrap(): TextBoxTightWrap | undefined;
    /** Returns OutlineLevel. */
    get outlineLevel(): OutlineLevel | undefined;
    /** Returns DivId. */
    get divId(): DivId | undefined;
    /** Returns ConditionalFormatStyle. */
    get conditionalFormatStyle(): ConditionalFormatStyle | undefined;
    /** Run Properties for the Paragraph Mark. */
    get paragraphMarkRunProperties(): ParagraphMarkRunProperties | undefined;
    /** Section Properties. */
    get sectionProperties(): SectionProperties | undefined;
    /** Returns ParagraphPropertiesChange. */
    get paragraphPropertiesChange(): ParagraphPropertiesChange | undefined;
}
/** Revision Information for Table Row Properties. Serialized as `w:trPrChange` */
export declare class TableRowPropertiesChange extends OxmlCompositeElement<PreviousTableRowProperties> {
    static _Q: string;
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
    /** Previous Table Row Properties. */
    get previousTableRowProperties(): PreviousTableRowProperties | undefined;
}
/** Table Row Properties. Serialized as `w:trPr` */
export declare class TableRowProperties extends OxmlCompositeElement<ConditionalFormatStyle | DivId | GridBefore | GridAfter | WidthBeforeTableRow | WidthAfterTableRow | TableRowHeight | Hidden | CantSplit | TableHeader | TableCellSpacing | TableJustification | Inserted | Deleted | TableRowPropertiesChange | W14ConflictInsertion | W14ConflictDeletion> {
    static _Q: string;
}
/** Table-Level Property Exceptions. Serialized as `w:tblPrEx` */
export declare class TablePropertyExceptions extends OxmlCompositeElement<TableWidth | TableJustification | TableCellSpacing | TableIndentation | TableBorders | Shading | TableLayout | TableCellMarginDefault | TableLook | TablePropertyExceptionsChange> {
    static _Q: string;
    /** Preferred Table Width Exception. */
    get tableWidth(): TableWidth | undefined;
    /** Table Alignment Exception. */
    get tableJustification(): TableJustification | undefined;
    /** Table Cell Spacing Exception. */
    get tableCellSpacing(): TableCellSpacing | undefined;
    /** Table Indent from Leading Margin Exception. */
    get tableIndentation(): TableIndentation | undefined;
    /** Table Borders Exceptions. */
    get tableBorders(): TableBorders | undefined;
    /** Table Shading Exception. */
    get shading(): Shading | undefined;
    /** Table Layout Exception. */
    get tableLayout(): TableLayout | undefined;
    /** Table Cell Margin Exceptions. */
    get tableCellMarginDefault(): TableCellMarginDefault | undefined;
    /** Table Style Conditional Formatting Settings Exception. */
    get tableLook(): TableLook | undefined;
    /** Revision Information for Table-Level Property Exceptions. */
    get tablePropertyExceptionsChange(): TablePropertyExceptionsChange | undefined;
}
/** Defines the TableWidthDxaNilType Class. */
export declare abstract class TableWidthDxaNilType extends OxmlLeafElement {
    static _A: string[];
    /** w. Serialized as `w:w` */
    get width(): Int16Value | undefined;
    set width(v: Int16Value | undefined);
    /** type. Serialized as `w:type` */
    get type(): TableWidthValues | undefined;
    set type(v: TableWidthValues | undefined);
}
/** Table Cell Right Margin Default. Serialized as `w:right` */
export declare class TableCellRightMargin extends TableWidthDxaNilType {
    static _Q: string;
}
/** Table Cell Left Margin Default. Serialized as `w:left` */
export declare class TableCellLeftMargin extends TableWidthDxaNilType {
    static _Q: string;
}
/** Defines the CompatibilitySetting Class. Serialized as `w:compatSetting` */
export declare class CompatibilitySetting extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `w:name` */
    get name(): CompatSettingNameValues | undefined;
    set name(v: CompatSettingNameValues | undefined);
    /** uri. Serialized as `w:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** val. Serialized as `w:val` */
    get value(): StringValue | undefined;
    set value(v: StringValue | undefined);
}
/** Glossary Document Entry. Serialized as `w:docPart` */
export declare class DocPart extends OxmlCompositeElement<DocPartProperties | DocPartBody> {
    static _Q: string;
    /** Glossary Document Entry Properties. */
    get docPartProperties(): DocPartProperties | undefined;
    /** Contents of Glossary Document Entry. */
    get docPartBody(): DocPartBody | undefined;
}
/** Defines the BodyType Class. */
export declare abstract class BodyType extends OxmlCompositeElement<AltChunk | CustomXmlBlock | SdtBlock | Paragraph | Table | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | SectionProperties> {
}
/** Defines the Body Class. Serialized as `w:body` */
export declare class Body extends BodyType {
    static _Q: string;
}
/** Contents of Glossary Document Entry. Serialized as `w:docPartBody` */
export declare class DocPartBody extends BodyType {
    static _Q: string;
}
/** Glossary Document Entry Properties. Serialized as `w:docPartPr` */
export declare class DocPartProperties extends OxmlCompositeElement<DocPartName | StyleId | Category | DocPartTypes | Behaviors | Description | DocPartId> {
    static _Q: string;
    /** Entry Name. */
    get docPartName(): DocPartName | undefined;
    /** Associated Paragraph Style Name. */
    get styleId(): StyleId | undefined;
    /** Entry Categorization. */
    get category(): Category | undefined;
    /** Entry Types. */
    get docPartTypes(): DocPartTypes | undefined;
    /** Entry Insertion Behaviors. */
    get behaviors(): Behaviors | undefined;
    /** Description for Entry. */
    get description(): Description | undefined;
    /** Entry ID. */
    get docPartId(): DocPartId | undefined;
}
/** Entry ID. Serialized as `w:guid` */
export declare class DocPartId extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** GUID Value. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Entry Insertion Behaviors. Serialized as `w:behaviors` */
export declare class Behaviors extends OxmlCompositeElement<Behavior> {
    static _Q: string;
}
/** Entry Types. Serialized as `w:types` */
export declare class DocPartTypes extends OxmlCompositeElement<DocPartType> {
    static _Q: string;
    static _A: string[];
    /** Entry Is Of All Types. Serialized as `w:all` */
    get all(): OnOffValue | undefined;
    set all(v: OnOffValue | undefined);
}
/** Entry Categorization. Serialized as `w:category` */
export declare class Category extends OxmlCompositeElement<Name | Gallery> {
    static _Q: string;
    /** Category Associated With Entry. */
    get name(): Name | undefined;
    /** Gallery Associated With Entry. */
    get gallery(): Gallery | undefined;
}
/** Entry Name. Serialized as `w:name` */
export declare class DocPartName extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Name Value. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
    /** Built-In Entry. Serialized as `w:decorated` */
    get decorated(): OnOffValue | undefined;
    set decorated(v: OnOffValue | undefined);
}
/** List of Glossary Document Entries. Serialized as `w:docParts` */
export declare class DocParts extends OxmlCompositeElement<DocPart> {
    static _Q: string;
}
/** Document Background. Serialized as `w:background` */
export declare class DocumentBackground extends OxmlCompositeElement<VBackground> {
    static _Q: string;
    static _A: string[];
    /** color. Serialized as `w:color` */
    get color(): StringValue | undefined;
    set color(v: StringValue | undefined);
    /** themeColor. Serialized as `w:themeColor` */
    get themeColor(): ThemeColorValues | undefined;
    set themeColor(v: ThemeColorValues | undefined);
    /** themeTint. Serialized as `w:themeTint` */
    get themeTint(): StringValue | undefined;
    set themeTint(v: StringValue | undefined);
    /** themeShade. Serialized as `w:themeShade` */
    get themeShade(): StringValue | undefined;
    set themeShade(v: StringValue | undefined);
    /** Returns VBackground. */
    get background(): VBackground | undefined;
}
/** Automatic Captioning Settings. Serialized as `w:autoCaptions` */
export declare class AutoCaptions extends OxmlCompositeElement<AutoCaption> {
    static _Q: string;
}
/** Single Caption Type Definition. Serialized as `w:caption` */
export declare class Caption extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Caption Type Name. Serialized as `w:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Automatic Caption Placement. Serialized as `w:pos` */
    get position(): CaptionPositionValues | undefined;
    set position(v: CaptionPositionValues | undefined);
    /** Include Chapter Number in Field for Caption. Serialized as `w:chapNum` */
    get chapterNumber(): OnOffValue | undefined;
    set chapterNumber(v: OnOffValue | undefined);
    /** Style for Chapter Headings. Serialized as `w:heading` */
    get heading(): Int32Value | undefined;
    set heading(v: Int32Value | undefined);
    /** Do Not Include Name In Caption. Serialized as `w:noLabel` */
    get noLabel(): OnOffValue | undefined;
    set noLabel(v: OnOffValue | undefined);
    /** Caption Numbering Format. Serialized as `w:numFmt` */
    get numberFormat(): NumberFormatValues | undefined;
    set numberFormat(v: NumberFormatValues | undefined);
    /** Chapter Number/Item Index Separator. Serialized as `w:sep` */
    get separator(): ChapterSeparatorValues | undefined;
    set separator(v: ChapterSeparatorValues | undefined);
}
/** Single Automatic Captioning Setting. Serialized as `w:autoCaption` */
export declare class AutoCaption extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Identifier of Object to be Automatically Captioned. Serialized as `w:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Caption Used for Automatic Captioning. Serialized as `w:caption` */
    get caption(): StringValue | undefined;
    set caption(v: StringValue | undefined);
}
/** Gallery Associated With Entry. Serialized as `w:gallery` */
export declare class Gallery extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Gallery Value. Serialized as `w:val` */
    get val(): DocPartGalleryValues | undefined;
    set val(v: DocPartGalleryValues | undefined);
}
/** Entry Type. Serialized as `w:type` */
export declare class DocPartType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Type Value. Serialized as `w:val` */
    get val(): DocPartValues | undefined;
    set val(v: DocPartValues | undefined);
}
/** Entry Insertion Behavior. Serialized as `w:behavior` */
export declare class Behavior extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Insertion Behavior Value. Serialized as `w:val` */
    get val(): DocPartBehaviorValues | undefined;
    set val(v: DocPartBehaviorValues | undefined);
}
/** Defines the FootnoteEndnoteType Class. */
export declare abstract class FootnoteEndnoteType extends OxmlCompositeElement<AltChunk | CustomXmlBlock | SdtBlock | Paragraph | Table | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {
    static _A: string[];
    /** Footnote/Endnote Type. Serialized as `w:type` */
    get type(): FootnoteEndnoteValues | undefined;
    set type(v: FootnoteEndnoteValues | undefined);
    /** Footnote/Endnote ID. Serialized as `w:id` */
    get id(): IntegerValue | undefined;
    set id(v: IntegerValue | undefined);
}
/** Endnote Content. Serialized as `w:endnote` */
export declare class Endnote extends FootnoteEndnoteType {
    static _Q: string;
}
/** Footnote Content. Serialized as `w:footnote` */
export declare class Footnote extends FootnoteEndnoteType {
    static _Q: string;
}
/** Comment Content. Serialized as `w:comment` */
export declare class Comment extends OxmlCompositeElement<AltChunk | CustomXmlBlock | SdtBlock | Paragraph | Table | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd> {
    static _Q: string;
    static _A: string[];
    /** initials. Serialized as `w:initials` */
    get initials(): StringValue | undefined;
    set initials(v: StringValue | undefined);
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
/** Information About Single HTML div Element. Serialized as `w:div` */
export declare class Div extends OxmlCompositeElement<BlockQuote | BodyDiv | LeftMarginDiv | RightMarginDiv | TopMarginDiv | BottomMarginDiv | DivBorder | DivsChild> {
    static _Q: string;
    static _A: string[];
    /** div Data ID. Serialized as `w:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Data for HTML blockquote Element. */
    get blockQuote(): BlockQuote | undefined;
    /** Data for HTML body Element. */
    get bodyDiv(): BodyDiv | undefined;
    /** Left Margin for HTML div. */
    get leftMarginDiv(): LeftMarginDiv | undefined;
    /** Right Margin for HTML div. */
    get rightMarginDiv(): RightMarginDiv | undefined;
    /** Top Margin for HTML div. */
    get topMarginDiv(): TopMarginDiv | undefined;
    /** Bottom Margin for HTML div. */
    get bottomMarginDiv(): BottomMarginDiv | undefined;
    /** Set of Borders for HTML div. */
    get divBorder(): DivBorder | undefined;
}
/** Defines the DivsType Class. */
export declare abstract class DivsType extends OxmlCompositeElement<Div> {
}
/** Defines the Divs Class. Serialized as `w:divs` */
export declare class Divs extends DivsType {
    static _Q: string;
}
/** Child div Elements Contained within Current div. Serialized as `w:divsChild` */
export declare class DivsChild extends DivsType {
    static _Q: string;
}
/** Set of Borders for HTML div. Serialized as `w:divBdr` */
export declare class DivBorder extends OxmlCompositeElement<TopBorder | LeftBorder | BottomBorder | RightBorder> {
    static _Q: string;
    /** Top Border for HTML div. */
    get topBorder(): TopBorder | undefined;
    /** Left Border for HTML div. */
    get leftBorder(): LeftBorder | undefined;
    /** Bottom Border for HTML div. */
    get bottomBorder(): BottomBorder | undefined;
    /** Right Border for HTML div. */
    get rightBorder(): RightBorder | undefined;
}
/** Defines the SignedTwipsMeasureType Class. */
export declare abstract class SignedTwipsMeasureType extends OxmlLeafElement {
    static _A: string[];
    /** Positive or Negative Value in Twentieths of a Point. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Bottom Margin for HTML div. Serialized as `w:marBottom` */
export declare class BottomMarginDiv extends SignedTwipsMeasureType {
    static _Q: string;
}
/** Top Margin for HTML div. Serialized as `w:marTop` */
export declare class TopMarginDiv extends SignedTwipsMeasureType {
    static _Q: string;
}
/** Right Margin for HTML div. Serialized as `w:marRight` */
export declare class RightMarginDiv extends SignedTwipsMeasureType {
    static _Q: string;
}
/** Left Margin for HTML div. Serialized as `w:marLeft` */
export declare class LeftMarginDiv extends SignedTwipsMeasureType {
    static _Q: string;
}
/** Properties for a Single Font. Serialized as `w:font` */
export declare class Font extends OxmlCompositeElement<AltName | Panose1Number | FontCharSet | FontFamily | NotTrueType | Pitch | FontSignature | EmbedRegularFont | EmbedBoldFont | EmbedItalicFont | EmbedBoldItalicFont> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `w:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Returns AltName. */
    get altName(): AltName | undefined;
    /** Returns Panose1Number. */
    get panose1Number(): Panose1Number | undefined;
    /** Returns FontCharSet. */
    get fontCharSet(): FontCharSet | undefined;
    /** Returns FontFamily. */
    get fontFamily(): FontFamily | undefined;
    /** Returns NotTrueType. */
    get notTrueType(): NotTrueType | undefined;
    /** Returns Pitch. */
    get pitch(): Pitch | undefined;
    /** Returns FontSignature. */
    get fontSignature(): FontSignature | undefined;
    /** Returns EmbedRegularFont. */
    get embedRegularFont(): EmbedRegularFont | undefined;
    /** Returns EmbedBoldFont. */
    get embedBoldFont(): EmbedBoldFont | undefined;
    /** Returns EmbedItalicFont. */
    get embedItalicFont(): EmbedItalicFont | undefined;
    /** Returns EmbedBoldItalicFont. */
    get embedBoldItalicFont(): EmbedBoldItalicFont | undefined;
}
/** Style Definition. Serialized as `w:style` */
export declare class Style extends OxmlCompositeElement<StyleName | Aliases | BasedOn | NextParagraphStyle | LinkedStyle | AutoRedefine | StyleHidden | UIPriority | SemiHidden | UnhideWhenUsed | PrimaryStyle | Locked | Personal | PersonalCompose | PersonalReply | Rsid | StyleParagraphProperties | StyleRunProperties | StyleTableProperties | TableStyleConditionalFormattingTableRowProperties | StyleTableCellProperties | TableStyleProperties> {
    static _Q: string;
    static _A: string[];
    /** Style Type. Serialized as `w:type` */
    get type(): StyleValues | undefined;
    set type(v: StyleValues | undefined);
    /** Style ID. Serialized as `w:styleId` */
    get styleId(): StringValue | undefined;
    set styleId(v: StringValue | undefined);
    /** Default Style. Serialized as `w:default` */
    get default(): OnOffValue | undefined;
    set default(v: OnOffValue | undefined);
    /** User-Defined Style. Serialized as `w:customStyle` */
    get customStyle(): OnOffValue | undefined;
    set customStyle(v: OnOffValue | undefined);
    /** Primary Style Name. */
    get styleName(): StyleName | undefined;
    /** Alternate Style Names. */
    get aliases(): Aliases | undefined;
    /** Parent Style ID. */
    get basedOn(): BasedOn | undefined;
    /** Style For Next Paragraph. */
    get nextParagraphStyle(): NextParagraphStyle | undefined;
    /** Linked Style Reference. */
    get linkedStyle(): LinkedStyle | undefined;
    /** Automatically Merge User Formatting Into Style Definition. */
    get autoRedefine(): AutoRedefine | undefined;
    /** Hide Style From User Interface. */
    get styleHidden(): StyleHidden | undefined;
    /** Optional User Interface Sorting Order. */
    get uIPriority(): UIPriority | undefined;
    /** Hide Style From Main User Interface. */
    get semiHidden(): SemiHidden | undefined;
    /** Remove Semi-Hidden Property When Style Is Used. */
    get unhideWhenUsed(): UnhideWhenUsed | undefined;
    /** Primary Style. */
    get primaryStyle(): PrimaryStyle | undefined;
    /** Style Cannot Be Applied. */
    get locked(): Locked | undefined;
    /** E-Mail Message Text Style. */
    get personal(): Personal | undefined;
    /** E-Mail Message Composition Style. */
    get personalCompose(): PersonalCompose | undefined;
    /** E-Mail Message Reply Style. */
    get personalReply(): PersonalReply | undefined;
    /** Revision Identifier for Style Definition. */
    get rsid(): Rsid | undefined;
    /** Style Paragraph Properties. */
    get styleParagraphProperties(): StyleParagraphProperties | undefined;
    /** Run Properties. */
    get styleRunProperties(): StyleRunProperties | undefined;
    /** Style Table Properties. */
    get styleTableProperties(): StyleTableProperties | undefined;
    /** Style Table Row Properties. */
    get tableStyleConditionalFormattingTableRowProperties(): TableStyleConditionalFormattingTableRowProperties | undefined;
    /** Style Table Cell Properties. */
    get styleTableCellProperties(): StyleTableCellProperties | undefined;
}
/** Latent Style Information. Serialized as `w:latentStyles` */
export declare class LatentStyles extends OxmlCompositeElement<LatentStyleExceptionInfo> {
    static _Q: string;
    static _A: string[];
    /** Default Style Locking Setting. Serialized as `w:defLockedState` */
    get defaultLockedState(): OnOffValue | undefined;
    set defaultLockedState(v: OnOffValue | undefined);
    /** Default User Interface Priority Setting. Serialized as `w:defUIPriority` */
    get defaultUiPriority(): Int32Value | undefined;
    set defaultUiPriority(v: Int32Value | undefined);
    /** Default Semi-Hidden Setting. Serialized as `w:defSemiHidden` */
    get defaultSemiHidden(): OnOffValue | undefined;
    set defaultSemiHidden(v: OnOffValue | undefined);
    /** Default Hidden Until Used Setting. Serialized as `w:defUnhideWhenUsed` */
    get defaultUnhideWhenUsed(): OnOffValue | undefined;
    set defaultUnhideWhenUsed(v: OnOffValue | undefined);
    /** Default Primary Style Setting. Serialized as `w:defQFormat` */
    get defaultPrimaryStyle(): OnOffValue | undefined;
    set defaultPrimaryStyle(v: OnOffValue | undefined);
    /** Latent Style Count. Serialized as `w:count` */
    get count(): Int32Value | undefined;
    set count(v: Int32Value | undefined);
}
/** Document Default Paragraph and Run Properties. Serialized as `w:docDefaults` */
export declare class DocDefaults extends OxmlCompositeElement<RunPropertiesDefault | ParagraphPropertiesDefault> {
    static _Q: string;
    /** Default Run Properties. */
    get runPropertiesDefault(): RunPropertiesDefault | undefined;
    /** Default Paragraph Properties. */
    get paragraphPropertiesDefault(): ParagraphPropertiesDefault | undefined;
}
/** Latent Style Exception. Serialized as `w:lsdException` */
export declare class LatentStyleExceptionInfo extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Primary Style Name. Serialized as `w:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Latent Style Locking Setting. Serialized as `w:locked` */
    get locked(): OnOffValue | undefined;
    set locked(v: OnOffValue | undefined);
    /** Override default sorting order. Serialized as `w:uiPriority` */
    get uiPriority(): Int32Value | undefined;
    set uiPriority(v: Int32Value | undefined);
    /** Semi hidden text override. Serialized as `w:semiHidden` */
    get semiHidden(): OnOffValue | undefined;
    set semiHidden(v: OnOffValue | undefined);
    /** Unhide when used. Serialized as `w:unhideWhenUsed` */
    get unhideWhenUsed(): OnOffValue | undefined;
    set unhideWhenUsed(v: OnOffValue | undefined);
    /** Latent Style Primary Style Setting. Serialized as `w:qFormat` */
    get primaryStyle(): OnOffValue | undefined;
    set primaryStyle(v: OnOffValue | undefined);
}
/** Style Conditional Table Formatting Properties. Serialized as `w:tblStylePr` */
export declare class TableStyleProperties extends OxmlCompositeElement<StyleParagraphProperties | RunPropertiesBaseStyle | TableStyleConditionalFormattingTableProperties | TableStyleConditionalFormattingTableRowProperties | TableStyleConditionalFormattingTableCellProperties> {
    static _Q: string;
    static _A: string[];
    /** Table Style Conditional Formatting Type. Serialized as `w:type` */
    get type(): TableStyleOverrideValues | undefined;
    set type(v: TableStyleOverrideValues | undefined);
    /** Table Style Conditional Formatting Paragraph Properties. */
    get styleParagraphProperties(): StyleParagraphProperties | undefined;
    /** Table Style Conditional Formatting Run Properties. */
    get runPropertiesBaseStyle(): RunPropertiesBaseStyle | undefined;
    /** Table Style Conditional Formatting Table Properties. */
    get tableStyleConditionalFormattingTableProperties(): TableStyleConditionalFormattingTableProperties | undefined;
    /** Table Style Conditional Formatting Table Row Properties. */
    get tableStyleConditionalFormattingTableRowProperties(): TableStyleConditionalFormattingTableRowProperties | undefined;
    /** Table Style Conditional Formatting Table Cell Properties. */
    get tableStyleConditionalFormattingTableCellProperties(): TableStyleConditionalFormattingTableCellProperties | undefined;
}
/** Style Table Cell Properties. Serialized as `w:tcPr` */
export declare class StyleTableCellProperties extends OxmlCompositeElement<Shading | NoWrap | TableCellMargin | TableCellVerticalAlignment> {
    static _Q: string;
    /** Returns Shading. */
    get shading(): Shading | undefined;
    /** Returns NoWrap. */
    get noWrap(): NoWrap | undefined;
    /** Returns TableCellMargin. */
    get tableCellMargin(): TableCellMargin | undefined;
    /** Returns TableCellVerticalAlignment. */
    get tableCellVerticalAlignment(): TableCellVerticalAlignment | undefined;
}
/** Style Table Properties. Serialized as `w:tblPr` */
export declare class StyleTableProperties extends OxmlCompositeElement<TableStyleRowBandSize | TableStyleColumnBandSize | TableJustification | TableCellSpacing | TableIndentation | TableBorders | Shading | TableCellMarginDefault> {
    static _Q: string;
    /** Returns TableStyleRowBandSize. */
    get tableStyleRowBandSize(): TableStyleRowBandSize | undefined;
    /** Returns TableStyleColumnBandSize. */
    get tableStyleColumnBandSize(): TableStyleColumnBandSize | undefined;
    /** Returns TableJustification. */
    get tableJustification(): TableJustification | undefined;
    /** Returns TableCellSpacing. */
    get tableCellSpacing(): TableCellSpacing | undefined;
    /** Returns TableIndentation. */
    get tableIndentation(): TableIndentation | undefined;
    /** Returns TableBorders. */
    get tableBorders(): TableBorders | undefined;
    /** Returns Shading. */
    get shading(): Shading | undefined;
    /** Returns TableCellMarginDefault. */
    get tableCellMarginDefault(): TableCellMarginDefault | undefined;
}
/** Run Properties. Serialized as `w:rPr` */
export declare class StyleRunProperties extends OxmlCompositeElement<RunFonts | Bold | BoldComplexScript | Italic | ItalicComplexScript | Caps | SmallCaps | Strike | DoubleStrike | Outline | Shadow | Emboss | Imprint | NoProof | SnapToGrid | Vanish | WebHidden | Color | Spacing | CharacterScale | Kern | Position | FontSize | FontSizeComplexScript | Underline | TextEffect | Border | Shading | FitText | VerticalTextAlignment | Emphasis | Languages | EastAsianLayout | SpecVanish | RunPropertiesChange> {
    static _Q: string;
    /** Returns RunFonts. */
    get runFonts(): RunFonts | undefined;
    /** Returns Bold. */
    get bold(): Bold | undefined;
    /** Returns BoldComplexScript. */
    get boldComplexScript(): BoldComplexScript | undefined;
    /** Returns Italic. */
    get italic(): Italic | undefined;
    /** Returns ItalicComplexScript. */
    get italicComplexScript(): ItalicComplexScript | undefined;
    /** Returns Caps. */
    get caps(): Caps | undefined;
    /** Returns SmallCaps. */
    get smallCaps(): SmallCaps | undefined;
    /** Returns Strike. */
    get strike(): Strike | undefined;
    /** Returns DoubleStrike. */
    get doubleStrike(): DoubleStrike | undefined;
    /** Returns Outline. */
    get outline(): Outline | undefined;
    /** Returns Shadow. */
    get shadow(): Shadow | undefined;
    /** Returns Emboss. */
    get emboss(): Emboss | undefined;
    /** Returns Imprint. */
    get imprint(): Imprint | undefined;
    /** Returns NoProof. */
    get noProof(): NoProof | undefined;
    /** Returns SnapToGrid. */
    get snapToGrid(): SnapToGrid | undefined;
    /** Returns Vanish. */
    get vanish(): Vanish | undefined;
    /** Returns WebHidden. */
    get webHidden(): WebHidden | undefined;
    /** Returns Color. */
    get color(): Color | undefined;
    /** Returns Spacing. */
    get spacing(): Spacing | undefined;
    /** Returns CharacterScale. */
    get characterScale(): CharacterScale | undefined;
    /** Returns Kern. */
    get kern(): Kern | undefined;
    /** Returns Position. */
    get position(): Position | undefined;
    /** Returns FontSize. */
    get fontSize(): FontSize | undefined;
    /** Returns FontSizeComplexScript. */
    get fontSizeComplexScript(): FontSizeComplexScript | undefined;
    /** Returns Underline. */
    get underline(): Underline | undefined;
    /** Returns TextEffect. */
    get textEffect(): TextEffect | undefined;
    /** Returns Border. */
    get border(): Border | undefined;
    /** Returns Shading. */
    get shading(): Shading | undefined;
    /** Returns FitText. */
    get fitText(): FitText | undefined;
    /** Returns VerticalTextAlignment. */
    get verticalTextAlignment(): VerticalTextAlignment | undefined;
    /** Returns Emphasis. */
    get emphasis(): Emphasis | undefined;
    /** Returns Languages. */
    get languages(): Languages | undefined;
    /** Returns EastAsianLayout. */
    get eastAsianLayout(): EastAsianLayout | undefined;
    /** Returns SpecVanish. */
    get specVanish(): SpecVanish | undefined;
    /** Returns RunPropertiesChange. */
    get runPropertiesChange(): RunPropertiesChange | undefined;
}
/** Optional User Interface Sorting Order. Serialized as `w:uiPriority` */
export declare class UIPriority extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Primary Style Name. Serialized as `w:name` */
export declare class StyleName extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Table Style Conditional Formatting Table Cell Properties. Serialized as `w:tcPr` */
export declare class TableStyleConditionalFormattingTableCellProperties extends OxmlCompositeElement<TableCellBorders | Shading | NoWrap | TableCellMargin | TableCellVerticalAlignment> {
    static _Q: string;
    /** Returns TableCellBorders. */
    get tableCellBorders(): TableCellBorders | undefined;
    /** Returns Shading. */
    get shading(): Shading | undefined;
    /** Returns NoWrap. */
    get noWrap(): NoWrap | undefined;
    /** Returns TableCellMargin. */
    get tableCellMargin(): TableCellMargin | undefined;
    /** Returns TableCellVerticalAlignment. */
    get tableCellVerticalAlignment(): TableCellVerticalAlignment | undefined;
}
/** Table Style Conditional Formatting Table Row Properties. Serialized as `w:trPr` */
export declare class TableStyleConditionalFormattingTableRowProperties extends OxmlCompositeElement<Hidden | CantSplit | TableHeader | TableCellSpacing | TableJustification> {
    static _Q: string;
}
/** Table Style Conditional Formatting Table Properties. Serialized as `w:tblPr` */
export declare class TableStyleConditionalFormattingTableProperties extends OxmlCompositeElement<TableJustification | TableCellSpacing | TableIndentation | TableBorders | Shading | TableCellMarginDefault> {
    static _Q: string;
    /** Returns TableJustification. */
    get tableJustification(): TableJustification | undefined;
    /** Returns TableCellSpacing. */
    get tableCellSpacing(): TableCellSpacing | undefined;
    /** Returns TableIndentation. */
    get tableIndentation(): TableIndentation | undefined;
    /** Returns TableBorders. */
    get tableBorders(): TableBorders | undefined;
    /** Returns Shading. */
    get shading(): Shading | undefined;
    /** Returns TableCellMarginDefault. */
    get tableCellMarginDefault(): TableCellMarginDefault | undefined;
}
/** Table Style Conditional Formatting Paragraph Properties. Serialized as `w:pPr` */
export declare class StyleParagraphProperties extends OxmlCompositeElement<KeepNext | KeepLines | PageBreakBefore | FrameProperties | WidowControl | NumberingProperties | SuppressLineNumbers | ParagraphBorders | Shading | Tabs | SuppressAutoHyphens | Kinsoku | WordWrap | OverflowPunctuation | TopLinePunctuation | AutoSpaceDE | AutoSpaceDN | BiDi | AdjustRightIndent | SnapToGrid | SpacingBetweenLines | Indentation | ContextualSpacing | MirrorIndents | SuppressOverlap | Justification | TextDirection | TextAlignment | TextBoxTightWrap | OutlineLevel | ParagraphPropertiesChange> {
    static _Q: string;
    /** Returns KeepNext. */
    get keepNext(): KeepNext | undefined;
    /** Returns KeepLines. */
    get keepLines(): KeepLines | undefined;
    /** Returns PageBreakBefore. */
    get pageBreakBefore(): PageBreakBefore | undefined;
    /** Returns FrameProperties. */
    get frameProperties(): FrameProperties | undefined;
    /** Returns WidowControl. */
    get widowControl(): WidowControl | undefined;
    /** Returns NumberingProperties. */
    get numberingProperties(): NumberingProperties | undefined;
    /** Returns SuppressLineNumbers. */
    get suppressLineNumbers(): SuppressLineNumbers | undefined;
    /** Returns ParagraphBorders. */
    get paragraphBorders(): ParagraphBorders | undefined;
    /** Returns Shading. */
    get shading(): Shading | undefined;
    /** Returns Tabs. */
    get tabs(): Tabs | undefined;
    /** Returns SuppressAutoHyphens. */
    get suppressAutoHyphens(): SuppressAutoHyphens | undefined;
    /** Returns Kinsoku. */
    get kinsoku(): Kinsoku | undefined;
    /** Returns WordWrap. */
    get wordWrap(): WordWrap | undefined;
    /** Returns OverflowPunctuation. */
    get overflowPunctuation(): OverflowPunctuation | undefined;
    /** Returns TopLinePunctuation. */
    get topLinePunctuation(): TopLinePunctuation | undefined;
    /** Returns AutoSpaceDE. */
    get autoSpaceDE(): AutoSpaceDE | undefined;
    /** Returns AutoSpaceDN. */
    get autoSpaceDN(): AutoSpaceDN | undefined;
    /** Returns BiDi. */
    get biDi(): BiDi | undefined;
    /** Returns AdjustRightIndent. */
    get adjustRightIndent(): AdjustRightIndent | undefined;
    /** Returns SnapToGrid. */
    get snapToGrid(): SnapToGrid | undefined;
    /** Returns SpacingBetweenLines. */
    get spacingBetweenLines(): SpacingBetweenLines | undefined;
    /** Returns Indentation. */
    get indentation(): Indentation | undefined;
    /** Returns ContextualSpacing. */
    get contextualSpacing(): ContextualSpacing | undefined;
    /** Returns MirrorIndents. */
    get mirrorIndents(): MirrorIndents | undefined;
    /** Returns SuppressOverlap. */
    get suppressOverlap(): SuppressOverlap | undefined;
    /** Returns Justification. */
    get justification(): Justification | undefined;
    /** Returns TextDirection. */
    get textDirection(): TextDirection | undefined;
    /** Returns TextAlignment. */
    get textAlignment(): TextAlignment | undefined;
    /** Returns TextBoxTightWrap. */
    get textBoxTightWrap(): TextBoxTightWrap | undefined;
    /** Returns OutlineLevel. */
    get outlineLevel(): OutlineLevel | undefined;
    /** Returns ParagraphPropertiesChange. */
    get paragraphPropertiesChange(): ParagraphPropertiesChange | undefined;
}
/** Numbering Definition Instance. Serialized as `w:num` */
export declare class NumberingInstance extends OxmlCompositeElement<AbstractNumId | LevelOverride> {
    static _Q: string;
    static _A: string[];
    /** numId. Serialized as `w:numId` */
    get numberID(): Int32Value | undefined;
    set numberID(v: Int32Value | undefined);
    /** durableId. Serialized as `w:durableId` */
    get durableId(): Int32Value | undefined;
    set durableId(v: Int32Value | undefined);
    /** Returns AbstractNumId. */
    get abstractNumId(): AbstractNumId | undefined;
}
/** Abstract Numbering Definition. Serialized as `w:abstractNum` */
export declare class AbstractNum extends OxmlCompositeElement<Nsid | MultiLevelType | TemplateCode | AbstractNumDefinitionName | StyleLink | NumberingStyleLink | Level> {
    static _Q: string;
    static _A: string[];
    /** Abstract Numbering Definition ID. Serialized as `w:abstractNumId` */
    get abstractNumberId(): Int32Value | undefined;
    set abstractNumberId(v: Int32Value | undefined);
    /** Abstract Numbering Definition Identifier. */
    get nsid(): Nsid | undefined;
    /** Abstract Numbering Definition Type. */
    get multiLevelType(): MultiLevelType | undefined;
    /** Numbering Template Code. */
    get templateCode(): TemplateCode | undefined;
    /** Abstract Numbering Definition Name. */
    get abstractNumDefinitionName(): AbstractNumDefinitionName | undefined;
    /** Numbering Style Definition. */
    get styleLink(): StyleLink | undefined;
    /** Numbering Style Reference. */
    get numberingStyleLink(): NumberingStyleLink | undefined;
}
/** Picture Numbering Symbol Definition. Serialized as `w:numPicBullet` */
export declare class NumberingPictureBullet extends OxmlCompositeElement<PictureBulletBase | Drawing> {
    static _Q: string;
    static _A: string[];
    /** numPicBulletId. Serialized as `w:numPicBulletId` */
    get numberingPictureBulletId(): Int32Value | undefined;
    set numberingPictureBulletId(v: Int32Value | undefined);
    /** Returns PictureBulletBase. */
    get pictureBulletBase(): PictureBulletBase | undefined;
    /** Returns Drawing. */
    get drawing(): Drawing | undefined;
}
/** Numbering Level Definition. Serialized as `w:lvl` */
export declare class Level extends OxmlCompositeElement<StartNumberingValue | NumberingFormat | LevelRestart | ParagraphStyleIdInLevel | IsLegalNumberingStyle | LevelSuffix | LevelText | LevelPictureBulletId | LegacyNumbering | LevelJustification | PreviousParagraphProperties | NumberingSymbolRunProperties> {
    static _Q: string;
    static _A: string[];
    /** Numbering Level. Serialized as `w:ilvl` */
    get levelIndex(): Int32Value | undefined;
    set levelIndex(v: Int32Value | undefined);
    /** Template Code. Serialized as `w:tplc` */
    get templateCode(): HexBinaryValue | undefined;
    set templateCode(v: HexBinaryValue | undefined);
    /** Tentative Numbering. Serialized as `w:tentative` */
    get tentative(): OnOffValue | undefined;
    set tentative(v: OnOffValue | undefined);
    /** Starting Value. */
    get startNumberingValue(): StartNumberingValue | undefined;
    /** Numbering Format. */
    get numberingFormat(): NumberingFormat | undefined;
    /** Restart Numbering Level Symbol. */
    get levelRestart(): LevelRestart | undefined;
    /** Paragraph Style's Associated Numbering Level. */
    get paragraphStyleIdInLevel(): ParagraphStyleIdInLevel | undefined;
    /** Display All Levels Using Arabic Numerals. */
    get isLegalNumberingStyle(): IsLegalNumberingStyle | undefined;
    /** Content Between Numbering Symbol and Paragraph Text. */
    get levelSuffix(): LevelSuffix | undefined;
    /** Numbering Level Text. */
    get levelText(): LevelText | undefined;
    /** Picture Numbering Symbol Definition Reference. */
    get levelPictureBulletId(): LevelPictureBulletId | undefined;
    /** Legacy Numbering Level Properties. */
    get legacyNumbering(): LegacyNumbering | undefined;
    /** Justification. */
    get levelJustification(): LevelJustification | undefined;
    /** Numbering Level Associated Paragraph Properties. */
    get previousParagraphProperties(): PreviousParagraphProperties | undefined;
    /** Numbering Symbol Run Properties. */
    get numberingSymbolRunProperties(): NumberingSymbolRunProperties | undefined;
}
/** Abstract Numbering Definition Type. Serialized as `w:multiLevelType` */
export declare class MultiLevelType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Abstract Numbering Definition Type. Serialized as `w:val` */
    get val(): MultiLevelValues | undefined;
    set val(v: MultiLevelValues | undefined);
}
/** Numbering Symbol Run Properties. Serialized as `w:rPr` */
export declare class NumberingSymbolRunProperties extends OxmlCompositeElement<RunFonts | Bold | BoldComplexScript | Italic | ItalicComplexScript | Caps | SmallCaps | Strike | DoubleStrike | Outline | Shadow | Emboss | Imprint | NoProof | SnapToGrid | Vanish | WebHidden | Color | Spacing | CharacterScale | Kern | Position | FontSize | FontSizeComplexScript | Underline | TextEffect | Border | Shading | FitText | VerticalTextAlignment | RightToLeftText | ComplexScript | Emphasis | Languages | EastAsianLayout | SpecVanish> {
    static _Q: string;
    /** Returns RunFonts. */
    get runFonts(): RunFonts | undefined;
    /** Returns Bold. */
    get bold(): Bold | undefined;
    /** Returns BoldComplexScript. */
    get boldComplexScript(): BoldComplexScript | undefined;
    /** Returns Italic. */
    get italic(): Italic | undefined;
    /** Returns ItalicComplexScript. */
    get italicComplexScript(): ItalicComplexScript | undefined;
    /** Returns Caps. */
    get caps(): Caps | undefined;
    /** Returns SmallCaps. */
    get smallCaps(): SmallCaps | undefined;
    /** Returns Strike. */
    get strike(): Strike | undefined;
    /** Returns DoubleStrike. */
    get doubleStrike(): DoubleStrike | undefined;
    /** Returns Outline. */
    get outline(): Outline | undefined;
    /** Returns Shadow. */
    get shadow(): Shadow | undefined;
    /** Returns Emboss. */
    get emboss(): Emboss | undefined;
    /** Returns Imprint. */
    get imprint(): Imprint | undefined;
    /** Returns NoProof. */
    get noProof(): NoProof | undefined;
    /** Returns SnapToGrid. */
    get snapToGrid(): SnapToGrid | undefined;
    /** Returns Vanish. */
    get vanish(): Vanish | undefined;
    /** Returns WebHidden. */
    get webHidden(): WebHidden | undefined;
    /** Returns Color. */
    get color(): Color | undefined;
    /** Returns Spacing. */
    get spacing(): Spacing | undefined;
    /** Returns CharacterScale. */
    get characterScale(): CharacterScale | undefined;
    /** Returns Kern. */
    get kern(): Kern | undefined;
    /** Returns Position. */
    get position(): Position | undefined;
    /** Returns FontSize. */
    get fontSize(): FontSize | undefined;
    /** Returns FontSizeComplexScript. */
    get fontSizeComplexScript(): FontSizeComplexScript | undefined;
    /** Returns Underline. */
    get underline(): Underline | undefined;
    /** Returns TextEffect. */
    get textEffect(): TextEffect | undefined;
    /** Returns Border. */
    get border(): Border | undefined;
    /** Returns Shading. */
    get shading(): Shading | undefined;
    /** Returns FitText. */
    get fitText(): FitText | undefined;
    /** Returns VerticalTextAlignment. */
    get verticalTextAlignment(): VerticalTextAlignment | undefined;
    /** Returns RightToLeftText. */
    get rightToLeftText(): RightToLeftText | undefined;
    /** Returns ComplexScript. */
    get complexScript(): ComplexScript | undefined;
    /** Returns Emphasis. */
    get emphasis(): Emphasis | undefined;
    /** Returns Languages. */
    get languages(): Languages | undefined;
    /** Returns EastAsianLayout. */
    get eastAsianLayout(): EastAsianLayout | undefined;
    /** Returns SpecVanish. */
    get specVanish(): SpecVanish | undefined;
}
/** Numbering Level Associated Paragraph Properties. Serialized as `w:pPr` */
export declare class PreviousParagraphProperties extends OxmlCompositeElement<ParagraphStyleId | KeepNext | KeepLines | PageBreakBefore | FrameProperties | WidowControl | NumberingProperties | SuppressLineNumbers | ParagraphBorders | Shading | Tabs | SuppressAutoHyphens | Kinsoku | WordWrap | OverflowPunctuation | TopLinePunctuation | AutoSpaceDE | AutoSpaceDN | BiDi | AdjustRightIndent | SnapToGrid | SpacingBetweenLines | Indentation | ContextualSpacing | MirrorIndents | SuppressOverlap | Justification | TextDirection | TextAlignment | TextBoxTightWrap | OutlineLevel> {
    static _Q: string;
    /** Returns ParagraphStyleId. */
    get paragraphStyleId(): ParagraphStyleId | undefined;
    /** Returns KeepNext. */
    get keepNext(): KeepNext | undefined;
    /** Returns KeepLines. */
    get keepLines(): KeepLines | undefined;
    /** Returns PageBreakBefore. */
    get pageBreakBefore(): PageBreakBefore | undefined;
    /** Returns FrameProperties. */
    get frameProperties(): FrameProperties | undefined;
    /** Returns WidowControl. */
    get widowControl(): WidowControl | undefined;
    /** Returns NumberingProperties. */
    get numberingProperties(): NumberingProperties | undefined;
    /** Returns SuppressLineNumbers. */
    get suppressLineNumbers(): SuppressLineNumbers | undefined;
    /** Returns ParagraphBorders. */
    get paragraphBorders(): ParagraphBorders | undefined;
    /** Returns Shading. */
    get shading(): Shading | undefined;
    /** Returns Tabs. */
    get tabs(): Tabs | undefined;
    /** Returns SuppressAutoHyphens. */
    get suppressAutoHyphens(): SuppressAutoHyphens | undefined;
    /** Returns Kinsoku. */
    get kinsoku(): Kinsoku | undefined;
    /** Returns WordWrap. */
    get wordWrap(): WordWrap | undefined;
    /** Returns OverflowPunctuation. */
    get overflowPunctuation(): OverflowPunctuation | undefined;
    /** Returns TopLinePunctuation. */
    get topLinePunctuation(): TopLinePunctuation | undefined;
    /** Returns AutoSpaceDE. */
    get autoSpaceDE(): AutoSpaceDE | undefined;
    /** Returns AutoSpaceDN. */
    get autoSpaceDN(): AutoSpaceDN | undefined;
    /** Returns BiDi. */
    get biDi(): BiDi | undefined;
    /** Returns AdjustRightIndent. */
    get adjustRightIndent(): AdjustRightIndent | undefined;
    /** Returns SnapToGrid. */
    get snapToGrid(): SnapToGrid | undefined;
    /** Returns SpacingBetweenLines. */
    get spacingBetweenLines(): SpacingBetweenLines | undefined;
    /** Returns Indentation. */
    get indentation(): Indentation | undefined;
    /** Returns ContextualSpacing. */
    get contextualSpacing(): ContextualSpacing | undefined;
    /** Returns MirrorIndents. */
    get mirrorIndents(): MirrorIndents | undefined;
    /** Returns SuppressOverlap. */
    get suppressOverlap(): SuppressOverlap | undefined;
    /** Returns Justification. */
    get justification(): Justification | undefined;
    /** Returns TextDirection. */
    get textDirection(): TextDirection | undefined;
    /** Returns TextAlignment. */
    get textAlignment(): TextAlignment | undefined;
    /** Returns TextBoxTightWrap. */
    get textBoxTightWrap(): TextBoxTightWrap | undefined;
    /** Returns OutlineLevel. */
    get outlineLevel(): OutlineLevel | undefined;
}
/** Justification. Serialized as `w:lvlJc` */
export declare class LevelJustification extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Alignment Type. Serialized as `w:val` */
    get value(): LevelJustificationValues | undefined;
    set value(v: LevelJustificationValues | undefined);
}
/** Legacy Numbering Level Properties. Serialized as `w:legacy` */
export declare class LegacyNumbering extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Use Legacy Numbering Properties. Serialized as `w:legacy` */
    get legacy(): OnOffValue | undefined;
    set legacy(v: OnOffValue | undefined);
    /** Legacy Spacing. Serialized as `w:legacySpace` */
    get legacySpace(): StringValue | undefined;
    set legacySpace(v: StringValue | undefined);
    /** Legacy Indent. Serialized as `w:legacyIndent` */
    get legacyIndent(): StringValue | undefined;
    set legacyIndent(v: StringValue | undefined);
}
/** Numbering Level Text. Serialized as `w:lvlText` */
export declare class LevelText extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Level Text. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
    /** Level Text Is Null Character. Serialized as `w:null` */
    get null(): OnOffValue | undefined;
    set null(v: OnOffValue | undefined);
}
/** Content Between Numbering Symbol and Paragraph Text. Serialized as `w:suff` */
export declare class LevelSuffix extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Character Type Between Numbering and Text. Serialized as `w:val` */
    get val(): LevelSuffixValues | undefined;
    set val(v: LevelSuffixValues | undefined);
}
/** Single Frame Properties. Serialized as `w:frame` */
export declare class Frame extends OxmlCompositeElement<FrameSize | FrameName | SourceFileReference | MarginWidth | MarginHeight | ScrollbarVisibility | NoResizeAllowed | LinkedToFile> {
    static _Q: string;
    /** Frame Size. */
    get frameSize(): FrameSize | undefined;
    /** Frame Name. */
    get frameName(): FrameName | undefined;
    /** Source File for Frame. */
    get sourceFileReference(): SourceFileReference | undefined;
    /** Left and Right Margin for Frame. */
    get marginWidth(): MarginWidth | undefined;
    /** Top and Bottom Margin for Frame. */
    get marginHeight(): MarginHeight | undefined;
    /** Scrollbar Display Option. */
    get scrollbarVisibility(): ScrollbarVisibility | undefined;
    /** Frame Cannot Be Resized. */
    get noResizeAllowed(): NoResizeAllowed | undefined;
    /** Maintain Link to Existing File. */
    get linkedToFile(): LinkedToFile | undefined;
}
/** Nested Frameset Definition. Serialized as `w:frameset` */
export declare class Frameset extends OxmlCompositeElement<FrameSize | FramesetSplitbar | FrameLayout | Frameset | Frame> {
    static _Q: string;
    /** Nested Frameset Size. */
    get frameSize(): FrameSize | undefined;
    /** Frameset Splitter Properties. */
    get framesetSplitbar(): FramesetSplitbar | undefined;
    /** Frameset Layout. */
    get frameLayout(): FrameLayout | undefined;
}
/** Frameset Layout. Serialized as `w:frameLayout` */
export declare class FrameLayout extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Frameset Layout Value. Serialized as `w:val` */
    get val(): FrameLayoutValues | undefined;
    set val(v: FrameLayoutValues | undefined);
}
/** Frameset Splitter Properties. Serialized as `w:framesetSplitbar` */
export declare class FramesetSplitbar extends OxmlCompositeElement<Width | Color | NoBorder | FlatBorders> {
    static _Q: string;
    /** Frameset Splitter Width. */
    get width(): Width | undefined;
    /** Frameset Splitter Color. */
    get color(): Color | undefined;
    /** Do Not Display Frameset Splitters. */
    get noBorder(): NoBorder | undefined;
    /** Frameset Splitter Border Style. */
    get flatBorders(): FlatBorders | undefined;
}
/** Defines the TwipsMeasureType Class. */
export declare abstract class TwipsMeasureType extends OxmlLeafElement {
    static _A: string[];
    /** Measurement in Twentieths of a Point. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Drawing Grid Vertical Origin Point. Serialized as `w:drawingGridVerticalOrigin` */
export declare class DrawingGridVerticalOrigin extends TwipsMeasureType {
    static _Q: string;
}
/** Drawing Grid Horizontal Origin Point. Serialized as `w:drawingGridHorizontalOrigin` */
export declare class DrawingGridHorizontalOrigin extends TwipsMeasureType {
    static _Q: string;
}
/** Drawing Grid Vertical Grid Unit Size. Serialized as `w:drawingGridVerticalSpacing` */
export declare class DrawingGridVerticalSpacing extends TwipsMeasureType {
    static _Q: string;
}
/** Drawing Grid Horizontal Grid Unit Size. Serialized as `w:drawingGridHorizontalSpacing` */
export declare class DrawingGridHorizontalSpacing extends TwipsMeasureType {
    static _Q: string;
}
/** Hyphenation Zone. Serialized as `w:hyphenationZone` */
export declare class HyphenationZone extends TwipsMeasureType {
    static _Q: string;
}
/** Frameset Splitter Width. Serialized as `w:w` */
export declare class Width extends TwipsMeasureType {
    static _Q: string;
}
/** Scrollbar Display Option. Serialized as `w:scrollbar` */
export declare class ScrollbarVisibility extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Scrollbar Display Option Value. Serialized as `w:val` */
    get val(): FrameScrollbarVisibilityValues | undefined;
    set val(v: FrameScrollbarVisibilityValues | undefined);
}
/** Defines the PixelsMeasureType Class. */
export declare abstract class PixelsMeasureType extends OxmlLeafElement {
    static _A: string[];
    /** Measurement in Pixels. Serialized as `w:val` */
    get val(): UInt32Value | undefined;
    set val(v: UInt32Value | undefined);
}
/** Top and Bottom Margin for Frame. Serialized as `w:marH` */
export declare class MarginHeight extends PixelsMeasureType {
    static _Q: string;
}
/** Left and Right Margin for Frame. Serialized as `w:marW` */
export declare class MarginWidth extends PixelsMeasureType {
    static _Q: string;
}
/** Default Paragraph Properties. Serialized as `w:pPrDefault` */
export declare class ParagraphPropertiesDefault extends OxmlCompositeElement<ParagraphPropertiesBaseStyle> {
    static _Q: string;
    /** Paragraph Properties. */
    get paragraphPropertiesBaseStyle(): ParagraphPropertiesBaseStyle | undefined;
}
/** Default Run Properties. Serialized as `w:rPrDefault` */
export declare class RunPropertiesDefault extends OxmlCompositeElement<RunPropertiesBaseStyle> {
    static _Q: string;
    /** Run Properties. */
    get runPropertiesBaseStyle(): RunPropertiesBaseStyle | undefined;
}
/** Paragraph Properties. Serialized as `w:pPr` */
export declare class ParagraphPropertiesBaseStyle extends OxmlCompositeElement<KeepNext | KeepLines | PageBreakBefore | FrameProperties | WidowControl | NumberingProperties | SuppressLineNumbers | ParagraphBorders | Shading | Tabs | SuppressAutoHyphens | Kinsoku | WordWrap | OverflowPunctuation | TopLinePunctuation | AutoSpaceDE | AutoSpaceDN | BiDi | AdjustRightIndent | SnapToGrid | SpacingBetweenLines | Indentation | ContextualSpacing | MirrorIndents | SuppressOverlap | Justification | TextDirection | TextAlignment | TextBoxTightWrap | OutlineLevel> {
    static _Q: string;
    /** Returns KeepNext. */
    get keepNext(): KeepNext | undefined;
    /** Returns KeepLines. */
    get keepLines(): KeepLines | undefined;
    /** Returns PageBreakBefore. */
    get pageBreakBefore(): PageBreakBefore | undefined;
    /** Returns FrameProperties. */
    get frameProperties(): FrameProperties | undefined;
    /** Returns WidowControl. */
    get widowControl(): WidowControl | undefined;
    /** Returns NumberingProperties. */
    get numberingProperties(): NumberingProperties | undefined;
    /** Returns SuppressLineNumbers. */
    get suppressLineNumbers(): SuppressLineNumbers | undefined;
    /** Returns ParagraphBorders. */
    get paragraphBorders(): ParagraphBorders | undefined;
    /** Returns Shading. */
    get shading(): Shading | undefined;
    /** Returns Tabs. */
    get tabs(): Tabs | undefined;
    /** Returns SuppressAutoHyphens. */
    get suppressAutoHyphens(): SuppressAutoHyphens | undefined;
    /** Returns Kinsoku. */
    get kinsoku(): Kinsoku | undefined;
    /** Returns WordWrap. */
    get wordWrap(): WordWrap | undefined;
    /** Returns OverflowPunctuation. */
    get overflowPunctuation(): OverflowPunctuation | undefined;
    /** Returns TopLinePunctuation. */
    get topLinePunctuation(): TopLinePunctuation | undefined;
    /** Returns AutoSpaceDE. */
    get autoSpaceDE(): AutoSpaceDE | undefined;
    /** Returns AutoSpaceDN. */
    get autoSpaceDN(): AutoSpaceDN | undefined;
    /** Returns BiDi. */
    get biDi(): BiDi | undefined;
    /** Returns AdjustRightIndent. */
    get adjustRightIndent(): AdjustRightIndent | undefined;
    /** Returns SnapToGrid. */
    get snapToGrid(): SnapToGrid | undefined;
    /** Returns SpacingBetweenLines. */
    get spacingBetweenLines(): SpacingBetweenLines | undefined;
    /** Returns Indentation. */
    get indentation(): Indentation | undefined;
    /** Returns ContextualSpacing. */
    get contextualSpacing(): ContextualSpacing | undefined;
    /** Returns MirrorIndents. */
    get mirrorIndents(): MirrorIndents | undefined;
    /** Returns SuppressOverlap. */
    get suppressOverlap(): SuppressOverlap | undefined;
    /** Returns Justification. */
    get justification(): Justification | undefined;
    /** Returns TextDirection. */
    get textDirection(): TextDirection | undefined;
    /** Returns TextAlignment. */
    get textAlignment(): TextAlignment | undefined;
    /** Returns TextBoxTightWrap. */
    get textBoxTightWrap(): TextBoxTightWrap | undefined;
    /** Returns OutlineLevel. */
    get outlineLevel(): OutlineLevel | undefined;
}
/** Run Properties. Serialized as `w:rPr` */
export declare class RunPropertiesBaseStyle extends OxmlCompositeElement<RunFonts | Bold | BoldComplexScript | Italic | ItalicComplexScript | Caps | SmallCaps | Strike | DoubleStrike | Outline | Shadow | Emboss | Imprint | NoProof | SnapToGrid | Vanish | WebHidden | Color | Spacing | CharacterScale | Kern | Position | FontSize | FontSizeComplexScript | Underline | TextEffect | Border | Shading | FitText | VerticalTextAlignment | Emphasis | Languages | EastAsianLayout | SpecVanish> {
    static _Q: string;
    /** Returns RunFonts. */
    get runFonts(): RunFonts | undefined;
    /** Returns Bold. */
    get bold(): Bold | undefined;
    /** Returns BoldComplexScript. */
    get boldComplexScript(): BoldComplexScript | undefined;
    /** Returns Italic. */
    get italic(): Italic | undefined;
    /** Returns ItalicComplexScript. */
    get italicComplexScript(): ItalicComplexScript | undefined;
    /** Returns Caps. */
    get caps(): Caps | undefined;
    /** Returns SmallCaps. */
    get smallCaps(): SmallCaps | undefined;
    /** Returns Strike. */
    get strike(): Strike | undefined;
    /** Returns DoubleStrike. */
    get doubleStrike(): DoubleStrike | undefined;
    /** Returns Outline. */
    get outline(): Outline | undefined;
    /** Returns Shadow. */
    get shadow(): Shadow | undefined;
    /** Returns Emboss. */
    get emboss(): Emboss | undefined;
    /** Returns Imprint. */
    get imprint(): Imprint | undefined;
    /** Returns NoProof. */
    get noProof(): NoProof | undefined;
    /** Returns SnapToGrid. */
    get snapToGrid(): SnapToGrid | undefined;
    /** Returns Vanish. */
    get vanish(): Vanish | undefined;
    /** Returns WebHidden. */
    get webHidden(): WebHidden | undefined;
    /** Returns Color. */
    get color(): Color | undefined;
    /** Returns Spacing. */
    get spacing(): Spacing | undefined;
    /** Returns CharacterScale. */
    get characterScale(): CharacterScale | undefined;
    /** Returns Kern. */
    get kern(): Kern | undefined;
    /** Returns Position. */
    get position(): Position | undefined;
    /** Returns FontSize. */
    get fontSize(): FontSize | undefined;
    /** Returns FontSizeComplexScript. */
    get fontSizeComplexScript(): FontSizeComplexScript | undefined;
    /** Returns Underline. */
    get underline(): Underline | undefined;
    /** Returns TextEffect. */
    get textEffect(): TextEffect | undefined;
    /** Returns Border. */
    get border(): Border | undefined;
    /** Returns Shading. */
    get shading(): Shading | undefined;
    /** Returns FitText. */
    get fitText(): FitText | undefined;
    /** Returns VerticalTextAlignment. */
    get verticalTextAlignment(): VerticalTextAlignment | undefined;
    /** Returns Emphasis. */
    get emphasis(): Emphasis | undefined;
    /** Returns Languages. */
    get languages(): Languages | undefined;
    /** Returns EastAsianLayout. */
    get eastAsianLayout(): EastAsianLayout | undefined;
    /** Returns SpecVanish. */
    get specVanish(): SpecVanish | undefined;
}
/** Defines the LongHexNumberType Class. */
export declare abstract class LongHexNumberType extends OxmlLeafElement {
    static _A: string[];
    /** Long Hexadecimal Number Value. Serialized as `w:val` */
    get val(): HexBinaryValue | undefined;
    set val(v: HexBinaryValue | undefined);
}
/** Numbering Template Code. Serialized as `w:tmpl` */
export declare class TemplateCode extends LongHexNumberType {
    static _Q: string;
}
/** Abstract Numbering Definition Identifier. Serialized as `w:nsid` */
export declare class Nsid extends LongHexNumberType {
    static _Q: string;
}
/** Single Session Revision Save ID. Serialized as `w:rsid` */
export declare class Rsid extends LongHexNumberType {
    static _Q: string;
}
/** Original Document Revision Save ID. Serialized as `w:rsidRoot` */
export declare class RsidRoot extends LongHexNumberType {
    static _Q: string;
}
/** Single Document Variable. Serialized as `w:docVar` */
export declare class DocumentVariable extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Document Variable Name. Serialized as `w:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Document Variable Value. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Office Data Source Object Settings. Serialized as `w:odso` */
export declare class DataSourceObject extends OxmlCompositeElement<UdlConnectionString | DataSourceTableName | SourceReference | ColumnDelimiter | MailMergeSource | FirstRowHeader | FieldMapData | RecipientDataReference> {
    static _Q: string;
    /** UDL Connection String. */
    get udlConnectionString(): UdlConnectionString | undefined;
    /** Data Source Table Name. */
    get dataSourceTableName(): DataSourceTableName | undefined;
    /** ODSO Data Source File Path. */
    get sourceReference(): SourceReference | undefined;
    /** Column Delimiter for Data Source. */
    get columnDelimiter(): ColumnDelimiter | undefined;
    /** ODSO Data Source Type. */
    get mailMergeSource(): MailMergeSource | undefined;
    /** First Row of Data Source Contains Column Names. */
    get firstRowHeader(): FirstRowHeader | undefined;
}
/** Merged Document Destination. Serialized as `w:destination` */
export declare class Destination extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Mail Merge Merged Document Type. Serialized as `w:val` */
    get val(): MailMergeDestinationValues | undefined;
    set val(v: MailMergeDestinationValues | undefined);
}
/** Data Source Type. Serialized as `w:dataType` */
export declare class DataType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `w:val` */
    get val(): MailMergeDataValues | undefined;
    set val(v: MailMergeDataValues | undefined);
}
/** Source Document Type. Serialized as `w:mainDocumentType` */
export declare class MainDocumentType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Mail Merge Source Document Type. Serialized as `w:val` */
    get val(): MailMergeDocumentValues | undefined;
    set val(v: MailMergeDocumentValues | undefined);
}
/** External Data Source to Merge Field Mapping. Serialized as `w:fieldMapData` */
export declare class FieldMapData extends OxmlCompositeElement<MailMergeFieldType | Name | MappedName | ColumnIndex | LanguageId | DynamicAddress> {
    static _Q: string;
    /** Merge Field Mapping. */
    get mailMergeFieldType(): MailMergeFieldType | undefined;
    /** Data Source Name for Column. */
    get name(): Name | undefined;
    /** Predefined Merge Field Name. */
    get mappedName(): MappedName | undefined;
    /** Index of Column Being Mapped. */
    get columnIndex(): ColumnIndex | undefined;
    /** Merge Field Name Language ID. */
    get languageId(): LanguageId | undefined;
    /** Use Country/Region-Based Address Field Ordering. */
    get dynamicAddress(): DynamicAddress | undefined;
}
/** ODSO Data Source Type. Serialized as `w:type` */
export declare class MailMergeSource extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Data Source Type Value. Serialized as `w:val` */
    get val(): MailMergeSourceValues | undefined;
    set val(v: MailMergeSourceValues | undefined);
}
/** Merge Field Mapping. Serialized as `w:type` */
export declare class MailMergeFieldType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Merge Field Mapping Type. Serialized as `w:val` */
    get val(): MailMergeOdsoFieldValues | undefined;
    set val(v: MailMergeOdsoFieldValues | undefined);
}
/** Data About Single Data Source Record. Serialized as `w:recipientData` */
export declare class RecipientData extends OxmlCompositeElement<Active | ColumnIndex | UniqueTag> {
    static _Q: string;
    /** Record Is Included in Mail Merge. */
    get active(): Active | undefined;
    /** Index of Column Containing Unique Values for Record. */
    get columnIndex(): ColumnIndex | undefined;
    /** Unique Value for Record. */
    get uniqueTag(): UniqueTag | undefined;
}
/** Unique Value for Record. Serialized as `w:uniqueTag` */
export declare class UniqueTag extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): Base64BinaryValue | undefined;
    set val(v: Base64BinaryValue | undefined);
}
/** Defines the UnsignedDecimalNumberType Class. */
export declare abstract class UnsignedDecimalNumberType extends OxmlLeafElement {
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): UInt32Value | undefined;
    set val(v: UInt32Value | undefined);
}
/** Column Delimiter for Data Source. Serialized as `w:colDelim` */
export declare class ColumnDelimiter extends UnsignedDecimalNumberType {
    static _Q: string;
}
/** Index of Column Containing Unique Values for Record. Serialized as `w:column` */
export declare class ColumnIndex extends UnsignedDecimalNumberType {
    static _Q: string;
}
/** Defines the FootnoteEndnoteSeparatorReferenceType Class. */
export declare abstract class FootnoteEndnoteSeparatorReferenceType extends OxmlLeafElement {
    static _A: string[];
    /** Footnote/Endnote ID. Serialized as `w:id` */
    get id(): IntegerValue | undefined;
    set id(v: IntegerValue | undefined);
}
/** Special Endnote List. Serialized as `w:endnote` */
export declare class EndnoteSpecialReference extends FootnoteEndnoteSeparatorReferenceType {
    static _Q: string;
}
/** Special Footnote List. Serialized as `w:footnote` */
export declare class FootnoteSpecialReference extends FootnoteEndnoteSeparatorReferenceType {
    static _Q: string;
}
/** Endnote Placement. Serialized as `w:pos` */
export declare class EndnotePosition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Endnote Position Type. Serialized as `w:val` */
    get val(): EndnotePositionValues | undefined;
    set val(v: EndnotePositionValues | undefined);
}
/** Footnote Numbering Format. Serialized as `w:numFmt` */
export declare class NumberingFormat extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Numbering Format Type. Serialized as `w:val` */
    get val(): NumberFormatValues | undefined;
    set val(v: NumberFormatValues | undefined);
    /** format. Serialized as `w:format` */
    get format(): StringValue | undefined;
    set format(v: StringValue | undefined);
}
/** Footnote Placement. Serialized as `w:pos` */
export declare class FootnotePosition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Footnote Position Type. Serialized as `w:val` */
    get val(): FootnotePositionValues | undefined;
    set val(v: FootnotePositionValues | undefined);
}
/** Table Grid. Serialized as `w:tblGrid` */
export declare class TableGrid extends OxmlCompositeElement<GridColumn | TableGridChange> {
    static _Q: string;
}
/** Table Properties. Serialized as `w:tblPr` */
export declare class TableProperties extends OxmlCompositeElement<TableStyle | TablePositionProperties | TableOverlap | BiDiVisual | TableWidth | TableJustification | TableCellSpacing | TableIndentation | TableBorders | Shading | TableLayout | TableCellMarginDefault | TableLook | TableCaption | TableDescription | TablePropertiesChange> {
    static _Q: string;
    /** Returns TableStyle. */
    get tableStyle(): TableStyle | undefined;
    /** Returns TablePositionProperties. */
    get tablePositionProperties(): TablePositionProperties | undefined;
    /** Returns TableOverlap. */
    get tableOverlap(): TableOverlap | undefined;
    /** Returns BiDiVisual. */
    get biDiVisual(): BiDiVisual | undefined;
    /** Returns TableWidth. */
    get tableWidth(): TableWidth | undefined;
    /** Returns TableJustification. */
    get tableJustification(): TableJustification | undefined;
    /** Returns TableCellSpacing. */
    get tableCellSpacing(): TableCellSpacing | undefined;
    /** Returns TableIndentation. */
    get tableIndentation(): TableIndentation | undefined;
    /** Returns TableBorders. */
    get tableBorders(): TableBorders | undefined;
    /** Returns Shading. */
    get shading(): Shading | undefined;
    /** Returns TableLayout. */
    get tableLayout(): TableLayout | undefined;
    /** Returns TableCellMarginDefault. */
    get tableCellMarginDefault(): TableCellMarginDefault | undefined;
    /** Returns TableLook. */
    get tableLook(): TableLook | undefined;
    /** Returns TableCaption. */
    get tableCaption(): TableCaption | undefined;
    /** Returns TableDescription. */
    get tableDescription(): TableDescription | undefined;
    /** Revision Information for Table Properties. */
    get tablePropertiesChange(): TablePropertiesChange | undefined;
}
/** Revision Information for Table-Level Property Exceptions. Serialized as `w:tblPrExChange` */
export declare class TablePropertyExceptionsChange extends OxmlCompositeElement<PreviousTablePropertyExceptions> {
    static _Q: string;
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
    /** Previous Table-Level Property Exceptions. */
    get previousTablePropertyExceptions(): PreviousTablePropertyExceptions | undefined;
}
/** Revision Information for Table Properties. Serialized as `w:tblPrChange` */
export declare class TablePropertiesChange extends OxmlCompositeElement<PreviousTableProperties> {
    static _Q: string;
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
    /** Previous Table Properties. */
    get previousTableProperties(): PreviousTableProperties | undefined;
}
/** Table Cell Properties. Serialized as `w:tcPr` */
export declare class TableCellProperties extends OxmlCompositeElement<ConditionalFormatStyle | TableCellWidth | GridSpan | HorizontalMerge | VerticalMerge | TableCellBorders | Shading | NoWrap | TableCellMargin | TextDirection | TableCellFitText | TableCellVerticalAlignment | HideMark | CellInsertion | CellDeletion | CellMerge | TableCellPropertiesChange> {
    static _Q: string;
    /** Returns ConditionalFormatStyle. */
    get conditionalFormatStyle(): ConditionalFormatStyle | undefined;
    /** Returns TableCellWidth. */
    get tableCellWidth(): TableCellWidth | undefined;
    /** Returns GridSpan. */
    get gridSpan(): GridSpan | undefined;
    /** Returns HorizontalMerge. */
    get horizontalMerge(): HorizontalMerge | undefined;
    /** Returns VerticalMerge. */
    get verticalMerge(): VerticalMerge | undefined;
    /** Returns TableCellBorders. */
    get tableCellBorders(): TableCellBorders | undefined;
    /** Returns Shading. */
    get shading(): Shading | undefined;
    /** Returns NoWrap. */
    get noWrap(): NoWrap | undefined;
    /** Returns TableCellMargin. */
    get tableCellMargin(): TableCellMargin | undefined;
    /** Returns TextDirection. */
    get textDirection(): TextDirection | undefined;
    /** Returns TableCellFitText. */
    get tableCellFitText(): TableCellFitText | undefined;
    /** Returns TableCellVerticalAlignment. */
    get tableCellVerticalAlignment(): TableCellVerticalAlignment | undefined;
    /** Returns HideMark. */
    get hideMark(): HideMark | undefined;
}
/** Revision Information for Table Cell Properties. Serialized as `w:tcPrChange` */
export declare class TableCellPropertiesChange extends OxmlCompositeElement<PreviousTableCellProperties> {
    static _Q: string;
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
    /** Previous Table Cell Properties. */
    get previousTableCellProperties(): PreviousTableCellProperties | undefined;
}
/** Revision Information for Table Grid Column Definitions. Serialized as `w:tblGridChange` */
export declare class TableGridChange extends OxmlCompositeElement<PreviousTableGrid> {
    static _Q: string;
    static _A: string[];
    /** Annotation Identifier. Serialized as `w:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Previous Table Grid. */
    get previousTableGrid(): PreviousTableGrid | undefined;
}
/** Grid Column Definition. Serialized as `w:gridCol` */
export declare class GridColumn extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Grid Column Width. Serialized as `w:w` */
    get width(): StringValue | undefined;
    set width(v: StringValue | undefined);
}
/** Custom XML Attribute. Serialized as `w:attr` */
export declare class CustomXmlAttribute extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** uri. Serialized as `w:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** name. Serialized as `w:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** val. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Custom XML Element Properties. Serialized as `w:customXmlPr` */
export declare class CustomXmlProperties extends OxmlCompositeElement<CustomXmlPlaceholder | CustomXmlAttribute> {
    static _Q: string;
    /** Custom XML Element Placeholder Text. */
    get customXmlPlaceholder(): CustomXmlPlaceholder | undefined;
}
/** Row-Level Structured Document Tag Content. Serialized as `w:sdtContent` */
export declare class SdtContentRow extends OxmlCompositeElement<TableRow | CustomXmlRow | SdtRow | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {
    static _Q: string;
}
/** Cell-Level Structured Document Tag Content. Serialized as `w:sdtContent` */
export declare class SdtContentCell extends OxmlCompositeElement<TableCell | CustomXmlCell | SdtCell | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {
    static _Q: string;
}
/** Defines the SdtContentRunRuby Class. Serialized as `w:sdtContent` */
export declare class SdtContentRunRuby extends OxmlCompositeElement<CustomXmlRuby | SimpleFieldRuby | HyperlinkRuby | Run | SdtRunRuby | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun> {
    static _Q: string;
}
/** Inline-Level Structured Document Tag Content. Serialized as `w:sdtContent` */
export declare class SdtContentRun extends OxmlCompositeElement<MRun | CustomXmlRun | SimpleField | Hyperlink | SdtRun | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | Run | BidirectionalOverride | BidirectionalEmbedding | SubDocumentReference> {
    static _Q: string;
}
/** Block-Level Structured Document Tag Content. Serialized as `w:sdtContent` */
export declare class SdtContentBlock extends OxmlCompositeElement<CustomXmlBlock | SdtBlock | Paragraph | Table | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {
    static _Q: string;
}
/** Structured Document Tag End Character Properties. Serialized as `w:sdtEndPr` */
export declare class SdtEndCharProperties extends OxmlCompositeElement<RunProperties> {
    static _Q: string;
}
/** Structured Document Tag Properties. Serialized as `w:sdtPr` */
export declare class SdtProperties extends OxmlCompositeElement<RunProperties | SdtAlias | Lock | SdtPlaceholder | ShowingPlaceholder | DataBinding | W15DataBinding | TemporarySdt | SdtId | Tag | W15Color | W15Appearance | W15WebExtensionLinked | W15WebExtensionCreated | SdtContentEquation | SdtContentComboBox | SdtContentDate | SdtContentDocPartObject | SdtContentDocPartList | SdtContentDropDownList | SdtContentPicture | SdtContentRichText | SdtContentText | SdtContentCitation | SdtContentGroup | SdtContentBibliography | W14EntityPickerEmpty | W14SdtContentCheckBox | W15SdtRepeatedSection | W15SdtRepeatedSectionItem> {
    static _Q: string;
}
/** Combo Box List Item. Serialized as `w:listItem` */
export declare class ListItem extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** List Entry Display Text. Serialized as `w:displayText` */
    get displayText(): StringValue | undefined;
    set displayText(v: StringValue | undefined);
    /** List Entry Value. Serialized as `w:value` */
    get value(): StringValue | undefined;
    set value(v: StringValue | undefined);
}
/** Date Picker Calendar Type. Serialized as `w:calendar` */
export declare class Calendar extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Calendar Type Value. Serialized as `w:val` */
    get val(): CalendarValues | undefined;
    set val(v: CalendarValues | undefined);
}
/** Custom XML Data Date Storage Format. Serialized as `w:storeMappedDataAs` */
export declare class SdtDateMappingType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Date Storage Type. Serialized as `w:val` */
    get val(): DateFormatValues | undefined;
    set val(v: DateFormatValues | undefined);
}
/** Defines the RubyContentType Class. */
export declare abstract class RubyContentType extends OxmlCompositeElement<CustomXmlRuby | SimpleFieldRuby | HyperlinkRuby | Run | SdtRunRuby | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun> {
}
/** Phonetic Guide Base Text. Serialized as `w:rubyBase` */
export declare class RubyBase extends RubyContentType {
    static _Q: string;
}
/** Phonetic Guide Text. Serialized as `w:rt` */
export declare class RubyContent extends RubyContentType {
    static _Q: string;
}
/** Phonetic Guide Properties. Serialized as `w:rubyPr` */
export declare class RubyProperties extends OxmlCompositeElement<RubyAlign | PhoneticGuideTextFontSize | PhoneticGuideRaise | PhoneticGuideBaseTextSize | LanguageId | Dirty> {
    static _Q: string;
    /** Phonetic Guide Text Alignment. */
    get rubyAlign(): RubyAlign | undefined;
    /** Phonetic Guide Text Font Size. */
    get phoneticGuideTextFontSize(): PhoneticGuideTextFontSize | undefined;
    /** Distance Between Phonetic Guide Text and Phonetic Guide Base Text. */
    get phoneticGuideRaise(): PhoneticGuideRaise | undefined;
    /** Phonetic Guide Base Text Font Size. */
    get phoneticGuideBaseTextSize(): PhoneticGuideBaseTextSize | undefined;
    /** Language ID for Phonetic Guide. */
    get languageId(): LanguageId | undefined;
    /** Invalidated Field Cache. */
    get dirty(): Dirty | undefined;
}
/** Language ID for Phonetic Guide. Serialized as `w:lid` */
export declare class LanguageId extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Language Code. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Distance Between Phonetic Guide Text and Phonetic Guide Base Text. Serialized as `w:hpsRaise` */
export declare class PhoneticGuideRaise extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): Int16Value | undefined;
    set val(v: Int16Value | undefined);
}
/** Phonetic Guide Text Alignment. Serialized as `w:rubyAlign` */
export declare class RubyAlign extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Phonetic Guide Text Alignment Value. Serialized as `w:val` */
    get val(): RubyAlignValues | undefined;
    set val(v: RubyAlignValues | undefined);
}
/** External Content Import Properties. Serialized as `w:altChunkPr` */
export declare class AltChunkProperties extends OxmlCompositeElement<MatchSource> {
    static _Q: string;
    /** Keep Source Formatting on Import. */
    get matchSource(): MatchSource | undefined;
}
/** Revision Information for Run Properties on the Paragraph Mark. Serialized as `w:rPrChange` */
export declare class ParagraphMarkRunPropertiesChange extends OxmlCompositeElement<PreviousParagraphMarkRunProperties> {
    static _Q: string;
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
    /** Previous Run Properties for the Paragraph Mark. */
    get previousParagraphMarkRunProperties(): PreviousParagraphMarkRunProperties | undefined;
}
/** Revision Information for Section Properties. Serialized as `w:sectPrChange` */
export declare class SectionPropertiesChange extends OxmlCompositeElement<PreviousSectionProperties> {
    static _Q: string;
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
    /** Previous Section Properties. */
    get previousSectionProperties(): PreviousSectionProperties | undefined;
}
/** Single Column Definition. Serialized as `w:col` */
export declare class Column extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Column Width. Serialized as `w:w` */
    get width(): StringValue | undefined;
    set width(v: StringValue | undefined);
    /** Space Before Following Column. Serialized as `w:space` */
    get space(): StringValue | undefined;
    set space(v: StringValue | undefined);
}
/** Text Box Form Field Formatting. Serialized as `w:format` */
export declare class Format extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Text Box Form Field Maximum Length. Serialized as `w:maxLength` */
export declare class MaxLength extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): Int16Value | undefined;
    set val(v: Int16Value | undefined);
}
/** Text Box Form Field Type. Serialized as `w:type` */
export declare class TextBoxFormFieldType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Text Box Form Field Type Values. Serialized as `w:val` */
    get val(): TextBoxFormFieldValues | undefined;
    set val(v: TextBoxFormFieldValues | undefined);
}
/** Defines the String255Type Class. */
export declare abstract class String255Type extends OxmlLeafElement {
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Frame Name. Serialized as `w:name` */
export declare class FrameName extends String255Type {
    static _Q: string;
}
/** Default Text Box Form Field String. Serialized as `w:default` */
export declare class DefaultTextBoxFormFieldString extends String255Type {
    static _Q: string;
}
/** Drop-Down List Entry. Serialized as `w:listEntry` */
export declare class ListEntryFormField extends String255Type {
    static _Q: string;
}
/** Default Drop-Down List Item Index. Serialized as `w:default` */
export declare class DefaultDropDownListItemIndex extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Text Box Form Field Properties. Serialized as `w:textInput` */
export declare class TextInput extends OxmlCompositeElement<TextBoxFormFieldType | DefaultTextBoxFormFieldString | MaxLength | Format> {
    static _Q: string;
    /** Text Box Form Field Type. */
    get textBoxFormFieldType(): TextBoxFormFieldType | undefined;
    /** Default Text Box Form Field String. */
    get defaultTextBoxFormFieldString(): DefaultTextBoxFormFieldString | undefined;
    /** Text Box Form Field Maximum Length. */
    get maxLength(): MaxLength | undefined;
    /** Text Box Form Field Formatting. */
    get format(): Format | undefined;
}
/** Drop-Down List Form Field Properties. Serialized as `w:ddList` */
export declare class DropDownListFormField extends OxmlCompositeElement<DropDownListSelection | DefaultDropDownListItemIndex | ListEntryFormField> {
    static _Q: string;
    /** Drop-Down List Selection. */
    get dropDownListSelection(): DropDownListSelection | undefined;
    /** Default Drop-Down List Item Index. */
    get defaultDropDownListItemIndex(): DefaultDropDownListItemIndex | undefined;
}
/** Checkbox Form Field Properties. Serialized as `w:checkBox` */
export declare class CheckBox extends OxmlCompositeElement<FormFieldSize | AutomaticallySizeFormField | DefaultCheckBoxFormFieldState | Checked> {
    static _Q: string;
}
/** Associated Status Text. Serialized as `w:statusText` */
export declare class StatusText extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Status Text Type. Serialized as `w:type` */
    get type(): InfoTextValues | undefined;
    set type(v: InfoTextValues | undefined);
    /** Status Text Value. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Associated Help Text. Serialized as `w:helpText` */
export declare class HelpText extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Help Text Type. Serialized as `w:type` */
    get type(): InfoTextValues | undefined;
    set type(v: InfoTextValues | undefined);
    /** Help Text Value. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Defines the MacroNameType Class. */
export declare abstract class MacroNameType extends OxmlLeafElement {
    static _A: string[];
    /** Name of Script Function. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Script Function to Execute on Form Field Exit. Serialized as `w:exitMacro` */
export declare class ExitMacro extends MacroNameType {
    static _Q: string;
}
/** Script Function to Execute on Form Field Entry. Serialized as `w:entryMacro` */
export declare class EntryMacro extends MacroNameType {
    static _Q: string;
}
/** Form Field Name. Serialized as `w:name` */
export declare class FormFieldName extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Form Field Name Value. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Form Field Properties. Serialized as `w:ffData` */
export declare class FormFieldData extends OxmlCompositeElement<FormFieldName | Enabled | CalculateOnExit | EntryMacro | ExitMacro | HelpText | StatusText | CheckBox | DropDownListFormField | TextInput> {
    static _Q: string;
}
/** Custom Field Data. Serialized as `w:fldData` */
export declare class FieldData extends OxmlLeafTextElement {
    static _Q: string;
}
/** Section Properties. Serialized as `w:sectPr` */
export declare class SectionProperties extends OxmlCompositeElement<HeaderReference | FooterReference | FootnoteProperties | EndnoteProperties | SectionType | PageSize | PageMargin | PaperSource | PageBorders | LineNumberType | PageNumberType | Columns | FormProtection | VerticalTextAlignmentOnPage | NoEndnote | TitlePage | TextDirection | BiDi | GutterOnRight | DocGrid | PrinterSettingsReference | W15FootnoteColumns | SectionPropertiesChange> {
    static _Q: string;
    static _A: string[];
    /** Physical Section Mark Character Revision ID. Serialized as `w:rsidRPr` */
    get rsidRPr(): HexBinaryValue | undefined;
    set rsidRPr(v: HexBinaryValue | undefined);
    /** Section Deletion Revision ID. Serialized as `w:rsidDel` */
    get rsidDel(): HexBinaryValue | undefined;
    set rsidDel(v: HexBinaryValue | undefined);
    /** Section Addition Revision ID. Serialized as `w:rsidR` */
    get rsidR(): HexBinaryValue | undefined;
    set rsidR(v: HexBinaryValue | undefined);
    /** Section Properties Revision ID. Serialized as `w:rsidSect` */
    get rsidSect(): HexBinaryValue | undefined;
    set rsidSect(v: HexBinaryValue | undefined);
}
/** Run Properties for the Paragraph Mark. Serialized as `w:rPr` */
export declare class ParagraphMarkRunProperties extends OxmlCompositeElement<Inserted | Deleted | MoveFrom | MoveTo | W14ConflictInsertion | W14ConflictDeletion | RunStyle | RunFonts | Bold | BoldComplexScript | Italic | ItalicComplexScript | Caps | SmallCaps | Strike | DoubleStrike | Outline | Shadow | Emboss | Imprint | NoProof | SnapToGrid | Vanish | WebHidden | Color | Spacing | CharacterScale | Kern | Position | FontSize | FontSizeComplexScript | Highlight | Underline | TextEffect | Border | Shading | FitText | VerticalTextAlignment | RightToLeftText | ComplexScript | Emphasis | Languages | EastAsianLayout | SpecVanish | W14Glow | W14Shadow | W14Reflection | W14TextOutlineEffect | W14FillTextEffect | W14Scene3D | W14Properties3D | W14Ligatures | W14NumberingFormat | W14NumberSpacing | W14StylisticSets | W14ContextualAlternatives | OfficeMath | ParagraphMarkRunPropertiesChange> {
    static _Q: string;
    /** Inserted Paragraph. */
    get inserted(): Inserted | undefined;
    /** Deleted Paragraph. */
    get deleted(): Deleted | undefined;
    /** Move Source Paragraph. */
    get moveFrom(): MoveFrom | undefined;
    /** Move Destination Paragraph. */
    get moveTo(): MoveTo | undefined;
}
/** Custom Tab Stop. Serialized as `w:tab` */
export declare class TabStop extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Tab Stop Type. Serialized as `w:val` */
    get val(): TabStopValues | undefined;
    set val(v: TabStopValues | undefined);
    /** Tab Leader Character. Serialized as `w:leader` */
    get leader(): TabStopLeaderCharValues | undefined;
    set leader(v: TabStopLeaderCharValues | undefined);
    /** Tab Stop Position. Serialized as `w:pos` */
    get position(): Int32Value | undefined;
    set position(v: Int32Value | undefined);
}
/** Previous Paragraph Numbering Properties. Serialized as `w:numberingChange` */
export declare class NumberingChange extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** original. Serialized as `w:original` */
    get original(): StringValue | undefined;
    set original(v: StringValue | undefined);
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
/** Defines the NonNegativeDecimalNumberType Class. */
export declare abstract class NonNegativeDecimalNumberType extends OxmlLeafElement {
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Defines the AbstractNumId Class. Serialized as `w:abstractNumId` */
export declare class AbstractNumId extends NonNegativeDecimalNumberType {
    static _Q: string;
}
/** Starting Value. Serialized as `w:start` */
export declare class StartNumberingValue extends NonNegativeDecimalNumberType {
    static _Q: string;
}
/** Numbering Definition Instance Reference. Serialized as `w:numId` */
export declare class NumberingId extends NonNegativeDecimalNumberType {
    static _Q: string;
}
/** Numbering Level Reference. Serialized as `w:ilvl` */
export declare class NumberingLevelReference extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Previous Run Properties for the Paragraph Mark. Serialized as `w:rPr` */
export declare class PreviousParagraphMarkRunProperties extends OxmlCompositeElement<Inserted | Deleted | MoveFrom | MoveTo | W14ConflictInsertion | W14ConflictDeletion | RunStyle | RunFonts | Bold | BoldComplexScript | Italic | ItalicComplexScript | Caps | SmallCaps | Strike | DoubleStrike | Outline | Shadow | Emboss | Imprint | NoProof | SnapToGrid | Vanish | WebHidden | Color | Spacing | CharacterScale | Kern | Position | FontSize | FontSizeComplexScript | Highlight | Underline | TextEffect | Border | Shading | FitText | VerticalTextAlignment | RightToLeftText | ComplexScript | Emphasis | Languages | EastAsianLayout | SpecVanish | W14Glow | W14Shadow | W14Reflection | W14TextOutlineEffect | W14FillTextEffect | W14Scene3D | W14Properties3D | W14Ligatures | W14NumberingFormat | W14NumberSpacing | W14StylisticSets | W14ContextualAlternatives | OfficeMath> {
    static _Q: string;
    /** Inserted Paragraph. */
    get inserted(): Inserted | undefined;
    /** Deleted Paragraph. */
    get deleted(): Deleted | undefined;
    /** Move Source Paragraph. */
    get moveFrom(): MoveFrom | undefined;
    /** Move Destination Paragraph. */
    get moveTo(): MoveTo | undefined;
}
/** Previous Run Properties. Serialized as `w:rPr` */
export declare class PreviousRunProperties extends OxmlCompositeElement<RunStyle | RunFonts | Bold | BoldComplexScript | Italic | ItalicComplexScript | Caps | SmallCaps | Strike | DoubleStrike | Outline | Shadow | Emboss | Imprint | NoProof | SnapToGrid | Vanish | WebHidden | Color | Spacing | CharacterScale | Kern | Position | FontSize | FontSizeComplexScript | Highlight | Underline | TextEffect | Border | Shading | FitText | VerticalTextAlignment | RightToLeftText | ComplexScript | Emphasis | Languages | EastAsianLayout | SpecVanish | W14Glow | W14Shadow | W14Reflection | W14TextOutlineEffect | W14FillTextEffect | W14Scene3D | W14Properties3D | W14Ligatures | W14NumberingFormat | W14NumberSpacing | W14StylisticSets | W14ContextualAlternatives> {
    static _Q: string;
}
/** Previous Paragraph Properties. Serialized as `w:pPr` */
export declare class ParagraphPropertiesExtended extends OxmlCompositeElement<ParagraphStyleId | KeepNext | KeepLines | PageBreakBefore | FrameProperties | WidowControl | NumberingProperties | SuppressLineNumbers | ParagraphBorders | Shading | Tabs | SuppressAutoHyphens | Kinsoku | WordWrap | OverflowPunctuation | TopLinePunctuation | AutoSpaceDE | AutoSpaceDN | BiDi | AdjustRightIndent | SnapToGrid | SpacingBetweenLines | Indentation | ContextualSpacing | MirrorIndents | SuppressOverlap | Justification | TextDirection | TextAlignment | TextBoxTightWrap | OutlineLevel | DivId | ConditionalFormatStyle> {
    static _Q: string;
    /** Returns ParagraphStyleId. */
    get paragraphStyleId(): ParagraphStyleId | undefined;
    /** Returns KeepNext. */
    get keepNext(): KeepNext | undefined;
    /** Returns KeepLines. */
    get keepLines(): KeepLines | undefined;
    /** Returns PageBreakBefore. */
    get pageBreakBefore(): PageBreakBefore | undefined;
    /** Returns FrameProperties. */
    get frameProperties(): FrameProperties | undefined;
    /** Returns WidowControl. */
    get widowControl(): WidowControl | undefined;
    /** Returns NumberingProperties. */
    get numberingProperties(): NumberingProperties | undefined;
    /** Returns SuppressLineNumbers. */
    get suppressLineNumbers(): SuppressLineNumbers | undefined;
    /** Returns ParagraphBorders. */
    get paragraphBorders(): ParagraphBorders | undefined;
    /** Returns Shading. */
    get shading(): Shading | undefined;
    /** Returns Tabs. */
    get tabs(): Tabs | undefined;
    /** Returns SuppressAutoHyphens. */
    get suppressAutoHyphens(): SuppressAutoHyphens | undefined;
    /** Returns Kinsoku. */
    get kinsoku(): Kinsoku | undefined;
    /** Returns WordWrap. */
    get wordWrap(): WordWrap | undefined;
    /** Returns OverflowPunctuation. */
    get overflowPunctuation(): OverflowPunctuation | undefined;
    /** Returns TopLinePunctuation. */
    get topLinePunctuation(): TopLinePunctuation | undefined;
    /** Returns AutoSpaceDE. */
    get autoSpaceDE(): AutoSpaceDE | undefined;
    /** Returns AutoSpaceDN. */
    get autoSpaceDN(): AutoSpaceDN | undefined;
    /** Returns BiDi. */
    get biDi(): BiDi | undefined;
    /** Returns AdjustRightIndent. */
    get adjustRightIndent(): AdjustRightIndent | undefined;
    /** Returns SnapToGrid. */
    get snapToGrid(): SnapToGrid | undefined;
    /** Returns SpacingBetweenLines. */
    get spacingBetweenLines(): SpacingBetweenLines | undefined;
    /** Returns Indentation. */
    get indentation(): Indentation | undefined;
    /** Returns ContextualSpacing. */
    get contextualSpacing(): ContextualSpacing | undefined;
    /** Returns MirrorIndents. */
    get mirrorIndents(): MirrorIndents | undefined;
    /** Returns SuppressOverlap. */
    get suppressOverlap(): SuppressOverlap | undefined;
    /** Returns Justification. */
    get justification(): Justification | undefined;
    /** Returns TextDirection. */
    get textDirection(): TextDirection | undefined;
    /** Returns TextAlignment. */
    get textAlignment(): TextAlignment | undefined;
    /** Returns TextBoxTightWrap. */
    get textBoxTightWrap(): TextBoxTightWrap | undefined;
    /** Returns OutlineLevel. */
    get outlineLevel(): OutlineLevel | undefined;
    /** Returns DivId. */
    get divId(): DivId | undefined;
    /** Returns ConditionalFormatStyle. */
    get conditionalFormatStyle(): ConditionalFormatStyle | undefined;
}
/** Previous Section Properties. Serialized as `w:sectPr` */
export declare class PreviousSectionProperties extends OxmlCompositeElement<FootnoteProperties | EndnoteProperties | SectionType | PageSize | PageMargin | PaperSource | PageBorders | LineNumberType | PageNumberType | Columns | FormProtection | VerticalTextAlignmentOnPage | NoEndnote | TitlePage | TextDirection | BiDi | GutterOnRight | DocGrid | PrinterSettingsReference | W15FootnoteColumns> {
    static _Q: string;
    static _A: string[];
    /** Physical Section Mark Character Revision ID. Serialized as `w:rsidRPr` */
    get rsidRPr(): HexBinaryValue | undefined;
    set rsidRPr(v: HexBinaryValue | undefined);
    /** Section Deletion Revision ID. Serialized as `w:rsidDel` */
    get rsidDel(): HexBinaryValue | undefined;
    set rsidDel(v: HexBinaryValue | undefined);
    /** Section Addition Revision ID. Serialized as `w:rsidR` */
    get rsidR(): HexBinaryValue | undefined;
    set rsidR(v: HexBinaryValue | undefined);
    /** Section Properties Revision ID. Serialized as `w:rsidSect` */
    get rsidSect(): HexBinaryValue | undefined;
    set rsidSect(v: HexBinaryValue | undefined);
    /** Returns FootnoteProperties. */
    get footnoteProperties(): FootnoteProperties | undefined;
    /** Returns EndnoteProperties. */
    get endnoteProperties(): EndnoteProperties | undefined;
    /** Returns SectionType. */
    get sectionType(): SectionType | undefined;
    /** Returns PageSize. */
    get pageSize(): PageSize | undefined;
    /** Returns PageMargin. */
    get pageMargin(): PageMargin | undefined;
    /** Returns PaperSource. */
    get paperSource(): PaperSource | undefined;
    /** Returns PageBorders. */
    get pageBorders(): PageBorders | undefined;
    /** Returns LineNumberType. */
    get lineNumberType(): LineNumberType | undefined;
    /** Returns PageNumberType. */
    get pageNumberType(): PageNumberType | undefined;
    /** Returns Columns. */
    get columns(): Columns | undefined;
    /** Returns FormProtection. */
    get formProtection(): FormProtection | undefined;
    /** Returns VerticalTextAlignmentOnPage. */
    get verticalTextAlignmentOnPage(): VerticalTextAlignmentOnPage | undefined;
    /** Returns NoEndnote. */
    get noEndnote(): NoEndnote | undefined;
    /** Returns TitlePage. */
    get titlePage(): TitlePage | undefined;
    /** Returns TextDirection. */
    get textDirection(): TextDirection | undefined;
    /** Returns BiDi. */
    get biDi(): BiDi | undefined;
    /** Returns GutterOnRight. */
    get gutterOnRight(): GutterOnRight | undefined;
    /** Returns DocGrid. */
    get docGrid(): DocGrid | undefined;
    /** Returns PrinterSettingsReference. */
    get printerSettingsReference(): PrinterSettingsReference | undefined;
    /** Returns W15FootnoteColumns. */
    get footnoteColumns(): W15FootnoteColumns | undefined;
}
/** Previous Table Properties. Serialized as `w:tblPr` */
export declare class PreviousTableProperties extends OxmlCompositeElement<TableStyle | TablePositionProperties | TableOverlap | BiDiVisual | TableWidth | TableJustification | TableCellSpacing | TableIndentation | TableBorders | Shading | TableLayout | TableCellMarginDefault | TableLook | TableCaption | TableDescription> {
    static _Q: string;
    /** Returns TableStyle. */
    get tableStyle(): TableStyle | undefined;
    /** Returns TablePositionProperties. */
    get tablePositionProperties(): TablePositionProperties | undefined;
    /** Returns TableOverlap. */
    get tableOverlap(): TableOverlap | undefined;
    /** Returns BiDiVisual. */
    get biDiVisual(): BiDiVisual | undefined;
    /** Returns TableWidth. */
    get tableWidth(): TableWidth | undefined;
    /** Returns TableJustification. */
    get tableJustification(): TableJustification | undefined;
    /** Returns TableCellSpacing. */
    get tableCellSpacing(): TableCellSpacing | undefined;
    /** Returns TableIndentation. */
    get tableIndentation(): TableIndentation | undefined;
    /** Returns TableBorders. */
    get tableBorders(): TableBorders | undefined;
    /** Returns Shading. */
    get shading(): Shading | undefined;
    /** Returns TableLayout. */
    get tableLayout(): TableLayout | undefined;
    /** Returns TableCellMarginDefault. */
    get tableCellMarginDefault(): TableCellMarginDefault | undefined;
    /** Returns TableLook. */
    get tableLook(): TableLook | undefined;
    /** Returns TableCaption. */
    get tableCaption(): TableCaption | undefined;
    /** Returns TableDescription. */
    get tableDescription(): TableDescription | undefined;
}
/** Previous Table Row Properties. Serialized as `w:trPr` */
export declare class PreviousTableRowProperties extends OxmlCompositeElement<ConditionalFormatStyle | DivId | GridBefore | GridAfter | WidthBeforeTableRow | WidthAfterTableRow | TableRowHeight | Hidden | CantSplit | TableHeader | TableCellSpacing | TableJustification> {
    static _Q: string;
}
/** Previous Table Cell Properties. Serialized as `w:tcPr` */
export declare class PreviousTableCellProperties extends OxmlCompositeElement<ConditionalFormatStyle | TableCellWidth | GridSpan | HorizontalMerge | VerticalMerge | TableCellBorders | Shading | NoWrap | TableCellMargin | TextDirection | TableCellFitText | TableCellVerticalAlignment | HideMark | CellInsertion | CellDeletion | CellMerge> {
    static _Q: string;
    /** Returns ConditionalFormatStyle. */
    get conditionalFormatStyle(): ConditionalFormatStyle | undefined;
    /** Returns TableCellWidth. */
    get tableCellWidth(): TableCellWidth | undefined;
    /** Returns GridSpan. */
    get gridSpan(): GridSpan | undefined;
    /** Returns HorizontalMerge. */
    get horizontalMerge(): HorizontalMerge | undefined;
    /** Returns VerticalMerge. */
    get verticalMerge(): VerticalMerge | undefined;
    /** Returns TableCellBorders. */
    get tableCellBorders(): TableCellBorders | undefined;
    /** Returns Shading. */
    get shading(): Shading | undefined;
    /** Returns NoWrap. */
    get noWrap(): NoWrap | undefined;
    /** Returns TableCellMargin. */
    get tableCellMargin(): TableCellMargin | undefined;
    /** Returns TextDirection. */
    get textDirection(): TextDirection | undefined;
    /** Returns TableCellFitText. */
    get tableCellFitText(): TableCellFitText | undefined;
    /** Returns TableCellVerticalAlignment. */
    get tableCellVerticalAlignment(): TableCellVerticalAlignment | undefined;
    /** Returns HideMark. */
    get hideMark(): HideMark | undefined;
}
/** Previous Table-Level Property Exceptions. Serialized as `w:tblPrEx` */
export declare class PreviousTablePropertyExceptions extends OxmlCompositeElement<TableWidth | TableJustification | TableCellSpacing | TableIndentation | TableBorders | Shading | TableLayout | TableCellMarginDefault | TableLook> {
    static _Q: string;
    /** Preferred Table Width Exception. */
    get tableWidth(): TableWidth | undefined;
    /** Table Alignment Exception. */
    get tableJustification(): TableJustification | undefined;
    /** Table Cell Spacing Exception. */
    get tableCellSpacing(): TableCellSpacing | undefined;
    /** Table Indent from Leading Margin Exception. */
    get tableIndentation(): TableIndentation | undefined;
    /** Table Borders Exceptions. */
    get tableBorders(): TableBorders | undefined;
    /** Table Shading Exception. */
    get shading(): Shading | undefined;
    /** Table Layout Exception. */
    get tableLayout(): TableLayout | undefined;
    /** Table Cell Margin Exceptions. */
    get tableCellMarginDefault(): TableCellMarginDefault | undefined;
    /** Table Style Conditional Formatting Settings Exception. */
    get tableLook(): TableLook | undefined;
}
/** Glossary Document Root Element. Serialized as `w:glossaryDocument` */
export declare class GlossaryDocument extends OxmlPartRootElement<DocumentBackground | DocParts> {
    static _Q: string;
    /** Document Background. */
    get documentBackground(): DocumentBackground | undefined;
    /** List of Glossary Document Entries. */
    get docParts(): DocParts | undefined;
}
/** Document. Serialized as `w:document` */
export declare class Document extends OxmlPartRootElement<DocumentBackground | Body> {
    static _Q: string;
    static _A: string[];
    /** conformance. Serialized as `w:conformance` */
    get conformance(): DocumentConformance | undefined;
    set conformance(v: DocumentConformance | undefined);
    /** Document Background. */
    get documentBackground(): DocumentBackground | undefined;
    /** Returns Body. */
    get body(): Body | undefined;
}
/** Style Definitions. Serialized as `w:styles` */
export declare class Styles extends OxmlPartRootElement<DocDefaults | LatentStyles | Style> {
    static _Q: string;
    /** Document Default Paragraph and Run Properties. */
    get docDefaults(): DocDefaults | undefined;
    /** Latent Style Information. */
    get latentStyles(): LatentStyles | undefined;
}
/** Numbering Definitions. Serialized as `w:numbering` */
export declare class Numbering extends OxmlPartRootElement<NumberingPictureBullet | AbstractNum | NumberingInstance | NumberingIdMacAtCleanup> {
    static _Q: string;
}
/** Font Table Root Element. Serialized as `w:fonts` */
export declare class Fonts extends OxmlPartRootElement<Font> {
    static _Q: string;
}
/** Web Page Settings. Serialized as `w:webSettings` */
export declare class WebSettings extends OxmlPartRootElement<Frameset | Divs | WebPageEncoding | OptimizeForBrowser | RelyOnVML | AllowPNG | DoNotRelyOnCSS | DoNotSaveAsSingleFile | DoNotOrganizeInFolder | DoNotUseLongFileNames | PixelsPerInch | TargetScreenSize> {
    static _Q: string;
    /** Returns Frameset. */
    get frameset(): Frameset | undefined;
    /** Returns Divs. */
    get divs(): Divs | undefined;
    /** Returns WebPageEncoding. */
    get webPageEncoding(): WebPageEncoding | undefined;
    /** Returns OptimizeForBrowser. */
    get optimizeForBrowser(): OptimizeForBrowser | undefined;
    /** Returns RelyOnVML. */
    get relyOnVML(): RelyOnVML | undefined;
    /** Returns AllowPNG. */
    get allowPNG(): AllowPNG | undefined;
    /** Returns DoNotRelyOnCSS. */
    get doNotRelyOnCSS(): DoNotRelyOnCSS | undefined;
    /** Returns DoNotSaveAsSingleFile. */
    get doNotSaveAsSingleFile(): DoNotSaveAsSingleFile | undefined;
    /** Returns DoNotOrganizeInFolder. */
    get doNotOrganizeInFolder(): DoNotOrganizeInFolder | undefined;
    /** Returns DoNotUseLongFileNames. */
    get doNotUseLongFileNames(): DoNotUseLongFileNames | undefined;
    /** Returns PixelsPerInch. */
    get pixelsPerInch(): PixelsPerInch | undefined;
    /** Returns TargetScreenSize. */
    get targetScreenSize(): TargetScreenSize | undefined;
}
/** Document Settings. Serialized as `w:settings` */
export declare class Settings extends OxmlPartRootElement<WriteProtection | View | Zoom | RemovePersonalInformation | RemoveDateAndTime | DoNotDisplayPageBoundaries | DisplayBackgroundShape | PrintPostScriptOverText | PrintFractionalCharacterWidth | PrintFormsData | EmbedTrueTypeFonts | EmbedSystemFonts | SaveSubsetFonts | SaveFormsData | MirrorMargins | AlignBorderAndEdges | BordersDoNotSurroundHeader | BordersDoNotSurroundFooter | GutterAtTop | HideSpellingErrors | HideGrammaticalErrors | ActiveWritingStyle | ProofState | FormsDesign | AttachedTemplate | LinkStyles | StylePaneFormatFilter | StylePaneSortMethods | DocumentType | MailMerge | RevisionView | TrackRevisions | DoNotTrackMoves | DoNotTrackFormatting | DocumentProtection | AutoFormatOverride | StyleLockThemesPart | StyleLockStylesPart | DefaultTabStop | AutoHyphenation | ConsecutiveHyphenLimit | HyphenationZone | DoNotHyphenateCaps | ShowEnvelope | SummaryLength | ClickAndTypeStyle | DefaultTableStyle | EvenAndOddHeaders | BookFoldReversePrinting | BookFoldPrinting | BookFoldPrintingSheets | DrawingGridHorizontalSpacing | DrawingGridVerticalSpacing | DisplayHorizontalDrawingGrid | DisplayVerticalDrawingGrid | DoNotUseMarginsForDrawingGridOrigin | DrawingGridHorizontalOrigin | DrawingGridVerticalOrigin | DoNotShadeFormData | NoPunctuationKerning | CharacterSpacingControl | PrintTwoOnOne | StrictFirstAndLastChars | NoLineBreaksAfterKinsoku | NoLineBreaksBeforeKinsoku | SavePreviewPicture | DoNotValidateAgainstSchema | SaveInvalidXml | IgnoreMixedContent | AlwaysShowPlaceholderText | DoNotDemarcateInvalidXml | SaveXmlDataOnly | UseXsltWhenSaving | SaveThroughXslt | ShowXmlTags | AlwaysMergeEmptyNamespace | UpdateFieldsOnOpen | HeaderShapeDefaults | FootnoteDocumentWideProperties | EndnoteDocumentWideProperties | Compatibility | DocumentVariables | Rsids | MMathProperties | UICompatibleWith97To2003 | AttachedSchema | ThemeFontLanguages | ColorSchemeMapping | DoNotIncludeSubdocsInStats | DoNotAutoCompressPictures | ForceUpgrade | Captions | ReadModeInkLockDown | SlSchemaLibrary | ShapeDefaults | DecimalSymbol | ListSeparator | W14DocumentId | W14DiscardImageEditingData | W14DefaultImageDpi | W14ConflictMode | W15ChartTrackingRefBased | W15PersistentDocumentId> {
    static _Q: string;
    /** Write Protection. */
    get writeProtection(): WriteProtection | undefined;
    /** Document View Setting. */
    get view(): View | undefined;
    /** Magnification Setting. */
    get zoom(): Zoom | undefined;
    /** Remove Personal Information from Document Properties. */
    get removePersonalInformation(): RemovePersonalInformation | undefined;
    /** Remove Date and Time from Annotations. */
    get removeDateAndTime(): RemoveDateAndTime | undefined;
    /** Do Not Display Visual Boundary For Header/Footer or Between Pages. */
    get doNotDisplayPageBoundaries(): DoNotDisplayPageBoundaries | undefined;
    /** Display Background Objects When Displaying Document. */
    get displayBackgroundShape(): DisplayBackgroundShape | undefined;
    /** Print PostScript Codes With Document Text. */
    get printPostScriptOverText(): PrintPostScriptOverText | undefined;
    /** Print Fractional Character Widths. */
    get printFractionalCharacterWidth(): PrintFractionalCharacterWidth | undefined;
    /** Only Print Form Field Content. */
    get printFormsData(): PrintFormsData | undefined;
    /** Embed TrueType Fonts. */
    get embedTrueTypeFonts(): EmbedTrueTypeFonts | undefined;
    /** Embed Common System Fonts. */
    get embedSystemFonts(): EmbedSystemFonts | undefined;
    /** Subset Fonts When Embedding. */
    get saveSubsetFonts(): SaveSubsetFonts | undefined;
    /** Only Save Form Field Content. */
    get saveFormsData(): SaveFormsData | undefined;
    /** Mirror Page Margins. */
    get mirrorMargins(): MirrorMargins | undefined;
    /** Align Paragraph and Table Borders with Page Border. */
    get alignBorderAndEdges(): AlignBorderAndEdges | undefined;
    /** Page Border Excludes Header. */
    get bordersDoNotSurroundHeader(): BordersDoNotSurroundHeader | undefined;
    /** Page Border Excludes Footer. */
    get bordersDoNotSurroundFooter(): BordersDoNotSurroundFooter | undefined;
    /** Position Gutter At Top of Page. */
    get gutterAtTop(): GutterAtTop | undefined;
    /** Do Not Display Visual Indication of Spelling Errors. */
    get hideSpellingErrors(): HideSpellingErrors | undefined;
    /** Do Not Display Visual Indication of Grammatical Errors. */
    get hideGrammaticalErrors(): HideGrammaticalErrors | undefined;
}
/** Defines the HeaderFooterType Class. */
export declare abstract class HeaderFooterType extends OxmlCompositeElement<AltChunk | CustomXmlBlock | SdtBlock | Paragraph | Table | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {
}
/** Footer. Serialized as `w:ftr` */
export declare class Footer extends OxmlPartRootElement<AltChunk | CustomXmlBlock | SdtBlock | Paragraph | Table | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {
    static _Q: string;
}
/** Header. Serialized as `w:hdr` */
export declare class Header extends OxmlPartRootElement<AltChunk | CustomXmlBlock | SdtBlock | Paragraph | Table | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {
    static _Q: string;
}
/** Document Endnotes. Serialized as `w:endnotes` */
export declare class Endnotes extends OxmlPartRootElement<Endnote> {
    static _Q: string;
}
/** Document Footnotes. Serialized as `w:footnotes` */
export declare class Footnotes extends OxmlPartRootElement<Footnote> {
    static _Q: string;
}
/** Comments Collection. Serialized as `w:comments` */
export declare class Comments extends OxmlPartRootElement<Comment> {
    static _Q: string;
}
/** Rich Text Box Content Container. Serialized as `w:txbxContent` */
export declare class TextBoxContent extends OxmlCompositeElement<AltChunk | CustomXmlBlock | SdtBlock | Paragraph | Table | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {
    static _Q: string;
}
/** Inclusion/Exclusion Data for Data Source. Serialized as `w:recipients` */
export declare class Recipients extends OxmlPartRootElement<RecipientData> {
    static _Q: string;
}
/** Defines the DocGrid Class. Serialized as `w:docGrid` */
export declare class DocGrid extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Document Grid Type. Serialized as `w:type` */
    get type(): DocGridValues | undefined;
    set type(v: DocGridValues | undefined);
    /** Document Grid Line Pitch. Serialized as `w:linePitch` */
    get linePitch(): Int32Value | undefined;
    set linePitch(v: Int32Value | undefined);
    /** Document Grid Character Pitch. Serialized as `w:charSpace` */
    get characterSpace(): Int32Value | undefined;
    set characterSpace(v: Int32Value | undefined);
}
/** Defines the VerticalTextAlignmentOnPage Class. Serialized as `w:vAlign` */
export declare class VerticalTextAlignmentOnPage extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Vertical Alignment Setting. Serialized as `w:val` */
    get val(): VerticalJustificationValues | undefined;
    set val(v: VerticalJustificationValues | undefined);
}
/** Defines the Columns Class. Serialized as `w:cols` */
export declare class Columns extends OxmlCompositeElement<Column> {
    static _Q: string;
    static _A: string[];
    /** Equal Column Widths. Serialized as `w:equalWidth` */
    get equalWidth(): OnOffValue | undefined;
    set equalWidth(v: OnOffValue | undefined);
    /** Spacing Between Equal Width Columns. Serialized as `w:space` */
    get space(): StringValue | undefined;
    set space(v: StringValue | undefined);
    /** Number of Equal Width Columns. Serialized as `w:num` */
    get columnCount(): Int16Value | undefined;
    set columnCount(v: Int16Value | undefined);
    /** Draw Line Between Columns. Serialized as `w:sep` */
    get separator(): OnOffValue | undefined;
    set separator(v: OnOffValue | undefined);
}
/** Defines the PageNumberType Class. Serialized as `w:pgNumType` */
export declare class PageNumberType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Page Number Format. Serialized as `w:fmt` */
    get format(): NumberFormatValues | undefined;
    set format(v: NumberFormatValues | undefined);
    /** Starting Page Number. Serialized as `w:start` */
    get start(): Int32Value | undefined;
    set start(v: Int32Value | undefined);
    /** Chapter Heading Style. Serialized as `w:chapStyle` */
    get chapterStyle(): ByteValue | undefined;
    set chapterStyle(v: ByteValue | undefined);
    /** Chapter Separator Character. Serialized as `w:chapSep` */
    get chapterSeparator(): ChapterSeparatorValues | undefined;
    set chapterSeparator(v: ChapterSeparatorValues | undefined);
}
/** Defines the LineNumberType Class. Serialized as `w:lnNumType` */
export declare class LineNumberType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Line Number Increments to Display. Serialized as `w:countBy` */
    get countBy(): Int16Value | undefined;
    set countBy(v: Int16Value | undefined);
    /** Line Numbering Starting Value. Serialized as `w:start` */
    get start(): Int16Value | undefined;
    set start(v: Int16Value | undefined);
    /** Distance Between Text and Line Numbering. Serialized as `w:distance` */
    get distance(): StringValue | undefined;
    set distance(v: StringValue | undefined);
    /** Line Numbering Restart Setting. Serialized as `w:restart` */
    get restart(): LineNumberRestartValues | undefined;
    set restart(v: LineNumberRestartValues | undefined);
}
/** Defines the PageBorders Class. Serialized as `w:pgBorders` */
export declare class PageBorders extends OxmlCompositeElement<TopBorder | LeftBorder | BottomBorder | RightBorder> {
    static _Q: string;
    static _A: string[];
    /** Z-Ordering of Page Border. Serialized as `w:zOrder` */
    get zOrder(): PageBorderZOrderValues | undefined;
    set zOrder(v: PageBorderZOrderValues | undefined);
    /** Pages to Display Page Borders. Serialized as `w:display` */
    get display(): PageBorderDisplayValues | undefined;
    set display(v: PageBorderDisplayValues | undefined);
    /** Page Border Positioning. Serialized as `w:offsetFrom` */
    get offsetFrom(): PageBorderOffsetValues | undefined;
    set offsetFrom(v: PageBorderOffsetValues | undefined);
    /** Top Border. */
    get topBorder(): TopBorder | undefined;
    /** Left Border. */
    get leftBorder(): LeftBorder | undefined;
    /** Bottom Border. */
    get bottomBorder(): BottomBorder | undefined;
    /** Right Border. */
    get rightBorder(): RightBorder | undefined;
}
/** Defines the PaperSource Class. Serialized as `w:paperSrc` */
export declare class PaperSource extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** First Page Printer Tray Code. Serialized as `w:first` */
    get first(): UInt16Value | undefined;
    set first(v: UInt16Value | undefined);
    /** Non-First Page Printer Tray Code. Serialized as `w:other` */
    get other(): UInt16Value | undefined;
    set other(v: UInt16Value | undefined);
}
/** Defines the PageMargin Class. Serialized as `w:pgMar` */
export declare class PageMargin extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Top Margin Spacing. Serialized as `w:top` */
    get top(): Int32Value | undefined;
    set top(v: Int32Value | undefined);
    /** Right Margin Spacing. Serialized as `w:right` */
    get right(): UInt32Value | undefined;
    set right(v: UInt32Value | undefined);
    /** Page Bottom Spacing. Serialized as `w:bottom` */
    get bottom(): Int32Value | undefined;
    set bottom(v: Int32Value | undefined);
    /** Left Margin Spacing. Serialized as `w:left` */
    get left(): UInt32Value | undefined;
    set left(v: UInt32Value | undefined);
    /** Spacing to Top of Header. Serialized as `w:header` */
    get header(): UInt32Value | undefined;
    set header(v: UInt32Value | undefined);
    /** Spacing to Bottom of Footer. Serialized as `w:footer` */
    get footer(): UInt32Value | undefined;
    set footer(v: UInt32Value | undefined);
    /** Page Gutter Spacing. Serialized as `w:gutter` */
    get gutter(): UInt32Value | undefined;
    set gutter(v: UInt32Value | undefined);
}
/** Defines the PageSize Class. Serialized as `w:pgSz` */
export declare class PageSize extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Page Width. Serialized as `w:w` */
    get width(): UInt32Value | undefined;
    set width(v: UInt32Value | undefined);
    /** Page Height. Serialized as `w:h` */
    get height(): UInt32Value | undefined;
    set height(v: UInt32Value | undefined);
    /** Page Orientation. Serialized as `w:orient` */
    get orient(): PageOrientationValues | undefined;
    set orient(v: PageOrientationValues | undefined);
    /** Printer Paper Code. Serialized as `w:code` */
    get code(): UInt16Value | undefined;
    set code(v: UInt16Value | undefined);
}
/** Defines the SectionType Class. Serialized as `w:type` */
export declare class SectionType extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Section Type Setting. Serialized as `w:val` */
    get val(): SectionMarkValues | undefined;
    set val(v: SectionMarkValues | undefined);
}
/** Defines the EndnoteProperties Class. Serialized as `w:endnotePr` */
export declare class EndnoteProperties extends OxmlCompositeElement<EndnotePosition | NumberingFormat | NumberingStart | NumberingRestart> {
    static _Q: string;
    /** Endnote Placement. */
    get endnotePosition(): EndnotePosition | undefined;
    /** Endnote Numbering Format. */
    get numberingFormat(): NumberingFormat | undefined;
    /** Footnote and Endnote Numbering Starting Value. */
    get numberingStart(): NumberingStart | undefined;
    /** Footnote and Endnote Numbering Restart Location. */
    get numberingRestart(): NumberingRestart | undefined;
}
/** Defines the FootnoteProperties Class. Serialized as `w:footnotePr` */
export declare class FootnoteProperties extends OxmlCompositeElement<FootnotePosition | NumberingFormat | NumberingStart | NumberingRestart> {
    static _Q: string;
    /** Footnote Placement. */
    get footnotePosition(): FootnotePosition | undefined;
    /** Footnote Numbering Format. */
    get numberingFormat(): NumberingFormat | undefined;
    /** Footnote and Endnote Numbering Starting Value. */
    get numberingStart(): NumberingStart | undefined;
    /** Footnote and Endnote Numbering Restart Location. */
    get numberingRestart(): NumberingRestart | undefined;
}
/** Defines the TableLook Class. Serialized as `w:tblLook` */
export declare class TableLook extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get value(): HexBinaryValue | undefined;
    set value(v: HexBinaryValue | undefined);
    /** firstRow. Serialized as `w:firstRow` */
    get firstRow(): OnOffValue | undefined;
    set firstRow(v: OnOffValue | undefined);
    /** lastRow. Serialized as `w:lastRow` */
    get lastRow(): OnOffValue | undefined;
    set lastRow(v: OnOffValue | undefined);
    /** firstColumn. Serialized as `w:firstColumn` */
    get firstColumn(): OnOffValue | undefined;
    set firstColumn(v: OnOffValue | undefined);
    /** lastColumn. Serialized as `w:lastColumn` */
    get lastColumn(): OnOffValue | undefined;
    set lastColumn(v: OnOffValue | undefined);
    /** noHBand. Serialized as `w:noHBand` */
    get noHorizontalBand(): OnOffValue | undefined;
    set noHorizontalBand(v: OnOffValue | undefined);
    /** noVBand. Serialized as `w:noVBand` */
    get noVerticalBand(): OnOffValue | undefined;
    set noVerticalBand(v: OnOffValue | undefined);
}
/** Defines the AltChunk Class. Serialized as `w:altChunk` */
export declare class AltChunk extends OxmlCompositeElement<AltChunkProperties> {
    static _Q: string;
    static _A: string[];
    /** Relationship to Part. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** External Content Import Properties. */
    get altChunkProperties(): AltChunkProperties | undefined;
}
/** Footnote and Endnote Numbering Restart Location. Serialized as `w:numRestart` */
export declare class NumberingRestart extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Automatic Numbering Restart Value. Serialized as `w:val` */
    get val(): RestartNumberValues | undefined;
    set val(v: RestartNumberValues | undefined);
}
/** Footnote and Endnote Numbering Starting Value. Serialized as `w:numStart` */
export declare class NumberingStart extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): UInt16Value | undefined;
    set val(v: UInt16Value | undefined);
}
/** Defines the TableCellMarginDefault Class. Serialized as `w:tblCellMar` */
export declare class TableCellMarginDefault extends OxmlCompositeElement<TopMargin | TableCellLeftMargin | StartMargin | BottomMargin | TableCellRightMargin | EndMargin> {
    static _Q: string;
    /** Table Cell Top Margin Default. */
    get topMargin(): TopMargin | undefined;
    /** Table Cell Left Margin Default. */
    get tableCellLeftMargin(): TableCellLeftMargin | undefined;
    /** Returns StartMargin. */
    get startMargin(): StartMargin | undefined;
    /** Table Cell Bottom Margin Default. */
    get bottomMargin(): BottomMargin | undefined;
    /** Table Cell Right Margin Default. */
    get tableCellRightMargin(): TableCellRightMargin | undefined;
    /** Returns EndMargin. */
    get endMargin(): EndMargin | undefined;
}
/** Defines the TableLayout Class. Serialized as `w:tblLayout` */
export declare class TableLayout extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Table Layout Setting. Serialized as `w:type` */
    get type(): TableLayoutValues | undefined;
    set type(v: TableLayoutValues | undefined);
}
/** Defines the TableBorders Class. Serialized as `w:tblBorders` */
export declare class TableBorders extends OxmlCompositeElement<TopBorder | LeftBorder | StartBorder | BottomBorder | RightBorder | EndBorder | InsideHorizontalBorder | InsideVerticalBorder> {
    static _Q: string;
    /** Table Top Border. */
    get topBorder(): TopBorder | undefined;
    /** Table Left Border. */
    get leftBorder(): LeftBorder | undefined;
    /** Returns StartBorder. */
    get startBorder(): StartBorder | undefined;
    /** Table Bottom Border. */
    get bottomBorder(): BottomBorder | undefined;
    /** Table Right Border. */
    get rightBorder(): RightBorder | undefined;
    /** Returns EndBorder. */
    get endBorder(): EndBorder | undefined;
    /** Table Inside Horizontal Edges Border. */
    get insideHorizontalBorder(): InsideHorizontalBorder | undefined;
    /** Table Inside Vertical Edges Border. */
    get insideVerticalBorder(): InsideVerticalBorder | undefined;
}
/** Defines the TableIndentation Class. Serialized as `w:tblInd` */
export declare class TableIndentation extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** w. Serialized as `w:w` */
    get width(): Int32Value | undefined;
    set width(v: Int32Value | undefined);
    /** type. Serialized as `w:type` */
    get type(): TableWidthUnitValues | undefined;
    set type(v: TableWidthUnitValues | undefined);
}
/** Defines the UnsignedDecimalNumberMax3Type Class. */
export declare abstract class UnsignedDecimalNumberMax3Type extends OxmlLeafElement {
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Defines the TableStyleColumnBandSize Class. Serialized as `w:tblStyleColBandSize` */
export declare class TableStyleColumnBandSize extends UnsignedDecimalNumberMax3Type {
    static _Q: string;
}
/** Defines the TableStyleRowBandSize Class. Serialized as `w:tblStyleRowBandSize` */
export declare class TableStyleRowBandSize extends UnsignedDecimalNumberMax3Type {
    static _Q: string;
}
/** Defines the TableOverlap Class. Serialized as `w:tblOverlap` */
export declare class TableOverlap extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Floating Table Overlap Setting. Serialized as `w:val` */
    get val(): TableOverlapValues | undefined;
    set val(v: TableOverlapValues | undefined);
}
/** Defines the TablePositionProperties Class. Serialized as `w:tblpPr` */
export declare class TablePositionProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Distance From Left of Table to Text. Serialized as `w:leftFromText` */
    get leftFromText(): Int16Value | undefined;
    set leftFromText(v: Int16Value | undefined);
    /** (Distance From Right of Table to Text. Serialized as `w:rightFromText` */
    get rightFromText(): Int16Value | undefined;
    set rightFromText(v: Int16Value | undefined);
    /** Distance From Top of Table to Text. Serialized as `w:topFromText` */
    get topFromText(): Int16Value | undefined;
    set topFromText(v: Int16Value | undefined);
    /** Distance From Bottom of Table to Text. Serialized as `w:bottomFromText` */
    get bottomFromText(): Int16Value | undefined;
    set bottomFromText(v: Int16Value | undefined);
    /** Table Vertical Anchor. Serialized as `w:vertAnchor` */
    get verticalAnchor(): VerticalAnchorValues | undefined;
    set verticalAnchor(v: VerticalAnchorValues | undefined);
    /** Table Horizontal Anchor. Serialized as `w:horzAnchor` */
    get horizontalAnchor(): HorizontalAnchorValues | undefined;
    set horizontalAnchor(v: HorizontalAnchorValues | undefined);
    /** Relative Horizontal Alignment From Anchor. Serialized as `w:tblpXSpec` */
    get tablePositionXAlignment(): HorizontalAlignmentValues | undefined;
    set tablePositionXAlignment(v: HorizontalAlignmentValues | undefined);
    /** Absolute Horizontal Distance From Anchor. Serialized as `w:tblpX` */
    get tablePositionX(): Int32Value | undefined;
    set tablePositionX(v: Int32Value | undefined);
    /** Relative Vertical Alignment from Anchor. Serialized as `w:tblpYSpec` */
    get tablePositionYAlignment(): VerticalAlignmentValues | undefined;
    set tablePositionYAlignment(v: VerticalAlignmentValues | undefined);
    /** Absolute Vertical Distance From Anchor. Serialized as `w:tblpY` */
    get tablePositionY(): Int32Value | undefined;
    set tablePositionY(v: Int32Value | undefined);
}
/** Defines the TableJustification Class. Serialized as `w:jc` */
export declare class TableJustification extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): TableRowAlignmentValues | undefined;
    set val(v: TableRowAlignmentValues | undefined);
}
/** Defines the TableRowHeight Class. Serialized as `w:trHeight` */
export declare class TableRowHeight extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Table Row Height. Serialized as `w:val` */
    get val(): UInt32Value | undefined;
    set val(v: UInt32Value | undefined);
    /** Table Row Height Type. Serialized as `w:hRule` */
    get heightType(): HeightRuleValues | undefined;
    set heightType(v: HeightRuleValues | undefined);
}
/** Defines the DivId Class. Serialized as `w:divId` */
export declare class DivId extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Defines the TableCellVerticalAlignment Class. Serialized as `w:vAlign` */
export declare class TableCellVerticalAlignment extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): TableVerticalAlignmentValues | undefined;
    set val(v: TableVerticalAlignmentValues | undefined);
}
/** Defines the TableCellMargin Class. Serialized as `w:tcMar` */
export declare class TableCellMargin extends OxmlCompositeElement<TopMargin | LeftMargin | StartMargin | BottomMargin | RightMargin | EndMargin> {
    static _Q: string;
    /** Table Cell Top Margin Exception. */
    get topMargin(): TopMargin | undefined;
    /** Table Cell Left Margin Exception. */
    get leftMargin(): LeftMargin | undefined;
    /** Returns StartMargin. */
    get startMargin(): StartMargin | undefined;
    /** Table Cell Bottom Margin Exception. */
    get bottomMargin(): BottomMargin | undefined;
    /** Table Cell Right Margin Exception. */
    get rightMargin(): RightMargin | undefined;
    /** Returns EndMargin. */
    get endMargin(): EndMargin | undefined;
}
/** Defines the OnOffOnlyType Class. */
export declare abstract class OnOffOnlyType extends OxmlLeafElement {
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): OnOffOnlyValues | undefined;
    set val(v: OnOffOnlyValues | undefined);
}
/** E-Mail Message Reply Style. Serialized as `w:personalReply` */
export declare class PersonalReply extends OnOffOnlyType {
    static _Q: string;
}
/** E-Mail Message Composition Style. Serialized as `w:personalCompose` */
export declare class PersonalCompose extends OnOffOnlyType {
    static _Q: string;
}
/** E-Mail Message Text Style. Serialized as `w:personal` */
export declare class Personal extends OnOffOnlyType {
    static _Q: string;
}
/** Style Cannot Be Applied. Serialized as `w:locked` */
export declare class Locked extends OnOffOnlyType {
    static _Q: string;
}
/** Primary Style. Serialized as `w:qFormat` */
export declare class PrimaryStyle extends OnOffOnlyType {
    static _Q: string;
}
/** Remove Semi-Hidden Property When Style Is Used. Serialized as `w:unhideWhenUsed` */
export declare class UnhideWhenUsed extends OnOffOnlyType {
    static _Q: string;
}
/** Hide Style From Main User Interface. Serialized as `w:semiHidden` */
export declare class SemiHidden extends OnOffOnlyType {
    static _Q: string;
}
/** Hide Style From User Interface. Serialized as `w:hidden` */
export declare class StyleHidden extends OnOffOnlyType {
    static _Q: string;
}
/** Automatically Merge User Formatting Into Style Definition. Serialized as `w:autoRedefine` */
export declare class AutoRedefine extends OnOffOnlyType {
    static _Q: string;
}
/** Frameset Splitter Border Style. Serialized as `w:flatBorders` */
export declare class FlatBorders extends OnOffOnlyType {
    static _Q: string;
}
/** Do Not Display Frameset Splitters. Serialized as `w:noBorder` */
export declare class NoBorder extends OnOffOnlyType {
    static _Q: string;
}
/** Maintain Link to Existing File. Serialized as `w:linkedToFile` */
export declare class LinkedToFile extends OnOffOnlyType {
    static _Q: string;
}
/** Frame Cannot Be Resized. Serialized as `w:noResizeAllowed` */
export declare class NoResizeAllowed extends OnOffOnlyType {
    static _Q: string;
}
/** Defines the BiDiVisual Class. Serialized as `w:bidiVisual` */
export declare class BiDiVisual extends OnOffOnlyType {
    static _Q: string;
}
/** Defines the TableHeader Class. Serialized as `w:tblHeader` */
export declare class TableHeader extends OnOffOnlyType {
    static _Q: string;
}
/** Defines the CantSplit Class. Serialized as `w:cantSplit` */
export declare class CantSplit extends OnOffOnlyType {
    static _Q: string;
}
/** Defines the HideMark Class. Serialized as `w:hideMark` */
export declare class HideMark extends OnOffOnlyType {
    static _Q: string;
}
/** Defines the TableCellFitText Class. Serialized as `w:tcFitText` */
export declare class TableCellFitText extends OnOffOnlyType {
    static _Q: string;
}
/** Defines the NoWrap Class. Serialized as `w:noWrap` */
export declare class NoWrap extends OnOffOnlyType {
    static _Q: string;
}
/** Defines the TableCellBorders Class. Serialized as `w:tcBorders` */
export declare class TableCellBorders extends OxmlCompositeElement<TopBorder | LeftBorder | StartBorder | BottomBorder | RightBorder | EndBorder | InsideHorizontalBorder | InsideVerticalBorder | TopLeftToBottomRightCellBorder | TopRightToBottomLeftCellBorder> {
    static _Q: string;
    /** Table Cell Top Border. */
    get topBorder(): TopBorder | undefined;
    /** Table Cell Left Border. */
    get leftBorder(): LeftBorder | undefined;
    /** Returns StartBorder. */
    get startBorder(): StartBorder | undefined;
    /** Table Cell Bottom Border. */
    get bottomBorder(): BottomBorder | undefined;
    /** Table Cell Right Border. */
    get rightBorder(): RightBorder | undefined;
    /** Returns EndBorder. */
    get endBorder(): EndBorder | undefined;
    /** Table Cell Inside Horizontal Edges Border. */
    get insideHorizontalBorder(): InsideHorizontalBorder | undefined;
    /** Table Cell Inside Vertical Edges Border. */
    get insideVerticalBorder(): InsideVerticalBorder | undefined;
    /** Table Cell Top Left to Bottom Right Diagonal Border. */
    get topLeftToBottomRightCellBorder(): TopLeftToBottomRightCellBorder | undefined;
    /** Table Cell Top Right to Bottom Left Diagonal Border. */
    get topRightToBottomLeftCellBorder(): TopRightToBottomLeftCellBorder | undefined;
}
/** Defines the VerticalMerge Class. Serialized as `w:vMerge` */
export declare class VerticalMerge extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Vertical Merge Type. Serialized as `w:val` */
    get val(): MergedCellValues | undefined;
    set val(v: MergedCellValues | undefined);
}
/** Defines the HorizontalMerge Class. Serialized as `w:hMerge` */
export declare class HorizontalMerge extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Horizontal Merge Type. Serialized as `w:val` */
    get val(): MergedCellValues | undefined;
    set val(v: MergedCellValues | undefined);
}
/** Defines the TableWidthType Class. */
export declare abstract class TableWidthType extends OxmlLeafElement {
    static _A: string[];
    /** Table Width Value. Serialized as `w:w` */
    get width(): StringValue | undefined;
    set width(v: StringValue | undefined);
    /** Table Width Type. Serialized as `w:type` */
    get type(): TableWidthUnitValues | undefined;
    set type(v: TableWidthUnitValues | undefined);
}
/** Table Cell Right Margin Exception. Serialized as `w:right` */
export declare class RightMargin extends TableWidthType {
    static _Q: string;
}
/** Table Cell Left Margin Exception. Serialized as `w:left` */
export declare class LeftMargin extends TableWidthType {
    static _Q: string;
}
/** Defines the EndMargin Class. Serialized as `w:end` */
export declare class EndMargin extends TableWidthType {
    static _Q: string;
}
/** Table Cell Bottom Margin Default. Serialized as `w:bottom` */
export declare class BottomMargin extends TableWidthType {
    static _Q: string;
}
/** Defines the StartMargin Class. Serialized as `w:start` */
export declare class StartMargin extends TableWidthType {
    static _Q: string;
}
/** Table Cell Top Margin Default. Serialized as `w:top` */
export declare class TopMargin extends TableWidthType {
    static _Q: string;
}
/** Defines the TableWidth Class. Serialized as `w:tblW` */
export declare class TableWidth extends TableWidthType {
    static _Q: string;
}
/** Defines the TableCellSpacing Class. Serialized as `w:tblCellSpacing` */
export declare class TableCellSpacing extends TableWidthType {
    static _Q: string;
}
/** Defines the WidthAfterTableRow Class. Serialized as `w:wAfter` */
export declare class WidthAfterTableRow extends TableWidthType {
    static _Q: string;
}
/** Defines the WidthBeforeTableRow Class. Serialized as `w:wBefore` */
export declare class WidthBeforeTableRow extends TableWidthType {
    static _Q: string;
}
/** Defines the TableCellWidth Class. Serialized as `w:tcW` */
export declare class TableCellWidth extends TableWidthType {
    static _Q: string;
}
/** Defines the ConditionalFormatStyle Class. Serialized as `w:cnfStyle` */
export declare class ConditionalFormatStyle extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Conditional Formatting Bit Mask. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
    /** firstRow. Serialized as `w:firstRow` */
    get firstRow(): OnOffValue | undefined;
    set firstRow(v: OnOffValue | undefined);
    /** lastRow. Serialized as `w:lastRow` */
    get lastRow(): OnOffValue | undefined;
    set lastRow(v: OnOffValue | undefined);
    /** firstColumn. Serialized as `w:firstColumn` */
    get firstColumn(): OnOffValue | undefined;
    set firstColumn(v: OnOffValue | undefined);
    /** lastColumn. Serialized as `w:lastColumn` */
    get lastColumn(): OnOffValue | undefined;
    set lastColumn(v: OnOffValue | undefined);
    /** oddVBand. Serialized as `w:oddVBand` */
    get oddVerticalBand(): OnOffValue | undefined;
    set oddVerticalBand(v: OnOffValue | undefined);
    /** evenVBand. Serialized as `w:evenVBand` */
    get evenVerticalBand(): OnOffValue | undefined;
    set evenVerticalBand(v: OnOffValue | undefined);
    /** oddHBand. Serialized as `w:oddHBand` */
    get oddHorizontalBand(): OnOffValue | undefined;
    set oddHorizontalBand(v: OnOffValue | undefined);
    /** evenHBand. Serialized as `w:evenHBand` */
    get evenHorizontalBand(): OnOffValue | undefined;
    set evenHorizontalBand(v: OnOffValue | undefined);
    /** firstRowFirstColumn. Serialized as `w:firstRowFirstColumn` */
    get firstRowFirstColumn(): OnOffValue | undefined;
    set firstRowFirstColumn(v: OnOffValue | undefined);
    /** firstRowLastColumn. Serialized as `w:firstRowLastColumn` */
    get firstRowLastColumn(): OnOffValue | undefined;
    set firstRowLastColumn(v: OnOffValue | undefined);
    /** lastRowFirstColumn. Serialized as `w:lastRowFirstColumn` */
    get lastRowFirstColumn(): OnOffValue | undefined;
    set lastRowFirstColumn(v: OnOffValue | undefined);
    /** lastRowLastColumn. Serialized as `w:lastRowLastColumn` */
    get lastRowLastColumn(): OnOffValue | undefined;
    set lastRowLastColumn(v: OnOffValue | undefined);
}
/** Defines the RelationshipType Class. */
export declare abstract class RelationshipType extends OxmlLeafElement {
    static _A: string[];
    /** Relationship to Part. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Attached Document Template. Serialized as `w:attachedTemplate` */
export declare class AttachedTemplate extends RelationshipType {
    static _Q: string;
}
/** Defines the MovieReference Class. Serialized as `w:movie` */
export declare class MovieReference extends RelationshipType {
    static _Q: string;
}
/** Source File for Frame. Serialized as `w:sourceFileName` */
export declare class SourceFileReference extends RelationshipType {
    static _Q: string;
}
/** Header Definition File Path. Serialized as `w:headerSource` */
export declare class HeaderSource extends RelationshipType {
    static _Q: string;
}
/** Data Source File Path. Serialized as `w:dataSource` */
export declare class DataSourceReference extends RelationshipType {
    static _Q: string;
}
/** Reference to Inclusion/Exclusion Data for Data Source. Serialized as `w:recipientData` */
export declare class RecipientDataReference extends RelationshipType {
    static _Q: string;
}
/** ODSO Data Source File Path. Serialized as `w:src` */
export declare class SourceReference extends RelationshipType {
    static _Q: string;
}
/** Defines the PrinterSettingsReference Class. Serialized as `w:printerSettings` */
export declare class PrinterSettingsReference extends RelationshipType {
    static _Q: string;
}
/** Anchor for Subdocument Location. Serialized as `w:subDoc` */
export declare class SubDocumentReference extends RelationshipType {
    static _Q: string;
}
/** Defines the BidirectionalEmbedding Class. Serialized as `w:dir` */
export declare class BidirectionalEmbedding extends OxmlCompositeElement<CustomXmlRun | SimpleField | Hyperlink | SdtRun | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun | Run | BidirectionalOverride | BidirectionalEmbedding | SubDocumentReference> {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get value(): DirectionValues | undefined;
    set value(v: DirectionValues | undefined);
}
/** Defines the BidirectionalOverride Class. Serialized as `w:bdo` */
export declare class BidirectionalOverride extends OxmlCompositeElement<CustomXmlRun | SimpleField | Hyperlink | SdtRun | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun | Run | BidirectionalOverride | BidirectionalEmbedding | SubDocumentReference> {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get value(): DirectionValues | undefined;
    set value(v: DirectionValues | undefined);
}
/** Defines the Hyperlink Class. Serialized as `w:hyperlink` */
export declare class Hyperlink extends OxmlCompositeElement<CustomXmlRun | SimpleField | Hyperlink | SdtRun | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun | Run | BidirectionalOverride | BidirectionalEmbedding | SubDocumentReference> {
    static _Q: string;
    static _A: string[];
    /** Hyperlink Target Frame. Serialized as `w:tgtFrame` */
    get targetFrame(): StringValue | undefined;
    set targetFrame(v: StringValue | undefined);
    /** Associated String. Serialized as `w:tooltip` */
    get tooltip(): StringValue | undefined;
    set tooltip(v: StringValue | undefined);
    /** Location in Target Document. Serialized as `w:docLocation` */
    get docLocation(): StringValue | undefined;
    set docLocation(v: StringValue | undefined);
    /** Add To Viewed Hyperlinks. Serialized as `w:history` */
    get history(): OnOffValue | undefined;
    set history(v: OnOffValue | undefined);
    /** Hyperlink Anchor. Serialized as `w:anchor` */
    get anchor(): StringValue | undefined;
    set anchor(v: StringValue | undefined);
    /** Hyperlink Target. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the SimpleField Class. Serialized as `w:fldSimple` */
export declare class SimpleField extends OxmlCompositeElement<FieldData | CustomXmlRun | SimpleField | Hyperlink | SdtRun | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun | Run | BidirectionalOverride | BidirectionalEmbedding | SubDocumentReference> {
    static _Q: string;
    static _A: string[];
    /** Field Codes. Serialized as `w:instr` */
    get instruction(): StringValue | undefined;
    set instruction(v: StringValue | undefined);
    /** Field Should Not Be Recalculated. Serialized as `w:fldLock` */
    get fieldLock(): OnOffValue | undefined;
    set fieldLock(v: OnOffValue | undefined);
    /** Field Result Invalidated. Serialized as `w:dirty` */
    get dirty(): OnOffValue | undefined;
    set dirty(v: OnOffValue | undefined);
    /** Custom Field Data. */
    get fieldData(): FieldData | undefined;
}
/** Defines the CustomXmlRun Class. Serialized as `w:customXml` */
export declare class CustomXmlRun extends OxmlCompositeElement<CustomXmlRun | SimpleField | Hyperlink | SdtRun | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun | Run | BidirectionalOverride | BidirectionalEmbedding | SubDocumentReference> {
    static _Q: string;
}
/** Cell-Level Structured Document Tag. Serialized as `w:sdt` */
export declare class SdtCell extends OxmlCompositeElement<SdtContentCell | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd> {
    static _Q: string;
    /** Cell-Level Structured Document Tag Content. */
    get sdtContentCell(): SdtContentCell | undefined;
}
/** Cell-Level Custom XML Element. Serialized as `w:customXml` */
export declare class CustomXmlCell extends OxmlCompositeElement<TableCell | CustomXmlCell | SdtCell | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {
    static _Q: string;
}
/** Table Cell. Serialized as `w:tc` */
export declare class TableCell extends OxmlCompositeElement<TableCellProperties | AltChunk | CustomXmlBlock | SdtBlock | Paragraph | Table | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {
    static _Q: string;
    /** Table Cell Properties. */
    get tableCellProperties(): TableCellProperties | undefined;
}
/** Row-Level Structured Document Tag. Serialized as `w:sdt` */
export declare class SdtRow extends OxmlCompositeElement<SdtContentRow | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd> {
    static _Q: string;
    /** Row-Level Structured Document Tag Content. */
    get sdtContentRow(): SdtContentRow | undefined;
}
/** Row-Level Custom XML Element. Serialized as `w:customXml` */
export declare class CustomXmlRow extends OxmlCompositeElement<TableRow | CustomXmlRow | SdtRow | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {
    static _Q: string;
}
/** Table Row. Serialized as `w:tr` */
export declare class TableRow extends OxmlCompositeElement<TablePropertyExceptions | TableRowProperties | TableCell | CustomXmlCell | SdtCell | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {
    static _Q: string;
    static _A: string[];
    /** Revision Identifier for Table Row Glyph Formatting. Serialized as `w:rsidRPr` */
    get rsidTableRowMarkRevision(): HexBinaryValue | undefined;
    set rsidTableRowMarkRevision(v: HexBinaryValue | undefined);
    /** Revision Identifier for Table Row. Serialized as `w:rsidR` */
    get rsidTableRowAddition(): HexBinaryValue | undefined;
    set rsidTableRowAddition(v: HexBinaryValue | undefined);
    /** Revision Identifier for Table Row Deletion. Serialized as `w:rsidDel` */
    get rsidTableRowDeletion(): HexBinaryValue | undefined;
    set rsidTableRowDeletion(v: HexBinaryValue | undefined);
    /** Revision Identifier for Table Row Properties. Serialized as `w:rsidTr` */
    get rsidTableRowProperties(): HexBinaryValue | undefined;
    set rsidTableRowProperties(v: HexBinaryValue | undefined);
    /** paraId. Serialized as `w14:paraId` */
    get paragraphId(): HexBinaryValue | undefined;
    set paragraphId(v: HexBinaryValue | undefined);
    /** textId. Serialized as `w14:textId` */
    get textId(): HexBinaryValue | undefined;
    set textId(v: HexBinaryValue | undefined);
    /** Table-Level Property Exceptions. */
    get tablePropertyExceptions(): TablePropertyExceptions | undefined;
    /** Table Row Properties. */
    get tableRowProperties(): TableRowProperties | undefined;
}
/** Defines the Table Class. Serialized as `w:tbl` */
export declare class Table extends OxmlCompositeElement<BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | TableProperties | TableGrid | TableRow | CustomXmlRow | SdtRow | ProofError | PermStart | PermEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {
    static _Q: string;
}
/** Defines the Paragraph Class. Serialized as `w:p` */
export declare class Paragraph extends OxmlCompositeElement<ParagraphProperties | CustomXmlRun | SimpleField | Hyperlink | SdtRun | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun | Run | BidirectionalOverride | BidirectionalEmbedding | SubDocumentReference> {
    static _Q: string;
    static _A: string[];
    /** Revision Identifier for Paragraph Glyph Formatting. Serialized as `w:rsidRPr` */
    get rsidParagraphMarkRevision(): HexBinaryValue | undefined;
    set rsidParagraphMarkRevision(v: HexBinaryValue | undefined);
    /** Revision Identifier for Paragraph. Serialized as `w:rsidR` */
    get rsidParagraphAddition(): HexBinaryValue | undefined;
    set rsidParagraphAddition(v: HexBinaryValue | undefined);
    /** Revision Identifier for Paragraph Deletion. Serialized as `w:rsidDel` */
    get rsidParagraphDeletion(): HexBinaryValue | undefined;
    set rsidParagraphDeletion(v: HexBinaryValue | undefined);
    /** Revision Identifier for Paragraph Properties. Serialized as `w:rsidP` */
    get rsidParagraphProperties(): HexBinaryValue | undefined;
    set rsidParagraphProperties(v: HexBinaryValue | undefined);
    /** Default Revision Identifier for Runs. Serialized as `w:rsidRDefault` */
    get rsidRunAdditionDefault(): HexBinaryValue | undefined;
    set rsidRunAdditionDefault(v: HexBinaryValue | undefined);
    /** paraId. Serialized as `w14:paraId` */
    get paragraphId(): HexBinaryValue | undefined;
    set paragraphId(v: HexBinaryValue | undefined);
    /** textId. Serialized as `w14:textId` */
    get textId(): HexBinaryValue | undefined;
    set textId(v: HexBinaryValue | undefined);
    /** noSpellErr. Serialized as `w14:noSpellErr` */
    get noSpellError(): OnOffValue | undefined;
    set noSpellError(v: OnOffValue | undefined);
    /** Paragraph Properties. */
    get paragraphProperties(): ParagraphProperties | undefined;
}
/** Defines the SdtBlock Class. Serialized as `w:sdt` */
export declare class SdtBlock extends OxmlCompositeElement<SdtContentBlock | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd> {
    static _Q: string;
    /** Block-Level Structured Document Tag Content. */
    get sdtContentBlock(): SdtContentBlock | undefined;
}
/** Defines the CustomXmlBlock Class. Serialized as `w:customXml` */
export declare class CustomXmlBlock extends OxmlCompositeElement<CustomXmlBlock | SdtBlock | Paragraph | Table | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion> {
    static _Q: string;
}
/** Defines the SdtRun Class. Serialized as `w:sdt` */
export declare class SdtRun extends OxmlCompositeElement<SdtContentRun | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd> {
    static _Q: string;
    /** Inline-Level Structured Document Tag Content. */
    get sdtContentRun(): SdtContentRun | undefined;
}
/** Defines the ContentPart Class. Serialized as `w:contentPart` */
export declare class ContentPart extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the RunTrackChangeType Class. */
export declare abstract class RunTrackChangeType extends OxmlCompositeElement<SdtRun | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun | Run | BidirectionalOverride | BidirectionalEmbedding> {
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
/** Move Destination Run Content. Serialized as `w:moveTo` */
export declare class MoveToRun extends RunTrackChangeType {
    static _Q: string;
}
/** Move Source Run Content. Serialized as `w:moveFrom` */
export declare class MoveFromRun extends RunTrackChangeType {
    static _Q: string;
}
/** Deleted Run Content. Serialized as `w:del` */
export declare class DeletedRun extends RunTrackChangeType {
    static _Q: string;
}
/** Inserted Run Content. Serialized as `w:ins` */
export declare class InsertedRun extends RunTrackChangeType {
    static _Q: string;
}
/** Defines the PermEnd Class. Serialized as `w:permEnd` */
export declare class PermEnd extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Annotation ID. Serialized as `w:id` */
    get id(): Int32Value | undefined;
    set id(v: Int32Value | undefined);
    /** Annotation Displaced By Custom XML Markup. Serialized as `w:displacedByCustomXml` */
    get displacedByCustomXml(): DisplacedByCustomXmlValues | undefined;
    set displacedByCustomXml(v: DisplacedByCustomXmlValues | undefined);
}
/** Defines the PermStart Class. Serialized as `w:permStart` */
export declare class PermStart extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** edGrp. Serialized as `w:edGrp` */
    get editorGroup(): RangePermissionEditingGroupValues | undefined;
    set editorGroup(v: RangePermissionEditingGroupValues | undefined);
    /** ed. Serialized as `w:ed` */
    get ed(): StringValue | undefined;
    set ed(v: StringValue | undefined);
    /** colFirst. Serialized as `w:colFirst` */
    get columnFirst(): Int32Value | undefined;
    set columnFirst(v: Int32Value | undefined);
    /** colLast. Serialized as `w:colLast` */
    get columnLast(): Int32Value | undefined;
    set columnLast(v: Int32Value | undefined);
    /** Annotation ID. Serialized as `w:id` */
    get id(): Int32Value | undefined;
    set id(v: Int32Value | undefined);
    /** Annotation Displaced By Custom XML Markup. Serialized as `w:displacedByCustomXml` */
    get displacedByCustomXml(): DisplacedByCustomXmlValues | undefined;
    set displacedByCustomXml(v: DisplacedByCustomXmlValues | undefined);
}
/** Defines the ProofError Class. Serialized as `w:proofErr` */
export declare class ProofError extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Proofing Error Anchor Type. Serialized as `w:type` */
    get type(): ProofingErrorValues | undefined;
    set type(v: ProofingErrorValues | undefined);
}
/** Defines the SdtRunRuby Class. Serialized as `w:sdt` */
export declare class SdtRunRuby extends OxmlCompositeElement<SdtContentRunRuby | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd> {
    static _Q: string;
    /** Returns SdtContentRunRuby. */
    get sdtContentRunRuby(): SdtContentRunRuby | undefined;
}
/** Phonetic Guide Text Run. Serialized as `w:r` */
export declare class Run extends OxmlCompositeElement<RunProperties | Break | Text | DeletedText | FieldCode | DeletedFieldCode | NoBreakHyphen | SoftHyphen | DayShort | MonthShort | YearShort | DayLong | MonthLong | YearLong | AnnotationReferenceMark | FootnoteReferenceMark | EndnoteReferenceMark | SeparatorMark | ContinuationSeparatorMark | SymbolChar | PageNumber | CarriageReturn | TabChar | EmbeddedObject | Picture | FieldChar | Ruby | FootnoteReference | EndnoteReference | CommentReference | Drawing | PositionalTab | LastRenderedPageBreak> {
    static _Q: string;
    static _A: string[];
    /** Revision Identifier for Run Properties. Serialized as `w:rsidRPr` */
    get rsidRunProperties(): HexBinaryValue | undefined;
    set rsidRunProperties(v: HexBinaryValue | undefined);
    /** Revision Identifier for Run Deletion. Serialized as `w:rsidDel` */
    get rsidRunDeletion(): HexBinaryValue | undefined;
    set rsidRunDeletion(v: HexBinaryValue | undefined);
    /** Revision Identifier for Run. Serialized as `w:rsidR` */
    get rsidRunAddition(): HexBinaryValue | undefined;
    set rsidRunAddition(v: HexBinaryValue | undefined);
    /** Run Properties. */
    get runProperties(): RunProperties | undefined;
}
/** Defines the HyperlinkRuby Class. Serialized as `w:hyperlink` */
export declare class HyperlinkRuby extends OxmlCompositeElement<CustomXmlRuby | SimpleFieldRuby | HyperlinkRuby | Run | SdtRunRuby | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun> {
    static _Q: string;
    static _A: string[];
    /** tgtFrame. Serialized as `w:tgtFrame` */
    get targetFrame(): StringValue | undefined;
    set targetFrame(v: StringValue | undefined);
    /** tooltip. Serialized as `w:tooltip` */
    get tooltip(): StringValue | undefined;
    set tooltip(v: StringValue | undefined);
    /** docLocation. Serialized as `w:docLocation` */
    get docLocation(): StringValue | undefined;
    set docLocation(v: StringValue | undefined);
    /** history. Serialized as `w:history` */
    get history(): OnOffValue | undefined;
    set history(v: OnOffValue | undefined);
    /** anchor. Serialized as `w:anchor` */
    get anchor(): StringValue | undefined;
    set anchor(v: StringValue | undefined);
    /** id. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the SimpleFieldRuby Class. Serialized as `w:fldSimple` */
export declare class SimpleFieldRuby extends OxmlCompositeElement<FieldData | CustomXmlRuby | SimpleFieldRuby | HyperlinkRuby | Run | SdtRunRuby | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun> {
    static _Q: string;
    static _A: string[];
    /** instr. Serialized as `w:instr` */
    get instruction(): StringValue | undefined;
    set instruction(v: StringValue | undefined);
    /** fldLock. Serialized as `w:fldLock` */
    get fieldLock(): OnOffValue | undefined;
    set fieldLock(v: OnOffValue | undefined);
    /** dirty. Serialized as `w:dirty` */
    get dirty(): OnOffValue | undefined;
    set dirty(v: OnOffValue | undefined);
    /** Returns FieldData. */
    get fieldData(): FieldData | undefined;
}
/** Defines the CustomXmlRuby Class. Serialized as `w:customXml` */
export declare class CustomXmlRuby extends OxmlCompositeElement<CustomXmlRuby | SimpleFieldRuby | HyperlinkRuby | Run | SdtRunRuby | ProofError | PermStart | PermEnd | BookmarkStart | BookmarkEnd | CommentRangeStart | CommentRangeEnd | MoveFromRangeStart | MoveFromRangeEnd | MoveToRangeStart | MoveToRangeEnd | CustomXmlInsRangeStart | CustomXmlInsRangeEnd | CustomXmlDelRangeStart | CustomXmlDelRangeEnd | CustomXmlMoveFromRangeStart | CustomXmlMoveFromRangeEnd | CustomXmlMoveToRangeStart | CustomXmlMoveToRangeEnd | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | InsertedRun | DeletedRun | MoveFromRun | MoveToRun | ContentPart | W14RunConflictInsertion | W14RunConflictDeletion | MParagraph | MOfficeMath | MAccent | MBar | MBox | MBorderBox | MDelimiter | MEquationArray | MFraction | MMathFunction | MGroupChar | MLimitLower | MLimitUpper | MMatrix | MNary | MPhantom | MRadical | MPreSubSuper | MSubscript | MSubSuperscript | MSuperscript | MRun> {
    static _Q: string;
}
/** Defines the MathControlMoveType Class. */
export declare abstract class MathControlMoveType extends OxmlCompositeElement<RunProperties | InsertedMathControl | DeletedMathControl> {
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
/** Defines the MoveToMathControl Class. Serialized as `w:moveTo` */
export declare class MoveToMathControl extends MathControlMoveType {
    static _Q: string;
}
/** Defines the MoveFromMathControl Class. Serialized as `w:moveFrom` */
export declare class MoveFromMathControl extends MathControlMoveType {
    static _Q: string;
}
/** Defines the DeletedMathControl Class. Serialized as `w:del` */
export declare class DeletedMathControl extends OxmlCompositeElement<RunProperties> {
    static _Q: string;
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
/** Defines the InsertedMathControl Class. Serialized as `w:ins` */
export declare class InsertedMathControl extends OxmlCompositeElement<RunProperties | DeletedMathControl> {
    static _Q: string;
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
/** Run Properties. Serialized as `w:rPr` */
export declare class RunProperties extends OxmlCompositeElement<RunStyle | RunFonts | Bold | BoldComplexScript | Italic | ItalicComplexScript | Caps | SmallCaps | Strike | DoubleStrike | Outline | Shadow | Emboss | Imprint | NoProof | SnapToGrid | Vanish | WebHidden | Color | Spacing | CharacterScale | Kern | Position | FontSize | FontSizeComplexScript | Highlight | Underline | TextEffect | Border | Shading | FitText | VerticalTextAlignment | RightToLeftText | ComplexScript | Emphasis | Languages | EastAsianLayout | SpecVanish | W14Glow | W14Shadow | W14Reflection | W14TextOutlineEffect | W14FillTextEffect | W14Scene3D | W14Properties3D | W14Ligatures | W14NumberingFormat | W14NumberSpacing | W14StylisticSets | W14ContextualAlternatives | RunPropertiesChange> {
    static _Q: string;
    /** Returns RunStyle. */
    get runStyle(): RunStyle | undefined;
    /** Returns RunFonts. */
    get runFonts(): RunFonts | undefined;
    /** Returns Bold. */
    get bold(): Bold | undefined;
    /** Returns BoldComplexScript. */
    get boldComplexScript(): BoldComplexScript | undefined;
    /** Returns Italic. */
    get italic(): Italic | undefined;
    /** Returns ItalicComplexScript. */
    get italicComplexScript(): ItalicComplexScript | undefined;
    /** Returns Caps. */
    get caps(): Caps | undefined;
    /** Returns SmallCaps. */
    get smallCaps(): SmallCaps | undefined;
    /** Returns Strike. */
    get strike(): Strike | undefined;
    /** Returns DoubleStrike. */
    get doubleStrike(): DoubleStrike | undefined;
    /** Returns Outline. */
    get outline(): Outline | undefined;
    /** Returns Shadow. */
    get shadow(): Shadow | undefined;
    /** Returns Emboss. */
    get emboss(): Emboss | undefined;
    /** Returns Imprint. */
    get imprint(): Imprint | undefined;
    /** Returns NoProof. */
    get noProof(): NoProof | undefined;
    /** Returns SnapToGrid. */
    get snapToGrid(): SnapToGrid | undefined;
    /** Returns Vanish. */
    get vanish(): Vanish | undefined;
    /** Returns WebHidden. */
    get webHidden(): WebHidden | undefined;
    /** Returns Color. */
    get color(): Color | undefined;
    /** Returns Spacing. */
    get spacing(): Spacing | undefined;
    /** Returns CharacterScale. */
    get characterScale(): CharacterScale | undefined;
    /** Returns Kern. */
    get kern(): Kern | undefined;
    /** Returns Position. */
    get position(): Position | undefined;
    /** Returns FontSize. */
    get fontSize(): FontSize | undefined;
    /** Returns FontSizeComplexScript. */
    get fontSizeComplexScript(): FontSizeComplexScript | undefined;
    /** Returns Highlight. */
    get highlight(): Highlight | undefined;
    /** Returns Underline. */
    get underline(): Underline | undefined;
    /** Returns TextEffect. */
    get textEffect(): TextEffect | undefined;
    /** Returns Border. */
    get border(): Border | undefined;
    /** Returns Shading. */
    get shading(): Shading | undefined;
    /** Returns FitText. */
    get fitText(): FitText | undefined;
    /** Returns VerticalTextAlignment. */
    get verticalTextAlignment(): VerticalTextAlignment | undefined;
    /** Returns RightToLeftText. */
    get rightToLeftText(): RightToLeftText | undefined;
    /** Returns ComplexScript. */
    get complexScript(): ComplexScript | undefined;
    /** Returns Emphasis. */
    get emphasis(): Emphasis | undefined;
    /** Returns Languages. */
    get languages(): Languages | undefined;
    /** Returns EastAsianLayout. */
    get eastAsianLayout(): EastAsianLayout | undefined;
    /** Returns SpecVanish. */
    get specVanish(): SpecVanish | undefined;
    /** Returns W14Glow. */
    get glow(): W14Glow | undefined;
    /** Returns W14Shadow. */
    get shadow14(): W14Shadow | undefined;
    /** Returns W14Reflection. */
    get reflection(): W14Reflection | undefined;
    /** Returns W14TextOutlineEffect. */
    get textOutlineEffect(): W14TextOutlineEffect | undefined;
    /** Returns W14FillTextEffect. */
    get fillTextEffect(): W14FillTextEffect | undefined;
    /** Returns W14Scene3D. */
    get scene3D(): W14Scene3D | undefined;
    /** Returns W14Properties3D. */
    get properties3D(): W14Properties3D | undefined;
    /** Returns W14Ligatures. */
    get ligatures(): W14Ligatures | undefined;
    /** Returns W14NumberingFormat. */
    get numberingFormat(): W14NumberingFormat | undefined;
    /** Returns W14NumberSpacing. */
    get numberSpacing(): W14NumberSpacing | undefined;
    /** Returns W14StylisticSets. */
    get stylisticSets(): W14StylisticSets | undefined;
    /** Returns W14ContextualAlternatives. */
    get contextualAlternatives(): W14ContextualAlternatives | undefined;
    /** Returns RunPropertiesChange. */
    get runPropertiesChange(): RunPropertiesChange | undefined;
}
/** Defines the RunPropertiesChange Class. Serialized as `w:rPrChange` */
export declare class RunPropertiesChange extends OxmlCompositeElement<PreviousRunProperties> {
    static _Q: string;
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
    /** Previous Run Properties. */
    get previousRunProperties(): PreviousRunProperties | undefined;
}
/** Defines the EastAsianLayout Class. Serialized as `w:eastAsianLayout` */
export declare class EastAsianLayout extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** East Asian Typography Run ID. Serialized as `w:id` */
    get id(): Int32Value | undefined;
    set id(v: Int32Value | undefined);
    /** Two Lines in One. Serialized as `w:combine` */
    get combine(): OnOffValue | undefined;
    set combine(v: OnOffValue | undefined);
    /** Display Brackets Around Two Lines in One. Serialized as `w:combineBrackets` */
    get combineBrackets(): CombineBracketValues | undefined;
    set combineBrackets(v: CombineBracketValues | undefined);
    /** Horizontal in Vertical (Rotate Text). Serialized as `w:vert` */
    get vertical(): OnOffValue | undefined;
    set vertical(v: OnOffValue | undefined);
    /** Compress Rotated Text to Line Height. Serialized as `w:vertCompress` */
    get verticalCompress(): OnOffValue | undefined;
    set verticalCompress(v: OnOffValue | undefined);
}
/** Defines the LanguageType Class. */
export declare abstract class LanguageType extends OxmlLeafElement {
    static _A: string[];
    /** Latin Language. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
    /** East Asian Language. Serialized as `w:eastAsia` */
    get eastAsia(): StringValue | undefined;
    set eastAsia(v: StringValue | undefined);
    /** Complex Script Language. Serialized as `w:bidi` */
    get bidi(): StringValue | undefined;
    set bidi(v: StringValue | undefined);
}
/** Theme Font Languages. Serialized as `w:themeFontLang` */
export declare class ThemeFontLanguages extends LanguageType {
    static _Q: string;
}
/** Defines the Languages Class. Serialized as `w:lang` */
export declare class Languages extends LanguageType {
    static _Q: string;
}
/** Defines the Emphasis Class. Serialized as `w:em` */
export declare class Emphasis extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Emphasis Mark Type. Serialized as `w:val` */
    get val(): EmphasisMarkValues | undefined;
    set val(v: EmphasisMarkValues | undefined);
}
/** Defines the VerticalTextAlignment Class. Serialized as `w:vertAlign` */
export declare class VerticalTextAlignment extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Subscript/Superscript Value. Serialized as `w:val` */
    get val(): VerticalPositionValues | undefined;
    set val(v: VerticalPositionValues | undefined);
}
/** Defines the FitText Class. Serialized as `w:fitText` */
export declare class FitText extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `w:val` */
    get val(): UInt32Value | undefined;
    set val(v: UInt32Value | undefined);
    /** Fit Text Run ID. Serialized as `w:id` */
    get id(): Int32Value | undefined;
    set id(v: Int32Value | undefined);
}
/** Defines the BorderType Class. */
export declare abstract class BorderType extends OxmlLeafElement {
    static _A: string[];
    /** Border Style. Serialized as `w:val` */
    get val(): BorderValues | undefined;
    set val(v: BorderValues | undefined);
    /** Border Color. Serialized as `w:color` */
    get color(): StringValue | undefined;
    set color(v: StringValue | undefined);
    /** Border Theme Color. Serialized as `w:themeColor` */
    get themeColor(): ThemeColorValues | undefined;
    set themeColor(v: ThemeColorValues | undefined);
    /** Border Theme Color Tint. Serialized as `w:themeTint` */
    get themeTint(): StringValue | undefined;
    set themeTint(v: StringValue | undefined);
    /** Border Theme Color Shade. Serialized as `w:themeShade` */
    get themeShade(): StringValue | undefined;
    set themeShade(v: StringValue | undefined);
    /** Border Width. Serialized as `w:sz` */
    get size(): UInt32Value | undefined;
    set size(v: UInt32Value | undefined);
    /** Border Spacing Measurement. Serialized as `w:space` */
    get space(): UInt32Value | undefined;
    set space(v: UInt32Value | undefined);
    /** Border Shadow. Serialized as `w:shadow` */
    get shadow(): OnOffValue | undefined;
    set shadow(v: OnOffValue | undefined);
    /** Create Frame Effect. Serialized as `w:frame` */
    get frame(): OnOffValue | undefined;
    set frame(v: OnOffValue | undefined);
}
/** Table Cell Top Right to Bottom Left Diagonal Border. Serialized as `w:tr2bl` */
export declare class TopRightToBottomLeftCellBorder extends BorderType {
    static _Q: string;
}
/** Table Cell Top Left to Bottom Right Diagonal Border. Serialized as `w:tl2br` */
export declare class TopLeftToBottomRightCellBorder extends BorderType {
    static _Q: string;
}
/** Table Inside Vertical Edges Border. Serialized as `w:insideV` */
export declare class InsideVerticalBorder extends BorderType {
    static _Q: string;
}
/** Table Inside Horizontal Edges Border. Serialized as `w:insideH` */
export declare class InsideHorizontalBorder extends BorderType {
    static _Q: string;
}
/** Defines the EndBorder Class. Serialized as `w:end` */
export declare class EndBorder extends BorderType {
    static _Q: string;
}
/** Defines the StartBorder Class. Serialized as `w:start` */
export declare class StartBorder extends BorderType {
    static _Q: string;
}
/** Paragraph Border Between Facing Pages. Serialized as `w:bar` */
export declare class BarBorder extends BorderType {
    static _Q: string;
}
/** Paragraph Border Between Identical Paragraphs. Serialized as `w:between` */
export declare class BetweenBorder extends BorderType {
    static _Q: string;
}
/** Right Paragraph Border. Serialized as `w:right` */
export declare class RightBorder extends BorderType {
    static _Q: string;
}
/** Paragraph Border Between Identical Paragraphs. Serialized as `w:bottom` */
export declare class BottomBorder extends BorderType {
    static _Q: string;
}
/** Left Paragraph Border. Serialized as `w:left` */
export declare class LeftBorder extends BorderType {
    static _Q: string;
}
/** Paragraph Border Above Identical Paragraphs. Serialized as `w:top` */
export declare class TopBorder extends BorderType {
    static _Q: string;
}
/** Defines the Border Class. Serialized as `w:bdr` */
export declare class Border extends BorderType {
    static _Q: string;
}
/** Defines the TextEffect Class. Serialized as `w:effect` */
export declare class TextEffect extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Animated Text Effect Type. Serialized as `w:val` */
    get val(): TextEffectValues | undefined;
    set val(v: TextEffectValues | undefined);
}
/** Defines the Underline Class. Serialized as `w:u` */
export declare class Underline extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Underline Style. Serialized as `w:val` */
    get val(): UnderlineValues | undefined;
    set val(v: UnderlineValues | undefined);
    /** Underline Color. Serialized as `w:color` */
    get color(): StringValue | undefined;
    set color(v: StringValue | undefined);
    /** Underline Theme Color. Serialized as `w:themeColor` */
    get themeColor(): ThemeColorValues | undefined;
    set themeColor(v: ThemeColorValues | undefined);
    /** Underline Theme Color Tint. Serialized as `w:themeTint` */
    get themeTint(): StringValue | undefined;
    set themeTint(v: StringValue | undefined);
    /** Underline Theme Color Shade. Serialized as `w:themeShade` */
    get themeShade(): StringValue | undefined;
    set themeShade(v: StringValue | undefined);
}
/** Defines the Highlight Class. Serialized as `w:highlight` */
export declare class Highlight extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Highlighting Color. Serialized as `w:val` */
    get val(): HighlightColorValues | undefined;
    set val(v: HighlightColorValues | undefined);
}
/** Defines the HpsMeasureType Class. */
export declare abstract class HpsMeasureType extends OxmlLeafElement {
    static _A: string[];
    /** Half Point Measurement. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Phonetic Guide Base Text Font Size. Serialized as `w:hpsBaseText` */
export declare class PhoneticGuideBaseTextSize extends HpsMeasureType {
    static _Q: string;
}
/** Phonetic Guide Text Font Size. Serialized as `w:hps` */
export declare class PhoneticGuideTextFontSize extends HpsMeasureType {
    static _Q: string;
}
/** Checkbox Form Field Size. Serialized as `w:size` */
export declare class FormFieldSize extends HpsMeasureType {
    static _Q: string;
}
/** Defines the FontSizeComplexScript Class. Serialized as `w:szCs` */
export declare class FontSizeComplexScript extends HpsMeasureType {
    static _Q: string;
}
/** Defines the FontSize Class. Serialized as `w:sz` */
export declare class FontSize extends HpsMeasureType {
    static _Q: string;
}
/** Defines the Position Class. Serialized as `w:position` */
export declare class Position extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Signed Half-Point Measurement. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Defines the Kern Class. Serialized as `w:kern` */
export declare class Kern extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): UInt32Value | undefined;
    set val(v: UInt32Value | undefined);
}
/** Defines the CharacterScale Class. Serialized as `w:w` */
export declare class CharacterScale extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Text Expansion/Compression Value. Serialized as `w:val` */
    get val(): IntegerValue | undefined;
    set val(v: IntegerValue | undefined);
}
/** Defines the Spacing Class. Serialized as `w:spacing` */
export declare class Spacing extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Defines the Color Class. Serialized as `w:color` */
export declare class Color extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Run Content Color. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
    /** Run Content Theme Color. Serialized as `w:themeColor` */
    get themeColor(): ThemeColorValues | undefined;
    set themeColor(v: ThemeColorValues | undefined);
    /** Run Content Theme Color Tint. Serialized as `w:themeTint` */
    get themeTint(): StringValue | undefined;
    set themeTint(v: StringValue | undefined);
    /** Run Content Theme Color Shade. Serialized as `w:themeShade` */
    get themeShade(): StringValue | undefined;
    set themeShade(v: StringValue | undefined);
}
/** Defines the RunFonts Class. Serialized as `w:rFonts` */
export declare class RunFonts extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Font Content Type. Serialized as `w:hint` */
    get hint(): FontTypeHintValues | undefined;
    set hint(v: FontTypeHintValues | undefined);
    /** ASCII Font. Serialized as `w:ascii` */
    get ascii(): StringValue | undefined;
    set ascii(v: StringValue | undefined);
    /** High ANSI Font. Serialized as `w:hAnsi` */
    get highAnsi(): StringValue | undefined;
    set highAnsi(v: StringValue | undefined);
    /** East Asian Font. Serialized as `w:eastAsia` */
    get eastAsia(): StringValue | undefined;
    set eastAsia(v: StringValue | undefined);
    /** Complex Script Font. Serialized as `w:cs` */
    get complexScript(): StringValue | undefined;
    set complexScript(v: StringValue | undefined);
    /** ASCII Theme Font. Serialized as `w:asciiTheme` */
    get asciiTheme(): ThemeFontValues | undefined;
    set asciiTheme(v: ThemeFontValues | undefined);
    /** High ANSI Theme Font. Serialized as `w:hAnsiTheme` */
    get highAnsiTheme(): ThemeFontValues | undefined;
    set highAnsiTheme(v: ThemeFontValues | undefined);
    /** East Asian Theme Font. Serialized as `w:eastAsiaTheme` */
    get eastAsiaTheme(): ThemeFontValues | undefined;
    set eastAsiaTheme(v: ThemeFontValues | undefined);
    /** Complex Script Theme Font. Serialized as `w:cstheme` */
    get complexScriptTheme(): ThemeFontValues | undefined;
    set complexScriptTheme(v: ThemeFontValues | undefined);
}
/** Defines the String253Type Class. */
export declare abstract class String253Type extends OxmlLeafElement {
    static _A: string[];
    /** val. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Default Table Style for Newly Inserted Tables. Serialized as `w:defaultTableStyle` */
export declare class DefaultTableStyle extends String253Type {
    static _Q: string;
}
/** Paragraph Style Applied to Automatically Generated Paragraphs. Serialized as `w:clickAndTypeStyle` */
export declare class ClickAndTypeStyle extends String253Type {
    static _Q: string;
}
/** Linked Style Reference. Serialized as `w:link` */
export declare class LinkedStyle extends String253Type {
    static _Q: string;
}
/** Style For Next Paragraph. Serialized as `w:next` */
export declare class NextParagraphStyle extends String253Type {
    static _Q: string;
}
/** Parent Style ID. Serialized as `w:basedOn` */
export declare class BasedOn extends String253Type {
    static _Q: string;
}
/** Alternate Style Names. Serialized as `w:aliases` */
export declare class Aliases extends String253Type {
    static _Q: string;
}
/** Numbering Style Reference. Serialized as `w:numStyleLink` */
export declare class NumberingStyleLink extends String253Type {
    static _Q: string;
}
/** Numbering Style Definition. Serialized as `w:styleLink` */
export declare class StyleLink extends String253Type {
    static _Q: string;
}
/** Abstract Numbering Definition Name. Serialized as `w:name` */
export declare class AbstractNumDefinitionName extends String253Type {
    static _Q: string;
}
/** Paragraph Style's Associated Numbering Level. Serialized as `w:pStyle` */
export declare class ParagraphStyleIdInLevel extends String253Type {
    static _Q: string;
}
/** Defines the TableStyle Class. Serialized as `w:tblStyle` */
export declare class TableStyle extends String253Type {
    static _Q: string;
}
/** Defines the RunStyle Class. Serialized as `w:rStyle` */
export declare class RunStyle extends String253Type {
    static _Q: string;
}
/** Absolute Position Tab Character. Serialized as `w:ptab` */
export declare class PositionalTab extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Positional Tab Stop Alignment. Serialized as `w:alignment` */
    get alignment(): AbsolutePositionTabAlignmentValues | undefined;
    set alignment(v: AbsolutePositionTabAlignmentValues | undefined);
    /** Positional Tab Base. Serialized as `w:relativeTo` */
    get relativeTo(): AbsolutePositionTabPositioningBaseValues | undefined;
    set relativeTo(v: AbsolutePositionTabPositioningBaseValues | undefined);
    /** Tab Leader Character. Serialized as `w:leader` */
    get leader(): AbsolutePositionTabLeaderCharValues | undefined;
    set leader(v: AbsolutePositionTabLeaderCharValues | undefined);
}
/** DrawingML Object. Serialized as `w:drawing` */
export declare class Drawing extends OxmlCompositeElement<WpAnchor | WpInline> {
    static _Q: string;
    /** Drawing Element Anchor. */
    get anchor(): WpAnchor | undefined;
    /** Inline Drawing Object. */
    get inline(): WpInline | undefined;
}
/** Defines the FootnoteEndnoteReferenceType Class. */
export declare abstract class FootnoteEndnoteReferenceType extends OxmlLeafElement {
    static _A: string[];
    /** Suppress Footnote/Endnote Reference Mark. Serialized as `w:customMarkFollows` */
    get customMarkFollows(): OnOffValue | undefined;
    set customMarkFollows(v: OnOffValue | undefined);
    /** Footnote/Endnote ID Reference. Serialized as `w:id` */
    get id(): IntegerValue | undefined;
    set id(v: IntegerValue | undefined);
}
/** Endnote Reference. Serialized as `w:endnoteReference` */
export declare class EndnoteReference extends FootnoteEndnoteReferenceType {
    static _Q: string;
}
/** Footnote Reference. Serialized as `w:footnoteReference` */
export declare class FootnoteReference extends FootnoteEndnoteReferenceType {
    static _Q: string;
}
/** Phonetic Guide. Serialized as `w:ruby` */
export declare class Ruby extends OxmlCompositeElement<RubyProperties | RubyContent | RubyBase> {
    static _Q: string;
    /** Phonetic Guide Properties. */
    get rubyProperties(): RubyProperties | undefined;
    /** Phonetic Guide Text. */
    get rubyContent(): RubyContent | undefined;
    /** Phonetic Guide Base Text. */
    get rubyBase(): RubyBase | undefined;
}
/** Complex Field Character. Serialized as `w:fldChar` */
export declare class FieldChar extends OxmlCompositeElement<FieldData | FormFieldData | NumberingChange> {
    static _Q: string;
    static _A: string[];
    /** Field Character Type. Serialized as `w:fldCharType` */
    get fieldCharType(): FieldCharValues | undefined;
    set fieldCharType(v: FieldCharValues | undefined);
    /** Field Should Not Be Recalculated. Serialized as `w:fldLock` */
    get fieldLock(): OnOffValue | undefined;
    set fieldLock(v: OnOffValue | undefined);
    /** Field Result Invalidated. Serialized as `w:dirty` */
    get dirty(): OnOffValue | undefined;
    set dirty(v: OnOffValue | undefined);
    /** Custom Field Data. */
    get fieldData(): FieldData | undefined;
    /** Form Field Properties. */
    get formFieldData(): FormFieldData | undefined;
    /** Previous Numbering Field Properties. */
    get numberingChange(): NumberingChange | undefined;
}
/** VML Object. Serialized as `w:pict` */
export declare class Picture extends OxmlCompositeElement<VGroup | VImageFile | VLine | VOval | VPolyLine | VRectangle | VRoundRectangle | VShape | VShapetype | VArc | VCurve | OOleObject | MovieReference | Control> {
    static _Q: string;
    static _A: string[];
    /** anchorId. Serialized as `w14:anchorId` */
    get anchorId(): HexBinaryValue | undefined;
    set anchorId(v: HexBinaryValue | undefined);
}
/** Inline Embedded Object. Serialized as `w:object` */
export declare class EmbeddedObject extends OxmlCompositeElement<VGroup | VImageFile | VLine | VOval | VPolyLine | VRectangle | VRoundRectangle | VShape | VShapetype | VArc | VCurve | OOleObject | Drawing | Control | ObjectEmbed | ObjectLink> {
    static _Q: string;
    static _A: string[];
    /** dxaOrig. Serialized as `w:dxaOrig` */
    get dxaOriginal(): StringValue | undefined;
    set dxaOriginal(v: StringValue | undefined);
    /** dyaOrig. Serialized as `w:dyaOrig` */
    get dyaOriginal(): StringValue | undefined;
    set dyaOriginal(v: StringValue | undefined);
    /** anchorId. Serialized as `w14:anchorId` */
    get anchorId(): HexBinaryValue | undefined;
    set anchorId(v: HexBinaryValue | undefined);
}
/** Symbol Character. Serialized as `w:sym` */
export declare class SymbolChar extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Symbol Character Font. Serialized as `w:font` */
    get font(): StringValue | undefined;
    set font(v: StringValue | undefined);
    /** Symbol Character Code. Serialized as `w:char` */
    get char(): HexBinaryValue | undefined;
    set char(v: HexBinaryValue | undefined);
}
/** Defines the EmptyType Class. */
export declare abstract class EmptyType extends OxmlLeafElement {
}
/** Upgrade Document on Open. Serialized as `w:forceUpgrade` */
export declare class ForceUpgrade extends EmptyType {
    static _Q: string;
}
/** Defines the SdtContentBibliography Class. Serialized as `w:bibliography` */
export declare class SdtContentBibliography extends EmptyType {
    static _Q: string;
}
/** Defines the SdtContentGroup Class. Serialized as `w:group` */
export declare class SdtContentGroup extends EmptyType {
    static _Q: string;
}
/** Defines the SdtContentCitation Class. Serialized as `w:citation` */
export declare class SdtContentCitation extends EmptyType {
    static _Q: string;
}
/** Defines the SdtContentRichText Class. Serialized as `w:richText` */
export declare class SdtContentRichText extends EmptyType {
    static _Q: string;
}
/** Defines the SdtContentPicture Class. Serialized as `w:picture` */
export declare class SdtContentPicture extends EmptyType {
    static _Q: string;
}
/** Defines the SdtContentEquation Class. Serialized as `w:equation` */
export declare class SdtContentEquation extends EmptyType {
    static _Q: string;
}
/** Position of Last Calculated Page Break. Serialized as `w:lastRenderedPageBreak` */
export declare class LastRenderedPageBreak extends EmptyType {
    static _Q: string;
}
/** Tab Character. Serialized as `w:tab` */
export declare class TabChar extends EmptyType {
    static _Q: string;
}
/** Carriage Return. Serialized as `w:cr` */
export declare class CarriageReturn extends EmptyType {
    static _Q: string;
}
/** Page Number Block. Serialized as `w:pgNum` */
export declare class PageNumber extends EmptyType {
    static _Q: string;
}
/** Continuation Separator Mark. Serialized as `w:continuationSeparator` */
export declare class ContinuationSeparatorMark extends EmptyType {
    static _Q: string;
}
/** Footnote/Endnote Separator Mark. Serialized as `w:separator` */
export declare class SeparatorMark extends EmptyType {
    static _Q: string;
}
/** Endnote Reference Mark. Serialized as `w:endnoteRef` */
export declare class EndnoteReferenceMark extends EmptyType {
    static _Q: string;
}
/** Footnote Reference Mark. Serialized as `w:footnoteRef` */
export declare class FootnoteReferenceMark extends EmptyType {
    static _Q: string;
}
/** Comment Information Block. Serialized as `w:annotationRef` */
export declare class AnnotationReferenceMark extends EmptyType {
    static _Q: string;
}
/** Date Block - Long Year Format. Serialized as `w:yearLong` */
export declare class YearLong extends EmptyType {
    static _Q: string;
}
/** Date Block - Long Month Format. Serialized as `w:monthLong` */
export declare class MonthLong extends EmptyType {
    static _Q: string;
}
/** Date Block - Long Day Format. Serialized as `w:dayLong` */
export declare class DayLong extends EmptyType {
    static _Q: string;
}
/** Date Block - Short Year Format. Serialized as `w:yearShort` */
export declare class YearShort extends EmptyType {
    static _Q: string;
}
/** Date Block - Short Month Format. Serialized as `w:monthShort` */
export declare class MonthShort extends EmptyType {
    static _Q: string;
}
/** Date Block - Short Day Format. Serialized as `w:dayShort` */
export declare class DayShort extends EmptyType {
    static _Q: string;
}
/** Optional Hyphen Character. Serialized as `w:softHyphen` */
export declare class SoftHyphen extends EmptyType {
    static _Q: string;
}
/** Non Breaking Hyphen Character. Serialized as `w:noBreakHyphen` */
export declare class NoBreakHyphen extends EmptyType {
    static _Q: string;
}
/** Defines the TextType Class. */
export declare abstract class TextType extends OxmlLeafTextElement {
    static _A: string[];
    /** space. Serialized as `xml:space` */
    get space(): SpaceProcessingModeValues | undefined;
    set space(v: SpaceProcessingModeValues | undefined);
}
/** Deleted Field Code. Serialized as `w:delInstrText` */
export declare class DeletedFieldCode extends TextType {
    static _Q: string;
}
/** Field Code. Serialized as `w:instrText` */
export declare class FieldCode extends TextType {
    static _Q: string;
}
/** Deleted Text. Serialized as `w:delText` */
export declare class DeletedText extends TextType {
    static _Q: string;
}
/** Text. Serialized as `w:t` */
export declare class Text extends TextType {
    static _Q: string;
}
/** Break. Serialized as `w:br` */
export declare class Break extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Break Type. Serialized as `w:type` */
    get type(): BreakValues | undefined;
    set type(v: BreakValues | undefined);
    /** Restart Location For Text Wrapping Break. Serialized as `w:clear` */
    get clear(): BreakTextRestartLocationValues | undefined;
    set clear(v: BreakTextRestartLocationValues | undefined);
}
/** Defines the HeaderFooterReferenceType Class. */
export declare abstract class HeaderFooterReferenceType extends OxmlLeafElement {
    static _A: string[];
    /** type. Serialized as `w:type` */
    get type(): HeaderFooterValues | undefined;
    set type(v: HeaderFooterValues | undefined);
    /** Relationship to Part. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Footer Reference. Serialized as `w:footerReference` */
export declare class FooterReference extends HeaderFooterReferenceType {
    static _Q: string;
}
/** Header Reference. Serialized as `w:headerReference` */
export declare class HeaderReference extends HeaderFooterReferenceType {
    static _Q: string;
}
/** Defines the ParagraphPropertiesChange Class. Serialized as `w:pPrChange` */
export declare class ParagraphPropertiesChange extends OxmlCompositeElement<ParagraphPropertiesExtended> {
    static _Q: string;
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
    /** Previous Paragraph Properties. */
    get paragraphPropertiesExtended(): ParagraphPropertiesExtended | undefined;
}
/** Defines the DecimalNumberType Class. */
export declare abstract class DecimalNumberType extends OxmlLeafElement {
    static _A: string[];
    /** Decimal Number Value. Serialized as `w:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Defines the PixelsPerInch Class. Serialized as `w:pixelsPerInch` */
export declare class PixelsPerInch extends DecimalNumberType {
    static _Q: string;
}
/** Defines the SdtId Class. Serialized as `w:id` */
export declare class SdtId extends DecimalNumberType {
    static _Q: string;
}
/** Last Reviewed Abstract Numbering Definition. Serialized as `w:numIdMacAtCleanup` */
export declare class NumberingIdMacAtCleanup extends DecimalNumberType {
    static _Q: string;
}
/** Numbering Level Starting Value Override. Serialized as `w:startOverride` */
export declare class StartOverrideNumberingValue extends DecimalNumberType {
    static _Q: string;
}
/** Picture Numbering Symbol Definition Reference. Serialized as `w:lvlPicBulletId` */
export declare class LevelPictureBulletId extends DecimalNumberType {
    static _Q: string;
}
/** Restart Numbering Level Symbol. Serialized as `w:lvlRestart` */
export declare class LevelRestart extends DecimalNumberType {
    static _Q: string;
}
/** Mail Merge Error Reporting Setting. Serialized as `w:checkErrors` */
export declare class CheckErrors extends DecimalNumberType {
    static _Q: string;
}
/** Record Currently Displayed In Merged Document. Serialized as `w:activeRecord` */
export declare class ActiveRecord extends DecimalNumberType {
    static _Q: string;
}
/** Drop-Down List Selection. Serialized as `w:result` */
export declare class DropDownListSelection extends DecimalNumberType {
    static _Q: string;
}
/** Defines the GridAfter Class. Serialized as `w:gridAfter` */
export declare class GridAfter extends DecimalNumberType {
    static _Q: string;
}
/** Defines the GridBefore Class. Serialized as `w:gridBefore` */
export declare class GridBefore extends DecimalNumberType {
    static _Q: string;
}
/** Defines the GridSpan Class. Serialized as `w:gridSpan` */
export declare class GridSpan extends DecimalNumberType {
    static _Q: string;
}
/** Defines the OutlineLevel Class. Serialized as `w:outlineLvl` */
export declare class OutlineLevel extends DecimalNumberType {
    static _Q: string;
}
/** Defines the TextBoxTightWrap Class. Serialized as `w:textboxTightWrap` */
export declare class TextBoxTightWrap extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Lines to Tight Wrap to Paragraph Extents. Serialized as `w:val` */
    get val(): TextBoxTightWrapValues | undefined;
    set val(v: TextBoxTightWrapValues | undefined);
}
/** Defines the TextAlignment Class. Serialized as `w:textAlignment` */
export declare class TextAlignment extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Vertical Character Alignment Position. Serialized as `w:val` */
    get val(): VerticalTextAlignmentValues | undefined;
    set val(v: VerticalTextAlignmentValues | undefined);
}
/** Defines the TextDirection Class. Serialized as `w:textDirection` */
export declare class TextDirection extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Direction of Text Flow. Serialized as `w:val` */
    get val(): TextDirectionValues | undefined;
    set val(v: TextDirectionValues | undefined);
}
/** Defines the Justification Class. Serialized as `w:jc` */
export declare class Justification extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Alignment Type. Serialized as `w:val` */
    get val(): JustificationValues | undefined;
    set val(v: JustificationValues | undefined);
}
/** Defines the Indentation Class. Serialized as `w:ind` */
export declare class Indentation extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Left Indentation. Serialized as `w:left` */
    get left(): StringValue | undefined;
    set left(v: StringValue | undefined);
    /** start. Serialized as `w:start` */
    get start(): StringValue | undefined;
    set start(v: StringValue | undefined);
    /** Left Indentation in Character Units. Serialized as `w:leftChars` */
    get leftChars(): Int32Value | undefined;
    set leftChars(v: Int32Value | undefined);
    /** startChars. Serialized as `w:startChars` */
    get startCharacters(): Int32Value | undefined;
    set startCharacters(v: Int32Value | undefined);
    /** Right Indentation. Serialized as `w:right` */
    get right(): StringValue | undefined;
    set right(v: StringValue | undefined);
    /** end. Serialized as `w:end` */
    get end(): StringValue | undefined;
    set end(v: StringValue | undefined);
    /** Right Indentation in Character Units. Serialized as `w:rightChars` */
    get rightChars(): Int32Value | undefined;
    set rightChars(v: Int32Value | undefined);
    /** endChars. Serialized as `w:endChars` */
    get endCharacters(): Int32Value | undefined;
    set endCharacters(v: Int32Value | undefined);
    /** Indentation Removed from First Line. Serialized as `w:hanging` */
    get hanging(): StringValue | undefined;
    set hanging(v: StringValue | undefined);
    /** Indentation Removed From First Line in Character Units. Serialized as `w:hangingChars` */
    get hangingChars(): Int32Value | undefined;
    set hangingChars(v: Int32Value | undefined);
    /** Additional First Line Indentation. Serialized as `w:firstLine` */
    get firstLine(): StringValue | undefined;
    set firstLine(v: StringValue | undefined);
    /** Additional First Line Indentation in Character Units. Serialized as `w:firstLineChars` */
    get firstLineChars(): Int32Value | undefined;
    set firstLineChars(v: Int32Value | undefined);
}
/** Defines the SpacingBetweenLines Class. Serialized as `w:spacing` */
export declare class SpacingBetweenLines extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Spacing Above Paragraph. Serialized as `w:before` */
    get before(): StringValue | undefined;
    set before(v: StringValue | undefined);
    /** Spacing Above Paragraph IN Line Units. Serialized as `w:beforeLines` */
    get beforeLines(): Int32Value | undefined;
    set beforeLines(v: Int32Value | undefined);
    /** Automatically Determine Spacing Above Paragraph. Serialized as `w:beforeAutospacing` */
    get beforeAutoSpacing(): OnOffValue | undefined;
    set beforeAutoSpacing(v: OnOffValue | undefined);
    /** Spacing Below Paragraph. Serialized as `w:after` */
    get after(): StringValue | undefined;
    set after(v: StringValue | undefined);
    /** Spacing Below Paragraph in Line Units. Serialized as `w:afterLines` */
    get afterLines(): Int32Value | undefined;
    set afterLines(v: Int32Value | undefined);
    /** Automatically Determine Spacing Below Paragraph. Serialized as `w:afterAutospacing` */
    get afterAutoSpacing(): OnOffValue | undefined;
    set afterAutoSpacing(v: OnOffValue | undefined);
    /** Spacing Between Lines in Paragraph. Serialized as `w:line` */
    get line(): StringValue | undefined;
    set line(v: StringValue | undefined);
    /** Type of Spacing Between Lines. Serialized as `w:lineRule` */
    get lineRule(): LineSpacingRuleValues | undefined;
    set lineRule(v: LineSpacingRuleValues | undefined);
}
/** Defines the Tabs Class. Serialized as `w:tabs` */
export declare class Tabs extends OxmlCompositeElement<TabStop> {
    static _Q: string;
}
/** Defines the Shading Class. Serialized as `w:shd` */
export declare class Shading extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Shading Pattern. Serialized as `w:val` */
    get val(): ShadingPatternValues | undefined;
    set val(v: ShadingPatternValues | undefined);
    /** Shading Pattern Color. Serialized as `w:color` */
    get color(): StringValue | undefined;
    set color(v: StringValue | undefined);
    /** Shading Pattern Theme Color. Serialized as `w:themeColor` */
    get themeColor(): ThemeColorValues | undefined;
    set themeColor(v: ThemeColorValues | undefined);
    /** Shading Pattern Theme Color Tint. Serialized as `w:themeTint` */
    get themeTint(): StringValue | undefined;
    set themeTint(v: StringValue | undefined);
    /** Shading Pattern Theme Color Shade. Serialized as `w:themeShade` */
    get themeShade(): StringValue | undefined;
    set themeShade(v: StringValue | undefined);
    /** Shading Background Color. Serialized as `w:fill` */
    get fill(): StringValue | undefined;
    set fill(v: StringValue | undefined);
    /** Shading Background Theme Color. Serialized as `w:themeFill` */
    get themeFill(): ThemeColorValues | undefined;
    set themeFill(v: ThemeColorValues | undefined);
    /** Shading Background Theme Color Tint. Serialized as `w:themeFillTint` */
    get themeFillTint(): StringValue | undefined;
    set themeFillTint(v: StringValue | undefined);
    /** Shading Background Theme Color Shade. Serialized as `w:themeFillShade` */
    get themeFillShade(): StringValue | undefined;
    set themeFillShade(v: StringValue | undefined);
}
/** Defines the ParagraphBorders Class. Serialized as `w:pBdr` */
export declare class ParagraphBorders extends OxmlCompositeElement<TopBorder | LeftBorder | BottomBorder | RightBorder | BetweenBorder | BarBorder> {
    static _Q: string;
    /** Paragraph Border Above Identical Paragraphs. */
    get topBorder(): TopBorder | undefined;
    /** Left Paragraph Border. */
    get leftBorder(): LeftBorder | undefined;
    /** Paragraph Border Between Identical Paragraphs. */
    get bottomBorder(): BottomBorder | undefined;
    /** Right Paragraph Border. */
    get rightBorder(): RightBorder | undefined;
    /** Paragraph Border Between Identical Paragraphs. */
    get betweenBorder(): BetweenBorder | undefined;
    /** Paragraph Border Between Facing Pages. */
    get barBorder(): BarBorder | undefined;
}
/** Defines the NumberingProperties Class. Serialized as `w:numPr` */
export declare class NumberingProperties extends OxmlCompositeElement<NumberingLevelReference | NumberingId | NumberingChange | Inserted> {
    static _Q: string;
    /** Numbering Level Reference. */
    get numberingLevelReference(): NumberingLevelReference | undefined;
    /** Numbering Definition Instance Reference. */
    get numberingId(): NumberingId | undefined;
    /** Previous Paragraph Numbering Properties. */
    get numberingChange(): NumberingChange | undefined;
    /** Inserted Numbering Properties. */
    get inserted(): Inserted | undefined;
}
/** Defines the FrameProperties Class. Serialized as `w:framePr` */
export declare class FrameProperties extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Drop Cap Frame. Serialized as `w:dropCap` */
    get dropCap(): DropCapLocationValues | undefined;
    set dropCap(v: DropCapLocationValues | undefined);
    /** Drop Cap Vertical Height in Lines. Serialized as `w:lines` */
    get lines(): Int32Value | undefined;
    set lines(v: Int32Value | undefined);
    /** Frame Width. Serialized as `w:w` */
    get width(): StringValue | undefined;
    set width(v: StringValue | undefined);
    /** Frame Height. Serialized as `w:h` */
    get height(): UInt32Value | undefined;
    set height(v: UInt32Value | undefined);
    /** Vertical Frame Padding. Serialized as `w:vSpace` */
    get verticalSpace(): StringValue | undefined;
    set verticalSpace(v: StringValue | undefined);
    /** Horizontal Frame Padding. Serialized as `w:hSpace` */
    get horizontalSpace(): StringValue | undefined;
    set horizontalSpace(v: StringValue | undefined);
    /** Text Wrapping Around Frame. Serialized as `w:wrap` */
    get wrap(): TextWrappingValues | undefined;
    set wrap(v: TextWrappingValues | undefined);
    /** Frame Horizontal Positioning Base. Serialized as `w:hAnchor` */
    get horizontalPosition(): HorizontalAnchorValues | undefined;
    set horizontalPosition(v: HorizontalAnchorValues | undefined);
    /** Frame Vertical Positioning Base. Serialized as `w:vAnchor` */
    get verticalPosition(): VerticalAnchorValues | undefined;
    set verticalPosition(v: VerticalAnchorValues | undefined);
    /** Absolute Horizontal Position. Serialized as `w:x` */
    get x(): StringValue | undefined;
    set x(v: StringValue | undefined);
    /** Relative Horizontal Position. Serialized as `w:xAlign` */
    get xAlign(): HorizontalAlignmentValues | undefined;
    set xAlign(v: HorizontalAlignmentValues | undefined);
    /** Absolute Vertical Position. Serialized as `w:y` */
    get y(): StringValue | undefined;
    set y(v: StringValue | undefined);
    /** Relative Vertical Position. Serialized as `w:yAlign` */
    get yAlign(): VerticalAlignmentValues | undefined;
    set yAlign(v: VerticalAlignmentValues | undefined);
    /** Frame Height Type. Serialized as `w:hRule` */
    get heightType(): HeightRuleValues | undefined;
    set heightType(v: HeightRuleValues | undefined);
    /** Lock Frame Anchor to Paragraph. Serialized as `w:anchorLock` */
    get anchorLock(): OnOffValue | undefined;
    set anchorLock(v: OnOffValue | undefined);
}
/** Defines the OnOffType Class. */
export declare abstract class OnOffType extends OxmlLeafElement {
    static _A: string[];
    /** On/Off Value. Serialized as `w:val` */
    get val(): OnOffValue | undefined;
    set val(v: OnOffValue | undefined);
}
/** Defines the NotTrueType Class. Serialized as `w:notTrueType` */
export declare class NotTrueType extends OnOffType {
    static _Q: string;
}
/** Defines the DoNotUseLongFileNames Class. Serialized as `w:doNotUseLongFileNames` */
export declare class DoNotUseLongFileNames extends OnOffType {
    static _Q: string;
}
/** Defines the DoNotOrganizeInFolder Class. Serialized as `w:doNotOrganizeInFolder` */
export declare class DoNotOrganizeInFolder extends OnOffType {
    static _Q: string;
}
/** Defines the DoNotSaveAsSingleFile Class. Serialized as `w:doNotSaveAsSingleFile` */
export declare class DoNotSaveAsSingleFile extends OnOffType {
    static _Q: string;
}
/** Defines the DoNotRelyOnCSS Class. Serialized as `w:doNotRelyOnCSS` */
export declare class DoNotRelyOnCSS extends OnOffType {
    static _Q: string;
}
/** Defines the AllowPNG Class. Serialized as `w:allowPNG` */
export declare class AllowPNG extends OnOffType {
    static _Q: string;
}
/** Defines the RelyOnVML Class. Serialized as `w:relyOnVML` */
export declare class RelyOnVML extends OnOffType {
    static _Q: string;
}
/** Defines the OptimizeForBrowser Class. Serialized as `w:optimizeForBrowser` */
export declare class OptimizeForBrowser extends OnOffType {
    static _Q: string;
}
/** Do Not Automatically Compress Images. Serialized as `w:doNotAutoCompressPictures` */
export declare class DoNotAutoCompressPictures extends OnOffType {
    static _Q: string;
}
/** Do Not Include Content in Text Boxes, Footnotes, and Endnotes in Document Statistics. Serialized as `w:doNotIncludeSubdocsInStats` */
export declare class DoNotIncludeSubdocsInStats extends OnOffType {
    static _Q: string;
}
/** Disable Features Incompatible With Earlier Word Processing Formats. Serialized as `w:uiCompat97To2003` */
export declare class UICompatibleWith97To2003 extends OnOffType {
    static _Q: string;
}
/** Automatically Recalculate Fields on Open. Serialized as `w:updateFields` */
export declare class UpdateFieldsOnOpen extends OnOffType {
    static _Q: string;
}
/** Do Not Mark Custom XML Elements With No Namespace As Invalid. Serialized as `w:alwaysMergeEmptyNamespace` */
export declare class AlwaysMergeEmptyNamespace extends OnOffType {
    static _Q: string;
}
/** Show Visual Indicators for Custom XML Markup Start/End Locations. Serialized as `w:showXMLTags` */
export declare class ShowXmlTags extends OnOffType {
    static _Q: string;
}
/** Save Document as XML File through Custom XSL Transform. Serialized as `w:useXSLTWhenSaving` */
export declare class UseXsltWhenSaving extends OnOffType {
    static _Q: string;
}
/** Only Save Custom XML Markup. Serialized as `w:saveXmlDataOnly` */
export declare class SaveXmlDataOnly extends OnOffType {
    static _Q: string;
}
/** Do Not Show Visual Indicator For Invalid Custom XML Markup. Serialized as `w:doNotDemarcateInvalidXml` */
export declare class DoNotDemarcateInvalidXml extends OnOffType {
    static _Q: string;
}
/** Use Custom XML Element Names as Default Placeholder Text. Serialized as `w:alwaysShowPlaceholderText` */
export declare class AlwaysShowPlaceholderText extends OnOffType {
    static _Q: string;
}
/** Ignore Mixed Content When Validating Custom XML Markup. Serialized as `w:ignoreMixedContent` */
export declare class IgnoreMixedContent extends OnOffType {
    static _Q: string;
}
/** Allow Saving Document As XML File When Custom XML Markup Is Invalid. Serialized as `w:saveInvalidXml` */
export declare class SaveInvalidXml extends OnOffType {
    static _Q: string;
}
/** Do Not Validate Custom XML Markup Against Schemas. Serialized as `w:doNotValidateAgainstSchema` */
export declare class DoNotValidateAgainstSchema extends OnOffType {
    static _Q: string;
}
/** Generate Thumbnail For Document On Save. Serialized as `w:savePreviewPicture` */
export declare class SavePreviewPicture extends OnOffType {
    static _Q: string;
}
/** Use Strict Kinsoku Rules for Japanese Text. Serialized as `w:strictFirstAndLastChars` */
export declare class StrictFirstAndLastChars extends OnOffType {
    static _Q: string;
}
/** Print Two Pages Per Sheet. Serialized as `w:printTwoOnOne` */
export declare class PrintTwoOnOne extends OnOffType {
    static _Q: string;
}
/** Never Kern Punctuation Characters. Serialized as `w:noPunctuationKerning` */
export declare class NoPunctuationKerning extends OnOffType {
    static _Q: string;
}
/** Do Not Show Visual Indicator For Form Fields. Serialized as `w:doNotShadeFormData` */
export declare class DoNotShadeFormData extends OnOffType {
    static _Q: string;
}
/** Do Not Use Margins for Drawing Grid Origin. Serialized as `w:doNotUseMarginsForDrawingGridOrigin` */
export declare class DoNotUseMarginsForDrawingGridOrigin extends OnOffType {
    static _Q: string;
}
/** Book Fold Printing. Serialized as `w:bookFoldPrinting` */
export declare class BookFoldPrinting extends OnOffType {
    static _Q: string;
}
/** Reverse Book Fold Printing. Serialized as `w:bookFoldRevPrinting` */
export declare class BookFoldReversePrinting extends OnOffType {
    static _Q: string;
}
/** Different Even/Odd Page Headers and Footers. Serialized as `w:evenAndOddHeaders` */
export declare class EvenAndOddHeaders extends OnOffType {
    static _Q: string;
}
/** Show E-Mail Message Header. Serialized as `w:showEnvelope` */
export declare class ShowEnvelope extends OnOffType {
    static _Q: string;
}
/** Do Not Hyphenate Words in ALL CAPITAL LETTERS. Serialized as `w:doNotHyphenateCaps` */
export declare class DoNotHyphenateCaps extends OnOffType {
    static _Q: string;
}
/** Automatically Hyphenate Document Contents When Displayed. Serialized as `w:autoHyphenation` */
export declare class AutoHyphenation extends OnOffType {
    static _Q: string;
}
/** Prevent Replacement of Styles Part. Serialized as `w:styleLockQFSet` */
export declare class StyleLockStylesPart extends OnOffType {
    static _Q: string;
}
/** Prevent Modification of Themes Part. Serialized as `w:styleLockTheme` */
export declare class StyleLockThemesPart extends OnOffType {
    static _Q: string;
}
/** Allow Automatic Formatting to Override Formatting Protection Settings. Serialized as `w:autoFormatOverride` */
export declare class AutoFormatOverride extends OnOffType {
    static _Q: string;
}
/** Do Not Track Formatting Revisions When Tracking Revisions. Serialized as `w:doNotTrackFormatting` */
export declare class DoNotTrackFormatting extends OnOffType {
    static _Q: string;
}
/** Do Not Use Move Syntax When Tracking Revisions. Serialized as `w:doNotTrackMoves` */
export declare class DoNotTrackMoves extends OnOffType {
    static _Q: string;
}
/** Track Revisions to Document. Serialized as `w:trackRevisions` */
export declare class TrackRevisions extends OnOffType {
    static _Q: string;
}
/** Automatically Update Styles From Document Template. Serialized as `w:linkStyles` */
export declare class LinkStyles extends OnOffType {
    static _Q: string;
}
/** Structured Document Tag Placeholder Text Should be Resaved. Serialized as `w:formsDesign` */
export declare class FormsDesign extends OnOffType {
    static _Q: string;
}
/** Do Not Display Visual Indication of Grammatical Errors. Serialized as `w:hideGrammaticalErrors` */
export declare class HideGrammaticalErrors extends OnOffType {
    static _Q: string;
}
/** Do Not Display Visual Indication of Spelling Errors. Serialized as `w:hideSpellingErrors` */
export declare class HideSpellingErrors extends OnOffType {
    static _Q: string;
}
/** Position Gutter At Top of Page. Serialized as `w:gutterAtTop` */
export declare class GutterAtTop extends OnOffType {
    static _Q: string;
}
/** Page Border Excludes Footer. Serialized as `w:bordersDoNotSurroundFooter` */
export declare class BordersDoNotSurroundFooter extends OnOffType {
    static _Q: string;
}
/** Page Border Excludes Header. Serialized as `w:bordersDoNotSurroundHeader` */
export declare class BordersDoNotSurroundHeader extends OnOffType {
    static _Q: string;
}
/** Align Paragraph and Table Borders with Page Border. Serialized as `w:alignBordersAndEdges` */
export declare class AlignBorderAndEdges extends OnOffType {
    static _Q: string;
}
/** Mirror Page Margins. Serialized as `w:mirrorMargins` */
export declare class MirrorMargins extends OnOffType {
    static _Q: string;
}
/** Only Save Form Field Content. Serialized as `w:saveFormsData` */
export declare class SaveFormsData extends OnOffType {
    static _Q: string;
}
/** Subset Fonts When Embedding. Serialized as `w:saveSubsetFonts` */
export declare class SaveSubsetFonts extends OnOffType {
    static _Q: string;
}
/** Embed Common System Fonts. Serialized as `w:embedSystemFonts` */
export declare class EmbedSystemFonts extends OnOffType {
    static _Q: string;
}
/** Embed TrueType Fonts. Serialized as `w:embedTrueTypeFonts` */
export declare class EmbedTrueTypeFonts extends OnOffType {
    static _Q: string;
}
/** Only Print Form Field Content. Serialized as `w:printFormsData` */
export declare class PrintFormsData extends OnOffType {
    static _Q: string;
}
/** Print Fractional Character Widths. Serialized as `w:printFractionalCharacterWidth` */
export declare class PrintFractionalCharacterWidth extends OnOffType {
    static _Q: string;
}
/** Print PostScript Codes With Document Text. Serialized as `w:printPostScriptOverText` */
export declare class PrintPostScriptOverText extends OnOffType {
    static _Q: string;
}
/** Display Background Objects When Displaying Document. Serialized as `w:displayBackgroundShape` */
export declare class DisplayBackgroundShape extends OnOffType {
    static _Q: string;
}
/** Do Not Display Visual Boundary For Header/Footer or Between Pages. Serialized as `w:doNotDisplayPageBoundaries` */
export declare class DoNotDisplayPageBoundaries extends OnOffType {
    static _Q: string;
}
/** Remove Date and Time from Annotations. Serialized as `w:removeDateAndTime` */
export declare class RemoveDateAndTime extends OnOffType {
    static _Q: string;
}
/** Remove Personal Information from Document Properties. Serialized as `w:removePersonalInformation` */
export declare class RemovePersonalInformation extends OnOffType {
    static _Q: string;
}
/** Defines the TemporarySdt Class. Serialized as `w:temporary` */
export declare class TemporarySdt extends OnOffType {
    static _Q: string;
}
/** Defines the ShowingPlaceholder Class. Serialized as `w:showingPlcHdr` */
export declare class ShowingPlaceholder extends OnOffType {
    static _Q: string;
}
/** Use Cached Paragraph Information for Column Balancing. Serialized as `w:cachedColBalance` */
export declare class CachedColumnBalance extends OnOffType {
    static _Q: string;
}
/** Use ANSI Kerning Pairs from Fonts. Serialized as `w:useAnsiKerningPairs` */
export declare class UseAnsiKerningPairs extends OnOffType {
    static _Q: string;
}
/** Ignore Vertical Alignment in Textboxes. Serialized as `w:doNotVertAlignInTxbx` */
export declare class DoNotVerticallyAlignInTextBox extends OnOffType {
    static _Q: string;
}
/** Don't Break Table Rows Around Floating Tables. Serialized as `w:doNotBreakConstrainedForcedTable` */
export declare class DoNotBreakConstrainedForcedTable extends OnOffType {
    static _Q: string;
}
/** Don't Vertically Align Cells Containing Floating Objects. Serialized as `w:doNotVertAlignCellWithSp` */
export declare class DoNotVerticallyAlignCellWithShape extends OnOffType {
    static _Q: string;
}
/** Always Move Paragraph Mark to Page after a Page Break. Serialized as `w:splitPgBreakAndParaMark` */
export declare class SplitPageBreakAndParagraphMark extends OnOffType {
    static _Q: string;
}
/** Always Use Fixed Width for Hangul Characters. Serialized as `w:displayHangulFixedWidth` */
export declare class DisplayHangulFixedWidth extends OnOffType {
    static _Q: string;
}
/** Underline Following Character Following Numbering. Serialized as `w:underlineTabInNumList` */
export declare class UnderlineTabInNumberingList extends OnOffType {
    static _Q: string;
}
/** Allow Table Columns To Exceed Preferred Widths of Constituent Cells. Serialized as `w:autofitToFirstFixedWidthCell` */
export declare class AutofitToFirstFixedWidthCell extends OnOffType {
    static _Q: string;
}
/** Do Not AutoFit Tables To Fit Next To Wrapped Objects. Serialized as `w:doNotAutofitConstrainedTables` */
export declare class DoNotAutofitConstrainedTables extends OnOffType {
    static _Q: string;
}
/** Do Not Ignore Floating Objects When Calculating Paragraph Indentation. Serialized as `w:doNotSuppressIndentation` */
export declare class DoNotSuppressIndentation extends OnOffType {
    static _Q: string;
}
/** Allow Contextual Spacing of Paragraphs in Tables. Serialized as `w:allowSpaceOfSameStyleInTable` */
export declare class AllowSpaceOfSameStyleInTable extends OnOffType {
    static _Q: string;
}
/** Use Alternate Set of East Asian Line Breaking Rules. Serialized as `w:useAltKinsokuLineBreakRules` */
export declare class UseAltKinsokuLineBreakRules extends OnOffType {
    static _Q: string;
}
/** Ignore Hanging Indent When Creating Tab Stop After Numbering. Serialized as `w:doNotUseIndentAsNumberingTabStop` */
export declare class DoNotUseIndentAsNumberingTabStop extends OnOffType {
    static _Q: string;
}
/** Do Not Automatically Apply List Paragraph Style To Bulleted/Numbered Text. Serialized as `w:useNormalStyleForList` */
export declare class UseNormalStyleForList extends OnOffType {
    static _Q: string;
}
/** Do Not Bypass East Asian/Complex Script Layout Code. Serialized as `w:useFELayout` */
export declare class UseFarEastLayout extends OnOffType {
    static _Q: string;
}
/** Allow Tables to AutoFit Into Page Margins. Serialized as `w:growAutofit` */
export declare class GrowAutofit extends OnOffType {
    static _Q: string;
}
/** Emulate Word 2002 Table Style Rules. Serialized as `w:useWord2002TableStyleRules` */
export declare class UseWord2002TableStyleRules extends OnOffType {
    static _Q: string;
}
/** Do Not Compress Compressible Characters When Using Document Grid. Serialized as `w:doNotUseEastAsianBreakRules` */
export declare class DoNotUseEastAsianBreakRules extends OnOffType {
    static _Q: string;
}
/** Do Not Allow Hanging Punctuation With Character Grid. Serialized as `w:doNotWrapTextWithPunct` */
export declare class DoNotWrapTextWithPunctuation extends OnOffType {
    static _Q: string;
}
/** Use Legacy Ethiopic and Amharic Line Breaking Rules. Serialized as `w:applyBreakingRules` */
export declare class ApplyBreakingRules extends OnOffType {
    static _Q: string;
}
/** Select Field When First or Last Character Is Selected. Serialized as `w:selectFldWithFirstOrLastChar` */
export declare class SelectFieldWithFirstOrLastChar extends OnOffType {
    static _Q: string;
}
/** Do Not Snap to Document Grid in Table Cells with Objects. Serialized as `w:doNotSnapToGridInCell` */
export declare class DoNotSnapToGridInCell extends OnOffType {
    static _Q: string;
}
/** Do Not Allow Floating Tables To Break Across Pages. Serialized as `w:doNotBreakWrappedTables` */
export declare class DoNotBreakWrappedTables extends OnOffType {
    static _Q: string;
}
/** Emulate Word 97 East Asian Line Breaking. Serialized as `w:useWord97LineBreakRules` */
export declare class UseWord97LineBreakRules extends OnOffType {
    static _Q: string;
}
/** Allow Table Rows to Wrap Inline Objects Independently. Serialized as `w:layoutTableRowsApart` */
export declare class LayoutTableRowsApart extends OnOffType {
    static _Q: string;
}
/** Ignore Space Before Table When Deciding If Table Should Wrap Floating Object. Serialized as `w:layoutRawTableWidth` */
export declare class LayoutRawTableWidth extends OnOffType {
    static _Q: string;
}
/** Use Fixed Paragraph Spacing for HTML Auto Setting. Serialized as `w:doNotUseHTMLParagraphAutoSpacing` */
export declare class DoNotUseHTMLParagraphAutoSpacing extends OnOffType {
    static _Q: string;
}
/** Do Not Increase Line Height for Raised/Lowered Text. Serialized as `w:noSpaceRaiseLower` */
export declare class NoSpaceRaiseLower extends OnOffType {
    static _Q: string;
}
/** Emulate Word 95 Full-Width Character Spacing. Serialized as `w:autoSpaceLikeWord95` */
export declare class AutoSpaceLikeWord95 extends OnOffType {
    static _Q: string;
}
/** Add Document Grid Line Pitch To Lines in Table Cells. Serialized as `w:adjustLineHeightInTable` */
export declare class AdjustLineHeightInTable extends OnOffType {
    static _Q: string;
}
/** Ignore Width of Last Tab Stop When Aligning Paragraph If It Is Not Left Aligned. Serialized as `w:forgetLastTabAlignment` */
export declare class ForgetLastTabAlignment extends OnOffType {
    static _Q: string;
}
/** Align Table Rows Independently. Serialized as `w:alignTablesRowByRow` */
export declare class AlignTablesRowByRow extends OnOffType {
    static _Q: string;
}
/** Emulate Word 97 Text Wrapping Around Floating Objects. Serialized as `w:shapeLayoutLikeWW8` */
export declare class ShapeLayoutLikeWord8 extends OnOffType {
    static _Q: string;
}
/** Emulate Word 6.x/95/97 Footnote Placement. Serialized as `w:footnoteLayoutLikeWW8` */
export declare class FootnoteLayoutLikeWord8 extends OnOffType {
    static _Q: string;
}
/** Line Wrap Trailing Spaces. Serialized as `w:wrapTrailSpaces` */
export declare class WrapTrailSpaces extends OnOffType {
    static _Q: string;
}
/** Do Not Suppress Paragraph Borders Next To Frames. Serialized as `w:doNotSuppressParagraphBorders` */
export declare class DoNotSuppressParagraphBorders extends OnOffType {
    static _Q: string;
}
/** Use Printer Metrics To Display Documents. Serialized as `w:usePrinterMetrics` */
export declare class UsePrinterMetrics extends OnOffType {
    static _Q: string;
}
/** Emulate Word 5.x for the Macintosh Small Caps Formatting. Serialized as `w:mwSmallCaps` */
export declare class MacWordSmallCaps extends OnOffType {
    static _Q: string;
}
/** Emulate WordPerfect 6.x Font Height Calculation. Serialized as `w:truncateFontHeightsLikeWP6` */
export declare class TruncateFontHeightsLikeWordPerfect extends OnOffType {
    static _Q: string;
}
/** Treat Backslash Quotation Delimiter as Two Quotation Marks. Serialized as `w:convMailMergeEsc` */
export declare class ConvertMailMergeEscape extends OnOffType {
    static _Q: string;
}
/** Swap Paragraph Borders on Odd Numbered Pages. Serialized as `w:swapBordersFacingPages` */
export declare class SwapBordersFacingPages extends OnOffType {
    static _Q: string;
}
/** Do Not Use Space Before On First Line After a Page Break. Serialized as `w:suppressSpBfAfterPgBrk` */
export declare class SuppressSpacingBeforeAfterPageBreak extends OnOffType {
    static _Q: string;
}
/** Emulate WordPerfect 5.x Line Spacing. Serialized as `w:suppressTopSpacingWP` */
export declare class SuppressTopSpacingWordPerfect extends OnOffType {
    static _Q: string;
}
/** Ignore Minimum Line Height for First Line on Page. Serialized as `w:suppressSpacingAtTopOfPage` */
export declare class SuppressSpacingAtTopOfPage extends OnOffType {
    static _Q: string;
}
/** Ignore Minimum and Exact Line Height for First Line on Page. Serialized as `w:suppressTopSpacing` */
export declare class SuppressTopSpacing extends OnOffType {
    static _Q: string;
}
/** Ignore Exact Line Height for Last Line on Page. Serialized as `w:suppressBottomSpacing` */
export declare class SuppressBottomSpacing extends OnOffType {
    static _Q: string;
}
/** Increase Priority Of Font Size During Font Substitution. Serialized as `w:subFontBySize` */
export declare class SubFontBySize extends OnOffType {
    static _Q: string;
}
/** Display Page/Column Breaks Present in Frames. Serialized as `w:showBreaksInFrames` */
export declare class ShowBreaksInFrames extends OnOffType {
    static _Q: string;
}
/** Space width. Serialized as `w:wpSpaceWidth` */
export declare class WordPerfectSpaceWidth extends OnOffType {
    static _Q: string;
}
/** Print Colors as Black And White without Dithering. Serialized as `w:printColBlack` */
export declare class PrintColorBlackWhite extends OnOffType {
    static _Q: string;
}
/** Print Body Text before Header/Footer Contents. Serialized as `w:printBodyTextBeforeHeader` */
export declare class PrintBodyTextBeforeHeader extends OnOffType {
    static _Q: string;
}
/** Emulate Word 6.0 Line Wrapping for East Asian Text. Serialized as `w:lineWrapLikeWord6` */
export declare class LineWrapLikeWord6 extends OnOffType {
    static _Q: string;
}
/** Only Expand/Condense Text By Whole Points. Serialized as `w:spacingInWholePoints` */
export declare class SpacingInWholePoints extends OnOffType {
    static _Q: string;
}
/** Don't Justify Lines Ending in Soft Line Break. Serialized as `w:doNotExpandShiftReturn` */
export declare class DoNotExpandShiftReturn extends OnOffType {
    static _Q: string;
}
/** Underline All Trailing Spaces. Serialized as `w:ulTrailSpace` */
export declare class UnderlineTrailingSpaces extends OnOffType {
    static _Q: string;
}
/** Convert Backslash To Yen Sign When Entered. Serialized as `w:doNotLeaveBackslashAlone` */
export declare class DoNotLeaveBackslashAlone extends OnOffType {
    static _Q: string;
}
/** Do Not Center Content on Lines With Exact Line Height. Serialized as `w:noExtraLineSpacing` */
export declare class NoExtraLineSpacing extends OnOffType {
    static _Q: string;
}
/** Balance Single Byte and Double Byte Characters. Serialized as `w:balanceSingleByteDoubleByteWidth` */
export declare class BalanceSingleByteDoubleByteWidth extends OnOffType {
    static _Q: string;
}
/** Do Not Balance Text Columns within a Section. Serialized as `w:noColumnBalance` */
export declare class NoColumnBalance extends OnOffType {
    static _Q: string;
}
/** Add Additional Space Below Baseline For Underlined East Asian Text. Serialized as `w:spaceForUL` */
export declare class SpaceForUnderline extends OnOffType {
    static _Q: string;
}
/** Do Not Add Leading Between Lines of Text. Serialized as `w:noLeading` */
export declare class NoLeading extends OnOffType {
    static _Q: string;
}
/** Do Not Create Custom Tab Stop for Hanging Indent. Serialized as `w:noTabHangInd` */
export declare class NoTabHangIndent extends OnOffType {
    static _Q: string;
}
/** Emulate WordPerfect 6.x Paragraph Justification. Serialized as `w:wpJustification` */
export declare class WordPerfectJustification extends OnOffType {
    static _Q: string;
}
/** Use Simplified Rules For Table Border Conflicts. Serialized as `w:useSingleBorderforContiguousCells` */
export declare class UseSingleBorderForContiguousCells extends OnOffType {
    static _Q: string;
}
/** Data for HTML body Element. Serialized as `w:bodyDiv` */
export declare class BodyDiv extends OnOffType {
    static _Q: string;
}
/** Data for HTML blockquote Element. Serialized as `w:blockQuote` */
export declare class BlockQuote extends OnOffType {
    static _Q: string;
}
/** Display All Levels Using Arabic Numerals. Serialized as `w:isLgl` */
export declare class IsLegalNumberingStyle extends OnOffType {
    static _Q: string;
}
/** View Merged Data Within Document. Serialized as `w:viewMergedData` */
export declare class ViewMergedData extends OnOffType {
    static _Q: string;
}
/** Merged Document To E-Mail Attachment. Serialized as `w:mailAsAttachment` */
export declare class MailAsAttachment extends OnOffType {
    static _Q: string;
}
/** Remove Blank Lines from Merged Documents. Serialized as `w:doNotSuppressBlankLines` */
export declare class DoNotSuppressBlankLines extends OnOffType {
    static _Q: string;
}
/** Query Contains Link to External Query File. Serialized as `w:linkToQuery` */
export declare class LinkToQuery extends OnOffType {
    static _Q: string;
}
/** First Row of Data Source Contains Column Names. Serialized as `w:fHdr` */
export declare class FirstRowHeader extends OnOffType {
    static _Q: string;
}
/** Use Country/Region-Based Address Field Ordering. Serialized as `w:dynamicAddress` */
export declare class DynamicAddress extends OnOffType {
    static _Q: string;
}
/** Record Is Included in Mail Merge. Serialized as `w:active` */
export declare class Active extends OnOffType {
    static _Q: string;
}
/** Built-In Document Part. Serialized as `w:docPartUnique` */
export declare class DocPartUnique extends OnOffType {
    static _Q: string;
}
/** Invalidated Field Cache. Serialized as `w:dirty` */
export declare class Dirty extends OnOffType {
    static _Q: string;
}
/** Keep Source Formatting on Import. Serialized as `w:matchSrc` */
export declare class MatchSource extends OnOffType {
    static _Q: string;
}
/** Checkbox Form Field State. Serialized as `w:checked` */
export declare class Checked extends OnOffType {
    static _Q: string;
}
/** Default Checkbox Form Field State. Serialized as `w:default` */
export declare class DefaultCheckBoxFormFieldState extends OnOffType {
    static _Q: string;
}
/** Automatically Size Form Field. Serialized as `w:sizeAuto` */
export declare class AutomaticallySizeFormField extends OnOffType {
    static _Q: string;
}
/** Recalculate Fields When Current Field Is Modified. Serialized as `w:calcOnExit` */
export declare class CalculateOnExit extends OnOffType {
    static _Q: string;
}
/** Form Field Enabled. Serialized as `w:enabled` */
export declare class Enabled extends OnOffType {
    static _Q: string;
}
/** Defines the GutterOnRight Class. Serialized as `w:rtlGutter` */
export declare class GutterOnRight extends OnOffType {
    static _Q: string;
}
/** Defines the TitlePage Class. Serialized as `w:titlePg` */
export declare class TitlePage extends OnOffType {
    static _Q: string;
}
/** Defines the NoEndnote Class. Serialized as `w:noEndnote` */
export declare class NoEndnote extends OnOffType {
    static _Q: string;
}
/** Defines the FormProtection Class. Serialized as `w:formProt` */
export declare class FormProtection extends OnOffType {
    static _Q: string;
}
/** Defines the Hidden Class. Serialized as `w:hidden` */
export declare class Hidden extends OnOffType {
    static _Q: string;
}
/** Defines the OfficeMath Class. Serialized as `w:oMath` */
export declare class OfficeMath extends OnOffType {
    static _Q: string;
}
/** Defines the SpecVanish Class. Serialized as `w:specVanish` */
export declare class SpecVanish extends OnOffType {
    static _Q: string;
}
/** Defines the ComplexScript Class. Serialized as `w:cs` */
export declare class ComplexScript extends OnOffType {
    static _Q: string;
}
/** Defines the RightToLeftText Class. Serialized as `w:rtl` */
export declare class RightToLeftText extends OnOffType {
    static _Q: string;
}
/** Defines the WebHidden Class. Serialized as `w:webHidden` */
export declare class WebHidden extends OnOffType {
    static _Q: string;
}
/** Defines the Vanish Class. Serialized as `w:vanish` */
export declare class Vanish extends OnOffType {
    static _Q: string;
}
/** Defines the NoProof Class. Serialized as `w:noProof` */
export declare class NoProof extends OnOffType {
    static _Q: string;
}
/** Defines the Imprint Class. Serialized as `w:imprint` */
export declare class Imprint extends OnOffType {
    static _Q: string;
}
/** Defines the Emboss Class. Serialized as `w:emboss` */
export declare class Emboss extends OnOffType {
    static _Q: string;
}
/** Defines the Shadow Class. Serialized as `w:shadow` */
export declare class Shadow extends OnOffType {
    static _Q: string;
}
/** Defines the Outline Class. Serialized as `w:outline` */
export declare class Outline extends OnOffType {
    static _Q: string;
}
/** Defines the DoubleStrike Class. Serialized as `w:dstrike` */
export declare class DoubleStrike extends OnOffType {
    static _Q: string;
}
/** Defines the Strike Class. Serialized as `w:strike` */
export declare class Strike extends OnOffType {
    static _Q: string;
}
/** Defines the SmallCaps Class. Serialized as `w:smallCaps` */
export declare class SmallCaps extends OnOffType {
    static _Q: string;
}
/** Defines the Caps Class. Serialized as `w:caps` */
export declare class Caps extends OnOffType {
    static _Q: string;
}
/** Defines the ItalicComplexScript Class. Serialized as `w:iCs` */
export declare class ItalicComplexScript extends OnOffType {
    static _Q: string;
}
/** Defines the Italic Class. Serialized as `w:i` */
export declare class Italic extends OnOffType {
    static _Q: string;
}
/** Defines the BoldComplexScript Class. Serialized as `w:bCs` */
export declare class BoldComplexScript extends OnOffType {
    static _Q: string;
}
/** Defines the Bold Class. Serialized as `w:b` */
export declare class Bold extends OnOffType {
    static _Q: string;
}
/** Defines the SuppressOverlap Class. Serialized as `w:suppressOverlap` */
export declare class SuppressOverlap extends OnOffType {
    static _Q: string;
}
/** Defines the MirrorIndents Class. Serialized as `w:mirrorIndents` */
export declare class MirrorIndents extends OnOffType {
    static _Q: string;
}
/** Defines the ContextualSpacing Class. Serialized as `w:contextualSpacing` */
export declare class ContextualSpacing extends OnOffType {
    static _Q: string;
}
/** Defines the SnapToGrid Class. Serialized as `w:snapToGrid` */
export declare class SnapToGrid extends OnOffType {
    static _Q: string;
}
/** Defines the AdjustRightIndent Class. Serialized as `w:adjustRightInd` */
export declare class AdjustRightIndent extends OnOffType {
    static _Q: string;
}
/** Defines the BiDi Class. Serialized as `w:bidi` */
export declare class BiDi extends OnOffType {
    static _Q: string;
}
/** Defines the AutoSpaceDN Class. Serialized as `w:autoSpaceDN` */
export declare class AutoSpaceDN extends OnOffType {
    static _Q: string;
}
/** Defines the AutoSpaceDE Class. Serialized as `w:autoSpaceDE` */
export declare class AutoSpaceDE extends OnOffType {
    static _Q: string;
}
/** Defines the TopLinePunctuation Class. Serialized as `w:topLinePunct` */
export declare class TopLinePunctuation extends OnOffType {
    static _Q: string;
}
/** Defines the OverflowPunctuation Class. Serialized as `w:overflowPunct` */
export declare class OverflowPunctuation extends OnOffType {
    static _Q: string;
}
/** Defines the WordWrap Class. Serialized as `w:wordWrap` */
export declare class WordWrap extends OnOffType {
    static _Q: string;
}
/** Defines the Kinsoku Class. Serialized as `w:kinsoku` */
export declare class Kinsoku extends OnOffType {
    static _Q: string;
}
/** Defines the SuppressAutoHyphens Class. Serialized as `w:suppressAutoHyphens` */
export declare class SuppressAutoHyphens extends OnOffType {
    static _Q: string;
}
/** Defines the SuppressLineNumbers Class. Serialized as `w:suppressLineNumbers` */
export declare class SuppressLineNumbers extends OnOffType {
    static _Q: string;
}
/** Defines the WidowControl Class. Serialized as `w:widowControl` */
export declare class WidowControl extends OnOffType {
    static _Q: string;
}
/** Defines the PageBreakBefore Class. Serialized as `w:pageBreakBefore` */
export declare class PageBreakBefore extends OnOffType {
    static _Q: string;
}
/** Defines the KeepLines Class. Serialized as `w:keepLines` */
export declare class KeepLines extends OnOffType {
    static _Q: string;
}
/** Defines the KeepNext Class. Serialized as `w:keepNext` */
export declare class KeepNext extends OnOffType {
    static _Q: string;
}
/** Defines the StringType Class. */
export declare abstract class StringType extends OxmlLeafElement {
    static _A: string[];
    /** String Value. Serialized as `w:val` */
    get val(): StringValue | undefined;
    set val(v: StringValue | undefined);
}
/** Defines the AltName Class. Serialized as `w:altName` */
export declare class AltName extends StringType {
    static _Q: string;
}
/** Defines the WebPageEncoding Class. Serialized as `w:encoding` */
export declare class WebPageEncoding extends StringType {
    static _Q: string;
}
/** List Separator for Field Code Evaluation. Serialized as `w:listSeparator` */
export declare class ListSeparator extends StringType {
    static _Q: string;
}
/** Radix Point for Field Code Evaluation. Serialized as `w:decimalSymbol` */
export declare class DecimalSymbol extends StringType {
    static _Q: string;
}
/** Attached Custom XML Schema. Serialized as `w:attachedSchema` */
export declare class AttachedSchema extends StringType {
    static _Q: string;
}
/** Defines the Tag Class. Serialized as `w:tag` */
export declare class Tag extends StringType {
    static _Q: string;
}
/** Defines the SdtAlias Class. Serialized as `w:alias` */
export declare class SdtAlias extends StringType {
    static _Q: string;
}
/** Description for Entry. Serialized as `w:description` */
export declare class Description extends StringType {
    static _Q: string;
}
/** Associated Paragraph Style Name. Serialized as `w:style` */
export declare class StyleId extends StringType {
    static _Q: string;
}
/** Frame Size. Serialized as `w:sz` */
export declare class FrameSize extends StringType {
    static _Q: string;
}
/** Merged E-mail or Fax Subject Line. Serialized as `w:mailSubject` */
export declare class MailSubject extends StringType {
    static _Q: string;
}
/** Column Containing E-mail Address. Serialized as `w:addressFieldName` */
export declare class AddressFieldName extends StringType {
    static _Q: string;
}
/** Query For Data Source Records To Merge. Serialized as `w:query` */
export declare class Query extends StringType {
    static _Q: string;
}
/** Data Source Connection String. Serialized as `w:connectString` */
export declare class ConnectString extends StringType {
    static _Q: string;
}
/** Data Source Table Name. Serialized as `w:table` */
export declare class DataSourceTableName extends StringType {
    static _Q: string;
}
/** UDL Connection String. Serialized as `w:udl` */
export declare class UdlConnectionString extends StringType {
    static _Q: string;
}
/** Predefined Merge Field Name. Serialized as `w:mappedName` */
export declare class MappedName extends StringType {
    static _Q: string;
}
/** Data Source Name for Column. Serialized as `w:name` */
export declare class Name extends StringType {
    static _Q: string;
}
/** Defines the TableDescription Class. Serialized as `w:tblDescription` */
export declare class TableDescription extends StringType {
    static _Q: string;
}
/** Defines the TableCaption Class. Serialized as `w:tblCaption` */
export declare class TableCaption extends StringType {
    static _Q: string;
}
/** Custom XML Element Placeholder Text. Serialized as `w:placeholder` */
export declare class CustomXmlPlaceholder extends StringType {
    static _Q: string;
}
/** Document Part Reference. Serialized as `w:docPart` */
export declare class DocPartReference extends StringType {
    static _Q: string;
}
/** Document Part Category Filter. Serialized as `w:docPartCategory` */
export declare class DocPartCategory extends StringType {
    static _Q: string;
}
/** Document Part Gallery Filter. Serialized as `w:docPartGallery` */
export declare class DocPartGallery extends StringType {
    static _Q: string;
}
/** Date Display Mask. Serialized as `w:dateFormat` */
export declare class DateFormat extends StringType {
    static _Q: string;
}
/** Defines the ParagraphStyleId Class. Serialized as `w:pStyle` */
export declare class ParagraphStyleId extends StringType {
    static _Q: string;
}
/** Defines the MarkupType Class. */
export declare abstract class MarkupType extends OxmlLeafElement {
    static _A: string[];
    /** Annotation Identifier. Serialized as `w:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Comment Content Reference Mark. Serialized as `w:commentReference` */
export declare class CommentReference extends MarkupType {
    static _Q: string;
}
/** Defines the CustomXmlMoveToRangeEnd Class. Serialized as `w:customXmlMoveToRangeEnd` */
export declare class CustomXmlMoveToRangeEnd extends MarkupType {
    static _Q: string;
}
/** Defines the CustomXmlMoveFromRangeEnd Class. Serialized as `w:customXmlMoveFromRangeEnd` */
export declare class CustomXmlMoveFromRangeEnd extends MarkupType {
    static _Q: string;
}
/** Defines the CustomXmlDelRangeEnd Class. Serialized as `w:customXmlDelRangeEnd` */
export declare class CustomXmlDelRangeEnd extends MarkupType {
    static _Q: string;
}
/** Defines the CustomXmlInsRangeEnd Class. Serialized as `w:customXmlInsRangeEnd` */
export declare class CustomXmlInsRangeEnd extends MarkupType {
    static _Q: string;
}
/** Defines the MoveBookmarkType Class. */
export declare abstract class MoveBookmarkType extends OxmlLeafElement {
    static _A: string[];
    /** author. Serialized as `w:author` */
    get author(): StringValue | undefined;
    set author(v: StringValue | undefined);
    /** date. Serialized as `w:date` */
    get date(): DateTimeValue | undefined;
    set date(v: DateTimeValue | undefined);
    /** name. Serialized as `w:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** colFirst. Serialized as `w:colFirst` */
    get columnFirst(): Int32Value | undefined;
    set columnFirst(v: Int32Value | undefined);
    /** colLast. Serialized as `w:colLast` */
    get columnLast(): Int32Value | undefined;
    set columnLast(v: Int32Value | undefined);
    /** displacedByCustomXml. Serialized as `w:displacedByCustomXml` */
    get displacedByCustomXml(): DisplacedByCustomXmlValues | undefined;
    set displacedByCustomXml(v: DisplacedByCustomXmlValues | undefined);
    /** Annotation Identifier. Serialized as `w:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the MoveToRangeStart Class. Serialized as `w:moveToRangeStart` */
export declare class MoveToRangeStart extends MoveBookmarkType {
    static _Q: string;
}
/** Defines the MoveFromRangeStart Class. Serialized as `w:moveFromRangeStart` */
export declare class MoveFromRangeStart extends MoveBookmarkType {
    static _Q: string;
}
/** Defines the MarkupRangeType Class. */
export declare abstract class MarkupRangeType extends OxmlLeafElement {
    static _A: string[];
    /** displacedByCustomXml. Serialized as `w:displacedByCustomXml` */
    get displacedByCustomXml(): DisplacedByCustomXmlValues | undefined;
    set displacedByCustomXml(v: DisplacedByCustomXmlValues | undefined);
    /** Annotation Identifier. Serialized as `w:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Defines the MoveToRangeEnd Class. Serialized as `w:moveToRangeEnd` */
export declare class MoveToRangeEnd extends MarkupRangeType {
    static _Q: string;
}
/** Defines the MoveFromRangeEnd Class. Serialized as `w:moveFromRangeEnd` */
export declare class MoveFromRangeEnd extends MarkupRangeType {
    static _Q: string;
}
/** Defines the CommentRangeEnd Class. Serialized as `w:commentRangeEnd` */
export declare class CommentRangeEnd extends MarkupRangeType {
    static _Q: string;
}
/** Defines the CommentRangeStart Class. Serialized as `w:commentRangeStart` */
export declare class CommentRangeStart extends MarkupRangeType {
    static _Q: string;
}
/** Defines the BookmarkEnd Class. Serialized as `w:bookmarkEnd` */
export declare class BookmarkEnd extends MarkupRangeType {
    static _Q: string;
}
/** Defines the BookmarkStart Class. Serialized as `w:bookmarkStart` */
export declare class BookmarkStart extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `w:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** colFirst. Serialized as `w:colFirst` */
    get columnFirst(): Int32Value | undefined;
    set columnFirst(v: Int32Value | undefined);
    /** colLast. Serialized as `w:colLast` */
    get columnLast(): Int32Value | undefined;
    set columnLast(v: Int32Value | undefined);
    /** displacedByCustomXml. Serialized as `w:displacedByCustomXml` */
    get displacedByCustomXml(): DisplacedByCustomXmlValues | undefined;
    set displacedByCustomXml(v: DisplacedByCustomXmlValues | undefined);
    /** Annotation Identifier. Serialized as `w:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
}
/** Vertically Merged/Split Table Cells. Serialized as `w:cellMerge` */
export declare class CellMerge extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** vMerge. Serialized as `w:vMerge` */
    get verticalMerge(): VerticalMergeRevisionValues | undefined;
    set verticalMerge(v: VerticalMergeRevisionValues | undefined);
    /** vMergeOrig. Serialized as `w:vMergeOrig` */
    get verticalMergeOriginal(): VerticalMergeRevisionValues | undefined;
    set verticalMergeOriginal(v: VerticalMergeRevisionValues | undefined);
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
/** Move Destination Paragraph. Serialized as `w:moveTo` */
export declare class MoveTo extends TrackChangeType {
    static _Q: string;
}
/** Move Source Paragraph. Serialized as `w:moveFrom` */
export declare class MoveFrom extends TrackChangeType {
    static _Q: string;
}
/** Deleted Paragraph. Serialized as `w:del` */
export declare class Deleted extends TrackChangeType {
    static _Q: string;
}
/** Inserted Paragraph. Serialized as `w:ins` */
export declare class Inserted extends TrackChangeType {
    static _Q: string;
}
/** Defines the CustomXmlMoveToRangeStart Class. Serialized as `w:customXmlMoveToRangeStart` */
export declare class CustomXmlMoveToRangeStart extends TrackChangeType {
    static _Q: string;
}
/** Defines the CustomXmlMoveFromRangeStart Class. Serialized as `w:customXmlMoveFromRangeStart` */
export declare class CustomXmlMoveFromRangeStart extends TrackChangeType {
    static _Q: string;
}
/** Defines the CustomXmlDelRangeStart Class. Serialized as `w:customXmlDelRangeStart` */
export declare class CustomXmlDelRangeStart extends TrackChangeType {
    static _Q: string;
}
/** Defines the CustomXmlInsRangeStart Class. Serialized as `w:customXmlInsRangeStart` */
export declare class CustomXmlInsRangeStart extends TrackChangeType {
    static _Q: string;
}
/** Table Cell Deletion. Serialized as `w:cellDel` */
export declare class CellDeletion extends TrackChangeType {
    static _Q: string;
}
/** Table Cell Insertion. Serialized as `w:cellIns` */
export declare class CellInsertion extends TrackChangeType {
    static _Q: string;
}
export declare function initWordprocessingNamespace(): {
    prefix: string;
    xmlns: string;
};
