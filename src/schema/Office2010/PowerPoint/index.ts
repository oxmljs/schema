import { OxmlCompositeElement } from '../../../framework/OxmlCompositeElement';
import { OxmlLeafElement } from '../../../framework/OxmlLeafElement';
import { OxmlAttr } from '../../../framework/OxmlAttr';
import { OxmlType } from '../../../framework/OxmlType';
import { StringValue } from '../../../framework/types/StringValue';
import { UInt32Value } from '../../../framework/types/UInt32Value';
import { Int64Value } from '../../../framework/types/Int64Value';
import { ListValue } from '../../../framework/types/ListValue';
import { BooleanValue } from '../../../framework/types/BooleanValue';
import { Int32Value } from '../../../framework/types/Int32Value';
import { TriggerEventValues, TriggerEventValuesArray } from '../../Presentation';
import { TransitionInOutDirectionValues, TransitionInOutDirectionValuesArray } from '../../Presentation';
import { TransitionSlideDirectionValues, TransitionSlideDirectionValuesArray } from '../../Presentation';
import { DirectionValues, DirectionValuesArray } from '../../Presentation';import { Extension as PExtension } from '../../Presentation';
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


export enum TransitionPatternValues {
    /** undefined. Serialized value: `diamond` */
    Diamond = 'diamond',
    /** undefined. Serialized value: `hexagon` */
    Hexagon = 'hexagon',
}

export const TransitionPatternValuesArray = [
    TransitionPatternValues.Diamond,
    TransitionPatternValues.Hexagon,
] as const;

export enum TransitionCenterDirectionTypeValues {
    /** undefined. Serialized value: `center` */
    Center = 'center',
}

export const TransitionCenterDirectionTypeValuesArray = [
    TransitionCenterDirectionTypeValues.Center,
] as const;

export enum TransitionShredPatternValues {
    /** undefined. Serialized value: `strip` */
    Strip = 'strip',
    /** undefined. Serialized value: `rectangle` */
    Rectangle = 'rectangle',
}

export const TransitionShredPatternValuesArray = [
    TransitionShredPatternValues.Strip,
    TransitionShredPatternValues.Rectangle,
] as const;

export enum TransitionLeftRightDirectionTypeValues {
    /** undefined. Serialized value: `l` */
    Left = 'l',
    /** undefined. Serialized value: `r` */
    Right = 'r',
}

export const TransitionLeftRightDirectionTypeValuesArray = [
    TransitionLeftRightDirectionTypeValues.Left,
    TransitionLeftRightDirectionTypeValues.Right,
] as const;

/** Defines the NullEventRecord Class. Serialized as `p14:nullEvt` */
export class NullEventRecord extends OxmlLeafElement {

    public static override _Q = 'p14:nullEvt';
    public static override _A = [':time',':objId',];
    /** time. Serialized as `:time` */
    public get time(): StringValue | undefined { return this._g(':time'); }
    public set time(v: StringValue | undefined) { this._s(':time', v); }
    /** objId. Serialized as `:objId` */
    public get objectId(): UInt32Value | undefined { return this._g(':objId'); }
    public set objectId(v: UInt32Value | undefined) { this._s(':objId', v); }

}
/** Defines the SeekEventRecord Class. Serialized as `p14:seekEvt` */
export class SeekEventRecord extends OxmlLeafElement {

    public static override _Q = 'p14:seekEvt';
    public static override _A = [':time',':objId',':seek',];
    /** time. Serialized as `:time` */
    public get time(): StringValue | undefined { return this._g(':time'); }
    public set time(v: StringValue | undefined) { this._s(':time', v); }
    /** objId. Serialized as `:objId` */
    public get objectId(): UInt32Value | undefined { return this._g(':objId'); }
    public set objectId(v: UInt32Value | undefined) { this._s(':objId', v); }
    /** seek. Serialized as `:seek` */
    public get seek(): StringValue | undefined { return this._g(':seek'); }
    public set seek(v: StringValue | undefined) { this._s(':seek', v); }

}
/** Defines the MediaPlaybackEventRecordType Class. */
export abstract class MediaPlaybackEventRecordType extends OxmlLeafElement {

    public static override _A = [':time',':objId',];
    /** time. Serialized as `:time` */
    public get time(): StringValue | undefined { return this._g(':time'); }
    public set time(v: StringValue | undefined) { this._s(':time', v); }
    /** objId. Serialized as `:objId` */
    public get objectId(): UInt32Value | undefined { return this._g(':objId'); }
    public set objectId(v: UInt32Value | undefined) { this._s(':objId', v); }

}
/** Defines the ResumeEventRecord Class. Serialized as `p14:resumeEvt` */
export class ResumeEventRecord extends MediaPlaybackEventRecordType {

    public static override _Q = 'p14:resumeEvt';

}
/** Defines the PauseEventRecord Class. Serialized as `p14:pauseEvt` */
export class PauseEventRecord extends MediaPlaybackEventRecordType {

    public static override _Q = 'p14:pauseEvt';

}
/** Defines the StopEventRecord Class. Serialized as `p14:stopEvt` */
export class StopEventRecord extends MediaPlaybackEventRecordType {

    public static override _Q = 'p14:stopEvt';

}
/** Defines the PlayEventRecord Class. Serialized as `p14:playEvt` */
export class PlayEventRecord extends MediaPlaybackEventRecordType {

    public static override _Q = 'p14:playEvt';

}
/** Defines the TriggerEventRecord Class. Serialized as `p14:triggerEvt` */
export class TriggerEventRecord extends OxmlLeafElement {

    public static override _Q = 'p14:triggerEvt';
    public static override _A = [':type',':time',':objId',];
    /** type. Serialized as `:type` */
    public get type(): TriggerEventValues | undefined { return this._g(':type'); }
    public set type(v: TriggerEventValues | undefined) { this._s(':type', v); }
    /** time. Serialized as `:time` */
    public get time(): StringValue | undefined { return this._g(':time'); }
    public set time(v: StringValue | undefined) { this._s(':time', v); }
    /** objId. Serialized as `:objId` */
    public get objectId(): UInt32Value | undefined { return this._g(':objId'); }
    public set objectId(v: UInt32Value | undefined) { this._s(':objId', v); }

}
/** Defines the TracePointList Class. Serialized as `p14:tracePtLst` */
export class TracePointList extends OxmlCompositeElement<TracePoint> {

    public static override _Q = 'p14:tracePtLst';

}
/** Defines the TracePoint Class. Serialized as `p14:tracePt` */
export class TracePoint extends OxmlLeafElement {

    public static override _Q = 'p14:tracePt';
    public static override _A = [':t',':x',':y',];
    /** t. Serialized as `:t` */
    public get time(): StringValue | undefined { return this._g(':t'); }
    public set time(v: StringValue | undefined) { this._s(':t', v); }
    /** x. Serialized as `:x` */
    public get xCoordinate(): Int64Value | undefined { return this._g(':x'); }
    public set xCoordinate(v: Int64Value | undefined) { this._s(':x', v); }
    /** y. Serialized as `:y` */
    public get yCoordinate(): Int64Value | undefined { return this._g(':y'); }
    public set yCoordinate(v: Int64Value | undefined) { this._s(':y', v); }

}
/** Defines the Section Class. Serialized as `p14:section` */
export class Section extends OxmlCompositeElement<SectionSlideIdList | ExtensionList> {

    public static override _Q = 'p14:section';
    public static override _A = [':name',':id',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Returns SectionSlideIdList. */
    public get sectionSlideIdList(): SectionSlideIdList | undefined { return this._f(SectionSlideIdList); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the SectionSlideIdList Class. Serialized as `p14:sldIdLst` */
export class SectionSlideIdList extends OxmlCompositeElement<SectionSlideIdListEntry> {

    public static override _Q = 'p14:sldIdLst';

}
/** Defines the SectionSlideIdListEntry Class. Serialized as `p14:sldId` */
export class SectionSlideIdListEntry extends OxmlLeafElement {

    public static override _Q = 'p14:sldId';
    public static override _A = [':id',];
    /** id. Serialized as `:id` */
    public get id(): UInt32Value | undefined { return this._g(':id'); }
    public set id(v: UInt32Value | undefined) { this._s(':id', v); }

}
/** Defines the SectionOld Class. Serialized as `p14:section` */
export class SectionOld extends OxmlCompositeElement<ExtensionList> {

    public static override _Q = 'p14:section';
    public static override _A = [':name',':slideIdLst',':id',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** slideIdLst. Serialized as `:slideIdLst` */
    public get slideIdList(): ListValue<UInt32Value> | undefined { return this._g(':slideIdLst'); }
    public set slideIdList(v: ListValue<UInt32Value> | undefined) { this._s(':slideIdLst', v); }
    /** id. Serialized as `:id` */
    public get id(): StringValue | undefined { return this._g(':id'); }
    public set id(v: StringValue | undefined) { this._s(':id', v); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the ExtensionList Class. Serialized as `p14:extLst` */
export class ExtensionList extends OxmlCompositeElement<PExtension> {

    public static override _Q = 'p14:extLst';

}
/** Defines the MediaBookmarkList Class. Serialized as `p14:bmkLst` */
export class MediaBookmarkList extends OxmlCompositeElement<MediaBookmark> {

    public static override _Q = 'p14:bmkLst';

}
/** Defines the MediaFade Class. Serialized as `p14:fade` */
export class MediaFade extends OxmlLeafElement {

    public static override _Q = 'p14:fade';
    public static override _A = [':in',':out',];
    /** in. Serialized as `:in` */
    public get inDuration(): StringValue | undefined { return this._g(':in'); }
    public set inDuration(v: StringValue | undefined) { this._s(':in', v); }
    /** out. Serialized as `:out` */
    public get outDuration(): StringValue | undefined { return this._g(':out'); }
    public set outDuration(v: StringValue | undefined) { this._s(':out', v); }

}
/** Defines the MediaTrim Class. Serialized as `p14:trim` */
export class MediaTrim extends OxmlLeafElement {

    public static override _Q = 'p14:trim';
    public static override _A = [':st',':end',];
    /** st. Serialized as `:st` */
    public get start(): StringValue | undefined { return this._g(':st'); }
    public set start(v: StringValue | undefined) { this._s(':st', v); }
    /** end. Serialized as `:end` */
    public get end(): StringValue | undefined { return this._g(':end'); }
    public set end(v: StringValue | undefined) { this._s(':end', v); }

}
/** Defines the MediaBookmark Class. Serialized as `p14:bmk` */
export class MediaBookmark extends OxmlLeafElement {

    public static override _Q = 'p14:bmk';
    public static override _A = [':name',':time',];
    /** name. Serialized as `:name` */
    public get name(): StringValue | undefined { return this._g(':name'); }
    public set name(v: StringValue | undefined) { this._s(':name', v); }
    /** time. Serialized as `:time` */
    public get time(): StringValue | undefined { return this._g(':time'); }
    public set time(v: StringValue | undefined) { this._s(':time', v); }

}
/** Defines the ApplicationNonVisualDrawingProperties Class. Serialized as `p14:nvPr` */
export class ApplicationNonVisualDrawingProperties extends OxmlCompositeElement<PPlaceholderShape | AAudioFromCD | AWaveAudioFile | AAudioFromFile | AVideoFromFile | AQuickTimeFromFile | PCustomerDataList | PApplicationNonVisualDrawingPropertiesExtensionList> {

    public static override _Q = 'p14:nvPr';
    public static override _A = [':isPhoto',':userDrawn',];
    /** Is a Photo Album. Serialized as `:isPhoto` */
    public get isPhoto(): BooleanValue | undefined { return this._g(':isPhoto'); }
    public set isPhoto(v: BooleanValue | undefined) { this._s(':isPhoto', v); }
    /** Is User Drawn. Serialized as `:userDrawn` */
    public get userDrawn(): BooleanValue | undefined { return this._g(':userDrawn'); }
    public set userDrawn(v: BooleanValue | undefined) { this._s(':userDrawn', v); }
    /** Placeholder Shape. */
    public get placeholderShape(): PPlaceholderShape | undefined { return this._f(PPlaceholderShape); }

}
/** Defines the NonVisualInkContentPartProperties Class. Serialized as `p14:cNvContentPartPr` */
export class NonVisualInkContentPartProperties extends OxmlCompositeElement<A14ContentPartLocks | A14OfficeArtExtensionList> {

    public static override _Q = 'p14:cNvContentPartPr';
    public static override _A = [':isComment',];
    /** isComment. Serialized as `:isComment` */
    public get isComment(): BooleanValue | undefined { return this._g(':isComment'); }
    public set isComment(v: BooleanValue | undefined) { this._s(':isComment', v); }
    /** Returns A14ContentPartLocks. */
    public get contentPartLocks(): A14ContentPartLocks | undefined { return this._f(A14ContentPartLocks); }
    /** Returns A14OfficeArtExtensionList. */
    public get officeArtExtensionList(): A14OfficeArtExtensionList | undefined { return this._f(A14OfficeArtExtensionList); }

}
/** Defines the NonVisualDrawingProperties Class. Serialized as `p14:cNvPr` */
export class NonVisualDrawingProperties extends OxmlCompositeElement<AHyperlinkOnClick | AHyperlinkOnHover | ANonVisualDrawingPropertiesExtensionList> {

    public static override _Q = 'p14:cNvPr';
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
/** Defines the ShowEventRecordList Class. Serialized as `p14:showEvtLst` */
export class ShowEventRecordList extends OxmlCompositeElement<TriggerEventRecord | PlayEventRecord | StopEventRecord | PauseEventRecord | ResumeEventRecord | SeekEventRecord | NullEventRecord> {

    public static override _Q = 'p14:showEvtLst';
    /** Returns TriggerEventRecord. */
    public get triggerEventRecord(): TriggerEventRecord | undefined { return this._f(TriggerEventRecord); }
    /** Returns PlayEventRecord. */
    public get playEventRecord(): PlayEventRecord | undefined { return this._f(PlayEventRecord); }
    /** Returns StopEventRecord. */
    public get stopEventRecord(): StopEventRecord | undefined { return this._f(StopEventRecord); }
    /** Returns PauseEventRecord. */
    public get pauseEventRecord(): PauseEventRecord | undefined { return this._f(PauseEventRecord); }
    /** Returns ResumeEventRecord. */
    public get resumeEventRecord(): ResumeEventRecord | undefined { return this._f(ResumeEventRecord); }
    /** Returns SeekEventRecord. */
    public get seekEventRecord(): SeekEventRecord | undefined { return this._f(SeekEventRecord); }
    /** Returns NullEventRecord. */
    public get nullEventRecord(): NullEventRecord | undefined { return this._f(NullEventRecord); }

}
/** Defines the RandomIdType Class. */
export abstract class RandomIdType extends OxmlLeafElement {

    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): UInt32Value | undefined { return this._g(':val'); }
    public set val(v: UInt32Value | undefined) { this._s(':val', v); }

}
/** Defines the ModificationId Class. Serialized as `p14:modId` */
export class ModificationId extends RandomIdType {

    public static override _Q = 'p14:modId';

}
/** Defines the CreationId Class. Serialized as `p14:creationId` */
export class CreationId extends RandomIdType {

    public static override _Q = 'p14:creationId';

}
/** Defines the LaserTraceList Class. Serialized as `p14:laserTraceLst` */
export class LaserTraceList extends OxmlCompositeElement<TracePointList> {

    public static override _Q = 'p14:laserTraceLst';

}
/** Defines the ShowMediaControls Class. Serialized as `p14:showMediaCtrls` */
export class ShowMediaControls extends OxmlLeafElement {

    public static override _Q = 'p14:showMediaCtrls';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): BooleanValue | undefined { return this._g(':val'); }
    public set val(v: BooleanValue | undefined) { this._s(':val', v); }

}
/** Defines the DiscardImageEditData Class. Serialized as `p14:discardImageEditData` */
export class DiscardImageEditData extends OxmlLeafElement {

    public static override _Q = 'p14:discardImageEditData';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): BooleanValue | undefined { return this._g(':val'); }
    public set val(v: BooleanValue | undefined) { this._s(':val', v); }

}
/** Defines the DefaultImageDpi Class. Serialized as `p14:defaultImageDpi` */
export class DefaultImageDpi extends OxmlLeafElement {

    public static override _Q = 'p14:defaultImageDpi';
    public static override _A = [':val',];
    /** val. Serialized as `:val` */
    public get val(): UInt32Value | undefined { return this._g(':val'); }
    public set val(v: UInt32Value | undefined) { this._s(':val', v); }

}
/** Defines the LaserColor Class. Serialized as `p14:laserClr` */
export class LaserColor extends OxmlCompositeElement<ARgbColorModelPercentage | ARgbColorModelHex | AHslColor | ASystemColor | ASchemeColor | APresetColor> {

    public static override _Q = 'p14:laserClr';
    /** RGB Color Model - Percentage Variant. */
    public get rgbColorModelPercentage(): ARgbColorModelPercentage | undefined { return this._f(ARgbColorModelPercentage); }
    /** RGB Color Model - Hex Variant. */
    public get rgbColorModelHex(): ARgbColorModelHex | undefined { return this._f(ARgbColorModelHex); }
    /** Hue, Saturation, Luminance Color Model. */
    public get hslColor(): AHslColor | undefined { return this._f(AHslColor); }
    /** System Color. */
    public get systemColor(): ASystemColor | undefined { return this._f(ASystemColor); }
    /** Scheme Color. */
    public get schemeColor(): ASchemeColor | undefined { return this._f(ASchemeColor); }
    /** Preset Color. */
    public get presetColor(): APresetColor | undefined { return this._f(APresetColor); }

}
/** Defines the BrowseMode Class. Serialized as `p14:browseMode` */
export class BrowseMode extends OxmlLeafElement {

    public static override _Q = 'p14:browseMode';
    public static override _A = [':showStatus',];
    /** showStatus. Serialized as `:showStatus` */
    public get showStatus(): BooleanValue | undefined { return this._g(':showStatus'); }
    public set showStatus(v: BooleanValue | undefined) { this._s(':showStatus', v); }

}
/** Defines the SectionList Class. Serialized as `p14:sectionLst` */
export class SectionList extends OxmlCompositeElement<Section> {

    public static override _Q = 'p14:sectionLst';

}
/** Defines the SectionProperties Class. Serialized as `p14:sectionPr` */
export class SectionProperties extends OxmlCompositeElement<SectionOld> {

    public static override _Q = 'p14:sectionPr';

}
/** Defines the BookmarkTarget Class. Serialized as `p14:bmkTgt` */
export class BookmarkTarget extends OxmlLeafElement {

    public static override _Q = 'p14:bmkTgt';
    public static override _A = [':spid',':bmkName',];
    /** spid. Serialized as `:spid` */
    public get shapeId(): UInt32Value | undefined { return this._g(':spid'); }
    public set shapeId(v: UInt32Value | undefined) { this._s(':spid', v); }
    /** bmkName. Serialized as `:bmkName` */
    public get bookmarkName(): StringValue | undefined { return this._g(':bmkName'); }
    public set bookmarkName(v: StringValue | undefined) { this._s(':bmkName', v); }

}
/** Defines the WheelReverseTransition Class. Serialized as `p14:wheelReverse` */
export class WheelReverseTransition extends OxmlLeafElement {

    public static override _Q = 'p14:wheelReverse';
    public static override _A = [':spokes',];
    /** Spokes. Serialized as `:spokes` */
    public get spokes(): UInt32Value | undefined { return this._g(':spokes'); }
    public set spokes(v: UInt32Value | undefined) { this._s(':spokes', v); }

}
/** Defines the RevealTransition Class. Serialized as `p14:reveal` */
export class RevealTransition extends OxmlLeafElement {

    public static override _Q = 'p14:reveal';
    public static override _A = [':thruBlk',':dir',];
    /** thruBlk. Serialized as `:thruBlk` */
    public get throughBlack(): BooleanValue | undefined { return this._g(':thruBlk'); }
    public set throughBlack(v: BooleanValue | undefined) { this._s(':thruBlk', v); }
    /** dir. Serialized as `:dir` */
    public get direction(): TransitionLeftRightDirectionTypeValues | undefined { return this._g(':dir'); }
    public set direction(v: TransitionLeftRightDirectionTypeValues | undefined) { this._s(':dir', v); }

}
/** Defines the ShredTransition Class. Serialized as `p14:shred` */
export class ShredTransition extends OxmlLeafElement {

    public static override _Q = 'p14:shred';
    public static override _A = [':pattern',':dir',];
    /** pattern. Serialized as `:pattern` */
    public get pattern(): TransitionShredPatternValues | undefined { return this._g(':pattern'); }
    public set pattern(v: TransitionShredPatternValues | undefined) { this._s(':pattern', v); }
    /** dir. Serialized as `:dir` */
    public get direction(): TransitionInOutDirectionValues | undefined { return this._g(':dir'); }
    public set direction(v: TransitionInOutDirectionValues | undefined) { this._s(':dir', v); }

}
/** Defines the FlythroughTransition Class. Serialized as `p14:flythrough` */
export class FlythroughTransition extends OxmlLeafElement {

    public static override _Q = 'p14:flythrough';
    public static override _A = [':dir',':hasBounce',];
    /** dir. Serialized as `:dir` */
    public get direction(): TransitionInOutDirectionValues | undefined { return this._g(':dir'); }
    public set direction(v: TransitionInOutDirectionValues | undefined) { this._s(':dir', v); }
    /** hasBounce. Serialized as `:hasBounce` */
    public get hasBounce(): BooleanValue | undefined { return this._g(':hasBounce'); }
    public set hasBounce(v: BooleanValue | undefined) { this._s(':hasBounce', v); }

}
/** Defines the WarpTransition Class. Serialized as `p14:warp` */
export class WarpTransition extends OxmlLeafElement {

    public static override _Q = 'p14:warp';
    public static override _A = [':dir',];
    /** Direction. Serialized as `:dir` */
    public get direction(): TransitionInOutDirectionValues | undefined { return this._g(':dir'); }
    public set direction(v: TransitionInOutDirectionValues | undefined) { this._s(':dir', v); }

}
/** Defines the GlitterTransition Class. Serialized as `p14:glitter` */
export class GlitterTransition extends OxmlLeafElement {

    public static override _Q = 'p14:glitter';
    public static override _A = [':dir',':pattern',];
    /** dir. Serialized as `:dir` */
    public get direction(): TransitionSlideDirectionValues | undefined { return this._g(':dir'); }
    public set direction(v: TransitionSlideDirectionValues | undefined) { this._s(':dir', v); }
    /** pattern. Serialized as `:pattern` */
    public get pattern(): TransitionPatternValues | undefined { return this._g(':pattern'); }
    public set pattern(v: TransitionPatternValues | undefined) { this._s(':pattern', v); }

}
/** Defines the OrientationTransitionType Class. */
export abstract class OrientationTransitionType extends OxmlLeafElement {

    public static override _A = [':dir',];
    /** Transition Direction. Serialized as `:dir` */
    public get direction(): DirectionValues | undefined { return this._g(':dir'); }
    public set direction(v: DirectionValues | undefined) { this._s(':dir', v); }

}
/** Defines the WindowTransition Class. Serialized as `p14:window` */
export class WindowTransition extends OrientationTransitionType {

    public static override _Q = 'p14:window';

}
/** Defines the DoorsTransition Class. Serialized as `p14:doors` */
export class DoorsTransition extends OrientationTransitionType {

    public static override _Q = 'p14:doors';

}
/** Defines the PrismTransition Class. Serialized as `p14:prism` */
export class PrismTransition extends OxmlLeafElement {

    public static override _Q = 'p14:prism';
    public static override _A = [':dir',':isContent',':isInverted',];
    /** dir. Serialized as `:dir` */
    public get direction(): TransitionSlideDirectionValues | undefined { return this._g(':dir'); }
    public set direction(v: TransitionSlideDirectionValues | undefined) { this._s(':dir', v); }
    /** isContent. Serialized as `:isContent` */
    public get isContent(): BooleanValue | undefined { return this._g(':isContent'); }
    public set isContent(v: BooleanValue | undefined) { this._s(':isContent', v); }
    /** isInverted. Serialized as `:isInverted` */
    public get isInverted(): BooleanValue | undefined { return this._g(':isInverted'); }
    public set isInverted(v: BooleanValue | undefined) { this._s(':isInverted', v); }

}
/** Defines the EmptyType Class. */
export abstract class EmptyType extends OxmlLeafElement {


}
/** Defines the FlashTransition Class. Serialized as `p14:flash` */
export class FlashTransition extends EmptyType {

    public static override _Q = 'p14:flash';

}
/** Defines the HoneycombTransition Class. Serialized as `p14:honeycomb` */
export class HoneycombTransition extends EmptyType {

    public static override _Q = 'p14:honeycomb';

}
/** Defines the RippleTransition Class. Serialized as `p14:ripple` */
export class RippleTransition extends OxmlLeafElement {

    public static override _Q = 'p14:ripple';
    public static override _A = [':dir',];
    /** dir. Serialized as `:dir` */
    public get direction(): StringValue | undefined { return this._g(':dir'); }
    public set direction(v: StringValue | undefined) { this._s(':dir', v); }

}
/** Defines the LeftRightDirectionTransitionType Class. */
export abstract class LeftRightDirectionTransitionType extends OxmlLeafElement {

    public static override _A = [':dir',];
    /** dir. Serialized as `:dir` */
    public get direction(): TransitionLeftRightDirectionTypeValues | undefined { return this._g(':dir'); }
    public set direction(v: TransitionLeftRightDirectionTypeValues | undefined) { this._s(':dir', v); }

}
/** Defines the ConveyorTransition Class. Serialized as `p14:conveyor` */
export class ConveyorTransition extends LeftRightDirectionTransitionType {

    public static override _Q = 'p14:conveyor';

}
/** Defines the GalleryTransition Class. Serialized as `p14:gallery` */
export class GalleryTransition extends LeftRightDirectionTransitionType {

    public static override _Q = 'p14:gallery';

}
/** Defines the FerrisTransition Class. Serialized as `p14:ferris` */
export class FerrisTransition extends LeftRightDirectionTransitionType {

    public static override _Q = 'p14:ferris';

}
/** Defines the FlipTransition Class. Serialized as `p14:flip` */
export class FlipTransition extends LeftRightDirectionTransitionType {

    public static override _Q = 'p14:flip';

}
/** Defines the SwitchTransition Class. Serialized as `p14:switch` */
export class SwitchTransition extends LeftRightDirectionTransitionType {

    public static override _Q = 'p14:switch';

}
/** Defines the SideDirectionTransitionType Class. */
export abstract class SideDirectionTransitionType extends OxmlLeafElement {

    public static override _A = [':dir',];
    /** Direction. Serialized as `:dir` */
    public get direction(): TransitionSlideDirectionValues | undefined { return this._g(':dir'); }
    public set direction(v: TransitionSlideDirectionValues | undefined) { this._s(':dir', v); }

}
/** Defines the PanTransition Class. Serialized as `p14:pan` */
export class PanTransition extends SideDirectionTransitionType {

    public static override _Q = 'p14:pan';

}
/** Defines the VortexTransition Class. Serialized as `p14:vortex` */
export class VortexTransition extends SideDirectionTransitionType {

    public static override _Q = 'p14:vortex';

}
/** Defines the Media Class. Serialized as `p14:media` */
export class Media extends OxmlCompositeElement<MediaTrim | MediaFade | MediaBookmarkList | ExtensionList> {

    public static override _Q = 'p14:media';
    public static override _A = ['r:embed','r:link',];
    /** Embedded Picture Reference. Serialized as `r:embed` */
    public get embed(): StringValue | undefined { return this._g('r:embed'); }
    public set embed(v: StringValue | undefined) { this._s('r:embed', v); }
    /** Linked Picture Reference. Serialized as `r:link` */
    public get link(): StringValue | undefined { return this._g('r:link'); }
    public set link(v: StringValue | undefined) { this._s('r:link', v); }
    /** Returns MediaTrim. */
    public get mediaTrim(): MediaTrim | undefined { return this._f(MediaTrim); }
    /** Returns MediaFade. */
    public get mediaFade(): MediaFade | undefined { return this._f(MediaFade); }
    /** Returns MediaBookmarkList. */
    public get mediaBookmarkList(): MediaBookmarkList | undefined { return this._f(MediaBookmarkList); }
    /** Returns ExtensionList. */
    public get extensionList(): ExtensionList | undefined { return this._f(ExtensionList); }

}
/** Defines the ExtensionListModify Class. Serialized as `p14:extLst` */
export class ExtensionListModify extends OxmlCompositeElement<PExtension> {

    public static override _Q = 'p14:extLst';
    public static override _A = [':mod',];
    /** Modify. Serialized as `:mod` */
    public get modify(): BooleanValue | undefined { return this._g(':mod'); }
    public set modify(v: BooleanValue | undefined) { this._s(':mod', v); }

}
/** Defines the Transform2D Class. Serialized as `p14:xfrm` */
export class Transform2D extends OxmlCompositeElement<AOffset | AExtents> {

    public static override _Q = 'p14:xfrm';
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
/** Defines the NonVisualContentPartProperties Class. Serialized as `p14:nvContentPartPr` */
export class NonVisualContentPartProperties extends OxmlCompositeElement<NonVisualDrawingProperties | NonVisualInkContentPartProperties | ApplicationNonVisualDrawingProperties> {

    public static override _Q = 'p14:nvContentPartPr';
    /** Returns NonVisualDrawingProperties. */
    public get nonVisualDrawingProperties(): NonVisualDrawingProperties | undefined { return this._f(NonVisualDrawingProperties); }
    /** Returns NonVisualInkContentPartProperties. */
    public get nonVisualInkContentPartProperties(): NonVisualInkContentPartProperties | undefined { return this._f(NonVisualInkContentPartProperties); }
    /** Returns ApplicationNonVisualDrawingProperties. */
    public get applicationNonVisualDrawingProperties(): ApplicationNonVisualDrawingProperties | undefined { return this._f(ApplicationNonVisualDrawingProperties); }

}

export function initOffice2010PowerPointNamespace() {
    NullEventRecord._D = {
        ':time': new OxmlAttr(':time', OxmlType.StringValue),
        ':objId': new OxmlAttr(':objId', OxmlType.UInt32Value),
    };
    SeekEventRecord._D = {
        ':time': new OxmlAttr(':time', OxmlType.StringValue),
        ':objId': new OxmlAttr(':objId', OxmlType.UInt32Value),
        ':seek': new OxmlAttr(':seek', OxmlType.StringValue),
    };
    MediaPlaybackEventRecordType._D = {
        ':time': new OxmlAttr(':time', OxmlType.StringValue),
        ':objId': new OxmlAttr(':objId', OxmlType.UInt32Value),
    };
    TriggerEventRecord._D = {
        ':type': new OxmlAttr(':type', OxmlType.EnumValue, TriggerEventValuesArray),
        ':time': new OxmlAttr(':time', OxmlType.StringValue),
        ':objId': new OxmlAttr(':objId', OxmlType.UInt32Value),
    };
    TracePointList._C = {
        'p14:tracePt': TracePoint,
    };
    TracePoint._D = {
        ':t': new OxmlAttr(':t', OxmlType.StringValue),
        ':x': new OxmlAttr(':x', OxmlType.Int64Value),
        ':y': new OxmlAttr(':y', OxmlType.Int64Value),
    };
    Section._C = {
        'p14:sldIdLst': SectionSlideIdList,
        'p14:extLst': ExtensionList,
    };
    Section._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    SectionSlideIdList._C = {
        'p14:sldId': SectionSlideIdListEntry,
    };
    SectionSlideIdListEntry._D = {
        ':id': new OxmlAttr(':id', OxmlType.UInt32Value),
    };
    SectionOld._C = {
        'p14:extLst': ExtensionList,
    };
    SectionOld._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':slideIdLst': new OxmlAttr(':slideIdLst', OxmlType.ListValue),
        ':id': new OxmlAttr(':id', OxmlType.StringValue),
    };
    ExtensionList._C = {
        'p:ext': PExtension,
    };
    MediaBookmarkList._C = {
        'p14:bmk': MediaBookmark,
    };
    MediaFade._D = {
        ':in': new OxmlAttr(':in', OxmlType.StringValue),
        ':out': new OxmlAttr(':out', OxmlType.StringValue),
    };
    MediaTrim._D = {
        ':st': new OxmlAttr(':st', OxmlType.StringValue),
        ':end': new OxmlAttr(':end', OxmlType.StringValue),
    };
    MediaBookmark._D = {
        ':name': new OxmlAttr(':name', OxmlType.StringValue),
        ':time': new OxmlAttr(':time', OxmlType.StringValue),
    };
    ApplicationNonVisualDrawingProperties._C = {
        'p:ph': PPlaceholderShape,
        'a:audioCd': AAudioFromCD,
        'a:wavAudioFile': AWaveAudioFile,
        'a:audioFile': AAudioFromFile,
        'a:videoFile': AVideoFromFile,
        'a:quickTimeFile': AQuickTimeFromFile,
        'p:custDataLst': PCustomerDataList,
        'p:extLst': PApplicationNonVisualDrawingPropertiesExtensionList,
    };
    ApplicationNonVisualDrawingProperties._D = {
        ':isPhoto': new OxmlAttr(':isPhoto', OxmlType.BooleanValue),
        ':userDrawn': new OxmlAttr(':userDrawn', OxmlType.BooleanValue),
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
    ShowEventRecordList._C = {
        'p14:triggerEvt': TriggerEventRecord,
        'p14:playEvt': PlayEventRecord,
        'p14:stopEvt': StopEventRecord,
        'p14:pauseEvt': PauseEventRecord,
        'p14:resumeEvt': ResumeEventRecord,
        'p14:seekEvt': SeekEventRecord,
        'p14:nullEvt': NullEventRecord,
    };
    RandomIdType._D = {
        ':val': new OxmlAttr(':val', OxmlType.UInt32Value),
    };
    LaserTraceList._C = {
        'p14:tracePtLst': TracePointList,
    };
    ShowMediaControls._D = {
        ':val': new OxmlAttr(':val', OxmlType.BooleanValue),
    };
    DiscardImageEditData._D = {
        ':val': new OxmlAttr(':val', OxmlType.BooleanValue),
    };
    DefaultImageDpi._D = {
        ':val': new OxmlAttr(':val', OxmlType.UInt32Value),
    };
    LaserColor._C = {
        'a:scrgbClr': ARgbColorModelPercentage,
        'a:srgbClr': ARgbColorModelHex,
        'a:hslClr': AHslColor,
        'a:sysClr': ASystemColor,
        'a:schemeClr': ASchemeColor,
        'a:prstClr': APresetColor,
    };
    BrowseMode._D = {
        ':showStatus': new OxmlAttr(':showStatus', OxmlType.BooleanValue),
    };
    SectionList._C = {
        'p14:section': Section,
    };
    SectionProperties._C = {
        'p14:section': SectionOld,
    };
    BookmarkTarget._D = {
        ':spid': new OxmlAttr(':spid', OxmlType.UInt32Value),
        ':bmkName': new OxmlAttr(':bmkName', OxmlType.StringValue),
    };
    WheelReverseTransition._D = {
        ':spokes': new OxmlAttr(':spokes', OxmlType.UInt32Value),
    };
    RevealTransition._D = {
        ':thruBlk': new OxmlAttr(':thruBlk', OxmlType.BooleanValue),
        ':dir': new OxmlAttr(':dir', OxmlType.EnumValue, TransitionLeftRightDirectionTypeValuesArray),
    };
    ShredTransition._D = {
        ':pattern': new OxmlAttr(':pattern', OxmlType.EnumValue, TransitionShredPatternValuesArray),
        ':dir': new OxmlAttr(':dir', OxmlType.EnumValue, TransitionInOutDirectionValuesArray),
    };
    FlythroughTransition._D = {
        ':dir': new OxmlAttr(':dir', OxmlType.EnumValue, TransitionInOutDirectionValuesArray),
        ':hasBounce': new OxmlAttr(':hasBounce', OxmlType.BooleanValue),
    };
    WarpTransition._D = {
        ':dir': new OxmlAttr(':dir', OxmlType.EnumValue, TransitionInOutDirectionValuesArray),
    };
    GlitterTransition._D = {
        ':dir': new OxmlAttr(':dir', OxmlType.EnumValue, TransitionSlideDirectionValuesArray),
        ':pattern': new OxmlAttr(':pattern', OxmlType.EnumValue, TransitionPatternValuesArray),
    };
    OrientationTransitionType._D = {
        ':dir': new OxmlAttr(':dir', OxmlType.EnumValue, DirectionValuesArray),
    };
    PrismTransition._D = {
        ':dir': new OxmlAttr(':dir', OxmlType.EnumValue, TransitionSlideDirectionValuesArray),
        ':isContent': new OxmlAttr(':isContent', OxmlType.BooleanValue),
        ':isInverted': new OxmlAttr(':isInverted', OxmlType.BooleanValue),
    };
    RippleTransition._D = {
        ':dir': new OxmlAttr(':dir', OxmlType.StringValue),
    };
    LeftRightDirectionTransitionType._D = {
        ':dir': new OxmlAttr(':dir', OxmlType.EnumValue, TransitionLeftRightDirectionTypeValuesArray),
    };
    SideDirectionTransitionType._D = {
        ':dir': new OxmlAttr(':dir', OxmlType.EnumValue, TransitionSlideDirectionValuesArray),
    };
    Media._C = {
        'p14:trim': MediaTrim,
        'p14:fade': MediaFade,
        'p14:bmkLst': MediaBookmarkList,
        'p14:extLst': ExtensionList,
    };
    Media._D = {
        'r:embed': new OxmlAttr('r:embed', OxmlType.StringValue),
        'r:link': new OxmlAttr('r:link', OxmlType.StringValue),
    };
    ExtensionListModify._C = {
        'p:ext': PExtension,
    };
    ExtensionListModify._D = {
        ':mod': new OxmlAttr(':mod', OxmlType.BooleanValue),
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
    NonVisualContentPartProperties._C = {
        'p14:cNvPr': NonVisualDrawingProperties,
        'p14:cNvContentPartPr': NonVisualInkContentPartProperties,
        'p14:nvPr': ApplicationNonVisualDrawingProperties,
    };
    return {
        prefix: 'p14',
        xmlns: 'http://schemas.microsoft.com/office/powerpoint/2010/main',
    };
}
