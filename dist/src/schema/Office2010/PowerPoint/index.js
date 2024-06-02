import { OxmlCompositeElement } from "../../../framework/OxmlCompositeElement";
import { OxmlLeafElement } from "../../../framework/OxmlLeafElement";
import { OxmlAttr } from "../../../framework/OxmlAttr";
import { OxmlType } from "../../../framework/OxmlType";
import { TriggerEventValuesArray } from "../../Presentation";
import { TransitionInOutDirectionValuesArray } from "../../Presentation";
import { TransitionSlideDirectionValuesArray } from "../../Presentation";
import { DirectionValuesArray } from "../../Presentation";
import { Extension as PExtension } from "../../Presentation";
import { PlaceholderShape as PPlaceholderShape } from "../../Presentation";
import { AudioFromCD as AAudioFromCD } from "../../Drawing";
import { WaveAudioFile as AWaveAudioFile } from "../../Drawing";
import { AudioFromFile as AAudioFromFile } from "../../Drawing";
import { VideoFromFile as AVideoFromFile } from "../../Drawing";
import { QuickTimeFromFile as AQuickTimeFromFile } from "../../Drawing";
import { CustomerDataList as PCustomerDataList } from "../../Presentation";
import { ApplicationNonVisualDrawingPropertiesExtensionList as PApplicationNonVisualDrawingPropertiesExtensionList } from "../../Presentation";
import { ContentPartLocks as A14ContentPartLocks } from "../../Office2010/Drawing";
import { OfficeArtExtensionList as A14OfficeArtExtensionList } from "../../Office2010/Drawing";
import { HyperlinkOnClick as AHyperlinkOnClick } from "../../Drawing";
import { HyperlinkOnHover as AHyperlinkOnHover } from "../../Drawing";
import { NonVisualDrawingPropertiesExtensionList as ANonVisualDrawingPropertiesExtensionList } from "../../Drawing";
import { RgbColorModelPercentage as ARgbColorModelPercentage } from "../../Drawing";
import { RgbColorModelHex as ARgbColorModelHex } from "../../Drawing";
import { HslColor as AHslColor } from "../../Drawing";
import { SystemColor as ASystemColor } from "../../Drawing";
import { SchemeColor as ASchemeColor } from "../../Drawing";
import { PresetColor as APresetColor } from "../../Drawing";
import { Offset as AOffset } from "../../Drawing";
import { Extents as AExtents } from "../../Drawing";
var TransitionPatternValues = /* @__PURE__ */ ((TransitionPatternValues2) => {
  TransitionPatternValues2["Diamond"] = "diamond";
  TransitionPatternValues2["Hexagon"] = "hexagon";
  return TransitionPatternValues2;
})(TransitionPatternValues || {});
const TransitionPatternValuesArray = [
  "diamond" /* Diamond */,
  "hexagon" /* Hexagon */
];
var TransitionCenterDirectionTypeValues = /* @__PURE__ */ ((TransitionCenterDirectionTypeValues2) => {
  TransitionCenterDirectionTypeValues2["Center"] = "center";
  return TransitionCenterDirectionTypeValues2;
})(TransitionCenterDirectionTypeValues || {});
const TransitionCenterDirectionTypeValuesArray = [
  "center" /* Center */
];
var TransitionShredPatternValues = /* @__PURE__ */ ((TransitionShredPatternValues2) => {
  TransitionShredPatternValues2["Strip"] = "strip";
  TransitionShredPatternValues2["Rectangle"] = "rectangle";
  return TransitionShredPatternValues2;
})(TransitionShredPatternValues || {});
const TransitionShredPatternValuesArray = [
  "strip" /* Strip */,
  "rectangle" /* Rectangle */
];
var TransitionLeftRightDirectionTypeValues = /* @__PURE__ */ ((TransitionLeftRightDirectionTypeValues2) => {
  TransitionLeftRightDirectionTypeValues2["Left"] = "l";
  TransitionLeftRightDirectionTypeValues2["Right"] = "r";
  return TransitionLeftRightDirectionTypeValues2;
})(TransitionLeftRightDirectionTypeValues || {});
const TransitionLeftRightDirectionTypeValuesArray = [
  "l" /* Left */,
  "r" /* Right */
];
class NullEventRecord extends OxmlLeafElement {
  static _Q = "p14:nullEvt";
  static _A = [":time", ":objId"];
  /** time. Serialized as `:time` */
  get time() {
    return this._g(":time");
  }
  set time(v) {
    this._s(":time", v);
  }
  /** objId. Serialized as `:objId` */
  get objectId() {
    return this._g(":objId");
  }
  set objectId(v) {
    this._s(":objId", v);
  }
}
class SeekEventRecord extends OxmlLeafElement {
  static _Q = "p14:seekEvt";
  static _A = [":time", ":objId", ":seek"];
  /** time. Serialized as `:time` */
  get time() {
    return this._g(":time");
  }
  set time(v) {
    this._s(":time", v);
  }
  /** objId. Serialized as `:objId` */
  get objectId() {
    return this._g(":objId");
  }
  set objectId(v) {
    this._s(":objId", v);
  }
  /** seek. Serialized as `:seek` */
  get seek() {
    return this._g(":seek");
  }
  set seek(v) {
    this._s(":seek", v);
  }
}
class MediaPlaybackEventRecordType extends OxmlLeafElement {
  static _A = [":time", ":objId"];
  /** time. Serialized as `:time` */
  get time() {
    return this._g(":time");
  }
  set time(v) {
    this._s(":time", v);
  }
  /** objId. Serialized as `:objId` */
  get objectId() {
    return this._g(":objId");
  }
  set objectId(v) {
    this._s(":objId", v);
  }
}
class ResumeEventRecord extends MediaPlaybackEventRecordType {
  static _Q = "p14:resumeEvt";
}
class PauseEventRecord extends MediaPlaybackEventRecordType {
  static _Q = "p14:pauseEvt";
}
class StopEventRecord extends MediaPlaybackEventRecordType {
  static _Q = "p14:stopEvt";
}
class PlayEventRecord extends MediaPlaybackEventRecordType {
  static _Q = "p14:playEvt";
}
class TriggerEventRecord extends OxmlLeafElement {
  static _Q = "p14:triggerEvt";
  static _A = [":type", ":time", ":objId"];
  /** type. Serialized as `:type` */
  get type() {
    return this._g(":type");
  }
  set type(v) {
    this._s(":type", v);
  }
  /** time. Serialized as `:time` */
  get time() {
    return this._g(":time");
  }
  set time(v) {
    this._s(":time", v);
  }
  /** objId. Serialized as `:objId` */
  get objectId() {
    return this._g(":objId");
  }
  set objectId(v) {
    this._s(":objId", v);
  }
}
class TracePointList extends OxmlCompositeElement {
  static _Q = "p14:tracePtLst";
}
class TracePoint extends OxmlLeafElement {
  static _Q = "p14:tracePt";
  static _A = [":t", ":x", ":y"];
  /** t. Serialized as `:t` */
  get time() {
    return this._g(":t");
  }
  set time(v) {
    this._s(":t", v);
  }
  /** x. Serialized as `:x` */
  get xCoordinate() {
    return this._g(":x");
  }
  set xCoordinate(v) {
    this._s(":x", v);
  }
  /** y. Serialized as `:y` */
  get yCoordinate() {
    return this._g(":y");
  }
  set yCoordinate(v) {
    this._s(":y", v);
  }
}
class Section extends OxmlCompositeElement {
  static _Q = "p14:section";
  static _A = [":name", ":id"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Returns SectionSlideIdList. */
  get sectionSlideIdList() {
    return this._f(SectionSlideIdList);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class SectionSlideIdList extends OxmlCompositeElement {
  static _Q = "p14:sldIdLst";
}
class SectionSlideIdListEntry extends OxmlLeafElement {
  static _Q = "p14:sldId";
  static _A = [":id"];
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
}
class SectionOld extends OxmlCompositeElement {
  static _Q = "p14:section";
  static _A = [":name", ":slideIdLst", ":id"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** slideIdLst. Serialized as `:slideIdLst` */
  get slideIdList() {
    return this._g(":slideIdLst");
  }
  set slideIdList(v) {
    this._s(":slideIdLst", v);
  }
  /** id. Serialized as `:id` */
  get id() {
    return this._g(":id");
  }
  set id(v) {
    this._s(":id", v);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ExtensionList extends OxmlCompositeElement {
  static _Q = "p14:extLst";
}
class MediaBookmarkList extends OxmlCompositeElement {
  static _Q = "p14:bmkLst";
}
class MediaFade extends OxmlLeafElement {
  static _Q = "p14:fade";
  static _A = [":in", ":out"];
  /** in. Serialized as `:in` */
  get inDuration() {
    return this._g(":in");
  }
  set inDuration(v) {
    this._s(":in", v);
  }
  /** out. Serialized as `:out` */
  get outDuration() {
    return this._g(":out");
  }
  set outDuration(v) {
    this._s(":out", v);
  }
}
class MediaTrim extends OxmlLeafElement {
  static _Q = "p14:trim";
  static _A = [":st", ":end"];
  /** st. Serialized as `:st` */
  get start() {
    return this._g(":st");
  }
  set start(v) {
    this._s(":st", v);
  }
  /** end. Serialized as `:end` */
  get end() {
    return this._g(":end");
  }
  set end(v) {
    this._s(":end", v);
  }
}
class MediaBookmark extends OxmlLeafElement {
  static _Q = "p14:bmk";
  static _A = [":name", ":time"];
  /** name. Serialized as `:name` */
  get name() {
    return this._g(":name");
  }
  set name(v) {
    this._s(":name", v);
  }
  /** time. Serialized as `:time` */
  get time() {
    return this._g(":time");
  }
  set time(v) {
    this._s(":time", v);
  }
}
class ApplicationNonVisualDrawingProperties extends OxmlCompositeElement {
  static _Q = "p14:nvPr";
  static _A = [":isPhoto", ":userDrawn"];
  /** Is a Photo Album. Serialized as `:isPhoto` */
  get isPhoto() {
    return this._g(":isPhoto");
  }
  set isPhoto(v) {
    this._s(":isPhoto", v);
  }
  /** Is User Drawn. Serialized as `:userDrawn` */
  get userDrawn() {
    return this._g(":userDrawn");
  }
  set userDrawn(v) {
    this._s(":userDrawn", v);
  }
  /** Placeholder Shape. */
  get placeholderShape() {
    return this._f(PPlaceholderShape);
  }
}
class NonVisualInkContentPartProperties extends OxmlCompositeElement {
  static _Q = "p14:cNvContentPartPr";
  static _A = [":isComment"];
  /** isComment. Serialized as `:isComment` */
  get isComment() {
    return this._g(":isComment");
  }
  set isComment(v) {
    this._s(":isComment", v);
  }
  /** Returns A14ContentPartLocks. */
  get contentPartLocks() {
    return this._f(A14ContentPartLocks);
  }
  /** Returns A14OfficeArtExtensionList. */
  get officeArtExtensionList() {
    return this._f(A14OfficeArtExtensionList);
  }
}
class NonVisualDrawingProperties extends OxmlCompositeElement {
  static _Q = "p14:cNvPr";
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
    return this._f(AHyperlinkOnClick);
  }
  /** Hyperlink associated with hovering over the element.. */
  get hyperlinkOnHover() {
    return this._f(AHyperlinkOnHover);
  }
  /** Future extension. */
  get nonVisualDrawingPropertiesExtensionList() {
    return this._f(ANonVisualDrawingPropertiesExtensionList);
  }
}
class ShowEventRecordList extends OxmlCompositeElement {
  static _Q = "p14:showEvtLst";
  /** Returns TriggerEventRecord. */
  get triggerEventRecord() {
    return this._f(TriggerEventRecord);
  }
  /** Returns PlayEventRecord. */
  get playEventRecord() {
    return this._f(PlayEventRecord);
  }
  /** Returns StopEventRecord. */
  get stopEventRecord() {
    return this._f(StopEventRecord);
  }
  /** Returns PauseEventRecord. */
  get pauseEventRecord() {
    return this._f(PauseEventRecord);
  }
  /** Returns ResumeEventRecord. */
  get resumeEventRecord() {
    return this._f(ResumeEventRecord);
  }
  /** Returns SeekEventRecord. */
  get seekEventRecord() {
    return this._f(SeekEventRecord);
  }
  /** Returns NullEventRecord. */
  get nullEventRecord() {
    return this._f(NullEventRecord);
  }
}
class RandomIdType extends OxmlLeafElement {
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class ModificationId extends RandomIdType {
  static _Q = "p14:modId";
}
class CreationId extends RandomIdType {
  static _Q = "p14:creationId";
}
class LaserTraceList extends OxmlCompositeElement {
  static _Q = "p14:laserTraceLst";
}
class ShowMediaControls extends OxmlLeafElement {
  static _Q = "p14:showMediaCtrls";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class DiscardImageEditData extends OxmlLeafElement {
  static _Q = "p14:discardImageEditData";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class DefaultImageDpi extends OxmlLeafElement {
  static _Q = "p14:defaultImageDpi";
  static _A = [":val"];
  /** val. Serialized as `:val` */
  get val() {
    return this._g(":val");
  }
  set val(v) {
    this._s(":val", v);
  }
}
class LaserColor extends OxmlCompositeElement {
  static _Q = "p14:laserClr";
  /** RGB Color Model - Percentage Variant. */
  get rgbColorModelPercentage() {
    return this._f(ARgbColorModelPercentage);
  }
  /** RGB Color Model - Hex Variant. */
  get rgbColorModelHex() {
    return this._f(ARgbColorModelHex);
  }
  /** Hue, Saturation, Luminance Color Model. */
  get hslColor() {
    return this._f(AHslColor);
  }
  /** System Color. */
  get systemColor() {
    return this._f(ASystemColor);
  }
  /** Scheme Color. */
  get schemeColor() {
    return this._f(ASchemeColor);
  }
  /** Preset Color. */
  get presetColor() {
    return this._f(APresetColor);
  }
}
class BrowseMode extends OxmlLeafElement {
  static _Q = "p14:browseMode";
  static _A = [":showStatus"];
  /** showStatus. Serialized as `:showStatus` */
  get showStatus() {
    return this._g(":showStatus");
  }
  set showStatus(v) {
    this._s(":showStatus", v);
  }
}
class SectionList extends OxmlCompositeElement {
  static _Q = "p14:sectionLst";
}
class SectionProperties extends OxmlCompositeElement {
  static _Q = "p14:sectionPr";
}
class BookmarkTarget extends OxmlLeafElement {
  static _Q = "p14:bmkTgt";
  static _A = [":spid", ":bmkName"];
  /** spid. Serialized as `:spid` */
  get shapeId() {
    return this._g(":spid");
  }
  set shapeId(v) {
    this._s(":spid", v);
  }
  /** bmkName. Serialized as `:bmkName` */
  get bookmarkName() {
    return this._g(":bmkName");
  }
  set bookmarkName(v) {
    this._s(":bmkName", v);
  }
}
class WheelReverseTransition extends OxmlLeafElement {
  static _Q = "p14:wheelReverse";
  static _A = [":spokes"];
  /** Spokes. Serialized as `:spokes` */
  get spokes() {
    return this._g(":spokes");
  }
  set spokes(v) {
    this._s(":spokes", v);
  }
}
class RevealTransition extends OxmlLeafElement {
  static _Q = "p14:reveal";
  static _A = [":thruBlk", ":dir"];
  /** thruBlk. Serialized as `:thruBlk` */
  get throughBlack() {
    return this._g(":thruBlk");
  }
  set throughBlack(v) {
    this._s(":thruBlk", v);
  }
  /** dir. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
}
class ShredTransition extends OxmlLeafElement {
  static _Q = "p14:shred";
  static _A = [":pattern", ":dir"];
  /** pattern. Serialized as `:pattern` */
  get pattern() {
    return this._g(":pattern");
  }
  set pattern(v) {
    this._s(":pattern", v);
  }
  /** dir. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
}
class FlythroughTransition extends OxmlLeafElement {
  static _Q = "p14:flythrough";
  static _A = [":dir", ":hasBounce"];
  /** dir. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
  /** hasBounce. Serialized as `:hasBounce` */
  get hasBounce() {
    return this._g(":hasBounce");
  }
  set hasBounce(v) {
    this._s(":hasBounce", v);
  }
}
class WarpTransition extends OxmlLeafElement {
  static _Q = "p14:warp";
  static _A = [":dir"];
  /** Direction. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
}
class GlitterTransition extends OxmlLeafElement {
  static _Q = "p14:glitter";
  static _A = [":dir", ":pattern"];
  /** dir. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
  /** pattern. Serialized as `:pattern` */
  get pattern() {
    return this._g(":pattern");
  }
  set pattern(v) {
    this._s(":pattern", v);
  }
}
class OrientationTransitionType extends OxmlLeafElement {
  static _A = [":dir"];
  /** Transition Direction. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
}
class WindowTransition extends OrientationTransitionType {
  static _Q = "p14:window";
}
class DoorsTransition extends OrientationTransitionType {
  static _Q = "p14:doors";
}
class PrismTransition extends OxmlLeafElement {
  static _Q = "p14:prism";
  static _A = [":dir", ":isContent", ":isInverted"];
  /** dir. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
  /** isContent. Serialized as `:isContent` */
  get isContent() {
    return this._g(":isContent");
  }
  set isContent(v) {
    this._s(":isContent", v);
  }
  /** isInverted. Serialized as `:isInverted` */
  get isInverted() {
    return this._g(":isInverted");
  }
  set isInverted(v) {
    this._s(":isInverted", v);
  }
}
class EmptyType extends OxmlLeafElement {
}
class FlashTransition extends EmptyType {
  static _Q = "p14:flash";
}
class HoneycombTransition extends EmptyType {
  static _Q = "p14:honeycomb";
}
class RippleTransition extends OxmlLeafElement {
  static _Q = "p14:ripple";
  static _A = [":dir"];
  /** dir. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
}
class LeftRightDirectionTransitionType extends OxmlLeafElement {
  static _A = [":dir"];
  /** dir. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
}
class ConveyorTransition extends LeftRightDirectionTransitionType {
  static _Q = "p14:conveyor";
}
class GalleryTransition extends LeftRightDirectionTransitionType {
  static _Q = "p14:gallery";
}
class FerrisTransition extends LeftRightDirectionTransitionType {
  static _Q = "p14:ferris";
}
class FlipTransition extends LeftRightDirectionTransitionType {
  static _Q = "p14:flip";
}
class SwitchTransition extends LeftRightDirectionTransitionType {
  static _Q = "p14:switch";
}
class SideDirectionTransitionType extends OxmlLeafElement {
  static _A = [":dir"];
  /** Direction. Serialized as `:dir` */
  get direction() {
    return this._g(":dir");
  }
  set direction(v) {
    this._s(":dir", v);
  }
}
class PanTransition extends SideDirectionTransitionType {
  static _Q = "p14:pan";
}
class VortexTransition extends SideDirectionTransitionType {
  static _Q = "p14:vortex";
}
class Media extends OxmlCompositeElement {
  static _Q = "p14:media";
  static _A = ["r:embed", "r:link"];
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
  /** Returns MediaTrim. */
  get mediaTrim() {
    return this._f(MediaTrim);
  }
  /** Returns MediaFade. */
  get mediaFade() {
    return this._f(MediaFade);
  }
  /** Returns MediaBookmarkList. */
  get mediaBookmarkList() {
    return this._f(MediaBookmarkList);
  }
  /** Returns ExtensionList. */
  get extensionList() {
    return this._f(ExtensionList);
  }
}
class ExtensionListModify extends OxmlCompositeElement {
  static _Q = "p14:extLst";
  static _A = [":mod"];
  /** Modify. Serialized as `:mod` */
  get modify() {
    return this._g(":mod");
  }
  set modify(v) {
    this._s(":mod", v);
  }
}
class Transform2D extends OxmlCompositeElement {
  static _Q = "p14:xfrm";
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
    return this._f(AOffset);
  }
  /** Extents. */
  get extents() {
    return this._f(AExtents);
  }
}
class NonVisualContentPartProperties extends OxmlCompositeElement {
  static _Q = "p14:nvContentPartPr";
  /** Returns NonVisualDrawingProperties. */
  get nonVisualDrawingProperties() {
    return this._f(NonVisualDrawingProperties);
  }
  /** Returns NonVisualInkContentPartProperties. */
  get nonVisualInkContentPartProperties() {
    return this._f(NonVisualInkContentPartProperties);
  }
  /** Returns ApplicationNonVisualDrawingProperties. */
  get applicationNonVisualDrawingProperties() {
    return this._f(ApplicationNonVisualDrawingProperties);
  }
}
function initOffice2010PowerPointNamespace() {
  NullEventRecord._D = {
    ":time": new OxmlAttr(":time", OxmlType.StringValue),
    ":objId": new OxmlAttr(":objId", OxmlType.UInt32Value)
  };
  SeekEventRecord._D = {
    ":time": new OxmlAttr(":time", OxmlType.StringValue),
    ":objId": new OxmlAttr(":objId", OxmlType.UInt32Value),
    ":seek": new OxmlAttr(":seek", OxmlType.StringValue)
  };
  MediaPlaybackEventRecordType._D = {
    ":time": new OxmlAttr(":time", OxmlType.StringValue),
    ":objId": new OxmlAttr(":objId", OxmlType.UInt32Value)
  };
  TriggerEventRecord._D = {
    ":type": new OxmlAttr(":type", OxmlType.EnumValue, TriggerEventValuesArray),
    ":time": new OxmlAttr(":time", OxmlType.StringValue),
    ":objId": new OxmlAttr(":objId", OxmlType.UInt32Value)
  };
  TracePointList._C = {
    "p14:tracePt": TracePoint
  };
  TracePoint._D = {
    ":t": new OxmlAttr(":t", OxmlType.StringValue),
    ":x": new OxmlAttr(":x", OxmlType.Int64Value),
    ":y": new OxmlAttr(":y", OxmlType.Int64Value)
  };
  Section._C = {
    "p14:sldIdLst": SectionSlideIdList,
    "p14:extLst": ExtensionList
  };
  Section._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  SectionSlideIdList._C = {
    "p14:sldId": SectionSlideIdListEntry
  };
  SectionSlideIdListEntry._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value)
  };
  SectionOld._C = {
    "p14:extLst": ExtensionList
  };
  SectionOld._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":slideIdLst": new OxmlAttr(":slideIdLst", OxmlType.ListValue),
    ":id": new OxmlAttr(":id", OxmlType.StringValue)
  };
  ExtensionList._C = {
    "p:ext": PExtension
  };
  MediaBookmarkList._C = {
    "p14:bmk": MediaBookmark
  };
  MediaFade._D = {
    ":in": new OxmlAttr(":in", OxmlType.StringValue),
    ":out": new OxmlAttr(":out", OxmlType.StringValue)
  };
  MediaTrim._D = {
    ":st": new OxmlAttr(":st", OxmlType.StringValue),
    ":end": new OxmlAttr(":end", OxmlType.StringValue)
  };
  MediaBookmark._D = {
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":time": new OxmlAttr(":time", OxmlType.StringValue)
  };
  ApplicationNonVisualDrawingProperties._C = {
    "p:ph": PPlaceholderShape,
    "a:audioCd": AAudioFromCD,
    "a:wavAudioFile": AWaveAudioFile,
    "a:audioFile": AAudioFromFile,
    "a:videoFile": AVideoFromFile,
    "a:quickTimeFile": AQuickTimeFromFile,
    "p:custDataLst": PCustomerDataList,
    "p:extLst": PApplicationNonVisualDrawingPropertiesExtensionList
  };
  ApplicationNonVisualDrawingProperties._D = {
    ":isPhoto": new OxmlAttr(":isPhoto", OxmlType.BooleanValue),
    ":userDrawn": new OxmlAttr(":userDrawn", OxmlType.BooleanValue)
  };
  NonVisualInkContentPartProperties._C = {
    "a14:cpLocks": A14ContentPartLocks,
    "a14:extLst": A14OfficeArtExtensionList
  };
  NonVisualInkContentPartProperties._D = {
    ":isComment": new OxmlAttr(":isComment", OxmlType.BooleanValue)
  };
  NonVisualDrawingProperties._C = {
    "a:hlinkClick": AHyperlinkOnClick,
    "a:hlinkHover": AHyperlinkOnHover,
    "a:extLst": ANonVisualDrawingPropertiesExtensionList
  };
  NonVisualDrawingProperties._D = {
    ":id": new OxmlAttr(":id", OxmlType.UInt32Value),
    ":name": new OxmlAttr(":name", OxmlType.StringValue),
    ":descr": new OxmlAttr(":descr", OxmlType.StringValue),
    ":hidden": new OxmlAttr(":hidden", OxmlType.BooleanValue),
    ":title": new OxmlAttr(":title", OxmlType.StringValue)
  };
  ShowEventRecordList._C = {
    "p14:triggerEvt": TriggerEventRecord,
    "p14:playEvt": PlayEventRecord,
    "p14:stopEvt": StopEventRecord,
    "p14:pauseEvt": PauseEventRecord,
    "p14:resumeEvt": ResumeEventRecord,
    "p14:seekEvt": SeekEventRecord,
    "p14:nullEvt": NullEventRecord
  };
  RandomIdType._D = {
    ":val": new OxmlAttr(":val", OxmlType.UInt32Value)
  };
  LaserTraceList._C = {
    "p14:tracePtLst": TracePointList
  };
  ShowMediaControls._D = {
    ":val": new OxmlAttr(":val", OxmlType.BooleanValue)
  };
  DiscardImageEditData._D = {
    ":val": new OxmlAttr(":val", OxmlType.BooleanValue)
  };
  DefaultImageDpi._D = {
    ":val": new OxmlAttr(":val", OxmlType.UInt32Value)
  };
  LaserColor._C = {
    "a:scrgbClr": ARgbColorModelPercentage,
    "a:srgbClr": ARgbColorModelHex,
    "a:hslClr": AHslColor,
    "a:sysClr": ASystemColor,
    "a:schemeClr": ASchemeColor,
    "a:prstClr": APresetColor
  };
  BrowseMode._D = {
    ":showStatus": new OxmlAttr(":showStatus", OxmlType.BooleanValue)
  };
  SectionList._C = {
    "p14:section": Section
  };
  SectionProperties._C = {
    "p14:section": SectionOld
  };
  BookmarkTarget._D = {
    ":spid": new OxmlAttr(":spid", OxmlType.UInt32Value),
    ":bmkName": new OxmlAttr(":bmkName", OxmlType.StringValue)
  };
  WheelReverseTransition._D = {
    ":spokes": new OxmlAttr(":spokes", OxmlType.UInt32Value)
  };
  RevealTransition._D = {
    ":thruBlk": new OxmlAttr(":thruBlk", OxmlType.BooleanValue),
    ":dir": new OxmlAttr(":dir", OxmlType.EnumValue, TransitionLeftRightDirectionTypeValuesArray)
  };
  ShredTransition._D = {
    ":pattern": new OxmlAttr(":pattern", OxmlType.EnumValue, TransitionShredPatternValuesArray),
    ":dir": new OxmlAttr(":dir", OxmlType.EnumValue, TransitionInOutDirectionValuesArray)
  };
  FlythroughTransition._D = {
    ":dir": new OxmlAttr(":dir", OxmlType.EnumValue, TransitionInOutDirectionValuesArray),
    ":hasBounce": new OxmlAttr(":hasBounce", OxmlType.BooleanValue)
  };
  WarpTransition._D = {
    ":dir": new OxmlAttr(":dir", OxmlType.EnumValue, TransitionInOutDirectionValuesArray)
  };
  GlitterTransition._D = {
    ":dir": new OxmlAttr(":dir", OxmlType.EnumValue, TransitionSlideDirectionValuesArray),
    ":pattern": new OxmlAttr(":pattern", OxmlType.EnumValue, TransitionPatternValuesArray)
  };
  OrientationTransitionType._D = {
    ":dir": new OxmlAttr(":dir", OxmlType.EnumValue, DirectionValuesArray)
  };
  PrismTransition._D = {
    ":dir": new OxmlAttr(":dir", OxmlType.EnumValue, TransitionSlideDirectionValuesArray),
    ":isContent": new OxmlAttr(":isContent", OxmlType.BooleanValue),
    ":isInverted": new OxmlAttr(":isInverted", OxmlType.BooleanValue)
  };
  RippleTransition._D = {
    ":dir": new OxmlAttr(":dir", OxmlType.StringValue)
  };
  LeftRightDirectionTransitionType._D = {
    ":dir": new OxmlAttr(":dir", OxmlType.EnumValue, TransitionLeftRightDirectionTypeValuesArray)
  };
  SideDirectionTransitionType._D = {
    ":dir": new OxmlAttr(":dir", OxmlType.EnumValue, TransitionSlideDirectionValuesArray)
  };
  Media._C = {
    "p14:trim": MediaTrim,
    "p14:fade": MediaFade,
    "p14:bmkLst": MediaBookmarkList,
    "p14:extLst": ExtensionList
  };
  Media._D = {
    "r:embed": new OxmlAttr("r:embed", OxmlType.StringValue),
    "r:link": new OxmlAttr("r:link", OxmlType.StringValue)
  };
  ExtensionListModify._C = {
    "p:ext": PExtension
  };
  ExtensionListModify._D = {
    ":mod": new OxmlAttr(":mod", OxmlType.BooleanValue)
  };
  Transform2D._C = {
    "a:off": AOffset,
    "a:ext": AExtents
  };
  Transform2D._D = {
    ":rot": new OxmlAttr(":rot", OxmlType.Int32Value),
    ":flipH": new OxmlAttr(":flipH", OxmlType.BooleanValue),
    ":flipV": new OxmlAttr(":flipV", OxmlType.BooleanValue)
  };
  NonVisualContentPartProperties._C = {
    "p14:cNvPr": NonVisualDrawingProperties,
    "p14:cNvContentPartPr": NonVisualInkContentPartProperties,
    "p14:nvPr": ApplicationNonVisualDrawingProperties
  };
  return {
    prefix: "p14",
    xmlns: "http://schemas.microsoft.com/office/powerpoint/2010/main"
  };
}
export {
  ApplicationNonVisualDrawingProperties,
  BookmarkTarget,
  BrowseMode,
  ConveyorTransition,
  CreationId,
  DefaultImageDpi,
  DiscardImageEditData,
  DoorsTransition,
  EmptyType,
  ExtensionList,
  ExtensionListModify,
  FerrisTransition,
  FlashTransition,
  FlipTransition,
  FlythroughTransition,
  GalleryTransition,
  GlitterTransition,
  HoneycombTransition,
  LaserColor,
  LaserTraceList,
  LeftRightDirectionTransitionType,
  Media,
  MediaBookmark,
  MediaBookmarkList,
  MediaFade,
  MediaPlaybackEventRecordType,
  MediaTrim,
  ModificationId,
  NonVisualContentPartProperties,
  NonVisualDrawingProperties,
  NonVisualInkContentPartProperties,
  NullEventRecord,
  OrientationTransitionType,
  PanTransition,
  PauseEventRecord,
  PlayEventRecord,
  PrismTransition,
  RandomIdType,
  ResumeEventRecord,
  RevealTransition,
  RippleTransition,
  Section,
  SectionList,
  SectionOld,
  SectionProperties,
  SectionSlideIdList,
  SectionSlideIdListEntry,
  SeekEventRecord,
  ShowEventRecordList,
  ShowMediaControls,
  ShredTransition,
  SideDirectionTransitionType,
  StopEventRecord,
  SwitchTransition,
  TracePoint,
  TracePointList,
  Transform2D,
  TransitionCenterDirectionTypeValues,
  TransitionCenterDirectionTypeValuesArray,
  TransitionLeftRightDirectionTypeValues,
  TransitionLeftRightDirectionTypeValuesArray,
  TransitionPatternValues,
  TransitionPatternValuesArray,
  TransitionShredPatternValues,
  TransitionShredPatternValuesArray,
  TriggerEventRecord,
  VortexTransition,
  WarpTransition,
  WheelReverseTransition,
  WindowTransition,
  initOffice2010PowerPointNamespace
};
