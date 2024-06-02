import { OxmlCompositeElement } from '../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../framework/OxmlLeafElement';
import { OxmlPartRootElement } from '../../framework/OxmlPartRootElement';
import { OxmlLeafTextElement } from '../../framework/OxmlLeafTextElement';
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
export declare enum FontCollectionIndexValues {
    /** Major Font. Serialized value: `major` */
    Major = "major",
    /** Minor Font. Serialized value: `minor` */
    Minor = "minor",
    /** None. Serialized value: `none` */
    None = "none"
}
export declare const FontCollectionIndexValuesArray: readonly [FontCollectionIndexValues.Major, FontCollectionIndexValues.Minor, FontCollectionIndexValues.None];
export declare enum ColorSchemeIndexValues {
    /** Dark 1. Serialized value: `dk1` */
    Dark1 = "dk1",
    /** Light 1. Serialized value: `lt1` */
    Light1 = "lt1",
    /** Dark 2. Serialized value: `dk2` */
    Dark2 = "dk2",
    /** Light 2. Serialized value: `lt2` */
    Light2 = "lt2",
    /** Accent 1. Serialized value: `accent1` */
    Accent1 = "accent1",
    /** Accent 2. Serialized value: `accent2` */
    Accent2 = "accent2",
    /** Accent 3. Serialized value: `accent3` */
    Accent3 = "accent3",
    /** Accent 4. Serialized value: `accent4` */
    Accent4 = "accent4",
    /** Accent 5. Serialized value: `accent5` */
    Accent5 = "accent5",
    /** Accent 6. Serialized value: `accent6` */
    Accent6 = "accent6",
    /** Hyperlink. Serialized value: `hlink` */
    Hyperlink = "hlink",
    /** Followed Hyperlink. Serialized value: `folHlink` */
    FollowedHyperlink = "folHlink"
}
export declare const ColorSchemeIndexValuesArray: readonly [ColorSchemeIndexValues.Dark1, ColorSchemeIndexValues.Light1, ColorSchemeIndexValues.Dark2, ColorSchemeIndexValues.Light2, ColorSchemeIndexValues.Accent1, ColorSchemeIndexValues.Accent2, ColorSchemeIndexValues.Accent3, ColorSchemeIndexValues.Accent4, ColorSchemeIndexValues.Accent5, ColorSchemeIndexValues.Accent6, ColorSchemeIndexValues.Hyperlink, ColorSchemeIndexValues.FollowedHyperlink];
export declare enum SystemColorValues {
    /** Scroll Bar System Color. Serialized value: `scrollBar` */
    ScrollBar = "scrollBar",
    /** Background System Color. Serialized value: `background` */
    Background = "background",
    /** Active Caption System Color. Serialized value: `activeCaption` */
    ActiveCaption = "activeCaption",
    /** Inactive Caption System Color. Serialized value: `inactiveCaption` */
    InactiveCaption = "inactiveCaption",
    /** Menu System Color. Serialized value: `menu` */
    Menu = "menu",
    /** Window System Color. Serialized value: `window` */
    Window = "window",
    /** Window Frame System Color. Serialized value: `windowFrame` */
    WindowFrame = "windowFrame",
    /** Menu Text System Color. Serialized value: `menuText` */
    MenuText = "menuText",
    /** Window Text System Color. Serialized value: `windowText` */
    WindowText = "windowText",
    /** Caption Text System Color. Serialized value: `captionText` */
    CaptionText = "captionText",
    /** Active Border System Color. Serialized value: `activeBorder` */
    ActiveBorder = "activeBorder",
    /** Inactive Border System Color. Serialized value: `inactiveBorder` */
    InactiveBorder = "inactiveBorder",
    /** Application Workspace System Color. Serialized value: `appWorkspace` */
    ApplicationWorkspace = "appWorkspace",
    /** Highlight System Color. Serialized value: `highlight` */
    Highlight = "highlight",
    /** Highlight Text System Color. Serialized value: `highlightText` */
    HighlightText = "highlightText",
    /** Button Face System Color. Serialized value: `btnFace` */
    ButtonFace = "btnFace",
    /** Button Shadow System Color. Serialized value: `btnShadow` */
    ButtonShadow = "btnShadow",
    /** Gray Text System Color. Serialized value: `grayText` */
    GrayText = "grayText",
    /** Button Text System Color. Serialized value: `btnText` */
    ButtonText = "btnText",
    /** Inactive Caption Text System Color. Serialized value: `inactiveCaptionText` */
    InactiveCaptionText = "inactiveCaptionText",
    /** Button Highlight System Color. Serialized value: `btnHighlight` */
    ButtonHighlight = "btnHighlight",
    /** 3D Dark System Color. Serialized value: `3dDkShadow` */
    ThreeDDarkShadow = "3dDkShadow",
    /** 3D Light System Color. Serialized value: `3dLight` */
    ThreeDLight = "3dLight",
    /** Info Text System Color. Serialized value: `infoText` */
    InfoText = "infoText",
    /** Info Back System Color. Serialized value: `infoBk` */
    InfoBack = "infoBk",
    /** Hot Light System Color. Serialized value: `hotLight` */
    HotLight = "hotLight",
    /** Gradient Active Caption System Color. Serialized value: `gradientActiveCaption` */
    GradientActiveCaption = "gradientActiveCaption",
    /** Gradient Inactive Caption System Color. Serialized value: `gradientInactiveCaption` */
    GradientInactiveCaption = "gradientInactiveCaption",
    /** Menu Highlight System Color. Serialized value: `menuHighlight` */
    MenuHighlight = "menuHighlight",
    /** Menu Bar System Color. Serialized value: `menuBar` */
    MenuBar = "menuBar"
}
export declare const SystemColorValuesArray: readonly [SystemColorValues.ScrollBar, SystemColorValues.Background, SystemColorValues.ActiveCaption, SystemColorValues.InactiveCaption, SystemColorValues.Menu, SystemColorValues.Window, SystemColorValues.WindowFrame, SystemColorValues.MenuText, SystemColorValues.WindowText, SystemColorValues.CaptionText, SystemColorValues.ActiveBorder, SystemColorValues.InactiveBorder, SystemColorValues.ApplicationWorkspace, SystemColorValues.Highlight, SystemColorValues.HighlightText, SystemColorValues.ButtonFace, SystemColorValues.ButtonShadow, SystemColorValues.GrayText, SystemColorValues.ButtonText, SystemColorValues.InactiveCaptionText, SystemColorValues.ButtonHighlight, SystemColorValues.ThreeDDarkShadow, SystemColorValues.ThreeDLight, SystemColorValues.InfoText, SystemColorValues.InfoBack, SystemColorValues.HotLight, SystemColorValues.GradientActiveCaption, SystemColorValues.GradientInactiveCaption, SystemColorValues.MenuHighlight, SystemColorValues.MenuBar];
export declare enum SchemeColorValues {
    /** Background Color 1. Serialized value: `bg1` */
    Background1 = "bg1",
    /** Text Color 1. Serialized value: `tx1` */
    Text1 = "tx1",
    /** Background Color 2. Serialized value: `bg2` */
    Background2 = "bg2",
    /** Text Color 2. Serialized value: `tx2` */
    Text2 = "tx2",
    /** Accent Color 1. Serialized value: `accent1` */
    Accent1 = "accent1",
    /** Accent Color 2. Serialized value: `accent2` */
    Accent2 = "accent2",
    /** Accent Color 3. Serialized value: `accent3` */
    Accent3 = "accent3",
    /** Accent Color 4. Serialized value: `accent4` */
    Accent4 = "accent4",
    /** Accent Color 5. Serialized value: `accent5` */
    Accent5 = "accent5",
    /** Accent Color 6. Serialized value: `accent6` */
    Accent6 = "accent6",
    /** Hyperlink Color. Serialized value: `hlink` */
    Hyperlink = "hlink",
    /** Followed Hyperlink Color. Serialized value: `folHlink` */
    FollowedHyperlink = "folHlink",
    /** Style Color. Serialized value: `phClr` */
    PhColor = "phClr",
    /** Dark Color 1. Serialized value: `dk1` */
    Dark1 = "dk1",
    /** Light Color 1. Serialized value: `lt1` */
    Light1 = "lt1",
    /** Dark Color 2. Serialized value: `dk2` */
    Dark2 = "dk2",
    /** Light Color 2. Serialized value: `lt2` */
    Light2 = "lt2"
}
export declare const SchemeColorValuesArray: readonly [SchemeColorValues.Background1, SchemeColorValues.Text1, SchemeColorValues.Background2, SchemeColorValues.Text2, SchemeColorValues.Accent1, SchemeColorValues.Accent2, SchemeColorValues.Accent3, SchemeColorValues.Accent4, SchemeColorValues.Accent5, SchemeColorValues.Accent6, SchemeColorValues.Hyperlink, SchemeColorValues.FollowedHyperlink, SchemeColorValues.PhColor, SchemeColorValues.Dark1, SchemeColorValues.Light1, SchemeColorValues.Dark2, SchemeColorValues.Light2];
export declare enum RectangleAlignmentValues {
    /** Rectangle Alignment Enum ( Top Left ). Serialized value: `tl` */
    TopLeft = "tl",
    /** Rectangle Alignment Enum ( Top ). Serialized value: `t` */
    Top = "t",
    /** Rectangle Alignment Enum ( Top Right ). Serialized value: `tr` */
    TopRight = "tr",
    /** Rectangle Alignment Enum ( Left ). Serialized value: `l` */
    Left = "l",
    /** Rectangle Alignment Enum ( Center ). Serialized value: `ctr` */
    Center = "ctr",
    /** Rectangle Alignment Enum ( Right ). Serialized value: `r` */
    Right = "r",
    /** Rectangle Alignment Enum ( Bottom Left ). Serialized value: `bl` */
    BottomLeft = "bl",
    /** Rectangle Alignment Enum ( Bottom ). Serialized value: `b` */
    Bottom = "b",
    /** Rectangle Alignment Enum ( Bottom Right ). Serialized value: `br` */
    BottomRight = "br"
}
export declare const RectangleAlignmentValuesArray: readonly [RectangleAlignmentValues.TopLeft, RectangleAlignmentValues.Top, RectangleAlignmentValues.TopRight, RectangleAlignmentValues.Left, RectangleAlignmentValues.Center, RectangleAlignmentValues.Right, RectangleAlignmentValues.BottomLeft, RectangleAlignmentValues.Bottom, RectangleAlignmentValues.BottomRight];
export declare enum BlackWhiteModeValues {
    /** Color. Serialized value: `clr` */
    Color = "clr",
    /** Automatic. Serialized value: `auto` */
    Auto = "auto",
    /** Gray. Serialized value: `gray` */
    Gray = "gray",
    /** Light Gray. Serialized value: `ltGray` */
    LightGray = "ltGray",
    /** Inverse Gray. Serialized value: `invGray` */
    InvGray = "invGray",
    /** Gray and White. Serialized value: `grayWhite` */
    GrayWhite = "grayWhite",
    /** Black and Gray. Serialized value: `blackGray` */
    BlackGray = "blackGray",
    /** Black and White. Serialized value: `blackWhite` */
    BlackWhite = "blackWhite",
    /** Black. Serialized value: `black` */
    Black = "black",
    /** White. Serialized value: `white` */
    White = "white",
    /** Hidden. Serialized value: `hidden` */
    Hidden = "hidden"
}
export declare const BlackWhiteModeValuesArray: readonly [BlackWhiteModeValues.Color, BlackWhiteModeValues.Auto, BlackWhiteModeValues.Gray, BlackWhiteModeValues.LightGray, BlackWhiteModeValues.InvGray, BlackWhiteModeValues.GrayWhite, BlackWhiteModeValues.BlackGray, BlackWhiteModeValues.BlackWhite, BlackWhiteModeValues.Black, BlackWhiteModeValues.White, BlackWhiteModeValues.Hidden];
export declare enum ChartBuildStepValues {
    /** Category. Serialized value: `category` */
    Category = "category",
    /** Category Points. Serialized value: `ptInCategory` */
    CategoryPoints = "ptInCategory",
    /** Series. Serialized value: `series` */
    Series = "series",
    /** Series Points. Serialized value: `ptInSeries` */
    SeriesPoints = "ptInSeries",
    /** All Points. Serialized value: `allPts` */
    AllPoints = "allPts",
    /** Grid and Legend. Serialized value: `gridLegend` */
    GridLegend = "gridLegend"
}
export declare const ChartBuildStepValuesArray: readonly [ChartBuildStepValues.Category, ChartBuildStepValues.CategoryPoints, ChartBuildStepValues.Series, ChartBuildStepValues.SeriesPoints, ChartBuildStepValues.AllPoints, ChartBuildStepValues.GridLegend];
export declare enum DiagramBuildStepValues {
    /** Shape. Serialized value: `sp` */
    Shape = "sp",
    /** Background. Serialized value: `bg` */
    Background = "bg"
}
export declare const DiagramBuildStepValuesArray: readonly [DiagramBuildStepValues.Shape, DiagramBuildStepValues.Background];
export declare enum AnimationBuildValues {
    /** Animate At Once. Serialized value: `allAtOnce` */
    AllAtOnce = "allAtOnce"
}
export declare const AnimationBuildValuesArray: readonly [AnimationBuildValues];
export declare enum AnimationDiagramOnlyBuildValues {
    /** Elements One-by-One. Serialized value: `one` */
    One = "one",
    /** Level One-by-One. Serialized value: `lvlOne` */
    LevelOne = "lvlOne",
    /** Each Level at Once. Serialized value: `lvlAtOnce` */
    LevelAtOnce = "lvlAtOnce"
}
export declare const AnimationDiagramOnlyBuildValuesArray: readonly [AnimationDiagramOnlyBuildValues.One, AnimationDiagramOnlyBuildValues.LevelOne, AnimationDiagramOnlyBuildValues.LevelAtOnce];
export declare enum AnimationChartOnlyBuildValues {
    /** Series. Serialized value: `series` */
    Series = "series",
    /** Category. Serialized value: `category` */
    Category = "category",
    /** Series Element. Serialized value: `seriesEl` */
    SeriesElement = "seriesEl",
    /** Category Element. Serialized value: `categoryEl` */
    CategoryElement = "categoryEl"
}
export declare const AnimationChartOnlyBuildValuesArray: readonly [AnimationChartOnlyBuildValues.Series, AnimationChartOnlyBuildValues.Category, AnimationChartOnlyBuildValues.SeriesElement, AnimationChartOnlyBuildValues.CategoryElement];
export declare enum PresetCameraValues {
    /** Legacy Oblique Top Left. Serialized value: `legacyObliqueTopLeft` */
    LegacyObliqueTopLeft = "legacyObliqueTopLeft",
    /** Legacy Oblique Top. Serialized value: `legacyObliqueTop` */
    LegacyObliqueTop = "legacyObliqueTop",
    /** Legacy Oblique Top Right. Serialized value: `legacyObliqueTopRight` */
    LegacyObliqueTopRight = "legacyObliqueTopRight",
    /** Legacy Oblique Left. Serialized value: `legacyObliqueLeft` */
    LegacyObliqueLeft = "legacyObliqueLeft",
    /** Legacy Oblique Front. Serialized value: `legacyObliqueFront` */
    LegacyObliqueFront = "legacyObliqueFront",
    /** Legacy Oblique Right. Serialized value: `legacyObliqueRight` */
    LegacyObliqueRight = "legacyObliqueRight",
    /** Legacy Oblique Bottom Left. Serialized value: `legacyObliqueBottomLeft` */
    LegacyObliqueBottomLeft = "legacyObliqueBottomLeft",
    /** Legacy Oblique Bottom. Serialized value: `legacyObliqueBottom` */
    LegacyObliqueBottom = "legacyObliqueBottom",
    /** Legacy Oblique Bottom Right. Serialized value: `legacyObliqueBottomRight` */
    LegacyObliqueBottomRight = "legacyObliqueBottomRight",
    /** Legacy Perspective Top Left. Serialized value: `legacyPerspectiveTopLeft` */
    LegacyPerspectiveTopLeft = "legacyPerspectiveTopLeft",
    /** Legacy Perspective Top. Serialized value: `legacyPerspectiveTop` */
    LegacyPerspectiveTop = "legacyPerspectiveTop",
    /** Legacy Perspective Top Right. Serialized value: `legacyPerspectiveTopRight` */
    LegacyPerspectiveTopRight = "legacyPerspectiveTopRight",
    /** Legacy Perspective Left. Serialized value: `legacyPerspectiveLeft` */
    LegacyPerspectiveLeft = "legacyPerspectiveLeft",
    /** Legacy Perspective Front. Serialized value: `legacyPerspectiveFront` */
    LegacyPerspectiveFront = "legacyPerspectiveFront",
    /** Legacy Perspective Right. Serialized value: `legacyPerspectiveRight` */
    LegacyPerspectiveRight = "legacyPerspectiveRight",
    /** Legacy Perspective Bottom Left. Serialized value: `legacyPerspectiveBottomLeft` */
    LegacyPerspectiveBottomLeft = "legacyPerspectiveBottomLeft",
    /** Legacy Perspective Bottom. Serialized value: `legacyPerspectiveBottom` */
    LegacyPerspectiveBottom = "legacyPerspectiveBottom",
    /** Legacy Perspective Bottom Right. Serialized value: `legacyPerspectiveBottomRight` */
    LegacyPerspectiveBottomRight = "legacyPerspectiveBottomRight",
    /** Orthographic Front. Serialized value: `orthographicFront` */
    OrthographicFront = "orthographicFront",
    /** Isometric Top Up. Serialized value: `isometricTopUp` */
    IsometricTopUp = "isometricTopUp",
    /** Isometric Top Down. Serialized value: `isometricTopDown` */
    IsometricTopDown = "isometricTopDown",
    /** Isometric Bottom Up. Serialized value: `isometricBottomUp` */
    IsometricBottomUp = "isometricBottomUp",
    /** Isometric Bottom Down. Serialized value: `isometricBottomDown` */
    IsometricBottomDown = "isometricBottomDown",
    /** Isometric Left Up. Serialized value: `isometricLeftUp` */
    IsometricLeftUp = "isometricLeftUp",
    /** Isometric Left Down. Serialized value: `isometricLeftDown` */
    IsometricLeftDown = "isometricLeftDown",
    /** Isometric Right Up. Serialized value: `isometricRightUp` */
    IsometricRightUp = "isometricRightUp",
    /** Isometric Right Down. Serialized value: `isometricRightDown` */
    IsometricRightDown = "isometricRightDown",
    /** Isometric Off Axis 1 Left. Serialized value: `isometricOffAxis1Left` */
    IsometricOffAxis1Left = "isometricOffAxis1Left",
    /** Isometric Off Axis 1 Right. Serialized value: `isometricOffAxis1Right` */
    IsometricOffAxis1Right = "isometricOffAxis1Right",
    /** Isometric Off Axis 1 Top. Serialized value: `isometricOffAxis1Top` */
    IsometricOffAxis1Top = "isometricOffAxis1Top",
    /** Isometric Off Axis 2 Left. Serialized value: `isometricOffAxis2Left` */
    IsometricOffAxis2Left = "isometricOffAxis2Left",
    /** Isometric Off Axis 2 Right. Serialized value: `isometricOffAxis2Right` */
    IsometricOffAxis2Right = "isometricOffAxis2Right",
    /** Isometric Off Axis 2 Top. Serialized value: `isometricOffAxis2Top` */
    IsometricOffAxis2Top = "isometricOffAxis2Top",
    /** Isometric Off Axis 3 Left. Serialized value: `isometricOffAxis3Left` */
    IsometricOffAxis3Left = "isometricOffAxis3Left",
    /** Isometric Off Axis 3 Right. Serialized value: `isometricOffAxis3Right` */
    IsometricOffAxis3Right = "isometricOffAxis3Right",
    /** Isometric Off Axis 3 Bottom. Serialized value: `isometricOffAxis3Bottom` */
    IsometricOffAxis3Bottom = "isometricOffAxis3Bottom",
    /** Isometric Off Axis 4 Left. Serialized value: `isometricOffAxis4Left` */
    IsometricOffAxis4Left = "isometricOffAxis4Left",
    /** Isometric Off Axis 4 Right. Serialized value: `isometricOffAxis4Right` */
    IsometricOffAxis4Right = "isometricOffAxis4Right",
    /** Isometric Off Axis 4 Bottom. Serialized value: `isometricOffAxis4Bottom` */
    IsometricOffAxis4Bottom = "isometricOffAxis4Bottom",
    /** Oblique Top Left. Serialized value: `obliqueTopLeft` */
    ObliqueTopLeft = "obliqueTopLeft",
    /** Oblique Top. Serialized value: `obliqueTop` */
    ObliqueTop = "obliqueTop",
    /** Oblique Top Right. Serialized value: `obliqueTopRight` */
    ObliqueTopRight = "obliqueTopRight",
    /** Oblique Left. Serialized value: `obliqueLeft` */
    ObliqueLeft = "obliqueLeft",
    /** Oblique Right. Serialized value: `obliqueRight` */
    ObliqueRight = "obliqueRight",
    /** Oblique Bottom Left. Serialized value: `obliqueBottomLeft` */
    ObliqueBottomLeft = "obliqueBottomLeft",
    /** Oblique Bottom. Serialized value: `obliqueBottom` */
    ObliqueBottom = "obliqueBottom",
    /** Oblique Bottom Right. Serialized value: `obliqueBottomRight` */
    ObliqueBottomRight = "obliqueBottomRight",
    /** Perspective Front. Serialized value: `perspectiveFront` */
    PerspectiveFront = "perspectiveFront",
    /** Perspective Left. Serialized value: `perspectiveLeft` */
    PerspectiveLeft = "perspectiveLeft",
    /** Perspective Right. Serialized value: `perspectiveRight` */
    PerspectiveRight = "perspectiveRight",
    /** Orthographic Above. Serialized value: `perspectiveAbove` */
    PerspectiveAbove = "perspectiveAbove",
    /** Perspective Below. Serialized value: `perspectiveBelow` */
    PerspectiveBelow = "perspectiveBelow",
    /** Perspective Above Left Facing. Serialized value: `perspectiveAboveLeftFacing` */
    PerspectiveAboveLeftFacing = "perspectiveAboveLeftFacing",
    /** Perspective Above Right Facing. Serialized value: `perspectiveAboveRightFacing` */
    PerspectiveAboveRightFacing = "perspectiveAboveRightFacing",
    /** Perspective Contrasting Left Facing. Serialized value: `perspectiveContrastingLeftFacing` */
    PerspectiveContrastingLeftFacing = "perspectiveContrastingLeftFacing",
    /** Perspective Contrasting Right Facing. Serialized value: `perspectiveContrastingRightFacing` */
    PerspectiveContrastingRightFacing = "perspectiveContrastingRightFacing",
    /** Perspective Heroic Left Facing. Serialized value: `perspectiveHeroicLeftFacing` */
    PerspectiveHeroicLeftFacing = "perspectiveHeroicLeftFacing",
    /** Perspective Heroic Right Facing. Serialized value: `perspectiveHeroicRightFacing` */
    PerspectiveHeroicRightFacing = "perspectiveHeroicRightFacing",
    /** Perspective Heroic Extreme Left Facing. Serialized value: `perspectiveHeroicExtremeLeftFacing` */
    PerspectiveHeroicExtremeLeftFacing = "perspectiveHeroicExtremeLeftFacing",
    /** Perspective Heroic Extreme Right Facing. Serialized value: `perspectiveHeroicExtremeRightFacing` */
    PerspectiveHeroicExtremeRightFacing = "perspectiveHeroicExtremeRightFacing",
    /** Perspective Relaxed. Serialized value: `perspectiveRelaxed` */
    PerspectiveRelaxed = "perspectiveRelaxed",
    /** Perspective Relaxed Moderately. Serialized value: `perspectiveRelaxedModerately` */
    PerspectiveRelaxedModerately = "perspectiveRelaxedModerately"
}
export declare const PresetCameraValuesArray: readonly [PresetCameraValues.LegacyObliqueTopLeft, PresetCameraValues.LegacyObliqueTop, PresetCameraValues.LegacyObliqueTopRight, PresetCameraValues.LegacyObliqueLeft, PresetCameraValues.LegacyObliqueFront, PresetCameraValues.LegacyObliqueRight, PresetCameraValues.LegacyObliqueBottomLeft, PresetCameraValues.LegacyObliqueBottom, PresetCameraValues.LegacyObliqueBottomRight, PresetCameraValues.LegacyPerspectiveTopLeft, PresetCameraValues.LegacyPerspectiveTop, PresetCameraValues.LegacyPerspectiveTopRight, PresetCameraValues.LegacyPerspectiveLeft, PresetCameraValues.LegacyPerspectiveFront, PresetCameraValues.LegacyPerspectiveRight, PresetCameraValues.LegacyPerspectiveBottomLeft, PresetCameraValues.LegacyPerspectiveBottom, PresetCameraValues.LegacyPerspectiveBottomRight, PresetCameraValues.OrthographicFront, PresetCameraValues.IsometricTopUp, PresetCameraValues.IsometricTopDown, PresetCameraValues.IsometricBottomUp, PresetCameraValues.IsometricBottomDown, PresetCameraValues.IsometricLeftUp, PresetCameraValues.IsometricLeftDown, PresetCameraValues.IsometricRightUp, PresetCameraValues.IsometricRightDown, PresetCameraValues.IsometricOffAxis1Left, PresetCameraValues.IsometricOffAxis1Right, PresetCameraValues.IsometricOffAxis1Top, PresetCameraValues.IsometricOffAxis2Left, PresetCameraValues.IsometricOffAxis2Right, PresetCameraValues.IsometricOffAxis2Top, PresetCameraValues.IsometricOffAxis3Left, PresetCameraValues.IsometricOffAxis3Right, PresetCameraValues.IsometricOffAxis3Bottom, PresetCameraValues.IsometricOffAxis4Left, PresetCameraValues.IsometricOffAxis4Right, PresetCameraValues.IsometricOffAxis4Bottom, PresetCameraValues.ObliqueTopLeft, PresetCameraValues.ObliqueTop, PresetCameraValues.ObliqueTopRight, PresetCameraValues.ObliqueLeft, PresetCameraValues.ObliqueRight, PresetCameraValues.ObliqueBottomLeft, PresetCameraValues.ObliqueBottom, PresetCameraValues.ObliqueBottomRight, PresetCameraValues.PerspectiveFront, PresetCameraValues.PerspectiveLeft, PresetCameraValues.PerspectiveRight, PresetCameraValues.PerspectiveAbove, PresetCameraValues.PerspectiveBelow, PresetCameraValues.PerspectiveAboveLeftFacing, PresetCameraValues.PerspectiveAboveRightFacing, PresetCameraValues.PerspectiveContrastingLeftFacing, PresetCameraValues.PerspectiveContrastingRightFacing, PresetCameraValues.PerspectiveHeroicLeftFacing, PresetCameraValues.PerspectiveHeroicRightFacing, PresetCameraValues.PerspectiveHeroicExtremeLeftFacing, PresetCameraValues.PerspectiveHeroicExtremeRightFacing, PresetCameraValues.PerspectiveRelaxed, PresetCameraValues.PerspectiveRelaxedModerately];
export declare enum LightRigDirectionValues {
    /** Top Left. Serialized value: `tl` */
    TopLeft = "tl",
    /** Top. Serialized value: `t` */
    Top = "t",
    /** Top Right. Serialized value: `tr` */
    TopRight = "tr",
    /** Left. Serialized value: `l` */
    Left = "l",
    /** Right. Serialized value: `r` */
    Right = "r",
    /** Bottom Left. Serialized value: `bl` */
    BottomLeft = "bl",
    /** Bottom. Serialized value: `b` */
    Bottom = "b",
    /** Bottom Right. Serialized value: `br` */
    BottomRight = "br"
}
export declare const LightRigDirectionValuesArray: readonly [LightRigDirectionValues.TopLeft, LightRigDirectionValues.Top, LightRigDirectionValues.TopRight, LightRigDirectionValues.Left, LightRigDirectionValues.Right, LightRigDirectionValues.BottomLeft, LightRigDirectionValues.Bottom, LightRigDirectionValues.BottomRight];
export declare enum LightRigValues {
    /** Legacy Flat 1. Serialized value: `legacyFlat1` */
    LegacyFlat1 = "legacyFlat1",
    /** Legacy Flat 2. Serialized value: `legacyFlat2` */
    LegacyFlat2 = "legacyFlat2",
    /** Legacy Flat 3. Serialized value: `legacyFlat3` */
    LegacyFlat3 = "legacyFlat3",
    /** Legacy Flat 4. Serialized value: `legacyFlat4` */
    LegacyFlat4 = "legacyFlat4",
    /** Legacy Normal 1. Serialized value: `legacyNormal1` */
    LegacyNormal1 = "legacyNormal1",
    /** Legacy Normal 2. Serialized value: `legacyNormal2` */
    LegacyNormal2 = "legacyNormal2",
    /** Legacy Normal 3. Serialized value: `legacyNormal3` */
    LegacyNormal3 = "legacyNormal3",
    /** Legacy Normal 4. Serialized value: `legacyNormal4` */
    LegacyNormal4 = "legacyNormal4",
    /** Legacy Harsh 1. Serialized value: `legacyHarsh1` */
    LegacyHarsh1 = "legacyHarsh1",
    /** Legacy Harsh 2. Serialized value: `legacyHarsh2` */
    LegacyHarsh2 = "legacyHarsh2",
    /** Legacy Harsh 3. Serialized value: `legacyHarsh3` */
    LegacyHarsh3 = "legacyHarsh3",
    /** Legacy Harsh 4. Serialized value: `legacyHarsh4` */
    LegacyHarsh4 = "legacyHarsh4",
    /** Three Point. Serialized value: `threePt` */
    ThreePoints = "threePt",
    /** Light Rig Enum ( Balanced ). Serialized value: `balanced` */
    Balanced = "balanced",
    /** Soft. Serialized value: `soft` */
    Soft = "soft",
    /** Harsh. Serialized value: `harsh` */
    Harsh = "harsh",
    /** Flood. Serialized value: `flood` */
    Flood = "flood",
    /** Contrasting. Serialized value: `contrasting` */
    Contrasting = "contrasting",
    /** Morning. Serialized value: `morning` */
    Morning = "morning",
    /** Sunrise. Serialized value: `sunrise` */
    Sunrise = "sunrise",
    /** Sunset. Serialized value: `sunset` */
    Sunset = "sunset",
    /** Chilly. Serialized value: `chilly` */
    Chilly = "chilly",
    /** Freezing. Serialized value: `freezing` */
    Freezing = "freezing",
    /** Flat. Serialized value: `flat` */
    Flat = "flat",
    /** Two Point. Serialized value: `twoPt` */
    TwoPoints = "twoPt",
    /** Glow. Serialized value: `glow` */
    Glow = "glow",
    /** Bright Room. Serialized value: `brightRoom` */
    BrightRoom = "brightRoom"
}
export declare const LightRigValuesArray: readonly [LightRigValues.LegacyFlat1, LightRigValues.LegacyFlat2, LightRigValues.LegacyFlat3, LightRigValues.LegacyFlat4, LightRigValues.LegacyNormal1, LightRigValues.LegacyNormal2, LightRigValues.LegacyNormal3, LightRigValues.LegacyNormal4, LightRigValues.LegacyHarsh1, LightRigValues.LegacyHarsh2, LightRigValues.LegacyHarsh3, LightRigValues.LegacyHarsh4, LightRigValues.ThreePoints, LightRigValues.Balanced, LightRigValues.Soft, LightRigValues.Harsh, LightRigValues.Flood, LightRigValues.Contrasting, LightRigValues.Morning, LightRigValues.Sunrise, LightRigValues.Sunset, LightRigValues.Chilly, LightRigValues.Freezing, LightRigValues.Flat, LightRigValues.TwoPoints, LightRigValues.Glow, LightRigValues.BrightRoom];
export declare enum BevelPresetValues {
    /** Relaxed Inset. Serialized value: `relaxedInset` */
    RelaxedInset = "relaxedInset",
    /** Circle. Serialized value: `circle` */
    Circle = "circle",
    /** Slope. Serialized value: `slope` */
    Slope = "slope",
    /** Cross. Serialized value: `cross` */
    Cross = "cross",
    /** Angle. Serialized value: `angle` */
    Angle = "angle",
    /** Soft Round. Serialized value: `softRound` */
    SoftRound = "softRound",
    /** Convex. Serialized value: `convex` */
    Convex = "convex",
    /** Cool Slant. Serialized value: `coolSlant` */
    CoolSlant = "coolSlant",
    /** Divot. Serialized value: `divot` */
    Divot = "divot",
    /** Riblet. Serialized value: `riblet` */
    Riblet = "riblet",
    /** Hard Edge. Serialized value: `hardEdge` */
    HardEdge = "hardEdge",
    /** Art Deco. Serialized value: `artDeco` */
    ArtDeco = "artDeco"
}
export declare const BevelPresetValuesArray: readonly [BevelPresetValues.RelaxedInset, BevelPresetValues.Circle, BevelPresetValues.Slope, BevelPresetValues.Cross, BevelPresetValues.Angle, BevelPresetValues.SoftRound, BevelPresetValues.Convex, BevelPresetValues.CoolSlant, BevelPresetValues.Divot, BevelPresetValues.Riblet, BevelPresetValues.HardEdge, BevelPresetValues.ArtDeco];
export declare enum PresetMaterialTypeValues {
    /** Legacy Matte. Serialized value: `legacyMatte` */
    LegacyMatte = "legacyMatte",
    /** Legacy Plastic. Serialized value: `legacyPlastic` */
    LegacyPlastic = "legacyPlastic",
    /** Legacy Metal. Serialized value: `legacyMetal` */
    LegacyMetal = "legacyMetal",
    /** Legacy Wireframe. Serialized value: `legacyWireframe` */
    LegacyWireframe = "legacyWireframe",
    /** Matte. Serialized value: `matte` */
    Matte = "matte",
    /** Plastic. Serialized value: `plastic` */
    Plastic = "plastic",
    /** Metal. Serialized value: `metal` */
    Metal = "metal",
    /** Warm Matte. Serialized value: `warmMatte` */
    WarmMatte = "warmMatte",
    /** Translucent Powder. Serialized value: `translucentPowder` */
    TranslucentPowder = "translucentPowder",
    /** Powder. Serialized value: `powder` */
    Powder = "powder",
    /** Dark Edge. Serialized value: `dkEdge` */
    DarkEdge = "dkEdge",
    /** Soft Edge. Serialized value: `softEdge` */
    SoftEdge = "softEdge",
    /** Clear. Serialized value: `clear` */
    Clear = "clear",
    /** Flat. Serialized value: `flat` */
    Flat = "flat",
    /** Soft Metal. Serialized value: `softmetal` */
    SoftMetal = "softmetal"
}
export declare const PresetMaterialTypeValuesArray: readonly [PresetMaterialTypeValues.LegacyMatte, PresetMaterialTypeValues.LegacyPlastic, PresetMaterialTypeValues.LegacyMetal, PresetMaterialTypeValues.LegacyWireframe, PresetMaterialTypeValues.Matte, PresetMaterialTypeValues.Plastic, PresetMaterialTypeValues.Metal, PresetMaterialTypeValues.WarmMatte, PresetMaterialTypeValues.TranslucentPowder, PresetMaterialTypeValues.Powder, PresetMaterialTypeValues.DarkEdge, PresetMaterialTypeValues.SoftEdge, PresetMaterialTypeValues.Clear, PresetMaterialTypeValues.Flat, PresetMaterialTypeValues.SoftMetal];
export declare enum PresetShadowValues {
    /** Top Left Drop Shadow. Serialized value: `shdw1` */
    TopLeftDropShadow = "shdw1",
    /** Top Right Drop Shadow. Serialized value: `shdw2` */
    TopRightDropShadow = "shdw2",
    /** Back Left Perspective Shadow. Serialized value: `shdw3` */
    BackLeftPerspectiveShadow = "shdw3",
    /** Back Right Perspective Shadow. Serialized value: `shdw4` */
    BackRightPerspectiveShadow = "shdw4",
    /** Bottom Left Drop Shadow. Serialized value: `shdw5` */
    BottomLeftDropShadow = "shdw5",
    /** Bottom Right Drop Shadow. Serialized value: `shdw6` */
    BottomRightDropShadow = "shdw6",
    /** Front Left Perspective Shadow. Serialized value: `shdw7` */
    FrontLeftPerspectiveShadow = "shdw7",
    /** Front Right Perspective Shadow. Serialized value: `shdw8` */
    FrontRightPerspectiveShadow = "shdw8",
    /** Top Left Small Drop Shadow. Serialized value: `shdw9` */
    TopLeftSmallDropShadow = "shdw9",
    /** Top Left Large Drop Shadow. Serialized value: `shdw10` */
    TopLeftLargeDropShadow = "shdw10",
    /** Back Left Long Perspective Shadow. Serialized value: `shdw11` */
    BackLeftLongPerspectiveShadow = "shdw11",
    /** Back Right Long Perspective Shadow. Serialized value: `shdw12` */
    BackRightLongPerspectiveShadow = "shdw12",
    /** Top Left Double Drop Shadow. Serialized value: `shdw13` */
    TopLeftDoubleDropShadow = "shdw13",
    /** Bottom Right Small Drop Shadow. Serialized value: `shdw14` */
    BottomRightSmallDropShadow = "shdw14",
    /** Front Left Long Perspective Shadow. Serialized value: `shdw15` */
    FrontLeftLongPerspectiveShadow = "shdw15",
    /** Front Right LongPerspective Shadow. Serialized value: `shdw16` */
    FrontRightLongPerspectiveShadow = "shdw16",
    /** 3D Outer Box Shadow. Serialized value: `shdw17` */
    ThreeDimensionalOuterBoxShadow = "shdw17",
    /** 3D Inner Box Shadow. Serialized value: `shdw18` */
    ThreeDimensionalInnerBoxShadow = "shdw18",
    /** Back Center Perspective Shadow. Serialized value: `shdw19` */
    BackCenterPerspectiveShadow = "shdw19",
    /** Front Bottom Shadow. Serialized value: `shdw20` */
    FrontBottomShadow = "shdw20"
}
export declare const PresetShadowValuesArray: readonly [PresetShadowValues.TopLeftDropShadow, PresetShadowValues.TopRightDropShadow, PresetShadowValues.BackLeftPerspectiveShadow, PresetShadowValues.BackRightPerspectiveShadow, PresetShadowValues.BottomLeftDropShadow, PresetShadowValues.BottomRightDropShadow, PresetShadowValues.FrontLeftPerspectiveShadow, PresetShadowValues.FrontRightPerspectiveShadow, PresetShadowValues.TopLeftSmallDropShadow, PresetShadowValues.TopLeftLargeDropShadow, PresetShadowValues.BackLeftLongPerspectiveShadow, PresetShadowValues.BackRightLongPerspectiveShadow, PresetShadowValues.TopLeftDoubleDropShadow, PresetShadowValues.BottomRightSmallDropShadow, PresetShadowValues.FrontLeftLongPerspectiveShadow, PresetShadowValues.FrontRightLongPerspectiveShadow, PresetShadowValues.ThreeDimensionalOuterBoxShadow, PresetShadowValues.ThreeDimensionalInnerBoxShadow, PresetShadowValues.BackCenterPerspectiveShadow, PresetShadowValues.FrontBottomShadow];
export declare enum PathShadeValues {
    /** Shape. Serialized value: `shape` */
    Shape = "shape",
    /** Circle. Serialized value: `circle` */
    Circle = "circle",
    /** Rectangle. Serialized value: `rect` */
    Rectangle = "rect"
}
export declare const PathShadeValuesArray: readonly [PathShadeValues.Shape, PathShadeValues.Circle, PathShadeValues.Rectangle];
export declare enum TileFlipValues {
    /** None. Serialized value: `none` */
    None = "none",
    /** Horizontal. Serialized value: `x` */
    Horizontal = "x",
    /** Vertical. Serialized value: `y` */
    Vertical = "y",
    /** Horizontal and Vertical. Serialized value: `xy` */
    HorizontalAndVertical = "xy"
}
export declare const TileFlipValuesArray: readonly [TileFlipValues.None, TileFlipValues.Horizontal, TileFlipValues.Vertical, TileFlipValues.HorizontalAndVertical];
export declare enum BlipCompressionValues {
    /** Email Compression. Serialized value: `email` */
    Email = "email",
    /** Screen Viewing Compression. Serialized value: `screen` */
    Screen = "screen",
    /** Printing Compression. Serialized value: `print` */
    Print = "print",
    /** High Quality Printing Compression. Serialized value: `hqprint` */
    HighQualityPrint = "hqprint",
    /** No Compression. Serialized value: `none` */
    None = "none"
}
export declare const BlipCompressionValuesArray: readonly [BlipCompressionValues.Email, BlipCompressionValues.Screen, BlipCompressionValues.Print, BlipCompressionValues.HighQualityPrint, BlipCompressionValues.None];
export declare enum PresetPatternValues {
    /** 5%. Serialized value: `pct5` */
    Percent5 = "pct5",
    /** 10%. Serialized value: `pct10` */
    Percent10 = "pct10",
    /** 20%. Serialized value: `pct20` */
    Percent20 = "pct20",
    /** 25%. Serialized value: `pct25` */
    Percent25 = "pct25",
    /** 30%. Serialized value: `pct30` */
    Percent30 = "pct30",
    /** 40%. Serialized value: `pct40` */
    Percent40 = "pct40",
    /** 50%. Serialized value: `pct50` */
    Percent50 = "pct50",
    /** 60%. Serialized value: `pct60` */
    Percent60 = "pct60",
    /** 70%. Serialized value: `pct70` */
    Percent70 = "pct70",
    /** 75%. Serialized value: `pct75` */
    Percent75 = "pct75",
    /** 80%. Serialized value: `pct80` */
    Percent80 = "pct80",
    /** 90%. Serialized value: `pct90` */
    Percent90 = "pct90",
    /** Horizontal. Serialized value: `horz` */
    Horizontal = "horz",
    /** Vertical. Serialized value: `vert` */
    Vertical = "vert",
    /** Light Horizontal. Serialized value: `ltHorz` */
    LightHorizontal = "ltHorz",
    /** Light Vertical. Serialized value: `ltVert` */
    LightVertical = "ltVert",
    /** Dark Horizontal. Serialized value: `dkHorz` */
    DarkHorizontal = "dkHorz",
    /** Dark Vertical. Serialized value: `dkVert` */
    DarkVertical = "dkVert",
    /** Narrow Horizontal. Serialized value: `narHorz` */
    NarrowHorizontal = "narHorz",
    /** Narrow Vertical. Serialized value: `narVert` */
    NarrowVertical = "narVert",
    /** Dashed Horizontal. Serialized value: `dashHorz` */
    DashedHorizontal = "dashHorz",
    /** Dashed Vertical. Serialized value: `dashVert` */
    DashedVertical = "dashVert",
    /** Cross. Serialized value: `cross` */
    Cross = "cross",
    /** Downward Diagonal. Serialized value: `dnDiag` */
    DownwardDiagonal = "dnDiag",
    /** Upward Diagonal. Serialized value: `upDiag` */
    UpwardDiagonal = "upDiag",
    /** Light Downward Diagonal. Serialized value: `ltDnDiag` */
    LightDownwardDiagonal = "ltDnDiag",
    /** Light Upward Diagonal. Serialized value: `ltUpDiag` */
    LightUpwardDiagonal = "ltUpDiag",
    /** Dark Downward Diagonal. Serialized value: `dkDnDiag` */
    DarkDownwardDiagonal = "dkDnDiag",
    /** Dark Upward Diagonal. Serialized value: `dkUpDiag` */
    DarkUpwardDiagonal = "dkUpDiag",
    /** Wide Downward Diagonal. Serialized value: `wdDnDiag` */
    WideDownwardDiagonal = "wdDnDiag",
    /** Wide Upward Diagonal. Serialized value: `wdUpDiag` */
    WideUpwardDiagonal = "wdUpDiag",
    /** Dashed Downward Diagonal. Serialized value: `dashDnDiag` */
    DashedDownwardDiagonal = "dashDnDiag",
    /** Dashed Upward DIagonal. Serialized value: `dashUpDiag` */
    DashedUpwardDiagonal = "dashUpDiag",
    /** Diagonal Cross. Serialized value: `diagCross` */
    DiagonalCross = "diagCross",
    /** Small Checker Board. Serialized value: `smCheck` */
    SmallCheck = "smCheck",
    /** Large Checker Board. Serialized value: `lgCheck` */
    LargeCheck = "lgCheck",
    /** Small Grid. Serialized value: `smGrid` */
    SmallGrid = "smGrid",
    /** Large Grid. Serialized value: `lgGrid` */
    LargeGrid = "lgGrid",
    /** Dotted Grid. Serialized value: `dotGrid` */
    DotGrid = "dotGrid",
    /** Small Confetti. Serialized value: `smConfetti` */
    SmallConfetti = "smConfetti",
    /** Large Confetti. Serialized value: `lgConfetti` */
    LargeConfetti = "lgConfetti",
    /** Horizontal Brick. Serialized value: `horzBrick` */
    HorizontalBrick = "horzBrick",
    /** Diagonal Brick. Serialized value: `diagBrick` */
    DiagonalBrick = "diagBrick",
    /** Solid Diamond. Serialized value: `solidDmnd` */
    SolidDiamond = "solidDmnd",
    /** Open Diamond. Serialized value: `openDmnd` */
    OpenDiamond = "openDmnd",
    /** Dotted Diamond. Serialized value: `dotDmnd` */
    DottedDiamond = "dotDmnd",
    /** Plaid. Serialized value: `plaid` */
    Plaid = "plaid",
    /** Sphere. Serialized value: `sphere` */
    Sphere = "sphere",
    /** Weave. Serialized value: `weave` */
    Weave = "weave",
    /** Divot. Serialized value: `divot` */
    Divot = "divot",
    /** Shingle. Serialized value: `shingle` */
    Shingle = "shingle",
    /** Wave. Serialized value: `wave` */
    Wave = "wave",
    /** Trellis. Serialized value: `trellis` */
    Trellis = "trellis",
    /** Zig Zag. Serialized value: `zigZag` */
    ZigZag = "zigZag"
}
export declare const PresetPatternValuesArray: readonly [PresetPatternValues.Percent5, PresetPatternValues.Percent10, PresetPatternValues.Percent20, PresetPatternValues.Percent25, PresetPatternValues.Percent30, PresetPatternValues.Percent40, PresetPatternValues.Percent50, PresetPatternValues.Percent60, PresetPatternValues.Percent70, PresetPatternValues.Percent75, PresetPatternValues.Percent80, PresetPatternValues.Percent90, PresetPatternValues.Horizontal, PresetPatternValues.Vertical, PresetPatternValues.LightHorizontal, PresetPatternValues.LightVertical, PresetPatternValues.DarkHorizontal, PresetPatternValues.DarkVertical, PresetPatternValues.NarrowHorizontal, PresetPatternValues.NarrowVertical, PresetPatternValues.DashedHorizontal, PresetPatternValues.DashedVertical, PresetPatternValues.Cross, PresetPatternValues.DownwardDiagonal, PresetPatternValues.UpwardDiagonal, PresetPatternValues.LightDownwardDiagonal, PresetPatternValues.LightUpwardDiagonal, PresetPatternValues.DarkDownwardDiagonal, PresetPatternValues.DarkUpwardDiagonal, PresetPatternValues.WideDownwardDiagonal, PresetPatternValues.WideUpwardDiagonal, PresetPatternValues.DashedDownwardDiagonal, PresetPatternValues.DashedUpwardDiagonal, PresetPatternValues.DiagonalCross, PresetPatternValues.SmallCheck, PresetPatternValues.LargeCheck, PresetPatternValues.SmallGrid, PresetPatternValues.LargeGrid, PresetPatternValues.DotGrid, PresetPatternValues.SmallConfetti, PresetPatternValues.LargeConfetti, PresetPatternValues.HorizontalBrick, PresetPatternValues.DiagonalBrick, PresetPatternValues.SolidDiamond, PresetPatternValues.OpenDiamond, PresetPatternValues.DottedDiamond, PresetPatternValues.Plaid, PresetPatternValues.Sphere, PresetPatternValues.Weave, PresetPatternValues.Divot, PresetPatternValues.Shingle, PresetPatternValues.Wave, PresetPatternValues.Trellis, PresetPatternValues.ZigZag];
export declare enum BlendModeValues {
    /** Overlay. Serialized value: `over` */
    Overlay = "over",
    /** Multiply. Serialized value: `mult` */
    Multiply = "mult",
    /** Screen. Serialized value: `screen` */
    Screen = "screen",
    /** Darken. Serialized value: `darken` */
    Darken = "darken",
    /** Lighten. Serialized value: `lighten` */
    Lighten = "lighten"
}
export declare const BlendModeValuesArray: readonly [BlendModeValues.Overlay, BlendModeValues.Multiply, BlendModeValues.Screen, BlendModeValues.Darken, BlendModeValues.Lighten];
export declare enum EffectContainerValues {
    /** Sibling. Serialized value: `sib` */
    Sibling = "sib",
    /** Tree. Serialized value: `tree` */
    Tree = "tree"
}
export declare const EffectContainerValuesArray: readonly [EffectContainerValues.Sibling, EffectContainerValues.Tree];
export declare enum ShapeTypeValues {
    /** Line Shape. Serialized value: `line` */
    Line = "line",
    /** Line Inverse Shape. Serialized value: `lineInv` */
    LineInverse = "lineInv",
    /** Triangle Shape. Serialized value: `triangle` */
    Triangle = "triangle",
    /** Right Triangle Shape. Serialized value: `rtTriangle` */
    RightTriangle = "rtTriangle",
    /** Rectangle Shape. Serialized value: `rect` */
    Rectangle = "rect",
    /** Diamond Shape. Serialized value: `diamond` */
    Diamond = "diamond",
    /** Parallelogram Shape. Serialized value: `parallelogram` */
    Parallelogram = "parallelogram",
    /** Trapezoid Shape. Serialized value: `trapezoid` */
    Trapezoid = "trapezoid",
    /** Non-Isosceles Trapezoid Shape. Serialized value: `nonIsoscelesTrapezoid` */
    NonIsoscelesTrapezoid = "nonIsoscelesTrapezoid",
    /** Pentagon Shape. Serialized value: `pentagon` */
    Pentagon = "pentagon",
    /** Hexagon Shape. Serialized value: `hexagon` */
    Hexagon = "hexagon",
    /** Heptagon Shape. Serialized value: `heptagon` */
    Heptagon = "heptagon",
    /** Octagon Shape. Serialized value: `octagon` */
    Octagon = "octagon",
    /** Decagon Shape. Serialized value: `decagon` */
    Decagon = "decagon",
    /** Dodecagon Shape. Serialized value: `dodecagon` */
    Dodecagon = "dodecagon",
    /** Four Pointed Star Shape. Serialized value: `star4` */
    Star4 = "star4",
    /** Five Pointed Star Shape. Serialized value: `star5` */
    Star5 = "star5",
    /** Six Pointed Star Shape. Serialized value: `star6` */
    Star6 = "star6",
    /** Seven Pointed Star Shape. Serialized value: `star7` */
    Star7 = "star7",
    /** Eight Pointed Star Shape. Serialized value: `star8` */
    Star8 = "star8",
    /** Ten Pointed Star Shape. Serialized value: `star10` */
    Star10 = "star10",
    /** Twelve Pointed Star Shape. Serialized value: `star12` */
    Star12 = "star12",
    /** Sixteen Pointed Star Shape. Serialized value: `star16` */
    Star16 = "star16",
    /** Twenty Four Pointed Star Shape. Serialized value: `star24` */
    Star24 = "star24",
    /** Thirty Two Pointed Star Shape. Serialized value: `star32` */
    Star32 = "star32",
    /** Round Corner Rectangle Shape. Serialized value: `roundRect` */
    RoundRectangle = "roundRect",
    /** One Round Corner Rectangle Shape. Serialized value: `round1Rect` */
    Round1Rectangle = "round1Rect",
    /** Two Same-side Round Corner Rectangle Shape. Serialized value: `round2SameRect` */
    Round2SameRectangle = "round2SameRect",
    /** Two Diagonal Round Corner Rectangle Shape. Serialized value: `round2DiagRect` */
    Round2DiagonalRectangle = "round2DiagRect",
    /** One Snip One Round Corner Rectangle Shape. Serialized value: `snipRoundRect` */
    SnipRoundRectangle = "snipRoundRect",
    /** One Snip Corner Rectangle Shape. Serialized value: `snip1Rect` */
    Snip1Rectangle = "snip1Rect",
    /** Two Same-side Snip Corner Rectangle Shape. Serialized value: `snip2SameRect` */
    Snip2SameRectangle = "snip2SameRect",
    /** Two Diagonal Snip Corner Rectangle Shape. Serialized value: `snip2DiagRect` */
    Snip2DiagonalRectangle = "snip2DiagRect",
    /** Plaque Shape. Serialized value: `plaque` */
    Plaque = "plaque",
    /** Ellipse Shape. Serialized value: `ellipse` */
    Ellipse = "ellipse",
    /** Teardrop Shape. Serialized value: `teardrop` */
    Teardrop = "teardrop",
    /** Home Plate Shape. Serialized value: `homePlate` */
    HomePlate = "homePlate",
    /** Chevron Shape. Serialized value: `chevron` */
    Chevron = "chevron",
    /** Pie Wedge Shape. Serialized value: `pieWedge` */
    PieWedge = "pieWedge",
    /** Pie Shape. Serialized value: `pie` */
    Pie = "pie",
    /** Block Arc Shape. Serialized value: `blockArc` */
    BlockArc = "blockArc",
    /** Donut Shape. Serialized value: `donut` */
    Donut = "donut",
    /** No Smoking Shape. Serialized value: `noSmoking` */
    NoSmoking = "noSmoking",
    /** Right Arrow Shape. Serialized value: `rightArrow` */
    RightArrow = "rightArrow",
    /** Left Arrow Shape. Serialized value: `leftArrow` */
    LeftArrow = "leftArrow",
    /** Up Arrow Shape. Serialized value: `upArrow` */
    UpArrow = "upArrow",
    /** Down Arrow Shape. Serialized value: `downArrow` */
    DownArrow = "downArrow",
    /** Striped Right Arrow Shape. Serialized value: `stripedRightArrow` */
    StripedRightArrow = "stripedRightArrow",
    /** Notched Right Arrow Shape. Serialized value: `notchedRightArrow` */
    NotchedRightArrow = "notchedRightArrow",
    /** Bent Up Arrow Shape. Serialized value: `bentUpArrow` */
    BentUpArrow = "bentUpArrow",
    /** Left Right Arrow Shape. Serialized value: `leftRightArrow` */
    LeftRightArrow = "leftRightArrow",
    /** Up Down Arrow Shape. Serialized value: `upDownArrow` */
    UpDownArrow = "upDownArrow",
    /** Left Up Arrow Shape. Serialized value: `leftUpArrow` */
    LeftUpArrow = "leftUpArrow",
    /** Left Right Up Arrow Shape. Serialized value: `leftRightUpArrow` */
    LeftRightUpArrow = "leftRightUpArrow",
    /** Quad-Arrow Shape. Serialized value: `quadArrow` */
    QuadArrow = "quadArrow",
    /** Callout Left Arrow Shape. Serialized value: `leftArrowCallout` */
    LeftArrowCallout = "leftArrowCallout",
    /** Callout Right Arrow Shape. Serialized value: `rightArrowCallout` */
    RightArrowCallout = "rightArrowCallout",
    /** Callout Up Arrow Shape. Serialized value: `upArrowCallout` */
    UpArrowCallout = "upArrowCallout",
    /** Callout Down Arrow Shape. Serialized value: `downArrowCallout` */
    DownArrowCallout = "downArrowCallout",
    /** Callout Left Right Arrow Shape. Serialized value: `leftRightArrowCallout` */
    LeftRightArrowCallout = "leftRightArrowCallout",
    /** Callout Up Down Arrow Shape. Serialized value: `upDownArrowCallout` */
    UpDownArrowCallout = "upDownArrowCallout",
    /** Callout Quad-Arrow Shape. Serialized value: `quadArrowCallout` */
    QuadArrowCallout = "quadArrowCallout",
    /** Bent Arrow Shape. Serialized value: `bentArrow` */
    BentArrow = "bentArrow",
    /** U-Turn Arrow Shape. Serialized value: `uturnArrow` */
    UTurnArrow = "uturnArrow",
    /** Circular Arrow Shape. Serialized value: `circularArrow` */
    CircularArrow = "circularArrow",
    /** Left Circular Arrow Shape. Serialized value: `leftCircularArrow` */
    LeftCircularArrow = "leftCircularArrow",
    /** Left Right Circular Arrow Shape. Serialized value: `leftRightCircularArrow` */
    LeftRightCircularArrow = "leftRightCircularArrow",
    /** Curved Right Arrow Shape. Serialized value: `curvedRightArrow` */
    CurvedRightArrow = "curvedRightArrow",
    /** Curved Left Arrow Shape. Serialized value: `curvedLeftArrow` */
    CurvedLeftArrow = "curvedLeftArrow",
    /** Curved Up Arrow Shape. Serialized value: `curvedUpArrow` */
    CurvedUpArrow = "curvedUpArrow",
    /** Curved Down Arrow Shape. Serialized value: `curvedDownArrow` */
    CurvedDownArrow = "curvedDownArrow",
    /** Swoosh Arrow Shape. Serialized value: `swooshArrow` */
    SwooshArrow = "swooshArrow",
    /** Cube Shape. Serialized value: `cube` */
    Cube = "cube",
    /** Can Shape. Serialized value: `can` */
    Can = "can",
    /** Lightning Bolt Shape. Serialized value: `lightningBolt` */
    LightningBolt = "lightningBolt",
    /** Heart Shape. Serialized value: `heart` */
    Heart = "heart",
    /** Sun Shape. Serialized value: `sun` */
    Sun = "sun",
    /** Moon Shape. Serialized value: `moon` */
    Moon = "moon",
    /** Smiley Face Shape. Serialized value: `smileyFace` */
    SmileyFace = "smileyFace",
    /** Irregular Seal 1 Shape. Serialized value: `irregularSeal1` */
    IrregularSeal1 = "irregularSeal1",
    /** Irregular Seal 2 Shape. Serialized value: `irregularSeal2` */
    IrregularSeal2 = "irregularSeal2",
    /** Folded Corner Shape. Serialized value: `foldedCorner` */
    FoldedCorner = "foldedCorner",
    /** Bevel Shape. Serialized value: `bevel` */
    Bevel = "bevel",
    /** Frame Shape. Serialized value: `frame` */
    Frame = "frame",
    /** Half Frame Shape. Serialized value: `halfFrame` */
    HalfFrame = "halfFrame",
    /** Corner Shape. Serialized value: `corner` */
    Corner = "corner",
    /** Diagonal Stripe Shape. Serialized value: `diagStripe` */
    DiagonalStripe = "diagStripe",
    /** Chord Shape. Serialized value: `chord` */
    Chord = "chord",
    /** Curved Arc Shape. Serialized value: `arc` */
    Arc = "arc",
    /** Left Bracket Shape. Serialized value: `leftBracket` */
    LeftBracket = "leftBracket",
    /** Right Bracket Shape. Serialized value: `rightBracket` */
    RightBracket = "rightBracket",
    /** Left Brace Shape. Serialized value: `leftBrace` */
    LeftBrace = "leftBrace",
    /** Right Brace Shape. Serialized value: `rightBrace` */
    RightBrace = "rightBrace",
    /** Bracket Pair Shape. Serialized value: `bracketPair` */
    BracketPair = "bracketPair",
    /** Brace Pair Shape. Serialized value: `bracePair` */
    BracePair = "bracePair",
    /** Straight Connector 1 Shape. Serialized value: `straightConnector1` */
    StraightConnector1 = "straightConnector1",
    /** Bent Connector 2 Shape. Serialized value: `bentConnector2` */
    BentConnector2 = "bentConnector2",
    /** Bent Connector 3 Shape. Serialized value: `bentConnector3` */
    BentConnector3 = "bentConnector3",
    /** Bent Connector 4 Shape. Serialized value: `bentConnector4` */
    BentConnector4 = "bentConnector4",
    /** Bent Connector 5 Shape. Serialized value: `bentConnector5` */
    BentConnector5 = "bentConnector5",
    /** Curved Connector 2 Shape. Serialized value: `curvedConnector2` */
    CurvedConnector2 = "curvedConnector2",
    /** Curved Connector 3 Shape. Serialized value: `curvedConnector3` */
    CurvedConnector3 = "curvedConnector3",
    /** Curved Connector 4 Shape. Serialized value: `curvedConnector4` */
    CurvedConnector4 = "curvedConnector4",
    /** Curved Connector 5 Shape. Serialized value: `curvedConnector5` */
    CurvedConnector5 = "curvedConnector5",
    /** Callout 1 Shape. Serialized value: `callout1` */
    Callout1 = "callout1",
    /** Callout 2 Shape. Serialized value: `callout2` */
    Callout2 = "callout2",
    /** Callout 3 Shape. Serialized value: `callout3` */
    Callout3 = "callout3",
    /** Callout 1 Shape. Serialized value: `accentCallout1` */
    AccentCallout1 = "accentCallout1",
    /** Callout 2 Shape. Serialized value: `accentCallout2` */
    AccentCallout2 = "accentCallout2",
    /** Callout 3 Shape. Serialized value: `accentCallout3` */
    AccentCallout3 = "accentCallout3",
    /** Callout 1 with Border Shape. Serialized value: `borderCallout1` */
    BorderCallout1 = "borderCallout1",
    /** Callout 2 with Border Shape. Serialized value: `borderCallout2` */
    BorderCallout2 = "borderCallout2",
    /** Callout 3 with Border Shape. Serialized value: `borderCallout3` */
    BorderCallout3 = "borderCallout3",
    /** Callout 1 with Border and Accent Shape. Serialized value: `accentBorderCallout1` */
    AccentBorderCallout1 = "accentBorderCallout1",
    /** Callout 2 with Border and Accent Shape. Serialized value: `accentBorderCallout2` */
    AccentBorderCallout2 = "accentBorderCallout2",
    /** Callout 3 with Border and Accent Shape. Serialized value: `accentBorderCallout3` */
    AccentBorderCallout3 = "accentBorderCallout3",
    /** Callout Wedge Rectangle Shape. Serialized value: `wedgeRectCallout` */
    WedgeRectangleCallout = "wedgeRectCallout",
    /** Callout Wedge Round Rectangle Shape. Serialized value: `wedgeRoundRectCallout` */
    WedgeRoundRectangleCallout = "wedgeRoundRectCallout",
    /** Callout Wedge Ellipse Shape. Serialized value: `wedgeEllipseCallout` */
    WedgeEllipseCallout = "wedgeEllipseCallout",
    /** Callout Cloud Shape. Serialized value: `cloudCallout` */
    CloudCallout = "cloudCallout",
    /** Cloud Shape. Serialized value: `cloud` */
    Cloud = "cloud",
    /** Ribbon Shape. Serialized value: `ribbon` */
    Ribbon = "ribbon",
    /** Ribbon 2 Shape. Serialized value: `ribbon2` */
    Ribbon2 = "ribbon2",
    /** Ellipse Ribbon Shape. Serialized value: `ellipseRibbon` */
    EllipseRibbon = "ellipseRibbon",
    /** Ellipse Ribbon 2 Shape. Serialized value: `ellipseRibbon2` */
    EllipseRibbon2 = "ellipseRibbon2",
    /** Left Right Ribbon Shape. Serialized value: `leftRightRibbon` */
    LeftRightRibbon = "leftRightRibbon",
    /** Vertical Scroll Shape. Serialized value: `verticalScroll` */
    VerticalScroll = "verticalScroll",
    /** Horizontal Scroll Shape. Serialized value: `horizontalScroll` */
    HorizontalScroll = "horizontalScroll",
    /** Wave Shape. Serialized value: `wave` */
    Wave = "wave",
    /** Double Wave Shape. Serialized value: `doubleWave` */
    DoubleWave = "doubleWave",
    /** Plus Shape. Serialized value: `plus` */
    Plus = "plus",
    /** Process Flow Shape. Serialized value: `flowChartProcess` */
    FlowChartProcess = "flowChartProcess",
    /** Decision Flow Shape. Serialized value: `flowChartDecision` */
    FlowChartDecision = "flowChartDecision",
    /** Input Output Flow Shape. Serialized value: `flowChartInputOutput` */
    FlowChartInputOutput = "flowChartInputOutput",
    /** Predefined Process Flow Shape. Serialized value: `flowChartPredefinedProcess` */
    FlowChartPredefinedProcess = "flowChartPredefinedProcess",
    /** Internal Storage Flow Shape. Serialized value: `flowChartInternalStorage` */
    FlowChartInternalStorage = "flowChartInternalStorage",
    /** Document Flow Shape. Serialized value: `flowChartDocument` */
    FlowChartDocument = "flowChartDocument",
    /** Multi-Document Flow Shape. Serialized value: `flowChartMultidocument` */
    FlowChartMultidocument = "flowChartMultidocument",
    /** Terminator Flow Shape. Serialized value: `flowChartTerminator` */
    FlowChartTerminator = "flowChartTerminator",
    /** Preparation Flow Shape. Serialized value: `flowChartPreparation` */
    FlowChartPreparation = "flowChartPreparation",
    /** Manual Input Flow Shape. Serialized value: `flowChartManualInput` */
    FlowChartManualInput = "flowChartManualInput",
    /** Manual Operation Flow Shape. Serialized value: `flowChartManualOperation` */
    FlowChartManualOperation = "flowChartManualOperation",
    /** Connector Flow Shape. Serialized value: `flowChartConnector` */
    FlowChartConnector = "flowChartConnector",
    /** Punched Card Flow Shape. Serialized value: `flowChartPunchedCard` */
    FlowChartPunchedCard = "flowChartPunchedCard",
    /** Punched Tape Flow Shape. Serialized value: `flowChartPunchedTape` */
    FlowChartPunchedTape = "flowChartPunchedTape",
    /** Summing Junction Flow Shape. Serialized value: `flowChartSummingJunction` */
    FlowChartSummingJunction = "flowChartSummingJunction",
    /** Or Flow Shape. Serialized value: `flowChartOr` */
    FlowChartOr = "flowChartOr",
    /** Collate Flow Shape. Serialized value: `flowChartCollate` */
    FlowChartCollate = "flowChartCollate",
    /** Sort Flow Shape. Serialized value: `flowChartSort` */
    FlowChartSort = "flowChartSort",
    /** Extract Flow Shape. Serialized value: `flowChartExtract` */
    FlowChartExtract = "flowChartExtract",
    /** Merge Flow Shape. Serialized value: `flowChartMerge` */
    FlowChartMerge = "flowChartMerge",
    /** Offline Storage Flow Shape. Serialized value: `flowChartOfflineStorage` */
    FlowChartOfflineStorage = "flowChartOfflineStorage",
    /** Online Storage Flow Shape. Serialized value: `flowChartOnlineStorage` */
    FlowChartOnlineStorage = "flowChartOnlineStorage",
    /** Magnetic Tape Flow Shape. Serialized value: `flowChartMagneticTape` */
    FlowChartMagneticTape = "flowChartMagneticTape",
    /** Magnetic Disk Flow Shape. Serialized value: `flowChartMagneticDisk` */
    FlowChartMagneticDisk = "flowChartMagneticDisk",
    /** Magnetic Drum Flow Shape. Serialized value: `flowChartMagneticDrum` */
    FlowChartMagneticDrum = "flowChartMagneticDrum",
    /** Display Flow Shape. Serialized value: `flowChartDisplay` */
    FlowChartDisplay = "flowChartDisplay",
    /** Delay Flow Shape. Serialized value: `flowChartDelay` */
    FlowChartDelay = "flowChartDelay",
    /** Alternate Process Flow Shape. Serialized value: `flowChartAlternateProcess` */
    FlowChartAlternateProcess = "flowChartAlternateProcess",
    /** Off-Page Connector Flow Shape. Serialized value: `flowChartOffpageConnector` */
    FlowChartOffpageConnector = "flowChartOffpageConnector",
    /** Blank Button Shape. Serialized value: `actionButtonBlank` */
    ActionButtonBlank = "actionButtonBlank",
    /** Home Button Shape. Serialized value: `actionButtonHome` */
    ActionButtonHome = "actionButtonHome",
    /** Help Button Shape. Serialized value: `actionButtonHelp` */
    ActionButtonHelp = "actionButtonHelp",
    /** Information Button Shape. Serialized value: `actionButtonInformation` */
    ActionButtonInformation = "actionButtonInformation",
    /** Forward or Next Button Shape. Serialized value: `actionButtonForwardNext` */
    ActionButtonForwardNext = "actionButtonForwardNext",
    /** Back or Previous Button Shape. Serialized value: `actionButtonBackPrevious` */
    ActionButtonBackPrevious = "actionButtonBackPrevious",
    /** End Button Shape. Serialized value: `actionButtonEnd` */
    ActionButtonEnd = "actionButtonEnd",
    /** Beginning Button Shape. Serialized value: `actionButtonBeginning` */
    ActionButtonBeginning = "actionButtonBeginning",
    /** Return Button Shape. Serialized value: `actionButtonReturn` */
    ActionButtonReturn = "actionButtonReturn",
    /** Document Button Shape. Serialized value: `actionButtonDocument` */
    ActionButtonDocument = "actionButtonDocument",
    /** Sound Button Shape. Serialized value: `actionButtonSound` */
    ActionButtonSound = "actionButtonSound",
    /** Movie Button Shape. Serialized value: `actionButtonMovie` */
    ActionButtonMovie = "actionButtonMovie",
    /** Gear 6 Shape. Serialized value: `gear6` */
    Gear6 = "gear6",
    /** Gear 9 Shape. Serialized value: `gear9` */
    Gear9 = "gear9",
    /** Funnel Shape. Serialized value: `funnel` */
    Funnel = "funnel",
    /** Plus Math Shape. Serialized value: `mathPlus` */
    MathPlus = "mathPlus",
    /** Minus Math Shape. Serialized value: `mathMinus` */
    MathMinus = "mathMinus",
    /** Multiply Math Shape. Serialized value: `mathMultiply` */
    MathMultiply = "mathMultiply",
    /** Divide Math Shape. Serialized value: `mathDivide` */
    MathDivide = "mathDivide",
    /** Equal Math Shape. Serialized value: `mathEqual` */
    MathEqual = "mathEqual",
    /** Not Equal Math Shape. Serialized value: `mathNotEqual` */
    MathNotEqual = "mathNotEqual",
    /** Corner Tabs Shape. Serialized value: `cornerTabs` */
    CornerTabs = "cornerTabs",
    /** Square Tabs Shape. Serialized value: `squareTabs` */
    SquareTabs = "squareTabs",
    /** Plaque Tabs Shape. Serialized value: `plaqueTabs` */
    PlaqueTabs = "plaqueTabs",
    /** Chart X Shape. Serialized value: `chartX` */
    ChartX = "chartX",
    /** Chart Star Shape. Serialized value: `chartStar` */
    ChartStar = "chartStar",
    /** Chart Plus Shape. Serialized value: `chartPlus` */
    ChartPlus = "chartPlus"
}
export declare const ShapeTypeValuesArray: readonly [ShapeTypeValues.Line, ShapeTypeValues.LineInverse, ShapeTypeValues.Triangle, ShapeTypeValues.RightTriangle, ShapeTypeValues.Rectangle, ShapeTypeValues.Diamond, ShapeTypeValues.Parallelogram, ShapeTypeValues.Trapezoid, ShapeTypeValues.NonIsoscelesTrapezoid, ShapeTypeValues.Pentagon, ShapeTypeValues.Hexagon, ShapeTypeValues.Heptagon, ShapeTypeValues.Octagon, ShapeTypeValues.Decagon, ShapeTypeValues.Dodecagon, ShapeTypeValues.Star4, ShapeTypeValues.Star5, ShapeTypeValues.Star6, ShapeTypeValues.Star7, ShapeTypeValues.Star8, ShapeTypeValues.Star10, ShapeTypeValues.Star12, ShapeTypeValues.Star16, ShapeTypeValues.Star24, ShapeTypeValues.Star32, ShapeTypeValues.RoundRectangle, ShapeTypeValues.Round1Rectangle, ShapeTypeValues.Round2SameRectangle, ShapeTypeValues.Round2DiagonalRectangle, ShapeTypeValues.SnipRoundRectangle, ShapeTypeValues.Snip1Rectangle, ShapeTypeValues.Snip2SameRectangle, ShapeTypeValues.Snip2DiagonalRectangle, ShapeTypeValues.Plaque, ShapeTypeValues.Ellipse, ShapeTypeValues.Teardrop, ShapeTypeValues.HomePlate, ShapeTypeValues.Chevron, ShapeTypeValues.PieWedge, ShapeTypeValues.Pie, ShapeTypeValues.BlockArc, ShapeTypeValues.Donut, ShapeTypeValues.NoSmoking, ShapeTypeValues.RightArrow, ShapeTypeValues.LeftArrow, ShapeTypeValues.UpArrow, ShapeTypeValues.DownArrow, ShapeTypeValues.StripedRightArrow, ShapeTypeValues.NotchedRightArrow, ShapeTypeValues.BentUpArrow, ShapeTypeValues.LeftRightArrow, ShapeTypeValues.UpDownArrow, ShapeTypeValues.LeftUpArrow, ShapeTypeValues.LeftRightUpArrow, ShapeTypeValues.QuadArrow, ShapeTypeValues.LeftArrowCallout, ShapeTypeValues.RightArrowCallout, ShapeTypeValues.UpArrowCallout, ShapeTypeValues.DownArrowCallout, ShapeTypeValues.LeftRightArrowCallout, ShapeTypeValues.UpDownArrowCallout, ShapeTypeValues.QuadArrowCallout, ShapeTypeValues.BentArrow, ShapeTypeValues.UTurnArrow, ShapeTypeValues.CircularArrow, ShapeTypeValues.LeftCircularArrow, ShapeTypeValues.LeftRightCircularArrow, ShapeTypeValues.CurvedRightArrow, ShapeTypeValues.CurvedLeftArrow, ShapeTypeValues.CurvedUpArrow, ShapeTypeValues.CurvedDownArrow, ShapeTypeValues.SwooshArrow, ShapeTypeValues.Cube, ShapeTypeValues.Can, ShapeTypeValues.LightningBolt, ShapeTypeValues.Heart, ShapeTypeValues.Sun, ShapeTypeValues.Moon, ShapeTypeValues.SmileyFace, ShapeTypeValues.IrregularSeal1, ShapeTypeValues.IrregularSeal2, ShapeTypeValues.FoldedCorner, ShapeTypeValues.Bevel, ShapeTypeValues.Frame, ShapeTypeValues.HalfFrame, ShapeTypeValues.Corner, ShapeTypeValues.DiagonalStripe, ShapeTypeValues.Chord, ShapeTypeValues.Arc, ShapeTypeValues.LeftBracket, ShapeTypeValues.RightBracket, ShapeTypeValues.LeftBrace, ShapeTypeValues.RightBrace, ShapeTypeValues.BracketPair, ShapeTypeValues.BracePair, ShapeTypeValues.StraightConnector1, ShapeTypeValues.BentConnector2, ShapeTypeValues.BentConnector3, ShapeTypeValues.BentConnector4, ShapeTypeValues.BentConnector5, ShapeTypeValues.CurvedConnector2, ShapeTypeValues.CurvedConnector3, ShapeTypeValues.CurvedConnector4, ShapeTypeValues.CurvedConnector5, ShapeTypeValues.Callout1, ShapeTypeValues.Callout2, ShapeTypeValues.Callout3, ShapeTypeValues.AccentCallout1, ShapeTypeValues.AccentCallout2, ShapeTypeValues.AccentCallout3, ShapeTypeValues.BorderCallout1, ShapeTypeValues.BorderCallout2, ShapeTypeValues.BorderCallout3, ShapeTypeValues.AccentBorderCallout1, ShapeTypeValues.AccentBorderCallout2, ShapeTypeValues.AccentBorderCallout3, ShapeTypeValues.WedgeRectangleCallout, ShapeTypeValues.WedgeRoundRectangleCallout, ShapeTypeValues.WedgeEllipseCallout, ShapeTypeValues.CloudCallout, ShapeTypeValues.Cloud, ShapeTypeValues.Ribbon, ShapeTypeValues.Ribbon2, ShapeTypeValues.EllipseRibbon, ShapeTypeValues.EllipseRibbon2, ShapeTypeValues.LeftRightRibbon, ShapeTypeValues.VerticalScroll, ShapeTypeValues.HorizontalScroll, ShapeTypeValues.Wave, ShapeTypeValues.DoubleWave, ShapeTypeValues.Plus, ShapeTypeValues.FlowChartProcess, ShapeTypeValues.FlowChartDecision, ShapeTypeValues.FlowChartInputOutput, ShapeTypeValues.FlowChartPredefinedProcess, ShapeTypeValues.FlowChartInternalStorage, ShapeTypeValues.FlowChartDocument, ShapeTypeValues.FlowChartMultidocument, ShapeTypeValues.FlowChartTerminator, ShapeTypeValues.FlowChartPreparation, ShapeTypeValues.FlowChartManualInput, ShapeTypeValues.FlowChartManualOperation, ShapeTypeValues.FlowChartConnector, ShapeTypeValues.FlowChartPunchedCard, ShapeTypeValues.FlowChartPunchedTape, ShapeTypeValues.FlowChartSummingJunction, ShapeTypeValues.FlowChartOr, ShapeTypeValues.FlowChartCollate, ShapeTypeValues.FlowChartSort, ShapeTypeValues.FlowChartExtract, ShapeTypeValues.FlowChartMerge, ShapeTypeValues.FlowChartOfflineStorage, ShapeTypeValues.FlowChartOnlineStorage, ShapeTypeValues.FlowChartMagneticTape, ShapeTypeValues.FlowChartMagneticDisk, ShapeTypeValues.FlowChartMagneticDrum, ShapeTypeValues.FlowChartDisplay, ShapeTypeValues.FlowChartDelay, ShapeTypeValues.FlowChartAlternateProcess, ShapeTypeValues.FlowChartOffpageConnector, ShapeTypeValues.ActionButtonBlank, ShapeTypeValues.ActionButtonHome, ShapeTypeValues.ActionButtonHelp, ShapeTypeValues.ActionButtonInformation, ShapeTypeValues.ActionButtonForwardNext, ShapeTypeValues.ActionButtonBackPrevious, ShapeTypeValues.ActionButtonEnd, ShapeTypeValues.ActionButtonBeginning, ShapeTypeValues.ActionButtonReturn, ShapeTypeValues.ActionButtonDocument, ShapeTypeValues.ActionButtonSound, ShapeTypeValues.ActionButtonMovie, ShapeTypeValues.Gear6, ShapeTypeValues.Gear9, ShapeTypeValues.Funnel, ShapeTypeValues.MathPlus, ShapeTypeValues.MathMinus, ShapeTypeValues.MathMultiply, ShapeTypeValues.MathDivide, ShapeTypeValues.MathEqual, ShapeTypeValues.MathNotEqual, ShapeTypeValues.CornerTabs, ShapeTypeValues.SquareTabs, ShapeTypeValues.PlaqueTabs, ShapeTypeValues.ChartX, ShapeTypeValues.ChartStar, ShapeTypeValues.ChartPlus];
export declare enum TextShapeValues {
    /** No Text Shape. Serialized value: `textNoShape` */
    TextNoShape = "textNoShape",
    /** Plain Text Shape. Serialized value: `textPlain` */
    TextPlain = "textPlain",
    /** Stop Sign Text Shape. Serialized value: `textStop` */
    TextStop = "textStop",
    /** Triangle Text Shape. Serialized value: `textTriangle` */
    TextTriangle = "textTriangle",
    /** Inverted Triangle Text Shape. Serialized value: `textTriangleInverted` */
    TextTriangleInverted = "textTriangleInverted",
    /** Chevron Text Shape. Serialized value: `textChevron` */
    TextChevron = "textChevron",
    /** Inverted Chevron Text Shape. Serialized value: `textChevronInverted` */
    TextChevronInverted = "textChevronInverted",
    /** Inside Ring Text Shape. Serialized value: `textRingInside` */
    TextRingInside = "textRingInside",
    /** Outside Ring Text Shape. Serialized value: `textRingOutside` */
    TextRingOutside = "textRingOutside",
    /** Upward Arch Text Shape. Serialized value: `textArchUp` */
    TextArchUp = "textArchUp",
    /** Downward Arch Text Shape. Serialized value: `textArchDown` */
    TextArchDown = "textArchDown",
    /** Circle Text Shape. Serialized value: `textCircle` */
    TextCircle = "textCircle",
    /** Button Text Shape. Serialized value: `textButton` */
    TextButton = "textButton",
    /** Upward Pour Arch Text Shape. Serialized value: `textArchUpPour` */
    TextArchUpPour = "textArchUpPour",
    /** Downward Pour Arch Text Shape. Serialized value: `textArchDownPour` */
    TextArchDownPour = "textArchDownPour",
    /** Circle Pour Text Shape. Serialized value: `textCirclePour` */
    TextCirclePour = "textCirclePour",
    /** Button Pour Text Shape. Serialized value: `textButtonPour` */
    TextButtonPour = "textButtonPour",
    /** Upward Curve Text Shape. Serialized value: `textCurveUp` */
    TextCurveUp = "textCurveUp",
    /** Downward Curve Text Shape. Serialized value: `textCurveDown` */
    TextCurveDown = "textCurveDown",
    /** Upward Can Text Shape. Serialized value: `textCanUp` */
    TextCanUp = "textCanUp",
    /** Downward Can Text Shape. Serialized value: `textCanDown` */
    TextCanDown = "textCanDown",
    /** Wave 1 Text Shape. Serialized value: `textWave1` */
    TextWave1 = "textWave1",
    /** Wave 2 Text Shape. Serialized value: `textWave2` */
    TextWave2 = "textWave2",
    /** Double Wave 1 Text Shape. Serialized value: `textDoubleWave1` */
    TextDoubleWave1 = "textDoubleWave1",
    /** Wave 4 Text Shape. Serialized value: `textWave4` */
    TextWave4 = "textWave4",
    /** Inflate Text Shape. Serialized value: `textInflate` */
    TextInflate = "textInflate",
    /** Deflate Text Shape. Serialized value: `textDeflate` */
    TextDeflate = "textDeflate",
    /** Bottom Inflate Text Shape. Serialized value: `textInflateBottom` */
    TextInflateBottom = "textInflateBottom",
    /** Bottom Deflate Text Shape. Serialized value: `textDeflateBottom` */
    TextDeflateBottom = "textDeflateBottom",
    /** Top Inflate Text Shape. Serialized value: `textInflateTop` */
    TextInflateTop = "textInflateTop",
    /** Top Deflate Text Shape. Serialized value: `textDeflateTop` */
    TextDeflateTop = "textDeflateTop",
    /** Deflate-Inflate Text Shape. Serialized value: `textDeflateInflate` */
    TextDeflateInflate = "textDeflateInflate",
    /** Deflate-Inflate-Deflate Text Shape. Serialized value: `textDeflateInflateDeflate` */
    TextDeflateInflateDeflate = "textDeflateInflateDeflate",
    /** Right Fade Text Shape. Serialized value: `textFadeRight` */
    TextFadeRight = "textFadeRight",
    /** Left Fade Text Shape. Serialized value: `textFadeLeft` */
    TextFadeLeft = "textFadeLeft",
    /** Upward Fade Text Shape. Serialized value: `textFadeUp` */
    TextFadeUp = "textFadeUp",
    /** Downward Fade Text Shape. Serialized value: `textFadeDown` */
    TextFadeDown = "textFadeDown",
    /** Upward Slant Text Shape. Serialized value: `textSlantUp` */
    TextSlantUp = "textSlantUp",
    /** Downward Slant Text Shape. Serialized value: `textSlantDown` */
    TextSlantDown = "textSlantDown",
    /** Upward Cascade Text Shape. Serialized value: `textCascadeUp` */
    TextCascadeUp = "textCascadeUp",
    /** Downward Cascade Text Shape. Serialized value: `textCascadeDown` */
    TextCascadeDown = "textCascadeDown"
}
export declare const TextShapeValuesArray: readonly [TextShapeValues.TextNoShape, TextShapeValues.TextPlain, TextShapeValues.TextStop, TextShapeValues.TextTriangle, TextShapeValues.TextTriangleInverted, TextShapeValues.TextChevron, TextShapeValues.TextChevronInverted, TextShapeValues.TextRingInside, TextShapeValues.TextRingOutside, TextShapeValues.TextArchUp, TextShapeValues.TextArchDown, TextShapeValues.TextCircle, TextShapeValues.TextButton, TextShapeValues.TextArchUpPour, TextShapeValues.TextArchDownPour, TextShapeValues.TextCirclePour, TextShapeValues.TextButtonPour, TextShapeValues.TextCurveUp, TextShapeValues.TextCurveDown, TextShapeValues.TextCanUp, TextShapeValues.TextCanDown, TextShapeValues.TextWave1, TextShapeValues.TextWave2, TextShapeValues.TextDoubleWave1, TextShapeValues.TextWave4, TextShapeValues.TextInflate, TextShapeValues.TextDeflate, TextShapeValues.TextInflateBottom, TextShapeValues.TextDeflateBottom, TextShapeValues.TextInflateTop, TextShapeValues.TextDeflateTop, TextShapeValues.TextDeflateInflate, TextShapeValues.TextDeflateInflateDeflate, TextShapeValues.TextFadeRight, TextShapeValues.TextFadeLeft, TextShapeValues.TextFadeUp, TextShapeValues.TextFadeDown, TextShapeValues.TextSlantUp, TextShapeValues.TextSlantDown, TextShapeValues.TextCascadeUp, TextShapeValues.TextCascadeDown];
export declare enum PathFillModeValues {
    /** No Path Fill. Serialized value: `none` */
    None = "none",
    /** Normal Path Fill. Serialized value: `norm` */
    Norm = "norm",
    /** Lighten Path Fill. Serialized value: `lighten` */
    Lighten = "lighten",
    /** Lighten Path Fill Less. Serialized value: `lightenLess` */
    LightenLess = "lightenLess",
    /** Darken Path Fill. Serialized value: `darken` */
    Darken = "darken",
    /** Darken Path Fill Less. Serialized value: `darkenLess` */
    DarkenLess = "darkenLess"
}
export declare const PathFillModeValuesArray: readonly [PathFillModeValues.None, PathFillModeValues.Norm, PathFillModeValues.Lighten, PathFillModeValues.LightenLess, PathFillModeValues.Darken, PathFillModeValues.DarkenLess];
export declare enum LineEndValues {
    /** None. Serialized value: `none` */
    None = "none",
    /** Triangle Arrow Head. Serialized value: `triangle` */
    Triangle = "triangle",
    /** Stealth Arrow. Serialized value: `stealth` */
    Stealth = "stealth",
    /** Diamond. Serialized value: `diamond` */
    Diamond = "diamond",
    /** Oval. Serialized value: `oval` */
    Oval = "oval",
    /** Arrow Head. Serialized value: `arrow` */
    Arrow = "arrow"
}
export declare const LineEndValuesArray: readonly [LineEndValues.None, LineEndValues.Triangle, LineEndValues.Stealth, LineEndValues.Diamond, LineEndValues.Oval, LineEndValues.Arrow];
export declare enum LineEndWidthValues {
    /** Small. Serialized value: `sm` */
    Small = "sm",
    /** Medium. Serialized value: `med` */
    Medium = "med",
    /** Large. Serialized value: `lg` */
    Large = "lg"
}
export declare const LineEndWidthValuesArray: readonly [LineEndWidthValues.Small, LineEndWidthValues.Medium, LineEndWidthValues.Large];
export declare enum LineEndLengthValues {
    /** Small. Serialized value: `sm` */
    Small = "sm",
    /** Medium. Serialized value: `med` */
    Medium = "med",
    /** Large. Serialized value: `lg` */
    Large = "lg"
}
export declare const LineEndLengthValuesArray: readonly [LineEndLengthValues.Small, LineEndLengthValues.Medium, LineEndLengthValues.Large];
export declare enum PresetLineDashValues {
    /** Solid. Serialized value: `solid` */
    Solid = "solid",
    /** Dot. Serialized value: `dot` */
    Dot = "dot",
    /** Dash. Serialized value: `dash` */
    Dash = "dash",
    /** Large Dash. Serialized value: `lgDash` */
    LargeDash = "lgDash",
    /** Dash Dot. Serialized value: `dashDot` */
    DashDot = "dashDot",
    /** Large Dash Dot. Serialized value: `lgDashDot` */
    LargeDashDot = "lgDashDot",
    /** Large Dash Dot Dot. Serialized value: `lgDashDotDot` */
    LargeDashDotDot = "lgDashDotDot",
    /** System Dash. Serialized value: `sysDash` */
    SystemDash = "sysDash",
    /** System Dot. Serialized value: `sysDot` */
    SystemDot = "sysDot",
    /** System Dash Dot. Serialized value: `sysDashDot` */
    SystemDashDot = "sysDashDot",
    /** System Dash Dot Dot. Serialized value: `sysDashDotDot` */
    SystemDashDotDot = "sysDashDotDot"
}
export declare const PresetLineDashValuesArray: readonly [PresetLineDashValues.Solid, PresetLineDashValues.Dot, PresetLineDashValues.Dash, PresetLineDashValues.LargeDash, PresetLineDashValues.DashDot, PresetLineDashValues.LargeDashDot, PresetLineDashValues.LargeDashDotDot, PresetLineDashValues.SystemDash, PresetLineDashValues.SystemDot, PresetLineDashValues.SystemDashDot, PresetLineDashValues.SystemDashDotDot];
export declare enum LineCapValues {
    /** Round Line Cap. Serialized value: `rnd` */
    Round = "rnd",
    /** Square Line Cap. Serialized value: `sq` */
    Square = "sq",
    /** Flat Line Cap. Serialized value: `flat` */
    Flat = "flat"
}
export declare const LineCapValuesArray: readonly [LineCapValues.Round, LineCapValues.Square, LineCapValues.Flat];
export declare enum PenAlignmentValues {
    /** Center Alignment. Serialized value: `ctr` */
    Center = "ctr",
    /** Inset Alignment. Serialized value: `in` */
    Insert = "in"
}
export declare const PenAlignmentValuesArray: readonly [PenAlignmentValues.Center, PenAlignmentValues.Insert];
export declare enum CompoundLineValues {
    /** Single Line. Serialized value: `sng` */
    Single = "sng",
    /** Double Lines. Serialized value: `dbl` */
    Double = "dbl",
    /** Thick Thin Double Lines. Serialized value: `thickThin` */
    ThickThin = "thickThin",
    /** Thin Thick Double Lines. Serialized value: `thinThick` */
    ThinThick = "thinThick",
    /** Thin Thick Thin Triple Lines. Serialized value: `tri` */
    Triple = "tri"
}
export declare const CompoundLineValuesArray: readonly [CompoundLineValues.Single, CompoundLineValues.Double, CompoundLineValues.ThickThin, CompoundLineValues.ThinThick, CompoundLineValues.Triple];
export declare enum BooleanStyleValues {
    /** On. Serialized value: `on` */
    On = "on",
    /** Off. Serialized value: `off` */
    Off = "off",
    /** Default. Serialized value: `def` */
    Default = "def"
}
export declare const BooleanStyleValuesArray: readonly [BooleanStyleValues.On, BooleanStyleValues.Off, BooleanStyleValues.Default];
export declare enum TextVerticalOverflowValues {
    /** Text Overflow Enum ( Overflow ). Serialized value: `overflow` */
    Overflow = "overflow",
    /** Text Overflow Enum ( Ellipsis ). Serialized value: `ellipsis` */
    Ellipsis = "ellipsis",
    /** Text Overflow Enum ( Clip ). Serialized value: `clip` */
    Clip = "clip"
}
export declare const TextVerticalOverflowValuesArray: readonly [TextVerticalOverflowValues.Overflow, TextVerticalOverflowValues.Ellipsis, TextVerticalOverflowValues.Clip];
export declare enum TextHorizontalOverflowValues {
    /** Text Horizontal Overflow Enum ( Overflow ). Serialized value: `overflow` */
    Overflow = "overflow",
    /** Text Horizontal Overflow Enum ( Clip ). Serialized value: `clip` */
    Clip = "clip"
}
export declare const TextHorizontalOverflowValuesArray: readonly [TextHorizontalOverflowValues.Overflow, TextHorizontalOverflowValues.Clip];
export declare enum TextVerticalValues {
    /** Vertical Text Type Enum ( Horizontal ). Serialized value: `horz` */
    Horizontal = "horz",
    /** Vertical Text Type Enum ( Vertical ). Serialized value: `vert` */
    Vertical = "vert",
    /** Vertical Text Type Enum ( Vertical 270 ). Serialized value: `vert270` */
    Vertical270 = "vert270",
    /** Vertical Text Type Enum ( WordArt Vertical ). Serialized value: `wordArtVert` */
    WordArtVertical = "wordArtVert",
    /** Vertical Text Type Enum ( East Asian Vertical ). Serialized value: `eaVert` */
    EastAsianVetical = "eaVert",
    /** Vertical Text Type Enum ( Mongolian Vertical ). Serialized value: `mongolianVert` */
    MongolianVertical = "mongolianVert",
    /** Vertical WordArt Right to Left. Serialized value: `wordArtVertRtl` */
    WordArtLeftToRight = "wordArtVertRtl"
}
export declare const TextVerticalValuesArray: readonly [TextVerticalValues.Horizontal, TextVerticalValues.Vertical, TextVerticalValues.Vertical270, TextVerticalValues.WordArtVertical, TextVerticalValues.EastAsianVetical, TextVerticalValues.MongolianVertical, TextVerticalValues.WordArtLeftToRight];
export declare enum TextWrappingValues {
    /** Text Wrapping Type Enum ( None ). Serialized value: `none` */
    None = "none",
    /** Text Wrapping Type Enum ( Square ). Serialized value: `square` */
    Square = "square"
}
export declare const TextWrappingValuesArray: readonly [TextWrappingValues.None, TextWrappingValues.Square];
export declare enum TextAnchoringTypeValues {
    /** Text Anchoring Type Enum ( Top ). Serialized value: `t` */
    Top = "t",
    /** Text Anchor Enum ( Center ). Serialized value: `ctr` */
    Center = "ctr",
    /** Text Anchor Enum ( Bottom ). Serialized value: `b` */
    Bottom = "b"
}
export declare const TextAnchoringTypeValuesArray: readonly [TextAnchoringTypeValues.Top, TextAnchoringTypeValues.Center, TextAnchoringTypeValues.Bottom];
export declare enum TextAutoNumberSchemeValues {
    /** Autonumber Enum ( alphaLcParenBoth ). Serialized value: `alphaLcParenBoth` */
    AlphaLowerCharacterParenBoth = "alphaLcParenBoth",
    /** Autonumbering Enum ( alphaUcParenBoth ). Serialized value: `alphaUcParenBoth` */
    AlphaUpperCharacterParenBoth = "alphaUcParenBoth",
    /** Autonumbering Enum ( alphaLcParenR ). Serialized value: `alphaLcParenR` */
    AlphaLowerCharacterParenR = "alphaLcParenR",
    /** Autonumbering Enum ( alphaUcParenR ). Serialized value: `alphaUcParenR` */
    AlphaUpperCharacterParenR = "alphaUcParenR",
    /** Autonumbering Enum ( alphaLcPeriod ). Serialized value: `alphaLcPeriod` */
    AlphaLowerCharacterPeriod = "alphaLcPeriod",
    /** Autonumbering Enum ( alphaUcPeriod ). Serialized value: `alphaUcPeriod` */
    AlphaUpperCharacterPeriod = "alphaUcPeriod",
    /** Autonumbering Enum ( arabicParenBoth ). Serialized value: `arabicParenBoth` */
    ArabicParenBoth = "arabicParenBoth",
    /** Autonumbering Enum ( arabicParenR ). Serialized value: `arabicParenR` */
    ArabicParenR = "arabicParenR",
    /** Autonumbering Enum ( arabicPeriod ). Serialized value: `arabicPeriod` */
    ArabicPeriod = "arabicPeriod",
    /** Autonumbering Enum ( arabicPlain ). Serialized value: `arabicPlain` */
    ArabicPlain = "arabicPlain",
    /** Autonumbering Enum ( romanLcParenBoth ). Serialized value: `romanLcParenBoth` */
    RomanLowerCharacterParenBoth = "romanLcParenBoth",
    /** Autonumbering Enum ( romanUcParenBoth ). Serialized value: `romanUcParenBoth` */
    RomanUpperCharacterParenBoth = "romanUcParenBoth",
    /** Autonumbering Enum ( romanLcParenR ). Serialized value: `romanLcParenR` */
    RomanLowerCharacterParenR = "romanLcParenR",
    /** Autonumbering Enum ( romanUcParenR ). Serialized value: `romanUcParenR` */
    RomanUpperCharacterParenR = "romanUcParenR",
    /** Autonumbering Enum ( romanLcPeriod ). Serialized value: `romanLcPeriod` */
    RomanLowerCharacterPeriod = "romanLcPeriod",
    /** Autonumbering Enum ( romanUcPeriod ). Serialized value: `romanUcPeriod` */
    RomanUpperCharacterPeriod = "romanUcPeriod",
    /** Autonumbering Enum ( circleNumDbPlain ). Serialized value: `circleNumDbPlain` */
    CircleNumberDoubleBytePlain = "circleNumDbPlain",
    /** Autonumbering Enum ( circleNumWdBlackPlain ). Serialized value: `circleNumWdBlackPlain` */
    CircleNumberWingdingsBlackPlain = "circleNumWdBlackPlain",
    /** Autonumbering Enum ( circleNumWdWhitePlain ). Serialized value: `circleNumWdWhitePlain` */
    CircleNumberWingdingsWhitePlain = "circleNumWdWhitePlain",
    /** Autonumbering Enum ( arabicDbPeriod ). Serialized value: `arabicDbPeriod` */
    ArabicDoubleBytePeriod = "arabicDbPeriod",
    /** Autonumbering Enum ( arabicDbPlain ). Serialized value: `arabicDbPlain` */
    ArabicDoubleBytePlain = "arabicDbPlain",
    /** Autonumbering Enum ( ea1ChsPeriod ). Serialized value: `ea1ChsPeriod` */
    EastAsianSimplifiedChinesePeriod = "ea1ChsPeriod",
    /** Autonumbering Enum ( ea1ChsPlain ). Serialized value: `ea1ChsPlain` */
    EastAsianSimplifiedChinesePlain = "ea1ChsPlain",
    /** Autonumbering Enum ( ea1ChtPeriod ). Serialized value: `ea1ChtPeriod` */
    EastAsianTraditionalChinesePeriod = "ea1ChtPeriod",
    /** Autonumbering Enum ( ea1ChtPlain ). Serialized value: `ea1ChtPlain` */
    EastAsianTraditionalChinesePlain = "ea1ChtPlain",
    /** Autonumbering Enum ( ea1JpnChsDbPeriod ). Serialized value: `ea1JpnChsDbPeriod` */
    EastAsianJapaneseDoubleBytePeriod = "ea1JpnChsDbPeriod",
    /** Autonumbering Enum ( ea1JpnKorPlain ). Serialized value: `ea1JpnKorPlain` */
    EastAsianJapaneseKoreanPlain = "ea1JpnKorPlain",
    /** Autonumbering Enum ( ea1JpnKorPeriod ). Serialized value: `ea1JpnKorPeriod` */
    EastAsianJapaneseKoreanPeriod = "ea1JpnKorPeriod",
    /** Autonumbering Enum ( arabic1Minus ). Serialized value: `arabic1Minus` */
    Arabic1Minus = "arabic1Minus",
    /** Autonumbering Enum ( arabic2Minus ). Serialized value: `arabic2Minus` */
    Arabic2Minus = "arabic2Minus",
    /** Autonumbering Enum ( hebrew2Minus ). Serialized value: `hebrew2Minus` */
    Hebrew2Minus = "hebrew2Minus",
    /** Autonumbering Enum ( thaiAlphaPeriod ). Serialized value: `thaiAlphaPeriod` */
    ThaiAlphaPeriod = "thaiAlphaPeriod",
    /** Autonumbering Enum ( thaiAlphaParenR ). Serialized value: `thaiAlphaParenR` */
    ThaiAlphaParenthesisRight = "thaiAlphaParenR",
    /** Autonumbering Enum ( thaiAlphaParenBoth ). Serialized value: `thaiAlphaParenBoth` */
    ThaiAlphaParenthesisBoth = "thaiAlphaParenBoth",
    /** Autonumbering Enum ( thaiNumPeriod ). Serialized value: `thaiNumPeriod` */
    ThaiNumberPeriod = "thaiNumPeriod",
    /** Autonumbering Enum ( thaiNumParenR ). Serialized value: `thaiNumParenR` */
    ThaiNumberParenthesisRight = "thaiNumParenR",
    /** Autonumbering Enum ( thaiNumParenBoth ). Serialized value: `thaiNumParenBoth` */
    ThaiNumberParenthesisBoth = "thaiNumParenBoth",
    /** Autonumbering Enum ( hindiAlphaPeriod ). Serialized value: `hindiAlphaPeriod` */
    HindiAlphaPeriod = "hindiAlphaPeriod",
    /** Autonumbering Enum ( hindiNumPeriod ). Serialized value: `hindiNumPeriod` */
    HindiNumPeriod = "hindiNumPeriod",
    /** Autonumbering Enum ( hindiNumParenR ). Serialized value: `hindiNumParenR` */
    HindiNumberParenthesisRight = "hindiNumParenR",
    /** Autonumbering Enum ( hindiAlpha1Period ). Serialized value: `hindiAlpha1Period` */
    HindiAlpha1Period = "hindiAlpha1Period"
}
export declare const TextAutoNumberSchemeValuesArray: readonly [TextAutoNumberSchemeValues.AlphaLowerCharacterParenBoth, TextAutoNumberSchemeValues.AlphaUpperCharacterParenBoth, TextAutoNumberSchemeValues.AlphaLowerCharacterParenR, TextAutoNumberSchemeValues.AlphaUpperCharacterParenR, TextAutoNumberSchemeValues.AlphaLowerCharacterPeriod, TextAutoNumberSchemeValues.AlphaUpperCharacterPeriod, TextAutoNumberSchemeValues.ArabicParenBoth, TextAutoNumberSchemeValues.ArabicParenR, TextAutoNumberSchemeValues.ArabicPeriod, TextAutoNumberSchemeValues.ArabicPlain, TextAutoNumberSchemeValues.RomanLowerCharacterParenBoth, TextAutoNumberSchemeValues.RomanUpperCharacterParenBoth, TextAutoNumberSchemeValues.RomanLowerCharacterParenR, TextAutoNumberSchemeValues.RomanUpperCharacterParenR, TextAutoNumberSchemeValues.RomanLowerCharacterPeriod, TextAutoNumberSchemeValues.RomanUpperCharacterPeriod, TextAutoNumberSchemeValues.CircleNumberDoubleBytePlain, TextAutoNumberSchemeValues.CircleNumberWingdingsBlackPlain, TextAutoNumberSchemeValues.CircleNumberWingdingsWhitePlain, TextAutoNumberSchemeValues.ArabicDoubleBytePeriod, TextAutoNumberSchemeValues.ArabicDoubleBytePlain, TextAutoNumberSchemeValues.EastAsianSimplifiedChinesePeriod, TextAutoNumberSchemeValues.EastAsianSimplifiedChinesePlain, TextAutoNumberSchemeValues.EastAsianTraditionalChinesePeriod, TextAutoNumberSchemeValues.EastAsianTraditionalChinesePlain, TextAutoNumberSchemeValues.EastAsianJapaneseDoubleBytePeriod, TextAutoNumberSchemeValues.EastAsianJapaneseKoreanPlain, TextAutoNumberSchemeValues.EastAsianJapaneseKoreanPeriod, TextAutoNumberSchemeValues.Arabic1Minus, TextAutoNumberSchemeValues.Arabic2Minus, TextAutoNumberSchemeValues.Hebrew2Minus, TextAutoNumberSchemeValues.ThaiAlphaPeriod, TextAutoNumberSchemeValues.ThaiAlphaParenthesisRight, TextAutoNumberSchemeValues.ThaiAlphaParenthesisBoth, TextAutoNumberSchemeValues.ThaiNumberPeriod, TextAutoNumberSchemeValues.ThaiNumberParenthesisRight, TextAutoNumberSchemeValues.ThaiNumberParenthesisBoth, TextAutoNumberSchemeValues.HindiAlphaPeriod, TextAutoNumberSchemeValues.HindiNumPeriod, TextAutoNumberSchemeValues.HindiNumberParenthesisRight, TextAutoNumberSchemeValues.HindiAlpha1Period];
export declare enum TextUnderlineValues {
    /** Text Underline Enum ( None ). Serialized value: `none` */
    None = "none",
    /** Text Underline Enum ( Words ). Serialized value: `words` */
    Words = "words",
    /** Text Underline Enum ( Single ). Serialized value: `sng` */
    Single = "sng",
    /** Text Underline Enum ( Double ). Serialized value: `dbl` */
    Double = "dbl",
    /** Text Underline Enum ( Heavy ). Serialized value: `heavy` */
    Heavy = "heavy",
    /** Text Underline Enum ( Dotted ). Serialized value: `dotted` */
    Dotted = "dotted",
    /** Text Underline Enum ( Heavy Dotted  ). Serialized value: `dottedHeavy` */
    HeavyDotted = "dottedHeavy",
    /** Text Underline Enum ( Dashed ). Serialized value: `dash` */
    Dash = "dash",
    /** Text Underline Enum ( Heavy Dashed ). Serialized value: `dashHeavy` */
    DashHeavy = "dashHeavy",
    /** Text Underline Enum ( Long Dashed ). Serialized value: `dashLong` */
    DashLong = "dashLong",
    /** Text Underline Enum ( Heavy Long Dashed ). Serialized value: `dashLongHeavy` */
    DashLongHeavy = "dashLongHeavy",
    /** Text Underline Enum ( Dot Dash ). Serialized value: `dotDash` */
    DotDash = "dotDash",
    /** Text Underline Enum ( Heavy Dot Dash ). Serialized value: `dotDashHeavy` */
    DotDashHeavy = "dotDashHeavy",
    /** Text Underline Enum ( Dot Dot Dash ). Serialized value: `dotDotDash` */
    DotDotDash = "dotDotDash",
    /** Text Underline Enum ( Heavy Dot Dot Dash ). Serialized value: `dotDotDashHeavy` */
    DotDotDashHeavy = "dotDotDashHeavy",
    /** Text Underline Enum ( Wavy ). Serialized value: `wavy` */
    Wavy = "wavy",
    /** Text Underline Enum ( Heavy Wavy ). Serialized value: `wavyHeavy` */
    WavyHeavy = "wavyHeavy",
    /** Text Underline Enum ( Double Wavy ). Serialized value: `wavyDbl` */
    WavyDouble = "wavyDbl"
}
export declare const TextUnderlineValuesArray: readonly [TextUnderlineValues.None, TextUnderlineValues.Words, TextUnderlineValues.Single, TextUnderlineValues.Double, TextUnderlineValues.Heavy, TextUnderlineValues.Dotted, TextUnderlineValues.HeavyDotted, TextUnderlineValues.Dash, TextUnderlineValues.DashHeavy, TextUnderlineValues.DashLong, TextUnderlineValues.DashLongHeavy, TextUnderlineValues.DotDash, TextUnderlineValues.DotDashHeavy, TextUnderlineValues.DotDotDash, TextUnderlineValues.DotDotDashHeavy, TextUnderlineValues.Wavy, TextUnderlineValues.WavyHeavy, TextUnderlineValues.WavyDouble];
export declare enum TextStrikeValues {
    /** Text Strike Enum ( No Strike ). Serialized value: `noStrike` */
    NoStrike = "noStrike",
    /** Text Strike Enum ( Single Strike ). Serialized value: `sngStrike` */
    SingleStrike = "sngStrike",
    /** Text Strike Enum ( Double Strike ). Serialized value: `dblStrike` */
    DoubleStrike = "dblStrike"
}
export declare const TextStrikeValuesArray: readonly [TextStrikeValues.NoStrike, TextStrikeValues.SingleStrike, TextStrikeValues.DoubleStrike];
export declare enum TextCapsValues {
    /** Text Caps Enum ( None ). Serialized value: `none` */
    None = "none",
    /** Text Caps Enum ( Small ). Serialized value: `small` */
    Small = "small",
    /** Text Caps Enum ( All ). Serialized value: `all` */
    All = "all"
}
export declare const TextCapsValuesArray: readonly [TextCapsValues.None, TextCapsValues.Small, TextCapsValues.All];
export declare enum TextTabAlignmentValues {
    /** Text Tab Alignment Enum ( Left). Serialized value: `l` */
    Left = "l",
    /** Text Tab Alignment Enum ( Center ). Serialized value: `ctr` */
    Center = "ctr",
    /** Text Tab Alignment Enum ( Right ). Serialized value: `r` */
    Right = "r",
    /** Text Tab Alignment Enum ( Decimal ). Serialized value: `dec` */
    Decimal = "dec"
}
export declare const TextTabAlignmentValuesArray: readonly [TextTabAlignmentValues.Left, TextTabAlignmentValues.Center, TextTabAlignmentValues.Right, TextTabAlignmentValues.Decimal];
export declare enum TextAlignmentTypeValues {
    /** Text Alignment Enum ( Left ). Serialized value: `l` */
    Left = "l",
    /** Text Alignment Enum ( Center ). Serialized value: `ctr` */
    Center = "ctr",
    /** Text Alignment Enum ( Right ). Serialized value: `r` */
    Right = "r",
    /** Text Alignment Enum ( Justified ). Serialized value: `just` */
    Justified = "just",
    /** Text Alignment Enum ( Justified Low ). Serialized value: `justLow` */
    JustifiedLow = "justLow",
    /** Text Alignment Enum ( Distributed ). Serialized value: `dist` */
    Distributed = "dist",
    /** Text Alignment Enum ( Thai Distributed ). Serialized value: `thaiDist` */
    ThaiDistributed = "thaiDist"
}
export declare const TextAlignmentTypeValuesArray: readonly [TextAlignmentTypeValues.Left, TextAlignmentTypeValues.Center, TextAlignmentTypeValues.Right, TextAlignmentTypeValues.Justified, TextAlignmentTypeValues.JustifiedLow, TextAlignmentTypeValues.Distributed, TextAlignmentTypeValues.ThaiDistributed];
export declare enum TextFontAlignmentValues {
    /** Font Alignment Enum ( Automatic ). Serialized value: `auto` */
    Automatic = "auto",
    /** Font Alignment Enum ( Top ). Serialized value: `t` */
    Top = "t",
    /** Font Alignment Enum ( Center ). Serialized value: `ctr` */
    Center = "ctr",
    /** Font Alignment Enum ( Baseline ). Serialized value: `base` */
    Baseline = "base",
    /** Font Alignment Enum ( Bottom ). Serialized value: `b` */
    Bottom = "b"
}
export declare const TextFontAlignmentValuesArray: readonly [TextFontAlignmentValues.Automatic, TextFontAlignmentValues.Top, TextFontAlignmentValues.Center, TextFontAlignmentValues.Baseline, TextFontAlignmentValues.Bottom];
export declare enum PresetColorValues {
    /** Alice Blue Preset Color. Serialized value: `aliceBlue` */
    AliceBlue = "aliceBlue",
    /** Antique White Preset Color. Serialized value: `antiqueWhite` */
    AntiqueWhite = "antiqueWhite",
    /** Aqua Preset Color. Serialized value: `aqua` */
    Aqua = "aqua",
    /** Aquamarine Preset Color. Serialized value: `aquamarine` */
    Aquamarine = "aquamarine",
    /** Azure Preset Color. Serialized value: `azure` */
    Azure = "azure",
    /** Beige Preset Color. Serialized value: `beige` */
    Beige = "beige",
    /** Bisque Preset Color. Serialized value: `bisque` */
    Bisque = "bisque",
    /** Black Preset Color. Serialized value: `black` */
    Black = "black",
    /** Blanched Almond Preset Color. Serialized value: `blanchedAlmond` */
    BlanchedAlmond = "blanchedAlmond",
    /** Blue Preset Color. Serialized value: `blue` */
    Blue = "blue",
    /** Blue Violet Preset Color. Serialized value: `blueViolet` */
    BlueViolet = "blueViolet",
    /** Brown Preset Color. Serialized value: `brown` */
    Brown = "brown",
    /** Burly Wood Preset Color. Serialized value: `burlyWood` */
    BurlyWood = "burlyWood",
    /** Cadet Blue Preset Color. Serialized value: `cadetBlue` */
    CadetBlue = "cadetBlue",
    /** Chartreuse Preset Color. Serialized value: `chartreuse` */
    Chartreuse = "chartreuse",
    /** Chocolate Preset Color. Serialized value: `chocolate` */
    Chocolate = "chocolate",
    /** Coral Preset Color. Serialized value: `coral` */
    Coral = "coral",
    /** Cornflower Blue Preset Color. Serialized value: `cornflowerBlue` */
    CornflowerBlue = "cornflowerBlue",
    /** Cornsilk Preset Color. Serialized value: `cornsilk` */
    Cornsilk = "cornsilk",
    /** Crimson Preset Color. Serialized value: `crimson` */
    Crimson = "crimson",
    /** Cyan Preset Color. Serialized value: `cyan` */
    Cyan = "cyan",
    /** Dark Blue Preset Color. Serialized value: `dkBlue` */
    DarkBlue = "dkBlue",
    /** Dark Cyan Preset Color. Serialized value: `dkCyan` */
    DarkCyan = "dkCyan",
    /** Dark Goldenrod Preset Color. Serialized value: `dkGoldenrod` */
    DarkGoldenrod = "dkGoldenrod",
    /** Dark Gray Preset Color. Serialized value: `dkGray` */
    DarkGray = "dkGray",
    /** Dark Green Preset Color. Serialized value: `dkGreen` */
    DarkGreen = "dkGreen",
    /** Dark Khaki Preset Color. Serialized value: `dkKhaki` */
    DarkKhaki = "dkKhaki",
    /** Dark Magenta Preset Color. Serialized value: `dkMagenta` */
    DarkMagenta = "dkMagenta",
    /** Dark Olive Green Preset Color. Serialized value: `dkOliveGreen` */
    DarkOliveGreen = "dkOliveGreen",
    /** Dark Orange Preset Color. Serialized value: `dkOrange` */
    DarkOrange = "dkOrange",
    /** Dark Orchid Preset Color. Serialized value: `dkOrchid` */
    DarkOrchid = "dkOrchid",
    /** Dark Red Preset Color. Serialized value: `dkRed` */
    DarkRed = "dkRed",
    /** Dark Salmon Preset Color. Serialized value: `dkSalmon` */
    DarkSalmon = "dkSalmon",
    /** Dark Sea Green Preset Color. Serialized value: `dkSeaGreen` */
    DarkSeaGreen = "dkSeaGreen",
    /** Dark Slate Blue Preset Color. Serialized value: `dkSlateBlue` */
    DarkSlateBlue = "dkSlateBlue",
    /** Dark Slate Gray Preset Color. Serialized value: `dkSlateGray` */
    DarkSlateGray = "dkSlateGray",
    /** Dark Turquoise Preset Color. Serialized value: `dkTurquoise` */
    DarkTurquoise = "dkTurquoise",
    /** Dark Violet Preset Color. Serialized value: `dkViolet` */
    DarkViolet = "dkViolet",
    /** Deep Pink Preset Color. Serialized value: `deepPink` */
    DeepPink = "deepPink",
    /** Deep Sky Blue Preset Color. Serialized value: `deepSkyBlue` */
    DeepSkyBlue = "deepSkyBlue",
    /** Dim Gray Preset Color. Serialized value: `dimGray` */
    DimGray = "dimGray",
    /** Dodger Blue Preset Color. Serialized value: `dodgerBlue` */
    DodgerBlue = "dodgerBlue",
    /** Firebrick Preset Color. Serialized value: `firebrick` */
    Firebrick = "firebrick",
    /** Floral White Preset Color. Serialized value: `floralWhite` */
    FloralWhite = "floralWhite",
    /** Forest Green Preset Color. Serialized value: `forestGreen` */
    ForestGreen = "forestGreen",
    /** Fuchsia Preset Color. Serialized value: `fuchsia` */
    Fuchsia = "fuchsia",
    /** Gainsboro Preset Color. Serialized value: `gainsboro` */
    Gainsboro = "gainsboro",
    /** Ghost White Preset Color. Serialized value: `ghostWhite` */
    GhostWhite = "ghostWhite",
    /** Gold Preset Color. Serialized value: `gold` */
    Gold = "gold",
    /** Goldenrod Preset Color. Serialized value: `goldenrod` */
    Goldenrod = "goldenrod",
    /** Gray Preset Color. Serialized value: `gray` */
    Gray = "gray",
    /** Green Preset Color. Serialized value: `green` */
    Green = "green",
    /** Green Yellow Preset Color. Serialized value: `greenYellow` */
    GreenYellow = "greenYellow",
    /** Honeydew Preset Color. Serialized value: `honeydew` */
    Honeydew = "honeydew",
    /** Hot Pink Preset Color. Serialized value: `hotPink` */
    HotPink = "hotPink",
    /** Indian Red Preset Color. Serialized value: `indianRed` */
    IndianRed = "indianRed",
    /** Indigo Preset Color. Serialized value: `indigo` */
    Indigo = "indigo",
    /** Ivory Preset Color. Serialized value: `ivory` */
    Ivory = "ivory",
    /** Khaki Preset Color. Serialized value: `khaki` */
    Khaki = "khaki",
    /** Lavender Preset Color. Serialized value: `lavender` */
    Lavender = "lavender",
    /** Lavender Blush Preset Color. Serialized value: `lavenderBlush` */
    LavenderBlush = "lavenderBlush",
    /** Lawn Green Preset Color. Serialized value: `lawnGreen` */
    LawnGreen = "lawnGreen",
    /** Lemon Chiffon Preset Color. Serialized value: `lemonChiffon` */
    LemonChiffon = "lemonChiffon",
    /** Light Blue Preset Color. Serialized value: `ltBlue` */
    LightBlue = "ltBlue",
    /** Light Coral Preset Color. Serialized value: `ltCoral` */
    LightCoral = "ltCoral",
    /** Light Cyan Preset Color. Serialized value: `ltCyan` */
    LightCyan = "ltCyan",
    /** Light Goldenrod Yellow Preset Color. Serialized value: `ltGoldenrodYellow` */
    LightGoldenrodYellow = "ltGoldenrodYellow",
    /** Light Gray Preset Color. Serialized value: `ltGray` */
    LightGray = "ltGray",
    /** Light Green Preset Color. Serialized value: `ltGreen` */
    LightGreen = "ltGreen",
    /** Light Pink Preset Color. Serialized value: `ltPink` */
    LightPink = "ltPink",
    /** Light Salmon Preset Color. Serialized value: `ltSalmon` */
    LightSalmon = "ltSalmon",
    /** Light Sea Green Preset Color. Serialized value: `ltSeaGreen` */
    LightSeaGreen = "ltSeaGreen",
    /** Light Sky Blue Preset Color. Serialized value: `ltSkyBlue` */
    LightSkyBlue = "ltSkyBlue",
    /** Light Slate Gray Preset Color. Serialized value: `ltSlateGray` */
    LightSlateGray = "ltSlateGray",
    /** Light Steel Blue Preset Color. Serialized value: `ltSteelBlue` */
    LightSteelBlue = "ltSteelBlue",
    /** Light Yellow Preset Color. Serialized value: `ltYellow` */
    LightYellow = "ltYellow",
    /** Lime Preset Color. Serialized value: `lime` */
    Lime = "lime",
    /** Lime Green Preset Color. Serialized value: `limeGreen` */
    LimeGreen = "limeGreen",
    /** Linen Preset Color. Serialized value: `linen` */
    Linen = "linen",
    /** Magenta Preset Color. Serialized value: `magenta` */
    Magenta = "magenta",
    /** Maroon Preset Color. Serialized value: `maroon` */
    Maroon = "maroon",
    /** Medium Aquamarine Preset Color. Serialized value: `medAquamarine` */
    MedAquamarine = "medAquamarine",
    /** Medium Blue Preset Color. Serialized value: `medBlue` */
    MediumBlue = "medBlue",
    /** Medium Orchid Preset Color. Serialized value: `medOrchid` */
    MediumOrchid = "medOrchid",
    /** Medium Purple Preset Color. Serialized value: `medPurple` */
    MediumPurple = "medPurple",
    /** Medium Sea Green Preset Color. Serialized value: `medSeaGreen` */
    MediumSeaGreen = "medSeaGreen",
    /** Medium Slate Blue Preset Color. Serialized value: `medSlateBlue` */
    MediumSlateBlue = "medSlateBlue",
    /** Medium Spring Green Preset Color. Serialized value: `medSpringGreen` */
    MediumSpringGreen = "medSpringGreen",
    /** Medium Turquoise Preset Color. Serialized value: `medTurquoise` */
    MediumTurquoise = "medTurquoise",
    /** Medium Violet Red Preset Color. Serialized value: `medVioletRed` */
    MediumVioletRed = "medVioletRed",
    /** Midnight Blue Preset Color. Serialized value: `midnightBlue` */
    MidnightBlue = "midnightBlue",
    /** Mint Cream Preset Color. Serialized value: `mintCream` */
    MintCream = "mintCream",
    /** Misty Rose Preset Color. Serialized value: `mistyRose` */
    MistyRose = "mistyRose",
    /** Moccasin Preset Color. Serialized value: `moccasin` */
    Moccasin = "moccasin",
    /** Navajo White Preset Color. Serialized value: `navajoWhite` */
    NavajoWhite = "navajoWhite",
    /** Navy Preset Color. Serialized value: `navy` */
    Navy = "navy",
    /** Old Lace Preset Color. Serialized value: `oldLace` */
    OldLace = "oldLace",
    /** Olive Preset Color. Serialized value: `olive` */
    Olive = "olive",
    /** Olive Drab Preset Color. Serialized value: `oliveDrab` */
    OliveDrab = "oliveDrab",
    /** Orange Preset Color. Serialized value: `orange` */
    Orange = "orange",
    /** Orange Red Preset Color. Serialized value: `orangeRed` */
    OrangeRed = "orangeRed",
    /** Orchid Preset Color. Serialized value: `orchid` */
    Orchid = "orchid",
    /** Pale Goldenrod Preset Color. Serialized value: `paleGoldenrod` */
    PaleGoldenrod = "paleGoldenrod",
    /** Pale Green Preset Color. Serialized value: `paleGreen` */
    PaleGreen = "paleGreen",
    /** Pale Turquoise Preset Color. Serialized value: `paleTurquoise` */
    PaleTurquoise = "paleTurquoise",
    /** Pale Violet Red Preset Color. Serialized value: `paleVioletRed` */
    PaleVioletRed = "paleVioletRed",
    /** Papaya Whip Preset Color. Serialized value: `papayaWhip` */
    PapayaWhip = "papayaWhip",
    /** Peach Puff Preset Color. Serialized value: `peachPuff` */
    PeachPuff = "peachPuff",
    /** Peru Preset Color. Serialized value: `peru` */
    Peru = "peru",
    /** Pink Preset Color. Serialized value: `pink` */
    Pink = "pink",
    /** Plum Preset Color. Serialized value: `plum` */
    Plum = "plum",
    /** Powder Blue Preset Color. Serialized value: `powderBlue` */
    PowderBlue = "powderBlue",
    /** Purple Preset Color. Serialized value: `purple` */
    Purple = "purple",
    /** Red Preset Color. Serialized value: `red` */
    Red = "red",
    /** Rosy Brown Preset Color. Serialized value: `rosyBrown` */
    RosyBrown = "rosyBrown",
    /** Royal Blue Preset Color. Serialized value: `royalBlue` */
    RoyalBlue = "royalBlue",
    /** Saddle Brown Preset Color. Serialized value: `saddleBrown` */
    SaddleBrown = "saddleBrown",
    /** Salmon Preset Color. Serialized value: `salmon` */
    Salmon = "salmon",
    /** Sandy Brown Preset Color. Serialized value: `sandyBrown` */
    SandyBrown = "sandyBrown",
    /** Sea Green Preset Color. Serialized value: `seaGreen` */
    SeaGreen = "seaGreen",
    /** Sea Shell Preset Color. Serialized value: `seaShell` */
    SeaShell = "seaShell",
    /** Sienna Preset Color. Serialized value: `sienna` */
    Sienna = "sienna",
    /** Silver Preset Color. Serialized value: `silver` */
    Silver = "silver",
    /** Sky Blue Preset Color. Serialized value: `skyBlue` */
    SkyBlue = "skyBlue",
    /** Slate Blue Preset Color. Serialized value: `slateBlue` */
    SlateBlue = "slateBlue",
    /** Slate Gray Preset Color. Serialized value: `slateGray` */
    SlateGray = "slateGray",
    /** Snow Preset Color. Serialized value: `snow` */
    Snow = "snow",
    /** Spring Green Preset Color. Serialized value: `springGreen` */
    SpringGreen = "springGreen",
    /** Steel Blue Preset Color. Serialized value: `steelBlue` */
    SteelBlue = "steelBlue",
    /** Tan Preset Color. Serialized value: `tan` */
    Tan = "tan",
    /** Teal Preset Color. Serialized value: `teal` */
    Teal = "teal",
    /** Thistle Preset Color. Serialized value: `thistle` */
    Thistle = "thistle",
    /** Tomato Preset Color. Serialized value: `tomato` */
    Tomato = "tomato",
    /** Turquoise Preset Color. Serialized value: `turquoise` */
    Turquoise = "turquoise",
    /** Violet Preset Color. Serialized value: `violet` */
    Violet = "violet",
    /** Wheat Preset Color. Serialized value: `wheat` */
    Wheat = "wheat",
    /** White Preset Color. Serialized value: `white` */
    White = "white",
    /** White Smoke Preset Color. Serialized value: `whiteSmoke` */
    WhiteSmoke = "whiteSmoke",
    /** Yellow Preset Color. Serialized value: `yellow` */
    Yellow = "yellow",
    /** Yellow Green Preset Color. Serialized value: `yellowGreen` */
    YellowGreen = "yellowGreen",
    /** undefined. Serialized value: `darkBlue` */
    DarkBlue2010 = "darkBlue",
    /** undefined. Serialized value: `darkCyan` */
    DarkCyan2010 = "darkCyan",
    /** undefined. Serialized value: `darkGoldenrod` */
    DarkGoldenrod2010 = "darkGoldenrod",
    /** undefined. Serialized value: `darkGray` */
    DarkGray2010 = "darkGray",
    /** undefined. Serialized value: `darkGrey` */
    DarkGrey2010 = "darkGrey",
    /** undefined. Serialized value: `darkGreen` */
    DarkGreen2010 = "darkGreen",
    /** undefined. Serialized value: `darkKhaki` */
    DarkKhaki2010 = "darkKhaki",
    /** undefined. Serialized value: `darkMagenta` */
    DarkMagenta2010 = "darkMagenta",
    /** undefined. Serialized value: `darkOliveGreen` */
    DarkOliveGreen2010 = "darkOliveGreen",
    /** undefined. Serialized value: `darkOrange` */
    DarkOrange2010 = "darkOrange",
    /** undefined. Serialized value: `darkOrchid` */
    DarkOrchid2010 = "darkOrchid",
    /** undefined. Serialized value: `darkRed` */
    DarkRed2010 = "darkRed",
    /** undefined. Serialized value: `darkSalmon` */
    DarkSalmon2010 = "darkSalmon",
    /** undefined. Serialized value: `darkSeaGreen` */
    DarkSeaGreen2010 = "darkSeaGreen",
    /** undefined. Serialized value: `darkSlateBlue` */
    DarkSlateBlue2010 = "darkSlateBlue",
    /** undefined. Serialized value: `darkSlateGray` */
    DarkSlateGray2010 = "darkSlateGray",
    /** undefined. Serialized value: `darkSlateGrey` */
    DarkSlateGrey2010 = "darkSlateGrey",
    /** undefined. Serialized value: `darkTurquoise` */
    DarkTurquoise2010 = "darkTurquoise",
    /** undefined. Serialized value: `darkViolet` */
    DarkViolet2010 = "darkViolet",
    /** undefined. Serialized value: `lightBlue` */
    LightBlue2010 = "lightBlue",
    /** undefined. Serialized value: `lightCoral` */
    LightCoral2010 = "lightCoral",
    /** undefined. Serialized value: `lightCyan` */
    LightCyan2010 = "lightCyan",
    /** undefined. Serialized value: `lightGoldenrodYellow` */
    LightGoldenrodYellow2010 = "lightGoldenrodYellow",
    /** undefined. Serialized value: `lightGray` */
    LightGray2010 = "lightGray",
    /** undefined. Serialized value: `lightGrey` */
    LightGrey2010 = "lightGrey",
    /** undefined. Serialized value: `lightGreen` */
    LightGreen2010 = "lightGreen",
    /** undefined. Serialized value: `lightPink` */
    LightPink2010 = "lightPink",
    /** undefined. Serialized value: `lightSalmon` */
    LightSalmon2010 = "lightSalmon",
    /** undefined. Serialized value: `lightSeaGreen` */
    LightSeaGreen2010 = "lightSeaGreen",
    /** undefined. Serialized value: `lightSkyBlue` */
    LightSkyBlue2010 = "lightSkyBlue",
    /** undefined. Serialized value: `lightSlateGray` */
    LightSlateGray2010 = "lightSlateGray",
    /** undefined. Serialized value: `lightSlateGrey` */
    LightSlateGrey2010 = "lightSlateGrey",
    /** undefined. Serialized value: `lightSteelBlue` */
    LightSteelBlue2010 = "lightSteelBlue",
    /** undefined. Serialized value: `lightYellow` */
    LightYellow2010 = "lightYellow",
    /** undefined. Serialized value: `mediumAquamarine` */
    MediumAquamarine2010 = "mediumAquamarine",
    /** undefined. Serialized value: `mediumBlue` */
    MediumBlue2010 = "mediumBlue",
    /** undefined. Serialized value: `mediumOrchid` */
    MediumOrchid2010 = "mediumOrchid",
    /** undefined. Serialized value: `mediumPurple` */
    MediumPurple2010 = "mediumPurple",
    /** undefined. Serialized value: `mediumSeaGreen` */
    MediumSeaGreen2010 = "mediumSeaGreen",
    /** undefined. Serialized value: `mediumSlateBlue` */
    MediumSlateBlue2010 = "mediumSlateBlue",
    /** undefined. Serialized value: `mediumSpringGreen` */
    MediumSpringGreen2010 = "mediumSpringGreen",
    /** undefined. Serialized value: `mediumTurquoise` */
    MediumTurquoise2010 = "mediumTurquoise",
    /** undefined. Serialized value: `mediumVioletRed` */
    MediumVioletRed2010 = "mediumVioletRed",
    /** undefined. Serialized value: `dkGrey` */
    DarkGrey = "dkGrey",
    /** undefined. Serialized value: `dimGrey` */
    DimGrey = "dimGrey",
    /** undefined. Serialized value: `dkSlateGrey` */
    DarkSlateGrey = "dkSlateGrey",
    /** undefined. Serialized value: `grey` */
    Grey = "grey",
    /** undefined. Serialized value: `ltGrey` */
    LightGrey = "ltGrey",
    /** undefined. Serialized value: `ltSlateGrey` */
    LightSlateGrey = "ltSlateGrey",
    /** undefined. Serialized value: `slateGrey` */
    SlateGrey = "slateGrey"
}
export declare const PresetColorValuesArray: readonly [PresetColorValues.AliceBlue, PresetColorValues.AntiqueWhite, PresetColorValues.Aqua, PresetColorValues.Aquamarine, PresetColorValues.Azure, PresetColorValues.Beige, PresetColorValues.Bisque, PresetColorValues.Black, PresetColorValues.BlanchedAlmond, PresetColorValues.Blue, PresetColorValues.BlueViolet, PresetColorValues.Brown, PresetColorValues.BurlyWood, PresetColorValues.CadetBlue, PresetColorValues.Chartreuse, PresetColorValues.Chocolate, PresetColorValues.Coral, PresetColorValues.CornflowerBlue, PresetColorValues.Cornsilk, PresetColorValues.Crimson, PresetColorValues.Cyan, PresetColorValues.DarkBlue, PresetColorValues.DarkCyan, PresetColorValues.DarkGoldenrod, PresetColorValues.DarkGray, PresetColorValues.DarkGreen, PresetColorValues.DarkKhaki, PresetColorValues.DarkMagenta, PresetColorValues.DarkOliveGreen, PresetColorValues.DarkOrange, PresetColorValues.DarkOrchid, PresetColorValues.DarkRed, PresetColorValues.DarkSalmon, PresetColorValues.DarkSeaGreen, PresetColorValues.DarkSlateBlue, PresetColorValues.DarkSlateGray, PresetColorValues.DarkTurquoise, PresetColorValues.DarkViolet, PresetColorValues.DeepPink, PresetColorValues.DeepSkyBlue, PresetColorValues.DimGray, PresetColorValues.DodgerBlue, PresetColorValues.Firebrick, PresetColorValues.FloralWhite, PresetColorValues.ForestGreen, PresetColorValues.Fuchsia, PresetColorValues.Gainsboro, PresetColorValues.GhostWhite, PresetColorValues.Gold, PresetColorValues.Goldenrod, PresetColorValues.Gray, PresetColorValues.Green, PresetColorValues.GreenYellow, PresetColorValues.Honeydew, PresetColorValues.HotPink, PresetColorValues.IndianRed, PresetColorValues.Indigo, PresetColorValues.Ivory, PresetColorValues.Khaki, PresetColorValues.Lavender, PresetColorValues.LavenderBlush, PresetColorValues.LawnGreen, PresetColorValues.LemonChiffon, PresetColorValues.LightBlue, PresetColorValues.LightCoral, PresetColorValues.LightCyan, PresetColorValues.LightGoldenrodYellow, PresetColorValues.LightGray, PresetColorValues.LightGreen, PresetColorValues.LightPink, PresetColorValues.LightSalmon, PresetColorValues.LightSeaGreen, PresetColorValues.LightSkyBlue, PresetColorValues.LightSlateGray, PresetColorValues.LightSteelBlue, PresetColorValues.LightYellow, PresetColorValues.Lime, PresetColorValues.LimeGreen, PresetColorValues.Linen, PresetColorValues.Magenta, PresetColorValues.Maroon, PresetColorValues.MedAquamarine, PresetColorValues.MediumBlue, PresetColorValues.MediumOrchid, PresetColorValues.MediumPurple, PresetColorValues.MediumSeaGreen, PresetColorValues.MediumSlateBlue, PresetColorValues.MediumSpringGreen, PresetColorValues.MediumTurquoise, PresetColorValues.MediumVioletRed, PresetColorValues.MidnightBlue, PresetColorValues.MintCream, PresetColorValues.MistyRose, PresetColorValues.Moccasin, PresetColorValues.NavajoWhite, PresetColorValues.Navy, PresetColorValues.OldLace, PresetColorValues.Olive, PresetColorValues.OliveDrab, PresetColorValues.Orange, PresetColorValues.OrangeRed, PresetColorValues.Orchid, PresetColorValues.PaleGoldenrod, PresetColorValues.PaleGreen, PresetColorValues.PaleTurquoise, PresetColorValues.PaleVioletRed, PresetColorValues.PapayaWhip, PresetColorValues.PeachPuff, PresetColorValues.Peru, PresetColorValues.Pink, PresetColorValues.Plum, PresetColorValues.PowderBlue, PresetColorValues.Purple, PresetColorValues.Red, PresetColorValues.RosyBrown, PresetColorValues.RoyalBlue, PresetColorValues.SaddleBrown, PresetColorValues.Salmon, PresetColorValues.SandyBrown, PresetColorValues.SeaGreen, PresetColorValues.SeaShell, PresetColorValues.Sienna, PresetColorValues.Silver, PresetColorValues.SkyBlue, PresetColorValues.SlateBlue, PresetColorValues.SlateGray, PresetColorValues.Snow, PresetColorValues.SpringGreen, PresetColorValues.SteelBlue, PresetColorValues.Tan, PresetColorValues.Teal, PresetColorValues.Thistle, PresetColorValues.Tomato, PresetColorValues.Turquoise, PresetColorValues.Violet, PresetColorValues.Wheat, PresetColorValues.White, PresetColorValues.WhiteSmoke, PresetColorValues.Yellow, PresetColorValues.YellowGreen, PresetColorValues.DarkBlue2010, PresetColorValues.DarkCyan2010, PresetColorValues.DarkGoldenrod2010, PresetColorValues.DarkGray2010, PresetColorValues.DarkGrey2010, PresetColorValues.DarkGreen2010, PresetColorValues.DarkKhaki2010, PresetColorValues.DarkMagenta2010, PresetColorValues.DarkOliveGreen2010, PresetColorValues.DarkOrange2010, PresetColorValues.DarkOrchid2010, PresetColorValues.DarkRed2010, PresetColorValues.DarkSalmon2010, PresetColorValues.DarkSeaGreen2010, PresetColorValues.DarkSlateBlue2010, PresetColorValues.DarkSlateGray2010, PresetColorValues.DarkSlateGrey2010, PresetColorValues.DarkTurquoise2010, PresetColorValues.DarkViolet2010, PresetColorValues.LightBlue2010, PresetColorValues.LightCoral2010, PresetColorValues.LightCyan2010, PresetColorValues.LightGoldenrodYellow2010, PresetColorValues.LightGray2010, PresetColorValues.LightGrey2010, PresetColorValues.LightGreen2010, PresetColorValues.LightPink2010, PresetColorValues.LightSalmon2010, PresetColorValues.LightSeaGreen2010, PresetColorValues.LightSkyBlue2010, PresetColorValues.LightSlateGray2010, PresetColorValues.LightSlateGrey2010, PresetColorValues.LightSteelBlue2010, PresetColorValues.LightYellow2010, PresetColorValues.MediumAquamarine2010, PresetColorValues.MediumBlue2010, PresetColorValues.MediumOrchid2010, PresetColorValues.MediumPurple2010, PresetColorValues.MediumSeaGreen2010, PresetColorValues.MediumSlateBlue2010, PresetColorValues.MediumSpringGreen2010, PresetColorValues.MediumTurquoise2010, PresetColorValues.MediumVioletRed2010, PresetColorValues.DarkGrey, PresetColorValues.DimGrey, PresetColorValues.DarkSlateGrey, PresetColorValues.Grey, PresetColorValues.LightGrey, PresetColorValues.LightSlateGrey, PresetColorValues.SlateGrey];
/** Defines the BlipExtension Class. Serialized as `a:ext` */
export declare class BlipExtension extends OxmlCompositeElement<A14ImageProperties | A14UseLocalDpi | Wp15WebVideoProperty | AsvgSVGBlip | A1611PictureAttributionSourceURL | WoeOEmbed | AoeOEmbedShared> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns A14ImageProperties. */
    get imageProperties(): A14ImageProperties | undefined;
    /** Returns A14UseLocalDpi. */
    get useLocalDpi(): A14UseLocalDpi | undefined;
    /** Returns Wp15WebVideoProperty. */
    get webVideoProperty(): Wp15WebVideoProperty | undefined;
    /** Returns AsvgSVGBlip. */
    get sVGBlip(): AsvgSVGBlip | undefined;
    /** Returns A1611PictureAttributionSourceURL. */
    get pictureAttributionSourceURL(): A1611PictureAttributionSourceURL | undefined;
    /** Returns WoeOEmbed. */
    get oEmbed(): WoeOEmbed | undefined;
    /** Returns AoeOEmbedShared. */
    get oEmbedShared(): AoeOEmbedShared | undefined;
}
/** Future extensions.. Serialized as `a:extLst` */
export declare class BlipExtensionList extends OxmlCompositeElement<BlipExtension> {
    static _Q: string;
}
/** Defines the NonVisualPicturePropertiesExtension Class. Serialized as `a:ext` */
export declare class NonVisualPicturePropertiesExtension extends OxmlCompositeElement<A14CameraTool | A15SignatureLine | A15ObjectProperties | AlfLiveFeedProperties | AifImageFormula> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns A14CameraTool. */
    get cameraTool(): A14CameraTool | undefined;
    /** Returns A15SignatureLine. */
    get signatureLine(): A15SignatureLine | undefined;
    /** Returns A15ObjectProperties. */
    get objectProperties(): A15ObjectProperties | undefined;
    /** Returns AlfLiveFeedProperties. */
    get liveFeedProperties(): AlfLiveFeedProperties | undefined;
    /** Returns AifImageFormula. */
    get imageFormula(): AifImageFormula | undefined;
}
/** Defines the NonVisualPicturePropertiesExtensionList Class. Serialized as `a:extLst` */
export declare class NonVisualPicturePropertiesExtensionList extends OxmlCompositeElement<NonVisualPicturePropertiesExtension> {
    static _Q: string;
}
/** Defines the PictureLocks Class. Serialized as `a:picLocks` */
export declare class PictureLocks extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Disallow Shape Grouping. Serialized as `:noGrp` */
    get noGrouping(): BooleanValue | undefined;
    set noGrouping(v: BooleanValue | undefined);
    /** Disallow Shape Selection. Serialized as `:noSelect` */
    get noSelection(): BooleanValue | undefined;
    set noSelection(v: BooleanValue | undefined);
    /** Disallow Shape Rotation. Serialized as `:noRot` */
    get noRotation(): BooleanValue | undefined;
    set noRotation(v: BooleanValue | undefined);
    /** Disallow Aspect Ratio Change. Serialized as `:noChangeAspect` */
    get noChangeAspect(): BooleanValue | undefined;
    set noChangeAspect(v: BooleanValue | undefined);
    /** Disallow Shape Movement. Serialized as `:noMove` */
    get noMove(): BooleanValue | undefined;
    set noMove(v: BooleanValue | undefined);
    /** Disallow Shape Resize. Serialized as `:noResize` */
    get noResize(): BooleanValue | undefined;
    set noResize(v: BooleanValue | undefined);
    /** Disallow Shape Point Editing. Serialized as `:noEditPoints` */
    get noEditPoints(): BooleanValue | undefined;
    set noEditPoints(v: BooleanValue | undefined);
    /** Disallow Showing Adjust Handles. Serialized as `:noAdjustHandles` */
    get noAdjustHandles(): BooleanValue | undefined;
    set noAdjustHandles(v: BooleanValue | undefined);
    /** Disallow Arrowhead Changes. Serialized as `:noChangeArrowheads` */
    get noChangeArrowheads(): BooleanValue | undefined;
    set noChangeArrowheads(v: BooleanValue | undefined);
    /** Disallow Shape Type Change. Serialized as `:noChangeShapeType` */
    get noChangeShapeType(): BooleanValue | undefined;
    set noChangeShapeType(v: BooleanValue | undefined);
    /** Disallow Crop Changes. Serialized as `:noCrop` */
    get noCrop(): BooleanValue | undefined;
    set noCrop(v: BooleanValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the NonVisualDrawingPropertiesExtension Class. Serialized as `a:ext` */
export declare class NonVisualDrawingPropertiesExtension extends OxmlCompositeElement<A14CompatExtension | A15BackgroundProperties | A16CreationId | A16PredecessorDrawingElementReference | AdecDecorative | AclshClassificationOutcome | AslScriptLink> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns A14CompatExtension. */
    get compatExtension(): A14CompatExtension | undefined;
    /** Returns A15BackgroundProperties. */
    get backgroundProperties(): A15BackgroundProperties | undefined;
    /** Returns A16CreationId. */
    get creationId(): A16CreationId | undefined;
    /** Returns A16PredecessorDrawingElementReference. */
    get predecessorDrawingElementReference(): A16PredecessorDrawingElementReference | undefined;
    /** Returns AdecDecorative. */
    get decorative(): AdecDecorative | undefined;
    /** Returns AclshClassificationOutcome. */
    get classificationOutcome(): AclshClassificationOutcome | undefined;
    /** Returns AslScriptLink. */
    get scriptLink(): AslScriptLink | undefined;
}
/** Future extensions.. Serialized as `a:extLst` */
export declare class LinePropertiesExtensionList extends OxmlCompositeElement<LinePropertiesExtension> {
    static _Q: string;
}
/** Defines the LineEndPropertiesType Class. */
export declare abstract class LineEndPropertiesType extends OxmlLeafElement {
    static _A: string[];
    /** Line Head/End Type. Serialized as `:type` */
    get type(): LineEndValues | undefined;
    set type(v: LineEndValues | undefined);
    /** Width of Head/End. Serialized as `:w` */
    get width(): LineEndWidthValues | undefined;
    set width(v: LineEndWidthValues | undefined);
    /** Length of Head/End. Serialized as `:len` */
    get length(): LineEndLengthValues | undefined;
    set length(v: LineEndLengthValues | undefined);
}
/** default tail line end style is none. Serialized as `a:tailEnd` */
export declare class TailEnd extends LineEndPropertiesType {
    static _Q: string;
}
/** default head line end style is none. Serialized as `a:headEnd` */
export declare class HeadEnd extends LineEndPropertiesType {
    static _Q: string;
}
/** Defines the LinePropertiesExtension Class. Serialized as `a:ext` */
export declare class LinePropertiesExtension extends OxmlCompositeElement<AskLineSketchStyleProperties> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns AskLineSketchStyleProperties. */
    get lineSketchStyleProperties(): AskLineSketchStyleProperties | undefined;
}
/** Future extensions.. Serialized as `a:extLst` */
export declare class HyperlinkExtensionList extends OxmlCompositeElement<HyperlinkExtension> {
    static _Q: string;
}
/** Defines the HyperlinkExtension Class. Serialized as `a:ext` */
export declare class HyperlinkExtension extends OxmlCompositeElement<AhypHyperlinkColor> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns AhypHyperlinkColor. */
    get hyperlinkColor(): AhypHyperlinkColor | undefined;
}
/** Defines the PtExtension Class. Serialized as `a:ext` */
export declare class PtExtension extends OxmlCompositeElement<Dgm14NonVisualDrawingProperties> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns Dgm14NonVisualDrawingProperties. */
    get nonVisualDrawingProperties(): Dgm14NonVisualDrawingProperties | undefined;
}
/** Defines the DataModelExtension Class. Serialized as `a:ext` */
export declare class DataModelExtension extends OxmlCompositeElement<DspDataModelExtensionBlock | Dgm14RecolorImages> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns DspDataModelExtensionBlock. */
    get dataModelExtensionBlock(): DspDataModelExtensionBlock | undefined;
    /** Returns Dgm14RecolorImages. */
    get recolorImages(): Dgm14RecolorImages | undefined;
}
/** Defines the ConnectorLockingExtensionList Class. Serialized as `a:extLst` */
export declare class ConnectorLockingExtensionList extends OxmlCompositeElement<ConnectorLockingExtension> {
    static _Q: string;
}
/** Defines the NonVisualDrawingPropertiesExtensionList Class. Serialized as `a:extLst` */
export declare class NonVisualDrawingPropertiesExtensionList extends OxmlCompositeElement<NonVisualDrawingPropertiesExtension> {
    static _Q: string;
}
/** Defines the RightToLeft Class. Serialized as `a:rtl` */
export declare class RightToLeft extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
/** Defines the HyperlinkType Class. */
export declare abstract class HyperlinkType extends OxmlCompositeElement<HyperlinkSound | HyperlinkExtensionList> {
    static _A: string[];
    /** relationship identifier to find target URI. Serialized as `r:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** In case the url is invalid so we can't create a relationship, we'll save it here, r:id will point to a NULL one. Serialized as `:invalidUrl` */
    get invalidUrl(): StringValue | undefined;
    set invalidUrl(v: StringValue | undefined);
    /** Action to take, it may still need r:id to specify an action target. Serialized as `:action` */
    get action(): StringValue | undefined;
    set action(v: StringValue | undefined);
    /** target frame for navigating to the URI. Serialized as `:tgtFrame` */
    get targetFrame(): StringValue | undefined;
    set targetFrame(v: StringValue | undefined);
    /** tooltip for display. Serialized as `:tooltip` */
    get tooltip(): StringValue | undefined;
    set tooltip(v: StringValue | undefined);
    /** whether to add this URI to the history when navigating to it. Serialized as `:history` */
    get history(): BooleanValue | undefined;
    set history(v: BooleanValue | undefined);
    /** Whether to highlight it when click on a shape. Serialized as `:highlightClick` */
    get highlightClick(): BooleanValue | undefined;
    set highlightClick(v: BooleanValue | undefined);
    /** Whether to stop previous sound when click on it. Serialized as `:endSnd` */
    get endSound(): BooleanValue | undefined;
    set endSound(v: BooleanValue | undefined);
    /** Sound to play.. */
    get hyperlinkSound(): HyperlinkSound | undefined;
    /** Future extensions.. */
    get hyperlinkExtensionList(): HyperlinkExtensionList | undefined;
}
/** Defines the HyperlinkOnHover Class. Serialized as `a:hlinkHover` */
export declare class HyperlinkOnHover extends HyperlinkType {
    static _Q: string;
}
/** Defines the HyperlinkOnMouseOver Class. Serialized as `a:hlinkMouseOver` */
export declare class HyperlinkOnMouseOver extends HyperlinkType {
    static _Q: string;
}
/** Defines the HyperlinkOnClick Class. Serialized as `a:hlinkClick` */
export declare class HyperlinkOnClick extends HyperlinkType {
    static _Q: string;
}
/** Defines the OfficeStyleSheetExtensionList Class. Serialized as `a:extLst` */
export declare class OfficeStyleSheetExtensionList extends OxmlCompositeElement<OfficeStyleSheetExtension> {
    static _Q: string;
}
/** Defines the CustomColorList Class. Serialized as `a:custClrLst` */
export declare class CustomColorList extends OxmlCompositeElement<CustomColor> {
    static _Q: string;
}
/** Defines the ExtraColorSchemeList Class. Serialized as `a:extraClrSchemeLst` */
export declare class ExtraColorSchemeList extends OxmlCompositeElement<ExtraColorScheme> {
    static _Q: string;
}
/** Defines the ObjectDefaults Class. Serialized as `a:objectDefaults` */
export declare class ObjectDefaults extends OxmlCompositeElement<ShapeDefault | LineDefault | TextDefault | ExtensionList> {
    static _Q: string;
    /** Shape Default. */
    get shapeDefault(): ShapeDefault | undefined;
    /** Line Default. */
    get lineDefault(): LineDefault | undefined;
    /** Text Default. */
    get textDefault(): TextDefault | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the NonVisualGroupDrawingShapePropsExtensionList Class. Serialized as `a:extLst` */
export declare class NonVisualGroupDrawingShapePropsExtensionList extends OxmlCompositeElement<NonVisualGroupDrawingShapePropsExtension> {
    static _Q: string;
}
/** Defines the GroupShapeLocks Class. Serialized as `a:grpSpLocks` */
export declare class GroupShapeLocks extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Disallow Shape Grouping. Serialized as `:noGrp` */
    get noGrouping(): BooleanValue | undefined;
    set noGrouping(v: BooleanValue | undefined);
    /** Disallow Shape Ungrouping. Serialized as `:noUngrp` */
    get noUngrouping(): BooleanValue | undefined;
    set noUngrouping(v: BooleanValue | undefined);
    /** Disallow Shape Selection. Serialized as `:noSelect` */
    get noSelection(): BooleanValue | undefined;
    set noSelection(v: BooleanValue | undefined);
    /** Disallow Shape Rotation. Serialized as `:noRot` */
    get noRotation(): BooleanValue | undefined;
    set noRotation(v: BooleanValue | undefined);
    /** Disallow Aspect Ratio Change. Serialized as `:noChangeAspect` */
    get noChangeAspect(): BooleanValue | undefined;
    set noChangeAspect(v: BooleanValue | undefined);
    /** Disallow Moving Shape. Serialized as `:noMove` */
    get noMove(): BooleanValue | undefined;
    set noMove(v: BooleanValue | undefined);
    /** Disallow Shape Resizing. Serialized as `:noResize` */
    get noResize(): BooleanValue | undefined;
    set noResize(v: BooleanValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the ConnectorLockingExtension Class. Serialized as `a:ext` */
export declare class ConnectorLockingExtension extends OxmlCompositeElement<Graphic> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns Graphic. */
    get graphic(): Graphic | undefined;
}
/** Defines the OfficeStyleSheetExtension Class. Serialized as `a:ext` */
export declare class OfficeStyleSheetExtension extends OxmlCompositeElement<Thm15ThemeFamily> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns Thm15ThemeFamily. */
    get themeFamily(): Thm15ThemeFamily | undefined;
}
/** Defines the NonVisualGroupDrawingShapePropsExtension Class. Serialized as `a:ext` */
export declare class NonVisualGroupDrawingShapePropsExtension extends OxmlCompositeElement<A15NonVisualGroupProperties> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns A15NonVisualGroupProperties. */
    get nonVisualGroupProperties(): A15NonVisualGroupProperties | undefined;
}
/** Defines the GvmlGroupShapeExtensionList Class. Serialized as `a:extLst` */
export declare class GvmlGroupShapeExtensionList extends OxmlCompositeElement<GvmlGroupShapeExtension> {
    static _Q: string;
}
/** Group shape. Serialized as `a:grpSp` */
export declare class GroupShape extends OxmlCompositeElement<NonVisualGroupShapeProperties | VisualGroupShapeProperties | TextShape | Shape | ConnectionShape | Picture | A14GvmlContentPart | GraphicFrame | GroupShape | GvmlGroupShapeExtensionList> {
    static _Q: string;
    /** Non-Visual Properties for a Group Shape. */
    get nonVisualGroupShapeProperties(): NonVisualGroupShapeProperties | undefined;
    /** Visual Group Shape Properties. */
    get visualGroupShapeProperties(): VisualGroupShapeProperties | undefined;
}
/** Graphic Frame. Serialized as `a:graphicFrame` */
export declare class GraphicFrame extends OxmlCompositeElement<NonVisualGraphicFrameProperties | Graphic | Transform2D | ExtensionList> {
    static _Q: string;
    /** Non-Visual Properties for a Graphic Frame. */
    get nonVisualGraphicFrameProperties(): NonVisualGraphicFrameProperties | undefined;
    /** Returns Graphic. */
    get graphic(): Graphic | undefined;
    /** Returns Transform2D. */
    get transform2D(): Transform2D | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Picture. Serialized as `a:pic` */
export declare class Picture extends OxmlCompositeElement<NonVisualPictureProperties | BlipFill | ShapeProperties | ShapeStyle | ExtensionList> {
    static _Q: string;
    /** Non-Visual Properties for a Picture. */
    get nonVisualPictureProperties(): NonVisualPictureProperties | undefined;
    /** Picture Fill. */
    get blipFill(): BlipFill | undefined;
    /** Shape Properties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns ShapeStyle. */
    get shapeStyle(): ShapeStyle | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Connection Shape. Serialized as `a:cxnSp` */
export declare class ConnectionShape extends OxmlCompositeElement<NonVisualConnectionShapeProperties | ShapeProperties | ShapeStyle | ExtensionList> {
    static _Q: string;
    /** Non-Visual Properties for a Connection Shape. */
    get nonVisualConnectionShapeProperties(): NonVisualConnectionShapeProperties | undefined;
    /** Visual Properties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Shape Style. */
    get shapeStyle(): ShapeStyle | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Shape. Serialized as `a:sp` */
export declare class Shape extends OxmlCompositeElement<NonVisualShapeProperties | ShapeProperties | TextShape | ShapeStyle | ExtensionList> {
    static _Q: string;
    /** Non-Visual Properties for a Shape. */
    get nonVisualShapeProperties(): NonVisualShapeProperties | undefined;
    /** Visual Properties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Text Shape. */
    get textShape(): TextShape | undefined;
    /** Style. */
    get shapeStyle(): ShapeStyle | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Visual Group Shape Properties. Serialized as `a:grpSpPr` */
export declare class VisualGroupShapeProperties extends OxmlCompositeElement<TransformGroup | NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill | EffectList | EffectDag | Scene3DType | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Grouped Objects. */
    get transformGroup(): TransformGroup | undefined;
}
/** Non-Visual Properties for a Group Shape. Serialized as `a:nvGrpSpPr` */
export declare class NonVisualGroupShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGroupShapeDrawingProperties> {
    static _Q: string;
    /** Returns NonVisualDrawingProperties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Non-Visual Group Shape Drawing Properties. */
    get nonVisualGroupShapeDrawingProperties(): NonVisualGroupShapeDrawingProperties | undefined;
}
/** Defines the ShapePropertiesExtensionList Class. Serialized as `a:extLst` */
export declare class ShapePropertiesExtensionList extends OxmlCompositeElement<ShapePropertiesExtension> {
    static _Q: string;
}
/** Defines the GvmlGroupShapeExtension Class. Serialized as `a:ext` */
export declare class GvmlGroupShapeExtension extends OxmlCompositeElement<A14IsCanvas> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns A14IsCanvas. */
    get isCanvas(): A14IsCanvas | undefined;
}
/** Defines the ShapePropertiesExtension Class. Serialized as `a:ext` */
export declare class ShapePropertiesExtension extends OxmlCompositeElement<A14HiddenFillProperties | A14HiddenLineProperties | A14HiddenEffectsProperties | A14HiddenScene3D | A14HiddenShape3D | A14ShadowObscured> {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
    /** Returns A14HiddenFillProperties. */
    get hiddenFillProperties(): A14HiddenFillProperties | undefined;
    /** Returns A14HiddenLineProperties. */
    get hiddenLineProperties(): A14HiddenLineProperties | undefined;
    /** Returns A14HiddenEffectsProperties. */
    get hiddenEffectsProperties(): A14HiddenEffectsProperties | undefined;
    /** Returns A14HiddenScene3D. */
    get hiddenScene3D(): A14HiddenScene3D | undefined;
    /** Returns A14HiddenShape3D. */
    get hiddenShape3D(): A14HiddenShape3D | undefined;
    /** Returns A14ShadowObscured. */
    get shadowObscured(): A14ShadowObscured | undefined;
}
/** Defines the Text Class. Serialized as `a:t` */
export declare class Text extends OxmlLeafTextElement {
    static _Q: string;
}
/** Tab List. Serialized as `a:tabLst` */
export declare class TabStopList extends OxmlCompositeElement<TabStop> {
    static _Q: string;
}
/** Defines the TextSpacingType Class. */
export declare abstract class TextSpacingType extends OxmlCompositeElement<SpacingPercent | SpacingPoints> {
    /** Spacing Percent. */
    get spacingPercent(): SpacingPercent | undefined;
    /** Spacing Points. */
    get spacingPoints(): SpacingPoints | undefined;
}
/** Space After. Serialized as `a:spcAft` */
export declare class SpaceAfter extends TextSpacingType {
    static _Q: string;
}
/** Space Before. Serialized as `a:spcBef` */
export declare class SpaceBefore extends TextSpacingType {
    static _Q: string;
}
/** Line Spacing. Serialized as `a:lnSpc` */
export declare class LineSpacing extends TextSpacingType {
    static _Q: string;
}
/** Spacing Points. Serialized as `a:spcPts` */
export declare class SpacingPoints extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Spacing Percent. Serialized as `a:spcPct` */
export declare class SpacingPercent extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Tab Stop. Serialized as `a:tab` */
export declare class TabStop extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Tab Position. Serialized as `:pos` */
    get position(): Int32Value | undefined;
    set position(v: Int32Value | undefined);
    /** Tab Alignment. Serialized as `:algn` */
    get alignment(): TextTabAlignmentValues | undefined;
    set alignment(v: TextTabAlignmentValues | undefined);
}
/** Text Paragraphs. Serialized as `a:p` */
export declare class Paragraph extends OxmlCompositeElement<ParagraphProperties | Run | Break | Field | A14TextMath | EndParagraphRunProperties> {
    static _Q: string;
    /** Text Paragraph Properties. */
    get paragraphProperties(): ParagraphProperties | undefined;
}
/** Defines the TextCharacterPropertiesType Class. */
export declare abstract class TextCharacterPropertiesType extends OxmlCompositeElement<Outline | NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill | EffectList | EffectDag | Highlight | UnderlineFollowsText | Underline | UnderlineFillText | UnderlineFill | LatinFont | EastAsianFont | ComplexScriptFont | SymbolFont | HyperlinkOnClick | HyperlinkOnMouseOver | RightToLeft | ExtensionList> {
    static _A: string[];
    /** kumimoji. Serialized as `:kumimoji` */
    get kumimoji(): BooleanValue | undefined;
    set kumimoji(v: BooleanValue | undefined);
    /** lang. Serialized as `:lang` */
    get language(): StringValue | undefined;
    set language(v: StringValue | undefined);
    /** altLang. Serialized as `:altLang` */
    get alternativeLanguage(): StringValue | undefined;
    set alternativeLanguage(v: StringValue | undefined);
    /** sz. Serialized as `:sz` */
    get fontSize(): Int32Value | undefined;
    set fontSize(v: Int32Value | undefined);
    /** b. Serialized as `:b` */
    get bold(): BooleanValue | undefined;
    set bold(v: BooleanValue | undefined);
    /** i. Serialized as `:i` */
    get italic(): BooleanValue | undefined;
    set italic(v: BooleanValue | undefined);
    /** u. Serialized as `:u` */
    get underline(): TextUnderlineValues | undefined;
    set underline(v: TextUnderlineValues | undefined);
    /** strike. Serialized as `:strike` */
    get strike(): TextStrikeValues | undefined;
    set strike(v: TextStrikeValues | undefined);
    /** kern. Serialized as `:kern` */
    get kerning(): Int32Value | undefined;
    set kerning(v: Int32Value | undefined);
    /** cap. Serialized as `:cap` */
    get capital(): TextCapsValues | undefined;
    set capital(v: TextCapsValues | undefined);
    /** spc. Serialized as `:spc` */
    get spacing(): Int32Value | undefined;
    set spacing(v: Int32Value | undefined);
    /** normalizeH. Serialized as `:normalizeH` */
    get normalizeHeight(): BooleanValue | undefined;
    set normalizeHeight(v: BooleanValue | undefined);
    /** baseline. Serialized as `:baseline` */
    get baseline(): Int32Value | undefined;
    set baseline(v: Int32Value | undefined);
    /** noProof. Serialized as `:noProof` */
    get noProof(): BooleanValue | undefined;
    set noProof(v: BooleanValue | undefined);
    /** dirty. Serialized as `:dirty` */
    get dirty(): BooleanValue | undefined;
    set dirty(v: BooleanValue | undefined);
    /** err. Serialized as `:err` */
    get spellingError(): BooleanValue | undefined;
    set spellingError(v: BooleanValue | undefined);
    /** smtClean. Serialized as `:smtClean` */
    get smartTagClean(): BooleanValue | undefined;
    set smartTagClean(v: BooleanValue | undefined);
    /** smtId. Serialized as `:smtId` */
    get smartTagId(): UInt32Value | undefined;
    set smartTagId(v: UInt32Value | undefined);
    /** bmk. Serialized as `:bmk` */
    get bookmark(): StringValue | undefined;
    set bookmark(v: StringValue | undefined);
    /** Returns Outline. */
    get outline(): Outline | undefined;
}
/** Default Text Run Properties. Serialized as `a:defRPr` */
export declare class DefaultRunProperties extends TextCharacterPropertiesType {
    static _Q: string;
}
/** Text Run Properties. Serialized as `a:rPr` */
export declare class RunProperties extends TextCharacterPropertiesType {
    static _Q: string;
}
/** End Paragraph Run Properties. Serialized as `a:endParaRPr` */
export declare class EndParagraphRunProperties extends TextCharacterPropertiesType {
    static _Q: string;
}
/** Defines the TextParagraphPropertiesType Class. */
export declare abstract class TextParagraphPropertiesType extends OxmlCompositeElement<LineSpacing | SpaceBefore | SpaceAfter | BulletColorText | BulletColor | BulletSizeText | BulletSizePercentage | BulletSizePoints | BulletFontText | BulletFont | NoBullet | AutoNumberedBullet | CharacterBullet | PictureBullet | TabStopList | DefaultRunProperties | ExtensionList> {
    static _A: string[];
    /** Left Margin. Serialized as `:marL` */
    get leftMargin(): Int32Value | undefined;
    set leftMargin(v: Int32Value | undefined);
    /** Right Margin. Serialized as `:marR` */
    get rightMargin(): Int32Value | undefined;
    set rightMargin(v: Int32Value | undefined);
    /** Level. Serialized as `:lvl` */
    get level(): Int32Value | undefined;
    set level(v: Int32Value | undefined);
    /** Indent. Serialized as `:indent` */
    get indent(): Int32Value | undefined;
    set indent(v: Int32Value | undefined);
    /** Alignment. Serialized as `:algn` */
    get alignment(): TextAlignmentTypeValues | undefined;
    set alignment(v: TextAlignmentTypeValues | undefined);
    /** Default Tab Size. Serialized as `:defTabSz` */
    get defaultTabSize(): Int32Value | undefined;
    set defaultTabSize(v: Int32Value | undefined);
    /** Right To Left. Serialized as `:rtl` */
    get rightToLeft(): BooleanValue | undefined;
    set rightToLeft(v: BooleanValue | undefined);
    /** East Asian Line Break. Serialized as `:eaLnBrk` */
    get eastAsianLineBreak(): BooleanValue | undefined;
    set eastAsianLineBreak(v: BooleanValue | undefined);
    /** Font Alignment. Serialized as `:fontAlgn` */
    get fontAlignment(): TextFontAlignmentValues | undefined;
    set fontAlignment(v: TextFontAlignmentValues | undefined);
    /** Latin Line Break. Serialized as `:latinLnBrk` */
    get latinLineBreak(): BooleanValue | undefined;
    set latinLineBreak(v: BooleanValue | undefined);
    /** Hanging Punctuation. Serialized as `:hangingPunct` */
    get height(): BooleanValue | undefined;
    set height(v: BooleanValue | undefined);
    /** Line Spacing. */
    get lineSpacing(): LineSpacing | undefined;
    /** Space Before. */
    get spaceBefore(): SpaceBefore | undefined;
    /** Space After. */
    get spaceAfter(): SpaceAfter | undefined;
}
/** List Level 9 Text Style. Serialized as `a:lvl9pPr` */
export declare class Level9ParagraphProperties extends TextParagraphPropertiesType {
    static _Q: string;
}
/** List Level 8 Text Style. Serialized as `a:lvl8pPr` */
export declare class Level8ParagraphProperties extends TextParagraphPropertiesType {
    static _Q: string;
}
/** List Level 7 Text Style. Serialized as `a:lvl7pPr` */
export declare class Level7ParagraphProperties extends TextParagraphPropertiesType {
    static _Q: string;
}
/** List Level 6 Text Style. Serialized as `a:lvl6pPr` */
export declare class Level6ParagraphProperties extends TextParagraphPropertiesType {
    static _Q: string;
}
/** List Level 5 Text Style. Serialized as `a:lvl5pPr` */
export declare class Level5ParagraphProperties extends TextParagraphPropertiesType {
    static _Q: string;
}
/** List Level 4 Text Style. Serialized as `a:lvl4pPr` */
export declare class Level4ParagraphProperties extends TextParagraphPropertiesType {
    static _Q: string;
}
/** List Level 3 Text Style. Serialized as `a:lvl3pPr` */
export declare class Level3ParagraphProperties extends TextParagraphPropertiesType {
    static _Q: string;
}
/** List Level 2 Text Style. Serialized as `a:lvl2pPr` */
export declare class Level2ParagraphProperties extends TextParagraphPropertiesType {
    static _Q: string;
}
/** List Level 1 Text Style. Serialized as `a:lvl1pPr` */
export declare class Level1ParagraphProperties extends TextParagraphPropertiesType {
    static _Q: string;
}
/** Default Paragraph Style. Serialized as `a:defPPr` */
export declare class DefaultParagraphProperties extends TextParagraphPropertiesType {
    static _Q: string;
}
/** Text Paragraph Properties. Serialized as `a:pPr` */
export declare class ParagraphProperties extends TextParagraphPropertiesType {
    static _Q: string;
}
/** Defines the TablePartStyleType Class. */
export declare abstract class TablePartStyleType extends OxmlCompositeElement<TableCellTextStyle | TableCellStyle> {
    /** Table Cell Text Style. */
    get tableCellTextStyle(): TableCellTextStyle | undefined;
    /** Table Cell Style. */
    get tableCellStyle(): TableCellStyle | undefined;
}
/** Northwest Cell. Serialized as `a:nwCell` */
export declare class NorthwestCell extends TablePartStyleType {
    static _Q: string;
}
/** Northeast Cell. Serialized as `a:neCell` */
export declare class NortheastCell extends TablePartStyleType {
    static _Q: string;
}
/** First Row. Serialized as `a:firstRow` */
export declare class FirstRow extends TablePartStyleType {
    static _Q: string;
}
/** Southwest Cell. Serialized as `a:swCell` */
export declare class SouthwestCell extends TablePartStyleType {
    static _Q: string;
}
/** Southeast Cell. Serialized as `a:seCell` */
export declare class SoutheastCell extends TablePartStyleType {
    static _Q: string;
}
/** Last Row. Serialized as `a:lastRow` */
export declare class LastRow extends TablePartStyleType {
    static _Q: string;
}
/** First Column. Serialized as `a:firstCol` */
export declare class FirstColumn extends TablePartStyleType {
    static _Q: string;
}
/** Last Column. Serialized as `a:lastCol` */
export declare class LastColumn extends TablePartStyleType {
    static _Q: string;
}
/** Band 2 Vertical. Serialized as `a:band2V` */
export declare class Band2Vertical extends TablePartStyleType {
    static _Q: string;
}
/** Band 1 Vertical. Serialized as `a:band1V` */
export declare class Band1Vertical extends TablePartStyleType {
    static _Q: string;
}
/** Band 2 Horizontal. Serialized as `a:band2H` */
export declare class Band2Horizontal extends TablePartStyleType {
    static _Q: string;
}
/** Band 1 Horizontal. Serialized as `a:band1H` */
export declare class Band1Horizontal extends TablePartStyleType {
    static _Q: string;
}
/** Whole Table. Serialized as `a:wholeTbl` */
export declare class WholeTable extends TablePartStyleType {
    static _Q: string;
}
/** Table Background. Serialized as `a:tblBg` */
export declare class TableBackground extends OxmlCompositeElement<FillProperties | FillReference | EffectPropertiesType | EffectReference> {
    static _Q: string;
}
/** Table Cell Style. Serialized as `a:tcStyle` */
export declare class TableCellStyle extends OxmlCompositeElement<TableCellBorders | FillProperties | FillReference | Cell3DProperties> {
    static _Q: string;
    /** Table Cell Borders. */
    get tableCellBorders(): TableCellBorders | undefined;
}
/** Table Cell Text Style. Serialized as `a:tcTxStyle` */
export declare class TableCellTextStyle extends OxmlCompositeElement<Fonts | FontReference | RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Bold. Serialized as `:b` */
    get bold(): BooleanStyleValues | undefined;
    set bold(v: BooleanStyleValues | undefined);
    /** Italic. Serialized as `:i` */
    get italic(): BooleanStyleValues | undefined;
    set italic(v: BooleanStyleValues | undefined);
}
/** Table Cell Borders. Serialized as `a:tcBdr` */
export declare class TableCellBorders extends OxmlCompositeElement<LeftBorder | RightBorder | TopBorder | BottomBorder | InsideHorizontalBorder | InsideVerticalBorder | TopLeftToBottomRightBorder | TopRightToBottomLeftBorder | ExtensionList> {
    static _Q: string;
    /** Left Border. */
    get leftBorder(): LeftBorder | undefined;
    /** Right Border. */
    get rightBorder(): RightBorder | undefined;
    /** Top Border. */
    get topBorder(): TopBorder | undefined;
    /** Bottom Border. */
    get bottomBorder(): BottomBorder | undefined;
    /** Inside Horizontal Border. */
    get insideHorizontalBorder(): InsideHorizontalBorder | undefined;
    /** Inside Vertical Border. */
    get insideVerticalBorder(): InsideVerticalBorder | undefined;
    /** Top Left to Bottom Right Border. */
    get topLeftToBottomRightBorder(): TopLeftToBottomRightBorder | undefined;
    /** Top Right to Bottom Left Border. */
    get topRightToBottomLeftBorder(): TopRightToBottomLeftBorder | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the ThemeableLineStyleType Class. */
export declare abstract class ThemeableLineStyleType extends OxmlCompositeElement<Outline | LineReference> {
    /** Returns Outline. */
    get outline(): Outline | undefined;
    /** Line Reference. */
    get lineReference(): LineReference | undefined;
}
/** Top Right to Bottom Left Border. Serialized as `a:tr2bl` */
export declare class TopRightToBottomLeftBorder extends ThemeableLineStyleType {
    static _Q: string;
}
/** Top Left to Bottom Right Border. Serialized as `a:tl2br` */
export declare class TopLeftToBottomRightBorder extends ThemeableLineStyleType {
    static _Q: string;
}
/** Inside Vertical Border. Serialized as `a:insideV` */
export declare class InsideVerticalBorder extends ThemeableLineStyleType {
    static _Q: string;
}
/** Inside Horizontal Border. Serialized as `a:insideH` */
export declare class InsideHorizontalBorder extends ThemeableLineStyleType {
    static _Q: string;
}
/** Bottom Border. Serialized as `a:bottom` */
export declare class BottomBorder extends ThemeableLineStyleType {
    static _Q: string;
}
/** Top Border. Serialized as `a:top` */
export declare class TopBorder extends ThemeableLineStyleType {
    static _Q: string;
}
/** Right Border. Serialized as `a:right` */
export declare class RightBorder extends ThemeableLineStyleType {
    static _Q: string;
}
/** Left Border. Serialized as `a:left` */
export declare class LeftBorder extends ThemeableLineStyleType {
    static _Q: string;
}
/** Table Row. Serialized as `a:tr` */
export declare class TableRow extends OxmlCompositeElement<TableCell | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Height. Serialized as `:h` */
    get height(): Int64Value | undefined;
    set height(v: Int64Value | undefined);
}
/** Table Grid. Serialized as `a:tblGrid` */
export declare class TableGrid extends OxmlCompositeElement<GridColumn> {
    static _Q: string;
}
/** Table Properties. Serialized as `a:tblPr` */
export declare class TableProperties extends OxmlCompositeElement<NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill | EffectList | EffectDag | TableStyle | TableStyleId | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Right-to-Left. Serialized as `:rtl` */
    get rightToLeft(): BooleanValue | undefined;
    set rightToLeft(v: BooleanValue | undefined);
    /** First Row. Serialized as `:firstRow` */
    get firstRow(): BooleanValue | undefined;
    set firstRow(v: BooleanValue | undefined);
    /** First Column. Serialized as `:firstCol` */
    get firstColumn(): BooleanValue | undefined;
    set firstColumn(v: BooleanValue | undefined);
    /** Last Row. Serialized as `:lastRow` */
    get lastRow(): BooleanValue | undefined;
    set lastRow(v: BooleanValue | undefined);
    /** Last Column. Serialized as `:lastCol` */
    get lastColumn(): BooleanValue | undefined;
    set lastColumn(v: BooleanValue | undefined);
    /** Banded Rows. Serialized as `:bandRow` */
    get bandRow(): BooleanValue | undefined;
    set bandRow(v: BooleanValue | undefined);
    /** Banded Columns. Serialized as `:bandCol` */
    get bandColumn(): BooleanValue | undefined;
    set bandColumn(v: BooleanValue | undefined);
}
/** Table Grid Column. Serialized as `a:gridCol` */
export declare class GridColumn extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Width. Serialized as `:w` */
    get width(): Int64Value | undefined;
    set width(v: Int64Value | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Table Style ID. Serialized as `a:tableStyleId` */
export declare class TableStyleId extends OxmlLeafTextElement {
    static _Q: string;
}
/** Defines the TableStyleType Class. */
export declare abstract class TableStyleType extends OxmlCompositeElement<TableBackground | WholeTable | Band1Horizontal | Band2Horizontal | Band1Vertical | Band2Vertical | LastColumn | FirstColumn | LastRow | SoutheastCell | SouthwestCell | FirstRow | NortheastCell | NorthwestCell | ExtensionList> {
    static _A: string[];
    /** Style ID. Serialized as `:styleId` */
    get styleId(): StringValue | undefined;
    set styleId(v: StringValue | undefined);
    /** Name. Serialized as `:styleName` */
    get styleName(): StringValue | undefined;
    set styleName(v: StringValue | undefined);
    /** Table Background. */
    get tableBackground(): TableBackground | undefined;
    /** Whole Table. */
    get wholeTable(): WholeTable | undefined;
    /** Band 1 Horizontal. */
    get band1Horizontal(): Band1Horizontal | undefined;
    /** Band 2 Horizontal. */
    get band2Horizontal(): Band2Horizontal | undefined;
    /** Band 1 Vertical. */
    get band1Vertical(): Band1Vertical | undefined;
    /** Band 2 Vertical. */
    get band2Vertical(): Band2Vertical | undefined;
    /** Last Column. */
    get lastColumn(): LastColumn | undefined;
    /** First Column. */
    get firstColumn(): FirstColumn | undefined;
    /** Last Row. */
    get lastRow(): LastRow | undefined;
    /** Southeast Cell. */
    get southeastCell(): SoutheastCell | undefined;
    /** Southwest Cell. */
    get southwestCell(): SouthwestCell | undefined;
    /** First Row. */
    get firstRow(): FirstRow | undefined;
    /** Northeast Cell. */
    get northeastCell(): NortheastCell | undefined;
    /** Northwest Cell. */
    get northwestCell(): NorthwestCell | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Table Style. Serialized as `a:tblStyle` */
export declare class TableStyleEntry extends TableStyleType {
    static _Q: string;
}
/** Table Style. Serialized as `a:tableStyle` */
export declare class TableStyle extends TableStyleType {
    static _Q: string;
}
/** Table Cell. Serialized as `a:tc` */
export declare class TableCell extends OxmlCompositeElement<TextBody | TableCellProperties | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Row Span. Serialized as `:rowSpan` */
    get rowSpan(): Int32Value | undefined;
    set rowSpan(v: Int32Value | undefined);
    /** Grid Span. Serialized as `:gridSpan` */
    get gridSpan(): Int32Value | undefined;
    set gridSpan(v: Int32Value | undefined);
    /** Horizontal Merge. Serialized as `:hMerge` */
    get horizontalMerge(): BooleanValue | undefined;
    set horizontalMerge(v: BooleanValue | undefined);
    /** Vertical Merge. Serialized as `:vMerge` */
    get verticalMerge(): BooleanValue | undefined;
    set verticalMerge(v: BooleanValue | undefined);
    /** Text Body. */
    get textBody(): TextBody | undefined;
    /** Table Cell Properties. */
    get tableCellProperties(): TableCellProperties | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Table Cell Properties. Serialized as `a:tcPr` */
export declare class TableCellProperties extends OxmlCompositeElement<LeftBorderLineProperties | RightBorderLineProperties | TopBorderLineProperties | BottomBorderLineProperties | TopLeftToBottomRightBorderLineProperties | BottomLeftToTopRightBorderLineProperties | Cell3DProperties | NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Left Margin. Serialized as `:marL` */
    get leftMargin(): Int32Value | undefined;
    set leftMargin(v: Int32Value | undefined);
    /** Right Margin. Serialized as `:marR` */
    get rightMargin(): Int32Value | undefined;
    set rightMargin(v: Int32Value | undefined);
    /** Top Margin. Serialized as `:marT` */
    get topMargin(): Int32Value | undefined;
    set topMargin(v: Int32Value | undefined);
    /** Bottom Margin. Serialized as `:marB` */
    get bottomMargin(): Int32Value | undefined;
    set bottomMargin(v: Int32Value | undefined);
    /** Text Direction. Serialized as `:vert` */
    get vertical(): TextVerticalValues | undefined;
    set vertical(v: TextVerticalValues | undefined);
    /** Anchor. Serialized as `:anchor` */
    get anchor(): TextAnchoringTypeValues | undefined;
    set anchor(v: TextAnchoringTypeValues | undefined);
    /** Anchor Center. Serialized as `:anchorCtr` */
    get anchorCenter(): BooleanValue | undefined;
    set anchorCenter(v: BooleanValue | undefined);
    /** Horizontal Overflow. Serialized as `:horzOverflow` */
    get horizontalOverflow(): TextHorizontalOverflowValues | undefined;
    set horizontalOverflow(v: TextHorizontalOverflowValues | undefined);
    /** Left Border Line Properties. */
    get leftBorderLineProperties(): LeftBorderLineProperties | undefined;
    /** Right Border Line Properties. */
    get rightBorderLineProperties(): RightBorderLineProperties | undefined;
    /** Top Border Line Properties. */
    get topBorderLineProperties(): TopBorderLineProperties | undefined;
    /** Bottom Border Line Properties. */
    get bottomBorderLineProperties(): BottomBorderLineProperties | undefined;
    /** Top-Left to Bottom-Right Border Line Properties. */
    get topLeftToBottomRightBorderLineProperties(): TopLeftToBottomRightBorderLineProperties | undefined;
    /** Bottom-Left to Top-Right Border Line Properties. */
    get bottomLeftToTopRightBorderLineProperties(): BottomLeftToTopRightBorderLineProperties | undefined;
    /** Cell 3-D. */
    get cell3DProperties(): Cell3DProperties | undefined;
}
/** Cell 3-D. Serialized as `a:cell3D` */
export declare class Cell3DProperties extends OxmlCompositeElement<Bevel | LightRig | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Preset Material. Serialized as `:prstMaterial` */
    get presetMaterial(): PresetMaterialTypeValues | undefined;
    set presetMaterial(v: PresetMaterialTypeValues | undefined);
    /** Bevel. */
    get bevel(): Bevel | undefined;
    /** Light Rig. */
    get lightRig(): LightRig | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the ThemeElements Class. Serialized as `a:themeElements` */
export declare class ThemeElements extends OxmlCompositeElement<ColorScheme | FontScheme | FormatScheme | ExtensionList> {
    static _Q: string;
    /** Returns ColorScheme. */
    get colorScheme(): ColorScheme | undefined;
    /** Font Scheme. */
    get fontScheme(): FontScheme | undefined;
    /** Format Scheme. */
    get formatScheme(): FormatScheme | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Extra Color Scheme. Serialized as `a:extraClrScheme` */
export declare class ExtraColorScheme extends OxmlCompositeElement<ColorScheme | ColorMap> {
    static _Q: string;
    /** Returns ColorScheme. */
    get colorScheme(): ColorScheme | undefined;
    /** Returns ColorMap. */
    get colorMap(): ColorMap | undefined;
}
/** Defines the ColorMappingType Class. */
export declare abstract class ColorMappingType extends OxmlCompositeElement<ExtensionList> {
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
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the ColorMap Class. Serialized as `a:clrMap` */
export declare class ColorMap extends ColorMappingType {
    static _Q: string;
}
/** Override Color Mapping. Serialized as `a:overrideClrMapping` */
export declare class OverrideColorMapping extends ColorMappingType {
    static _Q: string;
}
/** Defines the DefaultShapeDefinitionType Class. */
export declare abstract class DefaultShapeDefinitionType extends OxmlCompositeElement<ShapeProperties | BodyProperties | ListStyle | ShapeStyle | ExtensionList> {
    /** Visual Properties. */
    get shapeProperties(): ShapeProperties | undefined;
    /** Returns BodyProperties. */
    get bodyProperties(): BodyProperties | undefined;
    /** Returns ListStyle. */
    get listStyle(): ListStyle | undefined;
    /** Returns ShapeStyle. */
    get shapeStyle(): ShapeStyle | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Text Default. Serialized as `a:txDef` */
export declare class TextDefault extends DefaultShapeDefinitionType {
    static _Q: string;
}
/** Line Default. Serialized as `a:lnDef` */
export declare class LineDefault extends DefaultShapeDefinitionType {
    static _Q: string;
}
/** Shape Default. Serialized as `a:spDef` */
export declare class ShapeDefault extends DefaultShapeDefinitionType {
    static _Q: string;
}
/** Defines the ListStyle Class. Serialized as `a:lstStyle` */
export declare class ListStyle extends OxmlCompositeElement<DefaultParagraphProperties | Level1ParagraphProperties | Level2ParagraphProperties | Level3ParagraphProperties | Level4ParagraphProperties | Level5ParagraphProperties | Level6ParagraphProperties | Level7ParagraphProperties | Level8ParagraphProperties | Level9ParagraphProperties | ExtensionList> {
    static _Q: string;
    /** Default Paragraph Style. */
    get defaultParagraphProperties(): DefaultParagraphProperties | undefined;
    /** List Level 1 Text Style. */
    get level1ParagraphProperties(): Level1ParagraphProperties | undefined;
    /** List Level 2 Text Style. */
    get level2ParagraphProperties(): Level2ParagraphProperties | undefined;
    /** List Level 3 Text Style. */
    get level3ParagraphProperties(): Level3ParagraphProperties | undefined;
    /** List Level 4 Text Style. */
    get level4ParagraphProperties(): Level4ParagraphProperties | undefined;
    /** List Level 5 Text Style. */
    get level5ParagraphProperties(): Level5ParagraphProperties | undefined;
    /** List Level 6 Text Style. */
    get level6ParagraphProperties(): Level6ParagraphProperties | undefined;
    /** List Level 7 Text Style. */
    get level7ParagraphProperties(): Level7ParagraphProperties | undefined;
    /** List Level 8 Text Style. */
    get level8ParagraphProperties(): Level8ParagraphProperties | undefined;
    /** List Level 9 Text Style. */
    get level9ParagraphProperties(): Level9ParagraphProperties | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the BodyProperties Class. Serialized as `a:bodyPr` */
export declare class BodyProperties extends OxmlCompositeElement<PresetTextWrap | NoAutoFit | NormalAutoFit | ShapeAutoFit | Scene3DType | Shape3DType | FlatText | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Rotation. Serialized as `:rot` */
    get rotation(): Int32Value | undefined;
    set rotation(v: Int32Value | undefined);
    /** Paragraph Spacing. Serialized as `:spcFirstLastPara` */
    get useParagraphSpacing(): BooleanValue | undefined;
    set useParagraphSpacing(v: BooleanValue | undefined);
    /** Text Vertical Overflow. Serialized as `:vertOverflow` */
    get verticalOverflow(): TextVerticalOverflowValues | undefined;
    set verticalOverflow(v: TextVerticalOverflowValues | undefined);
    /** Text Horizontal Overflow. Serialized as `:horzOverflow` */
    get horizontalOverflow(): TextHorizontalOverflowValues | undefined;
    set horizontalOverflow(v: TextHorizontalOverflowValues | undefined);
    /** Vertical Text. Serialized as `:vert` */
    get vertical(): TextVerticalValues | undefined;
    set vertical(v: TextVerticalValues | undefined);
    /** Text Wrapping Type. Serialized as `:wrap` */
    get wrap(): TextWrappingValues | undefined;
    set wrap(v: TextWrappingValues | undefined);
    /** Left Inset. Serialized as `:lIns` */
    get leftInset(): Int32Value | undefined;
    set leftInset(v: Int32Value | undefined);
    /** Top Inset. Serialized as `:tIns` */
    get topInset(): Int32Value | undefined;
    set topInset(v: Int32Value | undefined);
    /** Right Inset. Serialized as `:rIns` */
    get rightInset(): Int32Value | undefined;
    set rightInset(v: Int32Value | undefined);
    /** Bottom Inset. Serialized as `:bIns` */
    get bottomInset(): Int32Value | undefined;
    set bottomInset(v: Int32Value | undefined);
    /** Number of Columns. Serialized as `:numCol` */
    get columnCount(): Int32Value | undefined;
    set columnCount(v: Int32Value | undefined);
    /** Space Between Columns. Serialized as `:spcCol` */
    get columnSpacing(): Int32Value | undefined;
    set columnSpacing(v: Int32Value | undefined);
    /** Columns Right-To-Left. Serialized as `:rtlCol` */
    get rightToLeftColumns(): BooleanValue | undefined;
    set rightToLeftColumns(v: BooleanValue | undefined);
    /** From WordArt. Serialized as `:fromWordArt` */
    get fromWordArt(): BooleanValue | undefined;
    set fromWordArt(v: BooleanValue | undefined);
    /** Anchor. Serialized as `:anchor` */
    get anchor(): TextAnchoringTypeValues | undefined;
    set anchor(v: TextAnchoringTypeValues | undefined);
    /** Anchor Center. Serialized as `:anchorCtr` */
    get anchorCenter(): BooleanValue | undefined;
    set anchorCenter(v: BooleanValue | undefined);
    /** Force Anti-Alias. Serialized as `:forceAA` */
    get forceAntiAlias(): BooleanValue | undefined;
    set forceAntiAlias(v: BooleanValue | undefined);
    /** Text Upright. Serialized as `:upright` */
    get upRight(): BooleanValue | undefined;
    set upRight(v: BooleanValue | undefined);
    /** Compatible Line Spacing. Serialized as `:compatLnSpc` */
    get compatibleLineSpacing(): BooleanValue | undefined;
    set compatibleLineSpacing(v: BooleanValue | undefined);
    /** Preset Text Shape. */
    get presetTextWrap(): PresetTextWrap | undefined;
}
/** 2D Transform for Grouped Objects. Serialized as `a:xfrm` */
export declare class TransformGroup extends OxmlCompositeElement<Offset | Extents | ChildOffset | ChildExtents> {
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
    get offset(): Offset | undefined;
    /** Extents. */
    get extents(): Extents | undefined;
    /** Child Offset. */
    get childOffset(): ChildOffset | undefined;
    /** Child Extents. */
    get childExtents(): ChildExtents | undefined;
}
/** Dash Stop. Serialized as `a:ds` */
export declare class DashStop extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Dash Length. Serialized as `:d` */
    get dashLength(): Int32Value | undefined;
    set dashLength(v: Int32Value | undefined);
    /** Space Length. Serialized as `:sp` */
    get spaceLength(): Int32Value | undefined;
    set spaceLength(v: Int32Value | undefined);
}
/** List of Shape Paths. Serialized as `a:pathLst` */
export declare class PathList extends OxmlCompositeElement<Path> {
    static _Q: string;
}
/** Shape Text Rectangle. Serialized as `a:rect` */
export declare class Rectangle extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Left. Serialized as `:l` */
    get left(): StringValue | undefined;
    set left(v: StringValue | undefined);
    /** Top. Serialized as `:t` */
    get top(): StringValue | undefined;
    set top(v: StringValue | undefined);
    /** Right. Serialized as `:r` */
    get right(): StringValue | undefined;
    set right(v: StringValue | undefined);
    /** Bottom Position. Serialized as `:b` */
    get bottom(): StringValue | undefined;
    set bottom(v: StringValue | undefined);
}
/** List of Shape Connection Sites. Serialized as `a:cxnLst` */
export declare class ConnectionSiteList extends OxmlCompositeElement<ConnectionSite> {
    static _Q: string;
}
/** List of Shape Adjust Handles. Serialized as `a:ahLst` */
export declare class AdjustHandleList extends OxmlCompositeElement<AdjustHandleXY | AdjustHandlePolar> {
    static _Q: string;
}
/** Defines the GeometryGuideListType Class. */
export declare abstract class GeometryGuideListType extends OxmlCompositeElement<ShapeGuide> {
}
/** List of Shape Guides. Serialized as `a:gdLst` */
export declare class ShapeGuideList extends GeometryGuideListType {
    static _Q: string;
}
/** List of Shape Adjust Values. Serialized as `a:avLst` */
export declare class AdjustValueList extends GeometryGuideListType {
    static _Q: string;
}
/** Shape Path. Serialized as `a:path` */
export declare class Path extends OxmlCompositeElement<CloseShapePath | MoveTo | LineTo | ArcTo | QuadraticBezierCurveTo | CubicBezierCurveTo> {
    static _Q: string;
    static _A: string[];
    /** Path Width. Serialized as `:w` */
    get width(): Int64Value | undefined;
    set width(v: Int64Value | undefined);
    /** Path Height. Serialized as `:h` */
    get height(): Int64Value | undefined;
    set height(v: Int64Value | undefined);
    /** Path Fill. Serialized as `:fill` */
    get fill(): PathFillModeValues | undefined;
    set fill(v: PathFillModeValues | undefined);
    /** Path Stroke. Serialized as `:stroke` */
    get stroke(): BooleanValue | undefined;
    set stroke(v: BooleanValue | undefined);
    /** 3D Extrusion Allowed. Serialized as `:extrusionOk` */
    get extrusionOk(): BooleanValue | undefined;
    set extrusionOk(v: BooleanValue | undefined);
}
/** Draw Cubic Bezier Curve To. Serialized as `a:cubicBezTo` */
export declare class CubicBezierCurveTo extends OxmlCompositeElement<Point> {
    static _Q: string;
}
/** Draw Quadratic Bezier Curve To. Serialized as `a:quadBezTo` */
export declare class QuadraticBezierCurveTo extends OxmlCompositeElement<Point> {
    static _Q: string;
}
/** Draw Arc To. Serialized as `a:arcTo` */
export declare class ArcTo extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Shape Arc Width Radius. Serialized as `:wR` */
    get widthRadius(): StringValue | undefined;
    set widthRadius(v: StringValue | undefined);
    /** Shape Arc Height Radius. Serialized as `:hR` */
    get heightRadius(): StringValue | undefined;
    set heightRadius(v: StringValue | undefined);
    /** Shape Arc Start Angle. Serialized as `:stAng` */
    get startAngle(): StringValue | undefined;
    set startAngle(v: StringValue | undefined);
    /** Shape Arc Swing Angle. Serialized as `:swAng` */
    get swingAngle(): StringValue | undefined;
    set swingAngle(v: StringValue | undefined);
}
/** Draw Line To. Serialized as `a:lnTo` */
export declare class LineTo extends OxmlCompositeElement<Point> {
    static _Q: string;
    /** Line end point. */
    get point(): Point | undefined;
}
/** Move Path To. Serialized as `a:moveTo` */
export declare class MoveTo extends OxmlCompositeElement<Point> {
    static _Q: string;
    /** Move end point. */
    get point(): Point | undefined;
}
/** Close Shape Path. Serialized as `a:close` */
export declare class CloseShapePath extends OxmlLeafElement {
    static _Q: string;
}
/** Shape Connection Site. Serialized as `a:cxn` */
export declare class ConnectionSite extends OxmlCompositeElement<Position> {
    static _Q: string;
    static _A: string[];
    /** Connection Site Angle. Serialized as `:ang` */
    get angle(): StringValue | undefined;
    set angle(v: StringValue | undefined);
    /** Position. */
    get position(): Position | undefined;
}
/** Polar Adjust Handle. Serialized as `a:ahPolar` */
export declare class AdjustHandlePolar extends OxmlCompositeElement<Position> {
    static _Q: string;
    static _A: string[];
    /** Radial Adjustment Guide. Serialized as `:gdRefR` */
    get radialAdjustmentGuide(): StringValue | undefined;
    set radialAdjustmentGuide(v: StringValue | undefined);
    /** Minimum Radial Adjustment. Serialized as `:minR` */
    get minRadial(): StringValue | undefined;
    set minRadial(v: StringValue | undefined);
    /** Maximum Radial Adjustment. Serialized as `:maxR` */
    get maxRadial(): StringValue | undefined;
    set maxRadial(v: StringValue | undefined);
    /** Angle Adjustment Guide. Serialized as `:gdRefAng` */
    get angleAdjustmentGuide(): StringValue | undefined;
    set angleAdjustmentGuide(v: StringValue | undefined);
    /** Minimum Angle Adjustment. Serialized as `:minAng` */
    get minAngle(): StringValue | undefined;
    set minAngle(v: StringValue | undefined);
    /** Maximum Angle Adjustment. Serialized as `:maxAng` */
    get maxAngle(): StringValue | undefined;
    set maxAngle(v: StringValue | undefined);
    /** Shape Position Coordinate. */
    get position(): Position | undefined;
}
/** XY Adjust Handle. Serialized as `a:ahXY` */
export declare class AdjustHandleXY extends OxmlCompositeElement<Position> {
    static _Q: string;
    static _A: string[];
    /** Horizontal Adjustment Guide. Serialized as `:gdRefX` */
    get xAdjustmentGuide(): StringValue | undefined;
    set xAdjustmentGuide(v: StringValue | undefined);
    /** Minimum Horizontal Adjustment. Serialized as `:minX` */
    get minX(): StringValue | undefined;
    set minX(v: StringValue | undefined);
    /** Maximum Horizontal Adjustment. Serialized as `:maxX` */
    get maxX(): StringValue | undefined;
    set maxX(v: StringValue | undefined);
    /** Vertical Adjustment Guide. Serialized as `:gdRefY` */
    get yAdjustmentGuide(): StringValue | undefined;
    set yAdjustmentGuide(v: StringValue | undefined);
    /** Minimum Vertical Adjustment. Serialized as `:minY` */
    get minY(): StringValue | undefined;
    set minY(v: StringValue | undefined);
    /** Maximum Vertical Adjustment. Serialized as `:maxY` */
    get maxY(): StringValue | undefined;
    set maxY(v: StringValue | undefined);
    /** Position. */
    get position(): Position | undefined;
}
/** Defines the AdjustPoint2DType Class. */
export declare abstract class AdjustPoint2DType extends OxmlLeafElement {
    static _A: string[];
    /** X-Coordinate. Serialized as `:x` */
    get x(): StringValue | undefined;
    set x(v: StringValue | undefined);
    /** Y-Coordinate. Serialized as `:y` */
    get y(): StringValue | undefined;
    set y(v: StringValue | undefined);
}
/** Move end point. Serialized as `a:pt` */
export declare class Point extends AdjustPoint2DType {
    static _Q: string;
}
/** Position. Serialized as `a:pos` */
export declare class Position extends AdjustPoint2DType {
    static _Q: string;
}
/** Shape Guide. Serialized as `a:gd` */
export declare class ShapeGuide extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Shape Guide Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Shape Guide Formula. Serialized as `:fmla` */
    get formula(): StringValue | undefined;
    set formula(v: StringValue | undefined);
}
/** Gradient Stop List. Serialized as `a:gsLst` */
export declare class GradientStopList extends OxmlCompositeElement<GradientStop> {
    static _Q: string;
}
/** Gradient stops. Serialized as `a:gs` */
export declare class GradientStop extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {
    static _Q: string;
    static _A: string[];
    /** Position. Serialized as `:pos` */
    get position(): Int32Value | undefined;
    set position(v: Int32Value | undefined);
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): RgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): RgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): HslColor | undefined;
    /** System Color. */
    get systemColor(): SystemColor | undefined;
    /** Scheme Color. */
    get schemeColor(): SchemeColor | undefined;
    /** Preset Color. */
    get presetColor(): PresetColor | undefined;
}
/** Defines the RelativeRectangleType Class. */
export declare abstract class RelativeRectangleType extends OxmlLeafElement {
    static _A: string[];
    /** Left Offset. Serialized as `:l` */
    get left(): Int32Value | undefined;
    set left(v: Int32Value | undefined);
    /** Top Offset. Serialized as `:t` */
    get top(): Int32Value | undefined;
    set top(v: Int32Value | undefined);
    /** Right Offset. Serialized as `:r` */
    get right(): Int32Value | undefined;
    set right(v: Int32Value | undefined);
    /** Bottom Offset. Serialized as `:b` */
    get bottom(): Int32Value | undefined;
    set bottom(v: Int32Value | undefined);
}
/** Source Rectangle. Serialized as `a:srcRect` */
export declare class SourceRectangle extends RelativeRectangleType {
    static _Q: string;
}
/** Fill Rectangle. Serialized as `a:fillRect` */
export declare class FillRectangle extends RelativeRectangleType {
    static _Q: string;
}
/** Tile Rectangle. Serialized as `a:tileRect` */
export declare class TileRectangle extends RelativeRectangleType {
    static _Q: string;
}
/** Fill To Rectangle. Serialized as `a:fillToRect` */
export declare class FillToRectangle extends RelativeRectangleType {
    static _Q: string;
}
/** Defines the BevelType Class. */
export declare abstract class BevelType extends OxmlLeafElement {
    static _A: string[];
    /** Width. Serialized as `:w` */
    get width(): Int64Value | undefined;
    set width(v: Int64Value | undefined);
    /** Height. Serialized as `:h` */
    get height(): Int64Value | undefined;
    set height(v: Int64Value | undefined);
    /** Preset Bevel. Serialized as `:prst` */
    get preset(): BevelPresetValues | undefined;
    set preset(v: BevelPresetValues | undefined);
}
/** Bevel. Serialized as `a:bevel` */
export declare class Bevel extends BevelType {
    static _Q: string;
}
/** Bottom Bevel. Serialized as `a:bevelB` */
export declare class BevelBottom extends BevelType {
    static _Q: string;
}
/** Top Bevel. Serialized as `a:bevelT` */
export declare class BevelTop extends BevelType {
    static _Q: string;
}
/** Defines the Vector3DType Class. */
export declare abstract class Vector3DType extends OxmlLeafElement {
    static _A: string[];
    /** Distance along X-axis in 3D. Serialized as `:dx` */
    get dx(): Int64Value | undefined;
    set dx(v: Int64Value | undefined);
    /** Distance along Y-axis in 3D. Serialized as `:dy` */
    get dy(): Int64Value | undefined;
    set dy(v: Int64Value | undefined);
    /** Distance along Z-axis in 3D. Serialized as `:dz` */
    get dz(): Int64Value | undefined;
    set dz(v: Int64Value | undefined);
}
/** Up Vector. Serialized as `a:up` */
export declare class UpVector extends Vector3DType {
    static _Q: string;
}
/** Normal. Serialized as `a:norm` */
export declare class Normal extends Vector3DType {
    static _Q: string;
}
/** Anchor Point. Serialized as `a:anchor` */
export declare class Anchor extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** X-Coordinate in 3D. Serialized as `:x` */
    get x(): Int64Value | undefined;
    set x(v: Int64Value | undefined);
    /** Y-Coordinate in 3D. Serialized as `:y` */
    get y(): Int64Value | undefined;
    set y(v: Int64Value | undefined);
    /** Z-Coordinate in 3D. Serialized as `:z` */
    get z(): Int64Value | undefined;
    set z(v: Int64Value | undefined);
}
/** Backdrop Plane. Serialized as `a:backdrop` */
export declare class Backdrop extends OxmlCompositeElement<Anchor | Normal | UpVector | ExtensionList> {
    static _Q: string;
    /** Anchor Point. */
    get anchor(): Anchor | undefined;
    /** Normal. */
    get normal(): Normal | undefined;
    /** Up Vector. */
    get upVector(): UpVector | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Light Rig. Serialized as `a:lightRig` */
export declare class LightRig extends OxmlCompositeElement<Rotation> {
    static _Q: string;
    static _A: string[];
    /** Rig Preset. Serialized as `:rig` */
    get rig(): LightRigValues | undefined;
    set rig(v: LightRigValues | undefined);
    /** Direction. Serialized as `:dir` */
    get direction(): LightRigDirectionValues | undefined;
    set direction(v: LightRigDirectionValues | undefined);
    /** Rotation. */
    get rotation(): Rotation | undefined;
}
/** Camera. Serialized as `a:camera` */
export declare class Camera extends OxmlCompositeElement<Rotation> {
    static _Q: string;
    static _A: string[];
    /** Preset Camera Type. Serialized as `:prst` */
    get preset(): PresetCameraValues | undefined;
    set preset(v: PresetCameraValues | undefined);
    /** Field of View. Serialized as `:fov` */
    get fieldOfView(): Int32Value | undefined;
    set fieldOfView(v: Int32Value | undefined);
    /** Zoom. Serialized as `:zoom` */
    get zoom(): Int32Value | undefined;
    set zoom(v: Int32Value | undefined);
    /** Rotation. */
    get rotation(): Rotation | undefined;
}
/** Rotation. Serialized as `a:rot` */
export declare class Rotation extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Latitude. Serialized as `:lat` */
    get latitude(): Int32Value | undefined;
    set latitude(v: Int32Value | undefined);
    /** Longitude. Serialized as `:lon` */
    get longitude(): Int32Value | undefined;
    set longitude(v: Int32Value | undefined);
    /** Revolution. Serialized as `:rev` */
    get revolution(): Int32Value | undefined;
    set revolution(v: Int32Value | undefined);
}
/** Non-Visual Group Shape Drawing Properties. Serialized as `a:cNvGrpSpPr` */
export declare class NonVisualGroupShapeDrawingProperties extends OxmlCompositeElement<GroupShapeLocks | NonVisualGroupDrawingShapePropsExtensionList> {
    static _Q: string;
    /** Returns GroupShapeLocks. */
    get groupShapeLocks(): GroupShapeLocks | undefined;
    /** Returns NonVisualGroupDrawingShapePropsExtensionList. */
    get nonVisualGroupDrawingShapePropsExtensionList(): NonVisualGroupDrawingShapePropsExtensionList | undefined;
}
/** Non-Visual Properties for a Graphic Frame. Serialized as `a:nvGraphicFramePr` */
export declare class NonVisualGraphicFrameProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualGraphicFrameDrawingProperties> {
    static _Q: string;
    /** Returns NonVisualDrawingProperties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Non-Visual Graphic Frame Drawing Properties. */
    get nonVisualGraphicFrameDrawingProperties(): NonVisualGraphicFrameDrawingProperties | undefined;
}
/** Non-Visual Graphic Frame Drawing Properties. Serialized as `a:cNvGraphicFramePr` */
export declare class NonVisualGraphicFrameDrawingProperties extends OxmlCompositeElement<GraphicFrameLocks | ExtensionList> {
    static _Q: string;
    /** Graphic Frame Locks. */
    get graphicFrameLocks(): GraphicFrameLocks | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Non-Visual Properties for a Picture. Serialized as `a:nvPicPr` */
export declare class NonVisualPictureProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualPictureDrawingProperties> {
    static _Q: string;
    /** Returns NonVisualDrawingProperties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Non-Visual Picture Drawing Properties. */
    get nonVisualPictureDrawingProperties(): NonVisualPictureDrawingProperties | undefined;
}
/** Non-Visual Picture Drawing Properties. Serialized as `a:cNvPicPr` */
export declare class NonVisualPictureDrawingProperties extends OxmlCompositeElement<PictureLocks | NonVisualPicturePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** preferRelativeResize. Serialized as `:preferRelativeResize` */
    get preferRelativeResize(): BooleanValue | undefined;
    set preferRelativeResize(v: BooleanValue | undefined);
    /** Returns PictureLocks. */
    get pictureLocks(): PictureLocks | undefined;
    /** Returns NonVisualPicturePropertiesExtensionList. */
    get nonVisualPicturePropertiesExtensionList(): NonVisualPicturePropertiesExtensionList | undefined;
}
/** Non-Visual Properties for a Connection Shape. Serialized as `a:nvCxnSpPr` */
export declare class NonVisualConnectionShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualConnectorShapeDrawingProperties> {
    static _Q: string;
    /** Non-Visual Drawing Properties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Non-Visual Connector Shape Drawing Properties. */
    get nonVisualConnectorShapeDrawingProperties(): NonVisualConnectorShapeDrawingProperties | undefined;
}
/** Non-Visual Connector Shape Drawing Properties. Serialized as `a:cNvCxnSpPr` */
export declare class NonVisualConnectorShapeDrawingProperties extends OxmlCompositeElement<ConnectionShapeLocks | StartConnection | EndConnection | ExtensionList> {
    static _Q: string;
    /** Connection Shape Locks. */
    get connectionShapeLocks(): ConnectionShapeLocks | undefined;
    /** Connection Start. */
    get startConnection(): StartConnection | undefined;
    /** Connection End. */
    get endConnection(): EndConnection | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Style. Serialized as `a:style` */
export declare class ShapeStyle extends OxmlCompositeElement<LineReference | FillReference | EffectReference | FontReference> {
    static _Q: string;
    /** Returns LineReference. */
    get lineReference(): LineReference | undefined;
    /** Returns FillReference. */
    get fillReference(): FillReference | undefined;
    /** Returns EffectReference. */
    get effectReference(): EffectReference | undefined;
    /** Font Reference. */
    get fontReference(): FontReference | undefined;
}
/** Text Shape. Serialized as `a:txSp` */
export declare class TextShape extends OxmlCompositeElement<TextBody | UseShapeRectangle | Transform2D | ExtensionList> {
    static _Q: string;
    /** Shape Text Body. */
    get textBody(): TextBody | undefined;
}
/** Visual Properties. Serialized as `a:spPr` */
export declare class ShapeProperties extends OxmlCompositeElement<Transform2D | CustomGeometry | PresetGeometry | NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill | Outline | EffectList | EffectDag | Scene3DType | Shape3DType | ShapePropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Black and White Mode. Serialized as `:bwMode` */
    get blackWhiteMode(): BlackWhiteModeValues | undefined;
    set blackWhiteMode(v: BlackWhiteModeValues | undefined);
    /** 2D Transform for Individual Objects. */
    get transform2D(): Transform2D | undefined;
}
/** Non-Visual Properties for a Shape. Serialized as `a:nvSpPr` */
export declare class NonVisualShapeProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualShapeDrawingProperties> {
    static _Q: string;
    /** Returns NonVisualDrawingProperties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Non-Visual Shape Drawing Properties. */
    get nonVisualShapeDrawingProperties(): NonVisualShapeDrawingProperties | undefined;
}
/** Non-Visual Shape Drawing Properties. Serialized as `a:cNvSpPr` */
export declare class NonVisualShapeDrawingProperties extends OxmlCompositeElement<ShapeLocks | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Text Box. Serialized as `:txBox` */
    get textBox(): BooleanValue | undefined;
    set textBox(v: BooleanValue | undefined);
    /** Shape Locks. */
    get shapeLocks(): ShapeLocks | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the NonVisualDrawingProperties Class. Serialized as `a:cNvPr` */
export declare class NonVisualDrawingProperties extends OxmlCompositeElement<HyperlinkOnClick | HyperlinkOnHover | NonVisualDrawingPropertiesExtensionList> {
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
    get hyperlinkOnClick(): HyperlinkOnClick | undefined;
    /** Hyperlink associated with hovering over the element.. */
    get hyperlinkOnHover(): HyperlinkOnHover | undefined;
    /** Future extension. */
    get nonVisualDrawingPropertiesExtensionList(): NonVisualDrawingPropertiesExtensionList | undefined;
}
/** Defines the Transform2D Class. Serialized as `a:xfrm` */
export declare class Transform2D extends OxmlCompositeElement<Offset | Extents> {
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
    get offset(): Offset | undefined;
    /** Extents. */
    get extents(): Extents | undefined;
}
/** Use Shape Text Rectangle. Serialized as `a:useSpRect` */
export declare class UseShapeRectangle extends OxmlLeafElement {
    static _Q: string;
}
/** Shape Text Body. Serialized as `a:txBody` */
export declare class TextBody extends OxmlCompositeElement<BodyProperties | ListStyle | Paragraph> {
    static _Q: string;
    /** Body Properties. */
    get bodyProperties(): BodyProperties | undefined;
    /** Text List Styles. */
    get listStyle(): ListStyle | undefined;
}
/** Build Chart. Serialized as `a:bldChart` */
export declare class BuildChart extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Build. Serialized as `:bld` */
    get build(): StringValue | undefined;
    set build(v: StringValue | undefined);
    /** Animate Background. Serialized as `:animBg` */
    get animateBackground(): BooleanValue | undefined;
    set animateBackground(v: BooleanValue | undefined);
}
/** Build Diagram. Serialized as `a:bldDgm` */
export declare class BuildDiagram extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Build. Serialized as `:bld` */
    get build(): StringValue | undefined;
    set build(v: StringValue | undefined);
    /** Reverse Animation. Serialized as `:rev` */
    get reverseAnimation(): BooleanValue | undefined;
    set reverseAnimation(v: BooleanValue | undefined);
}
/** Chart to Animate. Serialized as `a:chart` */
export declare class Chart extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Series Index. Serialized as `:seriesIdx` */
    get seriesIndex(): Int32Value | undefined;
    set seriesIndex(v: Int32Value | undefined);
    /** Category Index. Serialized as `:categoryIdx` */
    get categoryIndex(): Int32Value | undefined;
    set categoryIndex(v: Int32Value | undefined);
    /** Animation Build Step. Serialized as `:bldStep` */
    get buildStep(): ChartBuildStepValues | undefined;
    set buildStep(v: ChartBuildStepValues | undefined);
}
/** Diagram to Animate. Serialized as `a:dgm` */
export declare class Diagram extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Identifier. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Animation Build Step. Serialized as `:bldStep` */
    get buildStep(): DiagramBuildStepValues | undefined;
    set buildStep(v: DiagramBuildStepValues | undefined);
}
/** Graphic Object Data. Serialized as `a:graphicData` */
export declare class GraphicData extends OxmlCompositeElement<Graphic | Blip | Theme | ThemeOverride | ThemeManager | Table | TableStyleList | AoeOEmbedShared | WoeOEmbed | AifImageFormula | AlfLiveFeedProperties | AslScriptLink | AclshClassificationOutcome | AskLineSketchStyleProperties | A1611PictureAttributionSourceURL | AsvgSVGBlip | AdecDecorative | A16CreationId | A16PredecessorDrawingElementReference | A16ConnectableReferences | A16RowIdIdentifier | A16ColIdIdentifier | AhypHyperlinkColor | Wp15WebVideoProperty | Thm15ThemeFamily | A15BackgroundProperties | A15NonVisualGroupProperties | A15ObjectProperties | A15SignatureLine | A14CameraTool | A14CompatExtension | A14IsCanvas | A14GvmlContentPart | A14ShadowObscured | A14HiddenFillProperties | A14HiddenLineProperties | A14HiddenEffectsProperties | A14HiddenScene3D | A14HiddenShape3D | A14ImageProperties | A14UseLocalDpi | A14TextMath | Dgm14NonVisualDrawingProperties | Dgm14RecolorImages | DspDrawing | DspDataModelExtensionBlock | DgmColorsDefinition | DgmColorsDefinitionHeader | DgmColorsDefinitionHeaderList | DgmDataModelRoot | DgmLayoutDefinition | DgmLayoutDefinitionHeader | DgmLayoutDefinitionHeaderList | DgmRelationshipIds | DgmStyleDefinition | DgmStyleDefinitionHeader | DgmStyleDefinitionHeaderList | Dgm1612ShapeProperties | Dgm1612TextListStyleType | Dgm1611NumberDiagramInfoList | CChartSpace | CUserShapes | CChartReference | C16r3DataDisplayOptions16 | C15PivotSource | C15NumberingFormat | C15ShapeProperties | C15Layout | C15FullReference | C15LevelReference | C15FormulaReference | C15FilteredSeriesTitle | C15FilteredCategoryTitle | C15FilteredAreaSeries | C15FilteredBarSeries | C15FilteredBubbleSeries | C15FilteredLineSeriesExtension | C15FilteredPieSeries | C15FilteredRadarSeries | C15FilteredScatterSeries | C15FilteredSurfaceSeries | C15DataLabelsRange | C15CategoryFilterExceptions | C15DataLabelFieldTable | C15ExceptionForSave | C15ShowDataLabelsRange | C15ChartText | C15ShowLeaderLines | C15LeaderLines | C15AutoGeneneratedCategories | C14PivotOptions | C14SketchOptions | C14InvertSolidFillFormat | C14Style | Cdr14ContentPart | CompLegacyDrawing | LcLockedCanvas | WpInline | WpAnchor | Wp14PercentagePositionHeightOffset | Wp14PercentagePositionVerticalOffset | Wp14RelativeWidth | Wp14RelativeHeight | PicPicture | Pic14ShapeStyle | Pic14OfficeArtExtensionList | XdrWorksheetDrawing | XdrContentPart | Xdr14ContentPart | PcCommentAuthorMonikerList | PcCommentMonikerList | PcStringTagMonikerList | PcCustomShowMonikerList | PcDocumentMonikerList | PcSectionMonikerList | PcSlideBaseMonikerList | PcSlideLayoutMonikerList | PcMainMasterMonikerList | PcSlideMonikerList | PcSlidePosMonikerList | PcNotesMonikerList | PcNotesTextMonikerList | PcNotesMasterMonikerList | PcHandoutMonikerList | PcAnimEffectMkLstAnimationEffectMonikerList | PcAnimEffectParentMkLstAnimationEffectMonikerList | PcOsfTaskPaneAppMonikerList | PcSummaryZoomMonikerList | PcSectionLinkObjMonikerList | PcDesignerTagMonikerList | PcCustomXmlPartMonikerList | PCommentAuthorList | PCommentList | POleObject | PPresentation | PPresentationProperties | PSlide | PSlideLayout | PSlideMaster | PHandoutMaster | PNotesMaster | PNotesSlide | PSlideSyncProperties | PTagList | PViewProperties | PContentPart | P188AuthorList | P188CommentList | P188CommentRelationship | P1912TaskHistoryDetails | OacTextBodyPackage | OacGroupCommand | OacImgDataImgData | OacOrigImgDataImgData | OacImgLink | OacDrawingMonikerList | OacDocumentContextMonikerList | OacGraphicParentMonikerList | OacDeMkLstDrawingElementMonikerList | OacDeMasterMkLstDrawingElementMonikerList | OacShapeMonikerList | OacGroupShapeMonikerList | OacGraphicFrameMonikerList | OacConnectorMonikerList | OacPictureMonikerList | OacInkMonikerList | OacTextBodyMonikerList | OacTextCharRangeMonikerList | OacHyperlinkMonikerList | OacModel3DMonikerList | OacViewSelectionStgList | OacEditorSelectionStgList | OacDrawingSelectionStgList | OacTableMonikerList | OacTableCellMonikerList | OacTableRowMonikerList | OacTableColumnMonikerList | InkmlInk | EmmaOneOf | EmmaGroup | EmmaSequence | EmmaEndPoint | EmmaEndPointInfo | EmmaInfo | EmmaGrammar | EmmaDerivedFrom | EmmaNode | EmmaArc | EmmaLattice | EmmaLiteral | EmmaInterpretation | EmmaGroupInfo | EmmaDerivation | EmmaModel | EmmaEmma | MsinkContextNode | P15PresetTransition | P15PresenceInfo | P15ThreadingInfo | P15SlideGuideList | P15NotesGuideList | P15ChartTrackingReferenceBased | P14NonVisualContentPartProperties | P14Transform2D | P14ExtensionListModify | P14Media | P14VortexTransition | P14SwitchTransition | P14FlipTransition | P14RippleTransition | P14HoneycombTransition | P14PrismTransition | P14DoorsTransition | P14WindowTransition | P14FerrisTransition | P14GalleryTransition | P14ConveyorTransition | P14PanTransition | P14GlitterTransition | P14WarpTransition | P14FlythroughTransition | P14FlashTransition | P14ShredTransition | P14RevealTransition | P14WheelReverseTransition | P14BookmarkTarget | P14SectionProperties | P14SectionList | P14BrowseMode | P14LaserColor | P14DefaultImageDpi | P14DiscardImageEditData | P14ShowMediaControls | P14LaserTraceList | P14CreationId | P14ModificationId | P14ShowEventRecordList | SlSchemaLibrary | MMathProperties | MParagraph | MOfficeMath | WRecipients | WTextBoxContent | WComments | WFootnotes | WEndnotes | WHeader | WFooter | WSettings | WWebSettings | WFonts | WNumbering | WStyles | WDocument | WGlossaryDocument | W15Color | W15DataBinding | W15Appearance | W15CommentsEx | W15People | W15SdtRepeatedSection | W15SdtRepeatedSectionItem | W15ChartTrackingRefBased | W15DefaultCollapsed | W15PersistentDocumentId | W15FootnoteColumns | W15WebExtensionLinked | W15WebExtensionCreated | W14ContentPart | W14DocumentId | W14ConflictMode | W14CustomXmlConflictInsertionRangeStart | W14CustomXmlConflictInsertionRangeEnd | W14CustomXmlConflictDeletionRangeStart | W14CustomXmlConflictDeletionRangeEnd | W14DiscardImageEditingData | W14DefaultImageDpi | W14EntityPickerEmpty | W14SdtContentCheckBox | VShape | VShapetype | VGroup | VBackground | VFill | VFormulas | VShapeHandles | VImageData | VPath | VTextBox | VShadow | VStroke | VTextPath | VArc | VCurve | VImageFile | VLine | VOval | VPolyLine | VRectangle | VRoundRectangle | OShapeDefaults | OShapeLayout | OSignatureLine | OInk | ODiagram | OSkew | OExtrusion | OCallout | OLock | OOleObject | OComplex | OLeftStroke | OTopStroke | ORightStroke | OBottomStroke | OColumnStroke | OClipPath | OFillExtendedProperties | W10TopBorder | W10LeftBorder | W10RightBorder | W10BottomBorder | W10TextWrap | W10AnchorLock | XvmlClientData | PvmlInkAnnotationFlag | PvmlTextData | WpcWordprocessingCanvas | WpgWordprocessingGroup | WpsWordprocessingShape | SleSlicer | CsColorStyle | CsChartStyle | WeWebExtension | WeWebExtensionReference | TsleTimeSlicer> {
    static _Q: string;
    static _A: string[];
    /** Uniform Resource Identifier. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
}
/** Graphic Frame Locks. Serialized as `a:graphicFrameLocks` */
export declare class GraphicFrameLocks extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Disallow Shape Grouping. Serialized as `:noGrp` */
    get noGrouping(): BooleanValue | undefined;
    set noGrouping(v: BooleanValue | undefined);
    /** Disallow Selection of Child Shapes. Serialized as `:noDrilldown` */
    get noDrilldown(): BooleanValue | undefined;
    set noDrilldown(v: BooleanValue | undefined);
    /** Disallow Shape Selection. Serialized as `:noSelect` */
    get noSelection(): BooleanValue | undefined;
    set noSelection(v: BooleanValue | undefined);
    /** Disallow Aspect Ratio Change. Serialized as `:noChangeAspect` */
    get noChangeAspect(): BooleanValue | undefined;
    set noChangeAspect(v: BooleanValue | undefined);
    /** Disallow Shape Movement. Serialized as `:noMove` */
    get noMove(): BooleanValue | undefined;
    set noMove(v: BooleanValue | undefined);
    /** Disallow Shape Resize. Serialized as `:noResize` */
    get noResize(): BooleanValue | undefined;
    set noResize(v: BooleanValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the ConnectionType Class. */
export declare abstract class ConnectionType extends OxmlLeafElement {
    static _A: string[];
    /** Identifier. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
    /** Index. Serialized as `:idx` */
    get index(): UInt32Value | undefined;
    set index(v: UInt32Value | undefined);
}
/** Connection End. Serialized as `a:endCxn` */
export declare class EndConnection extends ConnectionType {
    static _Q: string;
}
/** Connection Start. Serialized as `a:stCxn` */
export declare class StartConnection extends ConnectionType {
    static _Q: string;
}
/** Connection Shape Locks. Serialized as `a:cxnSpLocks` */
export declare class ConnectionShapeLocks extends OxmlCompositeElement<ConnectorLockingExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Disallow Shape Grouping. Serialized as `:noGrp` */
    get noGrouping(): BooleanValue | undefined;
    set noGrouping(v: BooleanValue | undefined);
    /** Disallow Shape Selection. Serialized as `:noSelect` */
    get noSelection(): BooleanValue | undefined;
    set noSelection(v: BooleanValue | undefined);
    /** Disallow Shape Rotation. Serialized as `:noRot` */
    get noRotation(): BooleanValue | undefined;
    set noRotation(v: BooleanValue | undefined);
    /** Disallow Aspect Ratio Change. Serialized as `:noChangeAspect` */
    get noChangeAspect(): BooleanValue | undefined;
    set noChangeAspect(v: BooleanValue | undefined);
    /** Disallow Shape Movement. Serialized as `:noMove` */
    get noMove(): BooleanValue | undefined;
    set noMove(v: BooleanValue | undefined);
    /** Disallow Shape Resize. Serialized as `:noResize` */
    get noResize(): BooleanValue | undefined;
    set noResize(v: BooleanValue | undefined);
    /** Disallow Shape Point Editing. Serialized as `:noEditPoints` */
    get noEditPoints(): BooleanValue | undefined;
    set noEditPoints(v: BooleanValue | undefined);
    /** Disallow Showing Adjust Handles. Serialized as `:noAdjustHandles` */
    get noAdjustHandles(): BooleanValue | undefined;
    set noAdjustHandles(v: BooleanValue | undefined);
    /** Disallow Arrowhead Changes. Serialized as `:noChangeArrowheads` */
    get noChangeArrowheads(): BooleanValue | undefined;
    set noChangeArrowheads(v: BooleanValue | undefined);
    /** Disallow Shape Type Change. Serialized as `:noChangeShapeType` */
    get noChangeShapeType(): BooleanValue | undefined;
    set noChangeShapeType(v: BooleanValue | undefined);
    /** Returns ConnectorLockingExtensionList. */
    get connectorLockingExtensionList(): ConnectorLockingExtensionList | undefined;
}
/** Shape Locks. Serialized as `a:spLocks` */
export declare class ShapeLocks extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Disallow Shape Grouping. Serialized as `:noGrp` */
    get noGrouping(): BooleanValue | undefined;
    set noGrouping(v: BooleanValue | undefined);
    /** Disallow Shape Selection. Serialized as `:noSelect` */
    get noSelection(): BooleanValue | undefined;
    set noSelection(v: BooleanValue | undefined);
    /** Disallow Shape Rotation. Serialized as `:noRot` */
    get noRotation(): BooleanValue | undefined;
    set noRotation(v: BooleanValue | undefined);
    /** Disallow Aspect Ratio Change. Serialized as `:noChangeAspect` */
    get noChangeAspect(): BooleanValue | undefined;
    set noChangeAspect(v: BooleanValue | undefined);
    /** Disallow Shape Movement. Serialized as `:noMove` */
    get noMove(): BooleanValue | undefined;
    set noMove(v: BooleanValue | undefined);
    /** Disallow Shape Resize. Serialized as `:noResize` */
    get noResize(): BooleanValue | undefined;
    set noResize(v: BooleanValue | undefined);
    /** Disallow Shape Point Editing. Serialized as `:noEditPoints` */
    get noEditPoints(): BooleanValue | undefined;
    set noEditPoints(v: BooleanValue | undefined);
    /** Disallow Showing Adjust Handles. Serialized as `:noAdjustHandles` */
    get noAdjustHandles(): BooleanValue | undefined;
    set noAdjustHandles(v: BooleanValue | undefined);
    /** Disallow Arrowhead Changes. Serialized as `:noChangeArrowheads` */
    get noChangeArrowheads(): BooleanValue | undefined;
    set noChangeArrowheads(v: BooleanValue | undefined);
    /** Disallow Shape Type Change. Serialized as `:noChangeShapeType` */
    get noChangeShapeType(): BooleanValue | undefined;
    set noChangeShapeType(v: BooleanValue | undefined);
    /** Disallow Shape Text Editing. Serialized as `:noTextEdit` */
    get noTextEdit(): BooleanValue | undefined;
    set noTextEdit(v: BooleanValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
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
/** Child Extents. Serialized as `a:chExt` */
export declare class ChildExtents extends PositiveSize2DType {
    static _Q: string;
}
/** Extents. Serialized as `a:ext` */
export declare class Extents extends PositiveSize2DType {
    static _Q: string;
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
/** Child Offset. Serialized as `a:chOff` */
export declare class ChildOffset extends Point2DType {
    static _Q: string;
}
/** Offset. Serialized as `a:off` */
export declare class Offset extends Point2DType {
    static _Q: string;
}
/** Defines the RatioType Class. */
export declare abstract class RatioType extends OxmlLeafElement {
    static _A: string[];
    /** Numerator. Serialized as `:n` */
    get numerator(): Int32Value | undefined;
    set numerator(v: Int32Value | undefined);
    /** Denominator. Serialized as `:d` */
    get denominator(): Int32Value | undefined;
    set denominator(v: Int32Value | undefined);
}
/** Vertical Ratio. Serialized as `a:sy` */
export declare class ScaleY extends RatioType {
    static _Q: string;
}
/** Horizontal Ratio. Serialized as `a:sx` */
export declare class ScaleX extends RatioType {
    static _Q: string;
}
/** Defines the Color2Type Class. */
export declare abstract class Color2Type extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | PresetColor> {
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): RgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): RgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): HslColor | undefined;
    /** System Color. */
    get systemColor(): SystemColor | undefined;
    /** Preset Color. */
    get presetColor(): PresetColor | undefined;
}
/** Followed Hyperlink. Serialized as `a:folHlink` */
export declare class FollowedHyperlinkColor extends Color2Type {
    static _Q: string;
}
/** Hyperlink. Serialized as `a:hlink` */
export declare class Hyperlink extends Color2Type {
    static _Q: string;
}
/** Accent 6. Serialized as `a:accent6` */
export declare class Accent6Color extends Color2Type {
    static _Q: string;
}
/** Accent 5. Serialized as `a:accent5` */
export declare class Accent5Color extends Color2Type {
    static _Q: string;
}
/** Accent 4. Serialized as `a:accent4` */
export declare class Accent4Color extends Color2Type {
    static _Q: string;
}
/** Accent 3. Serialized as `a:accent3` */
export declare class Accent3Color extends Color2Type {
    static _Q: string;
}
/** Accent 2. Serialized as `a:accent2` */
export declare class Accent2Color extends Color2Type {
    static _Q: string;
}
/** Accent 1. Serialized as `a:accent1` */
export declare class Accent1Color extends Color2Type {
    static _Q: string;
}
/** Light 2. Serialized as `a:lt2` */
export declare class Light2Color extends Color2Type {
    static _Q: string;
}
/** Dark 2. Serialized as `a:dk2` */
export declare class Dark2Color extends Color2Type {
    static _Q: string;
}
/** Light 1. Serialized as `a:lt1` */
export declare class Light1Color extends Color2Type {
    static _Q: string;
}
/** Dark 1. Serialized as `a:dk1` */
export declare class Dark1Color extends Color2Type {
    static _Q: string;
}
/** Format Scheme. Serialized as `a:fmtScheme` */
export declare class FormatScheme extends OxmlCompositeElement<FillStyleList | LineStyleList | EffectStyleList | BackgroundFillStyleList> {
    static _Q: string;
    static _A: string[];
    /** Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Fill Style List. */
    get fillStyleList(): FillStyleList | undefined;
    /** Line Style List. */
    get lineStyleList(): LineStyleList | undefined;
    /** Effect Style List. */
    get effectStyleList(): EffectStyleList | undefined;
    /** Background Fill Style List. */
    get backgroundFillStyleList(): BackgroundFillStyleList | undefined;
}
/** Font Scheme. Serialized as `a:fontScheme` */
export declare class FontScheme extends OxmlCompositeElement<MajorFont | MinorFont | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Major Font. */
    get majorFont(): MajorFont | undefined;
    /** Minor fonts. */
    get minorFont(): MinorFont | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the ColorScheme Class. Serialized as `a:clrScheme` */
export declare class ColorScheme extends OxmlCompositeElement<Dark1Color | Light1Color | Dark2Color | Light2Color | Accent1Color | Accent2Color | Accent3Color | Accent4Color | Accent5Color | Accent6Color | Hyperlink | FollowedHyperlinkColor | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** Dark 1. */
    get dark1Color(): Dark1Color | undefined;
    /** Light 1. */
    get light1Color(): Light1Color | undefined;
    /** Dark 2. */
    get dark2Color(): Dark2Color | undefined;
    /** Light 2. */
    get light2Color(): Light2Color | undefined;
    /** Accent 1. */
    get accent1Color(): Accent1Color | undefined;
    /** Accent 2. */
    get accent2Color(): Accent2Color | undefined;
    /** Accent 3. */
    get accent3Color(): Accent3Color | undefined;
    /** Accent 4. */
    get accent4Color(): Accent4Color | undefined;
    /** Accent 5. */
    get accent5Color(): Accent5Color | undefined;
    /** Accent 6. */
    get accent6Color(): Accent6Color | undefined;
    /** Hyperlink. */
    get hyperlink(): Hyperlink | undefined;
    /** Followed Hyperlink. */
    get followedHyperlinkColor(): FollowedHyperlinkColor | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Background Fill Style List. Serialized as `a:bgFillStyleLst` */
export declare class BackgroundFillStyleList extends OxmlCompositeElement<NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill> {
    static _Q: string;
}
/** Effect Style List. Serialized as `a:effectStyleLst` */
export declare class EffectStyleList extends OxmlCompositeElement<EffectStyle> {
    static _Q: string;
}
/** Line Style List. Serialized as `a:lnStyleLst` */
export declare class LineStyleList extends OxmlCompositeElement<Outline> {
    static _Q: string;
}
/** Fill Style List. Serialized as `a:fillStyleLst` */
export declare class FillStyleList extends OxmlCompositeElement<NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill> {
    static _Q: string;
}
/** Effect Style. Serialized as `a:effectStyle` */
export declare class EffectStyle extends OxmlCompositeElement<EffectList | EffectDag | Scene3DType | Shape3DType> {
    static _Q: string;
}
/** 3D Scene Properties. Serialized as `a:scene3d` */
export declare class Scene3DType extends OxmlCompositeElement<Camera | LightRig | Backdrop | ExtensionList> {
    static _Q: string;
    /** Camera. */
    get camera(): Camera | undefined;
    /** Light Rig. */
    get lightRig(): LightRig | undefined;
    /** Backdrop Plane. */
    get backdrop(): Backdrop | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Font. Serialized as `a:font` */
export declare class SupplementalFont extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Script. Serialized as `:script` */
    get script(): StringValue | undefined;
    set script(v: StringValue | undefined);
    /** Typeface. Serialized as `:typeface` */
    get typeface(): StringValue | undefined;
    set typeface(v: StringValue | undefined);
}
/** Custom color. Serialized as `a:custClr` */
export declare class CustomColor extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {
    static _Q: string;
    static _A: string[];
    /** Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): RgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): RgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): HslColor | undefined;
    /** System Color. */
    get systemColor(): SystemColor | undefined;
    /** Scheme Color. */
    get schemeColor(): SchemeColor | undefined;
    /** Preset Color. */
    get presetColor(): PresetColor | undefined;
}
/** Defines the AudioCDTimeType Class. */
export declare abstract class AudioCDTimeType extends OxmlLeafElement {
    static _A: string[];
    /** Track. Serialized as `:track` */
    get track(): ByteValue | undefined;
    set track(v: ByteValue | undefined);
    /** Time. Serialized as `:time` */
    get time(): UInt32Value | undefined;
    set time(v: UInt32Value | undefined);
}
/** Audio End Time. Serialized as `a:end` */
export declare class EndTime extends AudioCDTimeType {
    static _Q: string;
}
/** Audio Start Time. Serialized as `a:st` */
export declare class StartTime extends AudioCDTimeType {
    static _Q: string;
}
/** Defines the ExtensionList Class. Serialized as `a:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<Extension> {
    static _Q: string;
}
/** Table Style List. Serialized as `a:tblStyleLst` */
export declare class TableStyleList extends OxmlPartRootElement<TableStyleEntry> {
    static _Q: string;
    static _A: string[];
    /** Default. Serialized as `:def` */
    get default(): StringValue | undefined;
    set default(v: StringValue | undefined);
}
/** Table. Serialized as `a:tbl` */
export declare class Table extends OxmlCompositeElement<TableProperties | TableGrid | TableRow> {
    static _Q: string;
    /** Table Properties. */
    get tableProperties(): TableProperties | undefined;
    /** Table Grid. */
    get tableGrid(): TableGrid | undefined;
}
/** Defines the EmptyType Class. */
export declare abstract class EmptyType extends OxmlLeafElement {
}
/** Master Color Mapping. Serialized as `a:masterClrMapping` */
export declare class MasterColorMapping extends EmptyType {
    static _Q: string;
}
/** Theme Manager. Serialized as `a:themeManager` */
export declare class ThemeManager extends EmptyType {
    static _Q: string;
}
/** Theme Override. Serialized as `a:themeOverride` */
export declare class ThemeOverride extends OxmlPartRootElement<ColorScheme | FontScheme | FormatScheme> {
    static _Q: string;
    /** Color Scheme. */
    get colorScheme(): ColorScheme | undefined;
    /** Returns FontScheme. */
    get fontScheme(): FontScheme | undefined;
    /** Returns FormatScheme. */
    get formatScheme(): FormatScheme | undefined;
}
/** Theme. Serialized as `a:theme` */
export declare class Theme extends OxmlPartRootElement<ThemeElements | ObjectDefaults | ExtraColorSchemeList | CustomColorList | OfficeStyleSheetExtensionList> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** id. Serialized as `thm15:id` */
    get themeId(): StringValue | undefined;
    set themeId(v: StringValue | undefined);
    /** Returns ThemeElements. */
    get themeElements(): ThemeElements | undefined;
    /** Returns ObjectDefaults. */
    get objectDefaults(): ObjectDefaults | undefined;
    /** Returns ExtraColorSchemeList. */
    get extraColorSchemeList(): ExtraColorSchemeList | undefined;
    /** Returns CustomColorList. */
    get customColorList(): CustomColorList | undefined;
    /** Returns OfficeStyleSheetExtensionList. */
    get officeStyleSheetExtensionList(): OfficeStyleSheetExtensionList | undefined;
}
/** Defines the Blip Class. Serialized as `a:blip` */
export declare class Blip extends OxmlCompositeElement<AlphaBiLevel | AlphaCeiling | AlphaFloor | AlphaInverse | AlphaModulationEffect | AlphaModulationFixed | AlphaReplace | BiLevel | Blur | ColorChange | ColorReplacement | Duotone | FillOverlay | Grayscale | Hsl | LuminanceEffect | TintEffect | BlipExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Embedded Picture Reference. Serialized as `r:embed` */
    get embed(): StringValue | undefined;
    set embed(v: StringValue | undefined);
    /** Linked Picture Reference. Serialized as `r:link` */
    get link(): StringValue | undefined;
    set link(v: StringValue | undefined);
    /** Compression state for blips.. Serialized as `:cstate` */
    get compressionState(): BlipCompressionValues | undefined;
    set compressionState(v: BlipCompressionValues | undefined);
}
/** Graphic Object. Serialized as `a:graphic` */
export declare class Graphic extends OxmlCompositeElement<GraphicData> {
    static _Q: string;
    /** Graphic Object Data. */
    get graphicData(): GraphicData | undefined;
}
/** Text Field. Serialized as `a:fld` */
export declare class Field extends OxmlCompositeElement<RunProperties | ParagraphProperties | Text> {
    static _Q: string;
    static _A: string[];
    /** Field ID. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Field Type. Serialized as `:type` */
    get type(): StringValue | undefined;
    set type(v: StringValue | undefined);
    /** Text Character Properties. */
    get runProperties(): RunProperties | undefined;
    /** Text Paragraph Properties. */
    get paragraphProperties(): ParagraphProperties | undefined;
    /** Returns Text. */
    get text(): Text | undefined;
}
/** Text Line Break. Serialized as `a:br` */
export declare class Break extends OxmlCompositeElement<RunProperties> {
    static _Q: string;
    /** Text Run Properties. */
    get runProperties(): RunProperties | undefined;
}
/** Text Run. Serialized as `a:r` */
export declare class Run extends OxmlCompositeElement<RunProperties | Text> {
    static _Q: string;
    /** Text Character Properties. */
    get runProperties(): RunProperties | undefined;
    /** Text String. */
    get text(): Text | undefined;
}
/** Underline Fill. Serialized as `a:uFill` */
export declare class UnderlineFill extends OxmlCompositeElement<NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill> {
    static _Q: string;
    /** Returns NoFill. */
    get noFill(): NoFill | undefined;
    /** Returns SolidFill. */
    get solidFill(): SolidFill | undefined;
    /** Returns GradientFill. */
    get gradientFill(): GradientFill | undefined;
    /** Returns BlipFill. */
    get blipFill(): BlipFill | undefined;
    /** Pattern Fill. */
    get patternFill(): PatternFill | undefined;
    /** Group Fill. */
    get groupFill(): GroupFill | undefined;
}
/** Underline Fill Properties Follow Text. Serialized as `a:uFillTx` */
export declare class UnderlineFillText extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the LinePropertiesType Class. */
export declare abstract class LinePropertiesType extends OxmlCompositeElement<NoFill | SolidFill | GradientFill | PatternFill | PresetDash | CustomDash | Round | LineJoinBevel | Miter | HeadEnd | TailEnd | LinePropertiesExtensionList> {
    static _A: string[];
    /** line width. Serialized as `:w` */
    get width(): Int32Value | undefined;
    set width(v: Int32Value | undefined);
    /** line cap. Serialized as `:cap` */
    get capType(): LineCapValues | undefined;
    set capType(v: LineCapValues | undefined);
    /** compound line type. Serialized as `:cmpd` */
    get compoundLineType(): CompoundLineValues | undefined;
    set compoundLineType(v: CompoundLineValues | undefined);
    /** pen alignment. Serialized as `:algn` */
    get alignment(): PenAlignmentValues | undefined;
    set alignment(v: PenAlignmentValues | undefined);
}
/** Bottom-Left to Top-Right Border Line Properties. Serialized as `a:lnBlToTr` */
export declare class BottomLeftToTopRightBorderLineProperties extends LinePropertiesType {
    static _Q: string;
}
/** Top-Left to Bottom-Right Border Line Properties. Serialized as `a:lnTlToBr` */
export declare class TopLeftToBottomRightBorderLineProperties extends LinePropertiesType {
    static _Q: string;
}
/** Bottom Border Line Properties. Serialized as `a:lnB` */
export declare class BottomBorderLineProperties extends LinePropertiesType {
    static _Q: string;
}
/** Top Border Line Properties. Serialized as `a:lnT` */
export declare class TopBorderLineProperties extends LinePropertiesType {
    static _Q: string;
}
/** Right Border Line Properties. Serialized as `a:lnR` */
export declare class RightBorderLineProperties extends LinePropertiesType {
    static _Q: string;
}
/** Left Border Line Properties. Serialized as `a:lnL` */
export declare class LeftBorderLineProperties extends LinePropertiesType {
    static _Q: string;
}
/** Defines the Outline Class. Serialized as `a:ln` */
export declare class Outline extends LinePropertiesType {
    static _Q: string;
}
/** Underline Stroke. Serialized as `a:uLn` */
export declare class Underline extends LinePropertiesType {
    static _Q: string;
}
/** Underline Follows Text. Serialized as `a:uLnTx` */
export declare class UnderlineFollowsText extends OxmlLeafElement {
    static _Q: string;
}
/** Picture Bullet. Serialized as `a:buBlip` */
export declare class PictureBullet extends OxmlCompositeElement<Blip> {
    static _Q: string;
    /** Blip. */
    get blip(): Blip | undefined;
}
/** Character Bullet. Serialized as `a:buChar` */
export declare class CharacterBullet extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Bullet Character. Serialized as `:char` */
    get char(): StringValue | undefined;
    set char(v: StringValue | undefined);
}
/** Auto-Numbered Bullet. Serialized as `a:buAutoNum` */
export declare class AutoNumberedBullet extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Bullet Autonumbering Type. Serialized as `:type` */
    get type(): TextAutoNumberSchemeValues | undefined;
    set type(v: TextAutoNumberSchemeValues | undefined);
    /** Start Numbering At. Serialized as `:startAt` */
    get startAt(): Int32Value | undefined;
    set startAt(v: Int32Value | undefined);
}
/** No Bullet. Serialized as `a:buNone` */
export declare class NoBullet extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the TextFontType Class. */
export declare abstract class TextFontType extends OxmlLeafElement {
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
/** Defines the SymbolFont Class. Serialized as `a:sym` */
export declare class SymbolFont extends TextFontType {
    static _Q: string;
}
/** Complex Script Font. Serialized as `a:cs` */
export declare class ComplexScriptFont extends TextFontType {
    static _Q: string;
}
/** East Asian Font. Serialized as `a:ea` */
export declare class EastAsianFont extends TextFontType {
    static _Q: string;
}
/** Latin Font. Serialized as `a:latin` */
export declare class LatinFont extends TextFontType {
    static _Q: string;
}
/** Specified. Serialized as `a:buFont` */
export declare class BulletFont extends TextFontType {
    static _Q: string;
}
/** Follow text. Serialized as `a:buFontTx` */
export declare class BulletFontText extends OxmlLeafElement {
    static _Q: string;
}
/** Bullet Size Points. Serialized as `a:buSzPts` */
export declare class BulletSizePoints extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Bullet Size Percentage. Serialized as `a:buSzPct` */
export declare class BulletSizePercentage extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Bullet Size Follows Text. Serialized as `a:buSzTx` */
export declare class BulletSizeText extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the ColorType Class. */
export declare abstract class ColorType extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): RgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): RgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): HslColor | undefined;
    /** System Color. */
    get systemColor(): SystemColor | undefined;
    /** Scheme Color. */
    get schemeColor(): SchemeColor | undefined;
    /** Preset Color. */
    get presetColor(): PresetColor | undefined;
}
/** Defines the Highlight Class. Serialized as `a:highlight` */
export declare class Highlight extends ColorType {
    static _Q: string;
}
/** Background color. Serialized as `a:bgClr` */
export declare class BackgroundColor extends ColorType {
    static _Q: string;
}
/** Foreground color. Serialized as `a:fgClr` */
export declare class ForegroundColor extends ColorType {
    static _Q: string;
}
/** Change Color To. Serialized as `a:clrTo` */
export declare class ColorTo extends ColorType {
    static _Q: string;
}
/** Change Color From. Serialized as `a:clrFrom` */
export declare class ColorFrom extends ColorType {
    static _Q: string;
}
/** Contour Color. Serialized as `a:contourClr` */
export declare class ContourColor extends ColorType {
    static _Q: string;
}
/** Extrusion Color. Serialized as `a:extrusionClr` */
export declare class ExtrusionColor extends ColorType {
    static _Q: string;
}
/** Color Specified. Serialized as `a:buClr` */
export declare class BulletColor extends ColorType {
    static _Q: string;
}
/** Follow Text. Serialized as `a:buClrTx` */
export declare class BulletColorText extends OxmlLeafElement {
    static _Q: string;
}
/** Shape AutoFit. Serialized as `a:spAutoFit` */
export declare class ShapeAutoFit extends OxmlLeafElement {
    static _Q: string;
}
/** Normal AutoFit. Serialized as `a:normAutofit` */
export declare class NormalAutoFit extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Font Scale. Serialized as `:fontScale` */
    get fontScale(): Int32Value | undefined;
    set fontScale(v: Int32Value | undefined);
    /** Line Space Reduction. Serialized as `:lnSpcReduction` */
    get lineSpaceReduction(): Int32Value | undefined;
    set lineSpaceReduction(v: Int32Value | undefined);
}
/** No AutoFit. Serialized as `a:noAutofit` */
export declare class NoAutoFit extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the FontReference Class. Serialized as `a:fontRef` */
export declare class FontReference extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {
    static _Q: string;
    static _A: string[];
    /** Identifier. Serialized as `:idx` */
    get index(): FontCollectionIndexValues | undefined;
    set index(v: FontCollectionIndexValues | undefined);
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): RgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): RgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): HslColor | undefined;
    /** System Color. */
    get systemColor(): SystemColor | undefined;
    /** Scheme Color. */
    get schemeColor(): SchemeColor | undefined;
    /** Preset Color. */
    get presetColor(): PresetColor | undefined;
}
/** Defines the FontCollectionType Class. */
export declare abstract class FontCollectionType extends OxmlCompositeElement<LatinFont | EastAsianFont | ComplexScriptFont | SupplementalFont | ExtensionList> {
    /** Latin Font. */
    get latinFont(): LatinFont | undefined;
    /** East Asian Font. */
    get eastAsianFont(): EastAsianFont | undefined;
    /** Complex Script Font. */
    get complexScriptFont(): ComplexScriptFont | undefined;
}
/** Minor fonts. Serialized as `a:minorFont` */
export declare class MinorFont extends FontCollectionType {
    static _Q: string;
}
/** Major Font. Serialized as `a:majorFont` */
export declare class MajorFont extends FontCollectionType {
    static _Q: string;
}
/** Font. Serialized as `a:font` */
export declare class Fonts extends FontCollectionType {
    static _Q: string;
}
/** Effect. Serialized as `a:effect` */
export declare class EffectPropertiesType extends OxmlCompositeElement<EffectList | EffectDag> {
    static _Q: string;
    /** Effect Container. */
    get effectList(): EffectList | undefined;
    /** Effect Container. */
    get effectDag(): EffectDag | undefined;
}
/** Defines the StyleMatrixReferenceType Class. */
export declare abstract class StyleMatrixReferenceType extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {
    static _A: string[];
    /** Style Matrix Index. Serialized as `:idx` */
    get index(): UInt32Value | undefined;
    set index(v: UInt32Value | undefined);
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): RgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): RgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): HslColor | undefined;
    /** System Color. */
    get systemColor(): SystemColor | undefined;
    /** Scheme Color. */
    get schemeColor(): SchemeColor | undefined;
    /** Preset Color. */
    get presetColor(): PresetColor | undefined;
}
/** Defines the LineReference Class. Serialized as `a:lnRef` */
export declare class LineReference extends StyleMatrixReferenceType {
    static _Q: string;
}
/** Effect Reference. Serialized as `a:effectRef` */
export declare class EffectReference extends StyleMatrixReferenceType {
    static _Q: string;
}
/** Fill Reference. Serialized as `a:fillRef` */
export declare class FillReference extends StyleMatrixReferenceType {
    static _Q: string;
}
/** Fill. Serialized as `a:fill` */
export declare class FillProperties extends OxmlCompositeElement<NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill> {
    static _Q: string;
    /** Returns NoFill. */
    get noFill(): NoFill | undefined;
    /** Returns SolidFill. */
    get solidFill(): SolidFill | undefined;
    /** Returns GradientFill. */
    get gradientFill(): GradientFill | undefined;
    /** Returns BlipFill. */
    get blipFill(): BlipFill | undefined;
    /** Pattern Fill. */
    get patternFill(): PatternFill | undefined;
    /** Group Fill. */
    get groupFill(): GroupFill | undefined;
}
/** Custom Dash. Serialized as `a:custDash` */
export declare class CustomDash extends OxmlCompositeElement<DashStop> {
    static _Q: string;
}
/** Preset Dash. Serialized as `a:prstDash` */
export declare class PresetDash extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): PresetLineDashValues | undefined;
    set val(v: PresetLineDashValues | undefined);
}
/** Miter Line Join. Serialized as `a:miter` */
export declare class Miter extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Miter Join Limit. Serialized as `:lim` */
    get limit(): Int32Value | undefined;
    set limit(v: Int32Value | undefined);
}
/** Line Join Bevel. Serialized as `a:bevel` */
export declare class LineJoinBevel extends OxmlLeafElement {
    static _Q: string;
}
/** Round Line Join. Serialized as `a:round` */
export declare class Round extends OxmlLeafElement {
    static _Q: string;
}
/** Preset Text Warp. Serialized as `a:prstTxWarp` */
export declare class PresetTextWrap extends OxmlCompositeElement<AdjustValueList> {
    static _Q: string;
    static _A: string[];
    /** Preset Warp Shape. Serialized as `:prst` */
    get preset(): TextShapeValues | undefined;
    set preset(v: TextShapeValues | undefined);
    /** Adjust Value List. */
    get adjustValueList(): AdjustValueList | undefined;
}
/** Preset geometry. Serialized as `a:prstGeom` */
export declare class PresetGeometry extends OxmlCompositeElement<AdjustValueList> {
    static _Q: string;
    static _A: string[];
    /** Preset Shape. Serialized as `:prst` */
    get preset(): ShapeTypeValues | undefined;
    set preset(v: ShapeTypeValues | undefined);
    /** List of Shape Adjust Values. */
    get adjustValueList(): AdjustValueList | undefined;
}
/** Custom geometry. Serialized as `a:custGeom` */
export declare class CustomGeometry extends OxmlCompositeElement<AdjustValueList | ShapeGuideList | AdjustHandleList | ConnectionSiteList | Rectangle | PathList> {
    static _Q: string;
    /** Adjust Value List. */
    get adjustValueList(): AdjustValueList | undefined;
    /** List of Shape Guides. */
    get shapeGuideList(): ShapeGuideList | undefined;
    /** List of Shape Adjust Handles. */
    get adjustHandleList(): AdjustHandleList | undefined;
    /** List of Shape Connection Sites. */
    get connectionSiteList(): ConnectionSiteList | undefined;
    /** Shape Text Rectangle. */
    get rectangle(): Rectangle | undefined;
    /** List of Shape Paths. */
    get pathList(): PathList | undefined;
}
/** Effect Container. Serialized as `a:effectLst` */
export declare class EffectList extends OxmlCompositeElement<Blur | FillOverlay | Glow | InnerShadow | OuterShadow | PresetShadow | Reflection | SoftEdge> {
    static _Q: string;
    /** Blur Effect. */
    get blur(): Blur | undefined;
    /** Returns FillOverlay. */
    get fillOverlay(): FillOverlay | undefined;
    /** Returns Glow. */
    get glow(): Glow | undefined;
    /** Returns InnerShadow. */
    get innerShadow(): InnerShadow | undefined;
    /** Returns OuterShadow. */
    get outerShadow(): OuterShadow | undefined;
    /** Returns PresetShadow. */
    get presetShadow(): PresetShadow | undefined;
    /** Returns Reflection. */
    get reflection(): Reflection | undefined;
    /** Returns SoftEdge. */
    get softEdge(): SoftEdge | undefined;
}
/** Transform Effect. Serialized as `a:xfrm` */
export declare class TransformEffect extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Horizontal Ratio. Serialized as `:sx` */
    get horizontalRatio(): Int32Value | undefined;
    set horizontalRatio(v: Int32Value | undefined);
    /** Vertical Ratio. Serialized as `:sy` */
    get verticalRatio(): Int32Value | undefined;
    set verticalRatio(v: Int32Value | undefined);
    /** Horizontal Skew. Serialized as `:kx` */
    get horizontalSkew(): Int32Value | undefined;
    set horizontalSkew(v: Int32Value | undefined);
    /** Vertical Skew. Serialized as `:ky` */
    get verticalSkew(): Int32Value | undefined;
    set verticalSkew(v: Int32Value | undefined);
    /** Horizontal Shift. Serialized as `:tx` */
    get horizontalShift(): Int64Value | undefined;
    set horizontalShift(v: Int64Value | undefined);
    /** Vertical Shift. Serialized as `:ty` */
    get verticalShift(): Int64Value | undefined;
    set verticalShift(v: Int64Value | undefined);
}
/** Defines the TintEffect Class. Serialized as `a:tint` */
export declare class TintEffect extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Hue. Serialized as `:hue` */
    get hue(): Int32Value | undefined;
    set hue(v: Int32Value | undefined);
    /** Amount. Serialized as `:amt` */
    get amount(): Int32Value | undefined;
    set amount(v: Int32Value | undefined);
}
/** Soft Edge Effect. Serialized as `a:softEdge` */
export declare class SoftEdge extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Radius. Serialized as `:rad` */
    get radius(): Int64Value | undefined;
    set radius(v: Int64Value | undefined);
}
/** Relative Offset Effect. Serialized as `a:relOff` */
export declare class RelativeOffset extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Offset X. Serialized as `:tx` */
    get offsetX(): Int32Value | undefined;
    set offsetX(v: Int32Value | undefined);
    /** Offset Y. Serialized as `:ty` */
    get offsetY(): Int32Value | undefined;
    set offsetY(v: Int32Value | undefined);
}
/** Reflection Effect. Serialized as `a:reflection` */
export declare class Reflection extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Blur Radius. Serialized as `:blurRad` */
    get blurRadius(): Int64Value | undefined;
    set blurRadius(v: Int64Value | undefined);
    /** Start Opacity. Serialized as `:stA` */
    get startOpacity(): Int32Value | undefined;
    set startOpacity(v: Int32Value | undefined);
    /** Start Position. Serialized as `:stPos` */
    get startPosition(): Int32Value | undefined;
    set startPosition(v: Int32Value | undefined);
    /** End Alpha. Serialized as `:endA` */
    get endAlpha(): Int32Value | undefined;
    set endAlpha(v: Int32Value | undefined);
    /** End Position. Serialized as `:endPos` */
    get endPosition(): Int32Value | undefined;
    set endPosition(v: Int32Value | undefined);
    /** Distance. Serialized as `:dist` */
    get distance(): Int64Value | undefined;
    set distance(v: Int64Value | undefined);
    /** Direction. Serialized as `:dir` */
    get direction(): Int32Value | undefined;
    set direction(v: Int32Value | undefined);
    /** Fade Direction. Serialized as `:fadeDir` */
    get fadeDirection(): Int32Value | undefined;
    set fadeDirection(v: Int32Value | undefined);
    /** Horizontal Ratio. Serialized as `:sx` */
    get horizontalRatio(): Int32Value | undefined;
    set horizontalRatio(v: Int32Value | undefined);
    /** Vertical Ratio. Serialized as `:sy` */
    get verticalRatio(): Int32Value | undefined;
    set verticalRatio(v: Int32Value | undefined);
    /** Horizontal Skew. Serialized as `:kx` */
    get horizontalSkew(): Int32Value | undefined;
    set horizontalSkew(v: Int32Value | undefined);
    /** Vertical Skew. Serialized as `:ky` */
    get verticalSkew(): Int32Value | undefined;
    set verticalSkew(v: Int32Value | undefined);
    /** Shadow Alignment. Serialized as `:algn` */
    get alignment(): RectangleAlignmentValues | undefined;
    set alignment(v: RectangleAlignmentValues | undefined);
    /** Rotate With Shape. Serialized as `:rotWithShape` */
    get rotateWithShape(): BooleanValue | undefined;
    set rotateWithShape(v: BooleanValue | undefined);
}
/** Preset Shadow. Serialized as `a:prstShdw` */
export declare class PresetShadow extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {
    static _Q: string;
    static _A: string[];
    /** Preset Shadow. Serialized as `:prst` */
    get preset(): PresetShadowValues | undefined;
    set preset(v: PresetShadowValues | undefined);
    /** Distance. Serialized as `:dist` */
    get distance(): Int64Value | undefined;
    set distance(v: Int64Value | undefined);
    /** Direction. Serialized as `:dir` */
    get direction(): Int32Value | undefined;
    set direction(v: Int32Value | undefined);
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): RgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): RgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): HslColor | undefined;
    /** System Color. */
    get systemColor(): SystemColor | undefined;
    /** Scheme Color. */
    get schemeColor(): SchemeColor | undefined;
    /** Preset Color. */
    get presetColor(): PresetColor | undefined;
}
/** Outer Shadow Effect. Serialized as `a:outerShdw` */
export declare class OuterShadow extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {
    static _Q: string;
    static _A: string[];
    /** Blur Radius. Serialized as `:blurRad` */
    get blurRadius(): Int64Value | undefined;
    set blurRadius(v: Int64Value | undefined);
    /** Shadow Offset Distance. Serialized as `:dist` */
    get distance(): Int64Value | undefined;
    set distance(v: Int64Value | undefined);
    /** Shadow Direction. Serialized as `:dir` */
    get direction(): Int32Value | undefined;
    set direction(v: Int32Value | undefined);
    /** Horizontal Scaling Factor. Serialized as `:sx` */
    get horizontalRatio(): Int32Value | undefined;
    set horizontalRatio(v: Int32Value | undefined);
    /** Vertical Scaling Factor. Serialized as `:sy` */
    get verticalRatio(): Int32Value | undefined;
    set verticalRatio(v: Int32Value | undefined);
    /** Horizontal Skew. Serialized as `:kx` */
    get horizontalSkew(): Int32Value | undefined;
    set horizontalSkew(v: Int32Value | undefined);
    /** Vertical Skew. Serialized as `:ky` */
    get verticalSkew(): Int32Value | undefined;
    set verticalSkew(v: Int32Value | undefined);
    /** Shadow Alignment. Serialized as `:algn` */
    get alignment(): RectangleAlignmentValues | undefined;
    set alignment(v: RectangleAlignmentValues | undefined);
    /** Rotate With Shape. Serialized as `:rotWithShape` */
    get rotateWithShape(): BooleanValue | undefined;
    set rotateWithShape(v: BooleanValue | undefined);
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): RgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): RgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): HslColor | undefined;
    /** System Color. */
    get systemColor(): SystemColor | undefined;
    /** Scheme Color. */
    get schemeColor(): SchemeColor | undefined;
    /** Preset Color. */
    get presetColor(): PresetColor | undefined;
}
/** Luminance. Serialized as `a:lum` */
export declare class LuminanceEffect extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Brightness. Serialized as `:bright` */
    get brightness(): Int32Value | undefined;
    set brightness(v: Int32Value | undefined);
    /** Contrast. Serialized as `:contrast` */
    get contrast(): Int32Value | undefined;
    set contrast(v: Int32Value | undefined);
}
/** Inner Shadow Effect. Serialized as `a:innerShdw` */
export declare class InnerShadow extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {
    static _Q: string;
    static _A: string[];
    /** Blur Radius. Serialized as `:blurRad` */
    get blurRadius(): Int64Value | undefined;
    set blurRadius(v: Int64Value | undefined);
    /** Distance. Serialized as `:dist` */
    get distance(): Int64Value | undefined;
    set distance(v: Int64Value | undefined);
    /** Direction. Serialized as `:dir` */
    get direction(): Int32Value | undefined;
    set direction(v: Int32Value | undefined);
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): RgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): RgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): HslColor | undefined;
    /** System Color. */
    get systemColor(): SystemColor | undefined;
    /** Scheme Color. */
    get schemeColor(): SchemeColor | undefined;
    /** Preset Color. */
    get presetColor(): PresetColor | undefined;
}
/** Hue Saturation Luminance Effect. Serialized as `a:hsl` */
export declare class Hsl extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Hue. Serialized as `:hue` */
    get hue(): Int32Value | undefined;
    set hue(v: Int32Value | undefined);
    /** Saturation. Serialized as `:sat` */
    get saturation(): Int32Value | undefined;
    set saturation(v: Int32Value | undefined);
    /** Luminance. Serialized as `:lum` */
    get luminance(): Int32Value | undefined;
    set luminance(v: Int32Value | undefined);
}
/** Gray Scale Effect. Serialized as `a:grayscl` */
export declare class Grayscale extends OxmlLeafElement {
    static _Q: string;
}
/** Glow Effect. Serialized as `a:glow` */
export declare class Glow extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {
    static _Q: string;
    static _A: string[];
    /** Radius. Serialized as `:rad` */
    get radius(): Int64Value | undefined;
    set radius(v: Int64Value | undefined);
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): RgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): RgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): HslColor | undefined;
    /** System Color. */
    get systemColor(): SystemColor | undefined;
    /** Scheme Color. */
    get schemeColor(): SchemeColor | undefined;
    /** Preset Color. */
    get presetColor(): PresetColor | undefined;
}
/** Fill Overlay Effect. Serialized as `a:fillOverlay` */
export declare class FillOverlay extends OxmlCompositeElement<NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill> {
    static _Q: string;
    static _A: string[];
    /** Blend. Serialized as `:blend` */
    get blend(): BlendModeValues | undefined;
    set blend(v: BlendModeValues | undefined);
    /** Returns NoFill. */
    get noFill(): NoFill | undefined;
    /** Returns SolidFill. */
    get solidFill(): SolidFill | undefined;
    /** Returns GradientFill. */
    get gradientFill(): GradientFill | undefined;
    /** Returns BlipFill. */
    get blipFill(): BlipFill | undefined;
    /** Pattern Fill. */
    get patternFill(): PatternFill | undefined;
    /** Group Fill. */
    get groupFill(): GroupFill | undefined;
}
/** Fill. Serialized as `a:fill` */
export declare class Fill extends OxmlCompositeElement<NoFill | SolidFill | GradientFill | BlipFill | PatternFill | GroupFill> {
    static _Q: string;
    /** Returns NoFill. */
    get noFill(): NoFill | undefined;
    /** Returns SolidFill. */
    get solidFill(): SolidFill | undefined;
    /** Returns GradientFill. */
    get gradientFill(): GradientFill | undefined;
    /** Returns BlipFill. */
    get blipFill(): BlipFill | undefined;
    /** Pattern Fill. */
    get patternFill(): PatternFill | undefined;
    /** Group Fill. */
    get groupFill(): GroupFill | undefined;
}
/** Duotone Effect. Serialized as `a:duotone` */
export declare class Duotone extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {
    static _Q: string;
}
/** Defines the ColorReplacement Class. Serialized as `a:clrRepl` */
export declare class ColorReplacement extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {
    static _Q: string;
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): RgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): RgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): HslColor | undefined;
    /** System Color. */
    get systemColor(): SystemColor | undefined;
    /** Scheme Color. */
    get schemeColor(): SchemeColor | undefined;
    /** Preset Color. */
    get presetColor(): PresetColor | undefined;
}
/** Color Change Effect. Serialized as `a:clrChange` */
export declare class ColorChange extends OxmlCompositeElement<ColorFrom | ColorTo> {
    static _Q: string;
    static _A: string[];
    /** Consider Alpha Values. Serialized as `:useA` */
    get useAlpha(): BooleanValue | undefined;
    set useAlpha(v: BooleanValue | undefined);
    /** Change Color From. */
    get colorFrom(): ColorFrom | undefined;
    /** Change Color To. */
    get colorTo(): ColorTo | undefined;
}
/** Defines the Blur Class. Serialized as `a:blur` */
export declare class Blur extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Radius. Serialized as `:rad` */
    get radius(): Int64Value | undefined;
    set radius(v: Int64Value | undefined);
    /** Grow Bounds. Serialized as `:grow` */
    get grow(): BooleanValue | undefined;
    set grow(v: BooleanValue | undefined);
}
/** Blend Effect. Serialized as `a:blend` */
export declare class Blend extends OxmlCompositeElement<EffectContainer> {
    static _Q: string;
    static _A: string[];
    /** Blend Mode. Serialized as `:blend` */
    get blendMode(): BlendModeValues | undefined;
    set blendMode(v: BlendModeValues | undefined);
    /** Effect to blend. */
    get effectContainer(): EffectContainer | undefined;
}
/** Defines the BiLevel Class. Serialized as `a:biLevel` */
export declare class BiLevel extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Threshold. Serialized as `:thresh` */
    get threshold(): Int32Value | undefined;
    set threshold(v: Int32Value | undefined);
}
/** Alpha Replace Effect. Serialized as `a:alphaRepl` */
export declare class AlphaReplace extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Alpha. Serialized as `:a` */
    get alpha(): Int32Value | undefined;
    set alpha(v: Int32Value | undefined);
}
/** Alpha Inset/Outset Effect. Serialized as `a:alphaOutset` */
export declare class AlphaOutset extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Radius. Serialized as `:rad` */
    get radius(): Int64Value | undefined;
    set radius(v: Int64Value | undefined);
}
/** Defines the AlphaModulationFixed Class. Serialized as `a:alphaModFix` */
export declare class AlphaModulationFixed extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Amount. Serialized as `:amt` */
    get amount(): Int32Value | undefined;
    set amount(v: Int32Value | undefined);
}
/** Alpha Modulate Effect. Serialized as `a:alphaMod` */
export declare class AlphaModulationEffect extends OxmlCompositeElement<EffectContainer> {
    static _Q: string;
    /** Returns EffectContainer. */
    get effectContainer(): EffectContainer | undefined;
}
/** Alpha Inverse Effect. Serialized as `a:alphaInv` */
export declare class AlphaInverse extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {
    static _Q: string;
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): RgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): RgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): HslColor | undefined;
    /** System Color. */
    get systemColor(): SystemColor | undefined;
    /** Scheme Color. */
    get schemeColor(): SchemeColor | undefined;
    /** Preset Color. */
    get presetColor(): PresetColor | undefined;
}
/** Alpha Floor Effect. Serialized as `a:alphaFloor` */
export declare class AlphaFloor extends OxmlLeafElement {
    static _Q: string;
}
/** Alpha Ceiling Effect. Serialized as `a:alphaCeiling` */
export declare class AlphaCeiling extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the AlphaBiLevel Class. Serialized as `a:alphaBiLevel` */
export declare class AlphaBiLevel extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Threshold. Serialized as `:thresh` */
    get threshold(): Int32Value | undefined;
    set threshold(v: Int32Value | undefined);
}
/** Effect. Serialized as `a:effect` */
export declare class Effect extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Reference. Serialized as `:ref` */
    get reference(): StringValue | undefined;
    set reference(v: StringValue | undefined);
}
/** Defines the EffectContainerType Class. */
export declare abstract class EffectContainerType extends OxmlCompositeElement<EffectContainer | Effect | AlphaBiLevel | AlphaCeiling | AlphaFloor | AlphaInverse | AlphaModulationEffect | AlphaModulationFixed | AlphaOutset | AlphaReplace | BiLevel | Blend | Blur | ColorChange | ColorReplacement | Duotone | Fill | FillOverlay | Glow | Grayscale | Hsl | InnerShadow | LuminanceEffect | OuterShadow | PresetShadow | Reflection | RelativeOffset | SoftEdge | TintEffect | TransformEffect> {
    static _A: string[];
    /** Effect Container Type. Serialized as `:type` */
    get type(): EffectContainerValues | undefined;
    set type(v: EffectContainerValues | undefined);
    /** Name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
}
/** Effect Container. Serialized as `a:effectDag` */
export declare class EffectDag extends EffectContainerType {
    static _Q: string;
}
/** Effect Container. Serialized as `a:cont` */
export declare class EffectContainer extends EffectContainerType {
    static _Q: string;
}
/** Group Fill. Serialized as `a:grpFill` */
export declare class GroupFill extends OxmlLeafElement {
    static _Q: string;
}
/** Pattern Fill. Serialized as `a:pattFill` */
export declare class PatternFill extends OxmlCompositeElement<ForegroundColor | BackgroundColor> {
    static _Q: string;
    static _A: string[];
    /** Preset Pattern. Serialized as `:prst` */
    get preset(): PresetPatternValues | undefined;
    set preset(v: PresetPatternValues | undefined);
    /** Foreground color. */
    get foregroundColor(): ForegroundColor | undefined;
    /** Background color. */
    get backgroundColor(): BackgroundColor | undefined;
}
/** Defines the BlipFill Class. Serialized as `a:blipFill` */
export declare class BlipFill extends OxmlCompositeElement<Blip | SourceRectangle | Tile | Stretch> {
    static _Q: string;
    static _A: string[];
    /** DPI Setting. Serialized as `:dpi` */
    get dpi(): UInt32Value | undefined;
    set dpi(v: UInt32Value | undefined);
    /** Rotate With Shape. Serialized as `:rotWithShape` */
    get rotateWithShape(): BooleanValue | undefined;
    set rotateWithShape(v: BooleanValue | undefined);
    /** Returns Blip. */
    get blip(): Blip | undefined;
    /** Source Rectangle. */
    get sourceRectangle(): SourceRectangle | undefined;
}
/** Defines the GradientFill Class. Serialized as `a:gradFill` */
export declare class GradientFill extends OxmlCompositeElement<GradientStopList | LinearGradientFill | PathGradientFill | TileRectangle> {
    static _Q: string;
    static _A: string[];
    /** Tile Flip. Serialized as `:flip` */
    get flip(): TileFlipValues | undefined;
    set flip(v: TileFlipValues | undefined);
    /** Rotate With Shape. Serialized as `:rotWithShape` */
    get rotateWithShape(): BooleanValue | undefined;
    set rotateWithShape(v: BooleanValue | undefined);
    /** Gradient Stop List. */
    get gradientStopList(): GradientStopList | undefined;
}
/** Defines the SolidFill Class. Serialized as `a:solidFill` */
export declare class SolidFill extends OxmlCompositeElement<RgbColorModelPercentage | RgbColorModelHex | HslColor | SystemColor | SchemeColor | PresetColor> {
    static _Q: string;
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): RgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): RgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): HslColor | undefined;
    /** System Color. */
    get systemColor(): SystemColor | undefined;
    /** Scheme Color. */
    get schemeColor(): SchemeColor | undefined;
    /** Preset Color. */
    get presetColor(): PresetColor | undefined;
}
/** Defines the NoFill Class. Serialized as `a:noFill` */
export declare class NoFill extends OxmlLeafElement {
    static _Q: string;
}
/** Stretch. Serialized as `a:stretch` */
export declare class Stretch extends OxmlCompositeElement<FillRectangle> {
    static _Q: string;
    /** Fill Rectangle. */
    get fillRectangle(): FillRectangle | undefined;
}
/** Tile. Serialized as `a:tile` */
export declare class Tile extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Horizontal Offset. Serialized as `:tx` */
    get horizontalOffset(): Int64Value | undefined;
    set horizontalOffset(v: Int64Value | undefined);
    /** Vertical Offset. Serialized as `:ty` */
    get verticalOffset(): Int64Value | undefined;
    set verticalOffset(v: Int64Value | undefined);
    /** Horizontal Ratio. Serialized as `:sx` */
    get horizontalRatio(): Int32Value | undefined;
    set horizontalRatio(v: Int32Value | undefined);
    /** Vertical Ratio. Serialized as `:sy` */
    get verticalRatio(): Int32Value | undefined;
    set verticalRatio(v: Int32Value | undefined);
    /** Tile Flipping. Serialized as `:flip` */
    get flip(): TileFlipValues | undefined;
    set flip(v: TileFlipValues | undefined);
    /** Alignment. Serialized as `:algn` */
    get alignment(): RectangleAlignmentValues | undefined;
    set alignment(v: RectangleAlignmentValues | undefined);
}
/** Path Gradient. Serialized as `a:path` */
export declare class PathGradientFill extends OxmlCompositeElement<FillToRectangle> {
    static _Q: string;
    static _A: string[];
    /** Gradient Fill Path. Serialized as `:path` */
    get path(): PathShadeValues | undefined;
    set path(v: PathShadeValues | undefined);
    /** Fill To Rectangle. */
    get fillToRectangle(): FillToRectangle | undefined;
}
/** Linear Gradient Fill. Serialized as `a:lin` */
export declare class LinearGradientFill extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Angle. Serialized as `:ang` */
    get angle(): Int32Value | undefined;
    set angle(v: Int32Value | undefined);
    /** Scaled. Serialized as `:scaled` */
    get scaled(): BooleanValue | undefined;
    set scaled(v: BooleanValue | undefined);
}
/** No text in 3D scene. Serialized as `a:flatTx` */
export declare class FlatText extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Z Coordinate. Serialized as `:z` */
    get z(): Int64Value | undefined;
    set z(v: Int64Value | undefined);
}
/** Apply 3D shape properties. Serialized as `a:sp3d` */
export declare class Shape3DType extends OxmlCompositeElement<BevelTop | BevelBottom | ExtrusionColor | ContourColor | ExtensionList> {
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
    get bevelTop(): BevelTop | undefined;
    /** Bottom Bevel. */
    get bevelBottom(): BevelBottom | undefined;
    /** Extrusion Color. */
    get extrusionColor(): ExtrusionColor | undefined;
    /** Contour Color. */
    get contourColor(): ContourColor | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Preset Color. Serialized as `a:prstClr` */
export declare class PresetColor extends OxmlCompositeElement<Tint | Shade | Complement | Inverse | Gray | Alpha | AlphaOffset | AlphaModulation | Hue | HueOffset | HueModulation | Saturation | SaturationOffset | SaturationModulation | Luminance | LuminanceOffset | LuminanceModulation | Red | RedOffset | RedModulation | Green | GreenOffset | GreenModulation | Blue | BlueOffset | BlueModulation | Gamma | InverseGamma> {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): PresetColorValues | undefined;
    set val(v: PresetColorValues | undefined);
}
/** Scheme Color. Serialized as `a:schemeClr` */
export declare class SchemeColor extends OxmlCompositeElement<Tint | Shade | Complement | Inverse | Gray | Alpha | AlphaOffset | AlphaModulation | Hue | HueOffset | HueModulation | Saturation | SaturationOffset | SaturationModulation | Luminance | LuminanceOffset | LuminanceModulation | Red | RedOffset | RedModulation | Green | GreenOffset | GreenModulation | Blue | BlueOffset | BlueModulation | Gamma | InverseGamma> {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): SchemeColorValues | undefined;
    set val(v: SchemeColorValues | undefined);
}
/** System Color. Serialized as `a:sysClr` */
export declare class SystemColor extends OxmlCompositeElement<Tint | Shade | Complement | Inverse | Gray | Alpha | AlphaOffset | AlphaModulation | Hue | HueOffset | HueModulation | Saturation | SaturationOffset | SaturationModulation | Luminance | LuminanceOffset | LuminanceModulation | Red | RedOffset | RedModulation | Green | GreenOffset | GreenModulation | Blue | BlueOffset | BlueModulation | Gamma | InverseGamma> {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): SystemColorValues | undefined;
    set val(v: SystemColorValues | undefined);
    /** Last Color. Serialized as `:lastClr` */
    get lastColor(): HexBinaryValue | undefined;
    set lastColor(v: HexBinaryValue | undefined);
}
/** Hue, Saturation, Luminance Color Model. Serialized as `a:hslClr` */
export declare class HslColor extends OxmlCompositeElement<Tint | Shade | Complement | Inverse | Gray | Alpha | AlphaOffset | AlphaModulation | Hue | HueOffset | HueModulation | Saturation | SaturationOffset | SaturationModulation | Luminance | LuminanceOffset | LuminanceModulation | Red | RedOffset | RedModulation | Green | GreenOffset | GreenModulation | Blue | BlueOffset | BlueModulation | Gamma | InverseGamma> {
    static _Q: string;
    static _A: string[];
    /** Hue. Serialized as `:hue` */
    get hueValue(): Int32Value | undefined;
    set hueValue(v: Int32Value | undefined);
    /** Saturation. Serialized as `:sat` */
    get satValue(): Int32Value | undefined;
    set satValue(v: Int32Value | undefined);
    /** Luminance. Serialized as `:lum` */
    get lumValue(): Int32Value | undefined;
    set lumValue(v: Int32Value | undefined);
}
/** RGB Color Model - Hex Variant. Serialized as `a:srgbClr` */
export declare class RgbColorModelHex extends OxmlCompositeElement<Tint | Shade | Complement | Inverse | Gray | Alpha | AlphaOffset | AlphaModulation | Hue | HueOffset | HueModulation | Saturation | SaturationOffset | SaturationModulation | Luminance | LuminanceOffset | LuminanceModulation | Red | RedOffset | RedModulation | Green | GreenOffset | GreenModulation | Blue | BlueOffset | BlueModulation | Gamma | InverseGamma> {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): HexBinaryValue | undefined;
    set val(v: HexBinaryValue | undefined);
    /** legacySpreadsheetColorIndex. Serialized as `a14:legacySpreadsheetColorIndex` */
    get legacySpreadsheetColorIndex(): Int32Value | undefined;
    set legacySpreadsheetColorIndex(v: Int32Value | undefined);
}
/** RGB Color Model - Percentage Variant. Serialized as `a:scrgbClr` */
export declare class RgbColorModelPercentage extends OxmlCompositeElement<Tint | Shade | Complement | Inverse | Gray | Alpha | AlphaOffset | AlphaModulation | Hue | HueOffset | HueModulation | Saturation | SaturationOffset | SaturationModulation | Luminance | LuminanceOffset | LuminanceModulation | Red | RedOffset | RedModulation | Green | GreenOffset | GreenModulation | Blue | BlueOffset | BlueModulation | Gamma | InverseGamma> {
    static _Q: string;
    static _A: string[];
    /** Red. Serialized as `:r` */
    get redPortion(): Int32Value | undefined;
    set redPortion(v: Int32Value | undefined);
    /** Green. Serialized as `:g` */
    get greenPortion(): Int32Value | undefined;
    set greenPortion(v: Int32Value | undefined);
    /** Blue. Serialized as `:b` */
    get bluePortion(): Int32Value | undefined;
    set bluePortion(v: Int32Value | undefined);
}
/** Extension. Serialized as `a:ext` */
export declare class Extension extends OxmlCompositeElement {
    static _Q: string;
    static _A: string[];
    /** URI. Serialized as `:uri` */
    get uri(): StringValue | undefined;
    set uri(v: StringValue | undefined);
}
/** Inverse Gamma. Serialized as `a:invGamma` */
export declare class InverseGamma extends OxmlLeafElement {
    static _Q: string;
}
/** Gamma. Serialized as `a:gamma` */
export declare class Gamma extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the PercentageType Class. */
export declare abstract class PercentageType extends OxmlLeafElement {
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Blue Modification. Serialized as `a:blueMod` */
export declare class BlueModulation extends PercentageType {
    static _Q: string;
}
/** Blue Offset. Serialized as `a:blueOff` */
export declare class BlueOffset extends PercentageType {
    static _Q: string;
}
/** Blue. Serialized as `a:blue` */
export declare class Blue extends PercentageType {
    static _Q: string;
}
/** Green Modification. Serialized as `a:greenMod` */
export declare class GreenModulation extends PercentageType {
    static _Q: string;
}
/** Green Offset. Serialized as `a:greenOff` */
export declare class GreenOffset extends PercentageType {
    static _Q: string;
}
/** Green. Serialized as `a:green` */
export declare class Green extends PercentageType {
    static _Q: string;
}
/** Red Modulation. Serialized as `a:redMod` */
export declare class RedModulation extends PercentageType {
    static _Q: string;
}
/** Red Offset. Serialized as `a:redOff` */
export declare class RedOffset extends PercentageType {
    static _Q: string;
}
/** Red. Serialized as `a:red` */
export declare class Red extends PercentageType {
    static _Q: string;
}
/** Luminance Modulation. Serialized as `a:lumMod` */
export declare class LuminanceModulation extends PercentageType {
    static _Q: string;
}
/** Luminance Offset. Serialized as `a:lumOff` */
export declare class LuminanceOffset extends PercentageType {
    static _Q: string;
}
/** Luminance. Serialized as `a:lum` */
export declare class Luminance extends PercentageType {
    static _Q: string;
}
/** Saturation Modulation. Serialized as `a:satMod` */
export declare class SaturationModulation extends PercentageType {
    static _Q: string;
}
/** Saturation Offset. Serialized as `a:satOff` */
export declare class SaturationOffset extends PercentageType {
    static _Q: string;
}
/** Saturation. Serialized as `a:sat` */
export declare class Saturation extends PercentageType {
    static _Q: string;
}
/** Hue Offset. Serialized as `a:hueOff` */
export declare class HueOffset extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Hue. Serialized as `a:hue` */
export declare class Hue extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Defines the PositivePercentageType Class. */
export declare abstract class PositivePercentageType extends OxmlLeafElement {
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Hue Modulate. Serialized as `a:hueMod` */
export declare class HueModulation extends PositivePercentageType {
    static _Q: string;
}
/** Alpha Modulation. Serialized as `a:alphaMod` */
export declare class AlphaModulation extends PositivePercentageType {
    static _Q: string;
}
/** Alpha Offset. Serialized as `a:alphaOff` */
export declare class AlphaOffset extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Gray. Serialized as `a:gray` */
export declare class Gray extends OxmlLeafElement {
    static _Q: string;
}
/** Inverse. Serialized as `a:inv` */
export declare class Inverse extends OxmlLeafElement {
    static _Q: string;
}
/** Complement. Serialized as `a:comp` */
export declare class Complement extends OxmlLeafElement {
    static _Q: string;
}
/** Defines the PositiveFixedPercentageType Class. */
export declare abstract class PositiveFixedPercentageType extends OxmlLeafElement {
    static _A: string[];
    /** Value. Serialized as `:val` */
    get val(): Int32Value | undefined;
    set val(v: Int32Value | undefined);
}
/** Alpha. Serialized as `a:alpha` */
export declare class Alpha extends PositiveFixedPercentageType {
    static _Q: string;
}
/** Shade. Serialized as `a:shade` */
export declare class Shade extends PositiveFixedPercentageType {
    static _Q: string;
}
/** Tint. Serialized as `a:tint` */
export declare class Tint extends PositiveFixedPercentageType {
    static _Q: string;
}
/** QuickTime from File. Serialized as `a:quickTimeFile` */
export declare class QuickTimeFromFile extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Linked Relationship ID. Serialized as `r:link` */
    get link(): StringValue | undefined;
    set link(v: StringValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Video from File. Serialized as `a:videoFile` */
export declare class VideoFromFile extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Linked Relationship ID. Serialized as `r:link` */
    get link(): StringValue | undefined;
    set link(v: StringValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Audio from File. Serialized as `a:audioFile` */
export declare class AudioFromFile extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Linked Relationship ID. Serialized as `r:link` */
    get link(): StringValue | undefined;
    set link(v: StringValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
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
/** Sound to play.. Serialized as `a:snd` */
export declare class HyperlinkSound extends EmbeddedWavAudioFileType {
    static _Q: string;
}
/** Audio from WAV File. Serialized as `a:wavAudioFile` */
export declare class WaveAudioFile extends EmbeddedWavAudioFileType {
    static _Q: string;
}
/** Audio from CD. Serialized as `a:audioCd` */
export declare class AudioFromCD extends OxmlCompositeElement<StartTime | EndTime | ExtensionList> {
    static _Q: string;
    /** Audio Start Time. */
    get startTime(): StartTime | undefined;
    /** Audio End Time. */
    get endTime(): EndTime | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
export declare function initDrawingNamespace(): {
    prefix: string;
    xmlns: string;
};
