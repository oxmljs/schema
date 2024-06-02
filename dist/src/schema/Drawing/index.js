import { OxmlCompositeElement } from "../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../framework/OxmlLeafElement";
import { OxmlPartRootElement } from "../../framework/OxmlPartRootElement";
import { OxmlLeafTextElement } from "../../framework/OxmlLeafTextElement";
import { OxmlAttr } from "../../framework/OxmlAttr";
import { OxmlType } from "../../framework/OxmlType";
import { ImageProperties as A14ImageProperties } from "../Office2010/Drawing";
import { UseLocalDpi as A14UseLocalDpi } from "../Office2010/Drawing";
import { WebVideoProperty as Wp15WebVideoProperty } from "../Office2013/Word/Drawing";
import { SVGBlip as AsvgSVGBlip } from "../Office2019/Drawing/SVG";
import { PictureAttributionSourceURL as A1611PictureAttributionSourceURL } from "../Office2019/Drawing/a1611";
import { OEmbed as WoeOEmbed } from "../Office/Word/Y2020/OEmbed";
import { OEmbedShared as AoeOEmbedShared } from "../Office/Drawing/Y2021/OEmbed";
import { CameraTool as A14CameraTool } from "../Office2010/Drawing";
import { SignatureLine as A15SignatureLine } from "../Office2013/Drawing";
import { ObjectProperties as A15ObjectProperties } from "../Office2013/Drawing";
import { LiveFeedProperties as AlfLiveFeedProperties } from "../Office2021/Drawing/Livefeed";
import { ImageFormula as AifImageFormula } from "../Office/Drawing/Y2022/ImageFormula";
import { CompatExtension as A14CompatExtension } from "../Office2010/Drawing";
import { BackgroundProperties as A15BackgroundProperties } from "../Office2013/Drawing";
import { CreationId as A16CreationId } from "../Office2016/Drawing";
import { PredecessorDrawingElementReference as A16PredecessorDrawingElementReference } from "../Office2016/Drawing";
import { Decorative as AdecDecorative } from "../Office2019/Drawing/adec";
import { ClassificationOutcome as AclshClassificationOutcome } from "../Office2021/Drawing/DocumentClassification";
import { ScriptLink as AslScriptLink } from "../Office/Drawing/Y2021/ScriptLink";
import { LineSketchStyleProperties as AskLineSketchStyleProperties } from "../Office2021/Drawing/SketchyShapes";
import { HyperlinkColor as AhypHyperlinkColor } from "../Office2019/Drawing/HyperLinkColor";
import { NonVisualDrawingProperties as Dgm14NonVisualDrawingProperties } from "../Office2010/Drawing/Diagram";
import { DataModelExtensionBlock as DspDataModelExtensionBlock } from "../Office/Drawing";
import { RecolorImages as Dgm14RecolorImages } from "../Office2010/Drawing/Diagram";
import { ThemeFamily as Thm15ThemeFamily } from "../Office2013/Theme";
import { NonVisualGroupProperties as A15NonVisualGroupProperties } from "../Office2013/Drawing";
import { GvmlContentPart as A14GvmlContentPart } from "../Office2010/Drawing";
import { IsCanvas as A14IsCanvas } from "../Office2010/Drawing";
import { HiddenFillProperties as A14HiddenFillProperties } from "../Office2010/Drawing";
import { HiddenLineProperties as A14HiddenLineProperties } from "../Office2010/Drawing";
import { HiddenEffectsProperties as A14HiddenEffectsProperties } from "../Office2010/Drawing";
import { HiddenScene3D as A14HiddenScene3D } from "../Office2010/Drawing";
import { HiddenShape3D as A14HiddenShape3D } from "../Office2010/Drawing";
import { ShadowObscured as A14ShadowObscured } from "../Office2010/Drawing";
import { TextMath as A14TextMath } from "../Office2010/Drawing";
import { ConnectableReferences as A16ConnectableReferences } from "../Office2016/Drawing";
import { RowIdIdentifier as A16RowIdIdentifier } from "../Office2016/Drawing";
import { ColIdIdentifier as A16ColIdIdentifier } from "../Office2016/Drawing";
import { Drawing as DspDrawing } from "../Office/Drawing";
import { ColorsDefinition as DgmColorsDefinition } from "../Drawing/Diagrams";
import { ColorsDefinitionHeader as DgmColorsDefinitionHeader } from "../Drawing/Diagrams";
import { ColorsDefinitionHeaderList as DgmColorsDefinitionHeaderList } from "../Drawing/Diagrams";
import { DataModelRoot as DgmDataModelRoot } from "../Drawing/Diagrams";
import { LayoutDefinition as DgmLayoutDefinition } from "../Drawing/Diagrams";
import { LayoutDefinitionHeader as DgmLayoutDefinitionHeader } from "../Drawing/Diagrams";
import { LayoutDefinitionHeaderList as DgmLayoutDefinitionHeaderList } from "../Drawing/Diagrams";
import { RelationshipIds as DgmRelationshipIds } from "../Drawing/Diagrams";
import { StyleDefinition as DgmStyleDefinition } from "../Drawing/Diagrams";
import { StyleDefinitionHeader as DgmStyleDefinitionHeader } from "../Drawing/Diagrams";
import { StyleDefinitionHeaderList as DgmStyleDefinitionHeaderList } from "../Drawing/Diagrams";
import { ShapeProperties as Dgm1612ShapeProperties } from "../Office2019/Drawing/Diagram12";
import { TextListStyleType as Dgm1612TextListStyleType } from "../Office2019/Drawing/Diagram12";
import { NumberDiagramInfoList as Dgm1611NumberDiagramInfoList } from "../Office2019/Drawing/Diagram11";
import { ChartSpace as CChartSpace } from "../Drawing/Charts";
import { UserShapes as CUserShapes } from "../Drawing/Charts";
import { ChartReference as CChartReference } from "../Drawing/Charts";
import { DataDisplayOptions16 as C16r3DataDisplayOptions16 } from "../Office2019/Drawing/Chart";
import { PivotSource as C15PivotSource } from "../Office2013/Drawing/Chart";
import { NumberingFormat as C15NumberingFormat } from "../Office2013/Drawing/Chart";
import { ShapeProperties as C15ShapeProperties } from "../Office2013/Drawing/Chart";
import { Layout as C15Layout } from "../Office2013/Drawing/Chart";
import { FullReference as C15FullReference } from "../Office2013/Drawing/Chart";
import { LevelReference as C15LevelReference } from "../Office2013/Drawing/Chart";
import { FormulaReference as C15FormulaReference } from "../Office2013/Drawing/Chart";
import { FilteredSeriesTitle as C15FilteredSeriesTitle } from "../Office2013/Drawing/Chart";
import { FilteredCategoryTitle as C15FilteredCategoryTitle } from "../Office2013/Drawing/Chart";
import { FilteredAreaSeries as C15FilteredAreaSeries } from "../Office2013/Drawing/Chart";
import { FilteredBarSeries as C15FilteredBarSeries } from "../Office2013/Drawing/Chart";
import { FilteredBubbleSeries as C15FilteredBubbleSeries } from "../Office2013/Drawing/Chart";
import { FilteredLineSeriesExtension as C15FilteredLineSeriesExtension } from "../Office2013/Drawing/Chart";
import { FilteredPieSeries as C15FilteredPieSeries } from "../Office2013/Drawing/Chart";
import { FilteredRadarSeries as C15FilteredRadarSeries } from "../Office2013/Drawing/Chart";
import { FilteredScatterSeries as C15FilteredScatterSeries } from "../Office2013/Drawing/Chart";
import { FilteredSurfaceSeries as C15FilteredSurfaceSeries } from "../Office2013/Drawing/Chart";
import { DataLabelsRange as C15DataLabelsRange } from "../Office2013/Drawing/Chart";
import { CategoryFilterExceptions as C15CategoryFilterExceptions } from "../Office2013/Drawing/Chart";
import { DataLabelFieldTable as C15DataLabelFieldTable } from "../Office2013/Drawing/Chart";
import { ExceptionForSave as C15ExceptionForSave } from "../Office2013/Drawing/Chart";
import { ShowDataLabelsRange as C15ShowDataLabelsRange } from "../Office2013/Drawing/Chart";
import { ChartText as C15ChartText } from "../Office2013/Drawing/Chart";
import { ShowLeaderLines as C15ShowLeaderLines } from "../Office2013/Drawing/Chart";
import { LeaderLines as C15LeaderLines } from "../Office2013/Drawing/Chart";
import { AutoGeneneratedCategories as C15AutoGeneneratedCategories } from "../Office2013/Drawing/Chart";
import { PivotOptions as C14PivotOptions } from "../Office2010/Drawing/Charts";
import { SketchOptions as C14SketchOptions } from "../Office2010/Drawing/Charts";
import { InvertSolidFillFormat as C14InvertSolidFillFormat } from "../Office2010/Drawing/Charts";
import { Style as C14Style } from "../Office2010/Drawing/Charts";
import { ContentPart as Cdr14ContentPart } from "../Office2010/Drawing/ChartDrawing";
import { LegacyDrawing as CompLegacyDrawing } from "../Drawing/LegacyCompatibility";
import { LockedCanvas as LcLockedCanvas } from "../Drawing/LockedCanvas";
import { Inline as WpInline } from "../Drawing/Wordprocessing";
import { Anchor as WpAnchor } from "../Drawing/Wordprocessing";
import { PercentagePositionHeightOffset as Wp14PercentagePositionHeightOffset } from "../Office2010/Word/Drawing";
import { PercentagePositionVerticalOffset as Wp14PercentagePositionVerticalOffset } from "../Office2010/Word/Drawing";
import { RelativeWidth as Wp14RelativeWidth } from "../Office2010/Word/Drawing";
import { RelativeHeight as Wp14RelativeHeight } from "../Office2010/Word/Drawing";
import { Picture as PicPicture } from "../Drawing/Pictures";
import { ShapeStyle as Pic14ShapeStyle } from "../Office2010/Drawing/Pictures";
import { OfficeArtExtensionList as Pic14OfficeArtExtensionList } from "../Office2010/Drawing/Pictures";
import { WorksheetDrawing as XdrWorksheetDrawing } from "../Drawing/Spreadsheet";
import { ContentPart as XdrContentPart } from "../Drawing/Spreadsheet";
import { ContentPart as Xdr14ContentPart } from "../Office2010/Excel/Drawing";
import { CommentAuthorMonikerList as PcCommentAuthorMonikerList } from "../Office2016/Presentation/Command";
import { CommentMonikerList as PcCommentMonikerList } from "../Office2016/Presentation/Command";
import { StringTagMonikerList as PcStringTagMonikerList } from "../Office2016/Presentation/Command";
import { CustomShowMonikerList as PcCustomShowMonikerList } from "../Office2016/Presentation/Command";
import { DocumentMonikerList as PcDocumentMonikerList } from "../Office2016/Presentation/Command";
import { SectionMonikerList as PcSectionMonikerList } from "../Office2016/Presentation/Command";
import { SlideBaseMonikerList as PcSlideBaseMonikerList } from "../Office2016/Presentation/Command";
import { SlideLayoutMonikerList as PcSlideLayoutMonikerList } from "../Office2016/Presentation/Command";
import { MainMasterMonikerList as PcMainMasterMonikerList } from "../Office2016/Presentation/Command";
import { SlideMonikerList as PcSlideMonikerList } from "../Office2016/Presentation/Command";
import { SlidePosMonikerList as PcSlidePosMonikerList } from "../Office2016/Presentation/Command";
import { NotesMonikerList as PcNotesMonikerList } from "../Office2016/Presentation/Command";
import { NotesTextMonikerList as PcNotesTextMonikerList } from "../Office2016/Presentation/Command";
import { NotesMasterMonikerList as PcNotesMasterMonikerList } from "../Office2016/Presentation/Command";
import { HandoutMonikerList as PcHandoutMonikerList } from "../Office2016/Presentation/Command";
import { AnimEffectMkLstAnimationEffectMonikerList as PcAnimEffectMkLstAnimationEffectMonikerList } from "../Office2016/Presentation/Command";
import { AnimEffectParentMkLstAnimationEffectMonikerList as PcAnimEffectParentMkLstAnimationEffectMonikerList } from "../Office2016/Presentation/Command";
import { OsfTaskPaneAppMonikerList as PcOsfTaskPaneAppMonikerList } from "../Office2016/Presentation/Command";
import { SummaryZoomMonikerList as PcSummaryZoomMonikerList } from "../Office2016/Presentation/Command";
import { SectionLinkObjMonikerList as PcSectionLinkObjMonikerList } from "../Office2016/Presentation/Command";
import { DesignerTagMonikerList as PcDesignerTagMonikerList } from "../Office2016/Presentation/Command";
import { CustomXmlPartMonikerList as PcCustomXmlPartMonikerList } from "../Office2016/Presentation/Command";
import { CommentAuthorList as PCommentAuthorList } from "../Presentation";
import { CommentList as PCommentList } from "../Presentation";
import { OleObject as POleObject } from "../Presentation";
import { Presentation as PPresentation } from "../Presentation";
import { PresentationProperties as PPresentationProperties } from "../Presentation";
import { Slide as PSlide } from "../Presentation";
import { SlideLayout as PSlideLayout } from "../Presentation";
import { SlideMaster as PSlideMaster } from "../Presentation";
import { HandoutMaster as PHandoutMaster } from "../Presentation";
import { NotesMaster as PNotesMaster } from "../Presentation";
import { NotesSlide as PNotesSlide } from "../Presentation";
import { SlideSyncProperties as PSlideSyncProperties } from "../Presentation";
import { TagList as PTagList } from "../Presentation";
import { ViewProperties as PViewProperties } from "../Presentation";
import { ContentPart as PContentPart } from "../Presentation";
import { AuthorList as P188AuthorList } from "../Office2021/PowerPoint/Comment";
import { CommentList as P188CommentList } from "../Office2021/PowerPoint/Comment";
import { CommentRelationship as P188CommentRelationship } from "../Office2021/PowerPoint/Comment";
import { TaskHistoryDetails as P1912TaskHistoryDetails } from "../Office2021/PowerPoint/Tasks";
import { TextBodyPackage as OacTextBodyPackage } from "../Office2016/Drawing/Command";
import { GroupCommand as OacGroupCommand } from "../Office2016/Drawing/Command";
import { ImgDataImgData as OacImgDataImgData } from "../Office2016/Drawing/Command";
import { OrigImgDataImgData as OacOrigImgDataImgData } from "../Office2016/Drawing/Command";
import { ImgLink as OacImgLink } from "../Office2016/Drawing/Command";
import { DrawingMonikerList as OacDrawingMonikerList } from "../Office2016/Drawing/Command";
import { DocumentContextMonikerList as OacDocumentContextMonikerList } from "../Office2016/Drawing/Command";
import { GraphicParentMonikerList as OacGraphicParentMonikerList } from "../Office2016/Drawing/Command";
import { DeMkLstDrawingElementMonikerList as OacDeMkLstDrawingElementMonikerList } from "../Office2016/Drawing/Command";
import { DeMasterMkLstDrawingElementMonikerList as OacDeMasterMkLstDrawingElementMonikerList } from "../Office2016/Drawing/Command";
import { ShapeMonikerList as OacShapeMonikerList } from "../Office2016/Drawing/Command";
import { GroupShapeMonikerList as OacGroupShapeMonikerList } from "../Office2016/Drawing/Command";
import { GraphicFrameMonikerList as OacGraphicFrameMonikerList } from "../Office2016/Drawing/Command";
import { ConnectorMonikerList as OacConnectorMonikerList } from "../Office2016/Drawing/Command";
import { PictureMonikerList as OacPictureMonikerList } from "../Office2016/Drawing/Command";
import { InkMonikerList as OacInkMonikerList } from "../Office2016/Drawing/Command";
import { TextBodyMonikerList as OacTextBodyMonikerList } from "../Office2016/Drawing/Command";
import { TextCharRangeMonikerList as OacTextCharRangeMonikerList } from "../Office2016/Drawing/Command";
import { HyperlinkMonikerList as OacHyperlinkMonikerList } from "../Office2016/Drawing/Command";
import { Model3DMonikerList as OacModel3DMonikerList } from "../Office2016/Drawing/Command";
import { ViewSelectionStgList as OacViewSelectionStgList } from "../Office2016/Drawing/Command";
import { EditorSelectionStgList as OacEditorSelectionStgList } from "../Office2016/Drawing/Command";
import { DrawingSelectionStgList as OacDrawingSelectionStgList } from "../Office2016/Drawing/Command";
import { TableMonikerList as OacTableMonikerList } from "../Office2016/Drawing/Command";
import { TableCellMonikerList as OacTableCellMonikerList } from "../Office2016/Drawing/Command";
import { TableRowMonikerList as OacTableRowMonikerList } from "../Office2016/Drawing/Command";
import { TableColumnMonikerList as OacTableColumnMonikerList } from "../Office2016/Drawing/Command";
import { Ink as InkmlInk } from "../InkML";
import { OneOf as EmmaOneOf } from "../EMMA";
import { Group as EmmaGroup } from "../EMMA";
import { Sequence as EmmaSequence } from "../EMMA";
import { EndPoint as EmmaEndPoint } from "../EMMA";
import { EndPointInfo as EmmaEndPointInfo } from "../EMMA";
import { Info as EmmaInfo } from "../EMMA";
import { Grammar as EmmaGrammar } from "../EMMA";
import { DerivedFrom as EmmaDerivedFrom } from "../EMMA";
import { Node as EmmaNode } from "../EMMA";
import { Arc as EmmaArc } from "../EMMA";
import { Lattice as EmmaLattice } from "../EMMA";
import { Literal as EmmaLiteral } from "../EMMA";
import { Interpretation as EmmaInterpretation } from "../EMMA";
import { GroupInfo as EmmaGroupInfo } from "../EMMA";
import { Derivation as EmmaDerivation } from "../EMMA";
import { Model as EmmaModel } from "../EMMA";
import { Emma as EmmaEmma } from "../EMMA";
import { ContextNode as MsinkContextNode } from "../Office2010/Ink";
import { PresetTransition as P15PresetTransition } from "../Office2013/PowerPoint";
import { PresenceInfo as P15PresenceInfo } from "../Office2013/PowerPoint";
import { ThreadingInfo as P15ThreadingInfo } from "../Office2013/PowerPoint";
import { SlideGuideList as P15SlideGuideList } from "../Office2013/PowerPoint";
import { NotesGuideList as P15NotesGuideList } from "../Office2013/PowerPoint";
import { ChartTrackingReferenceBased as P15ChartTrackingReferenceBased } from "../Office2013/PowerPoint";
import { NonVisualContentPartProperties as P14NonVisualContentPartProperties } from "../Office2010/PowerPoint";
import { Transform2D as P14Transform2D } from "../Office2010/PowerPoint";
import { ExtensionListModify as P14ExtensionListModify } from "../Office2010/PowerPoint";
import { Media as P14Media } from "../Office2010/PowerPoint";
import { VortexTransition as P14VortexTransition } from "../Office2010/PowerPoint";
import { SwitchTransition as P14SwitchTransition } from "../Office2010/PowerPoint";
import { FlipTransition as P14FlipTransition } from "../Office2010/PowerPoint";
import { RippleTransition as P14RippleTransition } from "../Office2010/PowerPoint";
import { HoneycombTransition as P14HoneycombTransition } from "../Office2010/PowerPoint";
import { PrismTransition as P14PrismTransition } from "../Office2010/PowerPoint";
import { DoorsTransition as P14DoorsTransition } from "../Office2010/PowerPoint";
import { WindowTransition as P14WindowTransition } from "../Office2010/PowerPoint";
import { FerrisTransition as P14FerrisTransition } from "../Office2010/PowerPoint";
import { GalleryTransition as P14GalleryTransition } from "../Office2010/PowerPoint";
import { ConveyorTransition as P14ConveyorTransition } from "../Office2010/PowerPoint";
import { PanTransition as P14PanTransition } from "../Office2010/PowerPoint";
import { GlitterTransition as P14GlitterTransition } from "../Office2010/PowerPoint";
import { WarpTransition as P14WarpTransition } from "../Office2010/PowerPoint";
import { FlythroughTransition as P14FlythroughTransition } from "../Office2010/PowerPoint";
import { FlashTransition as P14FlashTransition } from "../Office2010/PowerPoint";
import { ShredTransition as P14ShredTransition } from "../Office2010/PowerPoint";
import { RevealTransition as P14RevealTransition } from "../Office2010/PowerPoint";
import { WheelReverseTransition as P14WheelReverseTransition } from "../Office2010/PowerPoint";
import { BookmarkTarget as P14BookmarkTarget } from "../Office2010/PowerPoint";
import { SectionProperties as P14SectionProperties } from "../Office2010/PowerPoint";
import { SectionList as P14SectionList } from "../Office2010/PowerPoint";
import { BrowseMode as P14BrowseMode } from "../Office2010/PowerPoint";
import { LaserColor as P14LaserColor } from "../Office2010/PowerPoint";
import { DefaultImageDpi as P14DefaultImageDpi } from "../Office2010/PowerPoint";
import { DiscardImageEditData as P14DiscardImageEditData } from "../Office2010/PowerPoint";
import { ShowMediaControls as P14ShowMediaControls } from "../Office2010/PowerPoint";
import { LaserTraceList as P14LaserTraceList } from "../Office2010/PowerPoint";
import { CreationId as P14CreationId } from "../Office2010/PowerPoint";
import { ModificationId as P14ModificationId } from "../Office2010/PowerPoint";
import { ShowEventRecordList as P14ShowEventRecordList } from "../Office2010/PowerPoint";
import { SchemaLibrary as SlSchemaLibrary } from "../CustomXmlSchemaReferences";
import { MathProperties as MMathProperties } from "../Math";
import { Paragraph as MParagraph } from "../Math";
import { OfficeMath as MOfficeMath } from "../Math";
import { Recipients as WRecipients } from "../Wordprocessing";
import { TextBoxContent as WTextBoxContent } from "../Wordprocessing";
import { Comments as WComments } from "../Wordprocessing";
import { Footnotes as WFootnotes } from "../Wordprocessing";
import { Endnotes as WEndnotes } from "../Wordprocessing";
import { Header as WHeader } from "../Wordprocessing";
import { Footer as WFooter } from "../Wordprocessing";
import { Settings as WSettings } from "../Wordprocessing";
import { WebSettings as WWebSettings } from "../Wordprocessing";
import { Fonts as WFonts } from "../Wordprocessing";
import { Numbering as WNumbering } from "../Wordprocessing";
import { Styles as WStyles } from "../Wordprocessing";
import { Document as WDocument } from "../Wordprocessing";
import { GlossaryDocument as WGlossaryDocument } from "../Wordprocessing";
import { Color as W15Color } from "../Office2013/Word";
import { DataBinding as W15DataBinding } from "../Office2013/Word";
import { Appearance as W15Appearance } from "../Office2013/Word";
import { CommentsEx as W15CommentsEx } from "../Office2013/Word";
import { People as W15People } from "../Office2013/Word";
import { SdtRepeatedSection as W15SdtRepeatedSection } from "../Office2013/Word";
import { SdtRepeatedSectionItem as W15SdtRepeatedSectionItem } from "../Office2013/Word";
import { ChartTrackingRefBased as W15ChartTrackingRefBased } from "../Office2013/Word";
import { DefaultCollapsed as W15DefaultCollapsed } from "../Office2013/Word";
import { PersistentDocumentId as W15PersistentDocumentId } from "../Office2013/Word";
import { FootnoteColumns as W15FootnoteColumns } from "../Office2013/Word";
import { WebExtensionLinked as W15WebExtensionLinked } from "../Office2013/Word";
import { WebExtensionCreated as W15WebExtensionCreated } from "../Office2013/Word";
import { ContentPart as W14ContentPart } from "../Office2010/Word";
import { DocumentId as W14DocumentId } from "../Office2010/Word";
import { ConflictMode as W14ConflictMode } from "../Office2010/Word";
import { CustomXmlConflictInsertionRangeStart as W14CustomXmlConflictInsertionRangeStart } from "../Office2010/Word";
import { CustomXmlConflictInsertionRangeEnd as W14CustomXmlConflictInsertionRangeEnd } from "../Office2010/Word";
import { CustomXmlConflictDeletionRangeStart as W14CustomXmlConflictDeletionRangeStart } from "../Office2010/Word";
import { CustomXmlConflictDeletionRangeEnd as W14CustomXmlConflictDeletionRangeEnd } from "../Office2010/Word";
import { DiscardImageEditingData as W14DiscardImageEditingData } from "../Office2010/Word";
import { DefaultImageDpi as W14DefaultImageDpi } from "../Office2010/Word";
import { EntityPickerEmpty as W14EntityPickerEmpty } from "../Office2010/Word";
import { SdtContentCheckBox as W14SdtContentCheckBox } from "../Office2010/Word";
import { Shape as VShape } from "../Vml";
import { Shapetype as VShapetype } from "../Vml";
import { Group as VGroup } from "../Vml";
import { Background as VBackground } from "../Vml";
import { Fill as VFill } from "../Vml";
import { Formulas as VFormulas } from "../Vml";
import { ShapeHandles as VShapeHandles } from "../Vml";
import { ImageData as VImageData } from "../Vml";
import { Path as VPath } from "../Vml";
import { TextBox as VTextBox } from "../Vml";
import { Shadow as VShadow } from "../Vml";
import { Stroke as VStroke } from "../Vml";
import { TextPath as VTextPath } from "../Vml";
import { Arc as VArc } from "../Vml";
import { Curve as VCurve } from "../Vml";
import { ImageFile as VImageFile } from "../Vml";
import { Line as VLine } from "../Vml";
import { Oval as VOval } from "../Vml";
import { PolyLine as VPolyLine } from "../Vml";
import { Rectangle as VRectangle } from "../Vml";
import { RoundRectangle as VRoundRectangle } from "../Vml";
import { ShapeDefaults as OShapeDefaults } from "../Vml/Office";
import { ShapeLayout as OShapeLayout } from "../Vml/Office";
import { SignatureLine as OSignatureLine } from "../Vml/Office";
import { Ink as OInk } from "../Vml/Office";
import { Diagram as ODiagram } from "../Vml/Office";
import { Skew as OSkew } from "../Vml/Office";
import { Extrusion as OExtrusion } from "../Vml/Office";
import { Callout as OCallout } from "../Vml/Office";
import { Lock as OLock } from "../Vml/Office";
import { OleObject as OOleObject } from "../Vml/Office";
import { Complex as OComplex } from "../Vml/Office";
import { LeftStroke as OLeftStroke } from "../Vml/Office";
import { TopStroke as OTopStroke } from "../Vml/Office";
import { RightStroke as ORightStroke } from "../Vml/Office";
import { BottomStroke as OBottomStroke } from "../Vml/Office";
import { ColumnStroke as OColumnStroke } from "../Vml/Office";
import { ClipPath as OClipPath } from "../Vml/Office";
import { FillExtendedProperties as OFillExtendedProperties } from "../Vml/Office";
import { TopBorder as W10TopBorder } from "../Vml/Wordprocessing";
import { LeftBorder as W10LeftBorder } from "../Vml/Wordprocessing";
import { RightBorder as W10RightBorder } from "../Vml/Wordprocessing";
import { BottomBorder as W10BottomBorder } from "../Vml/Wordprocessing";
import { TextWrap as W10TextWrap } from "../Vml/Wordprocessing";
import { AnchorLock as W10AnchorLock } from "../Vml/Wordprocessing";
import { ClientData as XvmlClientData } from "../Vml/Spreadsheet";
import { InkAnnotationFlag as PvmlInkAnnotationFlag } from "../Vml/Presentation";
import { TextData as PvmlTextData } from "../Vml/Presentation";
import { WordprocessingCanvas as WpcWordprocessingCanvas } from "../Office2010/Word/DrawingCanvas";
import { WordprocessingGroup as WpgWordprocessingGroup } from "../Office2010/Word/DrawingGroup";
import { WordprocessingShape as WpsWordprocessingShape } from "../Office2010/Word/DrawingShape";
import { Slicer as SleSlicer } from "../Office2010/Drawing/Slicer";
import { ColorStyle as CsColorStyle } from "../Office2013/Drawing/ChartStyle";
import { ChartStyle as CsChartStyle } from "../Office2013/Drawing/ChartStyle";
import { WebExtension as WeWebExtension } from "../Office2013/WebExtension";
import { WebExtensionReference as WeWebExtensionReference } from "../Office2013/WebExtension";
import { TimeSlicer as TsleTimeSlicer } from "../Office2013/Drawing/TimeSlicer";
var FontCollectionIndexValues = /* @__PURE__ */ ((FontCollectionIndexValues2) => {
  FontCollectionIndexValues2["Major"] = "major";
  FontCollectionIndexValues2["Minor"] = "minor";
  FontCollectionIndexValues2["None"] = "none";
  return FontCollectionIndexValues2;
})(FontCollectionIndexValues || {});
const FontCollectionIndexValuesArray = [
  "major" /* Major */,
  "minor" /* Minor */,
  "none" /* None */
];
var ColorSchemeIndexValues = /* @__PURE__ */ ((ColorSchemeIndexValues2) => {
  ColorSchemeIndexValues2["Dark1"] = "dk1";
  ColorSchemeIndexValues2["Light1"] = "lt1";
  ColorSchemeIndexValues2["Dark2"] = "dk2";
  ColorSchemeIndexValues2["Light2"] = "lt2";
  ColorSchemeIndexValues2["Accent1"] = "accent1";
  ColorSchemeIndexValues2["Accent2"] = "accent2";
  ColorSchemeIndexValues2["Accent3"] = "accent3";
  ColorSchemeIndexValues2["Accent4"] = "accent4";
  ColorSchemeIndexValues2["Accent5"] = "accent5";
  ColorSchemeIndexValues2["Accent6"] = "accent6";
  ColorSchemeIndexValues2["Hyperlink"] = "hlink";
  ColorSchemeIndexValues2["FollowedHyperlink"] = "folHlink";
  return ColorSchemeIndexValues2;
})(ColorSchemeIndexValues || {});
const ColorSchemeIndexValuesArray = [
  "dk1" /* Dark1 */,
  "lt1" /* Light1 */,
  "dk2" /* Dark2 */,
  "lt2" /* Light2 */,
  "accent1" /* Accent1 */,
  "accent2" /* Accent2 */,
  "accent3" /* Accent3 */,
  "accent4" /* Accent4 */,
  "accent5" /* Accent5 */,
  "accent6" /* Accent6 */,
  "hlink" /* Hyperlink */,
  "folHlink" /* FollowedHyperlink */
];
var SystemColorValues = /* @__PURE__ */ ((SystemColorValues2) => {
  SystemColorValues2["ScrollBar"] = "scrollBar";
  SystemColorValues2["Background"] = "background";
  SystemColorValues2["ActiveCaption"] = "activeCaption";
  SystemColorValues2["InactiveCaption"] = "inactiveCaption";
  SystemColorValues2["Menu"] = "menu";
  SystemColorValues2["Window"] = "window";
  SystemColorValues2["WindowFrame"] = "windowFrame";
  SystemColorValues2["MenuText"] = "menuText";
  SystemColorValues2["WindowText"] = "windowText";
  SystemColorValues2["CaptionText"] = "captionText";
  SystemColorValues2["ActiveBorder"] = "activeBorder";
  SystemColorValues2["InactiveBorder"] = "inactiveBorder";
  SystemColorValues2["ApplicationWorkspace"] = "appWorkspace";
  SystemColorValues2["Highlight"] = "highlight";
  SystemColorValues2["HighlightText"] = "highlightText";
  SystemColorValues2["ButtonFace"] = "btnFace";
  SystemColorValues2["ButtonShadow"] = "btnShadow";
  SystemColorValues2["GrayText"] = "grayText";
  SystemColorValues2["ButtonText"] = "btnText";
  SystemColorValues2["InactiveCaptionText"] = "inactiveCaptionText";
  SystemColorValues2["ButtonHighlight"] = "btnHighlight";
  SystemColorValues2["ThreeDDarkShadow"] = "3dDkShadow";
  SystemColorValues2["ThreeDLight"] = "3dLight";
  SystemColorValues2["InfoText"] = "infoText";
  SystemColorValues2["InfoBack"] = "infoBk";
  SystemColorValues2["HotLight"] = "hotLight";
  SystemColorValues2["GradientActiveCaption"] = "gradientActiveCaption";
  SystemColorValues2["GradientInactiveCaption"] = "gradientInactiveCaption";
  SystemColorValues2["MenuHighlight"] = "menuHighlight";
  SystemColorValues2["MenuBar"] = "menuBar";
  return SystemColorValues2;
})(SystemColorValues || {});
const SystemColorValuesArray = [
  "scrollBar" /* ScrollBar */,
  "background" /* Background */,
  "activeCaption" /* ActiveCaption */,
  "inactiveCaption" /* InactiveCaption */,
  "menu" /* Menu */,
  "window" /* Window */,
  "windowFrame" /* WindowFrame */,
  "menuText" /* MenuText */,
  "windowText" /* WindowText */,
  "captionText" /* CaptionText */,
  "activeBorder" /* ActiveBorder */,
  "inactiveBorder" /* InactiveBorder */,
  "appWorkspace" /* ApplicationWorkspace */,
  "highlight" /* Highlight */,
  "highlightText" /* HighlightText */,
  "btnFace" /* ButtonFace */,
  "btnShadow" /* ButtonShadow */,
  "grayText" /* GrayText */,
  "btnText" /* ButtonText */,
  "inactiveCaptionText" /* InactiveCaptionText */,
  "btnHighlight" /* ButtonHighlight */,
  "3dDkShadow" /* ThreeDDarkShadow */,
  "3dLight" /* ThreeDLight */,
  "infoText" /* InfoText */,
  "infoBk" /* InfoBack */,
  "hotLight" /* HotLight */,
  "gradientActiveCaption" /* GradientActiveCaption */,
  "gradientInactiveCaption" /* GradientInactiveCaption */,
  "menuHighlight" /* MenuHighlight */,
  "menuBar" /* MenuBar */
];
var SchemeColorValues = /* @__PURE__ */ ((SchemeColorValues2) => {
  SchemeColorValues2["Background1"] = "bg1";
  SchemeColorValues2["Text1"] = "tx1";
  SchemeColorValues2["Background2"] = "bg2";
  SchemeColorValues2["Text2"] = "tx2";
  SchemeColorValues2["Accent1"] = "accent1";
  SchemeColorValues2["Accent2"] = "accent2";
  SchemeColorValues2["Accent3"] = "accent3";
  SchemeColorValues2["Accent4"] = "accent4";
  SchemeColorValues2["Accent5"] = "accent5";
  SchemeColorValues2["Accent6"] = "accent6";
  SchemeColorValues2["Hyperlink"] = "hlink";
  SchemeColorValues2["FollowedHyperlink"] = "folHlink";
  SchemeColorValues2["PhColor"] = "phClr";
  SchemeColorValues2["Dark1"] = "dk1";
  SchemeColorValues2["Light1"] = "lt1";
  SchemeColorValues2["Dark2"] = "dk2";
  SchemeColorValues2["Light2"] = "lt2";
  return SchemeColorValues2;
})(SchemeColorValues || {});
const SchemeColorValuesArray = [
  "bg1" /* Background1 */,
  "tx1" /* Text1 */,
  "bg2" /* Background2 */,
  "tx2" /* Text2 */,
  "accent1" /* Accent1 */,
  "accent2" /* Accent2 */,
  "accent3" /* Accent3 */,
  "accent4" /* Accent4 */,
  "accent5" /* Accent5 */,
  "accent6" /* Accent6 */,
  "hlink" /* Hyperlink */,
  "folHlink" /* FollowedHyperlink */,
  "phClr" /* PhColor */,
  "dk1" /* Dark1 */,
  "lt1" /* Light1 */,
  "dk2" /* Dark2 */,
  "lt2" /* Light2 */
];
var RectangleAlignmentValues = /* @__PURE__ */ ((RectangleAlignmentValues2) => {
  RectangleAlignmentValues2["TopLeft"] = "tl";
  RectangleAlignmentValues2["Top"] = "t";
  RectangleAlignmentValues2["TopRight"] = "tr";
  RectangleAlignmentValues2["Left"] = "l";
  RectangleAlignmentValues2["Center"] = "ctr";
  RectangleAlignmentValues2["Right"] = "r";
  RectangleAlignmentValues2["BottomLeft"] = "bl";
  RectangleAlignmentValues2["Bottom"] = "b";
  RectangleAlignmentValues2["BottomRight"] = "br";
  return RectangleAlignmentValues2;
})(RectangleAlignmentValues || {});
const RectangleAlignmentValuesArray = [
  "tl" /* TopLeft */,
  "t" /* Top */,
  "tr" /* TopRight */,
  "l" /* Left */,
  "ctr" /* Center */,
  "r" /* Right */,
  "bl" /* BottomLeft */,
  "b" /* Bottom */,
  "br" /* BottomRight */
];
var BlackWhiteModeValues = /* @__PURE__ */ ((BlackWhiteModeValues2) => {
  BlackWhiteModeValues2["Color"] = "clr";
  BlackWhiteModeValues2["Auto"] = "auto";
  BlackWhiteModeValues2["Gray"] = "gray";
  BlackWhiteModeValues2["LightGray"] = "ltGray";
  BlackWhiteModeValues2["InvGray"] = "invGray";
  BlackWhiteModeValues2["GrayWhite"] = "grayWhite";
  BlackWhiteModeValues2["BlackGray"] = "blackGray";
  BlackWhiteModeValues2["BlackWhite"] = "blackWhite";
  BlackWhiteModeValues2["Black"] = "black";
  BlackWhiteModeValues2["White"] = "white";
  BlackWhiteModeValues2["Hidden"] = "hidden";
  return BlackWhiteModeValues2;
})(BlackWhiteModeValues || {});
const BlackWhiteModeValuesArray = [
  "clr" /* Color */,
  "auto" /* Auto */,
  "gray" /* Gray */,
  "ltGray" /* LightGray */,
  "invGray" /* InvGray */,
  "grayWhite" /* GrayWhite */,
  "blackGray" /* BlackGray */,
  "blackWhite" /* BlackWhite */,
  "black" /* Black */,
  "white" /* White */,
  "hidden" /* Hidden */
];
var ChartBuildStepValues = /* @__PURE__ */ ((ChartBuildStepValues2) => {
  ChartBuildStepValues2["Category"] = "category";
  ChartBuildStepValues2["CategoryPoints"] = "ptInCategory";
  ChartBuildStepValues2["Series"] = "series";
  ChartBuildStepValues2["SeriesPoints"] = "ptInSeries";
  ChartBuildStepValues2["AllPoints"] = "allPts";
  ChartBuildStepValues2["GridLegend"] = "gridLegend";
  return ChartBuildStepValues2;
})(ChartBuildStepValues || {});
const ChartBuildStepValuesArray = [
  "category" /* Category */,
  "ptInCategory" /* CategoryPoints */,
  "series" /* Series */,
  "ptInSeries" /* SeriesPoints */,
  "allPts" /* AllPoints */,
  "gridLegend" /* GridLegend */
];
var DiagramBuildStepValues = /* @__PURE__ */ ((DiagramBuildStepValues2) => {
  DiagramBuildStepValues2["Shape"] = "sp";
  DiagramBuildStepValues2["Background"] = "bg";
  return DiagramBuildStepValues2;
})(DiagramBuildStepValues || {});
const DiagramBuildStepValuesArray = [
  "sp" /* Shape */,
  "bg" /* Background */
];
var AnimationBuildValues = /* @__PURE__ */ ((AnimationBuildValues2) => {
  AnimationBuildValues2["AllAtOnce"] = "allAtOnce";
  return AnimationBuildValues2;
})(AnimationBuildValues || {});
const AnimationBuildValuesArray = [
  "allAtOnce" /* AllAtOnce */
];
var AnimationDiagramOnlyBuildValues = /* @__PURE__ */ ((AnimationDiagramOnlyBuildValues2) => {
  AnimationDiagramOnlyBuildValues2["One"] = "one";
  AnimationDiagramOnlyBuildValues2["LevelOne"] = "lvlOne";
  AnimationDiagramOnlyBuildValues2["LevelAtOnce"] = "lvlAtOnce";
  return AnimationDiagramOnlyBuildValues2;
})(AnimationDiagramOnlyBuildValues || {});
const AnimationDiagramOnlyBuildValuesArray = [
  "one" /* One */,
  "lvlOne" /* LevelOne */,
  "lvlAtOnce" /* LevelAtOnce */
];
var AnimationChartOnlyBuildValues = /* @__PURE__ */ ((AnimationChartOnlyBuildValues2) => {
  AnimationChartOnlyBuildValues2["Series"] = "series";
  AnimationChartOnlyBuildValues2["Category"] = "category";
  AnimationChartOnlyBuildValues2["SeriesElement"] = "seriesEl";
  AnimationChartOnlyBuildValues2["CategoryElement"] = "categoryEl";
  return AnimationChartOnlyBuildValues2;
})(AnimationChartOnlyBuildValues || {});
const AnimationChartOnlyBuildValuesArray = [
  "series" /* Series */,
  "category" /* Category */,
  "seriesEl" /* SeriesElement */,
  "categoryEl" /* CategoryElement */
];
var PresetCameraValues = /* @__PURE__ */ ((PresetCameraValues2) => {
  PresetCameraValues2["LegacyObliqueTopLeft"] = "legacyObliqueTopLeft";
  PresetCameraValues2["LegacyObliqueTop"] = "legacyObliqueTop";
  PresetCameraValues2["LegacyObliqueTopRight"] = "legacyObliqueTopRight";
  PresetCameraValues2["LegacyObliqueLeft"] = "legacyObliqueLeft";
  PresetCameraValues2["LegacyObliqueFront"] = "legacyObliqueFront";
  PresetCameraValues2["LegacyObliqueRight"] = "legacyObliqueRight";
  PresetCameraValues2["LegacyObliqueBottomLeft"] = "legacyObliqueBottomLeft";
  PresetCameraValues2["LegacyObliqueBottom"] = "legacyObliqueBottom";
  PresetCameraValues2["LegacyObliqueBottomRight"] = "legacyObliqueBottomRight";
  PresetCameraValues2["LegacyPerspectiveTopLeft"] = "legacyPerspectiveTopLeft";
  PresetCameraValues2["LegacyPerspectiveTop"] = "legacyPerspectiveTop";
  PresetCameraValues2["LegacyPerspectiveTopRight"] = "legacyPerspectiveTopRight";
  PresetCameraValues2["LegacyPerspectiveLeft"] = "legacyPerspectiveLeft";
  PresetCameraValues2["LegacyPerspectiveFront"] = "legacyPerspectiveFront";
  PresetCameraValues2["LegacyPerspectiveRight"] = "legacyPerspectiveRight";
  PresetCameraValues2["LegacyPerspectiveBottomLeft"] = "legacyPerspectiveBottomLeft";
  PresetCameraValues2["LegacyPerspectiveBottom"] = "legacyPerspectiveBottom";
  PresetCameraValues2["LegacyPerspectiveBottomRight"] = "legacyPerspectiveBottomRight";
  PresetCameraValues2["OrthographicFront"] = "orthographicFront";
  PresetCameraValues2["IsometricTopUp"] = "isometricTopUp";
  PresetCameraValues2["IsometricTopDown"] = "isometricTopDown";
  PresetCameraValues2["IsometricBottomUp"] = "isometricBottomUp";
  PresetCameraValues2["IsometricBottomDown"] = "isometricBottomDown";
  PresetCameraValues2["IsometricLeftUp"] = "isometricLeftUp";
  PresetCameraValues2["IsometricLeftDown"] = "isometricLeftDown";
  PresetCameraValues2["IsometricRightUp"] = "isometricRightUp";
  PresetCameraValues2["IsometricRightDown"] = "isometricRightDown";
  PresetCameraValues2["IsometricOffAxis1Left"] = "isometricOffAxis1Left";
  PresetCameraValues2["IsometricOffAxis1Right"] = "isometricOffAxis1Right";
  PresetCameraValues2["IsometricOffAxis1Top"] = "isometricOffAxis1Top";
  PresetCameraValues2["IsometricOffAxis2Left"] = "isometricOffAxis2Left";
  PresetCameraValues2["IsometricOffAxis2Right"] = "isometricOffAxis2Right";
  PresetCameraValues2["IsometricOffAxis2Top"] = "isometricOffAxis2Top";
  PresetCameraValues2["IsometricOffAxis3Left"] = "isometricOffAxis3Left";
  PresetCameraValues2["IsometricOffAxis3Right"] = "isometricOffAxis3Right";
  PresetCameraValues2["IsometricOffAxis3Bottom"] = "isometricOffAxis3Bottom";
  PresetCameraValues2["IsometricOffAxis4Left"] = "isometricOffAxis4Left";
  PresetCameraValues2["IsometricOffAxis4Right"] = "isometricOffAxis4Right";
  PresetCameraValues2["IsometricOffAxis4Bottom"] = "isometricOffAxis4Bottom";
  PresetCameraValues2["ObliqueTopLeft"] = "obliqueTopLeft";
  PresetCameraValues2["ObliqueTop"] = "obliqueTop";
  PresetCameraValues2["ObliqueTopRight"] = "obliqueTopRight";
  PresetCameraValues2["ObliqueLeft"] = "obliqueLeft";
  PresetCameraValues2["ObliqueRight"] = "obliqueRight";
  PresetCameraValues2["ObliqueBottomLeft"] = "obliqueBottomLeft";
  PresetCameraValues2["ObliqueBottom"] = "obliqueBottom";
  PresetCameraValues2["ObliqueBottomRight"] = "obliqueBottomRight";
  PresetCameraValues2["PerspectiveFront"] = "perspectiveFront";
  PresetCameraValues2["PerspectiveLeft"] = "perspectiveLeft";
  PresetCameraValues2["PerspectiveRight"] = "perspectiveRight";
  PresetCameraValues2["PerspectiveAbove"] = "perspectiveAbove";
  PresetCameraValues2["PerspectiveBelow"] = "perspectiveBelow";
  PresetCameraValues2["PerspectiveAboveLeftFacing"] = "perspectiveAboveLeftFacing";
  PresetCameraValues2["PerspectiveAboveRightFacing"] = "perspectiveAboveRightFacing";
  PresetCameraValues2["PerspectiveContrastingLeftFacing"] = "perspectiveContrastingLeftFacing";
  PresetCameraValues2["PerspectiveContrastingRightFacing"] = "perspectiveContrastingRightFacing";
  PresetCameraValues2["PerspectiveHeroicLeftFacing"] = "perspectiveHeroicLeftFacing";
  PresetCameraValues2["PerspectiveHeroicRightFacing"] = "perspectiveHeroicRightFacing";
  PresetCameraValues2["PerspectiveHeroicExtremeLeftFacing"] = "perspectiveHeroicExtremeLeftFacing";
  PresetCameraValues2["PerspectiveHeroicExtremeRightFacing"] = "perspectiveHeroicExtremeRightFacing";
  PresetCameraValues2["PerspectiveRelaxed"] = "perspectiveRelaxed";
  PresetCameraValues2["PerspectiveRelaxedModerately"] = "perspectiveRelaxedModerately";
  return PresetCameraValues2;
})(PresetCameraValues || {});
const PresetCameraValuesArray = [
  "legacyObliqueTopLeft" /* LegacyObliqueTopLeft */,
  "legacyObliqueTop" /* LegacyObliqueTop */,
  "legacyObliqueTopRight" /* LegacyObliqueTopRight */,
  "legacyObliqueLeft" /* LegacyObliqueLeft */,
  "legacyObliqueFront" /* LegacyObliqueFront */,
  "legacyObliqueRight" /* LegacyObliqueRight */,
  "legacyObliqueBottomLeft" /* LegacyObliqueBottomLeft */,
  "legacyObliqueBottom" /* LegacyObliqueBottom */,
  "legacyObliqueBottomRight" /* LegacyObliqueBottomRight */,
  "legacyPerspectiveTopLeft" /* LegacyPerspectiveTopLeft */,
  "legacyPerspectiveTop" /* LegacyPerspectiveTop */,
  "legacyPerspectiveTopRight" /* LegacyPerspectiveTopRight */,
  "legacyPerspectiveLeft" /* LegacyPerspectiveLeft */,
  "legacyPerspectiveFront" /* LegacyPerspectiveFront */,
  "legacyPerspectiveRight" /* LegacyPerspectiveRight */,
  "legacyPerspectiveBottomLeft" /* LegacyPerspectiveBottomLeft */,
  "legacyPerspectiveBottom" /* LegacyPerspectiveBottom */,
  "legacyPerspectiveBottomRight" /* LegacyPerspectiveBottomRight */,
  "orthographicFront" /* OrthographicFront */,
  "isometricTopUp" /* IsometricTopUp */,
  "isometricTopDown" /* IsometricTopDown */,
  "isometricBottomUp" /* IsometricBottomUp */,
  "isometricBottomDown" /* IsometricBottomDown */,
  "isometricLeftUp" /* IsometricLeftUp */,
  "isometricLeftDown" /* IsometricLeftDown */,
  "isometricRightUp" /* IsometricRightUp */,
  "isometricRightDown" /* IsometricRightDown */,
  "isometricOffAxis1Left" /* IsometricOffAxis1Left */,
  "isometricOffAxis1Right" /* IsometricOffAxis1Right */,
  "isometricOffAxis1Top" /* IsometricOffAxis1Top */,
  "isometricOffAxis2Left" /* IsometricOffAxis2Left */,
  "isometricOffAxis2Right" /* IsometricOffAxis2Right */,
  "isometricOffAxis2Top" /* IsometricOffAxis2Top */,
  "isometricOffAxis3Left" /* IsometricOffAxis3Left */,
  "isometricOffAxis3Right" /* IsometricOffAxis3Right */,
  "isometricOffAxis3Bottom" /* IsometricOffAxis3Bottom */,
  "isometricOffAxis4Left" /* IsometricOffAxis4Left */,
  "isometricOffAxis4Right" /* IsometricOffAxis4Right */,
  "isometricOffAxis4Bottom" /* IsometricOffAxis4Bottom */,
  "obliqueTopLeft" /* ObliqueTopLeft */,
  "obliqueTop" /* ObliqueTop */,
  "obliqueTopRight" /* ObliqueTopRight */,
  "obliqueLeft" /* ObliqueLeft */,
  "obliqueRight" /* ObliqueRight */,
  "obliqueBottomLeft" /* ObliqueBottomLeft */,
  "obliqueBottom" /* ObliqueBottom */,
  "obliqueBottomRight" /* ObliqueBottomRight */,
  "perspectiveFront" /* PerspectiveFront */,
  "perspectiveLeft" /* PerspectiveLeft */,
  "perspectiveRight" /* PerspectiveRight */,
  "perspectiveAbove" /* PerspectiveAbove */,
  "perspectiveBelow" /* PerspectiveBelow */,
  "perspectiveAboveLeftFacing" /* PerspectiveAboveLeftFacing */,
  "perspectiveAboveRightFacing" /* PerspectiveAboveRightFacing */,
  "perspectiveContrastingLeftFacing" /* PerspectiveContrastingLeftFacing */,
  "perspectiveContrastingRightFacing" /* PerspectiveContrastingRightFacing */,
  "perspectiveHeroicLeftFacing" /* PerspectiveHeroicLeftFacing */,
  "perspectiveHeroicRightFacing" /* PerspectiveHeroicRightFacing */,
  "perspectiveHeroicExtremeLeftFacing" /* PerspectiveHeroicExtremeLeftFacing */,
  "perspectiveHeroicExtremeRightFacing" /* PerspectiveHeroicExtremeRightFacing */,
  "perspectiveRelaxed" /* PerspectiveRelaxed */,
  "perspectiveRelaxedModerately" /* PerspectiveRelaxedModerately */
];
var LightRigDirectionValues = /* @__PURE__ */ ((LightRigDirectionValues2) => {
  LightRigDirectionValues2["TopLeft"] = "tl";
  LightRigDirectionValues2["Top"] = "t";
  LightRigDirectionValues2["TopRight"] = "tr";
  LightRigDirectionValues2["Left"] = "l";
  LightRigDirectionValues2["Right"] = "r";
  LightRigDirectionValues2["BottomLeft"] = "bl";
  LightRigDirectionValues2["Bottom"] = "b";
  LightRigDirectionValues2["BottomRight"] = "br";
  return LightRigDirectionValues2;
})(LightRigDirectionValues || {});
const LightRigDirectionValuesArray = [
  "tl" /* TopLeft */,
  "t" /* Top */,
  "tr" /* TopRight */,
  "l" /* Left */,
  "r" /* Right */,
  "bl" /* BottomLeft */,
  "b" /* Bottom */,
  "br" /* BottomRight */
];
var LightRigValues = /* @__PURE__ */ ((LightRigValues2) => {
  LightRigValues2["LegacyFlat1"] = "legacyFlat1";
  LightRigValues2["LegacyFlat2"] = "legacyFlat2";
  LightRigValues2["LegacyFlat3"] = "legacyFlat3";
  LightRigValues2["LegacyFlat4"] = "legacyFlat4";
  LightRigValues2["LegacyNormal1"] = "legacyNormal1";
  LightRigValues2["LegacyNormal2"] = "legacyNormal2";
  LightRigValues2["LegacyNormal3"] = "legacyNormal3";
  LightRigValues2["LegacyNormal4"] = "legacyNormal4";
  LightRigValues2["LegacyHarsh1"] = "legacyHarsh1";
  LightRigValues2["LegacyHarsh2"] = "legacyHarsh2";
  LightRigValues2["LegacyHarsh3"] = "legacyHarsh3";
  LightRigValues2["LegacyHarsh4"] = "legacyHarsh4";
  LightRigValues2["ThreePoints"] = "threePt";
  LightRigValues2["Balanced"] = "balanced";
  LightRigValues2["Soft"] = "soft";
  LightRigValues2["Harsh"] = "harsh";
  LightRigValues2["Flood"] = "flood";
  LightRigValues2["Contrasting"] = "contrasting";
  LightRigValues2["Morning"] = "morning";
  LightRigValues2["Sunrise"] = "sunrise";
  LightRigValues2["Sunset"] = "sunset";
  LightRigValues2["Chilly"] = "chilly";
  LightRigValues2["Freezing"] = "freezing";
  LightRigValues2["Flat"] = "flat";
  LightRigValues2["TwoPoints"] = "twoPt";
  LightRigValues2["Glow"] = "glow";
  LightRigValues2["BrightRoom"] = "brightRoom";
  return LightRigValues2;
})(LightRigValues || {});
const LightRigValuesArray = [
  "legacyFlat1" /* LegacyFlat1 */,
  "legacyFlat2" /* LegacyFlat2 */,
  "legacyFlat3" /* LegacyFlat3 */,
  "legacyFlat4" /* LegacyFlat4 */,
  "legacyNormal1" /* LegacyNormal1 */,
  "legacyNormal2" /* LegacyNormal2 */,
  "legacyNormal3" /* LegacyNormal3 */,
  "legacyNormal4" /* LegacyNormal4 */,
  "legacyHarsh1" /* LegacyHarsh1 */,
  "legacyHarsh2" /* LegacyHarsh2 */,
  "legacyHarsh3" /* LegacyHarsh3 */,
  "legacyHarsh4" /* LegacyHarsh4 */,
  "threePt" /* ThreePoints */,
  "balanced" /* Balanced */,
  "soft" /* Soft */,
  "harsh" /* Harsh */,
  "flood" /* Flood */,
  "contrasting" /* Contrasting */,
  "morning" /* Morning */,
  "sunrise" /* Sunrise */,
  "sunset" /* Sunset */,
  "chilly" /* Chilly */,
  "freezing" /* Freezing */,
  "flat" /* Flat */,
  "twoPt" /* TwoPoints */,
  "glow" /* Glow */,
  "brightRoom" /* BrightRoom */
];
var BevelPresetValues = /* @__PURE__ */ ((BevelPresetValues2) => {
  BevelPresetValues2["RelaxedInset"] = "relaxedInset";
  BevelPresetValues2["Circle"] = "circle";
  BevelPresetValues2["Slope"] = "slope";
  BevelPresetValues2["Cross"] = "cross";
  BevelPresetValues2["Angle"] = "angle";
  BevelPresetValues2["SoftRound"] = "softRound";
  BevelPresetValues2["Convex"] = "convex";
  BevelPresetValues2["CoolSlant"] = "coolSlant";
  BevelPresetValues2["Divot"] = "divot";
  BevelPresetValues2["Riblet"] = "riblet";
  BevelPresetValues2["HardEdge"] = "hardEdge";
  BevelPresetValues2["ArtDeco"] = "artDeco";
  return BevelPresetValues2;
})(BevelPresetValues || {});
const BevelPresetValuesArray = [
  "relaxedInset" /* RelaxedInset */,
  "circle" /* Circle */,
  "slope" /* Slope */,
  "cross" /* Cross */,
  "angle" /* Angle */,
  "softRound" /* SoftRound */,
  "convex" /* Convex */,
  "coolSlant" /* CoolSlant */,
  "divot" /* Divot */,
  "riblet" /* Riblet */,
  "hardEdge" /* HardEdge */,
  "artDeco" /* ArtDeco */
];
var PresetMaterialTypeValues = /* @__PURE__ */ ((PresetMaterialTypeValues2) => {
  PresetMaterialTypeValues2["LegacyMatte"] = "legacyMatte";
  PresetMaterialTypeValues2["LegacyPlastic"] = "legacyPlastic";
  PresetMaterialTypeValues2["LegacyMetal"] = "legacyMetal";
  PresetMaterialTypeValues2["LegacyWireframe"] = "legacyWireframe";
  PresetMaterialTypeValues2["Matte"] = "matte";
  PresetMaterialTypeValues2["Plastic"] = "plastic";
  PresetMaterialTypeValues2["Metal"] = "metal";
  PresetMaterialTypeValues2["WarmMatte"] = "warmMatte";
  PresetMaterialTypeValues2["TranslucentPowder"] = "translucentPowder";
  PresetMaterialTypeValues2["Powder"] = "powder";
  PresetMaterialTypeValues2["DarkEdge"] = "dkEdge";
  PresetMaterialTypeValues2["SoftEdge"] = "softEdge";
  PresetMaterialTypeValues2["Clear"] = "clear";
  PresetMaterialTypeValues2["Flat"] = "flat";
  PresetMaterialTypeValues2["SoftMetal"] = "softmetal";
  return PresetMaterialTypeValues2;
})(PresetMaterialTypeValues || {});
const PresetMaterialTypeValuesArray = [
  "legacyMatte" /* LegacyMatte */,
  "legacyPlastic" /* LegacyPlastic */,
  "legacyMetal" /* LegacyMetal */,
  "legacyWireframe" /* LegacyWireframe */,
  "matte" /* Matte */,
  "plastic" /* Plastic */,
  "metal" /* Metal */,
  "warmMatte" /* WarmMatte */,
  "translucentPowder" /* TranslucentPowder */,
  "powder" /* Powder */,
  "dkEdge" /* DarkEdge */,
  "softEdge" /* SoftEdge */,
  "clear" /* Clear */,
  "flat" /* Flat */,
  "softmetal" /* SoftMetal */
];
var PresetShadowValues = /* @__PURE__ */ ((PresetShadowValues2) => {
  PresetShadowValues2["TopLeftDropShadow"] = "shdw1";
  PresetShadowValues2["TopRightDropShadow"] = "shdw2";
  PresetShadowValues2["BackLeftPerspectiveShadow"] = "shdw3";
  PresetShadowValues2["BackRightPerspectiveShadow"] = "shdw4";
  PresetShadowValues2["BottomLeftDropShadow"] = "shdw5";
  PresetShadowValues2["BottomRightDropShadow"] = "shdw6";
  PresetShadowValues2["FrontLeftPerspectiveShadow"] = "shdw7";
  PresetShadowValues2["FrontRightPerspectiveShadow"] = "shdw8";
  PresetShadowValues2["TopLeftSmallDropShadow"] = "shdw9";
  PresetShadowValues2["TopLeftLargeDropShadow"] = "shdw10";
  PresetShadowValues2["BackLeftLongPerspectiveShadow"] = "shdw11";
  PresetShadowValues2["BackRightLongPerspectiveShadow"] = "shdw12";
  PresetShadowValues2["TopLeftDoubleDropShadow"] = "shdw13";
  PresetShadowValues2["BottomRightSmallDropShadow"] = "shdw14";
  PresetShadowValues2["FrontLeftLongPerspectiveShadow"] = "shdw15";
  PresetShadowValues2["FrontRightLongPerspectiveShadow"] = "shdw16";
  PresetShadowValues2["ThreeDimensionalOuterBoxShadow"] = "shdw17";
  PresetShadowValues2["ThreeDimensionalInnerBoxShadow"] = "shdw18";
  PresetShadowValues2["BackCenterPerspectiveShadow"] = "shdw19";
  PresetShadowValues2["FrontBottomShadow"] = "shdw20";
  return PresetShadowValues2;
})(PresetShadowValues || {});
const PresetShadowValuesArray = [
  "shdw1" /* TopLeftDropShadow */,
  "shdw2" /* TopRightDropShadow */,
  "shdw3" /* BackLeftPerspectiveShadow */,
  "shdw4" /* BackRightPerspectiveShadow */,
  "shdw5" /* BottomLeftDropShadow */,
  "shdw6" /* BottomRightDropShadow */,
  "shdw7" /* FrontLeftPerspectiveShadow */,
  "shdw8" /* FrontRightPerspectiveShadow */,
  "shdw9" /* TopLeftSmallDropShadow */,
  "shdw10" /* TopLeftLargeDropShadow */,
  "shdw11" /* BackLeftLongPerspectiveShadow */,
  "shdw12" /* BackRightLongPerspectiveShadow */,
  "shdw13" /* TopLeftDoubleDropShadow */,
  "shdw14" /* BottomRightSmallDropShadow */,
  "shdw15" /* FrontLeftLongPerspectiveShadow */,
  "shdw16" /* FrontRightLongPerspectiveShadow */,
  "shdw17" /* ThreeDimensionalOuterBoxShadow */,
  "shdw18" /* ThreeDimensionalInnerBoxShadow */,
  "shdw19" /* BackCenterPerspectiveShadow */,
  "shdw20" /* FrontBottomShadow */
];
var PathShadeValues = /* @__PURE__ */ ((PathShadeValues2) => {
  PathShadeValues2["Shape"] = "shape";
  PathShadeValues2["Circle"] = "circle";
  PathShadeValues2["Rectangle"] = "rect";
  return PathShadeValues2;
})(PathShadeValues || {});
const PathShadeValuesArray = [
  "shape" /* Shape */,
  "circle" /* Circle */,
  "rect" /* Rectangle */
];
var TileFlipValues = /* @__PURE__ */ ((TileFlipValues2) => {
  TileFlipValues2["None"] = "none";
  TileFlipValues2["Horizontal"] = "x";
  TileFlipValues2["Vertical"] = "y";
  TileFlipValues2["HorizontalAndVertical"] = "xy";
  return TileFlipValues2;
})(TileFlipValues || {});
const TileFlipValuesArray = [
  "none" /* None */,
  "x" /* Horizontal */,
  "y" /* Vertical */,
  "xy" /* HorizontalAndVertical */
];
var BlipCompressionValues = /* @__PURE__ */ ((BlipCompressionValues2) => {
  BlipCompressionValues2["Email"] = "email";
  BlipCompressionValues2["Screen"] = "screen";
  BlipCompressionValues2["Print"] = "print";
  BlipCompressionValues2["HighQualityPrint"] = "hqprint";
  BlipCompressionValues2["None"] = "none";
  return BlipCompressionValues2;
})(BlipCompressionValues || {});
const BlipCompressionValuesArray = [
  "email" /* Email */,
  "screen" /* Screen */,
  "print" /* Print */,
  "hqprint" /* HighQualityPrint */,
  "none" /* None */
];
var PresetPatternValues = /* @__PURE__ */ ((PresetPatternValues2) => {
  PresetPatternValues2["Percent5"] = "pct5";
  PresetPatternValues2["Percent10"] = "pct10";
  PresetPatternValues2["Percent20"] = "pct20";
  PresetPatternValues2["Percent25"] = "pct25";
  PresetPatternValues2["Percent30"] = "pct30";
  PresetPatternValues2["Percent40"] = "pct40";
  PresetPatternValues2["Percent50"] = "pct50";
  PresetPatternValues2["Percent60"] = "pct60";
  PresetPatternValues2["Percent70"] = "pct70";
  PresetPatternValues2["Percent75"] = "pct75";
  PresetPatternValues2["Percent80"] = "pct80";
  PresetPatternValues2["Percent90"] = "pct90";
  PresetPatternValues2["Horizontal"] = "horz";
  PresetPatternValues2["Vertical"] = "vert";
  PresetPatternValues2["LightHorizontal"] = "ltHorz";
  PresetPatternValues2["LightVertical"] = "ltVert";
  PresetPatternValues2["DarkHorizontal"] = "dkHorz";
  PresetPatternValues2["DarkVertical"] = "dkVert";
  PresetPatternValues2["NarrowHorizontal"] = "narHorz";
  PresetPatternValues2["NarrowVertical"] = "narVert";
  PresetPatternValues2["DashedHorizontal"] = "dashHorz";
  PresetPatternValues2["DashedVertical"] = "dashVert";
  PresetPatternValues2["Cross"] = "cross";
  PresetPatternValues2["DownwardDiagonal"] = "dnDiag";
  PresetPatternValues2["UpwardDiagonal"] = "upDiag";
  PresetPatternValues2["LightDownwardDiagonal"] = "ltDnDiag";
  PresetPatternValues2["LightUpwardDiagonal"] = "ltUpDiag";
  PresetPatternValues2["DarkDownwardDiagonal"] = "dkDnDiag";
  PresetPatternValues2["DarkUpwardDiagonal"] = "dkUpDiag";
  PresetPatternValues2["WideDownwardDiagonal"] = "wdDnDiag";
  PresetPatternValues2["WideUpwardDiagonal"] = "wdUpDiag";
  PresetPatternValues2["DashedDownwardDiagonal"] = "dashDnDiag";
  PresetPatternValues2["DashedUpwardDiagonal"] = "dashUpDiag";
  PresetPatternValues2["DiagonalCross"] = "diagCross";
  PresetPatternValues2["SmallCheck"] = "smCheck";
  PresetPatternValues2["LargeCheck"] = "lgCheck";
  PresetPatternValues2["SmallGrid"] = "smGrid";
  PresetPatternValues2["LargeGrid"] = "lgGrid";
  PresetPatternValues2["DotGrid"] = "dotGrid";
  PresetPatternValues2["SmallConfetti"] = "smConfetti";
  PresetPatternValues2["LargeConfetti"] = "lgConfetti";
  PresetPatternValues2["HorizontalBrick"] = "horzBrick";
  PresetPatternValues2["DiagonalBrick"] = "diagBrick";
  PresetPatternValues2["SolidDiamond"] = "solidDmnd";
  PresetPatternValues2["OpenDiamond"] = "openDmnd";
  PresetPatternValues2["DottedDiamond"] = "dotDmnd";
  PresetPatternValues2["Plaid"] = "plaid";
  PresetPatternValues2["Sphere"] = "sphere";
  PresetPatternValues2["Weave"] = "weave";
  PresetPatternValues2["Divot"] = "divot";
  PresetPatternValues2["Shingle"] = "shingle";
  PresetPatternValues2["Wave"] = "wave";
  PresetPatternValues2["Trellis"] = "trellis";
  PresetPatternValues2["ZigZag"] = "zigZag";
  return PresetPatternValues2;
})(PresetPatternValues || {});
const PresetPatternValuesArray = [
  "pct5" /* Percent5 */,
  "pct10" /* Percent10 */,
  "pct20" /* Percent20 */,
  "pct25" /* Percent25 */,
  "pct30" /* Percent30 */,
  "pct40" /* Percent40 */,
  "pct50" /* Percent50 */,
  "pct60" /* Percent60 */,
  "pct70" /* Percent70 */,
  "pct75" /* Percent75 */,
  "pct80" /* Percent80 */,
  "pct90" /* Percent90 */,
  "horz" /* Horizontal */,
  "vert" /* Vertical */,
  "ltHorz" /* LightHorizontal */,
  "ltVert" /* LightVertical */,
  "dkHorz" /* DarkHorizontal */,
  "dkVert" /* DarkVertical */,
  "narHorz" /* NarrowHorizontal */,
  "narVert" /* NarrowVertical */,
  "dashHorz" /* DashedHorizontal */,
  "dashVert" /* DashedVertical */,
  "cross" /* Cross */,
  "dnDiag" /* DownwardDiagonal */,
  "upDiag" /* UpwardDiagonal */,
  "ltDnDiag" /* LightDownwardDiagonal */,
  "ltUpDiag" /* LightUpwardDiagonal */,
  "dkDnDiag" /* DarkDownwardDiagonal */,
  "dkUpDiag" /* DarkUpwardDiagonal */,
  "wdDnDiag" /* WideDownwardDiagonal */,
  "wdUpDiag" /* WideUpwardDiagonal */,
  "dashDnDiag" /* DashedDownwardDiagonal */,
  "dashUpDiag" /* DashedUpwardDiagonal */,
  "diagCross" /* DiagonalCross */,
  "smCheck" /* SmallCheck */,
  "lgCheck" /* LargeCheck */,
  "smGrid" /* SmallGrid */,
  "lgGrid" /* LargeGrid */,
  "dotGrid" /* DotGrid */,
  "smConfetti" /* SmallConfetti */,
  "lgConfetti" /* LargeConfetti */,
  "horzBrick" /* HorizontalBrick */,
  "diagBrick" /* DiagonalBrick */,
  "solidDmnd" /* SolidDiamond */,
  "openDmnd" /* OpenDiamond */,
  "dotDmnd" /* DottedDiamond */,
  "plaid" /* Plaid */,
  "sphere" /* Sphere */,
  "weave" /* Weave */,
  "divot" /* Divot */,
  "shingle" /* Shingle */,
  "wave" /* Wave */,
  "trellis" /* Trellis */,
  "zigZag" /* ZigZag */
];
var BlendModeValues = /* @__PURE__ */ ((BlendModeValues2) => {
  BlendModeValues2["Overlay"] = "over";
  BlendModeValues2["Multiply"] = "mult";
  BlendModeValues2["Screen"] = "screen";
  BlendModeValues2["Darken"] = "darken";
  BlendModeValues2["Lighten"] = "lighten";
  return BlendModeValues2;
})(BlendModeValues || {});
const BlendModeValuesArray = [
  "over" /* Overlay */,
  "mult" /* Multiply */,
  "screen" /* Screen */,
  "darken" /* Darken */,
  "lighten" /* Lighten */
];
var EffectContainerValues = /* @__PURE__ */ ((EffectContainerValues2) => {
  EffectContainerValues2["Sibling"] = "sib";
  EffectContainerValues2["Tree"] = "tree";
  return EffectContainerValues2;
})(EffectContainerValues || {});
const EffectContainerValuesArray = [
  "sib" /* Sibling */,
  "tree" /* Tree */
];
var ShapeTypeValues = /* @__PURE__ */ ((ShapeTypeValues2) => {
  ShapeTypeValues2["Line"] = "line";
  ShapeTypeValues2["LineInverse"] = "lineInv";
  ShapeTypeValues2["Triangle"] = "triangle";
  ShapeTypeValues2["RightTriangle"] = "rtTriangle";
  ShapeTypeValues2["Rectangle"] = "rect";
  ShapeTypeValues2["Diamond"] = "diamond";
  ShapeTypeValues2["Parallelogram"] = "parallelogram";
  ShapeTypeValues2["Trapezoid"] = "trapezoid";
  ShapeTypeValues2["NonIsoscelesTrapezoid"] = "nonIsoscelesTrapezoid";
  ShapeTypeValues2["Pentagon"] = "pentagon";
  ShapeTypeValues2["Hexagon"] = "hexagon";
  ShapeTypeValues2["Heptagon"] = "heptagon";
  ShapeTypeValues2["Octagon"] = "octagon";
  ShapeTypeValues2["Decagon"] = "decagon";
  ShapeTypeValues2["Dodecagon"] = "dodecagon";
  ShapeTypeValues2["Star4"] = "star4";
  ShapeTypeValues2["Star5"] = "star5";
  ShapeTypeValues2["Star6"] = "star6";
  ShapeTypeValues2["Star7"] = "star7";
  ShapeTypeValues2["Star8"] = "star8";
  ShapeTypeValues2["Star10"] = "star10";
  ShapeTypeValues2["Star12"] = "star12";
  ShapeTypeValues2["Star16"] = "star16";
  ShapeTypeValues2["Star24"] = "star24";
  ShapeTypeValues2["Star32"] = "star32";
  ShapeTypeValues2["RoundRectangle"] = "roundRect";
  ShapeTypeValues2["Round1Rectangle"] = "round1Rect";
  ShapeTypeValues2["Round2SameRectangle"] = "round2SameRect";
  ShapeTypeValues2["Round2DiagonalRectangle"] = "round2DiagRect";
  ShapeTypeValues2["SnipRoundRectangle"] = "snipRoundRect";
  ShapeTypeValues2["Snip1Rectangle"] = "snip1Rect";
  ShapeTypeValues2["Snip2SameRectangle"] = "snip2SameRect";
  ShapeTypeValues2["Snip2DiagonalRectangle"] = "snip2DiagRect";
  ShapeTypeValues2["Plaque"] = "plaque";
  ShapeTypeValues2["Ellipse"] = "ellipse";
  ShapeTypeValues2["Teardrop"] = "teardrop";
  ShapeTypeValues2["HomePlate"] = "homePlate";
  ShapeTypeValues2["Chevron"] = "chevron";
  ShapeTypeValues2["PieWedge"] = "pieWedge";
  ShapeTypeValues2["Pie"] = "pie";
  ShapeTypeValues2["BlockArc"] = "blockArc";
  ShapeTypeValues2["Donut"] = "donut";
  ShapeTypeValues2["NoSmoking"] = "noSmoking";
  ShapeTypeValues2["RightArrow"] = "rightArrow";
  ShapeTypeValues2["LeftArrow"] = "leftArrow";
  ShapeTypeValues2["UpArrow"] = "upArrow";
  ShapeTypeValues2["DownArrow"] = "downArrow";
  ShapeTypeValues2["StripedRightArrow"] = "stripedRightArrow";
  ShapeTypeValues2["NotchedRightArrow"] = "notchedRightArrow";
  ShapeTypeValues2["BentUpArrow"] = "bentUpArrow";
  ShapeTypeValues2["LeftRightArrow"] = "leftRightArrow";
  ShapeTypeValues2["UpDownArrow"] = "upDownArrow";
  ShapeTypeValues2["LeftUpArrow"] = "leftUpArrow";
  ShapeTypeValues2["LeftRightUpArrow"] = "leftRightUpArrow";
  ShapeTypeValues2["QuadArrow"] = "quadArrow";
  ShapeTypeValues2["LeftArrowCallout"] = "leftArrowCallout";
  ShapeTypeValues2["RightArrowCallout"] = "rightArrowCallout";
  ShapeTypeValues2["UpArrowCallout"] = "upArrowCallout";
  ShapeTypeValues2["DownArrowCallout"] = "downArrowCallout";
  ShapeTypeValues2["LeftRightArrowCallout"] = "leftRightArrowCallout";
  ShapeTypeValues2["UpDownArrowCallout"] = "upDownArrowCallout";
  ShapeTypeValues2["QuadArrowCallout"] = "quadArrowCallout";
  ShapeTypeValues2["BentArrow"] = "bentArrow";
  ShapeTypeValues2["UTurnArrow"] = "uturnArrow";
  ShapeTypeValues2["CircularArrow"] = "circularArrow";
  ShapeTypeValues2["LeftCircularArrow"] = "leftCircularArrow";
  ShapeTypeValues2["LeftRightCircularArrow"] = "leftRightCircularArrow";
  ShapeTypeValues2["CurvedRightArrow"] = "curvedRightArrow";
  ShapeTypeValues2["CurvedLeftArrow"] = "curvedLeftArrow";
  ShapeTypeValues2["CurvedUpArrow"] = "curvedUpArrow";
  ShapeTypeValues2["CurvedDownArrow"] = "curvedDownArrow";
  ShapeTypeValues2["SwooshArrow"] = "swooshArrow";
  ShapeTypeValues2["Cube"] = "cube";
  ShapeTypeValues2["Can"] = "can";
  ShapeTypeValues2["LightningBolt"] = "lightningBolt";
  ShapeTypeValues2["Heart"] = "heart";
  ShapeTypeValues2["Sun"] = "sun";
  ShapeTypeValues2["Moon"] = "moon";
  ShapeTypeValues2["SmileyFace"] = "smileyFace";
  ShapeTypeValues2["IrregularSeal1"] = "irregularSeal1";
  ShapeTypeValues2["IrregularSeal2"] = "irregularSeal2";
  ShapeTypeValues2["FoldedCorner"] = "foldedCorner";
  ShapeTypeValues2["Bevel"] = "bevel";
  ShapeTypeValues2["Frame"] = "frame";
  ShapeTypeValues2["HalfFrame"] = "halfFrame";
  ShapeTypeValues2["Corner"] = "corner";
  ShapeTypeValues2["DiagonalStripe"] = "diagStripe";
  ShapeTypeValues2["Chord"] = "chord";
  ShapeTypeValues2["Arc"] = "arc";
  ShapeTypeValues2["LeftBracket"] = "leftBracket";
  ShapeTypeValues2["RightBracket"] = "rightBracket";
  ShapeTypeValues2["LeftBrace"] = "leftBrace";
  ShapeTypeValues2["RightBrace"] = "rightBrace";
  ShapeTypeValues2["BracketPair"] = "bracketPair";
  ShapeTypeValues2["BracePair"] = "bracePair";
  ShapeTypeValues2["StraightConnector1"] = "straightConnector1";
  ShapeTypeValues2["BentConnector2"] = "bentConnector2";
  ShapeTypeValues2["BentConnector3"] = "bentConnector3";
  ShapeTypeValues2["BentConnector4"] = "bentConnector4";
  ShapeTypeValues2["BentConnector5"] = "bentConnector5";
  ShapeTypeValues2["CurvedConnector2"] = "curvedConnector2";
  ShapeTypeValues2["CurvedConnector3"] = "curvedConnector3";
  ShapeTypeValues2["CurvedConnector4"] = "curvedConnector4";
  ShapeTypeValues2["CurvedConnector5"] = "curvedConnector5";
  ShapeTypeValues2["Callout1"] = "callout1";
  ShapeTypeValues2["Callout2"] = "callout2";
  ShapeTypeValues2["Callout3"] = "callout3";
  ShapeTypeValues2["AccentCallout1"] = "accentCallout1";
  ShapeTypeValues2["AccentCallout2"] = "accentCallout2";
  ShapeTypeValues2["AccentCallout3"] = "accentCallout3";
  ShapeTypeValues2["BorderCallout1"] = "borderCallout1";
  ShapeTypeValues2["BorderCallout2"] = "borderCallout2";
  ShapeTypeValues2["BorderCallout3"] = "borderCallout3";
  ShapeTypeValues2["AccentBorderCallout1"] = "accentBorderCallout1";
  ShapeTypeValues2["AccentBorderCallout2"] = "accentBorderCallout2";
  ShapeTypeValues2["AccentBorderCallout3"] = "accentBorderCallout3";
  ShapeTypeValues2["WedgeRectangleCallout"] = "wedgeRectCallout";
  ShapeTypeValues2["WedgeRoundRectangleCallout"] = "wedgeRoundRectCallout";
  ShapeTypeValues2["WedgeEllipseCallout"] = "wedgeEllipseCallout";
  ShapeTypeValues2["CloudCallout"] = "cloudCallout";
  ShapeTypeValues2["Cloud"] = "cloud";
  ShapeTypeValues2["Ribbon"] = "ribbon";
  ShapeTypeValues2["Ribbon2"] = "ribbon2";
  ShapeTypeValues2["EllipseRibbon"] = "ellipseRibbon";
  ShapeTypeValues2["EllipseRibbon2"] = "ellipseRibbon2";
  ShapeTypeValues2["LeftRightRibbon"] = "leftRightRibbon";
  ShapeTypeValues2["VerticalScroll"] = "verticalScroll";
  ShapeTypeValues2["HorizontalScroll"] = "horizontalScroll";
  ShapeTypeValues2["Wave"] = "wave";
  ShapeTypeValues2["DoubleWave"] = "doubleWave";
  ShapeTypeValues2["Plus"] = "plus";
  ShapeTypeValues2["FlowChartProcess"] = "flowChartProcess";
  ShapeTypeValues2["FlowChartDecision"] = "flowChartDecision";
  ShapeTypeValues2["FlowChartInputOutput"] = "flowChartInputOutput";
  ShapeTypeValues2["FlowChartPredefinedProcess"] = "flowChartPredefinedProcess";
  ShapeTypeValues2["FlowChartInternalStorage"] = "flowChartInternalStorage";
  ShapeTypeValues2["FlowChartDocument"] = "flowChartDocument";
  ShapeTypeValues2["FlowChartMultidocument"] = "flowChartMultidocument";
  ShapeTypeValues2["FlowChartTerminator"] = "flowChartTerminator";
  ShapeTypeValues2["FlowChartPreparation"] = "flowChartPreparation";
  ShapeTypeValues2["FlowChartManualInput"] = "flowChartManualInput";
  ShapeTypeValues2["FlowChartManualOperation"] = "flowChartManualOperation";
  ShapeTypeValues2["FlowChartConnector"] = "flowChartConnector";
  ShapeTypeValues2["FlowChartPunchedCard"] = "flowChartPunchedCard";
  ShapeTypeValues2["FlowChartPunchedTape"] = "flowChartPunchedTape";
  ShapeTypeValues2["FlowChartSummingJunction"] = "flowChartSummingJunction";
  ShapeTypeValues2["FlowChartOr"] = "flowChartOr";
  ShapeTypeValues2["FlowChartCollate"] = "flowChartCollate";
  ShapeTypeValues2["FlowChartSort"] = "flowChartSort";
  ShapeTypeValues2["FlowChartExtract"] = "flowChartExtract";
  ShapeTypeValues2["FlowChartMerge"] = "flowChartMerge";
  ShapeTypeValues2["FlowChartOfflineStorage"] = "flowChartOfflineStorage";
  ShapeTypeValues2["FlowChartOnlineStorage"] = "flowChartOnlineStorage";
  ShapeTypeValues2["FlowChartMagneticTape"] = "flowChartMagneticTape";
  ShapeTypeValues2["FlowChartMagneticDisk"] = "flowChartMagneticDisk";
  ShapeTypeValues2["FlowChartMagneticDrum"] = "flowChartMagneticDrum";
  ShapeTypeValues2["FlowChartDisplay"] = "flowChartDisplay";
  ShapeTypeValues2["FlowChartDelay"] = "flowChartDelay";
  ShapeTypeValues2["FlowChartAlternateProcess"] = "flowChartAlternateProcess";
  ShapeTypeValues2["FlowChartOffpageConnector"] = "flowChartOffpageConnector";
  ShapeTypeValues2["ActionButtonBlank"] = "actionButtonBlank";
  ShapeTypeValues2["ActionButtonHome"] = "actionButtonHome";
  ShapeTypeValues2["ActionButtonHelp"] = "actionButtonHelp";
  ShapeTypeValues2["ActionButtonInformation"] = "actionButtonInformation";
  ShapeTypeValues2["ActionButtonForwardNext"] = "actionButtonForwardNext";
  ShapeTypeValues2["ActionButtonBackPrevious"] = "actionButtonBackPrevious";
  ShapeTypeValues2["ActionButtonEnd"] = "actionButtonEnd";
  ShapeTypeValues2["ActionButtonBeginning"] = "actionButtonBeginning";
  ShapeTypeValues2["ActionButtonReturn"] = "actionButtonReturn";
  ShapeTypeValues2["ActionButtonDocument"] = "actionButtonDocument";
  ShapeTypeValues2["ActionButtonSound"] = "actionButtonSound";
  ShapeTypeValues2["ActionButtonMovie"] = "actionButtonMovie";
  ShapeTypeValues2["Gear6"] = "gear6";
  ShapeTypeValues2["Gear9"] = "gear9";
  ShapeTypeValues2["Funnel"] = "funnel";
  ShapeTypeValues2["MathPlus"] = "mathPlus";
  ShapeTypeValues2["MathMinus"] = "mathMinus";
  ShapeTypeValues2["MathMultiply"] = "mathMultiply";
  ShapeTypeValues2["MathDivide"] = "mathDivide";
  ShapeTypeValues2["MathEqual"] = "mathEqual";
  ShapeTypeValues2["MathNotEqual"] = "mathNotEqual";
  ShapeTypeValues2["CornerTabs"] = "cornerTabs";
  ShapeTypeValues2["SquareTabs"] = "squareTabs";
  ShapeTypeValues2["PlaqueTabs"] = "plaqueTabs";
  ShapeTypeValues2["ChartX"] = "chartX";
  ShapeTypeValues2["ChartStar"] = "chartStar";
  ShapeTypeValues2["ChartPlus"] = "chartPlus";
  return ShapeTypeValues2;
})(ShapeTypeValues || {});
const ShapeTypeValuesArray = [
  "line" /* Line */,
  "lineInv" /* LineInverse */,
  "triangle" /* Triangle */,
  "rtTriangle" /* RightTriangle */,
  "rect" /* Rectangle */,
  "diamond" /* Diamond */,
  "parallelogram" /* Parallelogram */,
  "trapezoid" /* Trapezoid */,
  "nonIsoscelesTrapezoid" /* NonIsoscelesTrapezoid */,
  "pentagon" /* Pentagon */,
  "hexagon" /* Hexagon */,
  "heptagon" /* Heptagon */,
  "octagon" /* Octagon */,
  "decagon" /* Decagon */,
  "dodecagon" /* Dodecagon */,
  "star4" /* Star4 */,
  "star5" /* Star5 */,
  "star6" /* Star6 */,
  "star7" /* Star7 */,
  "star8" /* Star8 */,
  "star10" /* Star10 */,
  "star12" /* Star12 */,
  "star16" /* Star16 */,
  "star24" /* Star24 */,
  "star32" /* Star32 */,
  "roundRect" /* RoundRectangle */,
  "round1Rect" /* Round1Rectangle */,
  "round2SameRect" /* Round2SameRectangle */,
  "round2DiagRect" /* Round2DiagonalRectangle */,
  "snipRoundRect" /* SnipRoundRectangle */,
  "snip1Rect" /* Snip1Rectangle */,
  "snip2SameRect" /* Snip2SameRectangle */,
  "snip2DiagRect" /* Snip2DiagonalRectangle */,
  "plaque" /* Plaque */,
  "ellipse" /* Ellipse */,
  "teardrop" /* Teardrop */,
  "homePlate" /* HomePlate */,
  "chevron" /* Chevron */,
  "pieWedge" /* PieWedge */,
  "pie" /* Pie */,
  "blockArc" /* BlockArc */,
  "donut" /* Donut */,
  "noSmoking" /* NoSmoking */,
  "rightArrow" /* RightArrow */,
  "leftArrow" /* LeftArrow */,
  "upArrow" /* UpArrow */,
  "downArrow" /* DownArrow */,
  "stripedRightArrow" /* StripedRightArrow */,
  "notchedRightArrow" /* NotchedRightArrow */,
  "bentUpArrow" /* BentUpArrow */,
  "leftRightArrow" /* LeftRightArrow */,
  "upDownArrow" /* UpDownArrow */,
  "leftUpArrow" /* LeftUpArrow */,
  "leftRightUpArrow" /* LeftRightUpArrow */,
  "quadArrow" /* QuadArrow */,
  "leftArrowCallout" /* LeftArrowCallout */,
  "rightArrowCallout" /* RightArrowCallout */,
  "upArrowCallout" /* UpArrowCallout */,
  "downArrowCallout" /* DownArrowCallout */,
  "leftRightArrowCallout" /* LeftRightArrowCallout */,
  "upDownArrowCallout" /* UpDownArrowCallout */,
  "quadArrowCallout" /* QuadArrowCallout */,
  "bentArrow" /* BentArrow */,
  "uturnArrow" /* UTurnArrow */,
  "circularArrow" /* CircularArrow */,
  "leftCircularArrow" /* LeftCircularArrow */,
  "leftRightCircularArrow" /* LeftRightCircularArrow */,
  "curvedRightArrow" /* CurvedRightArrow */,
  "curvedLeftArrow" /* CurvedLeftArrow */,
  "curvedUpArrow" /* CurvedUpArrow */,
  "curvedDownArrow" /* CurvedDownArrow */,
  "swooshArrow" /* SwooshArrow */,
  "cube" /* Cube */,
  "can" /* Can */,
  "lightningBolt" /* LightningBolt */,
  "heart" /* Heart */,
  "sun" /* Sun */,
  "moon" /* Moon */,
  "smileyFace" /* SmileyFace */,
  "irregularSeal1" /* IrregularSeal1 */,
  "irregularSeal2" /* IrregularSeal2 */,
  "foldedCorner" /* FoldedCorner */,
  "bevel" /* Bevel */,
  "frame" /* Frame */,
  "halfFrame" /* HalfFrame */,
  "corner" /* Corner */,
  "diagStripe" /* DiagonalStripe */,
  "chord" /* Chord */,
  "arc" /* Arc */,
  "leftBracket" /* LeftBracket */,
  "rightBracket" /* RightBracket */,
  "leftBrace" /* LeftBrace */,
  "rightBrace" /* RightBrace */,
  "bracketPair" /* BracketPair */,
  "bracePair" /* BracePair */,
  "straightConnector1" /* StraightConnector1 */,
  "bentConnector2" /* BentConnector2 */,
  "bentConnector3" /* BentConnector3 */,
  "bentConnector4" /* BentConnector4 */,
  "bentConnector5" /* BentConnector5 */,
  "curvedConnector2" /* CurvedConnector2 */,
  "curvedConnector3" /* CurvedConnector3 */,
  "curvedConnector4" /* CurvedConnector4 */,
  "curvedConnector5" /* CurvedConnector5 */,
  "callout1" /* Callout1 */,
  "callout2" /* Callout2 */,
  "callout3" /* Callout3 */,
  "accentCallout1" /* AccentCallout1 */,
  "accentCallout2" /* AccentCallout2 */,
  "accentCallout3" /* AccentCallout3 */,
  "borderCallout1" /* BorderCallout1 */,
  "borderCallout2" /* BorderCallout2 */,
  "borderCallout3" /* BorderCallout3 */,
  "accentBorderCallout1" /* AccentBorderCallout1 */,
  "accentBorderCallout2" /* AccentBorderCallout2 */,
  "accentBorderCallout3" /* AccentBorderCallout3 */,
  "wedgeRectCallout" /* WedgeRectangleCallout */,
  "wedgeRoundRectCallout" /* WedgeRoundRectangleCallout */,
  "wedgeEllipseCallout" /* WedgeEllipseCallout */,
  "cloudCallout" /* CloudCallout */,
  "cloud" /* Cloud */,
  "ribbon" /* Ribbon */,
  "ribbon2" /* Ribbon2 */,
  "ellipseRibbon" /* EllipseRibbon */,
  "ellipseRibbon2" /* EllipseRibbon2 */,
  "leftRightRibbon" /* LeftRightRibbon */,
  "verticalScroll" /* VerticalScroll */,
  "horizontalScroll" /* HorizontalScroll */,
  "wave" /* Wave */,
  "doubleWave" /* DoubleWave */,
  "plus" /* Plus */,
  "flowChartProcess" /* FlowChartProcess */,
  "flowChartDecision" /* FlowChartDecision */,
  "flowChartInputOutput" /* FlowChartInputOutput */,
  "flowChartPredefinedProcess" /* FlowChartPredefinedProcess */,
  "flowChartInternalStorage" /* FlowChartInternalStorage */,
  "flowChartDocument" /* FlowChartDocument */,
  "flowChartMultidocument" /* FlowChartMultidocument */,
  "flowChartTerminator" /* FlowChartTerminator */,
  "flowChartPreparation" /* FlowChartPreparation */,
  "flowChartManualInput" /* FlowChartManualInput */,
  "flowChartManualOperation" /* FlowChartManualOperation */,
  "flowChartConnector" /* FlowChartConnector */,
  "flowChartPunchedCard" /* FlowChartPunchedCard */,
  "flowChartPunchedTape" /* FlowChartPunchedTape */,
  "flowChartSummingJunction" /* FlowChartSummingJunction */,
  "flowChartOr" /* FlowChartOr */,
  "flowChartCollate" /* FlowChartCollate */,
  "flowChartSort" /* FlowChartSort */,
  "flowChartExtract" /* FlowChartExtract */,
  "flowChartMerge" /* FlowChartMerge */,
  "flowChartOfflineStorage" /* FlowChartOfflineStorage */,
  "flowChartOnlineStorage" /* FlowChartOnlineStorage */,
  "flowChartMagneticTape" /* FlowChartMagneticTape */,
  "flowChartMagneticDisk" /* FlowChartMagneticDisk */,
  "flowChartMagneticDrum" /* FlowChartMagneticDrum */,
  "flowChartDisplay" /* FlowChartDisplay */,
  "flowChartDelay" /* FlowChartDelay */,
  "flowChartAlternateProcess" /* FlowChartAlternateProcess */,
  "flowChartOffpageConnector" /* FlowChartOffpageConnector */,
  "actionButtonBlank" /* ActionButtonBlank */,
  "actionButtonHome" /* ActionButtonHome */,
  "actionButtonHelp" /* ActionButtonHelp */,
  "actionButtonInformation" /* ActionButtonInformation */,
  "actionButtonForwardNext" /* ActionButtonForwardNext */,
  "actionButtonBackPrevious" /* ActionButtonBackPrevious */,
  "actionButtonEnd" /* ActionButtonEnd */,
  "actionButtonBeginning" /* ActionButtonBeginning */,
  "actionButtonReturn" /* ActionButtonReturn */,
  "actionButtonDocument" /* ActionButtonDocument */,
  "actionButtonSound" /* ActionButtonSound */,
  "actionButtonMovie" /* ActionButtonMovie */,
  "gear6" /* Gear6 */,
  "gear9" /* Gear9 */,
  "funnel" /* Funnel */,
  "mathPlus" /* MathPlus */,
  "mathMinus" /* MathMinus */,
  "mathMultiply" /* MathMultiply */,
  "mathDivide" /* MathDivide */,
  "mathEqual" /* MathEqual */,
  "mathNotEqual" /* MathNotEqual */,
  "cornerTabs" /* CornerTabs */,
  "squareTabs" /* SquareTabs */,
  "plaqueTabs" /* PlaqueTabs */,
  "chartX" /* ChartX */,
  "chartStar" /* ChartStar */,
  "chartPlus" /* ChartPlus */
];
var TextShapeValues = /* @__PURE__ */ ((TextShapeValues2) => {
  TextShapeValues2["TextNoShape"] = "textNoShape";
  TextShapeValues2["TextPlain"] = "textPlain";
  TextShapeValues2["TextStop"] = "textStop";
  TextShapeValues2["TextTriangle"] = "textTriangle";
  TextShapeValues2["TextTriangleInverted"] = "textTriangleInverted";
  TextShapeValues2["TextChevron"] = "textChevron";
  TextShapeValues2["TextChevronInverted"] = "textChevronInverted";
  TextShapeValues2["TextRingInside"] = "textRingInside";
  TextShapeValues2["TextRingOutside"] = "textRingOutside";
  TextShapeValues2["TextArchUp"] = "textArchUp";
  TextShapeValues2["TextArchDown"] = "textArchDown";
  TextShapeValues2["TextCircle"] = "textCircle";
  TextShapeValues2["TextButton"] = "textButton";
  TextShapeValues2["TextArchUpPour"] = "textArchUpPour";
  TextShapeValues2["TextArchDownPour"] = "textArchDownPour";
  TextShapeValues2["TextCirclePour"] = "textCirclePour";
  TextShapeValues2["TextButtonPour"] = "textButtonPour";
  TextShapeValues2["TextCurveUp"] = "textCurveUp";
  TextShapeValues2["TextCurveDown"] = "textCurveDown";
  TextShapeValues2["TextCanUp"] = "textCanUp";
  TextShapeValues2["TextCanDown"] = "textCanDown";
  TextShapeValues2["TextWave1"] = "textWave1";
  TextShapeValues2["TextWave2"] = "textWave2";
  TextShapeValues2["TextDoubleWave1"] = "textDoubleWave1";
  TextShapeValues2["TextWave4"] = "textWave4";
  TextShapeValues2["TextInflate"] = "textInflate";
  TextShapeValues2["TextDeflate"] = "textDeflate";
  TextShapeValues2["TextInflateBottom"] = "textInflateBottom";
  TextShapeValues2["TextDeflateBottom"] = "textDeflateBottom";
  TextShapeValues2["TextInflateTop"] = "textInflateTop";
  TextShapeValues2["TextDeflateTop"] = "textDeflateTop";
  TextShapeValues2["TextDeflateInflate"] = "textDeflateInflate";
  TextShapeValues2["TextDeflateInflateDeflate"] = "textDeflateInflateDeflate";
  TextShapeValues2["TextFadeRight"] = "textFadeRight";
  TextShapeValues2["TextFadeLeft"] = "textFadeLeft";
  TextShapeValues2["TextFadeUp"] = "textFadeUp";
  TextShapeValues2["TextFadeDown"] = "textFadeDown";
  TextShapeValues2["TextSlantUp"] = "textSlantUp";
  TextShapeValues2["TextSlantDown"] = "textSlantDown";
  TextShapeValues2["TextCascadeUp"] = "textCascadeUp";
  TextShapeValues2["TextCascadeDown"] = "textCascadeDown";
  return TextShapeValues2;
})(TextShapeValues || {});
const TextShapeValuesArray = [
  "textNoShape" /* TextNoShape */,
  "textPlain" /* TextPlain */,
  "textStop" /* TextStop */,
  "textTriangle" /* TextTriangle */,
  "textTriangleInverted" /* TextTriangleInverted */,
  "textChevron" /* TextChevron */,
  "textChevronInverted" /* TextChevronInverted */,
  "textRingInside" /* TextRingInside */,
  "textRingOutside" /* TextRingOutside */,
  "textArchUp" /* TextArchUp */,
  "textArchDown" /* TextArchDown */,
  "textCircle" /* TextCircle */,
  "textButton" /* TextButton */,
  "textArchUpPour" /* TextArchUpPour */,
  "textArchDownPour" /* TextArchDownPour */,
  "textCirclePour" /* TextCirclePour */,
  "textButtonPour" /* TextButtonPour */,
  "textCurveUp" /* TextCurveUp */,
  "textCurveDown" /* TextCurveDown */,
  "textCanUp" /* TextCanUp */,
  "textCanDown" /* TextCanDown */,
  "textWave1" /* TextWave1 */,
  "textWave2" /* TextWave2 */,
  "textDoubleWave1" /* TextDoubleWave1 */,
  "textWave4" /* TextWave4 */,
  "textInflate" /* TextInflate */,
  "textDeflate" /* TextDeflate */,
  "textInflateBottom" /* TextInflateBottom */,
  "textDeflateBottom" /* TextDeflateBottom */,
  "textInflateTop" /* TextInflateTop */,
  "textDeflateTop" /* TextDeflateTop */,
  "textDeflateInflate" /* TextDeflateInflate */,
  "textDeflateInflateDeflate" /* TextDeflateInflateDeflate */,
  "textFadeRight" /* TextFadeRight */,
  "textFadeLeft" /* TextFadeLeft */,
  "textFadeUp" /* TextFadeUp */,
  "textFadeDown" /* TextFadeDown */,
  "textSlantUp" /* TextSlantUp */,
  "textSlantDown" /* TextSlantDown */,
  "textCascadeUp" /* TextCascadeUp */,
  "textCascadeDown" /* TextCascadeDown */
];
var PathFillModeValues = /* @__PURE__ */ ((PathFillModeValues2) => {
  PathFillModeValues2["None"] = "none";
  PathFillModeValues2["Norm"] = "norm";
  PathFillModeValues2["Lighten"] = "lighten";
  PathFillModeValues2["LightenLess"] = "lightenLess";
  PathFillModeValues2["Darken"] = "darken";
  PathFillModeValues2["DarkenLess"] = "darkenLess";
  return PathFillModeValues2;
})(PathFillModeValues || {});
const PathFillModeValuesArray = [
  "none" /* None */,
  "norm" /* Norm */,
  "lighten" /* Lighten */,
  "lightenLess" /* LightenLess */,
  "darken" /* Darken */,
  "darkenLess" /* DarkenLess */
];
var LineEndValues = /* @__PURE__ */ ((LineEndValues2) => {
  LineEndValues2["None"] = "none";
  LineEndValues2["Triangle"] = "triangle";
  LineEndValues2["Stealth"] = "stealth";
  LineEndValues2["Diamond"] = "diamond";
  LineEndValues2["Oval"] = "oval";
  LineEndValues2["Arrow"] = "arrow";
  return LineEndValues2;
})(LineEndValues || {});
const LineEndValuesArray = [
  "none" /* None */,
  "triangle" /* Triangle */,
  "stealth" /* Stealth */,
  "diamond" /* Diamond */,
  "oval" /* Oval */,
  "arrow" /* Arrow */
];
var LineEndWidthValues = /* @__PURE__ */ ((LineEndWidthValues2) => {
  LineEndWidthValues2["Small"] = "sm";
  LineEndWidthValues2["Medium"] = "med";
  LineEndWidthValues2["Large"] = "lg";
  return LineEndWidthValues2;
})(LineEndWidthValues || {});
const LineEndWidthValuesArray = [
  "sm" /* Small */,
  "med" /* Medium */,
  "lg" /* Large */
];
var LineEndLengthValues = /* @__PURE__ */ ((LineEndLengthValues2) => {
  LineEndLengthValues2["Small"] = "sm";
  LineEndLengthValues2["Medium"] = "med";
  LineEndLengthValues2["Large"] = "lg";
  return LineEndLengthValues2;
})(LineEndLengthValues || {});
const LineEndLengthValuesArray = [
  "sm" /* Small */,
  "med" /* Medium */,
  "lg" /* Large */
];
var PresetLineDashValues = /* @__PURE__ */ ((PresetLineDashValues2) => {
  PresetLineDashValues2["Solid"] = "solid";
  PresetLineDashValues2["Dot"] = "dot";
  PresetLineDashValues2["Dash"] = "dash";
  PresetLineDashValues2["LargeDash"] = "lgDash";
  PresetLineDashValues2["DashDot"] = "dashDot";
  PresetLineDashValues2["LargeDashDot"] = "lgDashDot";
  PresetLineDashValues2["LargeDashDotDot"] = "lgDashDotDot";
  PresetLineDashValues2["SystemDash"] = "sysDash";
  PresetLineDashValues2["SystemDot"] = "sysDot";
  PresetLineDashValues2["SystemDashDot"] = "sysDashDot";
  PresetLineDashValues2["SystemDashDotDot"] = "sysDashDotDot";
  return PresetLineDashValues2;
})(PresetLineDashValues || {});
const PresetLineDashValuesArray = [
  "solid" /* Solid */,
  "dot" /* Dot */,
  "dash" /* Dash */,
  "lgDash" /* LargeDash */,
  "dashDot" /* DashDot */,
  "lgDashDot" /* LargeDashDot */,
  "lgDashDotDot" /* LargeDashDotDot */,
  "sysDash" /* SystemDash */,
  "sysDot" /* SystemDot */,
  "sysDashDot" /* SystemDashDot */,
  "sysDashDotDot" /* SystemDashDotDot */
];
var LineCapValues = /* @__PURE__ */ ((LineCapValues2) => {
  LineCapValues2["Round"] = "rnd";
  LineCapValues2["Square"] = "sq";
  LineCapValues2["Flat"] = "flat";
  return LineCapValues2;
})(LineCapValues || {});
const LineCapValuesArray = [
  "rnd" /* Round */,
  "sq" /* Square */,
  "flat" /* Flat */
];
var PenAlignmentValues = /* @__PURE__ */ ((PenAlignmentValues2) => {
  PenAlignmentValues2["Center"] = "ctr";
  PenAlignmentValues2["Insert"] = "in";
  return PenAlignmentValues2;
})(PenAlignmentValues || {});
const PenAlignmentValuesArray = [
  "ctr" /* Center */,
  "in" /* Insert */
];
var CompoundLineValues = /* @__PURE__ */ ((CompoundLineValues2) => {
  CompoundLineValues2["Single"] = "sng";
  CompoundLineValues2["Double"] = "dbl";
  CompoundLineValues2["ThickThin"] = "thickThin";
  CompoundLineValues2["ThinThick"] = "thinThick";
  CompoundLineValues2["Triple"] = "tri";
  return CompoundLineValues2;
})(CompoundLineValues || {});
const CompoundLineValuesArray = [
  "sng" /* Single */,
  "dbl" /* Double */,
  "thickThin" /* ThickThin */,
  "thinThick" /* ThinThick */,
  "tri" /* Triple */
];
var BooleanStyleValues = /* @__PURE__ */ ((BooleanStyleValues2) => {
  BooleanStyleValues2["On"] = "on";
  BooleanStyleValues2["Off"] = "off";
  BooleanStyleValues2["Default"] = "def";
  return BooleanStyleValues2;
})(BooleanStyleValues || {});
const BooleanStyleValuesArray = [
  "on" /* On */,
  "off" /* Off */,
  "def" /* Default */
];
var TextVerticalOverflowValues = /* @__PURE__ */ ((TextVerticalOverflowValues2) => {
  TextVerticalOverflowValues2["Overflow"] = "overflow";
  TextVerticalOverflowValues2["Ellipsis"] = "ellipsis";
  TextVerticalOverflowValues2["Clip"] = "clip";
  return TextVerticalOverflowValues2;
})(TextVerticalOverflowValues || {});
const TextVerticalOverflowValuesArray = [
  "overflow" /* Overflow */,
  "ellipsis" /* Ellipsis */,
  "clip" /* Clip */
];
var TextHorizontalOverflowValues = /* @__PURE__ */ ((TextHorizontalOverflowValues2) => {
  TextHorizontalOverflowValues2["Overflow"] = "overflow";
  TextHorizontalOverflowValues2["Clip"] = "clip";
  return TextHorizontalOverflowValues2;
})(TextHorizontalOverflowValues || {});
const TextHorizontalOverflowValuesArray = [
  "overflow" /* Overflow */,
  "clip" /* Clip */
];
var TextVerticalValues = /* @__PURE__ */ ((TextVerticalValues2) => {
  TextVerticalValues2["Horizontal"] = "horz";
  TextVerticalValues2["Vertical"] = "vert";
  TextVerticalValues2["Vertical270"] = "vert270";
  TextVerticalValues2["WordArtVertical"] = "wordArtVert";
  TextVerticalValues2["EastAsianVetical"] = "eaVert";
  TextVerticalValues2["MongolianVertical"] = "mongolianVert";
  TextVerticalValues2["WordArtLeftToRight"] = "wordArtVertRtl";
  return TextVerticalValues2;
})(TextVerticalValues || {});
const TextVerticalValuesArray = [
  "horz" /* Horizontal */,
  "vert" /* Vertical */,
  "vert270" /* Vertical270 */,
  "wordArtVert" /* WordArtVertical */,
  "eaVert" /* EastAsianVetical */,
  "mongolianVert" /* MongolianVertical */,
  "wordArtVertRtl" /* WordArtLeftToRight */
];
var TextWrappingValues = /* @__PURE__ */ ((TextWrappingValues2) => {
  TextWrappingValues2["None"] = "none";
  TextWrappingValues2["Square"] = "square";
  return TextWrappingValues2;
})(TextWrappingValues || {});
const TextWrappingValuesArray = [
  "none" /* None */,
  "square" /* Square */
];
var TextAnchoringTypeValues = /* @__PURE__ */ ((TextAnchoringTypeValues2) => {
  TextAnchoringTypeValues2["Top"] = "t";
  TextAnchoringTypeValues2["Center"] = "ctr";
  TextAnchoringTypeValues2["Bottom"] = "b";
  return TextAnchoringTypeValues2;
})(TextAnchoringTypeValues || {});
const TextAnchoringTypeValuesArray = [
  "t" /* Top */,
  "ctr" /* Center */,
  "b" /* Bottom */
];
var TextAutoNumberSchemeValues = /* @__PURE__ */ ((TextAutoNumberSchemeValues2) => {
  TextAutoNumberSchemeValues2["AlphaLowerCharacterParenBoth"] = "alphaLcParenBoth";
  TextAutoNumberSchemeValues2["AlphaUpperCharacterParenBoth"] = "alphaUcParenBoth";
  TextAutoNumberSchemeValues2["AlphaLowerCharacterParenR"] = "alphaLcParenR";
  TextAutoNumberSchemeValues2["AlphaUpperCharacterParenR"] = "alphaUcParenR";
  TextAutoNumberSchemeValues2["AlphaLowerCharacterPeriod"] = "alphaLcPeriod";
  TextAutoNumberSchemeValues2["AlphaUpperCharacterPeriod"] = "alphaUcPeriod";
  TextAutoNumberSchemeValues2["ArabicParenBoth"] = "arabicParenBoth";
  TextAutoNumberSchemeValues2["ArabicParenR"] = "arabicParenR";
  TextAutoNumberSchemeValues2["ArabicPeriod"] = "arabicPeriod";
  TextAutoNumberSchemeValues2["ArabicPlain"] = "arabicPlain";
  TextAutoNumberSchemeValues2["RomanLowerCharacterParenBoth"] = "romanLcParenBoth";
  TextAutoNumberSchemeValues2["RomanUpperCharacterParenBoth"] = "romanUcParenBoth";
  TextAutoNumberSchemeValues2["RomanLowerCharacterParenR"] = "romanLcParenR";
  TextAutoNumberSchemeValues2["RomanUpperCharacterParenR"] = "romanUcParenR";
  TextAutoNumberSchemeValues2["RomanLowerCharacterPeriod"] = "romanLcPeriod";
  TextAutoNumberSchemeValues2["RomanUpperCharacterPeriod"] = "romanUcPeriod";
  TextAutoNumberSchemeValues2["CircleNumberDoubleBytePlain"] = "circleNumDbPlain";
  TextAutoNumberSchemeValues2["CircleNumberWingdingsBlackPlain"] = "circleNumWdBlackPlain";
  TextAutoNumberSchemeValues2["CircleNumberWingdingsWhitePlain"] = "circleNumWdWhitePlain";
  TextAutoNumberSchemeValues2["ArabicDoubleBytePeriod"] = "arabicDbPeriod";
  TextAutoNumberSchemeValues2["ArabicDoubleBytePlain"] = "arabicDbPlain";
  TextAutoNumberSchemeValues2["EastAsianSimplifiedChinesePeriod"] = "ea1ChsPeriod";
  TextAutoNumberSchemeValues2["EastAsianSimplifiedChinesePlain"] = "ea1ChsPlain";
  TextAutoNumberSchemeValues2["EastAsianTraditionalChinesePeriod"] = "ea1ChtPeriod";
  TextAutoNumberSchemeValues2["EastAsianTraditionalChinesePlain"] = "ea1ChtPlain";
  TextAutoNumberSchemeValues2["EastAsianJapaneseDoubleBytePeriod"] = "ea1JpnChsDbPeriod";
  TextAutoNumberSchemeValues2["EastAsianJapaneseKoreanPlain"] = "ea1JpnKorPlain";
  TextAutoNumberSchemeValues2["EastAsianJapaneseKoreanPeriod"] = "ea1JpnKorPeriod";
  TextAutoNumberSchemeValues2["Arabic1Minus"] = "arabic1Minus";
  TextAutoNumberSchemeValues2["Arabic2Minus"] = "arabic2Minus";
  TextAutoNumberSchemeValues2["Hebrew2Minus"] = "hebrew2Minus";
  TextAutoNumberSchemeValues2["ThaiAlphaPeriod"] = "thaiAlphaPeriod";
  TextAutoNumberSchemeValues2["ThaiAlphaParenthesisRight"] = "thaiAlphaParenR";
  TextAutoNumberSchemeValues2["ThaiAlphaParenthesisBoth"] = "thaiAlphaParenBoth";
  TextAutoNumberSchemeValues2["ThaiNumberPeriod"] = "thaiNumPeriod";
  TextAutoNumberSchemeValues2["ThaiNumberParenthesisRight"] = "thaiNumParenR";
  TextAutoNumberSchemeValues2["ThaiNumberParenthesisBoth"] = "thaiNumParenBoth";
  TextAutoNumberSchemeValues2["HindiAlphaPeriod"] = "hindiAlphaPeriod";
  TextAutoNumberSchemeValues2["HindiNumPeriod"] = "hindiNumPeriod";
  TextAutoNumberSchemeValues2["HindiNumberParenthesisRight"] = "hindiNumParenR";
  TextAutoNumberSchemeValues2["HindiAlpha1Period"] = "hindiAlpha1Period";
  return TextAutoNumberSchemeValues2;
})(TextAutoNumberSchemeValues || {});
const TextAutoNumberSchemeValuesArray = [
  "alphaLcParenBoth" /* AlphaLowerCharacterParenBoth */,
  "alphaUcParenBoth" /* AlphaUpperCharacterParenBoth */,
  "alphaLcParenR" /* AlphaLowerCharacterParenR */,
  "alphaUcParenR" /* AlphaUpperCharacterParenR */,
  "alphaLcPeriod" /* AlphaLowerCharacterPeriod */,
  "alphaUcPeriod" /* AlphaUpperCharacterPeriod */,
  "arabicParenBoth" /* ArabicParenBoth */,
  "arabicParenR" /* ArabicParenR */,
  "arabicPeriod" /* ArabicPeriod */,
  "arabicPlain" /* ArabicPlain */,
  "romanLcParenBoth" /* RomanLowerCharacterParenBoth */,
  "romanUcParenBoth" /* RomanUpperCharacterParenBoth */,
  "romanLcParenR" /* RomanLowerCharacterParenR */,
  "romanUcParenR" /* RomanUpperCharacterParenR */,
  "romanLcPeriod" /* RomanLowerCharacterPeriod */,
  "romanUcPeriod" /* RomanUpperCharacterPeriod */,
  "circleNumDbPlain" /* CircleNumberDoubleBytePlain */,
  "circleNumWdBlackPlain" /* CircleNumberWingdingsBlackPlain */,
  "circleNumWdWhitePlain" /* CircleNumberWingdingsWhitePlain */,
  "arabicDbPeriod" /* ArabicDoubleBytePeriod */,
  "arabicDbPlain" /* ArabicDoubleBytePlain */,
  "ea1ChsPeriod" /* EastAsianSimplifiedChinesePeriod */,
  "ea1ChsPlain" /* EastAsianSimplifiedChinesePlain */,
  "ea1ChtPeriod" /* EastAsianTraditionalChinesePeriod */,
  "ea1ChtPlain" /* EastAsianTraditionalChinesePlain */,
  "ea1JpnChsDbPeriod" /* EastAsianJapaneseDoubleBytePeriod */,
  "ea1JpnKorPlain" /* EastAsianJapaneseKoreanPlain */,
  "ea1JpnKorPeriod" /* EastAsianJapaneseKoreanPeriod */,
  "arabic1Minus" /* Arabic1Minus */,
  "arabic2Minus" /* Arabic2Minus */,
  "hebrew2Minus" /* Hebrew2Minus */,
  "thaiAlphaPeriod" /* ThaiAlphaPeriod */,
  "thaiAlphaParenR" /* ThaiAlphaParenthesisRight */,
  "thaiAlphaParenBoth" /* ThaiAlphaParenthesisBoth */,
  "thaiNumPeriod" /* ThaiNumberPeriod */,
  "thaiNumParenR" /* ThaiNumberParenthesisRight */,
  "thaiNumParenBoth" /* ThaiNumberParenthesisBoth */,
  "hindiAlphaPeriod" /* HindiAlphaPeriod */,
  "hindiNumPeriod" /* HindiNumPeriod */,
  "hindiNumParenR" /* HindiNumberParenthesisRight */,
  "hindiAlpha1Period" /* HindiAlpha1Period */
];
var TextUnderlineValues = /* @__PURE__ */ ((TextUnderlineValues2) => {
  TextUnderlineValues2["None"] = "none";
  TextUnderlineValues2["Words"] = "words";
  TextUnderlineValues2["Single"] = "sng";
  TextUnderlineValues2["Double"] = "dbl";
  TextUnderlineValues2["Heavy"] = "heavy";
  TextUnderlineValues2["Dotted"] = "dotted";
  TextUnderlineValues2["HeavyDotted"] = "dottedHeavy";
  TextUnderlineValues2["Dash"] = "dash";
  TextUnderlineValues2["DashHeavy"] = "dashHeavy";
  TextUnderlineValues2["DashLong"] = "dashLong";
  TextUnderlineValues2["DashLongHeavy"] = "dashLongHeavy";
  TextUnderlineValues2["DotDash"] = "dotDash";
  TextUnderlineValues2["DotDashHeavy"] = "dotDashHeavy";
  TextUnderlineValues2["DotDotDash"] = "dotDotDash";
  TextUnderlineValues2["DotDotDashHeavy"] = "dotDotDashHeavy";
  TextUnderlineValues2["Wavy"] = "wavy";
  TextUnderlineValues2["WavyHeavy"] = "wavyHeavy";
  TextUnderlineValues2["WavyDouble"] = "wavyDbl";
  return TextUnderlineValues2;
})(TextUnderlineValues || {});
const TextUnderlineValuesArray = [
  "none" /* None */,
  "words" /* Words */,
  "sng" /* Single */,
  "dbl" /* Double */,
  "heavy" /* Heavy */,
  "dotted" /* Dotted */,
  "dottedHeavy" /* HeavyDotted */,
  "dash" /* Dash */,
  "dashHeavy" /* DashHeavy */,
  "dashLong" /* DashLong */,
  "dashLongHeavy" /* DashLongHeavy */,
  "dotDash" /* DotDash */,
  "dotDashHeavy" /* DotDashHeavy */,
  "dotDotDash" /* DotDotDash */,
  "dotDotDashHeavy" /* DotDotDashHeavy */,
  "wavy" /* Wavy */,
  "wavyHeavy" /* WavyHeavy */,
  "wavyDbl" /* WavyDouble */
];
var TextStrikeValues = /* @__PURE__ */ ((TextStrikeValues2) => {
  TextStrikeValues2["NoStrike"] = "noStrike";
  TextStrikeValues2["SingleStrike"] = "sngStrike";
  TextStrikeValues2["DoubleStrike"] = "dblStrike";
  return TextStrikeValues2;
})(TextStrikeValues || {});
const TextStrikeValuesArray = [
  "noStrike" /* NoStrike */,
  "sngStrike" /* SingleStrike */,
  "dblStrike" /* DoubleStrike */
];
var TextCapsValues = /* @__PURE__ */ ((TextCapsValues2) => {
  TextCapsValues2["None"] = "none";
  TextCapsValues2["Small"] = "small";
  TextCapsValues2["All"] = "all";
  return TextCapsValues2;
})(TextCapsValues || {});
const TextCapsValuesArray = [
  "none" /* None */,
  "small" /* Small */,
  "all" /* All */
];
var TextTabAlignmentValues = /* @__PURE__ */ ((TextTabAlignmentValues2) => {
  TextTabAlignmentValues2["Left"] = "l";
  TextTabAlignmentValues2["Center"] = "ctr";
  TextTabAlignmentValues2["Right"] = "r";
  TextTabAlignmentValues2["Decimal"] = "dec";
  return TextTabAlignmentValues2;
})(TextTabAlignmentValues || {});
const TextTabAlignmentValuesArray = [
  "l" /* Left */,
  "ctr" /* Center */,
  "r" /* Right */,
  "dec" /* Decimal */
];
var TextAlignmentTypeValues = /* @__PURE__ */ ((TextAlignmentTypeValues2) => {
  TextAlignmentTypeValues2["Left"] = "l";
  TextAlignmentTypeValues2["Center"] = "ctr";
  TextAlignmentTypeValues2["Right"] = "r";
  TextAlignmentTypeValues2["Justified"] = "just";
  TextAlignmentTypeValues2["JustifiedLow"] = "justLow";
  TextAlignmentTypeValues2["Distributed"] = "dist";
  TextAlignmentTypeValues2["ThaiDistributed"] = "thaiDist";
  return TextAlignmentTypeValues2;
})(TextAlignmentTypeValues || {});
const TextAlignmentTypeValuesArray = [
  "l" /* Left */,
  "ctr" /* Center */,
  "r" /* Right */,
  "just" /* Justified */,
  "justLow" /* JustifiedLow */,
  "dist" /* Distributed */,
  "thaiDist" /* ThaiDistributed */
];
var TextFontAlignmentValues = /* @__PURE__ */ ((TextFontAlignmentValues2) => {
  TextFontAlignmentValues2["Automatic"] = "auto";
  TextFontAlignmentValues2["Top"] = "t";
  TextFontAlignmentValues2["Center"] = "ctr";
  TextFontAlignmentValues2["Baseline"] = "base";
  TextFontAlignmentValues2["Bottom"] = "b";
  return TextFontAlignmentValues2;
})(TextFontAlignmentValues || {});
const TextFontAlignmentValuesArray = [
  "auto" /* Automatic */,
  "t" /* Top */,
  "ctr" /* Center */,
  "base" /* Baseline */,
  "b" /* Bottom */
];
var PresetColorValues = /* @__PURE__ */ ((PresetColorValues2) => {
  PresetColorValues2["AliceBlue"] = "aliceBlue";
  PresetColorValues2["AntiqueWhite"] = "antiqueWhite";
  PresetColorValues2["Aqua"] = "aqua";
  PresetColorValues2["Aquamarine"] = "aquamarine";
  PresetColorValues2["Azure"] = "azure";
  PresetColorValues2["Beige"] = "beige";
  PresetColorValues2["Bisque"] = "bisque";
  PresetColorValues2["Black"] = "black";
  PresetColorValues2["BlanchedAlmond"] = "blanchedAlmond";
  PresetColorValues2["Blue"] = "blue";
  PresetColorValues2["BlueViolet"] = "blueViolet";
  PresetColorValues2["Brown"] = "brown";
  PresetColorValues2["BurlyWood"] = "burlyWood";
  PresetColorValues2["CadetBlue"] = "cadetBlue";
  PresetColorValues2["Chartreuse"] = "chartreuse";
  PresetColorValues2["Chocolate"] = "chocolate";
  PresetColorValues2["Coral"] = "coral";
  PresetColorValues2["CornflowerBlue"] = "cornflowerBlue";
  PresetColorValues2["Cornsilk"] = "cornsilk";
  PresetColorValues2["Crimson"] = "crimson";
  PresetColorValues2["Cyan"] = "cyan";
  PresetColorValues2["DarkBlue"] = "dkBlue";
  PresetColorValues2["DarkCyan"] = "dkCyan";
  PresetColorValues2["DarkGoldenrod"] = "dkGoldenrod";
  PresetColorValues2["DarkGray"] = "dkGray";
  PresetColorValues2["DarkGreen"] = "dkGreen";
  PresetColorValues2["DarkKhaki"] = "dkKhaki";
  PresetColorValues2["DarkMagenta"] = "dkMagenta";
  PresetColorValues2["DarkOliveGreen"] = "dkOliveGreen";
  PresetColorValues2["DarkOrange"] = "dkOrange";
  PresetColorValues2["DarkOrchid"] = "dkOrchid";
  PresetColorValues2["DarkRed"] = "dkRed";
  PresetColorValues2["DarkSalmon"] = "dkSalmon";
  PresetColorValues2["DarkSeaGreen"] = "dkSeaGreen";
  PresetColorValues2["DarkSlateBlue"] = "dkSlateBlue";
  PresetColorValues2["DarkSlateGray"] = "dkSlateGray";
  PresetColorValues2["DarkTurquoise"] = "dkTurquoise";
  PresetColorValues2["DarkViolet"] = "dkViolet";
  PresetColorValues2["DeepPink"] = "deepPink";
  PresetColorValues2["DeepSkyBlue"] = "deepSkyBlue";
  PresetColorValues2["DimGray"] = "dimGray";
  PresetColorValues2["DodgerBlue"] = "dodgerBlue";
  PresetColorValues2["Firebrick"] = "firebrick";
  PresetColorValues2["FloralWhite"] = "floralWhite";
  PresetColorValues2["ForestGreen"] = "forestGreen";
  PresetColorValues2["Fuchsia"] = "fuchsia";
  PresetColorValues2["Gainsboro"] = "gainsboro";
  PresetColorValues2["GhostWhite"] = "ghostWhite";
  PresetColorValues2["Gold"] = "gold";
  PresetColorValues2["Goldenrod"] = "goldenrod";
  PresetColorValues2["Gray"] = "gray";
  PresetColorValues2["Green"] = "green";
  PresetColorValues2["GreenYellow"] = "greenYellow";
  PresetColorValues2["Honeydew"] = "honeydew";
  PresetColorValues2["HotPink"] = "hotPink";
  PresetColorValues2["IndianRed"] = "indianRed";
  PresetColorValues2["Indigo"] = "indigo";
  PresetColorValues2["Ivory"] = "ivory";
  PresetColorValues2["Khaki"] = "khaki";
  PresetColorValues2["Lavender"] = "lavender";
  PresetColorValues2["LavenderBlush"] = "lavenderBlush";
  PresetColorValues2["LawnGreen"] = "lawnGreen";
  PresetColorValues2["LemonChiffon"] = "lemonChiffon";
  PresetColorValues2["LightBlue"] = "ltBlue";
  PresetColorValues2["LightCoral"] = "ltCoral";
  PresetColorValues2["LightCyan"] = "ltCyan";
  PresetColorValues2["LightGoldenrodYellow"] = "ltGoldenrodYellow";
  PresetColorValues2["LightGray"] = "ltGray";
  PresetColorValues2["LightGreen"] = "ltGreen";
  PresetColorValues2["LightPink"] = "ltPink";
  PresetColorValues2["LightSalmon"] = "ltSalmon";
  PresetColorValues2["LightSeaGreen"] = "ltSeaGreen";
  PresetColorValues2["LightSkyBlue"] = "ltSkyBlue";
  PresetColorValues2["LightSlateGray"] = "ltSlateGray";
  PresetColorValues2["LightSteelBlue"] = "ltSteelBlue";
  PresetColorValues2["LightYellow"] = "ltYellow";
  PresetColorValues2["Lime"] = "lime";
  PresetColorValues2["LimeGreen"] = "limeGreen";
  PresetColorValues2["Linen"] = "linen";
  PresetColorValues2["Magenta"] = "magenta";
  PresetColorValues2["Maroon"] = "maroon";
  PresetColorValues2["MedAquamarine"] = "medAquamarine";
  PresetColorValues2["MediumBlue"] = "medBlue";
  PresetColorValues2["MediumOrchid"] = "medOrchid";
  PresetColorValues2["MediumPurple"] = "medPurple";
  PresetColorValues2["MediumSeaGreen"] = "medSeaGreen";
  PresetColorValues2["MediumSlateBlue"] = "medSlateBlue";
  PresetColorValues2["MediumSpringGreen"] = "medSpringGreen";
  PresetColorValues2["MediumTurquoise"] = "medTurquoise";
  PresetColorValues2["MediumVioletRed"] = "medVioletRed";
  PresetColorValues2["MidnightBlue"] = "midnightBlue";
  PresetColorValues2["MintCream"] = "mintCream";
  PresetColorValues2["MistyRose"] = "mistyRose";
  PresetColorValues2["Moccasin"] = "moccasin";
  PresetColorValues2["NavajoWhite"] = "navajoWhite";
  PresetColorValues2["Navy"] = "navy";
  PresetColorValues2["OldLace"] = "oldLace";
  PresetColorValues2["Olive"] = "olive";
  PresetColorValues2["OliveDrab"] = "oliveDrab";
  PresetColorValues2["Orange"] = "orange";
  PresetColorValues2["OrangeRed"] = "orangeRed";
  PresetColorValues2["Orchid"] = "orchid";
  PresetColorValues2["PaleGoldenrod"] = "paleGoldenrod";
  PresetColorValues2["PaleGreen"] = "paleGreen";
  PresetColorValues2["PaleTurquoise"] = "paleTurquoise";
  PresetColorValues2["PaleVioletRed"] = "paleVioletRed";
  PresetColorValues2["PapayaWhip"] = "papayaWhip";
  PresetColorValues2["PeachPuff"] = "peachPuff";
  PresetColorValues2["Peru"] = "peru";
  PresetColorValues2["Pink"] = "pink";
  PresetColorValues2["Plum"] = "plum";
  PresetColorValues2["PowderBlue"] = "powderBlue";
  PresetColorValues2["Purple"] = "purple";
  PresetColorValues2["Red"] = "red";
  PresetColorValues2["RosyBrown"] = "rosyBrown";
  PresetColorValues2["RoyalBlue"] = "royalBlue";
  PresetColorValues2["SaddleBrown"] = "saddleBrown";
  PresetColorValues2["Salmon"] = "salmon";
  PresetColorValues2["SandyBrown"] = "sandyBrown";
  PresetColorValues2["SeaGreen"] = "seaGreen";
  PresetColorValues2["SeaShell"] = "seaShell";
  PresetColorValues2["Sienna"] = "sienna";
  PresetColorValues2["Silver"] = "silver";
  PresetColorValues2["SkyBlue"] = "skyBlue";
  PresetColorValues2["SlateBlue"] = "slateBlue";
  PresetColorValues2["SlateGray"] = "slateGray";
  PresetColorValues2["Snow"] = "snow";
  PresetColorValues2["SpringGreen"] = "springGreen";
  PresetColorValues2["SteelBlue"] = "steelBlue";
  PresetColorValues2["Tan"] = "tan";
  PresetColorValues2["Teal"] = "teal";
  PresetColorValues2["Thistle"] = "thistle";
  PresetColorValues2["Tomato"] = "tomato";
  PresetColorValues2["Turquoise"] = "turquoise";
  PresetColorValues2["Violet"] = "violet";
  PresetColorValues2["Wheat"] = "wheat";
  PresetColorValues2["White"] = "white";
  PresetColorValues2["WhiteSmoke"] = "whiteSmoke";
  PresetColorValues2["Yellow"] = "yellow";
  PresetColorValues2["YellowGreen"] = "yellowGreen";
  PresetColorValues2["DarkBlue2010"] = "darkBlue";
  PresetColorValues2["DarkCyan2010"] = "darkCyan";
  PresetColorValues2["DarkGoldenrod2010"] = "darkGoldenrod";
  PresetColorValues2["DarkGray2010"] = "darkGray";
  PresetColorValues2["DarkGrey2010"] = "darkGrey";
  PresetColorValues2["DarkGreen2010"] = "darkGreen";
  PresetColorValues2["DarkKhaki2010"] = "darkKhaki";
  PresetColorValues2["DarkMagenta2010"] = "darkMagenta";
  PresetColorValues2["DarkOliveGreen2010"] = "darkOliveGreen";
  PresetColorValues2["DarkOrange2010"] = "darkOrange";
  PresetColorValues2["DarkOrchid2010"] = "darkOrchid";
  PresetColorValues2["DarkRed2010"] = "darkRed";
  PresetColorValues2["DarkSalmon2010"] = "darkSalmon";
  PresetColorValues2["DarkSeaGreen2010"] = "darkSeaGreen";
  PresetColorValues2["DarkSlateBlue2010"] = "darkSlateBlue";
  PresetColorValues2["DarkSlateGray2010"] = "darkSlateGray";
  PresetColorValues2["DarkSlateGrey2010"] = "darkSlateGrey";
  PresetColorValues2["DarkTurquoise2010"] = "darkTurquoise";
  PresetColorValues2["DarkViolet2010"] = "darkViolet";
  PresetColorValues2["LightBlue2010"] = "lightBlue";
  PresetColorValues2["LightCoral2010"] = "lightCoral";
  PresetColorValues2["LightCyan2010"] = "lightCyan";
  PresetColorValues2["LightGoldenrodYellow2010"] = "lightGoldenrodYellow";
  PresetColorValues2["LightGray2010"] = "lightGray";
  PresetColorValues2["LightGrey2010"] = "lightGrey";
  PresetColorValues2["LightGreen2010"] = "lightGreen";
  PresetColorValues2["LightPink2010"] = "lightPink";
  PresetColorValues2["LightSalmon2010"] = "lightSalmon";
  PresetColorValues2["LightSeaGreen2010"] = "lightSeaGreen";
  PresetColorValues2["LightSkyBlue2010"] = "lightSkyBlue";
  PresetColorValues2["LightSlateGray2010"] = "lightSlateGray";
  PresetColorValues2["LightSlateGrey2010"] = "lightSlateGrey";
  PresetColorValues2["LightSteelBlue2010"] = "lightSteelBlue";
  PresetColorValues2["LightYellow2010"] = "lightYellow";
  PresetColorValues2["MediumAquamarine2010"] = "mediumAquamarine";
  PresetColorValues2["MediumBlue2010"] = "mediumBlue";
  PresetColorValues2["MediumOrchid2010"] = "mediumOrchid";
  PresetColorValues2["MediumPurple2010"] = "mediumPurple";
  PresetColorValues2["MediumSeaGreen2010"] = "mediumSeaGreen";
  PresetColorValues2["MediumSlateBlue2010"] = "mediumSlateBlue";
  PresetColorValues2["MediumSpringGreen2010"] = "mediumSpringGreen";
  PresetColorValues2["MediumTurquoise2010"] = "mediumTurquoise";
  PresetColorValues2["MediumVioletRed2010"] = "mediumVioletRed";
  PresetColorValues2["DarkGrey"] = "dkGrey";
  PresetColorValues2["DimGrey"] = "dimGrey";
  PresetColorValues2["DarkSlateGrey"] = "dkSlateGrey";
  PresetColorValues2["Grey"] = "grey";
  PresetColorValues2["LightGrey"] = "ltGrey";
  PresetColorValues2["LightSlateGrey"] = "ltSlateGrey";
  PresetColorValues2["SlateGrey"] = "slateGrey";
  return PresetColorValues2;
})(PresetColorValues || {});
const PresetColorValuesArray = [
  "aliceBlue" /* AliceBlue */,
  "antiqueWhite" /* AntiqueWhite */,
  "aqua" /* Aqua */,
  "aquamarine" /* Aquamarine */,
  "azure" /* Azure */,
  "beige" /* Beige */,
  "bisque" /* Bisque */,
  "black" /* Black */,
  "blanchedAlmond" /* BlanchedAlmond */,
  "blue" /* Blue */,
  "blueViolet" /* BlueViolet */,
  "brown" /* Brown */,
  "burlyWood" /* BurlyWood */,
  "cadetBlue" /* CadetBlue */,
  "chartreuse" /* Chartreuse */,
  "chocolate" /* Chocolate */,
  "coral" /* Coral */,
  "cornflowerBlue" /* CornflowerBlue */,
  "cornsilk" /* Cornsilk */,
  "crimson" /* Crimson */,
  "cyan" /* Cyan */,
  "dkBlue" /* DarkBlue */,
  "dkCyan" /* DarkCyan */,
  "dkGoldenrod" /* DarkGoldenrod */,
  "dkGray" /* DarkGray */,
  "dkGreen" /* DarkGreen */,
  "dkKhaki" /* DarkKhaki */,
  "dkMagenta" /* DarkMagenta */,
  "dkOliveGreen" /* DarkOliveGreen */,
  "dkOrange" /* DarkOrange */,
  "dkOrchid" /* DarkOrchid */,
  "dkRed" /* DarkRed */,
  "dkSalmon" /* DarkSalmon */,
  "dkSeaGreen" /* DarkSeaGreen */,
  "dkSlateBlue" /* DarkSlateBlue */,
  "dkSlateGray" /* DarkSlateGray */,
  "dkTurquoise" /* DarkTurquoise */,
  "dkViolet" /* DarkViolet */,
  "deepPink" /* DeepPink */,
  "deepSkyBlue" /* DeepSkyBlue */,
  "dimGray" /* DimGray */,
  "dodgerBlue" /* DodgerBlue */,
  "firebrick" /* Firebrick */,
  "floralWhite" /* FloralWhite */,
  "forestGreen" /* ForestGreen */,
  "fuchsia" /* Fuchsia */,
  "gainsboro" /* Gainsboro */,
  "ghostWhite" /* GhostWhite */,
  "gold" /* Gold */,
  "goldenrod" /* Goldenrod */,
  "gray" /* Gray */,
  "green" /* Green */,
  "greenYellow" /* GreenYellow */,
  "honeydew" /* Honeydew */,
  "hotPink" /* HotPink */,
  "indianRed" /* IndianRed */,
  "indigo" /* Indigo */,
  "ivory" /* Ivory */,
  "khaki" /* Khaki */,
  "lavender" /* Lavender */,
  "lavenderBlush" /* LavenderBlush */,
  "lawnGreen" /* LawnGreen */,
  "lemonChiffon" /* LemonChiffon */,
  "ltBlue" /* LightBlue */,
  "ltCoral" /* LightCoral */,
  "ltCyan" /* LightCyan */,
  "ltGoldenrodYellow" /* LightGoldenrodYellow */,
  "ltGray" /* LightGray */,
  "ltGreen" /* LightGreen */,
  "ltPink" /* LightPink */,
  "ltSalmon" /* LightSalmon */,
  "ltSeaGreen" /* LightSeaGreen */,
  "ltSkyBlue" /* LightSkyBlue */,
  "ltSlateGray" /* LightSlateGray */,
  "ltSteelBlue" /* LightSteelBlue */,
  "ltYellow" /* LightYellow */,
  "lime" /* Lime */,
  "limeGreen" /* LimeGreen */,
  "linen" /* Linen */,
  "magenta" /* Magenta */,
  "maroon" /* Maroon */,
  "medAquamarine" /* MedAquamarine */,
  "medBlue" /* MediumBlue */,
  "medOrchid" /* MediumOrchid */,
  "medPurple" /* MediumPurple */,
  "medSeaGreen" /* MediumSeaGreen */,
  "medSlateBlue" /* MediumSlateBlue */,
  "medSpringGreen" /* MediumSpringGreen */,
  "medTurquoise" /* MediumTurquoise */,
  "medVioletRed" /* MediumVioletRed */,
  "midnightBlue" /* MidnightBlue */,
  "mintCream" /* MintCream */,
  "mistyRose" /* MistyRose */,
  "moccasin" /* Moccasin */,
  "navajoWhite" /* NavajoWhite */,
  "navy" /* Navy */,
  "oldLace" /* OldLace */,
  "olive" /* Olive */,
  "oliveDrab" /* OliveDrab */,
  "orange" /* Orange */,
  "orangeRed" /* OrangeRed */,
  "orchid" /* Orchid */,
  "paleGoldenrod" /* PaleGoldenrod */,
  "paleGreen" /* PaleGreen */,
  "paleTurquoise" /* PaleTurquoise */,
  "paleVioletRed" /* PaleVioletRed */,
  "papayaWhip" /* PapayaWhip */,
  "peachPuff" /* PeachPuff */,
  "peru" /* Peru */,
  "pink" /* Pink */,
  "plum" /* Plum */,
  "powderBlue" /* PowderBlue */,
  "purple" /* Purple */,
  "red" /* Red */,
  "rosyBrown" /* RosyBrown */,
  "royalBlue" /* RoyalBlue */,
  "saddleBrown" /* SaddleBrown */,
  "salmon" /* Salmon */,
  "sandyBrown" /* SandyBrown */,
  "seaGreen" /* SeaGreen */,
  "seaShell" /* SeaShell */,
  "sienna" /* Sienna */,
  "silver" /* Silver */,
  "skyBlue" /* SkyBlue */,
  "slateBlue" /* SlateBlue */,
  "slateGray" /* SlateGray */,
  "snow" /* Snow */,
  "springGreen" /* SpringGreen */,
  "steelBlue" /* SteelBlue */,
  "tan" /* Tan */,
  "teal" /* Teal */,
  "thistle" /* Thistle */,
  "tomato" /* Tomato */,
  "turquoise" /* Turquoise */,
  "violet" /* Violet */,
  "wheat" /* Wheat */,
  "white" /* White */,
  "whiteSmoke" /* WhiteSmoke */,
  "yellow" /* Yellow */,
  "yellowGreen" /* YellowGreen */,
  "darkBlue" /* DarkBlue2010 */,
  "darkCyan" /* DarkCyan2010 */,
  "darkGoldenrod" /* DarkGoldenrod2010 */,
  "darkGray" /* DarkGray2010 */,
  "darkGrey" /* DarkGrey2010 */,
  "darkGreen" /* DarkGreen2010 */,
  "darkKhaki" /* DarkKhaki2010 */,
  "darkMagenta" /* DarkMagenta2010 */,
  "darkOliveGreen" /* DarkOliveGreen2010 */,
  "darkOrange" /* DarkOrange2010 */,
  "darkOrchid" /* DarkOrchid2010 */,
  "darkRed" /* DarkRed2010 */,
  "darkSalmon" /* DarkSalmon2010 */,
  "darkSeaGreen" /* DarkSeaGreen2010 */,
  "darkSlateBlue" /* DarkSlateBlue2010 */,
  "darkSlateGray" /* DarkSlateGray2010 */,
  "darkSlateGrey" /* DarkSlateGrey2010 */,
  "darkTurquoise" /* DarkTurquoise2010 */,
  "darkViolet" /* DarkViolet2010 */,
  "lightBlue" /* LightBlue2010 */,
  "lightCoral" /* LightCoral2010 */,
  "lightCyan" /* LightCyan2010 */,
  "lightGoldenrodYellow" /* LightGoldenrodYellow2010 */,
  "lightGray" /* LightGray2010 */,
  "lightGrey" /* LightGrey2010 */,
  "lightGreen" /* LightGreen2010 */,
  "lightPink" /* LightPink2010 */,
  "lightSalmon" /* LightSalmon2010 */,
  "lightSeaGreen" /* LightSeaGreen2010 */,
  "lightSkyBlue" /* LightSkyBlue2010 */,
  "lightSlateGray" /* LightSlateGray2010 */,
  "lightSlateGrey" /* LightSlateGrey2010 */,
  "lightSteelBlue" /* LightSteelBlue2010 */,
  "lightYellow" /* LightYellow2010 */,
  "mediumAquamarine" /* MediumAquamarine2010 */,
  "mediumBlue" /* MediumBlue2010 */,
  "mediumOrchid" /* MediumOrchid2010 */,
  "mediumPurple" /* MediumPurple2010 */,
  "mediumSeaGreen" /* MediumSeaGreen2010 */,
  "mediumSlateBlue" /* MediumSlateBlue2010 */,
  "mediumSpringGreen" /* MediumSpringGreen2010 */,
  "mediumTurquoise" /* MediumTurquoise2010 */,
  "mediumVioletRed" /* MediumVioletRed2010 */,
  "dkGrey" /* DarkGrey */,
  "dimGrey" /* DimGrey */,
  "dkSlateGrey" /* DarkSlateGrey */,
  "grey" /* Grey */,
  "ltGrey" /* LightGrey */,
  "ltSlateGrey" /* LightSlateGrey */,
  "slateGrey" /* SlateGrey */
];
class BlipExtension extends OxmlCompositeElement {
  static _Q = "a:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns A14ImageProperties. */
  get imageProperties() {
    return this._f(A14ImageProperties);
  }
  /** Returns A14UseLocalDpi. */
  get useLocalDpi() {
    return this._f(A14UseLocalDpi);
  }
  /** Returns Wp15WebVideoProperty. */
  get webVideoProperty() {
    return this._f(Wp15WebVideoProperty);
  }
  /** Returns AsvgSVGBlip. */
  get sVGBlip() {
    return this._f(AsvgSVGBlip);
  }
  /** Returns A1611PictureAttributionSourceURL. */
  get pictureAttributionSourceURL() {
    return this._f(A1611PictureAttributionSourceURL);
  }
  /** Returns WoeOEmbed. */
  get oEmbed() {
    return this._f(WoeOEmbed);
  }
  /** Returns AoeOEmbedShared. */
  get oEmbedShared() {
    return this._f(AoeOEmbedShared);
  }
}
class BlipExtensionList extends OxmlCompositeElement {
  static _Q = "a:extLst";
}
class NonVisualPicturePropertiesExtension extends OxmlCompositeElement {
  static _Q = "a:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns A14CameraTool. */
  get cameraTool() {
    return this._f(A14CameraTool);
  }
  /** Returns A15SignatureLine. */
  get signatureLine() {
    return this._f(A15SignatureLine);
  }
  /** Returns A15ObjectProperties. */
  get objectProperties() {
    return this._f(A15ObjectProperties);
  }
  /** Returns AlfLiveFeedProperties. */
  get liveFeedProperties() {
    return this._f(AlfLiveFeedProperties);
  }
  /** Returns AifImageFormula. */
  get imageFormula() {
    return this._f(AifImageFormula);
  }
}
class NonVisualPicturePropertiesExtensionList extends OxmlCompositeElement {
  static _Q = "a:extLst";
}
class PictureLocks extends OxmlCompositeElement {
  static _Q = "a:picLocks";
  static _A = [":noGrp", ":noSelect", ":noRot", ":noChangeAspect", ":noMove", ":noResize", ":noEditPoints", ":noAdjustHandles", ":noChangeArrowheads", ":noChangeShapeType", ":noCrop"];
  /** Disallow Shape Grouping. Serialized as `:noGrp` */
  get noGrouping() {
    return this._g(":noGrp");
  }
  set noGrouping(v) {
    this._s(":noGrp", v);
  }
  /** Disallow Shape Selection. Serialized as `:noSelect` */
  get noSelection() {
    return this._g(":noSelect");
  }
  set noSelection(v) {
    this._s(":noSelect", v);
  }
  /** Disallow Shape Rotation. Serialized as `:noRot` */
  get noRotation() {
    return this._g(":noRot");
  }
  set noRotation(v) {
    this._s(":noRot", v);
  }
  /** Disallow Aspect Ratio Change. Serialized as `:noChangeAspect` */
  get noChangeAspect() {
    return this._g(":noChangeAspect");
  }
  set noChangeAspect(v) {
    this._s(":noChangeAspect", v);
  }
  /** Disallow Shape Movement. Serialized as `:noMove` */
  get noMove() {
    return this._g(":noMove");
  }
  set noMove(v) {
    this._s(":noMove", v);
  }
  /** Disallow Shape Resize. Serialized as `:noResize` */
  get noResize() {
    return this._g(":noResize");
  }
  set noResize(v) {
    this._s(":noResize", v);
  }
  /** Disallow Shape Point Editing. Serialized as `:noEditPoints` */
  get noEditPoints() {
    return this._g(":noEditPoints");
  }
  set noEditPoints(v) {
    this._s(":noEditPoints", v);
  }
  /** Disallow Showing Adjust Handles. Serialized as `:noAdjustHandles` */
  get noAdjustHandles() {
    return this._g(":noAdjustHandles");
  }
  set noAdjustHandles(v) {
    this._s(":noAdjustHandles", v);
  }
  /** Disallow Arrowhead Changes. Serialized as `:noChangeArrowheads` */
  get noChangeArrowheads() {
    return this._g(":noChangeArrowheads");
  }
  set noChangeArrowheads(v) {
    this._s(":noChangeArrowheads", v);
  }
  /** Disallow Shape Type Change. Serialized as `:noChangeShapeType` */
  get noChangeShapeType() {
    return this._g(":noChangeShapeType");
  }
  set noChangeShapeType(v) {
    this._s(":noChangeShapeType", v);
  }
  /** Disallow Crop Changes. Serialized as `:noCrop` */
  get noCrop() {
    return this._g(":noCrop");
  }
  set noCrop(v) {
    this._s(":noCrop", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class NonVisualDrawingPropertiesExtension extends OxmlCompositeElement {
  static _Q = "a:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns A14CompatExtension. */
  get compatExtension() {
    return this._f(A14CompatExtension);
  }
  /** Returns A15BackgroundProperties. */
  get backgroundProperties() {
    return this._f(A15BackgroundProperties);
  }
  /** Returns A16CreationId. */
  get creationId() {
    return this._f(A16CreationId);
  }
  /** Returns A16PredecessorDrawingElementReference. */
  get predecessorDrawingElementReference() {
    return this._f(A16PredecessorDrawingElementReference);
  }
  /** Returns AdecDecorative. */
  get decorative() {
    return this._f(AdecDecorative);
  }
  /** Returns AclshClassificationOutcome. */
  get classificationOutcome() {
    return this._f(AclshClassificationOutcome);
  }
  /** Returns AslScriptLink. */
  get scriptLink() {
    return this._f(AslScriptLink);
  }
}
class LinePropertiesExtensionList extends OxmlCompositeElement {
  static _Q = "a:extLst";
}
class LineEndPropertiesType extends OxmlLeafElement {
  static _A = [":type", ":w", ":len"];
  /** Line Head/End Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Width of Head/End. Serialized as `:w` */
  get width() {
    return this._g(":w");
  }
  set width(v) {
    this._s(":w", v);
  }
  /** Length of Head/End. Serialized as `:len` */
  get length() {
    return this._g(":len");
  }
  set length(v) {
    this._s(":len", v);
  }
}
class TailEnd extends LineEndPropertiesType {
  static _Q = "a:tailEnd";
}
class HeadEnd extends LineEndPropertiesType {
  static _Q = "a:headEnd";
}
class LinePropertiesExtension extends OxmlCompositeElement {
  static _Q = "a:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns AskLineSketchStyleProperties. */
  get lineSketchStyleProperties() {
    return this._f(AskLineSketchStyleProperties);
  }
}
class HyperlinkExtensionList extends OxmlCompositeElement {
  static _Q = "a:extLst";
}
class HyperlinkExtension extends OxmlCompositeElement {
  static _Q = "a:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns AhypHyperlinkColor. */
  get hyperlinkColor() {
    return this._f(AhypHyperlinkColor);
  }
}
class PtExtension extends OxmlCompositeElement {
  static _Q = "a:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns Dgm14NonVisualDrawingProperties. */
  get nonVisualDrawingProperties() {
    return this._f(Dgm14NonVisualDrawingProperties);
  }
}
class DataModelExtension extends OxmlCompositeElement {
  static _Q = "a:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns DspDataModelExtensionBlock. */
  get dataModelExtensionBlock() {
    return this._f(DspDataModelExtensionBlock);
  }
  /** Returns Dgm14RecolorImages. */
  get recolorImages() {
    return this._f(Dgm14RecolorImages);
  }
}
class ConnectorLockingExtensionList extends OxmlCompositeElement {
  static _Q = "a:extLst";
}
class NonVisualDrawingPropertiesExtensionList extends OxmlCompositeElement {
  static _Q = "a:extLst";
}
class RightToLeft extends OxmlLeafElement {
  static _Q = "a:rtl";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class HyperlinkType extends OxmlCompositeElement {
  static _A = ["r:id", ":invalidUrl", ":action", ":tgtFrame", ":tooltip", ":history", ":highlightClick", ":endSnd"];
  /** relationship identifier to find target URI. Serialized as `r:id` */
  get id() {
    return this._g("r:id");
  }
  set id(v) {
    this._s("r:id", v);
  }
  /** In case the url is invalid so we can't create a relationship, we'll save it here, r:id will point to a NULL one. Serialized as `:invalidUrl` */
  get invalidUrl() {
    return this._g(":invalidUrl");
  }
  set invalidUrl(v) {
    this._s(":invalidUrl", v);
  }
  /** Action to take, it may still need r:id to specify an action target. Serialized as `:action` */
  get action() {
    return this._g(":action");
  }
  set action(v) {
    this._s(":action", v);
  }
  /** target frame for navigating to the URI. Serialized as `:tgtFrame` */
  get targetFrame() {
    return this._g(":tgtFrame");
  }
  set targetFrame(v) {
    this._s(":tgtFrame", v);
  }
  /** tooltip for display. Serialized as `:tooltip` */
  get tooltip() {
    return this._g(":tooltip");
  }
  set tooltip(v) {
    this._s(":tooltip", v);
  }
  /** whether to add this URI to the history when navigating to it. Serialized as `:history` */
  get history() {
    return this._g(":history");
  }
  set history(v) {
    this._s(":history", v);
  }
  /** Whether to highlight it when click on a shape. Serialized as `:highlightClick` */
  get highlightClick() {
    return this._g(":highlightClick");
  }
  set highlightClick(v) {
    this._s(":highlightClick", v);
  }
  /** Whether to stop previous sound when click on it. Serialized as `:endSnd` */
  get endSound() {
    return this._g(":endSnd");
  }
  set endSound(v) {
    this._s(":endSnd", v);
  }
  /** Sound to play.. */
  get hyperlinkSound() {
    return this._f(HyperlinkSound);
  }
  /** Future extensions.. */
  get hyperlinkExtensionList() {
    return this._f(HyperlinkExtensionList);
  }
}
class HyperlinkOnHover extends HyperlinkType {
  static _Q = "a:hlinkHover";
}
class HyperlinkOnMouseOver extends HyperlinkType {
  static _Q = "a:hlinkMouseOver";
}
class HyperlinkOnClick extends HyperlinkType {
  static _Q = "a:hlinkClick";
}
class OfficeStyleSheetExtensionList extends OxmlCompositeElement {
  static _Q = "a:extLst";
}
class CustomColorList extends OxmlCompositeElement {
  static _Q = "a:custClrLst";
}
class ExtraColorSchemeList extends OxmlCompositeElement {
  static _Q = "a:extraClrSchemeLst";
}
class ObjectDefaults extends OxmlCompositeElement {
  static _Q = "a:objectDefaults";
  /** Shape Default. */
  get shapeDefault() {
    return this._f(ShapeDefault);
  }
  /** Line Default. */
  get lineDefault() {
    return this._f(LineDefault);
  }
  /** Text Default. */
  get textDefault() {
    return this._f(TextDefault);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class NonVisualGroupDrawingShapePropsExtensionList extends OxmlCompositeElement {
  static _Q = "a:extLst";
}
class GroupShapeLocks extends OxmlCompositeElement {
  static _Q = "a:grpSpLocks";
  static _A = [":noGrp", ":noUngrp", ":noSelect", ":noRot", ":noChangeAspect", ":noMove", ":noResize"];
  /** Disallow Shape Grouping. Serialized as `:noGrp` */
  get noGrouping() {
    return this._g(":noGrp");
  }
  set noGrouping(v) {
    this._s(":noGrp", v);
  }
  /** Disallow Shape Ungrouping. Serialized as `:noUngrp` */
  get noUngrouping() {
    return this._g(":noUngrp");
  }
  set noUngrouping(v) {
    this._s(":noUngrp", v);
  }
  /** Disallow Shape Selection. Serialized as `:noSelect` */
  get noSelection() {
    return this._g(":noSelect");
  }
  set noSelection(v) {
    this._s(":noSelect", v);
  }
  /** Disallow Shape Rotation. Serialized as `:noRot` */
  get noRotation() {
    return this._g(":noRot");
  }
  set noRotation(v) {
    this._s(":noRot", v);
  }
  /** Disallow Aspect Ratio Change. Serialized as `:noChangeAspect` */
  get noChangeAspect() {
    return this._g(":noChangeAspect");
  }
  set noChangeAspect(v) {
    this._s(":noChangeAspect", v);
  }
  /** Disallow Moving Shape. Serialized as `:noMove` */
  get noMove() {
    return this._g(":noMove");
  }
  set noMove(v) {
    this._s(":noMove", v);
  }
  /** Disallow Shape Resizing. Serialized as `:noResize` */
  get noResize() {
    return this._g(":noResize");
  }
  set noResize(v) {
    this._s(":noResize", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ConnectorLockingExtension extends OxmlCompositeElement {
  static _Q = "a:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns Graphic. */
  get graphic() {
    return this._f(Graphic);
  }
}
class OfficeStyleSheetExtension extends OxmlCompositeElement {
  static _Q = "a:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns Thm15ThemeFamily. */
  get themeFamily() {
    return this._f(Thm15ThemeFamily);
  }
}
class NonVisualGroupDrawingShapePropsExtension extends OxmlCompositeElement {
  static _Q = "a:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns A15NonVisualGroupProperties. */
  get nonVisualGroupProperties() {
    return this._f(A15NonVisualGroupProperties);
  }
}
class GvmlGroupShapeExtensionList extends OxmlCompositeElement {
  static _Q = "a:extLst";
}
class GroupShape extends OxmlCompositeElement {
  static _Q = "a:grpSp";
  /** Non-Visual Properties for a Group Shape. */
  get nonVisualGroupShapeProperties() {
    return this._f(NonVisualGroupShapeProperties);
  }
  /** Visual Group Shape Properties. */
  get visualGroupShapeProperties() {
    return this._f(VisualGroupShapeProperties);
  }
}
class GraphicFrame extends OxmlCompositeElement {
  static _Q = "a:graphicFrame";
  /** Non-Visual Properties for a Graphic Frame. */
  get nonVisualGraphicFrameProperties() {
    return this._f(NonVisualGraphicFrameProperties);
  }
  /** Returns Graphic. */
  get graphic() {
    return this._f(Graphic);
  }
  /** Returns Transform2D. */
  get transform2D() {
    return this._f(Transform2D);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Picture extends OxmlCompositeElement {
  static _Q = "a:pic";
  /** Non-Visual Properties for a Picture. */
  get nonVisualPictureProperties() {
    return this._f(NonVisualPictureProperties);
  }
  /** Picture Fill. */
  get blipFill() {
    return this._f(BlipFill);
  }
  /** Shape Properties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns ShapeStyle. */
  get shapeStyle() {
    return this._f(ShapeStyle);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ConnectionShape extends OxmlCompositeElement {
  static _Q = "a:cxnSp";
  /** Non-Visual Properties for a Connection Shape. */
  get nonVisualConnectionShapeProperties() {
    return this._f(NonVisualConnectionShapeProperties);
  }
  /** Visual Properties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Shape Style. */
  get shapeStyle() {
    return this._f(ShapeStyle);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class Shape extends OxmlCompositeElement {
  static _Q = "a:sp";
  /** Non-Visual Properties for a Shape. */
  get nonVisualShapeProperties() {
    return this._f(NonVisualShapeProperties);
  }
  /** Visual Properties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Text Shape. */
  get textShape() {
    return this._f(TextShape);
  }
  /** Style. */
  get shapeStyle() {
    return this._f(ShapeStyle);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class VisualGroupShapeProperties extends OxmlCompositeElement {
  static _Q = "a:grpSpPr";
  static _A = [":bwMode"];
  /** Black and White Mode. Serialized as `:bwMode` */
  get blackWhiteMode() {
    return this._g(":bwMode");
  }
  set blackWhiteMode(v) {
    this._s(":bwMode", v);
  }
  /** 2D Transform for Grouped Objects. */
  get transformGroup() {
    return this._f(TransformGroup);
  }
}
class NonVisualGroupShapeProperties extends OxmlCompositeElement {
  static _Q = "a:nvGrpSpPr";
  /** Returns NonVisualDrawingProperties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Non-Visual Group Shape Drawing Properties. */
  get nonVisualGroupShapeDrawingProperties() {
    return this._f(NonVisualGroupShapeDrawingProperties);
  }
}
class ShapePropertiesExtensionList extends OxmlCompositeElement {
  static _Q = "a:extLst";
}
class GvmlGroupShapeExtension extends OxmlCompositeElement {
  static _Q = "a:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns A14IsCanvas. */
  get isCanvas() {
    return this._f(A14IsCanvas);
  }
}
class ShapePropertiesExtension extends OxmlCompositeElement {
  static _Q = "a:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
  /** Returns A14HiddenFillProperties. */
  get hiddenFillProperties() {
    return this._f(A14HiddenFillProperties);
  }
  /** Returns A14HiddenLineProperties. */
  get hiddenLineProperties() {
    return this._f(A14HiddenLineProperties);
  }
  /** Returns A14HiddenEffectsProperties. */
  get hiddenEffectsProperties() {
    return this._f(A14HiddenEffectsProperties);
  }
  /** Returns A14HiddenScene3D. */
  get hiddenScene3D() {
    return this._f(A14HiddenScene3D);
  }
  /** Returns A14HiddenShape3D. */
  get hiddenShape3D() {
    return this._f(A14HiddenShape3D);
  }
  /** Returns A14ShadowObscured. */
  get shadowObscured() {
    return this._f(A14ShadowObscured);
  }
}
class Text extends OxmlLeafTextElement {
  static _Q = "a:t";
}
class TabStopList extends OxmlCompositeElement {
  static _Q = "a:tabLst";
}
class TextSpacingType extends OxmlCompositeElement {
  /** Spacing Percent. */
  get spacingPercent() {
    return this._f(SpacingPercent);
  }
  /** Spacing Points. */
  get spacingPoints() {
    return this._f(SpacingPoints);
  }
}
class SpaceAfter extends TextSpacingType {
  static _Q = "a:spcAft";
}
class SpaceBefore extends TextSpacingType {
  static _Q = "a:spcBef";
}
class LineSpacing extends TextSpacingType {
  static _Q = "a:lnSpc";
}
class SpacingPoints extends OxmlLeafElement {
  static _Q = "a:spcPts";
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class SpacingPercent extends OxmlLeafElement {
  static _Q = "a:spcPct";
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class TabStop extends OxmlLeafElement {
  static _Q = "a:tab";
  static _A = [":pos", ":algn"];
  /** Tab Position. Serialized as `:pos` */
  get position() {
    return this._g(":pos");
  }
  set position(v) {
    this._s(":pos", v);
  }
  /** Tab Alignment. Serialized as `:algn` */
  get alignment() {
    return this._g(":algn");
  }
  set alignment(v) {
    this._s(":algn", v);
  }
}
class Paragraph extends OxmlCompositeElement {
  static _Q = "a:p";
  /** Text Paragraph Properties. */
  get paragraphProperties() {
    return this._f(ParagraphProperties);
  }
}
class TextCharacterPropertiesType extends OxmlCompositeElement {
  static _A = [":kumimoji", ":lang", ":altLang", ":sz", ":b", ":i", ":u", ":strike", ":kern", ":cap", ":spc", ":normalizeH", ":baseline", ":noProof", ":dirty", ":err", ":smtClean", ":smtId", ":bmk"];
  /** kumimoji. Serialized as `:kumimoji` */
  get kumimoji() {
    return this._g(":kumimoji");
  }
  set kumimoji(v) {
    this._s(":kumimoji", v);
  }
  /** lang. Serialized as `:lang` */
  get language() {
    return this._g(":lang");
  }
  set language(v) {
    this._s(":lang", v);
  }
  /** altLang. Serialized as `:altLang` */
  get alternativeLanguage() {
    return this._g(":altLang");
  }
  set alternativeLanguage(v) {
    this._s(":altLang", v);
  }
  /** sz. Serialized as `:sz` */
  get fontSize() {
    return this._g(":sz");
  }
  set fontSize(v) {
    this._s(":sz", v);
  }
  /** b. Serialized as `:b` */
  get bold() {
    return this._g(":b");
  }
  set bold(v) {
    this._s(":b", v);
  }
  /** i. Serialized as `:i` */
  get italic() {
    return this._g(":i");
  }
  set italic(v) {
    this._s(":i", v);
  }
  /** u. Serialized as `:u` */
  get underline() {
    return this._g(":u");
  }
  set underline(v) {
    this._s(":u", v);
  }
  /** strike. Serialized as `:strike` */
  get strike() {
    return this._g(":strike");
  }
  set strike(v) {
    this._s(":strike", v);
  }
  /** kern. Serialized as `:kern` */
  get kerning() {
    return this._g(":kern");
  }
  set kerning(v) {
    this._s(":kern", v);
  }
  /** cap. Serialized as `:cap` */
  get capital() {
    return this._g(":cap");
  }
  set capital(v) {
    this._s(":cap", v);
  }
  /** spc. Serialized as `:spc` */
  get spacing() {
    return this._g(":spc");
  }
  set spacing(v) {
    this._s(":spc", v);
  }
  /** normalizeH. Serialized as `:normalizeH` */
  get normalizeHeight() {
    return this._g(":normalizeH");
  }
  set normalizeHeight(v) {
    this._s(":normalizeH", v);
  }
  /** baseline. Serialized as `:baseline` */
  get baseline() {
    return this._g(":baseline");
  }
  set baseline(v) {
    this._s(":baseline", v);
  }
  /** noProof. Serialized as `:noProof` */
  get noProof() {
    return this._g(":noProof");
  }
  set noProof(v) {
    this._s(":noProof", v);
  }
  /** dirty. Serialized as `:dirty` */
  get dirty() {
    return this._g(":dirty");
  }
  set dirty(v) {
    this._s(":dirty", v);
  }
  /** err. Serialized as `:err` */
  get spellingError() {
    return this._g(":err");
  }
  set spellingError(v) {
    this._s(":err", v);
  }
  /** smtClean. Serialized as `:smtClean` */
  get smartTagClean() {
    return this._g(":smtClean");
  }
  set smartTagClean(v) {
    this._s(":smtClean", v);
  }
  /** smtId. Serialized as `:smtId` */
  get smartTagId() {
    return this._g(":smtId");
  }
  set smartTagId(v) {
    this._s(":smtId", v);
  }
  /** bmk. Serialized as `:bmk` */
  get bookmark() {
    return this._g(":bmk");
  }
  set bookmark(v) {
    this._s(":bmk", v);
  }
  /** Returns Outline. */
  get outline() {
    return this._f(Outline);
  }
}
class DefaultRunProperties extends TextCharacterPropertiesType {
  static _Q = "a:defRPr";
}
class RunProperties extends TextCharacterPropertiesType {
  static _Q = "a:rPr";
}
class EndParagraphRunProperties extends TextCharacterPropertiesType {
  static _Q = "a:endParaRPr";
}
class TextParagraphPropertiesType extends OxmlCompositeElement {
  static _A = [":marL", ":marR", ":lvl", ":indent", ":algn", ":defTabSz", ":rtl", ":eaLnBrk", ":fontAlgn", ":latinLnBrk", ":hangingPunct"];
  /** Left Margin. Serialized as `:marL` */
  get leftMargin() {
    return this._g(":marL");
  }
  set leftMargin(v) {
    this._s(":marL", v);
  }
  /** Right Margin. Serialized as `:marR` */
  get rightMargin() {
    return this._g(":marR");
  }
  set rightMargin(v) {
    this._s(":marR", v);
  }
  /** Level. Serialized as `:lvl` */
  get level() {
    return this._g(":lvl");
  }
  set level(v) {
    this._s(":lvl", v);
  }
  /** Indent. Serialized as `:indent` */
  get indent() {
    return this._g(":indent");
  }
  set indent(v) {
    this._s(":indent", v);
  }
  /** Alignment. Serialized as `:algn` */
  get alignment() {
    return this._g(":algn");
  }
  set alignment(v) {
    this._s(":algn", v);
  }
  /** Default Tab Size. Serialized as `:defTabSz` */
  get defaultTabSize() {
    return this._g(":defTabSz");
  }
  set defaultTabSize(v) {
    this._s(":defTabSz", v);
  }
  /** Right To Left. Serialized as `:rtl` */
  get rightToLeft() {
    return this._g(":rtl");
  }
  set rightToLeft(v) {
    this._s(":rtl", v);
  }
  /** East Asian Line Break. Serialized as `:eaLnBrk` */
  get eastAsianLineBreak() {
    return this._g(":eaLnBrk");
  }
  set eastAsianLineBreak(v) {
    this._s(":eaLnBrk", v);
  }
  /** Font Alignment. Serialized as `:fontAlgn` */
  get fontAlignment() {
    return this._g(":fontAlgn");
  }
  set fontAlignment(v) {
    this._s(":fontAlgn", v);
  }
  /** Latin Line Break. Serialized as `:latinLnBrk` */
  get latinLineBreak() {
    return this._g(":latinLnBrk");
  }
  set latinLineBreak(v) {
    this._s(":latinLnBrk", v);
  }
  /** Hanging Punctuation. Serialized as `:hangingPunct` */
  get height() {
    return this._g(":hangingPunct");
  }
  set height(v) {
    this._s(":hangingPunct", v);
  }
  /** Line Spacing. */
  get lineSpacing() {
    return this._f(LineSpacing);
  }
  /** Space Before. */
  get spaceBefore() {
    return this._f(SpaceBefore);
  }
  /** Space After. */
  get spaceAfter() {
    return this._f(SpaceAfter);
  }
}
class Level9ParagraphProperties extends TextParagraphPropertiesType {
  static _Q = "a:lvl9pPr";
}
class Level8ParagraphProperties extends TextParagraphPropertiesType {
  static _Q = "a:lvl8pPr";
}
class Level7ParagraphProperties extends TextParagraphPropertiesType {
  static _Q = "a:lvl7pPr";
}
class Level6ParagraphProperties extends TextParagraphPropertiesType {
  static _Q = "a:lvl6pPr";
}
class Level5ParagraphProperties extends TextParagraphPropertiesType {
  static _Q = "a:lvl5pPr";
}
class Level4ParagraphProperties extends TextParagraphPropertiesType {
  static _Q = "a:lvl4pPr";
}
class Level3ParagraphProperties extends TextParagraphPropertiesType {
  static _Q = "a:lvl3pPr";
}
class Level2ParagraphProperties extends TextParagraphPropertiesType {
  static _Q = "a:lvl2pPr";
}
class Level1ParagraphProperties extends TextParagraphPropertiesType {
  static _Q = "a:lvl1pPr";
}
class DefaultParagraphProperties extends TextParagraphPropertiesType {
  static _Q = "a:defPPr";
}
class ParagraphProperties extends TextParagraphPropertiesType {
  static _Q = "a:pPr";
}
class TablePartStyleType extends OxmlCompositeElement {
  /** Table Cell Text Style. */
  get tableCellTextStyle() {
    return this._f(TableCellTextStyle);
  }
  /** Table Cell Style. */
  get tableCellStyle() {
    return this._f(TableCellStyle);
  }
}
class NorthwestCell extends TablePartStyleType {
  static _Q = "a:nwCell";
}
class NortheastCell extends TablePartStyleType {
  static _Q = "a:neCell";
}
class FirstRow extends TablePartStyleType {
  static _Q = "a:firstRow";
}
class SouthwestCell extends TablePartStyleType {
  static _Q = "a:swCell";
}
class SoutheastCell extends TablePartStyleType {
  static _Q = "a:seCell";
}
class LastRow extends TablePartStyleType {
  static _Q = "a:lastRow";
}
class FirstColumn extends TablePartStyleType {
  static _Q = "a:firstCol";
}
class LastColumn extends TablePartStyleType {
  static _Q = "a:lastCol";
}
class Band2Vertical extends TablePartStyleType {
  static _Q = "a:band2V";
}
class Band1Vertical extends TablePartStyleType {
  static _Q = "a:band1V";
}
class Band2Horizontal extends TablePartStyleType {
  static _Q = "a:band2H";
}
class Band1Horizontal extends TablePartStyleType {
  static _Q = "a:band1H";
}
class WholeTable extends TablePartStyleType {
  static _Q = "a:wholeTbl";
}
class TableBackground extends OxmlCompositeElement {
  static _Q = "a:tblBg";
}
class TableCellStyle extends OxmlCompositeElement {
  static _Q = "a:tcStyle";
  /** Table Cell Borders. */
  get tableCellBorders() {
    return this._f(TableCellBorders);
  }
}
class TableCellTextStyle extends OxmlCompositeElement {
  static _Q = "a:tcTxStyle";
  static _A = [":b", ":i"];
  /** Bold. Serialized as `:b` */
  get bold() {
    return this._g(":b");
  }
  set bold(v) {
    this._s(":b", v);
  }
  /** Italic. Serialized as `:i` */
  get italic() {
    return this._g(":i");
  }
  set italic(v) {
    this._s(":i", v);
  }
}
class TableCellBorders extends OxmlCompositeElement {
  static _Q = "a:tcBdr";
  /** Left Border. */
  get leftBorder() {
    return this._f(LeftBorder);
  }
  /** Right Border. */
  get rightBorder() {
    return this._f(RightBorder);
  }
  /** Top Border. */
  get topBorder() {
    return this._f(TopBorder);
  }
  /** Bottom Border. */
  get bottomBorder() {
    return this._f(BottomBorder);
  }
  /** Inside Horizontal Border. */
  get insideHorizontalBorder() {
    return this._f(InsideHorizontalBorder);
  }
  /** Inside Vertical Border. */
  get insideVerticalBorder() {
    return this._f(InsideVerticalBorder);
  }
  /** Top Left to Bottom Right Border. */
  get topLeftToBottomRightBorder() {
    return this._f(TopLeftToBottomRightBorder);
  }
  /** Top Right to Bottom Left Border. */
  get topRightToBottomLeftBorder() {
    return this._f(TopRightToBottomLeftBorder);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ThemeableLineStyleType extends OxmlCompositeElement {
  /** Returns Outline. */
  get outline() {
    return this._f(Outline);
  }
  /** Line Reference. */
  get lineReference() {
    return this._f(LineReference);
  }
}
class TopRightToBottomLeftBorder extends ThemeableLineStyleType {
  static _Q = "a:tr2bl";
}
class TopLeftToBottomRightBorder extends ThemeableLineStyleType {
  static _Q = "a:tl2br";
}
class InsideVerticalBorder extends ThemeableLineStyleType {
  static _Q = "a:insideV";
}
class InsideHorizontalBorder extends ThemeableLineStyleType {
  static _Q = "a:insideH";
}
class BottomBorder extends ThemeableLineStyleType {
  static _Q = "a:bottom";
}
class TopBorder extends ThemeableLineStyleType {
  static _Q = "a:top";
}
class RightBorder extends ThemeableLineStyleType {
  static _Q = "a:right";
}
class LeftBorder extends ThemeableLineStyleType {
  static _Q = "a:left";
}
class TableRow extends OxmlCompositeElement {
  static _Q = "a:tr";
  static _A = [":h"];
  /** Height. Serialized as `:h` */
  get height() {
    return this._g(":h");
  }
  set height(v) {
    this._s(":h", v);
  }
}
class TableGrid extends OxmlCompositeElement {
  static _Q = "a:tblGrid";
}
class TableProperties extends OxmlCompositeElement {
  static _Q = "a:tblPr";
  static _A = [":rtl", ":firstRow", ":firstCol", ":lastRow", ":lastCol", ":bandRow", ":bandCol"];
  /** Right-to-Left. Serialized as `:rtl` */
  get rightToLeft() {
    return this._g(":rtl");
  }
  set rightToLeft(v) {
    this._s(":rtl", v);
  }
  /** First Row. Serialized as `:firstRow` */
  get firstRow() {
    return this._g(":firstRow");
  }
  set firstRow(v) {
    this._s(":firstRow", v);
  }
  /** First Column. Serialized as `:firstCol` */
  get firstColumn() {
    return this._g(":firstCol");
  }
  set firstColumn(v) {
    this._s(":firstCol", v);
  }
  /** Last Row. Serialized as `:lastRow` */
  get lastRow() {
    return this._g(":lastRow");
  }
  set lastRow(v) {
    this._s(":lastRow", v);
  }
  /** Last Column. Serialized as `:lastCol` */
  get lastColumn() {
    return this._g(":lastCol");
  }
  set lastColumn(v) {
    this._s(":lastCol", v);
  }
  /** Banded Rows. Serialized as `:bandRow` */
  get bandRow() {
    return this._g(":bandRow");
  }
  set bandRow(v) {
    this._s(":bandRow", v);
  }
  /** Banded Columns. Serialized as `:bandCol` */
  get bandColumn() {
    return this._g(":bandCol");
  }
  set bandColumn(v) {
    this._s(":bandCol", v);
  }
}
class GridColumn extends OxmlCompositeElement {
  static _Q = "a:gridCol";
  static _A = [":w"];
  /** Width. Serialized as `:w` */
  get width() {
    return this._g(":w");
  }
  set width(v) {
    this._s(":w", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class TableStyleId extends OxmlLeafTextElement {
  static _Q = "a:tableStyleId";
}
class TableStyleType extends OxmlCompositeElement {
  static _A = [":styleId", ":styleName"];
  /** Style ID. Serialized as `:styleId` */
  get styleId() {
    return this._g(":styleId");
  }
  set styleId(v) {
    this._s(":styleId", v);
  }
  /** Name. Serialized as `:styleName` */
  get styleName() {
    return this._g(":styleName");
  }
  set styleName(v) {
    this._s(":styleName", v);
  }
  /** Table Background. */
  get tableBackground() {
    return this._f(TableBackground);
  }
  /** Whole Table. */
  get wholeTable() {
    return this._f(WholeTable);
  }
  /** Band 1 Horizontal. */
  get band1Horizontal() {
    return this._f(Band1Horizontal);
  }
  /** Band 2 Horizontal. */
  get band2Horizontal() {
    return this._f(Band2Horizontal);
  }
  /** Band 1 Vertical. */
  get band1Vertical() {
    return this._f(Band1Vertical);
  }
  /** Band 2 Vertical. */
  get band2Vertical() {
    return this._f(Band2Vertical);
  }
  /** Last Column. */
  get lastColumn() {
    return this._f(LastColumn);
  }
  /** First Column. */
  get firstColumn() {
    return this._f(FirstColumn);
  }
  /** Last Row. */
  get lastRow() {
    return this._f(LastRow);
  }
  /** Southeast Cell. */
  get southeastCell() {
    return this._f(SoutheastCell);
  }
  /** Southwest Cell. */
  get southwestCell() {
    return this._f(SouthwestCell);
  }
  /** First Row. */
  get firstRow() {
    return this._f(FirstRow);
  }
  /** Northeast Cell. */
  get northeastCell() {
    return this._f(NortheastCell);
  }
  /** Northwest Cell. */
  get northwestCell() {
    return this._f(NorthwestCell);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class TableStyleEntry extends TableStyleType {
  static _Q = "a:tblStyle";
}
class TableStyle extends TableStyleType {
  static _Q = "a:tableStyle";
}
class TableCell extends OxmlCompositeElement {
  static _Q = "a:tc";
  static _A = [":rowSpan", ":gridSpan", ":hMerge", ":vMerge"];
  /** Row Span. Serialized as `:rowSpan` */
  get rowSpan() {
    return this._g(":rowSpan");
  }
  set rowSpan(v) {
    this._s(":rowSpan", v);
  }
  /** Grid Span. Serialized as `:gridSpan` */
  get gridSpan() {
    return this._g(":gridSpan");
  }
  set gridSpan(v) {
    this._s(":gridSpan", v);
  }
  /** Horizontal Merge. Serialized as `:hMerge` */
  get horizontalMerge() {
    return this._g(":hMerge");
  }
  set horizontalMerge(v) {
    this._s(":hMerge", v);
  }
  /** Vertical Merge. Serialized as `:vMerge` */
  get verticalMerge() {
    return this._g(":vMerge");
  }
  set verticalMerge(v) {
    this._s(":vMerge", v);
  }
  /** Text Body. */
  get textBody() {
    return this._f(TextBody);
  }
  /** Table Cell Properties. */
  get tableCellProperties() {
    return this._f(TableCellProperties);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class TableCellProperties extends OxmlCompositeElement {
  static _Q = "a:tcPr";
  static _A = [":marL", ":marR", ":marT", ":marB", ":vert", ":anchor", ":anchorCtr", ":horzOverflow"];
  /** Left Margin. Serialized as `:marL` */
  get leftMargin() {
    return this._g(":marL");
  }
  set leftMargin(v) {
    this._s(":marL", v);
  }
  /** Right Margin. Serialized as `:marR` */
  get rightMargin() {
    return this._g(":marR");
  }
  set rightMargin(v) {
    this._s(":marR", v);
  }
  /** Top Margin. Serialized as `:marT` */
  get topMargin() {
    return this._g(":marT");
  }
  set topMargin(v) {
    this._s(":marT", v);
  }
  /** Bottom Margin. Serialized as `:marB` */
  get bottomMargin() {
    return this._g(":marB");
  }
  set bottomMargin(v) {
    this._s(":marB", v);
  }
  /** Text Direction. Serialized as `:vert` */
  get vertical() {
    return this._g(":vert");
  }
  set vertical(v) {
    this._s(":vert", v);
  }
  /** Anchor. Serialized as `:anchor` */
  get anchor() {
    return this._g(":anchor");
  }
  set anchor(v) {
    this._s(":anchor", v);
  }
  /** Anchor Center. Serialized as `:anchorCtr` */
  get anchorCenter() {
    return this._g(":anchorCtr");
  }
  set anchorCenter(v) {
    this._s(":anchorCtr", v);
  }
  /** Horizontal Overflow. Serialized as `:horzOverflow` */
  get horizontalOverflow() {
    return this._g(":horzOverflow");
  }
  set horizontalOverflow(v) {
    this._s(":horzOverflow", v);
  }
  /** Left Border Line Properties. */
  get leftBorderLineProperties() {
    return this._f(LeftBorderLineProperties);
  }
  /** Right Border Line Properties. */
  get rightBorderLineProperties() {
    return this._f(RightBorderLineProperties);
  }
  /** Top Border Line Properties. */
  get topBorderLineProperties() {
    return this._f(TopBorderLineProperties);
  }
  /** Bottom Border Line Properties. */
  get bottomBorderLineProperties() {
    return this._f(BottomBorderLineProperties);
  }
  /** Top-Left to Bottom-Right Border Line Properties. */
  get topLeftToBottomRightBorderLineProperties() {
    return this._f(TopLeftToBottomRightBorderLineProperties);
  }
  /** Bottom-Left to Top-Right Border Line Properties. */
  get bottomLeftToTopRightBorderLineProperties() {
    return this._f(BottomLeftToTopRightBorderLineProperties);
  }
  /** Cell 3-D. */
  get cell3DProperties() {
    return this._f(Cell3DProperties);
  }
}
class Cell3DProperties extends OxmlCompositeElement {
  static _Q = "a:cell3D";
  static _A = [":prstMaterial"];
  /** Preset Material. Serialized as `:prstMaterial` */
  get presetMaterial() {
    return this._g(":prstMaterial");
  }
  set presetMaterial(v) {
    this._s(":prstMaterial", v);
  }
  /** Bevel. */
  get bevel() {
    return this._f(Bevel);
  }
  /** Light Rig. */
  get lightRig() {
    return this._f(LightRig);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ThemeElements extends OxmlCompositeElement {
  static _Q = "a:themeElements";
  /** Returns ColorScheme. */
  get colorScheme() {
    return this._f(ColorScheme);
  }
  /** Font Scheme. */
  get fontScheme() {
    return this._f(FontScheme);
  }
  /** Format Scheme. */
  get formatScheme() {
    return this._f(FormatScheme);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ExtraColorScheme extends OxmlCompositeElement {
  static _Q = "a:extraClrScheme";
  /** Returns ColorScheme. */
  get colorScheme() {
    return this._f(ColorScheme);
  }
  /** Returns ColorMap. */
  get colorMap() {
    return this._f(ColorMap);
  }
}
class ColorMappingType extends OxmlCompositeElement {
  static _A = [":bg1", ":tx1", ":bg2", ":tx2", ":accent1", ":accent2", ":accent3", ":accent4", ":accent5", ":accent6", ":hlink", ":folHlink"];
  /** Background 1. Serialized as `:bg1` */
  get background1() {
    return this._g(":bg1");
  }
  set background1(v) {
    this._s(":bg1", v);
  }
  /** Text 1. Serialized as `:tx1` */
  get text1() {
    return this._g(":tx1");
  }
  set text1(v) {
    this._s(":tx1", v);
  }
  /** Background 2. Serialized as `:bg2` */
  get background2() {
    return this._g(":bg2");
  }
  set background2(v) {
    this._s(":bg2", v);
  }
  /** Text 2. Serialized as `:tx2` */
  get text2() {
    return this._g(":tx2");
  }
  set text2(v) {
    this._s(":tx2", v);
  }
  /** Accent 1. Serialized as `:accent1` */
  get accent1() {
    return this._g(":accent1");
  }
  set accent1(v) {
    this._s(":accent1", v);
  }
  /** Accent 2. Serialized as `:accent2` */
  get accent2() {
    return this._g(":accent2");
  }
  set accent2(v) {
    this._s(":accent2", v);
  }
  /** Accent 3. Serialized as `:accent3` */
  get accent3() {
    return this._g(":accent3");
  }
  set accent3(v) {
    this._s(":accent3", v);
  }
  /** Accent 4. Serialized as `:accent4` */
  get accent4() {
    return this._g(":accent4");
  }
  set accent4(v) {
    this._s(":accent4", v);
  }
  /** Accent 5. Serialized as `:accent5` */
  get accent5() {
    return this._g(":accent5");
  }
  set accent5(v) {
    this._s(":accent5", v);
  }
  /** Accent 6. Serialized as `:accent6` */
  get accent6() {
    return this._g(":accent6");
  }
  set accent6(v) {
    this._s(":accent6", v);
  }
  /** Hyperlink. Serialized as `:hlink` */
  get hyperlink() {
    return this._g(":hlink");
  }
  set hyperlink(v) {
    this._s(":hlink", v);
  }
  /** Followed Hyperlink. Serialized as `:folHlink` */
  get followedHyperlink() {
    return this._g(":folHlink");
  }
  set followedHyperlink(v) {
    this._s(":folHlink", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ColorMap extends ColorMappingType {
  static _Q = "a:clrMap";
}
class OverrideColorMapping extends ColorMappingType {
  static _Q = "a:overrideClrMapping";
}
class DefaultShapeDefinitionType extends OxmlCompositeElement {
  /** Visual Properties. */
  get shapeProperties() {
    return this._f(ShapeProperties);
  }
  /** Returns BodyProperties. */
  get bodyProperties() {
    return this._f(BodyProperties);
  }
  /** Returns ListStyle. */
  get listStyle() {
    return this._f(ListStyle);
  }
  /** Returns ShapeStyle. */
  get shapeStyle() {
    return this._f(ShapeStyle);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class TextDefault extends DefaultShapeDefinitionType {
  static _Q = "a:txDef";
}
class LineDefault extends DefaultShapeDefinitionType {
  static _Q = "a:lnDef";
}
class ShapeDefault extends DefaultShapeDefinitionType {
  static _Q = "a:spDef";
}
class ListStyle extends OxmlCompositeElement {
  static _Q = "a:lstStyle";
  /** Default Paragraph Style. */
  get defaultParagraphProperties() {
    return this._f(DefaultParagraphProperties);
  }
  /** List Level 1 Text Style. */
  get level1ParagraphProperties() {
    return this._f(Level1ParagraphProperties);
  }
  /** List Level 2 Text Style. */
  get level2ParagraphProperties() {
    return this._f(Level2ParagraphProperties);
  }
  /** List Level 3 Text Style. */
  get level3ParagraphProperties() {
    return this._f(Level3ParagraphProperties);
  }
  /** List Level 4 Text Style. */
  get level4ParagraphProperties() {
    return this._f(Level4ParagraphProperties);
  }
  /** List Level 5 Text Style. */
  get level5ParagraphProperties() {
    return this._f(Level5ParagraphProperties);
  }
  /** List Level 6 Text Style. */
  get level6ParagraphProperties() {
    return this._f(Level6ParagraphProperties);
  }
  /** List Level 7 Text Style. */
  get level7ParagraphProperties() {
    return this._f(Level7ParagraphProperties);
  }
  /** List Level 8 Text Style. */
  get level8ParagraphProperties() {
    return this._f(Level8ParagraphProperties);
  }
  /** List Level 9 Text Style. */
  get level9ParagraphProperties() {
    return this._f(Level9ParagraphProperties);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class BodyProperties extends OxmlCompositeElement {
  static _Q = "a:bodyPr";
  static _A = [":rot", ":spcFirstLastPara", ":vertOverflow", ":horzOverflow", ":vert", ":wrap", ":lIns", ":tIns", ":rIns", ":bIns", ":numCol", ":spcCol", ":rtlCol", ":fromWordArt", ":anchor", ":anchorCtr", ":forceAA", ":upright", ":compatLnSpc"];
  /** Rotation. Serialized as `:rot` */
  get rotation() {
    return this._g(":rot");
  }
  set rotation(v) {
    this._s(":rot", v);
  }
  /** Paragraph Spacing. Serialized as `:spcFirstLastPara` */
  get useParagraphSpacing() {
    return this._g(":spcFirstLastPara");
  }
  set useParagraphSpacing(v) {
    this._s(":spcFirstLastPara", v);
  }
  /** Text Vertical Overflow. Serialized as `:vertOverflow` */
  get verticalOverflow() {
    return this._g(":vertOverflow");
  }
  set verticalOverflow(v) {
    this._s(":vertOverflow", v);
  }
  /** Text Horizontal Overflow. Serialized as `:horzOverflow` */
  get horizontalOverflow() {
    return this._g(":horzOverflow");
  }
  set horizontalOverflow(v) {
    this._s(":horzOverflow", v);
  }
  /** Vertical Text. Serialized as `:vert` */
  get vertical() {
    return this._g(":vert");
  }
  set vertical(v) {
    this._s(":vert", v);
  }
  /** Text Wrapping Type. Serialized as `:wrap` */
  get wrap() {
    return this._g(":wrap");
  }
  set wrap(v) {
    this._s(":wrap", v);
  }
  /** Left Inset. Serialized as `:lIns` */
  get leftInset() {
    return this._g(":lIns");
  }
  set leftInset(v) {
    this._s(":lIns", v);
  }
  /** Top Inset. Serialized as `:tIns` */
  get topInset() {
    return this._g(":tIns");
  }
  set topInset(v) {
    this._s(":tIns", v);
  }
  /** Right Inset. Serialized as `:rIns` */
  get rightInset() {
    return this._g(":rIns");
  }
  set rightInset(v) {
    this._s(":rIns", v);
  }
  /** Bottom Inset. Serialized as `:bIns` */
  get bottomInset() {
    return this._g(":bIns");
  }
  set bottomInset(v) {
    this._s(":bIns", v);
  }
  /** Number of Columns. Serialized as `:numCol` */
  get columnCount() {
    return this._g(":numCol");
  }
  set columnCount(v) {
    this._s(":numCol", v);
  }
  /** Space Between Columns. Serialized as `:spcCol` */
  get columnSpacing() {
    return this._g(":spcCol");
  }
  set columnSpacing(v) {
    this._s(":spcCol", v);
  }
  /** Columns Right-To-Left. Serialized as `:rtlCol` */
  get rightToLeftColumns() {
    return this._g(":rtlCol");
  }
  set rightToLeftColumns(v) {
    this._s(":rtlCol", v);
  }
  /** From WordArt. Serialized as `:fromWordArt` */
  get fromWordArt() {
    return this._g(":fromWordArt");
  }
  set fromWordArt(v) {
    this._s(":fromWordArt", v);
  }
  /** Anchor. Serialized as `:anchor` */
  get anchor() {
    return this._g(":anchor");
  }
  set anchor(v) {
    this._s(":anchor", v);
  }
  /** Anchor Center. Serialized as `:anchorCtr` */
  get anchorCenter() {
    return this._g(":anchorCtr");
  }
  set anchorCenter(v) {
    this._s(":anchorCtr", v);
  }
  /** Force Anti-Alias. Serialized as `:forceAA` */
  get forceAntiAlias() {
    return this._g(":forceAA");
  }
  set forceAntiAlias(v) {
    this._s(":forceAA", v);
  }
  /** Text Upright. Serialized as `:upright` */
  get upRight() {
    return this._g(":upright");
  }
  set upRight(v) {
    this._s(":upright", v);
  }
  /** Compatible Line Spacing. Serialized as `:compatLnSpc` */
  get compatibleLineSpacing() {
    return this._g(":compatLnSpc");
  }
  set compatibleLineSpacing(v) {
    this._s(":compatLnSpc", v);
  }
  /** Preset Text Shape. */
  get presetTextWrap() {
    return this._f(PresetTextWrap);
  }
}
class TransformGroup extends OxmlCompositeElement {
  static _Q = "a:xfrm";
  static _A = [":rot", ":flipH", ":flipV"];
  /** Rotation. Serialized as `:rot` */
  get rotation() {
    return this._g(":rot");
  }
  set rotation(v) {
    this._s(":rot", v);
  }
  /** Horizontal Flip. Serialized as `:flipH` */
  get horizontalFlip() {
    return this._g(":flipH");
  }
  set horizontalFlip(v) {
    this._s(":flipH", v);
  }
  /** Vertical Flip. Serialized as `:flipV` */
  get verticalFlip() {
    return this._g(":flipV");
  }
  set verticalFlip(v) {
    this._s(":flipV", v);
  }
  /** Offset. */
  get offset() {
    return this._f(Offset);
  }
  /** Extents. */
  get extents() {
    return this._f(Extents);
  }
  /** Child Offset. */
  get childOffset() {
    return this._f(ChildOffset);
  }
  /** Child Extents. */
  get childExtents() {
    return this._f(ChildExtents);
  }
}
class DashStop extends OxmlLeafElement {
  static _Q = "a:ds";
  static _A = [":d", ":sp"];
  /** Dash Length. Serialized as `:d` */
  get dashLength() {
    return this._g(":d");
  }
  set dashLength(v) {
    this._s(":d", v);
  }
  /** Space Length. Serialized as `:sp` */
  get spaceLength() {
    return this._g(":sp");
  }
  set spaceLength(v) {
    this._s(":sp", v);
  }
}
class PathList extends OxmlCompositeElement {
  static _Q = "a:pathLst";
}
class Rectangle extends OxmlLeafElement {
  static _Q = "a:rect";
  static _A = [":l", ":t", ":r", ":b"];
  /** Left. Serialized as `:l` */
  get left() {
    return this._g(":l");
  }
  set left(v) {
    this._s(":l", v);
  }
  /** Top. Serialized as `:t` */
  get top() {
    return this._g(":t");
  }
  set top(v) {
    this._s(":t", v);
  }
  /** Right. Serialized as `:r` */
  get right() {
    return this._g(":r");
  }
  set right(v) {
    this._s(":r", v);
  }
  /** Bottom Position. Serialized as `:b` */
  get bottom() {
    return this._g(":b");
  }
  set bottom(v) {
    this._s(":b", v);
  }
}
class ConnectionSiteList extends OxmlCompositeElement {
  static _Q = "a:cxnLst";
}
class AdjustHandleList extends OxmlCompositeElement {
  static _Q = "a:ahLst";
}
class GeometryGuideListType extends OxmlCompositeElement {
}
class ShapeGuideList extends GeometryGuideListType {
  static _Q = "a:gdLst";
}
class AdjustValueList extends GeometryGuideListType {
  static _Q = "a:avLst";
}
class Path extends OxmlCompositeElement {
  static _Q = "a:path";
  static _A = [":w", ":h", ":fill", ":stroke", ":extrusionOk"];
  /** Path Width. Serialized as `:w` */
  get width() {
    return this._g(":w");
  }
  set width(v) {
    this._s(":w", v);
  }
  /** Path Height. Serialized as `:h` */
  get height() {
    return this._g(":h");
  }
  set height(v) {
    this._s(":h", v);
  }
  /** Path Fill. Serialized as `:fill` */
  get fill() {
    return this._g(":fill");
  }
  set fill(v) {
    this._s(":fill", v);
  }
  /** Path Stroke. Serialized as `:stroke` */
  get stroke() {
    return this._g(":stroke");
  }
  set stroke(v) {
    this._s(":stroke", v);
  }
  /** 3D Extrusion Allowed. Serialized as `:extrusionOk` */
  get extrusionOk() {
    return this._g(":extrusionOk");
  }
  set extrusionOk(v) {
    this._s(":extrusionOk", v);
  }
}
class CubicBezierCurveTo extends OxmlCompositeElement {
  static _Q = "a:cubicBezTo";
}
class QuadraticBezierCurveTo extends OxmlCompositeElement {
  static _Q = "a:quadBezTo";
}
class ArcTo extends OxmlLeafElement {
  static _Q = "a:arcTo";
  static _A = [":wR", ":hR", ":stAng", ":swAng"];
  /** Shape Arc Width Radius. Serialized as `:wR` */
  get widthRadius() {
    return this._g(":wR");
  }
  set widthRadius(v) {
    this._s(":wR", v);
  }
  /** Shape Arc Height Radius. Serialized as `:hR` */
  get heightRadius() {
    return this._g(":hR");
  }
  set heightRadius(v) {
    this._s(":hR", v);
  }
  /** Shape Arc Start Angle. Serialized as `:stAng` */
  get startAngle() {
    return this._g(":stAng");
  }
  set startAngle(v) {
    this._s(":stAng", v);
  }
  /** Shape Arc Swing Angle. Serialized as `:swAng` */
  get swingAngle() {
    return this._g(":swAng");
  }
  set swingAngle(v) {
    this._s(":swAng", v);
  }
}
class LineTo extends OxmlCompositeElement {
  static _Q = "a:lnTo";
  /** Line end point. */
  get point() {
    return this._f(Point);
  }
}
class MoveTo extends OxmlCompositeElement {
  static _Q = "a:moveTo";
  /** Move end point. */
  get point() {
    return this._f(Point);
  }
}
class CloseShapePath extends OxmlLeafElement {
  static _Q = "a:close";
}
class ConnectionSite extends OxmlCompositeElement {
  static _Q = "a:cxn";
  static _A = [":ang"];
  /** Connection Site Angle. Serialized as `:ang` */
  get angle() {
    return this._g(":ang");
  }
  set angle(v) {
    this._s(":ang", v);
  }
  /** Position. */
  get position() {
    return this._f(Position);
  }
}
class AdjustHandlePolar extends OxmlCompositeElement {
  static _Q = "a:ahPolar";
  static _A = [":gdRefR", ":minR", ":maxR", ":gdRefAng", ":minAng", ":maxAng"];
  /** Radial Adjustment Guide. Serialized as `:gdRefR` */
  get radialAdjustmentGuide() {
    return this._g(":gdRefR");
  }
  set radialAdjustmentGuide(v) {
    this._s(":gdRefR", v);
  }
  /** Minimum Radial Adjustment. Serialized as `:minR` */
  get minRadial() {
    return this._g(":minR");
  }
  set minRadial(v) {
    this._s(":minR", v);
  }
  /** Maximum Radial Adjustment. Serialized as `:maxR` */
  get maxRadial() {
    return this._g(":maxR");
  }
  set maxRadial(v) {
    this._s(":maxR", v);
  }
  /** Angle Adjustment Guide. Serialized as `:gdRefAng` */
  get angleAdjustmentGuide() {
    return this._g(":gdRefAng");
  }
  set angleAdjustmentGuide(v) {
    this._s(":gdRefAng", v);
  }
  /** Minimum Angle Adjustment. Serialized as `:minAng` */
  get minAngle() {
    return this._g(":minAng");
  }
  set minAngle(v) {
    this._s(":minAng", v);
  }
  /** Maximum Angle Adjustment. Serialized as `:maxAng` */
  get maxAngle() {
    return this._g(":maxAng");
  }
  set maxAngle(v) {
    this._s(":maxAng", v);
  }
  /** Shape Position Coordinate. */
  get position() {
    return this._f(Position);
  }
}
class AdjustHandleXY extends OxmlCompositeElement {
  static _Q = "a:ahXY";
  static _A = [":gdRefX", ":minX", ":maxX", ":gdRefY", ":minY", ":maxY"];
  /** Horizontal Adjustment Guide. Serialized as `:gdRefX` */
  get xAdjustmentGuide() {
    return this._g(":gdRefX");
  }
  set xAdjustmentGuide(v) {
    this._s(":gdRefX", v);
  }
  /** Minimum Horizontal Adjustment. Serialized as `:minX` */
  get minX() {
    return this._g(":minX");
  }
  set minX(v) {
    this._s(":minX", v);
  }
  /** Maximum Horizontal Adjustment. Serialized as `:maxX` */
  get maxX() {
    return this._g(":maxX");
  }
  set maxX(v) {
    this._s(":maxX", v);
  }
  /** Vertical Adjustment Guide. Serialized as `:gdRefY` */
  get yAdjustmentGuide() {
    return this._g(":gdRefY");
  }
  set yAdjustmentGuide(v) {
    this._s(":gdRefY", v);
  }
  /** Minimum Vertical Adjustment. Serialized as `:minY` */
  get minY() {
    return this._g(":minY");
  }
  set minY(v) {
    this._s(":minY", v);
  }
  /** Maximum Vertical Adjustment. Serialized as `:maxY` */
  get maxY() {
    return this._g(":maxY");
  }
  set maxY(v) {
    this._s(":maxY", v);
  }
  /** Position. */
  get position() {
    return this._f(Position);
  }
}
class AdjustPoint2DType extends OxmlLeafElement {
  static _A = [":x", ":y"];
  /** X-Coordinate. Serialized as `:x` */
  get x() {
    return this._g(":x");
  }
  set x(v) {
    this._s(":x", v);
  }
  /** Y-Coordinate. Serialized as `:y` */
  get y() {
    return this._g(":y");
  }
  set y(v) {
    this._s(":y", v);
  }
}
class Point extends AdjustPoint2DType {
  static _Q = "a:pt";
}
class Position extends AdjustPoint2DType {
  static _Q = "a:pos";
}
class ShapeGuide extends OxmlLeafElement {
  static _Q = "a:gd";
  static _A = [":name", ":fmla"];
  /** Shape Guide Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Shape Guide Formula. Serialized as `:fmla` */
  get formula() {
    return this._g(":fmla");
  }
  set formula(v) {
    this._s(":fmla", v);
  }
}
class GradientStopList extends OxmlCompositeElement {
  static _Q = "a:gsLst";
}
class GradientStop extends OxmlCompositeElement {
  static _Q = "a:gs";
  static _A = [":pos"];
  /** Position. Serialized as `:pos` */
  get position() {
    return this._g(":pos");
  }
  set position(v) {
    this._s(":pos", v);
  }
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(RgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(RgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(HslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(SystemColor);
  }
  /** Scheme Color. */
  get schemeColor() {
    return this._f(SchemeColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(PresetColor);
  }
}
class RelativeRectangleType extends OxmlLeafElement {
  static _A = [":l", ":t", ":r", ":b"];
  /** Left Offset. Serialized as `:l` */
  get left() {
    return this._g(":l");
  }
  set left(v) {
    this._s(":l", v);
  }
  /** Top Offset. Serialized as `:t` */
  get top() {
    return this._g(":t");
  }
  set top(v) {
    this._s(":t", v);
  }
  /** Right Offset. Serialized as `:r` */
  get right() {
    return this._g(":r");
  }
  set right(v) {
    this._s(":r", v);
  }
  /** Bottom Offset. Serialized as `:b` */
  get bottom() {
    return this._g(":b");
  }
  set bottom(v) {
    this._s(":b", v);
  }
}
class SourceRectangle extends RelativeRectangleType {
  static _Q = "a:srcRect";
}
class FillRectangle extends RelativeRectangleType {
  static _Q = "a:fillRect";
}
class TileRectangle extends RelativeRectangleType {
  static _Q = "a:tileRect";
}
class FillToRectangle extends RelativeRectangleType {
  static _Q = "a:fillToRect";
}
class BevelType extends OxmlLeafElement {
  static _A = [":w", ":h", ":prst"];
  /** Width. Serialized as `:w` */
  get width() {
    return this._g(":w");
  }
  set width(v) {
    this._s(":w", v);
  }
  /** Height. Serialized as `:h` */
  get height() {
    return this._g(":h");
  }
  set height(v) {
    this._s(":h", v);
  }
  /** Preset Bevel. Serialized as `:prst` */
  get preset() {
    return this._g(":prst");
  }
  set preset(v) {
    this._s(":prst", v);
  }
}
class Bevel extends BevelType {
  static _Q = "a:bevel";
}
class BevelBottom extends BevelType {
  static _Q = "a:bevelB";
}
class BevelTop extends BevelType {
  static _Q = "a:bevelT";
}
class Vector3DType extends OxmlLeafElement {
  static _A = [":dx", ":dy", ":dz"];
  /** Distance along X-axis in 3D. Serialized as `:dx` */
  get dx() {
    return this._g(":dx");
  }
  set dx(v) {
    this._s(":dx", v);
  }
  /** Distance along Y-axis in 3D. Serialized as `:dy` */
  get dy() {
    return this._g(":dy");
  }
  set dy(v) {
    this._s(":dy", v);
  }
  /** Distance along Z-axis in 3D. Serialized as `:dz` */
  get dz() {
    return this._g(":dz");
  }
  set dz(v) {
    this._s(":dz", v);
  }
}
class UpVector extends Vector3DType {
  static _Q = "a:up";
}
class Normal extends Vector3DType {
  static _Q = "a:norm";
}
class Anchor extends OxmlLeafElement {
  static _Q = "a:anchor";
  static _A = [":x", ":y", ":z"];
  /** X-Coordinate in 3D. Serialized as `:x` */
  get x() {
    return this._g(":x");
  }
  set x(v) {
    this._s(":x", v);
  }
  /** Y-Coordinate in 3D. Serialized as `:y` */
  get y() {
    return this._g(":y");
  }
  set y(v) {
    this._s(":y", v);
  }
  /** Z-Coordinate in 3D. Serialized as `:z` */
  get z() {
    return this._g(":z");
  }
  set z(v) {
    this._s(":z", v);
  }
}
class Backdrop extends OxmlCompositeElement {
  static _Q = "a:backdrop";
  /** Anchor Point. */
  get anchor() {
    return this._f(Anchor);
  }
  /** Normal. */
  get normal() {
    return this._f(Normal);
  }
  /** Up Vector. */
  get upVector() {
    return this._f(UpVector);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class LightRig extends OxmlCompositeElement {
  static _Q = "a:lightRig";
  static _A = [":rig", ":dir"];
  /** Rig Preset. Serialized as `:rig` */
  get rig() {
    return this._g(":rig");
  }
  set rig(v) {
    this._s(":rig", v);
  }
  /** Direction. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
  /** Rotation. */
  get rotation() {
    return this._f(Rotation);
  }
}
class Camera extends OxmlCompositeElement {
  static _Q = "a:camera";
  static _A = [":prst", ":fov", ":zoom"];
  /** Preset Camera Type. Serialized as `:prst` */
  get preset() {
    return this._g(":prst");
  }
  set preset(v) {
    this._s(":prst", v);
  }
  /** Field of View. Serialized as `:fov` */
  get fieldOfView() {
    return this._g(":fov");
  }
  set fieldOfView(v) {
    this._s(":fov", v);
  }
  /** Zoom. Serialized as `:zoom` */
  get zoom() {
    return this._g(":zoom");
  }
  set zoom(v) {
    this._s(":zoom", v);
  }
  /** Rotation. */
  get rotation() {
    return this._f(Rotation);
  }
}
class Rotation extends OxmlLeafElement {
  static _Q = "a:rot";
  static _A = [":lat", ":lon", ":rev"];
  /** Latitude. Serialized as `:lat` */
  get latitude() {
    return this._g(":lat");
  }
  set latitude(v) {
    this._s(":lat", v);
  }
  /** Longitude. Serialized as `:lon` */
  get longitude() {
    return this._g(":lon");
  }
  set longitude(v) {
    this._s(":lon", v);
  }
  /** Revolution. Serialized as `:rev` */
  get revolution() {
    return this._g(":rev");
  }
  set revolution(v) {
    this._s(":rev", v);
  }
}
class NonVisualGroupShapeDrawingProperties extends OxmlCompositeElement {
  static _Q = "a:cNvGrpSpPr";
  /** Returns GroupShapeLocks. */
  get groupShapeLocks() {
    return this._f(GroupShapeLocks);
  }
  /** Returns NonVisualGroupDrawingShapePropsExtensionList. */
  get nonVisualGroupDrawingShapePropsExtensionList() {
    return this._f(NonVisualGroupDrawingShapePropsExtensionList);
  }
}
class NonVisualGraphicFrameProperties extends OxmlCompositeElement {
  static _Q = "a:nvGraphicFramePr";
  /** Returns NonVisualDrawingProperties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Non-Visual Graphic Frame Drawing Properties. */
  get nonVisualGraphicFrameDrawingProperties() {
    return this._f(NonVisualGraphicFrameDrawingProperties);
  }
}
class NonVisualGraphicFrameDrawingProperties extends OxmlCompositeElement {
  static _Q = "a:cNvGraphicFramePr";
  /** Graphic Frame Locks. */
  get graphicFrameLocks() {
    return this._f(GraphicFrameLocks);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class NonVisualPictureProperties extends OxmlCompositeElement {
  static _Q = "a:nvPicPr";
  /** Returns NonVisualDrawingProperties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Non-Visual Picture Drawing Properties. */
  get nonVisualPictureDrawingProperties() {
    return this._f(NonVisualPictureDrawingProperties);
  }
}
class NonVisualPictureDrawingProperties extends OxmlCompositeElement {
  static _Q = "a:cNvPicPr";
  static _A = [":preferRelativeResize"];
  /** preferRelativeResize. Serialized as `:preferRelativeResize` */
  get preferRelativeResize() {
    return this._g(":preferRelativeResize");
  }
  set preferRelativeResize(v) {
    this._s(":preferRelativeResize", v);
  }
  /** Returns PictureLocks. */
  get pictureLocks() {
    return this._f(PictureLocks);
  }
  /** Returns NonVisualPicturePropertiesExtensionList. */
  get nonVisualPicturePropertiesExtensionList() {
    return this._f(NonVisualPicturePropertiesExtensionList);
  }
}
class NonVisualConnectionShapeProperties extends OxmlCompositeElement {
  static _Q = "a:nvCxnSpPr";
  /** Non-Visual Drawing Properties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Non-Visual Connector Shape Drawing Properties. */
  get nonVisualConnectorShapeDrawingProperties() {
    return this._f(NonVisualConnectorShapeDrawingProperties);
  }
}
class NonVisualConnectorShapeDrawingProperties extends OxmlCompositeElement {
  static _Q = "a:cNvCxnSpPr";
  /** Connection Shape Locks. */
  get connectionShapeLocks() {
    return this._f(ConnectionShapeLocks);
  }
  /** Connection Start. */
  get startConnection() {
    return this._f(StartConnection);
  }
  /** Connection End. */
  get endConnection() {
    return this._f(EndConnection);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ShapeStyle extends OxmlCompositeElement {
  static _Q = "a:style";
  /** Returns LineReference. */
  get lineReference() {
    return this._f(LineReference);
  }
  /** Returns FillReference. */
  get fillReference() {
    return this._f(FillReference);
  }
  /** Returns EffectReference. */
  get effectReference() {
    return this._f(EffectReference);
  }
  /** Font Reference. */
  get fontReference() {
    return this._f(FontReference);
  }
}
class TextShape extends OxmlCompositeElement {
  static _Q = "a:txSp";
  /** Shape Text Body. */
  get textBody() {
    return this._f(TextBody);
  }
}
class ShapeProperties extends OxmlCompositeElement {
  static _Q = "a:spPr";
  static _A = [":bwMode"];
  /** Black and White Mode. Serialized as `:bwMode` */
  get blackWhiteMode() {
    return this._g(":bwMode");
  }
  set blackWhiteMode(v) {
    this._s(":bwMode", v);
  }
  /** 2D Transform for Individual Objects. */
  get transform2D() {
    return this._f(Transform2D);
  }
}
class NonVisualShapeProperties extends OxmlCompositeElement {
  static _Q = "a:nvSpPr";
  /** Returns NonVisualDrawingProperties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Non-Visual Shape Drawing Properties. */
  get nonVisualShapeDrawingProperties() {
    return this._f(NonVisualShapeDrawingProperties);
  }
}
class NonVisualShapeDrawingProperties extends OxmlCompositeElement {
  static _Q = "a:cNvSpPr";
  static _A = [":txBox"];
  /** Text Box. Serialized as `:txBox` */
  get textBox() {
    return this._g(":txBox");
  }
  set textBox(v) {
    this._s(":txBox", v);
  }
  /** Shape Locks. */
  get shapeLocks() {
    return this._f(ShapeLocks);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class NonVisualDrawingProperties extends OxmlCompositeElement {
  static _Q = "a:cNvPr";
  static _A = [":id", ":name", ":descr", ":hidden", ":title"];
  /** Application defined unique identifier.. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Name compatible with Object Model (non-unique).. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Description of the drawing element.. Serialized as `:descr` */
  get description() {
    return this._g(":descr");
  }
  set description(v) {
    this._s(":descr", v);
  }
  /** Flag determining to show or hide this element.. Serialized as `:hidden` */
  get hidden() {
    return this._g(":hidden");
  }
  set hidden(v) {
    this._s(":hidden", v);
  }
  /** Title. Serialized as `:title` */
  get title() {
    return this._g(":title");
  }
  set title(v) {
    this._s(":title", v);
  }
  /** Hyperlink associated with clicking or selecting the element.. */
  get hyperlinkOnClick() {
    return this._f(HyperlinkOnClick);
  }
  /** Hyperlink associated with hovering over the element.. */
  get hyperlinkOnHover() {
    return this._f(HyperlinkOnHover);
  }
  /** Future extension. */
  get nonVisualDrawingPropertiesExtensionList() {
    return this._f(NonVisualDrawingPropertiesExtensionList);
  }
}
class Transform2D extends OxmlCompositeElement {
  static _Q = "a:xfrm";
  static _A = [":rot", ":flipH", ":flipV"];
  /** Rotation. Serialized as `:rot` */
  get rotation() {
    return this._g(":rot");
  }
  set rotation(v) {
    this._s(":rot", v);
  }
  /** Horizontal Flip. Serialized as `:flipH` */
  get horizontalFlip() {
    return this._g(":flipH");
  }
  set horizontalFlip(v) {
    this._s(":flipH", v);
  }
  /** Vertical Flip. Serialized as `:flipV` */
  get verticalFlip() {
    return this._g(":flipV");
  }
  set verticalFlip(v) {
    this._s(":flipV", v);
  }
  /** Offset. */
  get offset() {
    return this._f(Offset);
  }
  /** Extents. */
  get extents() {
    return this._f(Extents);
  }
}
class UseShapeRectangle extends OxmlLeafElement {
  static _Q = "a:useSpRect";
}
class TextBody extends OxmlCompositeElement {
  static _Q = "a:txBody";
  /** Body Properties. */
  get bodyProperties() {
    return this._f(BodyProperties);
  }
  /** Text List Styles. */
  get listStyle() {
    return this._f(ListStyle);
  }
}
class BuildChart extends OxmlLeafElement {
  static _Q = "a:bldChart";
  static _A = [":bld", ":animBg"];
  /** Build. Serialized as `:bld` */
  get build() {
    return this._g(":bld");
  }
  set build(v) {
    this._s(":bld", v);
  }
  /** Animate Background. Serialized as `:animBg` */
  get animateBackground() {
    return this._g(":animBg");
  }
  set animateBackground(v) {
    this._s(":animBg", v);
  }
}
class BuildDiagram extends OxmlLeafElement {
  static _Q = "a:bldDgm";
  static _A = [":bld", ":rev"];
  /** Build. Serialized as `:bld` */
  get build() {
    return this._g(":bld");
  }
  set build(v) {
    this._s(":bld", v);
  }
  /** Reverse Animation. Serialized as `:rev` */
  get reverseAnimation() {
    return this._g(":rev");
  }
  set reverseAnimation(v) {
    this._s(":rev", v);
  }
}
class Chart extends OxmlLeafElement {
  static _Q = "a:chart";
  static _A = [":seriesIdx", ":categoryIdx", ":bldStep"];
  /** Series Index. Serialized as `:seriesIdx` */
  get seriesIndex() {
    return this._g(":seriesIdx");
  }
  set seriesIndex(v) {
    this._s(":seriesIdx", v);
  }
  /** Category Index. Serialized as `:categoryIdx` */
  get categoryIndex() {
    return this._g(":categoryIdx");
  }
  set categoryIndex(v) {
    this._s(":categoryIdx", v);
  }
  /** Animation Build Step. Serialized as `:bldStep` */
  get buildStep() {
    return this._g(":bldStep");
  }
  set buildStep(v) {
    this._s(":bldStep", v);
  }
}
class Diagram extends OxmlLeafElement {
  static _Q = "a:dgm";
  static _A = [":id", ":bldStep"];
  /** Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Animation Build Step. Serialized as `:bldStep` */
  get buildStep() {
    return this._g(":bldStep");
  }
  set buildStep(v) {
    this._s(":bldStep", v);
  }
}
class GraphicData extends OxmlCompositeElement {
  static _Q = "a:graphicData";
  static _A = [":uri"];
  /** Uniform Resource Identifier. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
}
class GraphicFrameLocks extends OxmlCompositeElement {
  static _Q = "a:graphicFrameLocks";
  static _A = [":noGrp", ":noDrilldown", ":noSelect", ":noChangeAspect", ":noMove", ":noResize"];
  /** Disallow Shape Grouping. Serialized as `:noGrp` */
  get noGrouping() {
    return this._g(":noGrp");
  }
  set noGrouping(v) {
    this._s(":noGrp", v);
  }
  /** Disallow Selection of Child Shapes. Serialized as `:noDrilldown` */
  get noDrilldown() {
    return this._g(":noDrilldown");
  }
  set noDrilldown(v) {
    this._s(":noDrilldown", v);
  }
  /** Disallow Shape Selection. Serialized as `:noSelect` */
  get noSelection() {
    return this._g(":noSelect");
  }
  set noSelection(v) {
    this._s(":noSelect", v);
  }
  /** Disallow Aspect Ratio Change. Serialized as `:noChangeAspect` */
  get noChangeAspect() {
    return this._g(":noChangeAspect");
  }
  set noChangeAspect(v) {
    this._s(":noChangeAspect", v);
  }
  /** Disallow Shape Movement. Serialized as `:noMove` */
  get noMove() {
    return this._g(":noMove");
  }
  set noMove(v) {
    this._s(":noMove", v);
  }
  /** Disallow Shape Resize. Serialized as `:noResize` */
  get noResize() {
    return this._g(":noResize");
  }
  set noResize(v) {
    this._s(":noResize", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ConnectionType extends OxmlLeafElement {
  static _A = [":id", ":idx"];
  /** Identifier. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Index. Serialized as `:idx` */
  get index() {
    return this._g(":idx");
  }
  set index(v) {
    this._s(":idx", v);
  }
}
class EndConnection extends ConnectionType {
  static _Q = "a:endCxn";
}
class StartConnection extends ConnectionType {
  static _Q = "a:stCxn";
}
class ConnectionShapeLocks extends OxmlCompositeElement {
  static _Q = "a:cxnSpLocks";
  static _A = [":noGrp", ":noSelect", ":noRot", ":noChangeAspect", ":noMove", ":noResize", ":noEditPoints", ":noAdjustHandles", ":noChangeArrowheads", ":noChangeShapeType"];
  /** Disallow Shape Grouping. Serialized as `:noGrp` */
  get noGrouping() {
    return this._g(":noGrp");
  }
  set noGrouping(v) {
    this._s(":noGrp", v);
  }
  /** Disallow Shape Selection. Serialized as `:noSelect` */
  get noSelection() {
    return this._g(":noSelect");
  }
  set noSelection(v) {
    this._s(":noSelect", v);
  }
  /** Disallow Shape Rotation. Serialized as `:noRot` */
  get noRotation() {
    return this._g(":noRot");
  }
  set noRotation(v) {
    this._s(":noRot", v);
  }
  /** Disallow Aspect Ratio Change. Serialized as `:noChangeAspect` */
  get noChangeAspect() {
    return this._g(":noChangeAspect");
  }
  set noChangeAspect(v) {
    this._s(":noChangeAspect", v);
  }
  /** Disallow Shape Movement. Serialized as `:noMove` */
  get noMove() {
    return this._g(":noMove");
  }
  set noMove(v) {
    this._s(":noMove", v);
  }
  /** Disallow Shape Resize. Serialized as `:noResize` */
  get noResize() {
    return this._g(":noResize");
  }
  set noResize(v) {
    this._s(":noResize", v);
  }
  /** Disallow Shape Point Editing. Serialized as `:noEditPoints` */
  get noEditPoints() {
    return this._g(":noEditPoints");
  }
  set noEditPoints(v) {
    this._s(":noEditPoints", v);
  }
  /** Disallow Showing Adjust Handles. Serialized as `:noAdjustHandles` */
  get noAdjustHandles() {
    return this._g(":noAdjustHandles");
  }
  set noAdjustHandles(v) {
    this._s(":noAdjustHandles", v);
  }
  /** Disallow Arrowhead Changes. Serialized as `:noChangeArrowheads` */
  get noChangeArrowheads() {
    return this._g(":noChangeArrowheads");
  }
  set noChangeArrowheads(v) {
    this._s(":noChangeArrowheads", v);
  }
  /** Disallow Shape Type Change. Serialized as `:noChangeShapeType` */
  get noChangeShapeType() {
    return this._g(":noChangeShapeType");
  }
  set noChangeShapeType(v) {
    this._s(":noChangeShapeType", v);
  }
  /** Returns ConnectorLockingExtensionList. */
  get connectorLockingExtensionList() {
    return this._f(ConnectorLockingExtensionList);
  }
}
class ShapeLocks extends OxmlCompositeElement {
  static _Q = "a:spLocks";
  static _A = [":noGrp", ":noSelect", ":noRot", ":noChangeAspect", ":noMove", ":noResize", ":noEditPoints", ":noAdjustHandles", ":noChangeArrowheads", ":noChangeShapeType", ":noTextEdit"];
  /** Disallow Shape Grouping. Serialized as `:noGrp` */
  get noGrouping() {
    return this._g(":noGrp");
  }
  set noGrouping(v) {
    this._s(":noGrp", v);
  }
  /** Disallow Shape Selection. Serialized as `:noSelect` */
  get noSelection() {
    return this._g(":noSelect");
  }
  set noSelection(v) {
    this._s(":noSelect", v);
  }
  /** Disallow Shape Rotation. Serialized as `:noRot` */
  get noRotation() {
    return this._g(":noRot");
  }
  set noRotation(v) {
    this._s(":noRot", v);
  }
  /** Disallow Aspect Ratio Change. Serialized as `:noChangeAspect` */
  get noChangeAspect() {
    return this._g(":noChangeAspect");
  }
  set noChangeAspect(v) {
    this._s(":noChangeAspect", v);
  }
  /** Disallow Shape Movement. Serialized as `:noMove` */
  get noMove() {
    return this._g(":noMove");
  }
  set noMove(v) {
    this._s(":noMove", v);
  }
  /** Disallow Shape Resize. Serialized as `:noResize` */
  get noResize() {
    return this._g(":noResize");
  }
  set noResize(v) {
    this._s(":noResize", v);
  }
  /** Disallow Shape Point Editing. Serialized as `:noEditPoints` */
  get noEditPoints() {
    return this._g(":noEditPoints");
  }
  set noEditPoints(v) {
    this._s(":noEditPoints", v);
  }
  /** Disallow Showing Adjust Handles. Serialized as `:noAdjustHandles` */
  get noAdjustHandles() {
    return this._g(":noAdjustHandles");
  }
  set noAdjustHandles(v) {
    this._s(":noAdjustHandles", v);
  }
  /** Disallow Arrowhead Changes. Serialized as `:noChangeArrowheads` */
  get noChangeArrowheads() {
    return this._g(":noChangeArrowheads");
  }
  set noChangeArrowheads(v) {
    this._s(":noChangeArrowheads", v);
  }
  /** Disallow Shape Type Change. Serialized as `:noChangeShapeType` */
  get noChangeShapeType() {
    return this._g(":noChangeShapeType");
  }
  set noChangeShapeType(v) {
    this._s(":noChangeShapeType", v);
  }
  /** Disallow Shape Text Editing. Serialized as `:noTextEdit` */
  get noTextEdit() {
    return this._g(":noTextEdit");
  }
  set noTextEdit(v) {
    this._s(":noTextEdit", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class PositiveSize2DType extends OxmlLeafElement {
  static _A = [":cx", ":cy"];
  /** Extent Length. Serialized as `:cx` */
  get cx() {
    return this._g(":cx");
  }
  set cx(v) {
    this._s(":cx", v);
  }
  /** Extent Width. Serialized as `:cy` */
  get cy() {
    return this._g(":cy");
  }
  set cy(v) {
    this._s(":cy", v);
  }
}
class ChildExtents extends PositiveSize2DType {
  static _Q = "a:chExt";
}
class Extents extends PositiveSize2DType {
  static _Q = "a:ext";
}
class Point2DType extends OxmlLeafElement {
  static _A = [":x", ":y"];
  /** X-Axis Coordinate. Serialized as `:x` */
  get x() {
    return this._g(":x");
  }
  set x(v) {
    this._s(":x", v);
  }
  /** Y-Axis Coordinate. Serialized as `:y` */
  get y() {
    return this._g(":y");
  }
  set y(v) {
    this._s(":y", v);
  }
}
class ChildOffset extends Point2DType {
  static _Q = "a:chOff";
}
class Offset extends Point2DType {
  static _Q = "a:off";
}
class RatioType extends OxmlLeafElement {
  static _A = [":n", ":d"];
  /** Numerator. Serialized as `:n` */
  get numerator() {
    return this._g(":n");
  }
  set numerator(v) {
    this._s(":n", v);
  }
  /** Denominator. Serialized as `:d` */
  get denominator() {
    return this._g(":d");
  }
  set denominator(v) {
    this._s(":d", v);
  }
}
class ScaleY extends RatioType {
  static _Q = "a:sy";
}
class ScaleX extends RatioType {
  static _Q = "a:sx";
}
class Color2Type extends OxmlCompositeElement {
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(RgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(RgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(HslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(SystemColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(PresetColor);
  }
}
class FollowedHyperlinkColor extends Color2Type {
  static _Q = "a:folHlink";
}
class Hyperlink extends Color2Type {
  static _Q = "a:hlink";
}
class Accent6Color extends Color2Type {
  static _Q = "a:accent6";
}
class Accent5Color extends Color2Type {
  static _Q = "a:accent5";
}
class Accent4Color extends Color2Type {
  static _Q = "a:accent4";
}
class Accent3Color extends Color2Type {
  static _Q = "a:accent3";
}
class Accent2Color extends Color2Type {
  static _Q = "a:accent2";
}
class Accent1Color extends Color2Type {
  static _Q = "a:accent1";
}
class Light2Color extends Color2Type {
  static _Q = "a:lt2";
}
class Dark2Color extends Color2Type {
  static _Q = "a:dk2";
}
class Light1Color extends Color2Type {
  static _Q = "a:lt1";
}
class Dark1Color extends Color2Type {
  static _Q = "a:dk1";
}
class FormatScheme extends OxmlCompositeElement {
  static _Q = "a:fmtScheme";
  static _A = [":name"];
  /** Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Fill Style List. */
  get fillStyleList() {
    return this._f(FillStyleList);
  }
  /** Line Style List. */
  get lineStyleList() {
    return this._f(LineStyleList);
  }
  /** Effect Style List. */
  get effectStyleList() {
    return this._f(EffectStyleList);
  }
  /** Background Fill Style List. */
  get backgroundFillStyleList() {
    return this._f(BackgroundFillStyleList);
  }
}
class FontScheme extends OxmlCompositeElement {
  static _Q = "a:fontScheme";
  static _A = [":name"];
  /** Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Major Font. */
  get majorFont() {
    return this._f(MajorFont);
  }
  /** Minor fonts. */
  get minorFont() {
    return this._f(MinorFont);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ColorScheme extends OxmlCompositeElement {
  static _Q = "a:clrScheme";
  static _A = [":name"];
  /** Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Dark 1. */
  get dark1Color() {
    return this._f(Dark1Color);
  }
  /** Light 1. */
  get light1Color() {
    return this._f(Light1Color);
  }
  /** Dark 2. */
  get dark2Color() {
    return this._f(Dark2Color);
  }
  /** Light 2. */
  get light2Color() {
    return this._f(Light2Color);
  }
  /** Accent 1. */
  get accent1Color() {
    return this._f(Accent1Color);
  }
  /** Accent 2. */
  get accent2Color() {
    return this._f(Accent2Color);
  }
  /** Accent 3. */
  get accent3Color() {
    return this._f(Accent3Color);
  }
  /** Accent 4. */
  get accent4Color() {
    return this._f(Accent4Color);
  }
  /** Accent 5. */
  get accent5Color() {
    return this._f(Accent5Color);
  }
  /** Accent 6. */
  get accent6Color() {
    return this._f(Accent6Color);
  }
  /** Hyperlink. */
  get hyperlink() {
    return this._f(Hyperlink);
  }
  /** Followed Hyperlink. */
  get followedHyperlinkColor() {
    return this._f(FollowedHyperlinkColor);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class BackgroundFillStyleList extends OxmlCompositeElement {
  static _Q = "a:bgFillStyleLst";
}
class EffectStyleList extends OxmlCompositeElement {
  static _Q = "a:effectStyleLst";
}
class LineStyleList extends OxmlCompositeElement {
  static _Q = "a:lnStyleLst";
}
class FillStyleList extends OxmlCompositeElement {
  static _Q = "a:fillStyleLst";
}
class EffectStyle extends OxmlCompositeElement {
  static _Q = "a:effectStyle";
}
class Scene3DType extends OxmlCompositeElement {
  static _Q = "a:scene3d";
  /** Camera. */
  get camera() {
    return this._f(Camera);
  }
  /** Light Rig. */
  get lightRig() {
    return this._f(LightRig);
  }
  /** Backdrop Plane. */
  get backdrop() {
    return this._f(Backdrop);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class SupplementalFont extends OxmlLeafElement {
  static _Q = "a:font";
  static _A = [":script", ":typeface"];
  /** Script. Serialized as `:script` */
  get script() {
    return this._g(":script");
  }
  set script(v) {
    this._s(":script", v);
  }
  /** Typeface. Serialized as `:typeface` */
  get typeface() {
    return this._g(":typeface");
  }
  set typeface(v) {
    this._s(":typeface", v);
  }
}
class CustomColor extends OxmlCompositeElement {
  static _Q = "a:custClr";
  static _A = [":name"];
  /** Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(RgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(RgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(HslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(SystemColor);
  }
  /** Scheme Color. */
  get schemeColor() {
    return this._f(SchemeColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(PresetColor);
  }
}
class AudioCDTimeType extends OxmlLeafElement {
  static _A = [":track", ":time"];
  /** Track. Serialized as `:track` */
  get track() {
    return this._g(":track");
  }
  set track(v) {
    this._s(":track", v);
  }
  /** Time. Serialized as `:time` */
  get time() {
    return this._g(":time");
  }
  set time(v) {
    this._s(":time", v);
  }
}
class EndTime extends AudioCDTimeType {
  static _Q = "a:end";
}
class StartTime extends AudioCDTimeType {
  static _Q = "a:st";
}
class ExtensionList extends OxmlCompositeElement {
  static _Q = "a:extLst";
}
class TableStyleList extends OxmlPartRootElement {
  static _Q = "a:tblStyleLst";
  static _A = [":def"];
  /** Default. Serialized as `:def` */
  get default() {
    return this._g(":def");
  }
  set default(v) {
    this._s(":def", v);
  }
}
class Table extends OxmlCompositeElement {
  static _Q = "a:tbl";
  /** Table Properties. */
  get tableProperties() {
    return this._f(TableProperties);
  }
  /** Table Grid. */
  get tableGrid() {
    return this._f(TableGrid);
  }
}
class EmptyType extends OxmlLeafElement {
}
class MasterColorMapping extends EmptyType {
  static _Q = "a:masterClrMapping";
}
class ThemeManager extends EmptyType {
  static _Q = "a:themeManager";
}
class ThemeOverride extends OxmlPartRootElement {
  static _Q = "a:themeOverride";
  /** Color Scheme. */
  get colorScheme() {
    return this._f(ColorScheme);
  }
  /** Returns FontScheme. */
  get fontScheme() {
    return this._f(FontScheme);
  }
  /** Returns FormatScheme. */
  get formatScheme() {
    return this._f(FormatScheme);
  }
}
class Theme extends OxmlPartRootElement {
  static _Q = "a:theme";
  static _A = [":name", "thm15:id"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** id. Serialized as `thm15:id` */
  get themeId() {
    return this._g("thm15:id");
  }
  set themeId(v) {
    this._s("thm15:id", v);
  }
  /** Returns ThemeElements. */
  get themeElements() {
    return this._f(ThemeElements);
  }
  /** Returns ObjectDefaults. */
  get objectDefaults() {
    return this._f(ObjectDefaults);
  }
  /** Returns ExtraColorSchemeList. */
  get extraColorSchemeList() {
    return this._f(ExtraColorSchemeList);
  }
  /** Returns CustomColorList. */
  get customColorList() {
    return this._f(CustomColorList);
  }
  /** Returns OfficeStyleSheetExtensionList. */
  get officeStyleSheetExtensionList() {
    return this._f(OfficeStyleSheetExtensionList);
  }
}
class Blip extends OxmlCompositeElement {
  static _Q = "a:blip";
  static _A = ["r:embed", "r:link", ":cstate"];
  /** Embedded Picture Reference. Serialized as `r:embed` */
  get embed() {
    return this._g("r:embed");
  }
  set embed(v) {
    this._s("r:embed", v);
  }
  /** Linked Picture Reference. Serialized as `r:link` */
  get link() {
    return this._g("r:link");
  }
  set link(v) {
    this._s("r:link", v);
  }
  /** Compression state for blips.. Serialized as `:cstate` */
  get compressionState() {
    return this._g(":cstate");
  }
  set compressionState(v) {
    this._s(":cstate", v);
  }
}
class Graphic extends OxmlCompositeElement {
  static _Q = "a:graphic";
  /** Graphic Object Data. */
  get graphicData() {
    return this._f(GraphicData);
  }
}
class Field extends OxmlCompositeElement {
  static _Q = "a:fld";
  static _A = [":id", ":type"];
  /** Field ID. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Field Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Text Character Properties. */
  get runProperties() {
    return this._f(RunProperties);
  }
  /** Text Paragraph Properties. */
  get paragraphProperties() {
    return this._f(ParagraphProperties);
  }
  /** Returns Text. */
  get text() {
    return this._f(Text);
  }
}
class Break extends OxmlCompositeElement {
  static _Q = "a:br";
  /** Text Run Properties. */
  get runProperties() {
    return this._f(RunProperties);
  }
}
class Run extends OxmlCompositeElement {
  static _Q = "a:r";
  /** Text Character Properties. */
  get runProperties() {
    return this._f(RunProperties);
  }
  /** Text String. */
  get text() {
    return this._f(Text);
  }
}
class UnderlineFill extends OxmlCompositeElement {
  static _Q = "a:uFill";
  /** Returns NoFill. */
  get noFill() {
    return this._f(NoFill);
  }
  /** Returns SolidFill. */
  get solidFill() {
    return this._f(SolidFill);
  }
  /** Returns GradientFill. */
  get gradientFill() {
    return this._f(GradientFill);
  }
  /** Returns BlipFill. */
  get blipFill() {
    return this._f(BlipFill);
  }
  /** Pattern Fill. */
  get patternFill() {
    return this._f(PatternFill);
  }
  /** Group Fill. */
  get groupFill() {
    return this._f(GroupFill);
  }
}
class UnderlineFillText extends OxmlLeafElement {
  static _Q = "a:uFillTx";
}
class LinePropertiesType extends OxmlCompositeElement {
  static _A = [":w", ":cap", ":cmpd", ":algn"];
  /** line width. Serialized as `:w` */
  get width() {
    return this._g(":w");
  }
  set width(v) {
    this._s(":w", v);
  }
  /** line cap. Serialized as `:cap` */
  get capType() {
    return this._g(":cap");
  }
  set capType(v) {
    this._s(":cap", v);
  }
  /** compound line type. Serialized as `:cmpd` */
  get compoundLineType() {
    return this._g(":cmpd");
  }
  set compoundLineType(v) {
    this._s(":cmpd", v);
  }
  /** pen alignment. Serialized as `:algn` */
  get alignment() {
    return this._g(":algn");
  }
  set alignment(v) {
    this._s(":algn", v);
  }
}
class BottomLeftToTopRightBorderLineProperties extends LinePropertiesType {
  static _Q = "a:lnBlToTr";
}
class TopLeftToBottomRightBorderLineProperties extends LinePropertiesType {
  static _Q = "a:lnTlToBr";
}
class BottomBorderLineProperties extends LinePropertiesType {
  static _Q = "a:lnB";
}
class TopBorderLineProperties extends LinePropertiesType {
  static _Q = "a:lnT";
}
class RightBorderLineProperties extends LinePropertiesType {
  static _Q = "a:lnR";
}
class LeftBorderLineProperties extends LinePropertiesType {
  static _Q = "a:lnL";
}
class Outline extends LinePropertiesType {
  static _Q = "a:ln";
}
class Underline extends LinePropertiesType {
  static _Q = "a:uLn";
}
class UnderlineFollowsText extends OxmlLeafElement {
  static _Q = "a:uLnTx";
}
class PictureBullet extends OxmlCompositeElement {
  static _Q = "a:buBlip";
  /** Blip. */
  get blip() {
    return this._f(Blip);
  }
}
class CharacterBullet extends OxmlLeafElement {
  static _Q = "a:buChar";
  static _A = [":char"];
  /** Bullet Character. Serialized as `:char` */
  get char() {
    return this._g(":char");
  }
  set char(v) {
    this._s(":char", v);
  }
}
class AutoNumberedBullet extends OxmlLeafElement {
  static _Q = "a:buAutoNum";
  static _A = [":type", ":startAt"];
  /** Bullet Autonumbering Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Start Numbering At. Serialized as `:startAt` */
  get startAt() {
    return this._g(":startAt");
  }
  set startAt(v) {
    this._s(":startAt", v);
  }
}
class NoBullet extends OxmlLeafElement {
  static _Q = "a:buNone";
}
class TextFontType extends OxmlLeafElement {
  static _A = [":typeface", ":panose", ":pitchFamily", ":charset"];
  /** Text Typeface. Serialized as `:typeface` */
  get typeface() {
    return this._g(":typeface");
  }
  set typeface(v) {
    this._s(":typeface", v);
  }
  /** Panose Setting. Serialized as `:panose` */
  get panose() {
    return this._g(":panose");
  }
  set panose(v) {
    this._s(":panose", v);
  }
  /** Similar Font Family. Serialized as `:pitchFamily` */
  get pitchFamily() {
    return this._g(":pitchFamily");
  }
  set pitchFamily(v) {
    this._s(":pitchFamily", v);
  }
  /** Similar Character Set. Serialized as `:charset` */
  get characterSet() {
    return this._g(":charset");
  }
  set characterSet(v) {
    this._s(":charset", v);
  }
}
class SymbolFont extends TextFontType {
  static _Q = "a:sym";
}
class ComplexScriptFont extends TextFontType {
  static _Q = "a:cs";
}
class EastAsianFont extends TextFontType {
  static _Q = "a:ea";
}
class LatinFont extends TextFontType {
  static _Q = "a:latin";
}
class BulletFont extends TextFontType {
  static _Q = "a:buFont";
}
class BulletFontText extends OxmlLeafElement {
  static _Q = "a:buFontTx";
}
class BulletSizePoints extends OxmlLeafElement {
  static _Q = "a:buSzPts";
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class BulletSizePercentage extends OxmlLeafElement {
  static _Q = "a:buSzPct";
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class BulletSizeText extends OxmlLeafElement {
  static _Q = "a:buSzTx";
}
class ColorType extends OxmlCompositeElement {
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(RgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(RgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(HslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(SystemColor);
  }
  /** Scheme Color. */
  get schemeColor() {
    return this._f(SchemeColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(PresetColor);
  }
}
class Highlight extends ColorType {
  static _Q = "a:highlight";
}
class BackgroundColor extends ColorType {
  static _Q = "a:bgClr";
}
class ForegroundColor extends ColorType {
  static _Q = "a:fgClr";
}
class ColorTo extends ColorType {
  static _Q = "a:clrTo";
}
class ColorFrom extends ColorType {
  static _Q = "a:clrFrom";
}
class ContourColor extends ColorType {
  static _Q = "a:contourClr";
}
class ExtrusionColor extends ColorType {
  static _Q = "a:extrusionClr";
}
class BulletColor extends ColorType {
  static _Q = "a:buClr";
}
class BulletColorText extends OxmlLeafElement {
  static _Q = "a:buClrTx";
}
class ShapeAutoFit extends OxmlLeafElement {
  static _Q = "a:spAutoFit";
}
class NormalAutoFit extends OxmlLeafElement {
  static _Q = "a:normAutofit";
  static _A = [":fontScale", ":lnSpcReduction"];
  /** Font Scale. Serialized as `:fontScale` */
  get fontScale() {
    return this._g(":fontScale");
  }
  set fontScale(v) {
    this._s(":fontScale", v);
  }
  /** Line Space Reduction. Serialized as `:lnSpcReduction` */
  get lineSpaceReduction() {
    return this._g(":lnSpcReduction");
  }
  set lineSpaceReduction(v) {
    this._s(":lnSpcReduction", v);
  }
}
class NoAutoFit extends OxmlLeafElement {
  static _Q = "a:noAutofit";
}
class FontReference extends OxmlCompositeElement {
  static _Q = "a:fontRef";
  static _A = [":idx"];
  /** Identifier. Serialized as `:idx` */
  get index() {
    return this._g(":idx");
  }
  set index(v) {
    this._s(":idx", v);
  }
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(RgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(RgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(HslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(SystemColor);
  }
  /** Scheme Color. */
  get schemeColor() {
    return this._f(SchemeColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(PresetColor);
  }
}
class FontCollectionType extends OxmlCompositeElement {
  /** Latin Font. */
  get latinFont() {
    return this._f(LatinFont);
  }
  /** East Asian Font. */
  get eastAsianFont() {
    return this._f(EastAsianFont);
  }
  /** Complex Script Font. */
  get complexScriptFont() {
    return this._f(ComplexScriptFont);
  }
}
class MinorFont extends FontCollectionType {
  static _Q = "a:minorFont";
}
class MajorFont extends FontCollectionType {
  static _Q = "a:majorFont";
}
class Fonts extends FontCollectionType {
  static _Q = "a:font";
}
class EffectPropertiesType extends OxmlCompositeElement {
  static _Q = "a:effect";
  /** Effect Container. */
  get effectList() {
    return this._f(EffectList);
  }
  /** Effect Container. */
  get effectDag() {
    return this._f(EffectDag);
  }
}
class StyleMatrixReferenceType extends OxmlCompositeElement {
  static _A = [":idx"];
  /** Style Matrix Index. Serialized as `:idx` */
  get index() {
    return this._g(":idx");
  }
  set index(v) {
    this._s(":idx", v);
  }
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(RgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(RgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(HslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(SystemColor);
  }
  /** Scheme Color. */
  get schemeColor() {
    return this._f(SchemeColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(PresetColor);
  }
}
class LineReference extends StyleMatrixReferenceType {
  static _Q = "a:lnRef";
}
class EffectReference extends StyleMatrixReferenceType {
  static _Q = "a:effectRef";
}
class FillReference extends StyleMatrixReferenceType {
  static _Q = "a:fillRef";
}
class FillProperties extends OxmlCompositeElement {
  static _Q = "a:fill";
  /** Returns NoFill. */
  get noFill() {
    return this._f(NoFill);
  }
  /** Returns SolidFill. */
  get solidFill() {
    return this._f(SolidFill);
  }
  /** Returns GradientFill. */
  get gradientFill() {
    return this._f(GradientFill);
  }
  /** Returns BlipFill. */
  get blipFill() {
    return this._f(BlipFill);
  }
  /** Pattern Fill. */
  get patternFill() {
    return this._f(PatternFill);
  }
  /** Group Fill. */
  get groupFill() {
    return this._f(GroupFill);
  }
}
class CustomDash extends OxmlCompositeElement {
  static _Q = "a:custDash";
}
class PresetDash extends OxmlLeafElement {
  static _Q = "a:prstDash";
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class Miter extends OxmlLeafElement {
  static _Q = "a:miter";
  static _A = [":lim"];
  /** Miter Join Limit. Serialized as `:lim` */
  get limit() {
    return this._g(":lim");
  }
  set limit(v) {
    this._s(":lim", v);
  }
}
class LineJoinBevel extends OxmlLeafElement {
  static _Q = "a:bevel";
}
class Round extends OxmlLeafElement {
  static _Q = "a:round";
}
class PresetTextWrap extends OxmlCompositeElement {
  static _Q = "a:prstTxWarp";
  static _A = [":prst"];
  /** Preset Warp Shape. Serialized as `:prst` */
  get preset() {
    return this._g(":prst");
  }
  set preset(v) {
    this._s(":prst", v);
  }
  /** Adjust Value List. */
  get adjustValueList() {
    return this._f(AdjustValueList);
  }
}
class PresetGeometry extends OxmlCompositeElement {
  static _Q = "a:prstGeom";
  static _A = [":prst"];
  /** Preset Shape. Serialized as `:prst` */
  get preset() {
    return this._g(":prst");
  }
  set preset(v) {
    this._s(":prst", v);
  }
  /** List of Shape Adjust Values. */
  get adjustValueList() {
    return this._f(AdjustValueList);
  }
}
class CustomGeometry extends OxmlCompositeElement {
  static _Q = "a:custGeom";
  /** Adjust Value List. */
  get adjustValueList() {
    return this._f(AdjustValueList);
  }
  /** List of Shape Guides. */
  get shapeGuideList() {
    return this._f(ShapeGuideList);
  }
  /** List of Shape Adjust Handles. */
  get adjustHandleList() {
    return this._f(AdjustHandleList);
  }
  /** List of Shape Connection Sites. */
  get connectionSiteList() {
    return this._f(ConnectionSiteList);
  }
  /** Shape Text Rectangle. */
  get rectangle() {
    return this._f(Rectangle);
  }
  /** List of Shape Paths. */
  get pathList() {
    return this._f(PathList);
  }
}
class EffectList extends OxmlCompositeElement {
  static _Q = "a:effectLst";
  /** Blur Effect. */
  get blur() {
    return this._f(Blur);
  }
  /** Returns FillOverlay. */
  get fillOverlay() {
    return this._f(FillOverlay);
  }
  /** Returns Glow. */
  get glow() {
    return this._f(Glow);
  }
  /** Returns InnerShadow. */
  get innerShadow() {
    return this._f(InnerShadow);
  }
  /** Returns OuterShadow. */
  get outerShadow() {
    return this._f(OuterShadow);
  }
  /** Returns PresetShadow. */
  get presetShadow() {
    return this._f(PresetShadow);
  }
  /** Returns Reflection. */
  get reflection() {
    return this._f(Reflection);
  }
  /** Returns SoftEdge. */
  get softEdge() {
    return this._f(SoftEdge);
  }
}
class TransformEffect extends OxmlLeafElement {
  static _Q = "a:xfrm";
  static _A = [":sx", ":sy", ":kx", ":ky", ":tx", ":ty"];
  /** Horizontal Ratio. Serialized as `:sx` */
  get horizontalRatio() {
    return this._g(":sx");
  }
  set horizontalRatio(v) {
    this._s(":sx", v);
  }
  /** Vertical Ratio. Serialized as `:sy` */
  get verticalRatio() {
    return this._g(":sy");
  }
  set verticalRatio(v) {
    this._s(":sy", v);
  }
  /** Horizontal Skew. Serialized as `:kx` */
  get horizontalSkew() {
    return this._g(":kx");
  }
  set horizontalSkew(v) {
    this._s(":kx", v);
  }
  /** Vertical Skew. Serialized as `:ky` */
  get verticalSkew() {
    return this._g(":ky");
  }
  set verticalSkew(v) {
    this._s(":ky", v);
  }
  /** Horizontal Shift. Serialized as `:tx` */
  get horizontalShift() {
    return this._g(":tx");
  }
  set horizontalShift(v) {
    this._s(":tx", v);
  }
  /** Vertical Shift. Serialized as `:ty` */
  get verticalShift() {
    return this._g(":ty");
  }
  set verticalShift(v) {
    this._s(":ty", v);
  }
}
class TintEffect extends OxmlLeafElement {
  static _Q = "a:tint";
  static _A = [":hue", ":amt"];
  /** Hue. Serialized as `:hue` */
  get hue() {
    return this._g(":hue");
  }
  set hue(v) {
    this._s(":hue", v);
  }
  /** Amount. Serialized as `:amt` */
  get amount() {
    return this._g(":amt");
  }
  set amount(v) {
    this._s(":amt", v);
  }
}
class SoftEdge extends OxmlLeafElement {
  static _Q = "a:softEdge";
  static _A = [":rad"];
  /** Radius. Serialized as `:rad` */
  get radius() {
    return this._g(":rad");
  }
  set radius(v) {
    this._s(":rad", v);
  }
}
class RelativeOffset extends OxmlLeafElement {
  static _Q = "a:relOff";
  static _A = [":tx", ":ty"];
  /** Offset X. Serialized as `:tx` */
  get offsetX() {
    return this._g(":tx");
  }
  set offsetX(v) {
    this._s(":tx", v);
  }
  /** Offset Y. Serialized as `:ty` */
  get offsetY() {
    return this._g(":ty");
  }
  set offsetY(v) {
    this._s(":ty", v);
  }
}
class Reflection extends OxmlLeafElement {
  static _Q = "a:reflection";
  static _A = [":blurRad", ":stA", ":stPos", ":endA", ":endPos", ":dist", ":dir", ":fadeDir", ":sx", ":sy", ":kx", ":ky", ":algn", ":rotWithShape"];
  /** Blur Radius. Serialized as `:blurRad` */
  get blurRadius() {
    return this._g(":blurRad");
  }
  set blurRadius(v) {
    this._s(":blurRad", v);
  }
  /** Start Opacity. Serialized as `:stA` */
  get startOpacity() {
    return this._g(":stA");
  }
  set startOpacity(v) {
    this._s(":stA", v);
  }
  /** Start Position. Serialized as `:stPos` */
  get startPosition() {
    return this._g(":stPos");
  }
  set startPosition(v) {
    this._s(":stPos", v);
  }
  /** End Alpha. Serialized as `:endA` */
  get endAlpha() {
    return this._g(":endA");
  }
  set endAlpha(v) {
    this._s(":endA", v);
  }
  /** End Position. Serialized as `:endPos` */
  get endPosition() {
    return this._g(":endPos");
  }
  set endPosition(v) {
    this._s(":endPos", v);
  }
  /** Distance. Serialized as `:dist` */
  get distance() {
    return this._g(":dist");
  }
  set distance(v) {
    this._s(":dist", v);
  }
  /** Direction. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
  /** Fade Direction. Serialized as `:fadeDir` */
  get fadeDirection() {
    return this._g(":fadeDir");
  }
  set fadeDirection(v) {
    this._s(":fadeDir", v);
  }
  /** Horizontal Ratio. Serialized as `:sx` */
  get horizontalRatio() {
    return this._g(":sx");
  }
  set horizontalRatio(v) {
    this._s(":sx", v);
  }
  /** Vertical Ratio. Serialized as `:sy` */
  get verticalRatio() {
    return this._g(":sy");
  }
  set verticalRatio(v) {
    this._s(":sy", v);
  }
  /** Horizontal Skew. Serialized as `:kx` */
  get horizontalSkew() {
    return this._g(":kx");
  }
  set horizontalSkew(v) {
    this._s(":kx", v);
  }
  /** Vertical Skew. Serialized as `:ky` */
  get verticalSkew() {
    return this._g(":ky");
  }
  set verticalSkew(v) {
    this._s(":ky", v);
  }
  /** Shadow Alignment. Serialized as `:algn` */
  get alignment() {
    return this._g(":algn");
  }
  set alignment(v) {
    this._s(":algn", v);
  }
  /** Rotate With Shape. Serialized as `:rotWithShape` */
  get rotateWithShape() {
    return this._g(":rotWithShape");
  }
  set rotateWithShape(v) {
    this._s(":rotWithShape", v);
  }
}
class PresetShadow extends OxmlCompositeElement {
  static _Q = "a:prstShdw";
  static _A = [":prst", ":dist", ":dir"];
  /** Preset Shadow. Serialized as `:prst` */
  get preset() {
    return this._g(":prst");
  }
  set preset(v) {
    this._s(":prst", v);
  }
  /** Distance. Serialized as `:dist` */
  get distance() {
    return this._g(":dist");
  }
  set distance(v) {
    this._s(":dist", v);
  }
  /** Direction. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(RgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(RgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(HslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(SystemColor);
  }
  /** Scheme Color. */
  get schemeColor() {
    return this._f(SchemeColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(PresetColor);
  }
}
class OuterShadow extends OxmlCompositeElement {
  static _Q = "a:outerShdw";
  static _A = [":blurRad", ":dist", ":dir", ":sx", ":sy", ":kx", ":ky", ":algn", ":rotWithShape"];
  /** Blur Radius. Serialized as `:blurRad` */
  get blurRadius() {
    return this._g(":blurRad");
  }
  set blurRadius(v) {
    this._s(":blurRad", v);
  }
  /** Shadow Offset Distance. Serialized as `:dist` */
  get distance() {
    return this._g(":dist");
  }
  set distance(v) {
    this._s(":dist", v);
  }
  /** Shadow Direction. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
  /** Horizontal Scaling Factor. Serialized as `:sx` */
  get horizontalRatio() {
    return this._g(":sx");
  }
  set horizontalRatio(v) {
    this._s(":sx", v);
  }
  /** Vertical Scaling Factor. Serialized as `:sy` */
  get verticalRatio() {
    return this._g(":sy");
  }
  set verticalRatio(v) {
    this._s(":sy", v);
  }
  /** Horizontal Skew. Serialized as `:kx` */
  get horizontalSkew() {
    return this._g(":kx");
  }
  set horizontalSkew(v) {
    this._s(":kx", v);
  }
  /** Vertical Skew. Serialized as `:ky` */
  get verticalSkew() {
    return this._g(":ky");
  }
  set verticalSkew(v) {
    this._s(":ky", v);
  }
  /** Shadow Alignment. Serialized as `:algn` */
  get alignment() {
    return this._g(":algn");
  }
  set alignment(v) {
    this._s(":algn", v);
  }
  /** Rotate With Shape. Serialized as `:rotWithShape` */
  get rotateWithShape() {
    return this._g(":rotWithShape");
  }
  set rotateWithShape(v) {
    this._s(":rotWithShape", v);
  }
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(RgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(RgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(HslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(SystemColor);
  }
  /** Scheme Color. */
  get schemeColor() {
    return this._f(SchemeColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(PresetColor);
  }
}
class LuminanceEffect extends OxmlLeafElement {
  static _Q = "a:lum";
  static _A = [":bright", ":contrast"];
  /** Brightness. Serialized as `:bright` */
  get brightness() {
    return this._g(":bright");
  }
  set brightness(v) {
    this._s(":bright", v);
  }
  /** Contrast. Serialized as `:contrast` */
  get contrast() {
    return this._g(":contrast");
  }
  set contrast(v) {
    this._s(":contrast", v);
  }
}
class InnerShadow extends OxmlCompositeElement {
  static _Q = "a:innerShdw";
  static _A = [":blurRad", ":dist", ":dir"];
  /** Blur Radius. Serialized as `:blurRad` */
  get blurRadius() {
    return this._g(":blurRad");
  }
  set blurRadius(v) {
    this._s(":blurRad", v);
  }
  /** Distance. Serialized as `:dist` */
  get distance() {
    return this._g(":dist");
  }
  set distance(v) {
    this._s(":dist", v);
  }
  /** Direction. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(RgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(RgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(HslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(SystemColor);
  }
  /** Scheme Color. */
  get schemeColor() {
    return this._f(SchemeColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(PresetColor);
  }
}
class Hsl extends OxmlLeafElement {
  static _Q = "a:hsl";
  static _A = [":hue", ":sat", ":lum"];
  /** Hue. Serialized as `:hue` */
  get hue() {
    return this._g(":hue");
  }
  set hue(v) {
    this._s(":hue", v);
  }
  /** Saturation. Serialized as `:sat` */
  get saturation() {
    return this._g(":sat");
  }
  set saturation(v) {
    this._s(":sat", v);
  }
  /** Luminance. Serialized as `:lum` */
  get luminance() {
    return this._g(":lum");
  }
  set luminance(v) {
    this._s(":lum", v);
  }
}
class Grayscale extends OxmlLeafElement {
  static _Q = "a:grayscl";
}
class Glow extends OxmlCompositeElement {
  static _Q = "a:glow";
  static _A = [":rad"];
  /** Radius. Serialized as `:rad` */
  get radius() {
    return this._g(":rad");
  }
  set radius(v) {
    this._s(":rad", v);
  }
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(RgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(RgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(HslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(SystemColor);
  }
  /** Scheme Color. */
  get schemeColor() {
    return this._f(SchemeColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(PresetColor);
  }
}
class FillOverlay extends OxmlCompositeElement {
  static _Q = "a:fillOverlay";
  static _A = [":blend"];
  /** Blend. Serialized as `:blend` */
  get blend() {
    return this._g(":blend");
  }
  set blend(v) {
    this._s(":blend", v);
  }
  /** Returns NoFill. */
  get noFill() {
    return this._f(NoFill);
  }
  /** Returns SolidFill. */
  get solidFill() {
    return this._f(SolidFill);
  }
  /** Returns GradientFill. */
  get gradientFill() {
    return this._f(GradientFill);
  }
  /** Returns BlipFill. */
  get blipFill() {
    return this._f(BlipFill);
  }
  /** Pattern Fill. */
  get patternFill() {
    return this._f(PatternFill);
  }
  /** Group Fill. */
  get groupFill() {
    return this._f(GroupFill);
  }
}
class Fill extends OxmlCompositeElement {
  static _Q = "a:fill";
  /** Returns NoFill. */
  get noFill() {
    return this._f(NoFill);
  }
  /** Returns SolidFill. */
  get solidFill() {
    return this._f(SolidFill);
  }
  /** Returns GradientFill. */
  get gradientFill() {
    return this._f(GradientFill);
  }
  /** Returns BlipFill. */
  get blipFill() {
    return this._f(BlipFill);
  }
  /** Pattern Fill. */
  get patternFill() {
    return this._f(PatternFill);
  }
  /** Group Fill. */
  get groupFill() {
    return this._f(GroupFill);
  }
}
class Duotone extends OxmlCompositeElement {
  static _Q = "a:duotone";
}
class ColorReplacement extends OxmlCompositeElement {
  static _Q = "a:clrRepl";
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(RgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(RgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(HslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(SystemColor);
  }
  /** Scheme Color. */
  get schemeColor() {
    return this._f(SchemeColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(PresetColor);
  }
}
class ColorChange extends OxmlCompositeElement {
  static _Q = "a:clrChange";
  static _A = [":useA"];
  /** Consider Alpha Values. Serialized as `:useA` */
  get useAlpha() {
    return this._g(":useA");
  }
  set useAlpha(v) {
    this._s(":useA", v);
  }
  /** Change Color From. */
  get colorFrom() {
    return this._f(ColorFrom);
  }
  /** Change Color To. */
  get colorTo() {
    return this._f(ColorTo);
  }
}
class Blur extends OxmlLeafElement {
  static _Q = "a:blur";
  static _A = [":rad", ":grow"];
  /** Radius. Serialized as `:rad` */
  get radius() {
    return this._g(":rad");
  }
  set radius(v) {
    this._s(":rad", v);
  }
  /** Grow Bounds. Serialized as `:grow` */
  get grow() {
    return this._g(":grow");
  }
  set grow(v) {
    this._s(":grow", v);
  }
}
class Blend extends OxmlCompositeElement {
  static _Q = "a:blend";
  static _A = [":blend"];
  /** Blend Mode. Serialized as `:blend` */
  get blendMode() {
    return this._g(":blend");
  }
  set blendMode(v) {
    this._s(":blend", v);
  }
  /** Effect to blend. */
  get effectContainer() {
    return this._f(EffectContainer);
  }
}
class BiLevel extends OxmlLeafElement {
  static _Q = "a:biLevel";
  static _A = [":thresh"];
  /** Threshold. Serialized as `:thresh` */
  get threshold() {
    return this._g(":thresh");
  }
  set threshold(v) {
    this._s(":thresh", v);
  }
}
class AlphaReplace extends OxmlLeafElement {
  static _Q = "a:alphaRepl";
  static _A = [":a"];
  /** Alpha. Serialized as `:a` */
  get alpha() {
    return this._g(":a");
  }
  set alpha(v) {
    this._s(":a", v);
  }
}
class AlphaOutset extends OxmlLeafElement {
  static _Q = "a:alphaOutset";
  static _A = [":rad"];
  /** Radius. Serialized as `:rad` */
  get radius() {
    return this._g(":rad");
  }
  set radius(v) {
    this._s(":rad", v);
  }
}
class AlphaModulationFixed extends OxmlLeafElement {
  static _Q = "a:alphaModFix";
  static _A = [":amt"];
  /** Amount. Serialized as `:amt` */
  get amount() {
    return this._g(":amt");
  }
  set amount(v) {
    this._s(":amt", v);
  }
}
class AlphaModulationEffect extends OxmlCompositeElement {
  static _Q = "a:alphaMod";
  /** Returns EffectContainer. */
  get effectContainer() {
    return this._f(EffectContainer);
  }
}
class AlphaInverse extends OxmlCompositeElement {
  static _Q = "a:alphaInv";
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(RgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(RgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(HslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(SystemColor);
  }
  /** Scheme Color. */
  get schemeColor() {
    return this._f(SchemeColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(PresetColor);
  }
}
class AlphaFloor extends OxmlLeafElement {
  static _Q = "a:alphaFloor";
}
class AlphaCeiling extends OxmlLeafElement {
  static _Q = "a:alphaCeiling";
}
class AlphaBiLevel extends OxmlLeafElement {
  static _Q = "a:alphaBiLevel";
  static _A = [":thresh"];
  /** Threshold. Serialized as `:thresh` */
  get threshold() {
    return this._g(":thresh");
  }
  set threshold(v) {
    this._s(":thresh", v);
  }
}
class Effect extends OxmlLeafElement {
  static _Q = "a:effect";
  static _A = [":ref"];
  /** Reference. Serialized as `:ref` */
  get reference() {
    return this._g(":ref");
  }
  set reference(v) {
    this._s(":ref", v);
  }
}
class EffectContainerType extends OxmlCompositeElement {
  static _A = [":type", ":name"];
  /** Effect Container Type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
}
class EffectDag extends EffectContainerType {
  static _Q = "a:effectDag";
}
class EffectContainer extends EffectContainerType {
  static _Q = "a:cont";
}
class GroupFill extends OxmlLeafElement {
  static _Q = "a:grpFill";
}
class PatternFill extends OxmlCompositeElement {
  static _Q = "a:pattFill";
  static _A = [":prst"];
  /** Preset Pattern. Serialized as `:prst` */
  get preset() {
    return this._g(":prst");
  }
  set preset(v) {
    this._s(":prst", v);
  }
  /** Foreground color. */
  get foregroundColor() {
    return this._f(ForegroundColor);
  }
  /** Background color. */
  get backgroundColor() {
    return this._f(BackgroundColor);
  }
}
class BlipFill extends OxmlCompositeElement {
  static _Q = "a:blipFill";
  static _A = [":dpi", ":rotWithShape"];
  /** DPI Setting. Serialized as `:dpi` */
  get dpi() {
    return this._g(":dpi");
  }
  set dpi(v) {
    this._s(":dpi", v);
  }
  /** Rotate With Shape. Serialized as `:rotWithShape` */
  get rotateWithShape() {
    return this._g(":rotWithShape");
  }
  set rotateWithShape(v) {
    this._s(":rotWithShape", v);
  }
  /** Returns Blip. */
  get blip() {
    return this._f(Blip);
  }
  /** Source Rectangle. */
  get sourceRectangle() {
    return this._f(SourceRectangle);
  }
}
class GradientFill extends OxmlCompositeElement {
  static _Q = "a:gradFill";
  static _A = [":flip", ":rotWithShape"];
  /** Tile Flip. Serialized as `:flip` */
  get flip() {
    return this._g(":flip");
  }
  set flip(v) {
    this._s(":flip", v);
  }
  /** Rotate With Shape. Serialized as `:rotWithShape` */
  get rotateWithShape() {
    return this._g(":rotWithShape");
  }
  set rotateWithShape(v) {
    this._s(":rotWithShape", v);
  }
  /** Gradient Stop List. */
  get gradientStopList() {
    return this._f(GradientStopList);
  }
}
class SolidFill extends OxmlCompositeElement {
  static _Q = "a:solidFill";
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(RgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(RgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(HslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(SystemColor);
  }
  /** Scheme Color. */
  get schemeColor() {
    return this._f(SchemeColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(PresetColor);
  }
}
class NoFill extends OxmlLeafElement {
  static _Q = "a:noFill";
}
class Stretch extends OxmlCompositeElement {
  static _Q = "a:stretch";
  /** Fill Rectangle. */
  get fillRectangle() {
    return this._f(FillRectangle);
  }
}
class Tile extends OxmlLeafElement {
  static _Q = "a:tile";
  static _A = [":tx", ":ty", ":sx", ":sy", ":flip", ":algn"];
  /** Horizontal Offset. Serialized as `:tx` */
  get horizontalOffset() {
    return this._g(":tx");
  }
  set horizontalOffset(v) {
    this._s(":tx", v);
  }
  /** Vertical Offset. Serialized as `:ty` */
  get verticalOffset() {
    return this._g(":ty");
  }
  set verticalOffset(v) {
    this._s(":ty", v);
  }
  /** Horizontal Ratio. Serialized as `:sx` */
  get horizontalRatio() {
    return this._g(":sx");
  }
  set horizontalRatio(v) {
    this._s(":sx", v);
  }
  /** Vertical Ratio. Serialized as `:sy` */
  get verticalRatio() {
    return this._g(":sy");
  }
  set verticalRatio(v) {
    this._s(":sy", v);
  }
  /** Tile Flipping. Serialized as `:flip` */
  get flip() {
    return this._g(":flip");
  }
  set flip(v) {
    this._s(":flip", v);
  }
  /** Alignment. Serialized as `:algn` */
  get alignment() {
    return this._g(":algn");
  }
  set alignment(v) {
    this._s(":algn", v);
  }
}
class PathGradientFill extends OxmlCompositeElement {
  static _Q = "a:path";
  static _A = [":path"];
  /** Gradient Fill Path. Serialized as `:path` */
  get path() {
    return this._g(":path");
  }
  set path(v) {
    this._s(":path", v);
  }
  /** Fill To Rectangle. */
  get fillToRectangle() {
    return this._f(FillToRectangle);
  }
}
class LinearGradientFill extends OxmlLeafElement {
  static _Q = "a:lin";
  static _A = [":ang", ":scaled"];
  /** Angle. Serialized as `:ang` */
  get angle() {
    return this._g(":ang");
  }
  set angle(v) {
    this._s(":ang", v);
  }
  /** Scaled. Serialized as `:scaled` */
  get scaled() {
    return this._g(":scaled");
  }
  set scaled(v) {
    this._s(":scaled", v);
  }
}
class FlatText extends OxmlLeafElement {
  static _Q = "a:flatTx";
  static _A = [":z"];
  /** Z Coordinate. Serialized as `:z` */
  get z() {
    return this._g(":z");
  }
  set z(v) {
    this._s(":z", v);
  }
}
class Shape3DType extends OxmlCompositeElement {
  static _Q = "a:sp3d";
  static _A = [":z", ":extrusionH", ":contourW", ":prstMaterial"];
  /** Shape Depth. Serialized as `:z` */
  get z() {
    return this._g(":z");
  }
  set z(v) {
    this._s(":z", v);
  }
  /** Extrusion Height. Serialized as `:extrusionH` */
  get extrusionHeight() {
    return this._g(":extrusionH");
  }
  set extrusionHeight(v) {
    this._s(":extrusionH", v);
  }
  /** Contour Width. Serialized as `:contourW` */
  get contourWidth() {
    return this._g(":contourW");
  }
  set contourWidth(v) {
    this._s(":contourW", v);
  }
  /** Preset Material Type. Serialized as `:prstMaterial` */
  get presetMaterial() {
    return this._g(":prstMaterial");
  }
  set presetMaterial(v) {
    this._s(":prstMaterial", v);
  }
  /** Top Bevel. */
  get bevelTop() {
    return this._f(BevelTop);
  }
  /** Bottom Bevel. */
  get bevelBottom() {
    return this._f(BevelBottom);
  }
  /** Extrusion Color. */
  get extrusionColor() {
    return this._f(ExtrusionColor);
  }
  /** Contour Color. */
  get contourColor() {
    return this._f(ContourColor);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class PresetColor extends OxmlCompositeElement {
  static _Q = "a:prstClr";
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class SchemeColor extends OxmlCompositeElement {
  static _Q = "a:schemeClr";
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class SystemColor extends OxmlCompositeElement {
  static _Q = "a:sysClr";
  static _A = [":val", ":lastClr"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
  /** Last Color. Serialized as `:lastClr` */
  get lastColor() {
    return this._g(":lastClr");
  }
  set lastColor(v) {
    this._s(":lastClr", v);
  }
}
class HslColor extends OxmlCompositeElement {
  static _Q = "a:hslClr";
  static _A = [":hue", ":sat", ":lum"];
  /** Hue. Serialized as `:hue` */
  get hueValue() {
    return this._g(":hue");
  }
  set hueValue(v) {
    this._s(":hue", v);
  }
  /** Saturation. Serialized as `:sat` */
  get satValue() {
    return this._g(":sat");
  }
  set satValue(v) {
    this._s(":sat", v);
  }
  /** Luminance. Serialized as `:lum` */
  get lumValue() {
    return this._g(":lum");
  }
  set lumValue(v) {
    this._s(":lum", v);
  }
}
class RgbColorModelHex extends OxmlCompositeElement {
  static _Q = "a:srgbClr";
  static _A = [":val", "a14:legacySpreadsheetColorIndex"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
  /** legacySpreadsheetColorIndex. Serialized as `a14:legacySpreadsheetColorIndex` */
  get legacySpreadsheetColorIndex() {
    return this._g("a14:legacySpreadsheetColorIndex");
  }
  set legacySpreadsheetColorIndex(v) {
    this._s("a14:legacySpreadsheetColorIndex", v);
  }
}
class RgbColorModelPercentage extends OxmlCompositeElement {
  static _Q = "a:scrgbClr";
  static _A = [":r", ":g", ":b"];
  /** Red. Serialized as `:r` */
  get redPortion() {
    return this._g(":r");
  }
  set redPortion(v) {
    this._s(":r", v);
  }
  /** Green. Serialized as `:g` */
  get greenPortion() {
    return this._g(":g");
  }
  set greenPortion(v) {
    this._s(":g", v);
  }
  /** Blue. Serialized as `:b` */
  get bluePortion() {
    return this._g(":b");
  }
  set bluePortion(v) {
    this._s(":b", v);
  }
}
class Extension extends OxmlCompositeElement {
  static _Q = "a:ext";
  static _A = [":uri"];
  /** URI. Serialized as `:uri` */
  get uri() {
    return this._g(":uri");
  }
  set uri(v) {
    this._s(":uri", v);
  }
}
class InverseGamma extends OxmlLeafElement {
  static _Q = "a:invGamma";
}
class Gamma extends OxmlLeafElement {
  static _Q = "a:gamma";
}
class PercentageType extends OxmlLeafElement {
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class BlueModulation extends PercentageType {
  static _Q = "a:blueMod";
}
class BlueOffset extends PercentageType {
  static _Q = "a:blueOff";
}
class Blue extends PercentageType {
  static _Q = "a:blue";
}
class GreenModulation extends PercentageType {
  static _Q = "a:greenMod";
}
class GreenOffset extends PercentageType {
  static _Q = "a:greenOff";
}
class Green extends PercentageType {
  static _Q = "a:green";
}
class RedModulation extends PercentageType {
  static _Q = "a:redMod";
}
class RedOffset extends PercentageType {
  static _Q = "a:redOff";
}
class Red extends PercentageType {
  static _Q = "a:red";
}
class LuminanceModulation extends PercentageType {
  static _Q = "a:lumMod";
}
class LuminanceOffset extends PercentageType {
  static _Q = "a:lumOff";
}
class Luminance extends PercentageType {
  static _Q = "a:lum";
}
class SaturationModulation extends PercentageType {
  static _Q = "a:satMod";
}
class SaturationOffset extends PercentageType {
  static _Q = "a:satOff";
}
class Saturation extends PercentageType {
  static _Q = "a:sat";
}
class HueOffset extends OxmlLeafElement {
  static _Q = "a:hueOff";
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class Hue extends OxmlLeafElement {
  static _Q = "a:hue";
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class PositivePercentageType extends OxmlLeafElement {
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class HueModulation extends PositivePercentageType {
  static _Q = "a:hueMod";
}
class AlphaModulation extends PositivePercentageType {
  static _Q = "a:alphaMod";
}
class AlphaOffset extends OxmlLeafElement {
  static _Q = "a:alphaOff";
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class Gray extends OxmlLeafElement {
  static _Q = "a:gray";
}
class Inverse extends OxmlLeafElement {
  static _Q = "a:inv";
}
class Complement extends OxmlLeafElement {
  static _Q = "a:comp";
}
class PositiveFixedPercentageType extends OxmlLeafElement {
  static _A = [":val"];
  /** Value. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class Alpha extends PositiveFixedPercentageType {
  static _Q = "a:alpha";
}
class Shade extends PositiveFixedPercentageType {
  static _Q = "a:shade";
}
class Tint extends PositiveFixedPercentageType {
  static _Q = "a:tint";
}
class QuickTimeFromFile extends OxmlCompositeElement {
  static _Q = "a:quickTimeFile";
  static _A = ["r:link"];
  /** Linked Relationship ID. Serialized as `r:link` */
  get link() {
    return this._g("r:link");
  }
  set link(v) {
    this._s("r:link", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class VideoFromFile extends OxmlCompositeElement {
  static _Q = "a:videoFile";
  static _A = ["r:link"];
  /** Linked Relationship ID. Serialized as `r:link` */
  get link() {
    return this._g("r:link");
  }
  set link(v) {
    this._s("r:link", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class AudioFromFile extends OxmlCompositeElement {
  static _Q = "a:audioFile";
  static _A = ["r:link"];
  /** Linked Relationship ID. Serialized as `r:link` */
  get link() {
    return this._g("r:link");
  }
  set link(v) {
    this._s("r:link", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class EmbeddedWavAudioFileType extends OxmlLeafElement {
  static _A = ["r:embed", ":name", ":builtIn"];
  /** Embedded Audio File Relationship ID. Serialized as `r:embed` */
  get embed() {
    return this._g("r:embed");
  }
  set embed(v) {
    this._s("r:embed", v);
  }
  /** Sound Name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** Recognized Built-In Sound. Serialized as `:builtIn` */
  get builtIn() {
    return this._g(":builtIn");
  }
  set builtIn(v) {
    this._s(":builtIn", v);
  }
}
class HyperlinkSound extends EmbeddedWavAudioFileType {
  static _Q = "a:snd";
}
class WaveAudioFile extends EmbeddedWavAudioFileType {
  static _Q = "a:wavAudioFile";
}
class AudioFromCD extends OxmlCompositeElement {
  static _Q = "a:audioCd";
  /** Audio Start Time. */
  get startTime() {
    return this._f(StartTime);
  }
  /** Audio End Time. */
  get endTime() {
    return this._f(EndTime);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
function initDrawingNamespace() {
  BlipExtension._C = {
    "a14:imgProps": A14ImageProperties,
    "a14:useLocalDpi": A14UseLocalDpi,
    "wp15:webVideoPr": Wp15WebVideoProperty,
    "asvg:svgBlip": AsvgSVGBlip,
    "a1611:picAttrSrcUrl": A1611PictureAttributionSourceURL,
    "woe:oembed": WoeOEmbed,
    "aoe:oembedShared": AoeOEmbedShared
  };
  BlipExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  BlipExtensionList._C = {
    "a:ext": BlipExtension
  };
  NonVisualPicturePropertiesExtension._C = {
    "a14:cameraTool": A14CameraTool,
    "a15:signatureLine": A15SignatureLine,
    "a15:objectPr": A15ObjectProperties,
    "alf:liveFeedProps": AlfLiveFeedProperties,
    "aif:imageFormula": AifImageFormula
  };
  NonVisualPicturePropertiesExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  NonVisualPicturePropertiesExtensionList._C = {
    "a:ext": NonVisualPicturePropertiesExtension
  };
  PictureLocks._C = {
    "a:extLst": ExtensionList
  };
  PictureLocks._D = {
    ":noGrp": new OxmlAttr(":noGrp", OxmlType.BooleanValue),
    ":noSelect": new OxmlAttr(":noSelect", OxmlType.BooleanValue),
    ":noRot": new OxmlAttr(":noRot", OxmlType.BooleanValue),
    ":noChangeAspect": new OxmlAttr(":noChangeAspect", OxmlType.BooleanValue),
    ":noMove": new OxmlAttr(":noMove", OxmlType.BooleanValue),
    ":noResize": new OxmlAttr(":noResize", OxmlType.BooleanValue),
    ":noEditPoints": new OxmlAttr(":noEditPoints", OxmlType.BooleanValue),
    ":noAdjustHandles": new OxmlAttr(":noAdjustHandles", OxmlType.BooleanValue),
    ":noChangeArrowheads": new OxmlAttr(":noChangeArrowheads", OxmlType.BooleanValue),
    ":noChangeShapeType": new OxmlAttr(":noChangeShapeType", OxmlType.BooleanValue),
    ":noCrop": new OxmlAttr(":noCrop", OxmlType.BooleanValue)
  };
  NonVisualDrawingPropertiesExtension._C = {
    "a14:compatExt": A14CompatExtension,
    "a15:backgroundPr": A15BackgroundProperties,
    "a16:creationId": A16CreationId,
    "a16:predDERef": A16PredecessorDrawingElementReference,
    "adec:decorative": AdecDecorative,
    "aclsh:classification": AclshClassificationOutcome,
    "asl:scriptLink": AslScriptLink
  };
  NonVisualDrawingPropertiesExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  LinePropertiesExtensionList._C = {
    "a:ext": LinePropertiesExtension
  };
  LineEndPropertiesType._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, LineEndValuesArray),
    ":w": new OxmlAttr(":w", OxmlType.EnumValue, LineEndWidthValuesArray),
    ":len": new OxmlAttr(":len", OxmlType.EnumValue, LineEndLengthValuesArray)
  };
  LinePropertiesExtension._C = {
    "ask:lineSketchStyleProps": AskLineSketchStyleProperties
  };
  LinePropertiesExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  HyperlinkExtensionList._C = {
    "a:ext": HyperlinkExtension
  };
  HyperlinkExtension._C = {
    "ahyp:hlinkClr": AhypHyperlinkColor
  };
  HyperlinkExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  PtExtension._C = {
    "dgm14:cNvPr": Dgm14NonVisualDrawingProperties
  };
  PtExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  DataModelExtension._C = {
    "dsp:dataModelExt": DspDataModelExtensionBlock,
    "dgm14:recolorImg": Dgm14RecolorImages
  };
  DataModelExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  ConnectorLockingExtensionList._C = {
    "a:ext": ConnectorLockingExtension
  };
  NonVisualDrawingPropertiesExtensionList._C = {
    "a:ext": NonVisualDrawingPropertiesExtension
  };
  RightToLeft._D = {
    ":val": new OxmlAttr(":val", OxmlType.BooleanValue)
  };
  HyperlinkType._C = {
    "a:snd": HyperlinkSound,
    "a:extLst": HyperlinkExtensionList
  };
  HyperlinkType._D = {
    "r:id": new OxmlAttr("r:id", OxmlType.StringValue),
    ":invalidUrl": new OxmlAttr(":invalidUrl", OxmlType.StringValue),
    ":action": new OxmlAttr(":action", OxmlType.StringValue),
    ":tgtFrame": new OxmlAttr(":tgtFrame", OxmlType.StringValue),
    ":tooltip": new OxmlAttr(":tooltip", OxmlType.StringValue),
    ":history": new OxmlAttr(":history", OxmlType.BooleanValue),
    ":highlightClick": new OxmlAttr(":highlightClick", OxmlType.BooleanValue),
    ":endSnd": new OxmlAttr(":endSnd", OxmlType.BooleanValue)
  };
  HyperlinkOnHover._C = {
    "a:snd": HyperlinkSound,
    "a:extLst": HyperlinkExtensionList
  };
  HyperlinkOnMouseOver._C = {
    "a:snd": HyperlinkSound,
    "a:extLst": HyperlinkExtensionList
  };
  HyperlinkOnClick._C = {
    "a:snd": HyperlinkSound,
    "a:extLst": HyperlinkExtensionList
  };
  OfficeStyleSheetExtensionList._C = {
    "a:ext": OfficeStyleSheetExtension
  };
  CustomColorList._C = {
    "a:custClr": CustomColor
  };
  ExtraColorSchemeList._C = {
    "a:extraClrScheme": ExtraColorScheme
  };
  ObjectDefaults._C = {
    "a:spDef": ShapeDefault,
    "a:lnDef": LineDefault,
    "a:txDef": TextDefault,
    "a:extLst": ExtensionList
  };
  NonVisualGroupDrawingShapePropsExtensionList._C = {
    "a:ext": NonVisualGroupDrawingShapePropsExtension
  };
  GroupShapeLocks._C = {
    "a:extLst": ExtensionList
  };
  GroupShapeLocks._D = {
    ":noGrp": new OxmlAttr(":noGrp", OxmlType.BooleanValue),
    ":noUngrp": new OxmlAttr(":noUngrp", OxmlType.BooleanValue),
    ":noSelect": new OxmlAttr(":noSelect", OxmlType.BooleanValue),
    ":noRot": new OxmlAttr(":noRot", OxmlType.BooleanValue),
    ":noChangeAspect": new OxmlAttr(":noChangeAspect", OxmlType.BooleanValue),
    ":noMove": new OxmlAttr(":noMove", OxmlType.BooleanValue),
    ":noResize": new OxmlAttr(":noResize", OxmlType.BooleanValue)
  };
  ConnectorLockingExtension._C = {
    "a:graphic": Graphic
  };
  ConnectorLockingExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  OfficeStyleSheetExtension._C = {
    "thm15:themeFamily": Thm15ThemeFamily
  };
  OfficeStyleSheetExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  NonVisualGroupDrawingShapePropsExtension._C = {
    "a15:nonVisualGroupProps": A15NonVisualGroupProperties
  };
  NonVisualGroupDrawingShapePropsExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  GvmlGroupShapeExtensionList._C = {
    "a:ext": GvmlGroupShapeExtension
  };
  GroupShape._C = {
    "a:nvGrpSpPr": NonVisualGroupShapeProperties,
    "a:grpSpPr": VisualGroupShapeProperties,
    "a:txSp": TextShape,
    "a:sp": Shape,
    "a:cxnSp": ConnectionShape,
    "a:pic": Picture,
    "a14:contentPart": A14GvmlContentPart,
    "a:graphicFrame": GraphicFrame,
    "a:grpSp": GroupShape,
    "a:extLst": GvmlGroupShapeExtensionList
  };
  GraphicFrame._C = {
    "a:nvGraphicFramePr": NonVisualGraphicFrameProperties,
    "a:graphic": Graphic,
    "a:xfrm": Transform2D,
    "a:extLst": ExtensionList
  };
  Picture._C = {
    "a:nvPicPr": NonVisualPictureProperties,
    "a:blipFill": BlipFill,
    "a:spPr": ShapeProperties,
    "a:style": ShapeStyle,
    "a:extLst": ExtensionList
  };
  ConnectionShape._C = {
    "a:nvCxnSpPr": NonVisualConnectionShapeProperties,
    "a:spPr": ShapeProperties,
    "a:style": ShapeStyle,
    "a:extLst": ExtensionList
  };
  Shape._C = {
    "a:nvSpPr": NonVisualShapeProperties,
    "a:spPr": ShapeProperties,
    "a:txSp": TextShape,
    "a:style": ShapeStyle,
    "a:extLst": ExtensionList
  };
  VisualGroupShapeProperties._C = {
    "a:xfrm": TransformGroup,
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:blipFill": BlipFill,
    "a:pattFill": PatternFill,
    "a:grpFill": GroupFill,
    "a:effectLst": EffectList,
    "a:effectDag": EffectDag,
    "a:scene3d": Scene3DType,
    "a:extLst": ExtensionList
  };
  VisualGroupShapeProperties._D = {
    ":bwMode": new OxmlAttr(":bwMode", OxmlType.EnumValue, BlackWhiteModeValuesArray)
  };
  NonVisualGroupShapeProperties._C = {
    "a:cNvPr": NonVisualDrawingProperties,
    "a:cNvGrpSpPr": NonVisualGroupShapeDrawingProperties
  };
  ShapePropertiesExtensionList._C = {
    "a:ext": ShapePropertiesExtension
  };
  GvmlGroupShapeExtension._C = {
    "a14:isCanvas": A14IsCanvas
  };
  GvmlGroupShapeExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  ShapePropertiesExtension._C = {
    "a14:hiddenFill": A14HiddenFillProperties,
    "a14:hiddenLine": A14HiddenLineProperties,
    "a14:hiddenEffects": A14HiddenEffectsProperties,
    "a14:hiddenScene3d": A14HiddenScene3D,
    "a14:hiddenSp3d": A14HiddenShape3D,
    "a14:shadowObscured": A14ShadowObscured
  };
  ShapePropertiesExtension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  TabStopList._C = {
    "a:tab": TabStop
  };
  TextSpacingType._C = {
    "a:spcPct": SpacingPercent,
    "a:spcPts": SpacingPoints
  };
  SpaceAfter._C = {
    "a:spcPct": SpacingPercent,
    "a:spcPts": SpacingPoints
  };
  SpaceBefore._C = {
    "a:spcPct": SpacingPercent,
    "a:spcPts": SpacingPoints
  };
  LineSpacing._C = {
    "a:spcPct": SpacingPercent,
    "a:spcPts": SpacingPoints
  };
  SpacingPoints._D = {
    ":val": new OxmlAttr(":val", OxmlType.Int32Value)
  };
  SpacingPercent._D = {
    ":val": new OxmlAttr(":val", OxmlType.Int32Value)
  };
  TabStop._D = {
    ":pos": new OxmlAttr(":pos", OxmlType.Int32Value),
    ":algn": new OxmlAttr(":algn", OxmlType.EnumValue, TextTabAlignmentValuesArray)
  };
  Paragraph._C = {
    "a:pPr": ParagraphProperties,
    "a:r": Run,
    "a:br": Break,
    "a:fld": Field,
    "a14:m": A14TextMath,
    "a:endParaRPr": EndParagraphRunProperties
  };
  TextCharacterPropertiesType._C = {
    "a:ln": Outline,
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:blipFill": BlipFill,
    "a:pattFill": PatternFill,
    "a:grpFill": GroupFill,
    "a:effectLst": EffectList,
    "a:effectDag": EffectDag,
    "a:highlight": Highlight,
    "a:uLnTx": UnderlineFollowsText,
    "a:uLn": Underline,
    "a:uFillTx": UnderlineFillText,
    "a:uFill": UnderlineFill,
    "a:latin": LatinFont,
    "a:ea": EastAsianFont,
    "a:cs": ComplexScriptFont,
    "a:sym": SymbolFont,
    "a:hlinkClick": HyperlinkOnClick,
    "a:hlinkMouseOver": HyperlinkOnMouseOver,
    "a:rtl": RightToLeft,
    "a:extLst": ExtensionList
  };
  TextCharacterPropertiesType._D = {
    ":kumimoji": new OxmlAttr(":kumimoji", OxmlType.BooleanValue),
    ":lang": new OxmlAttr(":lang", OxmlType.StringValue),
    ":altLang": new OxmlAttr(":altLang", OxmlType.StringValue),
    ":sz": new OxmlAttr(":sz", OxmlType.Int32Value),
    ":b": new OxmlAttr(":b", OxmlType.BooleanValue),
    ":i": new OxmlAttr(":i", OxmlType.BooleanValue),
    ":u": new OxmlAttr(":u", OxmlType.EnumValue, TextUnderlineValuesArray),
    ":strike": new OxmlAttr(":strike", OxmlType.EnumValue, TextStrikeValuesArray),
    ":kern": new OxmlAttr(":kern", OxmlType.Int32Value),
    ":cap": new OxmlAttr(":cap", OxmlType.EnumValue, TextCapsValuesArray),
    ":spc": new OxmlAttr(":spc", OxmlType.Int32Value),
    ":normalizeH": new OxmlAttr(":normalizeH", OxmlType.BooleanValue),
    ":baseline": new OxmlAttr(":baseline", OxmlType.Int32Value),
    ":noProof": new OxmlAttr(":noProof", OxmlType.BooleanValue),
    ":dirty": new OxmlAttr(":dirty", OxmlType.BooleanValue),
    ":err": new OxmlAttr(":err", OxmlType.BooleanValue),
    ":smtClean": new OxmlAttr(":smtClean", OxmlType.BooleanValue),
    ":smtId": new OxmlAttr(":smtId", OxmlType.UInt32Value),
    ":bmk": new OxmlAttr(":bmk", OxmlType.StringValue)
  };
  DefaultRunProperties._C = {
    "a:ln": Outline,
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:blipFill": BlipFill,
    "a:pattFill": PatternFill,
    "a:grpFill": GroupFill,
    "a:effectLst": EffectList,
    "a:effectDag": EffectDag,
    "a:highlight": Highlight,
    "a:uLnTx": UnderlineFollowsText,
    "a:uLn": Underline,
    "a:uFillTx": UnderlineFillText,
    "a:uFill": UnderlineFill,
    "a:latin": LatinFont,
    "a:ea": EastAsianFont,
    "a:cs": ComplexScriptFont,
    "a:sym": SymbolFont,
    "a:hlinkClick": HyperlinkOnClick,
    "a:hlinkMouseOver": HyperlinkOnMouseOver,
    "a:rtl": RightToLeft,
    "a:extLst": ExtensionList
  };
  RunProperties._C = {
    "a:ln": Outline,
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:blipFill": BlipFill,
    "a:pattFill": PatternFill,
    "a:grpFill": GroupFill,
    "a:effectLst": EffectList,
    "a:effectDag": EffectDag,
    "a:highlight": Highlight,
    "a:uLnTx": UnderlineFollowsText,
    "a:uLn": Underline,
    "a:uFillTx": UnderlineFillText,
    "a:uFill": UnderlineFill,
    "a:latin": LatinFont,
    "a:ea": EastAsianFont,
    "a:cs": ComplexScriptFont,
    "a:sym": SymbolFont,
    "a:hlinkClick": HyperlinkOnClick,
    "a:hlinkMouseOver": HyperlinkOnMouseOver,
    "a:rtl": RightToLeft,
    "a:extLst": ExtensionList
  };
  EndParagraphRunProperties._C = {
    "a:ln": Outline,
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:blipFill": BlipFill,
    "a:pattFill": PatternFill,
    "a:grpFill": GroupFill,
    "a:effectLst": EffectList,
    "a:effectDag": EffectDag,
    "a:highlight": Highlight,
    "a:uLnTx": UnderlineFollowsText,
    "a:uLn": Underline,
    "a:uFillTx": UnderlineFillText,
    "a:uFill": UnderlineFill,
    "a:latin": LatinFont,
    "a:ea": EastAsianFont,
    "a:cs": ComplexScriptFont,
    "a:sym": SymbolFont,
    "a:hlinkClick": HyperlinkOnClick,
    "a:hlinkMouseOver": HyperlinkOnMouseOver,
    "a:rtl": RightToLeft,
    "a:extLst": ExtensionList
  };
  TextParagraphPropertiesType._C = {
    "a:lnSpc": LineSpacing,
    "a:spcBef": SpaceBefore,
    "a:spcAft": SpaceAfter,
    "a:buClrTx": BulletColorText,
    "a:buClr": BulletColor,
    "a:buSzTx": BulletSizeText,
    "a:buSzPct": BulletSizePercentage,
    "a:buSzPts": BulletSizePoints,
    "a:buFontTx": BulletFontText,
    "a:buFont": BulletFont,
    "a:buNone": NoBullet,
    "a:buAutoNum": AutoNumberedBullet,
    "a:buChar": CharacterBullet,
    "a:buBlip": PictureBullet,
    "a:tabLst": TabStopList,
    "a:defRPr": DefaultRunProperties,
    "a:extLst": ExtensionList
  };
  TextParagraphPropertiesType._D = {
    ":marL": new OxmlAttr(":marL", OxmlType.Int32Value),
    ":marR": new OxmlAttr(":marR", OxmlType.Int32Value),
    ":lvl": new OxmlAttr(":lvl", OxmlType.Int32Value),
    ":indent": new OxmlAttr(":indent", OxmlType.Int32Value),
    ":algn": new OxmlAttr(":algn", OxmlType.EnumValue, TextAlignmentTypeValuesArray),
    ":defTabSz": new OxmlAttr(":defTabSz", OxmlType.Int32Value),
    ":rtl": new OxmlAttr(":rtl", OxmlType.BooleanValue),
    ":eaLnBrk": new OxmlAttr(":eaLnBrk", OxmlType.BooleanValue),
    ":fontAlgn": new OxmlAttr(":fontAlgn", OxmlType.EnumValue, TextFontAlignmentValuesArray),
    ":latinLnBrk": new OxmlAttr(":latinLnBrk", OxmlType.BooleanValue),
    ":hangingPunct": new OxmlAttr(":hangingPunct", OxmlType.BooleanValue)
  };
  Level9ParagraphProperties._C = {
    "a:lnSpc": LineSpacing,
    "a:spcBef": SpaceBefore,
    "a:spcAft": SpaceAfter,
    "a:buClrTx": BulletColorText,
    "a:buClr": BulletColor,
    "a:buSzTx": BulletSizeText,
    "a:buSzPct": BulletSizePercentage,
    "a:buSzPts": BulletSizePoints,
    "a:buFontTx": BulletFontText,
    "a:buFont": BulletFont,
    "a:buNone": NoBullet,
    "a:buAutoNum": AutoNumberedBullet,
    "a:buChar": CharacterBullet,
    "a:buBlip": PictureBullet,
    "a:tabLst": TabStopList,
    "a:defRPr": DefaultRunProperties,
    "a:extLst": ExtensionList
  };
  Level8ParagraphProperties._C = {
    "a:lnSpc": LineSpacing,
    "a:spcBef": SpaceBefore,
    "a:spcAft": SpaceAfter,
    "a:buClrTx": BulletColorText,
    "a:buClr": BulletColor,
    "a:buSzTx": BulletSizeText,
    "a:buSzPct": BulletSizePercentage,
    "a:buSzPts": BulletSizePoints,
    "a:buFontTx": BulletFontText,
    "a:buFont": BulletFont,
    "a:buNone": NoBullet,
    "a:buAutoNum": AutoNumberedBullet,
    "a:buChar": CharacterBullet,
    "a:buBlip": PictureBullet,
    "a:tabLst": TabStopList,
    "a:defRPr": DefaultRunProperties,
    "a:extLst": ExtensionList
  };
  Level7ParagraphProperties._C = {
    "a:lnSpc": LineSpacing,
    "a:spcBef": SpaceBefore,
    "a:spcAft": SpaceAfter,
    "a:buClrTx": BulletColorText,
    "a:buClr": BulletColor,
    "a:buSzTx": BulletSizeText,
    "a:buSzPct": BulletSizePercentage,
    "a:buSzPts": BulletSizePoints,
    "a:buFontTx": BulletFontText,
    "a:buFont": BulletFont,
    "a:buNone": NoBullet,
    "a:buAutoNum": AutoNumberedBullet,
    "a:buChar": CharacterBullet,
    "a:buBlip": PictureBullet,
    "a:tabLst": TabStopList,
    "a:defRPr": DefaultRunProperties,
    "a:extLst": ExtensionList
  };
  Level6ParagraphProperties._C = {
    "a:lnSpc": LineSpacing,
    "a:spcBef": SpaceBefore,
    "a:spcAft": SpaceAfter,
    "a:buClrTx": BulletColorText,
    "a:buClr": BulletColor,
    "a:buSzTx": BulletSizeText,
    "a:buSzPct": BulletSizePercentage,
    "a:buSzPts": BulletSizePoints,
    "a:buFontTx": BulletFontText,
    "a:buFont": BulletFont,
    "a:buNone": NoBullet,
    "a:buAutoNum": AutoNumberedBullet,
    "a:buChar": CharacterBullet,
    "a:buBlip": PictureBullet,
    "a:tabLst": TabStopList,
    "a:defRPr": DefaultRunProperties,
    "a:extLst": ExtensionList
  };
  Level5ParagraphProperties._C = {
    "a:lnSpc": LineSpacing,
    "a:spcBef": SpaceBefore,
    "a:spcAft": SpaceAfter,
    "a:buClrTx": BulletColorText,
    "a:buClr": BulletColor,
    "a:buSzTx": BulletSizeText,
    "a:buSzPct": BulletSizePercentage,
    "a:buSzPts": BulletSizePoints,
    "a:buFontTx": BulletFontText,
    "a:buFont": BulletFont,
    "a:buNone": NoBullet,
    "a:buAutoNum": AutoNumberedBullet,
    "a:buChar": CharacterBullet,
    "a:buBlip": PictureBullet,
    "a:tabLst": TabStopList,
    "a:defRPr": DefaultRunProperties,
    "a:extLst": ExtensionList
  };
  Level4ParagraphProperties._C = {
    "a:lnSpc": LineSpacing,
    "a:spcBef": SpaceBefore,
    "a:spcAft": SpaceAfter,
    "a:buClrTx": BulletColorText,
    "a:buClr": BulletColor,
    "a:buSzTx": BulletSizeText,
    "a:buSzPct": BulletSizePercentage,
    "a:buSzPts": BulletSizePoints,
    "a:buFontTx": BulletFontText,
    "a:buFont": BulletFont,
    "a:buNone": NoBullet,
    "a:buAutoNum": AutoNumberedBullet,
    "a:buChar": CharacterBullet,
    "a:buBlip": PictureBullet,
    "a:tabLst": TabStopList,
    "a:defRPr": DefaultRunProperties,
    "a:extLst": ExtensionList
  };
  Level3ParagraphProperties._C = {
    "a:lnSpc": LineSpacing,
    "a:spcBef": SpaceBefore,
    "a:spcAft": SpaceAfter,
    "a:buClrTx": BulletColorText,
    "a:buClr": BulletColor,
    "a:buSzTx": BulletSizeText,
    "a:buSzPct": BulletSizePercentage,
    "a:buSzPts": BulletSizePoints,
    "a:buFontTx": BulletFontText,
    "a:buFont": BulletFont,
    "a:buNone": NoBullet,
    "a:buAutoNum": AutoNumberedBullet,
    "a:buChar": CharacterBullet,
    "a:buBlip": PictureBullet,
    "a:tabLst": TabStopList,
    "a:defRPr": DefaultRunProperties,
    "a:extLst": ExtensionList
  };
  Level2ParagraphProperties._C = {
    "a:lnSpc": LineSpacing,
    "a:spcBef": SpaceBefore,
    "a:spcAft": SpaceAfter,
    "a:buClrTx": BulletColorText,
    "a:buClr": BulletColor,
    "a:buSzTx": BulletSizeText,
    "a:buSzPct": BulletSizePercentage,
    "a:buSzPts": BulletSizePoints,
    "a:buFontTx": BulletFontText,
    "a:buFont": BulletFont,
    "a:buNone": NoBullet,
    "a:buAutoNum": AutoNumberedBullet,
    "a:buChar": CharacterBullet,
    "a:buBlip": PictureBullet,
    "a:tabLst": TabStopList,
    "a:defRPr": DefaultRunProperties,
    "a:extLst": ExtensionList
  };
  Level1ParagraphProperties._C = {
    "a:lnSpc": LineSpacing,
    "a:spcBef": SpaceBefore,
    "a:spcAft": SpaceAfter,
    "a:buClrTx": BulletColorText,
    "a:buClr": BulletColor,
    "a:buSzTx": BulletSizeText,
    "a:buSzPct": BulletSizePercentage,
    "a:buSzPts": BulletSizePoints,
    "a:buFontTx": BulletFontText,
    "a:buFont": BulletFont,
    "a:buNone": NoBullet,
    "a:buAutoNum": AutoNumberedBullet,
    "a:buChar": CharacterBullet,
    "a:buBlip": PictureBullet,
    "a:tabLst": TabStopList,
    "a:defRPr": DefaultRunProperties,
    "a:extLst": ExtensionList
  };
  DefaultParagraphProperties._C = {
    "a:lnSpc": LineSpacing,
    "a:spcBef": SpaceBefore,
    "a:spcAft": SpaceAfter,
    "a:buClrTx": BulletColorText,
    "a:buClr": BulletColor,
    "a:buSzTx": BulletSizeText,
    "a:buSzPct": BulletSizePercentage,
    "a:buSzPts": BulletSizePoints,
    "a:buFontTx": BulletFontText,
    "a:buFont": BulletFont,
    "a:buNone": NoBullet,
    "a:buAutoNum": AutoNumberedBullet,
    "a:buChar": CharacterBullet,
    "a:buBlip": PictureBullet,
    "a:tabLst": TabStopList,
    "a:defRPr": DefaultRunProperties,
    "a:extLst": ExtensionList
  };
  ParagraphProperties._C = {
    "a:lnSpc": LineSpacing,
    "a:spcBef": SpaceBefore,
    "a:spcAft": SpaceAfter,
    "a:buClrTx": BulletColorText,
    "a:buClr": BulletColor,
    "a:buSzTx": BulletSizeText,
    "a:buSzPct": BulletSizePercentage,
    "a:buSzPts": BulletSizePoints,
    "a:buFontTx": BulletFontText,
    "a:buFont": BulletFont,
    "a:buNone": NoBullet,
    "a:buAutoNum": AutoNumberedBullet,
    "a:buChar": CharacterBullet,
    "a:buBlip": PictureBullet,
    "a:tabLst": TabStopList,
    "a:defRPr": DefaultRunProperties,
    "a:extLst": ExtensionList
  };
  TablePartStyleType._C = {
    "a:tcTxStyle": TableCellTextStyle,
    "a:tcStyle": TableCellStyle
  };
  NorthwestCell._C = {
    "a:tcTxStyle": TableCellTextStyle,
    "a:tcStyle": TableCellStyle
  };
  NortheastCell._C = {
    "a:tcTxStyle": TableCellTextStyle,
    "a:tcStyle": TableCellStyle
  };
  FirstRow._C = {
    "a:tcTxStyle": TableCellTextStyle,
    "a:tcStyle": TableCellStyle
  };
  SouthwestCell._C = {
    "a:tcTxStyle": TableCellTextStyle,
    "a:tcStyle": TableCellStyle
  };
  SoutheastCell._C = {
    "a:tcTxStyle": TableCellTextStyle,
    "a:tcStyle": TableCellStyle
  };
  LastRow._C = {
    "a:tcTxStyle": TableCellTextStyle,
    "a:tcStyle": TableCellStyle
  };
  FirstColumn._C = {
    "a:tcTxStyle": TableCellTextStyle,
    "a:tcStyle": TableCellStyle
  };
  LastColumn._C = {
    "a:tcTxStyle": TableCellTextStyle,
    "a:tcStyle": TableCellStyle
  };
  Band2Vertical._C = {
    "a:tcTxStyle": TableCellTextStyle,
    "a:tcStyle": TableCellStyle
  };
  Band1Vertical._C = {
    "a:tcTxStyle": TableCellTextStyle,
    "a:tcStyle": TableCellStyle
  };
  Band2Horizontal._C = {
    "a:tcTxStyle": TableCellTextStyle,
    "a:tcStyle": TableCellStyle
  };
  Band1Horizontal._C = {
    "a:tcTxStyle": TableCellTextStyle,
    "a:tcStyle": TableCellStyle
  };
  WholeTable._C = {
    "a:tcTxStyle": TableCellTextStyle,
    "a:tcStyle": TableCellStyle
  };
  TableBackground._C = {
    "a:fill": FillProperties,
    "a:fillRef": FillReference,
    "a:effect": EffectPropertiesType,
    "a:effectRef": EffectReference
  };
  TableCellStyle._C = {
    "a:tcBdr": TableCellBorders,
    "a:fill": FillProperties,
    "a:fillRef": FillReference,
    "a:cell3D": Cell3DProperties
  };
  TableCellTextStyle._C = {
    "a:font": Fonts,
    "a:fontRef": FontReference,
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor,
    "a:extLst": ExtensionList
  };
  TableCellTextStyle._D = {
    ":b": new OxmlAttr(":b", OxmlType.EnumValue, BooleanStyleValuesArray),
    ":i": new OxmlAttr(":i", OxmlType.EnumValue, BooleanStyleValuesArray)
  };
  TableCellBorders._C = {
    "a:left": LeftBorder,
    "a:right": RightBorder,
    "a:top": TopBorder,
    "a:bottom": BottomBorder,
    "a:insideH": InsideHorizontalBorder,
    "a:insideV": InsideVerticalBorder,
    "a:tl2br": TopLeftToBottomRightBorder,
    "a:tr2bl": TopRightToBottomLeftBorder,
    "a:extLst": ExtensionList
  };
  ThemeableLineStyleType._C = {
    "a:ln": Outline,
    "a:lnRef": LineReference
  };
  TopRightToBottomLeftBorder._C = {
    "a:ln": Outline,
    "a:lnRef": LineReference
  };
  TopLeftToBottomRightBorder._C = {
    "a:ln": Outline,
    "a:lnRef": LineReference
  };
  InsideVerticalBorder._C = {
    "a:ln": Outline,
    "a:lnRef": LineReference
  };
  InsideHorizontalBorder._C = {
    "a:ln": Outline,
    "a:lnRef": LineReference
  };
  BottomBorder._C = {
    "a:ln": Outline,
    "a:lnRef": LineReference
  };
  TopBorder._C = {
    "a:ln": Outline,
    "a:lnRef": LineReference
  };
  RightBorder._C = {
    "a:ln": Outline,
    "a:lnRef": LineReference
  };
  LeftBorder._C = {
    "a:ln": Outline,
    "a:lnRef": LineReference
  };
  TableRow._C = {
    "a:tc": TableCell,
    "a:extLst": ExtensionList
  };
  TableRow._D = {
    ":h": new OxmlAttr(":h", OxmlType.Int64Value)
  };
  TableGrid._C = {
    "a:gridCol": GridColumn
  };
  TableProperties._C = {
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:blipFill": BlipFill,
    "a:pattFill": PatternFill,
    "a:grpFill": GroupFill,
    "a:effectLst": EffectList,
    "a:effectDag": EffectDag,
    "a:tableStyle": TableStyle,
    "a:tableStyleId": TableStyleId,
    "a:extLst": ExtensionList
  };
  TableProperties._D = {
    ":rtl": new OxmlAttr(":rtl", OxmlType.BooleanValue),
    ":firstRow": new OxmlAttr(":firstRow", OxmlType.BooleanValue),
    ":firstCol": new OxmlAttr(":firstCol", OxmlType.BooleanValue),
    ":lastRow": new OxmlAttr(":lastRow", OxmlType.BooleanValue),
    ":lastCol": new OxmlAttr(":lastCol", OxmlType.BooleanValue),
    ":bandRow": new OxmlAttr(":bandRow", OxmlType.BooleanValue),
    ":bandCol": new OxmlAttr(":bandCol", OxmlType.BooleanValue)
  };
  GridColumn._C = {
    "a:extLst": ExtensionList
  };
  GridColumn._D = {
    ":w": new OxmlAttr(":w", OxmlType.Int64Value)
  };
  TableStyleType._C = {
    "a:tblBg": TableBackground,
    "a:wholeTbl": WholeTable,
    "a:band1H": Band1Horizontal,
    "a:band2H": Band2Horizontal,
    "a:band1V": Band1Vertical,
    "a:band2V": Band2Vertical,
    "a:lastCol": LastColumn,
    "a:firstCol": FirstColumn,
    "a:lastRow": LastRow,
    "a:seCell": SoutheastCell,
    "a:swCell": SouthwestCell,
    "a:firstRow": FirstRow,
    "a:neCell": NortheastCell,
    "a:nwCell": NorthwestCell,
    "a:extLst": ExtensionList
  };
  TableStyleType._D = {
    ":styleId": new OxmlAttr(":styleId", OxmlType.StringValue),
    ":styleName": new OxmlAttr(":styleName", OxmlType.StringValue)
  };
  TableStyleEntry._C = {
    "a:tblBg": TableBackground,
    "a:wholeTbl": WholeTable,
    "a:band1H": Band1Horizontal,
    "a:band2H": Band2Horizontal,
    "a:band1V": Band1Vertical,
    "a:band2V": Band2Vertical,
    "a:lastCol": LastColumn,
    "a:firstCol": FirstColumn,
    "a:lastRow": LastRow,
    "a:seCell": SoutheastCell,
    "a:swCell": SouthwestCell,
    "a:firstRow": FirstRow,
    "a:neCell": NortheastCell,
    "a:nwCell": NorthwestCell,
    "a:extLst": ExtensionList
  };
  TableStyle._C = {
    "a:tblBg": TableBackground,
    "a:wholeTbl": WholeTable,
    "a:band1H": Band1Horizontal,
    "a:band2H": Band2Horizontal,
    "a:band1V": Band1Vertical,
    "a:band2V": Band2Vertical,
    "a:lastCol": LastColumn,
    "a:firstCol": FirstColumn,
    "a:lastRow": LastRow,
    "a:seCell": SoutheastCell,
    "a:swCell": SouthwestCell,
    "a:firstRow": FirstRow,
    "a:neCell": NortheastCell,
    "a:nwCell": NorthwestCell,
    "a:extLst": ExtensionList
  };
  TableCell._C = {
    "a:txBody": TextBody,
    "a:tcPr": TableCellProperties,
    "a:extLst": ExtensionList
  };
  TableCell._D = {
    ":rowSpan": new OxmlAttr(":rowSpan", OxmlType.Int32Value),
    ":gridSpan": new OxmlAttr(":gridSpan", OxmlType.Int32Value),
    ":hMerge": new OxmlAttr(":hMerge", OxmlType.BooleanValue),
    ":vMerge": new OxmlAttr(":vMerge", OxmlType.BooleanValue)
  };
  TableCellProperties._C = {
    "a:lnL": LeftBorderLineProperties,
    "a:lnR": RightBorderLineProperties,
    "a:lnT": TopBorderLineProperties,
    "a:lnB": BottomBorderLineProperties,
    "a:lnTlToBr": TopLeftToBottomRightBorderLineProperties,
    "a:lnBlToTr": BottomLeftToTopRightBorderLineProperties,
    "a:cell3D": Cell3DProperties,
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:blipFill": BlipFill,
    "a:pattFill": PatternFill,
    "a:grpFill": GroupFill,
    "a:extLst": ExtensionList
  };
  TableCellProperties._D = {
    ":marL": new OxmlAttr(":marL", OxmlType.Int32Value),
    ":marR": new OxmlAttr(":marR", OxmlType.Int32Value),
    ":marT": new OxmlAttr(":marT", OxmlType.Int32Value),
    ":marB": new OxmlAttr(":marB", OxmlType.Int32Value),
    ":vert": new OxmlAttr(":vert", OxmlType.EnumValue, TextVerticalValuesArray),
    ":anchor": new OxmlAttr(":anchor", OxmlType.EnumValue, TextAnchoringTypeValuesArray),
    ":anchorCtr": new OxmlAttr(":anchorCtr", OxmlType.BooleanValue),
    ":horzOverflow": new OxmlAttr(":horzOverflow", OxmlType.EnumValue, TextHorizontalOverflowValuesArray)
  };
  Cell3DProperties._C = {
    "a:bevel": Bevel,
    "a:lightRig": LightRig,
    "a:extLst": ExtensionList
  };
  Cell3DProperties._D = {
    ":prstMaterial": new OxmlAttr(":prstMaterial", OxmlType.EnumValue, PresetMaterialTypeValuesArray)
  };
  ThemeElements._C = {
    "a:clrScheme": ColorScheme,
    "a:fontScheme": FontScheme,
    "a:fmtScheme": FormatScheme,
    "a:extLst": ExtensionList
  };
  ExtraColorScheme._C = {
    "a:clrScheme": ColorScheme,
    "a:clrMap": ColorMap
  };
  ColorMappingType._C = {
    "a:extLst": ExtensionList
  };
  ColorMappingType._D = {
    ":bg1": new OxmlAttr(":bg1", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":tx1": new OxmlAttr(":tx1", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":bg2": new OxmlAttr(":bg2", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":tx2": new OxmlAttr(":tx2", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":accent1": new OxmlAttr(":accent1", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":accent2": new OxmlAttr(":accent2", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":accent3": new OxmlAttr(":accent3", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":accent4": new OxmlAttr(":accent4", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":accent5": new OxmlAttr(":accent5", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":accent6": new OxmlAttr(":accent6", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":hlink": new OxmlAttr(":hlink", OxmlType.EnumValue, ColorSchemeIndexValuesArray),
    ":folHlink": new OxmlAttr(":folHlink", OxmlType.EnumValue, ColorSchemeIndexValuesArray)
  };
  ColorMap._C = {
    "a:extLst": ExtensionList
  };
  OverrideColorMapping._C = {
    "a:extLst": ExtensionList
  };
  DefaultShapeDefinitionType._C = {
    "a:spPr": ShapeProperties,
    "a:bodyPr": BodyProperties,
    "a:lstStyle": ListStyle,
    "a:style": ShapeStyle,
    "a:extLst": ExtensionList
  };
  TextDefault._C = {
    "a:spPr": ShapeProperties,
    "a:bodyPr": BodyProperties,
    "a:lstStyle": ListStyle,
    "a:style": ShapeStyle,
    "a:extLst": ExtensionList
  };
  LineDefault._C = {
    "a:spPr": ShapeProperties,
    "a:bodyPr": BodyProperties,
    "a:lstStyle": ListStyle,
    "a:style": ShapeStyle,
    "a:extLst": ExtensionList
  };
  ShapeDefault._C = {
    "a:spPr": ShapeProperties,
    "a:bodyPr": BodyProperties,
    "a:lstStyle": ListStyle,
    "a:style": ShapeStyle,
    "a:extLst": ExtensionList
  };
  ListStyle._C = {
    "a:defPPr": DefaultParagraphProperties,
    "a:lvl1pPr": Level1ParagraphProperties,
    "a:lvl2pPr": Level2ParagraphProperties,
    "a:lvl3pPr": Level3ParagraphProperties,
    "a:lvl4pPr": Level4ParagraphProperties,
    "a:lvl5pPr": Level5ParagraphProperties,
    "a:lvl6pPr": Level6ParagraphProperties,
    "a:lvl7pPr": Level7ParagraphProperties,
    "a:lvl8pPr": Level8ParagraphProperties,
    "a:lvl9pPr": Level9ParagraphProperties,
    "a:extLst": ExtensionList
  };
  BodyProperties._C = {
    "a:prstTxWarp": PresetTextWrap,
    "a:noAutofit": NoAutoFit,
    "a:normAutofit": NormalAutoFit,
    "a:spAutoFit": ShapeAutoFit,
    "a:scene3d": Scene3DType,
    "a:sp3d": Shape3DType,
    "a:flatTx": FlatText,
    "a:extLst": ExtensionList
  };
  BodyProperties._D = {
    ":rot": new OxmlAttr(":rot", OxmlType.Int32Value),
    ":spcFirstLastPara": new OxmlAttr(":spcFirstLastPara", OxmlType.BooleanValue),
    ":vertOverflow": new OxmlAttr(":vertOverflow", OxmlType.EnumValue, TextVerticalOverflowValuesArray),
    ":horzOverflow": new OxmlAttr(":horzOverflow", OxmlType.EnumValue, TextHorizontalOverflowValuesArray),
    ":vert": new OxmlAttr(":vert", OxmlType.EnumValue, TextVerticalValuesArray),
    ":wrap": new OxmlAttr(":wrap", OxmlType.EnumValue, TextWrappingValuesArray),
    ":lIns": new OxmlAttr(":lIns", OxmlType.Int32Value),
    ":tIns": new OxmlAttr(":tIns", OxmlType.Int32Value),
    ":rIns": new OxmlAttr(":rIns", OxmlType.Int32Value),
    ":bIns": new OxmlAttr(":bIns", OxmlType.Int32Value),
    ":numCol": new OxmlAttr(":numCol", OxmlType.Int32Value),
    ":spcCol": new OxmlAttr(":spcCol", OxmlType.Int32Value),
    ":rtlCol": new OxmlAttr(":rtlCol", OxmlType.BooleanValue),
    ":fromWordArt": new OxmlAttr(":fromWordArt", OxmlType.BooleanValue),
    ":anchor": new OxmlAttr(":anchor", OxmlType.EnumValue, TextAnchoringTypeValuesArray),
    ":anchorCtr": new OxmlAttr(":anchorCtr", OxmlType.BooleanValue),
    ":forceAA": new OxmlAttr(":forceAA", OxmlType.BooleanValue),
    ":upright": new OxmlAttr(":upright", OxmlType.BooleanValue),
    ":compatLnSpc": new OxmlAttr(":compatLnSpc", OxmlType.BooleanValue)
  };
  TransformGroup._C = {
    "a:off": Offset,
    "a:ext": Extents,
    "a:chOff": ChildOffset,
    "a:chExt": ChildExtents
  };
  TransformGroup._D = {
    ":rot": new OxmlAttr(":rot", OxmlType.Int32Value),
    ":flipH": new OxmlAttr(":flipH", OxmlType.BooleanValue),
    ":flipV": new OxmlAttr(":flipV", OxmlType.BooleanValue)
  };
  DashStop._D = {
    ":d": new OxmlAttr(":d", OxmlType.Int32Value),
    ":sp": new OxmlAttr(":sp", OxmlType.Int32Value)
  };
  PathList._C = {
    "a:path": Path
  };
  Rectangle._D = {
    ":l": new OxmlAttr(":l", OxmlType.StringValue),
    ":t": new OxmlAttr(":t", OxmlType.StringValue),
    ":r": new OxmlAttr(":r", OxmlType.StringValue),
    ":b": new OxmlAttr(":b", OxmlType.StringValue)
  };
  ConnectionSiteList._C = {
    "a:cxn": ConnectionSite
  };
  AdjustHandleList._C = {
    "a:ahXY": AdjustHandleXY,
    "a:ahPolar": AdjustHandlePolar
  };
  GeometryGuideListType._C = {
    "a:gd": ShapeGuide
  };
  ShapeGuideList._C = {
    "a:gd": ShapeGuide
  };
  AdjustValueList._C = {
    "a:gd": ShapeGuide
  };
  Path._C = {
    "a:close": CloseShapePath,
    "a:moveTo": MoveTo,
    "a:lnTo": LineTo,
    "a:arcTo": ArcTo,
    "a:quadBezTo": QuadraticBezierCurveTo,
    "a:cubicBezTo": CubicBezierCurveTo
  };
  Path._D = {
    ":w": new OxmlAttr(":w", OxmlType.Int64Value),
    ":h": new OxmlAttr(":h", OxmlType.Int64Value),
    ":fill": new OxmlAttr(":fill", OxmlType.EnumValue, PathFillModeValuesArray),
    ":stroke": new OxmlAttr(":stroke", OxmlType.BooleanValue),
    ":extrusionOk": new OxmlAttr(":extrusionOk", OxmlType.BooleanValue)
  };
  CubicBezierCurveTo._C = {
    "a:pt": Point
  };
  QuadraticBezierCurveTo._C = {
    "a:pt": Point
  };
  ArcTo._D = {
    ":wR": new OxmlAttr(":wR", OxmlType.StringValue),
    ":hR": new OxmlAttr(":hR", OxmlType.StringValue),
    ":stAng": new OxmlAttr(":stAng", OxmlType.StringValue),
    ":swAng": new OxmlAttr(":swAng", OxmlType.StringValue)
  };
  LineTo._C = {
    "a:pt": Point
  };
  MoveTo._C = {
    "a:pt": Point
  };
  ConnectionSite._C = {
    "a:pos": Position
  };
  ConnectionSite._D = {
    ":ang": new OxmlAttr(":ang", OxmlType.StringValue)
  };
  AdjustHandlePolar._C = {
    "a:pos": Position
  };
  AdjustHandlePolar._D = {
    ":gdRefR": new OxmlAttr(":gdRefR", OxmlType.StringValue),
    ":minR": new OxmlAttr(":minR", OxmlType.StringValue),
    ":maxR": new OxmlAttr(":maxR", OxmlType.StringValue),
    ":gdRefAng": new OxmlAttr(":gdRefAng", OxmlType.StringValue),
    ":minAng": new OxmlAttr(":minAng", OxmlType.StringValue),
    ":maxAng": new OxmlAttr(":maxAng", OxmlType.StringValue)
  };
  AdjustHandleXY._C = {
    "a:pos": Position
  };
  AdjustHandleXY._D = {
    ":gdRefX": new OxmlAttr(":gdRefX", OxmlType.StringValue),
    ":minX": new OxmlAttr(":minX", OxmlType.StringValue),
    ":maxX": new OxmlAttr(":maxX", OxmlType.StringValue),
    ":gdRefY": new OxmlAttr(":gdRefY", OxmlType.StringValue),
    ":minY": new OxmlAttr(":minY", OxmlType.StringValue),
    ":maxY": new OxmlAttr(":maxY", OxmlType.StringValue)
  };
  AdjustPoint2DType._D = {
    ":x": new OxmlAttr(":x", OxmlType.StringValue),
    ":y": new OxmlAttr(":y", OxmlType.StringValue)
  };
  ShapeGuide._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":fmla": new OxmlAttr(":fmla", OxmlType.StringValue)
  };
  GradientStopList._C = {
    "a:gs": GradientStop
  };
  GradientStop._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  GradientStop._D = {
    ":pos": new OxmlAttr(":pos", OxmlType.Int32Value)
  };
  RelativeRectangleType._D = {
    ":l": new OxmlAttr(":l", OxmlType.Int32Value),
    ":t": new OxmlAttr(":t", OxmlType.Int32Value),
    ":r": new OxmlAttr(":r", OxmlType.Int32Value),
    ":b": new OxmlAttr(":b", OxmlType.Int32Value)
  };
  BevelType._D = {
    ":w": new OxmlAttr(":w", OxmlType.Int64Value),
    ":h": new OxmlAttr(":h", OxmlType.Int64Value),
    ":prst": new OxmlAttr(":prst", OxmlType.EnumValue, BevelPresetValuesArray)
  };
  Vector3DType._D = {
    ":dx": new OxmlAttr(":dx", OxmlType.Int64Value),
    ":dy": new OxmlAttr(":dy", OxmlType.Int64Value),
    ":dz": new OxmlAttr(":dz", OxmlType.Int64Value)
  };
  Anchor._D = {
    ":x": new OxmlAttr(":x", OxmlType.Int64Value),
    ":y": new OxmlAttr(":y", OxmlType.Int64Value),
    ":z": new OxmlAttr(":z", OxmlType.Int64Value)
  };
  Backdrop._C = {
    "a:anchor": Anchor,
    "a:norm": Normal,
    "a:up": UpVector,
    "a:extLst": ExtensionList
  };
  LightRig._C = {
    "a:rot": Rotation
  };
  LightRig._D = {
    ":rig": new OxmlAttr(":rig", OxmlType.EnumValue, LightRigValuesArray),
    ":dir": new OxmlAttr(":dir", OxmlType.EnumValue, LightRigDirectionValuesArray)
  };
  Camera._C = {
    "a:rot": Rotation
  };
  Camera._D = {
    ":prst": new OxmlAttr(":prst", OxmlType.EnumValue, PresetCameraValuesArray),
    ":fov": new OxmlAttr(":fov", OxmlType.Int32Value),
    ":zoom": new OxmlAttr(":zoom", OxmlType.Int32Value)
  };
  Rotation._D = {
    ":lat": new OxmlAttr(":lat", OxmlType.Int32Value),
    ":lon": new OxmlAttr(":lon", OxmlType.Int32Value),
    ":rev": new OxmlAttr(":rev", OxmlType.Int32Value)
  };
  NonVisualGroupShapeDrawingProperties._C = {
    "a:grpSpLocks": GroupShapeLocks,
    "a:extLst": NonVisualGroupDrawingShapePropsExtensionList
  };
  NonVisualGraphicFrameProperties._C = {
    "a:cNvPr": NonVisualDrawingProperties,
    "a:cNvGraphicFramePr": NonVisualGraphicFrameDrawingProperties
  };
  NonVisualGraphicFrameDrawingProperties._C = {
    "a:graphicFrameLocks": GraphicFrameLocks,
    "a:extLst": ExtensionList
  };
  NonVisualPictureProperties._C = {
    "a:cNvPr": NonVisualDrawingProperties,
    "a:cNvPicPr": NonVisualPictureDrawingProperties
  };
  NonVisualPictureDrawingProperties._C = {
    "a:picLocks": PictureLocks,
    "a:extLst": NonVisualPicturePropertiesExtensionList
  };
  NonVisualPictureDrawingProperties._D = {
    ":preferRelativeResize": new OxmlAttr(":preferRelativeResize", OxmlType.BooleanValue)
  };
  NonVisualConnectionShapeProperties._C = {
    "a:cNvPr": NonVisualDrawingProperties,
    "a:cNvCxnSpPr": NonVisualConnectorShapeDrawingProperties
  };
  NonVisualConnectorShapeDrawingProperties._C = {
    "a:cxnSpLocks": ConnectionShapeLocks,
    "a:stCxn": StartConnection,
    "a:endCxn": EndConnection,
    "a:extLst": ExtensionList
  };
  ShapeStyle._C = {
    "a:lnRef": LineReference,
    "a:fillRef": FillReference,
    "a:effectRef": EffectReference,
    "a:fontRef": FontReference
  };
  TextShape._C = {
    "a:txBody": TextBody,
    "a:useSpRect": UseShapeRectangle,
    "a:xfrm": Transform2D,
    "a:extLst": ExtensionList
  };
  ShapeProperties._C = {
    "a:xfrm": Transform2D,
    "a:custGeom": CustomGeometry,
    "a:prstGeom": PresetGeometry,
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:blipFill": BlipFill,
    "a:pattFill": PatternFill,
    "a:grpFill": GroupFill,
    "a:ln": Outline,
    "a:effectLst": EffectList,
    "a:effectDag": EffectDag,
    "a:scene3d": Scene3DType,
    "a:sp3d": Shape3DType,
    "a:extLst": ShapePropertiesExtensionList
  };
  ShapeProperties._D = {
    ":bwMode": new OxmlAttr(":bwMode", OxmlType.EnumValue, BlackWhiteModeValuesArray)
  };
  NonVisualShapeProperties._C = {
    "a:cNvPr": NonVisualDrawingProperties,
    "a:cNvSpPr": NonVisualShapeDrawingProperties
  };
  NonVisualShapeDrawingProperties._C = {
    "a:spLocks": ShapeLocks,
    "a:extLst": ExtensionList
  };
  NonVisualShapeDrawingProperties._D = {
    ":txBox": new OxmlAttr(":txBox", OxmlType.BooleanValue)
  };
  NonVisualDrawingProperties._C = {
    "a:hlinkClick": HyperlinkOnClick,
    "a:hlinkHover": HyperlinkOnHover,
    "a:extLst": NonVisualDrawingPropertiesExtensionList
  };
  NonVisualDrawingProperties._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":descr": new OxmlAttr(":descr", OxmlType.StringValue),
    ":hidden": new OxmlAttr(":hidden", OxmlType.BooleanValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue)
  };
  Transform2D._C = {
    "a:off": Offset,
    "a:ext": Extents
  };
  Transform2D._D = {
    ":rot": new OxmlAttr(":rot", OxmlType.Int32Value),
    ":flipH": new OxmlAttr(":flipH", OxmlType.BooleanValue),
    ":flipV": new OxmlAttr(":flipV", OxmlType.BooleanValue)
  };
  TextBody._C = {
    "a:bodyPr": BodyProperties,
    "a:lstStyle": ListStyle,
    "a:p": Paragraph
  };
  BuildChart._D = {
    ":bld": new OxmlAttr(":bld", OxmlType.StringValue),
    ":animBg": new OxmlAttr(":animBg", OxmlType.BooleanValue)
  };
  BuildDiagram._D = {
    ":bld": new OxmlAttr(":bld", OxmlType.StringValue),
    ":rev": new OxmlAttr(":rev", OxmlType.BooleanValue)
  };
  Chart._D = {
    ":seriesIdx": new OxmlAttr(":seriesIdx", OxmlType.Int32Value),
    ":categoryIdx": new OxmlAttr(":categoryIdx", OxmlType.Int32Value),
    ":bldStep": new OxmlAttr(":bldStep", OxmlType.EnumValue, ChartBuildStepValuesArray)
  };
  Diagram._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":bldStep": new OxmlAttr(":bldStep", OxmlType.EnumValue, DiagramBuildStepValuesArray)
  };
  GraphicData._C = {
    "a:graphic": Graphic,
    "a:blip": Blip,
    "a:theme": Theme,
    "a:themeOverride": ThemeOverride,
    "a:themeManager": ThemeManager,
    "a:tbl": Table,
    "a:tblStyleLst": TableStyleList,
    "aoe:oembedShared": AoeOEmbedShared,
    "woe:oembed": WoeOEmbed,
    "aif:imageFormula": AifImageFormula,
    "alf:liveFeedProps": AlfLiveFeedProperties,
    "asl:scriptLink": AslScriptLink,
    "aclsh:classification": AclshClassificationOutcome,
    "ask:lineSketchStyleProps": AskLineSketchStyleProperties,
    "a1611:picAttrSrcUrl": A1611PictureAttributionSourceURL,
    "asvg:svgBlip": AsvgSVGBlip,
    "adec:decorative": AdecDecorative,
    "a16:creationId": A16CreationId,
    "a16:predDERef": A16PredecessorDrawingElementReference,
    "a16:cxnDERefs": A16ConnectableReferences,
    "a16:rowId": A16RowIdIdentifier,
    "a16:colId": A16ColIdIdentifier,
    "ahyp:hlinkClr": AhypHyperlinkColor,
    "wp15:webVideoPr": Wp15WebVideoProperty,
    "thm15:themeFamily": Thm15ThemeFamily,
    "a15:backgroundPr": A15BackgroundProperties,
    "a15:nonVisualGroupProps": A15NonVisualGroupProperties,
    "a15:objectPr": A15ObjectProperties,
    "a15:signatureLine": A15SignatureLine,
    "a14:cameraTool": A14CameraTool,
    "a14:compatExt": A14CompatExtension,
    "a14:isCanvas": A14IsCanvas,
    "a14:contentPart": A14GvmlContentPart,
    "a14:shadowObscured": A14ShadowObscured,
    "a14:hiddenFill": A14HiddenFillProperties,
    "a14:hiddenLine": A14HiddenLineProperties,
    "a14:hiddenEffects": A14HiddenEffectsProperties,
    "a14:hiddenScene3d": A14HiddenScene3D,
    "a14:hiddenSp3d": A14HiddenShape3D,
    "a14:imgProps": A14ImageProperties,
    "a14:useLocalDpi": A14UseLocalDpi,
    "a14:m": A14TextMath,
    "dgm14:cNvPr": Dgm14NonVisualDrawingProperties,
    "dgm14:recolorImg": Dgm14RecolorImages,
    "dsp:drawing": DspDrawing,
    "dsp:dataModelExt": DspDataModelExtensionBlock,
    "dgm:colorsDef": DgmColorsDefinition,
    "dgm:colorsDefHdr": DgmColorsDefinitionHeader,
    "dgm:colorsDefHdrLst": DgmColorsDefinitionHeaderList,
    "dgm:dataModel": DgmDataModelRoot,
    "dgm:layoutDef": DgmLayoutDefinition,
    "dgm:layoutDefHdr": DgmLayoutDefinitionHeader,
    "dgm:layoutDefHdrLst": DgmLayoutDefinitionHeaderList,
    "dgm:relIds": DgmRelationshipIds,
    "dgm:styleDef": DgmStyleDefinition,
    "dgm:styleDefHdr": DgmStyleDefinitionHeader,
    "dgm:styleDefHdrLst": DgmStyleDefinitionHeaderList,
    "dgm1612:spPr": Dgm1612ShapeProperties,
    "dgm1612:lstStyle": Dgm1612TextListStyleType,
    "dgm1611:autoBuNodeInfoLst": Dgm1611NumberDiagramInfoList,
    "c:chartSpace": CChartSpace,
    "c:userShapes": CUserShapes,
    "c:chart": CChartReference,
    "c16r3:dataDisplayOptions16": C16r3DataDisplayOptions16,
    "c15:pivotSource": C15PivotSource,
    "c15:numFmt": C15NumberingFormat,
    "c15:spPr": C15ShapeProperties,
    "c15:layout": C15Layout,
    "c15:fullRef": C15FullReference,
    "c15:levelRef": C15LevelReference,
    "c15:formulaRef": C15FormulaReference,
    "c15:filteredSeriesTitle": C15FilteredSeriesTitle,
    "c15:filteredCategoryTitle": C15FilteredCategoryTitle,
    "c15:filteredAreaSeries": C15FilteredAreaSeries,
    "c15:filteredBarSeries": C15FilteredBarSeries,
    "c15:filteredBubbleSeries": C15FilteredBubbleSeries,
    "c15:filteredLineSeries": C15FilteredLineSeriesExtension,
    "c15:filteredPieSeries": C15FilteredPieSeries,
    "c15:filteredRadarSeries": C15FilteredRadarSeries,
    "c15:filteredScatterSeries": C15FilteredScatterSeries,
    "c15:filteredSurfaceSeries": C15FilteredSurfaceSeries,
    "c15:datalabelsRange": C15DataLabelsRange,
    "c15:categoryFilterExceptions": C15CategoryFilterExceptions,
    "c15:dlblFieldTable": C15DataLabelFieldTable,
    "c15:xForSave": C15ExceptionForSave,
    "c15:showDataLabelsRange": C15ShowDataLabelsRange,
    "c15:tx": C15ChartText,
    "c15:showLeaderLines": C15ShowLeaderLines,
    "c15:leaderLines": C15LeaderLines,
    "c15:autoCat": C15AutoGeneneratedCategories,
    "c14:pivotOptions": C14PivotOptions,
    "c14:sketchOptions": C14SketchOptions,
    "c14:invertSolidFillFmt": C14InvertSolidFillFormat,
    "c14:style": C14Style,
    "cdr14:contentPart": Cdr14ContentPart,
    "comp:legacyDrawing": CompLegacyDrawing,
    "lc:lockedCanvas": LcLockedCanvas,
    "wp:inline": WpInline,
    "wp:anchor": WpAnchor,
    "wp14:pctPosHOffset": Wp14PercentagePositionHeightOffset,
    "wp14:pctPosVOffset": Wp14PercentagePositionVerticalOffset,
    "wp14:sizeRelH": Wp14RelativeWidth,
    "wp14:sizeRelV": Wp14RelativeHeight,
    "pic:pic": PicPicture,
    "pic14:style": Pic14ShapeStyle,
    "pic14:extLst": Pic14OfficeArtExtensionList,
    "xdr:wsDr": XdrWorksheetDrawing,
    "xdr:contentPart": XdrContentPart,
    "xdr14:contentPart": Xdr14ContentPart,
    "pc:cmAuthorMkLst": PcCommentAuthorMonikerList,
    "pc:cmMkLst": PcCommentMonikerList,
    "pc:tagMkLst": PcStringTagMonikerList,
    "pc:custShowMkLst": PcCustomShowMonikerList,
    "pc:docMkLst": PcDocumentMonikerList,
    "pc:sectionMkLst": PcSectionMonikerList,
    "pc:sldBaseMkLst": PcSlideBaseMonikerList,
    "pc:sldLayoutMkLst": PcSlideLayoutMonikerList,
    "pc:sldMasterMkLst": PcMainMasterMonikerList,
    "pc:sldMkLst": PcSlideMonikerList,
    "pc:sldPosMkLst": PcSlidePosMonikerList,
    "pc:notesMkLst": PcNotesMonikerList,
    "pc:notesTxtMkLst": PcNotesTextMonikerList,
    "pc:notesMasterMkLst": PcNotesMasterMonikerList,
    "pc:handoutMkLst": PcHandoutMonikerList,
    "pc:animEffectMkLst": PcAnimEffectMkLstAnimationEffectMonikerList,
    "pc:animEffectParentMkLst": PcAnimEffectParentMkLstAnimationEffectMonikerList,
    "pc:tkAppMkLst": PcOsfTaskPaneAppMonikerList,
    "pc:tocMkLst": PcSummaryZoomMonikerList,
    "pc:sectionLnkObjMkLst": PcSectionLinkObjMonikerList,
    "pc:designTagMkLst": PcDesignerTagMonikerList,
    "pc:cXmlMkLst": PcCustomXmlPartMonikerList,
    "p:cmAuthorLst": PCommentAuthorList,
    "p:cmLst": PCommentList,
    "p:oleObj": POleObject,
    "p:presentation": PPresentation,
    "p:presentationPr": PPresentationProperties,
    "p:sld": PSlide,
    "p:sldLayout": PSlideLayout,
    "p:sldMaster": PSlideMaster,
    "p:handoutMaster": PHandoutMaster,
    "p:notesMaster": PNotesMaster,
    "p:notes": PNotesSlide,
    "p:sldSyncPr": PSlideSyncProperties,
    "p:tagLst": PTagList,
    "p:viewPr": PViewProperties,
    "p:contentPart": PContentPart,
    "p188:authorLst": P188AuthorList,
    "p188:cmLst": P188CommentList,
    "p188:commentRel": P188CommentRelationship,
    "p1912:taskHistoryDetails": P1912TaskHistoryDetails,
    "oac:txBodyPkg": OacTextBodyPackage,
    "oac:grpCmd": OacGroupCommand,
    "oac:imgData": OacImgDataImgData,
    "oac:origImgData": OacOrigImgDataImgData,
    "oac:imgLink": OacImgLink,
    "oac:dgMkLst": OacDrawingMonikerList,
    "oac:dcMkLst": OacDocumentContextMonikerList,
    "oac:graphicParentMkLst": OacGraphicParentMonikerList,
    "oac:deMkLst": OacDeMkLstDrawingElementMonikerList,
    "oac:deMasterMkLst": OacDeMasterMkLstDrawingElementMonikerList,
    "oac:spMkLst": OacShapeMonikerList,
    "oac:grpSpMkLst": OacGroupShapeMonikerList,
    "oac:graphicFrameMkLst": OacGraphicFrameMonikerList,
    "oac:cxnSpMkLst": OacConnectorMonikerList,
    "oac:picMkLst": OacPictureMonikerList,
    "oac:inkMkLst": OacInkMonikerList,
    "oac:txBodyMkLst": OacTextBodyMonikerList,
    "oac:txMkLst": OacTextCharRangeMonikerList,
    "oac:hlinkMkLst": OacHyperlinkMonikerList,
    "oac:model3DMkLst": OacModel3DMonikerList,
    "oac:viewSelLst": OacViewSelectionStgList,
    "oac:editorSelLst": OacEditorSelectionStgList,
    "oac:drSelLst": OacDrawingSelectionStgList,
    "oac:tblMkLst": OacTableMonikerList,
    "oac:tcMkLst": OacTableCellMonikerList,
    "oac:trMkLst": OacTableRowMonikerList,
    "oac:gridColMkLst": OacTableColumnMonikerList,
    "inkml:ink": InkmlInk,
    "emma:one-of": EmmaOneOf,
    "emma:group": EmmaGroup,
    "emma:sequence": EmmaSequence,
    "emma:endpoint": EmmaEndPoint,
    "emma:endpoint-info": EmmaEndPointInfo,
    "emma:info": EmmaInfo,
    "emma:grammar": EmmaGrammar,
    "emma:derived-from": EmmaDerivedFrom,
    "emma:node": EmmaNode,
    "emma:arc": EmmaArc,
    "emma:lattice": EmmaLattice,
    "emma:literal": EmmaLiteral,
    "emma:interpretation": EmmaInterpretation,
    "emma:group-info": EmmaGroupInfo,
    "emma:derivation": EmmaDerivation,
    "emma:model": EmmaModel,
    "emma:emma": EmmaEmma,
    "msink:context": MsinkContextNode,
    "p15:prstTrans": P15PresetTransition,
    "p15:presenceInfo": P15PresenceInfo,
    "p15:threadingInfo": P15ThreadingInfo,
    "p15:sldGuideLst": P15SlideGuideList,
    "p15:notesGuideLst": P15NotesGuideList,
    "p15:chartTrackingRefBased": P15ChartTrackingReferenceBased,
    "p14:nvContentPartPr": P14NonVisualContentPartProperties,
    "p14:xfrm": P14Transform2D,
    "p14:extLst": P14ExtensionListModify,
    "p14:media": P14Media,
    "p14:vortex": P14VortexTransition,
    "p14:switch": P14SwitchTransition,
    "p14:flip": P14FlipTransition,
    "p14:ripple": P14RippleTransition,
    "p14:honeycomb": P14HoneycombTransition,
    "p14:prism": P14PrismTransition,
    "p14:doors": P14DoorsTransition,
    "p14:window": P14WindowTransition,
    "p14:ferris": P14FerrisTransition,
    "p14:gallery": P14GalleryTransition,
    "p14:conveyor": P14ConveyorTransition,
    "p14:pan": P14PanTransition,
    "p14:glitter": P14GlitterTransition,
    "p14:warp": P14WarpTransition,
    "p14:flythrough": P14FlythroughTransition,
    "p14:flash": P14FlashTransition,
    "p14:shred": P14ShredTransition,
    "p14:reveal": P14RevealTransition,
    "p14:wheelReverse": P14WheelReverseTransition,
    "p14:bmkTgt": P14BookmarkTarget,
    "p14:sectionPr": P14SectionProperties,
    "p14:sectionLst": P14SectionList,
    "p14:browseMode": P14BrowseMode,
    "p14:laserClr": P14LaserColor,
    "p14:defaultImageDpi": P14DefaultImageDpi,
    "p14:discardImageEditData": P14DiscardImageEditData,
    "p14:showMediaCtrls": P14ShowMediaControls,
    "p14:laserTraceLst": P14LaserTraceList,
    "p14:creationId": P14CreationId,
    "p14:modId": P14ModificationId,
    "p14:showEvtLst": P14ShowEventRecordList,
    "sl:schemaLibrary": SlSchemaLibrary,
    "m:mathPr": MMathProperties,
    "m:oMathPara": MParagraph,
    "m:oMath": MOfficeMath,
    "w:recipients": WRecipients,
    "w:txbxContent": WTextBoxContent,
    "w:comments": WComments,
    "w:footnotes": WFootnotes,
    "w:endnotes": WEndnotes,
    "w:hdr": WHeader,
    "w:ftr": WFooter,
    "w:settings": WSettings,
    "w:webSettings": WWebSettings,
    "w:fonts": WFonts,
    "w:numbering": WNumbering,
    "w:styles": WStyles,
    "w:document": WDocument,
    "w:glossaryDocument": WGlossaryDocument,
    "w15:color": W15Color,
    "w15:dataBinding": W15DataBinding,
    "w15:appearance": W15Appearance,
    "w15:commentsEx": W15CommentsEx,
    "w15:people": W15People,
    "w15:repeatingSection": W15SdtRepeatedSection,
    "w15:repeatingSectionItem": W15SdtRepeatedSectionItem,
    "w15:chartTrackingRefBased": W15ChartTrackingRefBased,
    "w15:collapsed": W15DefaultCollapsed,
    "w15:docId": W15PersistentDocumentId,
    "w15:footnoteColumns": W15FootnoteColumns,
    "w15:webExtensionLinked": W15WebExtensionLinked,
    "w15:webExtensionCreated": W15WebExtensionCreated,
    "w14:contentPart": W14ContentPart,
    "w14:docId": W14DocumentId,
    "w14:conflictMode": W14ConflictMode,
    "w14:customXmlConflictInsRangeStart": W14CustomXmlConflictInsertionRangeStart,
    "w14:customXmlConflictInsRangeEnd": W14CustomXmlConflictInsertionRangeEnd,
    "w14:customXmlConflictDelRangeStart": W14CustomXmlConflictDeletionRangeStart,
    "w14:customXmlConflictDelRangeEnd": W14CustomXmlConflictDeletionRangeEnd,
    "w14:discardImageEditingData": W14DiscardImageEditingData,
    "w14:defaultImageDpi": W14DefaultImageDpi,
    "w14:entityPicker": W14EntityPickerEmpty,
    "w14:checkbox": W14SdtContentCheckBox,
    "v:shape": VShape,
    "v:shapetype": VShapetype,
    "v:group": VGroup,
    "v:background": VBackground,
    "v:fill": VFill,
    "v:formulas": VFormulas,
    "v:handles": VShapeHandles,
    "v:imagedata": VImageData,
    "v:path": VPath,
    "v:textbox": VTextBox,
    "v:shadow": VShadow,
    "v:stroke": VStroke,
    "v:textpath": VTextPath,
    "v:arc": VArc,
    "v:curve": VCurve,
    "v:image": VImageFile,
    "v:line": VLine,
    "v:oval": VOval,
    "v:polyline": VPolyLine,
    "v:rect": VRectangle,
    "v:roundrect": VRoundRectangle,
    "o:shapedefaults": OShapeDefaults,
    "o:shapelayout": OShapeLayout,
    "o:signatureline": OSignatureLine,
    "o:ink": OInk,
    "o:diagram": ODiagram,
    "o:skew": OSkew,
    "o:extrusion": OExtrusion,
    "o:callout": OCallout,
    "o:lock": OLock,
    "o:OLEObject": OOleObject,
    "o:complex": OComplex,
    "o:left": OLeftStroke,
    "o:top": OTopStroke,
    "o:right": ORightStroke,
    "o:bottom": OBottomStroke,
    "o:column": OColumnStroke,
    "o:clippath": OClipPath,
    "o:fill": OFillExtendedProperties,
    "w10:bordertop": W10TopBorder,
    "w10:borderleft": W10LeftBorder,
    "w10:borderright": W10RightBorder,
    "w10:borderbottom": W10BottomBorder,
    "w10:wrap": W10TextWrap,
    "w10:anchorlock": W10AnchorLock,
    "xvml:ClientData": XvmlClientData,
    "pvml:iscomment": PvmlInkAnnotationFlag,
    "pvml:textdata": PvmlTextData,
    "wpc:wpc": WpcWordprocessingCanvas,
    "wpg:wgp": WpgWordprocessingGroup,
    "wps:wsp": WpsWordprocessingShape,
    "sle:slicer": SleSlicer,
    "cs:colorStyle": CsColorStyle,
    "cs:chartStyle": CsChartStyle,
    "we:webextension": WeWebExtension,
    "we:webextensionref": WeWebExtensionReference,
    "tsle:timeslicer": TsleTimeSlicer
  };
  GraphicData._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  GraphicFrameLocks._C = {
    "a:extLst": ExtensionList
  };
  GraphicFrameLocks._D = {
    ":noGrp": new OxmlAttr(":noGrp", OxmlType.BooleanValue),
    ":noDrilldown": new OxmlAttr(":noDrilldown", OxmlType.BooleanValue),
    ":noSelect": new OxmlAttr(":noSelect", OxmlType.BooleanValue),
    ":noChangeAspect": new OxmlAttr(":noChangeAspect", OxmlType.BooleanValue),
    ":noMove": new OxmlAttr(":noMove", OxmlType.BooleanValue),
    ":noResize": new OxmlAttr(":noResize", OxmlType.BooleanValue)
  };
  ConnectionType._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":idx": new OxmlAttr(":idx", OxmlType.UInt32Value)
  };
  ConnectionShapeLocks._C = {
    "a:extLst": ConnectorLockingExtensionList
  };
  ConnectionShapeLocks._D = {
    ":noGrp": new OxmlAttr(":noGrp", OxmlType.BooleanValue),
    ":noSelect": new OxmlAttr(":noSelect", OxmlType.BooleanValue),
    ":noRot": new OxmlAttr(":noRot", OxmlType.BooleanValue),
    ":noChangeAspect": new OxmlAttr(":noChangeAspect", OxmlType.BooleanValue),
    ":noMove": new OxmlAttr(":noMove", OxmlType.BooleanValue),
    ":noResize": new OxmlAttr(":noResize", OxmlType.BooleanValue),
    ":noEditPoints": new OxmlAttr(":noEditPoints", OxmlType.BooleanValue),
    ":noAdjustHandles": new OxmlAttr(":noAdjustHandles", OxmlType.BooleanValue),
    ":noChangeArrowheads": new OxmlAttr(":noChangeArrowheads", OxmlType.BooleanValue),
    ":noChangeShapeType": new OxmlAttr(":noChangeShapeType", OxmlType.BooleanValue)
  };
  ShapeLocks._C = {
    "a:extLst": ExtensionList
  };
  ShapeLocks._D = {
    ":noGrp": new OxmlAttr(":noGrp", OxmlType.BooleanValue),
    ":noSelect": new OxmlAttr(":noSelect", OxmlType.BooleanValue),
    ":noRot": new OxmlAttr(":noRot", OxmlType.BooleanValue),
    ":noChangeAspect": new OxmlAttr(":noChangeAspect", OxmlType.BooleanValue),
    ":noMove": new OxmlAttr(":noMove", OxmlType.BooleanValue),
    ":noResize": new OxmlAttr(":noResize", OxmlType.BooleanValue),
    ":noEditPoints": new OxmlAttr(":noEditPoints", OxmlType.BooleanValue),
    ":noAdjustHandles": new OxmlAttr(":noAdjustHandles", OxmlType.BooleanValue),
    ":noChangeArrowheads": new OxmlAttr(":noChangeArrowheads", OxmlType.BooleanValue),
    ":noChangeShapeType": new OxmlAttr(":noChangeShapeType", OxmlType.BooleanValue),
    ":noTextEdit": new OxmlAttr(":noTextEdit", OxmlType.BooleanValue)
  };
  PositiveSize2DType._D = {
    ":cx": new OxmlAttr(":cx", OxmlType.Int64Value),
    ":cy": new OxmlAttr(":cy", OxmlType.Int64Value)
  };
  Point2DType._D = {
    ":x": new OxmlAttr(":x", OxmlType.Int64Value),
    ":y": new OxmlAttr(":y", OxmlType.Int64Value)
  };
  RatioType._D = {
    ":n": new OxmlAttr(":n", OxmlType.Int32Value),
    ":d": new OxmlAttr(":d", OxmlType.Int32Value)
  };
  Color2Type._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:prstClr": PresetColor
  };
  FollowedHyperlinkColor._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:prstClr": PresetColor
  };
  Hyperlink._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:prstClr": PresetColor
  };
  Accent6Color._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:prstClr": PresetColor
  };
  Accent5Color._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:prstClr": PresetColor
  };
  Accent4Color._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:prstClr": PresetColor
  };
  Accent3Color._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:prstClr": PresetColor
  };
  Accent2Color._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:prstClr": PresetColor
  };
  Accent1Color._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:prstClr": PresetColor
  };
  Light2Color._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:prstClr": PresetColor
  };
  Dark2Color._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:prstClr": PresetColor
  };
  Light1Color._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:prstClr": PresetColor
  };
  Dark1Color._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:prstClr": PresetColor
  };
  FormatScheme._C = {
    "a:fillStyleLst": FillStyleList,
    "a:lnStyleLst": LineStyleList,
    "a:effectStyleLst": EffectStyleList,
    "a:bgFillStyleLst": BackgroundFillStyleList
  };
  FormatScheme._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  FontScheme._C = {
    "a:majorFont": MajorFont,
    "a:minorFont": MinorFont,
    "a:extLst": ExtensionList
  };
  FontScheme._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  ColorScheme._C = {
    "a:dk1": Dark1Color,
    "a:lt1": Light1Color,
    "a:dk2": Dark2Color,
    "a:lt2": Light2Color,
    "a:accent1": Accent1Color,
    "a:accent2": Accent2Color,
    "a:accent3": Accent3Color,
    "a:accent4": Accent4Color,
    "a:accent5": Accent5Color,
    "a:accent6": Accent6Color,
    "a:hlink": Hyperlink,
    "a:folHlink": FollowedHyperlinkColor,
    "a:extLst": ExtensionList
  };
  ColorScheme._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  BackgroundFillStyleList._C = {
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:blipFill": BlipFill,
    "a:pattFill": PatternFill,
    "a:grpFill": GroupFill
  };
  EffectStyleList._C = {
    "a:effectStyle": EffectStyle
  };
  LineStyleList._C = {
    "a:ln": Outline
  };
  FillStyleList._C = {
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:blipFill": BlipFill,
    "a:pattFill": PatternFill,
    "a:grpFill": GroupFill
  };
  EffectStyle._C = {
    "a:effectLst": EffectList,
    "a:effectDag": EffectDag,
    "a:scene3d": Scene3DType,
    "a:sp3d": Shape3DType
  };
  Scene3DType._C = {
    "a:camera": Camera,
    "a:lightRig": LightRig,
    "a:backdrop": Backdrop,
    "a:extLst": ExtensionList
  };
  SupplementalFont._D = {
    ":script": new OxmlAttr(":script", OxmlType.StringValue),
    ":typeface": new OxmlAttr(":typeface", OxmlType.StringValue)
  };
  CustomColor._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  CustomColor._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  AudioCDTimeType._D = {
    ":track": new OxmlAttr(":track", OxmlType.ByteValue),
    ":time": new OxmlAttr(":time", OxmlType.UInt32Value)
  };
  ExtensionList._C = {
    "a:ext": Extension
  };
  TableStyleList._C = {
    "a:tblStyle": TableStyleEntry
  };
  TableStyleList._D = {
    ":def": new OxmlAttr(":def", OxmlType.StringValue)
  };
  Table._C = {
    "a:tblPr": TableProperties,
    "a:tblGrid": TableGrid,
    "a:tr": TableRow
  };
  ThemeOverride._C = {
    "a:clrScheme": ColorScheme,
    "a:fontScheme": FontScheme,
    "a:fmtScheme": FormatScheme
  };
  Theme._C = {
    "a:themeElements": ThemeElements,
    "a:objectDefaults": ObjectDefaults,
    "a:extraClrSchemeLst": ExtraColorSchemeList,
    "a:custClrLst": CustomColorList,
    "a:extLst": OfficeStyleSheetExtensionList
  };
  Theme._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    "thm15:id": new OxmlAttr("thm15:id", OxmlType.StringValue)
  };
  Blip._C = {
    "a:alphaBiLevel": AlphaBiLevel,
    "a:alphaCeiling": AlphaCeiling,
    "a:alphaFloor": AlphaFloor,
    "a:alphaInv": AlphaInverse,
    "a:alphaMod": AlphaModulationEffect,
    "a:alphaModFix": AlphaModulationFixed,
    "a:alphaRepl": AlphaReplace,
    "a:biLevel": BiLevel,
    "a:blur": Blur,
    "a:clrChange": ColorChange,
    "a:clrRepl": ColorReplacement,
    "a:duotone": Duotone,
    "a:fillOverlay": FillOverlay,
    "a:grayscl": Grayscale,
    "a:hsl": Hsl,
    "a:lum": LuminanceEffect,
    "a:tint": TintEffect,
    "a:extLst": BlipExtensionList
  };
  Blip._D = {
    "r:embed": new OxmlAttr("r:embed", OxmlType.StringValue),
    "r:link": new OxmlAttr("r:link", OxmlType.StringValue),
    ":cstate": new OxmlAttr(":cstate", OxmlType.EnumValue, BlipCompressionValuesArray)
  };
  Graphic._C = {
    "a:graphicData": GraphicData
  };
  Field._C = {
    "a:rPr": RunProperties,
    "a:pPr": ParagraphProperties,
    "a:t": Text
  };
  Field._D = {
    ":id": new OxmlAttr(":id", OxmlType.StringValue),
    ":type": new OxmlAttr(":type", OxmlType.StringValue)
  };
  Break._C = {
    "a:rPr": RunProperties
  };
  Run._C = {
    "a:rPr": RunProperties,
    "a:t": Text
  };
  UnderlineFill._C = {
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:blipFill": BlipFill,
    "a:pattFill": PatternFill,
    "a:grpFill": GroupFill
  };
  LinePropertiesType._C = {
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:pattFill": PatternFill,
    "a:prstDash": PresetDash,
    "a:custDash": CustomDash,
    "a:round": Round,
    "a:bevel": LineJoinBevel,
    "a:miter": Miter,
    "a:headEnd": HeadEnd,
    "a:tailEnd": TailEnd,
    "a:extLst": LinePropertiesExtensionList
  };
  LinePropertiesType._D = {
    ":w": new OxmlAttr(":w", OxmlType.Int32Value),
    ":cap": new OxmlAttr(":cap", OxmlType.EnumValue, LineCapValuesArray),
    ":cmpd": new OxmlAttr(":cmpd", OxmlType.EnumValue, CompoundLineValuesArray),
    ":algn": new OxmlAttr(":algn", OxmlType.EnumValue, PenAlignmentValuesArray)
  };
  BottomLeftToTopRightBorderLineProperties._C = {
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:pattFill": PatternFill,
    "a:prstDash": PresetDash,
    "a:custDash": CustomDash,
    "a:round": Round,
    "a:bevel": LineJoinBevel,
    "a:miter": Miter,
    "a:headEnd": HeadEnd,
    "a:tailEnd": TailEnd,
    "a:extLst": LinePropertiesExtensionList
  };
  TopLeftToBottomRightBorderLineProperties._C = {
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:pattFill": PatternFill,
    "a:prstDash": PresetDash,
    "a:custDash": CustomDash,
    "a:round": Round,
    "a:bevel": LineJoinBevel,
    "a:miter": Miter,
    "a:headEnd": HeadEnd,
    "a:tailEnd": TailEnd,
    "a:extLst": LinePropertiesExtensionList
  };
  BottomBorderLineProperties._C = {
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:pattFill": PatternFill,
    "a:prstDash": PresetDash,
    "a:custDash": CustomDash,
    "a:round": Round,
    "a:bevel": LineJoinBevel,
    "a:miter": Miter,
    "a:headEnd": HeadEnd,
    "a:tailEnd": TailEnd,
    "a:extLst": LinePropertiesExtensionList
  };
  TopBorderLineProperties._C = {
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:pattFill": PatternFill,
    "a:prstDash": PresetDash,
    "a:custDash": CustomDash,
    "a:round": Round,
    "a:bevel": LineJoinBevel,
    "a:miter": Miter,
    "a:headEnd": HeadEnd,
    "a:tailEnd": TailEnd,
    "a:extLst": LinePropertiesExtensionList
  };
  RightBorderLineProperties._C = {
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:pattFill": PatternFill,
    "a:prstDash": PresetDash,
    "a:custDash": CustomDash,
    "a:round": Round,
    "a:bevel": LineJoinBevel,
    "a:miter": Miter,
    "a:headEnd": HeadEnd,
    "a:tailEnd": TailEnd,
    "a:extLst": LinePropertiesExtensionList
  };
  LeftBorderLineProperties._C = {
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:pattFill": PatternFill,
    "a:prstDash": PresetDash,
    "a:custDash": CustomDash,
    "a:round": Round,
    "a:bevel": LineJoinBevel,
    "a:miter": Miter,
    "a:headEnd": HeadEnd,
    "a:tailEnd": TailEnd,
    "a:extLst": LinePropertiesExtensionList
  };
  Outline._C = {
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:pattFill": PatternFill,
    "a:prstDash": PresetDash,
    "a:custDash": CustomDash,
    "a:round": Round,
    "a:bevel": LineJoinBevel,
    "a:miter": Miter,
    "a:headEnd": HeadEnd,
    "a:tailEnd": TailEnd,
    "a:extLst": LinePropertiesExtensionList
  };
  Underline._C = {
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:pattFill": PatternFill,
    "a:prstDash": PresetDash,
    "a:custDash": CustomDash,
    "a:round": Round,
    "a:bevel": LineJoinBevel,
    "a:miter": Miter,
    "a:headEnd": HeadEnd,
    "a:tailEnd": TailEnd,
    "a:extLst": LinePropertiesExtensionList
  };
  PictureBullet._C = {
    "a:blip": Blip
  };
  CharacterBullet._D = {
    ":char": new OxmlAttr(":char", OxmlType.StringValue)
  };
  AutoNumberedBullet._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, TextAutoNumberSchemeValuesArray),
    ":startAt": new OxmlAttr(":startAt", OxmlType.Int32Value)
  };
  TextFontType._D = {
    ":typeface": new OxmlAttr(":typeface", OxmlType.StringValue),
    ":panose": new OxmlAttr(":panose", OxmlType.HexBinaryValue),
    ":pitchFamily": new OxmlAttr(":pitchFamily", OxmlType.SByteValue),
    ":charset": new OxmlAttr(":charset", OxmlType.SByteValue)
  };
  BulletSizePoints._D = {
    ":val": new OxmlAttr(":val", OxmlType.Int32Value)
  };
  BulletSizePercentage._D = {
    ":val": new OxmlAttr(":val", OxmlType.Int32Value)
  };
  ColorType._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  Highlight._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  BackgroundColor._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  ForegroundColor._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  ColorTo._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  ColorFrom._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  ContourColor._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  ExtrusionColor._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  BulletColor._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  NormalAutoFit._D = {
    ":fontScale": new OxmlAttr(":fontScale", OxmlType.Int32Value),
    ":lnSpcReduction": new OxmlAttr(":lnSpcReduction", OxmlType.Int32Value)
  };
  FontReference._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  FontReference._D = {
    ":idx": new OxmlAttr(":idx", OxmlType.EnumValue, FontCollectionIndexValuesArray)
  };
  FontCollectionType._C = {
    "a:latin": LatinFont,
    "a:ea": EastAsianFont,
    "a:cs": ComplexScriptFont,
    "a:font": SupplementalFont,
    "a:extLst": ExtensionList
  };
  MinorFont._C = {
    "a:latin": LatinFont,
    "a:ea": EastAsianFont,
    "a:cs": ComplexScriptFont,
    "a:font": SupplementalFont,
    "a:extLst": ExtensionList
  };
  MajorFont._C = {
    "a:latin": LatinFont,
    "a:ea": EastAsianFont,
    "a:cs": ComplexScriptFont,
    "a:font": SupplementalFont,
    "a:extLst": ExtensionList
  };
  Fonts._C = {
    "a:latin": LatinFont,
    "a:ea": EastAsianFont,
    "a:cs": ComplexScriptFont,
    "a:font": SupplementalFont,
    "a:extLst": ExtensionList
  };
  EffectPropertiesType._C = {
    "a:effectLst": EffectList,
    "a:effectDag": EffectDag
  };
  StyleMatrixReferenceType._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  StyleMatrixReferenceType._D = {
    ":idx": new OxmlAttr(":idx", OxmlType.UInt32Value)
  };
  LineReference._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  EffectReference._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  FillReference._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  FillProperties._C = {
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:blipFill": BlipFill,
    "a:pattFill": PatternFill,
    "a:grpFill": GroupFill
  };
  CustomDash._C = {
    "a:ds": DashStop
  };
  PresetDash._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, PresetLineDashValuesArray)
  };
  Miter._D = {
    ":lim": new OxmlAttr(":lim", OxmlType.Int32Value)
  };
  PresetTextWrap._C = {
    "a:avLst": AdjustValueList
  };
  PresetTextWrap._D = {
    ":prst": new OxmlAttr(":prst", OxmlType.EnumValue, TextShapeValuesArray)
  };
  PresetGeometry._C = {
    "a:avLst": AdjustValueList
  };
  PresetGeometry._D = {
    ":prst": new OxmlAttr(":prst", OxmlType.EnumValue, ShapeTypeValuesArray)
  };
  CustomGeometry._C = {
    "a:avLst": AdjustValueList,
    "a:gdLst": ShapeGuideList,
    "a:ahLst": AdjustHandleList,
    "a:cxnLst": ConnectionSiteList,
    "a:rect": Rectangle,
    "a:pathLst": PathList
  };
  EffectList._C = {
    "a:blur": Blur,
    "a:fillOverlay": FillOverlay,
    "a:glow": Glow,
    "a:innerShdw": InnerShadow,
    "a:outerShdw": OuterShadow,
    "a:prstShdw": PresetShadow,
    "a:reflection": Reflection,
    "a:softEdge": SoftEdge
  };
  TransformEffect._D = {
    ":sx": new OxmlAttr(":sx", OxmlType.Int32Value),
    ":sy": new OxmlAttr(":sy", OxmlType.Int32Value),
    ":kx": new OxmlAttr(":kx", OxmlType.Int32Value),
    ":ky": new OxmlAttr(":ky", OxmlType.Int32Value),
    ":tx": new OxmlAttr(":tx", OxmlType.Int64Value),
    ":ty": new OxmlAttr(":ty", OxmlType.Int64Value)
  };
  TintEffect._D = {
    ":hue": new OxmlAttr(":hue", OxmlType.Int32Value),
    ":amt": new OxmlAttr(":amt", OxmlType.Int32Value)
  };
  SoftEdge._D = {
    ":rad": new OxmlAttr(":rad", OxmlType.Int64Value)
  };
  RelativeOffset._D = {
    ":tx": new OxmlAttr(":tx", OxmlType.Int32Value),
    ":ty": new OxmlAttr(":ty", OxmlType.Int32Value)
  };
  Reflection._D = {
    ":blurRad": new OxmlAttr(":blurRad", OxmlType.Int64Value),
    ":stA": new OxmlAttr(":stA", OxmlType.Int32Value),
    ":stPos": new OxmlAttr(":stPos", OxmlType.Int32Value),
    ":endA": new OxmlAttr(":endA", OxmlType.Int32Value),
    ":endPos": new OxmlAttr(":endPos", OxmlType.Int32Value),
    ":dist": new OxmlAttr(":dist", OxmlType.Int64Value),
    ":dir": new OxmlAttr(":dir", OxmlType.Int32Value),
    ":fadeDir": new OxmlAttr(":fadeDir", OxmlType.Int32Value),
    ":sx": new OxmlAttr(":sx", OxmlType.Int32Value),
    ":sy": new OxmlAttr(":sy", OxmlType.Int32Value),
    ":kx": new OxmlAttr(":kx", OxmlType.Int32Value),
    ":ky": new OxmlAttr(":ky", OxmlType.Int32Value),
    ":algn": new OxmlAttr(":algn", OxmlType.EnumValue, RectangleAlignmentValuesArray),
    ":rotWithShape": new OxmlAttr(":rotWithShape", OxmlType.BooleanValue)
  };
  PresetShadow._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  PresetShadow._D = {
    ":prst": new OxmlAttr(":prst", OxmlType.EnumValue, PresetShadowValuesArray),
    ":dist": new OxmlAttr(":dist", OxmlType.Int64Value),
    ":dir": new OxmlAttr(":dir", OxmlType.Int32Value)
  };
  OuterShadow._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  OuterShadow._D = {
    ":blurRad": new OxmlAttr(":blurRad", OxmlType.Int64Value),
    ":dist": new OxmlAttr(":dist", OxmlType.Int64Value),
    ":dir": new OxmlAttr(":dir", OxmlType.Int32Value),
    ":sx": new OxmlAttr(":sx", OxmlType.Int32Value),
    ":sy": new OxmlAttr(":sy", OxmlType.Int32Value),
    ":kx": new OxmlAttr(":kx", OxmlType.Int32Value),
    ":ky": new OxmlAttr(":ky", OxmlType.Int32Value),
    ":algn": new OxmlAttr(":algn", OxmlType.EnumValue, RectangleAlignmentValuesArray),
    ":rotWithShape": new OxmlAttr(":rotWithShape", OxmlType.BooleanValue)
  };
  LuminanceEffect._D = {
    ":bright": new OxmlAttr(":bright", OxmlType.Int32Value),
    ":contrast": new OxmlAttr(":contrast", OxmlType.Int32Value)
  };
  InnerShadow._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  InnerShadow._D = {
    ":blurRad": new OxmlAttr(":blurRad", OxmlType.Int64Value),
    ":dist": new OxmlAttr(":dist", OxmlType.Int64Value),
    ":dir": new OxmlAttr(":dir", OxmlType.Int32Value)
  };
  Hsl._D = {
    ":hue": new OxmlAttr(":hue", OxmlType.Int32Value),
    ":sat": new OxmlAttr(":sat", OxmlType.Int32Value),
    ":lum": new OxmlAttr(":lum", OxmlType.Int32Value)
  };
  Glow._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  Glow._D = {
    ":rad": new OxmlAttr(":rad", OxmlType.Int64Value)
  };
  FillOverlay._C = {
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:blipFill": BlipFill,
    "a:pattFill": PatternFill,
    "a:grpFill": GroupFill
  };
  FillOverlay._D = {
    ":blend": new OxmlAttr(":blend", OxmlType.EnumValue, BlendModeValuesArray)
  };
  Fill._C = {
    "a:noFill": NoFill,
    "a:solidFill": SolidFill,
    "a:gradFill": GradientFill,
    "a:blipFill": BlipFill,
    "a:pattFill": PatternFill,
    "a:grpFill": GroupFill
  };
  Duotone._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  ColorReplacement._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  ColorChange._C = {
    "a:clrFrom": ColorFrom,
    "a:clrTo": ColorTo
  };
  ColorChange._D = {
    ":useA": new OxmlAttr(":useA", OxmlType.BooleanValue)
  };
  Blur._D = {
    ":rad": new OxmlAttr(":rad", OxmlType.Int64Value),
    ":grow": new OxmlAttr(":grow", OxmlType.BooleanValue)
  };
  Blend._C = {
    "a:cont": EffectContainer
  };
  Blend._D = {
    ":blend": new OxmlAttr(":blend", OxmlType.EnumValue, BlendModeValuesArray)
  };
  BiLevel._D = {
    ":thresh": new OxmlAttr(":thresh", OxmlType.Int32Value)
  };
  AlphaReplace._D = {
    ":a": new OxmlAttr(":a", OxmlType.Int32Value)
  };
  AlphaOutset._D = {
    ":rad": new OxmlAttr(":rad", OxmlType.Int64Value)
  };
  AlphaModulationFixed._D = {
    ":amt": new OxmlAttr(":amt", OxmlType.Int32Value)
  };
  AlphaModulationEffect._C = {
    "a:cont": EffectContainer
  };
  AlphaInverse._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  AlphaBiLevel._D = {
    ":thresh": new OxmlAttr(":thresh", OxmlType.Int32Value)
  };
  Effect._D = {
    ":ref": new OxmlAttr(":ref", OxmlType.StringValue)
  };
  EffectContainerType._C = {
    "a:cont": EffectContainer,
    "a:effect": Effect,
    "a:alphaBiLevel": AlphaBiLevel,
    "a:alphaCeiling": AlphaCeiling,
    "a:alphaFloor": AlphaFloor,
    "a:alphaInv": AlphaInverse,
    "a:alphaMod": AlphaModulationEffect,
    "a:alphaModFix": AlphaModulationFixed,
    "a:alphaOutset": AlphaOutset,
    "a:alphaRepl": AlphaReplace,
    "a:biLevel": BiLevel,
    "a:blend": Blend,
    "a:blur": Blur,
    "a:clrChange": ColorChange,
    "a:clrRepl": ColorReplacement,
    "a:duotone": Duotone,
    "a:fill": Fill,
    "a:fillOverlay": FillOverlay,
    "a:glow": Glow,
    "a:grayscl": Grayscale,
    "a:hsl": Hsl,
    "a:innerShdw": InnerShadow,
    "a:lum": LuminanceEffect,
    "a:outerShdw": OuterShadow,
    "a:prstShdw": PresetShadow,
    "a:reflection": Reflection,
    "a:relOff": RelativeOffset,
    "a:softEdge": SoftEdge,
    "a:tint": TintEffect,
    "a:xfrm": TransformEffect
  };
  EffectContainerType._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, EffectContainerValuesArray),
    ":name": new OxmlAttr(":name", OxmlType.StringValue)
  };
  EffectDag._C = {
    "a:cont": EffectContainer,
    "a:effect": Effect,
    "a:alphaBiLevel": AlphaBiLevel,
    "a:alphaCeiling": AlphaCeiling,
    "a:alphaFloor": AlphaFloor,
    "a:alphaInv": AlphaInverse,
    "a:alphaMod": AlphaModulationEffect,
    "a:alphaModFix": AlphaModulationFixed,
    "a:alphaOutset": AlphaOutset,
    "a:alphaRepl": AlphaReplace,
    "a:biLevel": BiLevel,
    "a:blend": Blend,
    "a:blur": Blur,
    "a:clrChange": ColorChange,
    "a:clrRepl": ColorReplacement,
    "a:duotone": Duotone,
    "a:fill": Fill,
    "a:fillOverlay": FillOverlay,
    "a:glow": Glow,
    "a:grayscl": Grayscale,
    "a:hsl": Hsl,
    "a:innerShdw": InnerShadow,
    "a:lum": LuminanceEffect,
    "a:outerShdw": OuterShadow,
    "a:prstShdw": PresetShadow,
    "a:reflection": Reflection,
    "a:relOff": RelativeOffset,
    "a:softEdge": SoftEdge,
    "a:tint": TintEffect,
    "a:xfrm": TransformEffect
  };
  EffectContainer._C = {
    "a:cont": EffectContainer,
    "a:effect": Effect,
    "a:alphaBiLevel": AlphaBiLevel,
    "a:alphaCeiling": AlphaCeiling,
    "a:alphaFloor": AlphaFloor,
    "a:alphaInv": AlphaInverse,
    "a:alphaMod": AlphaModulationEffect,
    "a:alphaModFix": AlphaModulationFixed,
    "a:alphaOutset": AlphaOutset,
    "a:alphaRepl": AlphaReplace,
    "a:biLevel": BiLevel,
    "a:blend": Blend,
    "a:blur": Blur,
    "a:clrChange": ColorChange,
    "a:clrRepl": ColorReplacement,
    "a:duotone": Duotone,
    "a:fill": Fill,
    "a:fillOverlay": FillOverlay,
    "a:glow": Glow,
    "a:grayscl": Grayscale,
    "a:hsl": Hsl,
    "a:innerShdw": InnerShadow,
    "a:lum": LuminanceEffect,
    "a:outerShdw": OuterShadow,
    "a:prstShdw": PresetShadow,
    "a:reflection": Reflection,
    "a:relOff": RelativeOffset,
    "a:softEdge": SoftEdge,
    "a:tint": TintEffect,
    "a:xfrm": TransformEffect
  };
  PatternFill._C = {
    "a:fgClr": ForegroundColor,
    "a:bgClr": BackgroundColor
  };
  PatternFill._D = {
    ":prst": new OxmlAttr(":prst", OxmlType.EnumValue, PresetPatternValuesArray)
  };
  BlipFill._C = {
    "a:blip": Blip,
    "a:srcRect": SourceRectangle,
    "a:tile": Tile,
    "a:stretch": Stretch
  };
  BlipFill._D = {
    ":dpi": new OxmlAttr(":dpi", OxmlType.UInt32Value),
    ":rotWithShape": new OxmlAttr(":rotWithShape", OxmlType.BooleanValue)
  };
  GradientFill._C = {
    "a:gsLst": GradientStopList,
    "a:lin": LinearGradientFill,
    "a:path": PathGradientFill,
    "a:tileRect": TileRectangle
  };
  GradientFill._D = {
    ":flip": new OxmlAttr(":flip", OxmlType.EnumValue, TileFlipValuesArray),
    ":rotWithShape": new OxmlAttr(":rotWithShape", OxmlType.BooleanValue)
  };
  SolidFill._C = {
    "a:scrgbClr": RgbColorModelPercentage,
    "a:srgbClr": RgbColorModelHex,
    "a:hslClr": HslColor,
    "a:sysClr": SystemColor,
    "a:schemeClr": SchemeColor,
    "a:prstClr": PresetColor
  };
  Stretch._C = {
    "a:fillRect": FillRectangle
  };
  Tile._D = {
    ":tx": new OxmlAttr(":tx", OxmlType.Int64Value),
    ":ty": new OxmlAttr(":ty", OxmlType.Int64Value),
    ":sx": new OxmlAttr(":sx", OxmlType.Int32Value),
    ":sy": new OxmlAttr(":sy", OxmlType.Int32Value),
    ":flip": new OxmlAttr(":flip", OxmlType.EnumValue, TileFlipValuesArray),
    ":algn": new OxmlAttr(":algn", OxmlType.EnumValue, RectangleAlignmentValuesArray)
  };
  PathGradientFill._C = {
    "a:fillToRect": FillToRectangle
  };
  PathGradientFill._D = {
    ":path": new OxmlAttr(":path", OxmlType.EnumValue, PathShadeValuesArray)
  };
  LinearGradientFill._D = {
    ":ang": new OxmlAttr(":ang", OxmlType.Int32Value),
    ":scaled": new OxmlAttr(":scaled", OxmlType.BooleanValue)
  };
  FlatText._D = {
    ":z": new OxmlAttr(":z", OxmlType.Int64Value)
  };
  Shape3DType._C = {
    "a:bevelT": BevelTop,
    "a:bevelB": BevelBottom,
    "a:extrusionClr": ExtrusionColor,
    "a:contourClr": ContourColor,
    "a:extLst": ExtensionList
  };
  Shape3DType._D = {
    ":z": new OxmlAttr(":z", OxmlType.Int64Value),
    ":extrusionH": new OxmlAttr(":extrusionH", OxmlType.Int64Value),
    ":contourW": new OxmlAttr(":contourW", OxmlType.Int64Value),
    ":prstMaterial": new OxmlAttr(":prstMaterial", OxmlType.EnumValue, PresetMaterialTypeValuesArray)
  };
  PresetColor._C = {
    "a:tint": Tint,
    "a:shade": Shade,
    "a:comp": Complement,
    "a:inv": Inverse,
    "a:gray": Gray,
    "a:alpha": Alpha,
    "a:alphaOff": AlphaOffset,
    "a:alphaMod": AlphaModulation,
    "a:hue": Hue,
    "a:hueOff": HueOffset,
    "a:hueMod": HueModulation,
    "a:sat": Saturation,
    "a:satOff": SaturationOffset,
    "a:satMod": SaturationModulation,
    "a:lum": Luminance,
    "a:lumOff": LuminanceOffset,
    "a:lumMod": LuminanceModulation,
    "a:red": Red,
    "a:redOff": RedOffset,
    "a:redMod": RedModulation,
    "a:green": Green,
    "a:greenOff": GreenOffset,
    "a:greenMod": GreenModulation,
    "a:blue": Blue,
    "a:blueOff": BlueOffset,
    "a:blueMod": BlueModulation,
    "a:gamma": Gamma,
    "a:invGamma": InverseGamma
  };
  PresetColor._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, PresetColorValuesArray)
  };
  SchemeColor._C = {
    "a:tint": Tint,
    "a:shade": Shade,
    "a:comp": Complement,
    "a:inv": Inverse,
    "a:gray": Gray,
    "a:alpha": Alpha,
    "a:alphaOff": AlphaOffset,
    "a:alphaMod": AlphaModulation,
    "a:hue": Hue,
    "a:hueOff": HueOffset,
    "a:hueMod": HueModulation,
    "a:sat": Saturation,
    "a:satOff": SaturationOffset,
    "a:satMod": SaturationModulation,
    "a:lum": Luminance,
    "a:lumOff": LuminanceOffset,
    "a:lumMod": LuminanceModulation,
    "a:red": Red,
    "a:redOff": RedOffset,
    "a:redMod": RedModulation,
    "a:green": Green,
    "a:greenOff": GreenOffset,
    "a:greenMod": GreenModulation,
    "a:blue": Blue,
    "a:blueOff": BlueOffset,
    "a:blueMod": BlueModulation,
    "a:gamma": Gamma,
    "a:invGamma": InverseGamma
  };
  SchemeColor._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, SchemeColorValuesArray)
  };
  SystemColor._C = {
    "a:tint": Tint,
    "a:shade": Shade,
    "a:comp": Complement,
    "a:inv": Inverse,
    "a:gray": Gray,
    "a:alpha": Alpha,
    "a:alphaOff": AlphaOffset,
    "a:alphaMod": AlphaModulation,
    "a:hue": Hue,
    "a:hueOff": HueOffset,
    "a:hueMod": HueModulation,
    "a:sat": Saturation,
    "a:satOff": SaturationOffset,
    "a:satMod": SaturationModulation,
    "a:lum": Luminance,
    "a:lumOff": LuminanceOffset,
    "a:lumMod": LuminanceModulation,
    "a:red": Red,
    "a:redOff": RedOffset,
    "a:redMod": RedModulation,
    "a:green": Green,
    "a:greenOff": GreenOffset,
    "a:greenMod": GreenModulation,
    "a:blue": Blue,
    "a:blueOff": BlueOffset,
    "a:blueMod": BlueModulation,
    "a:gamma": Gamma,
    "a:invGamma": InverseGamma
  };
  SystemColor._D = {
    ":val": new OxmlAttr(":val", OxmlType.EnumValue, SystemColorValuesArray),
    ":lastClr": new OxmlAttr(":lastClr", OxmlType.HexBinaryValue)
  };
  HslColor._C = {
    "a:tint": Tint,
    "a:shade": Shade,
    "a:comp": Complement,
    "a:inv": Inverse,
    "a:gray": Gray,
    "a:alpha": Alpha,
    "a:alphaOff": AlphaOffset,
    "a:alphaMod": AlphaModulation,
    "a:hue": Hue,
    "a:hueOff": HueOffset,
    "a:hueMod": HueModulation,
    "a:sat": Saturation,
    "a:satOff": SaturationOffset,
    "a:satMod": SaturationModulation,
    "a:lum": Luminance,
    "a:lumOff": LuminanceOffset,
    "a:lumMod": LuminanceModulation,
    "a:red": Red,
    "a:redOff": RedOffset,
    "a:redMod": RedModulation,
    "a:green": Green,
    "a:greenOff": GreenOffset,
    "a:greenMod": GreenModulation,
    "a:blue": Blue,
    "a:blueOff": BlueOffset,
    "a:blueMod": BlueModulation,
    "a:gamma": Gamma,
    "a:invGamma": InverseGamma
  };
  HslColor._D = {
    ":hue": new OxmlAttr(":hue", OxmlType.Int32Value),
    ":sat": new OxmlAttr(":sat", OxmlType.Int32Value),
    ":lum": new OxmlAttr(":lum", OxmlType.Int32Value)
  };
  RgbColorModelHex._C = {
    "a:tint": Tint,
    "a:shade": Shade,
    "a:comp": Complement,
    "a:inv": Inverse,
    "a:gray": Gray,
    "a:alpha": Alpha,
    "a:alphaOff": AlphaOffset,
    "a:alphaMod": AlphaModulation,
    "a:hue": Hue,
    "a:hueOff": HueOffset,
    "a:hueMod": HueModulation,
    "a:sat": Saturation,
    "a:satOff": SaturationOffset,
    "a:satMod": SaturationModulation,
    "a:lum": Luminance,
    "a:lumOff": LuminanceOffset,
    "a:lumMod": LuminanceModulation,
    "a:red": Red,
    "a:redOff": RedOffset,
    "a:redMod": RedModulation,
    "a:green": Green,
    "a:greenOff": GreenOffset,
    "a:greenMod": GreenModulation,
    "a:blue": Blue,
    "a:blueOff": BlueOffset,
    "a:blueMod": BlueModulation,
    "a:gamma": Gamma,
    "a:invGamma": InverseGamma
  };
  RgbColorModelHex._D = {
    ":val": new OxmlAttr(":val", OxmlType.HexBinaryValue),
    "a14:legacySpreadsheetColorIndex": new OxmlAttr("a14:legacySpreadsheetColorIndex", OxmlType.Int32Value)
  };
  RgbColorModelPercentage._C = {
    "a:tint": Tint,
    "a:shade": Shade,
    "a:comp": Complement,
    "a:inv": Inverse,
    "a:gray": Gray,
    "a:alpha": Alpha,
    "a:alphaOff": AlphaOffset,
    "a:alphaMod": AlphaModulation,
    "a:hue": Hue,
    "a:hueOff": HueOffset,
    "a:hueMod": HueModulation,
    "a:sat": Saturation,
    "a:satOff": SaturationOffset,
    "a:satMod": SaturationModulation,
    "a:lum": Luminance,
    "a:lumOff": LuminanceOffset,
    "a:lumMod": LuminanceModulation,
    "a:red": Red,
    "a:redOff": RedOffset,
    "a:redMod": RedModulation,
    "a:green": Green,
    "a:greenOff": GreenOffset,
    "a:greenMod": GreenModulation,
    "a:blue": Blue,
    "a:blueOff": BlueOffset,
    "a:blueMod": BlueModulation,
    "a:gamma": Gamma,
    "a:invGamma": InverseGamma
  };
  RgbColorModelPercentage._D = {
    ":r": new OxmlAttr(":r", OxmlType.Int32Value),
    ":g": new OxmlAttr(":g", OxmlType.Int32Value),
    ":b": new OxmlAttr(":b", OxmlType.Int32Value)
  };
  Extension._D = {
    ":uri": new OxmlAttr(":uri", OxmlType.StringValue)
  };
  PercentageType._D = {
    ":val": new OxmlAttr(":val", OxmlType.Int32Value)
  };
  HueOffset._D = {
    ":val": new OxmlAttr(":val", OxmlType.Int32Value)
  };
  Hue._D = {
    ":val": new OxmlAttr(":val", OxmlType.Int32Value)
  };
  PositivePercentageType._D = {
    ":val": new OxmlAttr(":val", OxmlType.Int32Value)
  };
  AlphaOffset._D = {
    ":val": new OxmlAttr(":val", OxmlType.Int32Value)
  };
  PositiveFixedPercentageType._D = {
    ":val": new OxmlAttr(":val", OxmlType.Int32Value)
  };
  QuickTimeFromFile._C = {
    "a:extLst": ExtensionList
  };
  QuickTimeFromFile._D = {
    "r:link": new OxmlAttr("r:link", OxmlType.StringValue)
  };
  VideoFromFile._C = {
    "a:extLst": ExtensionList
  };
  VideoFromFile._D = {
    "r:link": new OxmlAttr("r:link", OxmlType.StringValue)
  };
  AudioFromFile._C = {
    "a:extLst": ExtensionList
  };
  AudioFromFile._D = {
    "r:link": new OxmlAttr("r:link", OxmlType.StringValue)
  };
  EmbeddedWavAudioFileType._D = {
    "r:embed": new OxmlAttr("r:embed", OxmlType.StringValue),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":builtIn": new OxmlAttr(":builtIn", OxmlType.BooleanValue)
  };
  AudioFromCD._C = {
    "a:st": StartTime,
    "a:end": EndTime,
    "a:extLst": ExtensionList
  };
  return {
    prefix: "a",
    xmlns: "http://schemas.openxmlformats.org/drawingml/2006/main"
  };
}
export {
  Accent1Color,
  Accent2Color,
  Accent3Color,
  Accent4Color,
  Accent5Color,
  Accent6Color,
  AdjustHandleList,
  AdjustHandlePolar,
  AdjustHandleXY,
  AdjustPoint2DType,
  AdjustValueList,
  Alpha,
  AlphaBiLevel,
  AlphaCeiling,
  AlphaFloor,
  AlphaInverse,
  AlphaModulation,
  AlphaModulationEffect,
  AlphaModulationFixed,
  AlphaOffset,
  AlphaOutset,
  AlphaReplace,
  Anchor,
  AnimationBuildValues,
  AnimationBuildValuesArray,
  AnimationChartOnlyBuildValues,
  AnimationChartOnlyBuildValuesArray,
  AnimationDiagramOnlyBuildValues,
  AnimationDiagramOnlyBuildValuesArray,
  ArcTo,
  AudioCDTimeType,
  AudioFromCD,
  AudioFromFile,
  AutoNumberedBullet,
  Backdrop,
  BackgroundColor,
  BackgroundFillStyleList,
  Band1Horizontal,
  Band1Vertical,
  Band2Horizontal,
  Band2Vertical,
  Bevel,
  BevelBottom,
  BevelPresetValues,
  BevelPresetValuesArray,
  BevelTop,
  BevelType,
  BiLevel,
  BlackWhiteModeValues,
  BlackWhiteModeValuesArray,
  Blend,
  BlendModeValues,
  BlendModeValuesArray,
  Blip,
  BlipCompressionValues,
  BlipCompressionValuesArray,
  BlipExtension,
  BlipExtensionList,
  BlipFill,
  Blue,
  BlueModulation,
  BlueOffset,
  Blur,
  BodyProperties,
  BooleanStyleValues,
  BooleanStyleValuesArray,
  BottomBorder,
  BottomBorderLineProperties,
  BottomLeftToTopRightBorderLineProperties,
  Break,
  BuildChart,
  BuildDiagram,
  BulletColor,
  BulletColorText,
  BulletFont,
  BulletFontText,
  BulletSizePercentage,
  BulletSizePoints,
  BulletSizeText,
  Camera,
  Cell3DProperties,
  CharacterBullet,
  Chart,
  ChartBuildStepValues,
  ChartBuildStepValuesArray,
  ChildExtents,
  ChildOffset,
  CloseShapePath,
  Color2Type,
  ColorChange,
  ColorFrom,
  ColorMap,
  ColorMappingType,
  ColorReplacement,
  ColorScheme,
  ColorSchemeIndexValues,
  ColorSchemeIndexValuesArray,
  ColorTo,
  ColorType,
  Complement,
  ComplexScriptFont,
  CompoundLineValues,
  CompoundLineValuesArray,
  ConnectionShape,
  ConnectionShapeLocks,
  ConnectionSite,
  ConnectionSiteList,
  ConnectionType,
  ConnectorLockingExtension,
  ConnectorLockingExtensionList,
  ContourColor,
  CubicBezierCurveTo,
  CustomColor,
  CustomColorList,
  CustomDash,
  CustomGeometry,
  Dark1Color,
  Dark2Color,
  DashStop,
  DataModelExtension,
  DefaultParagraphProperties,
  DefaultRunProperties,
  DefaultShapeDefinitionType,
  Diagram,
  DiagramBuildStepValues,
  DiagramBuildStepValuesArray,
  Duotone,
  EastAsianFont,
  Effect,
  EffectContainer,
  EffectContainerType,
  EffectContainerValues,
  EffectContainerValuesArray,
  EffectDag,
  EffectList,
  EffectPropertiesType,
  EffectReference,
  EffectStyle,
  EffectStyleList,
  EmbeddedWavAudioFileType,
  EmptyType,
  EndConnection,
  EndParagraphRunProperties,
  EndTime,
  Extension,
  ExtensionList,
  Extents,
  ExtraColorScheme,
  ExtraColorSchemeList,
  ExtrusionColor,
  Field,
  Fill,
  FillOverlay,
  FillProperties,
  FillRectangle,
  FillReference,
  FillStyleList,
  FillToRectangle,
  FirstColumn,
  FirstRow,
  FlatText,
  FollowedHyperlinkColor,
  FontCollectionIndexValues,
  FontCollectionIndexValuesArray,
  FontCollectionType,
  FontReference,
  FontScheme,
  Fonts,
  ForegroundColor,
  FormatScheme,
  Gamma,
  GeometryGuideListType,
  Glow,
  GradientFill,
  GradientStop,
  GradientStopList,
  Graphic,
  GraphicData,
  GraphicFrame,
  GraphicFrameLocks,
  Gray,
  Grayscale,
  Green,
  GreenModulation,
  GreenOffset,
  GridColumn,
  GroupFill,
  GroupShape,
  GroupShapeLocks,
  GvmlGroupShapeExtension,
  GvmlGroupShapeExtensionList,
  HeadEnd,
  Highlight,
  Hsl,
  HslColor,
  Hue,
  HueModulation,
  HueOffset,
  Hyperlink,
  HyperlinkExtension,
  HyperlinkExtensionList,
  HyperlinkOnClick,
  HyperlinkOnHover,
  HyperlinkOnMouseOver,
  HyperlinkSound,
  HyperlinkType,
  InnerShadow,
  InsideHorizontalBorder,
  InsideVerticalBorder,
  Inverse,
  InverseGamma,
  LastColumn,
  LastRow,
  LatinFont,
  LeftBorder,
  LeftBorderLineProperties,
  Level1ParagraphProperties,
  Level2ParagraphProperties,
  Level3ParagraphProperties,
  Level4ParagraphProperties,
  Level5ParagraphProperties,
  Level6ParagraphProperties,
  Level7ParagraphProperties,
  Level8ParagraphProperties,
  Level9ParagraphProperties,
  Light1Color,
  Light2Color,
  LightRig,
  LightRigDirectionValues,
  LightRigDirectionValuesArray,
  LightRigValues,
  LightRigValuesArray,
  LineCapValues,
  LineCapValuesArray,
  LineDefault,
  LineEndLengthValues,
  LineEndLengthValuesArray,
  LineEndPropertiesType,
  LineEndValues,
  LineEndValuesArray,
  LineEndWidthValues,
  LineEndWidthValuesArray,
  LineJoinBevel,
  LinePropertiesExtension,
  LinePropertiesExtensionList,
  LinePropertiesType,
  LineReference,
  LineSpacing,
  LineStyleList,
  LineTo,
  LinearGradientFill,
  ListStyle,
  Luminance,
  LuminanceEffect,
  LuminanceModulation,
  LuminanceOffset,
  MajorFont,
  MasterColorMapping,
  MinorFont,
  Miter,
  MoveTo,
  NoAutoFit,
  NoBullet,
  NoFill,
  NonVisualConnectionShapeProperties,
  NonVisualConnectorShapeDrawingProperties,
  NonVisualDrawingProperties,
  NonVisualDrawingPropertiesExtension,
  NonVisualDrawingPropertiesExtensionList,
  NonVisualGraphicFrameDrawingProperties,
  NonVisualGraphicFrameProperties,
  NonVisualGroupDrawingShapePropsExtension,
  NonVisualGroupDrawingShapePropsExtensionList,
  NonVisualGroupShapeDrawingProperties,
  NonVisualGroupShapeProperties,
  NonVisualPictureDrawingProperties,
  NonVisualPictureProperties,
  NonVisualPicturePropertiesExtension,
  NonVisualPicturePropertiesExtensionList,
  NonVisualShapeDrawingProperties,
  NonVisualShapeProperties,
  Normal,
  NormalAutoFit,
  NortheastCell,
  NorthwestCell,
  ObjectDefaults,
  OfficeStyleSheetExtension,
  OfficeStyleSheetExtensionList,
  Offset,
  OuterShadow,
  Outline,
  OverrideColorMapping,
  Paragraph,
  ParagraphProperties,
  Path,
  PathFillModeValues,
  PathFillModeValuesArray,
  PathGradientFill,
  PathList,
  PathShadeValues,
  PathShadeValuesArray,
  PatternFill,
  PenAlignmentValues,
  PenAlignmentValuesArray,
  PercentageType,
  Picture,
  PictureBullet,
  PictureLocks,
  Point,
  Point2DType,
  Position,
  PositiveFixedPercentageType,
  PositivePercentageType,
  PositiveSize2DType,
  PresetCameraValues,
  PresetCameraValuesArray,
  PresetColor,
  PresetColorValues,
  PresetColorValuesArray,
  PresetDash,
  PresetGeometry,
  PresetLineDashValues,
  PresetLineDashValuesArray,
  PresetMaterialTypeValues,
  PresetMaterialTypeValuesArray,
  PresetPatternValues,
  PresetPatternValuesArray,
  PresetShadow,
  PresetShadowValues,
  PresetShadowValuesArray,
  PresetTextWrap,
  PtExtension,
  QuadraticBezierCurveTo,
  QuickTimeFromFile,
  RatioType,
  Rectangle,
  RectangleAlignmentValues,
  RectangleAlignmentValuesArray,
  Red,
  RedModulation,
  RedOffset,
  Reflection,
  RelativeOffset,
  RelativeRectangleType,
  RgbColorModelHex,
  RgbColorModelPercentage,
  RightBorder,
  RightBorderLineProperties,
  RightToLeft,
  Rotation,
  Round,
  Run,
  RunProperties,
  Saturation,
  SaturationModulation,
  SaturationOffset,
  ScaleX,
  ScaleY,
  Scene3DType,
  SchemeColor,
  SchemeColorValues,
  SchemeColorValuesArray,
  Shade,
  Shape,
  Shape3DType,
  ShapeAutoFit,
  ShapeDefault,
  ShapeGuide,
  ShapeGuideList,
  ShapeLocks,
  ShapeProperties,
  ShapePropertiesExtension,
  ShapePropertiesExtensionList,
  ShapeStyle,
  ShapeTypeValues,
  ShapeTypeValuesArray,
  SoftEdge,
  SolidFill,
  SourceRectangle,
  SoutheastCell,
  SouthwestCell,
  SpaceAfter,
  SpaceBefore,
  SpacingPercent,
  SpacingPoints,
  StartConnection,
  StartTime,
  Stretch,
  StyleMatrixReferenceType,
  SupplementalFont,
  SymbolFont,
  SystemColor,
  SystemColorValues,
  SystemColorValuesArray,
  TabStop,
  TabStopList,
  Table,
  TableBackground,
  TableCell,
  TableCellBorders,
  TableCellProperties,
  TableCellStyle,
  TableCellTextStyle,
  TableGrid,
  TablePartStyleType,
  TableProperties,
  TableRow,
  TableStyle,
  TableStyleEntry,
  TableStyleId,
  TableStyleList,
  TableStyleType,
  TailEnd,
  Text,
  TextAlignmentTypeValues,
  TextAlignmentTypeValuesArray,
  TextAnchoringTypeValues,
  TextAnchoringTypeValuesArray,
  TextAutoNumberSchemeValues,
  TextAutoNumberSchemeValuesArray,
  TextBody,
  TextCapsValues,
  TextCapsValuesArray,
  TextCharacterPropertiesType,
  TextDefault,
  TextFontAlignmentValues,
  TextFontAlignmentValuesArray,
  TextFontType,
  TextHorizontalOverflowValues,
  TextHorizontalOverflowValuesArray,
  TextParagraphPropertiesType,
  TextShape,
  TextShapeValues,
  TextShapeValuesArray,
  TextSpacingType,
  TextStrikeValues,
  TextStrikeValuesArray,
  TextTabAlignmentValues,
  TextTabAlignmentValuesArray,
  TextUnderlineValues,
  TextUnderlineValuesArray,
  TextVerticalOverflowValues,
  TextVerticalOverflowValuesArray,
  TextVerticalValues,
  TextVerticalValuesArray,
  TextWrappingValues,
  TextWrappingValuesArray,
  Theme,
  ThemeElements,
  ThemeManager,
  ThemeOverride,
  ThemeableLineStyleType,
  Tile,
  TileFlipValues,
  TileFlipValuesArray,
  TileRectangle,
  Tint,
  TintEffect,
  TopBorder,
  TopBorderLineProperties,
  TopLeftToBottomRightBorder,
  TopLeftToBottomRightBorderLineProperties,
  TopRightToBottomLeftBorder,
  Transform2D,
  TransformEffect,
  TransformGroup,
  Underline,
  UnderlineFill,
  UnderlineFillText,
  UnderlineFollowsText,
  UpVector,
  UseShapeRectangle,
  Vector3DType,
  VideoFromFile,
  VisualGroupShapeProperties,
  WaveAudioFile,
  WholeTable,
  initDrawingNamespace
};
