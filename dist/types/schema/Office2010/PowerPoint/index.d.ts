import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { StringValue } from '../../../framework/types/StringValue';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { Int64Value } from '../../../framework/types/Int64Value';
import { ListValue } from '../../../framework/types/ListValue';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { Int32Value } from '../../../framework/types/Int32Value';
import { TriggerEventValues } from '../../Presentation';
import { TransitionInOutDirectionValues } from '../../Presentation';
import { TransitionSlideDirectionValues } from '../../Presentation';
import { DirectionValues } from '../../Presentation';
import { Extension as PExtension } from '../../Presentation';
import { PlaceholderShape as PPlaceholderShape } from '../../Presentation';
import { AudioFromCD as AAudioFromCD } from '../../Drawing';
import { WaveAudioFile as AWaveAudioFile } from '../../Drawing';
import { AudioFromFile as AAudioFromFile } from '../../Drawing';
import { VideoFromFile as AVideoFromFile } from '../../Drawing';
import { QuickTimeFromFile as AQuickTimeFromFile } from '../../Drawing';
import { CustomerDataList as PCustomerDataList } from '../../Presentation';
import { ApplicationNonVisualDrawingPropertiesExtensionList as PApplicationNonVisualDrawingPropertiesExtensionList } from '../../Presentation';
import { ContentPartLocks as A14ContentPartLocks } from '../../Office2010/Drawing';
import { OfficeArtExtensionList as A14OfficeArtExtensionList } from '../../Office2010/Drawing';
import { HyperlinkOnClick as AHyperlinkOnClick } from '../../Drawing';
import { HyperlinkOnHover as AHyperlinkOnHover } from '../../Drawing';
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from '../../Drawing';
import { RgbColorModelPercentage as ARgbColorModelPercentage } from '../../Drawing';
import { RgbColorModelHex as ARgbColorModelHex } from '../../Drawing';
import { HslColor as AHslColor } from '../../Drawing';
import { SystemColor as ASystemColor } from '../../Drawing';
import { SchemeColor as ASchemeColor } from '../../Drawing';
import { PresetColor as APresetColor } from '../../Drawing';
import { Offset as AOffset } from '../../Drawing';
import { Extents as AExtents } from '../../Drawing';
export declare enum TransitionPatternValues {
    /** undefined. Serialized value: `diamond` */
    Diamond = "diamond",
    /** undefined. Serialized value: `hexagon` */
    Hexagon = "hexagon"
}
export declare const TransitionPatternValuesArray: readonly [TransitionPatternValues.Diamond, TransitionPatternValues.Hexagon];
export declare enum TransitionCenterDirectionTypeValues {
    /** undefined. Serialized value: `center` */
    Center = "center"
}
export declare const TransitionCenterDirectionTypeValuesArray: readonly [TransitionCenterDirectionTypeValues];
export declare enum TransitionShredPatternValues {
    /** undefined. Serialized value: `strip` */
    Strip = "strip",
    /** undefined. Serialized value: `rectangle` */
    Rectangle = "rectangle"
}
export declare const TransitionShredPatternValuesArray: readonly [TransitionShredPatternValues.Strip, TransitionShredPatternValues.Rectangle];
export declare enum TransitionLeftRightDirectionTypeValues {
    /** undefined. Serialized value: `l` */
    Left = "l",
    /** undefined. Serialized value: `r` */
    Right = "r"
}
export declare const TransitionLeftRightDirectionTypeValuesArray: readonly [TransitionLeftRightDirectionTypeValues.Left, TransitionLeftRightDirectionTypeValues.Right];
/** Defines the NullEventRecord Class. Serialized as `p14:nullEvt` */
export declare class NullEventRecord extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** time. Serialized as `:time` */
    get time(): StringValue | undefined;
    set time(v: StringValue | undefined);
    /** objId. Serialized as `:objId` */
    get objectId(): UInt32Value | undefined;
    set objectId(v: UInt32Value | undefined);
}
/** Defines the SeekEventRecord Class. Serialized as `p14:seekEvt` */
export declare class SeekEventRecord extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** time. Serialized as `:time` */
    get time(): StringValue | undefined;
    set time(v: StringValue | undefined);
    /** objId. Serialized as `:objId` */
    get objectId(): UInt32Value | undefined;
    set objectId(v: UInt32Value | undefined);
    /** seek. Serialized as `:seek` */
    get seek(): StringValue | undefined;
    set seek(v: StringValue | undefined);
}
/** Defines the MediaPlaybackEventRecordType Class. */
export declare abstract class MediaPlaybackEventRecordType extends OxmlLeafElement {
    static _A: string[];
    /** time. Serialized as `:time` */
    get time(): StringValue | undefined;
    set time(v: StringValue | undefined);
    /** objId. Serialized as `:objId` */
    get objectId(): UInt32Value | undefined;
    set objectId(v: UInt32Value | undefined);
}
/** Defines the ResumeEventRecord Class. Serialized as `p14:resumeEvt` */
export declare class ResumeEventRecord extends MediaPlaybackEventRecordType {
    static _Q: string;
}
/** Defines the PauseEventRecord Class. Serialized as `p14:pauseEvt` */
export declare class PauseEventRecord extends MediaPlaybackEventRecordType {
    static _Q: string;
}
/** Defines the StopEventRecord Class. Serialized as `p14:stopEvt` */
export declare class StopEventRecord extends MediaPlaybackEventRecordType {
    static _Q: string;
}
/** Defines the PlayEventRecord Class. Serialized as `p14:playEvt` */
export declare class PlayEventRecord extends MediaPlaybackEventRecordType {
    static _Q: string;
}
/** Defines the TriggerEventRecord Class. Serialized as `p14:triggerEvt` */
export declare class TriggerEventRecord extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** type. Serialized as `:type` */
    get type(): TriggerEventValues | undefined;
    set type(v: TriggerEventValues | undefined);
    /** time. Serialized as `:time` */
    get time(): StringValue | undefined;
    set time(v: StringValue | undefined);
    /** objId. Serialized as `:objId` */
    get objectId(): UInt32Value | undefined;
    set objectId(v: UInt32Value | undefined);
}
/** Defines the TracePointList Class. Serialized as `p14:tracePtLst` */
export declare class TracePointList extends OxmlCompositeElement<TracePoint> {
    static _Q: string;
}
/** Defines the TracePoint Class. Serialized as `p14:tracePt` */
export declare class TracePoint extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** t. Serialized as `:t` */
    get time(): StringValue | undefined;
    set time(v: StringValue | undefined);
    /** x. Serialized as `:x` */
    get xCoordinate(): Int64Value | undefined;
    set xCoordinate(v: Int64Value | undefined);
    /** y. Serialized as `:y` */
    get yCoordinate(): Int64Value | undefined;
    set yCoordinate(v: Int64Value | undefined);
}
/** Defines the Section Class. Serialized as `p14:section` */
export declare class Section extends OxmlCompositeElement<SectionSlideIdList | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Returns SectionSlideIdList. */
    get sectionSlideIdList(): SectionSlideIdList | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the SectionSlideIdList Class. Serialized as `p14:sldIdLst` */
export declare class SectionSlideIdList extends OxmlCompositeElement<SectionSlideIdListEntry> {
    static _Q: string;
}
/** Defines the SectionSlideIdListEntry Class. Serialized as `p14:sldId` */
export declare class SectionSlideIdListEntry extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** id. Serialized as `:id` */
    get id(): UInt32Value | undefined;
    set id(v: UInt32Value | undefined);
}
/** Defines the SectionOld Class. Serialized as `p14:section` */
export declare class SectionOld extends OxmlCompositeElement<ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** slideIdLst. Serialized as `:slideIdLst` */
    get slideIdList(): ListValue<UInt32Value> | undefined;
    set slideIdList(v: ListValue<UInt32Value> | undefined);
    /** id. Serialized as `:id` */
    get id(): StringValue | undefined;
    set id(v: StringValue | undefined);
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the ExtensionList Class. Serialized as `p14:extLst` */
export declare class ExtensionList extends OxmlCompositeElement<PExtension> {
    static _Q: string;
}
/** Defines the MediaBookmarkList Class. Serialized as `p14:bmkLst` */
export declare class MediaBookmarkList extends OxmlCompositeElement<MediaBookmark> {
    static _Q: string;
}
/** Defines the MediaFade Class. Serialized as `p14:fade` */
export declare class MediaFade extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** in. Serialized as `:in` */
    get inDuration(): StringValue | undefined;
    set inDuration(v: StringValue | undefined);
    /** out. Serialized as `:out` */
    get outDuration(): StringValue | undefined;
    set outDuration(v: StringValue | undefined);
}
/** Defines the MediaTrim Class. Serialized as `p14:trim` */
export declare class MediaTrim extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** st. Serialized as `:st` */
    get start(): StringValue | undefined;
    set start(v: StringValue | undefined);
    /** end. Serialized as `:end` */
    get end(): StringValue | undefined;
    set end(v: StringValue | undefined);
}
/** Defines the MediaBookmark Class. Serialized as `p14:bmk` */
export declare class MediaBookmark extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** name. Serialized as `:name` */
    get name(): StringValue | undefined;
    set name(v: StringValue | undefined);
    /** time. Serialized as `:time` */
    get time(): StringValue | undefined;
    set time(v: StringValue | undefined);
}
/** Defines the ApplicationNonVisualDrawingProperties Class. Serialized as `p14:nvPr` */
export declare class ApplicationNonVisualDrawingProperties extends OxmlCompositeElement<PPlaceholderShape | AAudioFromCD | AWaveAudioFile | AAudioFromFile | AVideoFromFile | AQuickTimeFromFile | PCustomerDataList | PApplicationNonVisualDrawingPropertiesExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Is a Photo Album. Serialized as `:isPhoto` */
    get isPhoto(): BooleanValue | undefined;
    set isPhoto(v: BooleanValue | undefined);
    /** Is User Drawn. Serialized as `:userDrawn` */
    get userDrawn(): BooleanValue | undefined;
    set userDrawn(v: BooleanValue | undefined);
    /** Placeholder Shape. */
    get placeholderShape(): PPlaceholderShape | undefined;
}
/** Defines the NonVisualInkContentPartProperties Class. Serialized as `p14:cNvContentPartPr` */
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
/** Defines the NonVisualDrawingProperties Class. Serialized as `p14:cNvPr` */
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
/** Defines the ShowEventRecordList Class. Serialized as `p14:showEvtLst` */
export declare class ShowEventRecordList extends OxmlCompositeElement<TriggerEventRecord | PlayEventRecord | StopEventRecord | PauseEventRecord | ResumeEventRecord | SeekEventRecord | NullEventRecord> {
    static _Q: string;
    /** Returns TriggerEventRecord. */
    get triggerEventRecord(): TriggerEventRecord | undefined;
    /** Returns PlayEventRecord. */
    get playEventRecord(): PlayEventRecord | undefined;
    /** Returns StopEventRecord. */
    get stopEventRecord(): StopEventRecord | undefined;
    /** Returns PauseEventRecord. */
    get pauseEventRecord(): PauseEventRecord | undefined;
    /** Returns ResumeEventRecord. */
    get resumeEventRecord(): ResumeEventRecord | undefined;
    /** Returns SeekEventRecord. */
    get seekEventRecord(): SeekEventRecord | undefined;
    /** Returns NullEventRecord. */
    get nullEventRecord(): NullEventRecord | undefined;
}
/** Defines the RandomIdType Class. */
export declare abstract class RandomIdType extends OxmlLeafElement {
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): UInt32Value | undefined;
    set val(v: UInt32Value | undefined);
}
/** Defines the ModificationId Class. Serialized as `p14:modId` */
export declare class ModificationId extends RandomIdType {
    static _Q: string;
}
/** Defines the CreationId Class. Serialized as `p14:creationId` */
export declare class CreationId extends RandomIdType {
    static _Q: string;
}
/** Defines the LaserTraceList Class. Serialized as `p14:laserTraceLst` */
export declare class LaserTraceList extends OxmlCompositeElement<TracePointList> {
    static _Q: string;
}
/** Defines the ShowMediaControls Class. Serialized as `p14:showMediaCtrls` */
export declare class ShowMediaControls extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
/** Defines the DiscardImageEditData Class. Serialized as `p14:discardImageEditData` */
export declare class DiscardImageEditData extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): BooleanValue | undefined;
    set val(v: BooleanValue | undefined);
}
/** Defines the DefaultImageDpi Class. Serialized as `p14:defaultImageDpi` */
export declare class DefaultImageDpi extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** val. Serialized as `:val` */
    get val(): UInt32Value | undefined;
    set val(v: UInt32Value | undefined);
}
/** Defines the LaserColor Class. Serialized as `p14:laserClr` */
export declare class LaserColor extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {
    static _Q: string;
    /** RGB Color Model - Percentage Variant. */
    get rgbColorModelPercentage(): ARgbColorModelPercentage | undefined;
    /** RGB Color Model - Hex Variant. */
    get rgbColorModelHex(): ARgbColorModelHex | undefined;
    /** Hue, Saturation, Luminance Color Model. */
    get hslColor(): AHslColor | undefined;
    /** System Color. */
    get systemColor(): ASystemColor | undefined;
    /** Scheme Color. */
    get schemeColor(): ASchemeColor | undefined;
    /** Preset Color. */
    get presetColor(): APresetColor | undefined;
}
/** Defines the BrowseMode Class. Serialized as `p14:browseMode` */
export declare class BrowseMode extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** showStatus. Serialized as `:showStatus` */
    get showStatus(): BooleanValue | undefined;
    set showStatus(v: BooleanValue | undefined);
}
/** Defines the SectionList Class. Serialized as `p14:sectionLst` */
export declare class SectionList extends OxmlCompositeElement<Section> {
    static _Q: string;
}
/** Defines the SectionProperties Class. Serialized as `p14:sectionPr` */
export declare class SectionProperties extends OxmlCompositeElement<SectionOld> {
    static _Q: string;
}
/** Defines the BookmarkTarget Class. Serialized as `p14:bmkTgt` */
export declare class BookmarkTarget extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** spid. Serialized as `:spid` */
    get shapeId(): UInt32Value | undefined;
    set shapeId(v: UInt32Value | undefined);
    /** bmkName. Serialized as `:bmkName` */
    get bookmarkName(): StringValue | undefined;
    set bookmarkName(v: StringValue | undefined);
}
/** Defines the WheelReverseTransition Class. Serialized as `p14:wheelReverse` */
export declare class WheelReverseTransition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Spokes. Serialized as `:spokes` */
    get spokes(): UInt32Value | undefined;
    set spokes(v: UInt32Value | undefined);
}
/** Defines the RevealTransition Class. Serialized as `p14:reveal` */
export declare class RevealTransition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** thruBlk. Serialized as `:thruBlk` */
    get throughBlack(): BooleanValue | undefined;
    set throughBlack(v: BooleanValue | undefined);
    /** dir. Serialized as `:dir` */
    get direction(): TransitionLeftRightDirectionTypeValues | undefined;
    set direction(v: TransitionLeftRightDirectionTypeValues | undefined);
}
/** Defines the ShredTransition Class. Serialized as `p14:shred` */
export declare class ShredTransition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** pattern. Serialized as `:pattern` */
    get pattern(): TransitionShredPatternValues | undefined;
    set pattern(v: TransitionShredPatternValues | undefined);
    /** dir. Serialized as `:dir` */
    get direction(): TransitionInOutDirectionValues | undefined;
    set direction(v: TransitionInOutDirectionValues | undefined);
}
/** Defines the FlythroughTransition Class. Serialized as `p14:flythrough` */
export declare class FlythroughTransition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** dir. Serialized as `:dir` */
    get direction(): TransitionInOutDirectionValues | undefined;
    set direction(v: TransitionInOutDirectionValues | undefined);
    /** hasBounce. Serialized as `:hasBounce` */
    get hasBounce(): BooleanValue | undefined;
    set hasBounce(v: BooleanValue | undefined);
}
/** Defines the WarpTransition Class. Serialized as `p14:warp` */
export declare class WarpTransition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** Direction. Serialized as `:dir` */
    get direction(): TransitionInOutDirectionValues | undefined;
    set direction(v: TransitionInOutDirectionValues | undefined);
}
/** Defines the GlitterTransition Class. Serialized as `p14:glitter` */
export declare class GlitterTransition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** dir. Serialized as `:dir` */
    get direction(): TransitionSlideDirectionValues | undefined;
    set direction(v: TransitionSlideDirectionValues | undefined);
    /** pattern. Serialized as `:pattern` */
    get pattern(): TransitionPatternValues | undefined;
    set pattern(v: TransitionPatternValues | undefined);
}
/** Defines the OrientationTransitionType Class. */
export declare abstract class OrientationTransitionType extends OxmlLeafElement {
    static _A: string[];
    /** Transition Direction. Serialized as `:dir` */
    get direction(): DirectionValues | undefined;
    set direction(v: DirectionValues | undefined);
}
/** Defines the WindowTransition Class. Serialized as `p14:window` */
export declare class WindowTransition extends OrientationTransitionType {
    static _Q: string;
}
/** Defines the DoorsTransition Class. Serialized as `p14:doors` */
export declare class DoorsTransition extends OrientationTransitionType {
    static _Q: string;
}
/** Defines the PrismTransition Class. Serialized as `p14:prism` */
export declare class PrismTransition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** dir. Serialized as `:dir` */
    get direction(): TransitionSlideDirectionValues | undefined;
    set direction(v: TransitionSlideDirectionValues | undefined);
    /** isContent. Serialized as `:isContent` */
    get isContent(): BooleanValue | undefined;
    set isContent(v: BooleanValue | undefined);
    /** isInverted. Serialized as `:isInverted` */
    get isInverted(): BooleanValue | undefined;
    set isInverted(v: BooleanValue | undefined);
}
/** Defines the EmptyType Class. */
export declare abstract class EmptyType extends OxmlLeafElement {
}
/** Defines the FlashTransition Class. Serialized as `p14:flash` */
export declare class FlashTransition extends EmptyType {
    static _Q: string;
}
/** Defines the HoneycombTransition Class. Serialized as `p14:honeycomb` */
export declare class HoneycombTransition extends EmptyType {
    static _Q: string;
}
/** Defines the RippleTransition Class. Serialized as `p14:ripple` */
export declare class RippleTransition extends OxmlLeafElement {
    static _Q: string;
    static _A: string[];
    /** dir. Serialized as `:dir` */
    get direction(): StringValue | undefined;
    set direction(v: StringValue | undefined);
}
/** Defines the LeftRightDirectionTransitionType Class. */
export declare abstract class LeftRightDirectionTransitionType extends OxmlLeafElement {
    static _A: string[];
    /** dir. Serialized as `:dir` */
    get direction(): TransitionLeftRightDirectionTypeValues | undefined;
    set direction(v: TransitionLeftRightDirectionTypeValues | undefined);
}
/** Defines the ConveyorTransition Class. Serialized as `p14:conveyor` */
export declare class ConveyorTransition extends LeftRightDirectionTransitionType {
    static _Q: string;
}
/** Defines the GalleryTransition Class. Serialized as `p14:gallery` */
export declare class GalleryTransition extends LeftRightDirectionTransitionType {
    static _Q: string;
}
/** Defines the FerrisTransition Class. Serialized as `p14:ferris` */
export declare class FerrisTransition extends LeftRightDirectionTransitionType {
    static _Q: string;
}
/** Defines the FlipTransition Class. Serialized as `p14:flip` */
export declare class FlipTransition extends LeftRightDirectionTransitionType {
    static _Q: string;
}
/** Defines the SwitchTransition Class. Serialized as `p14:switch` */
export declare class SwitchTransition extends LeftRightDirectionTransitionType {
    static _Q: string;
}
/** Defines the SideDirectionTransitionType Class. */
export declare abstract class SideDirectionTransitionType extends OxmlLeafElement {
    static _A: string[];
    /** Direction. Serialized as `:dir` */
    get direction(): TransitionSlideDirectionValues | undefined;
    set direction(v: TransitionSlideDirectionValues | undefined);
}
/** Defines the PanTransition Class. Serialized as `p14:pan` */
export declare class PanTransition extends SideDirectionTransitionType {
    static _Q: string;
}
/** Defines the VortexTransition Class. Serialized as `p14:vortex` */
export declare class VortexTransition extends SideDirectionTransitionType {
    static _Q: string;
}
/** Defines the Media Class. Serialized as `p14:media` */
export declare class Media extends OxmlCompositeElement<MediaTrim | MediaFade | MediaBookmarkList | ExtensionList> {
    static _Q: string;
    static _A: string[];
    /** Embedded Picture Reference. Serialized as `r:embed` */
    get embed(): StringValue | undefined;
    set embed(v: StringValue | undefined);
    /** Linked Picture Reference. Serialized as `r:link` */
    get link(): StringValue | undefined;
    set link(v: StringValue | undefined);
    /** Returns MediaTrim. */
    get mediaTrim(): MediaTrim | undefined;
    /** Returns MediaFade. */
    get mediaFade(): MediaFade | undefined;
    /** Returns MediaBookmarkList. */
    get mediaBookmarkList(): MediaBookmarkList | undefined;
    /** Returns ExtensionList. */
    get extensionList(): ExtensionList | undefined;
}
/** Defines the ExtensionListModify Class. Serialized as `p14:extLst` */
export declare class ExtensionListModify extends OxmlCompositeElement<PExtension> {
    static _Q: string;
    static _A: string[];
    /** Modify. Serialized as `:mod` */
    get modify(): BooleanValue | undefined;
    set modify(v: BooleanValue | undefined);
}
/** Defines the Transform2D Class. Serialized as `p14:xfrm` */
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
/** Defines the NonVisualContentPartProperties Class. Serialized as `p14:nvContentPartPr` */
export declare class NonVisualContentPartProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualInkContentPartProperties | ApplicationNonVisualDrawingProperties> {
    static _Q: string;
    /** Returns NonVisualDrawingProperties. */
    get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined;
    /** Returns NonVisualInkContentPartProperties. */
    get nonVisualInkContentPartProperties(): NonVisualInkContentPartProperties | undefined;
    /** Returns ApplicationNonVisualDrawingProperties. */
    get applicationNonVisualDrawingProperties(): ApplicationNonVisualDrawingProperties | undefined;
}
export declare function initOffice2010PowerPointNamespace(): {
    prefix: string;
    xmlns: string;
};
