import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { OxmlPartRootElement } from '../../framework/OxmlPartRootElement';
import { OxmlLeafTextElement } from '../../framework/OxmlLeafTextElement';
import { OxmlAttr } from '../../framework/OxmlAttr';
import { OxmlType } from '../../framework/OxmlType';
import { StringValue } from '../../framework/types/StringValue';
import { BooleanValue } from '../../framework/types/BooleanValue';
import { Int32Value } from '../../framework/types/Int32Value';
import { UInt32Value } from '../../framework/types/UInt32Value';
import { Int64Value } from '../../framework/types/Int64Value';
import { ByteValue } from '../../framework/types/ByteValue';
import { HexBinaryValue } from '../../framework/types/HexBinaryValue';
import { SByteValue } from '../../framework/types/SByteValue';
import { ImageProperties as A14ImageProperties } from '../Office2010/Drawing';
import { UseLocalDpi as A14UseLocalDpi } from '../Office2010/Drawing';
import { WebVideoProperty as Wp15WebVideoProperty } from '../Office2013/Word/Drawing';
import { SVGBlip as AsvgSVGBlip } from '../Office2019/Drawing/SVG';
import { PictureAttributionSourceURL as A1611PictureAttributionSourceURL } from '../Office2019/Drawing/a1611';
import { OEmbed as WoeOEmbed } from '../Office/Word/Y2020/OEmbed';
import { OEmbedShared as AoeOEmbedShared } from '../Office/Drawing/Y2021/OEmbed';
import { CameraTool as A14CameraTool } from '../Office2010/Drawing';
import { SignatureLine as A15SignatureLine } from '../Office2013/Drawing';
import { ObjectProperties as A15ObjectProperties } from '../Office2013/Drawing';
import { LiveFeedProperties as AlfLiveFeedProperties } from '../Office2021/Drawing/Livefeed';
import { ImageFormula as AifImageFormula } from '../Office/Drawing/Y2022/ImageFormula';
import { CompatExtension as A14CompatExtension } from '../Office2010/Drawing';
import { BackgroundProperties as A15BackgroundProperties } from '../Office2013/Drawing';
import { CreationId as A16CreationId } from '../Office2016/Drawing';
import { PredecessorDrawingElementReference as A16PredecessorDrawingElementReference } from '../Office2016/Drawing';
import { Decorative as AdecDecorative } from '../Office2019/Drawing/adec';
import { ClassificationOutcome as AclshClassificationOutcome } from '../Office2021/Drawing/DocumentClassification';
import { ScriptLink as AslScriptLink } from '../Office/Drawing/Y2021/ScriptLink';
import { LineSketchStyleProperties as AskLineSketchStyleProperties } from '../Office2021/Drawing/SketchyShapes';
import { HyperlinkColor as AhypHyperlinkColor } from '../Office2019/Drawing/HyperLinkColor';
import { NonVisualDrawingProperties as Dgm14NonVisualDrawingProperties } from '../Office2010/Drawing/Diagram';
import { DataModelExtensionBlock as DspDataModelExtensionBlock } from '../Office/Drawing';
import { RecolorImages as Dgm14RecolorImages } from '../Office2010/Drawing/Diagram';
import { ThemeFamily as Thm15ThemeFamily } from '../Office2013/Theme';
import { NonVisualGroupProperties as A15NonVisualGroupProperties } from '../Office2013/Drawing';
import { GvmlContentPart as A14GvmlContentPart } from '../Office2010/Drawing';
import { IsCanvas as A14IsCanvas } from '../Office2010/Drawing';
import { HiddenFillProperties as A14HiddenFillProperties } from '../Office2010/Drawing';
import { HiddenLineProperties as A14HiddenLineProperties } from '../Office2010/Drawing';
import { HiddenEffectsProperties as A14HiddenEffectsProperties } from '../Office2010/Drawing';
import { HiddenScene3D as A14HiddenScene3D } from '../Office2010/Drawing';
import { HiddenShape3D as A14HiddenShape3D } from '../Office2010/Drawing';
import { ShadowObscured as A14ShadowObscured } from '../Office2010/Drawing';
import { TextMath as A14TextMath } from '../Office2010/Drawing';
import { ConnectableReferences as A16ConnectableReferences } from '../Office2016/Drawing';
import { RowIdIdentifier as A16RowIdIdentifier } from '../Office2016/Drawing';
import { ColIdIdentifier as A16ColIdIdentifier } from '../Office2016/Drawing';
import { Drawing as DspDrawing } from '../Office/Drawing';
import { ColorsDefinition as DgmColorsDefinition } from '../Drawing/Diagrams';
import { ColorsDefinitionHeader as DgmColorsDefinitionHeader } from '../Drawing/Diagrams';
import { ColorsDefinitionHeaderList as DgmColorsDefinitionHeaderList } from '../Drawing/Diagrams';
import { DataModelRoot as DgmDataModelRoot } from '../Drawing/Diagrams';
import { LayoutDefinition as DgmLayoutDefinition } from '../Drawing/Diagrams';
import { LayoutDefinitionHeader as DgmLayoutDefinitionHeader } from '../Drawing/Diagrams';
import { LayoutDefinitionHeaderList as DgmLayoutDefinitionHeaderList } from '../Drawing/Diagrams';
import { RelationshipIds as DgmRelationshipIds } from '../Drawing/Diagrams';
import { StyleDefinition as DgmStyleDefinition } from '../Drawing/Diagrams';
import { StyleDefinitionHeader as DgmStyleDefinitionHeader } from '../Drawing/Diagrams';
import { StyleDefinitionHeaderList as DgmStyleDefinitionHeaderList } from '../Drawing/Diagrams';
import { ShapeProperties as Dgm1612ShapeProperties } from '../Office2019/Drawing/Diagram12';
import { TextListStyleType as Dgm1612TextListStyleType } from '../Office2019/Drawing/Diagram12';
import { NumberDiagramInfoList as Dgm1611NumberDiagramInfoList } from '../Office2019/Drawing/Diagram11';
import { ChartSpace as CChartSpace } from '../Drawing/Charts';
import { UserShapes as CUserShapes } from '../Drawing/Charts';
import { ChartReference as CChartReference } from '../Drawing/Charts';
import { DataDisplayOptions16 as C16r3DataDisplayOptions16 } from '../Office2019/Drawing/Chart';
import { PivotSource as C15PivotSource } from '../Office2013/Drawing/Chart';
import { NumberingFormat as C15NumberingFormat } from '../Office2013/Drawing/Chart';
import { ShapeProperties as C15ShapeProperties } from '../Office2013/Drawing/Chart';
import { Layout as C15Layout } from '../Office2013/Drawing/Chart';
import { FullReference as C15FullReference } from '../Office2013/Drawing/Chart';
import { LevelReference as C15LevelReference } from '../Office2013/Drawing/Chart';
import { FormulaReference as C15FormulaReference } from '../Office2013/Drawing/Chart';
import { FilteredSeriesTitle as C15FilteredSeriesTitle } from '../Office2013/Drawing/Chart';
import { FilteredCategoryTitle as C15FilteredCategoryTitle } from '../Office2013/Drawing/Chart';
import { FilteredAreaSeries as C15FilteredAreaSeries } from '../Office2013/Drawing/Chart';
import { FilteredBarSeries as C15FilteredBarSeries } from '../Office2013/Drawing/Chart';
import { FilteredBubbleSeries as C15FilteredBubbleSeries } from '../Office2013/Drawing/Chart';
import { FilteredLineSeriesExtension as C15FilteredLineSeriesExtension } from '../Office2013/Drawing/Chart';
import { FilteredPieSeries as C15FilteredPieSeries } from '../Office2013/Drawing/Chart';
import { FilteredRadarSeries as C15FilteredRadarSeries } from '../Office2013/Drawing/Chart';
import { FilteredScatterSeries as C15FilteredScatterSeries } from '../Office2013/Drawing/Chart';
import { FilteredSurfaceSeries as C15FilteredSurfaceSeries } from '../Office2013/Drawing/Chart';
import { DataLabelsRange as C15DataLabelsRange } from '../Office2013/Drawing/Chart';
import { CategoryFilterExceptions as C15CategoryFilterExceptions } from '../Office2013/Drawing/Chart';
import { DataLabelFieldTable as C15DataLabelFieldTable } from '../Office2013/Drawing/Chart';
import { ExceptionForSave as C15ExceptionForSave } from '../Office2013/Drawing/Chart';
import { ShowDataLabelsRange as C15ShowDataLabelsRange } from '../Office2013/Drawing/Chart';
import { ChartText as C15ChartText } from '../Office2013/Drawing/Chart';
import { ShowLeaderLines as C15ShowLeaderLines } from '../Office2013/Drawing/Chart';
import { LeaderLines as C15LeaderLines } from '../Office2013/Drawing/Chart';
import { AutoGeneneratedCategories as C15AutoGeneneratedCategories } from '../Office2013/Drawing/Chart';
import { PivotOptions as C14PivotOptions } from '../Office2010/Drawing/Charts';
import { SketchOptions as C14SketchOptions } from '../Office2010/Drawing/Charts';
import { InvertSolidFillFormat as C14InvertSolidFillFormat } from '../Office2010/Drawing/Charts';
import { Style as C14Style } from '../Office2010/Drawing/Charts';
import { ContentPart as Cdr14ContentPart } from '../Office2010/Drawing/ChartDrawing';
import { LegacyDrawing as CompLegacyDrawing } from '../Drawing/LegacyCompatibility';
import { LockedCanvas as LcLockedCanvas } from '../Drawing/LockedCanvas';
import { Inline as WpInline } from '../Drawing/Wordprocessing';
import { Anchor as WpAnchor } from '../Drawing/Wordprocessing';
import { PercentagePositionHeightOffset as Wp14PercentagePositionHeightOffset } from '../Office2010/Word/Drawing';
import { PercentagePositionVerticalOffset as Wp14PercentagePositionVerticalOffset } from '../Office2010/Word/Drawing';
import { RelativeWidth as Wp14RelativeWidth } from '../Office2010/Word/Drawing';
import { RelativeHeight as Wp14RelativeHeight } from '../Office2010/Word/Drawing';
import { Picture as PicPicture } from '../Drawing/Pictures';
import { ShapeStyle as Pic14ShapeStyle } from '../Office2010/Drawing/Pictures';
import { OfficeArtExtensionList as Pic14OfficeArtExtensionList } from '../Office2010/Drawing/Pictures';
import { WorksheetDrawing as XdrWorksheetDrawing } from '../Drawing/Spreadsheet';
import { ContentPart as XdrContentPart } from '../Drawing/Spreadsheet';
import { ContentPart as Xdr14ContentPart } from '../Office2010/Excel/Drawing';
import { CommentAuthorMonikerList as PcCommentAuthorMonikerList } from '../Office2016/Presentation/Command';
import { CommentMonikerList as PcCommentMonikerList } from '../Office2016/Presentation/Command';
import { StringTagMonikerList as PcStringTagMonikerList } from '../Office2016/Presentation/Command';
import { CustomShowMonikerList as PcCustomShowMonikerList } from '../Office2016/Presentation/Command';
import { DocumentMonikerList as PcDocumentMonikerList } from '../Office2016/Presentation/Command';
import { SectionMonikerList as PcSectionMonikerList } from '../Office2016/Presentation/Command';
import { SlideBaseMonikerList as PcSlideBaseMonikerList } from '../Office2016/Presentation/Command';
import { SlideLayoutMonikerList as PcSlideLayoutMonikerList } from '../Office2016/Presentation/Command';
import { MainMasterMonikerList as PcMainMasterMonikerList } from '../Office2016/Presentation/Command';
import { SlideMonikerList as PcSlideMonikerList } from '../Office2016/Presentation/Command';
import { SlidePosMonikerList as PcSlidePosMonikerList } from '../Office2016/Presentation/Command';
import { NotesMonikerList as PcNotesMonikerList } from '../Office2016/Presentation/Command';
import { NotesTextMonikerList as PcNotesTextMonikerList } from '../Office2016/Presentation/Command';
import { NotesMasterMonikerList as PcNotesMasterMonikerList } from '../Office2016/Presentation/Command';
import { HandoutMonikerList as PcHandoutMonikerList } from '../Office2016/Presentation/Command';
import { AnimEffectMkLstAnimationEffectMonikerList as PcAnimEffectMkLstAnimationEffectMonikerList } from '../Office2016/Presentation/Command';
import { AnimEffectParentMkLstAnimationEffectMonikerList as PcAnimEffectParentMkLstAnimationEffectMonikerList } from '../Office2016/Presentation/Command';
import { OsfTaskPaneAppMonikerList as PcOsfTaskPaneAppMonikerList } from '../Office2016/Presentation/Command';
import { SummaryZoomMonikerList as PcSummaryZoomMonikerList } from '../Office2016/Presentation/Command';
import { SectionLinkObjMonikerList as PcSectionLinkObjMonikerList } from '../Office2016/Presentation/Command';
import { DesignerTagMonikerList as PcDesignerTagMonikerList } from '../Office2016/Presentation/Command';
import { CustomXmlPartMonikerList as PcCustomXmlPartMonikerList } from '../Office2016/Presentation/Command';
import { CommentAuthorList as PCommentAuthorList } from '../Presentation';
import { CommentList as PCommentList } from '../Presentation';
import { OleObject as POleObject } from '../Presentation';
import { Presentation as PPresentation } from '../Presentation';
import { PresentationProperties as PPresentationProperties } from '../Presentation';
import { Slide as PSlide } from '../Presentation';
import { SlideLayout as PSlideLayout } from '../Presentation';
import { SlideMaster as PSlideMaster } from '../Presentation';
import { HandoutMaster as PHandoutMaster } from '../Presentation';
import { NotesMaster as PNotesMaster } from '../Presentation';
import { NotesSlide as PNotesSlide } from '../Presentation';
import { SlideSyncProperties as PSlideSyncProperties } from '../Presentation';
import { TagList as PTagList } from '../Presentation';
import { ViewProperties as PViewProperties } from '../Presentation';
import { ContentPart as PContentPart } from '../Presentation';
import { AuthorList as P188AuthorList } from '../Office2021/PowerPoint/Comment';
import { CommentList as P188CommentList } from '../Office2021/PowerPoint/Comment';
import { CommentRelationship as P188CommentRelationship } from '../Office2021/PowerPoint/Comment';
import { TaskHistoryDetails as P1912TaskHistoryDetails } from '../Office2021/PowerPoint/Tasks';
import { TextBodyPackage as OacTextBodyPackage } from '../Office2016/Drawing/Command';
import { GroupCommand as OacGroupCommand } from '../Office2016/Drawing/Command';
import { ImgDataImgData as OacImgDataImgData } from '../Office2016/Drawing/Command';
import { OrigImgDataImgData as OacOrigImgDataImgData } from '../Office2016/Drawing/Command';
import { ImgLink as OacImgLink } from '../Office2016/Drawing/Command';
import { DrawingMonikerList as OacDrawingMonikerList } from '../Office2016/Drawing/Command';
import { DocumentContextMonikerList as OacDocumentContextMonikerList } from '../Office2016/Drawing/Command';
import { GraphicParentMonikerList as OacGraphicParentMonikerList } from '../Office2016/Drawing/Command';
import { DeMkLstDrawingElementMonikerList as OacDeMkLstDrawingElementMonikerList } from '../Office2016/Drawing/Command';
import { DeMasterMkLstDrawingElementMonikerList as OacDeMasterMkLstDrawingElementMonikerList } from '../Office2016/Drawing/Command';
import { ShapeMonikerList as OacShapeMonikerList } from '../Office2016/Drawing/Command';
import { GroupShapeMonikerList as OacGroupShapeMonikerList } from '../Office2016/Drawing/Command';
import { GraphicFrameMonikerList as OacGraphicFrameMonikerList } from '../Office2016/Drawing/Command';
import { ConnectorMonikerList as OacConnectorMonikerList } from '../Office2016/Drawing/Command';
import { PictureMonikerList as OacPictureMonikerList } from '../Office2016/Drawing/Command';
import { InkMonikerList as OacInkMonikerList } from '../Office2016/Drawing/Command';
import { TextBodyMonikerList as OacTextBodyMonikerList } from '../Office2016/Drawing/Command';
import { TextCharRangeMonikerList as OacTextCharRangeMonikerList } from '../Office2016/Drawing/Command';
import { HyperlinkMonikerList as OacHyperlinkMonikerList } from '../Office2016/Drawing/Command';
import { Model3DMonikerList as OacModel3DMonikerList } from '../Office2016/Drawing/Command';
import { ViewSelectionStgList as OacViewSelectionStgList } from '../Office2016/Drawing/Command';
import { EditorSelectionStgList as OacEditorSelectionStgList } from '../Office2016/Drawing/Command';
import { DrawingSelectionStgList as OacDrawingSelectionStgList } from '../Office2016/Drawing/Command';
import { TableMonikerList as OacTableMonikerList } from '../Office2016/Drawing/Command';
import { TableCellMonikerList as OacTableCellMonikerList } from '../Office2016/Drawing/Command';
import { TableRowMonikerList as OacTableRowMonikerList } from '../Office2016/Drawing/Command';
import { TableColumnMonikerList as OacTableColumnMonikerList } from '../Office2016/Drawing/Command';
import { Ink as InkmlInk } from '../InkML';
import { OneOf as EmmaOneOf } from '../EMMA';
import { Group as EmmaGroup } from '../EMMA';
import { Sequence as EmmaSequence } from '../EMMA';
import { EndPoint as EmmaEndPoint } from '../EMMA';
import { EndPointInfo as EmmaEndPointInfo } from '../EMMA';
import { Info as EmmaInfo } from '../EMMA';
import { Grammar as EmmaGrammar } from '../EMMA';
import { DerivedFrom as EmmaDerivedFrom } from '../EMMA';
import { Node as EmmaNode } from '../EMMA';
import { Arc as EmmaArc } from '../EMMA';
import { Lattice as EmmaLattice } from '../EMMA';
import { Literal as EmmaLiteral } from '../EMMA';
import { Interpretation as EmmaInterpretation } from '../EMMA';
import { GroupInfo as EmmaGroupInfo } from '../EMMA';
import { Derivation as EmmaDerivation } from '../EMMA';
import { Model as EmmaModel } from '../EMMA';
import { Emma as EmmaEmma } from '../EMMA';
import { ContextNode as MsinkContextNode } from '../Office2010/Ink';
import { PresetTransition as P15PresetTransition } from '../Office2013/PowerPoint';
import { PresenceInfo as P15PresenceInfo } from '../Office2013/PowerPoint';
import { ThreadingInfo as P15ThreadingInfo } from '../Office2013/PowerPoint';
import { SlideGuideList as P15SlideGuideList } from '../Office2013/PowerPoint';
import { NotesGuideList as P15NotesGuideList } from '../Office2013/PowerPoint';
import { ChartTrackingReferenceBased as P15ChartTrackingReferenceBased } from '../Office2013/PowerPoint';
import { NonVisualContentPartProperties as P14NonVisualContentPartProperties } from '../Office2010/PowerPoint';
import { Transform2D as P14Transform2D } from '../Office2010/PowerPoint';
import { ExtensionListModify as P14ExtensionListModify } from '../Office2010/PowerPoint';
import { Media as P14Media } from '../Office2010/PowerPoint';
import { VortexTransition as P14VortexTransition } from '../Office2010/PowerPoint';
import { SwitchTransition as P14SwitchTransition } from '../Office2010/PowerPoint';
import { FlipTransition as P14FlipTransition } from '../Office2010/PowerPoint';
import { RippleTransition as P14RippleTransition } from '../Office2010/PowerPoint';
import { HoneycombTransition as P14HoneycombTransition } from '../Office2010/PowerPoint';
import { PrismTransition as P14PrismTransition } from '../Office2010/PowerPoint';
import { DoorsTransition as P14DoorsTransition } from '../Office2010/PowerPoint';
import { WindowTransition as P14WindowTransition } from '../Office2010/PowerPoint';
import { FerrisTransition as P14FerrisTransition } from '../Office2010/PowerPoint';
import { GalleryTransition as P14GalleryTransition } from '../Office2010/PowerPoint';
import { ConveyorTransition as P14ConveyorTransition } from '../Office2010/PowerPoint';
import { PanTransition as P14PanTransition } from '../Office2010/PowerPoint';
import { GlitterTransition as P14GlitterTransition } from '../Office2010/PowerPoint';
import { WarpTransition as P14WarpTransition } from '../Office2010/PowerPoint';
import { FlythroughTransition as P14FlythroughTransition } from '../Office2010/PowerPoint';
import { FlashTransition as P14FlashTransition } from '../Office2010/PowerPoint';
import { ShredTransition as P14ShredTransition } from '../Office2010/PowerPoint';
import { RevealTransition as P14RevealTransition } from '../Office2010/PowerPoint';
import { WheelReverseTransition as P14WheelReverseTransition } from '../Office2010/PowerPoint';
import { BookmarkTarget as P14BookmarkTarget } from '../Office2010/PowerPoint';
import { SectionProperties as P14SectionProperties } from '../Office2010/PowerPoint';
import { SectionList as P14SectionList } from '../Office2010/PowerPoint';
import { BrowseMode as P14BrowseMode } from '../Office2010/PowerPoint';
import { LaserColor as P14LaserColor } from '../Office2010/PowerPoint';
import { DefaultImageDpi as P14DefaultImageDpi } from '../Office2010/PowerPoint';
import { DiscardImageEditData as P14DiscardImageEditData } from '../Office2010/PowerPoint';
import { ShowMediaControls as P14ShowMediaControls } from '../Office2010/PowerPoint';
import { LaserTraceList as P14LaserTraceList } from '../Office2010/PowerPoint';
import { CreationId as P14CreationId } from '../Office2010/PowerPoint';
import { ModificationId as P14ModificationId } from '../Office2010/PowerPoint';
import { ShowEventRecordList as P14ShowEventRecordList } from '../Office2010/PowerPoint';
import { SchemaLibrary as SlSchemaLibrary } from '../CustomXmlSchemaReferences';
import { MathProperties as MMathProperties } from '../Math';
import { Paragraph as MParagraph } from '../Math';
import { OfficeMath as MOfficeMath } from '../Math';
import { Recipients as WRecipients } from '../Wordprocessing';
import { TextBoxContent as WTextBoxContent } from '../Wordprocessing';
import { Comments as WComments } from '../Wordprocessing';
import { Footnotes as WFootnotes } from '../Wordprocessing';
import { Endnotes as WEndnotes } from '../Wordprocessing';
import { Header as WHeader } from '../Wordprocessing';
import { Footer as WFooter } from '../Wordprocessing';
import { Settings as WSettings } from '../Wordprocessing';
import { WebSettings as WWebSettings } from '../Wordprocessing';
import { Fonts as WFonts } from '../Wordprocessing';
import { Numbering as WNumbering } from '../Wordprocessing';
import { Styles as WStyles } from '../Wordprocessing';
import { Document as WDocument } from '../Wordprocessing';
import { GlossaryDocument as WGlossaryDocument } from '../Wordprocessing';
import { Color as W15Color } from '../Office2013/Word';
import { DataBinding as W15DataBinding } from '../Office2013/Word';
import { Appearance as W15Appearance } from '../Office2013/Word';
import { CommentsEx as W15CommentsEx } from '../Office2013/Word';
import { People as W15People } from '../Office2013/Word';
import { SdtRepeatedSection as W15SdtRepeatedSection } from '../Office2013/Word';
import { SdtRepeatedSectionItem as W15SdtRepeatedSectionItem } from '../Office2013/Word';
import { ChartTrackingRefBased as W15ChartTrackingRefBased } from '../Office2013/Word';
import { DefaultCollapsed as W15DefaultCollapsed } from '../Office2013/Word';
import { PersistentDocumentId as W15PersistentDocumentId } from '../Office2013/Word';
import { FootnoteColumns as W15FootnoteColumns } from '../Office2013/Word';
import { WebExtensionLinked as W15WebExtensionLinked } from '../Office2013/Word';
import { WebExtensionCreated as W15WebExtensionCreated } from '../Office2013/Word';
import { ContentPart as W14ContentPart } from '../Office2010/Word';
import { DocumentId as W14DocumentId } from '../Office2010/Word';
import { ConflictMode as W14ConflictMode } from '../Office2010/Word';
import { CustomXmlConflictInsertionRangeStart as W14CustomXmlConflictInsertionRangeStart } from '../Office2010/Word';
import { CustomXmlConflictInsertionRangeEnd as W14CustomXmlConflictInsertionRangeEnd } from '../Office2010/Word';
import { CustomXmlConflictDeletionRangeStart as W14CustomXmlConflictDeletionRangeStart } from '../Office2010/Word';
import { CustomXmlConflictDeletionRangeEnd as W14CustomXmlConflictDeletionRangeEnd } from '../Office2010/Word';
import { DiscardImageEditingData as W14DiscardImageEditingData } from '../Office2010/Word';
import { DefaultImageDpi as W14DefaultImageDpi } from '../Office2010/Word';
import { EntityPickerEmpty as W14EntityPickerEmpty } from '../Office2010/Word';
import { SdtContentCheckBox as W14SdtContentCheckBox } from '../Office2010/Word';
import { Shape as VShape } from '../Vml';
import { Shapetype as VShapetype } from '../Vml';
import { Group as VGroup } from '../Vml';
import { Background as VBackground } from '../Vml';
import { Fill as VFill } from '../Vml';
import { Formulas as VFormulas } from '../Vml';
import { ShapeHandles as VShapeHandles } from '../Vml';
import { ImageData as VImageData } from '../Vml';
import { Path as VPath } from '../Vml';
import { TextBox as VTextBox } from '../Vml';
import { Shadow as VShadow } from '../Vml';
import { Stroke as VStroke } from '../Vml';
import { TextPath as VTextPath } from '../Vml';
import { Arc as VArc } from '../Vml';
import { Curve as VCurve } from '../Vml';
import { ImageFile as VImageFile } from '../Vml';
import { Line as VLine } from '../Vml';
import { Oval as VOval } from '../Vml';
import { PolyLine as VPolyLine } from '../Vml';
import { Rectangle as VRectangle } from '../Vml';
import { RoundRectangle as VRoundRectangle } from '../Vml';
import { ShapeDefaults as OShapeDefaults } from '../Vml/Office';
import { ShapeLayout as OShapeLayout } from '../Vml/Office';
import { SignatureLine as OSignatureLine } from '../Vml/Office';
import { Ink as OInk } from '../Vml/Office';
import { Diagram as ODiagram } from '../Vml/Office';
import { Skew as OSkew } from '../Vml/Office';
import { Extrusion as OExtrusion } from '../Vml/Office';
import { Callout as OCallout } from '../Vml/Office';
import { Lock as OLock } from '../Vml/Office';
import { OleObject as OOleObject } from '../Vml/Office';
import { Complex as OComplex } from '../Vml/Office';
import { LeftStroke as OLeftStroke } from '../Vml/Office';
import { TopStroke as OTopStroke } from '../Vml/Office';
import { RightStroke as ORightStroke } from '../Vml/Office';
import { BottomStroke as OBottomStroke } from '../Vml/Office';
import { ColumnStroke as OColumnStroke } from '../Vml/Office';
import { ClipPath as OClipPath } from '../Vml/Office';
import { FillExtendedProperties as OFillExtendedProperties } from '../Vml/Office';
import { TopBorder as W10TopBorder } from '../Vml/Wordprocessing';
import { LeftBorder as W10LeftBorder } from '../Vml/Wordprocessing';
import { RightBorder as W10RightBorder } from '../Vml/Wordprocessing';
import { BottomBorder as W10BottomBorder } from '../Vml/Wordprocessing';
import { TextWrap as W10TextWrap } from '../Vml/Wordprocessing';
import { AnchorLock as W10AnchorLock } from '../Vml/Wordprocessing';
import { ClientData as XvmlClientData } from '../Vml/Spreadsheet';
import { InkAnnotationFlag as PvmlInkAnnotationFlag } from '../Vml/Presentation';
import { TextData as PvmlTextData } from '../Vml/Presentation';
import { WordprocessingCanvas as WpcWordprocessingCanvas } from '../Office2010/Word/DrawingCanvas';
import { WordprocessingGroup as WpgWordprocessingGroup } from '../Office2010/Word/DrawingGroup';
import { WordprocessingShape as WpsWordprocessingShape } from '../Office2010/Word/DrawingShape';
import { Slicer as SleSlicer } from '../Office2010/Drawing/Slicer';
import { ColorStyle as CsColorStyle } from '../Office2013/Drawing/ChartStyle';
import { ChartStyle as CsChartStyle } from '../Office2013/Drawing/ChartStyle';
import { WebExtension as WeWebExtension } from '../Office2013/WebExtension';
import { WebExtensionReference as WeWebExtensionReference } from '../Office2013/WebExtension';
import { TimeSlicer as TsleTimeSlicer } from '../Office2013/Drawing/TimeSlicer';


export enum FontCollectionIndexValues {
    /** Major Font. Serialized value: `major` */
    Major = 'major',
    /** Minor Font. Serialized value: `minor` */
    Minor = 'minor',
    /** None. Serialized value: `none` */
    None = 'none',
}

export const FontCollectionIndexValuesArray = [
    FontCollectionIndexValues.Major,
    FontCollectionIndexValues.Minor,
    FontCollectionIndexValues.None,
] as const;

export enum ColorSchemeIndexValues {
    /** Dark 1. Serialized value: `dk1` */
    Dark1 = 'dk1',
    /** Light 1. Serialized value: `lt1` */
    Light1 = 'lt1',
    /** Dark 2. Serialized value: `dk2` */
    Dark2 = 'dk2',
    /** Light 2. Serialized value: `lt2` */
    Light2 = 'lt2',
    /** Accent 1. Serialized value: `accent1` */
    Accent1 = 'accent1',
    /** Accent 2. Serialized value: `accent2` */
    Accent2 = 'accent2',
    /** Accent 3. Serialized value: `accent3` */
    Accent3 = 'accent3',
    /** Accent 4. Serialized value: `accent4` */
    Accent4 = 'accent4',
    /** Accent 5. Serialized value: `accent5` */
    Accent5 = 'accent5',
    /** Accent 6. Serialized value: `accent6` */
    Accent6 = 'accent6',
    /** Hyperlink. Serialized value: `hlink` */
    Hyperlink = 'hlink',
    /** Followed Hyperlink. Serialized value: `folHlink` */
    FollowedHyperlink = 'folHlink',
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

export enum SystemColorValues {
    /** Scroll Bar System Color. Serialized value: `scrollBar` */
    ScrollBar = 'scrollBar',
    /** Background System Color. Serialized value: `background` */
    Background = 'background',
    /** Active Caption System Color. Serialized value: `activeCaption` */
    ActiveCaption = 'activeCaption',
    /** Inactive Caption System Color. Serialized value: `inactiveCaption` */
    InactiveCaption = 'inactiveCaption',
    /** Menu System Color. Serialized value: `menu` */
    Menu = 'menu',
    /** Window System Color. Serialized value: `window` */
    Window = 'window',
    /** Window Frame System Color. Serialized value: `windowFrame` */
    WindowFrame = 'windowFrame',
    /** Menu Text System Color. Serialized value: `menuText` */
    MenuText = 'menuText',
    /** Window Text System Color. Serialized value: `windowText` */
    WindowText = 'windowText',
    /** Caption Text System Color. Serialized value: `captionText` */
    CaptionText = 'captionText',
    /** Active Border System Color. Serialized value: `activeBorder` */
    ActiveBorder = 'activeBorder',
    /** Inactive Border System Color. Serialized value: `inactiveBorder` */
    InactiveBorder = 'inactiveBorder',
    /** Application Workspace System Color. Serialized value: `appWorkspace` */
    ApplicationWorkspace = 'appWorkspace',
    /** Highlight System Color. Serialized value: `highlight` */
    Highlight = 'highlight',
    /** Highlight Text System Color. Serialized value: `highlightText` */
    HighlightText = 'highlightText',
    /** Button Face System Color. Serialized value: `btnFace` */
    ButtonFace = 'btnFace',
    /** Button Shadow System Color. Serialized value: `btnShadow` */
    ButtonShadow = 'btnShadow',
    /** Gray Text System Color. Serialized value: `grayText` */
    GrayText = 'grayText',
    /** Button Text System Color. Serialized value: `btnText` */
    ButtonText = 'btnText',
    /** Inactive Caption Text System Color. Serialized value: `inactiveCaptionText` */
    InactiveCaptionText = 'inactiveCaptionText',
    /** Button Highlight System Color. Serialized value: `btnHighlight` */
    ButtonHighlight = 'btnHighlight',
    /** 3D Dark System Color. Serialized value: `3dDkShadow` */
    ThreeDDarkShadow = '3dDkShadow',
    /** 3D Light System Color. Serialized value: `3dLight` */
    ThreeDLight = '3dLight',
    /** Info Text System Color. Serialized value: `infoText` */
    InfoText = 'infoText',
    /** Info Back System Color. Serialized value: `infoBk` */
    InfoBack = 'infoBk',
    /** Hot Light System Color. Serialized value: `hotLight` */
    HotLight = 'hotLight',
    /** Gradient Active Caption System Color. Serialized value: `gradientActiveCaption` */
    GradientActiveCaption = 'gradientActiveCaption',
    /** Gradient Inactive Caption System Color. Serialized value: `gradientInactiveCaption` */
    GradientInactiveCaption = 'gradientInactiveCaption',
    /** Menu Highlight System Color. Serialized value: `menuHighlight` */
    MenuHighlight = 'menuHighlight',
    /** Menu Bar System Color. Serialized value: `menuBar` */
    MenuBar = 'menuBar',
}

export const SystemColorValuesArray = [
    SystemColorValues.ScrollBar,
    SystemColorValues.Background,
    SystemColorValues.ActiveCaption,
    SystemColorValues.InactiveCaption,
    SystemColorValues.Menu,
    SystemColorValues.Window,
    SystemColorValues.WindowFrame,
    SystemColorValues.MenuText,
    SystemColorValues.WindowText,
    SystemColorValues.CaptionText,
    SystemColorValues.ActiveBorder,
    SystemColorValues.InactiveBorder,
    SystemColorValues.ApplicationWorkspace,
    SystemColorValues.Highlight,
    SystemColorValues.HighlightText,
    SystemColorValues.ButtonFace,
    SystemColorValues.ButtonShadow,
    SystemColorValues.GrayText,
    SystemColorValues.ButtonText,
    SystemColorValues.InactiveCaptionText,
    SystemColorValues.ButtonHighlight,
    SystemColorValues.ThreeDDarkShadow,
    SystemColorValues.ThreeDLight,
    SystemColorValues.InfoText,
    SystemColorValues.InfoBack,
    SystemColorValues.HotLight,
    SystemColorValues.GradientActiveCaption,
    SystemColorValues.GradientInactiveCaption,
    SystemColorValues.MenuHighlight,
    SystemColorValues.MenuBar,
] as const;

export enum SchemeColorValues {
    /** Background Color 1. Serialized value: `bg1` */
    Background1 = 'bg1',
    /** Text Color 1. Serialized value: `tx1` */
    Text1 = 'tx1',
    /** Background Color 2. Serialized value: `bg2` */
    Background2 = 'bg2',
    /** Text Color 2. Serialized value: `tx2` */
    Text2 = 'tx2',
    /** Accent Color 1. Serialized value: `accent1` */
    Accent1 = 'accent1',
    /** Accent Color 2. Serialized value: `accent2` */
    Accent2 = 'accent2',
    /** Accent Color 3. Serialized value: `accent3` */
    Accent3 = 'accent3',
    /** Accent Color 4. Serialized value: `accent4` */
    Accent4 = 'accent4',
    /** Accent Color 5. Serialized value: `accent5` */
    Accent5 = 'accent5',
    /** Accent Color 6. Serialized value: `accent6` */
    Accent6 = 'accent6',
    /** Hyperlink Color. Serialized value: `hlink` */
    Hyperlink = 'hlink',
    /** Followed Hyperlink Color. Serialized value: `folHlink` */
    FollowedHyperlink = 'folHlink',
    /** Style Color. Serialized value: `phClr` */
    PhColor = 'phClr',
    /** Dark Color 1. Serialized value: `dk1` */
    Dark1 = 'dk1',
    /** Light Color 1. Serialized value: `lt1` */
    Light1 = 'lt1',
    /** Dark Color 2. Serialized value: `dk2` */
    Dark2 = 'dk2',
    /** Light Color 2. Serialized value: `lt2` */
    Light2 = 'lt2',
}

export const SchemeColorValuesArray = [
    SchemeColorValues.Background1,
    SchemeColorValues.Text1,
    SchemeColorValues.Background2,
    SchemeColorValues.Text2,
    SchemeColorValues.Accent1,
    SchemeColorValues.Accent2,
    SchemeColorValues.Accent3,
    SchemeColorValues.Accent4,
    SchemeColorValues.Accent5,
    SchemeColorValues.Accent6,
    SchemeColorValues.Hyperlink,
    SchemeColorValues.FollowedHyperlink,
    SchemeColorValues.PhColor,
    SchemeColorValues.Dark1,
    SchemeColorValues.Light1,
    SchemeColorValues.Dark2,
    SchemeColorValues.Light2,
] as const;

export enum RectangleAlignmentValues {
    /** Rectangle Alignment Enum ( Top Left ). Serialized value: `tl` */
    TopLeft = 'tl',
    /** Rectangle Alignment Enum ( Top ). Serialized value: `t` */
    Top = 't',
    /** Rectangle Alignment Enum ( Top Right ). Serialized value: `tr` */
    TopRight = 'tr',
    /** Rectangle Alignment Enum ( Left ). Serialized value: `l` */
    Left = 'l',
    /** Rectangle Alignment Enum ( Center ). Serialized value: `ctr` */
    Center = 'ctr',
    /** Rectangle Alignment Enum ( Right ). Serialized value: `r` */
    Right = 'r',
    /** Rectangle Alignment Enum ( Bottom Left ). Serialized value: `bl` */
    BottomLeft = 'bl',
    /** Rectangle Alignment Enum ( Bottom ). Serialized value: `b` */
    Bottom = 'b',
    /** Rectangle Alignment Enum ( Bottom Right ). Serialized value: `br` */
    BottomRight = 'br',
}

export const RectangleAlignmentValuesArray = [
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

export enum BlackWhiteModeValues {
    /** Color. Serialized value: `clr` */
    Color = 'clr',
    /** Automatic. Serialized value: `auto` */
    Auto = 'auto',
    /** Gray. Serialized value: `gray` */
    Gray = 'gray',
    /** Light Gray. Serialized value: `ltGray` */
    LightGray = 'ltGray',
    /** Inverse Gray. Serialized value: `invGray` */
    InvGray = 'invGray',
    /** Gray and White. Serialized value: `grayWhite` */
    GrayWhite = 'grayWhite',
    /** Black and Gray. Serialized value: `blackGray` */
    BlackGray = 'blackGray',
    /** Black and White. Serialized value: `blackWhite` */
    BlackWhite = 'blackWhite',
    /** Black. Serialized value: `black` */
    Black = 'black',
    /** White. Serialized value: `white` */
    White = 'white',
    /** Hidden. Serialized value: `hidden` */
    Hidden = 'hidden',
}

export const BlackWhiteModeValuesArray = [
    BlackWhiteModeValues.Color,
    BlackWhiteModeValues.Auto,
    BlackWhiteModeValues.Gray,
    BlackWhiteModeValues.LightGray,
    BlackWhiteModeValues.InvGray,
    BlackWhiteModeValues.GrayWhite,
    BlackWhiteModeValues.BlackGray,
    BlackWhiteModeValues.BlackWhite,
    BlackWhiteModeValues.Black,
    BlackWhiteModeValues.White,
    BlackWhiteModeValues.Hidden,
] as const;

export enum ChartBuildStepValues {
    /** Category. Serialized value: `category` */
    Category = 'category',
    /** Category Points. Serialized value: `ptInCategory` */
    CategoryPoints = 'ptInCategory',
    /** Series. Serialized value: `series` */
    Series = 'series',
    /** Series Points. Serialized value: `ptInSeries` */
    SeriesPoints = 'ptInSeries',
    /** All Points. Serialized value: `allPts` */
    AllPoints = 'allPts',
    /** Grid and Legend. Serialized value: `gridLegend` */
    GridLegend = 'gridLegend',
}

export const ChartBuildStepValuesArray = [
    ChartBuildStepValues.Category,
    ChartBuildStepValues.CategoryPoints,
    ChartBuildStepValues.Series,
    ChartBuildStepValues.SeriesPoints,
    ChartBuildStepValues.AllPoints,
    ChartBuildStepValues.GridLegend,
] as const;

export enum DiagramBuildStepValues {
    /** Shape. Serialized value: `sp` */
    Shape = 'sp',
    /** Background. Serialized value: `bg` */
    Background = 'bg',
}

export const DiagramBuildStepValuesArray = [
    DiagramBuildStepValues.Shape,
    DiagramBuildStepValues.Background,
] as const;

export enum AnimationBuildValues {
    /** Animate At Once. Serialized value: `allAtOnce` */
    AllAtOnce = 'allAtOnce',
}

export const AnimationBuildValuesArray = [
    AnimationBuildValues.AllAtOnce,
] as const;

export enum AnimationDiagramOnlyBuildValues {
    /** Elements One-by-One. Serialized value: `one` */
    One = 'one',
    /** Level One-by-One. Serialized value: `lvlOne` */
    LevelOne = 'lvlOne',
    /** Each Level at Once. Serialized value: `lvlAtOnce` */
    LevelAtOnce = 'lvlAtOnce',
}

export const AnimationDiagramOnlyBuildValuesArray = [
    AnimationDiagramOnlyBuildValues.One,
    AnimationDiagramOnlyBuildValues.LevelOne,
    AnimationDiagramOnlyBuildValues.LevelAtOnce,
] as const;

export enum AnimationChartOnlyBuildValues {
    /** Series. Serialized value: `series` */
    Series = 'series',
    /** Category. Serialized value: `category` */
    Category = 'category',
    /** Series Element. Serialized value: `seriesEl` */
    SeriesElement = 'seriesEl',
    /** Category Element. Serialized value: `categoryEl` */
    CategoryElement = 'categoryEl',
}

export const AnimationChartOnlyBuildValuesArray = [
    AnimationChartOnlyBuildValues.Series,
    AnimationChartOnlyBuildValues.Category,
    AnimationChartOnlyBuildValues.SeriesElement,
    AnimationChartOnlyBuildValues.CategoryElement,
] as const;

export enum PresetCameraValues {
    /** Legacy Oblique Top Left. Serialized value: `legacyObliqueTopLeft` */
    LegacyObliqueTopLeft = 'legacyObliqueTopLeft',
    /** Legacy Oblique Top. Serialized value: `legacyObliqueTop` */
    LegacyObliqueTop = 'legacyObliqueTop',
    /** Legacy Oblique Top Right. Serialized value: `legacyObliqueTopRight` */
    LegacyObliqueTopRight = 'legacyObliqueTopRight',
    /** Legacy Oblique Left. Serialized value: `legacyObliqueLeft` */
    LegacyObliqueLeft = 'legacyObliqueLeft',
    /** Legacy Oblique Front. Serialized value: `legacyObliqueFront` */
    LegacyObliqueFront = 'legacyObliqueFront',
    /** Legacy Oblique Right. Serialized value: `legacyObliqueRight` */
    LegacyObliqueRight = 'legacyObliqueRight',
    /** Legacy Oblique Bottom Left. Serialized value: `legacyObliqueBottomLeft` */
    LegacyObliqueBottomLeft = 'legacyObliqueBottomLeft',
    /** Legacy Oblique Bottom. Serialized value: `legacyObliqueBottom` */
    LegacyObliqueBottom = 'legacyObliqueBottom',
    /** Legacy Oblique Bottom Right. Serialized value: `legacyObliqueBottomRight` */
    LegacyObliqueBottomRight = 'legacyObliqueBottomRight',
    /** Legacy Perspective Top Left. Serialized value: `legacyPerspectiveTopLeft` */
    LegacyPerspectiveTopLeft = 'legacyPerspectiveTopLeft',
    /** Legacy Perspective Top. Serialized value: `legacyPerspectiveTop` */
    LegacyPerspectiveTop = 'legacyPerspectiveTop',
    /** Legacy Perspective Top Right. Serialized value: `legacyPerspectiveTopRight` */
    LegacyPerspectiveTopRight = 'legacyPerspectiveTopRight',
    /** Legacy Perspective Left. Serialized value: `legacyPerspectiveLeft` */
    LegacyPerspectiveLeft = 'legacyPerspectiveLeft',
    /** Legacy Perspective Front. Serialized value: `legacyPerspectiveFront` */
    LegacyPerspectiveFront = 'legacyPerspectiveFront',
    /** Legacy Perspective Right. Serialized value: `legacyPerspectiveRight` */
    LegacyPerspectiveRight = 'legacyPerspectiveRight',
    /** Legacy Perspective Bottom Left. Serialized value: `legacyPerspectiveBottomLeft` */
    LegacyPerspectiveBottomLeft = 'legacyPerspectiveBottomLeft',
    /** Legacy Perspective Bottom. Serialized value: `legacyPerspectiveBottom` */
    LegacyPerspectiveBottom = 'legacyPerspectiveBottom',
    /** Legacy Perspective Bottom Right. Serialized value: `legacyPerspectiveBottomRight` */
    LegacyPerspectiveBottomRight = 'legacyPerspectiveBottomRight',
    /** Orthographic Front. Serialized value: `orthographicFront` */
    OrthographicFront = 'orthographicFront',
    /** Isometric Top Up. Serialized value: `isometricTopUp` */
    IsometricTopUp = 'isometricTopUp',
    /** Isometric Top Down. Serialized value: `isometricTopDown` */
    IsometricTopDown = 'isometricTopDown',
    /** Isometric Bottom Up. Serialized value: `isometricBottomUp` */
    IsometricBottomUp = 'isometricBottomUp',
    /** Isometric Bottom Down. Serialized value: `isometricBottomDown` */
    IsometricBottomDown = 'isometricBottomDown',
    /** Isometric Left Up. Serialized value: `isometricLeftUp` */
    IsometricLeftUp = 'isometricLeftUp',
    /** Isometric Left Down. Serialized value: `isometricLeftDown` */
    IsometricLeftDown = 'isometricLeftDown',
    /** Isometric Right Up. Serialized value: `isometricRightUp` */
    IsometricRightUp = 'isometricRightUp',
    /** Isometric Right Down. Serialized value: `isometricRightDown` */
    IsometricRightDown = 'isometricRightDown',
    /** Isometric Off Axis 1 Left. Serialized value: `isometricOffAxis1Left` */
    IsometricOffAxis1Left = 'isometricOffAxis1Left',
    /** Isometric Off Axis 1 Right. Serialized value: `isometricOffAxis1Right` */
    IsometricOffAxis1Right = 'isometricOffAxis1Right',
    /** Isometric Off Axis 1 Top. Serialized value: `isometricOffAxis1Top` */
    IsometricOffAxis1Top = 'isometricOffAxis1Top',
    /** Isometric Off Axis 2 Left. Serialized value: `isometricOffAxis2Left` */
    IsometricOffAxis2Left = 'isometricOffAxis2Left',
    /** Isometric Off Axis 2 Right. Serialized value: `isometricOffAxis2Right` */
    IsometricOffAxis2Right = 'isometricOffAxis2Right',
    /** Isometric Off Axis 2 Top. Serialized value: `isometricOffAxis2Top` */
    IsometricOffAxis2Top = 'isometricOffAxis2Top',
    /** Isometric Off Axis 3 Left. Serialized value: `isometricOffAxis3Left` */
    IsometricOffAxis3Left = 'isometricOffAxis3Left',
    /** Isometric Off Axis 3 Right. Serialized value: `isometricOffAxis3Right` */
    IsometricOffAxis3Right = 'isometricOffAxis3Right',
    /** Isometric Off Axis 3 Bottom. Serialized value: `isometricOffAxis3Bottom` */
    IsometricOffAxis3Bottom = 'isometricOffAxis3Bottom',
    /** Isometric Off Axis 4 Left. Serialized value: `isometricOffAxis4Left` */
    IsometricOffAxis4Left = 'isometricOffAxis4Left',
    /** Isometric Off Axis 4 Right. Serialized value: `isometricOffAxis4Right` */
    IsometricOffAxis4Right = 'isometricOffAxis4Right',
    /** Isometric Off Axis 4 Bottom. Serialized value: `isometricOffAxis4Bottom` */
    IsometricOffAxis4Bottom = 'isometricOffAxis4Bottom',
    /** Oblique Top Left. Serialized value: `obliqueTopLeft` */
    ObliqueTopLeft = 'obliqueTopLeft',
    /** Oblique Top. Serialized value: `obliqueTop` */
    ObliqueTop = 'obliqueTop',
    /** Oblique Top Right. Serialized value: `obliqueTopRight` */
    ObliqueTopRight = 'obliqueTopRight',
    /** Oblique Left. Serialized value: `obliqueLeft` */
    ObliqueLeft = 'obliqueLeft',
    /** Oblique Right. Serialized value: `obliqueRight` */
    ObliqueRight = 'obliqueRight',
    /** Oblique Bottom Left. Serialized value: `obliqueBottomLeft` */
    ObliqueBottomLeft = 'obliqueBottomLeft',
    /** Oblique Bottom. Serialized value: `obliqueBottom` */
    ObliqueBottom = 'obliqueBottom',
    /** Oblique Bottom Right. Serialized value: `obliqueBottomRight` */
    ObliqueBottomRight = 'obliqueBottomRight',
    /** Perspective Front. Serialized value: `perspectiveFront` */
    PerspectiveFront = 'perspectiveFront',
    /** Perspective Left. Serialized value: `perspectiveLeft` */
    PerspectiveLeft = 'perspectiveLeft',
    /** Perspective Right. Serialized value: `perspectiveRight` */
    PerspectiveRight = 'perspectiveRight',
    /** Orthographic Above. Serialized value: `perspectiveAbove` */
    PerspectiveAbove = 'perspectiveAbove',
    /** Perspective Below. Serialized value: `perspectiveBelow` */
    PerspectiveBelow = 'perspectiveBelow',
    /** Perspective Above Left Facing. Serialized value: `perspectiveAboveLeftFacing` */
    PerspectiveAboveLeftFacing = 'perspectiveAboveLeftFacing',
    /** Perspective Above Right Facing. Serialized value: `perspectiveAboveRightFacing` */
    PerspectiveAboveRightFacing = 'perspectiveAboveRightFacing',
    /** Perspective Contrasting Left Facing. Serialized value: `perspectiveContrastingLeftFacing` */
    PerspectiveContrastingLeftFacing = 'perspectiveContrastingLeftFacing',
    /** Perspective Contrasting Right Facing. Serialized value: `perspectiveContrastingRightFacing` */
    PerspectiveContrastingRightFacing = 'perspectiveContrastingRightFacing',
    /** Perspective Heroic Left Facing. Serialized value: `perspectiveHeroicLeftFacing` */
    PerspectiveHeroicLeftFacing = 'perspectiveHeroicLeftFacing',
    /** Perspective Heroic Right Facing. Serialized value: `perspectiveHeroicRightFacing` */
    PerspectiveHeroicRightFacing = 'perspectiveHeroicRightFacing',
    /** Perspective Heroic Extreme Left Facing. Serialized value: `perspectiveHeroicExtremeLeftFacing` */
    PerspectiveHeroicExtremeLeftFacing = 'perspectiveHeroicExtremeLeftFacing',
    /** Perspective Heroic Extreme Right Facing. Serialized value: `perspectiveHeroicExtremeRightFacing` */
    PerspectiveHeroicExtremeRightFacing = 'perspectiveHeroicExtremeRightFacing',
    /** Perspective Relaxed. Serialized value: `perspectiveRelaxed` */
    PerspectiveRelaxed = 'perspectiveRelaxed',
    /** Perspective Relaxed Moderately. Serialized value: `perspectiveRelaxedModerately` */
    PerspectiveRelaxedModerately = 'perspectiveRelaxedModerately',
}

export const PresetCameraValuesArray = [
    PresetCameraValues.LegacyObliqueTopLeft,
    PresetCameraValues.LegacyObliqueTop,
    PresetCameraValues.LegacyObliqueTopRight,
    PresetCameraValues.LegacyObliqueLeft,
    PresetCameraValues.LegacyObliqueFront,
    PresetCameraValues.LegacyObliqueRight,
    PresetCameraValues.LegacyObliqueBottomLeft,
    PresetCameraValues.LegacyObliqueBottom,
    PresetCameraValues.LegacyObliqueBottomRight,
    PresetCameraValues.LegacyPerspectiveTopLeft,
    PresetCameraValues.LegacyPerspectiveTop,
    PresetCameraValues.LegacyPerspectiveTopRight,
    PresetCameraValues.LegacyPerspectiveLeft,
    PresetCameraValues.LegacyPerspectiveFront,
    PresetCameraValues.LegacyPerspectiveRight,
    PresetCameraValues.LegacyPerspectiveBottomLeft,
    PresetCameraValues.LegacyPerspectiveBottom,
    PresetCameraValues.LegacyPerspectiveBottomRight,
    PresetCameraValues.OrthographicFront,
    PresetCameraValues.IsometricTopUp,
    PresetCameraValues.IsometricTopDown,
    PresetCameraValues.IsometricBottomUp,
    PresetCameraValues.IsometricBottomDown,
    PresetCameraValues.IsometricLeftUp,
    PresetCameraValues.IsometricLeftDown,
    PresetCameraValues.IsometricRightUp,
    PresetCameraValues.IsometricRightDown,
    PresetCameraValues.IsometricOffAxis1Left,
    PresetCameraValues.IsometricOffAxis1Right,
    PresetCameraValues.IsometricOffAxis1Top,
    PresetCameraValues.IsometricOffAxis2Left,
    PresetCameraValues.IsometricOffAxis2Right,
    PresetCameraValues.IsometricOffAxis2Top,
    PresetCameraValues.IsometricOffAxis3Left,
    PresetCameraValues.IsometricOffAxis3Right,
    PresetCameraValues.IsometricOffAxis3Bottom,
    PresetCameraValues.IsometricOffAxis4Left,
    PresetCameraValues.IsometricOffAxis4Right,
    PresetCameraValues.IsometricOffAxis4Bottom,
    PresetCameraValues.ObliqueTopLeft,
    PresetCameraValues.ObliqueTop,
    PresetCameraValues.ObliqueTopRight,
    PresetCameraValues.ObliqueLeft,
    PresetCameraValues.ObliqueRight,
    PresetCameraValues.ObliqueBottomLeft,
    PresetCameraValues.ObliqueBottom,
    PresetCameraValues.ObliqueBottomRight,
    PresetCameraValues.PerspectiveFront,
    PresetCameraValues.PerspectiveLeft,
    PresetCameraValues.PerspectiveRight,
    PresetCameraValues.PerspectiveAbove,
    PresetCameraValues.PerspectiveBelow,
    PresetCameraValues.PerspectiveAboveLeftFacing,
    PresetCameraValues.PerspectiveAboveRightFacing,
    PresetCameraValues.PerspectiveContrastingLeftFacing,
    PresetCameraValues.PerspectiveContrastingRightFacing,
    PresetCameraValues.PerspectiveHeroicLeftFacing,
    PresetCameraValues.PerspectiveHeroicRightFacing,
    PresetCameraValues.PerspectiveHeroicExtremeLeftFacing,
    PresetCameraValues.PerspectiveHeroicExtremeRightFacing,
    PresetCameraValues.PerspectiveRelaxed,
    PresetCameraValues.PerspectiveRelaxedModerately,
] as const;

export enum LightRigDirectionValues {
    /** Top Left. Serialized value: `tl` */
    TopLeft = 'tl',
    /** Top. Serialized value: `t` */
    Top = 't',
    /** Top Right. Serialized value: `tr` */
    TopRight = 'tr',
    /** Left. Serialized value: `l` */
    Left = 'l',
    /** Right. Serialized value: `r` */
    Right = 'r',
    /** Bottom Left. Serialized value: `bl` */
    BottomLeft = 'bl',
    /** Bottom. Serialized value: `b` */
    Bottom = 'b',
    /** Bottom Right. Serialized value: `br` */
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

export enum LightRigValues {
    /** Legacy Flat 1. Serialized value: `legacyFlat1` */
    LegacyFlat1 = 'legacyFlat1',
    /** Legacy Flat 2. Serialized value: `legacyFlat2` */
    LegacyFlat2 = 'legacyFlat2',
    /** Legacy Flat 3. Serialized value: `legacyFlat3` */
    LegacyFlat3 = 'legacyFlat3',
    /** Legacy Flat 4. Serialized value: `legacyFlat4` */
    LegacyFlat4 = 'legacyFlat4',
    /** Legacy Normal 1. Serialized value: `legacyNormal1` */
    LegacyNormal1 = 'legacyNormal1',
    /** Legacy Normal 2. Serialized value: `legacyNormal2` */
    LegacyNormal2 = 'legacyNormal2',
    /** Legacy Normal 3. Serialized value: `legacyNormal3` */
    LegacyNormal3 = 'legacyNormal3',
    /** Legacy Normal 4. Serialized value: `legacyNormal4` */
    LegacyNormal4 = 'legacyNormal4',
    /** Legacy Harsh 1. Serialized value: `legacyHarsh1` */
    LegacyHarsh1 = 'legacyHarsh1',
    /** Legacy Harsh 2. Serialized value: `legacyHarsh2` */
    LegacyHarsh2 = 'legacyHarsh2',
    /** Legacy Harsh 3. Serialized value: `legacyHarsh3` */
    LegacyHarsh3 = 'legacyHarsh3',
    /** Legacy Harsh 4. Serialized value: `legacyHarsh4` */
    LegacyHarsh4 = 'legacyHarsh4',
    /** Three Point. Serialized value: `threePt` */
    ThreePoints = 'threePt',
    /** Light Rig Enum ( Balanced ). Serialized value: `balanced` */
    Balanced = 'balanced',
    /** Soft. Serialized value: `soft` */
    Soft = 'soft',
    /** Harsh. Serialized value: `harsh` */
    Harsh = 'harsh',
    /** Flood. Serialized value: `flood` */
    Flood = 'flood',
    /** Contrasting. Serialized value: `contrasting` */
    Contrasting = 'contrasting',
    /** Morning. Serialized value: `morning` */
    Morning = 'morning',
    /** Sunrise. Serialized value: `sunrise` */
    Sunrise = 'sunrise',
    /** Sunset. Serialized value: `sunset` */
    Sunset = 'sunset',
    /** Chilly. Serialized value: `chilly` */
    Chilly = 'chilly',
    /** Freezing. Serialized value: `freezing` */
    Freezing = 'freezing',
    /** Flat. Serialized value: `flat` */
    Flat = 'flat',
    /** Two Point. Serialized value: `twoPt` */
    TwoPoints = 'twoPt',
    /** Glow. Serialized value: `glow` */
    Glow = 'glow',
    /** Bright Room. Serialized value: `brightRoom` */
    BrightRoom = 'brightRoom',
}

export const LightRigValuesArray = [
    LightRigValues.LegacyFlat1,
    LightRigValues.LegacyFlat2,
    LightRigValues.LegacyFlat3,
    LightRigValues.LegacyFlat4,
    LightRigValues.LegacyNormal1,
    LightRigValues.LegacyNormal2,
    LightRigValues.LegacyNormal3,
    LightRigValues.LegacyNormal4,
    LightRigValues.LegacyHarsh1,
    LightRigValues.LegacyHarsh2,
    LightRigValues.LegacyHarsh3,
    LightRigValues.LegacyHarsh4,
    LightRigValues.ThreePoints,
    LightRigValues.Balanced,
    LightRigValues.Soft,
    LightRigValues.Harsh,
    LightRigValues.Flood,
    LightRigValues.Contrasting,
    LightRigValues.Morning,
    LightRigValues.Sunrise,
    LightRigValues.Sunset,
    LightRigValues.Chilly,
    LightRigValues.Freezing,
    LightRigValues.Flat,
    LightRigValues.TwoPoints,
    LightRigValues.Glow,
    LightRigValues.BrightRoom,
] as const;

export enum BevelPresetValues {
    /** Relaxed Inset. Serialized value: `relaxedInset` */
    RelaxedInset = 'relaxedInset',
    /** Circle. Serialized value: `circle` */
    Circle = 'circle',
    /** Slope. Serialized value: `slope` */
    Slope = 'slope',
    /** Cross. Serialized value: `cross` */
    Cross = 'cross',
    /** Angle. Serialized value: `angle` */
    Angle = 'angle',
    /** Soft Round. Serialized value: `softRound` */
    SoftRound = 'softRound',
    /** Convex. Serialized value: `convex` */
    Convex = 'convex',
    /** Cool Slant. Serialized value: `coolSlant` */
    CoolSlant = 'coolSlant',
    /** Divot. Serialized value: `divot` */
    Divot = 'divot',
    /** Riblet. Serialized value: `riblet` */
    Riblet = 'riblet',
    /** Hard Edge. Serialized value: `hardEdge` */
    HardEdge = 'hardEdge',
    /** Art Deco. Serialized value: `artDeco` */
    ArtDeco = 'artDeco',
}

export const BevelPresetValuesArray = [
    BevelPresetValues.RelaxedInset,
    BevelPresetValues.Circle,
    BevelPresetValues.Slope,
    BevelPresetValues.Cross,
    BevelPresetValues.Angle,
    BevelPresetValues.SoftRound,
    BevelPresetValues.Convex,
    BevelPresetValues.CoolSlant,
    BevelPresetValues.Divot,
    BevelPresetValues.Riblet,
    BevelPresetValues.HardEdge,
    BevelPresetValues.ArtDeco,
] as const;

export enum PresetMaterialTypeValues {
    /** Legacy Matte. Serialized value: `legacyMatte` */
    LegacyMatte = 'legacyMatte',
    /** Legacy Plastic. Serialized value: `legacyPlastic` */
    LegacyPlastic = 'legacyPlastic',
    /** Legacy Metal. Serialized value: `legacyMetal` */
    LegacyMetal = 'legacyMetal',
    /** Legacy Wireframe. Serialized value: `legacyWireframe` */
    LegacyWireframe = 'legacyWireframe',
    /** Matte. Serialized value: `matte` */
    Matte = 'matte',
    /** Plastic. Serialized value: `plastic` */
    Plastic = 'plastic',
    /** Metal. Serialized value: `metal` */
    Metal = 'metal',
    /** Warm Matte. Serialized value: `warmMatte` */
    WarmMatte = 'warmMatte',
    /** Translucent Powder. Serialized value: `translucentPowder` */
    TranslucentPowder = 'translucentPowder',
    /** Powder. Serialized value: `powder` */
    Powder = 'powder',
    /** Dark Edge. Serialized value: `dkEdge` */
    DarkEdge = 'dkEdge',
    /** Soft Edge. Serialized value: `softEdge` */
    SoftEdge = 'softEdge',
    /** Clear. Serialized value: `clear` */
    Clear = 'clear',
    /** Flat. Serialized value: `flat` */
    Flat = 'flat',
    /** Soft Metal. Serialized value: `softmetal` */
    SoftMetal = 'softmetal',
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
] as const;

export enum PresetShadowValues {
    /** Top Left Drop Shadow. Serialized value: `shdw1` */
    TopLeftDropShadow = 'shdw1',
    /** Top Right Drop Shadow. Serialized value: `shdw2` */
    TopRightDropShadow = 'shdw2',
    /** Back Left Perspective Shadow. Serialized value: `shdw3` */
    BackLeftPerspectiveShadow = 'shdw3',
    /** Back Right Perspective Shadow. Serialized value: `shdw4` */
    BackRightPerspectiveShadow = 'shdw4',
    /** Bottom Left Drop Shadow. Serialized value: `shdw5` */
    BottomLeftDropShadow = 'shdw5',
    /** Bottom Right Drop Shadow. Serialized value: `shdw6` */
    BottomRightDropShadow = 'shdw6',
    /** Front Left Perspective Shadow. Serialized value: `shdw7` */
    FrontLeftPerspectiveShadow = 'shdw7',
    /** Front Right Perspective Shadow. Serialized value: `shdw8` */
    FrontRightPerspectiveShadow = 'shdw8',
    /** Top Left Small Drop Shadow. Serialized value: `shdw9` */
    TopLeftSmallDropShadow = 'shdw9',
    /** Top Left Large Drop Shadow. Serialized value: `shdw10` */
    TopLeftLargeDropShadow = 'shdw10',
    /** Back Left Long Perspective Shadow. Serialized value: `shdw11` */
    BackLeftLongPerspectiveShadow = 'shdw11',
    /** Back Right Long Perspective Shadow. Serialized value: `shdw12` */
    BackRightLongPerspectiveShadow = 'shdw12',
    /** Top Left Double Drop Shadow. Serialized value: `shdw13` */
    TopLeftDoubleDropShadow = 'shdw13',
    /** Bottom Right Small Drop Shadow. Serialized value: `shdw14` */
    BottomRightSmallDropShadow = 'shdw14',
    /** Front Left Long Perspective Shadow. Serialized value: `shdw15` */
    FrontLeftLongPerspectiveShadow = 'shdw15',
    /** Front Right LongPerspective Shadow. Serialized value: `shdw16` */
    FrontRightLongPerspectiveShadow = 'shdw16',
    /** 3D Outer Box Shadow. Serialized value: `shdw17` */
    ThreeDimensionalOuterBoxShadow = 'shdw17',
    /** 3D Inner Box Shadow. Serialized value: `shdw18` */
    ThreeDimensionalInnerBoxShadow = 'shdw18',
    /** Back Center Perspective Shadow. Serialized value: `shdw19` */
    BackCenterPerspectiveShadow = 'shdw19',
    /** Front Bottom Shadow. Serialized value: `shdw20` */
    FrontBottomShadow = 'shdw20',
}

export const PresetShadowValuesArray = [
    PresetShadowValues.TopLeftDropShadow,
    PresetShadowValues.TopRightDropShadow,
    PresetShadowValues.BackLeftPerspectiveShadow,
    PresetShadowValues.BackRightPerspectiveShadow,
    PresetShadowValues.BottomLeftDropShadow,
    PresetShadowValues.BottomRightDropShadow,
    PresetShadowValues.FrontLeftPerspectiveShadow,
    PresetShadowValues.FrontRightPerspectiveShadow,
    PresetShadowValues.TopLeftSmallDropShadow,
    PresetShadowValues.TopLeftLargeDropShadow,
    PresetShadowValues.BackLeftLongPerspectiveShadow,
    PresetShadowValues.BackRightLongPerspectiveShadow,
    PresetShadowValues.TopLeftDoubleDropShadow,
    PresetShadowValues.BottomRightSmallDropShadow,
    PresetShadowValues.FrontLeftLongPerspectiveShadow,
    PresetShadowValues.FrontRightLongPerspectiveShadow,
    PresetShadowValues.ThreeDimensionalOuterBoxShadow,
    PresetShadowValues.ThreeDimensionalInnerBoxShadow,
    PresetShadowValues.BackCenterPerspectiveShadow,
    PresetShadowValues.FrontBottomShadow,
] as const;

export enum PathShadeValues {
    /** Shape. Serialized value: `shape` */
    Shape = 'shape',
    /** Circle. Serialized value: `circle` */
    Circle = 'circle',
    /** Rectangle. Serialized value: `rect` */
    Rectangle = 'rect',
}

export const PathShadeValuesArray = [
    PathShadeValues.Shape,
    PathShadeValues.Circle,
    PathShadeValues.Rectangle,
] as const;

export enum TileFlipValues {
    /** None. Serialized value: `none` */
    None = 'none',
    /** Horizontal. Serialized value: `x` */
    Horizontal = 'x',
    /** Vertical. Serialized value: `y` */
    Vertical = 'y',
    /** Horizontal and Vertical. Serialized value: `xy` */
    HorizontalAndVertical = 'xy',
}

export const TileFlipValuesArray = [
    TileFlipValues.None,
    TileFlipValues.Horizontal,
    TileFlipValues.Vertical,
    TileFlipValues.HorizontalAndVertical,
] as const;

export enum BlipCompressionValues {
    /** Email Compression. Serialized value: `email` */
    Email = 'email',
    /** Screen Viewing Compression. Serialized value: `screen` */
    Screen = 'screen',
    /** Printing Compression. Serialized value: `print` */
    Print = 'print',
    /** High Quality Printing Compression. Serialized value: `hqprint` */
    HighQualityPrint = 'hqprint',
    /** No Compression. Serialized value: `none` */
    None = 'none',
}

export const BlipCompressionValuesArray = [
    BlipCompressionValues.Email,
    BlipCompressionValues.Screen,
    BlipCompressionValues.Print,
    BlipCompressionValues.HighQualityPrint,
    BlipCompressionValues.None,
] as const;

export enum PresetPatternValues {
    /** 5%. Serialized value: `pct5` */
    Percent5 = 'pct5',
    /** 10%. Serialized value: `pct10` */
    Percent10 = 'pct10',
    /** 20%. Serialized value: `pct20` */
    Percent20 = 'pct20',
    /** 25%. Serialized value: `pct25` */
    Percent25 = 'pct25',
    /** 30%. Serialized value: `pct30` */
    Percent30 = 'pct30',
    /** 40%. Serialized value: `pct40` */
    Percent40 = 'pct40',
    /** 50%. Serialized value: `pct50` */
    Percent50 = 'pct50',
    /** 60%. Serialized value: `pct60` */
    Percent60 = 'pct60',
    /** 70%. Serialized value: `pct70` */
    Percent70 = 'pct70',
    /** 75%. Serialized value: `pct75` */
    Percent75 = 'pct75',
    /** 80%. Serialized value: `pct80` */
    Percent80 = 'pct80',
    /** 90%. Serialized value: `pct90` */
    Percent90 = 'pct90',
    /** Horizontal. Serialized value: `horz` */
    Horizontal = 'horz',
    /** Vertical. Serialized value: `vert` */
    Vertical = 'vert',
    /** Light Horizontal. Serialized value: `ltHorz` */
    LightHorizontal = 'ltHorz',
    /** Light Vertical. Serialized value: `ltVert` */
    LightVertical = 'ltVert',
    /** Dark Horizontal. Serialized value: `dkHorz` */
    DarkHorizontal = 'dkHorz',
    /** Dark Vertical. Serialized value: `dkVert` */
    DarkVertical = 'dkVert',
    /** Narrow Horizontal. Serialized value: `narHorz` */
    NarrowHorizontal = 'narHorz',
    /** Narrow Vertical. Serialized value: `narVert` */
    NarrowVertical = 'narVert',
    /** Dashed Horizontal. Serialized value: `dashHorz` */
    DashedHorizontal = 'dashHorz',
    /** Dashed Vertical. Serialized value: `dashVert` */
    DashedVertical = 'dashVert',
    /** Cross. Serialized value: `cross` */
    Cross = 'cross',
    /** Downward Diagonal. Serialized value: `dnDiag` */
    DownwardDiagonal = 'dnDiag',
    /** Upward Diagonal. Serialized value: `upDiag` */
    UpwardDiagonal = 'upDiag',
    /** Light Downward Diagonal. Serialized value: `ltDnDiag` */
    LightDownwardDiagonal = 'ltDnDiag',
    /** Light Upward Diagonal. Serialized value: `ltUpDiag` */
    LightUpwardDiagonal = 'ltUpDiag',
    /** Dark Downward Diagonal. Serialized value: `dkDnDiag` */
    DarkDownwardDiagonal = 'dkDnDiag',
    /** Dark Upward Diagonal. Serialized value: `dkUpDiag` */
    DarkUpwardDiagonal = 'dkUpDiag',
    /** Wide Downward Diagonal. Serialized value: `wdDnDiag` */
    WideDownwardDiagonal = 'wdDnDiag',
    /** Wide Upward Diagonal. Serialized value: `wdUpDiag` */
    WideUpwardDiagonal = 'wdUpDiag',
    /** Dashed Downward Diagonal. Serialized value: `dashDnDiag` */
    DashedDownwardDiagonal = 'dashDnDiag',
    /** Dashed Upward DIagonal. Serialized value: `dashUpDiag` */
    DashedUpwardDiagonal = 'dashUpDiag',
    /** Diagonal Cross. Serialized value: `diagCross` */
    DiagonalCross = 'diagCross',
    /** Small Checker Board. Serialized value: `smCheck` */
    SmallCheck = 'smCheck',
    /** Large Checker Board. Serialized value: `lgCheck` */
    LargeCheck = 'lgCheck',
    /** Small Grid. Serialized value: `smGrid` */
    SmallGrid = 'smGrid',
    /** Large Grid. Serialized value: `lgGrid` */
    LargeGrid = 'lgGrid',
    /** Dotted Grid. Serialized value: `dotGrid` */
    DotGrid = 'dotGrid',
    /** Small Confetti. Serialized value: `smConfetti` */
    SmallConfetti = 'smConfetti',
    /** Large Confetti. Serialized value: `lgConfetti` */
    LargeConfetti = 'lgConfetti',
    /** Horizontal Brick. Serialized value: `horzBrick` */
    HorizontalBrick = 'horzBrick',
    /** Diagonal Brick. Serialized value: `diagBrick` */
    DiagonalBrick = 'diagBrick',
    /** Solid Diamond. Serialized value: `solidDmnd` */
    SolidDiamond = 'solidDmnd',
    /** Open Diamond. Serialized value: `openDmnd` */
    OpenDiamond = 'openDmnd',
    /** Dotted Diamond. Serialized value: `dotDmnd` */
    DottedDiamond = 'dotDmnd',
    /** Plaid. Serialized value: `plaid` */
    Plaid = 'plaid',
    /** Sphere. Serialized value: `sphere` */
    Sphere = 'sphere',
    /** Weave. Serialized value: `weave` */
    Weave = 'weave',
    /** Divot. Serialized value: `divot` */
    Divot = 'divot',
    /** Shingle. Serialized value: `shingle` */
    Shingle = 'shingle',
    /** Wave. Serialized value: `wave` */
    Wave = 'wave',
    /** Trellis. Serialized value: `trellis` */
    Trellis = 'trellis',
    /** Zig Zag. Serialized value: `zigZag` */
    ZigZag = 'zigZag',
}

export const PresetPatternValuesArray = [
    PresetPatternValues.Percent5,
    PresetPatternValues.Percent10,
    PresetPatternValues.Percent20,
    PresetPatternValues.Percent25,
    PresetPatternValues.Percent30,
    PresetPatternValues.Percent40,
    PresetPatternValues.Percent50,
    PresetPatternValues.Percent60,
    PresetPatternValues.Percent70,
    PresetPatternValues.Percent75,
    PresetPatternValues.Percent80,
    PresetPatternValues.Percent90,
    PresetPatternValues.Horizontal,
    PresetPatternValues.Vertical,
    PresetPatternValues.LightHorizontal,
    PresetPatternValues.LightVertical,
    PresetPatternValues.DarkHorizontal,
    PresetPatternValues.DarkVertical,
    PresetPatternValues.NarrowHorizontal,
    PresetPatternValues.NarrowVertical,
    PresetPatternValues.DashedHorizontal,
    PresetPatternValues.DashedVertical,
    PresetPatternValues.Cross,
    PresetPatternValues.DownwardDiagonal,
    PresetPatternValues.UpwardDiagonal,
    PresetPatternValues.LightDownwardDiagonal,
    PresetPatternValues.LightUpwardDiagonal,
    PresetPatternValues.DarkDownwardDiagonal,
    PresetPatternValues.DarkUpwardDiagonal,
    PresetPatternValues.WideDownwardDiagonal,
    PresetPatternValues.WideUpwardDiagonal,
    PresetPatternValues.DashedDownwardDiagonal,
    PresetPatternValues.DashedUpwardDiagonal,
    PresetPatternValues.DiagonalCross,
    PresetPatternValues.SmallCheck,
    PresetPatternValues.LargeCheck,
    PresetPatternValues.SmallGrid,
    PresetPatternValues.LargeGrid,
    PresetPatternValues.DotGrid,
    PresetPatternValues.SmallConfetti,
    PresetPatternValues.LargeConfetti,
    PresetPatternValues.HorizontalBrick,
    PresetPatternValues.DiagonalBrick,
    PresetPatternValues.SolidDiamond,
    PresetPatternValues.OpenDiamond,
    PresetPatternValues.DottedDiamond,
    PresetPatternValues.Plaid,
    PresetPatternValues.Sphere,
    PresetPatternValues.Weave,
    PresetPatternValues.Divot,
    PresetPatternValues.Shingle,
    PresetPatternValues.Wave,
    PresetPatternValues.Trellis,
    PresetPatternValues.ZigZag,
] as const;

export enum BlendModeValues {
    /** Overlay. Serialized value: `over` */
    Overlay = 'over',
    /** Multiply. Serialized value: `mult` */
    Multiply = 'mult',
    /** Screen. Serialized value: `screen` */
    Screen = 'screen',
    /** Darken. Serialized value: `darken` */
    Darken = 'darken',
    /** Lighten. Serialized value: `lighten` */
    Lighten = 'lighten',
}

export const BlendModeValuesArray = [
    BlendModeValues.Overlay,
    BlendModeValues.Multiply,
    BlendModeValues.Screen,
    BlendModeValues.Darken,
    BlendModeValues.Lighten,
] as const;

export enum EffectContainerValues {
    /** Sibling. Serialized value: `sib` */
    Sibling = 'sib',
    /** Tree. Serialized value: `tree` */
    Tree = 'tree',
}

export const EffectContainerValuesArray = [
    EffectContainerValues.Sibling,
    EffectContainerValues.Tree,
] as const;

export enum ShapeTypeValues {
    /** Line Shape. Serialized value: `line` */
    Line = 'line',
    /** Line Inverse Shape. Serialized value: `lineInv` */
    LineInverse = 'lineInv',
    /** Triangle Shape. Serialized value: `triangle` */
    Triangle = 'triangle',
    /** Right Triangle Shape. Serialized value: `rtTriangle` */
    RightTriangle = 'rtTriangle',
    /** Rectangle Shape. Serialized value: `rect` */
    Rectangle = 'rect',
    /** Diamond Shape. Serialized value: `diamond` */
    Diamond = 'diamond',
    /** Parallelogram Shape. Serialized value: `parallelogram` */
    Parallelogram = 'parallelogram',
    /** Trapezoid Shape. Serialized value: `trapezoid` */
    Trapezoid = 'trapezoid',
    /** Non-Isosceles Trapezoid Shape. Serialized value: `nonIsoscelesTrapezoid` */
    NonIsoscelesTrapezoid = 'nonIsoscelesTrapezoid',
    /** Pentagon Shape. Serialized value: `pentagon` */
    Pentagon = 'pentagon',
    /** Hexagon Shape. Serialized value: `hexagon` */
    Hexagon = 'hexagon',
    /** Heptagon Shape. Serialized value: `heptagon` */
    Heptagon = 'heptagon',
    /** Octagon Shape. Serialized value: `octagon` */
    Octagon = 'octagon',
    /** Decagon Shape. Serialized value: `decagon` */
    Decagon = 'decagon',
    /** Dodecagon Shape. Serialized value: `dodecagon` */
    Dodecagon = 'dodecagon',
    /** Four Pointed Star Shape. Serialized value: `star4` */
    Star4 = 'star4',
    /** Five Pointed Star Shape. Serialized value: `star5` */
    Star5 = 'star5',
    /** Six Pointed Star Shape. Serialized value: `star6` */
    Star6 = 'star6',
    /** Seven Pointed Star Shape. Serialized value: `star7` */
    Star7 = 'star7',
    /** Eight Pointed Star Shape. Serialized value: `star8` */
    Star8 = 'star8',
    /** Ten Pointed Star Shape. Serialized value: `star10` */
    Star10 = 'star10',
    /** Twelve Pointed Star Shape. Serialized value: `star12` */
    Star12 = 'star12',
    /** Sixteen Pointed Star Shape. Serialized value: `star16` */
    Star16 = 'star16',
    /** Twenty Four Pointed Star Shape. Serialized value: `star24` */
    Star24 = 'star24',
    /** Thirty Two Pointed Star Shape. Serialized value: `star32` */
    Star32 = 'star32',
    /** Round Corner Rectangle Shape. Serialized value: `roundRect` */
    RoundRectangle = 'roundRect',
    /** One Round Corner Rectangle Shape. Serialized value: `round1Rect` */
    Round1Rectangle = 'round1Rect',
    /** Two Same-side Round Corner Rectangle Shape. Serialized value: `round2SameRect` */
    Round2SameRectangle = 'round2SameRect',
    /** Two Diagonal Round Corner Rectangle Shape. Serialized value: `round2DiagRect` */
    Round2DiagonalRectangle = 'round2DiagRect',
    /** One Snip One Round Corner Rectangle Shape. Serialized value: `snipRoundRect` */
    SnipRoundRectangle = 'snipRoundRect',
    /** One Snip Corner Rectangle Shape. Serialized value: `snip1Rect` */
    Snip1Rectangle = 'snip1Rect',
    /** Two Same-side Snip Corner Rectangle Shape. Serialized value: `snip2SameRect` */
    Snip2SameRectangle = 'snip2SameRect',
    /** Two Diagonal Snip Corner Rectangle Shape. Serialized value: `snip2DiagRect` */
    Snip2DiagonalRectangle = 'snip2DiagRect',
    /** Plaque Shape. Serialized value: `plaque` */
    Plaque = 'plaque',
    /** Ellipse Shape. Serialized value: `ellipse` */
    Ellipse = 'ellipse',
    /** Teardrop Shape. Serialized value: `teardrop` */
    Teardrop = 'teardrop',
    /** Home Plate Shape. Serialized value: `homePlate` */
    HomePlate = 'homePlate',
    /** Chevron Shape. Serialized value: `chevron` */
    Chevron = 'chevron',
    /** Pie Wedge Shape. Serialized value: `pieWedge` */
    PieWedge = 'pieWedge',
    /** Pie Shape. Serialized value: `pie` */
    Pie = 'pie',
    /** Block Arc Shape. Serialized value: `blockArc` */
    BlockArc = 'blockArc',
    /** Donut Shape. Serialized value: `donut` */
    Donut = 'donut',
    /** No Smoking Shape. Serialized value: `noSmoking` */
    NoSmoking = 'noSmoking',
    /** Right Arrow Shape. Serialized value: `rightArrow` */
    RightArrow = 'rightArrow',
    /** Left Arrow Shape. Serialized value: `leftArrow` */
    LeftArrow = 'leftArrow',
    /** Up Arrow Shape. Serialized value: `upArrow` */
    UpArrow = 'upArrow',
    /** Down Arrow Shape. Serialized value: `downArrow` */
    DownArrow = 'downArrow',
    /** Striped Right Arrow Shape. Serialized value: `stripedRightArrow` */
    StripedRightArrow = 'stripedRightArrow',
    /** Notched Right Arrow Shape. Serialized value: `notchedRightArrow` */
    NotchedRightArrow = 'notchedRightArrow',
    /** Bent Up Arrow Shape. Serialized value: `bentUpArrow` */
    BentUpArrow = 'bentUpArrow',
    /** Left Right Arrow Shape. Serialized value: `leftRightArrow` */
    LeftRightArrow = 'leftRightArrow',
    /** Up Down Arrow Shape. Serialized value: `upDownArrow` */
    UpDownArrow = 'upDownArrow',
    /** Left Up Arrow Shape. Serialized value: `leftUpArrow` */
    LeftUpArrow = 'leftUpArrow',
    /** Left Right Up Arrow Shape. Serialized value: `leftRightUpArrow` */
    LeftRightUpArrow = 'leftRightUpArrow',
    /** Quad-Arrow Shape. Serialized value: `quadArrow` */
    QuadArrow = 'quadArrow',
    /** Callout Left Arrow Shape. Serialized value: `leftArrowCallout` */
    LeftArrowCallout = 'leftArrowCallout',
    /** Callout Right Arrow Shape. Serialized value: `rightArrowCallout` */
    RightArrowCallout = 'rightArrowCallout',
    /** Callout Up Arrow Shape. Serialized value: `upArrowCallout` */
    UpArrowCallout = 'upArrowCallout',
    /** Callout Down Arrow Shape. Serialized value: `downArrowCallout` */
    DownArrowCallout = 'downArrowCallout',
    /** Callout Left Right Arrow Shape. Serialized value: `leftRightArrowCallout` */
    LeftRightArrowCallout = 'leftRightArrowCallout',
    /** Callout Up Down Arrow Shape. Serialized value: `upDownArrowCallout` */
    UpDownArrowCallout = 'upDownArrowCallout',
    /** Callout Quad-Arrow Shape. Serialized value: `quadArrowCallout` */
    QuadArrowCallout = 'quadArrowCallout',
    /** Bent Arrow Shape. Serialized value: `bentArrow` */
    BentArrow = 'bentArrow',
    /** U-Turn Arrow Shape. Serialized value: `uturnArrow` */
    UTurnArrow = 'uturnArrow',
    /** Circular Arrow Shape. Serialized value: `circularArrow` */
    CircularArrow = 'circularArrow',
    /** Left Circular Arrow Shape. Serialized value: `leftCircularArrow` */
    LeftCircularArrow = 'leftCircularArrow',
    /** Left Right Circular Arrow Shape. Serialized value: `leftRightCircularArrow` */
    LeftRightCircularArrow = 'leftRightCircularArrow',
    /** Curved Right Arrow Shape. Serialized value: `curvedRightArrow` */
    CurvedRightArrow = 'curvedRightArrow',
    /** Curved Left Arrow Shape. Serialized value: `curvedLeftArrow` */
    CurvedLeftArrow = 'curvedLeftArrow',
    /** Curved Up Arrow Shape. Serialized value: `curvedUpArrow` */
    CurvedUpArrow = 'curvedUpArrow',
    /** Curved Down Arrow Shape. Serialized value: `curvedDownArrow` */
    CurvedDownArrow = 'curvedDownArrow',
    /** Swoosh Arrow Shape. Serialized value: `swooshArrow` */
    SwooshArrow = 'swooshArrow',
    /** Cube Shape. Serialized value: `cube` */
    Cube = 'cube',
    /** Can Shape. Serialized value: `can` */
    Can = 'can',
    /** Lightning Bolt Shape. Serialized value: `lightningBolt` */
    LightningBolt = 'lightningBolt',
    /** Heart Shape. Serialized value: `heart` */
    Heart = 'heart',
    /** Sun Shape. Serialized value: `sun` */
    Sun = 'sun',
    /** Moon Shape. Serialized value: `moon` */
    Moon = 'moon',
    /** Smiley Face Shape. Serialized value: `smileyFace` */
    SmileyFace = 'smileyFace',
    /** Irregular Seal 1 Shape. Serialized value: `irregularSeal1` */
    IrregularSeal1 = 'irregularSeal1',
    /** Irregular Seal 2 Shape. Serialized value: `irregularSeal2` */
    IrregularSeal2 = 'irregularSeal2',
    /** Folded Corner Shape. Serialized value: `foldedCorner` */
    FoldedCorner = 'foldedCorner',
    /** Bevel Shape. Serialized value: `bevel` */
    Bevel = 'bevel',
    /** Frame Shape. Serialized value: `frame` */
    Frame = 'frame',
    /** Half Frame Shape. Serialized value: `halfFrame` */
    HalfFrame = 'halfFrame',
    /** Corner Shape. Serialized value: `corner` */
    Corner = 'corner',
    /** Diagonal Stripe Shape. Serialized value: `diagStripe` */
    DiagonalStripe = 'diagStripe',
    /** Chord Shape. Serialized value: `chord` */
    Chord = 'chord',
    /** Curved Arc Shape. Serialized value: `arc` */
    Arc = 'arc',
    /** Left Bracket Shape. Serialized value: `leftBracket` */
    LeftBracket = 'leftBracket',
    /** Right Bracket Shape. Serialized value: `rightBracket` */
    RightBracket = 'rightBracket',
    /** Left Brace Shape. Serialized value: `leftBrace` */
    LeftBrace = 'leftBrace',
    /** Right Brace Shape. Serialized value: `rightBrace` */
    RightBrace = 'rightBrace',
    /** Bracket Pair Shape. Serialized value: `bracketPair` */
    BracketPair = 'bracketPair',
    /** Brace Pair Shape. Serialized value: `bracePair` */
    BracePair = 'bracePair',
    /** Straight Connector 1 Shape. Serialized value: `straightConnector1` */
    StraightConnector1 = 'straightConnector1',
    /** Bent Connector 2 Shape. Serialized value: `bentConnector2` */
    BentConnector2 = 'bentConnector2',
    /** Bent Connector 3 Shape. Serialized value: `bentConnector3` */
    BentConnector3 = 'bentConnector3',
    /** Bent Connector 4 Shape. Serialized value: `bentConnector4` */
    BentConnector4 = 'bentConnector4',
    /** Bent Connector 5 Shape. Serialized value: `bentConnector5` */
    BentConnector5 = 'bentConnector5',
    /** Curved Connector 2 Shape. Serialized value: `curvedConnector2` */
    CurvedConnector2 = 'curvedConnector2',
    /** Curved Connector 3 Shape. Serialized value: `curvedConnector3` */
    CurvedConnector3 = 'curvedConnector3',
    /** Curved Connector 4 Shape. Serialized value: `curvedConnector4` */
    CurvedConnector4 = 'curvedConnector4',
    /** Curved Connector 5 Shape. Serialized value: `curvedConnector5` */
    CurvedConnector5 = 'curvedConnector5',
    /** Callout 1 Shape. Serialized value: `callout1` */
    Callout1 = 'callout1',
    /** Callout 2 Shape. Serialized value: `callout2` */
    Callout2 = 'callout2',
    /** Callout 3 Shape. Serialized value: `callout3` */
    Callout3 = 'callout3',
    /** Callout 1 Shape. Serialized value: `accentCallout1` */
    AccentCallout1 = 'accentCallout1',
    /** Callout 2 Shape. Serialized value: `accentCallout2` */
    AccentCallout2 = 'accentCallout2',
    /** Callout 3 Shape. Serialized value: `accentCallout3` */
    AccentCallout3 = 'accentCallout3',
    /** Callout 1 with Border Shape. Serialized value: `borderCallout1` */
    BorderCallout1 = 'borderCallout1',
    /** Callout 2 with Border Shape. Serialized value: `borderCallout2` */
    BorderCallout2 = 'borderCallout2',
    /** Callout 3 with Border Shape. Serialized value: `borderCallout3` */
    BorderCallout3 = 'borderCallout3',
    /** Callout 1 with Border and Accent Shape. Serialized value: `accentBorderCallout1` */
    AccentBorderCallout1 = 'accentBorderCallout1',
    /** Callout 2 with Border and Accent Shape. Serialized value: `accentBorderCallout2` */
    AccentBorderCallout2 = 'accentBorderCallout2',
    /** Callout 3 with Border and Accent Shape. Serialized value: `accentBorderCallout3` */
    AccentBorderCallout3 = 'accentBorderCallout3',
    /** Callout Wedge Rectangle Shape. Serialized value: `wedgeRectCallout` */
    WedgeRectangleCallout = 'wedgeRectCallout',
    /** Callout Wedge Round Rectangle Shape. Serialized value: `wedgeRoundRectCallout` */
    WedgeRoundRectangleCallout = 'wedgeRoundRectCallout',
    /** Callout Wedge Ellipse Shape. Serialized value: `wedgeEllipseCallout` */
    WedgeEllipseCallout = 'wedgeEllipseCallout',
    /** Callout Cloud Shape. Serialized value: `cloudCallout` */
    CloudCallout = 'cloudCallout',
    /** Cloud Shape. Serialized value: `cloud` */
    Cloud = 'cloud',
    /** Ribbon Shape. Serialized value: `ribbon` */
    Ribbon = 'ribbon',
    /** Ribbon 2 Shape. Serialized value: `ribbon2` */
    Ribbon2 = 'ribbon2',
    /** Ellipse Ribbon Shape. Serialized value: `ellipseRibbon` */
    EllipseRibbon = 'ellipseRibbon',
    /** Ellipse Ribbon 2 Shape. Serialized value: `ellipseRibbon2` */
    EllipseRibbon2 = 'ellipseRibbon2',
    /** Left Right Ribbon Shape. Serialized value: `leftRightRibbon` */
    LeftRightRibbon = 'leftRightRibbon',
    /** Vertical Scroll Shape. Serialized value: `verticalScroll` */
    VerticalScroll = 'verticalScroll',
    /** Horizontal Scroll Shape. Serialized value: `horizontalScroll` */
    HorizontalScroll = 'horizontalScroll',
    /** Wave Shape. Serialized value: `wave` */
    Wave = 'wave',
    /** Double Wave Shape. Serialized value: `doubleWave` */
    DoubleWave = 'doubleWave',
    /** Plus Shape. Serialized value: `plus` */
    Plus = 'plus',
    /** Process Flow Shape. Serialized value: `flowChartProcess` */
    FlowChartProcess = 'flowChartProcess',
    /** Decision Flow Shape. Serialized value: `flowChartDecision` */
    FlowChartDecision = 'flowChartDecision',
    /** Input Output Flow Shape. Serialized value: `flowChartInputOutput` */
    FlowChartInputOutput = 'flowChartInputOutput',
    /** Predefined Process Flow Shape. Serialized value: `flowChartPredefinedProcess` */
    FlowChartPredefinedProcess = 'flowChartPredefinedProcess',
    /** Internal Storage Flow Shape. Serialized value: `flowChartInternalStorage` */
    FlowChartInternalStorage = 'flowChartInternalStorage',
    /** Document Flow Shape. Serialized value: `flowChartDocument` */
    FlowChartDocument = 'flowChartDocument',
    /** Multi-Document Flow Shape. Serialized value: `flowChartMultidocument` */
    FlowChartMultidocument = 'flowChartMultidocument',
    /** Terminator Flow Shape. Serialized value: `flowChartTerminator` */
    FlowChartTerminator = 'flowChartTerminator',
    /** Preparation Flow Shape. Serialized value: `flowChartPreparation` */
    FlowChartPreparation = 'flowChartPreparation',
    /** Manual Input Flow Shape. Serialized value: `flowChartManualInput` */
    FlowChartManualInput = 'flowChartManualInput',
    /** Manual Operation Flow Shape. Serialized value: `flowChartManualOperation` */
    FlowChartManualOperation = 'flowChartManualOperation',
    /** Connector Flow Shape. Serialized value: `flowChartConnector` */
    FlowChartConnector = 'flowChartConnector',
    /** Punched Card Flow Shape. Serialized value: `flowChartPunchedCard` */
    FlowChartPunchedCard = 'flowChartPunchedCard',
    /** Punched Tape Flow Shape. Serialized value: `flowChartPunchedTape` */
    FlowChartPunchedTape = 'flowChartPunchedTape',
    /** Summing Junction Flow Shape. Serialized value: `flowChartSummingJunction` */
    FlowChartSummingJunction = 'flowChartSummingJunction',
    /** Or Flow Shape. Serialized value: `flowChartOr` */
    FlowChartOr = 'flowChartOr',
    /** Collate Flow Shape. Serialized value: `flowChartCollate` */
    FlowChartCollate = 'flowChartCollate',
    /** Sort Flow Shape. Serialized value: `flowChartSort` */
    FlowChartSort = 'flowChartSort',
    /** Extract Flow Shape. Serialized value: `flowChartExtract` */
    FlowChartExtract = 'flowChartExtract',
    /** Merge Flow Shape. Serialized value: `flowChartMerge` */
    FlowChartMerge = 'flowChartMerge',
    /** Offline Storage Flow Shape. Serialized value: `flowChartOfflineStorage` */
    FlowChartOfflineStorage = 'flowChartOfflineStorage',
    /** Online Storage Flow Shape. Serialized value: `flowChartOnlineStorage` */
    FlowChartOnlineStorage = 'flowChartOnlineStorage',
    /** Magnetic Tape Flow Shape. Serialized value: `flowChartMagneticTape` */
    FlowChartMagneticTape = 'flowChartMagneticTape',
    /** Magnetic Disk Flow Shape. Serialized value: `flowChartMagneticDisk` */
    FlowChartMagneticDisk = 'flowChartMagneticDisk',
    /** Magnetic Drum Flow Shape. Serialized value: `flowChartMagneticDrum` */
    FlowChartMagneticDrum = 'flowChartMagneticDrum',
    /** Display Flow Shape. Serialized value: `flowChartDisplay` */
    FlowChartDisplay = 'flowChartDisplay',
    /** Delay Flow Shape. Serialized value: `flowChartDelay` */
    FlowChartDelay = 'flowChartDelay',
    /** Alternate Process Flow Shape. Serialized value: `flowChartAlternateProcess` */
    FlowChartAlternateProcess = 'flowChartAlternateProcess',
    /** Off-Page Connector Flow Shape. Serialized value: `flowChartOffpageConnector` */
    FlowChartOffpageConnector = 'flowChartOffpageConnector',
    /** Blank Button Shape. Serialized value: `actionButtonBlank` */
    ActionButtonBlank = 'actionButtonBlank',
    /** Home Button Shape. Serialized value: `actionButtonHome` */
    ActionButtonHome = 'actionButtonHome',
    /** Help Button Shape. Serialized value: `actionButtonHelp` */
    ActionButtonHelp = 'actionButtonHelp',
    /** Information Button Shape. Serialized value: `actionButtonInformation` */
    ActionButtonInformation = 'actionButtonInformation',
    /** Forward or Next Button Shape. Serialized value: `actionButtonForwardNext` */
    ActionButtonForwardNext = 'actionButtonForwardNext',
    /** Back or Previous Button Shape. Serialized value: `actionButtonBackPrevious` */
    ActionButtonBackPrevious = 'actionButtonBackPrevious',
    /** End Button Shape. Serialized value: `actionButtonEnd` */
    ActionButtonEnd = 'actionButtonEnd',
    /** Beginning Button Shape. Serialized value: `actionButtonBeginning` */
    ActionButtonBeginning = 'actionButtonBeginning',
    /** Return Button Shape. Serialized value: `actionButtonReturn` */
    ActionButtonReturn = 'actionButtonReturn',
    /** Document Button Shape. Serialized value: `actionButtonDocument` */
    ActionButtonDocument = 'actionButtonDocument',
    /** Sound Button Shape. Serialized value: `actionButtonSound` */
    ActionButtonSound = 'actionButtonSound',
    /** Movie Button Shape. Serialized value: `actionButtonMovie` */
    ActionButtonMovie = 'actionButtonMovie',
    /** Gear 6 Shape. Serialized value: `gear6` */
    Gear6 = 'gear6',
    /** Gear 9 Shape. Serialized value: `gear9` */
    Gear9 = 'gear9',
    /** Funnel Shape. Serialized value: `funnel` */
    Funnel = 'funnel',
    /** Plus Math Shape. Serialized value: `mathPlus` */
    MathPlus = 'mathPlus',
    /** Minus Math Shape. Serialized value: `mathMinus` */
    MathMinus = 'mathMinus',
    /** Multiply Math Shape. Serialized value: `mathMultiply` */
    MathMultiply = 'mathMultiply',
    /** Divide Math Shape. Serialized value: `mathDivide` */
    MathDivide = 'mathDivide',
    /** Equal Math Shape. Serialized value: `mathEqual` */
    MathEqual = 'mathEqual',
    /** Not Equal Math Shape. Serialized value: `mathNotEqual` */
    MathNotEqual = 'mathNotEqual',
    /** Corner Tabs Shape. Serialized value: `cornerTabs` */
    CornerTabs = 'cornerTabs',
    /** Square Tabs Shape. Serialized value: `squareTabs` */
    SquareTabs = 'squareTabs',
    /** Plaque Tabs Shape. Serialized value: `plaqueTabs` */
    PlaqueTabs = 'plaqueTabs',
    /** Chart X Shape. Serialized value: `chartX` */
    ChartX = 'chartX',
    /** Chart Star Shape. Serialized value: `chartStar` */
    ChartStar = 'chartStar',
    /** Chart Plus Shape. Serialized value: `chartPlus` */
    ChartPlus = 'chartPlus',
}

export const ShapeTypeValuesArray = [
    ShapeTypeValues.Line,
    ShapeTypeValues.LineInverse,
    ShapeTypeValues.Triangle,
    ShapeTypeValues.RightTriangle,
    ShapeTypeValues.Rectangle,
    ShapeTypeValues.Diamond,
    ShapeTypeValues.Parallelogram,
    ShapeTypeValues.Trapezoid,
    ShapeTypeValues.NonIsoscelesTrapezoid,
    ShapeTypeValues.Pentagon,
    ShapeTypeValues.Hexagon,
    ShapeTypeValues.Heptagon,
    ShapeTypeValues.Octagon,
    ShapeTypeValues.Decagon,
    ShapeTypeValues.Dodecagon,
    ShapeTypeValues.Star4,
    ShapeTypeValues.Star5,
    ShapeTypeValues.Star6,
    ShapeTypeValues.Star7,
    ShapeTypeValues.Star8,
    ShapeTypeValues.Star10,
    ShapeTypeValues.Star12,
    ShapeTypeValues.Star16,
    ShapeTypeValues.Star24,
    ShapeTypeValues.Star32,
    ShapeTypeValues.RoundRectangle,
    ShapeTypeValues.Round1Rectangle,
    ShapeTypeValues.Round2SameRectangle,
    ShapeTypeValues.Round2DiagonalRectangle,
    ShapeTypeValues.SnipRoundRectangle,
    ShapeTypeValues.Snip1Rectangle,
    ShapeTypeValues.Snip2SameRectangle,
    ShapeTypeValues.Snip2DiagonalRectangle,
    ShapeTypeValues.Plaque,
    ShapeTypeValues.Ellipse,
    ShapeTypeValues.Teardrop,
    ShapeTypeValues.HomePlate,
    ShapeTypeValues.Chevron,
    ShapeTypeValues.PieWedge,
    ShapeTypeValues.Pie,
    ShapeTypeValues.BlockArc,
    ShapeTypeValues.Donut,
    ShapeTypeValues.NoSmoking,
    ShapeTypeValues.RightArrow,
    ShapeTypeValues.LeftArrow,
    ShapeTypeValues.UpArrow,
    ShapeTypeValues.DownArrow,
    ShapeTypeValues.StripedRightArrow,
    ShapeTypeValues.NotchedRightArrow,
    ShapeTypeValues.BentUpArrow,
    ShapeTypeValues.LeftRightArrow,
    ShapeTypeValues.UpDownArrow,
    ShapeTypeValues.LeftUpArrow,
    ShapeTypeValues.LeftRightUpArrow,
    ShapeTypeValues.QuadArrow,
    ShapeTypeValues.LeftArrowCallout,
    ShapeTypeValues.RightArrowCallout,
    ShapeTypeValues.UpArrowCallout,
    ShapeTypeValues.DownArrowCallout,
    ShapeTypeValues.LeftRightArrowCallout,
    ShapeTypeValues.UpDownArrowCallout,
    ShapeTypeValues.QuadArrowCallout,
    ShapeTypeValues.BentArrow,
    ShapeTypeValues.UTurnArrow,
    ShapeTypeValues.CircularArrow,
    ShapeTypeValues.LeftCircularArrow,
    ShapeTypeValues.LeftRightCircularArrow,
    ShapeTypeValues.CurvedRightArrow,
    ShapeTypeValues.CurvedLeftArrow,
    ShapeTypeValues.CurvedUpArrow,
    ShapeTypeValues.CurvedDownArrow,
    ShapeTypeValues.SwooshArrow,
    ShapeTypeValues.Cube,
    ShapeTypeValues.Can,
    ShapeTypeValues.LightningBolt,
    ShapeTypeValues.Heart,
    ShapeTypeValues.Sun,
    ShapeTypeValues.Moon,
    ShapeTypeValues.SmileyFace,
    ShapeTypeValues.IrregularSeal1,
    ShapeTypeValues.IrregularSeal2,
    ShapeTypeValues.FoldedCorner,
    ShapeTypeValues.Bevel,
    ShapeTypeValues.Frame,
    ShapeTypeValues.HalfFrame,
    ShapeTypeValues.Corner,
    ShapeTypeValues.DiagonalStripe,
    ShapeTypeValues.Chord,
    ShapeTypeValues.Arc,
    ShapeTypeValues.LeftBracket,
    ShapeTypeValues.RightBracket,
    ShapeTypeValues.LeftBrace,
    ShapeTypeValues.RightBrace,
    ShapeTypeValues.BracketPair,
    ShapeTypeValues.BracePair,
    ShapeTypeValues.StraightConnector1,
    ShapeTypeValues.BentConnector2,
    ShapeTypeValues.BentConnector3,
    ShapeTypeValues.BentConnector4,
    ShapeTypeValues.BentConnector5,
    ShapeTypeValues.CurvedConnector2,
    ShapeTypeValues.CurvedConnector3,
    ShapeTypeValues.CurvedConnector4,
    ShapeTypeValues.CurvedConnector5,
    ShapeTypeValues.Callout1,
    ShapeTypeValues.Callout2,
    ShapeTypeValues.Callout3,
    ShapeTypeValues.AccentCallout1,
    ShapeTypeValues.AccentCallout2,
    ShapeTypeValues.AccentCallout3,
    ShapeTypeValues.BorderCallout1,
    ShapeTypeValues.BorderCallout2,
    ShapeTypeValues.BorderCallout3,
    ShapeTypeValues.AccentBorderCallout1,
    ShapeTypeValues.AccentBorderCallout2,
    ShapeTypeValues.AccentBorderCallout3,
    ShapeTypeValues.WedgeRectangleCallout,
    ShapeTypeValues.WedgeRoundRectangleCallout,
    ShapeTypeValues.WedgeEllipseCallout,
    ShapeTypeValues.CloudCallout,
    ShapeTypeValues.Cloud,
    ShapeTypeValues.Ribbon,
    ShapeTypeValues.Ribbon2,
    ShapeTypeValues.EllipseRibbon,
    ShapeTypeValues.EllipseRibbon2,
    ShapeTypeValues.LeftRightRibbon,
    ShapeTypeValues.VerticalScroll,
    ShapeTypeValues.HorizontalScroll,
    ShapeTypeValues.Wave,
    ShapeTypeValues.DoubleWave,
    ShapeTypeValues.Plus,
    ShapeTypeValues.FlowChartProcess,
    ShapeTypeValues.FlowChartDecision,
    ShapeTypeValues.FlowChartInputOutput,
    ShapeTypeValues.FlowChartPredefinedProcess,
    ShapeTypeValues.FlowChartInternalStorage,
    ShapeTypeValues.FlowChartDocument,
    ShapeTypeValues.FlowChartMultidocument,
    ShapeTypeValues.FlowChartTerminator,
    ShapeTypeValues.FlowChartPreparation,
    ShapeTypeValues.FlowChartManualInput,
    ShapeTypeValues.FlowChartManualOperation,
    ShapeTypeValues.FlowChartConnector,
    ShapeTypeValues.FlowChartPunchedCard,
    ShapeTypeValues.FlowChartPunchedTape,
    ShapeTypeValues.FlowChartSummingJunction,
    ShapeTypeValues.FlowChartOr,
    ShapeTypeValues.FlowChartCollate,
    ShapeTypeValues.FlowChartSort,
    ShapeTypeValues.FlowChartExtract,
    ShapeTypeValues.FlowChartMerge,
    ShapeTypeValues.FlowChartOfflineStorage,
    ShapeTypeValues.FlowChartOnlineStorage,
    ShapeTypeValues.FlowChartMagneticTape,
    ShapeTypeValues.FlowChartMagneticDisk,
    ShapeTypeValues.FlowChartMagneticDrum,
    ShapeTypeValues.FlowChartDisplay,
    ShapeTypeValues.FlowChartDelay,
    ShapeTypeValues.FlowChartAlternateProcess,
    ShapeTypeValues.FlowChartOffpageConnector,
    ShapeTypeValues.ActionButtonBlank,
    ShapeTypeValues.ActionButtonHome,
    ShapeTypeValues.ActionButtonHelp,
    ShapeTypeValues.ActionButtonInformation,
    ShapeTypeValues.ActionButtonForwardNext,
    ShapeTypeValues.ActionButtonBackPrevious,
    ShapeTypeValues.ActionButtonEnd,
    ShapeTypeValues.ActionButtonBeginning,
    ShapeTypeValues.ActionButtonReturn,
    ShapeTypeValues.ActionButtonDocument,
    ShapeTypeValues.ActionButtonSound,
    ShapeTypeValues.ActionButtonMovie,
    ShapeTypeValues.Gear6,
    ShapeTypeValues.Gear9,
    ShapeTypeValues.Funnel,
    ShapeTypeValues.MathPlus,
    ShapeTypeValues.MathMinus,
    ShapeTypeValues.MathMultiply,
    ShapeTypeValues.MathDivide,
    ShapeTypeValues.MathEqual,
    ShapeTypeValues.MathNotEqual,
    ShapeTypeValues.CornerTabs,
    ShapeTypeValues.SquareTabs,
    ShapeTypeValues.PlaqueTabs,
    ShapeTypeValues.ChartX,
    ShapeTypeValues.ChartStar,
    ShapeTypeValues.ChartPlus,
] as const;

export enum TextShapeValues {
    /** No Text Shape. Serialized value: `textNoShape` */
    TextNoShape = 'textNoShape',
    /** Plain Text Shape. Serialized value: `textPlain` */
    TextPlain = 'textPlain',
    /** Stop Sign Text Shape. Serialized value: `textStop` */
    TextStop = 'textStop',
    /** Triangle Text Shape. Serialized value: `textTriangle` */
    TextTriangle = 'textTriangle',
    /** Inverted Triangle Text Shape. Serialized value: `textTriangleInverted` */
    TextTriangleInverted = 'textTriangleInverted',
    /** Chevron Text Shape. Serialized value: `textChevron` */
    TextChevron = 'textChevron',
    /** Inverted Chevron Text Shape. Serialized value: `textChevronInverted` */
    TextChevronInverted = 'textChevronInverted',
    /** Inside Ring Text Shape. Serialized value: `textRingInside` */
    TextRingInside = 'textRingInside',
    /** Outside Ring Text Shape. Serialized value: `textRingOutside` */
    TextRingOutside = 'textRingOutside',
    /** Upward Arch Text Shape. Serialized value: `textArchUp` */
    TextArchUp = 'textArchUp',
    /** Downward Arch Text Shape. Serialized value: `textArchDown` */
    TextArchDown = 'textArchDown',
    /** Circle Text Shape. Serialized value: `textCircle` */
    TextCircle = 'textCircle',
    /** Button Text Shape. Serialized value: `textButton` */
    TextButton = 'textButton',
    /** Upward Pour Arch Text Shape. Serialized value: `textArchUpPour` */
    TextArchUpPour = 'textArchUpPour',
    /** Downward Pour Arch Text Shape. Serialized value: `textArchDownPour` */
    TextArchDownPour = 'textArchDownPour',
    /** Circle Pour Text Shape. Serialized value: `textCirclePour` */
    TextCirclePour = 'textCirclePour',
    /** Button Pour Text Shape. Serialized value: `textButtonPour` */
    TextButtonPour = 'textButtonPour',
    /** Upward Curve Text Shape. Serialized value: `textCurveUp` */
    TextCurveUp = 'textCurveUp',
    /** Downward Curve Text Shape. Serialized value: `textCurveDown` */
    TextCurveDown = 'textCurveDown',
    /** Upward Can Text Shape. Serialized value: `textCanUp` */
    TextCanUp = 'textCanUp',
    /** Downward Can Text Shape. Serialized value: `textCanDown` */
    TextCanDown = 'textCanDown',
    /** Wave 1 Text Shape. Serialized value: `textWave1` */
    TextWave1 = 'textWave1',
    /** Wave 2 Text Shape. Serialized value: `textWave2` */
    TextWave2 = 'textWave2',
    /** Double Wave 1 Text Shape. Serialized value: `textDoubleWave1` */
    TextDoubleWave1 = 'textDoubleWave1',
    /** Wave 4 Text Shape. Serialized value: `textWave4` */
    TextWave4 = 'textWave4',
    /** Inflate Text Shape. Serialized value: `textInflate` */
    TextInflate = 'textInflate',
    /** Deflate Text Shape. Serialized value: `textDeflate` */
    TextDeflate = 'textDeflate',
    /** Bottom Inflate Text Shape. Serialized value: `textInflateBottom` */
    TextInflateBottom = 'textInflateBottom',
    /** Bottom Deflate Text Shape. Serialized value: `textDeflateBottom` */
    TextDeflateBottom = 'textDeflateBottom',
    /** Top Inflate Text Shape. Serialized value: `textInflateTop` */
    TextInflateTop = 'textInflateTop',
    /** Top Deflate Text Shape. Serialized value: `textDeflateTop` */
    TextDeflateTop = 'textDeflateTop',
    /** Deflate-Inflate Text Shape. Serialized value: `textDeflateInflate` */
    TextDeflateInflate = 'textDeflateInflate',
    /** Deflate-Inflate-Deflate Text Shape. Serialized value: `textDeflateInflateDeflate` */
    TextDeflateInflateDeflate = 'textDeflateInflateDeflate',
    /** Right Fade Text Shape. Serialized value: `textFadeRight` */
    TextFadeRight = 'textFadeRight',
    /** Left Fade Text Shape. Serialized value: `textFadeLeft` */
    TextFadeLeft = 'textFadeLeft',
    /** Upward Fade Text Shape. Serialized value: `textFadeUp` */
    TextFadeUp = 'textFadeUp',
    /** Downward Fade Text Shape. Serialized value: `textFadeDown` */
    TextFadeDown = 'textFadeDown',
    /** Upward Slant Text Shape. Serialized value: `textSlantUp` */
    TextSlantUp = 'textSlantUp',
    /** Downward Slant Text Shape. Serialized value: `textSlantDown` */
    TextSlantDown = 'textSlantDown',
    /** Upward Cascade Text Shape. Serialized value: `textCascadeUp` */
    TextCascadeUp = 'textCascadeUp',
    /** Downward Cascade Text Shape. Serialized value: `textCascadeDown` */
    TextCascadeDown = 'textCascadeDown',
}

export const TextShapeValuesArray = [
    TextShapeValues.TextNoShape,
    TextShapeValues.TextPlain,
    TextShapeValues.TextStop,
    TextShapeValues.TextTriangle,
    TextShapeValues.TextTriangleInverted,
    TextShapeValues.TextChevron,
    TextShapeValues.TextChevronInverted,
    TextShapeValues.TextRingInside,
    TextShapeValues.TextRingOutside,
    TextShapeValues.TextArchUp,
    TextShapeValues.TextArchDown,
    TextShapeValues.TextCircle,
    TextShapeValues.TextButton,
    TextShapeValues.TextArchUpPour,
    TextShapeValues.TextArchDownPour,
    TextShapeValues.TextCirclePour,
    TextShapeValues.TextButtonPour,
    TextShapeValues.TextCurveUp,
    TextShapeValues.TextCurveDown,
    TextShapeValues.TextCanUp,
    TextShapeValues.TextCanDown,
    TextShapeValues.TextWave1,
    TextShapeValues.TextWave2,
    TextShapeValues.TextDoubleWave1,
    TextShapeValues.TextWave4,
    TextShapeValues.TextInflate,
    TextShapeValues.TextDeflate,
    TextShapeValues.TextInflateBottom,
    TextShapeValues.TextDeflateBottom,
    TextShapeValues.TextInflateTop,
    TextShapeValues.TextDeflateTop,
    TextShapeValues.TextDeflateInflate,
    TextShapeValues.TextDeflateInflateDeflate,
    TextShapeValues.TextFadeRight,
    TextShapeValues.TextFadeLeft,
    TextShapeValues.TextFadeUp,
    TextShapeValues.TextFadeDown,
    TextShapeValues.TextSlantUp,
    TextShapeValues.TextSlantDown,
    TextShapeValues.TextCascadeUp,
    TextShapeValues.TextCascadeDown,
] as const;

export enum PathFillModeValues {
    /** No Path Fill. Serialized value: `none` */
    None = 'none',
    /** Normal Path Fill. Serialized value: `norm` */
    Norm = 'norm',
    /** Lighten Path Fill. Serialized value: `lighten` */
    Lighten = 'lighten',
    /** Lighten Path Fill Less. Serialized value: `lightenLess` */
    LightenLess = 'lightenLess',
    /** Darken Path Fill. Serialized value: `darken` */
    Darken = 'darken',
    /** Darken Path Fill Less. Serialized value: `darkenLess` */
    DarkenLess = 'darkenLess',
}

export const PathFillModeValuesArray = [
    PathFillModeValues.None,
    PathFillModeValues.Norm,
    PathFillModeValues.Lighten,
    PathFillModeValues.LightenLess,
    PathFillModeValues.Darken,
    PathFillModeValues.DarkenLess,
] as const;

export enum LineEndValues {
    /** None. Serialized value: `none` */
    None = 'none',
    /** Triangle Arrow Head. Serialized value: `triangle` */
    Triangle = 'triangle',
    /** Stealth Arrow. Serialized value: `stealth` */
    Stealth = 'stealth',
    /** Diamond. Serialized value: `diamond` */
    Diamond = 'diamond',
    /** Oval. Serialized value: `oval` */
    Oval = 'oval',
    /** Arrow Head. Serialized value: `arrow` */
    Arrow = 'arrow',
}

export const LineEndValuesArray = [
    LineEndValues.None,
    LineEndValues.Triangle,
    LineEndValues.Stealth,
    LineEndValues.Diamond,
    LineEndValues.Oval,
    LineEndValues.Arrow,
] as const;

export enum LineEndWidthValues {
    /** Small. Serialized value: `sm` */
    Small = 'sm',
    /** Medium. Serialized value: `med` */
    Medium = 'med',
    /** Large. Serialized value: `lg` */
    Large = 'lg',
}

export const LineEndWidthValuesArray = [
    LineEndWidthValues.Small,
    LineEndWidthValues.Medium,
    LineEndWidthValues.Large,
] as const;

export enum LineEndLengthValues {
    /** Small. Serialized value: `sm` */
    Small = 'sm',
    /** Medium. Serialized value: `med` */
    Medium = 'med',
    /** Large. Serialized value: `lg` */
    Large = 'lg',
}

export const LineEndLengthValuesArray = [
    LineEndLengthValues.Small,
    LineEndLengthValues.Medium,
    LineEndLengthValues.Large,
] as const;

export enum PresetLineDashValues {
    /** Solid. Serialized value: `solid` */
    Solid = 'solid',
    /** Dot. Serialized value: `dot` */
    Dot = 'dot',
    /** Dash. Serialized value: `dash` */
    Dash = 'dash',
    /** Large Dash. Serialized value: `lgDash` */
    LargeDash = 'lgDash',
    /** Dash Dot. Serialized value: `dashDot` */
    DashDot = 'dashDot',
    /** Large Dash Dot. Serialized value: `lgDashDot` */
    LargeDashDot = 'lgDashDot',
    /** Large Dash Dot Dot. Serialized value: `lgDashDotDot` */
    LargeDashDotDot = 'lgDashDotDot',
    /** System Dash. Serialized value: `sysDash` */
    SystemDash = 'sysDash',
    /** System Dot. Serialized value: `sysDot` */
    SystemDot = 'sysDot',
    /** System Dash Dot. Serialized value: `sysDashDot` */
    SystemDashDot = 'sysDashDot',
    /** System Dash Dot Dot. Serialized value: `sysDashDotDot` */
    SystemDashDotDot = 'sysDashDotDot',
}

export const PresetLineDashValuesArray = [
    PresetLineDashValues.Solid,
    PresetLineDashValues.Dot,
    PresetLineDashValues.Dash,
    PresetLineDashValues.LargeDash,
    PresetLineDashValues.DashDot,
    PresetLineDashValues.LargeDashDot,
    PresetLineDashValues.LargeDashDotDot,
    PresetLineDashValues.SystemDash,
    PresetLineDashValues.SystemDot,
    PresetLineDashValues.SystemDashDot,
    PresetLineDashValues.SystemDashDotDot,
] as const;

export enum LineCapValues {
    /** Round Line Cap. Serialized value: `rnd` */
    Round = 'rnd',
    /** Square Line Cap. Serialized value: `sq` */
    Square = 'sq',
    /** Flat Line Cap. Serialized value: `flat` */
    Flat = 'flat',
}

export const LineCapValuesArray = [
    LineCapValues.Round,
    LineCapValues.Square,
    LineCapValues.Flat,
] as const;

export enum PenAlignmentValues {
    /** Center Alignment. Serialized value: `ctr` */
    Center = 'ctr',
    /** Inset Alignment. Serialized value: `in` */
    Insert = 'in',
}

export const PenAlignmentValuesArray = [
    PenAlignmentValues.Center,
    PenAlignmentValues.Insert,
] as const;

export enum CompoundLineValues {
    /** Single Line. Serialized value: `sng` */
    Single = 'sng',
    /** Double Lines. Serialized value: `dbl` */
    Double = 'dbl',
    /** Thick Thin Double Lines. Serialized value: `thickThin` */
    ThickThin = 'thickThin',
    /** Thin Thick Double Lines. Serialized value: `thinThick` */
    ThinThick = 'thinThick',
    /** Thin Thick Thin Triple Lines. Serialized value: `tri` */
    Triple = 'tri',
}

export const CompoundLineValuesArray = [
    CompoundLineValues.Single,
    CompoundLineValues.Double,
    CompoundLineValues.ThickThin,
    CompoundLineValues.ThinThick,
    CompoundLineValues.Triple,
] as const;

export enum BooleanStyleValues {
    /** On. Serialized value: `on` */
    On = 'on',
    /** Off. Serialized value: `off` */
    Off = 'off',
    /** Default. Serialized value: `def` */
    Default = 'def',
}

export const BooleanStyleValuesArray = [
    BooleanStyleValues.On,
    BooleanStyleValues.Off,
    BooleanStyleValues.Default,
] as const;

export enum TextVerticalOverflowValues {
    /** Text Overflow Enum ( Overflow ). Serialized value: `overflow` */
    Overflow = 'overflow',
    /** Text Overflow Enum ( Ellipsis ). Serialized value: `ellipsis` */
    Ellipsis = 'ellipsis',
    /** Text Overflow Enum ( Clip ). Serialized value: `clip` */
    Clip = 'clip',
}

export const TextVerticalOverflowValuesArray = [
    TextVerticalOverflowValues.Overflow,
    TextVerticalOverflowValues.Ellipsis,
    TextVerticalOverflowValues.Clip,
] as const;

export enum TextHorizontalOverflowValues {
    /** Text Horizontal Overflow Enum ( Overflow ). Serialized value: `overflow` */
    Overflow = 'overflow',
    /** Text Horizontal Overflow Enum ( Clip ). Serialized value: `clip` */
    Clip = 'clip',
}

export const TextHorizontalOverflowValuesArray = [
    TextHorizontalOverflowValues.Overflow,
    TextHorizontalOverflowValues.Clip,
] as const;

export enum TextVerticalValues {
    /** Vertical Text Type Enum ( Horizontal ). Serialized value: `horz` */
    Horizontal = 'horz',
    /** Vertical Text Type Enum ( Vertical ). Serialized value: `vert` */
    Vertical = 'vert',
    /** Vertical Text Type Enum ( Vertical 270 ). Serialized value: `vert270` */
    Vertical270 = 'vert270',
    /** Vertical Text Type Enum ( WordArt Vertical ). Serialized value: `wordArtVert` */
    WordArtVertical = 'wordArtVert',
    /** Vertical Text Type Enum ( East Asian Vertical ). Serialized value: `eaVert` */
    EastAsianVetical = 'eaVert',
    /** Vertical Text Type Enum ( Mongolian Vertical ). Serialized value: `mongolianVert` */
    MongolianVertical = 'mongolianVert',
    /** Vertical WordArt Right to Left. Serialized value: `wordArtVertRtl` */
    WordArtLeftToRight = 'wordArtVertRtl',
}

export const TextVerticalValuesArray = [
    TextVerticalValues.Horizontal,
    TextVerticalValues.Vertical,
    TextVerticalValues.Vertical270,
    TextVerticalValues.WordArtVertical,
    TextVerticalValues.EastAsianVetical,
    TextVerticalValues.MongolianVertical,
    TextVerticalValues.WordArtLeftToRight,
] as const;

export enum TextWrappingValues {
    /** Text Wrapping Type Enum ( None ). Serialized value: `none` */
    None = 'none',
    /** Text Wrapping Type Enum ( Square ). Serialized value: `square` */
    Square = 'square',
}

export const TextWrappingValuesArray = [
    TextWrappingValues.None,
    TextWrappingValues.Square,
] as const;

export enum TextAnchoringTypeValues {
    /** Text Anchoring Type Enum ( Top ). Serialized value: `t` */
    Top = 't',
    /** Text Anchor Enum ( Center ). Serialized value: `ctr` */
    Center = 'ctr',
    /** Text Anchor Enum ( Bottom ). Serialized value: `b` */
    Bottom = 'b',
}

export const TextAnchoringTypeValuesArray = [
    TextAnchoringTypeValues.Top,
    TextAnchoringTypeValues.Center,
    TextAnchoringTypeValues.Bottom,
] as const;

export enum TextAutoNumberSchemeValues {
    /** Autonumber Enum ( alphaLcParenBoth ). Serialized value: `alphaLcParenBoth` */
    AlphaLowerCharacterParenBoth = 'alphaLcParenBoth',
    /** Autonumbering Enum ( alphaUcParenBoth ). Serialized value: `alphaUcParenBoth` */
    AlphaUpperCharacterParenBoth = 'alphaUcParenBoth',
    /** Autonumbering Enum ( alphaLcParenR ). Serialized value: `alphaLcParenR` */
    AlphaLowerCharacterParenR = 'alphaLcParenR',
    /** Autonumbering Enum ( alphaUcParenR ). Serialized value: `alphaUcParenR` */
    AlphaUpperCharacterParenR = 'alphaUcParenR',
    /** Autonumbering Enum ( alphaLcPeriod ). Serialized value: `alphaLcPeriod` */
    AlphaLowerCharacterPeriod = 'alphaLcPeriod',
    /** Autonumbering Enum ( alphaUcPeriod ). Serialized value: `alphaUcPeriod` */
    AlphaUpperCharacterPeriod = 'alphaUcPeriod',
    /** Autonumbering Enum ( arabicParenBoth ). Serialized value: `arabicParenBoth` */
    ArabicParenBoth = 'arabicParenBoth',
    /** Autonumbering Enum ( arabicParenR ). Serialized value: `arabicParenR` */
    ArabicParenR = 'arabicParenR',
    /** Autonumbering Enum ( arabicPeriod ). Serialized value: `arabicPeriod` */
    ArabicPeriod = 'arabicPeriod',
    /** Autonumbering Enum ( arabicPlain ). Serialized value: `arabicPlain` */
    ArabicPlain = 'arabicPlain',
    /** Autonumbering Enum ( romanLcParenBoth ). Serialized value: `romanLcParenBoth` */
    RomanLowerCharacterParenBoth = 'romanLcParenBoth',
    /** Autonumbering Enum ( romanUcParenBoth ). Serialized value: `romanUcParenBoth` */
    RomanUpperCharacterParenBoth = 'romanUcParenBoth',
    /** Autonumbering Enum ( romanLcParenR ). Serialized value: `romanLcParenR` */
    RomanLowerCharacterParenR = 'romanLcParenR',
    /** Autonumbering Enum ( romanUcParenR ). Serialized value: `romanUcParenR` */
    RomanUpperCharacterParenR = 'romanUcParenR',
    /** Autonumbering Enum ( romanLcPeriod ). Serialized value: `romanLcPeriod` */
    RomanLowerCharacterPeriod = 'romanLcPeriod',
    /** Autonumbering Enum ( romanUcPeriod ). Serialized value: `romanUcPeriod` */
    RomanUpperCharacterPeriod = 'romanUcPeriod',
    /** Autonumbering Enum ( circleNumDbPlain ). Serialized value: `circleNumDbPlain` */
    CircleNumberDoubleBytePlain = 'circleNumDbPlain',
    /** Autonumbering Enum ( circleNumWdBlackPlain ). Serialized value: `circleNumWdBlackPlain` */
    CircleNumberWingdingsBlackPlain = 'circleNumWdBlackPlain',
    /** Autonumbering Enum ( circleNumWdWhitePlain ). Serialized value: `circleNumWdWhitePlain` */
    CircleNumberWingdingsWhitePlain = 'circleNumWdWhitePlain',
    /** Autonumbering Enum ( arabicDbPeriod ). Serialized value: `arabicDbPeriod` */
    ArabicDoubleBytePeriod = 'arabicDbPeriod',
    /** Autonumbering Enum ( arabicDbPlain ). Serialized value: `arabicDbPlain` */
    ArabicDoubleBytePlain = 'arabicDbPlain',
    /** Autonumbering Enum ( ea1ChsPeriod ). Serialized value: `ea1ChsPeriod` */
    EastAsianSimplifiedChinesePeriod = 'ea1ChsPeriod',
    /** Autonumbering Enum ( ea1ChsPlain ). Serialized value: `ea1ChsPlain` */
    EastAsianSimplifiedChinesePlain = 'ea1ChsPlain',
    /** Autonumbering Enum ( ea1ChtPeriod ). Serialized value: `ea1ChtPeriod` */
    EastAsianTraditionalChinesePeriod = 'ea1ChtPeriod',
    /** Autonumbering Enum ( ea1ChtPlain ). Serialized value: `ea1ChtPlain` */
    EastAsianTraditionalChinesePlain = 'ea1ChtPlain',
    /** Autonumbering Enum ( ea1JpnChsDbPeriod ). Serialized value: `ea1JpnChsDbPeriod` */
    EastAsianJapaneseDoubleBytePeriod = 'ea1JpnChsDbPeriod',
    /** Autonumbering Enum ( ea1JpnKorPlain ). Serialized value: `ea1JpnKorPlain` */
    EastAsianJapaneseKoreanPlain = 'ea1JpnKorPlain',
    /** Autonumbering Enum ( ea1JpnKorPeriod ). Serialized value: `ea1JpnKorPeriod` */
    EastAsianJapaneseKoreanPeriod = 'ea1JpnKorPeriod',
    /** Autonumbering Enum ( arabic1Minus ). Serialized value: `arabic1Minus` */
    Arabic1Minus = 'arabic1Minus',
    /** Autonumbering Enum ( arabic2Minus ). Serialized value: `arabic2Minus` */
    Arabic2Minus = 'arabic2Minus',
    /** Autonumbering Enum ( hebrew2Minus ). Serialized value: `hebrew2Minus` */
    Hebrew2Minus = 'hebrew2Minus',
    /** Autonumbering Enum ( thaiAlphaPeriod ). Serialized value: `thaiAlphaPeriod` */
    ThaiAlphaPeriod = 'thaiAlphaPeriod',
    /** Autonumbering Enum ( thaiAlphaParenR ). Serialized value: `thaiAlphaParenR` */
    ThaiAlphaParenthesisRight = 'thaiAlphaParenR',
    /** Autonumbering Enum ( thaiAlphaParenBoth ). Serialized value: `thaiAlphaParenBoth` */
    ThaiAlphaParenthesisBoth = 'thaiAlphaParenBoth',
    /** Autonumbering Enum ( thaiNumPeriod ). Serialized value: `thaiNumPeriod` */
    ThaiNumberPeriod = 'thaiNumPeriod',
    /** Autonumbering Enum ( thaiNumParenR ). Serialized value: `thaiNumParenR` */
    ThaiNumberParenthesisRight = 'thaiNumParenR',
    /** Autonumbering Enum ( thaiNumParenBoth ). Serialized value: `thaiNumParenBoth` */
    ThaiNumberParenthesisBoth = 'thaiNumParenBoth',
    /** Autonumbering Enum ( hindiAlphaPeriod ). Serialized value: `hindiAlphaPeriod` */
    HindiAlphaPeriod = 'hindiAlphaPeriod',
    /** Autonumbering Enum ( hindiNumPeriod ). Serialized value: `hindiNumPeriod` */
    HindiNumPeriod = 'hindiNumPeriod',
    /** Autonumbering Enum ( hindiNumParenR ). Serialized value: `hindiNumParenR` */
    HindiNumberParenthesisRight = 'hindiNumParenR',
    /** Autonumbering Enum ( hindiAlpha1Period ). Serialized value: `hindiAlpha1Period` */
    HindiAlpha1Period = 'hindiAlpha1Period',
}

export const TextAutoNumberSchemeValuesArray = [
    TextAutoNumberSchemeValues.AlphaLowerCharacterParenBoth,
    TextAutoNumberSchemeValues.AlphaUpperCharacterParenBoth,
    TextAutoNumberSchemeValues.AlphaLowerCharacterParenR,
    TextAutoNumberSchemeValues.AlphaUpperCharacterParenR,
    TextAutoNumberSchemeValues.AlphaLowerCharacterPeriod,
    TextAutoNumberSchemeValues.AlphaUpperCharacterPeriod,
    TextAutoNumberSchemeValues.ArabicParenBoth,
    TextAutoNumberSchemeValues.ArabicParenR,
    TextAutoNumberSchemeValues.ArabicPeriod,
    TextAutoNumberSchemeValues.ArabicPlain,
    TextAutoNumberSchemeValues.RomanLowerCharacterParenBoth,
    TextAutoNumberSchemeValues.RomanUpperCharacterParenBoth,
    TextAutoNumberSchemeValues.RomanLowerCharacterParenR,
    TextAutoNumberSchemeValues.RomanUpperCharacterParenR,
    TextAutoNumberSchemeValues.RomanLowerCharacterPeriod,
    TextAutoNumberSchemeValues.RomanUpperCharacterPeriod,
    TextAutoNumberSchemeValues.CircleNumberDoubleBytePlain,
    TextAutoNumberSchemeValues.CircleNumberWingdingsBlackPlain,
    TextAutoNumberSchemeValues.CircleNumberWingdingsWhitePlain,
    TextAutoNumberSchemeValues.ArabicDoubleBytePeriod,
    TextAutoNumberSchemeValues.ArabicDoubleBytePlain,
    TextAutoNumberSchemeValues.EastAsianSimplifiedChinesePeriod,
    TextAutoNumberSchemeValues.EastAsianSimplifiedChinesePlain,
    TextAutoNumberSchemeValues.EastAsianTraditionalChinesePeriod,
    TextAutoNumberSchemeValues.EastAsianTraditionalChinesePlain,
    TextAutoNumberSchemeValues.EastAsianJapaneseDoubleBytePeriod,
    TextAutoNumberSchemeValues.EastAsianJapaneseKoreanPlain,
    TextAutoNumberSchemeValues.EastAsianJapaneseKoreanPeriod,
    TextAutoNumberSchemeValues.Arabic1Minus,
    TextAutoNumberSchemeValues.Arabic2Minus,
    TextAutoNumberSchemeValues.Hebrew2Minus,
    TextAutoNumberSchemeValues.ThaiAlphaPeriod,
    TextAutoNumberSchemeValues.ThaiAlphaParenthesisRight,
    TextAutoNumberSchemeValues.ThaiAlphaParenthesisBoth,
    TextAutoNumberSchemeValues.ThaiNumberPeriod,
    TextAutoNumberSchemeValues.ThaiNumberParenthesisRight,
    TextAutoNumberSchemeValues.ThaiNumberParenthesisBoth,
    TextAutoNumberSchemeValues.HindiAlphaPeriod,
    TextAutoNumberSchemeValues.HindiNumPeriod,
    TextAutoNumberSchemeValues.HindiNumberParenthesisRight,
    TextAutoNumberSchemeValues.HindiAlpha1Period,
] as const;

export enum TextUnderlineValues {
    /** Text Underline Enum ( None ). Serialized value: `none` */
    None = 'none',
    /** Text Underline Enum ( Words ). Serialized value: `words` */
    Words = 'words',
    /** Text Underline Enum ( Single ). Serialized value: `sng` */
    Single = 'sng',
    /** Text Underline Enum ( Double ). Serialized value: `dbl` */
    Double = 'dbl',
    /** Text Underline Enum ( Heavy ). Serialized value: `heavy` */
    Heavy = 'heavy',
    /** Text Underline Enum ( Dotted ). Serialized value: `dotted` */
    Dotted = 'dotted',
    /** Text Underline Enum ( Heavy Dotted  ). Serialized value: `dottedHeavy` */
    HeavyDotted = 'dottedHeavy',
    /** Text Underline Enum ( Dashed ). Serialized value: `dash` */
    Dash = 'dash',
    /** Text Underline Enum ( Heavy Dashed ). Serialized value: `dashHeavy` */
    DashHeavy = 'dashHeavy',
    /** Text Underline Enum ( Long Dashed ). Serialized value: `dashLong` */
    DashLong = 'dashLong',
    /** Text Underline Enum ( Heavy Long Dashed ). Serialized value: `dashLongHeavy` */
    DashLongHeavy = 'dashLongHeavy',
    /** Text Underline Enum ( Dot Dash ). Serialized value: `dotDash` */
    DotDash = 'dotDash',
    /** Text Underline Enum ( Heavy Dot Dash ). Serialized value: `dotDashHeavy` */
    DotDashHeavy = 'dotDashHeavy',
    /** Text Underline Enum ( Dot Dot Dash ). Serialized value: `dotDotDash` */
    DotDotDash = 'dotDotDash',
    /** Text Underline Enum ( Heavy Dot Dot Dash ). Serialized value: `dotDotDashHeavy` */
    DotDotDashHeavy = 'dotDotDashHeavy',
    /** Text Underline Enum ( Wavy ). Serialized value: `wavy` */
    Wavy = 'wavy',
    /** Text Underline Enum ( Heavy Wavy ). Serialized value: `wavyHeavy` */
    WavyHeavy = 'wavyHeavy',
    /** Text Underline Enum ( Double Wavy ). Serialized value: `wavyDbl` */
    WavyDouble = 'wavyDbl',
}

export const TextUnderlineValuesArray = [
    TextUnderlineValues.None,
    TextUnderlineValues.Words,
    TextUnderlineValues.Single,
    TextUnderlineValues.Double,
    TextUnderlineValues.Heavy,
    TextUnderlineValues.Dotted,
    TextUnderlineValues.HeavyDotted,
    TextUnderlineValues.Dash,
    TextUnderlineValues.DashHeavy,
    TextUnderlineValues.DashLong,
    TextUnderlineValues.DashLongHeavy,
    TextUnderlineValues.DotDash,
    TextUnderlineValues.DotDashHeavy,
    TextUnderlineValues.DotDotDash,
    TextUnderlineValues.DotDotDashHeavy,
    TextUnderlineValues.Wavy,
    TextUnderlineValues.WavyHeavy,
    TextUnderlineValues.WavyDouble,
] as const;

export enum TextStrikeValues {
    /** Text Strike Enum ( No Strike ). Serialized value: `noStrike` */
    NoStrike = 'noStrike',
    /** Text Strike Enum ( Single Strike ). Serialized value: `sngStrike` */
    SingleStrike = 'sngStrike',
    /** Text Strike Enum ( Double Strike ). Serialized value: `dblStrike` */
    DoubleStrike = 'dblStrike',
}

export const TextStrikeValuesArray = [
    TextStrikeValues.NoStrike,
    TextStrikeValues.SingleStrike,
    TextStrikeValues.DoubleStrike,
] as const;

export enum TextCapsValues {
    /** Text Caps Enum ( None ). Serialized value: `none` */
    None = 'none',
    /** Text Caps Enum ( Small ). Serialized value: `small` */
    Small = 'small',
    /** Text Caps Enum ( All ). Serialized value: `all` */
    All = 'all',
}

export const TextCapsValuesArray = [
    TextCapsValues.None,
    TextCapsValues.Small,
    TextCapsValues.All,
] as const;

export enum TextTabAlignmentValues {
    /** Text Tab Alignment Enum ( Left). Serialized value: `l` */
    Left = 'l',
    /** Text Tab Alignment Enum ( Center ). Serialized value: `ctr` */
    Center = 'ctr',
    /** Text Tab Alignment Enum ( Right ). Serialized value: `r` */
    Right = 'r',
    /** Text Tab Alignment Enum ( Decimal ). Serialized value: `dec` */
    Decimal = 'dec',
}

export const TextTabAlignmentValuesArray = [
    TextTabAlignmentValues.Left,
    TextTabAlignmentValues.Center,
    TextTabAlignmentValues.Right,
    TextTabAlignmentValues.Decimal,
] as const;

export enum TextAlignmentTypeValues {
    /** Text Alignment Enum ( Left ). Serialized value: `l` */
    Left = 'l',
    /** Text Alignment Enum ( Center ). Serialized value: `ctr` */
    Center = 'ctr',
    /** Text Alignment Enum ( Right ). Serialized value: `r` */
    Right = 'r',
    /** Text Alignment Enum ( Justified ). Serialized value: `just` */
    Justified = 'just',
    /** Text Alignment Enum ( Justified Low ). Serialized value: `justLow` */
    JustifiedLow = 'justLow',
    /** Text Alignment Enum ( Distributed ). Serialized value: `dist` */
    Distributed = 'dist',
    /** Text Alignment Enum ( Thai Distributed ). Serialized value: `thaiDist` */
    ThaiDistributed = 'thaiDist',
}

export const TextAlignmentTypeValuesArray = [
    TextAlignmentTypeValues.Left,
    TextAlignmentTypeValues.Center,
    TextAlignmentTypeValues.Right,
    TextAlignmentTypeValues.Justified,
    TextAlignmentTypeValues.JustifiedLow,
    TextAlignmentTypeValues.Distributed,
    TextAlignmentTypeValues.ThaiDistributed,
] as const;

export enum TextFontAlignmentValues {
    /** Font Alignment Enum ( Automatic ). Serialized value: `auto` */
    Automatic = 'auto',
    /** Font Alignment Enum ( Top ). Serialized value: `t` */
    Top = 't',
    /** Font Alignment Enum ( Center ). Serialized value: `ctr` */
    Center = 'ctr',
    /** Font Alignment Enum ( Baseline ). Serialized value: `base` */
    Baseline = 'base',
    /** Font Alignment Enum ( Bottom ). Serialized value: `b` */
    Bottom = 'b',
}

export const TextFontAlignmentValuesArray = [
    TextFontAlignmentValues.Automatic,
    TextFontAlignmentValues.Top,
    TextFontAlignmentValues.Center,
    TextFontAlignmentValues.Baseline,
    TextFontAlignmentValues.Bottom,
] as const;

export enum PresetColorValues {
    /** Alice Blue Preset Color. Serialized value: `aliceBlue` */
    AliceBlue = 'aliceBlue',
    /** Antique White Preset Color. Serialized value: `antiqueWhite` */
    AntiqueWhite = 'antiqueWhite',
    /** Aqua Preset Color. Serialized value: `aqua` */
    Aqua = 'aqua',
    /** Aquamarine Preset Color. Serialized value: `aquamarine` */
    Aquamarine = 'aquamarine',
    /** Azure Preset Color. Serialized value: `azure` */
    Azure = 'azure',
    /** Beige Preset Color. Serialized value: `beige` */
    Beige = 'beige',
    /** Bisque Preset Color. Serialized value: `bisque` */
    Bisque = 'bisque',
    /** Black Preset Color. Serialized value: `black` */
    Black = 'black',
    /** Blanched Almond Preset Color. Serialized value: `blanchedAlmond` */
    BlanchedAlmond = 'blanchedAlmond',
    /** Blue Preset Color. Serialized value: `blue` */
    Blue = 'blue',
    /** Blue Violet Preset Color. Serialized value: `blueViolet` */
    BlueViolet = 'blueViolet',
    /** Brown Preset Color. Serialized value: `brown` */
    Brown = 'brown',
    /** Burly Wood Preset Color. Serialized value: `burlyWood` */
    BurlyWood = 'burlyWood',
    /** Cadet Blue Preset Color. Serialized value: `cadetBlue` */
    CadetBlue = 'cadetBlue',
    /** Chartreuse Preset Color. Serialized value: `chartreuse` */
    Chartreuse = 'chartreuse',
    /** Chocolate Preset Color. Serialized value: `chocolate` */
    Chocolate = 'chocolate',
    /** Coral Preset Color. Serialized value: `coral` */
    Coral = 'coral',
    /** Cornflower Blue Preset Color. Serialized value: `cornflowerBlue` */
    CornflowerBlue = 'cornflowerBlue',
    /** Cornsilk Preset Color. Serialized value: `cornsilk` */
    Cornsilk = 'cornsilk',
    /** Crimson Preset Color. Serialized value: `crimson` */
    Crimson = 'crimson',
    /** Cyan Preset Color. Serialized value: `cyan` */
    Cyan = 'cyan',
    /** Dark Blue Preset Color. Serialized value: `dkBlue` */
    DarkBlue = 'dkBlue',
    /** Dark Cyan Preset Color. Serialized value: `dkCyan` */
    DarkCyan = 'dkCyan',
    /** Dark Goldenrod Preset Color. Serialized value: `dkGoldenrod` */
    DarkGoldenrod = 'dkGoldenrod',
    /** Dark Gray Preset Color. Serialized value: `dkGray` */
    DarkGray = 'dkGray',
    /** Dark Green Preset Color. Serialized value: `dkGreen` */
    DarkGreen = 'dkGreen',
    /** Dark Khaki Preset Color. Serialized value: `dkKhaki` */
    DarkKhaki = 'dkKhaki',
    /** Dark Magenta Preset Color. Serialized value: `dkMagenta` */
    DarkMagenta = 'dkMagenta',
    /** Dark Olive Green Preset Color. Serialized value: `dkOliveGreen` */
    DarkOliveGreen = 'dkOliveGreen',
    /** Dark Orange Preset Color. Serialized value: `dkOrange` */
    DarkOrange = 'dkOrange',
    /** Dark Orchid Preset Color. Serialized value: `dkOrchid` */
    DarkOrchid = 'dkOrchid',
    /** Dark Red Preset Color. Serialized value: `dkRed` */
    DarkRed = 'dkRed',
    /** Dark Salmon Preset Color. Serialized value: `dkSalmon` */
    DarkSalmon = 'dkSalmon',
    /** Dark Sea Green Preset Color. Serialized value: `dkSeaGreen` */
    DarkSeaGreen = 'dkSeaGreen',
    /** Dark Slate Blue Preset Color. Serialized value: `dkSlateBlue` */
    DarkSlateBlue = 'dkSlateBlue',
    /** Dark Slate Gray Preset Color. Serialized value: `dkSlateGray` */
    DarkSlateGray = 'dkSlateGray',
    /** Dark Turquoise Preset Color. Serialized value: `dkTurquoise` */
    DarkTurquoise = 'dkTurquoise',
    /** Dark Violet Preset Color. Serialized value: `dkViolet` */
    DarkViolet = 'dkViolet',
    /** Deep Pink Preset Color. Serialized value: `deepPink` */
    DeepPink = 'deepPink',
    /** Deep Sky Blue Preset Color. Serialized value: `deepSkyBlue` */
    DeepSkyBlue = 'deepSkyBlue',
    /** Dim Gray Preset Color. Serialized value: `dimGray` */
    DimGray = 'dimGray',
    /** Dodger Blue Preset Color. Serialized value: `dodgerBlue` */
    DodgerBlue = 'dodgerBlue',
    /** Firebrick Preset Color. Serialized value: `firebrick` */
    Firebrick = 'firebrick',
    /** Floral White Preset Color. Serialized value: `floralWhite` */
    FloralWhite = 'floralWhite',
    /** Forest Green Preset Color. Serialized value: `forestGreen` */
    ForestGreen = 'forestGreen',
    /** Fuchsia Preset Color. Serialized value: `fuchsia` */
    Fuchsia = 'fuchsia',
    /** Gainsboro Preset Color. Serialized value: `gainsboro` */
    Gainsboro = 'gainsboro',
    /** Ghost White Preset Color. Serialized value: `ghostWhite` */
    GhostWhite = 'ghostWhite',
    /** Gold Preset Color. Serialized value: `gold` */
    Gold = 'gold',
    /** Goldenrod Preset Color. Serialized value: `goldenrod` */
    Goldenrod = 'goldenrod',
    /** Gray Preset Color. Serialized value: `gray` */
    Gray = 'gray',
    /** Green Preset Color. Serialized value: `green` */
    Green = 'green',
    /** Green Yellow Preset Color. Serialized value: `greenYellow` */
    GreenYellow = 'greenYellow',
    /** Honeydew Preset Color. Serialized value: `honeydew` */
    Honeydew = 'honeydew',
    /** Hot Pink Preset Color. Serialized value: `hotPink` */
    HotPink = 'hotPink',
    /** Indian Red Preset Color. Serialized value: `indianRed` */
    IndianRed = 'indianRed',
    /** Indigo Preset Color. Serialized value: `indigo` */
    Indigo = 'indigo',
    /** Ivory Preset Color. Serialized value: `ivory` */
    Ivory = 'ivory',
    /** Khaki Preset Color. Serialized value: `khaki` */
    Khaki = 'khaki',
    /** Lavender Preset Color. Serialized value: `lavender` */
    Lavender = 'lavender',
    /** Lavender Blush Preset Color. Serialized value: `lavenderBlush` */
    LavenderBlush = 'lavenderBlush',
    /** Lawn Green Preset Color. Serialized value: `lawnGreen` */
    LawnGreen = 'lawnGreen',
    /** Lemon Chiffon Preset Color. Serialized value: `lemonChiffon` */
    LemonChiffon = 'lemonChiffon',
    /** Light Blue Preset Color. Serialized value: `ltBlue` */
    LightBlue = 'ltBlue',
    /** Light Coral Preset Color. Serialized value: `ltCoral` */
    LightCoral = 'ltCoral',
    /** Light Cyan Preset Color. Serialized value: `ltCyan` */
    LightCyan = 'ltCyan',
    /** Light Goldenrod Yellow Preset Color. Serialized value: `ltGoldenrodYellow` */
    LightGoldenrodYellow = 'ltGoldenrodYellow',
    /** Light Gray Preset Color. Serialized value: `ltGray` */
    LightGray = 'ltGray',
    /** Light Green Preset Color. Serialized value: `ltGreen` */
    LightGreen = 'ltGreen',
    /** Light Pink Preset Color. Serialized value: `ltPink` */
    LightPink = 'ltPink',
    /** Light Salmon Preset Color. Serialized value: `ltSalmon` */
    LightSalmon = 'ltSalmon',
    /** Light Sea Green Preset Color. Serialized value: `ltSeaGreen` */
    LightSeaGreen = 'ltSeaGreen',
    /** Light Sky Blue Preset Color. Serialized value: `ltSkyBlue` */
    LightSkyBlue = 'ltSkyBlue',
    /** Light Slate Gray Preset Color. Serialized value: `ltSlateGray` */
    LightSlateGray = 'ltSlateGray',
    /** Light Steel Blue Preset Color. Serialized value: `ltSteelBlue` */
    LightSteelBlue = 'ltSteelBlue',
    /** Light Yellow Preset Color. Serialized value: `ltYellow` */
    LightYellow = 'ltYellow',
    /** Lime Preset Color. Serialized value: `lime` */
    Lime = 'lime',
    /** Lime Green Preset Color. Serialized value: `limeGreen` */
    LimeGreen = 'limeGreen',
    /** Linen Preset Color. Serialized value: `linen` */
    Linen = 'linen',
    /** Magenta Preset Color. Serialized value: `magenta` */
    Magenta = 'magenta',
    /** Maroon Preset Color. Serialized value: `maroon` */
    Maroon = 'maroon',
    /** Medium Aquamarine Preset Color. Serialized value: `medAquamarine` */
    MedAquamarine = 'medAquamarine',
    /** Medium Blue Preset Color. Serialized value: `medBlue` */
    MediumBlue = 'medBlue',
    /** Medium Orchid Preset Color. Serialized value: `medOrchid` */
    MediumOrchid = 'medOrchid',
    /** Medium Purple Preset Color. Serialized value: `medPurple` */
    MediumPurple = 'medPurple',
    /** Medium Sea Green Preset Color. Serialized value: `medSeaGreen` */
    MediumSeaGreen = 'medSeaGreen',
    /** Medium Slate Blue Preset Color. Serialized value: `medSlateBlue` */
    MediumSlateBlue = 'medSlateBlue',
    /** Medium Spring Green Preset Color. Serialized value: `medSpringGreen` */
    MediumSpringGreen = 'medSpringGreen',
    /** Medium Turquoise Preset Color. Serialized value: `medTurquoise` */
    MediumTurquoise = 'medTurquoise',
    /** Medium Violet Red Preset Color. Serialized value: `medVioletRed` */
    MediumVioletRed = 'medVioletRed',
    /** Midnight Blue Preset Color. Serialized value: `midnightBlue` */
    MidnightBlue = 'midnightBlue',
    /** Mint Cream Preset Color. Serialized value: `mintCream` */
    MintCream = 'mintCream',
    /** Misty Rose Preset Color. Serialized value: `mistyRose` */
    MistyRose = 'mistyRose',
    /** Moccasin Preset Color. Serialized value: `moccasin` */
    Moccasin = 'moccasin',
    /** Navajo White Preset Color. Serialized value: `navajoWhite` */
    NavajoWhite = 'navajoWhite',
    /** Navy Preset Color. Serialized value: `navy` */
    Navy = 'navy',
    /** Old Lace Preset Color. Serialized value: `oldLace` */
    OldLace = 'oldLace',
    /** Olive Preset Color. Serialized value: `olive` */
    Olive = 'olive',
    /** Olive Drab Preset Color. Serialized value: `oliveDrab` */
    OliveDrab = 'oliveDrab',
    /** Orange Preset Color. Serialized value: `orange` */
    Orange = 'orange',
    /** Orange Red Preset Color. Serialized value: `orangeRed` */
    OrangeRed = 'orangeRed',
    /** Orchid Preset Color. Serialized value: `orchid` */
    Orchid = 'orchid',
    /** Pale Goldenrod Preset Color. Serialized value: `paleGoldenrod` */
    PaleGoldenrod = 'paleGoldenrod',
    /** Pale Green Preset Color. Serialized value: `paleGreen` */
    PaleGreen = 'paleGreen',
    /** Pale Turquoise Preset Color. Serialized value: `paleTurquoise` */
    PaleTurquoise = 'paleTurquoise',
    /** Pale Violet Red Preset Color. Serialized value: `paleVioletRed` */
    PaleVioletRed = 'paleVioletRed',
    /** Papaya Whip Preset Color. Serialized value: `papayaWhip` */
    PapayaWhip = 'papayaWhip',
    /** Peach Puff Preset Color. Serialized value: `peachPuff` */
    PeachPuff = 'peachPuff',
    /** Peru Preset Color. Serialized value: `peru` */
    Peru = 'peru',
    /** Pink Preset Color. Serialized value: `pink` */
    Pink = 'pink',
    /** Plum Preset Color. Serialized value: `plum` */
    Plum = 'plum',
    /** Powder Blue Preset Color. Serialized value: `powderBlue` */
    PowderBlue = 'powderBlue',
    /** Purple Preset Color. Serialized value: `purple` */
    Purple = 'purple',
    /** Red Preset Color. Serialized value: `red` */
    Red = 'red',
    /** Rosy Brown Preset Color. Serialized value: `rosyBrown` */
    RosyBrown = 'rosyBrown',
    /** Royal Blue Preset Color. Serialized value: `royalBlue` */
    RoyalBlue = 'royalBlue',
    /** Saddle Brown Preset Color. Serialized value: `saddleBrown` */
    SaddleBrown = 'saddleBrown',
    /** Salmon Preset Color. Serialized value: `salmon` */
    Salmon = 'salmon',
    /** Sandy Brown Preset Color. Serialized value: `sandyBrown` */
    SandyBrown = 'sandyBrown',
    /** Sea Green Preset Color. Serialized value: `seaGreen` */
    SeaGreen = 'seaGreen',
    /** Sea Shell Preset Color. Serialized value: `seaShell` */
    SeaShell = 'seaShell',
    /** Sienna Preset Color. Serialized value: `sienna` */
    Sienna = 'sienna',
    /** Silver Preset Color. Serialized value: `silver` */
    Silver = 'silver',
    /** Sky Blue Preset Color. Serialized value: `skyBlue` */
    SkyBlue = 'skyBlue',
    /** Slate Blue Preset Color. Serialized value: `slateBlue` */
    SlateBlue = 'slateBlue',
    /** Slate Gray Preset Color. Serialized value: `slateGray` */
    SlateGray = 'slateGray',
    /** Snow Preset Color. Serialized value: `snow` */
    Snow = 'snow',
    /** Spring Green Preset Color. Serialized value: `springGreen` */
    SpringGreen = 'springGreen',
    /** Steel Blue Preset Color. Serialized value: `steelBlue` */
    SteelBlue = 'steelBlue',
    /** Tan Preset Color. Serialized value: `tan` */
    Tan = 'tan',
    /** Teal Preset Color. Serialized value: `teal` */
    Teal = 'teal',
    /** Thistle Preset Color. Serialized value: `thistle` */
    Thistle = 'thistle',
    /** Tomato Preset Color. Serialized value: `tomato` */
    Tomato = 'tomato',
    /** Turquoise Preset Color. Serialized value: `turquoise` */
    Turquoise = 'turquoise',
    /** Violet Preset Color. Serialized value: `violet` */
    Violet = 'violet',
    /** Wheat Preset Color. Serialized value: `wheat` */
    Wheat = 'wheat',
    /** White Preset Color. Serialized value: `white` */
    White = 'white',
    /** White Smoke Preset Color. Serialized value: `whiteSmoke` */
    WhiteSmoke = 'whiteSmoke',
    /** Yellow Preset Color. Serialized value: `yellow` */
    Yellow = 'yellow',
    /** Yellow Green Preset Color. Serialized value: `yellowGreen` */
    YellowGreen = 'yellowGreen',
    /** undefined. Serialized value: `darkBlue` */
    DarkBlue2010 = 'darkBlue',
    /** undefined. Serialized value: `darkCyan` */
    DarkCyan2010 = 'darkCyan',
    /** undefined. Serialized value: `darkGoldenrod` */
    DarkGoldenrod2010 = 'darkGoldenrod',
    /** undefined. Serialized value: `darkGray` */
    DarkGray2010 = 'darkGray',
    /** undefined. Serialized value: `darkGrey` */
    DarkGrey2010 = 'darkGrey',
    /** undefined. Serialized value: `darkGreen` */
    DarkGreen2010 = 'darkGreen',
    /** undefined. Serialized value: `darkKhaki` */
    DarkKhaki2010 = 'darkKhaki',
    /** undefined. Serialized value: `darkMagenta` */
    DarkMagenta2010 = 'darkMagenta',
    /** undefined. Serialized value: `darkOliveGreen` */
    DarkOliveGreen2010 = 'darkOliveGreen',
    /** undefined. Serialized value: `darkOrange` */
    DarkOrange2010 = 'darkOrange',
    /** undefined. Serialized value: `darkOrchid` */
    DarkOrchid2010 = 'darkOrchid',
    /** undefined. Serialized value: `darkRed` */
    DarkRed2010 = 'darkRed',
    /** undefined. Serialized value: `darkSalmon` */
    DarkSalmon2010 = 'darkSalmon',
    /** undefined. Serialized value: `darkSeaGreen` */
    DarkSeaGreen2010 = 'darkSeaGreen',
    /** undefined. Serialized value: `darkSlateBlue` */
    DarkSlateBlue2010 = 'darkSlateBlue',
    /** undefined. Serialized value: `darkSlateGray` */
    DarkSlateGray2010 = 'darkSlateGray',
    /** undefined. Serialized value: `darkSlateGrey` */
    DarkSlateGrey2010 = 'darkSlateGrey',
    /** undefined. Serialized value: `darkTurquoise` */
    DarkTurquoise2010 = 'darkTurquoise',
    /** undefined. Serialized value: `darkViolet` */
    DarkViolet2010 = 'darkViolet',
    /** undefined. Serialized value: `lightBlue` */
    LightBlue2010 = 'lightBlue',
    /** undefined. Serialized value: `lightCoral` */
    LightCoral2010 = 'lightCoral',
    /** undefined. Serialized value: `lightCyan` */
    LightCyan2010 = 'lightCyan',
    /** undefined. Serialized value: `lightGoldenrodYellow` */
    LightGoldenrodYellow2010 = 'lightGoldenrodYellow',
    /** undefined. Serialized value: `lightGray` */
    LightGray2010 = 'lightGray',
    /** undefined. Serialized value: `lightGrey` */
    LightGrey2010 = 'lightGrey',
    /** undefined. Serialized value: `lightGreen` */
    LightGreen2010 = 'lightGreen',
    /** undefined. Serialized value: `lightPink` */
    LightPink2010 = 'lightPink',
    /** undefined. Serialized value: `lightSalmon` */
    LightSalmon2010 = 'lightSalmon',
    /** undefined. Serialized value: `lightSeaGreen` */
    LightSeaGreen2010 = 'lightSeaGreen',
    /** undefined. Serialized value: `lightSkyBlue` */
    LightSkyBlue2010 = 'lightSkyBlue',
    /** undefined. Serialized value: `lightSlateGray` */
    LightSlateGray2010 = 'lightSlateGray',
    /** undefined. Serialized value: `lightSlateGrey` */
    LightSlateGrey2010 = 'lightSlateGrey',
    /** undefined. Serialized value: `lightSteelBlue` */
    LightSteelBlue2010 = 'lightSteelBlue',
    /** undefined. Serialized value: `lightYellow` */
    LightYellow2010 = 'lightYellow',
    /** undefined. Serialized value: `mediumAquamarine` */
    MediumAquamarine2010 = 'mediumAquamarine',
    /** undefined. Serialized value: `mediumBlue` */
    MediumBlue2010 = 'mediumBlue',
    /** undefined. Serialized value: `mediumOrchid` */
    MediumOrchid2010 = 'mediumOrchid',
    /** undefined. Serialized value: `mediumPurple` */
    MediumPurple2010 = 'mediumPurple',
    /** undefined. Serialized value: `mediumSeaGreen` */
    MediumSeaGreen2010 = 'mediumSeaGreen',
    /** undefined. Serialized value: `mediumSlateBlue` */
    MediumSlateBlue2010 = 'mediumSlateBlue',
    /** undefined. Serialized value: `mediumSpringGreen` */
    MediumSpringGreen2010 = 'mediumSpringGreen',
    /** undefined. Serialized value: `mediumTurquoise` */
    MediumTurquoise2010 = 'mediumTurquoise',
    /** undefined. Serialized value: `mediumVioletRed` */
    MediumVioletRed2010 = 'mediumVioletRed',
    /** undefined. Serialized value: `dkGrey` */
    DarkGrey = 'dkGrey',
    /** undefined. Serialized value: `dimGrey` */
    DimGrey = 'dimGrey',
    /** undefined. Serialized value: `dkSlateGrey` */
    DarkSlateGrey = 'dkSlateGrey',
    /** undefined. Serialized value: `grey` */
    Grey = 'grey',
    /** undefined. Serialized value: `ltGrey` */
    LightGrey = 'ltGrey',
    /** undefined. Serialized value: `ltSlateGrey` */
    LightSlateGrey = 'ltSlateGrey',
    /** undefined. Serialized value: `slateGrey` */
    SlateGrey = 'slateGrey',
}

export const PresetColorValuesArray = [
    PresetColorValues.AliceBlue,
    PresetColorValues.AntiqueWhite,
    PresetColorValues.Aqua,
    PresetColorValues.Aquamarine,
    PresetColorValues.Azure,
    PresetColorValues.Beige,
    PresetColorValues.Bisque,
    PresetColorValues.Black,
    PresetColorValues.BlanchedAlmond,
    PresetColorValues.Blue,
    PresetColorValues.BlueViolet,
    PresetColorValues.Brown,
    PresetColorValues.BurlyWood,
    PresetColorValues.CadetBlue,
    PresetColorValues.Chartreuse,
    PresetColorValues.Chocolate,
    PresetColorValues.Coral,
    PresetColorValues.CornflowerBlue,
    PresetColorValues.Cornsilk,
    PresetColorValues.Crimson,
    PresetColorValues.Cyan,
    PresetColorValues.DarkBlue,
    PresetColorValues.DarkCyan,
    PresetColorValues.DarkGoldenrod,
    PresetColorValues.DarkGray,
    PresetColorValues.DarkGreen,
    PresetColorValues.DarkKhaki,
    PresetColorValues.DarkMagenta,
    PresetColorValues.DarkOliveGreen,
    PresetColorValues.DarkOrange,
    PresetColorValues.DarkOrchid,
    PresetColorValues.DarkRed,
    PresetColorValues.DarkSalmon,
    PresetColorValues.DarkSeaGreen,
    PresetColorValues.DarkSlateBlue,
    PresetColorValues.DarkSlateGray,
    PresetColorValues.DarkTurquoise,
    PresetColorValues.DarkViolet,
    PresetColorValues.DeepPink,
    PresetColorValues.DeepSkyBlue,
    PresetColorValues.DimGray,
    PresetColorValues.DodgerBlue,
    PresetColorValues.Firebrick,
    PresetColorValues.FloralWhite,
    PresetColorValues.ForestGreen,
    PresetColorValues.Fuchsia,
    PresetColorValues.Gainsboro,
    PresetColorValues.GhostWhite,
    PresetColorValues.Gold,
    PresetColorValues.Goldenrod,
    PresetColorValues.Gray,
    PresetColorValues.Green,
    PresetColorValues.GreenYellow,
    PresetColorValues.Honeydew,
    PresetColorValues.HotPink,
    PresetColorValues.IndianRed,
    PresetColorValues.Indigo,
    PresetColorValues.Ivory,
    PresetColorValues.Khaki,
    PresetColorValues.Lavender,
    PresetColorValues.LavenderBlush,
    PresetColorValues.LawnGreen,
    PresetColorValues.LemonChiffon,
    PresetColorValues.LightBlue,
    PresetColorValues.LightCoral,
    PresetColorValues.LightCyan,
    PresetColorValues.LightGoldenrodYellow,
    PresetColorValues.LightGray,
    PresetColorValues.LightGreen,
    PresetColorValues.LightPink,
    PresetColorValues.LightSalmon,
    PresetColorValues.LightSeaGreen,
    PresetColorValues.LightSkyBlue,
    PresetColorValues.LightSlateGray,
    PresetColorValues.LightSteelBlue,
    PresetColorValues.LightYellow,
    PresetColorValues.Lime,
    PresetColorValues.LimeGreen,
    PresetColorValues.Linen,
    PresetColorValues.Magenta,
    PresetColorValues.Maroon,
    PresetColorValues.MedAquamarine,
    PresetColorValues.MediumBlue,
    PresetColorValues.MediumOrchid,
    PresetColorValues.MediumPurple,
    PresetColorValues.MediumSeaGreen,
    PresetColorValues.MediumSlateBlue,
    PresetColorValues.MediumSpringGreen,
    PresetColorValues.MediumTurquoise,
    PresetColorValues.MediumVioletRed,
    PresetColorValues.MidnightBlue,
    PresetColorValues.MintCream,
    PresetColorValues.MistyRose,
    PresetColorValues.Moccasin,
    PresetColorValues.NavajoWhite,
    PresetColorValues.Navy,
    PresetColorValues.OldLace,
    PresetColorValues.Olive,
    PresetColorValues.OliveDrab,
    PresetColorValues.Orange,
    PresetColorValues.OrangeRed,
    PresetColorValues.Orchid,
    PresetColorValues.PaleGoldenrod,
    PresetColorValues.PaleGreen,
    PresetColorValues.PaleTurquoise,
    PresetColorValues.PaleVioletRed,
    PresetColorValues.PapayaWhip,
    PresetColorValues.PeachPuff,
    PresetColorValues.Peru,
    PresetColorValues.Pink,
    PresetColorValues.Plum,
    PresetColorValues.PowderBlue,
    PresetColorValues.Purple,
    PresetColorValues.Red,
    PresetColorValues.RosyBrown,
    PresetColorValues.RoyalBlue,
    PresetColorValues.SaddleBrown,
    PresetColorValues.Salmon,
    PresetColorValues.SandyBrown,
    PresetColorValues.SeaGreen,
    PresetColorValues.SeaShell,
    PresetColorValues.Sienna,
    PresetColorValues.Silver,
    PresetColorValues.SkyBlue,
    PresetColorValues.SlateBlue,
    PresetColorValues.SlateGray,
    PresetColorValues.Snow,
    PresetColorValues.SpringGreen,
    PresetColorValues.SteelBlue,
    PresetColorValues.Tan,
    PresetColorValues.Teal,
    PresetColorValues.Thistle,
    PresetColorValues.Tomato,
    PresetColorValues.Turquoise,
    PresetColorValues.Violet,
    PresetColorValues.Wheat,
    PresetColorValues.White,
    PresetColorValues.WhiteSmoke,
    PresetColorValues.Yellow,
    PresetColorValues.YellowGreen,
    PresetColorValues.DarkBlue2010,
    PresetColorValues.DarkCyan2010,
    PresetColorValues.DarkGoldenrod2010,
    PresetColorValues.DarkGray2010,
    PresetColorValues.DarkGrey2010,
    PresetColorValues.DarkGreen2010,
    PresetColorValues.DarkKhaki2010,
    PresetColorValues.DarkMagenta2010,
    PresetColorValues.DarkOliveGreen2010,
    PresetColorValues.DarkOrange2010,
    PresetColorValues.DarkOrchid2010,
    PresetColorValues.DarkRed2010,
    PresetColorValues.DarkSalmon2010,
    PresetColorValues.DarkSeaGreen2010,
    PresetColorValues.DarkSlateBlue2010,
    PresetColorValues.DarkSlateGray2010,
    PresetColorValues.DarkSlateGrey2010,
    PresetColorValues.DarkTurquoise2010,
    PresetColorValues.DarkViolet2010,
    PresetColorValues.LightBlue2010,
    PresetColorValues.LightCoral2010,
    PresetColorValues.LightCyan2010,
    PresetColorValues.LightGoldenrodYellow2010,
    PresetColorValues.LightGray2010,
    PresetColorValues.LightGrey2010,
    PresetColorValues.LightGreen2010,
    PresetColorValues.LightPink2010,
    PresetColorValues.LightSalmon2010,
    PresetColorValues.LightSeaGreen2010,
    PresetColorValues.LightSkyBlue2010,
    PresetColorValues.LightSlateGray2010,
    PresetColorValues.LightSlateGrey2010,
    PresetColorValues.LightSteelBlue2010,
    PresetColorValues.LightYellow2010,
    PresetColorValues.MediumAquamarine2010,
    PresetColorValues.MediumBlue2010,
    PresetColorValues.MediumOrchid2010,
    PresetColorValues.MediumPurple2010,
    PresetColorValues.MediumSeaGreen2010,
    PresetColorValues.MediumSlateBlue2010,
    PresetColorValues.MediumSpringGreen2010,
    PresetColorValues.MediumTurquoise2010,
    PresetColorValues.MediumVioletRed2010,
    PresetColorValues.DarkGrey,
    PresetColorValues.DimGrey,
    PresetColorValues.DarkSlateGrey,
    PresetColorValues.Grey,
    PresetColorValues.LightGrey,
    PresetColorValues.LightSlateGrey,
    PresetColorValues.SlateGrey,
] as const;

/** Defines the BlipExtension Class. Serialized as `a:ext` */
export class BlipExtension extends OxmlCompositeElement<A14ImageProperties | A14UseLocalDpi | Wp15WebVideoProperty | AsvgSVGBlip | A1611PictureAttributionSourceURL | WoeOEmbed | AoeOEmbedShared> {

    public static override _Q = 'a:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns A14ImageProperties. */
    public get imageProperties(): A14ImageProperties | undefined { return this._f(A14ImageProperties); }
    /** Returns A14UseLocalDpi. */
    public get useLocalDpi(): A14UseLocalDpi | undefined { return this._f(A14UseLocalDpi); }
    /** Returns Wp15WebVideoProperty. */
    public get webVideoProperty(): Wp15WebVideoProperty | undefined { return this._f(Wp15WebVideoProperty); }
    /** Returns AsvgSVGBlip. */
    public get sVGBlip(): AsvgSVGBlip | undefined { return this._f(AsvgSVGBlip); }
    /** Returns A1611PictureAttributionSourceURL. */
    public get pictureAttributionSourceURL(): A1611PictureAttributionSourceURL | undefined { return this._f(A1611PictureAttributionSourceURL); }
    /** Returns WoeOEmbed. */
    public get oEmbed(): WoeOEmbed | undefined { return this._f(WoeOEmbed); }
    /** Returns AoeOEmbedShared. */
    public get oEmbedShared(): AoeOEmbedShared | undefined { return this._f(AoeOEmbedShared); }

}
/** Future extensions.. Serialized as `a:extLst` */
export class BlipExtensionList extends OxmlCompositeElement<BlipExtension> {

    public static override _Q = 'a:extLst';

}
/** Defines the NonVisualPicturePropertiesExtension Class. Serialized as `a:ext` */
export class NonVisualPicturePropertiesExtension extends OxmlCompositeElement<A14CameraTool | A15SignatureLine | A15ObjectProperties | AlfLiveFeedProperties | AifImageFormula> {

    public static override _Q = 'a:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns A14CameraTool. */
    public get cameraTool(): A14CameraTool | undefined { return this._f(A14CameraTool); }
    /** Returns A15SignatureLine. */
    public get signatureLine(): A15SignatureLine | undefined { return this._f(A15SignatureLine); }
    /** Returns A15ObjectProperties. */
    public get objectProperties(): A15ObjectProperties | undefined { return this._f(A15ObjectProperties); }
    /** Returns AlfLiveFeedProperties. */
    public get liveFeedProperties(): AlfLiveFeedProperties | undefined { return this._f(AlfLiveFeedProperties); }
    /** Returns AifImageFormula. */
    public get imageFormula(): AifImageFormula | undefined { return this._f(AifImageFormula); }

}
/** Defines the NonVisualPicturePropertiesExtensionList Class. Serialized as `a:extLst` */
export class NonVisualPicturePropertiesExtensionList extends OxmlCompositeElement<NonVisualPicturePropertiesExtension> {

    public static override _Q = 'a:extLst';

}
/** Defines the PictureLocks Class. Serialized as `a:picLocks` */
export class PictureLocks extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'a:picLocks';
    public static override _A = [':noGrp',':noSelect',':noRot',':noChangeAspect',':noMove',':noResize',':noEditPoints',':noAdjustHandles',':noChangeArrowheads',':noChangeShapeType',':noCrop',];
    /** Disallow Shape Grouping. Serialized as `:noGrp` */
    public get noGrouping(): BooleanValue | undefined { return this._g(':noGrp'); }
    public set noGrouping(v: BooleanValue | undefined) { this._s(':noGrp', v); }
    /** Disallow Shape Selection. Serialized as `:noSelect` */
    public get noSelection(): BooleanValue | undefined { return this._g(':noSelect'); }
    public set noSelection(v: BooleanValue | undefined) { this._s(':noSelect', v); }
    /** Disallow Shape Rotation. Serialized as `:noRot` */
    public get noRotation(): BooleanValue | undefined { return this._g(':noRot'); }
    public set noRotation(v: BooleanValue | undefined) { this._s(':noRot', v); }
    /** Disallow Aspect Ratio Change. Serialized as `:noChangeAspect` */
    public get noChangeAspect(): BooleanValue | undefined { return this._g(':noChangeAspect'); }
    public set noChangeAspect(v: BooleanValue | undefined) { this._s(':noChangeAspect', v); }
    /** Disallow Shape Movement. Serialized as `:noMove` */
    public get noMove(): BooleanValue | undefined { return this._g(':noMove'); }
    public set noMove(v: BooleanValue | undefined) { this._s(':noMove', v); }
    /** Disallow Shape Resize. Serialized as `:noResize` */
    public get noResize(): BooleanValue | undefined { return this._g(':noResize'); }
    public set noResize(v: BooleanValue | undefined) { this._s(':noResize', v); }
    /** Disallow Shape Point Editing. Serialized as `:noEditPoints` */
    public get noEditPoints(): BooleanValue | undefined { return this._g(':noEditPoints'); }
    public set noEditPoints(v: BooleanValue | undefined) { this._s(':noEditPoints', v); }
    /** Disallow Showing Adjust Handles. Serialized as `:noAdjustHandles` */
    public get noAdjustHandles(): BooleanValue | undefined { return this._g(':noAdjustHandles'); }
    public set noAdjustHandles(v: BooleanValue | undefined) { this._s(':noAdjustHandles', v); }
    /** Disallow Arrowhead Changes. Serialized as `:noChangeArrowheads` */
    public get noChangeArrowheads(): BooleanValue | undefined { return this._g(':noChangeArrowheads'); }
    public set noChangeArrowheads(v: BooleanValue | undefined) { this._s(':noChangeArrowheads', v); }
    /** Disallow Shape Type Change. Serialized as `:noChangeShapeType` */
    public get noChangeShapeType(): BooleanValue | undefined { return this._g(':noChangeShapeType'); }
    public set noChangeShapeType(v: BooleanValue | undefined) { this._s(':noChangeShapeType', v); }
    /** Disallow Crop Changes. Serialized as `:noCrop` */
    public get noCrop(): BooleanValue | undefined { return this._g(':noCrop'); }
    public set noCrop(v: BooleanValue | undefined) { this._s(':noCrop', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the NonVisualDrawingPropertiesExtension Class. Serialized as `a:ext` */
export class NonVisualDrawingPropertiesExtension extends OxmlCompositeElement<A14CompatExtension | A15BackgroundProperties | A16CreationId | A16PredecessorDrawingElementReference | AdecDecorative | AclshClassificationOutcome | AslScriptLink> {

    public static override _Q = 'a:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns A14CompatExtension. */
    public get compatExtension(): A14CompatExtension | undefined { return this._f(A14CompatExtension); }
    /** Returns A15BackgroundProperties. */
    public get backgroundProperties(): A15BackgroundProperties | undefined { return this._f(A15BackgroundProperties); }
    /** Returns A16CreationId. */
    public get creationId(): A16CreationId | undefined { return this._f(A16CreationId); }
    /** Returns A16PredecessorDrawingElementReference. */
    public get predecessorDrawingElementReference(): A16PredecessorDrawingElementReference | undefined { return this._f(A16PredecessorDrawingElementReference); }
    /** Returns AdecDecorative. */
    public get decorative(): AdecDecorative | undefined { return this._f(AdecDecorative); }
    /** Returns AclshClassificationOutcome. */
    public get classificationOutcome(): AclshClassificationOutcome | undefined { return this._f(AclshClassificationOutcome); }
    /** Returns AslScriptLink. */
    public get scriptLink(): AslScriptLink | undefined { return this._f(AslScriptLink); }

}
/** Future extensions.. Serialized as `a:extLst` */
export class LinePropertiesExtensionList extends OxmlCompositeElement<LinePropertiesExtension> {

    public static override _Q = 'a:extLst';

}
/** Defines the LineEndPropertiesType Class. */
export abstract class LineEndPropertiesType extends OxmlLeafElement {

    public static override _A = [':type',':w',':len',];
    /** Line Head/End Type. Serialized as `:type` */
    public get type(): LineEndValues | undefined { return this._g(':type'); }
    public set type(v: LineEndValues | undefined) { this._s(':type', v); }
    /** Width of Head/End. Serialized as `:w` */
    public get width(): LineEndWidthValues | undefined { return this._g(':w'); }
    public set width(v: LineEndWidthValues | undefined) { this._s(':w', v); }
    /** Length of Head/End. Serialized as `:len` */
    public get length(): LineEndLengthValues | undefined { return this._g(':len'); }
    public set length(v: LineEndLengthValues | undefined) { this._s(':len', v); }

}
/** default tail line end style is none. Serialized as `a:tailEnd` */
export class TailEnd extends LineEndPropertiesType {

    public static override _Q = 'a:tailEnd';

}
/** default head line end style is none. Serialized as `a:headEnd` */
export class HeadEnd extends LineEndPropertiesType {

    public static override _Q = 'a:headEnd';

}
/** Defines the LinePropertiesExtension Class. Serialized as `a:ext` */
export class LinePropertiesExtension extends OxmlCompositeElement<AskLineSketchStyleProperties> {

    public static override _Q = 'a:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns AskLineSketchStyleProperties. */
    public get lineSketchStyleProperties(): AskLineSketchStyleProperties | undefined { return this._f(AskLineSketchStyleProperties); }

}
/** Future extensions.. Serialized as `a:extLst` */
export class HyperlinkExtensionList extends OxmlCompositeElement<HyperlinkExtension> {

    public static override _Q = 'a:extLst';

}
/** Defines the HyperlinkExtension Class. Serialized as `a:ext` */
export class HyperlinkExtension extends OxmlCompositeElement<AhypHyperlinkColor> {

    public static override _Q = 'a:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns AhypHyperlinkColor. */
    public get hyperlinkColor(): AhypHyperlinkColor | undefined { return this._f(AhypHyperlinkColor); }

}
/** Defines the PtExtension Class. Serialized as `a:ext` */
export class PtExtension extends OxmlCompositeElement<Dgm14NonVisualDrawingProperties> {

    public static override _Q = 'a:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns Dgm14NonVisualDrawingProperties. */
    public get nonVisualDrawingProperties(): Dgm14NonVisualDrawingProperties | undefined { return this._f(Dgm14NonVisualDrawingProperties); }

}
/** Defines the DataModelExtension Class. Serialized as `a:ext` */
export class DataModelExtension extends OxmlCompositeElement<DspDataModelExtensionBlock | Dgm14RecolorImages> {

    public static override _Q = 'a:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns DspDataModelExtensionBlock. */
    public get dataModelExtensionBlock(): DspDataModelExtensionBlock | undefined { return this._f(DspDataModelExtensionBlock); }
    /** Returns Dgm14RecolorImages. */
    public get recolorImages(): Dgm14RecolorImages | undefined { return this._f(Dgm14RecolorImages); }

}
/** Defines the ConnectorLockingExtensionList Class. Serialized as `a:extLst` */
export class ConnectorLockingExtensionList extends OxmlCompositeElement<ConnectorLockingExtension> {

    public static override _Q = 'a:extLst';

}
/** Defines the NonVisualDrawingPropertiesExtensionList Class. Serialized as `a:extLst` */
export class NonVisualDrawingPropertiesExtensionList extends OxmlCompositeElement<NonVisualDrawingPropertiesExtension> {

    public static override _Q = 'a:extLst';

}
/** Defines the RightToLeft Class. Serialized as `a:rtl` */
export class RightToLeft extends OxmlLeafElement {

    public static override _Q = 'a:rtl';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): BooleanValue | undefined { return this._g(':val'); }
    public set val(v: BooleanValue | undefined) { this._s(':val', v); }

}
/** Defines the HyperlinkType Class. */
export abstract class HyperlinkType extends OxmlCompositeElement<HyperlinkSound | HyperlinkExtensionList> {

    public static override _A = ['r:id',':invalidUrl',':action',':tgtFrame',':tooltip',':history',':highlightClick',':endSnd',];
    /** relationship identifier to find target URI. Serialized as `r:id` */
    public get id(): StringValue | undefined { return this._g('r:id'); }
    public set id(v: StringValue | undefined) { this._s('r:id', v); }
    /** In case the url is invalid so we can't create a relationship, we'll save it here, r:id will point to a NULL one. Serialized as `:invalidUrl` */
    public get invalidUrl(): StringValue | undefined { return this._g(':invalidUrl'); }
    public set invalidUrl(v: StringValue | undefined) { this._s(':invalidUrl', v); }
    /** Action to take, it may still need r:id to specify an action target. Serialized as `:action` */
    public get action(): StringValue | undefined { return this._g(':action'); }
    public set action(v: StringValue | undefined) { this._s(':action', v); }
    /** target frame for navigating to the URI. Serialized as `:tgtFrame` */
    public get targetFrame(): StringValue | undefined { return this._g(':tgtFrame'); }
    public set targetFrame(v: StringValue | undefined) { this._s(':tgtFrame', v); }
    /** tooltip for display. Serialized as `:tooltip` */
    public get tooltip(): StringValue | undefined { return this._g(':tooltip'); }
    public set tooltip(v: StringValue | undefined) { this._s(':tooltip', v); }
    /** whether to add this URI to the history when navigating to it. Serialized as `:history` */
    public get history(): BooleanValue | undefined { return this._g(':history'); }
    public set history(v: BooleanValue | undefined) { this._s(':history', v); }
    /** Whether to highlight it when click on a shape. Serialized as `:highlightClick` */
    public get highlightClick(): BooleanValue | undefined { return this._g(':highlightClick'); }
    public set highlightClick(v: BooleanValue | undefined) { this._s(':highlightClick', v); }
    /** Whether to stop previous sound when click on it. Serialized as `:endSnd` */
    public get endSound(): BooleanValue | undefined { return this._g(':endSnd'); }
    public set endSound(v: BooleanValue | undefined) { this._s(':endSnd', v); }
    /** Sound to play.. */
    public get hyperlinkSound(): HyperlinkSound | undefined { return this._f(HyperlinkSound); }
    /** Future extensions.. */
    public get hyperlinkExtensionList(): HyperlinkExtensionList | undefined { return this._f(HyperlinkExtensionList); }

}
/** Defines the HyperlinkOnHover Class. Serialized as `a:hlinkHover` */
export class HyperlinkOnHover extends HyperlinkType {

    public static override _Q = 'a:hlinkHover';

}
/** Defines the HyperlinkOnMouseOver Class. Serialized as `a:hlinkMouseOver` */
export class HyperlinkOnMouseOver extends HyperlinkType {

    public static override _Q = 'a:hlinkMouseOver';

}
/** Defines the HyperlinkOnClick Class. Serialized as `a:hlinkClick` */
export class HyperlinkOnClick extends HyperlinkType {

    public static override _Q = 'a:hlinkClick';

}
/** Defines the OfficeStyleSheetExtensionList Class. Serialized as `a:extLst` */
export class OfficeStyleSheetExtensionList extends OxmlCompositeElement<OfficeStyleSheetExtension> {

    public static override _Q = 'a:extLst';

}
/** Defines the CustomColorList Class. Serialized as `a:custClrLst` */
export class CustomColorList extends OxmlCompositeElement<CustomColor> {

    public static override _Q = 'a:custClrLst';

}
/** Defines the ExtraColorSchemeList Class. Serialized as `a:extraClrSchemeLst` */
export class ExtraColorSchemeList extends OxmlCompositeElement<ExtraColorScheme> {

    public static override _Q = 'a:extraClrSchemeLst';

}
/** Defines the ObjectDefaults Class. Serialized as `a:objectDefaults` */
export class ObjectDefaults extends OxmlCompositeElement<ShapeDefault | LineDefault | TextDefault | ExtensionList> {

    public static override _Q = 'a:objectDefaults';
    /** Shape Default. */
    public get shapeDefault(): ShapeDefault | undefined { return this._f(ShapeDefault); }
    /** Line Default. */
    public get lineDefault(): LineDefault | undefined { return this._f(LineDefault); }
    /** Text Default. */
    public get textDefault(): TextDefault | undefined { return this._f(TextDefault); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the NonVisualGroupDrawingShapePropsExtensionList Class. Serialized as `a:extLst` */
export class NonVisualGroupDrawingShapePropsExtensionList extends OxmlCompositeElement<NonVisualGroupDrawingShapePropsExtension> {

    public static override _Q = 'a:extLst';

}
/** Defines the GroupShapeLocks Class. Serialized as `a:grpSpLocks` */
export class GroupShapeLocks extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'a:grpSpLocks';
    public static override _A = [':noGrp',':noUngrp',':noSelect',':noRot',':noChangeAspect',':noMove',':noResize',];
    /** Disallow Shape Grouping. Serialized as `:noGrp` */
    public get noGrouping(): BooleanValue | undefined { return this._g(':noGrp'); }
    public set noGrouping(v: BooleanValue | undefined) { this._s(':noGrp', v); }
    /** Disallow Shape Ungrouping. Serialized as `:noUngrp` */
    public get noUngrouping(): BooleanValue | undefined { return this._g(':noUngrp'); }
    public set noUngrouping(v: BooleanValue | undefined) { this._s(':noUngrp', v); }
    /** Disallow Shape Selection. Serialized as `:noSelect` */
    public get noSelection(): BooleanValue | undefined { return this._g(':noSelect'); }
    public set noSelection(v: BooleanValue | undefined) { this._s(':noSelect', v); }
    /** Disallow Shape Rotation. Serialized as `:noRot` */
    public get noRotation(): BooleanValue | undefined { return this._g(':noRot'); }
    public set noRotation(v: BooleanValue | undefined) { this._s(':noRot', v); }
    /** Disallow Aspect Ratio Change. Serialized as `:noChangeAspect` */
    public get noChangeAspect(): BooleanValue | undefined { return this._g(':noChangeAspect'); }
    public set noChangeAspect(v: BooleanValue | undefined) { this._s(':noChangeAspect', v); }
    /** Disallow Moving Shape. Serialized as `:noMove` */
    public get noMove(): BooleanValue | undefined { return this._g(':noMove'); }
    public set noMove(v: BooleanValue | undefined) { this._s(':noMove', v); }
    /** Disallow Shape Resizing. Serialized as `:noResize` */
    public get noResize(): BooleanValue | undefined { return this._g(':noResize'); }
    public set noResize(v: BooleanValue | undefined) { this._s(':noResize', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the ConnectorLockingExtension Class. Serialized as `a:ext` */
export class ConnectorLockingExtension extends OxmlCompositeElement<Graphic> {

    public static override _Q = 'a:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns Graphic. */
    public get graphic(): Graphic | undefined { return this._f(Graphic); }

}
/** Defines the OfficeStyleSheetExtension Class. Serialized as `a:ext` */
export class OfficeStyleSheetExtension extends OxmlCompositeElement<Thm15ThemeFamily> {

    public static override _Q = 'a:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns Thm15ThemeFamily. */
    public get themeFamily(): Thm15ThemeFamily | undefined { return this._f(Thm15ThemeFamily); }

}
/** Defines the NonVisualGroupDrawingShapePropsExtension Class. Serialized as `a:ext` */
export class NonVisualGroupDrawingShapePropsExtension extends OxmlCompositeElement<A15NonVisualGroupProperties> {

    public static override _Q = 'a:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns A15NonVisualGroupProperties. */
    public get nonVisualGroupProperties(): A15NonVisualGroupProperties | undefined { return this._f(A15NonVisualGroupProperties); }

}
/** Defines the GvmlGroupShapeExtensionList Class. Serialized as `a:extLst` */
export class GvmlGroupShapeExtensionList extends OxmlCompositeElement<GvmlGroupShapeExtension> {

    public static override _Q = 'a:extLst';

}
/** Group shape. Serialized as `a:grpSp` */
export class GroupShape extends OxmlCompositeElement<NonVisualGroupShapeProperties | VisualGroupShapeProperties | TextShape | Shape | ConnectionShape | Picture | A14GvmlContentPart | GraphicFrame | GroupShape | GvmlGroupShapeExtensionList> {

    public static override _Q = 'a:grpSp';
    /** Non-Visual Properties for a Group Shape. */
    public get nonVisualGroupShapeProperties(): NonVisualGroupShapeProperties | undefined { return this._f(NonVisualGroupShapeProperties); }
    /** Visual Group Shape Properties. */
    public get visualGroupShapeProperties(): VisualGroupShapeProperties | undefined { return this._f(VisualGroupShapeProperties); }

}
/** Graphic Frame. Serialized as `a:graphicFrame` */
export class GraphicFrame extends OxmlCompositeElement<NonVisualGraphicFrameProperties | Graphic | Transform2D | ExtensionList> {

    public static override _Q = 'a:graphicFrame';
    /** Non-Visual Properties for a Graphic Frame. */
    public get nonVisualGraphicFrameProperties(): NonVisualGraphicFrameProperties | undefined { return this._f(NonVisualGraphicFrameProperties); }
    /** Returns Graphic. */
    public get graphic(): Graphic | undefined { return this._f(Graphic); }
    /** Returns Transform2D. */
    public get transform2D(): Transform2D | undefined { return this._f(Transform2D); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Picture. Serialized as `a:pic` */
export class Picture extends OxmlCompositeElement<NonVisualPictureProperties | BlipFill | ShapeProperties | ShapeStyle | ExtensionList> {

    public static override _Q = 'a:pic';
    /** Non-Visual Properties for a Picture. */
    public get nonVisualPictureProperties(): NonVisualPictureProperties | undefined { return this._f(NonVisualPictureProperties); }
    /** Picture Fill. */
    public get blipFill(): BlipFill | undefined { return this._f(BlipFill); }
    /** Shape Properties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns ShapeStyle. */
    public get shapeStyle(): ShapeStyle | undefined { return this._f(ShapeStyle); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Connection Shape. Serialized as `a:cxnSp` */
export class ConnectionShape extends OxmlCompositeElement<NonVisualConnectionShapeProperties | ShapeProperties | ShapeStyle | ExtensionList> {

    public static override _Q = 'a:cxnSp';
    /** Non-Visual Properties for a Connection Shape. */
    public get nonVisualConnectionShapeProperties(): NonVisualConnectionShapeProperties | undefined { return this._f(NonVisualConnectionShapeProperties); }
    /** Visual Properties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Shape Style. */
    public get shapeStyle(): ShapeStyle | undefined { return this._f(ShapeStyle); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Shape. Serialized as `a:sp` */
export class Shape extends OxmlCompositeElement<NonVisualShapeProperties | ShapeProperties | TextShape | ShapeStyle | ExtensionList> {

    public static override _Q = 'a:sp';
    /** Non-Visual Properties for a Shape. */
    public get nonVisualShapeProperties(): NonVisualShapeProperties | undefined { return this._f(NonVisualShapeProperties); }
    /** Visual Properties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Text Shape. */
    public get textShape(): TextShape | undefined { return this._f(TextShape); }
    /** Style. */
    public get shapeStyle(): ShapeStyle | undefined { return this._f(ShapeStyle); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Visual Group Shape Properties. Serialized as `a:grpSpPr` */
export class VisualGroupShapeProperties extends OxmlCompositeElement<TransformGroup | NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill | EffectList | EffectDag | Scene3DType | ExtensionList> {

    public static override _Q = 'a:grpSpPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Grouped Objects. */
    public get transformGroup(): TransformGroup | undefined { return this._f(TransformGroup); }

}
/** Non-Visual Properties for a Group Shape. Serialized as `a:nvGrpSpPr` */
export class NonVisualGroupShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGroupShapeDrawingProperties> {

    public static override _Q = 'a:nvGrpSpPr';
    /** Returns NonVisualDrawingProperties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Non-Visual Group Shape Drawing Properties. */
    public get nonVisualGroupShapeDrawingProperties(): NonVisualGroupShapeDrawingProperties | undefined { return this._f(NonVisualGroupShapeDrawingProperties); }

}
/** Defines the ShapePropertiesExtensionList Class. Serialized as `a:extLst` */
export class ShapePropertiesExtensionList extends OxmlCompositeElement<ShapePropertiesExtension> {

    public static override _Q = 'a:extLst';

}
/** Defines the GvmlGroupShapeExtension Class. Serialized as `a:ext` */
export class GvmlGroupShapeExtension extends OxmlCompositeElement<A14IsCanvas> {

    public static override _Q = 'a:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns A14IsCanvas. */
    public get isCanvas(): A14IsCanvas | undefined { return this._f(A14IsCanvas); }

}
/** Defines the ShapePropertiesExtension Class. Serialized as `a:ext` */
export class ShapePropertiesExtension extends OxmlCompositeElement<A14HiddenFillProperties | A14HiddenLineProperties | A14HiddenEffectsProperties | A14HiddenScene3D | A14HiddenShape3D | A14ShadowObscured> {

    public static override _Q = 'a:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }
    /** Returns A14HiddenFillProperties. */
    public get hiddenFillProperties(): A14HiddenFillProperties | undefined { return this._f(A14HiddenFillProperties); }
    /** Returns A14HiddenLineProperties. */
    public get hiddenLineProperties(): A14HiddenLineProperties | undefined { return this._f(A14HiddenLineProperties); }
    /** Returns A14HiddenEffectsProperties. */
    public get hiddenEffectsProperties(): A14HiddenEffectsProperties | undefined { return this._f(A14HiddenEffectsProperties); }
    /** Returns A14HiddenScene3D. */
    public get hiddenScene3D(): A14HiddenScene3D | undefined { return this._f(A14HiddenScene3D); }
    /** Returns A14HiddenShape3D. */
    public get hiddenShape3D(): A14HiddenShape3D | undefined { return this._f(A14HiddenShape3D); }
    /** Returns A14ShadowObscured. */
    public get shadowObscured(): A14ShadowObscured | undefined { return this._f(A14ShadowObscured); }

}
/** Defines the Text Class. Serialized as `a:t` */
export class Text extends OxmlLeafTextElement {

    public static override _Q = 'a:t';

}
/** Tab List. Serialized as `a:tabLst` */
export class TabStopList extends OxmlCompositeElement<TabStop> {

    public static override _Q = 'a:tabLst';

}
/** Defines the TextSpacingType Class. */
export abstract class TextSpacingType extends OxmlCompositeElement<SpacingPercent | SpacingPoints> {

    /** Spacing Percent. */
    public get spacingPercent(): SpacingPercent | undefined { return this._f(SpacingPercent); }
    /** Spacing Points. */
    public get spacingPoints(): SpacingPoints | undefined { return this._f(SpacingPoints); }

}
/** Space After. Serialized as `a:spcAft` */
export class SpaceAfter extends TextSpacingType {

    public static override _Q = 'a:spcAft';

}
/** Space Before. Serialized as `a:spcBef` */
export class SpaceBefore extends TextSpacingType {

    public static override _Q = 'a:spcBef';

}
/** Line Spacing. Serialized as `a:lnSpc` */
export class LineSpacing extends TextSpacingType {

    public static override _Q = 'a:lnSpc';

}
/** Spacing Points. Serialized as `a:spcPts` */
export class SpacingPoints extends OxmlLeafElement {

    public static override _Q = 'a:spcPts';
    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): Int32Value | undefined { return this._g(':val'); }
    public set val(v: Int32Value | undefined) { this._s(':val', v); }

}
/** Spacing Percent. Serialized as `a:spcPct` */
export class SpacingPercent extends OxmlLeafElement {

    public static override _Q = 'a:spcPct';
    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): Int32Value | undefined { return this._g(':val'); }
    public set val(v: Int32Value | undefined) { this._s(':val', v); }

}
/** Tab Stop. Serialized as `a:tab` */
export class TabStop extends OxmlLeafElement {

    public static override _Q = 'a:tab';
    public static override _A = [':pos',':algn',];
    /** Tab Position. Serialized as `:pos` */
    public get position(): Int32Value | undefined { return this._g(':pos'); }
    public set position(v: Int32Value | undefined) { this._s(':pos', v); }
    /** Tab Alignment. Serialized as `:algn` */
    public get alignment(): TextTabAlignmentValues | undefined { return this._g(':algn'); }
    public set alignment(v: TextTabAlignmentValues | undefined) { this._s(':algn', v); }

}
/** Text Paragraphs. Serialized as `a:p` */
export class Paragraph extends OxmlCompositeElement<ParagraphProperties | Run | Break | Field | A14TextMath | EndParagraphRunProperties> {

    public static override _Q = 'a:p';
    /** Text Paragraph Properties. */
    public get paragraphProperties(): ParagraphProperties | undefined { return this._f(ParagraphProperties); }

}
/** Defines the TextCharacterPropertiesType Class. */
export abstract class TextCharacterPropertiesType extends OxmlCompositeElement<Outline | NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill | EffectList | EffectDag | Highlight | UnderlineFollowsText | Underline | UnderlineFillText | UnderlineFill | LatinFont | EastAsianFont | ComplexScriptFont | SymbolFont | HyperlinkOnClick | HyperlinkOnMouseOver | RightToLeft | ExtensionList> {

    public static override _A = [':kumimoji',':lang',':altLang',':sz',':b',':i',':u',':strike',':kern',':cap',':spc',':normalizeH',':baseline',':noProof',':dirty',':err',':smtClean',':smtId',':bmk',];
    /** kumimoji. Serialized as `:kumimoji` */
    public get kumimoji(): BooleanValue | undefined { return this._g(':kumimoji'); }
    public set kumimoji(v: BooleanValue | undefined) { this._s(':kumimoji', v); }
    /** lang. Serialized as `:lang` */
    public get language(): StringValue | undefined { return this._g(':lang'); }
    public set language(v: StringValue | undefined) { this._s(':lang', v); }
    /** altLang. Serialized as `:altLang` */
    public get alternativeLanguage(): StringValue | undefined { return this._g(':altLang'); }
    public set alternativeLanguage(v: StringValue | undefined) { this._s(':altLang', v); }
    /** sz. Serialized as `:sz` */
    public get fontSize(): Int32Value | undefined { return this._g(':sz'); }
    public set fontSize(v: Int32Value | undefined) { this._s(':sz', v); }
    /** b. Serialized as `:b` */
    public get bold(): BooleanValue | undefined { return this._g(':b'); }
    public set bold(v: BooleanValue | undefined) { this._s(':b', v); }
    /** i. Serialized as `:i` */
    public get italic(): BooleanValue | undefined { return this._g(':i'); }
    public set italic(v: BooleanValue | undefined) { this._s(':i', v); }
    /** u. Serialized as `:u` */
    public get underline(): TextUnderlineValues | undefined { return this._g(':u'); }
    public set underline(v: TextUnderlineValues | undefined) { this._s(':u', v); }
    /** strike. Serialized as `:strike` */
    public get strike(): TextStrikeValues | undefined { return this._g(':strike'); }
    public set strike(v: TextStrikeValues | undefined) { this._s(':strike', v); }
    /** kern. Serialized as `:kern` */
    public get kerning(): Int32Value | undefined { return this._g(':kern'); }
    public set kerning(v: Int32Value | undefined) { this._s(':kern', v); }
    /** cap. Serialized as `:cap` */
    public get capital(): TextCapsValues | undefined { return this._g(':cap'); }
    public set capital(v: TextCapsValues | undefined) { this._s(':cap', v); }
    /** spc. Serialized as `:spc` */
    public get spacing(): Int32Value | undefined { return this._g(':spc'); }
    public set spacing(v: Int32Value | undefined) { this._s(':spc', v); }
    /** normalizeH. Serialized as `:normalizeH` */
    public get normalizeHeight(): BooleanValue | undefined { return this._g(':normalizeH'); }
    public set normalizeHeight(v: BooleanValue | undefined) { this._s(':normalizeH', v); }
    /** baseline. Serialized as `:baseline` */
    public get baseline(): Int32Value | undefined { return this._g(':baseline'); }
    public set baseline(v: Int32Value | undefined) { this._s(':baseline', v); }
    /** noProof. Serialized as `:noProof` */
    public get noProof(): BooleanValue | undefined { return this._g(':noProof'); }
    public set noProof(v: BooleanValue | undefined) { this._s(':noProof', v); }
    /** dirty. Serialized as `:dirty` */
    public get dirty(): BooleanValue | undefined { return this._g(':dirty'); }
    public set dirty(v: BooleanValue | undefined) { this._s(':dirty', v); }
    /** err. Serialized as `:err` */
    public get spellingError(): BooleanValue | undefined { return this._g(':err'); }
    public set spellingError(v: BooleanValue | undefined) { this._s(':err', v); }
    /** smtClean. Serialized as `:smtClean` */
    public get smartTagClean(): BooleanValue | undefined { return this._g(':smtClean'); }
    public set smartTagClean(v: BooleanValue | undefined) { this._s(':smtClean', v); }
    /** smtId. Serialized as `:smtId` */
    public get smartTagId(): UInt32Value | undefined { return this._g(':smtId'); }
    public set smartTagId(v: UInt32Value | undefined) { this._s(':smtId', v); }
    /** bmk. Serialized as `:bmk` */
    public get bookmark(): StringValue | undefined { return this._g(':bmk'); }
    public set bookmark(v: StringValue | undefined) { this._s(':bmk', v); }
    /** Returns Outline. */
    public get outline(): Outline | undefined { return this._f(Outline); }

}
/** Default Text Run Properties. Serialized as `a:defRPr` */
export class DefaultRunProperties extends TextCharacterPropertiesType {

    public static override _Q = 'a:defRPr';

}
/** Text Run Properties. Serialized as `a:rPr` */
export class RunProperties extends TextCharacterPropertiesType {

    public static override _Q = 'a:rPr';

}
/** End Paragraph Run Properties. Serialized as `a:endParaRPr` */
export class EndParagraphRunProperties extends TextCharacterPropertiesType {

    public static override _Q = 'a:endParaRPr';

}
/** Defines the TextParagraphPropertiesType Class. */
export abstract class TextParagraphPropertiesType extends OxmlCompositeElement<LineSpacing | SpaceBefore | SpaceAfter | BulletColorText | BulletColor | BulletSizeText | BulletSizePercentage | BulletSizePoints | BulletFontText | BulletFont | NoBullet | AutoNumberedBullet | CharacterBullet | PictureBullet | TabStopList | DefaultRunProperties | ExtensionList> {

    public static override _A = [':marL',':marR',':lvl',':indent',':algn',':defTabSz',':rtl',':eaLnBrk',':fontAlgn',':latinLnBrk',':hangingPunct',];
    /** Left Margin. Serialized as `:marL` */
    public get leftMargin(): Int32Value | undefined { return this._g(':marL'); }
    public set leftMargin(v: Int32Value | undefined) { this._s(':marL', v); }
    /** Right Margin. Serialized as `:marR` */
    public get rightMargin(): Int32Value | undefined { return this._g(':marR'); }
    public set rightMargin(v: Int32Value | undefined) { this._s(':marR', v); }
    /** Level. Serialized as `:lvl` */
    public get level(): Int32Value | undefined { return this._g(':lvl'); }
    public set level(v: Int32Value | undefined) { this._s(':lvl', v); }
    /** Indent. Serialized as `:indent` */
    public get indent(): Int32Value | undefined { return this._g(':indent'); }
    public set indent(v: Int32Value | undefined) { this._s(':indent', v); }
    /** Alignment. Serialized as `:algn` */
    public get alignment(): TextAlignmentTypeValues | undefined { return this._g(':algn'); }
    public set alignment(v: TextAlignmentTypeValues | undefined) { this._s(':algn', v); }
    /** Default Tab Size. Serialized as `:defTabSz` */
    public get defaultTabSize(): Int32Value | undefined { return this._g(':defTabSz'); }
    public set defaultTabSize(v: Int32Value | undefined) { this._s(':defTabSz', v); }
    /** Right To Left. Serialized as `:rtl` */
    public get rightToLeft(): BooleanValue | undefined { return this._g(':rtl'); }
    public set rightToLeft(v: BooleanValue | undefined) { this._s(':rtl', v); }
    /** East Asian Line Break. Serialized as `:eaLnBrk` */
    public get eastAsianLineBreak(): BooleanValue | undefined { return this._g(':eaLnBrk'); }
    public set eastAsianLineBreak(v: BooleanValue | undefined) { this._s(':eaLnBrk', v); }
    /** Font Alignment. Serialized as `:fontAlgn` */
    public get fontAlignment(): TextFontAlignmentValues | undefined { return this._g(':fontAlgn'); }
    public set fontAlignment(v: TextFontAlignmentValues | undefined) { this._s(':fontAlgn', v); }
    /** Latin Line Break. Serialized as `:latinLnBrk` */
    public get latinLineBreak(): BooleanValue | undefined { return this._g(':latinLnBrk'); }
    public set latinLineBreak(v: BooleanValue | undefined) { this._s(':latinLnBrk', v); }
    /** Hanging Punctuation. Serialized as `:hangingPunct` */
    public get height(): BooleanValue | undefined { return this._g(':hangingPunct'); }
    public set height(v: BooleanValue | undefined) { this._s(':hangingPunct', v); }
    /** Line Spacing. */
    public get lineSpacing(): LineSpacing | undefined { return this._f(LineSpacing); }
    /** Space Before. */
    public get spaceBefore(): SpaceBefore | undefined { return this._f(SpaceBefore); }
    /** Space After. */
    public get spaceAfter(): SpaceAfter | undefined { return this._f(SpaceAfter); }

}
/** List Level 9 Text Style. Serialized as `a:lvl9pPr` */
export class Level9ParagraphProperties extends TextParagraphPropertiesType {

    public static override _Q = 'a:lvl9pPr';

}
/** List Level 8 Text Style. Serialized as `a:lvl8pPr` */
export class Level8ParagraphProperties extends TextParagraphPropertiesType {

    public static override _Q = 'a:lvl8pPr';

}
/** List Level 7 Text Style. Serialized as `a:lvl7pPr` */
export class Level7ParagraphProperties extends TextParagraphPropertiesType {

    public static override _Q = 'a:lvl7pPr';

}
/** List Level 6 Text Style. Serialized as `a:lvl6pPr` */
export class Level6ParagraphProperties extends TextParagraphPropertiesType {

    public static override _Q = 'a:lvl6pPr';

}
/** List Level 5 Text Style. Serialized as `a:lvl5pPr` */
export class Level5ParagraphProperties extends TextParagraphPropertiesType {

    public static override _Q = 'a:lvl5pPr';

}
/** List Level 4 Text Style. Serialized as `a:lvl4pPr` */
export class Level4ParagraphProperties extends TextParagraphPropertiesType {

    public static override _Q = 'a:lvl4pPr';

}
/** List Level 3 Text Style. Serialized as `a:lvl3pPr` */
export class Level3ParagraphProperties extends TextParagraphPropertiesType {

    public static override _Q = 'a:lvl3pPr';

}
/** List Level 2 Text Style. Serialized as `a:lvl2pPr` */
export class Level2ParagraphProperties extends TextParagraphPropertiesType {

    public static override _Q = 'a:lvl2pPr';

}
/** List Level 1 Text Style. Serialized as `a:lvl1pPr` */
export class Level1ParagraphProperties extends TextParagraphPropertiesType {

    public static override _Q = 'a:lvl1pPr';

}
/** Default Paragraph Style. Serialized as `a:defPPr` */
export class DefaultParagraphProperties extends TextParagraphPropertiesType {

    public static override _Q = 'a:defPPr';

}
/** Text Paragraph Properties. Serialized as `a:pPr` */
export class ParagraphProperties extends TextParagraphPropertiesType {

    public static override _Q = 'a:pPr';

}
/** Defines the TablePartStyleType Class. */
export abstract class TablePartStyleType extends OxmlCompositeElement<TableCellTextStyle | TableCellStyle> {

    /** Table Cell Text Style. */
    public get tableCellTextStyle(): TableCellTextStyle | undefined { return this._f(TableCellTextStyle); }
    /** Table Cell Style. */
    public get tableCellStyle(): TableCellStyle | undefined { return this._f(TableCellStyle); }

}
/** Northwest Cell. Serialized as `a:nwCell` */
export class NorthwestCell extends TablePartStyleType {

    public static override _Q = 'a:nwCell';

}
/** Northeast Cell. Serialized as `a:neCell` */
export class NortheastCell extends TablePartStyleType {

    public static override _Q = 'a:neCell';

}
/** First Row. Serialized as `a:firstRow` */
export class FirstRow extends TablePartStyleType {

    public static override _Q = 'a:firstRow';

}
/** Southwest Cell. Serialized as `a:swCell` */
export class SouthwestCell extends TablePartStyleType {

    public static override _Q = 'a:swCell';

}
/** Southeast Cell. Serialized as `a:seCell` */
export class SoutheastCell extends TablePartStyleType {

    public static override _Q = 'a:seCell';

}
/** Last Row. Serialized as `a:lastRow` */
export class LastRow extends TablePartStyleType {

    public static override _Q = 'a:lastRow';

}
/** First Column. Serialized as `a:firstCol` */
export class FirstColumn extends TablePartStyleType {

    public static override _Q = 'a:firstCol';

}
/** Last Column. Serialized as `a:lastCol` */
export class LastColumn extends TablePartStyleType {

    public static override _Q = 'a:lastCol';

}
/** Band 2 Vertical. Serialized as `a:band2V` */
export class Band2Vertical extends TablePartStyleType {

    public static override _Q = 'a:band2V';

}
/** Band 1 Vertical. Serialized as `a:band1V` */
export class Band1Vertical extends TablePartStyleType {

    public static override _Q = 'a:band1V';

}
/** Band 2 Horizontal. Serialized as `a:band2H` */
export class Band2Horizontal extends TablePartStyleType {

    public static override _Q = 'a:band2H';

}
/** Band 1 Horizontal. Serialized as `a:band1H` */
export class Band1Horizontal extends TablePartStyleType {

    public static override _Q = 'a:band1H';

}
/** Whole Table. Serialized as `a:wholeTbl` */
export class WholeTable extends TablePartStyleType {

    public static override _Q = 'a:wholeTbl';

}
/** Table Background. Serialized as `a:tblBg` */
export class TableBackground extends OxmlCompositeElement<FillProperties | FillReference | EffectPropertiesType | EffectReference> {

    public static override _Q = 'a:tblBg';

}
/** Table Cell Style. Serialized as `a:tcStyle` */
export class TableCellStyle extends OxmlCompositeElement<TableCellBorders | FillProperties | FillReference | Cell3DProperties> {

    public static override _Q = 'a:tcStyle';
    /** Table Cell Borders. */
    public get tableCellBorders(): TableCellBorders | undefined { return this._f(TableCellBorders); }

}
/** Table Cell Text Style. Serialized as `a:tcTxStyle` */
export class TableCellTextStyle extends OxmlCompositeElement<Fonts | FontReference | RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor | ExtensionList> {

    public static override _Q = 'a:tcTxStyle';
    public static override _A = [':b',':i',];
    /** Bold. Serialized as `:b` */
    public get bold(): BooleanStyleValues | undefined { return this._g(':b'); }
    public set bold(v: BooleanStyleValues | undefined) { this._s(':b', v); }
    /** Italic. Serialized as `:i` */
    public get italic(): BooleanStyleValues | undefined { return this._g(':i'); }
    public set italic(v: BooleanStyleValues | undefined) { this._s(':i', v); }

}
/** Table Cell Borders. Serialized as `a:tcBdr` */
export class TableCellBorders extends OxmlCompositeElement<LeftBorder | RightBorder | TopBorder | BottomBorder | InsideHorizontalBorder | InsideVerticalBorder | TopLeftToBottomRightBorder | TopRightToBottomLeftBorder | ExtensionList> {

    public static override _Q = 'a:tcBdr';
    /** Left Border. */
    public get leftBorder(): LeftBorder | undefined { return this._f(LeftBorder); }
    /** Right Border. */
    public get rightBorder(): RightBorder | undefined { return this._f(RightBorder); }
    /** Top Border. */
    public get topBorder(): TopBorder | undefined { return this._f(TopBorder); }
    /** Bottom Border. */
    public get bottomBorder(): BottomBorder | undefined { return this._f(BottomBorder); }
    /** Inside Horizontal Border. */
    public get insideHorizontalBorder(): InsideHorizontalBorder | undefined { return this._f(InsideHorizontalBorder); }
    /** Inside Vertical Border. */
    public get insideVerticalBorder(): InsideVerticalBorder | undefined { return this._f(InsideVerticalBorder); }
    /** Top Left to Bottom Right Border. */
    public get topLeftToBottomRightBorder(): TopLeftToBottomRightBorder | undefined { return this._f(TopLeftToBottomRightBorder); }
    /** Top Right to Bottom Left Border. */
    public get topRightToBottomLeftBorder(): TopRightToBottomLeftBorder | undefined { return this._f(TopRightToBottomLeftBorder); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the ThemeableLineStyleType Class. */
export abstract class ThemeableLineStyleType extends OxmlCompositeElement<Outline | LineReference> {

    /** Returns Outline. */
    public get outline(): Outline | undefined { return this._f(Outline); }
    /** Line Reference. */
    public get lineReference(): LineReference | undefined { return this._f(LineReference); }

}
/** Top Right to Bottom Left Border. Serialized as `a:tr2bl` */
export class TopRightToBottomLeftBorder extends ThemeableLineStyleType {

    public static override _Q = 'a:tr2bl';

}
/** Top Left to Bottom Right Border. Serialized as `a:tl2br` */
export class TopLeftToBottomRightBorder extends ThemeableLineStyleType {

    public static override _Q = 'a:tl2br';

}
/** Inside Vertical Border. Serialized as `a:insideV` */
export class InsideVerticalBorder extends ThemeableLineStyleType {

    public static override _Q = 'a:insideV';

}
/** Inside Horizontal Border. Serialized as `a:insideH` */
export class InsideHorizontalBorder extends ThemeableLineStyleType {

    public static override _Q = 'a:insideH';

}
/** Bottom Border. Serialized as `a:bottom` */
export class BottomBorder extends ThemeableLineStyleType {

    public static override _Q = 'a:bottom';

}
/** Top Border. Serialized as `a:top` */
export class TopBorder extends ThemeableLineStyleType {

    public static override _Q = 'a:top';

}
/** Right Border. Serialized as `a:right` */
export class RightBorder extends ThemeableLineStyleType {

    public static override _Q = 'a:right';

}
/** Left Border. Serialized as `a:left` */
export class LeftBorder extends ThemeableLineStyleType {

    public static override _Q = 'a:left';

}
/** Table Row. Serialized as `a:tr` */
export class TableRow extends OxmlCompositeElement<TableCell | ExtensionList> {

    public static override _Q = 'a:tr';
    public static override _A = [':h',];
    /** Height. Serialized as `:h` */
    public get height(): Int64Value | undefined { return this._g(':h'); }
    public set height(v: Int64Value | undefined) { this._s(':h', v); }

}
/** Table Grid. Serialized as `a:tblGrid` */
export class TableGrid extends OxmlCompositeElement<GridColumn> {

    public static override _Q = 'a:tblGrid';

}
/** Table Properties. Serialized as `a:tblPr` */
export class TableProperties extends OxmlCompositeElement<NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill | EffectList | EffectDag | TableStyle | TableStyleId | ExtensionList> {

    public static override _Q = 'a:tblPr';
    public static override _A = [':rtl',':firstRow',':firstCol',':lastRow',':lastCol',':bandRow',':bandCol',];
    /** Right-to-Left. Serialized as `:rtl` */
    public get rightToLeft(): BooleanValue | undefined { return this._g(':rtl'); }
    public set rightToLeft(v: BooleanValue | undefined) { this._s(':rtl', v); }
    /** First Row. Serialized as `:firstRow` */
    public get firstRow(): BooleanValue | undefined { return this._g(':firstRow'); }
    public set firstRow(v: BooleanValue | undefined) { this._s(':firstRow', v); }
    /** First Column. Serialized as `:firstCol` */
    public get firstColumn(): BooleanValue | undefined { return this._g(':firstCol'); }
    public set firstColumn(v: BooleanValue | undefined) { this._s(':firstCol', v); }
    /** Last Row. Serialized as `:lastRow` */
    public get lastRow(): BooleanValue | undefined { return this._g(':lastRow'); }
    public set lastRow(v: BooleanValue | undefined) { this._s(':lastRow', v); }
    /** Last Column. Serialized as `:lastCol` */
    public get lastColumn(): BooleanValue | undefined { return this._g(':lastCol'); }
    public set lastColumn(v: BooleanValue | undefined) { this._s(':lastCol', v); }
    /** Banded Rows. Serialized as `:bandRow` */
    public get bandRow(): BooleanValue | undefined { return this._g(':bandRow'); }
    public set bandRow(v: BooleanValue | undefined) { this._s(':bandRow', v); }
    /** Banded Columns. Serialized as `:bandCol` */
    public get bandColumn(): BooleanValue | undefined { return this._g(':bandCol'); }
    public set bandColumn(v: BooleanValue | undefined) { this._s(':bandCol', v); }

}
/** Table Grid Column. Serialized as `a:gridCol` */
export class GridColumn extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'a:gridCol';
    public static override _A = [':w',];
    /** Width. Serialized as `:w` */
    public get width(): Int64Value | undefined { return this._g(':w'); }
    public set width(v: Int64Value | undefined) { this._s(':w', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Table Style ID. Serialized as `a:tableStyleId` */
export class TableStyleId extends OxmlLeafTextElement {

    public static override _Q = 'a:tableStyleId';

}
/** Defines the TableStyleType Class. */
export abstract class TableStyleType extends OxmlCompositeElement<TableBackground | WholeTable | Band1Horizontal | Band2Horizontal | Band1Vertical | Band2Vertical | LastColumn | FirstColumn | LastRow | SoutheastCell | SouthwestCell | FirstRow | NortheastCell | NorthwestCell | ExtensionList> {

    public static override _A = [':styleId',':styleName',];
    /** Style ID. Serialized as `:styleId` */
    public get styleId(): StringValue | undefined { return this._g(':styleId'); }
    public set styleId(v: StringValue | undefined) { this._s(':styleId', v); }
    /** Name. Serialized as `:styleName` */
    public get styleName(): StringValue | undefined { return this._g(':styleName'); }
    public set styleName(v: StringValue | undefined) { this._s(':styleName', v); }
    /** Table Background. */
    public get tableBackground(): TableBackground | undefined { return this._f(TableBackground); }
    /** Whole Table. */
    public get wholeTable(): WholeTable | undefined { return this._f(WholeTable); }
    /** Band 1 Horizontal. */
    public get band1Horizontal(): Band1Horizontal | undefined { return this._f(Band1Horizontal); }
    /** Band 2 Horizontal. */
    public get band2Horizontal(): Band2Horizontal | undefined { return this._f(Band2Horizontal); }
    /** Band 1 Vertical. */
    public get band1Vertical(): Band1Vertical | undefined { return this._f(Band1Vertical); }
    /** Band 2 Vertical. */
    public get band2Vertical(): Band2Vertical | undefined { return this._f(Band2Vertical); }
    /** Last Column. */
    public get lastColumn(): LastColumn | undefined { return this._f(LastColumn); }
    /** First Column. */
    public get firstColumn(): FirstColumn | undefined { return this._f(FirstColumn); }
    /** Last Row. */
    public get lastRow(): LastRow | undefined { return this._f(LastRow); }
    /** Southeast Cell. */
    public get southeastCell(): SoutheastCell | undefined { return this._f(SoutheastCell); }
    /** Southwest Cell. */
    public get southwestCell(): SouthwestCell | undefined { return this._f(SouthwestCell); }
    /** First Row. */
    public get firstRow(): FirstRow | undefined { return this._f(FirstRow); }
    /** Northeast Cell. */
    public get northeastCell(): NortheastCell | undefined { return this._f(NortheastCell); }
    /** Northwest Cell. */
    public get northwestCell(): NorthwestCell | undefined { return this._f(NorthwestCell); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Table Style. Serialized as `a:tblStyle` */
export class TableStyleEntry extends TableStyleType {

    public static override _Q = 'a:tblStyle';

}
/** Table Style. Serialized as `a:tableStyle` */
export class TableStyle extends TableStyleType {

    public static override _Q = 'a:tableStyle';

}
/** Table Cell. Serialized as `a:tc` */
export class TableCell extends OxmlCompositeElement<TextBody | TableCellProperties | ExtensionList> {

    public static override _Q = 'a:tc';
    public static override _A = [':rowSpan',':gridSpan',':hMerge',':vMerge',];
    /** Row Span. Serialized as `:rowSpan` */
    public get rowSpan(): Int32Value | undefined { return this._g(':rowSpan'); }
    public set rowSpan(v: Int32Value | undefined) { this._s(':rowSpan', v); }
    /** Grid Span. Serialized as `:gridSpan` */
    public get gridSpan(): Int32Value | undefined { return this._g(':gridSpan'); }
    public set gridSpan(v: Int32Value | undefined) { this._s(':gridSpan', v); }
    /** Horizontal Merge. Serialized as `:hMerge` */
    public get horizontalMerge(): BooleanValue | undefined { return this._g(':hMerge'); }
    public set horizontalMerge(v: BooleanValue | undefined) { this._s(':hMerge', v); }
    /** Vertical Merge. Serialized as `:vMerge` */
    public get verticalMerge(): BooleanValue | undefined { return this._g(':vMerge'); }
    public set verticalMerge(v: BooleanValue | undefined) { this._s(':vMerge', v); }
    /** Text Body. */
    public get textBody(): TextBody | undefined { return this._f(TextBody); }
    /** Table Cell Properties. */
    public get tableCellProperties(): TableCellProperties | undefined { return this._f(TableCellProperties); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Table Cell Properties. Serialized as `a:tcPr` */
export class TableCellProperties extends OxmlCompositeElement<LeftBorderLineProperties | RightBorderLineProperties | TopBorderLineProperties | BottomBorderLineProperties | TopLeftToBottomRightBorderLineProperties | BottomLeftToTopRightBorderLineProperties | Cell3DProperties | NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill | ExtensionList> {

    public static override _Q = 'a:tcPr';
    public static override _A = [':marL',':marR',':marT',':marB',':vert',':anchor',':anchorCtr',':horzOverflow',];
    /** Left Margin. Serialized as `:marL` */
    public get leftMargin(): Int32Value | undefined { return this._g(':marL'); }
    public set leftMargin(v: Int32Value | undefined) { this._s(':marL', v); }
    /** Right Margin. Serialized as `:marR` */
    public get rightMargin(): Int32Value | undefined { return this._g(':marR'); }
    public set rightMargin(v: Int32Value | undefined) { this._s(':marR', v); }
    /** Top Margin. Serialized as `:marT` */
    public get topMargin(): Int32Value | undefined { return this._g(':marT'); }
    public set topMargin(v: Int32Value | undefined) { this._s(':marT', v); }
    /** Bottom Margin. Serialized as `:marB` */
    public get bottomMargin(): Int32Value | undefined { return this._g(':marB'); }
    public set bottomMargin(v: Int32Value | undefined) { this._s(':marB', v); }
    /** Text Direction. Serialized as `:vert` */
    public get vertical(): TextVerticalValues | undefined { return this._g(':vert'); }
    public set vertical(v: TextVerticalValues | undefined) { this._s(':vert', v); }
    /** Anchor. Serialized as `:anchor` */
    public get anchor(): TextAnchoringTypeValues | undefined { return this._g(':anchor'); }
    public set anchor(v: TextAnchoringTypeValues | undefined) { this._s(':anchor', v); }
    /** Anchor Center. Serialized as `:anchorCtr` */
    public get anchorCenter(): BooleanValue | undefined { return this._g(':anchorCtr'); }
    public set anchorCenter(v: BooleanValue | undefined) { this._s(':anchorCtr', v); }
    /** Horizontal Overflow. Serialized as `:horzOverflow` */
    public get horizontalOverflow(): TextHorizontalOverflowValues | undefined { return this._g(':horzOverflow'); }
    public set horizontalOverflow(v: TextHorizontalOverflowValues | undefined) { this._s(':horzOverflow', v); }
    /** Left Border Line Properties. */
    public get leftBorderLineProperties(): LeftBorderLineProperties | undefined { return this._f(LeftBorderLineProperties); }
    /** Right Border Line Properties. */
    public get rightBorderLineProperties(): RightBorderLineProperties | undefined { return this._f(RightBorderLineProperties); }
    /** Top Border Line Properties. */
    public get topBorderLineProperties(): TopBorderLineProperties | undefined { return this._f(TopBorderLineProperties); }
    /** Bottom Border Line Properties. */
    public get bottomBorderLineProperties(): BottomBorderLineProperties | undefined { return this._f(BottomBorderLineProperties); }
    /** Top-Left to Bottom-Right Border Line Properties. */
    public get topLeftToBottomRightBorderLineProperties(): TopLeftToBottomRightBorderLineProperties | undefined { return this._f(TopLeftToBottomRightBorderLineProperties); }
    /** Bottom-Left to Top-Right Border Line Properties. */
    public get bottomLeftToTopRightBorderLineProperties(): BottomLeftToTopRightBorderLineProperties | undefined { return this._f(BottomLeftToTopRightBorderLineProperties); }
    /** Cell 3-D. */
    public get cell3DProperties(): Cell3DProperties | undefined { return this._f(Cell3DProperties); }

}
/** Cell 3-D. Serialized as `a:cell3D` */
export class Cell3DProperties extends OxmlCompositeElement<Bevel | LightRig | ExtensionList> {

    public static override _Q = 'a:cell3D';
    public static override _A = [':prstMaterial',];
    /** Preset Material. Serialized as `:prstMaterial` */
    public get presetMaterial(): PresetMaterialTypeValues | undefined { return this._g(':prstMaterial'); }
    public set presetMaterial(v: PresetMaterialTypeValues | undefined) { this._s(':prstMaterial', v); }
    /** Bevel. */
    public get bevel(): Bevel | undefined { return this._f(Bevel); }
    /** Light Rig. */
    public get lightRig(): LightRig | undefined { return this._f(LightRig); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the ThemeElements Class. Serialized as `a:themeElements` */
export class ThemeElements extends OxmlCompositeElement<ColorScheme | FontScheme | FormatScheme | ExtensionList> {

    public static override _Q = 'a:themeElements';
    /** Returns ColorScheme. */
    public get colorScheme(): ColorScheme | undefined { return this._f(ColorScheme); }
    /** Font Scheme. */
    public get fontScheme(): FontScheme | undefined { return this._f(FontScheme); }
    /** Format Scheme. */
    public get formatScheme(): FormatScheme | undefined { return this._f(FormatScheme); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Extra Color Scheme. Serialized as `a:extraClrScheme` */
export class ExtraColorScheme extends OxmlCompositeElement<ColorScheme | ColorMap> {

    public static override _Q = 'a:extraClrScheme';
    /** Returns ColorScheme. */
    public get colorScheme(): ColorScheme | undefined { return this._f(ColorScheme); }
    /** Returns ColorMap. */
    public get colorMap(): ColorMap | undefined { return this._f(ColorMap); }

}
/** Defines the ColorMappingType Class. */
export abstract class ColorMappingType extends OxmlCompositeElement<ExtensionList> {

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
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the ColorMap Class. Serialized as `a:clrMap` */
export class ColorMap extends ColorMappingType {

    public static override _Q = 'a:clrMap';

}
/** Override Color Mapping. Serialized as `a:overrideClrMapping` */
export class OverrideColorMapping extends ColorMappingType {

    public static override _Q = 'a:overrideClrMapping';

}
/** Defines the DefaultShapeDefinitionType Class. */
export abstract class DefaultShapeDefinitionType extends OxmlCompositeElement<ShapeProperties | BodyProperties | ListStyle | ShapeStyle | ExtensionList> {

    /** Visual Properties. */
    public get shapeProperties(): ShapeProperties | undefined { return this._f(ShapeProperties); }
    /** Returns BodyProperties. */
    public get bodyProperties(): BodyProperties | undefined { return this._f(BodyProperties); }
    /** Returns ListStyle. */
    public get listStyle(): ListStyle | undefined { return this._f(ListStyle); }
    /** Returns ShapeStyle. */
    public get shapeStyle(): ShapeStyle | undefined { return this._f(ShapeStyle); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Text Default. Serialized as `a:txDef` */
export class TextDefault extends DefaultShapeDefinitionType {

    public static override _Q = 'a:txDef';

}
/** Line Default. Serialized as `a:lnDef` */
export class LineDefault extends DefaultShapeDefinitionType {

    public static override _Q = 'a:lnDef';

}
/** Shape Default. Serialized as `a:spDef` */
export class ShapeDefault extends DefaultShapeDefinitionType {

    public static override _Q = 'a:spDef';

}
/** Defines the ListStyle Class. Serialized as `a:lstStyle` */
export class ListStyle extends OxmlCompositeElement<DefaultParagraphProperties | Level1ParagraphProperties | Level2ParagraphProperties | Level3ParagraphProperties | Level4ParagraphProperties | Level5ParagraphProperties | Level6ParagraphProperties | Level7ParagraphProperties | Level8ParagraphProperties | Level9ParagraphProperties | ExtensionList> {

    public static override _Q = 'a:lstStyle';
    /** Default Paragraph Style. */
    public get defaultParagraphProperties(): DefaultParagraphProperties | undefined { return this._f(DefaultParagraphProperties); }
    /** List Level 1 Text Style. */
    public get level1ParagraphProperties(): Level1ParagraphProperties | undefined { return this._f(Level1ParagraphProperties); }
    /** List Level 2 Text Style. */
    public get level2ParagraphProperties(): Level2ParagraphProperties | undefined { return this._f(Level2ParagraphProperties); }
    /** List Level 3 Text Style. */
    public get level3ParagraphProperties(): Level3ParagraphProperties | undefined { return this._f(Level3ParagraphProperties); }
    /** List Level 4 Text Style. */
    public get level4ParagraphProperties(): Level4ParagraphProperties | undefined { return this._f(Level4ParagraphProperties); }
    /** List Level 5 Text Style. */
    public get level5ParagraphProperties(): Level5ParagraphProperties | undefined { return this._f(Level5ParagraphProperties); }
    /** List Level 6 Text Style. */
    public get level6ParagraphProperties(): Level6ParagraphProperties | undefined { return this._f(Level6ParagraphProperties); }
    /** List Level 7 Text Style. */
    public get level7ParagraphProperties(): Level7ParagraphProperties | undefined { return this._f(Level7ParagraphProperties); }
    /** List Level 8 Text Style. */
    public get level8ParagraphProperties(): Level8ParagraphProperties | undefined { return this._f(Level8ParagraphProperties); }
    /** List Level 9 Text Style. */
    public get level9ParagraphProperties(): Level9ParagraphProperties | undefined { return this._f(Level9ParagraphProperties); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the BodyProperties Class. Serialized as `a:bodyPr` */
export class BodyProperties extends OxmlCompositeElement<PresetTextWrap | NoAutoFit | NormalAutoFit | ShapeAutoFit | Scene3DType | Shape3DType | FlatText | ExtensionList> {

    public static override _Q = 'a:bodyPr';
    public static override _A = [':rot',':spcFirstLastPara',':vertOverflow',':horzOverflow',':vert',':wrap',':lIns',':tIns',':rIns',':bIns',':numCol',':spcCol',':rtlCol',':fromWordArt',':anchor',':anchorCtr',':forceAA',':upright',':compatLnSpc',];
    /** Rotation. Serialized as `:rot` */
    public get rotation(): Int32Value | undefined { return this._g(':rot'); }
    public set rotation(v: Int32Value | undefined) { this._s(':rot', v); }
    /** Paragraph Spacing. Serialized as `:spcFirstLastPara` */
    public get useParagraphSpacing(): BooleanValue | undefined { return this._g(':spcFirstLastPara'); }
    public set useParagraphSpacing(v: BooleanValue | undefined) { this._s(':spcFirstLastPara', v); }
    /** Text Vertical Overflow. Serialized as `:vertOverflow` */
    public get verticalOverflow(): TextVerticalOverflowValues | undefined { return this._g(':vertOverflow'); }
    public set verticalOverflow(v: TextVerticalOverflowValues | undefined) { this._s(':vertOverflow', v); }
    /** Text Horizontal Overflow. Serialized as `:horzOverflow` */
    public get horizontalOverflow(): TextHorizontalOverflowValues | undefined { return this._g(':horzOverflow'); }
    public set horizontalOverflow(v: TextHorizontalOverflowValues | undefined) { this._s(':horzOverflow', v); }
    /** Vertical Text. Serialized as `:vert` */
    public get vertical(): TextVerticalValues | undefined { return this._g(':vert'); }
    public set vertical(v: TextVerticalValues | undefined) { this._s(':vert', v); }
    /** Text Wrapping Type. Serialized as `:wrap` */
    public get wrap(): TextWrappingValues | undefined { return this._g(':wrap'); }
    public set wrap(v: TextWrappingValues | undefined) { this._s(':wrap', v); }
    /** Left Inset. Serialized as `:lIns` */
    public get leftInset(): Int32Value | undefined { return this._g(':lIns'); }
    public set leftInset(v: Int32Value | undefined) { this._s(':lIns', v); }
    /** Top Inset. Serialized as `:tIns` */
    public get topInset(): Int32Value | undefined { return this._g(':tIns'); }
    public set topInset(v: Int32Value | undefined) { this._s(':tIns', v); }
    /** Right Inset. Serialized as `:rIns` */
    public get rightInset(): Int32Value | undefined { return this._g(':rIns'); }
    public set rightInset(v: Int32Value | undefined) { this._s(':rIns', v); }
    /** Bottom Inset. Serialized as `:bIns` */
    public get bottomInset(): Int32Value | undefined { return this._g(':bIns'); }
    public set bottomInset(v: Int32Value | undefined) { this._s(':bIns', v); }
    /** Number of Columns. Serialized as `:numCol` */
    public get columnCount(): Int32Value | undefined { return this._g(':numCol'); }
    public set columnCount(v: Int32Value | undefined) { this._s(':numCol', v); }
    /** Space Between Columns. Serialized as `:spcCol` */
    public get columnSpacing(): Int32Value | undefined { return this._g(':spcCol'); }
    public set columnSpacing(v: Int32Value | undefined) { this._s(':spcCol', v); }
    /** Columns Right-To-Left. Serialized as `:rtlCol` */
    public get rightToLeftColumns(): BooleanValue | undefined { return this._g(':rtlCol'); }
    public set rightToLeftColumns(v: BooleanValue | undefined) { this._s(':rtlCol', v); }
    /** From WordArt. Serialized as `:fromWordArt` */
    public get fromWordArt(): BooleanValue | undefined { return this._g(':fromWordArt'); }
    public set fromWordArt(v: BooleanValue | undefined) { this._s(':fromWordArt', v); }
    /** Anchor. Serialized as `:anchor` */
    public get anchor(): TextAnchoringTypeValues | undefined { return this._g(':anchor'); }
    public set anchor(v: TextAnchoringTypeValues | undefined) { this._s(':anchor', v); }
    /** Anchor Center. Serialized as `:anchorCtr` */
    public get anchorCenter(): BooleanValue | undefined { return this._g(':anchorCtr'); }
    public set anchorCenter(v: BooleanValue | undefined) { this._s(':anchorCtr', v); }
    /** Force Anti-Alias. Serialized as `:forceAA` */
    public get forceAntiAlias(): BooleanValue | undefined { return this._g(':forceAA'); }
    public set forceAntiAlias(v: BooleanValue | undefined) { this._s(':forceAA', v); }
    /** Text Upright. Serialized as `:upright` */
    public get upRight(): BooleanValue | undefined { return this._g(':upright'); }
    public set upRight(v: BooleanValue | undefined) { this._s(':upright', v); }
    /** Compatible Line Spacing. Serialized as `:compatLnSpc` */
    public get compatibleLineSpacing(): BooleanValue | undefined { return this._g(':compatLnSpc'); }
    public set compatibleLineSpacing(v: BooleanValue | undefined) { this._s(':compatLnSpc', v); }
    /** Preset Text Shape. */
    public get presetTextWrap(): PresetTextWrap | undefined { return this._f(PresetTextWrap); }

}
/** 2D Transform for Grouped Objects. Serialized as `a:xfrm` */
export class TransformGroup extends OxmlCompositeElement<Offset | Extents | ChildOffset | ChildExtents> {

    public static override _Q = 'a:xfrm';
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
    public get offset(): Offset | undefined { return this._f(Offset); }
    /** Extents. */
    public get extents(): Extents | undefined { return this._f(Extents); }
    /** Child Offset. */
    public get childOffset(): ChildOffset | undefined { return this._f(ChildOffset); }
    /** Child Extents. */
    public get childExtents(): ChildExtents | undefined { return this._f(ChildExtents); }

}
/** Dash Stop. Serialized as `a:ds` */
export class DashStop extends OxmlLeafElement {

    public static override _Q = 'a:ds';
    public static override _A = [':d',':sp',];
    /** Dash Length. Serialized as `:d` */
    public get dashLength(): Int32Value | undefined { return this._g(':d'); }
    public set dashLength(v: Int32Value | undefined) { this._s(':d', v); }
    /** Space Length. Serialized as `:sp` */
    public get spaceLength(): Int32Value | undefined { return this._g(':sp'); }
    public set spaceLength(v: Int32Value | undefined) { this._s(':sp', v); }

}
/** List of Shape Paths. Serialized as `a:pathLst` */
export class PathList extends OxmlCompositeElement<Path> {

    public static override _Q = 'a:pathLst';

}
/** Shape Text Rectangle. Serialized as `a:rect` */
export class Rectangle extends OxmlLeafElement {

    public static override _Q = 'a:rect';
    public static override _A = [':l',':t',':r',':b',];
    /** Left. Serialized as `:l` */
    public get left(): StringValue | undefined { return this._g(':l'); }
    public set left(v: StringValue | undefined) { this._s(':l', v); }
    /** Top. Serialized as `:t` */
    public get top(): StringValue | undefined { return this._g(':t'); }
    public set top(v: StringValue | undefined) { this._s(':t', v); }
    /** Right. Serialized as `:r` */
    public get right(): StringValue | undefined { return this._g(':r'); }
    public set right(v: StringValue | undefined) { this._s(':r', v); }
    /** Bottom Position. Serialized as `:b` */
    public get bottom(): StringValue | undefined { return this._g(':b'); }
    public set bottom(v: StringValue | undefined) { this._s(':b', v); }

}
/** List of Shape Connection Sites. Serialized as `a:cxnLst` */
export class ConnectionSiteList extends OxmlCompositeElement<ConnectionSite> {

    public static override _Q = 'a:cxnLst';

}
/** List of Shape Adjust Handles. Serialized as `a:ahLst` */
export class AdjustHandleList extends OxmlCompositeElement<AdjustHandleXY | AdjustHandlePolar> {

    public static override _Q = 'a:ahLst';

}
/** Defines the GeometryGuideListType Class. */
export abstract class GeometryGuideListType extends OxmlCompositeElement<ShapeGuide> {


}
/** List of Shape Guides. Serialized as `a:gdLst` */
export class ShapeGuideList extends GeometryGuideListType {

    public static override _Q = 'a:gdLst';

}
/** List of Shape Adjust Values. Serialized as `a:avLst` */
export class AdjustValueList extends GeometryGuideListType {

    public static override _Q = 'a:avLst';

}
/** Shape Path. Serialized as `a:path` */
export class Path extends OxmlCompositeElement<CloseShapePath | MoveTo | LineTo | ArcTo | QuadraticBezierCurveTo | CubicBezierCurveTo> {

    public static override _Q = 'a:path';
    public static override _A = [':w',':h',':fill',':stroke',':extrusionOk',];
    /** Path Width. Serialized as `:w` */
    public get width(): Int64Value | undefined { return this._g(':w'); }
    public set width(v: Int64Value | undefined) { this._s(':w', v); }
    /** Path Height. Serialized as `:h` */
    public get height(): Int64Value | undefined { return this._g(':h'); }
    public set height(v: Int64Value | undefined) { this._s(':h', v); }
    /** Path Fill. Serialized as `:fill` */
    public get fill(): PathFillModeValues | undefined { return this._g(':fill'); }
    public set fill(v: PathFillModeValues | undefined) { this._s(':fill', v); }
    /** Path Stroke. Serialized as `:stroke` */
    public get stroke(): BooleanValue | undefined { return this._g(':stroke'); }
    public set stroke(v: BooleanValue | undefined) { this._s(':stroke', v); }
    /** 3D Extrusion Allowed. Serialized as `:extrusionOk` */
    public get extrusionOk(): BooleanValue | undefined { return this._g(':extrusionOk'); }
    public set extrusionOk(v: BooleanValue | undefined) { this._s(':extrusionOk', v); }

}
/** Draw Cubic Bezier Curve To. Serialized as `a:cubicBezTo` */
export class CubicBezierCurveTo extends OxmlCompositeElement<Point> {

    public static override _Q = 'a:cubicBezTo';

}
/** Draw Quadratic Bezier Curve To. Serialized as `a:quadBezTo` */
export class QuadraticBezierCurveTo extends OxmlCompositeElement<Point> {

    public static override _Q = 'a:quadBezTo';

}
/** Draw Arc To. Serialized as `a:arcTo` */
export class ArcTo extends OxmlLeafElement {

    public static override _Q = 'a:arcTo';
    public static override _A = [':wR',':hR',':stAng',':swAng',];
    /** Shape Arc Width Radius. Serialized as `:wR` */
    public get widthRadius(): StringValue | undefined { return this._g(':wR'); }
    public set widthRadius(v: StringValue | undefined) { this._s(':wR', v); }
    /** Shape Arc Height Radius. Serialized as `:hR` */
    public get heightRadius(): StringValue | undefined { return this._g(':hR'); }
    public set heightRadius(v: StringValue | undefined) { this._s(':hR', v); }
    /** Shape Arc Start Angle. Serialized as `:stAng` */
    public get startAngle(): StringValue | undefined { return this._g(':stAng'); }
    public set startAngle(v: StringValue | undefined) { this._s(':stAng', v); }
    /** Shape Arc Swing Angle. Serialized as `:swAng` */
    public get swingAngle(): StringValue | undefined { return this._g(':swAng'); }
    public set swingAngle(v: StringValue | undefined) { this._s(':swAng', v); }

}
/** Draw Line To. Serialized as `a:lnTo` */
export class LineTo extends OxmlCompositeElement<Point> {

    public static override _Q = 'a:lnTo';
    /** Line end point. */
    public get point(): Point | undefined { return this._f(Point); }

}
/** Move Path To. Serialized as `a:moveTo` */
export class MoveTo extends OxmlCompositeElement<Point> {

    public static override _Q = 'a:moveTo';
    /** Move end point. */
    public get point(): Point | undefined { return this._f(Point); }

}
/** Close Shape Path. Serialized as `a:close` */
export class CloseShapePath extends OxmlLeafElement {

    public static override _Q = 'a:close';

}
/** Shape Connection Site. Serialized as `a:cxn` */
export class ConnectionSite extends OxmlCompositeElement<Position> {

    public static override _Q = 'a:cxn';
    public static override _A = [':ang',];
    /** Connection Site Angle. Serialized as `:ang` */
    public get angle(): StringValue | undefined { return this._g(':ang'); }
    public set angle(v: StringValue | undefined) { this._s(':ang', v); }
    /** Position. */
    public get position(): Position | undefined { return this._f(Position); }

}
/** Polar Adjust Handle. Serialized as `a:ahPolar` */
export class AdjustHandlePolar extends OxmlCompositeElement<Position> {

    public static override _Q = 'a:ahPolar';
    public static override _A = [':gdRefR',':minR',':maxR',':gdRefAng',':minAng',':maxAng',];
    /** Radial Adjustment Guide. Serialized as `:gdRefR` */
    public get radialAdjustmentGuide(): StringValue | undefined { return this._g(':gdRefR'); }
    public set radialAdjustmentGuide(v: StringValue | undefined) { this._s(':gdRefR', v); }
    /** Minimum Radial Adjustment. Serialized as `:minR` */
    public get minRadial(): StringValue | undefined { return this._g(':minR'); }
    public set minRadial(v: StringValue | undefined) { this._s(':minR', v); }
    /** Maximum Radial Adjustment. Serialized as `:maxR` */
    public get maxRadial(): StringValue | undefined { return this._g(':maxR'); }
    public set maxRadial(v: StringValue | undefined) { this._s(':maxR', v); }
    /** Angle Adjustment Guide. Serialized as `:gdRefAng` */
    public get angleAdjustmentGuide(): StringValue | undefined { return this._g(':gdRefAng'); }
    public set angleAdjustmentGuide(v: StringValue | undefined) { this._s(':gdRefAng', v); }
    /** Minimum Angle Adjustment. Serialized as `:minAng` */
    public get minAngle(): StringValue | undefined { return this._g(':minAng'); }
    public set minAngle(v: StringValue | undefined) { this._s(':minAng', v); }
    /** Maximum Angle Adjustment. Serialized as `:maxAng` */
    public get maxAngle(): StringValue | undefined { return this._g(':maxAng'); }
    public set maxAngle(v: StringValue | undefined) { this._s(':maxAng', v); }
    /** Shape Position Coordinate. */
    public get position(): Position | undefined { return this._f(Position); }

}
/** XY Adjust Handle. Serialized as `a:ahXY` */
export class AdjustHandleXY extends OxmlCompositeElement<Position> {

    public static override _Q = 'a:ahXY';
    public static override _A = [':gdRefX',':minX',':maxX',':gdRefY',':minY',':maxY',];
    /** Horizontal Adjustment Guide. Serialized as `:gdRefX` */
    public get xAdjustmentGuide(): StringValue | undefined { return this._g(':gdRefX'); }
    public set xAdjustmentGuide(v: StringValue | undefined) { this._s(':gdRefX', v); }
    /** Minimum Horizontal Adjustment. Serialized as `:minX` */
    public get minX(): StringValue | undefined { return this._g(':minX'); }
    public set minX(v: StringValue | undefined) { this._s(':minX', v); }
    /** Maximum Horizontal Adjustment. Serialized as `:maxX` */
    public get maxX(): StringValue | undefined { return this._g(':maxX'); }
    public set maxX(v: StringValue | undefined) { this._s(':maxX', v); }
    /** Vertical Adjustment Guide. Serialized as `:gdRefY` */
    public get yAdjustmentGuide(): StringValue | undefined { return this._g(':gdRefY'); }
    public set yAdjustmentGuide(v: StringValue | undefined) { this._s(':gdRefY', v); }
    /** Minimum Vertical Adjustment. Serialized as `:minY` */
    public get minY(): StringValue | undefined { return this._g(':minY'); }
    public set minY(v: StringValue | undefined) { this._s(':minY', v); }
    /** Maximum Vertical Adjustment. Serialized as `:maxY` */
    public get maxY(): StringValue | undefined { return this._g(':maxY'); }
    public set maxY(v: StringValue | undefined) { this._s(':maxY', v); }
    /** Position. */
    public get position(): Position | undefined { return this._f(Position); }

}
/** Defines the AdjustPoint2DType Class. */
export abstract class AdjustPoint2DType extends OxmlLeafElement {

    public static override _A = [':x',':y',];
    /** X-Coordinate. Serialized as `:x` */
    public get x(): StringValue | undefined { return this._g(':x'); }
    public set x(v: StringValue | undefined) { this._s(':x', v); }
    /** Y-Coordinate. Serialized as `:y` */
    public get y(): StringValue | undefined { return this._g(':y'); }
    public set y(v: StringValue | undefined) { this._s(':y', v); }

}
/** Move end point. Serialized as `a:pt` */
export class Point extends AdjustPoint2DType {

    public static override _Q = 'a:pt';

}
/** Position. Serialized as `a:pos` */
export class Position extends AdjustPoint2DType {

    public static override _Q = 'a:pos';

}
/** Shape Guide. Serialized as `a:gd` */
export class ShapeGuide extends OxmlLeafElement {

    public static override _Q = 'a:gd';
    public static override _A = [':name',':fmla',];
    /** Shape Guide Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Shape Guide Formula. Serialized as `:fmla` */
    public get formula(): StringValue | undefined { return this._g(':fmla'); }
    public set formula(v: StringValue | undefined) { this._s(':fmla', v); }

}
/** Gradient Stop List. Serialized as `a:gsLst` */
export class GradientStopList extends OxmlCompositeElement<GradientStop> {

    public static override _Q = 'a:gsLst';

}
/** Gradient stops. Serialized as `a:gs` */
export class GradientStop extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {

    public static override _Q = 'a:gs';
    public static override _A = [':pos',];
    /** Position. Serialized as `:pos` */
    public get position(): Int32Value | undefined { return this._g(':pos'); }
    public set position(v: Int32Value | undefined) { this._s(':pos', v); }
    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): RgbColorModelPercentage | undefined { return this._f(RgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): RgbColorModelHex | undefined { return this._f(RgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): HslColor | undefined { return this._f(HslColor); }
    /** System Color. */
    public get systemColor(): SystemColor | undefined { return this._f(SystemColor); }
    /** Scheme Color. */
    public get schemeColor(): SchemeColor | undefined { return this._f(SchemeColor); }
    /** Preset Color. */
    public get presetColor(): PresetColor | undefined { return this._f(PresetColor); }

}
/** Defines the RelativeRectangleType Class. */
export abstract class RelativeRectangleType extends OxmlLeafElement {

    public static override _A = [':l',':t',':r',':b',];
    /** Left Offset. Serialized as `:l` */
    public get left(): Int32Value | undefined { return this._g(':l'); }
    public set left(v: Int32Value | undefined) { this._s(':l', v); }
    /** Top Offset. Serialized as `:t` */
    public get top(): Int32Value | undefined { return this._g(':t'); }
    public set top(v: Int32Value | undefined) { this._s(':t', v); }
    /** Right Offset. Serialized as `:r` */
    public get right(): Int32Value | undefined { return this._g(':r'); }
    public set right(v: Int32Value | undefined) { this._s(':r', v); }
    /** Bottom Offset. Serialized as `:b` */
    public get bottom(): Int32Value | undefined { return this._g(':b'); }
    public set bottom(v: Int32Value | undefined) { this._s(':b', v); }

}
/** Source Rectangle. Serialized as `a:srcRect` */
export class SourceRectangle extends RelativeRectangleType {

    public static override _Q = 'a:srcRect';

}
/** Fill Rectangle. Serialized as `a:fillRect` */
export class FillRectangle extends RelativeRectangleType {

    public static override _Q = 'a:fillRect';

}
/** Tile Rectangle. Serialized as `a:tileRect` */
export class TileRectangle extends RelativeRectangleType {

    public static override _Q = 'a:tileRect';

}
/** Fill To Rectangle. Serialized as `a:fillToRect` */
export class FillToRectangle extends RelativeRectangleType {

    public static override _Q = 'a:fillToRect';

}
/** Defines the BevelType Class. */
export abstract class BevelType extends OxmlLeafElement {

    public static override _A = [':w',':h',':prst',];
    /** Width. Serialized as `:w` */
    public get width(): Int64Value | undefined { return this._g(':w'); }
    public set width(v: Int64Value | undefined) { this._s(':w', v); }
    /** Height. Serialized as `:h` */
    public get height(): Int64Value | undefined { return this._g(':h'); }
    public set height(v: Int64Value | undefined) { this._s(':h', v); }
    /** Preset Bevel. Serialized as `:prst` */
    public get preset(): BevelPresetValues | undefined { return this._g(':prst'); }
    public set preset(v: BevelPresetValues | undefined) { this._s(':prst', v); }

}
/** Bevel. Serialized as `a:bevel` */
export class Bevel extends BevelType {

    public static override _Q = 'a:bevel';

}
/** Bottom Bevel. Serialized as `a:bevelB` */
export class BevelBottom extends BevelType {

    public static override _Q = 'a:bevelB';

}
/** Top Bevel. Serialized as `a:bevelT` */
export class BevelTop extends BevelType {

    public static override _Q = 'a:bevelT';

}
/** Defines the Vector3DType Class. */
export abstract class Vector3DType extends OxmlLeafElement {

    public static override _A = [':dx',':dy',':dz',];
    /** Distance along X-axis in 3D. Serialized as `:dx` */
    public get dx(): Int64Value | undefined { return this._g(':dx'); }
    public set dx(v: Int64Value | undefined) { this._s(':dx', v); }
    /** Distance along Y-axis in 3D. Serialized as `:dy` */
    public get dy(): Int64Value | undefined { return this._g(':dy'); }
    public set dy(v: Int64Value | undefined) { this._s(':dy', v); }
    /** Distance along Z-axis in 3D. Serialized as `:dz` */
    public get dz(): Int64Value | undefined { return this._g(':dz'); }
    public set dz(v: Int64Value | undefined) { this._s(':dz', v); }

}
/** Up Vector. Serialized as `a:up` */
export class UpVector extends Vector3DType {

    public static override _Q = 'a:up';

}
/** Normal. Serialized as `a:norm` */
export class Normal extends Vector3DType {

    public static override _Q = 'a:norm';

}
/** Anchor Point. Serialized as `a:anchor` */
export class Anchor extends OxmlLeafElement {

    public static override _Q = 'a:anchor';
    public static override _A = [':x',':y',':z',];
    /** X-Coordinate in 3D. Serialized as `:x` */
    public get x(): Int64Value | undefined { return this._g(':x'); }
    public set x(v: Int64Value | undefined) { this._s(':x', v); }
    /** Y-Coordinate in 3D. Serialized as `:y` */
    public get y(): Int64Value | undefined { return this._g(':y'); }
    public set y(v: Int64Value | undefined) { this._s(':y', v); }
    /** Z-Coordinate in 3D. Serialized as `:z` */
    public get z(): Int64Value | undefined { return this._g(':z'); }
    public set z(v: Int64Value | undefined) { this._s(':z', v); }

}
/** Backdrop Plane. Serialized as `a:backdrop` */
export class Backdrop extends OxmlCompositeElement<Anchor | Normal | UpVector | ExtensionList> {

    public static override _Q = 'a:backdrop';
    /** Anchor Point. */
    public get anchor(): Anchor | undefined { return this._f(Anchor); }
    /** Normal. */
    public get normal(): Normal | undefined { return this._f(Normal); }
    /** Up Vector. */
    public get upVector(): UpVector | undefined { return this._f(UpVector); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Light Rig. Serialized as `a:lightRig` */
export class LightRig extends OxmlCompositeElement<Rotation> {

    public static override _Q = 'a:lightRig';
    public static override _A = [':rig',':dir',];
    /** Rig Preset. Serialized as `:rig` */
    public get rig(): LightRigValues | undefined { return this._g(':rig'); }
    public set rig(v: LightRigValues | undefined) { this._s(':rig', v); }
    /** Direction. Serialized as `:dir` */
    public get direction(): LightRigDirectionValues | undefined { return this._g(':dir'); }
    public set direction(v: LightRigDirectionValues | undefined) { this._s(':dir', v); }
    /** Rotation. */
    public get rotation(): Rotation | undefined { return this._f(Rotation); }

}
/** Camera. Serialized as `a:camera` */
export class Camera extends OxmlCompositeElement<Rotation> {

    public static override _Q = 'a:camera';
    public static override _A = [':prst',':fov',':zoom',];
    /** Preset Camera Type. Serialized as `:prst` */
    public get preset(): PresetCameraValues | undefined { return this._g(':prst'); }
    public set preset(v: PresetCameraValues | undefined) { this._s(':prst', v); }
    /** Field of View. Serialized as `:fov` */
    public get fieldOfView(): Int32Value | undefined { return this._g(':fov'); }
    public set fieldOfView(v: Int32Value | undefined) { this._s(':fov', v); }
    /** Zoom. Serialized as `:zoom` */
    public get zoom(): Int32Value | undefined { return this._g(':zoom'); }
    public set zoom(v: Int32Value | undefined) { this._s(':zoom', v); }
    /** Rotation. */
    public get rotation(): Rotation | undefined { return this._f(Rotation); }

}
/** Rotation. Serialized as `a:rot` */
export class Rotation extends OxmlLeafElement {

    public static override _Q = 'a:rot';
    public static override _A = [':lat',':lon',':rev',];
    /** Latitude. Serialized as `:lat` */
    public get latitude(): Int32Value | undefined { return this._g(':lat'); }
    public set latitude(v: Int32Value | undefined) { this._s(':lat', v); }
    /** Longitude. Serialized as `:lon` */
    public get longitude(): Int32Value | undefined { return this._g(':lon'); }
    public set longitude(v: Int32Value | undefined) { this._s(':lon', v); }
    /** Revolution. Serialized as `:rev` */
    public get revolution(): Int32Value | undefined { return this._g(':rev'); }
    public set revolution(v: Int32Value | undefined) { this._s(':rev', v); }

}
/** Non-Visual Group Shape Drawing Properties. Serialized as `a:cNvGrpSpPr` */
export class NonVisualGroupShapeDrawingProperties extends OxmlCompositeElement<GroupShapeLocks | NonVisualGroupDrawingShapePropsExtensionList> {

    public static override _Q = 'a:cNvGrpSpPr';
    /** Returns GroupShapeLocks. */
    public get groupShapeLocks(): GroupShapeLocks | undefined { return this._f(GroupShapeLocks); }
    /** Returns NonVisualGroupDrawingShapePropsExtensionList. */
    public get nonVisualGroupDrawingShapePropsExtensionList(): NonVisualGroupDrawingShapePropsExtensionList | undefined { return this._f(NonVisualGroupDrawingShapePropsExtensionList); }

}
/** Non-Visual Properties for a Graphic Frame. Serialized as `a:nvGraphicFramePr` */
export class NonVisualGraphicFrameProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGraphicFrameDrawingProperties> {

    public static override _Q = 'a:nvGraphicFramePr';
    /** Returns NonVisualDrawingProperties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Non-Visual Graphic Frame Drawing Properties. */
    public get nonVisualGraphicFrameDrawingProperties(): NonVisualGraphicFrameDrawingProperties | undefined { return this._f(NonVisualGraphicFrameDrawingProperties); }

}
/** Non-Visual Graphic Frame Drawing Properties. Serialized as `a:cNvGraphicFramePr` */
export class NonVisualGraphicFrameDrawingProperties extends OxmlCompositeElement<GraphicFrameLocks | ExtensionList> {

    public static override _Q = 'a:cNvGraphicFramePr';
    /** Graphic Frame Locks. */
    public get graphicFrameLocks(): GraphicFrameLocks | undefined { return this._f(GraphicFrameLocks); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Non-Visual Properties for a Picture. Serialized as `a:nvPicPr` */
export class NonVisualPictureProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualPictureDrawingProperties> {

    public static override _Q = 'a:nvPicPr';
    /** Returns NonVisualDrawingProperties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Non-Visual Picture Drawing Properties. */
    public get nonVisualPictureDrawingProperties(): NonVisualPictureDrawingProperties | undefined { return this._f(NonVisualPictureDrawingProperties); }

}
/** Non-Visual Picture Drawing Properties. Serialized as `a:cNvPicPr` */
export class NonVisualPictureDrawingProperties extends OxmlCompositeElement<PictureLocks | NonVisualPicturePropertiesExtensionList> {

    public static override _Q = 'a:cNvPicPr';
    public static override _A = [':preferRelativeResize',];
    /** preferRelativeResize. Serialized as `:preferRelativeResize` */
    public get preferRelativeResize(): BooleanValue | undefined { return this._g(':preferRelativeResize'); }
    public set preferRelativeResize(v: BooleanValue | undefined) { this._s(':preferRelativeResize', v); }
    /** Returns PictureLocks. */
    public get pictureLocks(): PictureLocks | undefined { return this._f(PictureLocks); }
    /** Returns NonVisualPicturePropertiesExtensionList. */
    public get nonVisualPicturePropertiesExtensionList(): NonVisualPicturePropertiesExtensionList | undefined { return this._f(NonVisualPicturePropertiesExtensionList); }

}
/** Non-Visual Properties for a Connection Shape. Serialized as `a:nvCxnSpPr` */
export class NonVisualConnectionShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualConnectorShapeDrawingProperties> {

    public static override _Q = 'a:nvCxnSpPr';
    /** Non-Visual Drawing Properties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Non-Visual Connector Shape Drawing Properties. */
    public get nonVisualConnectorShapeDrawingProperties(): NonVisualConnectorShapeDrawingProperties | undefined { return this._f(NonVisualConnectorShapeDrawingProperties); }

}
/** Non-Visual Connector Shape Drawing Properties. Serialized as `a:cNvCxnSpPr` */
export class NonVisualConnectorShapeDrawingProperties extends OxmlCompositeElement<ConnectionShapeLocks | StartConnection | EndConnection | ExtensionList> {

    public static override _Q = 'a:cNvCxnSpPr';
    /** Connection Shape Locks. */
    public get connectionShapeLocks(): ConnectionShapeLocks | undefined { return this._f(ConnectionShapeLocks); }
    /** Connection Start. */
    public get startConnection(): StartConnection | undefined { return this._f(StartConnection); }
    /** Connection End. */
    public get endConnection(): EndConnection | undefined { return this._f(EndConnection); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Style. Serialized as `a:style` */
export class ShapeStyle extends OxmlCompositeElement<LineReference | FillReference | EffectReference | FontReference> {

    public static override _Q = 'a:style';
    /** Returns LineReference. */
    public get lineReference(): LineReference | undefined { return this._f(LineReference); }
    /** Returns FillReference. */
    public get fillReference(): FillReference | undefined { return this._f(FillReference); }
    /** Returns EffectReference. */
    public get effectReference(): EffectReference | undefined { return this._f(EffectReference); }
    /** Font Reference. */
    public get fontReference(): FontReference | undefined { return this._f(FontReference); }

}
/** Text Shape. Serialized as `a:txSp` */
export class TextShape extends OxmlCompositeElement<TextBody | UseShapeRectangle | Transform2D | ExtensionList> {

    public static override _Q = 'a:txSp';
    /** Shape Text Body. */
    public get textBody(): TextBody | undefined { return this._f(TextBody); }

}
/** Visual Properties. Serialized as `a:spPr` */
export class ShapeProperties extends OxmlCompositeElement<Transform2D | CustomGeometry | PresetGeometry | NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill | Outline | EffectList | EffectDag | Scene3DType | Shape3DType | ShapePropertiesExtensionList> {

    public static override _Q = 'a:spPr';
    public static override _A = [':bwMode',];
    /** Black and White Mode. Serialized as `:bwMode` */
    public get blackWhiteMode(): BlackWhiteModeValues | undefined { return this._g(':bwMode'); }
    public set blackWhiteMode(v: BlackWhiteModeValues | undefined) { this._s(':bwMode', v); }
    /** 2D Transform for Individual Objects. */
    public get transform2D(): Transform2D | undefined { return this._f(Transform2D); }

}
/** Non-Visual Properties for a Shape. Serialized as `a:nvSpPr` */
export class NonVisualShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualShapeDrawingProperties> {

    public static override _Q = 'a:nvSpPr';
    /** Returns NonVisualDrawingProperties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Non-Visual Shape Drawing Properties. */
    public get nonVisualShapeDrawingProperties(): NonVisualShapeDrawingProperties | undefined { return this._f(NonVisualShapeDrawingProperties); }

}
/** Non-Visual Shape Drawing Properties. Serialized as `a:cNvSpPr` */
export class NonVisualShapeDrawingProperties extends OxmlCompositeElement<ShapeLocks | ExtensionList> {

    public static override _Q = 'a:cNvSpPr';
    public static override _A = [':txBox',];
    /** Text Box. Serialized as `:txBox` */
    public get textBox(): BooleanValue | undefined { return this._g(':txBox'); }
    public set textBox(v: BooleanValue | undefined) { this._s(':txBox', v); }
    /** Shape Locks. */
    public get shapeLocks(): ShapeLocks | undefined { return this._f(ShapeLocks); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the NonVisualDrawingProperties Class. Serialized as `a:cNvPr` */
export class NonVisualDrawingProperties extends OxmlCompositeElement<HyperlinkOnClick | HyperlinkOnHover | NonVisualDrawingPropertiesExtensionList> {

    public static override _Q = 'a:cNvPr';
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
    public get hyperlinkOnClick(): HyperlinkOnClick | undefined { return this._f(HyperlinkOnClick); }
    /** Hyperlink associated with hovering over the element.. */
    public get hyperlinkOnHover(): HyperlinkOnHover | undefined { return this._f(HyperlinkOnHover); }
    /** Future extension. */
    public get nonVisualDrawingPropertiesExtensionList(): NonVisualDrawingPropertiesExtensionList | undefined { return this._f(NonVisualDrawingPropertiesExtensionList); }

}
/** Defines the Transform2D Class. Serialized as `a:xfrm` */
export class Transform2D extends OxmlCompositeElement<Offset | Extents> {

    public static override _Q = 'a:xfrm';
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
    public get offset(): Offset | undefined { return this._f(Offset); }
    /** Extents. */
    public get extents(): Extents | undefined { return this._f(Extents); }

}
/** Use Shape Text Rectangle. Serialized as `a:useSpRect` */
export class UseShapeRectangle extends OxmlLeafElement {

    public static override _Q = 'a:useSpRect';

}
/** Shape Text Body. Serialized as `a:txBody` */
export class TextBody extends OxmlCompositeElement<BodyProperties | ListStyle | Paragraph> {

    public static override _Q = 'a:txBody';
    /** Body Properties. */
    public get bodyProperties(): BodyProperties | undefined { return this._f(BodyProperties); }
    /** Text List Styles. */
    public get listStyle(): ListStyle | undefined { return this._f(ListStyle); }

}
/** Build Chart. Serialized as `a:bldChart` */
export class BuildChart extends OxmlLeafElement {

    public static override _Q = 'a:bldChart';
    public static override _A = [':bld',':animBg',];
    /** Build. Serialized as `:bld` */
    public get build(): StringValue | undefined { return this._g(':bld'); }
    public set build(v: StringValue | undefined) { this._s(':bld', v); }
    /** Animate Background. Serialized as `:animBg` */
    public get animateBackground(): BooleanValue | undefined { return this._g(':animBg'); }
    public set animateBackground(v: BooleanValue | undefined) { this._s(':animBg', v); }

}
/** Build Diagram. Serialized as `a:bldDgm` */
export class BuildDiagram extends OxmlLeafElement {

    public static override _Q = 'a:bldDgm';
    public static override _A = [':bld',':rev',];
    /** Build. Serialized as `:bld` */
    public get build(): StringValue | undefined { return this._g(':bld'); }
    public set build(v: StringValue | undefined) { this._s(':bld', v); }
    /** Reverse Animation. Serialized as `:rev` */
    public get reverseAnimation(): BooleanValue | undefined { return this._g(':rev'); }
    public set reverseAnimation(v: BooleanValue | undefined) { this._s(':rev', v); }

}
/** Chart to Animate. Serialized as `a:chart` */
export class Chart extends OxmlLeafElement {

    public static override _Q = 'a:chart';
    public static override _A = [':seriesIdx',':categoryIdx',':bldStep',];
    /** Series Index. Serialized as `:seriesIdx` */
    public get seriesIndex(): Int32Value | undefined { return this._g(':seriesIdx'); }
    public set seriesIndex(v: Int32Value | undefined) { this._s(':seriesIdx', v); }
    /** Category Index. Serialized as `:categoryIdx` */
    public get categoryIndex(): Int32Value | undefined { return this._g(':categoryIdx'); }
    public set categoryIndex(v: Int32Value | undefined) { this._s(':categoryIdx', v); }
    /** Animation Build Step. Serialized as `:bldStep` */
    public get buildStep(): ChartBuildStepValues | undefined { return this._g(':bldStep'); }
    public set buildStep(v: ChartBuildStepValues | undefined) { this._s(':bldStep', v); }

}
/** Diagram to Animate. Serialized as `a:dgm` */
export class Diagram extends OxmlLeafElement {

    public static override _Q = 'a:dgm';
    public static override _A = [':id',':bldStep',];
    /** Identifier. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Animation Build Step. Serialized as `:bldStep` */
    public get buildStep(): DiagramBuildStepValues | undefined { return this._g(':bldStep'); }
    public set buildStep(v: DiagramBuildStepValues | undefined) { this._s(':bldStep', v); }

}
/** Graphic Object Data. Serialized as `a:graphicData` */
export class GraphicData extends OxmlCompositeElement<Graphic | Blip | Theme | ThemeOverride | ThemeManager | Table | TableStyleList | AoeOEmbedShared | WoeOEmbed | AifImageFormula | AlfLiveFeedProperties | AslScriptLink | AclshClassificationOutcome | AskLineSketchStyleProperties | A1611PictureAttributionSourceURL | AsvgSVGBlip | AdecDecorative | A16CreationId | A16PredecessorDrawingElementReference | A16ConnectableReferences | A16RowIdIdentifier | A16ColIdIdentifier | AhypHyperlinkColor | Wp15WebVideoProperty | Thm15ThemeFamily | A15BackgroundProperties | A15NonVisualGroupProperties | A15ObjectProperties | A15SignatureLine | A14CameraTool | A14CompatExtension | A14IsCanvas | A14GvmlContentPart | A14ShadowObscured | A14HiddenFillProperties | A14HiddenLineProperties | A14HiddenEffectsProperties | A14HiddenScene3D | A14HiddenShape3D | A14ImageProperties | A14UseLocalDpi | A14TextMath | Dgm14NonVisualDrawingProperties | Dgm14RecolorImages | DspDrawing | DspDataModelExtensionBlock | DgmColorsDefinition | DgmColorsDefinitionHeader | DgmColorsDefinitionHeaderList | DgmDataModelRoot | DgmLayoutDefinition | DgmLayoutDefinitionHeader | DgmLayoutDefinitionHeaderList | DgmRelationshipIds | DgmStyleDefinition | DgmStyleDefinitionHeader | DgmStyleDefinitionHeaderList | Dgm1612ShapeProperties | Dgm1612TextListStyleType | Dgm1611NumberDiagramInfoList | CChartSpace | CUserShapes | CChartReference | C16r3DataDisplayOptions16 | C15PivotSource | C15NumberingFormat | C15ShapeProperties | C15Layout | C15FullReference | C15LevelReference | C15FormulaReference | C15FilteredSeriesTitle | C15FilteredCategoryTitle | C15FilteredAreaSeries | C15FilteredBarSeries | C15FilteredBubbleSeries | C15FilteredLineSeriesExtension | C15FilteredPieSeries | C15FilteredRadarSeries | C15FilteredScatterSeries | C15FilteredSurfaceSeries | C15DataLabelsRange | C15CategoryFilterExceptions | C15DataLabelFieldTable | C15ExceptionForSave | C15ShowDataLabelsRange | C15ChartText | C15ShowLeaderLines | C15LeaderLines | C15AutoGeneneratedCategories | C14PivotOptions | C14SketchOptions | C14InvertSolidFillFormat | C14Style | Cdr14ContentPart | CompLegacyDrawing | LcLockedCanvas | WpInline | WpAnchor | Wp14PercentagePositionHeightOffset | Wp14PercentagePositionVerticalOffset | Wp14RelativeWidth | Wp14RelativeHeight | PicPicture | Pic14ShapeStyle | Pic14OfficeArtExtensionList | XdrWorksheetDrawing | XdrContentPart | Xdr14ContentPart | PcCommentAuthorMonikerList | PcCommentMonikerList | PcStringTagMonikerList | PcCustomShowMonikerList | PcDocumentMonikerList | PcSectionMonikerList | PcSlideBaseMonikerList | PcSlideLayoutMonikerList | PcMainMasterMonikerList | PcSlideMonikerList | PcSlidePosMonikerList | PcNotesMonikerList | PcNotesTextMonikerList | PcNotesMasterMonikerList | PcHandoutMonikerList | PcAnimEffectMkLstAnimationEffectMonikerList | PcAnimEffectParentMkLstAnimationEffectMonikerList | PcOsfTaskPaneAppMonikerList | PcSummaryZoomMonikerList | PcSectionLinkObjMonikerList | PcDesignerTagMonikerList | PcCustomXmlPartMonikerList | PCommentAuthorList | PCommentList | POleObject | PPresentation | PPresentationProperties | PSlide | PSlideLayout | PSlideMaster | PHandoutMaster | PNotesMaster | PNotesSlide | PSlideSyncProperties | PTagList | PViewProperties | PContentPart | P188AuthorList | P188CommentList | P188CommentRelationship | P1912TaskHistoryDetails | OacTextBodyPackage | OacGroupCommand | OacImgDataImgData | OacOrigImgDataImgData | OacImgLink | OacDrawingMonikerList | OacDocumentContextMonikerList | OacGraphicParentMonikerList | OacDeMkLstDrawingElementMonikerList | OacDeMasterMkLstDrawingElementMonikerList | OacShapeMonikerList | OacGroupShapeMonikerList | OacGraphicFrameMonikerList | OacConnectorMonikerList | OacPictureMonikerList | OacInkMonikerList | OacTextBodyMonikerList | OacTextCharRangeMonikerList | OacHyperlinkMonikerList | OacModel3DMonikerList | OacViewSelectionStgList | OacEditorSelectionStgList | OacDrawingSelectionStgList | OacTableMonikerList | OacTableCellMonikerList | OacTableRowMonikerList | OacTableColumnMonikerList | InkmlInk | EmmaOneOf | EmmaGroup | EmmaSequence | EmmaEndPoint | EmmaEndPointInfo | EmmaInfo | EmmaGrammar | EmmaDerivedFrom | EmmaNode | EmmaArc | EmmaLattice | EmmaLiteral | EmmaInterpretation | EmmaGroupInfo | EmmaDerivation | EmmaModel | EmmaEmma | MsinkContextNode | P15PresetTransition | P15PresenceInfo | P15ThreadingInfo | P15SlideGuideList | P15NotesGuideList | P15ChartTrackingReferenceBased | P14NonVisualContentPartProperties | P14Transform2D | P14ExtensionListModify | P14Media | P14VortexTransition | P14SwitchTransition | P14FlipTransition | P14RippleTransition | P14HoneycombTransition | P14PrismTransition | P14DoorsTransition | P14WindowTransition | P14FerrisTransition | P14GalleryTransition | P14ConveyorTransition | P14PanTransition | P14GlitterTransition | P14WarpTransition | P14FlythroughTransition | P14FlashTransition | P14ShredTransition | P14RevealTransition | P14WheelReverseTransition | P14BookmarkTarget | P14SectionProperties | P14SectionList | P14BrowseMode | P14LaserColor | P14DefaultImageDpi | P14DiscardImageEditData | P14ShowMediaControls | P14LaserTraceList | P14CreationId | P14ModificationId | P14ShowEventRecordList | SlSchemaLibrary | MMathProperties | MParagraph | MOfficeMath | WRecipients | WTextBoxContent | WComments | WFootnotes | WEndnotes | WHeader | WFooter | WSettings | WWebSettings | WFonts | WNumbering | WStyles | WDocument | WGlossaryDocument | W15Color | W15DataBinding | W15Appearance | W15CommentsEx | W15People | W15SdtRepeatedSection | W15SdtRepeatedSectionItem | W15ChartTrackingRefBased | W15DefaultCollapsed | W15PersistentDocumentId | W15FootnoteColumns | W15WebExtensionLinked | W15WebExtensionCreated | W14ContentPart | W14DocumentId | W14ConflictMode | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | W14DiscardImageEditingData | W14DefaultImageDpi | W14EntityPickerEmpty | W14SdtContentCheckBox | VShape | VShapetype | VGroup | VBackground | VFill | VFormulas | VShapeHandles | VImageData | VPath | VTextBox | VShadow | VStroke | VTextPath | VArc | VCurve | VImageFile | VLine | VOval | VPolyLine | VRectangle | VRoundRectangle | OShapeDefaults | OShapeLayout | OSignatureLine | OInk | ODiagram | OSkew | OExtrusion | OCallout | OLock | OOleObject | OComplex | OLeftStroke | OTopStroke | ORightStroke | OBottomStroke | OColumnStroke | OClipPath | OFillExtendedProperties | W10TopBorder | W10LeftBorder | W10RightBorder | W10BottomBorder | W10TextWrap | W10AnchorLock | XvmlClientData | PvmlInkAnnotationFlag | PvmlTextData | WpcWordprocessingCanvas | WpgWordprocessingGroup | WpsWordprocessingShape | SleSlicer | CsColorStyle | CsChartStyle | WeWebExtension | WeWebExtensionReference | TsleTimeSlicer> {

    public static override _Q = 'a:graphicData';
    public static override _A = [':uri',];
    /** Uniform Resource Identifier. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }

}
/** Graphic Frame Locks. Serialized as `a:graphicFrameLocks` */
export class GraphicFrameLocks extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'a:graphicFrameLocks';
    public static override _A = [':noGrp',':noDrilldown',':noSelect',':noChangeAspect',':noMove',':noResize',];
    /** Disallow Shape Grouping. Serialized as `:noGrp` */
    public get noGrouping(): BooleanValue | undefined { return this._g(':noGrp'); }
    public set noGrouping(v: BooleanValue | undefined) { this._s(':noGrp', v); }
    /** Disallow Selection of Child Shapes. Serialized as `:noDrilldown` */
    public get noDrilldown(): BooleanValue | undefined { return this._g(':noDrilldown'); }
    public set noDrilldown(v: BooleanValue | undefined) { this._s(':noDrilldown', v); }
    /** Disallow Shape Selection. Serialized as `:noSelect` */
    public get noSelection(): BooleanValue | undefined { return this._g(':noSelect'); }
    public set noSelection(v: BooleanValue | undefined) { this._s(':noSelect', v); }
    /** Disallow Aspect Ratio Change. Serialized as `:noChangeAspect` */
    public get noChangeAspect(): BooleanValue | undefined { return this._g(':noChangeAspect'); }
    public set noChangeAspect(v: BooleanValue | undefined) { this._s(':noChangeAspect', v); }
    /** Disallow Shape Movement. Serialized as `:noMove` */
    public get noMove(): BooleanValue | undefined { return this._g(':noMove'); }
    public set noMove(v: BooleanValue | undefined) { this._s(':noMove', v); }
    /** Disallow Shape Resize. Serialized as `:noResize` */
    public get noResize(): BooleanValue | undefined { return this._g(':noResize'); }
    public set noResize(v: BooleanValue | undefined) { this._s(':noResize', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the ConnectionType Class. */
export abstract class ConnectionType extends OxmlLeafElement {

    public static override _A = [':id',':idx',];
    /** Identifier. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }
    /** Index. Serialized as `:idx` */
    public get index(): UInt32Value | undefined { return this._g(':idx'); }
    public set index(v: UInt32Value | undefined) { this._s(':idx', v); }

}
/** Connection End. Serialized as `a:endCxn` */
export class EndConnection extends ConnectionType {

    public static override _Q = 'a:endCxn';

}
/** Connection Start. Serialized as `a:stCxn` */
export class StartConnection extends ConnectionType {

    public static override _Q = 'a:stCxn';

}
/** Connection Shape Locks. Serialized as `a:cxnSpLocks` */
export class ConnectionShapeLocks extends OxmlCompositeElement<ConnectorLockingExtensionList> {

    public static override _Q = 'a:cxnSpLocks';
    public static override _A = [':noGrp',':noSelect',':noRot',':noChangeAspect',':noMove',':noResize',':noEditPoints',':noAdjustHandles',':noChangeArrowheads',':noChangeShapeType',];
    /** Disallow Shape Grouping. Serialized as `:noGrp` */
    public get noGrouping(): BooleanValue | undefined { return this._g(':noGrp'); }
    public set noGrouping(v: BooleanValue | undefined) { this._s(':noGrp', v); }
    /** Disallow Shape Selection. Serialized as `:noSelect` */
    public get noSelection(): BooleanValue | undefined { return this._g(':noSelect'); }
    public set noSelection(v: BooleanValue | undefined) { this._s(':noSelect', v); }
    /** Disallow Shape Rotation. Serialized as `:noRot` */
    public get noRotation(): BooleanValue | undefined { return this._g(':noRot'); }
    public set noRotation(v: BooleanValue | undefined) { this._s(':noRot', v); }
    /** Disallow Aspect Ratio Change. Serialized as `:noChangeAspect` */
    public get noChangeAspect(): BooleanValue | undefined { return this._g(':noChangeAspect'); }
    public set noChangeAspect(v: BooleanValue | undefined) { this._s(':noChangeAspect', v); }
    /** Disallow Shape Movement. Serialized as `:noMove` */
    public get noMove(): BooleanValue | undefined { return this._g(':noMove'); }
    public set noMove(v: BooleanValue | undefined) { this._s(':noMove', v); }
    /** Disallow Shape Resize. Serialized as `:noResize` */
    public get noResize(): BooleanValue | undefined { return this._g(':noResize'); }
    public set noResize(v: BooleanValue | undefined) { this._s(':noResize', v); }
    /** Disallow Shape Point Editing. Serialized as `:noEditPoints` */
    public get noEditPoints(): BooleanValue | undefined { return this._g(':noEditPoints'); }
    public set noEditPoints(v: BooleanValue | undefined) { this._s(':noEditPoints', v); }
    /** Disallow Showing Adjust Handles. Serialized as `:noAdjustHandles` */
    public get noAdjustHandles(): BooleanValue | undefined { return this._g(':noAdjustHandles'); }
    public set noAdjustHandles(v: BooleanValue | undefined) { this._s(':noAdjustHandles', v); }
    /** Disallow Arrowhead Changes. Serialized as `:noChangeArrowheads` */
    public get noChangeArrowheads(): BooleanValue | undefined { return this._g(':noChangeArrowheads'); }
    public set noChangeArrowheads(v: BooleanValue | undefined) { this._s(':noChangeArrowheads', v); }
    /** Disallow Shape Type Change. Serialized as `:noChangeShapeType` */
    public get noChangeShapeType(): BooleanValue | undefined { return this._g(':noChangeShapeType'); }
    public set noChangeShapeType(v: BooleanValue | undefined) { this._s(':noChangeShapeType', v); }
    /** Returns ConnectorLockingExtensionList. */
    public get connectorLockingExtensionList(): ConnectorLockingExtensionList | undefined { return this._f(ConnectorLockingExtensionList); }

}
/** Shape Locks. Serialized as `a:spLocks` */
export class ShapeLocks extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'a:spLocks';
    public static override _A = [':noGrp',':noSelect',':noRot',':noChangeAspect',':noMove',':noResize',':noEditPoints',':noAdjustHandles',':noChangeArrowheads',':noChangeShapeType',':noTextEdit',];
    /** Disallow Shape Grouping. Serialized as `:noGrp` */
    public get noGrouping(): BooleanValue | undefined { return this._g(':noGrp'); }
    public set noGrouping(v: BooleanValue | undefined) { this._s(':noGrp', v); }
    /** Disallow Shape Selection. Serialized as `:noSelect` */
    public get noSelection(): BooleanValue | undefined { return this._g(':noSelect'); }
    public set noSelection(v: BooleanValue | undefined) { this._s(':noSelect', v); }
    /** Disallow Shape Rotation. Serialized as `:noRot` */
    public get noRotation(): BooleanValue | undefined { return this._g(':noRot'); }
    public set noRotation(v: BooleanValue | undefined) { this._s(':noRot', v); }
    /** Disallow Aspect Ratio Change. Serialized as `:noChangeAspect` */
    public get noChangeAspect(): BooleanValue | undefined { return this._g(':noChangeAspect'); }
    public set noChangeAspect(v: BooleanValue | undefined) { this._s(':noChangeAspect', v); }
    /** Disallow Shape Movement. Serialized as `:noMove` */
    public get noMove(): BooleanValue | undefined { return this._g(':noMove'); }
    public set noMove(v: BooleanValue | undefined) { this._s(':noMove', v); }
    /** Disallow Shape Resize. Serialized as `:noResize` */
    public get noResize(): BooleanValue | undefined { return this._g(':noResize'); }
    public set noResize(v: BooleanValue | undefined) { this._s(':noResize', v); }
    /** Disallow Shape Point Editing. Serialized as `:noEditPoints` */
    public get noEditPoints(): BooleanValue | undefined { return this._g(':noEditPoints'); }
    public set noEditPoints(v: BooleanValue | undefined) { this._s(':noEditPoints', v); }
    /** Disallow Showing Adjust Handles. Serialized as `:noAdjustHandles` */
    public get noAdjustHandles(): BooleanValue | undefined { return this._g(':noAdjustHandles'); }
    public set noAdjustHandles(v: BooleanValue | undefined) { this._s(':noAdjustHandles', v); }
    /** Disallow Arrowhead Changes. Serialized as `:noChangeArrowheads` */
    public get noChangeArrowheads(): BooleanValue | undefined { return this._g(':noChangeArrowheads'); }
    public set noChangeArrowheads(v: BooleanValue | undefined) { this._s(':noChangeArrowheads', v); }
    /** Disallow Shape Type Change. Serialized as `:noChangeShapeType` */
    public get noChangeShapeType(): BooleanValue | undefined { return this._g(':noChangeShapeType'); }
    public set noChangeShapeType(v: BooleanValue | undefined) { this._s(':noChangeShapeType', v); }
    /** Disallow Shape Text Editing. Serialized as `:noTextEdit` */
    public get noTextEdit(): BooleanValue | undefined { return this._g(':noTextEdit'); }
    public set noTextEdit(v: BooleanValue | undefined) { this._s(':noTextEdit', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

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
/** Child Extents. Serialized as `a:chExt` */
export class ChildExtents extends PositiveSize2DType {

    public static override _Q = 'a:chExt';

}
/** Extents. Serialized as `a:ext` */
export class Extents extends PositiveSize2DType {

    public static override _Q = 'a:ext';

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
/** Child Offset. Serialized as `a:chOff` */
export class ChildOffset extends Point2DType {

    public static override _Q = 'a:chOff';

}
/** Offset. Serialized as `a:off` */
export class Offset extends Point2DType {

    public static override _Q = 'a:off';

}
/** Defines the RatioType Class. */
export abstract class RatioType extends OxmlLeafElement {

    public static override _A = [':n',':d',];
    /** Numerator. Serialized as `:n` */
    public get numerator(): Int32Value | undefined { return this._g(':n'); }
    public set numerator(v: Int32Value | undefined) { this._s(':n', v); }
    /** Denominator. Serialized as `:d` */
    public get denominator(): Int32Value | undefined { return this._g(':d'); }
    public set denominator(v: Int32Value | undefined) { this._s(':d', v); }

}
/** Vertical Ratio. Serialized as `a:sy` */
export class ScaleY extends RatioType {

    public static override _Q = 'a:sy';

}
/** Horizontal Ratio. Serialized as `a:sx` */
export class ScaleX extends RatioType {

    public static override _Q = 'a:sx';

}
/** Defines the Color2Type Class. */
export abstract class Color2Type extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | PresetColor> {

    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): RgbColorModelPercentage | undefined { return this._f(RgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): RgbColorModelHex | undefined { return this._f(RgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): HslColor | undefined { return this._f(HslColor); }
    /** System Color. */
    public get systemColor(): SystemColor | undefined { return this._f(SystemColor); }
    /** Preset Color. */
    public get presetColor(): PresetColor | undefined { return this._f(PresetColor); }

}
/** Followed Hyperlink. Serialized as `a:folHlink` */
export class FollowedHyperlinkColor extends Color2Type {

    public static override _Q = 'a:folHlink';

}
/** Hyperlink. Serialized as `a:hlink` */
export class Hyperlink extends Color2Type {

    public static override _Q = 'a:hlink';

}
/** Accent 6. Serialized as `a:accent6` */
export class Accent6Color extends Color2Type {

    public static override _Q = 'a:accent6';

}
/** Accent 5. Serialized as `a:accent5` */
export class Accent5Color extends Color2Type {

    public static override _Q = 'a:accent5';

}
/** Accent 4. Serialized as `a:accent4` */
export class Accent4Color extends Color2Type {

    public static override _Q = 'a:accent4';

}
/** Accent 3. Serialized as `a:accent3` */
export class Accent3Color extends Color2Type {

    public static override _Q = 'a:accent3';

}
/** Accent 2. Serialized as `a:accent2` */
export class Accent2Color extends Color2Type {

    public static override _Q = 'a:accent2';

}
/** Accent 1. Serialized as `a:accent1` */
export class Accent1Color extends Color2Type {

    public static override _Q = 'a:accent1';

}
/** Light 2. Serialized as `a:lt2` */
export class Light2Color extends Color2Type {

    public static override _Q = 'a:lt2';

}
/** Dark 2. Serialized as `a:dk2` */
export class Dark2Color extends Color2Type {

    public static override _Q = 'a:dk2';

}
/** Light 1. Serialized as `a:lt1` */
export class Light1Color extends Color2Type {

    public static override _Q = 'a:lt1';

}
/** Dark 1. Serialized as `a:dk1` */
export class Dark1Color extends Color2Type {

    public static override _Q = 'a:dk1';

}
/** Format Scheme. Serialized as `a:fmtScheme` */
export class FormatScheme extends OxmlCompositeElement<FillStyleList | LineStyleList | EffectStyleList | BackgroundFillStyleList> {

    public static override _Q = 'a:fmtScheme';
    public static override _A = [':name',];
    /** Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Fill Style List. */
    public get fillStyleList(): FillStyleList | undefined { return this._f(FillStyleList); }
    /** Line Style List. */
    public get lineStyleList(): LineStyleList | undefined { return this._f(LineStyleList); }
    /** Effect Style List. */
    public get effectStyleList(): EffectStyleList | undefined { return this._f(EffectStyleList); }
    /** Background Fill Style List. */
    public get backgroundFillStyleList(): BackgroundFillStyleList | undefined { return this._f(BackgroundFillStyleList); }

}
/** Font Scheme. Serialized as `a:fontScheme` */
export class FontScheme extends OxmlCompositeElement<MajorFont | MinorFont | ExtensionList> {

    public static override _Q = 'a:fontScheme';
    public static override _A = [':name',];
    /** Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Major Font. */
    public get majorFont(): MajorFont | undefined { return this._f(MajorFont); }
    /** Minor fonts. */
    public get minorFont(): MinorFont | undefined { return this._f(MinorFont); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the ColorScheme Class. Serialized as `a:clrScheme` */
export class ColorScheme extends OxmlCompositeElement<Dark1Color | Light1Color | Dark2Color | Light2Color | Accent1Color | Accent2Color | Accent3Color | Accent4Color | Accent5Color | Accent6Color | Hyperlink | FollowedHyperlinkColor | ExtensionList> {

    public static override _Q = 'a:clrScheme';
    public static override _A = [':name',];
    /** Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** Dark 1. */
    public get dark1Color(): Dark1Color | undefined { return this._f(Dark1Color); }
    /** Light 1. */
    public get light1Color(): Light1Color | undefined { return this._f(Light1Color); }
    /** Dark 2. */
    public get dark2Color(): Dark2Color | undefined { return this._f(Dark2Color); }
    /** Light 2. */
    public get light2Color(): Light2Color | undefined { return this._f(Light2Color); }
    /** Accent 1. */
    public get accent1Color(): Accent1Color | undefined { return this._f(Accent1Color); }
    /** Accent 2. */
    public get accent2Color(): Accent2Color | undefined { return this._f(Accent2Color); }
    /** Accent 3. */
    public get accent3Color(): Accent3Color | undefined { return this._f(Accent3Color); }
    /** Accent 4. */
    public get accent4Color(): Accent4Color | undefined { return this._f(Accent4Color); }
    /** Accent 5. */
    public get accent5Color(): Accent5Color | undefined { return this._f(Accent5Color); }
    /** Accent 6. */
    public get accent6Color(): Accent6Color | undefined { return this._f(Accent6Color); }
    /** Hyperlink. */
    public get hyperlink(): Hyperlink | undefined { return this._f(Hyperlink); }
    /** Followed Hyperlink. */
    public get followedHyperlinkColor(): FollowedHyperlinkColor | undefined { return this._f(FollowedHyperlinkColor); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Background Fill Style List. Serialized as `a:bgFillStyleLst` */
export class BackgroundFillStyleList extends OxmlCompositeElement<NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill> {

    public static override _Q = 'a:bgFillStyleLst';

}
/** Effect Style List. Serialized as `a:effectStyleLst` */
export class EffectStyleList extends OxmlCompositeElement<EffectStyle> {

    public static override _Q = 'a:effectStyleLst';

}
/** Line Style List. Serialized as `a:lnStyleLst` */
export class LineStyleList extends OxmlCompositeElement<Outline> {

    public static override _Q = 'a:lnStyleLst';

}
/** Fill Style List. Serialized as `a:fillStyleLst` */
export class FillStyleList extends OxmlCompositeElement<NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill> {

    public static override _Q = 'a:fillStyleLst';

}
/** Effect Style. Serialized as `a:effectStyle` */
export class EffectStyle extends OxmlCompositeElement<EffectList | EffectDag | Scene3DType | Shape3DType> {

    public static override _Q = 'a:effectStyle';

}
/** 3D Scene Properties. Serialized as `a:scene3d` */
export class Scene3DType extends OxmlCompositeElement<Camera | LightRig | Backdrop | ExtensionList> {

    public static override _Q = 'a:scene3d';
    /** Camera. */
    public get camera(): Camera | undefined { return this._f(Camera); }
    /** Light Rig. */
    public get lightRig(): LightRig | undefined { return this._f(LightRig); }
    /** Backdrop Plane. */
    public get backdrop(): Backdrop | undefined { return this._f(Backdrop); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Font. Serialized as `a:font` */
export class SupplementalFont extends OxmlLeafElement {

    public static override _Q = 'a:font';
    public static override _A = [':script',':typeface',];
    /** Script. Serialized as `:script` */
    public get script(): StringValue | undefined { return this._g(':script'); }
    public set script(v: StringValue | undefined) { this._s(':script', v); }
    /** Typeface. Serialized as `:typeface` */
    public get typeface(): StringValue | undefined { return this._g(':typeface'); }
    public set typeface(v: StringValue | undefined) { this._s(':typeface', v); }

}
/** Custom color. Serialized as `a:custClr` */
export class CustomColor extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {

    public static override _Q = 'a:custClr';
    public static override _A = [':name',];
    /** Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): RgbColorModelPercentage | undefined { return this._f(RgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): RgbColorModelHex | undefined { return this._f(RgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): HslColor | undefined { return this._f(HslColor); }
    /** System Color. */
    public get systemColor(): SystemColor | undefined { return this._f(SystemColor); }
    /** Scheme Color. */
    public get schemeColor(): SchemeColor | undefined { return this._f(SchemeColor); }
    /** Preset Color. */
    public get presetColor(): PresetColor | undefined { return this._f(PresetColor); }

}
/** Defines the AudioCDTimeType Class. */
export abstract class AudioCDTimeType extends OxmlLeafElement {

    public static override _A = [':track',':time',];
    /** Track. Serialized as `:track` */
    public get track(): ByteValue | undefined { return this._g(':track'); }
    public set track(v: ByteValue | undefined) { this._s(':track', v); }
    /** Time. Serialized as `:time` */
    public get time(): UInt32Value | undefined { return this._g(':time'); }
    public set time(v: UInt32Value | undefined) { this._s(':time', v); }

}
/** Audio End Time. Serialized as `a:end` */
export class EndTime extends AudioCDTimeType {

    public static override _Q = 'a:end';

}
/** Audio Start Time. Serialized as `a:st` */
export class StartTime extends AudioCDTimeType {

    public static override _Q = 'a:st';

}
/** Defines the ExtensionList Class. Serialized as `a:extLst` */
export class ExtensionList extends OxmlCompositeElement<Extension> {

    public static override _Q = 'a:extLst';

}
/** Table Style List. Serialized as `a:tblStyleLst` */
export class TableStyleList extends OxmlPartRootElement<TableStyleEntry> {

    public static override _Q = 'a:tblStyleLst';
    public static override _A = [':def',];
    /** Default. Serialized as `:def` */
    public get default(): StringValue | undefined { return this._g(':def'); }
    public set default(v: StringValue | undefined) { this._s(':def', v); }

}
/** Table. Serialized as `a:tbl` */
export class Table extends OxmlCompositeElement<TableProperties | TableGrid | TableRow> {

    public static override _Q = 'a:tbl';
    /** Table Properties. */
    public get tableProperties(): TableProperties | undefined { return this._f(TableProperties); }
    /** Table Grid. */
    public get tableGrid(): TableGrid | undefined { return this._f(TableGrid); }

}
/** Defines the EmptyType Class. */
export abstract class EmptyType extends OxmlLeafElement {


}
/** Master Color Mapping. Serialized as `a:masterClrMapping` */
export class MasterColorMapping extends EmptyType {

    public static override _Q = 'a:masterClrMapping';

}
/** Theme Manager. Serialized as `a:themeManager` */
export class ThemeManager extends EmptyType {

    public static override _Q = 'a:themeManager';

}
/** Theme Override. Serialized as `a:themeOverride` */
export class ThemeOverride extends OxmlPartRootElement<ColorScheme | FontScheme | FormatScheme> {

    public static override _Q = 'a:themeOverride';
    /** Color Scheme. */
    public get colorScheme(): ColorScheme | undefined { return this._f(ColorScheme); }
    /** Returns FontScheme. */
    public get fontScheme(): FontScheme | undefined { return this._f(FontScheme); }
    /** Returns FormatScheme. */
    public get formatScheme(): FormatScheme | undefined { return this._f(FormatScheme); }

}
/** Theme. Serialized as `a:theme` */
export class Theme extends OxmlPartRootElement<ThemeElements | ObjectDefaults | ExtraColorSchemeList | CustomColorList | OfficeStyleSheetExtensionList> {

    public static override _Q = 'a:theme';
    public static override _A = [':name','thm15:id',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** id. Serialized as `thm15:id` */
    public get themeId(): StringValue | undefined { return this._g('thm15:id'); }
    public set themeId(v: StringValue | undefined) { this._s('thm15:id', v); }
    /** Returns ThemeElements. */
    public get themeElements(): ThemeElements | undefined { return this._f(ThemeElements); }
    /** Returns ObjectDefaults. */
    public get objectDefaults(): ObjectDefaults | undefined { return this._f(ObjectDefaults); }
    /** Returns ExtraColorSchemeList. */
    public get extraColorSchemeList(): ExtraColorSchemeList | undefined { return this._f(ExtraColorSchemeList); }
    /** Returns CustomColorList. */
    public get customColorList(): CustomColorList | undefined { return this._f(CustomColorList); }
    /** Returns OfficeStyleSheetExtensionList. */
    public get officeStyleSheetExtensionList(): OfficeStyleSheetExtensionList | undefined { return this._f(OfficeStyleSheetExtensionList); }

}
/** Defines the Blip Class. Serialized as `a:blip` */
export class Blip extends OxmlCompositeElement<AlphaBiLevel | AlphaCeiling | AlphaFloor | AlphaInverse | AlphaModulationEffect | AlphaModulationFixed | AlphaReplace | BiLevel | Blur | ColorChange | ColorReplacement | Duotone | FillOverlay | Grayscale | Hsl | LuminanceEffect | TintEffect | BlipExtensionList> {

    public static override _Q = 'a:blip';
    public static override _A = ['r:embed','r:link',':cstate',];
    /** Embedded Picture Reference. Serialized as `r:embed` */
    public get embed(): StringValue | undefined { return this._g('r:embed'); }
    public set embed(v: StringValue | undefined) { this._s('r:embed', v); }
    /** Linked Picture Reference. Serialized as `r:link` */
    public get link(): StringValue | undefined { return this._g('r:link'); }
    public set link(v: StringValue | undefined) { this._s('r:link', v); }
    /** Compression state for blips.. Serialized as `:cstate` */
    public get compressionState(): BlipCompressionValues | undefined { return this._g(':cstate'); }
    public set compressionState(v: BlipCompressionValues | undefined) { this._s(':cstate', v); }

}
/** Graphic Object. Serialized as `a:graphic` */
export class Graphic extends OxmlCompositeElement<GraphicData> {

    public static override _Q = 'a:graphic';
    /** Graphic Object Data. */
    public get graphicData(): GraphicData | undefined { return this._f(GraphicData); }

}
/** Text Field. Serialized as `a:fld` */
export class Field extends OxmlCompositeElement<RunProperties | ParagraphProperties | Text> {

    public static override _Q = 'a:fld';
    public static override _A = [':id',':type',];
    /** Field ID. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Field Type. Serialized as `:type` */
    public get type(): StringValue | undefined { return this._g(':type'); }
    public set type(v: StringValue | undefined) { this._s(':type', v); }
    /** Text Character Properties. */
    public get runProperties(): RunProperties | undefined { return this._f(RunProperties); }
    /** Text Paragraph Properties. */
    public get paragraphProperties(): ParagraphProperties | undefined { return this._f(ParagraphProperties); }
    /** Returns Text. */
    public get text(): Text | undefined { return this._f(Text); }

}
/** Text Line Break. Serialized as `a:br` */
export class Break extends OxmlCompositeElement<RunProperties> {

    public static override _Q = 'a:br';
    /** Text Run Properties. */
    public get runProperties(): RunProperties | undefined { return this._f(RunProperties); }

}
/** Text Run. Serialized as `a:r` */
export class Run extends OxmlCompositeElement<RunProperties | Text> {

    public static override _Q = 'a:r';
    /** Text Character Properties. */
    public get runProperties(): RunProperties | undefined { return this._f(RunProperties); }
    /** Text String. */
    public get text(): Text | undefined { return this._f(Text); }

}
/** Underline Fill. Serialized as `a:uFill` */
export class UnderlineFill extends OxmlCompositeElement<NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill> {

    public static override _Q = 'a:uFill';
    /** Returns NoFill. */
    public get noFill(): NoFill | undefined { return this._f(NoFill); }
    /** Returns SolidFill. */
    public get solidFill(): SolidFill | undefined { return this._f(SolidFill); }
    /** Returns GradientFill. */
    public get gradientFill(): GradientFill | undefined { return this._f(GradientFill); }
    /** Returns BlipFill. */
    public get blipFill(): BlipFill | undefined { return this._f(BlipFill); }
    /** Pattern Fill. */
    public get patternFill(): PatternFill | undefined { return this._f(PatternFill); }
    /** Group Fill. */
    public get groupFill(): GroupFill | undefined { return this._f(GroupFill); }

}
/** Underline Fill Properties Follow Text. Serialized as `a:uFillTx` */
export class UnderlineFillText extends OxmlLeafElement {

    public static override _Q = 'a:uFillTx';

}
/** Defines the LinePropertiesType Class. */
export abstract class LinePropertiesType extends OxmlCompositeElement<NoFill | SolidFill | GradientFill | PatternFill | PresetDash | CustomDash | Round | LineJoinBevel | Miter | HeadEnd | TailEnd | LinePropertiesExtensionList> {

    public static override _A = [':w',':cap',':cmpd',':algn',];
    /** line width. Serialized as `:w` */
    public get width(): Int32Value | undefined { return this._g(':w'); }
    public set width(v: Int32Value | undefined) { this._s(':w', v); }
    /** line cap. Serialized as `:cap` */
    public get capType(): LineCapValues | undefined { return this._g(':cap'); }
    public set capType(v: LineCapValues | undefined) { this._s(':cap', v); }
    /** compound line type. Serialized as `:cmpd` */
    public get compoundLineType(): CompoundLineValues | undefined { return this._g(':cmpd'); }
    public set compoundLineType(v: CompoundLineValues | undefined) { this._s(':cmpd', v); }
    /** pen alignment. Serialized as `:algn` */
    public get alignment(): PenAlignmentValues | undefined { return this._g(':algn'); }
    public set alignment(v: PenAlignmentValues | undefined) { this._s(':algn', v); }

}
/** Bottom-Left to Top-Right Border Line Properties. Serialized as `a:lnBlToTr` */
export class BottomLeftToTopRightBorderLineProperties extends LinePropertiesType {

    public static override _Q = 'a:lnBlToTr';

}
/** Top-Left to Bottom-Right Border Line Properties. Serialized as `a:lnTlToBr` */
export class TopLeftToBottomRightBorderLineProperties extends LinePropertiesType {

    public static override _Q = 'a:lnTlToBr';

}
/** Bottom Border Line Properties. Serialized as `a:lnB` */
export class BottomBorderLineProperties extends LinePropertiesType {

    public static override _Q = 'a:lnB';

}
/** Top Border Line Properties. Serialized as `a:lnT` */
export class TopBorderLineProperties extends LinePropertiesType {

    public static override _Q = 'a:lnT';

}
/** Right Border Line Properties. Serialized as `a:lnR` */
export class RightBorderLineProperties extends LinePropertiesType {

    public static override _Q = 'a:lnR';

}
/** Left Border Line Properties. Serialized as `a:lnL` */
export class LeftBorderLineProperties extends LinePropertiesType {

    public static override _Q = 'a:lnL';

}
/** Defines the Outline Class. Serialized as `a:ln` */
export class Outline extends LinePropertiesType {

    public static override _Q = 'a:ln';

}
/** Underline Stroke. Serialized as `a:uLn` */
export class Underline extends LinePropertiesType {

    public static override _Q = 'a:uLn';

}
/** Underline Follows Text. Serialized as `a:uLnTx` */
export class UnderlineFollowsText extends OxmlLeafElement {

    public static override _Q = 'a:uLnTx';

}
/** Picture Bullet. Serialized as `a:buBlip` */
export class PictureBullet extends OxmlCompositeElement<Blip> {

    public static override _Q = 'a:buBlip';
    /** Blip. */
    public get blip(): Blip | undefined { return this._f(Blip); }

}
/** Character Bullet. Serialized as `a:buChar` */
export class CharacterBullet extends OxmlLeafElement {

    public static override _Q = 'a:buChar';
    public static override _A = [':char',];
    /** Bullet Character. Serialized as `:char` */
    public get char(): StringValue | undefined { return this._g(':char'); }
    public set char(v: StringValue | undefined) { this._s(':char', v); }

}
/** Auto-Numbered Bullet. Serialized as `a:buAutoNum` */
export class AutoNumberedBullet extends OxmlLeafElement {

    public static override _Q = 'a:buAutoNum';
    public static override _A = [':type',':startAt',];
    /** Bullet Autonumbering Type. Serialized as `:type` */
    public get type(): TextAutoNumberSchemeValues | undefined { return this._g(':type'); }
    public set type(v: TextAutoNumberSchemeValues | undefined) { this._s(':type', v); }
    /** Start Numbering At. Serialized as `:startAt` */
    public get startAt(): Int32Value | undefined { return this._g(':startAt'); }
    public set startAt(v: Int32Value | undefined) { this._s(':startAt', v); }

}
/** No Bullet. Serialized as `a:buNone` */
export class NoBullet extends OxmlLeafElement {

    public static override _Q = 'a:buNone';

}
/** Defines the TextFontType Class. */
export abstract class TextFontType extends OxmlLeafElement {

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
/** Defines the SymbolFont Class. Serialized as `a:sym` */
export class SymbolFont extends TextFontType {

    public static override _Q = 'a:sym';

}
/** Complex Script Font. Serialized as `a:cs` */
export class ComplexScriptFont extends TextFontType {

    public static override _Q = 'a:cs';

}
/** East Asian Font. Serialized as `a:ea` */
export class EastAsianFont extends TextFontType {

    public static override _Q = 'a:ea';

}
/** Latin Font. Serialized as `a:latin` */
export class LatinFont extends TextFontType {

    public static override _Q = 'a:latin';

}
/** Specified. Serialized as `a:buFont` */
export class BulletFont extends TextFontType {

    public static override _Q = 'a:buFont';

}
/** Follow text. Serialized as `a:buFontTx` */
export class BulletFontText extends OxmlLeafElement {

    public static override _Q = 'a:buFontTx';

}
/** Bullet Size Points. Serialized as `a:buSzPts` */
export class BulletSizePoints extends OxmlLeafElement {

    public static override _Q = 'a:buSzPts';
    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): Int32Value | undefined { return this._g(':val'); }
    public set val(v: Int32Value | undefined) { this._s(':val', v); }

}
/** Bullet Size Percentage. Serialized as `a:buSzPct` */
export class BulletSizePercentage extends OxmlLeafElement {

    public static override _Q = 'a:buSzPct';
    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): Int32Value | undefined { return this._g(':val'); }
    public set val(v: Int32Value | undefined) { this._s(':val', v); }

}
/** Bullet Size Follows Text. Serialized as `a:buSzTx` */
export class BulletSizeText extends OxmlLeafElement {

    public static override _Q = 'a:buSzTx';

}
/** Defines the ColorType Class. */
export abstract class ColorType extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {

    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): RgbColorModelPercentage | undefined { return this._f(RgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): RgbColorModelHex | undefined { return this._f(RgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): HslColor | undefined { return this._f(HslColor); }
    /** System Color. */
    public get systemColor(): SystemColor | undefined { return this._f(SystemColor); }
    /** Scheme Color. */
    public get schemeColor(): SchemeColor | undefined { return this._f(SchemeColor); }
    /** Preset Color. */
    public get presetColor(): PresetColor | undefined { return this._f(PresetColor); }

}
/** Defines the Highlight Class. Serialized as `a:highlight` */
export class Highlight extends ColorType {

    public static override _Q = 'a:highlight';

}
/** Background color. Serialized as `a:bgClr` */
export class BackgroundColor extends ColorType {

    public static override _Q = 'a:bgClr';

}
/** Foreground color. Serialized as `a:fgClr` */
export class ForegroundColor extends ColorType {

    public static override _Q = 'a:fgClr';

}
/** Change Color To. Serialized as `a:clrTo` */
export class ColorTo extends ColorType {

    public static override _Q = 'a:clrTo';

}
/** Change Color From. Serialized as `a:clrFrom` */
export class ColorFrom extends ColorType {

    public static override _Q = 'a:clrFrom';

}
/** Contour Color. Serialized as `a:contourClr` */
export class ContourColor extends ColorType {

    public static override _Q = 'a:contourClr';

}
/** Extrusion Color. Serialized as `a:extrusionClr` */
export class ExtrusionColor extends ColorType {

    public static override _Q = 'a:extrusionClr';

}
/** Color Specified. Serialized as `a:buClr` */
export class BulletColor extends ColorType {

    public static override _Q = 'a:buClr';

}
/** Follow Text. Serialized as `a:buClrTx` */
export class BulletColorText extends OxmlLeafElement {

    public static override _Q = 'a:buClrTx';

}
/** Shape AutoFit. Serialized as `a:spAutoFit` */
export class ShapeAutoFit extends OxmlLeafElement {

    public static override _Q = 'a:spAutoFit';

}
/** Normal AutoFit. Serialized as `a:normAutofit` */
export class NormalAutoFit extends OxmlLeafElement {

    public static override _Q = 'a:normAutofit';
    public static override _A = [':fontScale',':lnSpcReduction',];
    /** Font Scale. Serialized as `:fontScale` */
    public get fontScale(): Int32Value | undefined { return this._g(':fontScale'); }
    public set fontScale(v: Int32Value | undefined) { this._s(':fontScale', v); }
    /** Line Space Reduction. Serialized as `:lnSpcReduction` */
    public get lineSpaceReduction(): Int32Value | undefined { return this._g(':lnSpcReduction'); }
    public set lineSpaceReduction(v: Int32Value | undefined) { this._s(':lnSpcReduction', v); }

}
/** No AutoFit. Serialized as `a:noAutofit` */
export class NoAutoFit extends OxmlLeafElement {

    public static override _Q = 'a:noAutofit';

}
/** Defines the FontReference Class. Serialized as `a:fontRef` */
export class FontReference extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {

    public static override _Q = 'a:fontRef';
    public static override _A = [':idx',];
    /** Identifier. Serialized as `:idx` */
    public get index(): FontCollectionIndexValues | undefined { return this._g(':idx'); }
    public set index(v: FontCollectionIndexValues | undefined) { this._s(':idx', v); }
    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): RgbColorModelPercentage | undefined { return this._f(RgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): RgbColorModelHex | undefined { return this._f(RgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): HslColor | undefined { return this._f(HslColor); }
    /** System Color. */
    public get systemColor(): SystemColor | undefined { return this._f(SystemColor); }
    /** Scheme Color. */
    public get schemeColor(): SchemeColor | undefined { return this._f(SchemeColor); }
    /** Preset Color. */
    public get presetColor(): PresetColor | undefined { return this._f(PresetColor); }

}
/** Defines the FontCollectionType Class. */
export abstract class FontCollectionType extends OxmlCompositeElement<LatinFont | EastAsianFont | ComplexScriptFont | SupplementalFont | ExtensionList> {

    /** Latin Font. */
    public get latinFont(): LatinFont | undefined { return this._f(LatinFont); }
    /** East Asian Font. */
    public get eastAsianFont(): EastAsianFont | undefined { return this._f(EastAsianFont); }
    /** Complex Script Font. */
    public get complexScriptFont(): ComplexScriptFont | undefined { return this._f(ComplexScriptFont); }

}
/** Minor fonts. Serialized as `a:minorFont` */
export class MinorFont extends FontCollectionType {

    public static override _Q = 'a:minorFont';

}
/** Major Font. Serialized as `a:majorFont` */
export class MajorFont extends FontCollectionType {

    public static override _Q = 'a:majorFont';

}
/** Font. Serialized as `a:font` */
export class Fonts extends FontCollectionType {

    public static override _Q = 'a:font';

}
/** Effect. Serialized as `a:effect` */
export class EffectPropertiesType extends OxmlCompositeElement<EffectList | EffectDag> {

    public static override _Q = 'a:effect';
    /** Effect Container. */
    public get effectList(): EffectList | undefined { return this._f(EffectList); }
    /** Effect Container. */
    public get effectDag(): EffectDag | undefined { return this._f(EffectDag); }

}
/** Defines the StyleMatrixReferenceType Class. */
export abstract class StyleMatrixReferenceType extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {

    public static override _A = [':idx',];
    /** Style Matrix Index. Serialized as `:idx` */
    public get index(): UInt32Value | undefined { return this._g(':idx'); }
    public set index(v: UInt32Value | undefined) { this._s(':idx', v); }
    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): RgbColorModelPercentage | undefined { return this._f(RgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): RgbColorModelHex | undefined { return this._f(RgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): HslColor | undefined { return this._f(HslColor); }
    /** System Color. */
    public get systemColor(): SystemColor | undefined { return this._f(SystemColor); }
    /** Scheme Color. */
    public get schemeColor(): SchemeColor | undefined { return this._f(SchemeColor); }
    /** Preset Color. */
    public get presetColor(): PresetColor | undefined { return this._f(PresetColor); }

}
/** Defines the LineReference Class. Serialized as `a:lnRef` */
export class LineReference extends StyleMatrixReferenceType {

    public static override _Q = 'a:lnRef';

}
/** Effect Reference. Serialized as `a:effectRef` */
export class EffectReference extends StyleMatrixReferenceType {

    public static override _Q = 'a:effectRef';

}
/** Fill Reference. Serialized as `a:fillRef` */
export class FillReference extends StyleMatrixReferenceType {

    public static override _Q = 'a:fillRef';

}
/** Fill. Serialized as `a:fill` */
export class FillProperties extends OxmlCompositeElement<NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill> {

    public static override _Q = 'a:fill';
    /** Returns NoFill. */
    public get noFill(): NoFill | undefined { return this._f(NoFill); }
    /** Returns SolidFill. */
    public get solidFill(): SolidFill | undefined { return this._f(SolidFill); }
    /** Returns GradientFill. */
    public get gradientFill(): GradientFill | undefined { return this._f(GradientFill); }
    /** Returns BlipFill. */
    public get blipFill(): BlipFill | undefined { return this._f(BlipFill); }
    /** Pattern Fill. */
    public get patternFill(): PatternFill | undefined { return this._f(PatternFill); }
    /** Group Fill. */
    public get groupFill(): GroupFill | undefined { return this._f(GroupFill); }

}
/** Custom Dash. Serialized as `a:custDash` */
export class CustomDash extends OxmlCompositeElement<DashStop> {

    public static override _Q = 'a:custDash';

}
/** Preset Dash. Serialized as `a:prstDash` */
export class PresetDash extends OxmlLeafElement {

    public static override _Q = 'a:prstDash';
    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): PresetLineDashValues | undefined { return this._g(':val'); }
    public set val(v: PresetLineDashValues | undefined) { this._s(':val', v); }

}
/** Miter Line Join. Serialized as `a:miter` */
export class Miter extends OxmlLeafElement {

    public static override _Q = 'a:miter';
    public static override _A = [':lim',];
    /** Miter Join Limit. Serialized as `:lim` */
    public get limit(): Int32Value | undefined { return this._g(':lim'); }
    public set limit(v: Int32Value | undefined) { this._s(':lim', v); }

}
/** Line Join Bevel. Serialized as `a:bevel` */
export class LineJoinBevel extends OxmlLeafElement {

    public static override _Q = 'a:bevel';

}
/** Round Line Join. Serialized as `a:round` */
export class Round extends OxmlLeafElement {

    public static override _Q = 'a:round';

}
/** Preset Text Warp. Serialized as `a:prstTxWarp` */
export class PresetTextWrap extends OxmlCompositeElement<AdjustValueList> {

    public static override _Q = 'a:prstTxWarp';
    public static override _A = [':prst',];
    /** Preset Warp Shape. Serialized as `:prst` */
    public get preset(): TextShapeValues | undefined { return this._g(':prst'); }
    public set preset(v: TextShapeValues | undefined) { this._s(':prst', v); }
    /** Adjust Value List. */
    public get adjustValueList(): AdjustValueList | undefined { return this._f(AdjustValueList); }

}
/** Preset geometry. Serialized as `a:prstGeom` */
export class PresetGeometry extends OxmlCompositeElement<AdjustValueList> {

    public static override _Q = 'a:prstGeom';
    public static override _A = [':prst',];
    /** Preset Shape. Serialized as `:prst` */
    public get preset(): ShapeTypeValues | undefined { return this._g(':prst'); }
    public set preset(v: ShapeTypeValues | undefined) { this._s(':prst', v); }
    /** List of Shape Adjust Values. */
    public get adjustValueList(): AdjustValueList | undefined { return this._f(AdjustValueList); }

}
/** Custom geometry. Serialized as `a:custGeom` */
export class CustomGeometry extends OxmlCompositeElement<AdjustValueList | ShapeGuideList | AdjustHandleList | ConnectionSiteList | Rectangle | PathList> {

    public static override _Q = 'a:custGeom';
    /** Adjust Value List. */
    public get adjustValueList(): AdjustValueList | undefined { return this._f(AdjustValueList); }
    /** List of Shape Guides. */
    public get shapeGuideList(): ShapeGuideList | undefined { return this._f(ShapeGuideList); }
    /** List of Shape Adjust Handles. */
    public get adjustHandleList(): AdjustHandleList | undefined { return this._f(AdjustHandleList); }
    /** List of Shape Connection Sites. */
    public get connectionSiteList(): ConnectionSiteList | undefined { return this._f(ConnectionSiteList); }
    /** Shape Text Rectangle. */
    public get rectangle(): Rectangle | undefined { return this._f(Rectangle); }
    /** List of Shape Paths. */
    public get pathList(): PathList | undefined { return this._f(PathList); }

}
/** Effect Container. Serialized as `a:effectLst` */
export class EffectList extends OxmlCompositeElement<Blur | FillOverlay | Glow | InnerShadow | OuterShadow | PresetShadow | Reflection | SoftEdge> {

    public static override _Q = 'a:effectLst';
    /** Blur Effect. */
    public get blur(): Blur | undefined { return this._f(Blur); }
    /** Returns FillOverlay. */
    public get fillOverlay(): FillOverlay | undefined { return this._f(FillOverlay); }
    /** Returns Glow. */
    public get glow(): Glow | undefined { return this._f(Glow); }
    /** Returns InnerShadow. */
    public get innerShadow(): InnerShadow | undefined { return this._f(InnerShadow); }
    /** Returns OuterShadow. */
    public get outerShadow(): OuterShadow | undefined { return this._f(OuterShadow); }
    /** Returns PresetShadow. */
    public get presetShadow(): PresetShadow | undefined { return this._f(PresetShadow); }
    /** Returns Reflection. */
    public get reflection(): Reflection | undefined { return this._f(Reflection); }
    /** Returns SoftEdge. */
    public get softEdge(): SoftEdge | undefined { return this._f(SoftEdge); }

}
/** Transform Effect. Serialized as `a:xfrm` */
export class TransformEffect extends OxmlLeafElement {

    public static override _Q = 'a:xfrm';
    public static override _A = [':sx',':sy',':kx',':ky',':tx',':ty',];
    /** Horizontal Ratio. Serialized as `:sx` */
    public get horizontalRatio(): Int32Value | undefined { return this._g(':sx'); }
    public set horizontalRatio(v: Int32Value | undefined) { this._s(':sx', v); }
    /** Vertical Ratio. Serialized as `:sy` */
    public get verticalRatio(): Int32Value | undefined { return this._g(':sy'); }
    public set verticalRatio(v: Int32Value | undefined) { this._s(':sy', v); }
    /** Horizontal Skew. Serialized as `:kx` */
    public get horizontalSkew(): Int32Value | undefined { return this._g(':kx'); }
    public set horizontalSkew(v: Int32Value | undefined) { this._s(':kx', v); }
    /** Vertical Skew. Serialized as `:ky` */
    public get verticalSkew(): Int32Value | undefined { return this._g(':ky'); }
    public set verticalSkew(v: Int32Value | undefined) { this._s(':ky', v); }
    /** Horizontal Shift. Serialized as `:tx` */
    public get horizontalShift(): Int64Value | undefined { return this._g(':tx'); }
    public set horizontalShift(v: Int64Value | undefined) { this._s(':tx', v); }
    /** Vertical Shift. Serialized as `:ty` */
    public get verticalShift(): Int64Value | undefined { return this._g(':ty'); }
    public set verticalShift(v: Int64Value | undefined) { this._s(':ty', v); }

}
/** Defines the TintEffect Class. Serialized as `a:tint` */
export class TintEffect extends OxmlLeafElement {

    public static override _Q = 'a:tint';
    public static override _A = [':hue',':amt',];
    /** Hue. Serialized as `:hue` */
    public get hue(): Int32Value | undefined { return this._g(':hue'); }
    public set hue(v: Int32Value | undefined) { this._s(':hue', v); }
    /** Amount. Serialized as `:amt` */
    public get amount(): Int32Value | undefined { return this._g(':amt'); }
    public set amount(v: Int32Value | undefined) { this._s(':amt', v); }

}
/** Soft Edge Effect. Serialized as `a:softEdge` */
export class SoftEdge extends OxmlLeafElement {

    public static override _Q = 'a:softEdge';
    public static override _A = [':rad',];
    /** Radius. Serialized as `:rad` */
    public get radius(): Int64Value | undefined { return this._g(':rad'); }
    public set radius(v: Int64Value | undefined) { this._s(':rad', v); }

}
/** Relative Offset Effect. Serialized as `a:relOff` */
export class RelativeOffset extends OxmlLeafElement {

    public static override _Q = 'a:relOff';
    public static override _A = [':tx',':ty',];
    /** Offset X. Serialized as `:tx` */
    public get offsetX(): Int32Value | undefined { return this._g(':tx'); }
    public set offsetX(v: Int32Value | undefined) { this._s(':tx', v); }
    /** Offset Y. Serialized as `:ty` */
    public get offsetY(): Int32Value | undefined { return this._g(':ty'); }
    public set offsetY(v: Int32Value | undefined) { this._s(':ty', v); }

}
/** Reflection Effect. Serialized as `a:reflection` */
export class Reflection extends OxmlLeafElement {

    public static override _Q = 'a:reflection';
    public static override _A = [':blurRad',':stA',':stPos',':endA',':endPos',':dist',':dir',':fadeDir',':sx',':sy',':kx',':ky',':algn',':rotWithShape',];
    /** Blur Radius. Serialized as `:blurRad` */
    public get blurRadius(): Int64Value | undefined { return this._g(':blurRad'); }
    public set blurRadius(v: Int64Value | undefined) { this._s(':blurRad', v); }
    /** Start Opacity. Serialized as `:stA` */
    public get startOpacity(): Int32Value | undefined { return this._g(':stA'); }
    public set startOpacity(v: Int32Value | undefined) { this._s(':stA', v); }
    /** Start Position. Serialized as `:stPos` */
    public get startPosition(): Int32Value | undefined { return this._g(':stPos'); }
    public set startPosition(v: Int32Value | undefined) { this._s(':stPos', v); }
    /** End Alpha. Serialized as `:endA` */
    public get endAlpha(): Int32Value | undefined { return this._g(':endA'); }
    public set endAlpha(v: Int32Value | undefined) { this._s(':endA', v); }
    /** End Position. Serialized as `:endPos` */
    public get endPosition(): Int32Value | undefined { return this._g(':endPos'); }
    public set endPosition(v: Int32Value | undefined) { this._s(':endPos', v); }
    /** Distance. Serialized as `:dist` */
    public get distance(): Int64Value | undefined { return this._g(':dist'); }
    public set distance(v: Int64Value | undefined) { this._s(':dist', v); }
    /** Direction. Serialized as `:dir` */
    public get direction(): Int32Value | undefined { return this._g(':dir'); }
    public set direction(v: Int32Value | undefined) { this._s(':dir', v); }
    /** Fade Direction. Serialized as `:fadeDir` */
    public get fadeDirection(): Int32Value | undefined { return this._g(':fadeDir'); }
    public set fadeDirection(v: Int32Value | undefined) { this._s(':fadeDir', v); }
    /** Horizontal Ratio. Serialized as `:sx` */
    public get horizontalRatio(): Int32Value | undefined { return this._g(':sx'); }
    public set horizontalRatio(v: Int32Value | undefined) { this._s(':sx', v); }
    /** Vertical Ratio. Serialized as `:sy` */
    public get verticalRatio(): Int32Value | undefined { return this._g(':sy'); }
    public set verticalRatio(v: Int32Value | undefined) { this._s(':sy', v); }
    /** Horizontal Skew. Serialized as `:kx` */
    public get horizontalSkew(): Int32Value | undefined { return this._g(':kx'); }
    public set horizontalSkew(v: Int32Value | undefined) { this._s(':kx', v); }
    /** Vertical Skew. Serialized as `:ky` */
    public get verticalSkew(): Int32Value | undefined { return this._g(':ky'); }
    public set verticalSkew(v: Int32Value | undefined) { this._s(':ky', v); }
    /** Shadow Alignment. Serialized as `:algn` */
    public get alignment(): RectangleAlignmentValues | undefined { return this._g(':algn'); }
    public set alignment(v: RectangleAlignmentValues | undefined) { this._s(':algn', v); }
    /** Rotate With Shape. Serialized as `:rotWithShape` */
    public get rotateWithShape(): BooleanValue | undefined { return this._g(':rotWithShape'); }
    public set rotateWithShape(v: BooleanValue | undefined) { this._s(':rotWithShape', v); }

}
/** Preset Shadow. Serialized as `a:prstShdw` */
export class PresetShadow extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {

    public static override _Q = 'a:prstShdw';
    public static override _A = [':prst',':dist',':dir',];
    /** Preset Shadow. Serialized as `:prst` */
    public get preset(): PresetShadowValues | undefined { return this._g(':prst'); }
    public set preset(v: PresetShadowValues | undefined) { this._s(':prst', v); }
    /** Distance. Serialized as `:dist` */
    public get distance(): Int64Value | undefined { return this._g(':dist'); }
    public set distance(v: Int64Value | undefined) { this._s(':dist', v); }
    /** Direction. Serialized as `:dir` */
    public get direction(): Int32Value | undefined { return this._g(':dir'); }
    public set direction(v: Int32Value | undefined) { this._s(':dir', v); }
    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): RgbColorModelPercentage | undefined { return this._f(RgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): RgbColorModelHex | undefined { return this._f(RgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): HslColor | undefined { return this._f(HslColor); }
    /** System Color. */
    public get systemColor(): SystemColor | undefined { return this._f(SystemColor); }
    /** Scheme Color. */
    public get schemeColor(): SchemeColor | undefined { return this._f(SchemeColor); }
    /** Preset Color. */
    public get presetColor(): PresetColor | undefined { return this._f(PresetColor); }

}
/** Outer Shadow Effect. Serialized as `a:outerShdw` */
export class OuterShadow extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {

    public static override _Q = 'a:outerShdw';
    public static override _A = [':blurRad',':dist',':dir',':sx',':sy',':kx',':ky',':algn',':rotWithShape',];
    /** Blur Radius. Serialized as `:blurRad` */
    public get blurRadius(): Int64Value | undefined { return this._g(':blurRad'); }
    public set blurRadius(v: Int64Value | undefined) { this._s(':blurRad', v); }
    /** Shadow Offset Distance. Serialized as `:dist` */
    public get distance(): Int64Value | undefined { return this._g(':dist'); }
    public set distance(v: Int64Value | undefined) { this._s(':dist', v); }
    /** Shadow Direction. Serialized as `:dir` */
    public get direction(): Int32Value | undefined { return this._g(':dir'); }
    public set direction(v: Int32Value | undefined) { this._s(':dir', v); }
    /** Horizontal Scaling Factor. Serialized as `:sx` */
    public get horizontalRatio(): Int32Value | undefined { return this._g(':sx'); }
    public set horizontalRatio(v: Int32Value | undefined) { this._s(':sx', v); }
    /** Vertical Scaling Factor. Serialized as `:sy` */
    public get verticalRatio(): Int32Value | undefined { return this._g(':sy'); }
    public set verticalRatio(v: Int32Value | undefined) { this._s(':sy', v); }
    /** Horizontal Skew. Serialized as `:kx` */
    public get horizontalSkew(): Int32Value | undefined { return this._g(':kx'); }
    public set horizontalSkew(v: Int32Value | undefined) { this._s(':kx', v); }
    /** Vertical Skew. Serialized as `:ky` */
    public get verticalSkew(): Int32Value | undefined { return this._g(':ky'); }
    public set verticalSkew(v: Int32Value | undefined) { this._s(':ky', v); }
    /** Shadow Alignment. Serialized as `:algn` */
    public get alignment(): RectangleAlignmentValues | undefined { return this._g(':algn'); }
    public set alignment(v: RectangleAlignmentValues | undefined) { this._s(':algn', v); }
    /** Rotate With Shape. Serialized as `:rotWithShape` */
    public get rotateWithShape(): BooleanValue | undefined { return this._g(':rotWithShape'); }
    public set rotateWithShape(v: BooleanValue | undefined) { this._s(':rotWithShape', v); }
    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): RgbColorModelPercentage | undefined { return this._f(RgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): RgbColorModelHex | undefined { return this._f(RgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): HslColor | undefined { return this._f(HslColor); }
    /** System Color. */
    public get systemColor(): SystemColor | undefined { return this._f(SystemColor); }
    /** Scheme Color. */
    public get schemeColor(): SchemeColor | undefined { return this._f(SchemeColor); }
    /** Preset Color. */
    public get presetColor(): PresetColor | undefined { return this._f(PresetColor); }

}
/** Luminance. Serialized as `a:lum` */
export class LuminanceEffect extends OxmlLeafElement {

    public static override _Q = 'a:lum';
    public static override _A = [':bright',':contrast',];
    /** Brightness. Serialized as `:bright` */
    public get brightness(): Int32Value | undefined { return this._g(':bright'); }
    public set brightness(v: Int32Value | undefined) { this._s(':bright', v); }
    /** Contrast. Serialized as `:contrast` */
    public get contrast(): Int32Value | undefined { return this._g(':contrast'); }
    public set contrast(v: Int32Value | undefined) { this._s(':contrast', v); }

}
/** Inner Shadow Effect. Serialized as `a:innerShdw` */
export class InnerShadow extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {

    public static override _Q = 'a:innerShdw';
    public static override _A = [':blurRad',':dist',':dir',];
    /** Blur Radius. Serialized as `:blurRad` */
    public get blurRadius(): Int64Value | undefined { return this._g(':blurRad'); }
    public set blurRadius(v: Int64Value | undefined) { this._s(':blurRad', v); }
    /** Distance. Serialized as `:dist` */
    public get distance(): Int64Value | undefined { return this._g(':dist'); }
    public set distance(v: Int64Value | undefined) { this._s(':dist', v); }
    /** Direction. Serialized as `:dir` */
    public get direction(): Int32Value | undefined { return this._g(':dir'); }
    public set direction(v: Int32Value | undefined) { this._s(':dir', v); }
    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): RgbColorModelPercentage | undefined { return this._f(RgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): RgbColorModelHex | undefined { return this._f(RgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): HslColor | undefined { return this._f(HslColor); }
    /** System Color. */
    public get systemColor(): SystemColor | undefined { return this._f(SystemColor); }
    /** Scheme Color. */
    public get schemeColor(): SchemeColor | undefined { return this._f(SchemeColor); }
    /** Preset Color. */
    public get presetColor(): PresetColor | undefined { return this._f(PresetColor); }

}
/** Hue Saturation Luminance Effect. Serialized as `a:hsl` */
export class Hsl extends OxmlLeafElement {

    public static override _Q = 'a:hsl';
    public static override _A = [':hue',':sat',':lum',];
    /** Hue. Serialized as `:hue` */
    public get hue(): Int32Value | undefined { return this._g(':hue'); }
    public set hue(v: Int32Value | undefined) { this._s(':hue', v); }
    /** Saturation. Serialized as `:sat` */
    public get saturation(): Int32Value | undefined { return this._g(':sat'); }
    public set saturation(v: Int32Value | undefined) { this._s(':sat', v); }
    /** Luminance. Serialized as `:lum` */
    public get luminance(): Int32Value | undefined { return this._g(':lum'); }
    public set luminance(v: Int32Value | undefined) { this._s(':lum', v); }

}
/** Gray Scale Effect. Serialized as `a:grayscl` */
export class Grayscale extends OxmlLeafElement {

    public static override _Q = 'a:grayscl';

}
/** Glow Effect. Serialized as `a:glow` */
export class Glow extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {

    public static override _Q = 'a:glow';
    public static override _A = [':rad',];
    /** Radius. Serialized as `:rad` */
    public get radius(): Int64Value | undefined { return this._g(':rad'); }
    public set radius(v: Int64Value | undefined) { this._s(':rad', v); }
    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): RgbColorModelPercentage | undefined { return this._f(RgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): RgbColorModelHex | undefined { return this._f(RgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): HslColor | undefined { return this._f(HslColor); }
    /** System Color. */
    public get systemColor(): SystemColor | undefined { return this._f(SystemColor); }
    /** Scheme Color. */
    public get schemeColor(): SchemeColor | undefined { return this._f(SchemeColor); }
    /** Preset Color. */
    public get presetColor(): PresetColor | undefined { return this._f(PresetColor); }

}
/** Fill Overlay Effect. Serialized as `a:fillOverlay` */
export class FillOverlay extends OxmlCompositeElement<NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill> {

    public static override _Q = 'a:fillOverlay';
    public static override _A = [':blend',];
    /** Blend. Serialized as `:blend` */
    public get blend(): BlendModeValues | undefined { return this._g(':blend'); }
    public set blend(v: BlendModeValues | undefined) { this._s(':blend', v); }
    /** Returns NoFill. */
    public get noFill(): NoFill | undefined { return this._f(NoFill); }
    /** Returns SolidFill. */
    public get solidFill(): SolidFill | undefined { return this._f(SolidFill); }
    /** Returns GradientFill. */
    public get gradientFill(): GradientFill | undefined { return this._f(GradientFill); }
    /** Returns BlipFill. */
    public get blipFill(): BlipFill | undefined { return this._f(BlipFill); }
    /** Pattern Fill. */
    public get patternFill(): PatternFill | undefined { return this._f(PatternFill); }
    /** Group Fill. */
    public get groupFill(): GroupFill | undefined { return this._f(GroupFill); }

}
/** Fill. Serialized as `a:fill` */
export class Fill extends OxmlCompositeElement<NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill> {

    public static override _Q = 'a:fill';
    /** Returns NoFill. */
    public get noFill(): NoFill | undefined { return this._f(NoFill); }
    /** Returns SolidFill. */
    public get solidFill(): SolidFill | undefined { return this._f(SolidFill); }
    /** Returns GradientFill. */
    public get gradientFill(): GradientFill | undefined { return this._f(GradientFill); }
    /** Returns BlipFill. */
    public get blipFill(): BlipFill | undefined { return this._f(BlipFill); }
    /** Pattern Fill. */
    public get patternFill(): PatternFill | undefined { return this._f(PatternFill); }
    /** Group Fill. */
    public get groupFill(): GroupFill | undefined { return this._f(GroupFill); }

}
/** Duotone Effect. Serialized as `a:duotone` */
export class Duotone extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {

    public static override _Q = 'a:duotone';

}
/** Defines the ColorReplacement Class. Serialized as `a:clrRepl` */
export class ColorReplacement extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {

    public static override _Q = 'a:clrRepl';
    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): RgbColorModelPercentage | undefined { return this._f(RgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): RgbColorModelHex | undefined { return this._f(RgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): HslColor | undefined { return this._f(HslColor); }
    /** System Color. */
    public get systemColor(): SystemColor | undefined { return this._f(SystemColor); }
    /** Scheme Color. */
    public get schemeColor(): SchemeColor | undefined { return this._f(SchemeColor); }
    /** Preset Color. */
    public get presetColor(): PresetColor | undefined { return this._f(PresetColor); }

}
/** Color Change Effect. Serialized as `a:clrChange` */
export class ColorChange extends OxmlCompositeElement<ColorFrom | ColorTo> {

    public static override _Q = 'a:clrChange';
    public static override _A = [':useA',];
    /** Consider Alpha Values. Serialized as `:useA` */
    public get useAlpha(): BooleanValue | undefined { return this._g(':useA'); }
    public set useAlpha(v: BooleanValue | undefined) { this._s(':useA', v); }
    /** Change Color From. */
    public get colorFrom(): ColorFrom | undefined { return this._f(ColorFrom); }
    /** Change Color To. */
    public get colorTo(): ColorTo | undefined { return this._f(ColorTo); }

}
/** Defines the Blur Class. Serialized as `a:blur` */
export class Blur extends OxmlLeafElement {

    public static override _Q = 'a:blur';
    public static override _A = [':rad',':grow',];
    /** Radius. Serialized as `:rad` */
    public get radius(): Int64Value | undefined { return this._g(':rad'); }
    public set radius(v: Int64Value | undefined) { this._s(':rad', v); }
    /** Grow Bounds. Serialized as `:grow` */
    public get grow(): BooleanValue | undefined { return this._g(':grow'); }
    public set grow(v: BooleanValue | undefined) { this._s(':grow', v); }

}
/** Blend Effect. Serialized as `a:blend` */
export class Blend extends OxmlCompositeElement<EffectContainer> {

    public static override _Q = 'a:blend';
    public static override _A = [':blend',];
    /** Blend Mode. Serialized as `:blend` */
    public get blendMode(): BlendModeValues | undefined { return this._g(':blend'); }
    public set blendMode(v: BlendModeValues | undefined) { this._s(':blend', v); }
    /** Effect to blend. */
    public get effectContainer(): EffectContainer | undefined { return this._f(EffectContainer); }

}
/** Defines the BiLevel Class. Serialized as `a:biLevel` */
export class BiLevel extends OxmlLeafElement {

    public static override _Q = 'a:biLevel';
    public static override _A = [':thresh',];
    /** Threshold. Serialized as `:thresh` */
    public get threshold(): Int32Value | undefined { return this._g(':thresh'); }
    public set threshold(v: Int32Value | undefined) { this._s(':thresh', v); }

}
/** Alpha Replace Effect. Serialized as `a:alphaRepl` */
export class AlphaReplace extends OxmlLeafElement {

    public static override _Q = 'a:alphaRepl';
    public static override _A = [':a',];
    /** Alpha. Serialized as `:a` */
    public get alpha(): Int32Value | undefined { return this._g(':a'); }
    public set alpha(v: Int32Value | undefined) { this._s(':a', v); }

}
/** Alpha Inset/Outset Effect. Serialized as `a:alphaOutset` */
export class AlphaOutset extends OxmlLeafElement {

    public static override _Q = 'a:alphaOutset';
    public static override _A = [':rad',];
    /** Radius. Serialized as `:rad` */
    public get radius(): Int64Value | undefined { return this._g(':rad'); }
    public set radius(v: Int64Value | undefined) { this._s(':rad', v); }

}
/** Defines the AlphaModulationFixed Class. Serialized as `a:alphaModFix` */
export class AlphaModulationFixed extends OxmlLeafElement {

    public static override _Q = 'a:alphaModFix';
    public static override _A = [':amt',];
    /** Amount. Serialized as `:amt` */
    public get amount(): Int32Value | undefined { return this._g(':amt'); }
    public set amount(v: Int32Value | undefined) { this._s(':amt', v); }

}
/** Alpha Modulate Effect. Serialized as `a:alphaMod` */
export class AlphaModulationEffect extends OxmlCompositeElement<EffectContainer> {

    public static override _Q = 'a:alphaMod';
    /** Returns EffectContainer. */
    public get effectContainer(): EffectContainer | undefined { return this._f(EffectContainer); }

}
/** Alpha Inverse Effect. Serialized as `a:alphaInv` */
export class AlphaInverse extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {

    public static override _Q = 'a:alphaInv';
    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): RgbColorModelPercentage | undefined { return this._f(RgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): RgbColorModelHex | undefined { return this._f(RgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): HslColor | undefined { return this._f(HslColor); }
    /** System Color. */
    public get systemColor(): SystemColor | undefined { return this._f(SystemColor); }
    /** Scheme Color. */
    public get schemeColor(): SchemeColor | undefined { return this._f(SchemeColor); }
    /** Preset Color. */
    public get presetColor(): PresetColor | undefined { return this._f(PresetColor); }

}
/** Alpha Floor Effect. Serialized as `a:alphaFloor` */
export class AlphaFloor extends OxmlLeafElement {

    public static override _Q = 'a:alphaFloor';

}
/** Alpha Ceiling Effect. Serialized as `a:alphaCeiling` */
export class AlphaCeiling extends OxmlLeafElement {

    public static override _Q = 'a:alphaCeiling';

}
/** Defines the AlphaBiLevel Class. Serialized as `a:alphaBiLevel` */
export class AlphaBiLevel extends OxmlLeafElement {

    public static override _Q = 'a:alphaBiLevel';
    public static override _A = [':thresh',];
    /** Threshold. Serialized as `:thresh` */
    public get threshold(): Int32Value | undefined { return this._g(':thresh'); }
    public set threshold(v: Int32Value | undefined) { this._s(':thresh', v); }

}
/** Effect. Serialized as `a:effect` */
export class Effect extends OxmlLeafElement {

    public static override _Q = 'a:effect';
    public static override _A = [':ref',];
    /** Reference. Serialized as `:ref` */
    public get reference(): StringValue | undefined { return this._g(':ref'); }
    public set reference(v: StringValue | undefined) { this._s(':ref', v); }

}
/** Defines the EffectContainerType Class. */
export abstract class EffectContainerType extends OxmlCompositeElement<EffectContainer | Effect | AlphaBiLevel | AlphaCeiling | AlphaFloor | AlphaInverse | AlphaModulationEffect | AlphaModulationFixed | AlphaOutset | AlphaReplace | BiLevel | Blend | Blur | ColorChange | ColorReplacement | Duotone | Fill | FillOverlay | Glow | Grayscale | Hsl | InnerShadow | LuminanceEffect | OuterShadow | PresetShadow | Reflection | RelativeOffset | SoftEdge | TintEffect | TransformEffect> {

    public static override _A = [':type',':name',];
    /** Effect Container Type. Serialized as `:type` */
    public get type(): EffectContainerValues | undefined { return this._g(':type'); }
    public set type(v: EffectContainerValues | undefined) { this._s(':type', v); }
    /** Name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }

}
/** Effect Container. Serialized as `a:effectDag` */
export class EffectDag extends EffectContainerType {

    public static override _Q = 'a:effectDag';

}
/** Effect Container. Serialized as `a:cont` */
export class EffectContainer extends EffectContainerType {

    public static override _Q = 'a:cont';

}
/** Group Fill. Serialized as `a:grpFill` */
export class GroupFill extends OxmlLeafElement {

    public static override _Q = 'a:grpFill';

}
/** Pattern Fill. Serialized as `a:pattFill` */
export class PatternFill extends OxmlCompositeElement<ForegroundColor | BackgroundColor> {

    public static override _Q = 'a:pattFill';
    public static override _A = [':prst',];
    /** Preset Pattern. Serialized as `:prst` */
    public get preset(): PresetPatternValues | undefined { return this._g(':prst'); }
    public set preset(v: PresetPatternValues | undefined) { this._s(':prst', v); }
    /** Foreground color. */
    public get foregroundColor(): ForegroundColor | undefined { return this._f(ForegroundColor); }
    /** Background color. */
    public get backgroundColor(): BackgroundColor | undefined { return this._f(BackgroundColor); }

}
/** Defines the BlipFill Class. Serialized as `a:blipFill` */
export class BlipFill extends OxmlCompositeElement<Blip | SourceRectangle | Tile | Stretch> {

    public static override _Q = 'a:blipFill';
    public static override _A = [':dpi',':rotWithShape',];
    /** DPI Setting. Serialized as `:dpi` */
    public get dpi(): UInt32Value | undefined { return this._g(':dpi'); }
    public set dpi(v: UInt32Value | undefined) { this._s(':dpi', v); }
    /** Rotate With Shape. Serialized as `:rotWithShape` */
    public get rotateWithShape(): BooleanValue | undefined { return this._g(':rotWithShape'); }
    public set rotateWithShape(v: BooleanValue | undefined) { this._s(':rotWithShape', v); }
    /** Returns Blip. */
    public get blip(): Blip | undefined { return this._f(Blip); }
    /** Source Rectangle. */
    public get sourceRectangle(): SourceRectangle | undefined { return this._f(SourceRectangle); }

}
/** Defines the GradientFill Class. Serialized as `a:gradFill` */
export class GradientFill extends OxmlCompositeElement<GradientStopList | LinearGradientFill | PathGradientFill | TileRectangle> {

    public static override _Q = 'a:gradFill';
    public static override _A = [':flip',':rotWithShape',];
    /** Tile Flip. Serialized as `:flip` */
    public get flip(): TileFlipValues | undefined { return this._g(':flip'); }
    public set flip(v: TileFlipValues | undefined) { this._s(':flip', v); }
    /** Rotate With Shape. Serialized as `:rotWithShape` */
    public get rotateWithShape(): BooleanValue | undefined { return this._g(':rotWithShape'); }
    public set rotateWithShape(v: BooleanValue | undefined) { this._s(':rotWithShape', v); }
    /** Gradient Stop List. */
    public get gradientStopList(): GradientStopList | undefined { return this._f(GradientStopList); }

}
/** Defines the SolidFill Class. Serialized as `a:solidFill` */
export class SolidFill extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {

    public static override _Q = 'a:solidFill';
    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): RgbColorModelPercentage | undefined { return this._f(RgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): RgbColorModelHex | undefined { return this._f(RgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): HslColor | undefined { return this._f(HslColor); }
    /** System Color. */
    public get systemColor(): SystemColor | undefined { return this._f(SystemColor); }
    /** Scheme Color. */
    public get schemeColor(): SchemeColor | undefined { return this._f(SchemeColor); }
    /** Preset Color. */
    public get presetColor(): PresetColor | undefined { return this._f(PresetColor); }

}
/** Defines the NoFill Class. Serialized as `a:noFill` */
export class NoFill extends OxmlLeafElement {

    public static override _Q = 'a:noFill';

}
/** Stretch. Serialized as `a:stretch` */
export class Stretch extends OxmlCompositeElement<FillRectangle> {

    public static override _Q = 'a:stretch';
    /** Fill Rectangle. */
    public get fillRectangle(): FillRectangle | undefined { return this._f(FillRectangle); }

}
/** Tile. Serialized as `a:tile` */
export class Tile extends OxmlLeafElement {

    public static override _Q = 'a:tile';
    public static override _A = [':tx',':ty',':sx',':sy',':flip',':algn',];
    /** Horizontal Offset. Serialized as `:tx` */
    public get horizontalOffset(): Int64Value | undefined { return this._g(':tx'); }
    public set horizontalOffset(v: Int64Value | undefined) { this._s(':tx', v); }
    /** Vertical Offset. Serialized as `:ty` */
    public get verticalOffset(): Int64Value | undefined { return this._g(':ty'); }
    public set verticalOffset(v: Int64Value | undefined) { this._s(':ty', v); }
    /** Horizontal Ratio. Serialized as `:sx` */
    public get horizontalRatio(): Int32Value | undefined { return this._g(':sx'); }
    public set horizontalRatio(v: Int32Value | undefined) { this._s(':sx', v); }
    /** Vertical Ratio. Serialized as `:sy` */
    public get verticalRatio(): Int32Value | undefined { return this._g(':sy'); }
    public set verticalRatio(v: Int32Value | undefined) { this._s(':sy', v); }
    /** Tile Flipping. Serialized as `:flip` */
    public get flip(): TileFlipValues | undefined { return this._g(':flip'); }
    public set flip(v: TileFlipValues | undefined) { this._s(':flip', v); }
    /** Alignment. Serialized as `:algn` */
    public get alignment(): RectangleAlignmentValues | undefined { return this._g(':algn'); }
    public set alignment(v: RectangleAlignmentValues | undefined) { this._s(':algn', v); }

}
/** Path Gradient. Serialized as `a:path` */
export class PathGradientFill extends OxmlCompositeElement<FillToRectangle> {

    public static override _Q = 'a:path';
    public static override _A = [':path',];
    /** Gradient Fill Path. Serialized as `:path` */
    public get path(): PathShadeValues | undefined { return this._g(':path'); }
    public set path(v: PathShadeValues | undefined) { this._s(':path', v); }
    /** Fill To Rectangle. */
    public get fillToRectangle(): FillToRectangle | undefined { return this._f(FillToRectangle); }

}
/** Linear Gradient Fill. Serialized as `a:lin` */
export class LinearGradientFill extends OxmlLeafElement {

    public static override _Q = 'a:lin';
    public static override _A = [':ang',':scaled',];
    /** Angle. Serialized as `:ang` */
    public get angle(): Int32Value | undefined { return this._g(':ang'); }
    public set angle(v: Int32Value | undefined) { this._s(':ang', v); }
    /** Scaled. Serialized as `:scaled` */
    public get scaled(): BooleanValue | undefined { return this._g(':scaled'); }
    public set scaled(v: BooleanValue | undefined) { this._s(':scaled', v); }

}
/** No text in 3D scene. Serialized as `a:flatTx` */
export class FlatText extends OxmlLeafElement {

    public static override _Q = 'a:flatTx';
    public static override _A = [':z',];
    /** Z Coordinate. Serialized as `:z` */
    public get z(): Int64Value | undefined { return this._g(':z'); }
    public set z(v: Int64Value | undefined) { this._s(':z', v); }

}
/** Apply 3D shape properties. Serialized as `a:sp3d` */
export class Shape3DType extends OxmlCompositeElement<BevelTop | BevelBottom | ExtrusionColor | ContourColor | ExtensionList> {

    public static override _Q = 'a:sp3d';
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
    public get bevelTop(): BevelTop | undefined { return this._f(BevelTop); }
    /** Bottom Bevel. */
    public get bevelBottom(): BevelBottom | undefined { return this._f(BevelBottom); }
    /** Extrusion Color. */
    public get extrusionColor(): ExtrusionColor | undefined { return this._f(ExtrusionColor); }
    /** Contour Color. */
    public get contourColor(): ContourColor | undefined { return this._f(ContourColor); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Preset Color. Serialized as `a:prstClr` */
export class PresetColor extends OxmlCompositeElement<Tint | Shade | Complement | Inverse | Gray | Alpha | AlphaOffset | AlphaModulation | Hue | HueOffset | HueModulation | Saturation | SaturationOffset | SaturationModulation | Luminance | LuminanceOffset | LuminanceModulation | Red | RedOffset | RedModulation | Green | GreenOffset | GreenModulation | Blue | BlueOffset | BlueModulation | Gamma | InverseGamma> {

    public static override _Q = 'a:prstClr';
    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): PresetColorValues | undefined { return this._g(':val'); }
    public set val(v: PresetColorValues | undefined) { this._s(':val', v); }

}
/** Scheme Color. Serialized as `a:schemeClr` */
export class SchemeColor extends OxmlCompositeElement<Tint | Shade | Complement | Inverse | Gray | Alpha | AlphaOffset | AlphaModulation | Hue | HueOffset | HueModulation | Saturation | SaturationOffset | SaturationModulation | Luminance | LuminanceOffset | LuminanceModulation | Red | RedOffset | RedModulation | Green | GreenOffset | GreenModulation | Blue | BlueOffset | BlueModulation | Gamma | InverseGamma> {

    public static override _Q = 'a:schemeClr';
    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): SchemeColorValues | undefined { return this._g(':val'); }
    public set val(v: SchemeColorValues | undefined) { this._s(':val', v); }

}
/** System Color. Serialized as `a:sysClr` */
export class SystemColor extends OxmlCompositeElement<Tint | Shade | Complement | Inverse | Gray | Alpha | AlphaOffset | AlphaModulation | Hue | HueOffset | HueModulation | Saturation | SaturationOffset | SaturationModulation | Luminance | LuminanceOffset | LuminanceModulation | Red | RedOffset | RedModulation | Green | GreenOffset | GreenModulation | Blue | BlueOffset | BlueModulation | Gamma | InverseGamma> {

    public static override _Q = 'a:sysClr';
    public static override _A = [':val',':lastClr',];
    /** Value. Serialized as `:val` */
    public get val(): SystemColorValues | undefined { return this._g(':val'); }
    public set val(v: SystemColorValues | undefined) { this._s(':val', v); }
    /** Last Color. Serialized as `:lastClr` */
    public get lastColor(): HexBinaryValue | undefined { return this._g(':lastClr'); }
    public set lastColor(v: HexBinaryValue | undefined) { this._s(':lastClr', v); }

}
/** Hue, Saturation, Luminance Color Model. Serialized as `a:hslClr` */
export class HslColor extends OxmlCompositeElement<Tint | Shade | Complement | Inverse | Gray | Alpha | AlphaOffset | AlphaModulation | Hue | HueOffset | HueModulation | Saturation | SaturationOffset | SaturationModulation | Luminance | LuminanceOffset | LuminanceModulation | Red | RedOffset | RedModulation | Green | GreenOffset | GreenModulation | Blue | BlueOffset | BlueModulation | Gamma | InverseGamma> {

    public static override _Q = 'a:hslClr';
    public static override _A = [':hue',':sat',':lum',];
    /** Hue. Serialized as `:hue` */
    public get hueValue(): Int32Value | undefined { return this._g(':hue'); }
    public set hueValue(v: Int32Value | undefined) { this._s(':hue', v); }
    /** Saturation. Serialized as `:sat` */
    public get satValue(): Int32Value | undefined { return this._g(':sat'); }
    public set satValue(v: Int32Value | undefined) { this._s(':sat', v); }
    /** Luminance. Serialized as `:lum` */
    public get lumValue(): Int32Value | undefined { return this._g(':lum'); }
    public set lumValue(v: Int32Value | undefined) { this._s(':lum', v); }

}
/** RGB Color Model - Hex Variant. Serialized as `a:srgbClr` */
export class RgbColorModelHex extends OxmlCompositeElement<Tint | Shade | Complement | Inverse | Gray | Alpha | AlphaOffset | AlphaModulation | Hue | HueOffset | HueModulation | Saturation | SaturationOffset | SaturationModulation | Luminance | LuminanceOffset | LuminanceModulation | Red | RedOffset | RedModulation | Green | GreenOffset | GreenModulation | Blue | BlueOffset | BlueModulation | Gamma | InverseGamma> {

    public static override _Q = 'a:srgbClr';
    public static override _A = [':val','a14:legacySpreadsheetColorIndex',];
    /** Value. Serialized as `:val` */
    public get val(): HexBinaryValue | undefined { return this._g(':val'); }
    public set val(v: HexBinaryValue | undefined) { this._s(':val', v); }
    /** legacySpreadsheetColorIndex. Serialized as `a14:legacySpreadsheetColorIndex` */
    public get legacySpreadsheetColorIndex(): Int32Value | undefined { return this._g('a14:legacySpreadsheetColorIndex'); }
    public set legacySpreadsheetColorIndex(v: Int32Value | undefined) { this._s('a14:legacySpreadsheetColorIndex', v); }

}
/** RGB Color Model - Percentage Variant. Serialized as `a:scrgbClr` */
export class RgbColorModelPercentage extends OxmlCompositeElement<Tint | Shade | Complement | Inverse | Gray | Alpha | AlphaOffset | AlphaModulation | Hue | HueOffset | HueModulation | Saturation | SaturationOffset | SaturationModulation | Luminance | LuminanceOffset | LuminanceModulation | Red | RedOffset | RedModulation | Green | GreenOffset | GreenModulation | Blue | BlueOffset | BlueModulation | Gamma | InverseGamma> {

    public static override _Q = 'a:scrgbClr';
    public static override _A = [':r',':g',':b',];
    /** Red. Serialized as `:r` */
    public get redPortion(): Int32Value | undefined { return this._g(':r'); }
    public set redPortion(v: Int32Value | undefined) { this._s(':r', v); }
    /** Green. Serialized as `:g` */
    public get greenPortion(): Int32Value | undefined { return this._g(':g'); }
    public set greenPortion(v: Int32Value | undefined) { this._s(':g', v); }
    /** Blue. Serialized as `:b` */
    public get bluePortion(): Int32Value | undefined { return this._g(':b'); }
    public set bluePortion(v: Int32Value | undefined) { this._s(':b', v); }

}
/** Extension. Serialized as `a:ext` */
export class Extension extends OxmlCompositeElement {

    public static override _Q = 'a:ext';
    public static override _A = [':uri',];
    /** URI. Serialized as `:uri` */
    public get uri(): StringValue | undefined { return this._g(':uri'); }
    public set uri(v: StringValue | undefined) { this._s(':uri', v); }

}
/** Inverse Gamma. Serialized as `a:invGamma` */
export class InverseGamma extends OxmlLeafElement {

    public static override _Q = 'a:invGamma';

}
/** Gamma. Serialized as `a:gamma` */
export class Gamma extends OxmlLeafElement {

    public static override _Q = 'a:gamma';

}
/** Defines the PercentageType Class. */
export abstract class PercentageType extends OxmlLeafElement {

    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): Int32Value | undefined { return this._g(':val'); }
    public set val(v: Int32Value | undefined) { this._s(':val', v); }

}
/** Blue Modification. Serialized as `a:blueMod` */
export class BlueModulation extends PercentageType {

    public static override _Q = 'a:blueMod';

}
/** Blue Offset. Serialized as `a:blueOff` */
export class BlueOffset extends PercentageType {

    public static override _Q = 'a:blueOff';

}
/** Blue. Serialized as `a:blue` */
export class Blue extends PercentageType {

    public static override _Q = 'a:blue';

}
/** Green Modification. Serialized as `a:greenMod` */
export class GreenModulation extends PercentageType {

    public static override _Q = 'a:greenMod';

}
/** Green Offset. Serialized as `a:greenOff` */
export class GreenOffset extends PercentageType {

    public static override _Q = 'a:greenOff';

}
/** Green. Serialized as `a:green` */
export class Green extends PercentageType {

    public static override _Q = 'a:green';

}
/** Red Modulation. Serialized as `a:redMod` */
export class RedModulation extends PercentageType {

    public static override _Q = 'a:redMod';

}
/** Red Offset. Serialized as `a:redOff` */
export class RedOffset extends PercentageType {

    public static override _Q = 'a:redOff';

}
/** Red. Serialized as `a:red` */
export class Red extends PercentageType {

    public static override _Q = 'a:red';

}
/** Luminance Modulation. Serialized as `a:lumMod` */
export class LuminanceModulation extends PercentageType {

    public static override _Q = 'a:lumMod';

}
/** Luminance Offset. Serialized as `a:lumOff` */
export class LuminanceOffset extends PercentageType {

    public static override _Q = 'a:lumOff';

}
/** Luminance. Serialized as `a:lum` */
export class Luminance extends PercentageType {

    public static override _Q = 'a:lum';

}
/** Saturation Modulation. Serialized as `a:satMod` */
export class SaturationModulation extends PercentageType {

    public static override _Q = 'a:satMod';

}
/** Saturation Offset. Serialized as `a:satOff` */
export class SaturationOffset extends PercentageType {

    public static override _Q = 'a:satOff';

}
/** Saturation. Serialized as `a:sat` */
export class Saturation extends PercentageType {

    public static override _Q = 'a:sat';

}
/** Hue Offset. Serialized as `a:hueOff` */
export class HueOffset extends OxmlLeafElement {

    public static override _Q = 'a:hueOff';
    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): Int32Value | undefined { return this._g(':val'); }
    public set val(v: Int32Value | undefined) { this._s(':val', v); }

}
/** Hue. Serialized as `a:hue` */
export class Hue extends OxmlLeafElement {

    public static override _Q = 'a:hue';
    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): Int32Value | undefined { return this._g(':val'); }
    public set val(v: Int32Value | undefined) { this._s(':val', v); }

}
/** Defines the PositivePercentageType Class. */
export abstract class PositivePercentageType extends OxmlLeafElement {

    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): Int32Value | undefined { return this._g(':val'); }
    public set val(v: Int32Value | undefined) { this._s(':val', v); }

}
/** Hue Modulate. Serialized as `a:hueMod` */
export class HueModulation extends PositivePercentageType {

    public static override _Q = 'a:hueMod';

}
/** Alpha Modulation. Serialized as `a:alphaMod` */
export class AlphaModulation extends PositivePercentageType {

    public static override _Q = 'a:alphaMod';

}
/** Alpha Offset. Serialized as `a:alphaOff` */
export class AlphaOffset extends OxmlLeafElement {

    public static override _Q = 'a:alphaOff';
    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): Int32Value | undefined { return this._g(':val'); }
    public set val(v: Int32Value | undefined) { this._s(':val', v); }

}
/** Gray. Serialized as `a:gray` */
export class Gray extends OxmlLeafElement {

    public static override _Q = 'a:gray';

}
/** Inverse. Serialized as `a:inv` */
export class Inverse extends OxmlLeafElement {

    public static override _Q = 'a:inv';

}
/** Complement. Serialized as `a:comp` */
export class Complement extends OxmlLeafElement {

    public static override _Q = 'a:comp';

}
/** Defines the PositiveFixedPercentageType Class. */
export abstract class PositiveFixedPercentageType extends OxmlLeafElement {

    public static override _A = [':val',];
    /** Value. Serialized as `:val` */
    public get val(): Int32Value | undefined { return this._g(':val'); }
    public set val(v: Int32Value | undefined) { this._s(':val', v); }

}
/** Alpha. Serialized as `a:alpha` */
export class Alpha extends PositiveFixedPercentageType {

    public static override _Q = 'a:alpha';

}
/** Shade. Serialized as `a:shade` */
export class Shade extends PositiveFixedPercentageType {

    public static override _Q = 'a:shade';

}
/** Tint. Serialized as `a:tint` */
export class Tint extends PositiveFixedPercentageType {

    public static override _Q = 'a:tint';

}
/** QuickTime from File. Serialized as `a:quickTimeFile` */
export class QuickTimeFromFile extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'a:quickTimeFile';
    public static override _A = ['r:link',];
    /** Linked Relationship ID. Serialized as `r:link` */
    public get link(): StringValue | undefined { return this._g('r:link'); }
    public set link(v: StringValue | undefined) { this._s('r:link', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Video from File. Serialized as `a:videoFile` */
export class VideoFromFile extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'a:videoFile';
    public static override _A = ['r:link',];
    /** Linked Relationship ID. Serialized as `r:link` */
    public get link(): StringValue | undefined { return this._g('r:link'); }
    public set link(v: StringValue | undefined) { this._s('r:link', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Audio from File. Serialized as `a:audioFile` */
export class AudioFromFile extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'a:audioFile';
    public static override _A = ['r:link',];
    /** Linked Relationship ID. Serialized as `r:link` */
    public get link(): StringValue | undefined { return this._g('r:link'); }
    public set link(v: StringValue | undefined) { this._s('r:link', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

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
/** Sound to play.. Serialized as `a:snd` */
export class HyperlinkSound extends EmbeddedWavAudioFileType {

    public static override _Q = 'a:snd';

}
/** Audio from WAV File. Serialized as `a:wavAudioFile` */
export class WaveAudioFile extends EmbeddedWavAudioFileType {

    public static override _Q = 'a:wavAudioFile';

}
/** Audio from CD. Serialized as `a:audioCd` */
export class AudioFromCD extends OxmlCompositeElement<StartTime | EndTime | ExtensionList> {

    public static override _Q = 'a:audioCd';
    /** Audio Start Time. */
    public get startTime(): StartTime | undefined { return this._f(StartTime); }
    /** Audio End Time. */
    public get endTime(): EndTime | undefined { return this._f(EndTime); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}

export function initDrawingNamespace() {
    BlipExtension._C = {
        'a14:imgProps': A14ImageProperties,
        'a14:useLocalDpi': A14UseLocalDpi,
        'wp15:webVideoPr': Wp15WebVideoProperty,
        'asvg:svgBlip': AsvgSVGBlip,
        'a1611:picAttrSrcUrl': A1611PictureAttributionSourceURL,
        'woe:oembed': WoeOEmbed,
        'aoe:oembedShared': AoeOEmbedShared,
    };
    BlipExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    BlipExtensionList._C = {
        'a:ext': BlipExtension,
    };
    NonVisualPicturePropertiesExtension._C = {
        'a14:cameraTool': A14CameraTool,
        'a15:signatureLine': A15SignatureLine,
        'a15:objectPr': A15ObjectProperties,
        'alf:liveFeedProps': AlfLiveFeedProperties,
        'aif:imageFormula': AifImageFormula,
    };
    NonVisualPicturePropertiesExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    NonVisualPicturePropertiesExtensionList._C = {
        'a:ext': NonVisualPicturePropertiesExtension,
    };
    PictureLocks._C = {
        'a:extLst': ExtensionList,
    };
    PictureLocks._D = {
        ':noGrp': new OxmlAttr(':noGrp', OxmlType.BooleanValue),
        ':noSelect': new OxmlAttr(':noSelect', OxmlType.BooleanValue),
        ':noRot': new OxmlAttr(':noRot', OxmlType.BooleanValue),
        ':noChangeAspect': new OxmlAttr(':noChangeAspect', OxmlType.BooleanValue),
        ':noMove': new OxmlAttr(':noMove', OxmlType.BooleanValue),
        ':noResize': new OxmlAttr(':noResize', OxmlType.BooleanValue),
        ':noEditPoints': new OxmlAttr(':noEditPoints', OxmlType.BooleanValue),
        ':noAdjustHandles': new OxmlAttr(':noAdjustHandles', OxmlType.BooleanValue),
        ':noChangeArrowheads': new OxmlAttr(':noChangeArrowheads', OxmlType.BooleanValue),
        ':noChangeShapeType': new OxmlAttr(':noChangeShapeType', OxmlType.BooleanValue),
        ':noCrop': new OxmlAttr(':noCrop', OxmlType.BooleanValue),
    };
    NonVisualDrawingPropertiesExtension._C = {
        'a14:compatExt': A14CompatExtension,
        'a15:backgroundPr': A15BackgroundProperties,
        'a16:creationId': A16CreationId,
        'a16:predDERef': A16PredecessorDrawingElementReference,
        'adec:decorative': AdecDecorative,
        'aclsh:classification': AclshClassificationOutcome,
        'asl:scriptLink': AslScriptLink,
    };
    NonVisualDrawingPropertiesExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    LinePropertiesExtensionList._C = {
        'a:ext': LinePropertiesExtension,
    };
    LineEndPropertiesType._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, LineEndValuesArray),
        ':w': new OxmlAttr(':w', OxmlType.EnumValue, LineEndWidthValuesArray),
        ':len': new OxmlAttr(':len', OxmlType.EnumValue, LineEndLengthValuesArray),
    };
    LinePropertiesExtension._C = {
        'ask:lineSketchStyleProps': AskLineSketchStyleProperties,
    };
    LinePropertiesExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    HyperlinkExtensionList._C = {
        'a:ext': HyperlinkExtension,
    };
    HyperlinkExtension._C = {
        'ahyp:hlinkClr': AhypHyperlinkColor,
    };
    HyperlinkExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    PtExtension._C = {
        'dgm14:cNvPr': Dgm14NonVisualDrawingProperties,
    };
    PtExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    DataModelExtension._C = {
        'dsp:dataModelExt': DspDataModelExtensionBlock,
        'dgm14:recolorImg': Dgm14RecolorImages,
    };
    DataModelExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    ConnectorLockingExtensionList._C = {
        'a:ext': ConnectorLockingExtension,
    };
    NonVisualDrawingPropertiesExtensionList._C = {
        'a:ext': NonVisualDrawingPropertiesExtension,
    };
    RightToLeft._D = {
        ':val': new OxmlAttr(':val', OxmlType.BooleanValue),
    };
    HyperlinkType._C = {
        'a:snd': HyperlinkSound,
        'a:extLst': HyperlinkExtensionList,
    };
    HyperlinkType._D = {
        'r:id': new OxmlAttr('r:id', OxmlType.StringValue),
        ':invalidUrl': new OxmlAttr(':invalidUrl', OxmlType.StringValue),
        ':action': new OxmlAttr(':action', OxmlType.StringValue),
        ':tgtFrame': new OxmlAttr(':tgtFrame', OxmlType.StringValue),
        ':tooltip': new OxmlAttr(':tooltip', OxmlType.StringValue),
        ':history': new OxmlAttr(':history', OxmlType.BooleanValue),
        ':highlightClick': new OxmlAttr(':highlightClick', OxmlType.BooleanValue),
        ':endSnd': new OxmlAttr(':endSnd', OxmlType.BooleanValue),
    };
    HyperlinkOnHover._C = {
        'a:snd': HyperlinkSound,
        'a:extLst': HyperlinkExtensionList,
    };
    HyperlinkOnMouseOver._C = {
        'a:snd': HyperlinkSound,
        'a:extLst': HyperlinkExtensionList,
    };
    HyperlinkOnClick._C = {
        'a:snd': HyperlinkSound,
        'a:extLst': HyperlinkExtensionList,
    };
    OfficeStyleSheetExtensionList._C = {
        'a:ext': OfficeStyleSheetExtension,
    };
    CustomColorList._C = {
        'a:custClr': CustomColor,
    };
    ExtraColorSchemeList._C = {
        'a:extraClrScheme': ExtraColorScheme,
    };
    ObjectDefaults._C = {
        'a:spDef': ShapeDefault,
        'a:lnDef': LineDefault,
        'a:txDef': TextDefault,
        'a:extLst': ExtensionList,
    };
    NonVisualGroupDrawingShapePropsExtensionList._C = {
        'a:ext': NonVisualGroupDrawingShapePropsExtension,
    };
    GroupShapeLocks._C = {
        'a:extLst': ExtensionList,
    };
    GroupShapeLocks._D = {
        ':noGrp': new OxmlAttr(':noGrp', OxmlType.BooleanValue),
        ':noUngrp': new OxmlAttr(':noUngrp', OxmlType.BooleanValue),
        ':noSelect': new OxmlAttr(':noSelect', OxmlType.BooleanValue),
        ':noRot': new OxmlAttr(':noRot', OxmlType.BooleanValue),
        ':noChangeAspect': new OxmlAttr(':noChangeAspect', OxmlType.BooleanValue),
        ':noMove': new OxmlAttr(':noMove', OxmlType.BooleanValue),
        ':noResize': new OxmlAttr(':noResize', OxmlType.BooleanValue),
    };
    ConnectorLockingExtension._C = {
        'a:graphic': Graphic,
    };
    ConnectorLockingExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    OfficeStyleSheetExtension._C = {
        'thm15:themeFamily': Thm15ThemeFamily,
    };
    OfficeStyleSheetExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    NonVisualGroupDrawingShapePropsExtension._C = {
        'a15:nonVisualGroupProps': A15NonVisualGroupProperties,
    };
    NonVisualGroupDrawingShapePropsExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    GvmlGroupShapeExtensionList._C = {
        'a:ext': GvmlGroupShapeExtension,
    };
    GroupShape._C = {
        'a:nvGrpSpPr': NonVisualGroupShapeProperties,
        'a:grpSpPr': VisualGroupShapeProperties,
        'a:txSp': TextShape,
        'a:sp': Shape,
        'a:cxnSp': ConnectionShape,
        'a:pic': Picture,
        'a14:contentPart': A14GvmlContentPart,
        'a:graphicFrame': GraphicFrame,
        'a:grpSp': GroupShape,
        'a:extLst': GvmlGroupShapeExtensionList,
    };
    GraphicFrame._C = {
        'a:nvGraphicFramePr': NonVisualGraphicFrameProperties,
        'a:graphic': Graphic,
        'a:xfrm': Transform2D,
        'a:extLst': ExtensionList,
    };
    Picture._C = {
        'a:nvPicPr': NonVisualPictureProperties,
        'a:blipFill': BlipFill,
        'a:spPr': ShapeProperties,
        'a:style': ShapeStyle,
        'a:extLst': ExtensionList,
    };
    ConnectionShape._C = {
        'a:nvCxnSpPr': NonVisualConnectionShapeProperties,
        'a:spPr': ShapeProperties,
        'a:style': ShapeStyle,
        'a:extLst': ExtensionList,
    };
    Shape._C = {
        'a:nvSpPr': NonVisualShapeProperties,
        'a:spPr': ShapeProperties,
        'a:txSp': TextShape,
        'a:style': ShapeStyle,
        'a:extLst': ExtensionList,
    };
    VisualGroupShapeProperties._C = {
        'a:xfrm': TransformGroup,
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:blipFill': BlipFill,
        'a:pattFill': PatternFill,
        'a:grpFill': GroupFill,
        'a:effectLst': EffectList,
        'a:effectDag': EffectDag,
        'a:scene3d': Scene3DType,
        'a:extLst': ExtensionList,
    };
    VisualGroupShapeProperties._D = {
        ':bwMode': new OxmlAttr(':bwMode', OxmlType.EnumValue, BlackWhiteModeValuesArray),
    };
    NonVisualGroupShapeProperties._C = {
        'a:cNvPr': NonVisualDrawingProperties,
        'a:cNvGrpSpPr': NonVisualGroupShapeDrawingProperties,
    };
    ShapePropertiesExtensionList._C = {
        'a:ext': ShapePropertiesExtension,
    };
    GvmlGroupShapeExtension._C = {
        'a14:isCanvas': A14IsCanvas,
    };
    GvmlGroupShapeExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    ShapePropertiesExtension._C = {
        'a14:hiddenFill': A14HiddenFillProperties,
        'a14:hiddenLine': A14HiddenLineProperties,
        'a14:hiddenEffects': A14HiddenEffectsProperties,
        'a14:hiddenScene3d': A14HiddenScene3D,
        'a14:hiddenSp3d': A14HiddenShape3D,
        'a14:shadowObscured': A14ShadowObscured,
    };
    ShapePropertiesExtension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    TabStopList._C = {
        'a:tab': TabStop,
    };
    TextSpacingType._C = {
        'a:spcPct': SpacingPercent,
        'a:spcPts': SpacingPoints,
    };
    SpaceAfter._C = {
        'a:spcPct': SpacingPercent,
        'a:spcPts': SpacingPoints,
    };
    SpaceBefore._C = {
        'a:spcPct': SpacingPercent,
        'a:spcPts': SpacingPoints,
    };
    LineSpacing._C = {
        'a:spcPct': SpacingPercent,
        'a:spcPts': SpacingPoints,
    };
    SpacingPoints._D = {
        ':val': new OxmlAttr(':val', OxmlType.Int32Value),
    };
    SpacingPercent._D = {
        ':val': new OxmlAttr(':val', OxmlType.Int32Value),
    };
    TabStop._D = {
        ':pos': new OxmlAttr(':pos', OxmlType.Int32Value),
        ':algn': new OxmlAttr(':algn', OxmlType.EnumValue, TextTabAlignmentValuesArray),
    };
    Paragraph._C = {
        'a:pPr': ParagraphProperties,
        'a:r': Run,
        'a:br': Break,
        'a:fld': Field,
        'a14:m': A14TextMath,
        'a:endParaRPr': EndParagraphRunProperties,
    };
    TextCharacterPropertiesType._C = {
        'a:ln': Outline,
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:blipFill': BlipFill,
        'a:pattFill': PatternFill,
        'a:grpFill': GroupFill,
        'a:effectLst': EffectList,
        'a:effectDag': EffectDag,
        'a:highlight': Highlight,
        'a:uLnTx': UnderlineFollowsText,
        'a:uLn': Underline,
        'a:uFillTx': UnderlineFillText,
        'a:uFill': UnderlineFill,
        'a:latin': LatinFont,
        'a:ea': EastAsianFont,
        'a:cs': ComplexScriptFont,
        'a:sym': SymbolFont,
        'a:hlinkClick': HyperlinkOnClick,
        'a:hlinkMouseOver': HyperlinkOnMouseOver,
        'a:rtl': RightToLeft,
        'a:extLst': ExtensionList,
    };
    TextCharacterPropertiesType._D = {
        ':kumimoji': new OxmlAttr(':kumimoji', OxmlType.BooleanValue),
        ':lang': new OxmlAttr(':lang', OxmlType.StringValue),
        ':altLang': new OxmlAttr(':altLang', OxmlType.StringValue),
        ':sz': new OxmlAttr(':sz', OxmlType.Int32Value),
        ':b': new OxmlAttr(':b', OxmlType.BooleanValue),
        ':i': new OxmlAttr(':i', OxmlType.BooleanValue),
        ':u': new OxmlAttr(':u', OxmlType.EnumValue, TextUnderlineValuesArray),
        ':strike': new OxmlAttr(':strike', OxmlType.EnumValue, TextStrikeValuesArray),
        ':kern': new OxmlAttr(':kern', OxmlType.Int32Value),
        ':cap': new OxmlAttr(':cap', OxmlType.EnumValue, TextCapsValuesArray),
        ':spc': new OxmlAttr(':spc', OxmlType.Int32Value),
        ':normalizeH': new OxmlAttr(':normalizeH', OxmlType.BooleanValue),
        ':baseline': new OxmlAttr(':baseline', OxmlType.Int32Value),
        ':noProof': new OxmlAttr(':noProof', OxmlType.BooleanValue),
        ':dirty': new OxmlAttr(':dirty', OxmlType.BooleanValue),
        ':err': new OxmlAttr(':err', OxmlType.BooleanValue),
        ':smtClean': new OxmlAttr(':smtClean', OxmlType.BooleanValue),
        ':smtId': new OxmlAttr(':smtId', OxmlType.UInt32Value),
        ':bmk': new OxmlAttr(':bmk', OxmlType.StringValue),
    };
    DefaultRunProperties._C = {
        'a:ln': Outline,
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:blipFill': BlipFill,
        'a:pattFill': PatternFill,
        'a:grpFill': GroupFill,
        'a:effectLst': EffectList,
        'a:effectDag': EffectDag,
        'a:highlight': Highlight,
        'a:uLnTx': UnderlineFollowsText,
        'a:uLn': Underline,
        'a:uFillTx': UnderlineFillText,
        'a:uFill': UnderlineFill,
        'a:latin': LatinFont,
        'a:ea': EastAsianFont,
        'a:cs': ComplexScriptFont,
        'a:sym': SymbolFont,
        'a:hlinkClick': HyperlinkOnClick,
        'a:hlinkMouseOver': HyperlinkOnMouseOver,
        'a:rtl': RightToLeft,
        'a:extLst': ExtensionList,
    };
    RunProperties._C = {
        'a:ln': Outline,
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:blipFill': BlipFill,
        'a:pattFill': PatternFill,
        'a:grpFill': GroupFill,
        'a:effectLst': EffectList,
        'a:effectDag': EffectDag,
        'a:highlight': Highlight,
        'a:uLnTx': UnderlineFollowsText,
        'a:uLn': Underline,
        'a:uFillTx': UnderlineFillText,
        'a:uFill': UnderlineFill,
        'a:latin': LatinFont,
        'a:ea': EastAsianFont,
        'a:cs': ComplexScriptFont,
        'a:sym': SymbolFont,
        'a:hlinkClick': HyperlinkOnClick,
        'a:hlinkMouseOver': HyperlinkOnMouseOver,
        'a:rtl': RightToLeft,
        'a:extLst': ExtensionList,
    };
    EndParagraphRunProperties._C = {
        'a:ln': Outline,
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:blipFill': BlipFill,
        'a:pattFill': PatternFill,
        'a:grpFill': GroupFill,
        'a:effectLst': EffectList,
        'a:effectDag': EffectDag,
        'a:highlight': Highlight,
        'a:uLnTx': UnderlineFollowsText,
        'a:uLn': Underline,
        'a:uFillTx': UnderlineFillText,
        'a:uFill': UnderlineFill,
        'a:latin': LatinFont,
        'a:ea': EastAsianFont,
        'a:cs': ComplexScriptFont,
        'a:sym': SymbolFont,
        'a:hlinkClick': HyperlinkOnClick,
        'a:hlinkMouseOver': HyperlinkOnMouseOver,
        'a:rtl': RightToLeft,
        'a:extLst': ExtensionList,
    };
    TextParagraphPropertiesType._C = {
        'a:lnSpc': LineSpacing,
        'a:spcBef': SpaceBefore,
        'a:spcAft': SpaceAfter,
        'a:buClrTx': BulletColorText,
        'a:buClr': BulletColor,
        'a:buSzTx': BulletSizeText,
        'a:buSzPct': BulletSizePercentage,
        'a:buSzPts': BulletSizePoints,
        'a:buFontTx': BulletFontText,
        'a:buFont': BulletFont,
        'a:buNone': NoBullet,
        'a:buAutoNum': AutoNumberedBullet,
        'a:buChar': CharacterBullet,
        'a:buBlip': PictureBullet,
        'a:tabLst': TabStopList,
        'a:defRPr': DefaultRunProperties,
        'a:extLst': ExtensionList,
    };
    TextParagraphPropertiesType._D = {
        ':marL': new OxmlAttr(':marL', OxmlType.Int32Value),
        ':marR': new OxmlAttr(':marR', OxmlType.Int32Value),
        ':lvl': new OxmlAttr(':lvl', OxmlType.Int32Value),
        ':indent': new OxmlAttr(':indent', OxmlType.Int32Value),
        ':algn': new OxmlAttr(':algn', OxmlType.EnumValue, TextAlignmentTypeValuesArray),
        ':defTabSz': new OxmlAttr(':defTabSz', OxmlType.Int32Value),
        ':rtl': new OxmlAttr(':rtl', OxmlType.BooleanValue),
        ':eaLnBrk': new OxmlAttr(':eaLnBrk', OxmlType.BooleanValue),
        ':fontAlgn': new OxmlAttr(':fontAlgn', OxmlType.EnumValue, TextFontAlignmentValuesArray),
        ':latinLnBrk': new OxmlAttr(':latinLnBrk', OxmlType.BooleanValue),
        ':hangingPunct': new OxmlAttr(':hangingPunct', OxmlType.BooleanValue),
    };
    Level9ParagraphProperties._C = {
        'a:lnSpc': LineSpacing,
        'a:spcBef': SpaceBefore,
        'a:spcAft': SpaceAfter,
        'a:buClrTx': BulletColorText,
        'a:buClr': BulletColor,
        'a:buSzTx': BulletSizeText,
        'a:buSzPct': BulletSizePercentage,
        'a:buSzPts': BulletSizePoints,
        'a:buFontTx': BulletFontText,
        'a:buFont': BulletFont,
        'a:buNone': NoBullet,
        'a:buAutoNum': AutoNumberedBullet,
        'a:buChar': CharacterBullet,
        'a:buBlip': PictureBullet,
        'a:tabLst': TabStopList,
        'a:defRPr': DefaultRunProperties,
        'a:extLst': ExtensionList,
    };
    Level8ParagraphProperties._C = {
        'a:lnSpc': LineSpacing,
        'a:spcBef': SpaceBefore,
        'a:spcAft': SpaceAfter,
        'a:buClrTx': BulletColorText,
        'a:buClr': BulletColor,
        'a:buSzTx': BulletSizeText,
        'a:buSzPct': BulletSizePercentage,
        'a:buSzPts': BulletSizePoints,
        'a:buFontTx': BulletFontText,
        'a:buFont': BulletFont,
        'a:buNone': NoBullet,
        'a:buAutoNum': AutoNumberedBullet,
        'a:buChar': CharacterBullet,
        'a:buBlip': PictureBullet,
        'a:tabLst': TabStopList,
        'a:defRPr': DefaultRunProperties,
        'a:extLst': ExtensionList,
    };
    Level7ParagraphProperties._C = {
        'a:lnSpc': LineSpacing,
        'a:spcBef': SpaceBefore,
        'a:spcAft': SpaceAfter,
        'a:buClrTx': BulletColorText,
        'a:buClr': BulletColor,
        'a:buSzTx': BulletSizeText,
        'a:buSzPct': BulletSizePercentage,
        'a:buSzPts': BulletSizePoints,
        'a:buFontTx': BulletFontText,
        'a:buFont': BulletFont,
        'a:buNone': NoBullet,
        'a:buAutoNum': AutoNumberedBullet,
        'a:buChar': CharacterBullet,
        'a:buBlip': PictureBullet,
        'a:tabLst': TabStopList,
        'a:defRPr': DefaultRunProperties,
        'a:extLst': ExtensionList,
    };
    Level6ParagraphProperties._C = {
        'a:lnSpc': LineSpacing,
        'a:spcBef': SpaceBefore,
        'a:spcAft': SpaceAfter,
        'a:buClrTx': BulletColorText,
        'a:buClr': BulletColor,
        'a:buSzTx': BulletSizeText,
        'a:buSzPct': BulletSizePercentage,
        'a:buSzPts': BulletSizePoints,
        'a:buFontTx': BulletFontText,
        'a:buFont': BulletFont,
        'a:buNone': NoBullet,
        'a:buAutoNum': AutoNumberedBullet,
        'a:buChar': CharacterBullet,
        'a:buBlip': PictureBullet,
        'a:tabLst': TabStopList,
        'a:defRPr': DefaultRunProperties,
        'a:extLst': ExtensionList,
    };
    Level5ParagraphProperties._C = {
        'a:lnSpc': LineSpacing,
        'a:spcBef': SpaceBefore,
        'a:spcAft': SpaceAfter,
        'a:buClrTx': BulletColorText,
        'a:buClr': BulletColor,
        'a:buSzTx': BulletSizeText,
        'a:buSzPct': BulletSizePercentage,
        'a:buSzPts': BulletSizePoints,
        'a:buFontTx': BulletFontText,
        'a:buFont': BulletFont,
        'a:buNone': NoBullet,
        'a:buAutoNum': AutoNumberedBullet,
        'a:buChar': CharacterBullet,
        'a:buBlip': PictureBullet,
        'a:tabLst': TabStopList,
        'a:defRPr': DefaultRunProperties,
        'a:extLst': ExtensionList,
    };
    Level4ParagraphProperties._C = {
        'a:lnSpc': LineSpacing,
        'a:spcBef': SpaceBefore,
        'a:spcAft': SpaceAfter,
        'a:buClrTx': BulletColorText,
        'a:buClr': BulletColor,
        'a:buSzTx': BulletSizeText,
        'a:buSzPct': BulletSizePercentage,
        'a:buSzPts': BulletSizePoints,
        'a:buFontTx': BulletFontText,
        'a:buFont': BulletFont,
        'a:buNone': NoBullet,
        'a:buAutoNum': AutoNumberedBullet,
        'a:buChar': CharacterBullet,
        'a:buBlip': PictureBullet,
        'a:tabLst': TabStopList,
        'a:defRPr': DefaultRunProperties,
        'a:extLst': ExtensionList,
    };
    Level3ParagraphProperties._C = {
        'a:lnSpc': LineSpacing,
        'a:spcBef': SpaceBefore,
        'a:spcAft': SpaceAfter,
        'a:buClrTx': BulletColorText,
        'a:buClr': BulletColor,
        'a:buSzTx': BulletSizeText,
        'a:buSzPct': BulletSizePercentage,
        'a:buSzPts': BulletSizePoints,
        'a:buFontTx': BulletFontText,
        'a:buFont': BulletFont,
        'a:buNone': NoBullet,
        'a:buAutoNum': AutoNumberedBullet,
        'a:buChar': CharacterBullet,
        'a:buBlip': PictureBullet,
        'a:tabLst': TabStopList,
        'a:defRPr': DefaultRunProperties,
        'a:extLst': ExtensionList,
    };
    Level2ParagraphProperties._C = {
        'a:lnSpc': LineSpacing,
        'a:spcBef': SpaceBefore,
        'a:spcAft': SpaceAfter,
        'a:buClrTx': BulletColorText,
        'a:buClr': BulletColor,
        'a:buSzTx': BulletSizeText,
        'a:buSzPct': BulletSizePercentage,
        'a:buSzPts': BulletSizePoints,
        'a:buFontTx': BulletFontText,
        'a:buFont': BulletFont,
        'a:buNone': NoBullet,
        'a:buAutoNum': AutoNumberedBullet,
        'a:buChar': CharacterBullet,
        'a:buBlip': PictureBullet,
        'a:tabLst': TabStopList,
        'a:defRPr': DefaultRunProperties,
        'a:extLst': ExtensionList,
    };
    Level1ParagraphProperties._C = {
        'a:lnSpc': LineSpacing,
        'a:spcBef': SpaceBefore,
        'a:spcAft': SpaceAfter,
        'a:buClrTx': BulletColorText,
        'a:buClr': BulletColor,
        'a:buSzTx': BulletSizeText,
        'a:buSzPct': BulletSizePercentage,
        'a:buSzPts': BulletSizePoints,
        'a:buFontTx': BulletFontText,
        'a:buFont': BulletFont,
        'a:buNone': NoBullet,
        'a:buAutoNum': AutoNumberedBullet,
        'a:buChar': CharacterBullet,
        'a:buBlip': PictureBullet,
        'a:tabLst': TabStopList,
        'a:defRPr': DefaultRunProperties,
        'a:extLst': ExtensionList,
    };
    DefaultParagraphProperties._C = {
        'a:lnSpc': LineSpacing,
        'a:spcBef': SpaceBefore,
        'a:spcAft': SpaceAfter,
        'a:buClrTx': BulletColorText,
        'a:buClr': BulletColor,
        'a:buSzTx': BulletSizeText,
        'a:buSzPct': BulletSizePercentage,
        'a:buSzPts': BulletSizePoints,
        'a:buFontTx': BulletFontText,
        'a:buFont': BulletFont,
        'a:buNone': NoBullet,
        'a:buAutoNum': AutoNumberedBullet,
        'a:buChar': CharacterBullet,
        'a:buBlip': PictureBullet,
        'a:tabLst': TabStopList,
        'a:defRPr': DefaultRunProperties,
        'a:extLst': ExtensionList,
    };
    ParagraphProperties._C = {
        'a:lnSpc': LineSpacing,
        'a:spcBef': SpaceBefore,
        'a:spcAft': SpaceAfter,
        'a:buClrTx': BulletColorText,
        'a:buClr': BulletColor,
        'a:buSzTx': BulletSizeText,
        'a:buSzPct': BulletSizePercentage,
        'a:buSzPts': BulletSizePoints,
        'a:buFontTx': BulletFontText,
        'a:buFont': BulletFont,
        'a:buNone': NoBullet,
        'a:buAutoNum': AutoNumberedBullet,
        'a:buChar': CharacterBullet,
        'a:buBlip': PictureBullet,
        'a:tabLst': TabStopList,
        'a:defRPr': DefaultRunProperties,
        'a:extLst': ExtensionList,
    };
    TablePartStyleType._C = {
        'a:tcTxStyle': TableCellTextStyle,
        'a:tcStyle': TableCellStyle,
    };
    NorthwestCell._C = {
        'a:tcTxStyle': TableCellTextStyle,
        'a:tcStyle': TableCellStyle,
    };
    NortheastCell._C = {
        'a:tcTxStyle': TableCellTextStyle,
        'a:tcStyle': TableCellStyle,
    };
    FirstRow._C = {
        'a:tcTxStyle': TableCellTextStyle,
        'a:tcStyle': TableCellStyle,
    };
    SouthwestCell._C = {
        'a:tcTxStyle': TableCellTextStyle,
        'a:tcStyle': TableCellStyle,
    };
    SoutheastCell._C = {
        'a:tcTxStyle': TableCellTextStyle,
        'a:tcStyle': TableCellStyle,
    };
    LastRow._C = {
        'a:tcTxStyle': TableCellTextStyle,
        'a:tcStyle': TableCellStyle,
    };
    FirstColumn._C = {
        'a:tcTxStyle': TableCellTextStyle,
        'a:tcStyle': TableCellStyle,
    };
    LastColumn._C = {
        'a:tcTxStyle': TableCellTextStyle,
        'a:tcStyle': TableCellStyle,
    };
    Band2Vertical._C = {
        'a:tcTxStyle': TableCellTextStyle,
        'a:tcStyle': TableCellStyle,
    };
    Band1Vertical._C = {
        'a:tcTxStyle': TableCellTextStyle,
        'a:tcStyle': TableCellStyle,
    };
    Band2Horizontal._C = {
        'a:tcTxStyle': TableCellTextStyle,
        'a:tcStyle': TableCellStyle,
    };
    Band1Horizontal._C = {
        'a:tcTxStyle': TableCellTextStyle,
        'a:tcStyle': TableCellStyle,
    };
    WholeTable._C = {
        'a:tcTxStyle': TableCellTextStyle,
        'a:tcStyle': TableCellStyle,
    };
    TableBackground._C = {
        'a:fill': FillProperties,
        'a:fillRef': FillReference,
        'a:effect': EffectPropertiesType,
        'a:effectRef': EffectReference,
    };
    TableCellStyle._C = {
        'a:tcBdr': TableCellBorders,
        'a:fill': FillProperties,
        'a:fillRef': FillReference,
        'a:cell3D': Cell3DProperties,
    };
    TableCellTextStyle._C = {
        'a:font': Fonts,
        'a:fontRef': FontReference,
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
        'a:extLst': ExtensionList,
    };
    TableCellTextStyle._D = {
        ':b': new OxmlAttr(':b', OxmlType.EnumValue, BooleanStyleValuesArray),
        ':i': new OxmlAttr(':i', OxmlType.EnumValue, BooleanStyleValuesArray),
    };
    TableCellBorders._C = {
        'a:left': LeftBorder,
        'a:right': RightBorder,
        'a:top': TopBorder,
        'a:bottom': BottomBorder,
        'a:insideH': InsideHorizontalBorder,
        'a:insideV': InsideVerticalBorder,
        'a:tl2br': TopLeftToBottomRightBorder,
        'a:tr2bl': TopRightToBottomLeftBorder,
        'a:extLst': ExtensionList,
    };
    ThemeableLineStyleType._C = {
        'a:ln': Outline,
        'a:lnRef': LineReference,
    };
    TopRightToBottomLeftBorder._C = {
        'a:ln': Outline,
        'a:lnRef': LineReference,
    };
    TopLeftToBottomRightBorder._C = {
        'a:ln': Outline,
        'a:lnRef': LineReference,
    };
    InsideVerticalBorder._C = {
        'a:ln': Outline,
        'a:lnRef': LineReference,
    };
    InsideHorizontalBorder._C = {
        'a:ln': Outline,
        'a:lnRef': LineReference,
    };
    BottomBorder._C = {
        'a:ln': Outline,
        'a:lnRef': LineReference,
    };
    TopBorder._C = {
        'a:ln': Outline,
        'a:lnRef': LineReference,
    };
    RightBorder._C = {
        'a:ln': Outline,
        'a:lnRef': LineReference,
    };
    LeftBorder._C = {
        'a:ln': Outline,
        'a:lnRef': LineReference,
    };
    TableRow._C = {
        'a:tc': TableCell,
        'a:extLst': ExtensionList,
    };
    TableRow._D = {
        ':h': new OxmlAttr(':h', OxmlType.Int64Value),
    };
    TableGrid._C = {
        'a:gridCol': GridColumn,
    };
    TableProperties._C = {
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:blipFill': BlipFill,
        'a:pattFill': PatternFill,
        'a:grpFill': GroupFill,
        'a:effectLst': EffectList,
        'a:effectDag': EffectDag,
        'a:tableStyle': TableStyle,
        'a:tableStyleId': TableStyleId,
        'a:extLst': ExtensionList,
    };
    TableProperties._D = {
        ':rtl': new OxmlAttr(':rtl', OxmlType.BooleanValue),
        ':firstRow': new OxmlAttr(':firstRow', OxmlType.BooleanValue),
        ':firstCol': new OxmlAttr(':firstCol', OxmlType.BooleanValue),
        ':lastRow': new OxmlAttr(':lastRow', OxmlType.BooleanValue),
        ':lastCol': new OxmlAttr(':lastCol', OxmlType.BooleanValue),
        ':bandRow': new OxmlAttr(':bandRow', OxmlType.BooleanValue),
        ':bandCol': new OxmlAttr(':bandCol', OxmlType.BooleanValue),
    };
    GridColumn._C = {
        'a:extLst': ExtensionList,
    };
    GridColumn._D = {
        ':w': new OxmlAttr(':w', OxmlType.Int64Value),
    };
    TableStyleType._C = {
        'a:tblBg': TableBackground,
        'a:wholeTbl': WholeTable,
        'a:band1H': Band1Horizontal,
        'a:band2H': Band2Horizontal,
        'a:band1V': Band1Vertical,
        'a:band2V': Band2Vertical,
        'a:lastCol': LastColumn,
        'a:firstCol': FirstColumn,
        'a:lastRow': LastRow,
        'a:seCell': SoutheastCell,
        'a:swCell': SouthwestCell,
        'a:firstRow': FirstRow,
        'a:neCell': NortheastCell,
        'a:nwCell': NorthwestCell,
        'a:extLst': ExtensionList,
    };
    TableStyleType._D = {
        ':styleId': new OxmlAttr(':styleId', OxmlType.StringValue),
        ':styleName': new OxmlAttr(':styleName', OxmlType.StringValue),
    };
    TableStyleEntry._C = {
        'a:tblBg': TableBackground,
        'a:wholeTbl': WholeTable,
        'a:band1H': Band1Horizontal,
        'a:band2H': Band2Horizontal,
        'a:band1V': Band1Vertical,
        'a:band2V': Band2Vertical,
        'a:lastCol': LastColumn,
        'a:firstCol': FirstColumn,
        'a:lastRow': LastRow,
        'a:seCell': SoutheastCell,
        'a:swCell': SouthwestCell,
        'a:firstRow': FirstRow,
        'a:neCell': NortheastCell,
        'a:nwCell': NorthwestCell,
        'a:extLst': ExtensionList,
    };
    TableStyle._C = {
        'a:tblBg': TableBackground,
        'a:wholeTbl': WholeTable,
        'a:band1H': Band1Horizontal,
        'a:band2H': Band2Horizontal,
        'a:band1V': Band1Vertical,
        'a:band2V': Band2Vertical,
        'a:lastCol': LastColumn,
        'a:firstCol': FirstColumn,
        'a:lastRow': LastRow,
        'a:seCell': SoutheastCell,
        'a:swCell': SouthwestCell,
        'a:firstRow': FirstRow,
        'a:neCell': NortheastCell,
        'a:nwCell': NorthwestCell,
        'a:extLst': ExtensionList,
    };
    TableCell._C = {
        'a:txBody': TextBody,
        'a:tcPr': TableCellProperties,
        'a:extLst': ExtensionList,
    };
    TableCell._D = {
        ':rowSpan': new OxmlAttr(':rowSpan', OxmlType.Int32Value),
        ':gridSpan': new OxmlAttr(':gridSpan', OxmlType.Int32Value),
        ':hMerge': new OxmlAttr(':hMerge', OxmlType.BooleanValue),
        ':vMerge': new OxmlAttr(':vMerge', OxmlType.BooleanValue),
    };
    TableCellProperties._C = {
        'a:lnL': LeftBorderLineProperties,
        'a:lnR': RightBorderLineProperties,
        'a:lnT': TopBorderLineProperties,
        'a:lnB': BottomBorderLineProperties,
        'a:lnTlToBr': TopLeftToBottomRightBorderLineProperties,
        'a:lnBlToTr': BottomLeftToTopRightBorderLineProperties,
        'a:cell3D': Cell3DProperties,
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:blipFill': BlipFill,
        'a:pattFill': PatternFill,
        'a:grpFill': GroupFill,
        'a:extLst': ExtensionList,
    };
    TableCellProperties._D = {
        ':marL': new OxmlAttr(':marL', OxmlType.Int32Value),
        ':marR': new OxmlAttr(':marR', OxmlType.Int32Value),
        ':marT': new OxmlAttr(':marT', OxmlType.Int32Value),
        ':marB': new OxmlAttr(':marB', OxmlType.Int32Value),
        ':vert': new OxmlAttr(':vert', OxmlType.EnumValue, TextVerticalValuesArray),
        ':anchor': new OxmlAttr(':anchor', OxmlType.EnumValue, TextAnchoringTypeValuesArray),
        ':anchorCtr': new OxmlAttr(':anchorCtr', OxmlType.BooleanValue),
        ':horzOverflow': new OxmlAttr(':horzOverflow', OxmlType.EnumValue, TextHorizontalOverflowValuesArray),
    };
    Cell3DProperties._C = {
        'a:bevel': Bevel,
        'a:lightRig': LightRig,
        'a:extLst': ExtensionList,
    };
    Cell3DProperties._D = {
        ':prstMaterial': new OxmlAttr(':prstMaterial', OxmlType.EnumValue, PresetMaterialTypeValuesArray),
    };
    ThemeElements._C = {
        'a:clrScheme': ColorScheme,
        'a:fontScheme': FontScheme,
        'a:fmtScheme': FormatScheme,
        'a:extLst': ExtensionList,
    };
    ExtraColorScheme._C = {
        'a:clrScheme': ColorScheme,
        'a:clrMap': ColorMap,
    };
    ColorMappingType._C = {
        'a:extLst': ExtensionList,
    };
    ColorMappingType._D = {
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
    ColorMap._C = {
        'a:extLst': ExtensionList,
    };
    OverrideColorMapping._C = {
        'a:extLst': ExtensionList,
    };
    DefaultShapeDefinitionType._C = {
        'a:spPr': ShapeProperties,
        'a:bodyPr': BodyProperties,
        'a:lstStyle': ListStyle,
        'a:style': ShapeStyle,
        'a:extLst': ExtensionList,
    };
    TextDefault._C = {
        'a:spPr': ShapeProperties,
        'a:bodyPr': BodyProperties,
        'a:lstStyle': ListStyle,
        'a:style': ShapeStyle,
        'a:extLst': ExtensionList,
    };
    LineDefault._C = {
        'a:spPr': ShapeProperties,
        'a:bodyPr': BodyProperties,
        'a:lstStyle': ListStyle,
        'a:style': ShapeStyle,
        'a:extLst': ExtensionList,
    };
    ShapeDefault._C = {
        'a:spPr': ShapeProperties,
        'a:bodyPr': BodyProperties,
        'a:lstStyle': ListStyle,
        'a:style': ShapeStyle,
        'a:extLst': ExtensionList,
    };
    ListStyle._C = {
        'a:defPPr': DefaultParagraphProperties,
        'a:lvl1pPr': Level1ParagraphProperties,
        'a:lvl2pPr': Level2ParagraphProperties,
        'a:lvl3pPr': Level3ParagraphProperties,
        'a:lvl4pPr': Level4ParagraphProperties,
        'a:lvl5pPr': Level5ParagraphProperties,
        'a:lvl6pPr': Level6ParagraphProperties,
        'a:lvl7pPr': Level7ParagraphProperties,
        'a:lvl8pPr': Level8ParagraphProperties,
        'a:lvl9pPr': Level9ParagraphProperties,
        'a:extLst': ExtensionList,
    };
    BodyProperties._C = {
        'a:prstTxWarp': PresetTextWrap,
        'a:noAutofit': NoAutoFit,
        'a:normAutofit': NormalAutoFit,
        'a:spAutoFit': ShapeAutoFit,
        'a:scene3d': Scene3DType,
        'a:sp3d': Shape3DType,
        'a:flatTx': FlatText,
        'a:extLst': ExtensionList,
    };
    BodyProperties._D = {
        ':rot': new OxmlAttr(':rot', OxmlType.Int32Value),
        ':spcFirstLastPara': new OxmlAttr(':spcFirstLastPara', OxmlType.BooleanValue),
        ':vertOverflow': new OxmlAttr(':vertOverflow', OxmlType.EnumValue, TextVerticalOverflowValuesArray),
        ':horzOverflow': new OxmlAttr(':horzOverflow', OxmlType.EnumValue, TextHorizontalOverflowValuesArray),
        ':vert': new OxmlAttr(':vert', OxmlType.EnumValue, TextVerticalValuesArray),
        ':wrap': new OxmlAttr(':wrap', OxmlType.EnumValue, TextWrappingValuesArray),
        ':lIns': new OxmlAttr(':lIns', OxmlType.Int32Value),
        ':tIns': new OxmlAttr(':tIns', OxmlType.Int32Value),
        ':rIns': new OxmlAttr(':rIns', OxmlType.Int32Value),
        ':bIns': new OxmlAttr(':bIns', OxmlType.Int32Value),
        ':numCol': new OxmlAttr(':numCol', OxmlType.Int32Value),
        ':spcCol': new OxmlAttr(':spcCol', OxmlType.Int32Value),
        ':rtlCol': new OxmlAttr(':rtlCol', OxmlType.BooleanValue),
        ':fromWordArt': new OxmlAttr(':fromWordArt', OxmlType.BooleanValue),
        ':anchor': new OxmlAttr(':anchor', OxmlType.EnumValue, TextAnchoringTypeValuesArray),
        ':anchorCtr': new OxmlAttr(':anchorCtr', OxmlType.BooleanValue),
        ':forceAA': new OxmlAttr(':forceAA', OxmlType.BooleanValue),
        ':upright': new OxmlAttr(':upright', OxmlType.BooleanValue),
        ':compatLnSpc': new OxmlAttr(':compatLnSpc', OxmlType.BooleanValue),
    };
    TransformGroup._C = {
        'a:off': Offset,
        'a:ext': Extents,
        'a:chOff': ChildOffset,
        'a:chExt': ChildExtents,
    };
    TransformGroup._D = {
        ':rot': new OxmlAttr(':rot', OxmlType.Int32Value),
        ':flipH': new OxmlAttr(':flipH', OxmlType.BooleanValue),
        ':flipV': new OxmlAttr(':flipV', OxmlType.BooleanValue),
    };
    DashStop._D = {
        ':d': new OxmlAttr(':d', OxmlType.Int32Value),
        ':sp': new OxmlAttr(':sp', OxmlType.Int32Value),
    };
    PathList._C = {
        'a:path': Path,
    };
    Rectangle._D = {
        ':l': new OxmlAttr(':l', OxmlType.StringValue),
        ':t': new OxmlAttr(':t', OxmlType.StringValue),
        ':r': new OxmlAttr(':r', OxmlType.StringValue),
        ':b': new OxmlAttr(':b', OxmlType.StringValue),
    };
    ConnectionSiteList._C = {
        'a:cxn': ConnectionSite,
    };
    AdjustHandleList._C = {
        'a:ahXY': AdjustHandleXY,
        'a:ahPolar': AdjustHandlePolar,
    };
    GeometryGuideListType._C = {
        'a:gd': ShapeGuide,
    };
    ShapeGuideList._C = {
        'a:gd': ShapeGuide,
    };
    AdjustValueList._C = {
        'a:gd': ShapeGuide,
    };
    Path._C = {
        'a:close': CloseShapePath,
        'a:moveTo': MoveTo,
        'a:lnTo': LineTo,
        'a:arcTo': ArcTo,
        'a:quadBezTo': QuadraticBezierCurveTo,
        'a:cubicBezTo': CubicBezierCurveTo,
    };
    Path._D = {
        ':w': new OxmlAttr(':w', OxmlType.Int64Value),
        ':h': new OxmlAttr(':h', OxmlType.Int64Value),
        ':fill': new OxmlAttr(':fill', OxmlType.EnumValue, PathFillModeValuesArray),
        ':stroke': new OxmlAttr(':stroke', OxmlType.BooleanValue),
        ':extrusionOk': new OxmlAttr(':extrusionOk', OxmlType.BooleanValue),
    };
    CubicBezierCurveTo._C = {
        'a:pt': Point,
    };
    QuadraticBezierCurveTo._C = {
        'a:pt': Point,
    };
    ArcTo._D = {
        ':wR': new OxmlAttr(':wR', OxmlType.StringValue),
        ':hR': new OxmlAttr(':hR', OxmlType.StringValue),
        ':stAng': new OxmlAttr(':stAng', OxmlType.StringValue),
        ':swAng': new OxmlAttr(':swAng', OxmlType.StringValue),
    };
    LineTo._C = {
        'a:pt': Point,
    };
    MoveTo._C = {
        'a:pt': Point,
    };
    ConnectionSite._C = {
        'a:pos': Position,
    };
    ConnectionSite._D = {
        ':ang': new OxmlAttr(':ang', OxmlType.StringValue),
    };
    AdjustHandlePolar._C = {
        'a:pos': Position,
    };
    AdjustHandlePolar._D = {
        ':gdRefR': new OxmlAttr(':gdRefR', OxmlType.StringValue),
        ':minR': new OxmlAttr(':minR', OxmlType.StringValue),
        ':maxR': new OxmlAttr(':maxR', OxmlType.StringValue),
        ':gdRefAng': new OxmlAttr(':gdRefAng', OxmlType.StringValue),
        ':minAng': new OxmlAttr(':minAng', OxmlType.StringValue),
        ':maxAng': new OxmlAttr(':maxAng', OxmlType.StringValue),
    };
    AdjustHandleXY._C = {
        'a:pos': Position,
    };
    AdjustHandleXY._D = {
        ':gdRefX': new OxmlAttr(':gdRefX', OxmlType.StringValue),
        ':minX': new OxmlAttr(':minX', OxmlType.StringValue),
        ':maxX': new OxmlAttr(':maxX', OxmlType.StringValue),
        ':gdRefY': new OxmlAttr(':gdRefY', OxmlType.StringValue),
        ':minY': new OxmlAttr(':minY', OxmlType.StringValue),
        ':maxY': new OxmlAttr(':maxY', OxmlType.StringValue),
    };
    AdjustPoint2DType._D = {
        ':x': new OxmlAttr(':x', OxmlType.StringValue),
        ':y': new OxmlAttr(':y', OxmlType.StringValue),
    };
    ShapeGuide._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':fmla': new OxmlAttr(':fmla', OxmlType.StringValue),
    };
    GradientStopList._C = {
        'a:gs': GradientStop,
    };
    GradientStop._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    GradientStop._D = {
        ':pos': new OxmlAttr(':pos', OxmlType.Int32Value),
    };
    RelativeRectangleType._D = {
        ':l': new OxmlAttr(':l', OxmlType.Int32Value),
        ':t': new OxmlAttr(':t', OxmlType.Int32Value),
        ':r': new OxmlAttr(':r', OxmlType.Int32Value),
        ':b': new OxmlAttr(':b', OxmlType.Int32Value),
    };
    BevelType._D = {
        ':w': new OxmlAttr(':w', OxmlType.Int64Value),
        ':h': new OxmlAttr(':h', OxmlType.Int64Value),
        ':prst': new OxmlAttr(':prst', OxmlType.EnumValue, BevelPresetValuesArray),
    };
    Vector3DType._D = {
        ':dx': new OxmlAttr(':dx', OxmlType.Int64Value),
        ':dy': new OxmlAttr(':dy', OxmlType.Int64Value),
        ':dz': new OxmlAttr(':dz', OxmlType.Int64Value),
    };
    Anchor._D = {
        ':x': new OxmlAttr(':x', OxmlType.Int64Value),
        ':y': new OxmlAttr(':y', OxmlType.Int64Value),
        ':z': new OxmlAttr(':z', OxmlType.Int64Value),
    };
    Backdrop._C = {
        'a:anchor': Anchor,
        'a:norm': Normal,
        'a:up': UpVector,
        'a:extLst': ExtensionList,
    };
    LightRig._C = {
        'a:rot': Rotation,
    };
    LightRig._D = {
        ':rig': new OxmlAttr(':rig', OxmlType.EnumValue, LightRigValuesArray),
        ':dir': new OxmlAttr(':dir', OxmlType.EnumValue, LightRigDirectionValuesArray),
    };
    Camera._C = {
        'a:rot': Rotation,
    };
    Camera._D = {
        ':prst': new OxmlAttr(':prst', OxmlType.EnumValue, PresetCameraValuesArray),
        ':fov': new OxmlAttr(':fov', OxmlType.Int32Value),
        ':zoom': new OxmlAttr(':zoom', OxmlType.Int32Value),
    };
    Rotation._D = {
        ':lat': new OxmlAttr(':lat', OxmlType.Int32Value),
        ':lon': new OxmlAttr(':lon', OxmlType.Int32Value),
        ':rev': new OxmlAttr(':rev', OxmlType.Int32Value),
    };
    NonVisualGroupShapeDrawingProperties._C = {
        'a:grpSpLocks': GroupShapeLocks,
        'a:extLst': NonVisualGroupDrawingShapePropsExtensionList,
    };
    NonVisualGraphicFrameProperties._C = {
        'a:cNvPr': NonVisualDrawingProperties,
        'a:cNvGraphicFramePr': NonVisualGraphicFrameDrawingProperties,
    };
    NonVisualGraphicFrameDrawingProperties._C = {
        'a:graphicFrameLocks': GraphicFrameLocks,
        'a:extLst': ExtensionList,
    };
    NonVisualPictureProperties._C = {
        'a:cNvPr': NonVisualDrawingProperties,
        'a:cNvPicPr': NonVisualPictureDrawingProperties,
    };
    NonVisualPictureDrawingProperties._C = {
        'a:picLocks': PictureLocks,
        'a:extLst': NonVisualPicturePropertiesExtensionList,
    };
    NonVisualPictureDrawingProperties._D = {
        ':preferRelativeResize': new OxmlAttr(':preferRelativeResize', OxmlType.BooleanValue),
    };
    NonVisualConnectionShapeProperties._C = {
        'a:cNvPr': NonVisualDrawingProperties,
        'a:cNvCxnSpPr': NonVisualConnectorShapeDrawingProperties,
    };
    NonVisualConnectorShapeDrawingProperties._C = {
        'a:cxnSpLocks': ConnectionShapeLocks,
        'a:stCxn': StartConnection,
        'a:endCxn': EndConnection,
        'a:extLst': ExtensionList,
    };
    ShapeStyle._C = {
        'a:lnRef': LineReference,
        'a:fillRef': FillReference,
        'a:effectRef': EffectReference,
        'a:fontRef': FontReference,
    };
    TextShape._C = {
        'a:txBody': TextBody,
        'a:useSpRect': UseShapeRectangle,
        'a:xfrm': Transform2D,
        'a:extLst': ExtensionList,
    };
    ShapeProperties._C = {
        'a:xfrm': Transform2D,
        'a:custGeom': CustomGeometry,
        'a:prstGeom': PresetGeometry,
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:blipFill': BlipFill,
        'a:pattFill': PatternFill,
        'a:grpFill': GroupFill,
        'a:ln': Outline,
        'a:effectLst': EffectList,
        'a:effectDag': EffectDag,
        'a:scene3d': Scene3DType,
        'a:sp3d': Shape3DType,
        'a:extLst': ShapePropertiesExtensionList,
    };
    ShapeProperties._D = {
        ':bwMode': new OxmlAttr(':bwMode', OxmlType.EnumValue, BlackWhiteModeValuesArray),
    };
    NonVisualShapeProperties._C = {
        'a:cNvPr': NonVisualDrawingProperties,
        'a:cNvSpPr': NonVisualShapeDrawingProperties,
    };
    NonVisualShapeDrawingProperties._C = {
        'a:spLocks': ShapeLocks,
        'a:extLst': ExtensionList,
    };
    NonVisualShapeDrawingProperties._D = {
        ':txBox': new OxmlAttr(':txBox', OxmlType.BooleanValue),
    };
    NonVisualDrawingProperties._C = {
        'a:hlinkClick': HyperlinkOnClick,
        'a:hlinkHover': HyperlinkOnHover,
        'a:extLst': NonVisualDrawingPropertiesExtensionList,
    };
    NonVisualDrawingProperties._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':descr': new OxmlAttr(':descr', OxmlType.StringValue),
        ':hidden': new OxmlAttr(':hidden', OxmlType.BooleanValue),
        ':title': new OxmlAttr(':title', OxmlType.StringValue),
    };
    Transform2D._C = {
        'a:off': Offset,
        'a:ext': Extents,
    };
    Transform2D._D = {
        ':rot': new OxmlAttr(':rot', OxmlType.Int32Value),
        ':flipH': new OxmlAttr(':flipH', OxmlType.BooleanValue),
        ':flipV': new OxmlAttr(':flipV', OxmlType.BooleanValue),
    };
    TextBody._C = {
        'a:bodyPr': BodyProperties,
        'a:lstStyle': ListStyle,
        'a:p': Paragraph,
    };
    BuildChart._D = {
        ':bld': new OxmlAttr(':bld', OxmlType.StringValue),
        ':animBg': new OxmlAttr(':animBg', OxmlType.BooleanValue),
    };
    BuildDiagram._D = {
        ':bld': new OxmlAttr(':bld', OxmlType.StringValue),
        ':rev': new OxmlAttr(':rev', OxmlType.BooleanValue),
    };
    Chart._D = {
        ':seriesIdx': new OxmlAttr(':seriesIdx', OxmlType.Int32Value),
        ':categoryIdx': new OxmlAttr(':categoryIdx', OxmlType.Int32Value),
        ':bldStep': new OxmlAttr(':bldStep', OxmlType.EnumValue, ChartBuildStepValuesArray),
    };
    Diagram._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':bldStep': new OxmlAttr(':bldStep', OxmlType.EnumValue, DiagramBuildStepValuesArray),
    };
    GraphicData._C = {
        'a:graphic': Graphic,
        'a:blip': Blip,
        'a:theme': Theme,
        'a:themeOverride': ThemeOverride,
        'a:themeManager': ThemeManager,
        'a:tbl': Table,
        'a:tblStyleLst': TableStyleList,
        'aoe:oembedShared': AoeOEmbedShared,
        'woe:oembed': WoeOEmbed,
        'aif:imageFormula': AifImageFormula,
        'alf:liveFeedProps': AlfLiveFeedProperties,
        'asl:scriptLink': AslScriptLink,
        'aclsh:classification': AclshClassificationOutcome,
        'ask:lineSketchStyleProps': AskLineSketchStyleProperties,
        'a1611:picAttrSrcUrl': A1611PictureAttributionSourceURL,
        'asvg:svgBlip': AsvgSVGBlip,
        'adec:decorative': AdecDecorative,
        'a16:creationId': A16CreationId,
        'a16:predDERef': A16PredecessorDrawingElementReference,
        'a16:cxnDERefs': A16ConnectableReferences,
        'a16:rowId': A16RowIdIdentifier,
        'a16:colId': A16ColIdIdentifier,
        'ahyp:hlinkClr': AhypHyperlinkColor,
        'wp15:webVideoPr': Wp15WebVideoProperty,
        'thm15:themeFamily': Thm15ThemeFamily,
        'a15:backgroundPr': A15BackgroundProperties,
        'a15:nonVisualGroupProps': A15NonVisualGroupProperties,
        'a15:objectPr': A15ObjectProperties,
        'a15:signatureLine': A15SignatureLine,
        'a14:cameraTool': A14CameraTool,
        'a14:compatExt': A14CompatExtension,
        'a14:isCanvas': A14IsCanvas,
        'a14:contentPart': A14GvmlContentPart,
        'a14:shadowObscured': A14ShadowObscured,
        'a14:hiddenFill': A14HiddenFillProperties,
        'a14:hiddenLine': A14HiddenLineProperties,
        'a14:hiddenEffects': A14HiddenEffectsProperties,
        'a14:hiddenScene3d': A14HiddenScene3D,
        'a14:hiddenSp3d': A14HiddenShape3D,
        'a14:imgProps': A14ImageProperties,
        'a14:useLocalDpi': A14UseLocalDpi,
        'a14:m': A14TextMath,
        'dgm14:cNvPr': Dgm14NonVisualDrawingProperties,
        'dgm14:recolorImg': Dgm14RecolorImages,
        'dsp:drawing': DspDrawing,
        'dsp:dataModelExt': DspDataModelExtensionBlock,
        'dgm:colorsDef': DgmColorsDefinition,
        'dgm:colorsDefHdr': DgmColorsDefinitionHeader,
        'dgm:colorsDefHdrLst': DgmColorsDefinitionHeaderList,
        'dgm:dataModel': DgmDataModelRoot,
        'dgm:layoutDef': DgmLayoutDefinition,
        'dgm:layoutDefHdr': DgmLayoutDefinitionHeader,
        'dgm:layoutDefHdrLst': DgmLayoutDefinitionHeaderList,
        'dgm:relIds': DgmRelationshipIds,
        'dgm:styleDef': DgmStyleDefinition,
        'dgm:styleDefHdr': DgmStyleDefinitionHeader,
        'dgm:styleDefHdrLst': DgmStyleDefinitionHeaderList,
        'dgm1612:spPr': Dgm1612ShapeProperties,
        'dgm1612:lstStyle': Dgm1612TextListStyleType,
        'dgm1611:autoBuNodeInfoLst': Dgm1611NumberDiagramInfoList,
        'c:chartSpace': CChartSpace,
        'c:userShapes': CUserShapes,
        'c:chart': CChartReference,
        'c16r3:dataDisplayOptions16': C16r3DataDisplayOptions16,
        'c15:pivotSource': C15PivotSource,
        'c15:numFmt': C15NumberingFormat,
        'c15:spPr': C15ShapeProperties,
        'c15:layout': C15Layout,
        'c15:fullRef': C15FullReference,
        'c15:levelRef': C15LevelReference,
        'c15:formulaRef': C15FormulaReference,
        'c15:filteredSeriesTitle': C15FilteredSeriesTitle,
        'c15:filteredCategoryTitle': C15FilteredCategoryTitle,
        'c15:filteredAreaSeries': C15FilteredAreaSeries,
        'c15:filteredBarSeries': C15FilteredBarSeries,
        'c15:filteredBubbleSeries': C15FilteredBubbleSeries,
        'c15:filteredLineSeries': C15FilteredLineSeriesExtension,
        'c15:filteredPieSeries': C15FilteredPieSeries,
        'c15:filteredRadarSeries': C15FilteredRadarSeries,
        'c15:filteredScatterSeries': C15FilteredScatterSeries,
        'c15:filteredSurfaceSeries': C15FilteredSurfaceSeries,
        'c15:datalabelsRange': C15DataLabelsRange,
        'c15:categoryFilterExceptions': C15CategoryFilterExceptions,
        'c15:dlblFieldTable': C15DataLabelFieldTable,
        'c15:xForSave': C15ExceptionForSave,
        'c15:showDataLabelsRange': C15ShowDataLabelsRange,
        'c15:tx': C15ChartText,
        'c15:showLeaderLines': C15ShowLeaderLines,
        'c15:leaderLines': C15LeaderLines,
        'c15:autoCat': C15AutoGeneneratedCategories,
        'c14:pivotOptions': C14PivotOptions,
        'c14:sketchOptions': C14SketchOptions,
        'c14:invertSolidFillFmt': C14InvertSolidFillFormat,
        'c14:style': C14Style,
        'cdr14:contentPart': Cdr14ContentPart,
        'comp:legacyDrawing': CompLegacyDrawing,
        'lc:lockedCanvas': LcLockedCanvas,
        'wp:inline': WpInline,
        'wp:anchor': WpAnchor,
        'wp14:pctPosHOffset': Wp14PercentagePositionHeightOffset,
        'wp14:pctPosVOffset': Wp14PercentagePositionVerticalOffset,
        'wp14:sizeRelH': Wp14RelativeWidth,
        'wp14:sizeRelV': Wp14RelativeHeight,
        'pic:pic': PicPicture,
        'pic14:style': Pic14ShapeStyle,
        'pic14:extLst': Pic14OfficeArtExtensionList,
        'xdr:wsDr': XdrWorksheetDrawing,
        'xdr:contentPart': XdrContentPart,
        'xdr14:contentPart': Xdr14ContentPart,
        'pc:cmAuthorMkLst': PcCommentAuthorMonikerList,
        'pc:cmMkLst': PcCommentMonikerList,
        'pc:tagMkLst': PcStringTagMonikerList,
        'pc:custShowMkLst': PcCustomShowMonikerList,
        'pc:docMkLst': PcDocumentMonikerList,
        'pc:sectionMkLst': PcSectionMonikerList,
        'pc:sldBaseMkLst': PcSlideBaseMonikerList,
        'pc:sldLayoutMkLst': PcSlideLayoutMonikerList,
        'pc:sldMasterMkLst': PcMainMasterMonikerList,
        'pc:sldMkLst': PcSlideMonikerList,
        'pc:sldPosMkLst': PcSlidePosMonikerList,
        'pc:notesMkLst': PcNotesMonikerList,
        'pc:notesTxtMkLst': PcNotesTextMonikerList,
        'pc:notesMasterMkLst': PcNotesMasterMonikerList,
        'pc:handoutMkLst': PcHandoutMonikerList,
        'pc:animEffectMkLst': PcAnimEffectMkLstAnimationEffectMonikerList,
        'pc:animEffectParentMkLst': PcAnimEffectParentMkLstAnimationEffectMonikerList,
        'pc:tkAppMkLst': PcOsfTaskPaneAppMonikerList,
        'pc:tocMkLst': PcSummaryZoomMonikerList,
        'pc:sectionLnkObjMkLst': PcSectionLinkObjMonikerList,
        'pc:designTagMkLst': PcDesignerTagMonikerList,
        'pc:cXmlMkLst': PcCustomXmlPartMonikerList,
        'p:cmAuthorLst': PCommentAuthorList,
        'p:cmLst': PCommentList,
        'p:oleObj': POleObject,
        'p:presentation': PPresentation,
        'p:presentationPr': PPresentationProperties,
        'p:sld': PSlide,
        'p:sldLayout': PSlideLayout,
        'p:sldMaster': PSlideMaster,
        'p:handoutMaster': PHandoutMaster,
        'p:notesMaster': PNotesMaster,
        'p:notes': PNotesSlide,
        'p:sldSyncPr': PSlideSyncProperties,
        'p:tagLst': PTagList,
        'p:viewPr': PViewProperties,
        'p:contentPart': PContentPart,
        'p188:authorLst': P188AuthorList,
        'p188:cmLst': P188CommentList,
        'p188:commentRel': P188CommentRelationship,
        'p1912:taskHistoryDetails': P1912TaskHistoryDetails,
        'oac:txBodyPkg': OacTextBodyPackage,
        'oac:grpCmd': OacGroupCommand,
        'oac:imgData': OacImgDataImgData,
        'oac:origImgData': OacOrigImgDataImgData,
        'oac:imgLink': OacImgLink,
        'oac:dgMkLst': OacDrawingMonikerList,
        'oac:dcMkLst': OacDocumentContextMonikerList,
        'oac:graphicParentMkLst': OacGraphicParentMonikerList,
        'oac:deMkLst': OacDeMkLstDrawingElementMonikerList,
        'oac:deMasterMkLst': OacDeMasterMkLstDrawingElementMonikerList,
        'oac:spMkLst': OacShapeMonikerList,
        'oac:grpSpMkLst': OacGroupShapeMonikerList,
        'oac:graphicFrameMkLst': OacGraphicFrameMonikerList,
        'oac:cxnSpMkLst': OacConnectorMonikerList,
        'oac:picMkLst': OacPictureMonikerList,
        'oac:inkMkLst': OacInkMonikerList,
        'oac:txBodyMkLst': OacTextBodyMonikerList,
        'oac:txMkLst': OacTextCharRangeMonikerList,
        'oac:hlinkMkLst': OacHyperlinkMonikerList,
        'oac:model3DMkLst': OacModel3DMonikerList,
        'oac:viewSelLst': OacViewSelectionStgList,
        'oac:editorSelLst': OacEditorSelectionStgList,
        'oac:drSelLst': OacDrawingSelectionStgList,
        'oac:tblMkLst': OacTableMonikerList,
        'oac:tcMkLst': OacTableCellMonikerList,
        'oac:trMkLst': OacTableRowMonikerList,
        'oac:gridColMkLst': OacTableColumnMonikerList,
        'inkml:ink': InkmlInk,
        'emma:one-of': EmmaOneOf,
        'emma:group': EmmaGroup,
        'emma:sequence': EmmaSequence,
        'emma:endpoint': EmmaEndPoint,
        'emma:endpoint-info': EmmaEndPointInfo,
        'emma:info': EmmaInfo,
        'emma:grammar': EmmaGrammar,
        'emma:derived-from': EmmaDerivedFrom,
        'emma:node': EmmaNode,
        'emma:arc': EmmaArc,
        'emma:lattice': EmmaLattice,
        'emma:literal': EmmaLiteral,
        'emma:interpretation': EmmaInterpretation,
        'emma:group-info': EmmaGroupInfo,
        'emma:derivation': EmmaDerivation,
        'emma:model': EmmaModel,
        'emma:emma': EmmaEmma,
        'msink:context': MsinkContextNode,
        'p15:prstTrans': P15PresetTransition,
        'p15:presenceInfo': P15PresenceInfo,
        'p15:threadingInfo': P15ThreadingInfo,
        'p15:sldGuideLst': P15SlideGuideList,
        'p15:notesGuideLst': P15NotesGuideList,
        'p15:chartTrackingRefBased': P15ChartTrackingReferenceBased,
        'p14:nvContentPartPr': P14NonVisualContentPartProperties,
        'p14:xfrm': P14Transform2D,
        'p14:extLst': P14ExtensionListModify,
        'p14:media': P14Media,
        'p14:vortex': P14VortexTransition,
        'p14:switch': P14SwitchTransition,
        'p14:flip': P14FlipTransition,
        'p14:ripple': P14RippleTransition,
        'p14:honeycomb': P14HoneycombTransition,
        'p14:prism': P14PrismTransition,
        'p14:doors': P14DoorsTransition,
        'p14:window': P14WindowTransition,
        'p14:ferris': P14FerrisTransition,
        'p14:gallery': P14GalleryTransition,
        'p14:conveyor': P14ConveyorTransition,
        'p14:pan': P14PanTransition,
        'p14:glitter': P14GlitterTransition,
        'p14:warp': P14WarpTransition,
        'p14:flythrough': P14FlythroughTransition,
        'p14:flash': P14FlashTransition,
        'p14:shred': P14ShredTransition,
        'p14:reveal': P14RevealTransition,
        'p14:wheelReverse': P14WheelReverseTransition,
        'p14:bmkTgt': P14BookmarkTarget,
        'p14:sectionPr': P14SectionProperties,
        'p14:sectionLst': P14SectionList,
        'p14:browseMode': P14BrowseMode,
        'p14:laserClr': P14LaserColor,
        'p14:defaultImageDpi': P14DefaultImageDpi,
        'p14:discardImageEditData': P14DiscardImageEditData,
        'p14:showMediaCtrls': P14ShowMediaControls,
        'p14:laserTraceLst': P14LaserTraceList,
        'p14:creationId': P14CreationId,
        'p14:modId': P14ModificationId,
        'p14:showEvtLst': P14ShowEventRecordList,
        'sl:schemaLibrary': SlSchemaLibrary,
        'm:mathPr': MMathProperties,
        'm:oMathPara': MParagraph,
        'm:oMath': MOfficeMath,
        'w:recipients': WRecipients,
        'w:txbxContent': WTextBoxContent,
        'w:comments': WComments,
        'w:footnotes': WFootnotes,
        'w:endnotes': WEndnotes,
        'w:hdr': WHeader,
        'w:ftr': WFooter,
        'w:settings': WSettings,
        'w:webSettings': WWebSettings,
        'w:fonts': WFonts,
        'w:numbering': WNumbering,
        'w:styles': WStyles,
        'w:document': WDocument,
        'w:glossaryDocument': WGlossaryDocument,
        'w15:color': W15Color,
        'w15:dataBinding': W15DataBinding,
        'w15:appearance': W15Appearance,
        'w15:commentsEx': W15CommentsEx,
        'w15:people': W15People,
        'w15:repeatingSection': W15SdtRepeatedSection,
        'w15:repeatingSectionItem': W15SdtRepeatedSectionItem,
        'w15:chartTrackingRefBased': W15ChartTrackingRefBased,
        'w15:collapsed': W15DefaultCollapsed,
        'w15:docId': W15PersistentDocumentId,
        'w15:footnoteColumns': W15FootnoteColumns,
        'w15:webExtensionLinked': W15WebExtensionLinked,
        'w15:webExtensionCreated': W15WebExtensionCreated,
        'w14:contentPart': W14ContentPart,
        'w14:docId': W14DocumentId,
        'w14:conflictMode': W14ConflictMode,
        'w14:customXmlConflictInsRangeStart': W14CustomXmlConflictInsertionRangeStart,
        'w14:customXmlConflictInsRangeEnd': W14CustomXmlConflictInsertionRangeEnd,
        'w14:customXmlConflictDelRangeStart': W14CustomXmlConflictDeletionRangeStart,
        'w14:customXmlConflictDelRangeEnd': W14CustomXmlConflictDeletionRangeEnd,
        'w14:discardImageEditingData': W14DiscardImageEditingData,
        'w14:defaultImageDpi': W14DefaultImageDpi,
        'w14:entityPicker': W14EntityPickerEmpty,
        'w14:checkbox': W14SdtContentCheckBox,
        'v:shape': VShape,
        'v:shapetype': VShapetype,
        'v:group': VGroup,
        'v:background': VBackground,
        'v:fill': VFill,
        'v:formulas': VFormulas,
        'v:handles': VShapeHandles,
        'v:imagedata': VImageData,
        'v:path': VPath,
        'v:textbox': VTextBox,
        'v:shadow': VShadow,
        'v:stroke': VStroke,
        'v:textpath': VTextPath,
        'v:arc': VArc,
        'v:curve': VCurve,
        'v:image': VImageFile,
        'v:line': VLine,
        'v:oval': VOval,
        'v:polyline': VPolyLine,
        'v:rect': VRectangle,
        'v:roundrect': VRoundRectangle,
        'o:shapedefaults': OShapeDefaults,
        'o:shapelayout': OShapeLayout,
        'o:signatureline': OSignatureLine,
        'o:ink': OInk,
        'o:diagram': ODiagram,
        'o:skew': OSkew,
        'o:extrusion': OExtrusion,
        'o:callout': OCallout,
        'o:lock': OLock,
        'o:OLEObject': OOleObject,
        'o:complex': OComplex,
        'o:left': OLeftStroke,
        'o:top': OTopStroke,
        'o:right': ORightStroke,
        'o:bottom': OBottomStroke,
        'o:column': OColumnStroke,
        'o:clippath': OClipPath,
        'o:fill': OFillExtendedProperties,
        'w10:bordertop': W10TopBorder,
        'w10:borderleft': W10LeftBorder,
        'w10:borderright': W10RightBorder,
        'w10:borderbottom': W10BottomBorder,
        'w10:wrap': W10TextWrap,
        'w10:anchorlock': W10AnchorLock,
        'xvml:ClientData': XvmlClientData,
        'pvml:iscomment': PvmlInkAnnotationFlag,
        'pvml:textdata': PvmlTextData,
        'wpc:wpc': WpcWordprocessingCanvas,
        'wpg:wgp': WpgWordprocessingGroup,
        'wps:wsp': WpsWordprocessingShape,
        'sle:slicer': SleSlicer,
        'cs:colorStyle': CsColorStyle,
        'cs:chartStyle': CsChartStyle,
        'we:webextension': WeWebExtension,
        'we:webextensionref': WeWebExtensionReference,
        'tsle:timeslicer': TsleTimeSlicer,
    };
    GraphicData._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    GraphicFrameLocks._C = {
        'a:extLst': ExtensionList,
    };
    GraphicFrameLocks._D = {
        ':noGrp': new OxmlAttr(':noGrp', OxmlType.BooleanValue),
        ':noDrilldown': new OxmlAttr(':noDrilldown', OxmlType.BooleanValue),
        ':noSelect': new OxmlAttr(':noSelect', OxmlType.BooleanValue),
        ':noChangeAspect': new OxmlAttr(':noChangeAspect', OxmlType.BooleanValue),
        ':noMove': new OxmlAttr(':noMove', OxmlType.BooleanValue),
        ':noResize': new OxmlAttr(':noResize', OxmlType.BooleanValue),
    };
    ConnectionType._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
        ':idx': new OxmlAttr(':idx', OxmlType.UInt32Value),
    };
    ConnectionShapeLocks._C = {
        'a:extLst': ConnectorLockingExtensionList,
    };
    ConnectionShapeLocks._D = {
        ':noGrp': new OxmlAttr(':noGrp', OxmlType.BooleanValue),
        ':noSelect': new OxmlAttr(':noSelect', OxmlType.BooleanValue),
        ':noRot': new OxmlAttr(':noRot', OxmlType.BooleanValue),
        ':noChangeAspect': new OxmlAttr(':noChangeAspect', OxmlType.BooleanValue),
        ':noMove': new OxmlAttr(':noMove', OxmlType.BooleanValue),
        ':noResize': new OxmlAttr(':noResize', OxmlType.BooleanValue),
        ':noEditPoints': new OxmlAttr(':noEditPoints', OxmlType.BooleanValue),
        ':noAdjustHandles': new OxmlAttr(':noAdjustHandles', OxmlType.BooleanValue),
        ':noChangeArrowheads': new OxmlAttr(':noChangeArrowheads', OxmlType.BooleanValue),
        ':noChangeShapeType': new OxmlAttr(':noChangeShapeType', OxmlType.BooleanValue),
    };
    ShapeLocks._C = {
        'a:extLst': ExtensionList,
    };
    ShapeLocks._D = {
        ':noGrp': new OxmlAttr(':noGrp', OxmlType.BooleanValue),
        ':noSelect': new OxmlAttr(':noSelect', OxmlType.BooleanValue),
        ':noRot': new OxmlAttr(':noRot', OxmlType.BooleanValue),
        ':noChangeAspect': new OxmlAttr(':noChangeAspect', OxmlType.BooleanValue),
        ':noMove': new OxmlAttr(':noMove', OxmlType.BooleanValue),
        ':noResize': new OxmlAttr(':noResize', OxmlType.BooleanValue),
        ':noEditPoints': new OxmlAttr(':noEditPoints', OxmlType.BooleanValue),
        ':noAdjustHandles': new OxmlAttr(':noAdjustHandles', OxmlType.BooleanValue),
        ':noChangeArrowheads': new OxmlAttr(':noChangeArrowheads', OxmlType.BooleanValue),
        ':noChangeShapeType': new OxmlAttr(':noChangeShapeType', OxmlType.BooleanValue),
        ':noTextEdit': new OxmlAttr(':noTextEdit', OxmlType.BooleanValue),
    };
    PositiveSize2DType._D = {
        ':cx': new OxmlAttr(':cx', OxmlType.Int64Value),
        ':cy': new OxmlAttr(':cy', OxmlType.Int64Value),
    };
    Point2DType._D = {
        ':x': new OxmlAttr(':x', OxmlType.Int64Value),
        ':y': new OxmlAttr(':y', OxmlType.Int64Value),
    };
    RatioType._D = {
        ':n': new OxmlAttr(':n', OxmlType.Int32Value),
        ':d': new OxmlAttr(':d', OxmlType.Int32Value),
    };
    Color2Type._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:prstClr': PresetColor,
    };
    FollowedHyperlinkColor._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:prstClr': PresetColor,
    };
    Hyperlink._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:prstClr': PresetColor,
    };
    Accent6Color._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:prstClr': PresetColor,
    };
    Accent5Color._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:prstClr': PresetColor,
    };
    Accent4Color._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:prstClr': PresetColor,
    };
    Accent3Color._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:prstClr': PresetColor,
    };
    Accent2Color._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:prstClr': PresetColor,
    };
    Accent1Color._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:prstClr': PresetColor,
    };
    Light2Color._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:prstClr': PresetColor,
    };
    Dark2Color._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:prstClr': PresetColor,
    };
    Light1Color._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:prstClr': PresetColor,
    };
    Dark1Color._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:prstClr': PresetColor,
    };
    FormatScheme._C = {
        'a:fillStyleLst': FillStyleList,
        'a:lnStyleLst': LineStyleList,
        'a:effectStyleLst': EffectStyleList,
        'a:bgFillStyleLst': BackgroundFillStyleList,
    };
    FormatScheme._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    FontScheme._C = {
        'a:majorFont': MajorFont,
        'a:minorFont': MinorFont,
        'a:extLst': ExtensionList,
    };
    FontScheme._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    ColorScheme._C = {
        'a:dk1': Dark1Color,
        'a:lt1': Light1Color,
        'a:dk2': Dark2Color,
        'a:lt2': Light2Color,
        'a:accent1': Accent1Color,
        'a:accent2': Accent2Color,
        'a:accent3': Accent3Color,
        'a:accent4': Accent4Color,
        'a:accent5': Accent5Color,
        'a:accent6': Accent6Color,
        'a:hlink': Hyperlink,
        'a:folHlink': FollowedHyperlinkColor,
        'a:extLst': ExtensionList,
    };
    ColorScheme._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    BackgroundFillStyleList._C = {
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:blipFill': BlipFill,
        'a:pattFill': PatternFill,
        'a:grpFill': GroupFill,
    };
    EffectStyleList._C = {
        'a:effectStyle': EffectStyle,
    };
    LineStyleList._C = {
        'a:ln': Outline,
    };
    FillStyleList._C = {
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:blipFill': BlipFill,
        'a:pattFill': PatternFill,
        'a:grpFill': GroupFill,
    };
    EffectStyle._C = {
        'a:effectLst': EffectList,
        'a:effectDag': EffectDag,
        'a:scene3d': Scene3DType,
        'a:sp3d': Shape3DType,
    };
    Scene3DType._C = {
        'a:camera': Camera,
        'a:lightRig': LightRig,
        'a:backdrop': Backdrop,
        'a:extLst': ExtensionList,
    };
    SupplementalFont._D = {
        ':script': new OxmlAttr(':script', OxmlType.StringValue),
        ':typeface': new OxmlAttr(':typeface', OxmlType.StringValue),
    };
    CustomColor._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    CustomColor._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    AudioCDTimeType._D = {
        ':track': new OxmlAttr(':track', OxmlType.ByteValue),
        ':time': new OxmlAttr(':time', OxmlType.UInt32Value),
    };
    ExtensionList._C = {
        'a:ext': Extension,
    };
    TableStyleList._C = {
        'a:tblStyle': TableStyleEntry,
    };
    TableStyleList._D = {
        ':def': new OxmlAttr(':def', OxmlType.StringValue),
    };
    Table._C = {
        'a:tblPr': TableProperties,
        'a:tblGrid': TableGrid,
        'a:tr': TableRow,
    };
    ThemeOverride._C = {
        'a:clrScheme': ColorScheme,
        'a:fontScheme': FontScheme,
        'a:fmtScheme': FormatScheme,
    };
    Theme._C = {
        'a:themeElements': ThemeElements,
        'a:objectDefaults': ObjectDefaults,
        'a:extraClrSchemeLst': ExtraColorSchemeList,
        'a:custClrLst': CustomColorList,
        'a:extLst': OfficeStyleSheetExtensionList,
    };
    Theme._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        'thm15:id': new OxmlAttr('thm15:id', OxmlType.StringValue),
    };
    Blip._C = {
        'a:alphaBiLevel': AlphaBiLevel,
        'a:alphaCeiling': AlphaCeiling,
        'a:alphaFloor': AlphaFloor,
        'a:alphaInv': AlphaInverse,
        'a:alphaMod': AlphaModulationEffect,
        'a:alphaModFix': AlphaModulationFixed,
        'a:alphaRepl': AlphaReplace,
        'a:biLevel': BiLevel,
        'a:blur': Blur,
        'a:clrChange': ColorChange,
        'a:clrRepl': ColorReplacement,
        'a:duotone': Duotone,
        'a:fillOverlay': FillOverlay,
        'a:grayscl': Grayscale,
        'a:hsl': Hsl,
        'a:lum': LuminanceEffect,
        'a:tint': TintEffect,
        'a:extLst': BlipExtensionList,
    };
    Blip._D = {
        'r:embed': new OxmlAttr('r:embed', OxmlType.StringValue),
        'r:link': new OxmlAttr('r:link', OxmlType.StringValue),
        ':cstate': new OxmlAttr(':cstate', OxmlType.EnumValue, BlipCompressionValuesArray),
    };
    Graphic._C = {
        'a:graphicData': GraphicData,
    };
    Field._C = {
        'a:rPr': RunProperties,
        'a:pPr': ParagraphProperties,
        'a:t': Text,
    };
    Field._D = {
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
        ':type': new OxmlAttr(':type', OxmlType.StringValue),
    };
    Break._C = {
        'a:rPr': RunProperties,
    };
    Run._C = {
        'a:rPr': RunProperties,
        'a:t': Text,
    };
    UnderlineFill._C = {
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:blipFill': BlipFill,
        'a:pattFill': PatternFill,
        'a:grpFill': GroupFill,
    };
    LinePropertiesType._C = {
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:pattFill': PatternFill,
        'a:prstDash': PresetDash,
        'a:custDash': CustomDash,
        'a:round': Round,
        'a:bevel': LineJoinBevel,
        'a:miter': Miter,
        'a:headEnd': HeadEnd,
        'a:tailEnd': TailEnd,
        'a:extLst': LinePropertiesExtensionList,
    };
    LinePropertiesType._D = {
        ':w': new OxmlAttr(':w', OxmlType.Int32Value),
        ':cap': new OxmlAttr(':cap', OxmlType.EnumValue, LineCapValuesArray),
        ':cmpd': new OxmlAttr(':cmpd', OxmlType.EnumValue, CompoundLineValuesArray),
        ':algn': new OxmlAttr(':algn', OxmlType.EnumValue, PenAlignmentValuesArray),
    };
    BottomLeftToTopRightBorderLineProperties._C = {
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:pattFill': PatternFill,
        'a:prstDash': PresetDash,
        'a:custDash': CustomDash,
        'a:round': Round,
        'a:bevel': LineJoinBevel,
        'a:miter': Miter,
        'a:headEnd': HeadEnd,
        'a:tailEnd': TailEnd,
        'a:extLst': LinePropertiesExtensionList,
    };
    TopLeftToBottomRightBorderLineProperties._C = {
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:pattFill': PatternFill,
        'a:prstDash': PresetDash,
        'a:custDash': CustomDash,
        'a:round': Round,
        'a:bevel': LineJoinBevel,
        'a:miter': Miter,
        'a:headEnd': HeadEnd,
        'a:tailEnd': TailEnd,
        'a:extLst': LinePropertiesExtensionList,
    };
    BottomBorderLineProperties._C = {
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:pattFill': PatternFill,
        'a:prstDash': PresetDash,
        'a:custDash': CustomDash,
        'a:round': Round,
        'a:bevel': LineJoinBevel,
        'a:miter': Miter,
        'a:headEnd': HeadEnd,
        'a:tailEnd': TailEnd,
        'a:extLst': LinePropertiesExtensionList,
    };
    TopBorderLineProperties._C = {
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:pattFill': PatternFill,
        'a:prstDash': PresetDash,
        'a:custDash': CustomDash,
        'a:round': Round,
        'a:bevel': LineJoinBevel,
        'a:miter': Miter,
        'a:headEnd': HeadEnd,
        'a:tailEnd': TailEnd,
        'a:extLst': LinePropertiesExtensionList,
    };
    RightBorderLineProperties._C = {
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:pattFill': PatternFill,
        'a:prstDash': PresetDash,
        'a:custDash': CustomDash,
        'a:round': Round,
        'a:bevel': LineJoinBevel,
        'a:miter': Miter,
        'a:headEnd': HeadEnd,
        'a:tailEnd': TailEnd,
        'a:extLst': LinePropertiesExtensionList,
    };
    LeftBorderLineProperties._C = {
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:pattFill': PatternFill,
        'a:prstDash': PresetDash,
        'a:custDash': CustomDash,
        'a:round': Round,
        'a:bevel': LineJoinBevel,
        'a:miter': Miter,
        'a:headEnd': HeadEnd,
        'a:tailEnd': TailEnd,
        'a:extLst': LinePropertiesExtensionList,
    };
    Outline._C = {
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:pattFill': PatternFill,
        'a:prstDash': PresetDash,
        'a:custDash': CustomDash,
        'a:round': Round,
        'a:bevel': LineJoinBevel,
        'a:miter': Miter,
        'a:headEnd': HeadEnd,
        'a:tailEnd': TailEnd,
        'a:extLst': LinePropertiesExtensionList,
    };
    Underline._C = {
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:pattFill': PatternFill,
        'a:prstDash': PresetDash,
        'a:custDash': CustomDash,
        'a:round': Round,
        'a:bevel': LineJoinBevel,
        'a:miter': Miter,
        'a:headEnd': HeadEnd,
        'a:tailEnd': TailEnd,
        'a:extLst': LinePropertiesExtensionList,
    };
    PictureBullet._C = {
        'a:blip': Blip,
    };
    CharacterBullet._D = {
        ':char': new OxmlAttr(':char', OxmlType.StringValue),
    };
    AutoNumberedBullet._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, TextAutoNumberSchemeValuesArray),
        ':startAt': new OxmlAttr(':startAt', OxmlType.Int32Value),
    };
    TextFontType._D = {
        ':typeface': new OxmlAttr(':typeface', OxmlType.StringValue),
        ':panose': new OxmlAttr(':panose', OxmlType.HexBinaryValue),
        ':pitchFamily': new OxmlAttr(':pitchFamily', OxmlType.SByteValue),
        ':charset': new OxmlAttr(':charset', OxmlType.SByteValue),
    };
    BulletSizePoints._D = {
        ':val': new OxmlAttr(':val', OxmlType.Int32Value),
    };
    BulletSizePercentage._D = {
        ':val': new OxmlAttr(':val', OxmlType.Int32Value),
    };
    ColorType._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    Highlight._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    BackgroundColor._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    ForegroundColor._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    ColorTo._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    ColorFrom._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    ContourColor._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    ExtrusionColor._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    BulletColor._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    NormalAutoFit._D = {
        ':fontScale': new OxmlAttr(':fontScale', OxmlType.Int32Value),
        ':lnSpcReduction': new OxmlAttr(':lnSpcReduction', OxmlType.Int32Value),
    };
    FontReference._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    FontReference._D = {
        ':idx': new OxmlAttr(':idx', OxmlType.EnumValue, FontCollectionIndexValuesArray),
    };
    FontCollectionType._C = {
        'a:latin': LatinFont,
        'a:ea': EastAsianFont,
        'a:cs': ComplexScriptFont,
        'a:font': SupplementalFont,
        'a:extLst': ExtensionList,
    };
    MinorFont._C = {
        'a:latin': LatinFont,
        'a:ea': EastAsianFont,
        'a:cs': ComplexScriptFont,
        'a:font': SupplementalFont,
        'a:extLst': ExtensionList,
    };
    MajorFont._C = {
        'a:latin': LatinFont,
        'a:ea': EastAsianFont,
        'a:cs': ComplexScriptFont,
        'a:font': SupplementalFont,
        'a:extLst': ExtensionList,
    };
    Fonts._C = {
        'a:latin': LatinFont,
        'a:ea': EastAsianFont,
        'a:cs': ComplexScriptFont,
        'a:font': SupplementalFont,
        'a:extLst': ExtensionList,
    };
    EffectPropertiesType._C = {
        'a:effectLst': EffectList,
        'a:effectDag': EffectDag,
    };
    StyleMatrixReferenceType._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    StyleMatrixReferenceType._D = {
        ':idx': new OxmlAttr(':idx', OxmlType.UInt32Value),
    };
    LineReference._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    EffectReference._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    FillReference._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    FillProperties._C = {
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:blipFill': BlipFill,
        'a:pattFill': PatternFill,
        'a:grpFill': GroupFill,
    };
    CustomDash._C = {
        'a:ds': DashStop,
    };
    PresetDash._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, PresetLineDashValuesArray),
    };
    Miter._D = {
        ':lim': new OxmlAttr(':lim', OxmlType.Int32Value),
    };
    PresetTextWrap._C = {
        'a:avLst': AdjustValueList,
    };
    PresetTextWrap._D = {
        ':prst': new OxmlAttr(':prst', OxmlType.EnumValue, TextShapeValuesArray),
    };
    PresetGeometry._C = {
        'a:avLst': AdjustValueList,
    };
    PresetGeometry._D = {
        ':prst': new OxmlAttr(':prst', OxmlType.EnumValue, ShapeTypeValuesArray),
    };
    CustomGeometry._C = {
        'a:avLst': AdjustValueList,
        'a:gdLst': ShapeGuideList,
        'a:ahLst': AdjustHandleList,
        'a:cxnLst': ConnectionSiteList,
        'a:rect': Rectangle,
        'a:pathLst': PathList,
    };
    EffectList._C = {
        'a:blur': Blur,
        'a:fillOverlay': FillOverlay,
        'a:glow': Glow,
        'a:innerShdw': InnerShadow,
        'a:outerShdw': OuterShadow,
        'a:prstShdw': PresetShadow,
        'a:reflection': Reflection,
        'a:softEdge': SoftEdge,
    };
    TransformEffect._D = {
        ':sx': new OxmlAttr(':sx', OxmlType.Int32Value),
        ':sy': new OxmlAttr(':sy', OxmlType.Int32Value),
        ':kx': new OxmlAttr(':kx', OxmlType.Int32Value),
        ':ky': new OxmlAttr(':ky', OxmlType.Int32Value),
        ':tx': new OxmlAttr(':tx', OxmlType.Int64Value),
        ':ty': new OxmlAttr(':ty', OxmlType.Int64Value),
    };
    TintEffect._D = {
        ':hue': new OxmlAttr(':hue', OxmlType.Int32Value),
        ':amt': new OxmlAttr(':amt', OxmlType.Int32Value),
    };
    SoftEdge._D = {
        ':rad': new OxmlAttr(':rad', OxmlType.Int64Value),
    };
    RelativeOffset._D = {
        ':tx': new OxmlAttr(':tx', OxmlType.Int32Value),
        ':ty': new OxmlAttr(':ty', OxmlType.Int32Value),
    };
    Reflection._D = {
        ':blurRad': new OxmlAttr(':blurRad', OxmlType.Int64Value),
        ':stA': new OxmlAttr(':stA', OxmlType.Int32Value),
        ':stPos': new OxmlAttr(':stPos', OxmlType.Int32Value),
        ':endA': new OxmlAttr(':endA', OxmlType.Int32Value),
        ':endPos': new OxmlAttr(':endPos', OxmlType.Int32Value),
        ':dist': new OxmlAttr(':dist', OxmlType.Int64Value),
        ':dir': new OxmlAttr(':dir', OxmlType.Int32Value),
        ':fadeDir': new OxmlAttr(':fadeDir', OxmlType.Int32Value),
        ':sx': new OxmlAttr(':sx', OxmlType.Int32Value),
        ':sy': new OxmlAttr(':sy', OxmlType.Int32Value),
        ':kx': new OxmlAttr(':kx', OxmlType.Int32Value),
        ':ky': new OxmlAttr(':ky', OxmlType.Int32Value),
        ':algn': new OxmlAttr(':algn', OxmlType.EnumValue, RectangleAlignmentValuesArray),
        ':rotWithShape': new OxmlAttr(':rotWithShape', OxmlType.BooleanValue),
    };
    PresetShadow._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    PresetShadow._D = {
        ':prst': new OxmlAttr(':prst', OxmlType.EnumValue, PresetShadowValuesArray),
        ':dist': new OxmlAttr(':dist', OxmlType.Int64Value),
        ':dir': new OxmlAttr(':dir', OxmlType.Int32Value),
    };
    OuterShadow._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    OuterShadow._D = {
        ':blurRad': new OxmlAttr(':blurRad', OxmlType.Int64Value),
        ':dist': new OxmlAttr(':dist', OxmlType.Int64Value),
        ':dir': new OxmlAttr(':dir', OxmlType.Int32Value),
        ':sx': new OxmlAttr(':sx', OxmlType.Int32Value),
        ':sy': new OxmlAttr(':sy', OxmlType.Int32Value),
        ':kx': new OxmlAttr(':kx', OxmlType.Int32Value),
        ':ky': new OxmlAttr(':ky', OxmlType.Int32Value),
        ':algn': new OxmlAttr(':algn', OxmlType.EnumValue, RectangleAlignmentValuesArray),
        ':rotWithShape': new OxmlAttr(':rotWithShape', OxmlType.BooleanValue),
    };
    LuminanceEffect._D = {
        ':bright': new OxmlAttr(':bright', OxmlType.Int32Value),
        ':contrast': new OxmlAttr(':contrast', OxmlType.Int32Value),
    };
    InnerShadow._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    InnerShadow._D = {
        ':blurRad': new OxmlAttr(':blurRad', OxmlType.Int64Value),
        ':dist': new OxmlAttr(':dist', OxmlType.Int64Value),
        ':dir': new OxmlAttr(':dir', OxmlType.Int32Value),
    };
    Hsl._D = {
        ':hue': new OxmlAttr(':hue', OxmlType.Int32Value),
        ':sat': new OxmlAttr(':sat', OxmlType.Int32Value),
        ':lum': new OxmlAttr(':lum', OxmlType.Int32Value),
    };
    Glow._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    Glow._D = {
        ':rad': new OxmlAttr(':rad', OxmlType.Int64Value),
    };
    FillOverlay._C = {
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:blipFill': BlipFill,
        'a:pattFill': PatternFill,
        'a:grpFill': GroupFill,
    };
    FillOverlay._D = {
        ':blend': new OxmlAttr(':blend', OxmlType.EnumValue, BlendModeValuesArray),
    };
    Fill._C = {
        'a:noFill': NoFill,
        'a:solidFill': SolidFill,
        'a:gradFill': GradientFill,
        'a:blipFill': BlipFill,
        'a:pattFill': PatternFill,
        'a:grpFill': GroupFill,
    };
    Duotone._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    ColorReplacement._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    ColorChange._C = {
        'a:clrFrom': ColorFrom,
        'a:clrTo': ColorTo,
    };
    ColorChange._D = {
        ':useA': new OxmlAttr(':useA', OxmlType.BooleanValue),
    };
    Blur._D = {
        ':rad': new OxmlAttr(':rad', OxmlType.Int64Value),
        ':grow': new OxmlAttr(':grow', OxmlType.BooleanValue),
    };
    Blend._C = {
        'a:cont': EffectContainer,
    };
    Blend._D = {
        ':blend': new OxmlAttr(':blend', OxmlType.EnumValue, BlendModeValuesArray),
    };
    BiLevel._D = {
        ':thresh': new OxmlAttr(':thresh', OxmlType.Int32Value),
    };
    AlphaReplace._D = {
        ':a': new OxmlAttr(':a', OxmlType.Int32Value),
    };
    AlphaOutset._D = {
        ':rad': new OxmlAttr(':rad', OxmlType.Int64Value),
    };
    AlphaModulationFixed._D = {
        ':amt': new OxmlAttr(':amt', OxmlType.Int32Value),
    };
    AlphaModulationEffect._C = {
        'a:cont': EffectContainer,
    };
    AlphaInverse._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    AlphaBiLevel._D = {
        ':thresh': new OxmlAttr(':thresh', OxmlType.Int32Value),
    };
    Effect._D = {
        ':ref': new OxmlAttr(':ref', OxmlType.StringValue),
    };
    EffectContainerType._C = {
        'a:cont': EffectContainer,
        'a:effect': Effect,
        'a:alphaBiLevel': AlphaBiLevel,
        'a:alphaCeiling': AlphaCeiling,
        'a:alphaFloor': AlphaFloor,
        'a:alphaInv': AlphaInverse,
        'a:alphaMod': AlphaModulationEffect,
        'a:alphaModFix': AlphaModulationFixed,
        'a:alphaOutset': AlphaOutset,
        'a:alphaRepl': AlphaReplace,
        'a:biLevel': BiLevel,
        'a:blend': Blend,
        'a:blur': Blur,
        'a:clrChange': ColorChange,
        'a:clrRepl': ColorReplacement,
        'a:duotone': Duotone,
        'a:fill': Fill,
        'a:fillOverlay': FillOverlay,
        'a:glow': Glow,
        'a:grayscl': Grayscale,
        'a:hsl': Hsl,
        'a:innerShdw': InnerShadow,
        'a:lum': LuminanceEffect,
        'a:outerShdw': OuterShadow,
        'a:prstShdw': PresetShadow,
        'a:reflection': Reflection,
        'a:relOff': RelativeOffset,
        'a:softEdge': SoftEdge,
        'a:tint': TintEffect,
        'a:xfrm': TransformEffect,
    };
    EffectContainerType._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, EffectContainerValuesArray),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
    };
    EffectDag._C = {
        'a:cont': EffectContainer,
        'a:effect': Effect,
        'a:alphaBiLevel': AlphaBiLevel,
        'a:alphaCeiling': AlphaCeiling,
        'a:alphaFloor': AlphaFloor,
        'a:alphaInv': AlphaInverse,
        'a:alphaMod': AlphaModulationEffect,
        'a:alphaModFix': AlphaModulationFixed,
        'a:alphaOutset': AlphaOutset,
        'a:alphaRepl': AlphaReplace,
        'a:biLevel': BiLevel,
        'a:blend': Blend,
        'a:blur': Blur,
        'a:clrChange': ColorChange,
        'a:clrRepl': ColorReplacement,
        'a:duotone': Duotone,
        'a:fill': Fill,
        'a:fillOverlay': FillOverlay,
        'a:glow': Glow,
        'a:grayscl': Grayscale,
        'a:hsl': Hsl,
        'a:innerShdw': InnerShadow,
        'a:lum': LuminanceEffect,
        'a:outerShdw': OuterShadow,
        'a:prstShdw': PresetShadow,
        'a:reflection': Reflection,
        'a:relOff': RelativeOffset,
        'a:softEdge': SoftEdge,
        'a:tint': TintEffect,
        'a:xfrm': TransformEffect,
    };
    EffectContainer._C = {
        'a:cont': EffectContainer,
        'a:effect': Effect,
        'a:alphaBiLevel': AlphaBiLevel,
        'a:alphaCeiling': AlphaCeiling,
        'a:alphaFloor': AlphaFloor,
        'a:alphaInv': AlphaInverse,
        'a:alphaMod': AlphaModulationEffect,
        'a:alphaModFix': AlphaModulationFixed,
        'a:alphaOutset': AlphaOutset,
        'a:alphaRepl': AlphaReplace,
        'a:biLevel': BiLevel,
        'a:blend': Blend,
        'a:blur': Blur,
        'a:clrChange': ColorChange,
        'a:clrRepl': ColorReplacement,
        'a:duotone': Duotone,
        'a:fill': Fill,
        'a:fillOverlay': FillOverlay,
        'a:glow': Glow,
        'a:grayscl': Grayscale,
        'a:hsl': Hsl,
        'a:innerShdw': InnerShadow,
        'a:lum': LuminanceEffect,
        'a:outerShdw': OuterShadow,
        'a:prstShdw': PresetShadow,
        'a:reflection': Reflection,
        'a:relOff': RelativeOffset,
        'a:softEdge': SoftEdge,
        'a:tint': TintEffect,
        'a:xfrm': TransformEffect,
    };
    PatternFill._C = {
        'a:fgClr': ForegroundColor,
        'a:bgClr': BackgroundColor,
    };
    PatternFill._D = {
        ':prst': new OxmlAttr(':prst', OxmlType.EnumValue, PresetPatternValuesArray),
    };
    BlipFill._C = {
        'a:blip': Blip,
        'a:srcRect': SourceRectangle,
        'a:tile': Tile,
        'a:stretch': Stretch,
    };
    BlipFill._D = {
        ':dpi': new OxmlAttr(':dpi', OxmlType.UInt32Value),
        ':rotWithShape': new OxmlAttr(':rotWithShape', OxmlType.BooleanValue),
    };
    GradientFill._C = {
        'a:gsLst': GradientStopList,
        'a:lin': LinearGradientFill,
        'a:path': PathGradientFill,
        'a:tileRect': TileRectangle,
    };
    GradientFill._D = {
        ':flip': new OxmlAttr(':flip', OxmlType.EnumValue, TileFlipValuesArray),
        ':rotWithShape': new OxmlAttr(':rotWithShape', OxmlType.BooleanValue),
    };
    SolidFill._C = {
        'a:scrgbClr': RgbColorModelPercentage,
        'a:srgbClr': RgbColorModelHex,
        'a:hslClr': HslColor,
        'a:sysClr': SystemColor,
        'a:schemeClr': SchemeColor,
        'a:prstClr': PresetColor,
    };
    Stretch._C = {
        'a:fillRect': FillRectangle,
    };
    Tile._D = {
        ':tx': new OxmlAttr(':tx', OxmlType.Int64Value),
        ':ty': new OxmlAttr(':ty', OxmlType.Int64Value),
        ':sx': new OxmlAttr(':sx', OxmlType.Int32Value),
        ':sy': new OxmlAttr(':sy', OxmlType.Int32Value),
        ':flip': new OxmlAttr(':flip', OxmlType.EnumValue, TileFlipValuesArray),
        ':algn': new OxmlAttr(':algn', OxmlType.EnumValue, RectangleAlignmentValuesArray),
    };
    PathGradientFill._C = {
        'a:fillToRect': FillToRectangle,
    };
    PathGradientFill._D = {
        ':path': new OxmlAttr(':path', OxmlType.EnumValue, PathShadeValuesArray),
    };
    LinearGradientFill._D = {
        ':ang': new OxmlAttr(':ang', OxmlType.Int32Value),
        ':scaled': new OxmlAttr(':scaled', OxmlType.BooleanValue),
    };
    FlatText._D = {
        ':z': new OxmlAttr(':z', OxmlType.Int64Value),
    };
    Shape3DType._C = {
        'a:bevelT': BevelTop,
        'a:bevelB': BevelBottom,
        'a:extrusionClr': ExtrusionColor,
        'a:contourClr': ContourColor,
        'a:extLst': ExtensionList,
    };
    Shape3DType._D = {
        ':z': new OxmlAttr(':z', OxmlType.Int64Value),
        ':extrusionH': new OxmlAttr(':extrusionH', OxmlType.Int64Value),
        ':contourW': new OxmlAttr(':contourW', OxmlType.Int64Value),
        ':prstMaterial': new OxmlAttr(':prstMaterial', OxmlType.EnumValue, PresetMaterialTypeValuesArray),
    };
    PresetColor._C = {
        'a:tint': Tint,
        'a:shade': Shade,
        'a:comp': Complement,
        'a:inv': Inverse,
        'a:gray': Gray,
        'a:alpha': Alpha,
        'a:alphaOff': AlphaOffset,
        'a:alphaMod': AlphaModulation,
        'a:hue': Hue,
        'a:hueOff': HueOffset,
        'a:hueMod': HueModulation,
        'a:sat': Saturation,
        'a:satOff': SaturationOffset,
        'a:satMod': SaturationModulation,
        'a:lum': Luminance,
        'a:lumOff': LuminanceOffset,
        'a:lumMod': LuminanceModulation,
        'a:red': Red,
        'a:redOff': RedOffset,
        'a:redMod': RedModulation,
        'a:green': Green,
        'a:greenOff': GreenOffset,
        'a:greenMod': GreenModulation,
        'a:blue': Blue,
        'a:blueOff': BlueOffset,
        'a:blueMod': BlueModulation,
        'a:gamma': Gamma,
        'a:invGamma': InverseGamma,
    };
    PresetColor._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, PresetColorValuesArray),
    };
    SchemeColor._C = {
        'a:tint': Tint,
        'a:shade': Shade,
        'a:comp': Complement,
        'a:inv': Inverse,
        'a:gray': Gray,
        'a:alpha': Alpha,
        'a:alphaOff': AlphaOffset,
        'a:alphaMod': AlphaModulation,
        'a:hue': Hue,
        'a:hueOff': HueOffset,
        'a:hueMod': HueModulation,
        'a:sat': Saturation,
        'a:satOff': SaturationOffset,
        'a:satMod': SaturationModulation,
        'a:lum': Luminance,
        'a:lumOff': LuminanceOffset,
        'a:lumMod': LuminanceModulation,
        'a:red': Red,
        'a:redOff': RedOffset,
        'a:redMod': RedModulation,
        'a:green': Green,
        'a:greenOff': GreenOffset,
        'a:greenMod': GreenModulation,
        'a:blue': Blue,
        'a:blueOff': BlueOffset,
        'a:blueMod': BlueModulation,
        'a:gamma': Gamma,
        'a:invGamma': InverseGamma,
    };
    SchemeColor._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, SchemeColorValuesArray),
    };
    SystemColor._C = {
        'a:tint': Tint,
        'a:shade': Shade,
        'a:comp': Complement,
        'a:inv': Inverse,
        'a:gray': Gray,
        'a:alpha': Alpha,
        'a:alphaOff': AlphaOffset,
        'a:alphaMod': AlphaModulation,
        'a:hue': Hue,
        'a:hueOff': HueOffset,
        'a:hueMod': HueModulation,
        'a:sat': Saturation,
        'a:satOff': SaturationOffset,
        'a:satMod': SaturationModulation,
        'a:lum': Luminance,
        'a:lumOff': LuminanceOffset,
        'a:lumMod': LuminanceModulation,
        'a:red': Red,
        'a:redOff': RedOffset,
        'a:redMod': RedModulation,
        'a:green': Green,
        'a:greenOff': GreenOffset,
        'a:greenMod': GreenModulation,
        'a:blue': Blue,
        'a:blueOff': BlueOffset,
        'a:blueMod': BlueModulation,
        'a:gamma': Gamma,
        'a:invGamma': InverseGamma,
    };
    SystemColor._D = {
        ':val': new OxmlAttr(':val', OxmlType.EnumValue, SystemColorValuesArray),
        ':lastClr': new OxmlAttr(':lastClr', OxmlType.HexBinaryValue),
    };
    HslColor._C = {
        'a:tint': Tint,
        'a:shade': Shade,
        'a:comp': Complement,
        'a:inv': Inverse,
        'a:gray': Gray,
        'a:alpha': Alpha,
        'a:alphaOff': AlphaOffset,
        'a:alphaMod': AlphaModulation,
        'a:hue': Hue,
        'a:hueOff': HueOffset,
        'a:hueMod': HueModulation,
        'a:sat': Saturation,
        'a:satOff': SaturationOffset,
        'a:satMod': SaturationModulation,
        'a:lum': Luminance,
        'a:lumOff': LuminanceOffset,
        'a:lumMod': LuminanceModulation,
        'a:red': Red,
        'a:redOff': RedOffset,
        'a:redMod': RedModulation,
        'a:green': Green,
        'a:greenOff': GreenOffset,
        'a:greenMod': GreenModulation,
        'a:blue': Blue,
        'a:blueOff': BlueOffset,
        'a:blueMod': BlueModulation,
        'a:gamma': Gamma,
        'a:invGamma': InverseGamma,
    };
    HslColor._D = {
        ':hue': new OxmlAttr(':hue', OxmlType.Int32Value),
        ':sat': new OxmlAttr(':sat', OxmlType.Int32Value),
        ':lum': new OxmlAttr(':lum', OxmlType.Int32Value),
    };
    RgbColorModelHex._C = {
        'a:tint': Tint,
        'a:shade': Shade,
        'a:comp': Complement,
        'a:inv': Inverse,
        'a:gray': Gray,
        'a:alpha': Alpha,
        'a:alphaOff': AlphaOffset,
        'a:alphaMod': AlphaModulation,
        'a:hue': Hue,
        'a:hueOff': HueOffset,
        'a:hueMod': HueModulation,
        'a:sat': Saturation,
        'a:satOff': SaturationOffset,
        'a:satMod': SaturationModulation,
        'a:lum': Luminance,
        'a:lumOff': LuminanceOffset,
        'a:lumMod': LuminanceModulation,
        'a:red': Red,
        'a:redOff': RedOffset,
        'a:redMod': RedModulation,
        'a:green': Green,
        'a:greenOff': GreenOffset,
        'a:greenMod': GreenModulation,
        'a:blue': Blue,
        'a:blueOff': BlueOffset,
        'a:blueMod': BlueModulation,
        'a:gamma': Gamma,
        'a:invGamma': InverseGamma,
    };
    RgbColorModelHex._D = {
        ':val': new OxmlAttr(':val', OxmlType.HexBinaryValue),
        'a14:legacySpreadsheetColorIndex': new OxmlAttr('a14:legacySpreadsheetColorIndex', OxmlType.Int32Value),
    };
    RgbColorModelPercentage._C = {
        'a:tint': Tint,
        'a:shade': Shade,
        'a:comp': Complement,
        'a:inv': Inverse,
        'a:gray': Gray,
        'a:alpha': Alpha,
        'a:alphaOff': AlphaOffset,
        'a:alphaMod': AlphaModulation,
        'a:hue': Hue,
        'a:hueOff': HueOffset,
        'a:hueMod': HueModulation,
        'a:sat': Saturation,
        'a:satOff': SaturationOffset,
        'a:satMod': SaturationModulation,
        'a:lum': Luminance,
        'a:lumOff': LuminanceOffset,
        'a:lumMod': LuminanceModulation,
        'a:red': Red,
        'a:redOff': RedOffset,
        'a:redMod': RedModulation,
        'a:green': Green,
        'a:greenOff': GreenOffset,
        'a:greenMod': GreenModulation,
        'a:blue': Blue,
        'a:blueOff': BlueOffset,
        'a:blueMod': BlueModulation,
        'a:gamma': Gamma,
        'a:invGamma': InverseGamma,
    };
    RgbColorModelPercentage._D = {
        ':r': new OxmlAttr(':r', OxmlType.Int32Value),
        ':g': new OxmlAttr(':g', OxmlType.Int32Value),
        ':b': new OxmlAttr(':b', OxmlType.Int32Value),
    };
    Extension._D = {
        ':uri': new OxmlAttr(':uri', OxmlType.StringValue),
    };
    PercentageType._D = {
        ':val': new OxmlAttr(':val', OxmlType.Int32Value),
    };
    HueOffset._D = {
        ':val': new OxmlAttr(':val', OxmlType.Int32Value),
    };
    Hue._D = {
        ':val': new OxmlAttr(':val', OxmlType.Int32Value),
    };
    PositivePercentageType._D = {
        ':val': new OxmlAttr(':val', OxmlType.Int32Value),
    };
    AlphaOffset._D = {
        ':val': new OxmlAttr(':val', OxmlType.Int32Value),
    };
    PositiveFixedPercentageType._D = {
        ':val': new OxmlAttr(':val', OxmlType.Int32Value),
    };
    QuickTimeFromFile._C = {
        'a:extLst': ExtensionList,
    };
    QuickTimeFromFile._D = {
        'r:link': new OxmlAttr('r:link', OxmlType.StringValue),
    };
    VideoFromFile._C = {
        'a:extLst': ExtensionList,
    };
    VideoFromFile._D = {
        'r:link': new OxmlAttr('r:link', OxmlType.StringValue),
    };
    AudioFromFile._C = {
        'a:extLst': ExtensionList,
    };
    AudioFromFile._D = {
        'r:link': new OxmlAttr('r:link', OxmlType.StringValue),
    };
    EmbeddedWavAudioFileType._D = {
        'r:embed': new OxmlAttr('r:embed', OxmlType.StringValue),
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':builtIn': new OxmlAttr(':builtIn', OxmlType.BooleanValue),
    };
    AudioFromCD._C = {
        'a:st': StartTime,
        'a:end': EndTime,
        'a:extLst': ExtensionList,
    };
    return {
        prefix: 'a',
        xmlns: 'http://schemas.openxmlformats.org/drawingml/2006/main',
    };
}
